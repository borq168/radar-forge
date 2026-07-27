# Skills Ecosystem Highlights 2026-07-27

> Generated: 2026-07-27 00:26 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights — 2026-07-27

## 1. Top Skills Ranking
The most-discussed pull requests touching new or significantly improved skills (all open):

1. **Document Typography Skill** ([#514](https://github.com/anthropics/skills/pull/514))
   *Functionality:* Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI‑generated documents.
   *Discussion:* Author argues these issues affect every document Claude produces; users rarely request typographic fixes, so the skill steps in automatically.
   *Status:* Open, no resolution yet.

2. **ODT Skill** ([#486](https://github.com/anthropics/skills/pull/486))
   *Functionality:* Create, fill, read, or convert OpenDocument Format files (.odt, .ods) — targeting LibreOffice users and ISO‑standard document workflows.
   *Discussion:* Broadens the document‑skill ecosystem beyond DOCX/PDF; triggers on any mention of ODF/LibreOffice.
   *Status:* Open.

3. **Skill‑Quality‑Analyzer & Skill‑Security‑Analyzer** ([#83](https://github.com/anthropics/skills/pull/83))
   *Functionality:* Two meta‑skills that evaluate Claude Skills across five quality dimensions (structure, examples, resources, etc.) and perform security reviews.
   *Discussion:* Positions them as marketplace contributions; raises the bar for skill publishing.
   *Status:* Open.

4. **Self‑Audit Skill** ([#1367](https://github.com/anthropics/skills/pull/1367))
   *Functionality:* Audits AI output before delivery — mechanical file verification plus a four‑dimension reasoning audit ordered by damage severity.
   *Discussion:* Universal, model‑agnostic approach; recent activity suggests ongoing refinement of the audit dimensions.
   *Status:* Open (updated 2026‑07‑02).

5. **Color‑Expert Skill** ([#1302](https://github.com/anthropics/skills/pull/1302))
   *Functionality:* Covers naming systems (ISCC‑NBS, Munsell, XKCD, RAL, etc.), color spaces with a “what to use when” table, and accessibility guidance.
   *Discussion:* Self‑contained; targets any task involving color knowledge.
   *Status:* Open (updated 2026‑07‑21).

6. **Testing‑Patterns Skill** ([#723](https://github.com/anthropics/skills/pull/723))
   *Functionality:* Full‑stack testing guidance — Testing Trophy model, unit/React/E2E/API testing, CI integration, TDD, snapshot testing, and more.
   *Discussion:* Extensive coverage; aims to be the go‑to testing reference for generated code.
   *Status:* Open.

7. **Pyxel Retro Game Development Skill** ([#525](https://github.com/anthropics/skills/pull/525))
   *Functionality:* Skill for the Pyxel retro game engine, triggered when users want to create pixel‑art/8‑bit games with Python, integrated with `pyxel-mcp`.
   *Discussion:* Active updates (last 2026‑07‑15); covers write → run_and_capture → inspect → iterate cycle.
   *Status:* Open.

8. **SAP‑RPT‑1‑OSS Predictor Skill** ([#181](https://github.com/anthropics/skills/pull/181))
   *Functionality:* Uses SAP’s open‑source tabular foundation model for predictive analytics on SAP business data.
   *Discussion:* Enterprise‑focused; demonstrates skills extending into specialised business analytics.
   *Status:* Open.

## 2. Community Demand Clusters
Top issues reveal demand for new skill directions (without overclaiming trend strength):

- **Compact‑Memory / Symbolic Notation** ([#1329](https://github.com/anthropics/skills/issues/1329)): A skill for compressing agent notes and memory into a symbolic notation to save context length.
- **Agent‑Governance** ([#412](https://github.com/anthropics/skills/issues/412), closed): Proposed safety patterns for AI agents — policy enforcement, threat detection, trust scoring, audit trails.
- **Reasoning Quality Gate Pipeline** ([#1385](https://github.com/anthropics/skills/issues/1385)): A three‑gate pipeline covering pre‑task calibration, adversarial review, and delivery verification.
- **Skills as MCPs** ([#16](https://github.com/anthropics/skills/issues/16)): Request to expose Skill APIs as MCP tools for programmatic consumption.
- **Org‑wide Skill Sharing** ([#228](https://github.com/anthropics/skills/issues/228)): Demand for a shared library or direct sharing link instead of manual file transfer.

These items represent a mix of operational (compression, governance) and integration (MCP, sharing) demands, not yet a dominant trend.

## 3. Active Pending Skills
Open PRs with recent activity and ongoing discussion (no merge prediction):

- **Self‑Audit** ([#1367](https://github.com/anthropics/skills/pull/1367)): Updated 2026‑07‑02; discussion likely centred on audit dimension completeness and the mechanical‑verification step.
- **Color‑Expert** ([#1302](https://github.com/anthropics/skills/pull/1302)): Updated 2026‑07‑21; self‑contained colour reference, likely tuning the trigger description and examples.
- **Pyxel** ([#525](https://github.com/anthropics/skills/pull/525)): Updated 2026‑07‑15; may be integrating feedback from game‑development users.
- **Fix: run\_eval.py recall** ([#1298](https://github.com/anthropics/skills/pull/1298)): Updated 2026‑06‑23; addresses the 0% recall bug that blocks the skill‑description optimizer; discussion includes Windows stream reading and parallel worker fixes.
- **Fix: trigger detection** ([#1323](https://github.com/anthropics/skills/pull/1323)): Updated 2026‑06‑25; also targets the recall=0% problem, focusing on skill name detection and tool‑call filtering.

## 4. Daily Notes
- **Multiple PRs target the skill‑creator evaluation tool reliability**, especially on Windows. PRs #1298, #1099, #1050, #1323 and issues #556, #1061, #1169 all describe the same core symptom: `run_eval.py` reports 0% recall, making the description‑optimization loop unusable. This is a recurring operational pain point today.
- **Document‑format skills are a growing area of contribution.** Today’s list includes typography (#514), ODT (#486), and earlier fixes for PDF (#538) and DOCX (#541), indicating steady interest in improving document generation quality.
- **Meta‑skills for quality and security are emerging from the community** (PR #83, #1367, issue #1385). While not yet merged, they signal a desire to build tooling that validates skills themselves, extending beyond single‑domain workflows.