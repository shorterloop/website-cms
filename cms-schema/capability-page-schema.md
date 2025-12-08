# Short Loop — Capability Page CMS Schema

**PayloadCMS Field Definitions & Content Rules**

Version 1.1 — December 2025

---

## Overview

This document defines the CMS schema for Short Loop capability pages (e.g., Feedback Manager, Signals Engine, OST, Roadmap Builder).

**Key Insight:** Capability page visitors arrive via search with specific intent. They're researching a solution to a known problem. They have patience for depth — but only if the page earns it in the first 30 seconds.

---

## Design Principles

1. **Two audiences, one page:** Skimmers who need quick validation + Researchers who need comprehensive depth
2. **Earn the scroll:** First 3 sections must hook — everything below is for serious evaluators
3. **SEO depth lives at the bottom:** FAQ, comparisons, and use cases are keyword-rich but don't clutter the core pitch
4. **Every section has a job:** If it doesn't convert, validate, or rank — cut it
5. **Proof over polish:** Real screenshots beat illustrations. Specific metrics beat vague claims.

---

## Page Tiers & Reading Modes

| Tier | Sections | Time | Audience | Goal |
|------|----------|------|----------|------|
| **Tier 1: Skimmer** | Hero → Problem → Solution → Page Preview → CTA | 30 sec | Quick evaluators | Hook or bounce |
| **Tier 2: Evaluator** | Features → Integrations → Use Cases | 2-3 min | Serious prospects | Build confidence |
| **Tier 3: Researcher** | Comparison → FAQ → Testimonials → Final CTA | 5+ min | Decision makers, SEO | Close + rank |

---

## Global Page Fields

*These apply to the entire capability page.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `capability_name` | text | Yes | — | — | Internal name. e.g., "feedback_manager" |
| `capability_display_name` | text | Yes | — | — | Display name. e.g., "Feedback Manager" |
| `slug` | text | Yes | — | — | URL slug. e.g., "feedback-manager" |
| `meta_title` | text | Yes | 50 | 60 | Include primary keyword. |
| `meta_description` | text | Yes | 150 | 160 | Compelling summary with keyword. |
| `meta_keywords` | array | Yes | — | — | Primary + secondary keywords for SEO |
| `canonical_url` | url | No | — | — | If different from default |
| `og_image` | media | Yes | — | — | Social sharing image. 1200x630px. |
| `structured_data_type` | select | Yes | — | — | "SoftwareApplication" for capabilities |
| `parent_cluster` | select | Yes | — | — | Which homepage cluster this belongs to |

### Why This Capability Exists *(NEW)*

*Forces internal clarity. Becomes LinkedIn copy, blog intros, video scripts.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `reason_this_capability_exists` | text | Yes | 80 | 200 | The core insight. Why does this need to exist? |

**Content Rules:**

- This is the philosophical hook — not a feature description
- Should work as a standalone LinkedIn post opener
- Names the real problem, not the surface symptom
- Example: "Feedback is rarely lost because teams lack forms. It's lost because there's no system mapping feedback → decision → delivery → communication."

### Pricing Context *(NEW)*

*Prevents misleading expectations. Especially important for gated or add-on features.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `pricing_note` | text | No | 30 | 120 | Contextual pricing hint if applicable |
| `pricing_note_type` | select | No | — | — | "included_all_plans", "starter_and_above", "enterprise_only", "add_on", "seats_based" |

**Content Rules:**

- Only show if there's a meaningful pricing nuance
- Keep it factual, not salesy
- Example: "Available on Scale and Enterprise plans. Starter includes up to 3 feedback sources."

### Related Content & Internal Linking *(EXPANDED)*

*Builds topical authority. Reduces bounce rate. Google loves tight loops.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `related_capabilities` | array | No | — | 4 | Links to related capability pages |
| `related_capabilities[].capability_slug` | text | Yes | — | — | Slug of related capability |
| `related_capabilities[].relationship_type` | select | Yes | — | — | "works_with", "alternative_to", "builds_on", "feeds_into" |
| `recommended_next_step_page` | url | Yes | — | — | Primary next action: docs, demo video, or template |
| `recommended_next_step_label` | text | Yes | 15 | 50 | e.g., "Watch the 3-minute demo" |
| `recommended_related_article` | url | No | — | — | SEO content pairing: blog post or guide |
| `recommended_related_article_title` | text | No | 20 | 80 | Article title for display |

