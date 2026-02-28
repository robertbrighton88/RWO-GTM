# Claude.md — Instructions for Using the RWO Context Folder

---

## 1. Purpose of This Folder

This folder contains the authoritative context repository for **Robert Walters Outsourcing (RWO)** — specifically scoped to support go-to-market strategy, outbound sales, and commercial content generation.

Every file in this folder represents a deliberate, reviewed source of truth. Together, they define who RWO is, who they sell to, what they offer, how they position, and how they communicate.

**These files are the only source of truth.**

- Do not make assumptions about RWO's services, clients, geographies, or positioning beyond what is documented here.
- Do not supplement with general knowledge about the RPO/MSP industry unless explicitly asked, and always clearly distinguish between documented fact and external context.
- Do not invent client names, case studies, metrics, or capabilities that do not appear in these files.

---

## 2. File Index & Usage Rules

Each file has a defined purpose. Reference the relevant file(s) before generating any output. Do not rely on memory of previous conversations — always treat these files as the live source.

### `company.md`
**Foundation file. Read first for any output.**
- Use for: company overview, structure, scale, geography, sector focus, 2024 strategic context
- Contains the authoritative description of what RWO is, how it sits within Robert Walters Group, and its primary markets (UK and Asia Pacific) and growth markets (EMEA and US)
- BFSI is the primary sector. Do not position RWO as a generalist provider.

### `services.md`
**Authoritative list of RWO's capabilities. Do not invent services.**
- Use for: describing what RWO offers, how services are structured, delivery models
- RWO offers Recruitment Process Outsourcing (RPO), Managed Service Provider / Contingent Workforce Management (MSP/CWM), and Talent Advisory — delivered via Full RPO, Project RPO, and Modular RPO models
- RWO does **not** offer Business Process Outsourcing (BPO). Do not use this term.
- If asked about a capability not listed here, state that it is not documented rather than inferring it exists.

### `icp.md`
**Use for: defining who RWO sells to.**
- Target customers are BFSI enterprises (banking, financial services, insurance) — primarily in the UK and Asia Pacific, with EMEA and US as growth markets
- Firmographic, situational, psychographic, and geographic ICP criteria are all defined here
- Do not expand the ICP beyond what is documented. Public sector is explicitly out of ICP.

### `personas/`
**Use for: tailoring any output to a specific buyer.**
- Four personas are defined: CHRO, Head of TA, CPO/Procurement, Regional HR Director
- Each file defines what the persona cares about, how they buy, their objections, and how to reach them
- Always check the relevant persona file before generating outbound copy, messaging, or sales content targeting a specific role

### `messaging.md`
**Use for: approved messaging pillars, value propositions, and brand voice.**
- Contains the core value proposition, brand voice dimensions, messaging by service line, key pillars, and copy examples
- All generated content must align with the tone defined here: confident, semi-formal, data-informed, human-first, no fear tactics, no price-led messaging
- The "What RWO Does NOT Do" section is a hard constraint — do not violate these in any output.

### `narrative.md`
**Use for: strategic storyline, why now, why RWO.**
- Contains the macro narrative around the changing world of work, the five forces driving outsourcing adoption, and the "why Robert Walters" argument
- Use this file when generating thought leadership, executive presentations, or any content that needs to frame RWO's relevance at a market or strategic level

### `competitive_positioning.md`
**Use for: differentiation, competitor comparisons, positioning statements.**
- Contains competitor profiles (Cielo, AMS, Randstad Sourceright, Korn Ferry RPO, Pontoon, Hudson RPO, PeopleScout), RWO's differentiators, vulnerabilities, and analyst positioning
- The "building inside banks" differentiator is a key, documented insight — use it in BFSI-specific content
- Do not claim RWO is ranked higher than documented in analyst reports (currently Star Performer, not Leader, in Everest Group CWM/MSP PEAK Matrix 2025)
- Vulnerabilities are documented honestly — do not obscure or contradict them

### `objections.md`
**Use for: handling sales objections.**
- Eight common objections are documented with underlying concern, reframe, response approach, and proof points
- Use this file when generating sales scripts, battlecards, or coaching content
- Do not fabricate objection responses not grounded in documented services or proof points

### `outbound.md`
**Use for: all outbound prospecting content — emails, LinkedIn messages, call frameworks.**
- Defines universal outbound principles, buying stage framework (Unaware / Passively Considering / Actively Evaluating), and persona-specific tone and copy guidance
- Always calibrate tone to seniority and buying stage before generating outbound copy
- The checklist and "What to Avoid" section are hard constraints on all outbound content

