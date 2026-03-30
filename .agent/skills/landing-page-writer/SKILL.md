# Landing Page Writer Skill

## Description
Activate this skill when the user wants to write, generate, or draft 
a landing page for a product, service, or offer. Trigger phrases include: 
"write a landing page", "create a landing page for", "generate a landing 
page", "landing page draft", "write a high-converting page for", 
"SEO landing page for [product]", "AEO landing page for [topic]", 
"landing page writer".

---

## Input Format
```json
{
  "product_name": "string — name of the product or service",
  "business_type": "string — what the business does",
  "target_audience": "string — who this page is written for",
  "primary_keyword": "string — the main keyword this page targets",
  "secondary_keywords": ["string"],
  "usp": ["string — unique selling points, up to 5"],
  "pain_points": ["string — problems the audience has that 
                   this product solves"],
  "features": ["string — key product features"],
  "benefits": ["string — outcomes the user gets from each feature"],
  "social_proof": {
    "testimonials": ["string — real or placeholder quotes"],
    "logos": ["string — company names that use the product"],
    "stats": ["string — numbers that prove value, e.g. '10,000 users'"]
  },
  "cta_primary": "string — main call to action text, 
                  e.g. 'Start Free Trial'",
  "cta_secondary": "string — softer CTA for hesitant visitors, 
                    e.g. 'See How It Works'",
  "offer": "string — optional, any free trial / discount / guarantee",
  "keyword_data": "string — optional, paste keyword research 
                   output here",
  "tone": "professional | conversational | bold | 
           empathetic | authoritative"
}
```

---

## Page Narrative Arc

Every landing page produced by this skill must follow 
this conversion narrative in order:
```
1. Grab attention — hero section stops the scroll
2. Establish relevance — speak the audience's pain immediately
3. Present the solution — introduce the product as the answer
4. Prove it works — features, benefits, social proof
5. Remove objections — FAQ, guarantees, trust signals
6. Drive action — CTA with urgency or offer
```

The page must never jump straight to features without 
first establishing pain. The visitor must feel understood 
before they are sold to.

---

## Output Structure

