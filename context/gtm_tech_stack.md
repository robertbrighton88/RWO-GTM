# Robert Walters Outsourcing — GTM Technology Stack

## Stack Overview

| Tool | Role in Stack | Primary Use |
|---|---|---|
| **Microsoft Dynamics 365** | CRM | Account management, pipeline tracking, activity logging |
| **Cognism** | Data & Intelligence | Contact discovery, verified data, prospecting signals |
| **LinkedIn Sales Navigator** | Research & Social Selling | Account research, prospect identification, warm engagement |
| **Outreach.io** | Engagement & Sequencing | Email sequences, call tasks, multi-channel cadences, reporting |

These four tools cover the full outbound motion: **find → research → engage → manage**. Each has a distinct role. The stack only works well when all four are used in an integrated, disciplined way.

---

## Tool 1: Microsoft Dynamics 365 (CRM)

### What It Does
Dynamics 365 is the system of record for all commercial activity. Every account, contact, opportunity, interaction, and piece of pipeline data lives here. It is the single source of truth for the team.

### Key Features for Outbound GTM

- **Account & Contact Management** — maintain a clean, structured view of every target account and the contacts within it across personas (CHRO, Head of TA, CPO)
- **Activity Timeline** — log every call, email, meeting, and LinkedIn touch so the full history of an account relationship is visible to the whole team
- **Pipeline & Opportunity Tracking** — stage progression from suspect → prospect → qualified → proposal → closed
- **Views & Segments** — build filtered views by industry (BFSI), geography (UK, APAC), persona, account tier, and last activity date
- **Tasks & Reminders** — ensure follow-up doesn't fall through; assign tasks to specific reps with due dates
- **Reporting & Dashboards** — pipeline health, activity volumes, conversion rates by stage, source attribution

### Best Practices

- **Keep it clean.** Dynamics is only valuable if the data is trusted. Deduplicate contacts regularly. Every Cognism import should be reviewed before it lands in CRM.
- **Log everything, same day.** If it's not in Dynamics, it didn't happen. Outreach.io should sync activity automatically — but manual calls and LinkedIn conversations must be logged manually.
- **Use account tiers.** Classify every target account as Tier 1 (active pursuit), Tier 2 (nurture), or Tier 3 (watch list). This dictates sequencing frequency and rep time allocation.
- **Map the buying committee per account.** For BFSI enterprise accounts, tag every relevant contact by persona — CHRO, Head of TA, CPO, Regional HR Director. Multi-threading is essential; single-contact accounts are fragile.
- **Track engagement, not just activity.** A contact who opened 4 emails but never replied is more valuable than one who hasn't been touched. Use Outreach.io engagement data synced back to Dynamics to prioritise.

### Common Mistakes to Avoid
- Using Dynamics as a contact database only — it should be a living record of relationship and pipeline progression
- Not updating opportunity stages — stale pipeline makes forecasting meaningless
- Duplicate contacts from multiple import sources (Cognism + manual + LinkedIn) — causes split history and confusion

---

## Tool 2: Cognism

### What It Does
Cognism is a B2B contact data and sales intelligence platform. It provides verified mobile numbers, direct email addresses, and intent/trigger data for prospecting into enterprise accounts. In a BFSI-focused GTM motion, it is the primary source for building target contact lists.

### Key Features for Outbound GTM

- **Diamond Verified Data** — phone-verified mobile numbers with high connect rates; critical for calling into enterprise accounts where direct dials are otherwise nearly impossible
- **Contextual Data / Firmographics** — filter by industry (financial services, banking, insurance), company size, geography, seniority, job function
- **Intent Data** — signals that a company is actively researching a topic (e.g., RPO, talent outsourcing, workforce management) — allows prioritisation of accounts showing buying signals
- **Job Change Alerts** — notifies when a tracked contact changes role; a new CHRO or Head of TA at a target account is one of the highest-priority trigger events
- **Technographic Data** — see what tools a company uses (e.g., if they're running Workday or SAP SuccessFactors, they're likely sophisticated enough to be an RPO buyer)
- **Chrome Extension** — surface Cognism data directly on LinkedIn profiles and company pages without leaving the browser
- **CRM Integration** — push contacts directly into Dynamics 365 with mapped fields

### Best Practices

- **Build lists by account, not by persona in isolation.** Start with the target account list (BFSI enterprises in Tier 1 markets), then find all relevant personas within each account. This prevents spraying contacts from multiple companies without account context.
- **Prioritise intent + job change signals.** An account showing intent for "RPO" or "talent outsourcing" combined with a recent CHRO appointment is the highest-priority outbound target in the stack.
- **Use Diamond Verified mobile numbers for calling.** Cognism's phone-verified mobiles are significantly more likely to connect than unverified data. Reserve these for Tier 1 accounts.
- **Don't import everything into Dynamics at once.** Review and qualify Cognism contacts before pushing to CRM. Mass imports of unreviewed data degrade data quality fast.
- **Layer with Sales Navigator.** Use Cognism for contact data (email, mobile); use Sales Navigator for research and context before reaching out. They complement each other — one provides the data, the other provides the intelligence.
- **Refresh lists quarterly.** BFSI is a high-movement sector — people change roles frequently. Stale contact data in Dynamics should be re-verified in Cognism regularly.

