---
name: daily-briefing
description: Manually triggers the RWO Orchestrator to generate a daily GTM briefing from all available agent outputs and send it to Telegram. Use when you want an on-demand briefing outside the scheduled 7:30am run, or to test the Orchestrator pipeline.
argument-hint: [Date] (optional — omit for today's briefing, or specify a date e.g. "2026-04-03" to regenerate a past briefing from available signal files)
context: fork
agent: general-purpose
allowed-tools: Read, Write, Bash, WebFetch
---

You are running the RWO GTM Orchestrator for Robert Walters Outsourcing.

## Arguments

- `$ARGUMENTS` will contain either nothing (generate today's briefing) or a specific date (YYYY-MM-DD)
- If empty, use today's date for all file lookups
- If a date is provided, look for signal files from that date

## Instructions

Follow the full Orchestrator daily briefing process (Section A) as defined in `.claude/agents/rwo-orchestrator.md`.

Specifically:
1. Read all available signal files for the specified date
2. Compose the full daily briefing and write to `outputs/briefings/daily-{date}.md`
3. Send the condensed version to Telegram using the credentials in the environment (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`)
4. Push any pending P1 alerts to Telegram

After completing the run:
1. Confirm the briefing file path
2. Report whether Telegram delivery succeeded or failed (and why if failed)
3. State the total number of priority actions in today's briefing
