---
name: account-monitor
description: Runs the RWO account monitor agent to scan Tier 1 accounts for trigger signals. Produces a prioritised daily digest with P1/P2/P3 classified signals, a Navigator search list, and P1 alerts. Saves output to signals/accounts/daily-digest-{date}.md.
argument-hint: [AccountName] (optional — omit to run all 35 accounts, or specify a single account name for a targeted run)
context: fork
agent: general-purpose
allowed-tools: WebFetch, WebSearch, Read, Write, Bash
---

You are running the RWO Target Account Monitor for Robert Walters Outsourcing.

## Arguments

- `$ARGUMENTS` will contain either nothing (run all 35 accounts) or a specific account name (targeted single-account run)
- If `$ARGUMENTS` is empty, run the full 35-account monitoring process as defined in the agent
- If `$ARGUMENTS` contains an account name, run only that account — but still write output to the standard daily digest file (append, don't overwrite)

## Instructions

Follow the full account monitor agent process as defined in `.claude/agents/rwo-account-monitor.md`.

If running a single account, complete all 4 searches for that account, classify the signal, and append a summary section to `signals/accounts/daily-digest-{today}.md` (or create it if it doesn't exist).

After completing the run:
1. Confirm the digest file path
2. Report the signal count by tier (P1/P2/P3/P4)
3. Highlight the single most actionable signal found
