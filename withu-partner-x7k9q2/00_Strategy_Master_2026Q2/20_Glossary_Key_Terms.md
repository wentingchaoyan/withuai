# 20 — Glossary and Key Terms

**Version:** 1.0 · 2026-05-08
**Purpose:** Shared vocabulary across WithU's strategy documents, ensuring consistent terminology across team, board, mentors, and external communications.

---

## How to Use This Glossary

Terms are organized alphabetically. Each entry includes:
- **Definition** — clear meaning in WithU's context
- **Why it matters** — strategic significance
- **Cross-references** — related terms or documents

Common usage patterns and forbidden phrases (terms we explicitly avoid) are noted where applicable.

---

## A

### ABA (Applied Behavior Analysis)
**Definition:** Evidence-based therapy primarily for autism spectrum disorder, typically delivered in 25–40 hours/week × 2-year continuous comprehensive intervention model.

**Why it matters:** ABA is a different intensive paradigm (Pattern C) from NAPA-type block intensive (Pattern A). Insurance-mandated in 50 US states.

**WithU position:** Not an ABA-specific platform. ABA-providing patients are welcome but require integration with ABA practice management (CentralReach, etc.).

### ABLE Account
**Definition:** Tax-advantaged savings account for individuals with disabilities (Achieving a Better Life Experience Act, 2014).

**Why it matters:** Phase 3+ revenue path through partnership with ABLE administrators (True Link Financial, ABLEnow).

### Acute Moment
**Definition:** A specific, episodic event in a family's life that triggers WithU usage — new provider visit, IEP meeting, stage transition, decision point, advocacy event.

**Why it matters:** Output-first design principle. Family does not engage daily; they engage at acute moments. WithU must deliver value at each acute moment.

**Used in:** All product / engagement documents.

### AI Auto-Import
**Definition:** WithU's core friction-reduction strategy. AI extracts structure from family's unstructured data (emails, photos, voice memos, patient portals) without requiring family to manually enter data.

**Why it matters:** This is what differentiates WithU from Folia Health (manual 90-second tracking) and Picnic Health (manual record retrieval team).

**Component primitives:**
- Email OAuth integration
- Photo OCR with AI classification
- Voice memo transcription + structuring
- Patient portal aggregation (Plaid-style)

---

## B

### B2C-Led with B2B Network Effects
**Definition:** WithU's go-to-market structure. Primary user is the family (B2C). Revenue comes primarily from B2B sources (Foundation, Employer, Pharma, etc.) that benefit from family network density.

**Why it matters:** Distinguishes from "pure B2C" (which families may not pay enough for) and "pure B2B" (which lacks family engagement). Plaid / Mint / 23andMe pattern.

**Cross-reference:** See 08_Business_Model_Monetization.md and 19_Network_Effects_Model.md.

### Backbone (Lifelong Infrastructure)
**Definition:** The continuously running foundation of WithU — family-controlled lifelong record + cross-provider consent + AI auto-import. Always on, quietly capturing, never demanding family attention.

**Why it matters:** Distinguishes from acute moment deliverables. Both are essential.

**Cross-reference:** Per_Player_Story_Need_Feature_Sets.md, Layer 3a Parent.

### BAA (Business Associate Agreement)
**Definition:** HIPAA-required legal agreement between covered entities (healthcare providers) and business associates (vendors handling PHI).

**Why it matters:** WithU as BAA-ready infrastructure simplifies provider onboarding. We provide BAA template + signed agreements as standard.

### Boston Ecosystem
**Definition:** The cluster of Boston-area institutions WithU prioritizes for Phase 1: NAPA, MGH, BCH, Spaulding, Franciscan, MDSC, BU CARE, ICI/UMass.

**Why it matters:** Geographic concentration enables high-density Phase 1 validation.

**Cross-reference:** Per_Hospital_Stakeholder_Frameworks.html.

---

## C

### Capture-Passive
**Definition:** Design principle requiring that family does not perform new actions to feed data into WithU. WithU intercepts existing data flows (email, photos, voice).