### `proof_points.md`
**Use for: statistics, case studies, awards, and validated claims.**
- This is the only permitted source for metrics and client outcomes
- Do not use figures or case studies not listed in this file
- Key validated metrics: +36% hires per quarter (European bank), workforce consultancy +51% NFI, £2bn+ recruitment budget under management, Everest Group Star Performer 2025, TIARA Long-Term Partnership Award 2024

### `recent_activity.md`
**Use for: current relevance, news hooks, and signal-based outreach.**
- Contains 2024–2025 strategic developments: brand unification (July 2024), leadership appointments (Jenny Fulton APAC, Jessica Holt EMEA), financial performance signals, analyst recognition, and hiring signals
- Use this file to add recency and relevance to outbound messaging and content
- Do not present signals as confirmed facts beyond what is documented

### `channels.md`
**Use for: GTM channel context and distribution strategy.**
- Defines RWO's primary GTM channels: thought leadership, direct senior relationships, events, LinkedIn/digital, cross-sell from recruitment, analyst relations, and technology ecosystem
- Use this file when advising on where and how to distribute content or reach target personas

### `gtm_tech_stack.md`
**Use for: tooling references and stack workflow.**
- Documents the four tools in the GTM stack: Microsoft Dynamics 365 (CRM), Cognism (data/intelligence), LinkedIn Sales Navigator (research/social selling), Outreach.io (sequencing/engagement)
- Contains best practices, common mistakes, and the integrated end-to-end workflow for each tool
- Do not recommend tools or workflows not documented here without clearly flagging them as external suggestions

---

## 3. Consistency Rules

The following rules apply to all outputs generated using this context folder:

**3.1 Never contradict a documented file.**
If a file states that RWO's primary sector is BFSI, do not generate content that positions RWO as a generalist provider. If a file states that RWO does not offer BPO, do not use that term.

**3.2 Never fabricate.**
Do not invent:
- Client names or unnamed client details beyond what is documented
- Metrics or statistics not present in `proof_points.md`
- Services or capabilities not listed in `services.md`
- Geographies or markets not referenced in `company.md` or `icp.md`
- Competitor intelligence not present in `competitive_positioning.md`

**3.3 Maintain voice consistency.**
All outputs must reflect the brand voice defined in `messaging.md`: confident, semi-formal, data-informed, human-first. Do not shift to aggressive, salesy, or jargon-heavy language in any output.

**3.4 Respect ICP boundaries.**
Do not generate content targeting sectors, company sizes, or geographies outside the ICP defined in `icp.md`. If asked to do so, flag the boundary and ask for clarification.

**3.5 Buying stage awareness.**
When generating outbound content, always establish which buying stage the prospect is in before writing. Content for an unaware prospect must not read like content for a prospect in active evaluation. Reference `outbound.md` for stage-specific guidance.

---

## 4. Output Standards

All generated outputs must meet the following standards:

| Standard | Requirement |
|---|---|
| **Structure** | Clear headings, logical flow, scannable format |
| **Tone** | Professional, confident, semi-formal — consistent with `messaging.md` |
| **Claims** | Supported only by documented proof points — no unsupported assertions |
| **Scope** | Bounded by what is documented — no speculative expansion of capability or market presence |
| **Exaggeration** | None — do not upgrade analyst rankings, inflate client outcomes, or overstate market position |
| **Terminology** | Use RPO, MSP, CWM, Talent Advisory — never BPO; always "partner" not "vendor" or "supplier" |
| **Persona calibration** | Match seniority, tone, and message to the specific persona being addressed |
| **Length** | Appropriate to format — C-suite outbound should be short; strategic documents can be long |

---

## 5. Conflict Resolution

If two files appear to contain conflicting information, apply the following rules in order:

1. **Default to the more specific file.** `services.md` overrides `company.md` on service descriptions. `icp.md` overrides `company.md` on target sectors. A persona file overrides `messaging.md` on persona-specific tone.

2. **Default to the most recently updated file.** If a section has been explicitly revised (e.g., sector focus updated to BFSI-primary), treat the revised version as current and discard the superseded framing.

3. **If still unclear, state the ambiguity.** Do not assume. Flag the conflict clearly and ask for clarification before generating output. Example: *"I notice `company.md` and `icp.md` describe the geographic priority differently. Which should I treat as current for this output?"*

---

## 6. Scope Boundary

This context folder is scoped specifically to **Robert Walters Outsourcing (RWO)** — the outsourcing and managed services division. It does not represent:

- The broader Robert Walters Group recruitment business
- Resource Solutions (now absorbed into RWO following the 2024 brand unification)
- Walters People or any other sub-brand

If asked about the broader Group, use `company.md` for structural context only. Do not generate GTM content for divisions outside RWO's scope.
