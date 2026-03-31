# Fintech App Template

Use this template to run the SEO-AEO Orchestrator for a 
fintech app or financial product. Fintech has strict 
constraints around claims — every benefit statement 
must be accurate and verifiable. Fill in every field 
marked with [ ].

Copy this file, fill it in, and pass it to the orchestrator:

```bash
antigravity run seo-aeo-orchestrator --input templates/fintech-app.md
```

---

## Workflow Input

```json
{
  "workflow_input": {
    "topic": "[primary keyword — e.g. automated budgeting app]",
    "business_type": "[what your app does — e.g. personal finance app that automates saving and tracks spending in real time]",
    "target_audience": "[who uses it — e.g. millennials and Gen Z managing personal finances independently]",
    "content_goal": "all",
    "brand_name": "[your app or company name]",
    "brand_url": "[your homepage URL]",
    "existing_content": [
      "[optional — title of page already published]"
    ],
    "tone": "empathetic",
    "location": "[optional — leave blank for global, or enter country for local financial regulations context]"
  }
}
```

---

## Landing Page Inputs

```json
{
  "product_name": "[your app name]",
  "primary_keyword": "[same as topic above]",
  "secondary_keywords": [
    "[secondary keyword 1 — e.g. money management app]",
    "[secondary keyword 2 — e.g. personal finance tracker]",
    "[secondary keyword 3 — e.g. automatic savings app]"
  ],
  "pain_points": [
    "[problem 1 — e.g. most people have no idea where their money goes each month]",
    "[problem 2 — e.g. budgeting apps require manual entry that nobody keeps up with]",
    "[problem 3 — e.g. saving feels impossible when it is not automatic]"
  ],
  "features": [
    "[feature 1 — e.g. automatic expense categorisation]",
    "[feature 2 — e.g. rule-based savings automation]",
    "[feature 3 — e.g. real-time spending alerts]",
    "[feature 4 — e.g. monthly financial health score]",
    "[feature 5 — e.g. bank-level 256-bit encryption]"
  ],
  "benefits": [
    "[outcome 1 — e.g. you always know your real financial position without logging anything manually]",
    "[outcome 2 — e.g. savings happen automatically before you can spend the money]",
    "[outcome 3 — e.g. overspending stops before it becomes a problem]",
    "[outcome 4 — e.g. one score tells you how your finances improved this month]",
    "[outcome 5 — e.g. your money is protected the same way your bank protects it]"
  ],
  "usp": [
    "[differentiator 1 — e.g. fully automated — no manual entry ever]",
    "[differentiator 2 — e.g. works with all major banks in [your region]]",
    "[differentiator 3 — e.g. saves the average user $[amount] in the first 3 months]"
  ],
  "social_proof": {
    "testimonials": [
      "[Name, Age, City]: [quote about a specific financial result — e.g. saved $800 in 60 days without thinking about it]",
      "[Name, Age, City]: [quote]",
      "[Name, Age, City]: [quote]"
    ],
    "logos": [
      "[bank or financial institution your app connects to]",
      "[app store or press mention]",
      "[certification or award]"
    ],
    "stats": [
      "[stat 1 — e.g. 50,000+ users]",
      "[stat 2 — e.g. $2M saved by users in 2024]",
      "[stat 3 — e.g. rated 4.9/5 on the App Store]"
    ]
  },
  "cta_primary": "[main CTA — e.g. Start Saving Automatically]",
  "cta_secondary": "[soft CTA — e.g. See How It Works]",
  "offer": "[optional — e.g. Free for 30 days, cancel anytime]",
  "tone": "empathetic"
}
```

---

## Notes for Fintech Pages

- Lead with empathy, not features — financial stress is 
  personal. The problem section needs to feel like 
  you understand the reader's situation before 
  you pitch anything
- Never make financial outcome claims you cannot prove — 
  "save $500 a month" must come from real user data. 
  If you do not have data yet, use softer language: 
  "users report saving more in their first month"
- Security and trust signals are more important on 
  fintech pages than any other category — 
  include encryption level, regulatory compliance, 
  and any bank partnerships in the trust signals section
- The FAQ section must address: data security, 
  bank connections, cancellation policy, 
  what happens to data if the user leaves, 
  and any regulatory certifications
- Tone must stay empathetic throughout — 
  money is emotional. Avoid language that 
  makes the reader feel judged for their 
  current financial situation
- If your app operates in a regulated market, 
  include the relevant compliance statement 
  in the footer of the landing page output
