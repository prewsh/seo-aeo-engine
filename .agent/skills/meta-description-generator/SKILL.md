# Meta Description Generator Skill

## Description
Writes compelling meta titles and descriptions optimized for high Click-Through Rate (CTR) and keyword relevance.

## Trigger Phrases
- "Write meta tags for [page]"
- "Generate a meta description for [article]"
- "Optimize CTR for [title]"
- "Meta generator: [description]"

## Input Format
```json
{
  "page_title": "string",
  "main_keywords": ["string"],
  "content_summary": "string"
}
```

## Output Format
```json
{
  "meta_title": "string (60 chars max)",
  "meta_description": "string (155-160 chars max)",
  "og_title": "string",
  "og_description": "string"
}
```

## Execution Steps
1. Analyze the page content and target keywords.
2. Draft a unique meta title that includes the primary keyword first.
3. Create a meta description with a clear call-to-action (CTA).
4. Ensure character counts are within search engine display limits.
5. Provide Open Graph (OG) variations for social sharing.
