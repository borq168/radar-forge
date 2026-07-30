# Skills Ecosystem Highlights 2026-07-30

> Generated: 2026-07-30 00:46 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights — 2026-07-30

Data covers the `anthropics/skills` repository. Comment counts were not available in the dataset, so the ranking below is based on the nature of the changes, linked issues, and activity timestamps.

---

## 1. Top Skills Ranking

**1. [Self-Audit Skill (PR #1367)](https://github.com/anthropics/skills/pull/1367)**
A comprehensive auditing skill that performs mechanical file verification followed by a four-dimension reasoning quality gate. Designed to be universal across projects and stacks. The proposal is recent (late June 2026) and explicitly addresses delivery quality, a theme that also appears in Issues. Status: open.

**2. [Document Typography Skill (PR #514)](https://github.com/anthropics/skills/pull/514)**
Aims to prevent common typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. The author argues these issues affect every generated document, and users rarely request typographic quality. Status: open since early March 2026, no recent updates.

**3. [Color Expert Skill (PR #1302)](https://github.com/anthropics/skills/pull/1302)**
Provides a self-contained skill covering color naming systems, color space selection guidance, palette generation, and accessibility contrast checking. Updated as recently as July 21, 2026. The PR is open and likely under review.

**4. [Pyxel Retro Game Development Skill (PR #525)](https://github.com/anthropics/skills/pull/525)**
Adds a skill for the Pyxel retro game engine (Python) via its MCP server. Covers the full iterative loop: write → run and capture → inspect → iterate. The author is the Pyxel maintainer. Updated July 15, 2026, indicating ongoing interest. Status: open.

**5. [SAP-RPT-1-OSS Predictor Skill (PR #181)](https://github.com/anthropics/skills/pull/181)**
Introduces a skill for using SAP’s open-source tabular foundation model for predictive analytics on SAP business data. The PR is from December 2025 and was last updated March 2026. It represents enterprise workflow demand. Status: open.

**6. [Skill-Quality & Security Analyzers (PR #83)](https://github.com/anthropics/skills/pull/83)**
Two meta-skills: a quality analyzer (evaluates structure, documentation, examples, resources) and a security analyzer for skills. Adds to the “example-skills” marketplace collection. The PR is from November 2025, last updated January 2026. Status: open.

**7. [Testing Patterns Skill (PR #723)](https://github.com/anthropics/skills/pull/723)**
A comprehensive testing skill covering unit testing, React component testing, and the Testing Trophy model. The PR (March 2026) had no recent updates. Status: open.

**8. [Plan File Hygiene Skill (PR #1479)](https://github.com/anthropics/skills/pull/1479)**
Addresses issue #1417 by providing lifecycle management for planning artifacts that accumulate. The skill is built on community framing of the problem. Updated July 27, 2026. Status: open.

---

## 2. Community Demand Clusters

From the Issues, several recurring demand clusters emerge:

- **Skill evaluation and description optimization fixes**
  Multiple issues (#556, #1169, #1061) and related PRs (#1298, #1099, #1050, #1323, #1261) report that `run_eval.py` always yields 0% recall, breaking the skill-creator feedback loop. Windows-specific subprocess, encoding, and path issues are also heavily reported.

- **Trust and security boundaries**
  Issue #492 warns that community skills distributed under the `anthropic/` namespace can impersonate official skills, enabling trust boundary abuse. A companion PR (#83) proposes a security analyzer.

- **Organizational sharing and lifecycle management**
  Issue #228 requests org-wide skill sharing in Claude.ai, avoiding manual .skill file transfers. Issue #202 (closed) demanded the skill-creator itself be updated to operational best practices. Issue #1329 proposes a compact-memory skill for agent state, and #1385 a reasoning quality gate pipeline.

- **Skill format and duplication problems**
  Issue #189 reports that `document-skills` and `example-skills` plugins install identical skills, causing duplicates. Issue #1487 reports that the `claude-api` skill injects ~156k tokens eagerly, exhausting context.

- **Platform and integration requests**
  Issues ask for Bedrock support (#29) and exposing skills as MCPs (#16). These indicate a desire for skills to be more portable and programmatically callable.

---

## 3. Active Pending Skills

The following open PRs have seen recent activity (updates in July 2026) and remain under discussion:

- **[#1479 Plan File Hygiene](https://github.com/anthropics/skills/pull/1479)** — Updated July 27; addresses planning artifact lifecycle. Credit given to community members who framed the issue.
- **[#1302 Color Expert](https://github.com/anthropics/skills/pull/1302)** — Updated July 21; likely iterating on scope and naming.
- **[#525 Pyxel Skill](https://github.com/anthropics/skills/pull/525)** — Updated July 15; maintained by the Pyxel author, indicating integration with the Pyxel MCP server.
- **[#1261 Isolate Trigger-Eval Commands](https://github.com/anthropics/skills/pull/1261)** — Updated July 8; fixes a bug where eval command files leak into the user’s live project, conflating parallel sessions.
- **[#1367 Self-Audit Skill](https://github.com/anthropics/skills/pull/1367)** — Updated July 2; a large proposal with mechanical and reasoning audits.

Discussion in these PRs is inferred from the updated timestamps and cross-references to issues; actual comment threads are not available in the dataset.

---

## 4. Daily Notes

- **The skill-creator evaluation pipeline is under active repair.** Multiple Windows compatibility fixes and trigger-detection corrections are in flight (PRs #1298, #1099, #1050, #1323, #1261). The underlying issue (#556) has 12 community comments, indicating the evaluation tool is a critical dependency for skill authors.
- **New skill proposals are shifting toward quality assurance and meta-cognition.** The self-audit skill (#1367), reasoning quality gate pipeline issue (#1385), and plan-file hygiene (#1479) all focus on verifying AI-delivered output, not just generating it. This is a noticeable pattern alongside traditional domain-specific skills (color, typography, games).
- **No clear signal on skill packaging or distribution changes.** The duplicate skills issue (#189) and trust-boundary concern (#492) remain open but have not yet triggered a visible response in the PR list beyond the security analyzer proposal.