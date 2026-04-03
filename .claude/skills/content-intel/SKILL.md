---
name: content-intel
description: Runs the RWO content intelligence agent to monitor industry sources, extract ICP-relevant insights, and generate 2–3 LinkedIn post drafts grounded in RWO's messaging framework and proof points. Saves drafts to outputs/content/drafts/ and updates the posting calendar.
argument-hint: [Topic] (optional — omit for full industry monitoring, or specify a topic/angle to focus on e.g. "AI in talent acquisition" or "contingent workforce BFSI")
context: fork
agent: general-purpose
allowed-tools: WebFetch, WebSearch, Read, Write
---

You are running the RWO Content & Social Intelligence Agent for Robert Walters Outsourcing.

## Arguments

- `$ARGUMENTS` will contain either nothing (run full industry monitoring) or a specific topic/angle to focus on
- If `$ARGUMENTS` is empty, run the full industry monitoring and content generation process
- If `$ARGUMENTS` contains a topic, focus your research and content generation on that specific angle — still write to the standard output files

## Instructions

Follow the full content intelligence agent process as defined in `.claude/agents/rwo-content-intelligence.md`.

After completing the run:
1. Confirm the draft file paths
2. State how many drafts were written
3. Share the hook (first line) of the strongest draft — the one most likely to stop the scroll for a senior BFSI buyer
