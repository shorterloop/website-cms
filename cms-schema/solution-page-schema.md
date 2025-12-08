# Short Loop — Solution Page Templates

**PayloadCMS Template Definitions**

Version 1.1 — December 2025

---

## Strategic Hierarchy

**Critical:** Not all solution pages are equal. The mega menu and page depth must reflect this hierarchy.

| Type | Role | Conversion | Visual Weight | Depth |
|------|------|------------|---------------|-------|
| **Use Case** | Primary conversion | High | **Dominant** | Deep (1,800-2,200 words) |
| **Stage/Maturity** | Diagnostic qualifier | Medium | Secondary | Medium (1,000-1,400 words) |
| **Industry** | Credibility asset | Low | De-emphasized | Light (700-1,000 words) |

### Mega Menu Hierarchy

```
SOLUTIONS
├── Column A: Use Cases ← VISUALLY DOMINANT
│   Larger cards, more prominent, primary click targets
│
├── Column B: "Where Are You?" (Stage) ← DIAGNOSTIC PATHWAY
│   Framed as self-assessment, not categories
│
└── Column C: Industries ← DE-EMPHASIZED
    Smaller, text-only links, clearly secondary
```

---

## Content Principles (All Pages)

### Every Page Needs:

**1. Antagonists** — Name the villains

- "Loudest-voice wins"
- "Board presentation chaos"
- "Wasted engineering cycles"
- "Opinion-driven roadmaps"
- "Research graveyards"

**2. Losses** — Show what is at stake

- "Team built the wrong feature for 6 months"
- "Churn caused by roadmap churn"
- "Lost the enterprise deal because you couldn't explain why"
- "PM burned out defending decisions with no evidence"

**3. Narratives** — Tell micro-stories

- "You shipped X but it wasn't the bet worth shipping"
- "The CEO asked 'why this?' and everyone looked at the floor"
- "Three teams built three solutions to the same problem"

### What to Avoid:

❌ **Thin pages with buzzwords**

> "Evidence-based product decisions help teams align."

This has zero emotional hook. No antagonist. No loss. No narrative.

✓ **Instead:**

> "Your last roadmap review was a negotiation, not a strategy session. The loudest voice won. Again. Three months later, you shipped something nobody asked for — because the evidence was buried in a research repo nobody reads."

---

## Template 1: Use Case Page

**Collection name:** `solution_use_case`

**Role:** Primary conversion pages. Buyer-focused. Deep, emotional, systematic.

**Target length:** 1,800-2,200 words

---

