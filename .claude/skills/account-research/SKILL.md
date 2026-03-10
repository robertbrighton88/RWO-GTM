---
name: account-research
description: Runs comprehensive account intelligence research on a target company for RWO sales and account management. Produces a structured markdown file covering company overview, strategic context, HR/TA leadership (board and director level), RPO/MSP relationships, hiring signals, thought leadership, and RWO positioning. Saves output to research/account_research/{CompanyName}.md.
argument-hint: <CompanyName> [domain]
context: fork
agent: general-purpose
allowed-tools: WebFetch, WebSearch, Write, Bash
---

You are conducting account intelligence research for **Robert Walters Outsourcing (RWO)** — an RPO (Recruitment Process Outsourcing), MSP/CWM (Managed Service Provider / Contingent Workforce Management), and Talent Advisory business. RWO's target sectors are **BFSI** (Banking, Financial Services, Insurance) and **Pharma & Life Sciences**. Primary delivery markets: UK and Asia Pacific (Singapore, Japan, Malaysia, Hong Kong). Active growth markets: EMEA and US.

## Arguments

- `$ARGUMENTS` will contain the company name and optionally the domain (e.g. `Boehringer Ingelheim boehringer-ingelheim.com`)
- Parse the company name and domain from `$ARGUMENTS`. If no domain is given, infer it from the company name.

---

## Research Process

Work through each phase below in order. Use WebFetch on the company's website and targeted WebSearch queries to gather data. Label all findings as [Verified] (named public source) or [Inferred] (reasonable inference from signals).

---

### Phase 1 — Company Overview

Fetch the company's homepage and about/strategy pages. Research:

- What business does the company operate — divisions, products, services?
- Key facts: revenue, headcount, countries of operation, stock exchange listing (if public)
- Headquarters and key office locations
- Recent strategic priorities, M&A activity, restructuring, or major announcements

Suggested searches:
- `"{company}" annual report 2024 OR 2025`
- `"{company}" revenue headcount employees 2025`
- `"{company}" strategy restructuring 2025`

---

### Phase 2 — Strategic Context

Research the company's current transformation, restructuring, or growth agenda — anything that creates talent demand or HR pressure:

- Is there active restructuring, headcount reduction, or organisational redesign?
- Is there a growth programme, pipeline expansion, or geographic expansion driving hiring?
- Are there M&A events (integration, divestiture) that create TA complexity?
- What is the CEO/leadership stance on workforce and operating model?

Suggested searches:
- `"{company}" layoffs OR restructuring OR transformation 2024 OR 2025`
- `"{company}" CEO workforce operating model`
- `"{company}" hiring expansion 2025`

---

### Phase 3 — Board / C-Suite HR Leadership

Identify the most senior people leader at the company:

- CHRO, Chief People Officer, Chief Talent Officer, or equivalent board/executive level title
- Their background, tenure, public profile (LinkedIn), and any published commentary
- Note whether they come from a commercial or traditional HR background — this shapes how to position RWO

Suggested searches:
- `"{company}" CHRO OR "Chief People Officer" OR "Chief HR Officer"`
- `site:linkedin.com "{company}" "Chief People Officer" OR "CHRO"`
- `"{company}" board of management HR OR people`

---

### Phase 4 — Director-Level HR & TA Contacts

Find Director and Senior Leadership level (Director, Senior Director, VP, Head of) contacts in HR, Talent Acquisition, Talent Management, HR Business Partnering, Workforce Planning, or People Operations — in RWO's priority markets.

**Priority geography order:**
1. United Kingdom
2. Singapore
3. Japan
4. Malaysia
5. Hong Kong
6. Germany or HQ country (if different from above)
7. US (if relevant)

For each geography, run targeted searches:
- `site:linkedin.com "{company}" "Director" "Talent Acquisition" "United Kingdom"`
- `site:linkedin.com "{company}" "Head of HR" "Singapore"`
- `site:linkedin.com "{company}" "HR Director" Japan`
- `site:linkedin.com "{company}" "VP" "Human Resources" Malaysia`
- Also search ZoomInfo, The Org, RocketReach, and HR industry press for named appointments

