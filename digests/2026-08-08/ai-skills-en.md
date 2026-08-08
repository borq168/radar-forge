# Skills Ecosystem Highlights 2026-08-08

> Generated: 2026-08-08 00:58 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-08

## 1. Top Skills Ranking

**#1 — `skill-creator` fixes (PRs #1298, #1099, #1050, #1323, #1261)**
Multiple independent PRs address the same root failure: `run_eval.py` reports 0% recall on every query, rendering the description-optimization loop (`run_loop.py`, `improve_description.py`) effectively useless. Issues #556 and #1169 independently confirm the bug. PR #1298 provides the most comprehensive fix (eval artifact installation, Windows stream handling, parallel worker isolation). PR #1261 fixes a separate but related problem where eval command files pollute the user's live project registry. **Status: Open, active review.** https://github.com/anthropics/skills/pull/1298

**#2 — document-typography (PR #514)**
Quality-control skill for AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Author notes these issues affect every document Claude generates. **Status: Open since March 2026.** https://github.com/anthropics/skills/pull/514

**#3 — self-audit (PR #1367)**
A universal skill performing mechanical file verification followed by a four-dimension reasoning audit, ordered by damage severity. Claims to work with any project, tech stack, or model. **Status: Open, recent update July 2.** https://github.com/anthropics/skills/pull/1367

**#4 — testing-patterns (PR #723)**
Comprehensive testing skill covering the Trophy model, unit testing (AAA pattern, naming), React components (Testing Library), and integration/end-to-end patterns. **Status: Open since March 2026.** https://github.com/anthropics/skills/pull/723

**#5 — color-expert (PR #1302)**
Self-contained color expertise skill: naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color spaces with usage tables (OKLCH for scales, OKLAB for gradients, CAM16 for perception). **Status: Open, recent update July 21.** https://github.com/anthropics/skills/pull/1302

**#6 — plan-file-hygiene (PR #1479)**
Addresses the problem of planning artifacts accumulating with no lifecycle. Framed as a lifecycle gap by community contributors. **Status: Open, newest among top PRs (July 25).** https://github.com/anthropics/skills/pull/1479

**#7 — ODT skill (PR #486)**
OpenDocument text creation, template filling, and ODT-to-HTML conversion. Triggers on ODT, ODS, ODF, OpenDocument, LibreOffice mentions. **Status: Open since March 2026.** https://github.com/anthropics/skills/pull/486

---

## 2. Community Demand Clusters

**Cluster A: Skill reliability and tooling bugs**
Three issues (#556, #1169, #62) describe the same failure mode: the skill-creator evaluation loop cannot detect skill triggers, producing 0% recall. Users report being unable to optimise descriptions. Issue #62 reports all skills disappearing with no recovery path. These represent the most frequently reproduced workflow blockers in the repository.

**Cluster B: Security and trust boundaries**
Issue #492 (43 comments, 2 👍) reports that community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability. Issue #1175 raises concerns about embedding access control logic directly in SKILL.md for SharePoint workflows. No maintainer response visible in the data.

**Cluster C: Skill sharing and distribution**
Issue #228 (16 comments, 8 👍) requests org-wide skill sharing — currently users must manually transfer .skill files via Slack/Teams. Issue #189 reports that `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in the context window. No maintainer response visible in the data.

**Cluster D: Context window exhaustion**
Issue #1487 reports that the `claude-api` skill injects ~156k tokens in a single tool call, exhausting the context window. This is a new issue (July 27) with 4 comments. No maintainer response visible in the data.

**Cluster E: New skill proposals**
Issues #412 (agent-governance — safety patterns for AI agents), #1329 (compact-memory — symbolic notation for compact agent state), and #1385 (reasoning quality gate pipeline — pre-task calibration, adversarial review, delivery verification) represent community proposals for governance, memory management, and quality assurance skills. All have 4-9 comments, none closed.

---

## 3. Active Pending Skills

| Skill | PR | Author | Status | Key Discussion |
|-------|-----|--------|--------|----------------|
| skill-creator fixes | #1298 | @MartinCajiao | Open, June 23 update | Fixes 0% recall bug, Windows support, parallel workers. Community has 10+ independent reproductions. |
| self-audit | #1367 | @YuhaoLin2005 | Open, July 2 update | Mechanical verification + 4-dimension reasoning audit. Universal claim. |
| color-expert | #1302 | @meodai | Open, July 21 update | Broad color expertise including naming systems, spaces, and contrast math. |
| plan-file-hygiene | #1479 | @tonydzi | Open, July 27 update | Lifecycle management for planning artifacts. Community credit to @halilxibrahim. |
| fix: trigger eval isolation | #1261 | @alvingarcia | Open, July 8 update | Prevents eval command files from polluting user's live project. |
| pyxel retro game dev | #525 | @kitao | Open, July 15 update | MCP server integration for Pyxel retro game engine. |

---

## 4. Daily Notes

1. **The skill-creator evaluation pipeline is effectively broken for all users.** Five independent PRs (#1298, #1099, #1050, #1323, #1261) and two issues (#556, #1169) all describe the same failure: `run_eval.py` reports 0% recall. This means the description-optimization loop (`run_loop.py`, `improve_description.py`) cannot distinguish between good and bad descriptions. The fix is non-trivial — it involves Windows subprocess handling, YAML frontmatter parsing, tool invocation detection, and command file isolation.

2. **Community skill proposals are shifting toward governance and quality assurance.** Three issues (#412, #1329, #1385) propose skills for agent safety, memory management, and reasoning verification. The self-audit PR (#1367) is the most mature implementation of this direction. The data does not show whether maintainers are actively reviewing these proposals.

3. **Security and namespace issues remain unaddressed.** Issue #492 (43 comments, highest in the repository) raises a trust boundary vulnerability with no visible maintainer response. Issue #228 (org-wide sharing) and #189 (duplicate content) also lack responses. This suggests either low maintainer bandwidth or that these concerns are being addressed outside the public repository.