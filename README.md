# SEO & AEO Landing Page Generator Skill

An Antigravity AI skill designed to generate high-converting landing pages optimized for Search Engine Optimization (SEO) and Answer Engine Optimization (AEO).

## What This Skill Does

This skill transforms your AI agent into an expert conversion copywriter and SEO strategist. When invoked, it ensures the generated landing page contains:
- **SEO Elements**: Optimized H1s, meta tags, and natural keyword density.
- **AEO Elements**: "AI Answer Blocks" designed for LLM summarization (e.g., ChatGPT, Perplexity citations), structured data like bullet points, and clear FAQs.
- **Conversion-Optimized Structure**: A proven flow from Hero section down to final CTA.

## How to Use It

### Global Usage (Across all projects)
To make this skill available globally to your Antigravity agent, copy the `seo-aeo-landing-page.md` file into your global skills directory (typically `~/.agents/skills/` or `~/.gemini/skills/` depending on your setup).

### Internal Project Usage (Local)
To use it only within a specific project repository:
1. Create a `_agents/skills` or `.agents/skills` folder in the root of your project.
2. Place `seo-aeo-landing-page.md` inside that folder.
3. The Antigravity agent will now have access to this skill context when working inside this repository.

## How to Test It

You can test that the skill is loaded and working correctly by prompting your Antigravity assistant.

**Try explicit invocation:**
> Use the `seo-aeo-landing-page` skill to generate a landing page for an AI tutoring platform.

**Try implicit invocation:**
> Generate an SEO landing page for a teacher marketplace.

### Verifying the Output
If the skill is working correctly, the output will follow the exact markdown structure defined in the skill:
1. It will begin with an H1 definition prompt.
2. It will include Meta Title and Meta Description suggestions.
3. It will feature an "AI Answer Block" definition (40-60 words).
4. It will contain proper H2 sections for Problem, Solution, Benefits, Features, and FAQ sequences.
5. It will incorporate list structures to optimize for AEO.
