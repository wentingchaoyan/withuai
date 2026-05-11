# 12 — Risks and Mitigations

**Version:** 1.0 · 2026-05-08
**Audience:** Investors, board, mentors
**Source:** Consolidated from `04_Topics/WithU_Strategic_Concerns_Summary.md`

---

## Risk Framework

This document captures the strategic concerns identified during WithU's pre-launch strategy development. Each risk is documented with:
- **Risk description** — what could go wrong
- **Triggering signals** — what would indicate this is materializing
- **Resolution path** — how we address it
- **Status** — currently active, mitigated, or being validated

WithU's risk philosophy is **proactive transparency**: surfaces risks early, validates them through evidence, and pivots when evidence demands.

---

## 7 Strategic Risk Themes

```
1. Goal vs Lever vs Tool Hierarchy Confusion (resolved)
2. Mission / Vision Over-Promise Risk (mitigated)
3. Local Therapy Strategy — SaaS War vs Integration (resolved)
4. Loop Problem — Family Capture as Double-Work (resolved through AI auto-import)
5. Stakeholder Adoption Reality — Only Parents May Use, Or Even Parents Won't (active validation)
6. B2B Death Question — Reframed (resolved)
7. Persuasion Materials Gap — Sales-Ready Materials (resolved through 08 doc)
```

Each is detailed below.

---

## Risk 1: Goal vs Lever vs Tool Hierarchy Confusion

### Risk Description
WithU's strategic framework initially placed **levers** (outcome data, family engagement, workflow time-saving) at the **goal level**. This conflation could:
- Misalign with senior decision-makers' language (CEOs speak LTV, not "outcome documentation")
- Make pitches feel feature-focused rather than goal-focused
- Create internal confusion about what we're optimizing for

### Triggering Signal
- Bryan LaScala (NAPA CEO) responding to "outcome data" pitch with skepticism
- Senior decision-makers asking "what do you actually want me to achieve?"

### Resolution
**Resolved 2026-05-08**: 5-Layer Architecture established with explicit hierarchy:
- **Layer 2: Goals** — LTV (Provider), Continuous Growth (Parent), Real-World Data (Researcher)
- **Layer 3a: Per-role Levers** — MECE-derived (5 / 4+1 / 3 selected)
- **Layer 3b: Cross-cutting Mechanisms**
- **Layer 5: Engagement Mechanics** — including specific tools

**Status:** Resolved. Reflected in all current strategy documents.

---

## Risk 2: Mission / Vision Over-Promise

### Risk Description
WithU initially proposed Mission statements that the MVP cannot back:
- "A child's developmental journey shouldn't be limited by geography"
- 7 design principles (P0-P6) when only P0-P4 are MVP-implementable

This risks:
- Disability community trust erosion (over-promised tech is common pain)
- Investor skepticism when MVP doesn't match Mission
- Internal confusion about what we're actually building

### Triggering Signal
- Founder discomfort articulating Mission in own voice
- Mentor pushback on "uneven message"
- Investor "show me the path to this" challenge

### Resolution
**Mitigated 2026-05-08:**
- Geographic equity message removed from Mission (saved for select VC pitches with explicit roadmap)
- 7 principles → 5 principles for external use (P5-P6 retained for internal architecture only)
- "Building toward" framing maintained where aspirational

**Discipline going forward:**
- Honest Realism (Value 1) — never claim what MVP cannot back
- Aspirational claims clearly labeled

**Status:** Mitigated. Applied across all current docs.

---

## Risk 3: Local Therapy Strategy — SaaS War vs Integration

### Risk Description
Initial framing positioned Local Therapy as a Provider Profile sub-segment with 12 levers for direct sales. This created tension:
- TheraNest / Fusion / WebPT are commodity SaaS, dominant, 5+ year users
- Switching costs prohibitive
- Cross-stakeholder need for Local Therapy may be weaker than for episodic providers (NAPA, Hospital DSP)

If we directly compete with provider EHR SaaS, we enter a commodity war we cannot win.

### Triggering Signal
- Local Therapy clinic owners declining sales conversations
- Tonal mismatch in pitches (we're SaaS-positioned, they're commodity-bored)
- TheraNest customer success stories overlapping our value