### Common Mistakes to Avoid
- Treating Cognism as a spray-and-pray list tool — volume without relevance destroys sender reputation and wastes rep time
- Not using intent data — it's one of the most underused features; intent-scored accounts should always be prioritised in sequencing
- Ignoring job change alerts — new executives in CHRO/Head of TA seats are the single warmest trigger in the entire outbound motion

---

## Tool 3: LinkedIn Sales Navigator

### What It Does
Sales Navigator is LinkedIn's premium sales tool for account and contact research, relationship mapping, and social selling. For enterprise B2B outbound into BFSI, it provides the intelligence layer — context about the person and the organisation — that makes outreach personalised and relevant rather than generic.

### Key Features for Outbound GTM

- **Advanced Search & Filters** — find contacts by title, seniority, company, industry, geography, years in role, recent job changes, and more
- **Account Lists & Lead Lists** — organise target accounts and contacts into structured lists with save and alert functionality
- **Account Insights** — news, headcount growth signals, recent hires, senior leadership changes, department hiring activity
- **Lead Alerts** — notified when a saved lead posts on LinkedIn, changes role, is mentioned in the news, or shares content
- **TeamLink** — see if anyone in your organisation has a first-degree connection to a target prospect; warm introductions are significantly more effective than cold outreach
- **InMail** — direct message to prospects outside your network; should be used sparingly and with high personalisation
- **Smart Links** — share tracked content (e.g., a case study or whitepaper) and see who engaged, for how long, and what they clicked
- **CRM Sync** — save contacts and accounts directly to Dynamics 365 with activity logging

### Best Practices

- **Research before every outreach.** Before sending any email or making any call via Outreach, spend 3–5 minutes on Sales Navigator reviewing the prospect's recent activity, their company's news feed, and any shared connections. This is what separates relevant outreach from noise.
- **Use account alerts as daily triggers.** Set up alerts on all Tier 1 accounts. A leadership change, a major hiring spike, a press release about expansion — these are real-time reasons to reach out that most reps miss.
- **Engage before you pitch.** Comment thoughtfully on a CHRO's LinkedIn post before sending a cold message. It moves you from unknown to familiar, which materially improves reply rates.
- **Use TeamLink to find warm paths.** A second-degree connection via a colleague is worth more than the best-written cold InMail. Always check before going cold.
- **InMail is a finite resource — use it for senior, hard-to-reach prospects only.** Don't waste InMail credits on contacts you have a direct email for via Cognism.
- **Save all target contacts as Leads.** Sales Navigator's algorithm will surface relevant updates and signals about saved leads. This is passive intelligence that requires no additional effort once set up.

### Common Mistakes to Avoid
- Using Sales Navigator as a static search tool rather than a live intelligence feed — the alerts and signals are where the real value is
- Sending generic InMails — "I'd love to connect and share how we help companies like yours" — these have near-zero reply rates
- Not syncing to Dynamics — every relevant research action and saved contact should flow back into CRM

---

## Tool 4: Outreach.io

### What It Does
Outreach.io is the sales engagement platform that sits on top of the rest of the stack. It orchestrates multi-channel outbound sequences (email, phone, LinkedIn tasks), tracks engagement at every step, and ensures consistent, measurable follow-through across every prospect in the pipeline. It is where sequences are built, sent, and reported on.

### Key Features for Outbound GTM

- **Sequences** — automated, multi-step, multi-channel cadences combining emails, call reminders, and LinkedIn tasks; built once, deployed at scale
- **Email Personalisation & Templates** — templated emails with dynamic merge fields (name, company, persona-specific messaging); A/B test subject lines and body copy
- **Call Functionality** — built-in dialler for logged, recorded calls; surfaces Cognism-sourced numbers; auto-logs to Dynamics
- **LinkedIn Task Steps** — prompts reps to view a profile, comment on a post, or send a connection request as part of a sequence — keeps social selling systematic
- **Engagement Signals** — real-time alerts when a prospect opens an email, clicks a link, or replies; allows timely, relevant follow-up
- **Sequence Analytics** — open rates, reply rates, meeting booked rates by sequence, step, and template; identifies what's working and what isn't
- **Snippets & Dynamic Variables** — insert persona-specific paragraphs based on industry, persona, or stage — enables mass personalisation without manual effort
- **Dynamics 365 Sync** — all sequence activity (emails sent, calls made, meetings booked) syncs back to CRM automatically

### Best Practices

- **Build persona-specific sequences, not one-size-fits-all cadences.** A CHRO sequence should be shorter, more strategic, and higher-touch than a Head of TA sequence. Use the persona guidance in `outbound.md` to build each sequence's messaging.
- **Recommended sequence structure for BFSI enterprise outbound:**
  - Day 1: Personalised email (Stage 2 angle — reference a trigger or insight)
  - Day 3: LinkedIn profile view (task — no message yet)
  - Day 5: Call attempt + voicemail if no answer
  - Day 8: Follow-up email (new angle — share a proof point or relevant content)
  - Day 11: LinkedIn connection request (personalised note)
  - Day 14: Final email (low-pressure close — "happy to revisit when the timing is right")
  - Day 21: Call attempt (final touch)
