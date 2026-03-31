# SEO-AEO Orchestrator Workflow

**File:** `.agent/workflows/seo-aeo-orchestrator/WORKFLOW.md`
**Workflow ID:** `seo-aeo-orchestrator`
**Version:** 1.0.0
**Total Steps:** 8
**Execution Mode:** Parallel where specified, sequential otherwise

---

## Purpose

This workflow generates a complete, publish-ready content growth system from a single keyword or topic. It runs 8 specialised skills in a structured sequence, passing outputs between them so every piece of content is informed by the one before it.

The end state is not a single article. It is an entire content ecosystem — landing page, blog post, meta tags, topic cluster, audit report, internal link map, and schema markup — all aligned to the same keyword strategy and AEO standards.

---

## Workflow Entry Point

```json
{
  "workflow_input": {
    "topic": "string — the primary subject or keyword to build the content system around",
    "business_type": "string — what the business does",
    "target_audience": "string — who the content is for",
    "content_goal": "rank | convert | educate | all",
    "brand_name": "string — optional",
    "brand_url": "string — optional, homepage URL",
    "existing_content": ["string — optional, titles of pages already published"],
    "tone": "professional | conversational | bold | empathetic | authoritative",
    "location": "string — optional, for local SEO targeting"
  }
}
```

---

## Execution Architecture

```
PHASE 1 — RESEARCH
────────────────────────────────────────────────
Step 1: keyword-research
  Input: workflow_input
  Output: keyword_report
  (feeds both Phase 2 tracks)

────────────────────────────────────────────────
PHASE 2 — GENERATION (runs in parallel)
────────────────────────────────────────────────

TRACK A                        TRACK B
──────────────                 ────────────────────
Step 2:                        Step 4:
landing-page-writer            content-cluster
Input: keyword_report          Input: keyword_report
Output: landing_page           Output: cluster_map
        │                               │
        ▼                               ▼
Step 3:                        Step 5:
meta-description-generator     blog-writer
Input: landing_page +          Input: cluster_map +
       keyword_report                  keyword_report
Output: meta_tags              Output: blog_post

────────────────────────────────────────────────
PHASE 3 — AUDIT, LINK, STRUCTURE (sequential)
────────────────────────────────────────────────
Step 6: content-quality-auditor
  Input: landing_page + blog_post + keyword_report
  Output: audit_report

Step 7: internal-linking
  Input: landing_page + blog_post + cluster_map + audit_report
  Output: link_map

Step 8: schema-generator
  Input: landing_page + blog_post + meta_tags + link_map + keyword_report
  Output: schema_markup
```

---

## Phase 1 — Research

### Step 1 — Keyword Research

| Field | Value |
|-------|-------|
| Skill | `keyword-research` |
| Phase | 1 — Research |
| Execution | Sequential — must complete before Phase 2 starts |
| Input From | `workflow_input` |
| Output To | Step 2 (Track A) and Step 4 (Track B) simultaneously |

**What this step does:**

Analyses the `topic` and `business_type` from the workflow input and produces a full keyword strategy. This is the foundation everything else builds on. No content is generated until this step completes.

**Output object — `keyword_report`:**
```json
{
  "primary_keyword": "string",
  "secondary_keywords": ["string"],
  "aeo_keywords": ["string"],
  "lsi_terms": ["string"],
  "tier_1_keywords": ["string"],
  "tier_2_keywords": ["string"],
  "content_map": [
    {
      "title": "string",
      "keyword": "string",
      "content_type": "string",
      "priority": "integer"
    }
  ],
  "keywords_to_avoid": ["string"]
}
```

**Completion check before moving to Phase 2:**
- [ ] `primary_keyword` is defined
- [ ] At least 3 `secondary_keywords` present
- [ ] At least 4 `aeo_keywords` present
- [ ] `content_map` contains at least 5 entries
- [ ] `tier_1_keywords` contains at least 2 entries

If any check fails, halt the workflow and return an error asking the user to provide a more specific topic.

---

## Phase 2 — Generation (Parallel Tracks)

Phase 2 runs Track A and Track B simultaneously. Neither track waits for the other. Both receive their input from `keyword_report` produced in Step 1.

---

### Track A

#### Step 2 — Landing Page Writer