### Section Structure

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HERO                                                     │
│    Emotional headline + Pain hook + CTA                     │
├─────────────────────────────────────────────────────────────┤
│ 2. EMOTIONAL PAIN ARTICULATION                              │
│    Antagonists + Losses + Narrative                         │
├─────────────────────────────────────────────────────────────┤
│ 3. SYSTEMIC ROOT-CAUSE                                      │
│    Why this keeps happening (not your fault, but fixable)   │
├─────────────────────────────────────────────────────────────┤
│ 4. THE OPERATING SYSTEM                                     │
│    Short Loop as the system, not a feature                  │
├─────────────────────────────────────────────────────────────┤
│ 5. MINI-FLOW                                                │
│    Show the workflow in action                              │
├─────────────────────────────────────────────────────────────┤
│ 6. CAPABILITY DEEP-LINKS                                    │
│    Which capabilities power this                            │
├─────────────────────────────────────────────────────────────┤
│ 7. CUSTOMER SNAPSHOT                                        │
│    Quote or mini case study                                 │
├─────────────────────────────────────────────────────────────┤
│ 8. FINAL CTA                                                │
│    Transformation statement + CTAs                          │
└─────────────────────────────────────────────────────────────┘
```

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 20 | 60 | Internal title |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | Include problem keyword |
| `meta_description` | text | Yes | 150 | 160 | Problem + transformation |
| `meta_keywords` | array | Yes | 3 | 10 | Problem-focused keywords |
| `og_image` | media | Yes | — | — | 1200x630px |
| `published` | boolean | Yes | — | — | Publish state |

---

### Section 1: Hero

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `hero.headline` | text | Yes | 30 | 70 | Emotional, problem-first |
| `hero.subheadline` | text | Yes | 60 | 150 | Expand the pain or promise |
| `hero.pain_hook` | text | Yes | 40 | 120 | Quotable. Something they'd say to a colleague. |
| `hero.primary_cta_text` | text | Yes | 10 | 25 | Action + outcome |
| `hero.primary_cta_url` | url | Yes | — | — | Trial or demo |
| `hero.secondary_cta_text` | text | No | 10 | 25 | Lower commitment |
| `hero.secondary_cta_url` | url | No | — | — | Anchor or video |
| `hero.image` | media | Yes | — | — | Product in context |
| `hero.image_alt` | text | Yes | 20 | 100 | Accessibility |

**Content Rules:**

- `pain_hook` must be emotionally resonant
- Good: "We do discovery. It just never makes it to the roadmap."
- Bad: "Teams struggle with alignment."

---

### Section 2: Emotional Pain Articulation

*This is where you make them feel seen. Name the antagonists. Show the losses.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `pain.headline` | text | Yes | 15 | 60 | Name the dysfunction |
| `pain.narrative` | richtext | Yes | 150 | 350 | The story. Prose, not bullets. Must include antagonist + loss. |
| `pain.antagonists` | array | Yes | 2 | 4 | The villains (behaviors, not people) |
| `pain.antagonists[].text` | text | Yes | 20 | 60 | e.g., "Loudest-voice wins" |
| `pain.antagonists[].icon` | select | No | — | — | From approved set |
| `pain.losses` | array | Yes | 2 | 3 | What's at stake |
| `pain.losses[].text` | text | Yes | 30 | 80 | Specific loss. e.g., "6 months building the wrong feature" |
| `pain.emotional_question` | text | Yes | 30 | 100 | The question they ask themselves. e.g., "How do I justify this to the board?" |

**Content Rules:**

- Narrative must be a story, not a list of pain points
- Must include at least one specific scenario ("The CEO asked why, and everyone looked at the floor")
- `emotional_question` is what keeps them up at night

**Example Narrative:**

> "Your last roadmap review was a negotiation, not a strategy session. Engineering asked 'why this feature?' and the answer was 'because Sales promised it.' Nobody mentioned the 47 customer interviews that suggested something else entirely. Those insights are in a Notion doc. Somewhere. The loudest voice won. Again."

---

### Section 3: Systemic Root-Cause

*Explain why this keeps happening. Not their fault, but fixable.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `root_cause.headline` | text | Yes | 15 | 60 | e.g., "It's Not a People Problem. It's a System Problem." |
| `root_cause.explanation` | richtext | Yes | 120 | 300 | Why this is structural, not individual failure |
| `root_cause.system_gaps` | array | Yes | 2 | 4 | The missing pieces |
| `root_cause.system_gaps[].gap` | text | Yes | 20 | 50 | What's missing |
| `root_cause.system_gaps[].consequence` | text | Yes | 40 | 100 | What happens because of this gap |
| `root_cause.reframe` | text | Yes | 60 | 150 | The insight that shifts perspective |

**Content Rules:**

- Don't blame them — blame the system
- Show that tools optimize for delivery, not discovery
- `reframe` should be the "aha" moment

**Example Reframe:**

> "You don't have a prioritization problem. You have an evidence problem. The prioritization debate is just the symptom."

---

### Section 4: The Operating System

*Position Short Loop as a system, not a feature.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `system.headline` | text | Yes | 15 | 60 | e.g., "A System for Evidence-Based Decisions" |
| `system.positioning_statement` | text | Yes | 80 | 200 | Short Loop as the operating system for product decisions |
| `system.shift_from` | text | Yes | 30 | 80 | What they're moving away from |
| `system.shift_to` | text | Yes | 30 | 80 | What they're moving toward |
| `system.how_it_works_summary` | text | Yes | 80 | 200 | One paragraph on the system |
| `system.visual` | media | No | — | — | System diagram or flow |
| `system.visual_alt` | text | No | 20 | 100 | Accessibility |

**Content Rules:**

- Don't list features — describe the system
- Frame as "operating system for X" not "tool that does X"
- `shift_from` / `shift_to` should be philosophical, not functional

**Example:**

- Shift from: "Roadmaps built on opinions and politics"
- Shift to: "Roadmaps backed by a trail of evidence from customer to decision"

---

### Section 5: Mini-Flow

*Show the workflow in action. Make it concrete.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `flow.headline` | text | Yes | 15 | 50 | e.g., "See It in Action" |
| `flow.context` | text | Yes | 40 | 100 | Set up the scenario |
| `flow.steps` | array | Yes | 3 | 5 | The workflow |
| `flow.steps[].step_number` | number | Yes | 1 | 5 | Sequential |
| `flow.steps[].action` | text | Yes | 20 | 50 | What happens |
| `flow.steps[].detail` | text | Yes | 40 | 120 | How it works |
| `flow.steps[].screenshot` | media | No | — | — | Optional screenshot |
| `flow.steps[].screenshot_alt` | text | No | 20 | 100 | Accessibility |
| `flow.outcome` | text | Yes | 40 | 100 | What they end up with |

**Content Rules:**

- Scenario should be recognizable ("It's Monday. You're prepping for roadmap review.")
- Steps should be concrete actions, not abstract concepts
- At least one screenshot recommended

---

### Section 6: Capability Deep-Links

*Connect to the capabilities that power this use case.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `capabilities.headline` | text | Yes | 15 | 50 | e.g., "Powered By" |
| `capabilities.items` | array | Yes | 2 | 4 | Linked capabilities |
| `capabilities.items[].capability_slug` | text | Yes | — | — | Link to capability page |
| `capabilities.items[].capability_name` | text | Yes | 15 | 40 | Display name |
| `capabilities.items[].role_in_solution` | text | Yes | 40 | 100 | Why this capability matters here |
| `capabilities.items[].icon` | select | No | — | — | From approved set |

**Content Rules:**

- Don't repeat capability page content
- Focus on role in this specific use case
- 2-4 capabilities max

---

### Section 7: Customer Snapshot

*Social proof specific to this use case.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `snapshot.headline` | text | No | 15 | 50 | e.g., "Teams Who Made the Shift" |
| `snapshot.type` | select | Yes | — | — | "quote", "mini_case", "metric_highlight" |

**If type = "quote":**

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `snapshot.quote.text` | text | Yes | 60 | 200 | The testimonial |
| `snapshot.quote.author_name` | text | Yes | 5 | 50 | Full name |
| `snapshot.quote.author_title` | text | Yes | 10 | 60 | Role and company |
| `snapshot.quote.author_image` | media | No | — | — | Headshot |
| `snapshot.quote.company_logo` | media | No | — | — | Logo |
| `snapshot.quote.context` | text | No | 30 | 80 | Optional context for the quote |

**If type = "mini_case":**

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `snapshot.mini_case.company_descriptor` | text | Yes | 20 | 60 | e.g., "Series B SaaS, 40-person product org" |
| `snapshot.mini_case.situation` | text | Yes | 60 | 120 | Their version of the problem |
| `snapshot.mini_case.result` | text | Yes | 60 | 120 | What changed |
| `snapshot.mini_case.metric` | text | Yes | 15 | 50 | Specific metric. **Must include number.** |
| `snapshot.mini_case.logo` | media | No | — | — | Company logo |

**If type = "metric_highlight":**

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `snapshot.metrics` | array | Yes | 2 | 3 | Headline metrics |
| `snapshot.metrics[].value` | text | Yes | 3 | 20 | e.g., "40%", "3x", "12 weeks" |
| `snapshot.metrics[].label` | text | Yes | 15 | 50 | What it measures |
| `snapshot.metrics[].context` | text | No | 20 | 60 | Optional context |

**Content Rules:**

- Proof must be specific to this use case
- Metrics must include actual numbers
- If you don't have proof yet, use `metric_highlight` with aspirational but honest framing

---

### Section 8: Final CTA

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `final_cta.headline` | text | Yes | 15 | 60 | Transformation statement |
| `final_cta.subheadline` | text | No | 30 | 100 | Optional nudge |
| `final_cta.primary_cta_text` | text | Yes | 10 | 25 | Action + outcome |
| `final_cta.primary_cta_url` | url | Yes | — | — | Trial or demo |
| `final_cta.secondary_cta_text` | text | No | 10 | 25 | Alternative |
| `final_cta.secondary_cta_url` | url | No | — | — | Talk to sales |
| `final_cta.trust_signals` | array | No | 2 | 4 | Friction reducers |
| `final_cta.trust_signals[].text` | text | Yes | 10 | 40 | e.g., "No credit card required" |

---

## Template 2: Stage/Maturity Page

**Collection name:** `solution_maturity`

**Role:** Diagnostic qualifier. Helps buyers self-assess readiness. Protects you from low-value conversations.

**Target length:** 1,000-1,400 words

---

### Section Structure

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HERO                                                     │
│    Stage headline + Recognition triggers                    │
├─────────────────────────────────────────────────────────────┤
│ 2. WHAT EMERGES AT THIS MATURITY                            │
│    New complexities that appear                             │
├─────────────────────────────────────────────────────────────┤
│ 3. EARLY WARNING SIGNS                                      │
│    How to know you're here                                  │
├─────────────────────────────────────────────────────────────┤
│ 4. COMMON MISTAKES                                          │
│    What teams do wrong at this stage                        │
├─────────────────────────────────────────────────────────────┤
│ 5. WHAT'S AT RISK                                           │
│    Financial and organizational stakes                      │
├─────────────────────────────────────────────────────────────┤
│ 6. QUESTIONS YOU CAN'T ANSWER TODAY                         │
│    The diagnostic gut-punch                                 │
├─────────────────────────────────────────────────────────────┤
│ 7. HOW SHORT LOOP OPERATIONALIZES CLARITY                   │
│    The system for this stage                                │
├─────────────────────────────────────────────────────────────┤
│ 8. FINAL CTA                                                │
│    Stage-appropriate close                                  │
└─────────────────────────────────────────────────────────────┘
```

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 20 | 70 | e.g., "For Multi-Team Product Orgs" |
| `maturity_level` | select | Yes | — | — | "first_pm_team", "multi_team", "cross_portfolio" |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | Include stage signal |
| `meta_description` | text | Yes | 150 | 160 | Stage-specific value prop |
| `meta_keywords` | array | Yes | 3 | 10 | Stage-related keywords |
| `og_image` | media | Yes | — | — | 1200x630px |
| `ideal_for_badge` | text | Yes | 15 | 40 | e.g., "For 3+ PM teams" |
| `published` | boolean | Yes | — | — | Publish state |

