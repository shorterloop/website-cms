# Shorter Loop — Homepage CMS Schema

**PayloadCMS Field Definitions & Content Rules**

Version 1.3 — December 2025

---

## Overview

This document defines the CMS schema for the Shorter Loop homepage. Nine sections, each earning its place.

**Design Principles:**

- **Self-sufficient:** Visitors should understand Shorter Loop without clicking deeper
- **Opinionated:** Confident voice that attracts the right customers and filters out the wrong ones
- **Concrete:** Answer "what does it do?" clearly — philosophy comes after clarity
- **The Pivot:** Everything flows through the pivot—where uncertainty becomes clarity

---

## Section 1: Hero

*The first thing visitors see. Must communicate value in under 3 seconds.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `eyebrow` | text | No | 10 | 40 | e.g., "Discovery-First Product Management" |
| `headline` | text | Yes | 20 | 60 | One sentence. Action-oriented. No jargon. |
| `headline_emphasis_word` | text | No | 3 | 20 | Word to highlight in Ember. |
| `subheadline` | text | Yes | 40 | 160 | Expands on headline. Plain English value prop. |
| `primary_cta_text` | text | Yes | 10 | 25 | e.g., "Start Free Trial" |
| `primary_cta_url` | url | Yes | — | — | Valid internal path or URL |
| `secondary_cta_text` | text | No | 10 | 25 | e.g., "See How It Works" |
| `secondary_cta_url` | url | No | — | — | Valid internal path or URL |
| `trust_note` | text | No | 10 | 40 | e.g., "No credit card required" |

**Content Rules:**

- No feature lists
- No buzzwords (leverage, synergy, empower)
- Must pass the "so what" test in 3 seconds

---

## Section 2: Trusted By / Audience Signal

*Quick credibility + audience filter. 2 seconds to scan.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | No | 10 | 50 | e.g., "Built for product teams who refuse to guess" |
| `display_mode` | select | Yes | — | — | "logos" OR "audience_tags" OR "both" |
| `logos` | array | No | 3 | 8 | Company logos, grayscale preferred |
| `logos[].image` | media | Yes | — | — | Company logo |
| `logos[].alt` | text | Yes | 5 | 40 | Company name |
| `audience_tags` | array | No | 3 | 5 | Self-identification tags |
| `audience_tags[].label` | text | Yes | 10 | 30 | e.g., "Product Managers", "CPOs" |

**Content Rules:**

- Compact — this is a signal, not a destination
- Use audience tags if you don't have recognizable logos yet

---

## Section 3: The Pivot — Transformation

*The before → after moment. This IS your problem and solution section combined.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `eyebrow` | text | No | 5 | 30 | e.g., "The Pivot" |
| `headline` | text | Yes | 15 | 50 | e.g., "From chaos to clarity" |
| `subheadline` | text | No | 30 | 120 | e.g., "Every transformation flows through the pivot." |
| `before_column_label` | text | Yes | 10 | 30 | e.g., "The Status Quo" |
| `after_column_label` | text | Yes | 10 | 30 | e.g., "With Shorter Loop" |
| `transformations` | array | Yes | 4 | 6 | Before → After pairs |
| `transformations[].before_title` | text | Yes | 15 | 50 | Problem state |
| `transformations[].before_detail` | text | Yes | 60 | 200 | Expanded pain |
| `transformations[].after_title` | text | Yes | 15 | 50 | Solution state |
| `transformations[].after_detail` | text | Yes | 60 | 200 | Expanded outcome |
| `display_mode` | select | Yes | — | — | "side_by_side" OR "stacked" |
| `show_stats_bar` | boolean | Yes | — | — | Toggle stats section |
| `stats` | array | No | 2 | 3 | If show_stats_bar = true |
| `stats[].value` | text | Yes | 1 | 10 | e.g., "80%" |
| `stats[].label` | text | Yes | 20 | 80 | e.g., "of features go unused" |

**Content Rules:**

- This replaces a separate "Problem" section — the "before" column IS the problem
- Each before/after is a matched pair
- Before: muted styling. After: Ember accents.
- Stats bar reinforces the pain with data

---

## Section 4: How It Works

