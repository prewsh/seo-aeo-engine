# Keyword Research Skill

## Description
Activate this skill when the user wants to research, identify, or 
prioritise keywords for a topic, niche, or website. Trigger phrases 
include: "keyword research", "find keywords for", "what should I 
rank for", "keyword analysis", "best keywords for [topic]", 
"keyword strategy", "what are people searching for about [topic]", 
"SEO keywords for [niche]".

---

## Input Format
```json
{
  "topic": "string — the subject to research keywords for",
  "business_type": "string — what the business or site does",
  "target_audience": "string — who the content is for",
  "content_goal": "rank | convert | educate | all",
  "location": "string — optional, country or city for local SEO",
  "intent_focus": "informational | transactional | 
                   commercial | navigational | all",
  "competitor_urls": ["string — optional, up to 3 competitor URLs 
                       to inform keyword gaps"]
}
```

---

## Difficulty & Volume Rubric

**Important:** This skill estimates difficulty and volume based on 
semantic analysis and competitive signals. It does not connect to 
live data APIs. All figures are directional estimates, not 
verified data. Always validate with a live tool 
(Ahrefs, SEMrush, Google Keyword Planner) before committing 
to a full content strategy.

### Difficulty Scale

| Score  | Label       | Meaning                                              |
|--------|-------------|------------------------------------------------------|
| 0–20   | Easy        | Low competition, newer or niche keyword              |
| 21–40  | Moderate    | Some established content exists, beatable with quality |
| 41–60  | Competitive | Strong content exists, needs solid authority         |
| 61–80  | Hard        | Dominated by high-authority sites                    |
| 81–100 | Very Hard   | Reserved for the biggest players — avoid early on   |

### Volume Scale (Estimated Monthly Searches)

| Label       | Range              |
|-------------|--------------------|
| Very High   | 100,000+           |
| High        | 10,000–99,999      |
| Medium      | 1,000–9,999        |
| Low         | 100–999            |
| Very Low    | Under 100          |

### CPC Context

CPC (Cost Per Click) signals commercial value even for 
organic content. Use it to prioritise keywords where 
advertisers are spending — this means the intent is 
likely transactional and conversions are valuable.

| CPC Range   | Signal                                               |
|-------------|------------------------------------------------------|
| $0–$1       | Low commercial value, good for awareness content     |
| $1–$5       | Moderate value, mix of info and commercial intent    |
| $5–$15      | High commercial value, strong conversion potential   |
| $15+        | Very high value — transactional, competitive space  |

---

## Output Structure

