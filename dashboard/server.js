const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { marked } = require('marked');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.DASHBOARD_PORT || 3000;
const REPO = path.join(__dirname, '..');
const PASSWORD = process.env.DASHBOARD_PASSWORD || 'rwo2026';
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'rwo-gtm-secret-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 12 * 60 * 60 * 1000 }
}));

function requireAuth(req, res, next) {
  if (req.session.authenticated) return next();
  res.status(401).json({ error: 'Unauthorized' });
}

// --- Helpers ---

function getLatestFile(dir, pattern) {
  try {
    const files = fs.readdirSync(dir)
      .filter(f => f.includes(pattern) && f.endsWith('.md'))
      .sort()
      .reverse();
    return files[0] ? path.join(dir, files[0]) : null;
  } catch { return null; }
}

function readFile(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return null; }
}

function getFileMtime(filePath) {
  try { return fs.statSync(filePath).mtime; } catch { return null; }
}

function getAgentStatus() {
  const agents = [
    { name: 'Account Monitor', dir: path.join(REPO, 'signals/accounts'), pattern: 'daily-digest' },
    { name: 'Content Intel', dir: path.join(REPO, 'signals/content'), pattern: 'daily-intel' },
    { name: 'Competitor Intel', dir: path.join(REPO, 'outputs/competitor'), pattern: 'weekly-report' },
    { name: 'Orchestrator', dir: path.join(REPO, 'outputs/briefings'), pattern: 'daily' },
  ];

  return agents.map(agent => {
    const file = getLatestFile(agent.dir, agent.pattern);
    const mtime = file ? getFileMtime(file) : null;
    const now = Date.now();
    const ageHours = mtime ? (now - mtime.getTime()) / (1000 * 60 * 60) : null;
    let status = 'never';
    if (ageHours !== null) {
      if (ageHours < 25) status = 'ok';
      else if (ageHours < 72) status = 'stale';
      else status = 'old';
    }
    return {
      name: agent.name,
      lastRun: mtime ? mtime.toISOString() : null,
      status
    };
  });
}

function getSignals() {
  const dir = path.join(REPO, 'signals/accounts');
  const file = getLatestFile(dir, 'daily-digest');
  if (!file) return { p1: [], p2: [], p3: [], date: null };

  const content = readFile(file);
  if (!content) return { p1: [], p2: [], p3: [], date: null };

  const date = path.basename(file).replace('daily-digest-', '').replace('.md', '');

  // Extract P1/P2/P3 sections
  function extractSection(text, heading) {
    const regex = new RegExp(`## ${heading}[\\s\\S]*?(?=\\n## |$)`, 'i');
    const match = text.match(regex);
    if (!match) return [];
    // Extract ### subsections
    const items = [];
    const subRegex = /### (.+?)\n([\s\S]*?)(?=\n### |\n## |$)/g;
    let m;
    while ((m = subRegex.exec(match[0])) !== null) {
      items.push({ account: m[1].trim(), detail: m[2].trim() });
    }
    return items;
  }

  return {
    date,
    p1: extractSection(content, 'P1 — Critical Signals.*'),
    p2: extractSection(content, 'P2 — High Priority Signals.*'),
    p3: extractSection(content, 'P3 — Engagement Opportunities.*'),
  };
}

