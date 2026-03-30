# Landing Page Writer Skill

## Description
Generates high-converting landing pages optimized for both Search Engine Optimization (SEO) and Answer Engine Optimization (AEO).

## Trigger Phrases
- "Write an SEO landing page for [product]"
- "Generate a high-converting landing page for [service]"
- "Create an AEO optimized landing page for [topic]"
- "Landing page draft for [brand]"

## Input Format
```json
{
  "product_name": "string",
  "target_audience": "string",
  "keywords": ["string"],
  "usp": ["string"],
  "cta": "string"
}
```

## Output Format
```markdown
# [Headline]
## [Sub-headline]
... [Sectional Content] ...

**SEO Metadata:**
- Title Tag: ...
- Meta Description: ...

**AEO/FAQ Section:**
- Q: ...
- A: ...
```

## Execution Steps
1. Analyze target keywords and user search intent.
2. Structure the page with H1-H3 hierarchy for SEO.
3. Draft compelling copy focused on USPs and benefits.
4. Integrate AEO-friendly FAQ schema and direct answers.
5. Review content for keyword density and readability.
