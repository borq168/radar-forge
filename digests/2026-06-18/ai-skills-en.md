# Skills Ecosystem Highlights 2026-06-18

> Generated: 2026-06-18 00:39 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-18

## 1. Top Skills Ranking

The following pull requests represent the most-discussed Skill additions or improvements in the repository. Discussion activity is inferred from sort order (by comment count) and update recency.

### #514 — Add document-typography skill
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
- **Discussion highlights**: The summary notes these issues "affect every document Claude generates," suggesting broad applicability. The skill targets a pain point users rarely articulate explicitly.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/514

### #486 — Add ODT skill
- **Functionality**: OpenDocument text creation, template filling, and ODT-to-HTML conversion. Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice.
- **Discussion highlights**: Reflects demand for open-source document format support alongside existing DOCX and PDF skills.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/486

### #210 — Improve frontend-design skill clarity and actionability
- **Functionality**: Revises the existing frontend-design skill to make every instruction executable within a single conversation and specific enough to steer behavior without over-constraining.
- **Discussion highlights**: The PR focuses on operational effectiveness of skill instructions rather than adding new capabilities.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/210

### #83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace
- **Functionality**: Two meta-skills: one evaluates skills across five quality dimensions (structure, documentation, examples, etc.), the other provides security analysis.
- **Discussion highlights**: Introduces a self-evaluation capability for the skills ecosystem itself.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/83

### #181 — Add SAP-RPT-1-OSS predictor skill
- **Functionality**: Wraps SAP's open source tabular foundation model for predictive analytics on SAP business data.
- **Discussion highlights**: Targets enterprise ERP analytics workflows. Uses a real open source model released at SAP TechEd 2025.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/181

### #723 — Add testing-patterns skill
- **Functionality**: Covers the full testing stack: philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and what NOT to test.
- **Discussion highlights**: Comprehensive — likely a large skill with multiple reference files.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/723

### #568 — Add ServiceNow platform skill
- **Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, SecOps, and IntegrationHub.
- **Discussion highlights**: Very broad scope — described as a "platform assistant" not a narrow scripting helper.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/568

### #444 — Add AURELION skill suite (kernel, advisor, agent, memory)
- **Functionality**: Four skills providing structured cognitive templates, professional knowledge management, and AI collaboration patterns.
- **Discussion highlights**: A multi-skill ecosystem submission, suggesting efforts to build complete workflows on the skills platform.
- **Status**: OPEN
- **Link**: https://github.com/anthropics/skills/pull/444

---

## 2. Community Demand Clusters

The following groupings emerge from the Issues data (50 total issues, sorted by comment count). These should be read as observed demand signals, not confirmed trends.

### Platform Integration and Sharing
- **Issue #228** — "Enable org-wide skill sharing in Claude.ai" (14 comments, 7 👍): Users currently must download `.skill` files and share them manually. A shared library or direct sharing link is requested.
- **Issue #16** — "Expose Skills as MCPs" (4 comments): Proposes a programmatic API for skills, packaging them as reusable tools.
- **Issue #29** — "Usage with Bedrock" (4 comments): Users want skills to work with AWS Bedrock deployments.

### Toolchain Reliability and Windows Support
- **Issue #556** — "run_eval.py: claude -p never triggers skills/commands" (12 comments, 7 👍): Core evaluation script reports 0% trigger rate, making the description-optimization loop ineffective. Multiple independent reproductions reported.
- **Issue #1061** — "Windows compatibility: skill-creator scripts fail" (3 comments): Three distinct issues (PATHEXT, cp1252 encoding, select on pipes) block Windows usage.
- **Issue #1169** — "skill-creator description-optimisation loop: recall=0%" (3 comments, 1 👍): Even literal slash-command queries score 0% recall.
- **Issue #202** — "skill-creator should be updated to best practice" (8 comments, 1 👍): The skill-creator reads like developer documentation, not an operational skill. Verbose tone undermines token efficiency.

