# Skills Ecosystem Highlights 2026-06-21

> Generated: 2026-06-21 00:36 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-21

**Repository:** github.com/anthropics/skills (Claude Code Skills)
**Data Snapshot:** 50 PRs, 50 Issues considered

---

## 1. Top Skills Ranking

Most-discussed Skill PRs (sorted by comment activity):

### #514 — document-typography: Typographic Quality Control
**What it does:** Prevents orphan word wrap, widow paragraphs (section headers stranded at page bottom), and numbering misalignment in AI-generated documents. Claims these issues affect every document Claude generates.
**Discussion:** Undefined comment count but ranked #1 by comments. Author notes these are pervasive but rarely requested by users.
**Status:** Open since 2026-03-04, last updated 2026-03-13.
**URL:** https://github.com/anthropics/skills/pull/514

### #486 — ODT / OpenDocument Text Creation and Template Filling
**What it does:** Provides skills for creating, filling, reading, and converting .odt and .ods files. Triggers on mentions of ODT, ODS, ODF, LibreOffice, or open-source document requests.
**Discussion:** Long-running PR (March–April 2026) with sustained updates.
**Status:** Open, last updated 2026-04-14.
**URL:** https://github.com/anthropics/skills/pull/486

### #210 — Improve frontend-design Skill Clarity and Actionability
**What it does:** Rewrites the frontend-design skill so every instruction is actionable within a single conversation, with specific guidance to steer Claude behavior without ambiguity.
**Discussion:** Revision-focused PR (January–March 2026), primarily about instruction quality rather than new functionality.
**Status:** Open since 2026-01-05.
**URL:** https://github.com/anthropics/skills/pull/210

### #83 — skill-quality-analyzer and skill-security-analyzer (Meta Skills)
**What it does:** Two meta skills for the marketplace. `skill-quality-analyzer` evaluates skills across five dimensions (Structure & Documentation at 20%, etc.). `skill-security-analyzer` provides security analysis for community skills.
**Discussion:** These are meta skills (skills about skills), suggesting maturing interest in quality assurance tooling within the ecosystem.
**Status:** Open since 2025-11-06, updated 2026-01-07.
**URL:** https://github.com/anthropics/skills/pull/83

### #181 — SAP-RPT-1-OSS Predictor Skill
**What it does:** Integrates SAP's open source tabular foundation model (released at TechEd 2025) for predictive analytics on SAP business data.
**Discussion:** Enterprise-oriented PR tapping SAP's new open source model release.
**Status:** Open since 2025-12-28.
**URL:** https://github.com/anthropics/skills/pull/181

### #335 — Masonry AI Image & Video Generation
**What it does:** Adds Masonry CLI skill for generating images (Imagen 3.0) and videos (Veo 3.1) from text prompts, with job management (status, download, history).
**Discussion:** Multi-model generative media skill, notable for bundling both image and video generation.
**Status:** Open since 2026-02-04.
**URL:** https://github.com/anthropics/skills/pull/335

### #568 — ServiceNow Platform Skill
**What it does:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.
**Discussion:** Very wide scope, covering an entire enterprise platform rather than a narrow scripting helper.
**Status:** Open since 2026-03-08.
**URL:** https://github.com/anthropics/skills/pull/568

### #444 — AURELION Skill Suite (Kernel, Advisor, Agent, Memory)
**What it does:** Four skills from the AURELION ecosystem: a 5-floor cognitive framework for structured thinking (kernel), plus advisor, agent, and memory components for professional knowledge management.
**Discussion:** Multi-skill ecosystem PR from a single contributor, suggesting modular framework approach.
**Status:** Open since 2026-02-21.
**URL:** https://github.com/anthropics/skills/pull/444

---

## 2. Community Demand Clusters

Grouped from Issues (50 total, top 15 shown):

### Tooling & Infrastructure Stability
Multiple reports of skill-creator tooling failures, particularly around evaluation and Windows compatibility. This is the most-mentioned pain point.
- **Issue #556** (14 comments): `run_eval.py` reports 0% trigger rate on all queries — "no query ever triggers the skill."
- **Issue #1169** (3 comments): Description optimization loop reports `recall=0%` on every iteration, including literal slash-command queries.
- **Issue #1061** (3 comments): Three distinct Windows compatibility failures in skill-creator scripts (subprocess PATHEXT, cp1252 encoding, select on pipes).
- **Issue #62** (10 comments): Skills disappeared from Claude after file renames in Downloads folder.
- **Issue #61** (3 comments): 404 "Not found" error loading skills on team plans.
- **Issue #189** (6 comments): Duplicate skills when installing both `document-skills` and `example-skills` plugins.
**URLs:** https://github.com/anthropics/skills/issues/556 ; https://github.com/anthropics/skills/issues/1169 ; https://github.com/anthropics/skills/issues/1061 ; https://github.com/anthropics/skills/issues/62 ; https://github.com/anthropics/skills/issues/61 ; https://github.com/anthropics/skills/issues/189

### Security & Trust Boundaries
Community-distributed skills under the anthropic namespace raise trust concerns; governance patterns requested.
- **Issue #492** (7 comments): "Community skills distributed under anthropic/ namespace enable trust boundary abuse" — impersonation risk.
- **Issue #1175** (4 comments): Security and context window concerns when embedding access control logic in SKILL.md for SharePoint Online document handling.
- **Issue #412** (6 comments): Proposal for `agent-governance` skill covering safety patterns (policy enforcement, threat detection, trust scoring, audit trails).
**URLs:** https://github.com/anthropics/skills/issues/492 ; https://github.com/anthropics/skills/issues/1175 ; https://github.com/anthropics/skills/issues/412

