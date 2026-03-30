# Keyword Research Skill

## Description
This skill identifies high-value SEO keywords, assessing search intent, volume, and competitiveness to form the foundation of content strategy.

## Trigger Phrases
- "Conduct keyword research for [topic]"
- "Find SEO keywords for [niche]"
- "Keyword analysis for [website]"
- "What are the best keywords for [topic]?"

## Input Format
```json
{
  "topic": "string",
  "location": "string (optional)",
  "intent_focus": "string (optional: informational, transactional, etc.)"
}
```

## Output Format
```json
{
  "keywords": [
    {
      "keyword": "string",
      "volume": "integer",
      "difficulty": "0-100",
      "intent": "string",
      "cpc": "decimal"
    }
  ],
  "top_competitors": ["string"]
}
```

## Execution
1. Analyze the core topic and identify seed keywords.
2. Expand seed keywords into long-tail variations and LSI terms.
3. Fetch or estimate search volume and keyword difficulty.
4. Categorize keywords by search intent (Informational, Navigational, Commercial, Transactional).
5. Filter and rank the best keywords based on the user's focus.

**Script Reference:**
Execute `scripts/score_keywords.py` to automate difficulty scoring and intent extraction.