---

### Section 1: Hero

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `hero.headline` | text | Yes | 30 | 70 | Stage-specific, complexity-focused |
| `hero.subheadline` | text | Yes | 60 | 150 | What's different at this stage |
| `hero.recognition_triggers` | array | Yes | 3 | 5 | "You might be here if..." |
| `hero.recognition_triggers[].text` | text | Yes | 30 | 80 | Observable signal |
| `hero.primary_cta_text` | text | Yes | 10 | 25 | Action + outcome |
| `hero.primary_cta_url` | url | Yes | — | — | Trial or demo |
| `hero.image` | media | Yes | — | — | Product or illustration |
| `hero.image_alt` | text | Yes | 20 | 100 | Accessibility |

**Content Rules:**

- `recognition_triggers` are observable situations, not labels
- Good: "You're hiring your second or third PM"
- Bad: "You're a Series A company"

**Example Recognition Triggers (Multi-Team):**

- "You have 3+ PMs who've never seen each other's roadmaps"
- "Two teams built similar features without knowing"
- "Stakeholder reviews feel like territory negotiations"
- "Nobody knows what evidence exists across squads"

---

### Section 2: What Emerges at This Maturity

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `emergence.headline` | text | Yes | 15 | 60 | e.g., "What Changes at This Stage" |
| `emergence.intro` | text | Yes | 60 | 150 | Set up the transition |
| `emergence.new_complexities` | array | Yes | 3 | 4 | What's new |
| `emergence.new_complexities[].title` | text | Yes | 20 | 50 | The complexity |
| `emergence.new_complexities[].description` | text | Yes | 60 | 150 | Why it emerges now |
| `emergence.new_complexities[].icon` | select | No | — | — | From approved set |