### Enterprise & Platform Integration
Demand for skills connecting to enterprise platforms and exposing skills through standard protocols.
- **Issue #29** (4 comments): "Usage with Bedrock" — unclear how skills work with AWS Bedrock.
- **Issue #16** (4 comments): "Expose Skills as MCPs" — request to use Model Context Protocol for skill packaging and API signaling.
- **Issue #228** (14 comments): "Enable org-wide skill sharing in Claude.ai" — enterprise sharing workflow via Slack/Teams vs. shared library.
**URLs:** https://github.com/anthropics/skills/issues/29 ; https://github.com/anthropics/skills/issues/16 ; https://github.com/anthropics/skills/issues/228

### New Skill Directions (single Issue proposals)
- **Issue #1329** (3 comments): `compact-memory` — symbolic notation for compact agent state, reducing context consumed by persistent memory.
- **Issue #202** (8 comments, closed): skill-creator should be updated to best practice (more instructional, less educational tone).
**URLs:** https://github.com/anthropics/skills/issues/1329 ; https://github.com/anthropics/skills/issues/202

---

## 3. Active Pending Skills

PRs with active discussion and unresolved work (not yet merged):

### #1298 — fix(skill-creator): run_eval.py 0% recall bug (10+ reproductions)
**Current discussion:** Addresses the systemic `recall=0%` bug in run_eval.py that makes description optimization loops optimize against noise. Root cause involves eval artifacts not installed as real skills. Fixes also target Windows stream reading, trigger detection, and parallel workers. Issue #556 (12 comments) tracks the same bug.
**Status:** Open since 2026-06-10, last updated 2026-06-20 (most recently active PR).
**URL:** https://github.com/anthropics/skills/pull/1298

### #538 — fix(pdf): case-sensitive file references in SKILL.md
**Current discussion:** Fixes 8 case-sensitivity mismatches where SKILL.md references `REFERENCE.md` and `FORMS.md` but actual files are lowercase. Breaks on case-sensitive filesystems.
**Status:** Open since 2026-03-06, last updated 2026-04-29.
**URL:** https://github.com/anthropics/skills/pull/538

### #539 — fix(skill-creator): warn on unquoted YAML description fields
**Current discussion:** Adds pre-parse validation for unquoted `description` fields containing `:`, which cause silent YAML parsing failures. Related PR #361 (by different author) adds similar detection for additional characters.
**Status:** Open since 2026-03-06, last updated 2026-04-16.
**URL:** https://github.com/anthropics/skills/pull/539

### #541 — fix(docx): prevent tracked change w:id collision with existing bookmarks
**Current discussion:** Fixes document corruption when DOCX skill uses hardcoded low IDs (1,2,3) that collide with existing bookmark IDs in the shared `w:id` namespace.
**Status:** Open since 2026-03-06, last updated 2026-04-16.
**URL:** https://github.com/anthropics/skills/pull/541

### #509 — docs: add CONTRIBUTING.md
**Current discussion:** Adds CONTRIBUTING.md to address community health metrics gap (repo scores 25% on GitHub community health). Closes issue #452. Five-section guide.
**Status:** Open since 2026-03-03, last updated 2026-03-19.
**URL:** https://github.com/anthropics/skills/pull/509

### #361 — Detect unquoted YAML special characters in description fields
**Current discussion:** Broader detection than #539 — catches `: # { } [ ]` unquoted in description and compatibility fields. Overlaps with #539.
**Status:** Open since 2026-02-09, last updated 2026-06-10.
**URL:** https://github.com/anthropics/skills/pull/361

### #362 — Fix skill-creator UTF-8 panic on multi-byte characters
**Current discussion:** Replaces character-based length checks with UTF-8 byte-length validation to prevent Rust panics in the CLI when processing multi-byte characters.
**Status:** Open since 2026-02-09, last updated 2026-06-10.
**URL:** https://github.com/anthropics/skills/pull/362

---

## 4. Daily Notes

1. **Eval tooling is the blocking issue for skill development.** Three independent PRs (#1298, #1099, #1050) and two Issues (#556, #1169) describe the same fundamental failure: `run_eval.py` reports 0% recall on every query, making the description-optimization loop optimize against noise. Multiple contributors have reproduced this independently. The most recent PR (#1298, dated 2026-06-10) directly fixes this by installing the eval artifact as a real skill.

2. **Windows compatibility is a recurring but fragmented concern.** Issues #1061 and PRs #1298, #1099, #1050 each address separate Windows failures (subprocess PATHEXT, cp1252 encoding, select on pipes, `claude.cmd` not found). Each fix is a 1-2 line change, but the fixes are scattered across separate PRs, suggesting no single maintainer has done a comprehensive Windows audit.

3. **No clear demand signal for any specific new skill direction.** Of 15 top Issues, only six propose new skills or features (agent-governance, compact-memory, Bedrock integration, MCP exposure, org-wide sharing). The remaining Issues are bug reports and infrastructure complaints. The highest-comment Issue (#228, org-wide sharing, 14 comments) is an enterprise workflow request rather than a new skill.