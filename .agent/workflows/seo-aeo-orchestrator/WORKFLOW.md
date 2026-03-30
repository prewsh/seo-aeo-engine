# SEO + AEO Orchestrator Workflow

This workflow defines a structured multi-step chain for generating comprehensive, search-optimized, and answer-engine-ready content.

## Step 1: Keyword Research
- **Skill:** `keyword-research`
- **Input From:** `user_input`
- **Output To:** `landing-page-writer`
- **Description:** Extracts primary keywords, search intent, and long-tail variations.

## Step 2: Landing Page Writer
- **Skill:** `landing-page-writer`
- **Input From:** `keyword-research`
- **Output To:** `meta-description-generator`
- **Description:** Generates a high-converting landing page using the keyword output.

## Step 3: Meta Description Generator
- **Skill:** `meta-description-generator`
- **Input From:** `landing-page-writer`
- **Output To:** `content-cluster`
- **Description:** Writes optimized title tags and meta descriptions based on page content.

## Step 4: Content Cluster
- **Skill:** `content-cluster`
- **Input From:** `meta-description-generator`
- **Output To:** `blog-writer`
- **Description:** Builds a topical authority map around the primary keyword.

## Step 5: Blog Writer
- **Skill:** `blog-writer`
- **Input From:** `content-cluster`
- **Output To:** `content-quality-auditor`
- **Description:** Writes a cluster article based on the content cluster output.

## Step 6: Content Quality Auditor
- **Skill:** `content-quality-auditor`
- **Input From:** `blog-writer`
- **Output To:** `internal-linking`
- **Description:** Runs a dual SEO + AEO audit on both the landing page and the blog post.

## Step 7: Internal Linking
- **Skill:** `internal-linking`
- **Input From:** `content-quality-auditor`
- **Output To:** `schema-generator`
- **Description:** Suggests strategic internal links between all generated content.

## Step 8: Schema Generator
- **Skill:** `schema-generator`
- **Input From:** `internal-linking`
- **Output To:** `final_output`
- **Description:** Outputs FAQ and Product schema for the landing page.