**Content Rules:**

- `recommended_next_step_page` is mandatory — every page needs a clear next action
- Related articles should be topically tight (same problem space)
- Example pairing: "Feedback Manager" → "How to Build a Continuous Feedback Loop" (blog)

---

## TIER 1: THE SKIMMER PATH

*Goal: Hook in 30 seconds or lose them. These sections are mandatory and must work independently.*

---

### Section 1.1: Hero

*The promise. What does this capability do and why should I care?*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 30 | 80 | Include primary keyword naturally. Action-oriented. |
| `subheadline` | text | Yes | 60 | 150 | Expand the value prop. Plain English. |
| `supporting_text` | text | No | 40 | 120 | Optional proof point or context. |
| `primary_cta_text` | text | Yes | 10 | 25 | Action verb + outcome. |
| `primary_cta_url` | url | Yes | — | — | Usually signup or trial. |
| `secondary_cta_text` | text | No | 10 | 25 | Lower commitment. e.g., "See How It Works" |
| `secondary_cta_url` | url | No | — | — | Anchor link or demo. |
| `hero_image` | media | Yes | — | — | Product screenshot or illustration. |
| `hero_image_alt` | text | Yes | 20 | 100 | Accessibility + SEO. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `hero` |
| `tier` | 1 |
| `priority` | essential |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- Headline must include primary keyword (for SEO) but read naturally
- No feature lists — save for later
- Hero image should show the product, not stock photography
- This section alone should answer "What is this?"

---

### Section 1.2: Problem

*Name the pain. Make them feel seen.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 60 | Name the struggle. Can be provocative. |
| `subheadline` | text | No | 30 | 100 | Optional elaboration. Italicized. |
| `pain_points` | array | Yes | 3 | 4 | Exactly 3-4. No more. |
| `pain_points[].icon` | select | Yes | — | — | From approved icon set |
| `pain_points[].title` | text | Yes | 15 | 50 | The pain in one line. Bold. |
| `pain_points[].description` | text | Yes | 60 | 150 | Expand the pain. Specific, not generic. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `problem` |
| `tier` | 1 |
| `priority` | essential |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | true |
| `anchor_label` | "The Problem" |

**Content Rules:**

- Written from reader's perspective or observable truth
- No solutions yet — pure pain
- Each pain point should resonate with target persona
- Opinionated voice welcome here

---

### Section 1.3: Solution Overview

*The transformation. How does this capability solve the problem?*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 60 | The shift. Before → After framing. |
| `subheadline` | text | No | 30 | 100 | One sentence summary. |
| `workflow_steps` | array | Yes | 3 | 4 | Keep it tight. 3-4 transformations. |
| `workflow_steps[].step_number` | number | Yes | 1 | 4 | Sequential. |
| `workflow_steps[].icon` | select | Yes | — | — | From approved icon set |
| `workflow_steps[].title` | text | Yes | 15 | 40 | What happens at this step. |
| `workflow_steps[].description` | text | Yes | 40 | 120 | Brief explanation. Outcome-focused. |
| `conclusion` | text | No | 30 | 100 | Optional wrap-up line. |
| `visual` | media | No | — | — | Optional diagram or flow illustration. |
| `visual_alt` | text | No | 20 | 100 | Accessibility description. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `solution` |
| `tier` | 1 |
| `priority` | essential |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | true |
| `anchor_label` | "How It Works" |

**Content Rules:**

- 3-4 steps maximum — more than that loses people
- Each step is a transformation, not a feature
- Should directly answer the pain points from previous section
- Keep language parallel across steps

---

### Section 1.4: Page Preview / Intent-to-Scroll *(NEW)*

