# Content Quality Auditor Skill

## Description
Activate this skill when the user wants to audit, review, or score 
existing content for SEO and AEO performance. Trigger phrases include: 
"audit this content", "SEO review", "AEO audit", "check this page", 
"score this article", "content auditor", "what's wrong with this content", 
"review this landing page", "analyze content quality".

---

## Input Format
```json
{
  "content": "string — paste raw content text OR provide a URL",
  "input_type": "text | url",
  "primary_keyword": "string — the main keyword this content should rank for",
  "secondary_keywords": ["string"],
  "content_type": "landing-page | blog-post | pillar-page | product-page",
  "word_count_target": "integer — expected word count, default 1500"
}
```

---

## Scoring System

All scores are out of 100. Use these thresholds consistently:

| Score     | Status   | Label                        |
|-----------|----------|------------------------------|
| 85–100    | ✅ Pass   | Strong — minor polish needed |
| 70–84     | ⚠️ Warn  | Acceptable — fixes recommended |
| 50–69     | 🔶 Weak  | Needs work before publishing |
| 0–49      | ❌ Fail   | Do not publish as-is         |

---

## Output Structure

The skill must always produce output in this exact format:
```markdown
# Content Quality Audit Report

## Summary

| Metric              | Score     | Status  |
|---------------------|-----------|---------|
| Overall Score       | [X/100]   | [label] |
| SEO Score           | [X/100]   | [label] |
| AEO Score           | [X/100]   | [label] |
| Readability Score   | [X/100]   | [label] |

**Verdict:** [One sentence summary of the content's current state 
and the single most important fix needed.]

---

## SEO Report

### Score: [X/100] — [Status Label]

#### ✅ Passing Checks
- [Check name]: [what was found]
- [Check name]: [what was found]

#### ❌ Critical Issues — Fix Before Publishing

**Issue:** [Specific problem, e.g. "Primary keyword missing from H1"]
**Severity:** Critical
**Fix:** [Exact instruction, e.g. "Rewrite H1 to include '[keyword]' 
naturally within the first 6 words"]

**Issue:** [Specific problem]
**Severity:** Critical
**Fix:** [Exact instruction]

#### ⚠️ Warnings — Fix Soon

**Issue:** [Specific problem]
**Severity:** Medium
**Fix:** [Exact instruction]

#### Keyword Analysis

| Keyword              | Found | Occurrences | Density | Target   | Status  |
|----------------------|-------|-------------|---------|----------|---------|
| [primary keyword]    | Yes/No| [n]         | [x.x%]  | 0.5–1.5% | ✅ / ❌ |
| [secondary keyword]  | Yes/No| [n]         | [x.x%]  | 0.3–0.8% | ✅ / ❌ |

#### Heading Structure

| Heading | Text                        | Contains Keyword | Status  |
|---------|-----------------------------|------------------|---------|
| H1      | [heading text]              | Yes/No           | ✅ / ❌ |
| H2 #1   | [heading text]              | Yes/No           | ✅ / ❌ |
| H2 #2   | [heading text]              | Yes/No           | ✅ / ❌ |

H1 count: [n] — must be exactly 1
H2 count: [n] — recommended 4–6 for blog posts
H3 count: [n] — should only appear inside H2 sections

#### Meta Elements

| Element          | Found    | Content                          | Status  |
|------------------|----------|----------------------------------|---------|
| Title Tag        | Yes/No   | [content or "missing"]           | ✅ / ❌ |
| Meta Description | Yes/No   | [content or "missing"]           | ✅ / ❌ |
| Title Length     | [n] chars| Target: 50–60 characters         | ✅ / ❌ |
| Meta Length      | [n] chars| Target: 140–160 characters       | ✅ / ❌ |
| Keyword in Title | Yes/No   | —                                | ✅ / ❌ |

#### Word Count

| Metric             | Actual     | Target               | Status  |
|--------------------|------------|----------------------|---------|
| Word Count         | [n] words  | [word_count_target]  | ✅ / ❌ |
| Avg Sentence Length| [n] words  | Target: under 20     | ✅ / ❌ |
| Avg Paragraph Length| [n] lines | Target: 3–5 lines    | ✅ / ❌ |

---

## AEO Report

### Score: [X/100] — [Status Label]

#### ✅ Passing Checks
- [Check name]: [what was found]

#### ❌ Critical Issues — Fix Before Publishing

**Issue:** [Specific AEO problem, 
e.g. "No TL;DR or direct-answer block found"]
**Severity:** Critical
**Fix:** [Exact instruction, e.g. "Add a TL;DR block immediately 
after the H1 — 2–3 sentences that directly answer the article's 
core question. This is the block AI engines extract first."]

#### ⚠️ Warnings — Fix Soon

**Issue:** [Specific problem]
**Severity:** Medium
**Fix:** [Exact instruction]

#### AEO Signal Checklist

| Signal                              | Found    | Count    | Target       | Status  |
|-------------------------------------|----------|----------|--------------|---------|
| TL;DR / Direct Answer Block         | Yes/No   | —        | Required     | ✅ / ❌ |
| Definition Sentence ("X is...")     | Yes/No   | [n]      | Min 1        | ✅ / ❌ |
| FAQ Section                         | Yes/No   | [n] Qs   | Min 4        | ✅ / ❌ |
| Numbered or Bullet Lists            | Yes/No   | [n]      | Min 2        | ✅ / ❌ |
| Comparison Table                    | Yes/No   | [n]      | Recommended  | ✅ / ❌ |
| Primary Keyword in First 100 Words  | Yes/No   | —        | Required     | ✅ / ❌ |
| Concise Answers Under 50 Words      | Yes/No   | [n]      | Min 2        | ✅ / ❌ |
| Schema Markup Detected              | Yes/No   | —        | Recommended  | ✅ / ❌ |

#### Extractability Assessment

Rate how likely AI engines are to extract answers from this content:

| Question Type               | Extractable | Confidence | Notes              |
|-----------------------------|-------------|------------|--------------------|
| "What is [topic]?"          | Yes/No      | High/Med/Low| [brief reason]    |
| "How does [topic] work?"    | Yes/No      | High/Med/Low| [brief reason]    |
| "How much does [topic] cost?"| Yes/No     | High/Med/Low| [brief reason]    |
| "What are the benefits?"    | Yes/No      | High/Med/Low| [brief reason]    |

---

## Readability Report

### Score: [X/100] — [Status Label]

| Check                        | Result         | Target             | Status  |
|------------------------------|----------------|--------------------|---------|
| Passive Voice Usage          | [x%]           | Under 10%          | ✅ / ❌ |
| Transition Words Present     | Yes/No         | Required           | ✅ / ❌ |
| Wall-of-Text Paragraphs      | [n found]      | 0                  | ✅ / ❌ |
| Subheading Frequency         | Every [n] words| Every 300 words    | ✅ / ❌ |
| Reading Level                | [Grade level]  | Grade 7–9          | ✅ / ❌ |

---

## Prioritised Fix List

Work through these in order:

### 🔴 Do First (Critical — blocks publishing)
1. [Fix instruction]
2. [Fix instruction]

### 🟡 Do Second (Important — affects ranking)
3. [Fix instruction]
4. [Fix instruction]

### 🟢 Do Last (Polish — improves performance)
5. [Fix instruction]
6. [Fix instruction]

---

## Estimated Score After Fixes

| Metric            | Current Score | Projected Score |
|-------------------|---------------|-----------------|
| SEO Score         | [X/100]       | [X/100]         |
| AEO Score         | [X/100]       | [X/100]         |
| Readability Score | [X/100]       | [X/100]         |
| Overall Score     | [X/100]       | [X/100]         |
```