| Field | Value |
|-------|-------|
| Skill | `landing-page-writer` |
| Phase | 2 — Generation, Track A |
| Execution | Parallel with Track B |
| Input From | `keyword_report` (Step 1) |
| Output To | Step 3 (meta-description-generator) |

**Output object — `landing_page`:**
```json
{
  "h1": "string",
  "aeo_extraction_sentence": "string",
  "full_page_content": "string — complete markdown output",
  "primary_keyword_used": "string",
  "faq_count": "integer",
  "internal_link_placeholders": ["string"],
  "word_count": "integer"
}
```

---

#### Step 3 — Meta Description Generator

| Field | Value |
|-------|-------|
| Skill | `meta-description-generator` |
| Phase | 2 — Generation, Track A |
| Execution | Sequential within Track A — waits for Step 2 |
| Input From | `landing_page` (Step 2) + `keyword_report` (Step 1) |
| Output To | Step 6 (content-quality-auditor) + Step 8 (schema-generator) |

**Output object — `meta_tags`:**
```json
{
  "title_variants": ["string", "string", "string"],
  "description_variants": ["string", "string", "string"],
  "recommended_title": "string",
  "recommended_description": "string",
  "og_title": "string",
  "og_description": "string",
  "twitter_title": "string",
  "twitter_description": "string"
}
```

---

### Track B

#### Step 4 — Content Cluster

| Field | Value |
|-------|-------|
| Skill | `content-cluster` |
| Phase | 2 — Generation, Track B |
| Execution | Parallel with Track A |
| Input From | `keyword_report` (Step 1) |
| Output To | Step 5 (blog-writer) |

**Output object — `cluster_map`:**
```json
{
  "pillar_page": {
    "title": "string",
    "keyword": "string",
    "word_count_target": "integer"
  },
  "cluster_articles": [
    {
      "priority": "integer — 1, 2, or 3",
      "title": "string",
      "keyword": "string",
      "content_type": "string",
      "intent": "string",
      "links_to": ["string"]
    }
  ],
  "link_map": "string — text-based link tree",
  "aeo_priority_articles": ["string"]
}
```

---

#### Step 5 — Blog Writer

| Field | Value |
|-------|-------|
| Skill | `blog-writer` |
| Phase | 2 — Generation, Track B |
| Execution | Sequential within Track B — waits for Step 4 |
| Input From | `cluster_map` (Step 4) + `keyword_report` (Step 1) |
| Output To | Step 6 (content-quality-auditor) |

**Output object — `blog_post`:**
```json
{
  "title": "string",
  "keyword": "string",
  "full_post_content": "string — complete markdown output",
  "tldr_block": "string",
  "faq_count": "integer",
  "word_count": "integer",
  "internal_link_placeholders": ["string"]
}
```

---

## Phase 3 — Audit, Link, Structure (Sequential)

Phase 3 begins only after both Track A and Track B have fully completed.

---

### Step 6 — Content Quality Auditor

| Field | Value |
|-------|-------|
| Skill | `content-quality-auditor` |
| Phase | 3 — Audit, Link, Structure |
| Execution | Sequential — waits for Steps 3 and 5 to complete |
| Input From | `landing_page` (Step 2) + `blog_post` (Step 5) + `keyword_report` (Step 1) |
| Output To | Step 7 (internal-linking) |

**Output object — `audit_report`:**
```json
{
  "landing_page_audit": {
    "overall_score": "integer",
    "seo_score": "integer",
    "aeo_score": "integer",
    "readability_score": "integer",
    "critical_issues": ["string"],
    "warnings": ["string"],
    "projected_score_after_fixes": "integer"
  },
  "blog_post_audit": {
    "overall_score": "integer",
    "seo_score": "integer",
    "aeo_score": "integer",
    "readability_score": "integer",
    "critical_issues": ["string"],
    "warnings": ["string"],
    "projected_score_after_fixes": "integer"
  },
  "publish_recommendation": "ready | fix-first | do-not-publish"
}
```

**Publish Gate:** If `publish_recommendation` is `do-not-publish`, halt the workflow and return the audit report with fix instructions. If `fix-first`, continue but flag all issues in the final output.

---

### Step 7 — Internal Linking

| Field | Value |
|-------|-------|
| Skill | `internal-linking` |
| Phase | 3 — Audit, Link, Structure |
| Execution | Sequential — waits for Step 6 |
| Input From | `landing_page` (Step 2) + `blog_post` (Step 5) + `cluster_map` (Step 4) + `audit_report` (Step 6) |
| Output To | Step 8 (schema-generator) |

