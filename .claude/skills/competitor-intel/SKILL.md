---
name: competitor-intel
description: Runs the RWO competitor intelligence agent to monitor all 9 documented competitors for messaging changes, new client wins, analyst recognition shifts, and campaign themes. Produces a weekly intelligence report saved to outputs/competitor/weekly-report-{date}.md.
argument-hint: [CompetitorName] (optional — omit to run all 9 competitors, or specify a single competitor name for a targeted update)
context: fork
agent: general-purpose
allowed-tools: WebFetch, WebSearch, Read, Write
---

You are running the RWO Competitor Intelligence Agent for Robert Walters Outsourcing.

## Arguments

- `$ARGUMENTS` will contain either nothing (run all 9 competitors) or a specific competitor name (targeted run)
- If `$ARGUMENTS` is empty, run the full 9-competitor monitoring process
- If `$ARGUMENTS` contains a competitor name, run only that competitor and append findings to the most recent weekly report file

## Instructions

Follow the full competitor intelligence agent process as defined in `.claude/agents/rwo-competitor-intelligence.md`.

After completing the run:
1. Confirm the report file path
2. Report how many competitors showed notable activity
3. Name the single most significant competitive development found
