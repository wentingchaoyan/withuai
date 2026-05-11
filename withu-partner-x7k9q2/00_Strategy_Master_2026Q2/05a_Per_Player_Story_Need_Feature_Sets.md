# 05a — Per-Player Story / Need-Gap / Feature Set / Trigger Moment

**Version:** 1.0 · 2026-05-08
**Audience:** Sales, partnerships, product, engineering
**Position:** Detailed extension of `05_Value_Proposition.md` — per-player customization spec
**Source:** Consolidated from `04_Topics/WithU_Per_Player_Story_Need_Feature_Sets.md`

---

## Purpose

This document specifies the **custom story + custom Feature Set** WithU delivers to each of 9 stakeholder players, while extracting the **common primitives** that enable composable internal implementation.

**Architectural Insight:** Customer-facing presentation is completely customized; engineering-facing is composable primitives. This is the structural foundation of WithU's moat.

---

## The 4-Element Framework

For each player, we define:

| Element | Definition | Why It Matters |
|---|---|---|
| **Story** | What is happening to this player today; the peak of their pain | Empathy + diagnosis. The starting point of every pitch |
| **Need-Gap** | Where existing tools cannot reach | Foundation for WithU's structural necessity |
| **Feature Set** | Concrete capabilities WithU provides | Specification of what to build |
| **Trigger Moment** | The point in their business cycle where WithU appears | Foundation for UX design and notification timing |

---

## 1. Intensive Provider — NAPA Center, Suit Therapy Clinics, CIMT Camps

| Element | Content |
|---|---|
| **Story** | 3-week intensive ends → family flies home → relationship fades → 1-year return uncertain. Each lost relationship = $5–15K LTV loss. Outcome evidence is anecdotal. Pricing cannot be defended. |
| **Need-Gap** | No continuity layer between intensives. Ocean Friends is admin-only; JotForm is single-shot; Cliniko is clinic-bounded. The family's 50 weeks per year are a complete blind spot. |
| **Feature Set** | (1) Pre-arrival baseline capture (starting 4 weeks before)<br>(2) During-intensive synchronized progress tracking<br>(3) Post-departure home program with adherence visibility<br>(4) Re-engagement triggers (6 / 12 months out)<br>(5) Cohort outcome data infrastructure (research-grade) |
| **Trigger Moment** | (1) 4 weeks before visit: pre-arrival prep<br>(2) Daily during visit: clinical update + photo/video<br>(3) 12 weeks post-return: adherence prompts<br>(4) 6-12 months later: re-engagement (next intensive proposal evidence) |

**Pitch Hook:** "WithU extends the relationship that begins in your clinic — turning each intensive into the start of a lifelong customer arc."

---

## 2. Local Therapy — Weekly PT/OT/ST, Small Outpatient Clinics

| Element | Content |
|---|---|
| **Story** | Weekly 30-60 minute sessions → family forgets → home practice fails → 6 months later adherence is zero → families churn citing "no progress." Insurance prior auth consumes hours. Documentation eats 30-40% of clinician time. |
| **Need-Gap** | Inter-session continuity + home program adherence visibility + cross-provider data inflow + insurance documentation. TheraNest / WebPT only see clinic walls. |
| **Feature Set** | (1) Home practice capture (photo / video prompts, family-side)<br>(2) Adherence dashboard (for therapist)<br>(3) Auto-prepared progress notes for insurance / prior auth<br>(4) Cross-provider data flow (intensive, school, pediatrician)<br>(5) Re-engagement after attendance gap |
| **Trigger Moment** | (1) Immediately post-session: therapist instructions recorded<br>(2) Next day: family-side adherence prompt<br>(3) Pre-next-session: therapist review + adjustment<br>(4) Monthly: insurance documentation auto-prep<br>(5) On attendance gap detection: re-engagement |

