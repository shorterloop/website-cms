# Short Loop — Resources CMS Schema

**PayloadCMS Collection Definitions**

Version 1.0 — December 2025

---

## Strategic Context

### What Went Wrong

| Problem | Cause | CMS Fix |
|---------|-------|---------|
| Developer tutorials ranking (wrong audience) | No audience validation | Required `target_audience` field with ICP check |
| Glossary investment with zero ROI | Generic terms, no differentiation | Deprecate or consolidate; new terms require approval |
| Content doesn't connect to product | No required product linkage | Mandatory `product_connection` field |
| Random topics, no coherence | No content pillars defined | Required `content_pillar` from approved list |
| Thin pages that don't rank | No depth requirements | Minimum word counts, section requirements |

### The New Rules

1. **Every piece of content must target the ICP** — No exceptions
2. **Every piece of content must connect to a capability or use case** — No orphan content
3. **Content pillars are fixed** — You write within pillars, not outside them
4. **Quality gates exist** — Minimum depth, required sections, validation rules

---

## Content Pillars (Fixed List)

All content must belong to one of these pillars. No exceptions.

| Pillar | Description | Target Keyword Themes |
|--------|-------------|----------------------|
| `continuous_discovery` | The practice of ongoing customer learning | discovery, feedback loops, customer evidence |
| `evidence_based_roadmaps` | Building roadmaps from evidence, not opinions | roadmap, prioritization, stakeholder alignment |
| `product_operations` | Scaling product practices across teams | product ops, multi-team, portfolio |
| `methodology` | Short Loop's frameworks and philosophy | CLEAR, Product 3.0, roadmap debt |
| `industry_insights` | Trends, benchmarks, state-of-the-industry | trends, benchmarks, reports |

**Explicitly NOT allowed:**

- Developer tutorials (fabric.js, node.js, angular)
- Generic business terms (marketing strategy, customer service)
- Topics unrelated to product management/discovery

---

## Content Types Overview

| Collection | Purpose | Priority | Target Length |
|------------|---------|----------|---------------|
| `blog_post` | Thought leadership, SEO, nurture | P1 | 1,200-2,500 words |
| `case_study` | Social proof, sales enablement | P0 | 800-1,500 words |
| `guide` | Deep-dive educational content | P1 | 2,500-5,000 words |
| `comparison` | Alternative/vs pages, buyer intent | P0 | 1,500-2,500 words |
| `template` | Downloadable resources, lead gen | P2 | N/A (asset) |
| `glossary_term` | SEO (limited, strategic only) | P3 | 300-600 words |

---

## Collection 1: Blog Post

**Collection name:** `blog_post`

**Purpose:** Thought leadership, SEO for problem-aware searchers, email nurture content.

**NOT for:** Developer tutorials, generic business advice, news commentary.

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 40 | 80 | Clear, benefit-oriented. Include primary keyword. |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | SEO title. Primary keyword near front. |
| `meta_description` | text | Yes | 150 | 160 | Problem + promise. Compelling to click. |
| `primary_keyword` | text | Yes | — | — | The ONE keyword this post targets |
| `secondary_keywords` | array | No | 0 | 5 | Related keywords |
| `content_pillar` | select | Yes | — | — | From fixed pillar list |
| `target_audience` | select | Yes | — | — | "product_leader", "pm_ic", "head_of_product", "cpo" |
| `company_stage` | multiselect | Yes | — | — | "series_a", "series_b", "growth", "enterprise" |
| `author` | relationship | Yes | — | — | Link to author |
| `publish_date` | date | Yes | — | — | Publication date |
| `featured_image` | media | Yes | — | — | 1200x630px for social |
| `featured_image_alt` | text | Yes | 20 | 100 | Accessibility |
| `estimated_read_time` | number | Yes | — | — | Minutes (auto-calculate or manual) |
| `published` | boolean | Yes | — | — | Publish state |

---

### Content Validation Fields