**Content Rules:**

- Focus on what's NEW at this stage, not generic problems
- Frame as emergence ("This appears when..."), not criticism

---

### Section 3: Early Warning Signs

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `warning_signs.headline` | text | Yes | 15 | 60 | e.g., "Early Signs You're Here" |
| `warning_signs.signs` | array | Yes | 4 | 6 | Observable signals |
| `warning_signs.signs[].text` | text | Yes | 30 | 80 | One signal |
| `warning_signs.signs[].severity` | select | Yes | — | — | "early", "mid", "late" |

**Content Rules:**

- Signs should be observable behaviors, not feelings
- Include progression from early to late signals
- Good: "Roadmap reviews take 2+ hours"
- Bad: "Team feels misaligned"

---

### Section 4: Common Mistakes

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `mistakes.headline` | text | Yes | 15 | 60 | e.g., "Mistakes Teams Make at This Stage" |
| `mistakes.intro` | text | No | 40 | 100 | Optional setup |
| `mistakes.items` | array | Yes | 3 | 4 | Common mistakes |
| `mistakes.items[].mistake` | text | Yes | 20 | 60 | The mistake |
| `mistakes.items[].why_it_fails` | text | Yes | 60 | 150 | Why it doesn't work |
| `mistakes.items[].icon` | select | No | — | — | From approved set |

