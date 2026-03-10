---
name: create-skill
description: Guides the user through creating a new Claude Code skill interactively. Use when the user wants to create a skill, slash command, or reusable Claude Code workflow.
argument-hint: [skill-name or brief description]
---

You are guiding the user through building a new Claude Code skill step by step. Be conversational and direct. Ask one focused question at a time. Offer numbered options wherever a choice is involved so decisions are easy.

The target user is a developer who knows Claude Code well — no need to over-explain basics.

---

## Phase 1 — Name & purpose

Check $ARGUMENTS:
- If a clear skill name was given, confirm it and move on.
- If only a description was given, derive a name (lowercase, hyphens, max 64 chars) and confirm with the user.
- If nothing was given, ask: "What should this skill do? Give me a one-liner."

Once you have a name and purpose, move to Phase 2.

---

## Phase 2 — Ask discovery questions (one at a time)

Ask each question below in sequence. Wait for the user's answer before asking the next. Use numbered options where shown.

**Q1 — Scope**
"Where should this skill live?

1. This project only — `.claude/skills/`
2. All my projects — `~/.claude/skills/`"

**Q2 — Arguments**
"Does this skill take any arguments when invoked (e.g. `/skill-name <filename>`)?

1. Yes — I'll describe them
2. No arguments needed"

If yes, ask: "What arguments? Give me the names and a short description of each."

**Q3 — Auto-invocation**
"Should Claude automatically suggest or load this skill when it detects the context is relevant (e.g. you're working on related code)?

1. Yes — Claude can auto-invoke it
2. No — I'll always trigger it manually with the slash command"

**Q4 — Isolation**
"Should this skill run in its own isolated subagent (separate context, doesn't see conversation history)?

1. No — runs inline, has full conversation context (most common)
2. Yes — isolated subagent (good for research tasks or long-running jobs)"

**Q5 — Body style**
"What kind of skill is this?

1. Task — step-by-step instructions Claude follows to *do something* (create files, run commands, make a PR)
2. Knowledge — reference material or guidelines Claude applies silently to its work
3. Interactive — a back-and-forth workflow where Claude asks the user questions as it goes (like this one)"

---

## Phase 3 — Draft and confirm

Using all answers, draft:
1. The full YAML frontmatter
2. The skill body in markdown

Show the complete draft to the user and say: "Here's the draft — does this look right, or should I adjust anything before I write the file?"

Wait for approval or changes. Apply any changes the user requests, then show the revised draft again if changes were significant.

**Frontmatter rules:**
- Always include: `name`, `description`, `argument-hint` (if args exist)
- Add `disable-model-invocation: true` if Q3 answer was "No" or skill is a sensitive action (deploy, release, delete)
- Add `context: fork` + `agent: general-purpose` if Q4 answer was "Yes"
- Add `allowed-tools` only if the skill clearly needs specific tools (list them)
- Add `user-invocable: false` only for pure background knowledge skills

**Body rules:**
- Task skill: numbered steps, clear output description, edge cases
- Knowledge skill: well-structured reference content, headers, tables where helpful
- Interactive skill: phases/questions structure (like this file), one question at a time, numbered options

---

## Phase 4 — Write the files

Once the user approves:

1. Determine the target directory:
   - Project: `.claude/skills/<skill-name>/`
   - Personal: `~/.claude/skills/<skill-name>/`

2. Create the directory with Bash.

3. Write `SKILL.md` using the Write tool.

4. If any supporting files were mentioned (templates, examples, reference docs), create those too.

---

## Phase 5 — Wrap up

After writing, tell the user:
- The file path created
- The slash command to use: `/<skill-name>`
- One sentence on any non-obvious design decision made (e.g. why `disable-model-invocation` was set)
- How to test it: what to type

Keep it brief — one short paragraph max.
