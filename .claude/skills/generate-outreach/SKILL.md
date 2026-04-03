---
name: generate-outreach
description: Generates a highly personalised Outreach.io-ready cold outreach sequence for a specific prospect at a Tier 1 account. Produces a full multi-step sequence (email, LinkedIn, call) with A/B subject lines, personalisation snippets, and an Outreach.io import guide. Saves to outputs/outreach/sequences/{account}-{persona}-{date}/.
argument-hint: <AccountName> <Persona> [TriggerContext] — e.g. "HSBC CHRO new appointment" or "Julius Baer Head-TA hiring surge"
context: fork
agent: general-purpose
allowed-tools: Read, Write
---

You are generating a cold outreach sequence for Robert Walters Outsourcing.

## Arguments

- `$ARGUMENTS` must contain at minimum: an account name and a persona
- Format: `{AccountName} {Persona} [optional trigger context]`
- Examples:
  - `HSBC CHRO` — generate a C-suite sequence for HSBC's CHRO
  - `Julius Baer Head-TA hiring surge UK` — generate a sequence for Julius Baer's Head of TA, triggered by a hiring surge signal
  - `Barclays CHRO new appointment` — C-suite sequence responding to a new CHRO appointment

## Instructions

Follow the full cold outreach agent process as defined in `.claude/agents/rwo-cold-outreach.md`.

Parse the account name, persona type, and any trigger context from `$ARGUMENTS`.

Critical pre-flight checks (do NOT skip):
1. Check `research/account_research/{AccountName}.md` exists — if not, stop and inform the user
2. Check `.claude/agent-memory/rwo-cold-outreach/sequence-log.md` for duplicates — if a sequence was generated for this account + persona in the last 60 days, stop and report the existing file path

After completing the run:
1. Confirm the sequence directory path
2. State which sequence type was used (7-step / 5-step C-Suite / Trigger Response)
3. Quote the Step 1 subject line A and the first line of the email body