**Pitch Hook:** "WithU does NOT replace TheraNest. It captures what's happening at home — the 95% TheraNest is structurally blind to. Adherence becomes visible, prior auth gets faster, and families are detected before they churn."

---

## 3. Hospital DS Program — Boston Children's Hospital, Mass General DSP, Sie Centers

| Element | Content |
|---|---|
| **Story** | 1-2 annual multi-disciplinary visits → families share extensively in the moment → 12 months pass → next visit, family doesn't remember what was discussed. DSC2U is annual snapshot. Patient Gateway is portal communication only. |
| **Need-Gap** | Within-year continuity + cross-specialist coordination + outside-hospital provider data. Epic is hospital-bounded. |
| **Feature Set** | (1) Annual care plan companion (DSC2U integration)<br>(2) Cross-specialist visibility (integration of cardiology, GI, ENT, neurology findings)<br>(3) Interim event tracking (hospitalizations, specialized consultations)<br>(4) Pre-visit prep packet (auto-generated, 4 weeks ahead)<br>(5) Outside-provider data import (school, local PT, intensive) |
| **Trigger Moment** | (1) 4 weeks before visit: prep<br>(2) Visit day: cross-specialist note integration<br>(3) Quarterly post-visit: interim check-ins<br>(4) On specialist referral: context handoff |

**Pitch Hook (for Skotko):** "DSC2U is the authority on annual care plans. WithU is the daily / weekly companion layer that keeps annual plans alive. Annual plan + 365-day execution record = closed loop care."

---

## 4. EI — Early Intervention Agency (IDEA Part C, 0-3 years)

| Element | Content |
|---|---|
| **Story** | Weekly 1-2 home visits → IFSP review every 6 months → transition to public preschool at age 3 → all data lost → school re-evaluates → family burnout. High specialist turnover, context loss. |
| **Need-Gap** | EI → School transition packet + IFSP-IEP bridge + state reporting infrastructure. State-specific reporting tools are antiquated systems. |
| **Feature Set** | (1) Auto-generated transition portfolio (triggered 90 days before 3rd birthday)<br>(2) Cross-agency data flow (EI ↔ School District)<br>(3) Outcome trajectory (family + school sides)<br>(4) State reporting prep (IFSP outcomes documentation)<br>(5) Specialist handoff packet (context preservation on specialist change) |
| **Trigger Moment** | (1) IFSP 6-month review<br>(2) 90 days before 3rd birthday: transition prep<br>(3) 30 days post-school-start: handoff verification<br>(4) On specialist change: context transfer |

**Pitch Hook:** "EI graduation is when context disappears — the industry's biggest pain. WithU auto-generates the transition portfolio 90 days before the 3rd birthday. The school no longer needs to re-evaluate."

---

## 5. School / IEP Team — IDEA Part B, Public SPED Coordinator

| Element | Content |
|---|---|
| **Story** | Annual IEP meeting → parent doesn't bring "evidence" → school proposes, parent must accept → service hours reduced → next year repeats. Due process litigation risk. Teacher burnout. |
| **Need-Gap** | Evidence-based IEP prep + outside-school data integration + advocacy equalization. No structural way to reduce adversarial relationships. |
| **Feature Set** | (1) IEP packet generator (auto-collects 12 months of evidence, for both parent and school sides)<br>(2) Outside therapy data import (local PT/OT/ST data feed)<br>(3) Goal trajectory tracking (multi-year)<br>(4) Annual review preparation (school-side tool)<br>(5) Quarterly progress dashboard |
| **Trigger Moment** | (1) 30 days before IEP meeting: both-side prep<br>(2) Quarterly progress check<br>(3) Annual review<br>(4) 30 days before new school year: teacher onboarding |

**Pitch Hook:** "Adversarial school-parent dynamics come from information asymmetry. WithU is the infrastructure that lets both sides converse on the same factual base. Due process litigation costs $20-200K per case — preventing just one recovers a year's WithU subscription."

---

## 6. Spaulding-Type Specialty Rehab — Discharge Transition Focused