*The system flow. Shows the engine that makes transformation possible.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `eyebrow` | text | No | 10 | 30 | e.g., "How It Works" |
| `headline` | text | Yes | 15 | 50 | e.g., "From Noise to Strategy" |
| `subheadline` | text | No | 30 | 100 | Brief setup |
| `steps` | array | Yes | 4 | 6 | The core system flow |
| `steps[].step_number` | number | Yes | 1 | 6 | Sequential |
| `steps[].label` | text | Yes | 5 | 20 | e.g., "Signals", "Themes", "Opportunities" |
| `steps[].description` | text | Yes | 40 | 120 | What happens at this stage |
| `steps[].icon` | select | Yes | — | — | From approved icon set |
| `steps[].is_pivot_point` | boolean | No | — | — | Highlight in Ember (typically "Opportunities") |
| `display_mode` | select | Yes | — | — | "flow_line" OR "cards" |

**Content Rules:**

- Core flow: Signals → Themes → Opportunities → Bets → Roadmap → Outcomes
- "Opportunities" is the pivot point
- Interactive: click/hover reveals descriptions

---

## Section 5: Integrations

*Kill the migration fear. Compact objection killer.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "Works With Your Stack" |
| `subheadline` | text | Yes | 40 | 120 | e.g., "Keep using Jira. We'll handle the rest." |
| `integration_groups` | array | Yes | 2 | 4 | Grouped by type |
| `integration_groups[].group_name` | text | Yes | 10 | 30 | e.g., "Issue Trackers" |
| `integration_groups[].integrations` | array | Yes | 2 | 6 | Integrations in group |
| `integration_groups[].integrations[].name` | text | Yes | 3 | 30 | e.g., "Jira" |
| `integration_groups[].integrations[].logo` | media | Yes | — | — | Integration logo |
| `integration_groups[].integrations[].status` | select | Yes | — | — | "live" OR "coming_soon" |
| `cta_text` | text | No | 10 | 30 | e.g., "See All Integrations" |
| `cta_url` | url | No | — | — | Link to integrations page |

**Content Rules:**

- Lead with Jira, Linear, Notion
- Compact — objection killer, not feature showcase

---

## Section 6: AI Engine

*Your moat. The synthesis capability humans can't do at scale.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `eyebrow` | text | No | 10 | 30 | e.g., "Your Moat" |
| `headline` | text | Yes | 15 | 50 | e.g., "Your Research Team, Always On" |
| `subheadline` | text | Yes | 40 | 120 | What the AI does |
| `body` | text | Yes | 80 | 200 | The synthesis story |
| `capabilities` | array | Yes | 3 | 4 | What the AI enables |
| `capabilities[].title` | text | Yes | 15 | 40 | Capability name |
| `capabilities[].description` | text | Yes | 40 | 100 | Outcome-focused |
| `visual` | media | Yes | — | — | Screenshot or illustration |
| `visual_alt` | text | Yes | 20 | 100 | Accessibility description |

**Content Rules:**

- Focus on synthesis, not summarization
- Avoid AI hype ("revolutionary", "game-changing")
- Show what humans couldn't do at scale

---

## Section 7: Capability Clusters

*What you actually get. Answers "what does this product do?"*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "Everything You Need, Nothing You Don't" |
| `subheadline` | text | No | 30 | 100 | e.g., "Three capabilities. One connected system." |
| `clusters` | array | Yes | 3 | 3 | Exactly three |
| `clusters[].name` | text | Yes | 5 | 20 | e.g., "Understand", "Decide", "Align" |
| `clusters[].tagline` | text | Yes | 15 | 40 | e.g., "Turn noise into signal" |
| `clusters[].description` | text | Yes | 60 | 150 | What you get, concretely |
| `clusters[].features` | array | Yes | 3 | 5 | Specific features in this cluster |
| `clusters[].features[].name` | text | Yes | 10 | 40 | e.g., "Feedback Inbox", "Theme Detection" |
| `clusters[].icon` | select | Yes | — | — | From approved icon set |
| `clusters[].link_url` | url | Yes | — | — | Path to capability page |
| `clusters[].link_text` | text | Yes | 10 | 25 | e.g., "Explore →" |

**Content Rules:**

- Exactly 3 clusters: **Understand**, **Decide**, **Align**
- Each cluster lists specific features (not just outcomes)
- This section answers: "But what do I actually get?"
- Balance outcomes with concrete functionality

**Cluster Definitions:**