For each contact found, capture:
- Full name
- Exact title
- Geography
- LinkedIn URL
- Source URL
- Confidence label: [Verified] or [Inferred]
- Recommended outreach angle (1–2 sentences, grounded in the company's current strategic context)

---

### Phase 5 — Known RPO / MSP Relationships

Research whether the company already works with an RPO or MSP provider:

- Search for case studies published by competitors (Randstad Sourceright, Cielo, AMS, Hudson RPO, PeopleScout, WilsonHCG, Pontoon, AGS, Korn Ferry RPO)
- Search: `"{company}" RPO OR "recruitment process outsourcing" case study`
- Search: `"{company}" MSP OR "managed service provider" contingent workforce`

Note any incumbent providers and the scope of their engagement. Identify white space where no provider is documented.

---

### Phase 6 — Talent & Hiring Signals

Look for signals that the company is actively hiring, restructuring TA, or changing its workforce model:

- Active job postings (especially in TA leadership or HR roles)
- Published hiring plans or workforce announcements
- TA leadership vacancies or recent appointments
- Any signals of internal TA team under pressure (volume, speed, quality issues)

Suggested searches:
- `"{company}" "head of talent acquisition" appointed 2024 OR 2025`
- `"{company}" jobs site:linkedin.com "Director" "Talent Acquisition"`
- `"{company}" talent acquisition transformation OR outsourcing`

---

### Phase 7 — Thought Leadership & Public Presence

Research the company's HR/people function's public presence:

- Do any HR or TA leaders speak at conferences (HRO Today, SHRM, LinkedIn Talent Connect, HR Tech, The Conference Board)?
- Do they publish on LinkedIn, blogs, or podcasts?
- Has the company's HR function been featured in press, case studies, or academic papers?
- What is the company's LinkedIn following and employer brand presence?

Suggested searches:
- `"{company}" HR OR CHRO conference speaker 2024 OR 2025`
- `"{company}" "talent acquisition" OR "HR transformation" case study`
- `site:linkedin.com "{company}" HR thought leadership`

---

### Phase 8 — RWO Positioning

Based on all research, synthesise:

1. **Primary talent challenges** — what are the company's most likely HR/TA pain points given their sector, scale, and strategic context?
2. **RWO service fit** — which services (RPO Full/Modular/Project, MSP/CWM, Talent Advisory) are most relevant and why?
3. **Geography alignment** — which of RWO's markets (UK, Singapore, Japan, Malaysia, Hong Kong) overlap with the company's active hiring?
4. **Messaging angles** — what are the 2–3 most compelling ways to open a conversation, grounded in the company's actual context?
5. **Competitive note** — if an incumbent RPO/MSP provider is identified, how should RWO position against them?

---

### Phase 9 — Outreach Strategy

Build a coordinated outreach plan across three tracks. All outreach should reference any existing RWO relationship with the account if one is known.

**Track 1 — Top-Down (Board / C-Suite)**

For the most senior HR/People leader identified (CHRO, Chief Talent Officer, Chief People Officer):

- Define their persona: What is their background — commercial or traditional HR? What board-level accountability do they hold? What is their public positioning (conference speaker, thought leader, academic collaborator)?
- What do they care about most right now, given the company's strategic context?
- Write the opening angle: This should connect RWO to their most senior strategic challenge — NOT an RPO product pitch. Lead with Talent Advisory, market intelligence (RW Insights), or operating model framing. Only introduce RPO/MSP once strategic trust is established.
- Specify the recommended channel (LinkedIn, warm intro, conference route) and the ideal RWO internal person to make first contact (e.g. Jenny Fulton for APAC contacts, Jessica Holt for EMEA).
- Specify one thing NOT to do or say in this approach.

**Track 2 — Bottom-Up (Director Level)**

For each named director-level contact, write a tailored outreach note covering:

- **Persona summary** (2 sentences): Who are they, what do they own, what pressure are they under right now based on the company's context?
- **Opening angle** (2–4 sentences in first-person voice): A specific, contextually grounded question or observation that demonstrates knowledge of their situation. Not generic. Not a product pitch. Should make them feel understood, not sold to.
- **Proof point to deploy**: The single most relevant RWO proof point for this person's role and situation.
- **Channel**: LinkedIn / warm intro / event / etc.
- **What to avoid**: One thing that would kill the conversation.

Contacts should be ordered by outreach priority. Where the account is an existing client, note this for every contact — the framing is partnership expansion, not new business development.

**Track 3 — Strategic Account Approach**

Synthesise the two tracks into a sequenced account plan:

- **Recommended wave structure**: Which contacts should be approached in which order, and why? (e.g. start with operational director contacts to establish value; use those conversations to inform and support a later board-level approach)
- **White space entry points**: Which RWO service conversations are most likely to open quickly, and through which contact?
- **Internal RWO coordination**: What does the RWO team need to align on internally before outreach begins? (account ownership, existing relationship scope, which RWO leader leads senior conversations)
- **Sequencing rationale**: Explain briefly why the top-down conversation should come before or after the bottom-up track for this specific account.

---

## Output

Write the completed research to:
`research/account_research/{CompanyName}.md`

Use the following document structure:

```
# Account Intelligence: {Company Name}
**Prepared for:** RWO Sales / Account Management
**Account Status:** [Prospect / Existing Client — specify sector]
**Document Date:** {current month and year}
**Prepared by:** Claude (AI research assistant)

> Label key: [Verified] = named public source. [Inferred] = reasonable inference — confirm before use in proposals.

---

## 1. Company Overview
## 2. Strategic Context
## 3. Board / C-Suite HR Leadership
## 4. Director-Level Contacts — Prioritised Outreach List
   - Ready to Contact (Verified)
   - Verify Before Contacting (Inferred)
   - Contact Notes (one paragraph per contact with outreach angle)
## 5. Known RPO / MSP Relationships
## 6. Talent & Hiring Signals
## 7. Thought Leadership & Public Presence
## 8. RWO Positioning Summary
   - Primary Talent Challenges
   - Service Fit (table)
   - Geography Alignment (table)
   - Messaging Angles
## 9. Intelligence Gaps & Navigator Searches
## 10. Outreach Strategy
   - Track 1 — Top-Down (Board / C-Suite)
   - Track 2 — Bottom-Up (Director Level, one entry per contact)
   - Track 3 — Strategic Account Approach (wave sequencing, white space, internal coordination)
## 11. Recommended Next Actions
## 12. Source Index
```

After writing the file, confirm the path and give the user a 5–6 bullet summary of the most important findings.