The skill must always produce output in this exact format:
```markdown
# Keyword Research Report

**Topic:** [topic]
**Business Type:** [business_type]
**Target Audience:** [target_audience]
**Content Goal:** [content_goal]
**Location:** [location or "Global"]
**Note:** All volume and difficulty figures are estimates. 
Validate with a live keyword tool before final decisions.

---

## Seed Keywords

Core terms that define the topic's search territory:

| Seed Keyword         | Est. Volume | Difficulty | CPC Est. | Intent          |
|----------------------|-------------|------------|----------|-----------------|
| [keyword]            | [label]     | [score]    | [$x]     | [intent type]   |
| [keyword]            | [label]     | [score]    | [$x]     | [intent type]   |
| [keyword]            | [label]     | [score]    | [$x]     | [intent type]   |

---

## Priority Keyword Tiers

### 🟢 Tier 1 — Target First (High Value, Achievable)
Low-to-moderate difficulty. Should anchor your first 
wave of content.

| Keyword              | Est. Volume | Difficulty | CPC Est. | Intent        | Content Type to Create  |
|----------------------|-------------|------------|----------|---------------|-------------------------|
| [keyword]            | [label]     | [score]    | [$x]     | [intent]      | [landing page / blog]   |
| [keyword]            | [label]     | [score]    | [$x]     | [intent]      | [content type]          |
| [keyword]            | [label]     | [score]    | [$x]     | [intent]      | [content type]          |

---

### 🟡 Tier 2 — Build Toward (Medium Difficulty)
Competitive but winnable with topical authority. 
Target after Tier 1 content is live.

| Keyword              | Est. Volume | Difficulty | CPC Est. | Intent        | Content Type to Create  |
|----------------------|-------------|------------|----------|---------------|-------------------------|
| [keyword]            | [label]     | [score]    | [$x]     | [intent]      | [content type]          |
| [keyword]            | [label]     | [score]    | [$x]     | [intent]      | [content type]          |

---

### 🔴 Tier 3 — Long-Term Goals (High Difficulty)
Dominated by high-authority sites. Do not target these 
until significant topical authority is established.

| Keyword              | Est. Volume | Difficulty | CPC Est. | Intent        | Notes                   |
|----------------------|-------------|------------|----------|---------------|-------------------------|
| [keyword]            | [label]     | [score]    | [$x]     | [intent]      | [why it's hard]         |

---

## Long-Tail Keywords

Lower volume, lower difficulty, higher conversion rate. 
These are your fastest wins.

| Long-Tail Keyword                    | Est. Volume | Difficulty | Intent        | Best For              |
|--------------------------------------|-------------|------------|---------------|-----------------------|
| [keyword]                            | [label]     | [score]    | [intent]      | [blog / landing page] |
| [keyword]                            | [label]     | [score]    | [intent]      | [content type]        |
| [keyword]                            | [label]     | [score]    | [intent]      | [content type]        |
| [keyword]                            | [label]     | [score]    | [intent]      | [content type]        |
| [keyword]                            | [label]     | [score]    | [intent]      | [content type]        |

---

## AEO Keywords

Question-based and conversational keywords that AI engines 
surface in direct answers, featured snippets, and 
People Also Ask boxes.

| AEO Keyword / Question                         | Est. Volume | Intent        | Answer Format to Use   |
|------------------------------------------------|-------------|---------------|------------------------|
| What is [topic]?                               | [label]     | informational | Definition sentence    |
| How does [topic] work?                         | [label]     | informational | Numbered steps         |
| What is the best [topic] for [audience]?       | [label]     | commercial    | Comparison table       |
| How much does [topic] cost?                    | [label]     | transactional | Direct number + range  |
| [topic] vs [alternative] — which is better?   | [label]     | commercial    | Comparison block       |
| Is [topic] worth it?                           | [label]     | commercial    | FAQ answer block       |
| [Common question your audience asks]           | [label]     | [intent]      | [format]               |
| [Common question your audience asks]           | [label]     | [intent]      | [format]               |

---

## LSI and Semantic Keywords

Related terms that reinforce topical authority. 
Use these naturally throughout content — 
do not force them as primary targets.

- [LSI term 1]
- [LSI term 2]
- [LSI term 3]
- [LSI term 4]
- [LSI term 5]
- [LSI term 6]

---

## Keywords to Avoid

These keywords are flagged as high-risk or low-ROI 
for this topic and audience:

| Keyword              | Reason to Avoid                                        |
|----------------------|--------------------------------------------------------|
| [keyword]            | Wrong intent — attracts audience not looking to convert|
| [keyword]            | Too broad — dominated by global brands                 |
| [keyword]            | Cannibalises [other keyword] — similar enough to split traffic |
| [keyword]            | Seasonal — only relevant [month/period]                |

---

## Cannibalization Check

Keywords with enough overlap that two pages targeting 
them would compete against each other:

| Keyword A            | Keyword B            | Risk Level | Resolution                          |
|----------------------|----------------------|------------|-------------------------------------|
| [keyword]            | [keyword]            | High/Med   | [which page should own which term]  |

If none detected: ✅ No cannibalization risks found.

---

## Keyword → Content Map

Recommended content to create based on this research, 
in production order:

| Priority | Content Title                    | Target Keyword    | Content Type     | Goal              |
|----------|----------------------------------|-------------------|------------------|-------------------|
| 1        | [title]                          | [keyword]         | Landing Page     | Convert           |
| 2        | [title]                          | [keyword]         | Pillar Blog Post | Rank + Authority  |
| 3        | [title]                          | [keyword]         | Cluster Article  | Topical Depth     |
| 4        | [title]                          | [keyword]         | Cluster Article  | AEO / Snippet     |
| 5        | [title]                          | [keyword]         | FAQ Page         | AEO / Long-tail   |

---

## Quick Wins Summary

The 3 keywords to act on immediately:

1. **[keyword]** — [one sentence on why this is the best 
   first target]
2. **[keyword]** — [one sentence on why]
3. **[keyword]** — [one sentence on why]
```

---

## Execution Steps

1. Parse `topic` and `business_type` together to define 
   the full semantic territory — not just the obvious 
   head term but adjacent terms the audience uses
2. Generate seed keywords — 3–5 core terms that 
   anchor the topic
3. Expand each seed keyword into long-tail variations 
   using question formats, modifier patterns 
   ("best", "how to", "for [audience]", "vs"), 
   and location modifiers if `location` is provided
4. Generate AEO keyword list — convert the most common 
   audience questions into direct-answer keyword targets
5. Generate LSI terms — identify semantically related 
   vocabulary that reinforces topical authority 
   without targeting directly
6. Estimate difficulty for each keyword using the 
   rubric defined above — base estimates on 
   keyword length, specificity, and likely 
   competitive landscape
7. Estimate volume using the volume scale — 
   shorter, broader terms get higher volume labels; 
   longer, more specific terms get lower
8. Assign intent category to every keyword
9. Sort all keywords into Tier 1, 2, and 3 
   based on difficulty and estimated volume
10. Run cannibalization check — flag any two keywords 
    that are similar enough to split traffic if 
    targeted on separate pages
11. Build Keywords to Avoid list — flag wrong-intent, 
    too-broad, cannibalistic, and seasonal keywords
12. Build the Keyword → Content Map — recommend 
    content type and production order for top keywords
13. Execute `scripts/score_keywords.py` to verify 
    difficulty estimates programmatically — if 
    unavailable, proceed manually and note 
    "Script verification skipped" in output

---

## Script Reference

**Script:** `scripts/score_keywords.py`
**Invocation:** `python scripts/score_keywords.py 
--topic "[topic]" --keywords "[comma_separated_list]"`
**Outputs:** difficulty scores, intent classification, 
long-tail expansion suggestions
**Fallback:** if script unavailable, complete all 
analysis manually using the rubrics above and note 
"Script verification skipped" in the output

---

## Connected Skills
- Receives output from: orchestrator workflow input
- Feeds output to: `content-cluster`, 
  `landing-page-writer`, `blog-writer`, 
  `meta-description-generator`