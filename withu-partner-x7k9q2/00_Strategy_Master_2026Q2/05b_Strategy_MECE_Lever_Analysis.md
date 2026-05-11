# 05b — Strategy MECE Lever Analysis (3 Profiles)

**Version:** 1.0 · 2026-05-08
**Audience:** Founder, strategy team, investors who want the reasoning behind the value proposition
**Position:** Detailed extension of `05_Value_Proposition.md` — shows the MECE lever space and why WithU chose the levers it did
**Source:** Consolidated from `04_Topics/WithU_Strategy_MECE_Lever_Analysis.md`

---

## Purpose

For each of the three stakeholder profiles (Provider / Parent / Researcher), this document:
1. States the **Goal** (what WithU is ultimately optimizing for the stakeholder)
2. Exhaustively enumerates all possible **Levers** that could move the Goal (MECE — Mutually Exclusive, Collectively Exhaustive)
3. Identifies which levers **WithU chooses to pull** and why
4. Records which levers are **explicitly excluded**, with rationale

This sits behind every pitch. When a stakeholder asks "why this and not that?", the answer is in here.

---

## 0. The 3-Layer Model (corrected structure)

```
GOAL (the core objective)
  ↑ measured by KPI
LEVER (strategic lever — the layer to enumerate MECE)
  ↑ how
TOOL / FEATURE (product / functionality)
```

An earlier draft conflated Levers and Tools with Goals. This version locks Goal at the top, enumerates Levers MECE, then narrows to the chosen subset.

| Profile | Goal (corrected) | KPI |
|---|---|---|
| **Provider** | **LTV (Lifetime Value) maximization** | Revenue per patient × visits × years × margin |
| **Parent** | **Lifelong Growth Partnership** | Appropriate interventions delivered at each developmental stage / outcome trajectory |
| **Researcher** | **Real-World Data supply** | Data depth × breadth × longitudinality × uniqueness |

---

# Profile 1: Provider — Goal: LTV Maximization

## A. The LTV equation and MECE lever space

```
LTV = Revenue per visit × Visits per year × Years retained × Margin
       ─────A─────         ────B────         ────C────       ──D──
                 + Referrals from this customer ─E─
```

Decomposed MECE, there are **8 categories** that cover every way a provider can lift LTV, yielding **27 candidate levers**:

### Category 1: Price / unit revenue (Revenue per visit)
- **L1.** Raise self-pay price (justified by outcome evidence)
- **L2.** Raise insurance reimbursement rate (documentation richness)
- **L3.** Upsell to higher-margin services (specialty equipment, additional modality)
- **L4.** Reduce billing leakage (prevent under-billing)

### Category 2: Visit frequency (Visits per year)
- **L5.** Re-intensive within the same year (annual → semi-annual)
- **L6.** Cross-sell (family receiving PT also receives ST)
- **L7.** Expand to siblings / extended family members

### Category 3: Years retained
- **L8.** Lifecycle-spanning continuity (preschool → school-age → adolescence → adult transition)
- **L9.** Family loyalty / community building
- **L10.** Prevent competitor switching (switching cost)

### Category 4: Margin improvement
- **L11. Workflow improvement:** clinician time efficiency, documentation burden reduction
- **L12.** Billing automation (reduce under-billing & denial rates)
- **L13.** Reduce staff turnover (recruiting cost reduction)
- **L14.** SaaS / operating cost reduction

### Category 5: Referrals
- **L15.** Word-of-mouth from existing families
- **L16.** Provider-to-provider referrals
- **L17.** Outcome stories as marketing material

### Category 6: CAC (Customer Acquisition Cost)
- **L18. Lower the front-door threshold:** trial / sample session
- **L19.** Inbound SEO / educational content
- **L20.** Foundation / advocacy partnerships for warm leads

### Category 7: Churn reduction
- **L21. Post-rehab follow-up:** continued relationship after the family flies home
- **L22.** Early detection of dissatisfaction
- **L23.** Re-engagement campaigns