### Resolution
**Resolved 2026-05-08:**

**New Local Therapy Strategy (Phase 1):**
- Do NOT direct-sell to Local Therapy
- Family-pull mechanism: parents invite their therapists to passive participation
- Therapist accepts invitation in 30 seconds (zero burden)
- Read-only access; existing TheraNest workflow unchanged
- WithU is invisible to therapist's daily workflow

**Phase 2-3 Expansion:**
- TheraNest / Fusion / WebPT API integration partnerships
- Family-side data flow into Local Therapy systems
- Eventually direct relationships if value clearly proven

**Discipline going forward:**
- Structural Defensibility (Value 2) — never commodity-compete
- Sit on top, integrate, complement

**Status:** Resolved. Phase 1 strategy explicitly avoids direct sales.

---

## Risk 4: Loop Problem — Family Capture as Double-Work

### Risk Description
Initial WithU framing assumed manual capture mechanisms:
- Email forwarding
- Photo OCR
- Voice memos
- Manual portal entry

These are **new actions** for already-exhausted parents. Creating new actions for the integration role we're trying to ELIMINATE would create paradoxical adoption failure:
- Family doesn't engage because tool requires effort
- Without family engagement, no value to providers
- Without provider data, no value to researchers
- WithU dies

### Triggering Signal
- Parent test users abandon WithU after 2-4 weeks
- Burnout self-report rising
- Forward / capture rates below threshold

### Resolution
**Resolved 2026-05-08:**

**New capture model:** AI auto-import + extract
- Email OAuth integration → existing inbox auto-pulled
- Photo classification AI → existing camera roll auto-organized
- Voice memo with smart prompts → only when user voluntarily desires
- Patient portal aggregation (Plaid-style) → user-authorized access

**Family time investment:**
- Initial OAuth setup: 10 minutes (one-time)
- Periodic review/approve: 5 min × 12-24 monthly = 60-120 min/year
- Output requests at acute moments: 5 min × 5-10/year = 25-50 min/year
- **Total: ~100-200 minutes/year**

This is achievable for exhausted parents. Pre-AI was infeasible; AI-native makes it possible.

**Discipline going forward:**
- User-First Absolute (Value 3) — zero double-work hard requirement
- AI auto-import is non-negotiable architecture

**Status:** Resolved. AI auto-import is core MVP. Validation in 30-day sprint H_FRICTION_THRESHOLD.

---

## Risk 5: Stakeholder Adoption Reality — Only Parents May Use, Or Even Parents Won't

### Risk Description (Two Waves)

**Wave A: "Only parents may use"**
The deeper concern: based on detailed JTBD analysis, only Family has genuinely acute pain that drives adoption. Other stakeholders (Provider, Researcher) have "nice to have" improvements but their existing solutions are adequate for current needs.

This means:
- WithU might be fundamentally B2C
- B2B revenue paths may not have direct urgency
- Network effects may not activate

**Wave B: "Even parents won't use"**
The further concern: even parents face friction, despite AI auto-import. If our friction promises fail:
- Adoption rate below threshold
- Network effects fail
- Entire product concept falls

### Triggering Signal
- 30-day Loop experiment: data completeness <40%, burden >3, continuation <60%
- Foundation pilots: low family activation rate
- Stakeholder interviews: providers/researchers describe existing tools as "adequate"

### Resolution
**Active validation in progress:**

**Reframed model:** B2C-led with B2B network effects (Plaid pattern)
- Family is primary user, free Day 1
- Providers participate involuntarily (via family rights) or voluntarily (lighthouse partners)
- Researchers/Foundations/Pharma pay because the data/network is uniquely available

**Mitigation tactics:**
- Foundation endorsement provides trust signal to family
- Lighthouse provider (NAPA) provides industry signal
- 30-day experiment validates AI auto-import friction reduction
- Pivot triggers documented if validation fails

### Pivot Scenarios

