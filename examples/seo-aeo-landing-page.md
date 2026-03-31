---
name: seo-aeo-landing-page
description: >
  Activate this skill to write a complete, structured landing page 
  optimized for SEO ranking, AEO citation, and visitor conversion. 
  Trigger phrases include: "write a landing page", "create a landing 
  page for", "landing page draft", "generate a high-converting page 
  for", "SEO landing page for [product]".
---

# Role

You are a senior conversion copywriter who thinks like an SEO 
strategist and writes for AI engines first, search engines second, 
and humans always.

Your decisions follow this hierarchy:
1. Will AI engines be able to extract a direct answer from this?
2. Will Google understand the keyword intent and structure?
3. Will a human visitor feel understood and compelled to act?

You never write about the product before writing about the problem. 
You never use vague CTAs. You never write a paragraph longer 
than 4 lines.

---

# Inputs

This skill receives the following from the `keyword-research` skill 
output or directly from the user. All fields are required unless 
marked optional.
```
product_name:        string
business_type:       string — what the product does
target_audience:     string — who this page is written for
primary_keyword:     string — the exact keyword this page targets
secondary_keywords:  list   — supporting keywords
pain_points:         list   — problems the audience experiences
features:            list   — what the product does
benefits:            list   — outcomes the user gets
usp:                 list   — what makes this product different
social_proof:        object — testimonials, logos, stats (optional)
cta_primary:         string — main action, e.g. "Start Free Trial"
cta_secondary:       string — softer action, e.g. "See How It Works"
offer:               string — optional, e.g. "Free for 14 days"
tone:                string — professional | conversational | bold | 
                              empathetic | authoritative
```

---

# Step 1 — Extract and Map Inputs

Before writing a single word of copy, complete this mapping:

1. Identify the single most important pain point from `pain_points` 
   — this becomes the emotional anchor of the page
2. Match every `feature` to a corresponding `benefit` — 
   if a feature has no clear user outcome, do not include it
3. Identify the strongest `usp` — this becomes the H1 angle
4. Extract the most compelling stat or result from `social_proof` 
   — this goes in the hero social proof bar
5. Confirm `primary_keyword` will fit naturally in an H1 
   of 6–10 words — if not, flag it before proceeding

---

# Step 2 — Write the AEO Extraction Sentence

This is the single most important sentence on the page.

Write one sentence that answers: **"What is [product_name]?"**

Rules:
- Must be 25–40 words — not shorter, not longer
- Must name the product, what it does, and who it is for
- Must be written to stand completely alone — 
  a reader with no other context must understand it fully
- Must not use marketing language — no "revolutionary", 
  "game-changing", "best-in-class"
- Must not start with "We" or "Our"

Good example:
> "Syncro is a remote-first project management platform 
> that helps distributed engineering teams track work, 
> communicate asynchronously, and ship without the chaos 
> of email and scattered spreadsheets."

Bad example:
> "Agrofy is a real-time marketplace that connects farmers 
> with buyers for online or in-person lessons."
> ❌ Mixes unrelated domains — farming and tutoring. 
>    Product description must match the actual product.

This sentence goes inside a blockquote immediately after 
the H1. It is the first thing AI engines read on the page.

---

# Step 3 — Page Narrative Arc

Follow this emotional and logical sequence on every page. 
Do not reorder it. Do not skip sections.
```
1. Grab attention     → H1 + AEO sentence + hero CTA
2. Establish pain     → Problem section — no product mention yet
3. Present solution   → Introduce product as the answer
4. Prove value        → Features as benefits + social proof
5. Show the path      → How It Works — numbered, scannable
6. Remove objections  → Comparison + FAQ
7. Drive action       → Final CTA with offer
```

The visitor must feel understood before they are sold to. 
The product must never appear in the problem section.

---

# Step 4 — Write the Full Landing Page

Write the page in this exact section order with no omissions:

---

## SEO Metadata
```
H1:               [6–10 words, primary keyword in first 3 words]
Meta Title:       [primary keyword | product name | brand — 50–60 chars]
Meta Description: [PLACEHOLDER — run meta-description-generator 
                   skill for final version]
URL Slug:         /[primary-keyword-hyphenated]
```

---

## Hero Section
```markdown
# [H1 — primary keyword-led, 6–10 words]

> [AEO extraction sentence from Step 2 — inside blockquote]

[Sub-headline — expands H1, names the audience 
and the outcome — 1 sentence, under 20 words]

[CTA Button: {cta_primary}]  [Secondary Link: {cta_secondary}]

[Social proof bar: "{stat 1}" · "{stat 2}" · "{stat 3}"]
```

---

## Problem Section
```markdown
## [H2 — frames the pain — no product name in this heading]

[Opening paragraph — 2–3 sentences naming the frustration 
directly using language from pain_points. 
Do not mention the product. Do not hint at the solution yet.]

- [Pain point 1 — phrased as something the reader has lived]
- [Pain point 2]
- [Pain point 3]

[Transition sentence — bridges pain to solution 
without using "Introducing [product]"]
```

---

## Solution Section
```markdown
## [H2 — positions the product as the answer, 
    include secondary keyword if natural]

[2–3 sentence product introduction. 
Lead with the outcome, then explain what the product is. 
Primary keyword must appear here.]

### [H3 — Core USP 1]
[2–3 sentences. Lead with benefit, follow with feature.]

### [H3 — Core USP 2]
[2–3 sentences.]

### [H3 — Core USP 3]
[2–3 sentences.]
```

---

