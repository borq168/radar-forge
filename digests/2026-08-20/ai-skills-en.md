# Skills Ecosystem Highlights 2026-08-20

> Generated: 2026-08-20 00:42 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report – 2026-08-20

## 1. Top Skills Ranking

The following eight Pull Requests represent the most actively discussed new or significantly improved skills in the repository. All remain open.

- **[document-typography (#514)](https://github.com/anthropics/skills/pull/514)** – Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The author notes these issues are pervasive in Claude output and rarely requested by users. Discussion highlights the pragmatism of targeting a common pain point. Status: Open.

- **[ODT skill (#486)](https://github.com/anthropics/skills/pull/486)** – Adds creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on any mention of ODF/LibreOffice/open-source document formats. The PR includes a detailed SKILL.md with examples. Status: Open.

- **[Improve frontend-design skill (#210)](https://github.com/anthropics/skills/pull/210)** – Revises the existing frontend-design skill to make every instruction actionable within a single conversation and to steer behavior without ambiguity. The author emphasizes internal coherence and specificity. Status: Open.

- **[skill-quality-analyzer and skill-security-analyzer (#83)](https://github.com/anthropics/skills/pull/83)** – Adds two meta-skills to the marketplace: one for evaluating skill quality across five dimensions (structure, documentation, etc.), another for security analysis. These are the first dedicated meta-skills proposed for the ecosystem. Status: Open.

- **[testing-patterns (#723)](https://github.com/anthropics/skills/pull/723)** – Covers the full testing stack: philosophy (Testing Trophy), unit testing (AAA pattern), React component testing, mocking, integration, E2E, visual regression, and performance testing. Status: Open.

- **[ServiceNow platform skill (#568)](https://github.com/anthropics/skills/pull/568)** – Broad ServiceNow assistant covering ITSM, ITOM, ITAM, FSM, HRSD, CSM, SPM, Vulnerability Response, and IntegrationHub. The most recent update was 2026-08-12, indicating ongoing discussion. Status: Open.

- **[pyxel skill (#525)](https://github.com/anthropics/skills/pull/525)** – Enables retro/pixel-art/8-bit game development using the Pyxel engine and its MCP server. Includes workflow: write → run_and_capture → inspect → iterate. Status: Open.

- **[self-audit skill (#1367)](https://github.com/anthropics/skills/pull/1367)** – A universal reasoning quality gate: mechanical file verification first, then a four-dimension audit in damage-severity priority order. Claims to work with any project, tech stack, or model. The PR was updated on 2026-07-02. Status: Open.

## 2. Community Demand Clusters

From Issues (50 total, top 15 shown), several directions for new skills are repeatedly proposed or requested:

- **Agent memory and state management** – Issue [#1329](https://github.com/anthropics/skills/issues/1329) proposes a `compact-memory` skill using symbolic notation to reduce context overhead. This follows a pattern of interest in long-running agent efficiency.

- **Agent governance and safety** – Issue [#412](https://github.com/anthropics/skills/issues/412) proposes an `agent-governance` skill for policy enforcement, threat detection, trust scoring, and audit trails. The request is for a skill that is absent from the current collection.

- **Quality assurance pipelines** – Issue [#1385](https://github.com/anthropics/skills/issues/1385) outlines a three-gate pipeline (pre-task calibration, adversarial review, delivery verification). Two of the three gates already have separate PRs (self-audit #1367, and another not yet filed), suggesting a modular approach to reasoning quality.

- **MCP exposure** – Issue [#16](https://github.com/anthropics/skills/issues/16) requests that skills be exposed as MCPs (Model Context Protocol), enabling a standardized API for skill functionality. This is a recurring request from the community.

These clusters represent independent proposals; no single direction dominates. The demand for meta-skills and platform-specific skills (ServiceNow, SAP) is also visible in PRs.

## 3. Active Pending Skills

Several PRs with ongoing discussion or multiple related issues remain unmerged:

- **[#1298 – fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** – This PR directly addresses the widely reported bug [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍). The bug makes the description-optimization loop useless on all platforms and especially broken on Windows. The PR attempts to install the eval artifact as a real skill, fix Windows stream reading, trigger detection, and parallel workers. Multiple other PRs ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) also target the same Windows compatibility issues, indicating a coordination gap. Status: Open.

- **[#568 – ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** – Last updated 2026-08-12, the most recent activity among the top skills. No issues are directly linked, but the breadth of the skill suggests ongoing refinement. Status: Open.

- **[#1367 – self-audit skill](https://github.com/anthropics/skills/pull/1367)** – The PR author also filed a related proposal issue [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments). The discussion connects the skill to a broader pipeline concept. Status: Open.

- **[#83 – skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** – A long-running PR (created 2025-11-06, last updated 2026-01-07). No recent comments, but it remains open and represents a foundational meta-skill direction. Status: Open.

## 4. Daily Notes

- The `run_eval.py` bug (Issue [#556](https://github.com/anthropics/skills/issues/556)) is the single most frequently reported blocker, with three independent PRs attempting fixes. No single fix has been merged, and the problem affects both Linux and Windows users.
- Community demand for meta-skills (quality analysis, self-audit) and platform-specific skills (ServiceNow, SAP, Pyxel) is visible in both PRs and Issues, but no single direction has reached critical mass.
- Security and trust concerns are emerging: Issue [#492](https://github.com/anthropics/skills/issues/492) highlights the risk of community skills distributed under the `anthropic/` namespace, and Issue [#1175](https://github.com/anthropics/skills/issues/1175) raises context window and access control concerns when using skills with SharePoint Online.