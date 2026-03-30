# Schema Generator Skill

## Description
Generates structured data in JSON-LD format to help search engines understand content and enable rich results.

## Trigger Phrases
- "Generate FAQ schema for [topic]"
- "Create product JSON-LD for [product]"
- "Review schema markup for [service]"
- "Schema generator: [type]"

## Input Format
```json
{
  "type": "faq / product / review",
  "data": {
    "name": "string",
    "description": "string",
    "offers": "object (optional)",
    "questions": ["object"]
  }
}
```

## Output Format
```json
{
  "@context": "https://schema.org",
  "@type": "...",
  "..." : "..."
}
```

## Execution
1. Identify the appropriate schema type (FAQ, Product, Review).
2. Map the user-provided data to Schema.org properties.
3. Validate against pre-defined templates in the `references/` folder.
4. Output the finalized JSON-LD script for inclusion in the HTML <head>.
5. Verify schema completeness for rich result eligibility.

**Script Reference:**
Execute `scripts/schema_builder.py` to populate JSON-LD templates with page data.