```
IF Family adoption fails despite AI auto-import:
  → Reconsider: Foundation-led only? Specialty niche pivot?
  → Major strategy revision

IF Family adoption succeeds but B2B revenue stalls:
  → Foundation-only revenue strategy
  → Possibly direct family freemium (premium features paid)

IF Both succeed:
  → Phase 1 strategy proceeds as designed
  → Network effects activate as planned
```

**Status:** Active validation. 30-day sprint critical for resolution.

---

## Risk 6: B2B Death Question — Initially Misframed

### Risk Description
Initial framing concluded "B2B is dead" because of:
- TheraNest commodity competition
- School IEP software dominance (EasyIEP)
- Hospital EHR vendor lock-in (Epic)

This conclusion was overly pessimistic. Different B2B paths have different dynamics, and we conflated all B2B with provider EHR competition.

### Triggering Signal
- Foundation conversations indicate willingness to pay
- Employer benefit market signals positive
- Pharma RWD demand exceeds expectations

### Resolution
**Resolved 2026-05-08:**

**Reframed B2B Strategy:**

| B2B Type | Status |
|---|---|
| Provider EHR / billing SaaS (TheraNest competition) | ❌ **Dead** |
| School IEP software (EasyIEP competition) | ❌ **Dead** |
| Hospital EHR add-on (Epic competition) | ❌ **Dead** |
| ABA practice management (CentralReach competition) | ❌ **Dead** |
| **Foundation Registry Infrastructure** | ✅ **Alive (Phase 1)** |
| **Employer / Insurance Benefit** | ✅ **Alive (Phase 2)** |
| **Pharma RWD Licensing** | ✅ **Alive (Phase 3)** |
| **Academic Research Collaboration** | ✅ **Alive (Phase 1-2)** |
| **State Agency Contracts** | ✅ **Alive (Phase 3+)** |
| **Special Needs Financial / Trust** | ✅ **Alive (Phase 3+)** |

→ B2B is not dead overall; it requires careful path selection.

**Status:** Resolved. 6 active B2B revenue paths now documented in 08_Business_Model_Monetization.md.

---

## Risk 7: Persuasion Materials Gap

### Risk Description
Initial documentation identified market opportunities but lacked the **sales-ready persuasion materials** needed to actually close deals:
- Decision maker identification
- Specific ROI articulation in their language
- Current alternative cost
- Dollar-backed ROI calculations
- Proof points needed
- Common objections + handling
- Sales conversation structures
- Deal sizes + timing

Without these, market identification stays theoretical.

### Triggering Signal
- Sales conversations stall on "what do you actually want me to do?"
- Foundation pilot agreements take longer than expected
- Investor questions reveal specific gaps in our persuasion

### Resolution
**Resolved 2026-05-08:**

`08_Business_Model_Monetization.md` now contains for each of 6 B2B paths:
1. Decision Maker
2. What They Care About
3. Why They Should Pay (ROI argument in their language)
4. Current Alternative Cost
5. Dollar-Backed ROI
6. Proof Points Needed
7. Common Objections + Handling
8. Sales Conversation Structure
9. Deal Size & Timing

**Status:** Resolved. Documented persuasion materials for all 6 paths.

**Caveat:** These are hypothesis-level. Phase 1-2 will validate through actual pilot sales conversations.

---

## Three Meta-Concerns (Underlying Risks)

These three concerns underlie the seven specific risks above and remain active validation targets:

### Meta-1: MVP Existence Threat

**Risk:** WithU's core thesis (family-anchored data integration with AI auto-import + 4-element differentiation) depends on:
- AI auto-import actually reducing friction enough for adoption
- Parent demand sufficient for B2C model viability
- 4-element differentiation construction

If any of these fail at MVP stage, the product concept fails.

**Mitigation:** 30-day sprint critical validation focus.

**Status:** Active validation.

### Meta-2: Folia Health DS Specialty Pivot Risk

**Risk:** Folia Health is WithU's closest model competitor:
- Family caregiver primary user ✓
- Free for users ✓
- Foundation partnership model ✓
- Research / RWD revenue ✓

If Folia pivots to invest heavily in DS specialty, WithU's wedge could be severely compressed.