*Increases scroll-depth by 20-40%. Shows what's below the fold.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 40 | e.g., "What you'll find on this page" |
| `preview_items` | array | Yes | 4 | 6 | Anchored preview items |
| `preview_items[].label` | text | Yes | 15 | 50 | What they'll find. e.g., "Real-world use cases" |
| `preview_items[].anchor_id` | text | Yes | — | — | Section ID to scroll to |
| `preview_items[].icon` | select | No | — | — | Optional icon |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `page_preview` |
| `tier` | 1 |
| `priority` | essential |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- Place immediately after Solution section
- Each item should be clickable (anchor link)
- Keep labels benefit-oriented, not section names
- Examples:
  - ✓ "How teams use this in practice" (not "Use Cases")
  - ✓ "Integrations with your stack" (not "Integrations")
  - ✓ "Answers from real product teams" (not "FAQ")

**Example Preview Items:**

```
On this page:
• How this capability works in practice
• Real-world use cases with metrics
• Integrations with your stack
• Comparisons with common alternatives
• FAQs answered by real product teams
```

---

### Section 1.5: Mid-Page CTA

*First conversion point. Catch the quick deciders.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | Reinforce value. Short. |
| `primary_cta_text` | text | Yes | 10 | 25 | Action verb + outcome. |
| `primary_cta_url` | url | Yes | — | — | Signup or trial. |
| `secondary_cta_text` | text | No | 10 | 25 | Alternative action. |
| `secondary_cta_url` | url | No | — | — | Demo or contact. |
| `show_trust_signals` | boolean | Yes | — | — | Show mini trust signals? |
| `trust_signals` | array | No | 2 | 4 | If show_trust_signals = true |
| `trust_signals[].text` | text | Yes | 10 | 30 | e.g., "No credit card required" |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `mid_cta` |
| `tier` | 1 |
| `priority` | essential |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- This is a "get off ramp" for quick deciders
- Keep it compact — one line + buttons
- Trust signals reduce friction

---

## TIER 2: THE EVALUATOR PATH

*Goal: Build confidence with depth. These sections are for serious prospects who scrolled past Tier 1.*

---

### Section 2.1: Features

*The capabilities in detail. What exactly does this do?*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "Built for Teams That Listen" |
| `subheadline` | text | No | 30 | 100 | Optional framing. |
| `hero_features` | array | Yes | 2 | 3 | Primary features — shown prominently |
| `hero_features[].title` | text | Yes | 15 | 50 | Feature name. |
| `hero_features[].tagline` | text | Yes | 20 | 60 | One-line value prop. |
| `hero_features[].description` | text | Yes | 80 | 200 | Detailed explanation. |
| `hero_features[].benefits` | array | Yes | 3 | 4 | Bullet benefits. |
| `hero_features[].benefits[].text` | text | Yes | 15 | 60 | Single benefit. |
| `hero_features[].image` | media | Yes | — | — | Screenshot or illustration. |
| `hero_features[].image_alt` | text | Yes | 20 | 100 | Accessibility. |
| `additional_features` | array | No | 0 | 6 | Secondary features — shown smaller |
| `additional_features[].title` | text | Yes | 15 | 50 | Feature name. |
| `additional_features[].tagline` | text | Yes | 20 | 60 | One-line value prop. |
| `additional_features[].description` | text | Yes | 60 | 150 | Brief explanation. |
| `additional_features[].icon` | select | Yes | — | — | From approved icon set |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `features` |
| `tier` | 2 |
| `priority` | important |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | true |
| `anchor_label` | "Features" |

**Content Rules:**

- Split into "hero features" (2-3, prominent) and "additional features" (3-6, compact)
- Hero features get images; additional features get icons
- Benefits should be outcomes, not specifications
- Include keywords naturally in descriptions

---

### Section 2.2: Proof Image *(NEW)*

*Real usage beats polished mockups. Ugly screenshots build trust.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `show_proof_image` | boolean | Yes | — | — | Enable this section? |
| `headline` | text | No | 15 | 50 | Optional. e.g., "See it in action" |
| `real_usage_image` | media | Yes | — | — | Must be real screenshot, not mockup |
| `real_usage_image_alt` | text | Yes | 20 | 100 | Accessibility description |
| `real_usage_caption` | text | Yes | 40 | 150 | Describe the scenario. What are we looking at? |
| `proof_type` | select | Yes | — | — | "screenshot", "before_after", "output_example", "audit_log", "graph" |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `proof_image` |
| `tier` | 2 |
| `priority` | important |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- **Must be real** — not a designed mockup or illustration
- Examples that work:
  - Screenshot of an actual OST created by users
  - Before/after of a messy backlog → organized view
  - Real status audit log
  - Actual analytics graph from the product