| Element | Content |
|---|---|
| **Story** | Inpatient → outpatient → home discharge → HEP (home exercise program) handed on paper → 1 month later family "thinks they're doing it" → PROMs distributed on paper, only 30% returned → CMS quality metric declines. |
| **Need-Gap** | Discharge continuity + PROMs digital infrastructure + CMS quality reporting. HEP delivery is paper or PT-Helper / RehabAccess; low adherence. |
| **Feature Set** | (1) Digital HEP delivery (exercise videos + adherence tracking)<br>(2) Adherence prompts (family-facing)<br>(3) PROMs digital administration (low-burden, monthly)<br>(4) CMS quality reporting prep<br>(5) Discharge → outpatient transition packet |
| **Trigger Moment** | (1) 24 hours before discharge: HEP digitization<br>(2) Day 7 / 30 / 90 follow-up<br>(3) PROMs monthly<br>(4) CMS reporting cycle |

**Pitch Hook:** "PROMs completion from 30% to 80% increases CMS quality bonuses. HEP adherence visibility reduces readmissions. For Spaulding, the ROI is calculable in reimbursement uplift."

---

## 7. Franciscan-Type Standard Outpatient — 15-Year Family Relationship

| Element | Content |
|---|---|
| **Story** | PT, OT, ST, and feeding therapists see the same family, but each writes separate notes → zero cross-discipline integration → family says "I explain the same thing 4 times" → CFO struggles with retention → pressure increases under BCH acquisition. |
| **Need-Gap** | Multi-disciplinary note unification + family loyalty infrastructure + CFO ROI visibility. |
| **Feature Set** | (1) Cross-discipline single record (PT/OT/ST/feeding integrated view)<br>(2) Family-facing relationship view ("We've known your family for 15 years")<br>(3) Long-term progression dashboard (15-year trajectory)<br>(4) CFO retention metric (family LTV by discipline mix)<br>(5) New therapist onboarding context (reducing handoff friction) |
| **Trigger Moment** | (1) New therapist onboarding<br>(2) Cross-discipline care plan review<br>(3) Annual relationship anniversary<br>(4) CFO quarterly review |

**Pitch Hook (for CFO):** "Your 15-year family relationships are siloed in data form. WithU productizes loyalty through a family-facing relationship view. Multi-disciplinary note unification reduces therapist time by 25%."

---

## 8. MDSC / Foundations — Advocacy / Community