**Mitigation:**
- AI auto-import advantage (Folia uses manual 90-second tracking)
- DS-specific framework + community (Folia is generic)
- Foundation partnership lock-in (faster than Folia can replicate)
- 5-enabler timing window not fully used by Folia

**Status:** Active monitoring. Defense via Foundation lock-in speed.

### Meta-3: Family-Rights Model Data Quality Sufficiency

**Risk:** WithU's data ecosystem requires "family rights" model to compensate for limited provider voluntary integration. But:
- Data completeness from family-side capture only ≠ provider voluntary integration
- For Pharma RWD specifically, regulatory grade may require provider-validated data
- Foundation/Employer/Academic may be sufficient with family-reported data alone

**Mitigation:**
- Phase-gated revenue: Foundation/Employer/Academic don't need regulatory grade
- Phase 2 lighthouse provider integrations strengthen data
- Phase 3+ Pharma path deferred until cohort N + provider integration sufficient

**Status:** Active validation per B2B path data quality requirements.

---

## Validation Plan (30-Day Sprint Connection)

```
30-day sprint critical hypotheses:

H_PRIMARY_DEMAND: Family demand acuity sufficient for B2C product?
H_FRICTION_THRESHOLD: AI auto-import friction reduction below adoption threshold?
H_FOUNDATION_OPPORTUNITY: MDSC partnership willingness?
H_LIGHTHOUSE_NOT_CUSTOMER: NAPA lighthouse partnership viable (not paying customer)?
H_LOOP: Family-side capture data completeness >70%?
H_DATA_QUALITY_SUFFICIENCY: Family-rights model adequate for B2B revenue paths?
H_INDUSTRY_FRAMING: Pediatric Plaid framing resonates with each stakeholder type?
```

Each hypothesis maps directly to a strategic risk.

---

## Decision Triggers

Sprint End (June 9, 2026) decision fork:

```
IF B + C + D + Loop all validated:
  → 5-Layer Architecture confirmed
  → Phase 1 with confidence
  → Foundation pilot proceeds

IF B validated, C/D mixed:
  → NAPA pilot proceeds
  → Language refinement needed
  → Update artifacts, re-pitch

IF B invalidated:
  → Lighthouse strategy needs new candidate
  → TheraSuit network? CE centers?
  → Major strategy update

IF Loop Path 1 validated:
  → Phase 1 = family capture, proceed
IF Loop Path 1 invalidated:
  → Phase 1 alternative needed (Path 2 or partner-first)
  → Architecture revision

IF Foundation interest strong:
  → Phase 1 revenue path confidence up
IF Foundation interest weak:
  → Phase 1 revenue model rethink (freemium individual?)
```

---

## Three Founder Disciplines (Risk Prevention)

These were established through this risk discussion and now serve as prevention frameworks:

### Discipline 1: Honest Realism
**Risk prevented:** Mission over-promise (Risk 2)
**Practice:** Never claim what MVP cannot back. Mission statements wait until capability matches.

### Discipline 2: Structural Defensibility
**Risk prevented:** Commodity SaaS competition (Risk 3)
**Practice:** Never enter direct competition with established commodity players. Sit on top, integrate, complement.

### Discipline 3: User-First Absolute
**Risk prevented:** Family double-work (Risk 4)
**Practice:** Family experience is non-negotiable. Zero double-work hard requirement enforced through architecture.

These disciplines explicitly guide all strategic decisions.

---

## Monitoring Cadence

```
Daily (during 30-day sprint): Hypothesis status updates
Weekly: Strategic team review
Monthly: Mentor sync
Quarterly: Board / advisor review
Annual: Comprehensive risk re-evaluation
```

---

## One-Sentence Risk Summary

> **WithU has identified and resolved 7 strategic risk themes through founder discipline (Honest Realism, Structural Defensibility, User-First Absolute), with three meta-concerns (MVP existence, Folia DS pivot, family-rights data quality) actively under validation through the 30-day sprint, with explicit pivot triggers documented should validation reveal necessary strategy revisions.**

---

**Last reviewed:** 2026-05-08
**Source document:** `04_Topics/WithU_Strategic_Concerns_Summary.md`
**Document owner:** Ting Wen, Founder