- Caption should explain context: "This OST was created by a 12-person product team at [Company] during their Q3 planning."
- Imperfect is fine — authenticity beats polish

---

### Section 2.3: Integrations

*Kill the migration fear. Show you work with their stack.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "25+ Integrations. One Hub." |
| `subheadline` | text | Yes | 40 | 120 | Address the fear. e.g., "Works with tools you already use." |
| `integration_groups` | array | Yes | 2 | 5 | Grouped by category |
| `integration_groups[].group_name` | text | Yes | 10 | 30 | e.g., "Support Tools", "Analytics" |
| `integration_groups[].integrations` | array | Yes | 2 | 8 | Integrations in this group |
| `integration_groups[].integrations[].name` | text | Yes | 3 | 30 | e.g., "Intercom" |
| `integration_groups[].integrations[].logo` | media | Yes | — | — | Integration logo |
| `integration_groups[].integrations[].status` | select | Yes | — | — | "live" OR "coming_soon" |
| `integration_groups[].integrations[].description` | text | No | 20 | 80 | Optional one-liner |
| `additional_methods` | array | No | 1 | 3 | Other integration methods |
| `additional_methods[].title` | text | Yes | 10 | 30 | e.g., "REST API", "CSV Import" |
| `additional_methods[].description` | text | Yes | 30 | 100 | Brief explanation |
| `cta_text` | text | No | 10 | 30 | e.g., "See All Integrations" |
| `cta_url` | url | No | — | — | Link to full integrations page |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `integrations` |
| `tier` | 2 |
| `priority` | important |
| `collapse_on_mobile` | true |
| `anchor_in_toc` | true |
| `anchor_label` | "Integrations" |

**Content Rules:**

- Lead with recognizable logos (Jira, Slack, Intercom)
- "Coming soon" shows momentum — don't hide it
- Group logically so people can scan for their tools
- This section kills the "do I have to migrate?" objection

---

### Section 2.4: Use Cases

*Show it in action. Real scenarios, real outcomes.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "How Teams Use Feedback Manager" |
| `subheadline` | text | No | 30 | 100 | Optional framing. |
| `use_cases` | array | Yes | 2 | 4 | Different scenarios or personas |
| `use_cases[].title` | text | Yes | 20 | 60 | Scenario title. e.g., "SaaS Product Team" |
| `use_cases[].subtitle` | text | No | 20 | 60 | Context. e.g., "500+ backlog items" |
| `use_cases[].company_type` | text | No | 10 | 40 | e.g., "B2B SaaS, 25-person team" |
| `use_cases[].challenge` | text | Yes | 60 | 150 | The problem they faced. |
| `use_cases[].solution` | text | Yes | 60 | 150 | How they used the capability. |
| `use_cases[].results` | array | Yes | 2 | 4 | Outcomes achieved. **At least one must have a metric.** |
| `use_cases[].results[].text` | text | Yes | 20 | 80 | Single result. |
| `use_cases[].results[].has_metric` | boolean | Yes | — | — | Does this result include a number/percentage/timeframe? |
| `use_cases[].quote` | object | No | — | — | Optional testimonial |
| `use_cases[].quote.text` | text | Yes | 60 | 200 | The quote. |
| `use_cases[].quote.author_name` | text | Yes | 5 | 50 | Full name. |
| `use_cases[].quote.author_title` | text | Yes | 10 | 60 | Role and company. |
| `use_cases[].image` | media | No | — | — | Optional visual. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `use_cases` |
| `tier` | 2 |
| `priority` | important |
| `collapse_on_mobile` | true |
| `anchor_in_toc` | true |
| `anchor_label` | "Use Cases" |

**Content Rules:**

