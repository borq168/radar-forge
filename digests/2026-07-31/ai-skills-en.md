# Skills Ecosystem Highlights 2026-07-31

> Generated: 2026-07-31 00:26 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights — 2026-07-31

## 1. Top Skills Ranking
*Ordered by most-discussed (PRs sorted by comment count; exact comment counts unavailable in dataset).*

1. **fix(skill-creator): run_eval.py always reports 0% recall (#1298)**
   - **Functionality:** Fixes the skill description evaluation tool (`run_eval.py`) that anchors the description-optimization loop. The tool consistently reports 0% recall, making the loop optimize against noise. Also fixes Windows stream reading, trigger detection, and parallel workers.
   - **Discussion:** Connected to multiple independent reproductions (issue #556). The PR touches core tooling that many contributors rely on to improve skill descriptions.
   - **Status:** Open, last updated 2026-06-23.

2. **Add document-typography skill (#514)**
   - **Functionality:** Prevents common typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment.
   - **Discussion:** The author argues these issues affect every document Claude generates, and users rarely ask for typography fixes explicitly.
   - **Status:** Open, last updated 2026-03-13.

3. **fix(pdf): correct case-sensitive file references in SKILL.md (#538)**
   - **Functionality:** Fixes 8 case-sensitivity mismatches in the PDF skill’s SKILL.md (e.g., `REFERENCE.md` → `reference.md`) that break on case-sensitive file systems.
   - **Discussion:** A straightforward robustness fix; the PR is linked to file-system compatibility concerns.
   - **Status:** Open, last updated 2026-04-29.

4. **Add ODT skill — OpenDocument text creation and template filling (#486)**
   - **Functionality:** Creates, fills, reads, or converts ODF files (.odt, .ods). Triggers on mentions of OpenDocument, LibreOffice, etc.
   - **Discussion:** Adds a new open-source document format capability to the document skills suite.
   - **Status:** Open, last updated 2026-04-14.

5. **Improve frontend-design skill clarity and actionability (#210)**
   - **Functionality:** Revises the frontend-design skill to ensure every instruction is something Claude can actually follow in a single conversation, with more specific guidance.
   - **Discussion:** Focuses on making the skill’s internal coherence and “steering” more effective.
   - **Status:** Open, last updated 2026-03-07.

6. **Add skill-quality-analyzer and skill-security-analyzer to marketplace (#83)**
   - **Functionality:** Two meta-skills: a quality analyzer (5-dimension evaluation) and a security analyzer (permission, injection, trust boundary checks) for Claude Skills.
   - **Discussion:** Provides automated assessment of skill quality and security, filling a gap in the ecosystem’s own tooling.
   - **Status:** Open, last updated 2026-01-07.

7. **fix(docx): prevent tracked change w:id collision with existing bookmarks (#541)**
   - **Functionality:** Fixes document corruption when the DOCX skill adds tracked changes to documents containing bookmarks, by avoiding hardcoded low IDs that collide with existing bookmark IDs.
   - **Discussion:** Solves a real-world corruption scenario; highlights the OOXML shared ID space complexity.
   - **Status:** Open, last updated 2026-04-16.

8. **feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (#1367)**
   - **Functionality:** A universal output audit skill: mechanical file verification followed by a reasoning audit across four dimensions (factual, logical, completeness, safety) in damage-severity priority order.
   - **Discussion:** Part of a broader “quality gate” conversation; proposed as a portable skill for any project.
   - **Status:** Open, last updated 2026-07-02.

## 2. Community Demand Clusters
*From open Issues, new skill directions that received multiple mentions or independent proposals.*

- **Compact memory / symbolic notation for agents**
  Issue #1329 proposes a `compact-memory` skill that uses symbolic notation to compress agent state and notes, addressing context window pressure in long-running agents. (9 comments)

- **Agent governance and safety patterns**
  Issue #412 (closed) proposed an `agent-governance` skill covering policy enforcement, threat detection, trust scoring, and audit trails. Despite closure, the topic surfaces in security discussions (#492) and quality-gate proposals (#1385).

- **Reasoning quality gates**
  Issue #1385 proposes a three-gate pipeline (pre-task calibration, adversarial review, delivery verification). The related self-audit skill (#1367) is already a PR. This indicates demand for built-in output verification.

- **Organization-level skill sharing**
  Issue #228 (16 comments) requests direct in-org sharing of skills, eliminating manual file transfer. Not a new skill per se, but a strong platform feature demand that would affect skill distribution.

- **Expose skills as MCPs**
  Issue #16 suggests that skills should be surfaced as MCP (Model Context Protocol) tools, enabling a standard API for skill functionality. This would transform how skills integrate with other systems.

*Note: The dataset does not show a single dominant trend, but several independent requests for quality, governance, and memory-related skills.*

## 3. Active Pending Skills
*Open PRs with recent activity, awaiting merge.*

- **#1298 — fix(skill-creator): run_eval recall fix**
  Core tooling fix that unblocks the description optimization loop. Multiple related issues and PRs (#1099, #1050, #1323) indicate the problem is widespread. Last updated 2026-06-23.

- **#514 — document-typography skill**
  New skill submission; no linked issues. Discussion appears to be around the scope of typographic fixes. Last updated 2026-03-13.

- **#1367 — self-audit skill**
  Introduces a universal quality gate. Connected to issue #1385. Last updated 2026-07-02.

- **#1479 — plan-file-hygiene skill**
  Addresses #1417 (planning artifacts accumulate). The PR explicitly builds on community framing of the problem. Last updated 2026-07-27.

- **#1302 — color-expert skill**
  Covers color naming systems, color spaces, and gradient generation. Last updated 2026-07-21.

*All are open; no merge timelines are implied.*

## 4. Daily Notes
- **Skill-creator evaluation tooling is a recurring pain point.** Multiple PRs (#1298, #1323, #1099, #1050, #1261) and issues (#556, #1169, #1061) converge on `run_eval.py` failures, particularly on Windows. This suggests the community is actively investing in making the skill development loop reliable.

- **Quality assurance and audit skills are gaining attention.** The self-audit PR (#1367) and the reasoning quality gate proposal (#1385) appeared within a week of each other, and a separate closed issue (#412) also touched on governance. While not yet a broad movement, the topic is emergent.

- **No signal of a dominant new skill category today.** The data shows a mix of fixes, new format skills, and quality-of-life improvements. Demand is spread across document formats, developer tooling, and agent governance.