# SEO-AEO Engine 🚀

> An open-source AI-powered SEO + AEO (Answer Engine Optimization)
> growth engine for startups and content teams.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Built for Antigravity](https://img.shields.io/badge/Built%20for-Antigravity-blue)
![Skills: 8](https://img.shields.io/badge/Skills-8-purple)
![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen)

---

## What Is This?

The SEO-AEO Engine is a collection of eight specialised
Antigravity skills and one orchestrator workflow that work
together to generate an entire content growth system from
a single keyword.

Most content tools give you one thing — a blog post,
a keyword list, an audit report. This engine gives you all
of it, connected. Each skill feeds the next. The output of
keyword research becomes the input for your landing page.
The landing page feeds the auditor. The auditor feeds
the schema generator. Nothing is isolated.

It is built for two realities of modern search:

**SEO** — getting discovered by Google and other
traditional search engines through keyword targeting,
heading structure, internal linking, and structured data.

**AEO** — getting cited by AI engines like Perplexity,
ChatGPT, Gemini, and Claude through direct-answer blocks,
FAQ sections, definition sentences, and schema markup.
AEO is the layer most content tools ignore entirely.
This engine makes it the default.

---

## Who This Is For

- **Startups** building their content foundation from zero
- **Content teams** who want a repeatable, systematic workflow
- **Developers** who want to understand and extend
  AI-powered content skills
- **SEO practitioners** who want to add AEO to their stack
  without rebuilding everything

---

## The Architecture
```
INPUT: primary keyword or topic
         │
         ▼
┌─────────────────────┐
│  keyword-research   │  → produces keyword tiers, AEO queries,
└─────────────────────┘    content map
         │
         ▼
┌─────────────────────────────────────────────────┐
│  landing-page-writer     content-cluster        │
│  (runs in parallel)      (runs in parallel)     │
└─────────────────────────────────────────────────┘
         │                         │
         ▼                         ▼
┌──────────────────┐    ┌─────────────────────┐
│  meta-description│    │    blog-writer       │
│  generator       │    │ (uses cluster output)│
└──────────────────┘    └─────────────────────┘
         │                         │
         └──────────┬──────────────┘
                    ▼
         ┌─────────────────────────┐
         │  content-quality-auditor│  → SEO Report + AEO Report
         └─────────────────────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │   internal-linking  │  → link map + anchor text
         └─────────────────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │   schema-generator  │  → JSON-LD for all pages
         └─────────────────────┘
                    │
                    ▼
OUTPUT: landing page + blog post + meta tags +
        audit report + link map + schema markup
```

Every skill in the chain declares what it receives and
what it produces. No skill operates in isolation.

---

## Repository Structure
```
seo-aeo-engine/
│
├── .agent/
│   ├── skills/
│   │   ├── keyword-research/
│   │   │   ├── SKILL.md
│   │   │   └── scripts/
│   │   │       └── score_keywords.py
│   │   │
│   │   ├── landing-page-writer/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── meta-description-generator/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── content-cluster/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── blog-writer/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── content-quality-auditor/
│   │   │   ├── SKILL.md
│   │   │   └── scripts/
│   │   │       └── run_audit.py
│   │   │
│   │   ├── internal-linking/
│   │   │   ├── SKILL.md
│   │   │   └── scripts/
│   │   │       └── link_suggester.py
│   │   │
│   │   └── schema-generator/
│   │       ├── SKILL.md
│   │       ├── scripts/
│   │       │   └── schema_builder.py
│   │       └── references/
│   │           ├── faq-schema.json
│   │           ├── article-schema.json
│   │           ├── product-schema.json
│   │           ├── review-schema.json
│   │           ├── aggregate-rating-schema.json
│   │           ├── howto-schema.json
│   │           ├── breadcrumb-schema.json
│   │           ├── organization-schema.json
│   │           ├── webpage-schema.json
│   │           └── website-schema.json
│   │
│   └── workflows/
│       └── seo-aeo-orchestrator/
│           └── WORKFLOW.md
│
├── examples/
│   ├── saas-product/
│   │   ├── keyword-research-output.md
│   │   ├── landing-page-output.md
│   │   ├── blog-post-output.md
│   │   └── audit-report-output.md
│   │
│   └── fintech-app/
│       ├── keyword-research-output.md
│       ├── landing-page-output.md
│       ├── blog-post-output.md
│       └── audit-report-output.md
│
├── templates/
│   ├── saas-page.md
│   ├── ai-product.md
│   └── fintech-app.md
│
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## Prerequisites

Before installing, make sure you have the following:

- **Antigravity CLI** — v0.6 or higher
- **Python** — 3.10 or higher (required for audit and
  schema scripts)
- **Git** — for cloning and contributing
```bash
# Verify your Antigravity version
antigravity --version

# Verify Python version
python --version
```

---

## Installation

### One-line install — works everywhere

```bash
npx seo-aeo-engine
```

Installs all 8 skills and the orchestrator workflow into `.agent/skills/`
and `.agent/workflows/` for Antigravity by default.

---

### Install for your specific tool

```bash
# Antigravity — workspace (default)
npx seo-aeo-engine --antigravity

# Antigravity — global (available across all your projects)
npx seo-aeo-engine --antigravity-global

# Claude Code
npx seo-aeo-engine --claude

# Gemini CLI
npx seo-aeo-engine --gemini

# Codex CLI (OpenAI)
npx seo-aeo-engine --codex

# Cursor
npx seo-aeo-engine --cursor

# OpenCode
npx seo-aeo-engine --opencode

# Custom path
npx seo-aeo-engine --path ./my-skills-folder
```

---

### Verify installation

```bash
# Check all 8 skills are present
ls .agent/skills/

# Expected output:
# blog-writer
# content-cluster
# content-quality-auditor
# internal-linking
# keyword-research
# landing-page-writer
# meta-description-generator
# schema-generator
```

---

### Manual install (alternative)

If you prefer to clone directly:

```bash
git clone https://github.com/prewsh/seo-aeo-engine.git
cd seo-aeo-engine
pip install -r requirements.txt
```

Then copy `.agent/skills/` into the correct path for your tool
using the compatibility table below.

---

## Using With Your AI Coding Agent

Install once with the flag for your tool.
All 8 skills work across every major AI coding agent.

### Compatibility Table

| Tool | Install Command | Skills Path | Invoke Syntax |
|:-----|:----------------|:------------|:--------------|
| **Antigravity** | `npx seo-aeo-engine --antigravity` | `.agent/skills/` | `Use @keyword-research to research [topic]` |
| **Claude Code** | `npx seo-aeo-engine --claude` | `.claude/skills/` | `>> /keyword-research research [topic]` |
| **Gemini CLI** | `npx seo-aeo-engine --gemini` | `.gemini/skills/` | `Use keyword-research to research [topic]` |
| **Codex CLI** | `npx seo-aeo-engine --codex` | `.codex/skills/` | `Use keyword-research to research [topic]` |
| **Cursor** | `npx seo-aeo-engine --cursor` | `.cursor/skills/` | `@keyword-research research [topic]` |
| **OpenCode** | `npx seo-aeo-engine --opencode` | `.agents/skills/` | `opencode run @keyword-research [topic]` |

---

### Antigravity

```bash
# Install
npx seo-aeo-engine --antigravity

# Run the full 8-step orchestrator
antigravity run seo-aeo-orchestrator \
  --topic "remote project management software" \
  --business "SaaS tool for remote engineering teams" \
  --audience "engineering managers and startup founders" \
  --goal "convert"

# Run a single skill
antigravity skill run keyword-research --topic "your keyword"
antigravity skill run content-quality-auditor --input-type text \
  --content "paste content here" --keyword "your keyword"
```

---

### Claude Code

```bash
# Install
npx seo-aeo-engine --claude
```

Inside your Claude Code session:

```
# Keyword research
>> /keyword-research research remote project management software
   for an audience of engineering managers, goal: convert

# Write a landing page
>> /landing-page-writer write a landing page for Syncro
   primary keyword: remote project management software
   audience: engineering managers
   cta: Start Free Trial

# Audit content
>> /content-quality-auditor audit this content: [paste content]
   primary keyword: remote project management software

# Generate schema
>> /schema-generator generate FAQPage and Product schema
   for this landing page: [paste content]

# Write a blog post
>> /blog-writer write a cluster article titled
   "How to Manage a Remote Engineering Team"
   keyword: managing remote engineering teams
   tone: authoritative
```

> **Tip:** Skills auto-activate when your prompt matches their
> trigger phrases. Use the `/skill-name` prefix for precision
> when you want a specific skill to run.

---

### Gemini CLI

```bash
# Install
npx seo-aeo-engine --gemini
```

Inside your Gemini CLI session:

```
Use keyword-research to research "automated budgeting app"
for a millennial audience focused on personal finance.
Goal: convert.

Use content-cluster to build a topic map around
"automated budgeting app" for a personal finance audience.

Use blog-writer to write a cluster article titled
"5 Ways Automated Budgeting Saves You $500 a Month"
targeting keyword: automated savings app
tone: conversational

Use content-quality-auditor to audit this content
for SEO and AEO signals: [paste content]
primary keyword: automated budgeting app
```

---

### Codex CLI

```bash
# Install
npx seo-aeo-engine --codex
```

Inside your Codex CLI session:

```
Use keyword-research to research "AI content SEO tool"
for a SaaS audience of content marketers.
Goal: rank.

Use landing-page-writer to write a landing page for
an AI SEO tool. Primary keyword: AI content SEO tool.
Audience: content marketers and SEO teams.
CTA: Start Free Trial.

Use schema-generator to generate FAQPage and Article
schema for this blog post: [paste content]

Use internal-linking to map link opportunities between
these pages: [paste page list]
Focus page: landing page
```

---

### Cursor

```bash
# Install
npx seo-aeo-engine --cursor
```

Inside Cursor's Chat panel:

```
@keyword-research research "fintech app Nigeria"
for young professionals aged 25-35. Goal: all.

@landing-page-writer write a landing page for PennyWise
primary keyword: automated budgeting app
audience: millennials managing personal finances
cta: Start Saving Automatically

@content-quality-auditor review this landing page:
[paste content]
primary keyword: automated budgeting app

@meta-description-generator write meta tags for this page:
[paste content]
primary keyword: automated budgeting app
page type: landing-page
```

---

### OpenCode

```bash
# Install
npx seo-aeo-engine --opencode
```

Inside your OpenCode session:

```bash
opencode run @keyword-research \
  "research AI writing tools for content teams"

opencode run @blog-writer \
  "write a blog post titled How AI Is Changing SEO
   keyword: AI SEO tools
   audience: content managers
   tone: informational"

opencode run @schema-generator \
  "generate FAQPage schema for this page: [paste content]"
```

---

## Running the Full Orchestrator

The orchestrator runs the SEO-AEO growth lifecycle from a project or live URL: discovery, audit, approved fixes, keyword confirmation, search-intent research, 5–10 foundational pages, a 20-day editorial calendar, distribution planning, measurement setup, deployment verification, and optional monitoring.

It asks before connecting to Google Search Console or Bing Webmaster and asks whether you want one-time or recurring monitoring. It uses browser research, available APIs, or a clearly labelled semantic fallback depending on the environment.
```bash
antigravity run seo-aeo-orchestrator \
  --project-path "." \
  --site-url "https://yoursite.com" \
  --topic "your primary keyword or topic" \
  --business "what your business does" \
  --audience "who your content is for" \
  --goal "rank | convert | educate | all" \
  --foundation-pages 10 \
  --research-mode both \
  --monitoring ask
```

### Example
```bash
antigravity run seo-aeo-orchestrator \
  --project-path "." \
  --site-url "https://example.com" \
  --topic "remote project management software" \
  --business "SaaS project management tool for remote teams" \
  --audience "engineering managers and startup founders" \
  --goal "convert" \
  --foundation-pages 10 \
  --research-mode both \
  --monitoring ask
```

### What the Orchestrator Returns
```
outputs/
├── project-discovery.md           ← framework, routes, content model
├── audit-fix-plan.md              ← prioritized implementation plan
├── keyword-research-report.md     ← owner-confirmed intent research
│                                     and content map
├── foundational-content-plan.md   ← 5–10 first pages, default 10
├── 20-day-editorial-calendar.md   ← next topics and distribution
├── landing-page.md                ← full landing page copy
│                                     with AEO blocks
├── meta-tags.md                   ← 3 title variants +
│                                     3 description variants
├── content-cluster.md             ← pillar + 8 cluster articles
│                                     with link map
├── blog-post.md                   ← first cluster article,
│                                     fully written
├── internal-link-map.md           ← all link opportunities
│                                     with anchor text
├── schema-markup.md               ← JSON-LD for visible content
├── publishing-verification.md     ← production and submission status
└── weekly-seo-monitoring-report.md ← when monitoring is requested
```

---

## Using Skills Individually

You do not have to run the full orchestrator.
Every skill works as a standalone tool.

### Keyword Research
```bash
antigravity skill run keyword-research \
  --topic "your topic" \
  --audience "your target audience" \
  --goal "rank"
```

### Landing Page Writer
```bash
antigravity skill run landing-page-writer \
  --product "product name" \
  --keyword "primary keyword" \
  --usp "unique selling point 1, unique selling point 2" \
  --cta "Start Free Trial"
```

### Content Quality Auditor
```bash
# Audit raw text
antigravity skill run content-quality-auditor \
  --input-type text \
  --content "paste your content here" \
  --keyword "primary keyword"

# Audit a URL
antigravity skill run content-quality-auditor \
  --input-type url \
  --content "https://yoursite.com/page" \
  --keyword "primary keyword"

# Audit a project/codebase
antigravity skill run content-quality-auditor \
  --input-type codebase \
  --content "." \
  --business "what the business does" \
  --conversion-goal "signup"
```

### Schema Generator
```bash
antigravity skill run schema-generator \
  --page-type "landing-page" \
  --schema-types "FAQPage,Product,BreadcrumbList" \
  --data '{"title": "page title", "url": "https://..."}'
```

---

## The Skills

| Skill | What It Does | Key Output |
|:------|:-------------|:-----------|
| **keyword-research** | Identifies keyword tiers, AEO question queries, LSI terms, and cannibalization risks | Keyword report with Tier 1/2/3 classification and content map |
| **landing-page-writer** | Writes full landing pages in a defined section order with AEO blocks, FAQ, comparison table, and trust signals | Complete landing page copy with SEO metadata |
| **meta-description-generator** | Writes 3 title tag variants and 3 meta description variants per page, with OG and Twitter card tags | SERP preview + social sharing tags |
| **content-cluster** | Builds a topical authority map, 5–10 foundational pages, a 20-day editorial calendar, and internal link structure | Foundation plan, editorial calendar, and cluster map |
| **blog-writer** | Writes long-form blog posts with TL;DR block, definition sentence, comparison table, and 5-question FAQ | Fully structured blog post with AEO and SEO compliance |
| **content-quality-auditor** | Audits codebases, websites, and content for technical SEO, AEO, search intent, conversion paths, and publishing readiness | Evidence-backed audit + prioritized implementation and verification plan |
| **internal-linking** | Maps semantic relationships between pages and suggests anchor-text-specific links with placement instructions | Prioritised link opportunity report + equity map |
| **schema-generator** | Generates valid JSON-LD for 10 schema types, validates against Google rich result requirements, and outputs implementation-ready code | `<script>` blocks ready to paste into `<head>` |

---

## Examples

### Example 1 — SaaS Product: Remote Project Management

**Input:**
```bash
antigravity run seo-aeo-orchestrator \
  --topic "remote project management software" \
  --business "SaaS tool helping remote engineering teams ship faster" \
  --audience "engineering managers, CTOs, startup founders" \
  --goal "convert"
```

**Keyword Research Output (excerpt):**
```
🟢 Tier 1 — Target First
┌──────────────────────────────────────┬────────────┬────────────┐
│ Keyword                              │ Vol (est.) │ Difficulty │
├──────────────────────────────────────┼────────────┼────────────┤
│ remote project management software  │ Medium     │ 38/100     │
│ project management tool remote teams │ Low        │ 29/100     │
│ best PM software for remote work     │ Low        │ 31/100     │
└──────────────────────────────────────┴────────────┴────────────┘

AEO Keywords:
- What is the best project management software for remote teams?
- How does remote project management work?
- Remote project management software vs in-office tools?
```

**Landing Page Hero Output (excerpt):**
```markdown
# Ship Faster With Your Remote Team

## The project management tool built for teams that
   don't share a timezone.

> **In one sentence:** Syncro is a remote-first project
> management platform that helps distributed engineering
> teams track work, communicate asynchronously, and ship
> without the chaos of email and scattered spreadsheets.

[Start Free Trial]  [See How It Works]
```

**Audit Report Summary (excerpt):**
```
Overall Score:    84/100  ⚠️ Acceptable
SEO Score:        88/100  ✅ Pass
AEO Score:        79/100  ⚠️ Warn
Readability:      86/100  ✅ Pass

🔴 Critical Fix:
- AEO: No TL;DR block found in blog post
  Fix: Add 2-3 sentence direct-answer block
  immediately after H1

🟡 Important Fix:
- SEO: Meta description is 168 chars — over limit
  Fix: Trim to under 155 chars without
  cutting mid-sentence
```

**Schema Output (excerpt):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Syncro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Syncro is a remote-first project management
                 platform designed for distributed engineering
                 teams. It centralises task tracking, async
                 communication, and sprint planning in one tool."
      }
    }
  ]
}
</script>
```

---

### Example 2 — Fintech App: Automated Budgeting

**Input:**
```bash
antigravity run seo-aeo-orchestrator \
  --topic "automated budgeting app" \
  --business "Personal finance app that automates saving
              and tracks spending" \
  --audience "millennials and Gen Z managing personal finances" \
  --goal "all"
```

**Content Cluster Output (excerpt):**
```
Pillar Page: The Complete Guide to Automated Budgeting

Priority 1 — Write First:
┌───┬──────────────────────────────────────────┬────────────────┐
│ # │ Article Title                            │ Content Type   │
├───┼──────────────────────────────────────────┼────────────────┤
│ 1 │ How to Build a Budget That Actually Works│ How-to Guide   │
│ 2 │ Best Budgeting Apps Compared in 2025     │ Comparison     │
│ 3 │ What Is Zero-Based Budgeting?            │ Explainer      │
└───┴──────────────────────────────────────────┴────────────────┘

AEO Priority Articles:
★ Article 3 — "What Is Zero-Based Budgeting?"
  highest probability of AI engine extraction
★ Article 2 — comparison table will be lifted
  by AI engines for product queries
```

**Internal Link Map Output (excerpt):**
```
[Pillar: Automated Budgeting Guide]
    ↑ receives links from:
    ├── [Art. 1: How to Build a Budget]
    │   anchor: "automated budgeting guide"
    ├── [Art. 2: Budgeting Apps Compared]
    │   anchor: "complete budgeting guide"
    └── [Art. 3: Zero-Based Budgeting]
        anchor: "automated budget approach"

🔴 Orphan Page Detected:
    - "PennyWise Pricing Page" has no incoming links
      Fix: Add link from Art. 2 comparison table
```

---

## Scoring Reference

Both the auditor and orchestrator use the same
scoring system throughout:

| Score | Status | Label |
|:------|:-------|:------|
| 85–100 | ✅ Pass | Strong — minor polish needed |
| 70–84 | ⚠️ Warn | Acceptable — fixes recommended |
| 50–69 | 🔶 Weak | Needs work before publishing |
| 0–49 | ❌ Fail | Do not publish as-is |

---

## Troubleshooting

**Skills not activating**

Make sure all skills are registered:
```bash
antigravity skills list
```
If any skill shows as inactive, re-run:
```bash
antigravity skills install .agent/skills/[skill-name]/
```

**Script verification skipped in audit output**

This means `run_audit.py` did not execute. Verify Python
is installed and dependencies are met:
```bash
pip install -r requirements.txt
python .agent/skills/content-quality-auditor/scripts/run_audit.py --help
```

**Schema failing Google Rich Results Test**

Check the Validation Summary in your schema output for
flagged required fields. The most common cause is
a missing `image` field on Article or Product schema.
All image URLs must be absolute (starting with `https://`).

**Wrong skill fires for my prompt**

Each skill uses trigger phrases for auto-activation.
If the wrong skill fires, be more specific in your prompt
or use the direct skill invocation command:
```bash
antigravity skill run [exact-skill-name] --[flags]
```

---

## Roadmap

- [ ] `competitor-analysis` skill — gap analysis
      against real competitor URLs
- [ ] `pillar-page-writer` skill — dedicated skill
      for 3000+ word pillar content
- [ ] `content-refresh` skill — audit and update
      existing published content
- [ ] `press-release-writer` skill — AEO-optimised
      PR for brand mentions
- [ ] `social-post-generator` skill — convert blog
      output into LinkedIn and X posts
- [ ] Live keyword data integration via
      DataForSEO or Ahrefs API
- [ ] GitHub Actions workflow for automated
      content generation on push

---

## Contributing

Contributions are welcome.
This project grows fastest when practitioners
who understand SEO, AEO, and content strategy
add their knowledge to the skill definitions.

**To contribute a skill improvement:**

1. Fork the repository
2. Create a branch: `git checkout -b improve/skill-name`
3. Edit the relevant `SKILL.md` inside `.agent/skills/`
4. Add an example output to the `examples/` folder
5. Open a pull request with a clear description
   of what changed and why

**To contribute a new skill:**

1. Copy the structure of an existing skill folder
2. Write a complete `SKILL.md` following the
   same format as the existing 8 skills
3. Add a `scripts/` folder if the skill requires
   programmatic verification
4. Add the skill to the orchestrator workflow
   in `WORKFLOW.md` if it fits the chain
5. Open a pull request

Please keep all `SKILL.md` files consistent with
the output format and connected skills conventions
used throughout this repository.

---

## License

This project is licensed under the MIT License.
See [LICENSE](LICENSE) for details.

You are free to use, modify, and distribute this engine
in personal and commercial projects.

---

## Acknowledgements

Built with Antigravity — Google's agent-first
development platform.

Structured data validation references:
[Schema.org](https://schema.org) and
[Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data).