- Each use case should represent a different persona or scenario
- **MANDATORY:** At least one result per use case must have `has_metric = true`
- Metrics must include: number, percentage, OR timeframe
  - ❌ "Customer happiness increased"
  - ✓ "NPS jumped from 31 → 52 in 9 weeks"
  - ✓ "40% reduction in backlog review time"
  - ✓ "Shipped 12 validated features in Q3"
- Quotes are optional but powerful if you have them

**Validation Rule:**

```
FOR EACH use_case:
  COUNT(results WHERE has_metric = true) >= 1
  
  IF has_metric = true:
    text MUST contain at least one of:
      - number (e.g., "12", "31", "52")
      - percentage (e.g., "40%", "20-30%")
      - timeframe (e.g., "9 weeks", "Q3", "30 days")
```

---

## TIER 3: THE RESEARCHER PATH

*Goal: SEO depth + close the deal. These sections are for decision makers doing due diligence and search engines indexing long-tail keywords.*

---

### Section 3.1: Comparison Table

*How do we stack up? Answer the "vs" question.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 60 | e.g., "Feedback Manager vs. Traditional Tools" |
| `subheadline` | text | No | 30 | 100 | Frame the comparison. |
| `comparison_type` | select | Yes | — | — | "category" (vs tool type) OR "specific" (vs named competitors) |
| `columns` | array | Yes | 2 | 3 | Comparison columns |
| `columns[].name` | text | Yes | 10 | 30 | Column header. e.g., "Short Loop", "Spreadsheets" |
| `columns[].is_self` | boolean | Yes | — | — | Is this your product? (for styling) |
| `rows` | array | Yes | 6 | 12 | Comparison criteria |
| `rows[].feature` | text | Yes | 15 | 60 | What's being compared. |
| `rows[].values` | array | Yes | 2 | 3 | Value for each column |
| `rows[].values[].column_index` | number | Yes | 0 | 2 | Which column |
| `rows[].values[].value` | text | Yes | 5 | 80 | The value. Can include ✓/✗ or descriptive. |
| `rows[].values[].highlight` | boolean | No | — | — | Highlight as advantage? |
| `conclusion` | text | No | 40 | 150 | Optional wrap-up. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `comparison` |
| `tier` | 3 |
| `priority` | seo_depth |
| `collapse_on_mobile` | true |
| `anchor_in_toc` | true |
| `anchor_label` | "Comparison" |

**Content Rules:**

- Compare against category (e.g., "spreadsheets", "generic tools") not named competitors unless you're confident
- Be honest — don't claim advantages you don't have
- Highlight genuine differentiators
- Good for SEO: "feedback manager vs spreadsheet" queries

---

### Section 3.2: FAQ

*SEO gold. Long-tail keywords and objection handling.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 40 | e.g., "Frequently Asked Questions" |
| `questions` | array | Yes | 6 | 15 | More is better for SEO |
| `questions[].question` | text | Yes | 20 | 100 | The question. Natural language. |
| `questions[].answer` | text | Yes | * | 400 | Comprehensive answer. *Min varies — see below. |
| `questions[].category` | select | No | — | — | Optional grouping: "general", "technical", "pricing", "security" |
| `questions[].schema_eligible` | boolean | Yes | — | — | Include in FAQ schema markup? |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `faq` |
| `tier` | 3 |
| `priority` | seo_depth |
| `collapse_on_mobile` | true |
| `anchor_in_toc` | true |
| `anchor_label` | "FAQ" |

**Content Rules:**

- Questions should match real search queries
- Include long-tail keywords naturally in questions
- Answers should be comprehensive but scannable
- 6-15 questions is the sweet spot
- Mark best questions as `schema_eligible` for rich snippets

**Variable Minimum Word Count:** *(NEW)*

| Condition | Min Characters | Min Words (approx) | Rationale |
|-----------|----------------|-------------------|-----------|
| `schema_eligible = false` | 80 | ~15 | Basic answer is fine |
| `schema_eligible = true` | 150 | ~30 | Google snippet eligibility requires depth |

**Validation Rule:**

```
FOR EACH question:
  IF schema_eligible = true:
    answer.length >= 150 characters
    answer.word_count >= 30 words
  ELSE:
    answer.length >= 80 characters
```

---