The skill must always produce output in this exact section order:
```markdown
<!-- ============================================ -->
<!-- SEO METADATA — place in page <head>         -->
<!-- ============================================ -->

**Title Tag:** [Primary keyword | Product Name | Brand — 50–60 chars]
**Meta Description:** [Placeholder — run meta-description-generator 
skill on this page for the final version]
**Primary Keyword:** [keyword]
**Secondary Keywords:** [keyword], [keyword], [keyword]

<!-- Note: For a fully optimised meta description, 
pass this page to the meta-description-generator skill -->

---

<!-- ============================================ -->
<!-- ABOVE THE FOLD — hero section               -->
<!-- ============================================ -->

# [H1: Primary keyword-led headline — 6–10 words max]
## [Sub-headline: expand the headline, speak to the pain 
    or outcome — 1 sentence, under 20 words]

> **In one sentence:** [Direct answer to "what is this and 
> who is it for" — this is the AEO extraction sentence 
> for this page. Write it to be lifted by AI engines.]

[Hero CTA Button: {cta_primary}]
[Secondary Link: {cta_secondary}]

[Social proof bar: "{stat 1}" · "{stat 2}" · "{stat 3}"]

---

<!-- ============================================ -->
<!-- PAIN SECTION                                 -->
<!-- ============================================ -->

## [H2: Frame the problem the audience is living with]

[Opening paragraph — 2–3 sentences naming the frustration 
directly. Use the language from pain_points input. 
Do not mention the product yet.]

- [Pain point 1 — phrased as something the reader 
  has experienced, not a feature description]
- [Pain point 2]
- [Pain point 3]

[Transition sentence that bridges from pain to solution — 
do not use "introducing [product]" as the transition]

---

<!-- ============================================ -->
<!-- SOLUTION SECTION                             -->
<!-- ============================================ -->

## [H2: Position the product as the answer — 
    include secondary keyword if natural]

[2–3 sentence product introduction. Lead with the outcome, 
then explain what the product is. 
Primary keyword must appear in this section.]

### [H3: Core USP 1]
[2–3 sentences expanding USP 1. 
Lead with the benefit, follow with the feature.]

### [H3: Core USP 2]
[2–3 sentences expanding USP 2.]

### [H3: Core USP 3]
[2–3 sentences expanding USP 3.]

---

<!-- ============================================ -->
<!-- FEATURES + BENEFITS SECTION                  -->
<!-- ============================================ -->

## [H2: What You Get — or outcome-led heading]

| Feature                  | What It Does For You                        |
|--------------------------|---------------------------------------------|
| [Feature 1]              | [Benefit 1 — written as an outcome]         |
| [Feature 2]              | [Benefit 2]                                 |
| [Feature 3]              | [Benefit 3]                                 |
| [Feature 4]              | [Benefit 4]                                 |
| [Feature 5]              | [Benefit 5]                                 |

---

<!-- ============================================ -->
<!-- SOCIAL PROOF SECTION                         -->
<!-- ============================================ -->

## [H2: Why [audience] Trust [product name] — 
    or results-led heading]

### Testimonials

> "[Testimonial 1 quote — specific result if possible]"
> — [Name, Title, Company]

> "[Testimonial 2 quote]"
> — [Name, Title, Company]

> "[Testimonial 3 quote]"
> — [Name, Title, Company]

### Trusted By

[LOGO: {logo 1}] &nbsp; [LOGO: {logo 2}] &nbsp; 
[LOGO: {logo 3}] &nbsp; [LOGO: {logo 4}]

### By The Numbers

| [Stat 1 number] | [Stat 2 number] | [Stat 3 number] |
|-----------------|-----------------|-----------------|
| [Stat 1 label]  | [Stat 2 label]  | [Stat 3 label]  |

---

<!-- ============================================ -->
<!-- MID-PAGE CTA                                 -->
<!-- ============================================ -->

## [H2: Outcome-led heading — what happens when 
    they click]

[1–2 sentence reminder of the core value. 
Restate primary keyword naturally.]

[CTA Button: {cta_primary}]
[Offer line if applicable: {offer}]

---

<!-- ============================================ -->
<!-- HOW IT WORKS SECTION                         -->
<!-- ============================================ -->

## [H2: How It Works — or "Get Started in 3 Steps"]

1. **[Step 1 name]** — [One sentence description]
2. **[Step 2 name]** — [One sentence description]
3. **[Step 3 name]** — [One sentence description]

[Reassurance line: no credit card / free to start / 
set up in minutes — use whichever applies]

---

<!-- ============================================ -->
<!-- COMPARISON SECTION — AEO signal              -->
<!-- ============================================ -->

## [H2: [Product] vs [Main Alternative] — 
    or "Why [product] Over Everything Else"]

| Feature / Outcome           | [Product Name]  | [Alternative]   |
|-----------------------------|-----------------|-----------------|
| [Comparison point 1]        | ✅              | ❌              |
| [Comparison point 2]        | ✅              | ✅              |
| [Comparison point 3]        | ✅              | ❌              |
| [Comparison point 4]        | ✅              | ❌              |
| Price                       | [price/model]   | [price/model]   |

---

<!-- ============================================ -->
<!-- FAQ SECTION — AEO critical                   -->
<!-- ============================================ -->

## Frequently Asked Questions

**Q: What is [product name]?**
A: [Direct definition sentence. Written to be extracted 
by AI engines — clear, standalone, under 40 words.]

**Q: Who is [product name] for?**
A: [Direct answer naming the target audience 
and their use case. Under 40 words.]

**Q: How much does [product name] cost?**
A: [Direct answer. If pricing varies, give the range 
and link to pricing page. Under 50 words.]

**Q: How is [product name] different from [alternative]?**
A: [Direct comparison answer. Reference the 
comparison table above. Under 50 words.]

**Q: [Question using a secondary keyword]**
A: [Direct answer under 50 words.]

**Q: [Question about a common objection or concern]**
A: [Direct answer that removes the objection. 
Under 50 words.]

---

<!-- ============================================ -->
<!-- TRUST SIGNALS SECTION                        -->
<!-- ============================================ -->

## [No heading needed — trust bar near final CTA]

[BADGE: {guarantee or offer — e.g. "30-day money back"}]
[BADGE: {security signal — e.g. "SSL Secured"}]
[BADGE: {social proof signal — e.g. "10,000+ users"}]
[BADGE: {award or press mention if available}]

---

<!-- ============================================ -->
<!-- FINAL CTA SECTION                            -->
<!-- ============================================ -->

## [H2: Action-oriented closing headline — 
    restate the core outcome one final time]

[1 sentence — the simplest possible statement of 
what the visitor gets when they click.]

[CTA Button: {cta_primary}]
[Offer line: {offer}]
[Low-stakes alternative: {cta_secondary}]

---

<!-- ============================================ -->
<!-- INTERNAL LINKS                               -->
<!-- ============================================ -->

[INTERNAL LINK: blog post most relevant to primary keyword]
[INTERNAL LINK: related cluster article or product page]
```