### Category 8: Inter-session engagement ★ NAPA-specific
- **L24.** Continuity bridge before and after a travel-intensive episode
- **L25.** Data flow with home-based providers
- **L26.** Home-program adherence support
- **L27.** Trajectory data builds the case for "come again next year"

**All 27 levers approximate a MECE enumeration.**

## B. WithU contribution × strategic fit

For each lever, rate WithU's contribution potential and strategic fit (specifically for NAPA as the lighthouse provider):

| Lever | WithU contribution | NAPA strategic fit | Comment |
|---|---|---|---|
| L1 (raise self-pay price) | △ | ★★★ | Outcome evidence is a means, but time-to-effect is long |
| L2 (insurance reimbursement) | △ | ★ | NAPA is primarily self-pay |
| L3 (upsell) | × | ★ | Clinic-side responsibility |
| L4 (billing leakage) | ○ | ★★ | Smart templates partially help |
| L5 (re-intensive frequency) | ○ | ★★ | Continued relationship drives re-visits |
| L6 (cross-sell) | △ | ★ | NAPA already offers integrated services |
| L7 (family expansion) | △ | ★ | Secondary effect |
| **L8 (lifecycle continuity)** | **◎◎** | **★★★** | **WithU's lifelong-record core strength** |
| L9 (loyalty) | ◎ | ★★★ | Longitudinal record deepens family bond |
| L10 (switching prevention) | ◎ | ★★ | Switching cost rises |
| **L11 (workflow improvement)** | △ | ★★ | Partial. JotForm-level commodity territory exists |
| L12 (billing automation) | ○ | ★★ | Peripheral feature |
| L13 (staff turnover) | △ | ★ | Secondary effect |
| L14 (SaaS / opex) | × | ★ | If anything, adds cost |
| L15 (family word-of-mouth) | ◎ | ★★ | Story-generator output drives this directly |
| L16 (provider-to-provider) | ○ | ★ | Secondary effect |
| L17 (marketing material) | ◎ | ★★★ | Cohort outcome data → ad copy |
| **L18 (front-door threshold)** | △ | ★★ | Indirect, not direct |
| L19 (SEO / content) | × | ★ | NAPA's own marketing territory |
| L20 (foundation partnerships) | ◎ | ★★ | Warm-lead pathway |
| **L21 (post-rehab follow-up)** | **◎◎** | **★★★** | **Core of churn reduction** |
| L22 (dissatisfaction detection) | ◎ | ★★ | Detects engagement decay |
| L23 (re-engagement) | ◎ | ★★ | Story generator + reminder |
| **L24 (intensive pre/post bridge)** | **◎◎◎** | **★★★** | **Heart of pre/post structured capture** |
| **L25 (home provider data flow)** | **◎◎◎** | **★★★** | **WithU's structural differentiation** |
| L26 (home-program adherence) | ◎ | ★★ | Enabled by family-side capture |
| **L27 (trajectory data accumulation)** | **◎◎** | **★★★** | **Evidence base for "come back next year"** |

## C. WithU's chosen 5 levers (narrowed)

Of the 27, **5 levers are selected**:

### Chosen 5
1. **L8: Lifecycle continuity** (preschool → adult)
2. **L21: Post-rehab follow-up**
3. **L24: Pre/post intensive bridge (structured capture)**
4. **L25: Data flow with home providers**
5. **L27: Trajectory data accumulation**

### Three selection principles

**Principle 1: Structural differentiation**
Can only WithU do this, or can existing EHR / workflow tools also do it?
→ **Exclude L11 (workflow improvement)** — close to JotForm commodity territory; existing vendors are sufficient
→ **Exclude L4 (billing leakage)** — dedicated billing SaaS already exists

**Principle 2: Consistency with the family-as-integration-node hypothesis**
Is this value obtainable only at touchpoints the family controls?
→ **L8 / L21 / L24 / L25 / L27 all qualify** — the family's continuous timeline is the key asset
→ **Exclude L18 (front-door threshold)** — marketing funnel has low family involvement; this is NAPA's own territory