| Field | Type | Required | Rules / Guidance |
|-------|------|----------|------------------|
| `icp_check` | checkbox | Yes | "I confirm this content targets our ICP (Series A+ product leaders)" |
| `product_connection` | relationship | Yes | Link to at least one capability or use case page |
| `call_to_action` | select | Yes | "demo", "trial", "guide_download", "newsletter", "related_content" |
| `word_count` | number | Auto | Calculated. Must be 1,200-2,500 for publish. |

**Validation:**

```
if (word_count < 1200) { block_publish("Minimum 1,200 words required") }
if (word_count > 2500) { warning("Consider splitting into series or guide") }
if (!icp_check) { block_publish("ICP confirmation required") }
if (!product_connection) { block_publish("Must link to capability or use case") }
```

---

### Content Structure

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `hook` | richtext | Yes | 100 | 300 | Opening that names the pain or insight. No throat-clearing. |
| `body` | richtext | Yes | 1000 | 2200 | Main content. Use H2/H3 structure. |
| `key_takeaways` | array | No | 3 | 5 | Bullet summary for skimmers |
| `key_takeaways[].text` | text | Yes | 30 | 100 | One takeaway |
| `cta_block` | object | Yes | — | — | End-of-post CTA |
| `cta_block.headline` | text | Yes | 15 | 60 | CTA headline |
| `cta_block.body` | text | No | 40 | 150 | Optional supporting text |
| `cta_block.button_text` | text | Yes | 10 | 25 | Action text |
| `cta_block.button_url` | url | Yes | — | — | Destination |

---

### Related Content

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `related_capability` | relationship | Yes | 1 | 2 | Link to capability pages |
| `related_use_case` | relationship | No | 0 | 2 | Link to use case pages |
| `related_posts` | relationship | No | 0 | 3 | Other blog posts |
| `next_step_content` | relationship | No | 0 | 1 | Guide or case study to read next |

---

### SEO Fields

| Field | Type | Required | Rules / Guidance |
|-------|------|----------|------------------|
| `schema_type` | select | Yes | "Article", "HowTo", "FAQ" |
| `faq_items` | array | No | If schema_type = FAQ, add Q&A pairs |
| `faq_items[].question` | text | Yes | The question |
| `faq_items[].answer` | text | Yes | The answer (150+ chars for schema) |

---

## Collection 2: Case Study

**Collection name:** `case_study`

**Purpose:** Social proof for sales, trust-building for buyers.

**Critical:** Must have real customer, real results, real metrics.

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 30 | 80 | Outcome-focused. e.g., "How [Company] reduced roadmap debates by 70%" |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | SEO title |
| `meta_description` | text | Yes | 150 | 160 | Challenge + result |
| `company_name` | text | Yes | — | — | Customer name (or anonymized descriptor) |
| `company_logo` | media | No | — | — | Logo if permitted |
| `company_descriptor` | text | Yes | 20 | 60 | e.g., "Series B FinTech, 45-person product org" |
| `industry` | select | Yes | — | — | "saas", "fintech", "healthtech", "ecommerce", "other" |
| `company_stage` | select | Yes | — | — | "series_a", "series_b", "growth", "enterprise" |
| `team_size` | text | Yes | — | — | e.g., "5 PMs, 40 engineers" |
| `featured` | boolean | No | — | — | Feature on homepage/key pages |
| `published` | boolean | Yes | — | — | Publish state |

---

### The Story

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `challenge.headline` | text | Yes | 15 | 60 | Name the problem |
| `challenge.narrative` | richtext | Yes | 150 | 400 | The situation before Short Loop |
| `challenge.pain_points` | array | Yes | 2 | 4 | Specific pain points |
| `challenge.pain_points[].text` | text | Yes | 30 | 100 | One pain point |
| `solution.headline` | text | Yes | 15 | 60 | What they did |
| `solution.narrative` | richtext | Yes | 150 | 400 | How they used Short Loop |
| `solution.capabilities_used` | relationship | Yes | 1 | 4 | Link to capabilities |
| `solution.implementation_timeline` | text | No | 10 | 50 | e.g., "6 weeks to full adoption" |
| `results.headline` | text | Yes | 15 | 60 | The outcome |
| `results.narrative` | richtext | Yes | 100 | 300 | What changed |
| `results.metrics` | array | Yes | 2 | 4 | **Must include numbers** |
| `results.metrics[].value` | text | Yes | 3 | 20 | e.g., "70%", "3x", "6 weeks" |
| `results.metrics[].label` | text | Yes | 15 | 60 | What it measures |
| `results.metrics[].context` | text | No | 20 | 80 | Optional context |