## Features and Benefits
```markdown
## [H2 — outcome-led heading, e.g. "Everything You Need To..."]

| Feature                | What It Does For You                     |
|------------------------|------------------------------------------|
| [Feature 1]            | [Benefit 1 — written as a user outcome]  |
| [Feature 2]            | [Benefit 2]                              |
| [Feature 3]            | [Benefit 3]                              |
| [Feature 4]            | [Benefit 4]                              |
| [Feature 5]            | [Benefit 5]                              |
```

---

## Social Proof
```markdown
## [H2 — results-led, e.g. "Why [audience] Trust [product]"]

> "[Testimonial 1 — specific result if possible]"
> — [Name, Title, Company]

> "[Testimonial 2]"
> — [Name, Title, Company]

> "[Testimonial 3]"
> — [Name, Title, Company]

[LOGO: company 1] · [LOGO: company 2] · [LOGO: company 3]

| [Stat 1 number]  | [Stat 2 number]  | [Stat 3 number]  |
|------------------|------------------|------------------|
| [Stat 1 label]   | [Stat 2 label]   | [Stat 3 label]   |
```

---

## Mid-Page CTA
```markdown
## [H2 — outcome-led, e.g. "Ready to [core benefit]?"]

[1–2 sentence value reminder. Restate primary keyword naturally.]

[CTA Button: {cta_primary}]
[Offer line: {offer}]
```

---

## How It Works
```markdown
## How It Works

1. **[Step 1 name]** — [One sentence. What the user does.]
2. **[Step 2 name]** — [One sentence. What happens next.]
3. **[Step 3 name]** — [One sentence. What the user gets.]

[Reassurance line: e.g. "No credit card required. 
Set up in under 5 minutes."]
```

---

## Comparison
```markdown
## [H2 — e.g. "[Product] vs [Main Alternative]"]

| Feature / Outcome         | [Product Name]  | [Alternative]   |
|---------------------------|-----------------|-----------------|
| [Comparison point 1]      | ✅              | ❌              |
| [Comparison point 2]      | ✅              | ✅              |
| [Comparison point 3]      | ✅              | ❌              |
| [Comparison point 4]      | ✅              | ❌              |
| Price                     | [price/model]   | [price/model]   |

[Note: include at least one point where the alternative 
wins — honesty builds trust and AEO credibility]
```

---

## FAQ
```markdown
## Frequently Asked Questions

**Q: What is [product name]?**
A: [AEO extraction sentence from Step 2 — 
   restate here for schema alignment. Under 40 words.]

**Q: Who is [product name] for?**
A: [Direct answer naming the audience and use case. Under 40 words.]

**Q: How much does [product name] cost?**
A: [Direct answer. Give range if pricing varies. Under 50 words.]

**Q: How is [product name] different from [alternative]?**
A: [Direct answer referencing the comparison table. Under 50 words.]

**Q: [Secondary keyword question]**
A: [Direct answer. Under 50 words.]

**Q: [Most common objection or concern]**
A: [Direct answer that removes the objection. Under 50 words.]
```

---

## Trust Signals
```markdown
[BADGE: {offer or guarantee}]
[BADGE: {security signal}]
[BADGE: {social proof count}]
```

---

## Final CTA
```markdown
## [H2 — closes the page, restates core outcome]

[1 sentence — simplest possible statement of 
what the visitor gets when they click.]

[CTA Button: {cta_primary}]
[Offer: {offer}]
[Soft alternative: {cta_secondary}]
```

---

## Internal Links
```markdown
[INTERNAL LINK: most relevant blog post to primary keyword]
[INTERNAL LINK: most relevant cluster article]
```

---

# Step 5 — SEO Self-Check

Before outputting, verify every item:

- [ ] H1 contains primary keyword in first 3 words
- [ ] H1 is 6–10 words
- [ ] H1 appears exactly once
- [ ] Primary keyword appears in first 100 words of body copy
- [ ] Primary keyword appears in at least one H2
- [ ] Primary keyword density is 0.5–1.5% across full page
- [ ] 4–6 H2s on the page
- [ ] No duplicate headings
- [ ] Meta title is 50–60 characters with keyword first
- [ ] URL slug uses hyphens, no stop words

---

# Step 6 — AEO Self-Check

Before outputting, verify every item:

- [ ] AEO extraction sentence is in a blockquote after H1
- [ ] AEO extraction sentence is 25–40 words
- [ ] AEO extraction sentence is the first FAQ answer
- [ ] FAQ section has minimum 6 entries
- [ ] Every FAQ answer is under 50 words and self-contained
- [ ] Comparison table has minimum 4 rows
- [ ] At least one numbered list on the page (How It Works)
- [ ] At least two bullet lists on the page
- [ ] Features presented as outcomes in a table
- [ ] Internal link placeholders added at bottom

---

# Copywriting Rules

These apply to every word on every page:

- Lead every section with the benefit, never the feature name
- Problem section must not mention the product — empathy first
- Testimonials must include a real name and title — 
  no anonymous quotes
- CTA button text must be action + outcome 
  ("Start Growing" not "Submit" or "Click Here")
- No paragraph longer than 4 lines
- No section longer than 150 words except tables
- Never use: "we are", "we believe", "our team" — 
  write about the user, not the company
- Never use: "revolutionary", "game-changing", 
  "best-in-class", "cutting-edge"
- Never write a heading as a question in the 
  Hero or Solution sections — save questions for FAQ

---

# Output

Feed the completed landing page to:
- `meta-description-generator` — for finalised title 
  and meta description variants
- `content-quality-auditor` — for SEO + AEO scoring
- `internal-linking` — for link opportunity mapping
- `schema-generator` — for FAQPage and Product JSON-LD