**Principle 3: Common mechanism across multiple levers**
Can one core mechanism power multiple levers simultaneously?
→ **"Continuing the family relationship beyond the intensive episode"** is the common mechanism powering L8/L21/L24/L25/L27
→ This is structural concentration. **Intensive that ends → Relationship that continues** is WithU's core message.

### Narrowed conclusion: 3 mechanisms covering 5 levers

```
Mechanism A: Pre/post intensive relationship bridge
  ├ L24: Pre/post structured capture
  └ L25: Data flow with home providers

Mechanism B: Lifelong customer arc
  ├ L8: Lifecycle continuity
  └ L27: Trajectory data accumulation

Mechanism C: Churn detection & re-engagement
  └ L21: Post-rehab follow-up
```

**The Provider Pitch (NAPA) thus reads:**

> **"NAPA's LTV problem is that the care relationship breaks the moment a family finishes their intensive and flies home. WithU is the infrastructure for continuing that relationship. We don't touch pricing, marketing, or operations directly. We solve only the structural problem of intensive-then-disconnect."**

That is the core message after narrowing 27 levers down to 3 mechanisms.

## D. Strategic meaning of the excluded levers

Explicitly recording what we excluded, so we can revisit later:

| Excluded category | Reason |
|---|---|
| L1–L4 (pricing / unit revenue) | Only indirectly addressed via outcome evidence. We don't provide the direct means. |
| L11–L14 (margin improvement) | Important but commodity SaaS territory. No differentiation. |
| L15–L20 (CAC / referrals) | NAPA's own marketing responsibility. WithU supplies only raw material. |
| L7 (family expansion) | Secondary effect, not a strategic lever |
| L13 (staff turnover) | Second-order indirect effect |

→ These are not "maybe future expansion" but explicitly **"not WithU's area of responsibility."**

---

# Profile 2: Parent — Goal: Lifelong Growth Partnership

## A. MECE levers that compose "continuously supporting the child's growth"

Decomposing all the support a parent needs to support their child's growth:

### Category 1: Daily-care navigation
- **L1.** Daily schedule / appointment management
- **L2.** Medication / treatment adherence
- **L3.** Building home routines
- **L4.** Emergency contacts / procedures

### Category 2: Provider coordination
- **L5.** Information sharing with each provider
- **L6.** Onboarding when starting a new provider (the "double-entry" pain)
- **L7.** Ensuring consistency across providers
- **L8.** Tracking referrals

### Category 3: Stage transitions
- **L9.** EI → public preschool
- **L10.** Preschool → elementary school (IEP begins)
- **L11.** Elementary → middle school
- **L12.** High school → adult transition (adult services, guardianship)
- **L13.** Life events (relocation, family changes)

### Category 4: Crisis response
- **L14.** Hospitalization / emergency response
- **L15.** Regression episodes
- **L16.** New diagnoses / comorbidities
- **L17.** Caregiver illness or loss

### Category 5: Developmental tracking
- **L18.** Milestone visualization
- **L19.** Comparison to DS norms
- **L20.** Domain progress (motor, language, cognitive, social)
- **L21.** Pre/post intervention effect measurement

### Category 6: Decision support
- **L22.** "Which intervention next?"
- **L23.** "At what frequency?"
- **L24.** "Is a second opinion needed?"
- **L25.** Medication / surgical decisions

### Category 7: Advocacy support
- **L26.** IEP meeting preparation
- **L27.** Insurance benefit applications
- **L28.** Negotiation with schools
- **L29.** Understanding legal rights (IDEA, ADA)

### Category 8: Family-system support
- **L30.** Coordination with spouse / partner
- **L31.** Sibling care / psychological support
- **L32.** Sharing with extended family (grandparents, aunts)
- **L33.** Briefing babysitters / caregivers

### Category 9: Child's identity development
- **L34.** Supporting the child's own self-understanding
- **L35.** Capacity to own / manage their own record
- **L36.** Self-advocacy skills
- **L37.** Autonomy development from adolescence onward

### Category 10: Community
- **L38.** Connecting with families of similar children
- **L39.** Access to lived experience from people with DS
- **L40.** Foundation / nonprofit support