**Validation:**

```
results.metrics.length >= 2 // At least 2 metrics required
results.metrics.every(m => /\d/.test(m.value)) // Must contain a number
```

---

### Testimonial

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `testimonial.quote` | text | Yes | 60 | 250 | The quote |
| `testimonial.author_name` | text | Yes | 5 | 50 | Full name |
| `testimonial.author_title` | text | Yes | 10 | 60 | Role and company |
| `testimonial.author_image` | media | No | — | — | Headshot |

---

### Related Content

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `related_use_case` | relationship | Yes | 1 | 2 | Link to relevant use case pages |
| `related_capability` | relationship | No | 0 | 2 | Link to capability pages |
| `similar_case_studies` | relationship | No | 0 | 2 | Other case studies |

---

## Collection 3: Guide

**Collection name:** `guide`

**Purpose:** Deep-dive educational content. Lead generation (gated or ungated). SEO for high-value keywords.

**Think:** "The Complete Guide to Continuous Discovery" or "Evidence-Based Roadmaps: A Practical Framework"

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 40 | 100 | Comprehensive, definitive framing |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | SEO title |
| `meta_description` | text | Yes | 150 | 160 | Value prop for the guide |
| `primary_keyword` | text | Yes | — | — | Target keyword |
| `content_pillar` | select | Yes | — | — | From fixed pillar list |
| `guide_type` | select | Yes | — | — | "framework", "how_to", "benchmark", "playbook" |
| `gated` | boolean | Yes | — | — | Require email to access? |
| `pdf_version` | media | No | — | — | Downloadable PDF if gated |
| `estimated_read_time` | number | Yes | — | — | Minutes |
| `published` | boolean | Yes | — | — | Publish state |

---

### Content Structure

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `introduction` | richtext | Yes | 200 | 500 | Set up the problem, promise the solution |
| `chapters` | array | Yes | 3 | 10 | Main sections |
| `chapters[].title` | text | Yes | 20 | 80 | Chapter title |
| `chapters[].slug` | text | Yes | — | — | For anchor links |
| `chapters[].body` | richtext | Yes | 400 | 1500 | Chapter content |
| `chapters[].key_insight` | text | No | 50 | 150 | Pullout insight |
| `chapters[].visual` | media | No | — | — | Diagram, screenshot, or illustration |
| `chapters[].visual_alt` | text | No | 20 | 100 | Accessibility |
| `conclusion` | richtext | Yes | 150 | 400 | Summary and next steps |
| `word_count` | number | Auto | — | — | Must be 2,500-5,000 |

**Validation:**

```
if (word_count < 2500) { block_publish("Guides require minimum 2,500 words") }
if (chapters.length < 3) { block_publish("Guides require at least 3 chapters") }
```

---

### Lead Capture (if gated)

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `gate_config.headline` | text | No | 20 | 60 | e.g., "Get the complete guide" |
| `gate_config.description` | text | No | 40 | 150 | What they'll get |
| `gate_config.form_fields` | multiselect | No | — | — | "email", "name", "company", "role" |
| `gate_config.button_text` | text | No | 10 | 25 | e.g., "Download Now" |

---

### Related Content

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `related_capability` | relationship | Yes | 1 | 3 | Link to capabilities |
| `related_use_case` | relationship | No | 0 | 2 | Link to use cases |
| `related_blog_posts` | relationship | No | 0 | 5 | Supporting blog content |

---

## Collection 4: Comparison Page

