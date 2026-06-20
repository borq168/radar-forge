# Skills Ecosystem Highlights 2026-06-20

> Generated: 2026-06-20 00:33 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-20

## 1. Top Skills Ranking

**1. document-typography (#514)** — Skill to prevent orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses typographic issues present in every Claude-generated document. Open since March 2026, no maintainer responses visible in data.

**2. ODT skill (#486)** — OpenDocument text creation and template filling, including ODT-to-HTML parsing. Triggers on mentions of ODT, ODS, ODF, OpenDocument, LibreOffice. Open since March 2026, last updated April 2026.

**3. frontend-design improvement (#210)** — Revises the existing frontend-design skill for clarity and actionability. Goal: ensure every instruction is executable within a single conversation. Author noted the skill needed specificity to steer behavior. Open since January 2026.

**4. skill-quality-analyzer & skill-security-analyzer (#83)** — Two meta-skills for the marketplace: quality analysis across five dimensions (structure, documentation, examples, resource alignment, completeness) and security analysis. Oldest open PR in top 20 (November 2025).

**5. SAP-RPT-1-OSS predictor (#181)** — Skill for using SAP's open source tabular foundation model (Apache 2.0, released at SAP TechEd 2025) for predictive analytics on SAP business data. Open since December 2025.

**6. testing-patterns (#723)** — Comprehensive testing skill covering Testing Trophy philosophy, unit testing (AAA pattern, naming, pure functions, edge cases), React component testing with Testing Library, and end-to-end patterns. Open since March 2026.

**7. ServiceNow platform skill (#568)** — Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub. Open since March 2026.

**8. AURELION skill suite (#444)** — Four skills: aurelion-kernel (5-floor structured thinking framework), aurelion-advisor (domain-specific reasoning advisor), aurelion-agent (autonomous task agent), aurelion-memory (structured memory). Open since February 2026, last updated May 2026.

## 2. Community Demand Clusters

**Enterprise skill sharing and distribution** — Issue #228 (14 comments) requests org-wide skill sharing in Claude.ai, citing that users must currently download .skill files and manually upload. Issue #492 (7 comments) raises security concerns about community skills distributed under the `anthropic/` namespace, impersonating official skills and creating a trust boundary vulnerability.

**Evaluation and tooling reliability** — Multiple issues report that `run_eval.py` produces 0% trigger rates regardless of skill content: #556 (12 comments) and #1169 (3 comments). Both describe the same symptom — all test queries return "not triggered" — making the description-optimization loop optimize against noise.

**Windows compatibility** — Issue #1061 (3 comments) reports three Unix-first assumptions blocking `run_eval.py` on native Windows: subprocess `PATHEXT` handling, `cp1252` encoding, and `select` on pipes. This is a recurring theme across multiple PRs and issues.

**Agent governance and security patterns** — Issue #412 (6 comments, closed) proposed an `agent-governance` skill for safety patterns: policy enforcement, threat detection, trust scoring, audit trails. Not merged, but indicates demand for safety-focused skills.

**Skills as MCPs** — Issue #16 (4 comments) requested exposing skills as MCPs to standardize the API surface of skill functionality. No maintained response visible.

## 3. Active Pending Skills

**#1298 — Fix run_eval.py 0% recall bug (MartinCajiao)** — Reports that `run_eval.py` always returns `recall=0%` regardless of description content, reproducing independently 10+ times. Proposed fix involves installing the eval artifact as a real skill, fixing Windows stream reading, trigger detection, and parallel workers. Most recent update: June 11, 2026. High activity.

**#538 — Fix case-sensitive file references in PDF skill (Lubrsy706)** — Corrects 8 case-sensitivity mismatches between SKILL.md references (`REFERENCE.md`, `FORMS.md`) and actual lowercase file names. Breaks on case-sensitive file systems. Open since March 2026, last updated April 2026.

**#539 — Warn on unquoted YAML description fields (Lubrsy706)** — Adds pre-parse validation in `quick_validate.py` to detect unquoted description fields containing `:` before YAML parsing fails silently. Open since March 2026, last updated April 2026. Overlaps with PR #361 (Mr-Neutr0n, February 2026) addressing the same issue.

**#541 — Fix tracked change w:id collision in DOCX skill (Lubrsy706)** — Prevents document corruption when tracked changes collide with existing bookmark IDs in OOXML documents. Root cause: hardcoded low IDs (1, 2, 3) conflict with existing bookmarks. Open since March 2026.

**#1099 — Fix Windows subprocess crash in run_eval.py (joshuawowk)** — Directly addresses issue #1061: subprocess pipe reading crashes with `OSError: [WinError 10038]`. Open since May 2026, last updated May 2026.

## 4. Daily Notes

- **The `run_eval.py` evaluation pipeline is a major reliability bottleneck.** Issue #556 (12 comments) and PR #1298 independently document that the eval system reports 0% recall for all skill descriptions. Multiple contributors are working on fixes — #1099 (Windows subprocess), #539/#361 (YAML parsing), and #1298 (architecture-level fix). The description-optimization loop is currently non-functional on both Windows and presumably other platforms.

- **Document format skills dominate the open PR queue.** Of the top 20 PRs by comments, at least five are document-format related: document-typography, ODT, PDF case-sensitivity fix, DOCX tracked changes fix, and the underlying document-skills plugin duplication issue (#189). This suggests significant community focus on improving Claude's document output quality, though the volume alone does not indicate broader ecosystem direction.

- **Windows compatibility remains an unresolved cross-cutting issue.** Multiple PRs (#539, #541, #1099, #1050) and issue #1061 address Windows-specific failures in the skill-creator tooling (subprocess, encoding, pipe handling). No single fix has been merged, indicating the problem is systemic rather than a single bug.