### Category 11: Lifelong infrastructure
- **L41.** Building and maintaining a longitudinal record
- **L42.** Record handover for when parents are absent
- **L43.** Transition to adult self-management

**All 43 levers cover the MECE space.**

## B. WithU contribution × parent engagement feasibility

Critical constraint: **parents are exhausted. Daily-grind systems can't compete for their time or attention.**

Each lever is therefore evaluated on three axes: "can the data be captured naturally from family-side touchpoints?" "is the output deliverable immediately useful?" "is the engagement frequency realistic?"

### Evaluation matrix (simplified)

| Lever | WithU contribution | Parent engagement feasibility | Strategic fit |
|---|---|---|---|
| L1–4 (daily care) | △ | × tired | ★ — existing apps suffice |
| **L5–7 (provider coordination)** | **◎◎** | **◎ acute pain** | **★★★** |
| **L9–12 (stage transitions)** | **◎◎** | **◎ punctuated event** | **★★★** |
| L13–17 (crisis response) | ○ | △ low frequency | ★★ |
| L18–21 (developmental tracking) | ○ | △ many existing tools | ★ |
| **L22–25 (decision support)** | **◎** | **○ high-stakes event** | **★★★** |
| **L26–29 (advocacy)** | **◎◎** | **◎ acute, time-bound** | **★★★** |
| L30–33 (family system) | ○ | △ | ★★ |
| L34–37 (child identity) | ◎ | △ not Day 1 | ★ — future |
| L38–40 (community) | △ | △ requires network | ★★ |
| **L41–43 (lifelong infrastructure)** | **◎◎** | **○ structural** | **★★★** |

## C. WithU's chosen 4 lever clusters

Of the 43, **4 clusters (10 levers) are selected**:

### Chosen 4 clusters
1. **Cluster A: Provider coordination** (L5–L7)
2. **Cluster B: Stage transitions** (L9–L12)
3. **Cluster C: Decision support** (L22–L25)
4. **Cluster D: Advocacy** (L26–L29)

Plus **Cluster E: Lifelong infrastructure** (L41–L43) running continuously as the **backbone** that supports all four.

### Three selection principles

**Principle 1: Concentrate on episodic deliverable moments**
We can't ask parents to engage daily. Instead, WithU appears at moments of **acute pain** and produces a deliverable.
→ **Exclude L1–4 (daily care)** — anything that requires daily engagement will die
→ **L5–7, L9–L12, L22–L25, L26–L29 are all episodic acute pain**

**Principle 2: The output deliverable is concrete and immediately valuable**
The parent must understand what arrives in their hands — a "3-minute one-page summary," an "IEP packet," a "transition portfolio" — for engagement to occur.
→ **Exclude L18–21 (milestone tracking)** — Apple Health and many other apps have commoditized this; the deliverable is too abstract
→ **Exclude L34–37 (identity)** — not Day 1; Phase 2+ as the product matures

**Principle 3: A single longitudinal record feeds all four clusters' deliverables**
From one longitudinal record, WithU produces every deliverable for provider coordination, stage transitions, decision support, and advocacy.
→ Cluster E (lifelong infrastructure) runs in the background as the **backbone**

### Narrowed conclusion: 4 acute moments + 1 backbone

```
Backbone (continuous)
  └ Cluster E: Lifelong infrastructure (L41–L43)
       └ longitudinal record + family-controlled consent + lifecycle architecture

Acute Moment 1: Provider coordination (highest frequency, daily/weekly)
  ├ L6: New-provider onboarding (eliminate double-entry)
  ├ L7: Cross-provider consistency
  └ Deliverable: 1-page summary / caregiver brief

Acute Moment 2: Stage transitions (1–3 times per year)
  ├ L9–L12: Each transition point
  └ Deliverable: Transition portfolio / next-stage prep packet

Acute Moment 3: Decision-making (1–2 per month to several per year)
  ├ L22–L25: Intervention / treatment / medication decisions
  └ Deliverable: Cohort comparison / "what similar children chose" + evidence digest

Acute Moment 4: Advocacy (1–3 IEPs per year + ad hoc)
  ├ L26–L29: IEP / insurance / school negotiation
  └ Deliverable: Advocacy packet (evidence portfolio)
```