---

## Execution Steps

1. Detect `input_type` — if URL, fetch and extract raw text first 
   before running any checks
2. Run keyword analysis — count occurrences, calculate density, 
   check placement in H1, first 100 words, and at least one H2
3. Parse heading structure — count H1s, H2s, H3s, flag violations
4. Check meta elements — title tag, meta description, length, 
   keyword inclusion
5. Run word count and readability checks — sentence length, 
   paragraph density, passive voice ratio
6. Run AEO signal checklist — check for each signal in the table 
   above and record found/not found with count
7. Run extractability assessment — for each question type, 
   determine whether a direct, liftable answer exists in the content
8. Calculate SEO score, AEO score, and readability score 
   against the rubric defined in the Scoring System section
9. Build the prioritised fix list — critical issues first, 
   polish items last
10. Calculate projected scores after all fixes are applied
11. Execute `scripts/run_audit.py` to verify keyword density 
    calculations and heading structure programmatically — 
    if script is unavailable, proceed with manual analysis 
    and flag that script verification was skipped

---

## Script Reference

**Script:** `scripts/run_audit.py`
**Invocation:** `python scripts/run_audit.py --input "[content_or_path]" 
--keyword "[primary_keyword]"`
**Outputs:** keyword density report, heading count, 
sentence length averages
**Fallback:** if script unavailable, complete all checks manually 
using the checklists above and note "Script verification skipped" 
in the Summary section

---

## Connected Skills
- Receives output from: `blog-writer`, `landing-page-writer`
- Feeds output to: `internal-linking`, `schema-generator`