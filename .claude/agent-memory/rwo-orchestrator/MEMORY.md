# Orchestrator Agent Memory

## Telegram Configuration

- **last_update_id:** 0
  *(Update this after every command-handling run to avoid re-processing messages)*
- **Bot configured:** No — set up @BotFather and store token in .env before first run
- **Chat ID:** Not yet configured — see .env.example for setup instructions

## User Preferences

*Populated as the user interacts with the system via Telegram.*

- Preferred briefing format: [Default — update if user requests changes]
- Most-used commands: [Track frequency here]
- Preferred Telegram message length: [Default condensed — update if user prefers more detail]

## High-Priority Accounts (User-Flagged)

*Accounts the user has flagged for immediate attention. Set and cleared via Telegram.*

| Account | Priority reason | Flagged date |
|---|---|---|
| [Populated by user commands] | | |

## Agent Status Tracking

*Last confirmed run timestamp per agent — used for /status command.*

| Agent | Last run | Status |
|---|---|---|
| Account Monitor | [Not yet run] | Pending |
| Competitor Intel | [Not yet run] | Pending |
| Content Intel | [Not yet run] | Pending |
| Cold Outreach | [Not yet run] | On-demand only |

## VPS Crontab Reference

For reference — the scheduled runs configured on the VPS:

```
# Account Monitor — daily 7:00am UTC
0 7 * * * cd /home/rwo/RWO-GTM && git pull && claude --dangerously-skip-permissions -p "Run the account monitor agent for today's signals. Write all output to signals/ and outputs/ directories."

# Content Intelligence — daily 7:10am UTC
10 7 * * * cd /home/rwo/RWO-GTM && claude --dangerously-skip-permissions -p "Run the content intelligence agent. Write all drafts and intelligence to outputs/content/ and signals/content/ directories."

# Orchestrator daily briefing — daily 7:30am UTC
30 7 * * * cd /home/rwo/RWO-GTM && claude --dangerously-skip-permissions -p "Run the orchestrator daily briefing process. Read all signal files from today, compose the briefing, write to outputs/briefings/, and send to Telegram."

# Competitor Intelligence — weekly Monday 6:30am UTC
30 6 * * 1 cd /home/rwo/RWO-GTM && claude --dangerously-skip-permissions -p "Run the competitor intelligence agent for this week. Monitor all 9 competitors and write the weekly report to outputs/competitor/."
```