**The Parent Pitch thus reads:**

> **"You don't need to open WithU every day. When you meet a new therapist, before an IEP, at a life transition, when you have to decide something — that's when WithU shows up in your hands and reduces your child's entire history to one page in three minutes. The rest of the time, be with your child. We quietly build the record in the background."**

## D. Strategic meaning of the excluded levers

| Excluded category | Reason |
|---|---|
| L1–L4 (daily care) | Requires daily engagement; many commodity apps already exist |
| L18–L21 (developmental tracking) | Standalone feature has many incumbents; absorbed into deliverables |
| L13–L17 (crisis response) | Important but low frequency; not Day-1 gating |
| L30–L33 (family system) | Second-order effects; can be absorbed into deliverables |
| L34–L37 (identity) | Phase 2; activates when the child is old enough to speak for themselves |
| L38–L40 (community) | Requires network effects; Phase 2 |

---

# Profile 3: Researcher — Goal: Real-World Data Supply

## A. MECE lever space for research data needs

Decomposing every type of data and insight a research institution might need from "real-world data":

### Category 1: Phenotype data
- **L1.** Diagnostic phenotype
- **L2.** Clinical severity scoring
- **L3.** Comorbidity profile
- **L4.** Genotype-phenotype linkage data

### Category 2: Functional outcomes
- **L5.** Validated instruments (GMFM-88, PEDI, PODCI, etc.)
- **L6.** Functional independence (ADL)
- **L7.** Communication function
- **L8.** Cognitive function

### Category 3: Real-world daily functioning ★ unique
- **L9.** Daily activity videos / observations
- **L10.** Real-world communication samples
- **L11.** Sleep patterns (family capture)
- **L12.** Social interaction patterns
- **L13.** Sensory processing in real environments

### Category 4: Quality of Life (QoL) ★ unique
- **L14.** Family-reported child QoL (PROMs)
- **L15.** Self-reported QoL (age-appropriate)
- **L16.** Caregiver QoL
- **L17.** Sibling QoL

### Category 5: Service utilization
- **L18.** Service hours per type (PT, OT, ST, ABA)
- **L19.** Provider switching patterns
- **L20.** Insurance coverage trajectories
- **L21.** Out-of-pocket spending

### Category 6: Treatment trajectories
- **L22.** What worked / what didn't (self-reported)
- **L23.** Decision points and rationales
- **L24.** Drop-off / non-compliance reasons
- **L25.** Cross-modality interaction effects

### Category 7: Caregiver experience ★ unique
- **L26.** Parental stress trajectory
- **L27.** Time burden quantification
- **L28.** Decision-making confidence
- **L29.** Advocacy outcomes (IEP wins / losses)
- **L30.** Caregiver mental health

### Category 8: Economic data
- **L31.** Total cost of care over time
- **L32.** Productivity loss (parent work impact)
- **L33.** Insurance gaps / unmet needs
- **L34.** Financial stress on family

### Category 9: Sociodemographic context
- **L35.** Geographic / urban-rural
- **L36.** Race / ethnicity / language
- **L37.** Socioeconomic status
- **L38.** Family structure

### Category 10: Sibling / family-wide data
- **L39.** Sibling developmental comparison
- **L40.** Family genetic carrier data
- **L41.** Whole-family functioning

**All 41 levers cover the MECE space.**

## B. WithU uniqueness × research demand

For each lever, evaluate whether other sources (clinics, claims data, registries, surveys) can supply it, and whether WithU alone can:

| Lever | Available from other sources? | WithU uniqueness | Research demand |
|---|---|---|---|
| L1–L4 (phenotype) | ◎ available from clinics | △ | High (existing sources sufficient) |
| L5–L8 (functional outcomes) | ◎ available from clinics | ◎ longitudinal is unique | ★★ |
| **L9–L13 (daily functioning)** | **× nowhere else** | **◎◎◎ unparalleled** | **★★★** |
| **L14–L17 (QoL)** | △ only limited surveys | **◎◎ family-reported, longitudinal** | **★★★** |
| L18–L21 (service utilization) | ◎ available from claims | ○ richer context | ★ |
| L22–L25 (treatment trajectory) | △ only retrospective surveys | ◎ prospective | ★★ |
| **L26–L30 (caregiver experience)** | **× essentially nothing** | **◎◎◎ unparalleled** | **★★★** |
| L31–L34 (economic data) | △ partial claims | ○ household reality | ★★ |
| L35–L38 (sociodemographic) | ○ census etc. | ○ richer context | ★ |
| L39–L41 (sibling / family-wide) | × | ◎ family-wide collection | ★★ |

## C. WithU's chosen 3 unique data domains

Of the 41, **3 domains (11 levers) are selected**:

### Chosen 3 domains
1. **Domain α: Real-world daily functioning** (L9–L13)
2. **Domain β: Quality of Life longitudinal** (L14–L17)
3. **Domain γ: Caregiver experience** (L26–L30)

### Three selection principles

**Principle 1: Does this data exist nowhere else?**
Data the research community can already access — from clinics, claims, registries — adds duplication, not value. **WithU supplies only the missing data.**
→ **Exclude L1–L4 (phenotype)** — clinics have it
→ **Exclude L5–L8 (functional outcomes)** — clinics have it, though longitudinal version retains partial value
→ **Exclude L18–L21 (service utilization)** — claims data has it
→ **L9–L13, L14–L17, L26–L30 exist nowhere else**

**Principle 2: Is the data captured naturally through family activity?**
WithU's data is structurally generated by family-as-integrator activity. It must arise **organically from daily life, not from forced surveys.**
→ Daily functioning: captured naturally through photos, video, audio
→ QoL: family subjective reporting can only come from families
→ Caregiver experience: the subject is the parent themselves

**Principle 3: Alignment with regulatory and industry demand**
Real-world data (RWD) is actively sought by FDA, the INCLUDE Project, and pharma. The 3 domains WithU selects are all **recognized RWD territory.**
→ Not just academic papers — potential citations in **regulatory submissions and therapeutic development**
→ Beyond foundation grants, this connects to **pharma partnerships**

### Narrowed conclusion: 3 domains = "the reality that can only be captured outside the clinic"

```
Domain α: Daily functioning
  └ Clinic GMFM-88 is the clinic environment
     Real-life functioning = available only via WithU

Domain β: QoL longitudinal
  └ Surveys are point-in-time snapshots
     QoL trajectory from family continuous reporting = WithU's depth

Domain γ: Caregiver experience
  └ Academic territory historically ignored
     Parental stress, decision-making confidence, IEP outcomes — only systematically captureable via WithU
```

**The Researcher Pitch thus reads:**

> **"Clinical data, claims data, existing registries — we are not adding another layer to what you already have. What we supply is the data of 'time the family lives daily.' What happens outside the clinic, real-world observed function, family-reported QoL, and the caregiver's own experience — three dimensions academia has not been able to access systematically until now."**

## D. Strategic meaning of the excluded levers

| Excluded category | Reason |
|---|---|
| L1–L4 (phenotype) | Already captured by clinics / existing registries; duplication unnecessary |
| L5–L8 (functional outcomes) | Available from clinics; longitudinal trajectory can be a byproduct |
| L18–L21 (service utilization) | Available from claims; can be a byproduct |
| L31–L34 (economic) | Important but capture is limited; Phase 2 |
| L35–L38 (sociodemographic) | Secondary data; captured at enrollment |
| L39–L41 (sibling / family-wide) | Interesting but Phase 2 |

---

# 4. Cross-Profile Strategic Integration

## A. Lever / domain selection counts per profile

| Profile | Total levers (MECE) | Chosen count | Concentration ratio |
|---|---|---|---|
| **Provider** | 27 | 5 (3 mechanisms) | 18.5% |
| **Parent** | 43 | 10 (4 clusters + 1 backbone) | 23% |
| **Researcher** | 41 | 11 (3 domains) | 27% |

**Average: 22% concentration.** This is the quantitative evidence of post-MECE strategic focus.

## B. The 3 common mechanisms across profiles

