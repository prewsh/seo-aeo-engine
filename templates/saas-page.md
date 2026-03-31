# SaaS Product Template

Use this template to run the SEO-AEO Orchestrator for a 
SaaS product. Fill in every field marked with [ ].
Fields marked optional can be left blank.

Copy this file, fill it in, and pass it to the orchestrator:

```bash
antigravity run seo-aeo-orchestrator --input templates/saas-page.md
```

---

## Workflow Input

```json
{
  "workflow_input": {
    "topic": "[primary keyword — e.g. remote project management software]",
    "business_type": "[what your SaaS does in one sentence — e.g. project management tool for remote engineering teams]",
    "target_audience": "[who uses your product — e.g. engineering managers, CTOs, startup founders]",
    "content_goal": "convert",
    "brand_name": "[your product or company name]",
    "brand_url": "[your homepage URL — e.g. https://yourproduct.com]",
    "existing_content": [
      "[optional — title of page already published]",
      "[optional — title of another published page]"
    ],
    "tone": "professional",
    "location": "[optional — leave blank for global, or enter country/city for local SEO]"
  }
}
```

---

## Landing Page Inputs

These are passed to the `landing-page-writer` skill.

```json
{
  "product_name": "[your product name]",
  "primary_keyword": "[same as topic above]",
  "secondary_keywords": [
    "[supporting keyword 1]",
    "[supporting keyword 2]",
    "[supporting keyword 3]"
  ],
  "pain_points": [
    "[problem your audience has — e.g. remote teams lose hours to status update meetings]",
    "[problem 2 — e.g. no single source of truth for what's being built]",
    "[problem 3 — e.g. async communication breaks down across timezones]"
  ],
  "features": [
    "[feature 1 — e.g. real-time task board]",
    "[feature 2 — e.g. async video updates]",
    "[feature 3 — e.g. automated sprint reports]",
    "[feature 4 — e.g. timezone-aware scheduling]",
    "[feature 5 — e.g. GitHub integration]"
  ],
  "benefits": [
    "[outcome 1 — e.g. your team always knows what's shipping and when]",
    "[outcome 2 — e.g. no more meeting to recap a meeting]",
    "[outcome 3 — e.g. managers spend time building, not chasing updates]",
    "[outcome 4 — e.g. every timezone ships at the same pace]",
    "[outcome 5 — e.g. code changes automatically update the task board]"
  ],
  "usp": [
    "[differentiator 1 — e.g. built specifically for async-first teams]",
    "[differentiator 2 — e.g. no per-seat pricing — flat rate for unlimited users]",
    "[differentiator 3 — e.g. setup takes under 10 minutes with GitHub connected]"
  ],
  "social_proof": {
    "testimonials": [
      "[Name, Title, Company]: [quote about a specific result]",
      "[Name, Title, Company]: [quote]",
      "[Name, Title, Company]: [quote]"
    ],
    "logos": [
      "[company name that uses your product]",
      "[company name]",
      "[company name]"
    ],
    "stats": [
      "[stat 1 — e.g. 4,000+ remote teams]",
      "[stat 2 — e.g. 40% fewer status meetings]",
      "[stat 3 — e.g. rated 4.8/5 on G2]"
    ]
  },
  "cta_primary": "[main CTA — e.g. Start Free Trial]",
  "cta_secondary": "[soft CTA — e.g. See How It Works]",
  "offer": "[optional — e.g. Free for 14 days, no credit card required]",
  "tone": "professional"
}
```

---

## Notes for SaaS Pages

- Lead with the outcome, not the feature list
- Transactional keywords convert better than informational 
  ones on landing pages — make sure your primary keyword 
  reflects buying intent
- The comparison section should benchmark against your 
  most Googled alternative, not your favourite competitor
- SaaS FAQ sections perform best when they address 
  pricing, security, and integration questions directly
- If you have a free trial, the offer field is your 
  strongest conversion lever — use it everywhere