---

## AEO Requirements

Every landing page produced by this skill MUST contain:

- [ ] One-sentence AEO extraction block in the hero section
- [ ] "What is [product]" FAQ entry as the first FAQ question
- [ ] Minimum 6 FAQ entries with direct answers under 50 words each
- [ ] One comparison table with at least 4 comparison points
- [ ] Primary keyword in: H1, hero paragraph, at least 
      one H2, FAQ section
- [ ] Features presented as outcomes in a scannable table

---

## SEO Requirements

- H1: appears exactly once, contains primary keyword
- H1 length: 6–10 words
- H2s: 6–10 per page, at least one contains 
  a secondary keyword
- Primary keyword density: 0.5–1.5% across full page copy
- No keyword stuffing in headings
- Title tag: 50–60 characters, keyword first
- Meta description: handled by `meta-description-generator` 
  skill — include placeholder only

---

## Copywriting Rules

These apply to every section of every page:

- Lead every section with the benefit or outcome, 
  not the feature name
- Pain section must not mention the product — 
  build empathy first
- Testimonials must include a name and title — 
  anonymous quotes have no conversion value
- CTA button text must be action + outcome 
  ("Start Growing" not "Submit")
- No paragraph longer than 4 lines
- No section longer than 150 words except 
  Features + Benefits table
- Avoid: "we are", "our team", "we believe" — 
  write about the user, not the company

---

## Execution Steps

1. Read `keyword_data` if provided — extract the 
   primary keyword placement rules before writing any copy
2. Map `pain_points` to `benefits` — every pain 
   must have a corresponding benefit somewhere on the page
3. Write the H1 first — it must contain the primary 
   keyword and state the core outcome in 6–10 words
4. Write the AEO extraction sentence in the hero — 
   this anchors the page's AI discoverability
5. Write the pain section before writing about the product — 
   never open with a product pitch
6. Build the features-to-benefits table — rewrite every 
   feature from the input as a user outcome
7. Write FAQ entries as standalone answers — 
   each must make sense without reading the rest of the page
8. Write the comparison table — be honest, 
   include at least one point where the alternative wins
9. Place CTAs at: hero, mid-page, and final section — 
   vary the surrounding copy each time
10. Run keyword placement check against SEO Requirements
11. Run AEO checklist before outputting
12. Add meta description placeholder and note to run 
    `meta-description-generator` skill

---

## Connected Skills
- Receives output from: `keyword-research`
- Feeds output to: `meta-description-generator`, 
  `content-quality-auditor`, `internal-linking`, 
  `schema-generator`