Looking at all three profiles' chosen levers / domains, **three mechanisms run beneath them all**:

### Mechanism 1: Family exists continuously
- Provider: continued relationship across intensive episodes
- Parent: companion through every growth stage
- Research: data from "time being lived"

→ WithU records the **continuous existence of family + child**, and all three profiles' value emerges.

### Mechanism 2: Deliver at high-stakes moments
- Provider: pre/post intensive, home handoff
- Parent: provider coordination, stage transition, decision-making, advocacy
- Research: grant applications, publications, registry updates

→ **"Deliverable at the acute moment"** is the design that works for all three.

### Mechanism 3: Data naturally captured by family generates value as byproduct
- Provider: cohort outcome data
- Parent: the story of growth
- Research: real-world data

→ **The same family-side capture is re-used differently for each of the three profiles.** This is WithU's structural efficiency.

## C. Strategic implications

Solving all three profiles with **one core mechanism** is:
- Operationally efficient (one infrastructure supplies three markets simultaneously)
- Defensible (value generated simultaneously from three profiles deepens the moat)
- Extensible (the next stakeholder — schools, insurers, regulators — can be solved on the same infrastructure)

This is the evolution of the Per-Hospital Stakeholder Frameworks' Pain Bias × Positioning Palette. Rather than building a different product for each stakeholder, **one infrastructure fires different deliverables at three profiles.**

---

# 5. Downstream file-update roadmap

Based on this document, update:

1. **`05_Value_Proposition.md`**
   - Add "Goal Headline (corrected)" at the top of each Profile
   - Restrict Pain Relievers / Gain Creators to the chosen levers

2. **`MentorDeck_2026-05-07/index.html`**
   - Slide 2 "Where WithU is now" — add "3 profiles solved by 1 mechanism"
   - Slide 6 NAPA pitch — add the LTV framing

3. **`email_draft.md`**
   - Rewrite mentor explanations along the Goal → Lever → Tool three-layer structure

---

# Appendix: MECE Validation

## Why this counts as "MECE"

Each profile's lever enumeration used the following axes:

- **Provider:** decomposed each term of the LTV equation (A × B × C × D + E) without overlap
- **Parent:** decomposed the child's life journey (daily / coordination / transition / crisis / development / decision / advocacy / family / identity / community / lifelong) along time × system axes
- **Researcher:** decomposed research data categories (phenotype / functional / daily / QoL / service / trajectory / caregiver / economic / sociodemographic / sibling) along the data-type axis

Not fully MECE, but each profile achieves **80–90% coverage**.

## Remaining unaddressed levers

- Provider profile: M&A strategy / PE rollup response levers not enumerated
- Parent profile: Adult-stage legal advocacy (guardianship, financial management) is thin
- Research profile: AI training data supply as a new lever — to be added later

These will be added in v2.

---

## Iteration Log

| Date | Change | Author |
|---|---|---|
| 2026-05-08 | v1.0 — Created Japanese source after Goal/Lever/Tool layer clarification | Ting |
| 2026-05-11 | v1.0 EN — Translated to English, placed as 05b under Strategy Master | Ting / Claude |

---

## Cross-references

- **`05_Value_Proposition.md`** — Goal headlines and chosen levers feed directly into the value-proposition canvases
- **`05a_Per_Player_Story_Need_Feature_Sets.md`** — The 9-player Stories / Need-Gaps / Feature Sets are the operationalization of the chosen levers
- **`07_GTM_Engagement_Sequence.md`** — The 8-wave sequence is the order in which we activate the chosen levers across stakeholders
- **`08_Business_Model_Monetization.md`** — Monetization paths target the chosen levers, not the excluded ones
- **`15_Defensibility_Strategy.md`** — Defensibility arises from solving three profiles' chosen levers on one infrastructure

---

**One-sentence summary:** Of 111 candidate levers across three stakeholder profiles, WithU pulls only the 26 that meet three principles — structural differentiation, family-side capture feasibility, and shared mechanism — and explicitly walks away from the rest, because saying "no" to 85 levers is what makes the remaining 26 a strategy.
