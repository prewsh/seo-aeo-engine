# Content Quality Auditor Skill

## Description
Audits existing content for SEO compliance and AEO efficiency, providing actionable insights for improvement.

## Trigger Phrases
- "Audit this content: [url/text]"
- "SEO/AEO review for [content]"
- "Analyze content quality for [topic]"
- "Content auditor: [content]"

## Input Format
```json
{
  "content": "string",
  "target_keywords": ["string"]
}
```

## Output Format
```markdown
# Content Audit Results

## SEO Report
- **Keyword Density:** ...
- **Heading Structure:** ...
- **Meta Tags:** ...
- **Visual Optimization:** ...

## AEO Report
- **Direct Answer Effectiveness:** ...
- **Entity Identification:** ...
- **Schema Validity:** ...
- **Answerability Score:** ...
```

## Execution
1. Parse the input content for keyword usage and semantic structure.
2. Evaluate traditional SEO metrics (tags, headings, density).
3. Evaluate AEO metrics (answerability, entity relevance, knowledge graph compatibility).
4. Identify gaps in content authority and clarity.
5. Generate a bifurcated report with clear SEO and AEO recommendations.

**Script Reference:**
Execute `scripts/run_audit.py` to perform full SEO and AEO signal verification.