**Collection name:** `comparison`

**Purpose:** Capture buyer-intent searches ("X vs Y", "X alternative"). High-conversion pages.

**Examples:** "Short Loop vs Productboard", "Productboard Alternative", "Jira for Product Management"

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 30 | 80 | e.g., "Short Loop vs Productboard: Which Is Right for You?" |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | SEO title |
| `meta_description` | text | Yes | 150 | 160 | Neutral, informative framing |
| `comparison_type` | select | Yes | — | — | "head_to_head", "alternative", "category" |
| `competitor_name` | text | No | — | — | If head_to_head or alternative |
| `competitor_logo` | media | No | — | — | Competitor logo |
| `category_name` | text | No | — | — | If category comparison (e.g., "Jira for Product Management") |
| `primary_keyword` | text | Yes | — | — | Target keyword |
| `published` | boolean | Yes | — | — | Publish state |

---

### Content Structure

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `introduction` | richtext | Yes | 100 | 300 | Neutral setup. Acknowledge both options fairly. |
| `tldr` | text | Yes | 100 | 250 | Quick summary for skimmers |
| `comparison_table` | object | Yes | — | — | Feature comparison |
| `comparison_table.criteria` | array | Yes | 6 | 15 | Comparison criteria |
| `comparison_table.criteria[].criterion` | text | Yes | 15 | 50 | What's being compared |
| `comparison_table.criteria[].short_loop` | text | Yes | 20 | 100 | Short Loop's offering |
| `comparison_table.criteria[].short_loop_rating` | select | Yes | — | — | "strong", "moderate", "weak", "not_applicable" |
| `comparison_table.criteria[].competitor` | text | Yes | 20 | 100 | Competitor's offering |
| `comparison_table.criteria[].competitor_rating` | select | Yes | — | — | "strong", "moderate", "weak", "not_applicable" |
| `detailed_analysis` | array | Yes | 3 | 6 | Deep-dive sections |
| `detailed_analysis[].topic` | text | Yes | 15 | 50 | Topic being analyzed |
| `detailed_analysis[].body` | richtext | Yes | 150 | 400 | Detailed comparison |
| `detailed_analysis[].winner` | select | Yes | — | — | "short_loop", "competitor", "tie", "depends" |
| `detailed_analysis[].winner_explanation` | text | Yes | 40 | 150 | Why |
| `who_should_choose` | object | Yes | — | — | Recommendation section |
| `who_should_choose.choose_short_loop` | array | Yes | 2 | 4 | Reasons to choose Short Loop |
| `who_should_choose.choose_short_loop[].text` | text | Yes | 30 | 100 | One reason |
| `who_should_choose.choose_competitor` | array | Yes | 2 | 4 | Reasons to choose competitor (be honest) |
| `who_should_choose.choose_competitor[].text` | text | Yes | 30 | 100 | One reason |

**Content Rules:**

- Be honest. If competitor is better at something, say so.
- Fairness builds trust. Readers see through biased comparisons.
- Focus on use case fit, not feature count.

---

### CTA

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `cta.headline` | text | Yes | 15 | 60 | Closing CTA |
| `cta.body` | text | No | 40 | 150 | Optional context |
| `cta.primary_button_text` | text | Yes | 10 | 25 | e.g., "Try Short Loop Free" |
| `cta.primary_button_url` | url | Yes | — | — | Trial or demo |
| `cta.secondary_button_text` | text | No | 10 | 25 | Alternative |
| `cta.secondary_button_url` | url | No | — | — | Talk to sales |

---

## Collection 5: Template/Download

**Collection name:** `template`