**Output object — `link_map`:**
```json
{
  "total_opportunities": "integer",
  "orphan_pages": ["string"],
  "high_priority_links": [
    {
      "link_type": "string",
      "source_page": "string",
      "target_page": "string",
      "anchor_text": "string",
      "context_sentence": "string"
    }
  ],
  "medium_priority_links": ["object"],
  "low_priority_links": ["object"],
  "cannibalization_risks": ["string"],
  "equity_map": "string — text-based link flow"
}
```

---

### Step 8 — Schema Generator

| Field | Value |
|-------|-------|
| Skill | `schema-generator` |
| Phase | 3 — Audit, Link, Structure |
| Execution | Sequential — waits for Step 7 |
| Input From | `landing_page` (Step 2) + `blog_post` (Step 5) + `meta_tags` (Step 3) + `link_map` (Step 7) + `keyword_report` (Step 1) |
| Output To | `final_output` |

**Output object — `schema_markup`:**
```json
{
  "landing_page_schema": {
    "types_generated": ["string"],
    "rich_results_unlocked": ["string"],
    "validation_passed": "boolean",
    "script_blocks": ["string"]
  },
  "blog_post_schema": {
    "types_generated": ["string"],
    "rich_results_unlocked": ["string"],
    "validation_passed": "boolean",
    "script_blocks": ["string"]
  }
}
```

---

## Final Output

```
outputs/
├── keyword-research-report.md
├── landing-page.md
├── meta-tags.md
├── content-cluster.md
├── blog-post.md
├── audit-report.md
├── internal-link-map.md
└── schema-markup.md
```

---

## Workflow Health Checklist

### Phase 1
- [ ] Primary keyword is defined and specific
- [ ] At least 4 AEO keywords generated
- [ ] Content map contains at least 5 entries

### Phase 2 — Track A
- [ ] Landing page H1 contains primary keyword
- [ ] Landing page AEO extraction sentence present
- [ ] Landing page FAQ section has minimum 6 entries
- [ ] Meta description recommended variant is 140–155 characters
- [ ] Title tag recommended variant is 50–60 characters

### Phase 2 — Track B
- [ ] Content cluster has minimum 6 articles
- [ ] Every cluster article has a unique keyword
- [ ] At least one FAQ page in the cluster
- [ ] Blog post contains TL;DR block
- [ ] Blog post contains exactly 5 FAQ entries
- [ ] Blog post word count is between 800–3000

### Phase 3
- [ ] Both landing page and blog post audited
- [ ] No content scored below 50/100 overall
- [ ] No orphan pages in link map
- [ ] Every cluster article has a Cluster → Pillar link defined
- [ ] FAQPage schema generated for both landing page and blog post
- [ ] All schema validated — no missing required fields

---

## Error Handling

| Error Condition | Workflow Behaviour |
|-----------------|-------------------|
| Step 1 produces no primary keyword | Halt — ask user to provide a more specific topic |
| Step 2 or 5 produce under 300 words | Flag as warning — continue but note in audit |
| Step 6 scores any content below 50/100 | Halt — return audit report with fix instructions |
| Step 7 detects orphan pages | Continue — flag in link map and final output |
| Step 8 schema fails validation | Continue — flag missing fields in schema output |
| Any script unavailable | Continue manually — note "Script verification skipped" |

---

## Connected Skills

| Step | Skill | Receives From | Sends To |
|------|-------|---------------|----------|
| 1 | `keyword-research` | `workflow_input` | Steps 2, 4 |
| 2 | `landing-page-writer` | Step 1 | Steps 3, 6, 7, 8 |
| 3 | `meta-description-generator` | Steps 1, 2 | Steps 6, 8 |
| 4 | `content-cluster` | Step 1 | Steps 5, 7 |
| 5 | `blog-writer` | Steps 1, 4 | Steps 6, 7, 8 |
| 6 | `content-quality-auditor` | Steps 1, 2, 5 | Step 7 |
| 7 | `internal-linking` | Steps 2, 4, 5, 6 | Step 8 |
| 8 | `schema-generator` | Steps 1, 2, 3, 5, 7 | `final_output` |
