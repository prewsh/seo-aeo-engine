# AI Product Template

Use this template to run the SEO-AEO Orchestrator for an 
AI-powered product. AI products have a unique SEO and AEO 
challenge — you need to rank for what your product does, 
not just what it is called. Fill in every field marked 
with [ ].

Copy this file, fill it in, and pass it to the orchestrator:

```bash
antigravity run seo-aeo-orchestrator --input templates/ai-product.md
```

---

## Workflow Input

```json
{
  "workflow_input": {
    "topic": "[primary keyword — describe the problem your AI solves, not the AI itself — e.g. automated content SEO tool]",
    "business_type": "[what your AI product does — e.g. AI-powered SEO and AEO content engine for startups]",
    "target_audience": "[who this is for — e.g. content marketers, startup founders, SEO teams]",
    "content_goal": "all",
    "brand_name": "[your product or company name]",
    "brand_url": "[your homepage URL]",
    "existing_content": [
      "[optional — title of page already published]"
    ],
    "tone": "bold",
    "location": "[optional — leave blank for global]"
  }
}
```

---

## Landing Page Inputs

```json
{
  "product_name": "[your AI product name]",
  "primary_keyword": "[same as topic above]",
  "secondary_keywords": [
    "[secondary keyword 1 — e.g. AI content generator]",
    "[secondary keyword 2 — e.g. AEO optimization tool]",
    "[secondary keyword 3 — e.g. answer engine optimization software]"
  ],
  "pain_points": [
    "[problem 1 — e.g. content teams spend weeks producing articles that never rank]",
    "[problem 2 — e.g. AI engines like Perplexity and ChatGPT ignore most published content]",
    "[problem 3 — e.g. SEO tools were built for Google, not for the way people search now]"
  ],
  "features": [
    "[feature 1 — e.g. automated keyword research with AEO query layer]",
    "[feature 2 — e.g. landing page generator with built-in answer blocks]",
    "[feature 3 — e.g. dual SEO and AEO content auditor]",
    "[feature 4 — e.g. JSON-LD schema generator for 10 schema types]",
    "[feature 5 — e.g. internal link map with anchor text suggestions]"
  ],
  "benefits": [
    "[outcome 1 — e.g. your content gets cited by ChatGPT, Perplexity, and Gemini]",
    "[outcome 2 — e.g. landing pages rank faster because they are structured for both Google and AI]",
    "[outcome 3 — e.g. you know exactly what to fix before you publish, not after]",
    "[outcome 4 — e.g. rich results show up in search without touching your codebase]",
    "[outcome 5 — e.g. every page connects to every other page automatically]"
  ],
  "usp": [
    "[differentiator 1 — e.g. the only content engine that optimizes for AI citation, not just Google ranking]",
    "[differentiator 2 — e.g. 8 specialist skills that feed each other — no manual handoffs]",
    "[differentiator 3 — e.g. open source — inspect, extend, and own every part of the workflow]"
  ],
  "social_proof": {
    "testimonials": [
      "[Name, Title, Company]: [quote about a specific result]",
      "[Name, Title, Company]: [quote]",
      "[Name, Title, Company]: [quote]"
    ],
    "logos": [
      "[company name]",
      "[company name]",
      "[company name]"
    ],
    "stats": [
      "[stat 1 — e.g. 8 specialist AI skills]",
      "[stat 2 — e.g. 3x faster content production]",
      "[stat 3 — e.g. works with any niche or industry]"
    ]
  },
  "cta_primary": "[main CTA — e.g. Run the Engine Free]",
  "cta_secondary": "[soft CTA — e.g. Read the Docs]",
  "offer": "[optional — e.g. Open source and free to use]",
  "tone": "bold"
}
```

---

## Notes for AI Product Pages

- Your primary keyword should describe the job your AI does, 
  not the technology behind it — people search for 
  "automated SEO content tool", not "LLM-powered content agent"
- AEO is especially critical for AI products because your 
  users are also using AI engines to research tools — 
  you need to be the answer they find
- The comparison section should honestly compare to the 
  manual workflow your product replaces, not just 
  competitor tools — this performs better for AEO
- Avoid jargon in pain points — write the frustration 
  as your user would say it in a Slack message, 
  not in a product brief
- The FAQ section should address: what it is, how it works, 
  whether it requires technical setup, what it costs, 
  and who it is not for — that last one builds trust fast
