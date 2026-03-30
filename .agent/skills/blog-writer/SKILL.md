# Blog Writer Skill

## Description
Activate this skill when the user wants to write a blog post, article, or 
long-form content piece for SEO and AEO purposes. Trigger phrases include: 
"write a blog post", "create an article", "generate blog content", 
"write a long-form post about", "blog writer".

## Input Format
```json
{
  "topic": "string — the main subject of the article",
  "primary_keyword": "string — exact keyword to rank for",
  "secondary_keywords": ["string", "string"],
  "target_audience": "string — who is reading this",
  "tone": "informational | conversational | authoritative | persuasive",
  "word_count": "integer — minimum 800, maximum 3000, default 1500",
  "cluster_context": "string — optional, paste content cluster output here",
  "internal_link_targets": ["string — page/post titles to link to"]
}
```

## Output Structure

The skill must always produce a blog post in this exact section order:
```markdown
# [H1: Primary Keyword-Optimised Title]

> **TL;DR:** [2–3 sentence direct answer to the article's core question. 
> This is the AEO extraction block — write it to be lifted by AI engines.]

## Introduction
[Hook sentence. State the problem or question clearly in the first 2 lines. 
Mention the primary keyword naturally within the first 100 words.]

---

## [H2: What Is {Topic}]
[Definition block — write a single, clean, extractable definition sentence 
as the very first line of this section. Follow with 2–3 paragraphs of context.]

---

## [H2: Why {Topic} Matters / The Core Problem]
[Establish relevance. Use bullet points or a numbered list in this section.]

---

## [H2: How {Topic} Works / Main Body Section]
[Deepest section. Use H3 subheadings for sub-concepts. Include at least 
one comparison block formatted as a table if comparing two or more things.]

### [H3: Sub-concept 1]
### [H3: Sub-concept 2]
### [H3: Sub-concept 3]

---

## [H2: Practical Steps / How To Section — if applicable]
[Numbered list of steps. Each step max 2 sentences. Scannable.]

---

## [H2: Common Mistakes / What To Avoid — if applicable]
[Bullet list format. Short, punchy, extractable by AI.]

---

## Frequently Asked Questions

**Q: [Question using a long-tail keyword]**  
A: [Direct answer, 2–3 sentences max. No fluff.]

**Q: [Question using a secondary keyword]**  
A: [Direct answer.]

**Q: [Question the target audience commonly asks]**  
A: [Direct answer.]

**Q: [Question about cost, time, or comparison]**  
A: [Direct answer.]

**Q: [Question about a common misconception]**  
A: [Direct answer.]

---

## Conclusion
[Restate the core answer from the TL;DR in new words. 
One call to action sentence at the end.]

---

## Internal Links
[INTERNAL LINK: {internal_link_target_1}]
[INTERNAL LINK: {internal_link_target_2}]

## External Links
[EXTERNAL LINK: authoritative source relevant to primary keyword]
```

---

## AEO Requirements
Every blog post produced by this skill MUST contain:

- [ ] A TL;DR block immediately after the H1
- [ ] A clean definition sentence as the first line of the "What Is" section
- [ ] At least one comparison table (if topic involves comparing options)
- [ ] Exactly 5 FAQ entries with direct, concise answers
- [ ] Bullet or numbered lists in at least 2 sections
- [ ] Primary keyword in: H1, first 100 words, at least one H2, meta description

---

## SEO Requirements

- H1: appears exactly once, contains primary keyword
- H2s: 4–6 per article, no keyword stuffing
- H3s: used only inside H2 sections, not standalone
- Word count: stay within the range specified in input; default 1500 words
- Keyword density: primary keyword appears every 300–400 words naturally
- No duplicate headings

---

## Execution Steps

1. Read `cluster_context` if provided — use it to decide which sub-topics 
   to cover and which to leave for linked cluster articles
2. Write the TL;DR block first — this anchors the whole article's direction
3. Build the heading skeleton before writing body content
4. Write the definition block in the "What Is" section as a single sentence
5. Write the FAQ section using long-tail and secondary keywords as questions
6. Insert internal link placeholders at natural transition points
7. Do a final keyword placement check against the SEO Requirements checklist
8. Do a final AEO checklist pass before outputting

---

## Connected Skills
- Receives output from: `content-cluster`
- Feeds output to: `content-quality-auditor`, `internal-linking`