**Purpose:** Downloadable resources for lead generation. Templates, worksheets, checklists.

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `title` | text | Yes | 20 | 80 | e.g., "Continuous Discovery Sprint Template" |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | SEO title |
| `meta_description` | text | Yes | 150 | 160 | What they'll get, why it helps |
| `template_type` | select | Yes | — | — | "template", "worksheet", "checklist", "toolkit" |
| `file_format` | select | Yes | — | — | "pdf", "excel", "notion", "figma", "google_doc" |
| `file` | media | Yes | — | — | The downloadable file |
| `preview_image` | media | Yes | — | — | Preview screenshot |
| `content_pillar` | select | Yes | — | — | From fixed pillar list |
| `gated` | boolean | Yes | — | — | Require email? |
| `published` | boolean | Yes | — | — | Publish state |

---

### Landing Page Content

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 20 | 60 | Value-focused headline |
| `description` | richtext | Yes | 100 | 300 | What it is, why it helps |
| `what_you_get` | array | Yes | 3 | 6 | What's included |
| `what_you_get[].text` | text | Yes | 20 | 80 | One item |
| `how_to_use` | richtext | No | 80 | 200 | Optional usage instructions |
| `related_capability` | relationship | Yes | 1 | 2 | Link to capability |
| `related_guide` | relationship | No | 0 | 1 | Link to related guide |

---

## Collection 6: Glossary Term (Limited Use)

**Collection name:** `glossary_term`

**Purpose:** SEO for strategic terms only. NOT for generic definitions.

**Critical:** This collection is restricted. New terms require approval.

---

### Allowed Terms Policy

Only create glossary entries for:

1. **Terms you can own** — "Roadmap Debt", "Evidence-Based Roadmap", "Continuous Discovery Rhythm"
2. **Terms where you have a differentiated POV** — Not just a definition, but your perspective
3. **Terms with clear product connection** — Links directly to a capability

**Do NOT create:**

- Generic PM terms (backlog, sprint, user story)
- Marketing terms (customer service, marketing strategy)
- Developer terms (API, framework)

---

### Global Fields

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `term` | text | Yes | — | — | The term |
| `slug` | text | Yes | — | — | URL slug |
| `meta_title` | text | Yes | 50 | 60 | "What is [Term]? | Short Loop" |
| `meta_description` | text | Yes | 150 | 160 | Definition + unique angle |
| `term_category` | select | Yes | — | — | "discovery", "roadmapping", "prioritization", "methodology", "metrics" |
| `ownership_level` | select | Yes | — | — | "own" (your term), "differentiated" (common term, unique POV), "strategic" (high-value keyword) |
| `approved` | boolean | Yes | — | — | Requires admin approval to publish |
| `published` | boolean | Yes | — | — | Publish state |

**Validation:**

```
if (ownership_level === "own" && !approved) { block_publish("New owned terms require approval") }
```

---

### Content Structure

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `definition` | text | Yes | 80 | 200 | Clear, concise definition |
| `your_perspective` | richtext | Yes | 150 | 400 | Short Loop's unique take on this term |
| `why_it_matters` | richtext | Yes | 100 | 300 | Why this matters for product teams |
| `common_mistakes` | array | No | 2 | 4 | What teams get wrong |
| `common_mistakes[].text` | text | Yes | 30 | 100 | One mistake |
| `how_short_loop_helps` | richtext | Yes | 80 | 200 | Connect to product |
| `related_capability` | relationship | Yes | 1 | 2 | Must link to capability |
| `related_terms` | relationship | No | 0 | 3 | Other glossary terms |
| `word_count` | number | Auto | — | — | Must be 300-600 |

**Validation:**

```
if (word_count < 300) { block_publish("Glossary terms require minimum 300 words") }
if (!related_capability) { block_publish("Must link to at least one capability") }
if (!your_perspective) { block_publish("Must include your unique perspective") }
```

---

## Shared: Author Collection

**Collection name:** `author`

**Purpose:** Consistent author attribution across content.

---

| Field | Type | Required | Rules / Guidance |
|-------|------|----------|------------------|
| `name` | text | Yes | Full name |
| `slug` | text | Yes | URL slug |
| `role` | text | Yes | Title at Short Loop |
| `bio` | richtext | Yes | 100-300 chars |
| `headshot` | media | Yes | Square, min 400x400 |
| `linkedin_url` | url | No | LinkedIn profile |
| `twitter_url` | url | No | Twitter/X profile |