### Security and Trust
- **Issue #492** — "Security: Community skills distributed under anthropic/ namespace" (7 comments, 2 👍): Community skills impersonate official Anthropic skills, creating a trust boundary vulnerability where users may grant elevated permissions.
- **Issue #1175** — "Concerns regarding Security and Context Window when handling SharePoint Online" (4 comments): Writing access control logic inside SKILL.md raises security and context-window concerns.
- **Issue #412** — "Skill proposal: agent-governance" (6 comments): Proposes a skill for safety patterns in AI agent systems — policy enforcement, threat detection, trust scoring, and audit trails.

---

## 3. Active Pending Skills

These pull requests have recent discussion activity (updated within the past 30-60 days) and remain unmerged.

### #538 — fix(pdf): correct case-sensitive file references in SKILL.md
- **Discussion**: Fixes 8 case-sensitivity mismatches between SKILL.md references and actual filenames (uppercase vs lowercase), breaking on case-sensitive filesystems.
- **Status**: OPEN (updated 2026-04-29)
- **Link**: https://github.com/anthropics/skills/pull/538

### #539 — fix(skill-creator): warn on unquoted description with YAML special characters
- **Discussion**: Adds pre-parse validation in `quick_validate.py` to catch unquoted descriptions containing `:` before `yaml.safe_load()` truncates the value.
- **Status**: OPEN (updated 2026-04-16)
- **Link**: https://github.com/anthropics/skills/pull/539

### #541 — fix(docx): prevent tracked change w:id collision with existing bookmarks
- **Discussion**: Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. The root cause is a shared `w:id` ID space across bookmarks, tracked changes, comments, and move ranges.
- **Status**: OPEN (updated 2026-04-16)
- **Link**: https://github.com/anthropics/skills/pull/541

### #1298 — fix(skill-creator): run_eval.py always reports 0% recall
- **Discussion**: Addresses the long-standing eval bug (#556 and #1169). Proposes installing the eval artifact as a real skill and fixes Windows stream reading and trigger detection. Updated very recently (2026-06-11).
- **Status**: OPEN (updated 2026-06-11)
- **Link**: https://github.com/anthropics/skills/pull/1298

### #1099 — skill-creator: fix run_eval.py crash on Windows when reading from subprocess pipe
- **Discussion**: Another fix for the same eval pipeline — `run_eval.py` is unusable on Windows because every query gets recorded as "not triggered." Symptom is `[WinError 10038]`.
- **Status**: OPEN (updated 2026-05-24)
- **Link**: https://github.com/anthropics/skills/pull/1099

---

## 4. Daily Notes

1. **Domain-specific skills continue to outnumber meta-tooling improvements in PR volume, but toolchain reliability dominates Issues.** Of the top 20 PRs by comments, roughly half add new domain skills (typography, ODT, SAP, ServiceNow, testing, AURELION). However, the top Issues by engagement are almost entirely about infrastructure: the `run_eval.py` bug (#556, 12 comments, 7 👍; #1169), Windows compatibility (#1061), duplicate skill installation (#189), and skill sharing (#228). This suggests the community is building skills faster than the surrounding tooling can support.

2. **Three independent PRs attempt to fix the same eval-broken pipeline.** PR #1298, #1099, and #361/#539 (YAML parsing fixes) all address different failure modes in the `run_eval.py`/`run_loop.py` description-optimization flow. The multiple approaches (reinstall as real skill, fix Windows pipes, fix YAML frontmatter) indicate the problem is multi-layered and has not been resolved by earlier attempts. The recall=0% issue has been independently reproduced by multiple users.

3. **Windows compatibility is a recurring, under-addressed pain point.** Issues #1061 (three distinct bugs) and PRs #1099, #1050, and #1298 all explicitly address Windows failures. The root causes are Unix-first assumptions: PATHEXT handling for `.cmd` files, cp1252 encoding instead of UTF-8, and `select` on pipes which has no Windows equivalent. No single PR yet provides a comprehensive fix.