### Section 3.3: Testimonials

*Social proof from real users.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "What Product Teams Say" |
| `testimonials` | array | Yes | 2 | 4 | Quality over quantity |
| `testimonials[].quote` | text | Yes | 60 | 250 | The testimonial. |
| `testimonials[].author_name` | text | Yes | 5 | 50 | Full name. |
| `testimonials[].author_title` | text | Yes | 10 | 60 | Role and company. |
| `testimonials[].author_image` | media | No | — | — | Headshot. |
| `testimonials[].company_logo` | media | No | — | — | Company logo. |
| `testimonials[].rating` | number | No | 1 | 5 | Star rating if applicable. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `testimonials` |
| `tier` | 3 |
| `priority` | seo_depth |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- Specific quotes beat generic praise
- Include role/company for credibility
- Photos increase trust significantly
- If you don't have real testimonials yet, skip this section entirely — don't fake it

---

### Section 3.4: Related Content Block *(NEW)*

*Internal linking for SEO authority and reduced bounce.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 40 | e.g., "Continue Learning" or "Related Resources" |
| `next_step` | object | Yes | — | — | Primary recommended action |
| `next_step.url` | url | Yes | — | — | From global `recommended_next_step_page` |
| `next_step.label` | text | Yes | 15 | 50 | From global `recommended_next_step_label` |
| `next_step.type` | select | Yes | — | — | "demo_video", "documentation", "template", "guide" |
| `related_article` | object | No | — | — | If global `recommended_related_article` is set |
| `related_article.url` | url | Yes | — | — | Blog post or guide URL |
| `related_article.title` | text | Yes | 20 | 80 | Article title |
| `related_article.description` | text | No | 40 | 120 | Brief description |
| `related_capabilities_display` | array | No | 1 | 3 | Subset of global `related_capabilities` to show |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `related_content` |
| `tier` | 3 |
| `priority` | seo_depth |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- Every capability page must have a clear next step
- Related article should be topically tight (same problem space)
- Example pairings:
  - "Feedback Manager" → "How to Build a Continuous Feedback Loop"
  - "OST" → "Free Opportunity Mapping Template"
  - "Signals Engine" → "10 Sources of Product Signal You're Ignoring"

---

### Section 3.5: Final CTA

*Close the loop. Last chance to convert.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 60 | Strong closer. Repeat core value. |
| `subheadline` | text | No | 30 | 100 | Final nudge. |
| `primary_cta_text` | text | Yes | 10 | 25 | Action verb + outcome. |
| `primary_cta_url` | url | Yes | — | — | Signup or trial. |
| `secondary_cta_text` | text | No | 10 | 25 | Alternative. |
| `secondary_cta_url` | url | No | — | — | Demo or contact. |
| `trust_signals` | array | No | 3 | 5 | Final reassurance. |
| `trust_signals[].text` | text | Yes | 10 | 40 | e.g., "No credit card required" |
| `additional_message` | text | No | 30 | 120 | Optional extra context. |

**Section Metadata:**

| Field | Value |
|-------|-------|
| `section_id` | `final_cta` |
| `tier` | 3 |
| `priority` | essential |
| `collapse_on_mobile` | false |
| `anchor_in_toc` | false |

**Content Rules:**

- Mirror hero energy but tighter
- Don't introduce new concepts
- Trust signals address final objections
- This is for people who scrolled the whole page — they're warm

---

## Section Metadata Reference

Every section includes metadata for rendering logic:

| Field | Type | Values | Purpose |
|-------|------|--------|---------|
| `section_id` | text | unique identifier | Anchor links, analytics |
| `tier` | number | 1, 2, 3 | Reading mode classification |
| `priority` | select | "essential", "important", "seo_depth" | Controls rendering on lightweight views |
| `collapse_on_mobile` | boolean | true/false | Accordion behavior on mobile |
| `anchor_in_toc` | boolean | true/false | Include in table of contents |
| `anchor_label` | text | display name | TOC display text |

---

## Table of Contents Component

*Optional sticky TOC for long pages.*