function getContentQueue() {
  const dir = path.join(REPO, 'outputs/content/drafts');
  try {
    const files = fs.readdirSync(dir)
      .filter(f => f.endsWith('.md') && f !== '.gitkeep')
      .sort()
      .reverse()
      .slice(0, 10);

    return files.map(f => {
      const content = readFile(path.join(dir, f)) || '';
      const titleMatch = content.match(/^# (.+)/m);
      const personaMatch = content.match(/\*\*Target persona:\*\* (.+)/);
      const hookMatch = content.match(/\*\*Hook \(first line alone\):\*\*\n(.+)/);
      const mtime = getFileMtime(path.join(dir, f));
      return {
        filename: f,
        title: titleMatch ? titleMatch[1] : f,
        persona: personaMatch ? personaMatch[1] : '',
        hook: hookMatch ? hookMatch[1].trim() : '',
        date: mtime ? mtime.toISOString() : null,
      };
    });
  } catch { return []; }
}

function getOutreachLog() {
  const file = path.join(REPO, '.claude/agent-memory/rwo-cold-outreach/sequence-log.md');
  const content = readFile(file);
  if (!content) return [];

  const rows = [];
  const lines = content.split('\n').filter(l => l.startsWith('|') && !l.includes('---') && !l.includes('Date Generated'));
  for (const line of lines) {
    const cols = line.split('|').map(c => c.trim()).filter(Boolean);
    if (cols.length >= 5) {
      rows.push({ date: cols[0], account: cols[1], persona: cols[2], trigger: cols[3], status: cols[cols.length - 1] });
    }
  }
  return rows.reverse().slice(0, 10);
}

function getLatestBriefing() {
  const dir = path.join(REPO, 'outputs/briefings');
  const file = getLatestFile(dir, 'daily');
  if (!file) return null;
  const content = readFile(file);
  return content ? marked(content) : null;
}

function getCompetitorSummary() {
  const dir = path.join(REPO, 'outputs/competitor');
  const file = getLatestFile(dir, 'weekly-report');
  if (!file) return null;
  const content = readFile(file);
  if (!content) return null;
  // Extract executive summary
  const match = content.match(/## Executive Summary([\s\S]*?)(?=\n## )/);
  return match ? marked(match[0]) : marked(content.slice(0, 800));
}

// --- Routes ---

app.post('/api/login', (req, res) => {
  if (req.body.password === PASSWORD) {
    req.session.authenticated = true;
    res.json({ ok: true });
  } else {
    res.status(401).json({ error: 'Wrong password' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ ok: true });
});

app.get('/api/me', (req, res) => {
  res.json({ authenticated: !!req.session.authenticated });
});

app.get('/api/data', requireAuth, (req, res) => {
  res.json({
    agentStatus: getAgentStatus(),
    signals: getSignals(),
    contentQueue: getContentQueue(),
    outreachLog: getOutreachLog(),
    latestBriefing: getLatestBriefing(),
    competitorSummary: getCompetitorSummary(),
    timestamp: new Date().toISOString(),
  });
});

// Telegram webhook — handle button callbacks (callback_query)
app.post('/telegram-webhook', (req, res) => {
  res.sendStatus(200); // always ack immediately
  const body = req.body;

  let text = '';
  let chatId = CHAT_ID;

  if (body.callback_query) {
    const data = body.callback_query.data;
    chatId = body.callback_query.message.chat.id;
    const map = {
      'status': '⚙️ Check the dashboard for live status: http://204.168.151.234:3000',
      'content': '📝 Content drafts are in outputs/content/drafts/ — check the dashboard.',
      'competitor': '🔍 Latest competitor report is in outputs/competitor/ — check the dashboard.',
      'briefing': '📊 Latest briefing is in outputs/briefings/ — check the dashboard.',
    };
    text = map[data] || `Command received: ${data}`;
  } else if (body.message && body.message.text) {
    return; // handled by orchestrator polling
  }

  if (text) sendTelegram(chatId, text);
});

function sendTelegram(chatId, text, replyMarkup) {
  const payload = JSON.stringify({
    chat_id: chatId,
    text,
    parse_mode: 'Markdown',
    ...(replyMarkup && { reply_markup: replyMarkup }),
  });

  const options = {
    hostname: 'api.telegram.org',
    path: `/bot${BOT_TOKEN}/sendMessage`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) },
  };

  const req = https.request(options);
  req.on('error', () => {});
  req.write(payload);
  req.end();
}

app.listen(PORT, () => {
  console.log(`RWO GTM Command Center running on http://0.0.0.0:${PORT}`);
});
