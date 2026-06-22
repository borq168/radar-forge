# Skills Ecosystem Highlights 2026-06-22

> Generated: 2026-06-22 00:36 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-22

## 1. Top Skills Ranking

### #514 — document-typography (OPEN)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets typographic quality control issues that affect nearly every generated document.

**Status:** Open since March. The PR notes these problems are systemic to Claude's output. No maintainer merge activity visible.
🔗 https://github.com/anthropics/skills/pull/514

### #486 — ODT skill (OPEN)
**Functionality:** OpenDocument Text creation, template filling, and ODT-to-HTML conversion. Covers `.odt`, `.ods`, and general ODF/OpenDocument/LibreOffice document workflows.

**Status:** Open since March, updated mid-April. No merge. A straightforward format gap in the skills collection.
🔗 https://github.com/anthropics/skills/pull/486

### #181 — SAP-RPT-1-OSS predictor skill (OPEN)
**Functionality:** Wraps SAP's open-source tabular foundation model for predictive analytics on SAP business data. Released under Apache 2.0 at SAP TechEd 2025.

**Discussion:** Enterprise analytics integration. No maintainer comments visible. Updated March 2026.
🔗 https://github.com/anthropics/skills/pull/181

### #335 — masonry-generate-image-and-videos (OPEN)
**Functionality:** Image and video generation via Masonry CLI, supporting Imagen 3.0, Veo 3.1, and job management.

**Status:** Updated March 2026. No merge. Would add multimodal generation capability to the skills set.
🔗 https://github.com/anthropics/skills/pull/335

### #154 — shodh-memory skill (OPEN)
**Functionality:** Persistent context for AI agents across conversations. Uses `proactive_context` calls to surface relevant memories on each user message.

**Discussion:** Implements structured memory—area, context, references, summaries. Updated March. No merge.
🔗 https://github.com/anthropics/skills/pull/154

### #568 — ServiceNow platform skill (OPEN)
**Functionality:** Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident, and IntegrationHub.

**Discussion:** Enterprise platform coverage; one of the larger platform skills proposed. Updated April.
🔗 https://github.com/anthropics/skills/pull/568

### #444 — AURELION skill suite (OPEN)
**Functionality:** Four skills (kernel, advisor, agent, memory) implementing a structured cognitive framework for professional knowledge management: 5-floor thinking templates, retrieval-augmented generation, autonomous execution, and temporal-contextual memory.

**Discussion:** Most complex single contribution by skill count. Last updated May. No merge.
🔗 https://github.com/anthropics/skills/pull/444

### #723 — testing-patterns skill (OPEN)
**Functionality:** Covers testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and full-stack patterns.

**Discussion:** Addresses a clear gap in the current skills catalog—no existing testing guidance. Updated April.
🔗 https://github.com/anthropics/skills/pull/723

---

## 2. Community Demand Clusters

### Organizational skill sharing and discovery
Issue #228 (14 comments, 7 👍) requests org-wide skill sharing in Claude.ai. Users currently must download `.skill` files and share manually via Slack/Teams. **No maintainer solution announced.**
🔗 https://github.com/anthropics/skills/issues/228

### Meta-skills: quality analysis, security, governance
Multiple issue authors have independently proposed or raised concerns about meta-level skills:
- #492 (9 comments): Community skills distributed under `anthropic/` namespace create trust boundary abuse—users may grant elevated permissions to skills they believe are official
- #412 (6 comments): Proposed `agent-governance` skill for safety patterns (policy enforcement, threat detection, trust scoring, audit trails)
- #83 PR: Adds `skill-quality-analyzer` and `skill-security-analyzer` to marketplace (five evaluation dimensions)

### Platform compatibility (Windows, Bedrock, MCP)
Issues surfaced across three distinct integration gaps:
- #556 (12 comments, 7 👍): `run_eval.py` never triggers skills on any query—0% trigger rate. Corroborated by #1169 (3 comments) with same recall=0% finding.
- #1061 (3 comments): Windows compatibility failures in skill-creator scripts (PATHEXT, cp1252 encoding, select-on-pipes issues)
- #29 (4 comments): Requests for AWS Bedrock support; #16 (4 comments): Requests to expose Skills as MCPs

### Tooling stability concerns
- #62 (10 comments): All skills disappeared, 404 errors on loading; user reports skills no longer visible after file rename in Downloads folder
- #189 (6 comments, 9 👍): `document-skills` and `example-skills` plugins install identical content; duplicate skills waste context window
- #202 (8 comments, closed): `skill-creator` reads like developer documentation rather than an operational skill for Claude
- #184 (3 comments, closed): `agentskills.io` reference page giving "too many redirects" error

---

## 3. Active Pending Skills

### #210 — Improve frontend-design skill clarity and actionability (OPEN)
**Discussion:** Revises the existing frontend-design skill to make instructions actionable within a single conversation. Goal is specificity that steers behavior without being overly prescriptive. Created January, last maintainer activity March.
🔗 https://github.com/anthropics/skills/pull/210

### #1298 — fix(skill-creator): run_eval.py always reports 0% recall (OPEN)
**Discussion:** Addresses #556 (10+ independent reproductions). Proposes installing the eval artifact as a real skill, plus fixes for Windows stream reading, trigger detection, and parallel workers. Still open after 12 days; no merge yet.
🔗 https://github.com/anthropics/skills/pull/1298

### #1099 — fix(skill-creator): Windows subprocess pipe crash (OPEN)
**Discussion:** `run_eval.py` unusable on Windows—every query recorded as "not triggered" due to WinError 10038. The optimization loop returns precision=100%, recall=0% on every iteration. Open since May; last update May 24.
🔗 https://github.com/anthropics/skills/pull/1099

### #1050 — fix(skill-creator): Windows subprocess + encoding bugs (OPEN)
**Discussion:** Two one-line fixes: `claude.cmd` not found via PATHEXT, and cp1252 pipe encoding breaking UTF-8 output parsing. Updated May 24.
🔗 https://github.com/anthropics/skills/pull/1050

### #362 — Fix skill-creator UTF-8 panic on multi-byte characters (OPEN)
**Discussion:** Replaces character-based length checks with UTF-8 byte-length validation in `quick_validate.py` to prevent Rust panics when the CLI processes multi-byte characters. Updated June 10.
🔗 https://github.com/anthropics/skills/pull/362

### #539/#361 — Unquoted YAML special character detection (OPEN)
**Discussion:** Two independent PRs (#539 by Lubrsy706, #361 by Mr-Neutr0n) both address the same bug: unquoted `description` fields containing `:` cause silent YAML truncation. Suggests community independently discovered the same gap.
🔗 https://github.com/anthropics/skills/pull/539 | https://github.com/anthropics/skills/pull/361

---

## 4. Daily Notes

**Windows compatibility is the most-filed single class of bug.** Three separate skill-creator fixes (#1298, #1099, #1050) plus issue #1061 all target Windows-specific failures in `run_eval.py` and adjacent scripts. The core `run_loop.py` optimization pipeline appears untestable on Windows without these patches.

**The skill-creator evaluation pipeline has a fundamental reliability problem.** Multiple independent users (#556, #1169) report 0% recall on every iteration, including tests against literal slash-command queries. PR #1298 proposes root-cause fixes, but the issue has been open since March 7 with 10+ reproductions.

**Enterprise and governance demand is growing but unaddressed.** Three of the top skill proposals (ServiceNow #568, SAP-RPT #181, AURELION #444) target enterprise workflows. Meanwhile, issue #228 (org-wide sharing, 7 👍) and issue #492 (trust boundary abuse under `anthropic/` namespace) both request infrastructure that does not yet exist.