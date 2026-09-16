---
name: seo-aeo-landing-page
description: Write or improve conversion-focused landing pages for products, services, and offers with practical SEO and AEO structure.
---

# SEO/AEO Landing Page Skill

This legacy entry point mirrors the packaged `landing-page-writer` skill. Use it when a tool loads this root-level file directly.

Write a publishable landing-page draft that helps the intended visitor understand the offer, trust it, and take the next step. Optimize for humans first, then make the page easy for search engines and answer engines to parse.

## Non-negotiable rules

- Establish the visitor’s problem before pitching the product.
- Include one factual, standalone 25–40 word answer to “What is [product] and who is it for?” in the hero.
- Use the primary keyword naturally in the H1, opening copy, one relevant H2, and an FAQ answer when provided. Do not force keyword density.
- Never invent testimonials, customers, logos, stats, prices, guarantees, awards, security claims, certifications, or product capabilities. Use labelled placeholders when evidence is missing.
- Map features to user outcomes, keep comparison claims fair, and suggest only supplied or clearly named internal links.

## Output order

1. SEO metadata: H1, title tag, meta description draft, URL slug
2. Hero with direct-answer block and primary/secondary CTAs
3. Problem
4. Solution
5. Features and benefits table
6. Social proof or trust evidence
7. Mid-page CTA
8. How it works
9. Comparison or alternatives
10. FAQ
11. Trust and risk-reversal signals
12. Final CTA
13. Internal-link suggestions

Use Markdown headings, short paragraphs, bullet lists, numbered steps, one comparison table, and direct FAQ answers. Return an `Assumptions and verification notes` section when inputs are incomplete or claims still need verification. When available, pass the draft to the repository’s `meta-description-generator`, `content-quality-auditor`, `internal-linking`, and `schema-generator` skills.