| Element | Content |
|---|---|
| **Story** | New families first connect at New Family Social → engagement drops after 1 year → Buddy Walks are quiet → families want to re-engage at stage transitions but contact is broken. Member retention is the NPO's lifeline. |
| **Need-Gap** | Member retention + multi-stage engagement + advocacy data aggregation. Newsletter is one-directional; Conference is once a year. |
| **Feature Set** | (1) Stage-based content delivery (proactive information for families' next needs)<br>(2) Community matching (connect similar families)<br>(3) Advocacy data aggregation (state-level reporting for policy work)<br>(4) Event RSVP integration<br>(5) Parents First Call program enhancement (mentor matching) |
| **Trigger Moment** | (1) Member sign-up + 30 / 90 / 365 days<br>(2) Stage transition events (EI graduation, school entry, etc.)<br>(3) Annual conference / Buddy Walk<br>(4) Crisis moments (new diagnosis, hospitalization) |

**Pitch Hook:** "MDSC's 7,000 members are most engaged at signup, then decay. WithU reverses that decay curve. Every time a family's stage changes, MDSC returns with relevance — that infrastructure."

---

## 9. Researcher — Skotko Lab, BU CARE, ICI, Foundation Registries

| Element | Content |
|---|---|
| **Story** | Grant won → REDCap study built → recruitment begins ($200-2,000 per family) → 50% drop at 1 year → underpowered → next grant difficult. Publication impact limited by real-world data scarcity. |
| **Need-Gap** | Engaged family base + low-burden longitudinal capture + IRB infrastructure + RWD (FDA-aligned). |
| **Feature Set** | (1) Pre-engaged family pool (recruitment funnel)<br>(2) Routing to IRB-approved study (existing REDCap integration)<br>(3) Low-burden PROMs delivery (1-2 min / month)<br>(4) Real-world data export (IRB-ready, de-identified)<br>(5) Co-authoring infrastructure (family-engaged research) |
| **Trigger Moment** | (1) Grant submission timing<br>(2) Study enrollment milestones<br>(3) Quarterly data quality review<br>(4) Publication deadlines<br>(5) Next grant cycle |

**Pitch Hook:** "Keep your REDCap study running as-is. WithU acts as recruitment funnel — families are already engaged, so retention is 80%. Per-study cohort cost reduced by 70-90%."

---

## 10. Foundation / Pharma RWD — Phase 2-3 Visibility

| Element | Content |
|---|---|
| **Story** | Rare diseases (CDKL5, Pitt Hopkins, Angelman, Rett) → Foundation registry is one-time enrollment only → no research-grade longitudinal data → Pharma wants to develop treatments but lacks data → development declines → patient population without treatment. |
| **Need-Gap** | Engaged registry + Pharma-grade RWD + regulatory infrastructure + cross-Foundation collaboration. |
| **Feature Set** | (1) White-label registry SaaS for Foundations<br>(2) Pre-built RWD packages (FDA-aligned data export)<br>(3) Privacy-preserving Pharma export<br>(4) Regulatory submission support<br>(5) Cross-condition comparative research enablement |
| **Trigger Moment** | (1) Foundation registry launch<br>(2) Pharma partnership negotiation<br>(3) Regulatory submission cycle<br>(4) Annual Foundation conference |

**Pitch Hook (for Foundations):** "Your 200-2000 patient registry becomes an engaged longitudinal cohort on our infrastructure. Your Pharma negotiation power transforms."

---

## 11. Pattern Extraction — 6 Common Primitives Across All 9 Players

Each player has a custom Story, but their Feature Sets are built from **6 common primitives in different combinations + parameters**:

| Primitive | Local | Hospital | EI | School | Spaulding | Franciscan | MDSC | Researcher | NAPA |
|---|---|---|---|---|---|---|---|---|---|
| **P1 · Pre-event context generator** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **P2 · During-event capture / sync** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | △ | ✓ | ✓ |
| **P3 · Post-event follow-up triggers** | ✓ | ✓ | ✓ | ✓ | ✓ | △ | ✓ | △ | ✓ |
| **P4 · Cross-stakeholder granular sharing** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | △ | ✓ | ✓ |
| **P5 · Outcome tracking (PROMs / GMFM / custom)** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | △ | ✓ | ✓ |
| **P6 · Re-engagement triggers** | ✓ | ✓ | ✓ | △ | ✓ | △ | ✓ | △ | ✓ |

→ **6 core primitives serve all 9 players**. Each player's Feature Set is realized through **different combinations + parameters** of these 6 primitives.

---

## 12. Per-Primitive Parameters by Player (Implementation View)

### P1 · Pre-event Context Generator

| Player | Trigger | Output Form |
|---|---|---|
| NAPA | 4 weeks before visit | Intensive prep packet |
| Local | Just before session | Quick session brief |
| Hospital | 4 weeks before visit | Pre-visit summary |
| EI | 30 days before IFSP | IFSP review prep |
| School | 30 days before IEP | IEP advocacy packet |
| Spaulding | 24h before discharge | Discharge HEP package |
| Franciscan | New therapist | Multi-disc context briefing |
| MDSC | Stage transition | Stage-appropriate resource bundle |
| Researcher | Study enrollment | Patient eligibility profile |

### P2 · During-event Capture / Sync

| Player | Capture Point | Sync Target |
|---|---|---|
| NAPA | Daily intensive activities | Family + clinical record |
| Local | Session notes + adherence | Therapist + family |
| Hospital | Specialist consultations | Cross-specialist record |
| EI | Home visit observations | IFSP team + family |
| School | Therapy session notes | IEP team + family |
| Spaulding | Discharge transition | Outpatient + family |
| Franciscan | Multi-disc sessions | Cross-discipline record |
| Researcher | PROMs administration | Study data + family |

### P3 · Post-event Follow-up Triggers

| Player | Days Post-Event | Action |
|---|---|---|
| NAPA | 7 / 30 / 90 / 180 | Adherence + re-engagement |
| Local | 1 / 7 / 14 | Adherence prompt + next session prep |
| Hospital | 30 / 90 / 180 | Quarterly check-in |
| EI | 30 / 90 / 180 | IFSP progress check |
| School | 30 / 90 | Quarterly progress |
| Spaulding | 7 / 30 / 90 | HEP adherence + PROMs |
| MDSC | 30 / 90 / 365 | Member engagement |
| Researcher | Per study protocol | Study compliance |

### P4 · Cross-stakeholder Granular Sharing

All players use the **same infrastructure**. Parameters differ:
- Who is the share target?
- What is the share scope?
- How long is the share period?
- What is the share purpose?
- Is revocation supported?

### P5 · Outcome Tracking

| Player | Primary Instruments |
|---|---|
| NAPA | GMFM-88, PEDI, custom milestones |
| Local | Discipline-specific (PT goals, OT goals, ST goals) |
| Hospital | Comprehensive PROM library |
| EI | IFSP outcomes |
| School | IEP goals tracking |
| Spaulding | CMS-required PROMs |
| Franciscan | Multi-disc outcome aggregation |
| Researcher | Study-specific instruments |

### P6 · Re-engagement Triggers

| Player | Trigger Condition | Action |
|---|---|---|
| NAPA | 6 / 12 months quiet | Next intensive proposal |
| Local | Attendance gap > 4 weeks | Re-engagement message |
| Hospital | Annual visit due | Pre-visit prep |
| EI | IFSP review due | Family + team alignment |
| Spaulding | PROMs non-completion | Reminder cascade |
| Franciscan | Discipline gap detected | Cross-discipline referral |
| MDSC | Stage change detected | New resource delivery |

---

## 13. MVP Implementation Priority

Priority based on difficulty × strategic leverage:

| Primitive | Difficulty | Leverage | MVP Priority | Day 1 Players Covered |
|---|---|---|---|---|
| **P1 · Pre-event context** | Medium | ★★★ | **MVP P0** | 9/9 players |
| **P2 · During-event capture** | Low | ★★ | **MVP P0** | 8/9 players |
| **P4 · Cross-stakeholder sharing** | High (HIPAA, BAA) | ★★★ | **MVP P0** | 9/9 players (moat itself) |
| **P3 · Post-event follow-up** | Medium | ★★ | **MVP P1** | 9/9 players |
| **P5 · Outcome tracking** | Medium-High | ★★ | **MVP P1** | 9/9 players |
| **P6 · Re-engagement** | Low-Medium | ★ | **MVP P2** | 7/9 players |

→ **With 3 P0 primitives implemented in MVP, 6-7 players' Feature Sets are partially satisfied**. This is the architectural foundation for approaching multiple stakeholders from Day 1.

---

## 14. Strategic Implications — Why Architecture Is the Moat

### Structural Limits of Competitors

Player-specialized competitors (DSC2U, TheraNest, Ocean Friends, REDCap, etc.):
- Optimized for **one player only**
- **Cross-stakeholder integration is structurally impossible**
- Each sees only "their own domain"

### WithU's Architectural Advantage

- **6 primitives are cross-stakeholder by design**
- Feature Set delivered to one player **automatically incorporates other players' data**
- Example: NAPA's pre-arrival packet automatically includes EI history, local PT progress, school IEP goals
- This is impossible for any single-player EHR

### Network Effect Quantification

```
1 player only: equivalent to competitors
+ 1 player added: context 2× richer
+ 5 players connected: context 5× richer, 5× switching cost
+ 10 players connected: unmovable

Industry where each family touches 25-50 providers → 
WithU's moat strengthens exponentially with player count
```

---

## 15. Initial Conversation Scripts per Player (30s / 90s)

### 30 Seconds (Common Template)
> "Your [one-sentence Story] — this is the problem we solve. We deliver [Need-Gap one-sentence] through [one Feature Set]. Pilot starts at [Trigger Moment] and sits on top of your existing tools without replacement."

### 90 Seconds (Player-Specific Custom)
- Detailed Story
- Need-Gap structural explanation
- Top 3 Feature Set items
- ROI numbers (in their language)
- Pilot model (disruption minimization)

---

## 16. File References and Next Steps

Based on this document:

1. **`WithU_Framework_Architecture_Visual.html`** — Layer 3 extended to 9 player segments
2. **`WithU_Strategy_MECE_Lever_Analysis.md`** — Provider Profile split into 3 sub-segments
3. **`Per_Hospital_Stakeholder_Frameworks.html`** — Add Local Therapy / EI / School entities to Section 7c
4. **New:** `WithU_6_Primitives_Tech_Spec.md` — Technical spec per primitive (implementation view)
5. **New:** `WithU_Player_Specific_Pitch_Decks/` — Per-player 1-2 page pitch (sales operational)

---

## 17. Validation Plan (Boston Visit)

Validate story + need-gap with at least 1 person per player segment:

| Segment | Validation Target | Boston Visit |
|---|---|---|
| Intensive | Bryan LaScala / Nikki Rice (NAPA) | 5/11 |
| Local | TBD (via family network) | 5/10-11 |
| Hospital | Skotko-area observation, BCH Hale | 5/11 |
| EI | TBD (via MDSC contact) | 5/11 |
| School | TBD (via family community) | 5/10 Duckling Day |
| MDSC | Maureen Gallagher | 5/11 |
| Researcher | Skotko, ICI (phone / email) | 5/11+ follow-up |

→ For each segment, verify in 1-on-1 conversations whether the Story resonates and the Need-Gap is real.

---

## 18. Cross-References

### Closely Related Documents
- **`05_Value_Proposition.md`** — Parent VP document; this 05a expands per-player detail
- **`07_GTM_Engagement_Sequence.md`** — 8-Wave sequence using these 9 players
- **`08_Business_Model_Monetization.md`** — Revenue paths per player segment
- **`15_Defensibility_Strategy.md`** — Moat from cross-stakeholder primitives

### Source Document
- **`04_Topics/WithU_Per_Player_Story_Need_Feature_Sets.md`** — Original Japanese working draft

---

## Iteration Log

- **v1 (current):** 9 player Story / Need-Gap / Feature Set / Trigger Moment + 6 primitives extracted
- **v2 (post-Boston):** Each player's Story updated with empirical validation
- **v3 (post-first 5 customer pilot):** Feature Set updated with implementation feedback
- **v4 (post-GTM scale):** Each player's actual ROI documented

---

**Last reviewed:** 2026-05-08
**Source document:** `04_Topics/WithU_Per_Player_Story_Need_Feature_Sets.md`
**Document owner:** Ting Wen, Founder

---

## One-Sentence Summary

> **WithU delivers 9 player-specific Stories with custom Feature Sets, each composed from 6 common primitives (Pre-event context, During-event capture, Post-event follow-up, Cross-stakeholder sharing, Outcome tracking, Re-engagement triggers); this architecture means MVP P0 implementation of 3 primitives partially satisfies 6-7 players from Day 1, while cross-stakeholder design creates exponential moat as each new player connection makes existing players' Feature Sets richer through shared data flow.**