**Content Rules:**

- Be specific about what people try
- Explain why it fails at this stage (might work earlier/later)
- Don't be condescending — frame as "we've seen this"

**Example Mistakes (Multi-Team):**

- "Adding more meetings to 'align'" → Fails because the problem isn't communication, it's shared evidence
- "Hiring a Head of Product to 'fix' prioritization" → Fails because they inherit the same broken system
- "Mandating a single roadmap tool" → Fails because the tool doesn't create the evidence

---

### Section 5: What's at Risk

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `risk.headline` | text | Yes | 15 | 60 | e.g., "What's Actually at Stake" |
| `risk.intro` | text | Yes | 60 | 150 | Frame the stakes |
| `risk.financial_risks` | array | Yes | 2 | 3 | Financial consequences |
| `risk.financial_risks[].text` | text | Yes | 40 | 100 | Specific financial risk |
| `risk.organizational_risks` | array | Yes | 2 | 3 | Org/team consequences |
| `risk.organizational_risks[].text` | text | Yes | 40 | 100 | Specific org risk |
| `risk.strategic_risks` | array | No | 1 | 2 | Strategic consequences |
| `risk.strategic_risks[].text` | text | Yes | 40 | 100 | Specific strategic risk |

**Content Rules:**

- Be specific and quantifiable where possible
- Include both immediate and long-term risks
- Don't fear-monger — be matter-of-fact

**Example Risks (Multi-Team):**

- Financial: "Duplicate features = 2x engineering cost for same outcome"
- Organizational: "Top PM leaves because they're tired of political roadmaps"
- Strategic: "Competitors ship what your customers asked for — because you didn't hear them"

---

### Section 6: Questions You Can't Answer Today

*The diagnostic gut-punch. Make them realize the gap.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `questions.headline` | text | Yes | 15 | 60 | e.g., "Can Your Team Answer These?" |
| `questions.intro` | text | Yes | 40 | 100 | Set up the diagnostic |
| `questions.items` | array | Yes | 4 | 6 | Questions they can't answer |
| `questions.items[].question` | text | Yes | 30 | 100 | The question |
| `questions.punchline` | text | Yes | 60 | 150 | What it means if they can't answer |

**Content Rules:**

- Questions should be specific and answerable (in theory)
- They should realize they CAN'T answer them
- Punchline connects the gap to the risk

**Example Questions (Multi-Team):**

- "What's the top customer problem across all three squads right now?"
- "Which team has the strongest evidence for their Q2 bet?"
- "When did you last see all roadmaps in one view?"
- "What feedback from last month changed any team's priorities?"

**Example Punchline:**

> "If you hesitated on any of these, you're operating on intuition at scale. That worked at 10 people. It breaks at 50."

---

### Section 7: How Short Loop Operationalizes Clarity

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `solution.headline` | text | Yes | 15 | 60 | Stage-specific framing |
| `solution.positioning` | text | Yes | 80 | 200 | How Short Loop fits this stage |
| `solution.key_shifts` | array | Yes | 3 | 4 | What changes with Short Loop |
| `solution.key_shifts[].from` | text | Yes | 20 | 60 | Current state |
| `solution.key_shifts[].to` | text | Yes | 20 | 60 | Future state |
| `solution.relevant_use_cases` | array | Yes | 2 | 3 | Links to use case pages |
| `solution.relevant_use_cases[].use_case_slug` | text | Yes | — | — | Link |
| `solution.relevant_use_cases[].use_case_title` | text | Yes | 20 | 60 | Display title |
| `solution.relevant_use_cases[].why_relevant` | text | Yes | 40 | 100 | Why this matters at this stage |

**Content Rules:**

- Focus on operationalizing, not features
- Link to use cases with stage-specific relevance statements

---

