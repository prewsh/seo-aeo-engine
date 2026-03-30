# Internal Linking Skill

## Description
Optimizes the internal link structure of a website to distribute link equity and enhance crawlability/user navigation.

## Trigger Phrases
- "Create an internal linking strategy for [page]"
- "Find internal link opportunities for [topic]"
- "Internal link map for [directory]"
- "Suggest anchor text for [url]"

## Input Format
```json
{
  "target_page": "url",
  "site_map": ["url"],
  "anchor_focus": ["string"]
}
```

## Output Format
```json
{
  "opportunities": [
    {
      "source_url": "url",
      "target_url": "url",
      "suggested_anchor": "string",
      "context": "string"
    }
  ]
}
```

## Execution
1. Analyze the target page's content and primary keywords.
2. Crawl the provided sitemap or site list for related topics.
3. Identify relevant "source" pages with semantic overlap.
4. Suggest natural anchor text and placement within existing content.
5. Map out the new link flow for authority distribution.

**Script Reference:**
Execute `scripts/link_suggester.py` to map semantic relationships and receive link recommendations.
