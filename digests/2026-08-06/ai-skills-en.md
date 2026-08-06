# Skills Ecosystem Highlights 2026-08-06

> Generated: 2026-08-06 01:45 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-06

## 1. Top Skills Ranking

The most-discussed Pull Requests (sorted by comment count, top 8) cover a mix of infrastructure fixes, new document-format skills, and meta-skills for quality assurance.

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
*Author: @MartinCajiao | Updated: 2026-06-23 | [Link](https://github.com/anthropics/skills/pull/1298)*
- **Functionality:** Fixes the core evaluation script (`run_eval.py`) that every description-optimization loop depends on. The bug causes `recall=0%` regardless of content, rendering the entire evaluation pipeline useless. The fix installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel worker behavior.
- **Discussion highlights:** This is the most-commented PR in the dataset. It directly addresses two well-attested Issues (#556, #1169) with 10+ independent reproductions. The description-optimization loop has been "optimizing against noise."
- **Status:** Open, actively maintained.

**#514 — Add document-typography skill**
*Author: @PGTBoos | Updated: 2026-03-13 | [Link](https://github.com/anthropics/skills/pull/514)*
- **Functionality:** A skill for typographic quality control in AI-generated documents. Fixes orphan word wrap, widow paragraphs, and numbering misalignment — issues that "affect every document Claude generates."
- **Discussion highlights:** Addresses a gap in output quality that users rarely request but consistently encounter.
- **Status:** Open.

**#486 — Add ODT skill**
*Author: @GitHubNewbie0 | Updated: 2026-04-14 | [Link](https://github.com/anthropics/skills/pull/486)*
- **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document".
- **Discussion highlights:** Expands document format coverage beyond DOCX and PDF.
- **Status:** Open.

**#1367 — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate**
*Author: @YuhaoLin2005 | Updated: 2026-07-02 | [Link](https://github.com/anthropics/skills/pull/1367)*
- **Functionality:** A skill that audits AI output before delivery: mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Designed to be universal across any project, tech stack, or model.
- **Discussion highlights:** Represents a growing interest in output quality assurance as a first-class skill category.
- **Status:** Open.

**#1302 — Add color-expert skill**
*Author: @meodai | Updated: 2026-07-21 | [Link](https://github.com/anthropics/skills/pull/1302)*
- **Functionality:** A self-contained color-expertise skill covering color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color spaces with a "what to use when" table, and practical color selection guidance.
- **Discussion highlights:** Domain-specific skill for design and visualization tasks.
- **Status:** Open.

**#723 — feat: add testing-patterns skill**
*Author: @4444J99 | Updated: 2026-04-21 | [Link](https://github.com/anthropics/skills/pull/723)*
- **Functionality:** Comprehensive testing skill covering the Testing Trophy model, AAA pattern, unit testing, React component testing with Testing Library, and what NOT to test.
- **Discussion highlights:** Addresses a clear gap in coding workflow guidance.
- **Status:** Open.

**#525 — Add pyxel skill for retro game development**
*Author: @kitao | Updated: 2026-07-15 | [Link](https://github.com/anthropics/skills/pull/525)*
- **Functionality:** A skill for the Pyxel retro game engine, covering the iterative workflow (write → run_and_capture → inspect → iterate).
- **Discussion highlights:** Unusual in being tied to a specific MCP server (pyxel-mcp).
- **Status:** Open.

**#1479 — Add plan-file-hygiene skill**
*Author: @Palo-Alto-AI-Research-Lab | Updated: 2026-07-27 | [Link](https://github.com/anthropics/skills/pull/1479)*
- **Functionality:** Addresses the problem of planning artifacts accumulating with no lifecycle management. The skill provides a lifecycle for planning files.
- **Discussion highlights:** Credits community members @halilxibrahim and @xg-gh-25 for naming and framing the problem.
- **Status:** Open.

---

## 2. Community Demand Clusters

From Issues, the most-referenced new Skill directions fall into several groups:

**Infrastructure and Reliability (4 Issues)**
- **#556** (`run_eval.py` 0% trigger rate) and **#1169** (recall=0% on every iteration) — both describe the same pipeline-breaking bug. Multiple PRs (#1298, #1099, #1050, #1323) attempt fixes.
- **#189** — duplicate skills when installing both `document-skills` and `example-skills` plugins.
- **#1487** — `claude-api` skill eagerly injects ~156k tokens, exhausting the context window.

**Governance and Security (3 Issues)**
- **#492** — Community skills distributed under the `anthropic/` namespace, creating trust boundary abuse. 43 comments, the most-discussed Issue.
- **#412** — Proposal for an `agent-governance` skill covering policy enforcement, threat detection, trust scoring, and audit trails.
- **#1175** — Concerns about security and context window when handling SharePoint Online documents via Agent Skills.

**Workflow Integration (3 Issues)**
- **#228** — Requests org-wide skill sharing in Claude.ai (16 comments, 8 👍).
- **#16** — "Expose Skills as MCPs" — using MCP protocol to signal skill APIs.
- **#29** — Usage with AWS Bedrock.

**New Skill Proposals (2 Issues)**
- **#1329** — Proposing `compact-memory`: symbolic notation for compact agent state, reducing context consumed by long-running agents' prose notes.
- **#1385** — Proposal for a "Reasoning Quality Gate Pipeline" with three stages: Pre-task Calibration → Adversarial Review → Delivery Verification.

---

## 3. Active Pending Skills

Several open PRs have recent discussion activity and remain unmerged:

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
*Updated: 2026-06-23 | [Link](https://github.com/anthropics/skills/pull/1298)*
The most-active fix PR. Multiple independent contributors have submitted overlapping fixes for the same `run_eval.py` bug (PRs #1099, #1050, #1323). This PR is the most comprehensive, addressing Windows stream reading, trigger detection, and parallel workers.

**#1367 — feat(skills): add self-audit**
*Updated: 2026-07-02 | [Link](https://github.com/anthropics/skills/pull/1367)*
Active discussion around mechanical verification followed by reasoning quality gate. The author has also filed a related proposal Issue (#1385) for a three-gate pipeline.

**#1302 — Add color-expert skill**
*Updated: 2026-07-21 | [Link](https://github.com/anthropics/skills/pull/1302)*
Recently updated with color naming system tables. No merge conflicts reported.

**#1261 — fix(skill-creator): isolate trigger-eval command files**
*Updated: 2026-07-08 | [Link](https://github.com/anthropics/skills/pull/1261)*
Fixes #1260 — the eval writes synthetic command files into the user's live project `.claude/commands/`, causing concurrent Claude Code sessions to see placeholder command files. This is a separate bug from the recall=0% issue.

**#1479 — Add plan-file-hygiene skill**
*Updated: 2026-07-27 | [Link](https://github.com/anthropics/skills/pull/1479)*
Very recent. The author explicitly offers to hand off to the original problem-namer.

**#723 — feat: add testing-patterns skill**
*Updated: 2026-04-21 | [Link](https://github.com/anthropics/skills/pull/723)*
Last updated in April. No recent maintainer activity visible in the data.

**#525 — Add pyxel skill**
*Updated: 2026-07-15 | [Link](https://github.com/anthropics/skills/pull/525)*
Recently updated by the original author. Tied to the author's own MCP server.

---

## 4. Daily Notes

- **The `run_eval.py` recall=0% bug is the single most-visible issue in the repository today.** Four separate PRs (#1298, #1099, #1050, #1323) and two Issues (#556, #1169) address it. The bug renders the entire description-optimization loop non-functional, and no fix has been merged yet. This is the clearest infrastructure bottleneck in the current data.

- **Community interest in quality/safety meta-skills is growing.** Three PRs (#1367 self-audit, #1479 plan-file-hygiene) and two Issues (#412 agent-governance, #1385 reasoning quality gate) target output quality verification, lifecycle management, or governance. This is a distinct cluster from domain-specific skills (typography, color, game dev).

- **The namespace trust issue (#492) has the most comments (43) of any Issue but no PR yet.** The discussion centers on the security gap of community skills distributed under the `anthropic/` namespace. No maintainer response is visible in the provided data.