| Field | Type | Required | Rules / Guidance |
|-------|------|----------|------------------|
| `show_toc` | boolean | Yes | Enable/disable TOC |
| `toc_position` | select | Yes | "sidebar_sticky" OR "top_inline" OR "floating" |
| `toc_headline` | text | No | e.g., "On This Page" |
| `show_progress` | boolean | No | Show reading progress indicator? |

**Content Rules:**

- Only include sections where `anchor_in_toc` = true
- Sticky sidebar works best on desktop
- Consider hiding on mobile or using floating button

---

## Voice & Tone (Capability Pages)

Same principles as homepage, but with more permission for depth:

### DO:

- Go deep on features — this audience wants detail
- Include technical specifics where relevant
- Use comparison and contrast to differentiate
- Answer objections directly in FAQ

### DON'T:

- Repeat the same value prop in every section
- Use filler content to make pages longer
- Hide important information in FAQ that should be in Features
- Stuff keywords unnaturally

### Length Guidance:

| Section | Target Word Count |
|---------|-------------------|
| Hero | 50-80 |
| Problem | 100-150 |
| Solution | 150-200 |
| Page Preview | 30-50 |
| Features (total) | 400-600 |
| Proof Image | 30-50 |
| Integrations | 100-150 |
| Use Cases (total) | 400-600 |
| Comparison | 200-300 |
| FAQ (total) | 600-1000 |
| Testimonials | 150-250 |
| Related Content | 50-80 |

**Total page:** 2,200-3,800 words (good for SEO without being bloated)

---

## Validation Rules Summary

| Rule | Condition | Enforcement |
|------|-----------|-------------|
| Metric in use cases | Each use case must have ≥1 result with `has_metric = true` | Block publish |
| FAQ answer length | If `schema_eligible = true`, answer ≥ 150 chars | Block publish |
| Proof image authenticity | `real_usage_image` must be flagged as real screenshot | Warning |
| Next step required | `recommended_next_step_page` must be set | Block publish |
| Pain points count | Exactly 3-4 pain points | Block publish |
| Workflow steps count | Exactly 3-4 steps | Block publish |

---

## Section Rendering Priority

When building lightweight or AMP versions:

| Priority | Sections | Render |
|----------|----------|--------|
| **Essential** | Hero, Problem, Solution, Page Preview, Mid-CTA, Final CTA | Always |
| **Important** | Features, Proof Image, Integrations, Use Cases | Desktop + Tablet |
| **SEO Depth** | Comparison, FAQ, Testimonials, Related Content | Full page only |

---

## Schema.org Structured Data

Each capability page should output:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{capability_display_name}",
  "description": "{meta_description}",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{from_testimonials}",
    "reviewCount": "{from_testimonials}"
  }
}
```

Plus FAQ schema for questions marked `schema_eligible`:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{question}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{answer}"
      }
    }
  ]
}
```

---

## Capability Page Checklist

Before publishing, verify:

- [ ] `reason_this_capability_exists` is compelling and standalone
- [ ] Meta title includes primary keyword (50-60 chars)
- [ ] Meta description is compelling (150-160 chars)
- [ ] Hero image shows actual product
- [ ] Problem section has exactly 3-4 pain points
- [ ] Solution section has exactly 3-4 steps
- [ ] Page Preview section has 4-6 anchor items
- [ ] Features split into hero (2-3) and additional (3-6)
- [ ] Proof image is real (not mockup)
- [ ] Integrations include top tools (Jira, Slack, etc.)
- [ ] Each use case has at least one metric-based result
- [ ] FAQ has 6-15 questions with natural keywords
- [ ] Schema-eligible FAQ answers are ≥150 characters
- [ ] `recommended_next_step_page` is set
- [ ] All images have alt text
- [ ] Internal links to related capabilities
- [ ] Related article is topically relevant
- [ ] Final CTA matches hero CTA
- [ ] Structured data is valid
- [ ] Mobile collapse behavior tested
- [ ] Pricing note added if applicable

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2025 | Initial schema with 3-tier structure |
| 1.1 | Dec 2025 | Added: Page Preview section, Proof Image section, Related Content section, `reason_this_capability_exists`, `pricing_note`, expanded internal linking fields, metric validation for use cases, variable FAQ answer length based on schema eligibility |
