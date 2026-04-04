#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const TOOLS = {
  "--antigravity": {
    label: "Antigravity (workspace)",
    skillsPath: ".agent/skills",
    workflowsPath: ".agent/workflows",
  },
  "--antigravity-global": {
    label: "Antigravity (global)",
    skillsPath: path.join(
      process.env.HOME || process.env.USERPROFILE,
      ".gemini/antigravity/skills"
    ),
    workflowsPath: path.join(
      process.env.HOME || process.env.USERPROFILE,
      ".gemini/antigravity/workflows"
    ),
  },
  "--claude": {
    label: "Claude Code",
    skillsPath: ".claude/skills",
    workflowsPath: null,
  },
  "--gemini": {
    label: "Gemini CLI",
    skillsPath: ".gemini/skills",
    workflowsPath: null,
  },
  "--codex": {
    label: "Codex CLI",
    skillsPath: ".codex/skills",
    workflowsPath: null,
  },
  "--cursor": {
    label: "Cursor",
    skillsPath: ".cursor/skills",
    workflowsPath: null,
  },
  "--opencode": {
    label: "OpenCode",
    skillsPath: ".agents/skills",
    workflowsPath: null,
  },
};

const args = process.argv.slice(2);
const flag = args[0] || "--antigravity";
const customPathIndex = args.indexOf("--path");
const customPath = customPathIndex !== -1 ? args[customPathIndex + 1] : null;

if (flag === "--help") {
  console.log(`
seo-aeo-engine — AI-powered SEO + AEO content skill installer

Usage:
  npx seo-aeo-engine [tool-flag]

Flags:
  --antigravity         Install to .agent/skills (workspace, default)
  --antigravity-global  Install to ~/.gemini/antigravity/skills (global)
  --claude              Install to .claude/skills (Claude Code)
  --gemini              Install to .gemini/skills (Gemini CLI)
  --codex               Install to .codex/skills (Codex CLI)
  --cursor              Install to .cursor/skills (Cursor)
  --opencode            Install to .agents/skills (OpenCode)
  --path <dir>          Install to a custom directory
  --help                Show this help message

Examples:
  npx seo-aeo-engine
  npx seo-aeo-engine --claude
  npx seo-aeo-engine --path ./my-skills

Docs: https://github.com/mrprewsh/seo-aeo-engine
  `);
  process.exit(0);
}

const target = TOOLS[flag];
const skillsDest = customPath || (target ? target.skillsPath : null);

if (!skillsDest) {
  console.error(`❌ Unknown flag: ${flag}`);
  console.error(`Run: npx seo-aeo-engine --help`);
  process.exit(1);
}

const workflowsDest = customPath ? null : (target ? target.workflowsPath : null);
const label = target ? target.label : "Custom path";

// Source paths — relative to this script's location
const root = path.join(__dirname, "..");
const sourceSkills = path.join(root, ".agent", "skills");
const sourceWorkflows = path.join(root, ".agent", "workflows");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️  Source not found, skipping: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log(`\n🚀 SEO-AEO Engine — installing skills for ${label}...\n`);

try {
  copyDir(sourceSkills, skillsDest);
  console.log(`✅ Skills installed → ${skillsDest}`);

  if (workflowsDest) {
    copyDir(sourceWorkflows, workflowsDest);
    console.log(`✅ Orchestrator workflow installed → ${workflowsDest}`);
  }

  console.log(`
════════════════════════════════════════
✅ SEO-AEO Engine installed successfully
════════════════════════════════════════

Skills installed (8):
  • keyword-research
  • landing-page-writer
  • meta-description-generator
  • content-cluster
  • blog-writer
  • content-quality-auditor
  • internal-linking
  • schema-generator
${workflowsDest ? "\\nWorkflow installed:\\n  • seo-aeo-orchestrator" : ""}

Quick start:
  antigravity skill run keyword-research --topic "your keyword"

Full orchestrator (Antigravity only):
  antigravity run seo-aeo-orchestrator \\
    --topic "your keyword" \\
    --business "what your business does" \\
    --audience "who your content is for" \\
    --goal "convert"

Docs: https://github.com/mrprewsh/seo-aeo-engine
════════════════════════════════════════
  `);
} catch (err) {
  console.error("❌ Installation failed:", err.message);
  process.exit(1);
}
