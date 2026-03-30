# Content Cluster Skill

## Description
Develops topic clusters and pillar-subtopic structures to build topical authority and improve semantic search relevance.

## Trigger Phrases
- "Build a content cluster for [topic]"
- "Create a topic map for [niche]"
- "Topic cluster: [pillar page topic]"
- "Generate a content pillar strategy"

## Input Format
```json
{
  "pillar_topic": "string",
  "existing_content": ["string"],
  "target_keywords": ["string"]
}
```

## Output Format
```json
{
  "pillar_page_topic": "string",
  "subtopics": [
    {
      "topic": "string",
      "keyword": "string",
      "type": "how-to / guide / review / listicle"
    }
  ],
  "internal_link_map": "graph"
}
```

## Execution Steps
1. Identify the high-level pillar topic.
2. Conduct topical research to find related sub-queries and user intent.
3. Group related topics into semantic clusters.
4. Design the linking relationship between the pillar page and cluster content.
5. Provide specific keyword focuses for each subtopic.