- **Keep sequences to 6–8 steps over 3–4 weeks.** More than this in BFSI enterprise feels aggressive and damages the brand. Quality over volume.
- **Use A/B testing on subject lines from day one.** Subject lines drive open rates. Test two variants on every sequence. Review results monthly and retire underperformers.
- **Trigger sequences from signals, not just lists.** When Cognism flags an intent signal, or Sales Navigator alerts a leadership change at a Tier 1 account, that contact should be added to the relevant sequence immediately — warm signals decay fast.
- **Set reply detection correctly.** Any reply — even a "not interested" — should pause the sequence automatically. Nothing destroys a relationship faster than continuing to receive automated emails after replying.
- **Review sequence analytics weekly.** Open rate below 30%? The subject line needs work. Reply rate below 3%? The messaging or targeting is off. Meeting booked rate below 1%? The CTA or sequence structure needs revisiting.

### Common Mistakes to Avoid
- Building one generic sequence and putting everyone in it — persona and stage segmentation is essential
- Over-automating — Outreach should prompt personalisation, not replace it; the best sequences have manual personalisation steps built in
- Not reviewing analytics — sequences that aren't working should be paused and revised, not left running
- Letting sequences run without CRM sync — disconnected activity data makes pipeline reporting useless

---

## Integrated Stack Workflow

This is how the four tools work together end-to-end:

### Step 1: Account & Contact Identification
**Tools: Cognism + LinkedIn Sales Navigator**
- Define target account list: BFSI enterprises in Tier 1/2 markets (Dynamics account tier framework)
- Use Cognism to filter by: industry (banking/financial services/insurance), company size (1,000+ employees), geography (UK, Singapore, Japan, HK, Australia)
- Cross-reference with Sales Navigator: confirm company profile, check for recent signals (hiring growth, expansion news, leadership changes)
- Use Cognism to pull verified contacts at each account across all relevant personas (CHRO, Head of TA, CPO, Regional HR Director)
- Check TeamLink in Sales Navigator for warm paths before going cold

### Step 2: Enrichment & Research
**Tools: LinkedIn Sales Navigator + Cognism Chrome Extension**
- For every Tier 1 contact before outreach: review Sales Navigator profile — recent posts, shared connections, role tenure, company news
- Use Cognism Chrome Extension on their LinkedIn profile to surface verified email and mobile without leaving the browser
- Note any personalisation hooks: a post they published, a company announcement, a mutual connection, a job change

### Step 3: CRM Entry
**Tools: Dynamics 365 + Cognism + Sales Navigator CRM Sync**
- Push qualified contacts from Cognism into Dynamics 365 (reviewed and deduplicated)
- Sync Sales Navigator saved leads to Dynamics
- Tag contacts by persona, account tier, geography, and buying stage
- Assign to the relevant sequence in Outreach based on persona and stage

### Step 4: Outbound Execution
**Tools: Outreach.io (primary) + LinkedIn Sales Navigator**
- Enrol contact in the appropriate persona-specific sequence in Outreach
- Outreach handles email sends, call task prompts, and LinkedIn activity steps
- For LinkedIn steps: execute manually through Sales Navigator (view profile, comment, connect)
- All activity auto-syncs to Dynamics 365

### Step 5: Signal Monitoring & Prioritisation
**Tools: Outreach.io + Cognism + LinkedIn Sales Navigator**
- Outreach: monitor daily for email opens, link clicks, and replies — prioritise same-day follow-up on engagement signals
- Cognism: monitor job change alerts and intent signals daily — move newly triggered contacts to active sequences
- Sales Navigator: review account and lead alerts each morning — any news or leadership changes at Tier 1 accounts should trigger immediate personalised outreach

### Step 6: Pipeline Management & Reporting
**Tools: Dynamics 365 + Outreach.io**
- All meetings booked via Outreach sync to Dynamics as opportunities
- Progress accounts through pipeline stages in Dynamics
- Use Outreach analytics to review sequence performance weekly — open rates, reply rates, meeting booked rates by persona and sequence
- Use Dynamics dashboards for pipeline health, forecast, and activity reporting to leadership

---

## Stack Health — Weekly Hygiene Checklist

| Task | Tool | Frequency |
|---|---|---|
| Review Outreach sequence analytics | Outreach.io | Weekly |
| Check Cognism job change alerts | Cognism | Daily |
| Review Sales Navigator account/lead alerts | Sales Navigator | Daily |
| Log any off-platform activity (calls, LinkedIn DMs) | Dynamics 365 | Same day |
| Deduplicate and clean new CRM imports | Dynamics 365 | Weekly |
| A/B test subject line review | Outreach.io | Monthly |
| Refresh Tier 1 contact data | Cognism | Quarterly |
| Review pipeline stage accuracy | Dynamics 365 | Weekly |