**Why it matters:** Resolves the Loop Problem. Without capture-passive, AI auto-import is impossible.

**Forbidden phrasing:** "manual capture" (we explicitly do not require this); "tracking" (Folia Health's term).

### Continuity Gap
**Definition:** Industry problem #1. Intensive interventions (NAPA-type) deliver value in 3-week bursts but families have 49 weeks of "no contact." Industry-level deficit.

**Why it matters:** WithU's NAPA pitch addresses this directly. Industry framing.

### Cohort
**Definition:** A group of WithU families sharing a defined characteristic (e.g., DS preschool age, post-NAPA-intensive, etc.) used for comparison or research.

**Why it matters:** Cohort comparisons drive family value (judgment frame), provider value (LTV evidence), researcher value (RWD studies).

### Cross-Provider Integration
**Definition:** WithU's third differentiator (with pediatric specialty, lifelong arc, AI auto-import). Single family record spans intensive + local + school + medical providers.

**Why it matters:** Defensibility. No single-provider tool (TheraNest, MyChart, DSC2U) can match this span.

### Curator (Family as Curator)
**Definition:** Family's role in WithU. Family is not a data creator (not asked to type) nor a passive consumer; they are a curator who reviews, approves, and consents.

**Why it matters:** Captures WithU's design philosophy. Family agency without burden.

---

## D

### Data Ecosystem vs Revenue Source
**Definition:** Strategic distinction. Data ecosystem participants (family + providers + schools + EI) provide / receive data. Revenue sources (Foundation + Employer + Pharma) pay WithU but are external to the data ecosystem.

**Why it matters:** Plaid / Picnic Health pattern. Resolves "B2B players aren't in the data ecosystem" objection.

**Cross-reference:** See 02_Industry_Analysis.md.

### Defensibility
**Definition:** WithU's structural advantages against competitive displacement. Six layers: network effects, data accumulation, Foundation lock-in, AI quality, switching costs, specialty depth.

**Why it matters:** Sustains WithU's market position over time.

**Cross-reference:** See 15_Defensibility_Strategy.md.

### Demand-Constrained
**Definition:** Provider has more demand than capacity (e.g., NAPA has 6–12 month wait list). Marketing tools are NOT what they need. Operational + outcome + retention infrastructure is.

**Why it matters:** Distinguishes WithU's NAPA pitch from generic provider-marketing pitches. Critical reframe.

### DSC2U (Down Syndrome Clinic to You)
**Definition:** Skotko-led tool, MGH-affiliated, $49 per use, generates personalized DS care plan annually. PCORI-funded, RCT-validated (1.6x adherence improvement).

**Why it matters:** Closest DS-specific tool. WithU is positioned as 365-day companion to DSC2U's annual snapshot, not competitor.

---

## E

### EI (Early Intervention)
**Definition:** IDEA Part C federal program for children 0–3 with developmental disabilities. State-funded, home-visit based, 1–2x/week typical.

**Why it matters:** Wave 4 player. Critical transition (3-year-old) where context loss is structural.

### Employer Benefit
**Definition:** Phase 5 revenue path. Employers pay WithU as inclusion benefit for employees with special needs children. Cleo Health-style model.

**Why it matters:** Scale economics. Per-family-per-month ($30–50) at employer-funded levels.

---

## F

### Family Rights Model
**Definition:** WithU's data sourcing strategy. Families exercise legal rights to their child's records (HIPAA, FERPA, IDEA, 21st Century Cures Act). WithU automates this on family's behalf.

**Why it matters:** Provider voluntary integration is enhancer, not prerequisite. Plaid / Picnic Health pattern.

**Cross-reference:** See 18_Family_Rights_Legal_Framework.md.

### Folia Health
**Definition:** Family-caregiver-led platform, 600+ chronic conditions, free for users, manual 90-second tracking, Foundation/research revenue. Founded 2018+.

**Why it matters:** Closest competitor by business model architecture. Greatest strategic threat if pivots to DS specialty.

**WithU differentiation:** Pediatric specialty depth + AI auto-import vs Folia's generic + manual.

### Foundation
**Definition:** Disability advocacy organization (NDSS, MDSC, CDKL5 Foundation, Pitt Hopkins Research, etc.). Wave 1 partner.

**Why it matters:** Trust amplifier for family adoption + Phase 1 revenue source.

### Foundation Registry Infrastructure
**Definition:** WithU's Phase 1-2 product offering to Foundations. White-label registry with member benefit, longitudinal data, and research export.

**Why it matters:** Foundation pain (low-engagement registries) directly addressed.

### Founder Discipline (Three Core Principles)
**Definition:** WithU's non-negotiable values: Honest Realism, Structural Defensibility, User-First Absolute (with Validation Discipline and Strategic Patience as supporting).

**Why it matters:** Guides every strategic decision. Protects against typical startup failure modes.

**Cross-reference:** See 01_Mission_Vision_Values.md.

---

## G

### Geographic Equity
**Definition:** Long-term aspirational mission element. Disability families regardless of zip code or income should have access to lifelong record infrastructure.

**Why it matters:** **Not currently in MVP scope.** Held back from external messaging until product can back the claim.

### Goal vs Lever vs Tool (Hierarchy)
**Definition:** Strategic abstraction layers.
- **Goal:** What stakeholder ultimately wants (LTV, Continuous Growth, RWD)
- **Lever:** Mechanism to achieve goal (outcome evidence, cross-provider integration, etc.)
- **Tool:** Specific feature (1-page summary, IEP packet, etc.)

**Why it matters:** Prevents conflation. WithU's pitch must speak Goal language to senior decision-makers.

---

## H

### HIPAA (Health Insurance Portability and Accountability Act)
**Definition:** US healthcare privacy law. Defines covered entities, BAAs, PHI, etc.

**Why it matters:** WithU is HIPAA-compliant by design. Family-controlled consent simplifies compliance.

### HITECH Act
**Definition:** 2009 law strengthening HIPAA + giving patients electronic record access rights.

**Why it matters:** Legal foundation for WithU's Family Rights Model.

### Honest Realism
**Definition:** WithU founder's first core value. Never claim what MVP cannot back. Mission statements wait until capability matches them.

**Why it matters:** Distinguishes WithU from typical pre-launch startup over-promises.

---

## I

### IDEA (Individuals with Disabilities Education Act)
**Definition:** US federal law mandating special education services. Part B (3–22 years, school-based) and Part C (0–3 years, EI).

**Why it matters:** Defines EI and IEP processes WithU integrates with.

### IEP (Individualized Education Program)
**Definition:** Annual education plan for special needs children, mandated by IDEA Part B. Adversarial parent-school meeting, evidence-based.

**Why it matters:** Acute moment. WithU IEP packet generator is high-value family deliverable.

### IFSP (Individualized Family Service Plan)
**Definition:** EI Part C equivalent of IEP. Family-centered, 0–3 years.

**Why it matters:** EI → School transition involves IFSP→IEP conversion. WithU provides automation.

### Industry Infrastructure (Pediatric Plaid)
**Definition:** WithU's strategic positioning. Coordination layer for fragmented industry, analogous to Plaid for banking.

**Why it matters:** Distinguishes from "player-pain solver" framing. Justifies multi-stakeholder revenue and infrastructure-class valuation.

**Cross-reference:** See 02_Industry_Analysis.md.

### INCLUDE Project (NIH)
**Definition:** NIH initiative to advance research and treatment of Down syndrome (INvestigation of Co-occurring conditions across the Lifespan to Understand Down syndromE).

**Why it matters:** Strategic partnership for academic credibility and federal grant alignment.

### Information Blocking Rule (2020)
**Definition:** Federal regulation prohibiting healthcare providers from blocking patient access to electronic records.

**Why it matters:** Regulatory tailwind for WithU's Family Rights Model.

### Intensive Intervention (Block Intensive)
**Definition:** 3-week, 2-6 hours/day, multidisciplinary therapy program (NAPA, suit therapy, CIMT camps).

**Why it matters:** Industry Pattern A. WithU's Pre/Post bridge product addresses continuity gap.

---

## J

### JTBD (Jobs-to-be-Done)
**Definition:** Strategyn / Tony Ulwick framework for identifying customer needs as "jobs" they hire products to do. Functional + Emotional + Social + Outcome statements.

**Why it matters:** WithU uses JTBD framework to identify wedge entry points per player.

**Cross-reference:** WithU_Per_Player_Story_Need_Feature_Sets.md.

---

## L

### Layer 0–5 (5-Layer Architecture)
**Definition:** WithU's framework hierarchy.
- **Layer 0:** Industry-level problem (Pediatric Plaid framing)
- **Layer 1:** Single Insight (Family as integration node)
- **Layer 2:** 3 Profile Goals (LTV / Continuous Growth / RWD)
- **Layer 3:** Per-role Levers + Cross-cutting Mechanisms
- **Layer 4:** Per-Entity Positioning (9 entities)
- **Layer 5:** Engagement Mechanics (Wave 0–7, Methodology, ROI)

**Why it matters:** Each conversation lives at appropriate Layer. Prevents abstraction collisions.

### Lighthouse Customer / Partner
**Definition:** First high-visibility client whose adoption signals industry credibility. NAPA is WithU's lighthouse.

**Why it matters:** Brand alignment, not paid customer (in Phase 1). Lighthouse partnerships are mission-aligned, not revenue-driven.

### Local Therapy
**Definition:** Weekly outpatient PT/OT/ST services. Small private practice, EHR-driven (TheraNest, Fusion, WebPT).

**Why it matters:** 85-95% of intensive intervention time. WithU's Wave 2.5 player — passive participation, not direct sales.

### Loop Problem
**Definition:** Strategic concern resolved 2026-05-08. Initial framing: Local Therapy data must be in WithU for value, but Local Therapy SaaS competition is dead. Resolution: AI auto-import + Family Rights Model captures Local Therapy data without provider integration.

**Why it matters:** Existential constraint that determined product architecture.

### LTV (Lifetime Value)
**Definition:** Total economic value of a patient relationship over time. Provider Profile Goal in WithU framework.

**Why it matters:** Speaks to provider CFO/CEO language. Distinguishes WithU pitch from "outcome documentation" framing (which is the lever, not goal).

---

## M

### MDSC (Massachusetts Down Syndrome Congress)
**Definition:** Massachusetts state-level DS advocacy organization. ED Maureen Gallagher. Skotko chairs Medical & Scientific Advisory Board.

**Why it matters:** Wave 1 lighthouse Foundation partner. May 2026 visit critical for Phase 1 pilot agreement.

### MECE (Mutually Exclusive, Collectively Exhaustive)
**Definition:** Strategic analysis principle. Categorize completely without overlap.

**Why it matters:** WithU MECE-analyzed 27/43/41 levers per Profile to derive selected wedge JTBDs.

**Cross-reference:** WithU_Strategy_MECE_Lever_Analysis.md.

### Mission Lock
**Definition:** Governance mechanism preventing erosion of WithU's core values under business pressure (founder share class, board seats, community oversight).

**Why it matters:** Sustainability protection. Ensures mission survival post-fundraising.

**Cross-reference:** See 16_Mission_Lock_Governance.md.

---

## N

### NAPA (Pediatric Therapy)
**Definition:** Naturally Affecting Pediatric Abilities Center. Founded 2008 by Lynette LaScala. CEO Bryan LaScala. 10 international locations. $15M revenue. NeuroSuit + DMI methodology. WithU's Phase 1 lighthouse partner.

**Why it matters:** Wave 1.5 lighthouse partnership. Industry signal for WithU's outcome documentation thesis.

**Differentiator:** Demand-constrained (wait list), needs operational + outcome + retention infrastructure, not marketing tool.

### Network Effect
**Definition:** Each new participant in WithU's ecosystem creates value for existing participants. Three-sided (family + provider + research/foundation).

**Why it matters:** Primary defensibility mechanism. Network density thresholds (3,000 families = institutional moat) define maturity.

**Cross-reference:** See 19_Network_Effects_Model.md.

---

## O

### Output-First Design
**Definition:** Product principle. Family asks for deliverable (1-page summary, IEP packet, etc.) at acute moment; backend record builds as side effect.

**Why it matters:** Prevents "yet another tracking app" failure mode. Aligns family motivation with WithU usage.

**Forbidden phrasing:** "Daily app" or "engagement-driven" (we explicitly are not).

---

## P

### Pediatric Plaid
**Definition:** Strategic positioning for WithU. Industry coordination infrastructure for pediatric disability care, analogous to Plaid for banking.

**Why it matters:** Captures the industry-level insight. Justifies infrastructure-class valuation.

### Picnic Health
**Definition:** Family-controlled health record aggregator. $60M Series C. Manual team retrieval model. Pharma RWD revenue. Adult / rare disease focus.

**Why it matters:** Best-funded adjacent competitor. WithU differentiation: pediatric specialty + AI auto-import + lifelong arc.

### Player (Stakeholder)
**Definition:** WithU's framework for the 9+ stakeholder types in pediatric disability care: Family, Foundation, NAPA, Hospital DSP, Local Therapy, Researcher, School/EI, Employer, Pharma, State Agency, Special Needs Financial.

**Why it matters:** Each player has distinct JTBD wedge entry point.

### PROMs (Patient-Reported Outcome Measures)
**Definition:** Validated questionnaires for patient self-reporting of health status / function.

**Why it matters:** Research-grade outcome data. WithU library includes PROMs delivered with low burden.

---

## R

### Real-World Data (RWD)
**Definition:** FDA-recognized data source for regulatory submissions. Includes claims data, EHR-derived data, registries, and (increasingly) family-reported / wearable data.

**Why it matters:** Researcher Profile Goal. Pharma revenue path. WithU's family-anchored real-world data is structurally unique vs claims/EHR-only sources.

### Researcher
**Definition:** Wave 2 player. Academic researchers (Skotko Lab, BU CARE, ICI), Foundation registry researchers, INCLUDE Project, Pharma RWD teams.

**Why it matters:** Phase 2 revenue path + academic credibility. JTBD wedge: recruitment efficiency.

---

## S

### Skotko (Brian Skotko, MD MPP)
**Definition:** MGH Down Syndrome Program Director. DSC2U creator. MDSC MSAB chair. Harvard-affiliated.

**Why it matters:** Critical Wave 2 researcher partnership. WithU is positioned as DSC2U complement, not competitor.

### Stage Transition (Crisis)
**Definition:** Industry problem #9. Every transition (EI→school, elementary→middle, school→adult) loses 50%+ of context. WithU provides transition portfolios.

**Why it matters:** High-value family deliverable + EI / School value proposition.

### Strategic Patience
**Definition:** Founder discipline. Sequence to WithU's readiness, not external calendars. Khan Academy archetype.

**Why it matters:** Distinguishes WithU from typical "growth at any cost" startups.

### Switching Cost
**Definition:** Family's investment in WithU compounds over time, making competitive switch costly. After 18 months, switching means rebuilding 50–200 documents, 10–30 provider relationships, multi-stage transitions, cohort comparisons.

**Why it matters:** Defensibility layer 5.

---

## T

### TheraNest / Fusion / WebPT
**Definition:** Local Therapy practice management / EHR systems. Commodity SaaS, $50–100/month, 5+ year usage typical.

**Why it matters:** WithU does NOT compete with these. Phase 2-3 API integration target.

### Tragedy of the Commons
**Definition:** Industry-level framing. Pediatric disability care integration is everyone's problem and no one's job. No single player has incentive or capability to solve it alone.

**Why it matters:** Justifies WithU as missing infrastructure.

### Trigger Moment
**Definition:** Specific time in player's workflow when WithU appears. Per JTBD framework. Family: pre-visit, IEP, transition, decision. Provider: intake, mid-session, post-discharge, etc.

**Why it matters:** Notification design + UX timing.

---

## U

### User-First Absolute
**Definition:** Founder discipline. Family experience is non-negotiable. Zero double-work hard requirement.

**Why it matters:** Resolves Loop Problem. Drives AI auto-import architecture investment.

---

## V

### Validation Discipline
**Definition:** Founder discipline. Never proceed on hypothesis alone. 30-day sprint cadence keeps assumptions tied to reality.

**Why it matters:** Prevents pre-product founder over-investment in unverified assumptions.

### Value Proposition Canvas
**Definition:** Osterwalder's framework. Customer Profile (Jobs/Pains/Gains) and Value Map (Products/Pain Relievers/Gain Creators).

**Why it matters:** WithU has documented Customer Profiles for Family, Provider, Researcher.

---

## W

### Wave 0–7 (Engagement Sequence)
**Definition:** WithU's GTM sequence.
- Wave 0: Family
- Wave 1: Foundation
- Wave 1.5: Lighthouse Provider
- Wave 2: Researcher
- Wave 2.5: Local Therapy passive
- Wave 3: Hospital DSP
- Wave 4: School / EI
- Wave 5: Employer Benefit
- Wave 6: Pharma RWD
- Wave 7: State Agency / Financial

**Why it matters:** Sequence determines Phase plan and capital deployment.

**Cross-reference:** See 07_GTM_Engagement_Sequence.md.

### Wedge JTBD
**Definition:** The single most acute Job-to-be-Done for a player that WithU enters with. Provides immediate value; expands to other JTBDs over time.

**Why it matters:** Adoption strategy. Player commits because wedge JTBD is solved overwhelmingly well.

---

## Z

### Zero Double-Work
**Definition:** WithU's hard product requirement. Family does not duplicate effort by using WithU vs not using WithU.

**Why it matters:** Loop Problem resolution. Enforced through AI auto-import.

---

## Forbidden Phrases (We Explicitly Avoid)

| Forbidden | Why | Use Instead |
|---|---|---|
| "Tracking app" | Folia Health framing; doesn't capture cross-provider integration | "Lifelong record infrastructure" |
| "Patient portal" | Too narrow; we span outside hospitals | "Family-anchored data integration" |
| "EHR replacement" | We explicitly do not replace EHRs | "Family-side complement to existing tools" |
| "Growth hacking" | Not aligned with mission integrity | "Mission-aligned engagement" |
| "Disrupting healthcare" | Vague, hyperbolic | "Building missing infrastructure" |
| "Daily app" | We explicitly do not require daily use | "Acute moment delivery" |
| "Sales tool for providers" | Wrong framing for NAPA-type partners | "Operational + outcome + retention infrastructure" |
| "Solve the disability crisis" | Too grand for MVP | "Solve the integration deficit" |

---

## Naming Conventions

### Project Name
**WithU** — always one word, capital W and U. Domain: withuai.com (or similar, TBD).

### Product Names (when finalized)
- WithU Family (consumer app)
- WithU Provider Console
- WithU Foundation Console
- WithU Research Portal
(Names TBD; placeholder)

### Internal Document Naming
- Strategy docs: `XX_Title_With_Underscores.md` where XX is two-digit ordinal
- Working drafts: descriptive name in Title_Case.md
- Visual decks: `Topic_Visual.html`
- Appendix: `A_Topic_Name.md` etc.

---

## Pronunciation Notes

- **WithU**: pronounced "with-you" (as in companionship)
- **NAPA**: pronounced "NAH-puh" (as in California valley)
- **DSC2U**: pronounced "DSC-two-U" (Dr. Skotko's tool)
- **JTBD**: spelled out, "Jobs-to-be-Done"
- **MDSC**: spelled out, "Mass DSC"

---

## Languages

- **Primary working language:** Mixed Japanese / English (founder is Tokyo-based)
- **Strategy Master document set:** English
- **Family-facing product:** English Day 1, Spanish Year 2, others later
- **Foundation pitches:** English

---

**Last reviewed:** 2026-05-08
**Next major review:** 2026-08-08 (post-30-day sprint integration)
**Document owner:** Ting Wen, Founder

---

*This glossary is living. Add terms as strategy evolves. Remove or revise terms as understanding deepens. Maintain consistency across all WithU strategy documents.*