| Cluster | Tagline | Features Include |
|---------|---------|------------------|
| Understand | Turn noise into signal | Feedback Inbox, Integrations, Theme Detection, Signal Tagging |
| Decide | Prioritize with evidence | Opportunity Scoring, Bet Tracker, Evidence Linking, Stakeholder Views |
| Align | Get everyone on the same page | Roadmap Builder, Outcome Tracking, Share & Export, Team Views |

---

## Section 8: Social Proof

*Build credibility. Specific outcomes over generic praise.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `headline` | text | Yes | 15 | 50 | e.g., "Teams Who've Made the Shift" |
| `quotes` | array | Yes | 1 | 3 | Testimonials |
| `quotes[].text` | text | Yes | 60 | 200 | Must include specific outcome |
| `quotes[].author_name` | text | Yes | 5 | 50 | Full name |
| `quotes[].author_title` | text | Yes | 10 | 60 | Role and company |
| `quotes[].author_image` | media | No | — | — | Optional headshot |

**Content Rules:**

- Specific outcomes, not generic praise
- Include at least one leadership-level quote (CPO/VP) to address that audience
- Don't fake it

---

## Section 9: Final CTA

*Close the loop. Ember-dominant.*

| Field | Type | Required | Min | Max | Rules / Guidance |
|-------|------|----------|-----|-----|------------------|
| `show_logo_mark` | boolean | Yes | — | — | Display large logo mark |
| `headline` | text | Yes | 15 | 50 | e.g., "Build Products Customers Actually Want" |
| `subheadline` | text | No | 30 | 100 | e.g., "Start with evidence. Ship with confidence." |
| `primary_cta_text` | text | Yes | 10 | 25 | e.g., "Start Free Trial" |
| `primary_cta_url` | url | Yes | — | — | Valid path or URL |
| `secondary_cta_text` | text | No | 10 | 25 | e.g., "Book a Demo" |
| `secondary_cta_url` | url | No | — | — | Valid path or URL |
| `trust_signals` | array | No | 3 | 5 | Reduce friction |
| `trust_signals[].text` | text | Yes | 10 | 40 | e.g., "No credit card required" |

**Content Rules:**

- Full Ember background
- Don't introduce new concepts — close the loop
- Trust signals remove objections

---

## Section Flow Summary

| # | Section | Purpose | Answers... |
|---|---------|---------|------------|
| 1 | Hero | Hook | "What is this?" |
| 2 | Trusted By | Credibility | "Is this for me?" |
| 3 | The Pivot | Problem + Solution | "What's wrong now? What's better?" |
| 4 | How It Works | System flow | "How does it work?" |
| 5 | Integrations | Kill fear | "Will it work with my tools?" |
| 6 | AI Engine | Differentiation | "What's special about it?" |
| 7 | Capability Clusters | Product overview | **"What do I actually get?"** |
| 8 | Social Proof | Trust | "Does it work for others?" |
| 9 | Final CTA | Convert | "How do I start?" |

---

## Visual Design Notes

### Color System

| Context | Color | Hex |
|---------|-------|-----|
| Default background | Void | #0D0D0C |
| Elevated background | Ink | #1A1A18 |
| Cards/surfaces | Charcoal | #252522 |
| Borders | Graphite | #363633 |
| Primary text | Clarity White | #FAFAF8 |
| Secondary text | Stone | #9A9A92 |
| Accent / The Pivot | Ember | #C4501C |

### Ember-Dominant Sections

- Section 3: The Pivot (stats bar)
- Section 9: Final CTA (full background)

### Typography

| Element | Font | Rule |
|---------|------|------|
| Headlines | Instrument Serif | Truth statements only |
| Body | Inter | Everything else |

---

## Voice & Tone

### DO:
- Name the enemy
- Be direct and specific
- Focus on outcomes
- Sound like an experienced PM giving real talk

### DON'T:
- Use buzzwords
- Be generic or safe
- Use AI hype language
- Use gradients or rainbow charts

### Key Lines:
- *"Stop building the wrong product faster."*
- *"Most teams ship fast, but think slowly."*
- *"You don't have a prioritization problem. You have an evidence problem."*

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2025 | Initial schema (12 sections) |
| 1.1 | Dec 2025 | Added Trusted By and Integrations |
| 1.2 | Dec 2025 | Replaced Solution with The Pivot |
| 1.3 | Dec 2025 | **Streamlined to 9 sections.** Removed Problem (absorbed by The Pivot), Continuous Discovery, and Strategic Planning. Added features array to Capability Clusters to answer "what do I get?" |