---

## Navigation: Resources Menu

### Design Principle

**Primary navigation is for prospects. Footer is for everyone else.**


### New Structure (Focused)

```
RESOURCES
├── Blog: The Product Mindset
├── Guides & Frameworks
├── Case Studies
├── Templates & Tools
└── Compare Tools →
```

**That's it.** Five links. Every link serves the buyer journey.

### Menu Item Details

| Item | Links To | Purpose |
|------|----------|---------|
| Blog: The Product Mindset | `/blog` | Thought leadership, SEO, nurture |
| Guides & Frameworks | `/guides` | Deep educational content, lead gen |
| Case Studies | `/case-studies` | Social proof, sales enablement |
| Templates & Tools | `/templates` | Lead gen downloads |
| Compare Tools → | `/compare` | Buyer-intent capture, competitive positioning |

### What Moves to Footer

| Item | Footer Section | Reason |
|------|----------------|--------|
| About Us | Company | Not for prospects |
| Careers | Company | Not for prospects |
| Press | Company | Not for prospects |
| Help Center | Support | Existing users only |
| Platform Status | Support | Existing users only |
| Submit Ideas | Support | Existing users only |
| Release Notes | Support | Existing users only |
| Security | Legal or Support | Not buying decision |
| Glossary | Resources (footer) | Deprioritized, SEO only |

### What to Deprecate

| Current Item | Action | Reason |
|--------------|--------|--------|
| Product Management Glossary | Remove from main nav, keep in footer | Zero ROI, heavily consolidate terms |
| White Papers | Rename to "Guides & Frameworks" | Better framing, clearer value |
| "Product Management" page | Audit and merge | Unclear purpose, likely thin content |
| Generic PM content | Archive | Doesn't serve ICP |

---

## Content Review Checklist

Before publishing ANY content:

### ICP Alignment

- [ ] Target audience is product leader at Series A+ company
- [ ] Content addresses a problem they actually have
- [ ] Language matches how they talk (not developer jargon)
- [ ] Connected to a capability or use case

### Quality

- [ ] Meets minimum word count for content type
- [ ] Has unique perspective (not just generic advice)
- [ ] Includes specific examples or data
- [ ] Readable and well-structured

### SEO

- [ ] Primary keyword defined and included in title/H1
- [ ] Meta title under 60 chars
- [ ] Meta description 150-160 chars
- [ ] Internal links to capability/use case pages

### Conversion

- [ ] Clear CTA at end
- [ ] Related content linked
- [ ] Logical next step for reader

---

## Migration Plan for Existing Content

### Blog Posts

1. Audit all posts against ICP criteria
2. Archive developer tutorials (fabric.js, node.js, etc.)
3. Redirect archived URLs to relevant remaining content
4. Re-tag remaining posts with new content_pillar system

### Glossary

1. Export all terms
2. Identify terms worth keeping (strategic, differentiated)
3. Consolidate into ~20-30 high-value terms maximum
4. Redirect deprecated term URLs to relevant pages
5. Improve remaining terms with new schema requirements

### Case Studies

1. Audit for real metrics and customer approval
2. Update to new schema
3. Identify gaps in industry/stage coverage

---

## Validation Rules Summary

| Collection | Rule | Enforcement |
|------------|------|-------------|
| `blog_post` | ICP check confirmed | Block publish |
| `blog_post` | Product connection linked | Block publish |
| `blog_post` | Word count 1,200-2,500 | Block publish |
| `case_study` | At least 2 metrics with numbers | Block publish |
| `guide` | Word count 2,500+ | Block publish |
| `guide` | At least 3 chapters | Block publish |
| `comparison` | Honest competitor strengths listed | Block publish |
| `glossary_term` | Unique perspective included | Block publish |
| `glossary_term` | Capability linked | Block publish |
| `glossary_term` | Admin approval for "own" terms | Block publish |

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2025 | Initial schema with 6 collections, validation rules, content pillars, migration plan |