### Section 8: Final CTA

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `final_cta.headline` | text | Yes | 15 | 60 | Stage-specific close |
| `final_cta.subheadline` | text | No | 30 | 100 | Optional nudge |
| `final_cta.primary_cta_text` | text | Yes | 10 | 25 | Action + outcome |
| `final_cta.primary_cta_url` | url | Yes | — | — | Trial or demo |
| `final_cta.secondary_cta_text` | text | No | 10 | 25 | Alternative |
| `final_cta.secondary_cta_url` | url | No | — | — | Talk to sales |

---

## Template 3: Industry Page

**Collection name:** `solution_industry`

**Role:** Credibility asset. SEO play. NOT a conversion page.

**Target length:** 700-1,000 words

**Key principle:** Don't sell the product. Sell the translation of product benefits into industry-specific fears.

---

### Section Structure

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HERO                                                     │
│    Industry headline + Constraint acknowledgment            │
├─────────────────────────────────────────────────────────────┤
│ 2. INDUSTRY CONSTRAINTS                                     │
│    What makes this industry different                       │
├─────────────────────────────────────────────────────────────┤
│ 3. WHAT GOES WRONG WITHOUT EVIDENCE                         │
│    Industry-specific failures (compliance, audits, etc.)    │
├─────────────────────────────────────────────────────────────┤
│ 4. WORKFLOW IN YOUR CONTEXT                                 │
│    Translate platform into industry language                │
├─────────────────────────────────────────────────────────────┤
│ 5. INDUSTRY EXAMPLES                                        │
│    1-2 examples or proof points                             │
├─────────────────────────────────────────────────────────────┤
│ 6. FINAL CTA                                                │
│    Light, credibility-focused close                         │
└─────────────────────────────────────────────────────────────┘
```

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 10 | 40 | Industry name |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | "[Industry] + product discovery/management" |
| `meta_description` | text | Yes | 150 | 160 | Industry-specific value prop |
| `meta_keywords` | array | Yes | 3 | 10 | Industry + product terms |
| `og_image` | media | Yes | — | — | 1200x630px |
| `published` | boolean | Yes | — | — | Publish state |

---

### Section 1: Hero

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `hero.headline` | text | Yes | 30 | 70 | "Product Discovery for [Industry] Teams" |
| `hero.subheadline` | text | Yes | 60 | 150 | Acknowledge the constraint |
| `hero.industry_reality` | text | Yes | 60 | 150 | What makes this industry hard |
| `hero.primary_cta_text` | text | Yes | 10 | 25 | Light CTA |
| `hero.primary_cta_url` | url | Yes | — | — | Trial or demo |
| `hero.image` | media | Yes | — | — | Product screenshot |
| `hero.image_alt` | text | Yes | 20 | 100 | Accessibility |

**Content Rules:**

- `industry_reality` acknowledges their unique constraint
- Don't pretend to be industry experts — acknowledge the reality

**Example (FinTech):**

> "Compliance review adds 3 weeks to every release. Discovery gets compressed or skipped entirely. You ship what legal approved, not what customers need."

---

### Section 2: Industry Constraints

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `constraints.headline` | text | Yes | 15 | 60 | e.g., "The [Industry] Reality" |
| `constraints.items` | array | Yes | 3 | 4 | Unique constraints |
| `constraints.items[].constraint` | text | Yes | 20 | 60 | The constraint |
| `constraints.items[].impact` | text | Yes | 60 | 150 | How it affects product work |
| `constraints.items[].icon` | select | No | — | — | From approved set |

**Templated Constraints:**

| Industry | Constraints |
|----------|-------------|
| **SaaS** | Churn pressure, feature parity race, PLG vs sales tension |
| **FinTech** | Compliance bottlenecks, audit requirements, risk aversion |
| **HealthTech** | Regulatory burden, long validation cycles, clinical workflow complexity |

---

### Section 3: What Goes Wrong Without Evidence

*Industry-specific failures. Compliance, audits, regulatory.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `failures.headline` | text | Yes | 15 | 60 | e.g., "When Evidence Is Missing" |
| `failures.items` | array | Yes | 3 | 4 | Industry-specific failures |
| `failures.items[].scenario` | text | Yes | 30 | 80 | What happens |
| `failures.items[].consequence` | text | Yes | 60 | 150 | The industry-specific consequence |

**Content Rules:**

- Focus on industry-specific consequences
- Reference compliance, audits, regulatory where relevant

**Example Failures (FinTech):**

- Scenario: "Roadmap audit from the board"
- Consequence: "You can't explain why Feature X was prioritized over Feature Y. The evidence is in 14 different docs. You look unprepared."

---

### Section 4: Workflow in Your Context

*Translate platform capabilities into industry language.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `workflow.headline` | text | Yes | 15 | 60 | e.g., "How It Works for [Industry]" |
| `workflow.translation_intro` | text | Yes | 60 | 150 | Frame the translation |
| `workflow.steps` | array | Yes | 3 | 4 | Industry-contextualized workflow |
| `workflow.steps[].generic_action` | text | Yes | 20 | 50 | What Short Loop does |
| `workflow.steps[].industry_translation` | text | Yes | 60 | 150 | What it means in their context |

**Content Rules:**

- Translate features into industry outcomes
- Use industry terminology (audit trail, compliance documentation, regulatory evidence)

**Example Translation (FinTech):**

- Generic: "Evidence trails from feedback to decision"
- Industry: "When the board asks 'why this feature?', you show the trail: customer requests → validation evidence → prioritization rationale. Audit-ready."

---

### Section 5: Industry Examples

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `examples.headline` | text | No | 15 | 50 | e.g., "[Industry] Teams Using Short Loop" |
| `examples.has_examples` | boolean | Yes | — | — | Do you have industry-specific proof? |
| `examples.items` | array | No | 1 | 2 | If has_examples = true |
| `examples.items[].company_descriptor` | text | Yes | 20 | 60 | e.g., "Series C payments platform" |
| `examples.items[].context` | text | Yes | 40 | 100 | Industry-specific context |
| `examples.items[].outcome` | text | Yes | 40 | 100 | Result |
| `examples.items[].logo` | media | No | — | — | Optional logo |
| `examples.fallback_message` | text | No | 40 | 120 | If has_examples = false |

**Content Rules:**

- 1-2 examples max — keep it light
- If no proof yet, use honest fallback
- Example fallback: "Join FinTech teams building evidence-based product practices."

---

### Section 6: Final CTA

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `final_cta.headline` | text | Yes | 15 | 60 | Light, credibility-focused close |
| `final_cta.primary_cta_text` | text | Yes | 10 | 25 | Soft CTA |
| `final_cta.primary_cta_url` | url | Yes | — | — | Trial or demo |
| `final_cta.secondary_cta_text` | text | No | 10 | 25 | Alternative |
| `final_cta.secondary_cta_url` | url | No | — | — | Talk to sales |

---

## Validation Rules Summary

### Use Case Pages

| Rule | Enforcement |
|------|-------------|
| `pain.narrative` includes antagonist language | Warning |
| `pain.antagonists` has 2-4 items | Block publish |
| `pain.losses` has 2-3 items | Block publish |
| `root_cause.reframe` is set | Block publish |
| `flow.steps` has 3-5 items | Block publish |
| `snapshot` metric includes number (if mini_case) | Block publish |

### Stage/Maturity Pages

| Rule | Enforcement |
|------|-------------|
| `hero.recognition_triggers` has 3-5 items | Block publish |
| `warning_signs.signs` has 4-6 items | Block publish |
| `mistakes.items` has 3-4 items | Block publish |
| `questions.items` has 4-6 items | Block publish |
| `solution.relevant_use_cases` has 2-3 items | Block publish |

### Industry Pages

| Rule | Enforcement |
|------|-------------|
| `constraints.items` has 3-4 items | Block publish |
| `failures.items` has 3-4 items | Block publish |
| Either `examples.items` OR `examples.fallback_message` | Block publish |

---

## Build Priority

| Priority | Page | Type | Effort |
|----------|------|------|--------|
| **P0** | Evidence-Based Roadmaps | Use Case | High |
| **P0** | Continuous Discovery Practice | Use Case | High |
| **P1** | Stakeholder Alignment Without Drama | Use Case | High |
| **P1** | For Multi-Team Product Orgs | Maturity | Medium |
| **P2** | Customer Insights → Decisions | Use Case | High |
| **P2** | For Companies Hiring First PM Team | Maturity | Medium |
| **P3** | SaaS & Software | Industry | Low |
| **P3** | FinTech | Industry | Low |
| **P4** | HealthTech | Industry | Low |
| **P4** | For Cross-Portfolio Systems | Maturity | Medium |

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2025 | Initial three-template structure |
| 1.1 | Dec 2025 | Added emotional pain articulation, antagonists/losses/narratives requirement, systemic root-cause section, mini-flow section, diagnostic structure for maturity pages, industry constraint translation framework, mega menu hierarchy guidance |