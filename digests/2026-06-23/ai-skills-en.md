# Skills Ecosystem Highlights 2026-06-23

> Generated: 2026-06-23 00:34 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-23

## 1. Top Skills Ranking

**document-typography** (PR #514)
*Author: @PGTBoos | Status: OPEN*
Adds a skill for typographic quality control in generated documents: orphan/widow prevention, numbering alignment. Addresses a pervasive class of document issues.
https://github.com/anthropics/skills/pull/514

**ODT — OpenDocument Text Creation** (PR #486)
*Author: @GitHubNewbie0 | Status: OPEN*
Enables creation, filling, reading, and conversion of ODT/ODS/ODF files. Covers LibreOffice document workflows.
https://github.com/anthropics/skills/pull/486

**SAP-RPT-1-OSS Predictor** (PR #181)
*Author: @amitlals | Status: OPEN*
Skill for using SAP’s open source tabular foundation model for predictive analytics on enterprise SAP data.
https://github.com/anthropics/skills/pull/181

**testing-patterns** (PR #723)
*Author: @4444J99 | Status: OPEN*
Comprehensive testing skill covering unit, React component, integration, and end-to-end testing patterns. Uses the Testing Trophy model.
https://github.com/anthropics/skills/pull/723

**Masonry AI — Image & Video Generation** (PR #335)
*Author: @junaid1460 | Status: OPEN*
Adds image generation (Imagen 3.0) and video generation (Veo 3.1) via the Masonry CLI, including job management.
https://github.com/anthropics/skills/pull/335

**shodh-memory — Persistent Agent Context** (PR #154)
*Author: @varun29ankuS | Status: OPEN*
Persistent memory system for maintaining context across conversations, with structured memory entries and proactive recall.
https://github.com/anthropics/skills/pull/154

**ServiceNow Platform Skill** (PR #568)
*Author: @Vanka07 | Status: OPEN*
Broad ServiceNow platform assistant covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub.
https://github.com/anthropics/skills/pull/568

**AURELION Cognitive Framework Suite** (PR #444)
*Author: @Chase-Key | Status: OPEN*
Four skills (kernel, advisor, agent, memory) for structured cognitive frameworks and professional knowledge management.
https://github.com/anthropics/skills/pull/444

---

## 2. Community Demand Clusters

**Skill distribution and sharing infrastructure** — Multiple issues request better mechanisms for distributing skills within organizations and for distinguishing official from community content.
- #228: Org-wide skill sharing in Claude.ai (14 comments, 👍7)
- #492: Security concerns over community skills under the anthropic/ namespace (9 comments)
- #184: agentskills.io site broken (3 comments, 👍4)
- #61: 404 errors when loading skills (3 comments)
- #189: Duplicate skills from overlapping plugin installations (6 comments, 👍9)

**Tooling reliability and cross-platform support** — Several reports document the skill-creator tooling producing incorrect evaluation results, particularly on Windows, which blocks effective skill development.
- #556: run_eval.py 0% trigger rate (12 comments, 👍7)
- #1169: recall=0% on every optimization iteration (3 comments)
- #1061: Windows compatibility blockers in skill-creator scripts (3 comments)
- #202: skill-creator needs best-practice rewrite (8 comments)

**New skill directions proposed** — Community members are proposing skills for emerging use cases.
- #412: Agent governance / safety patterns (6 comments)
- #1329: Compact-memory symbolic notation for agent state (3 comments)
- #1175: SharePoint Online document handling with security and context window concerns (4 comments)

---

## 3. Active Pending Skills

**skill-creator fix: run_eval.py 0% recall** (PR #1298) — @MartinCajiao
Substantial fix addressing the critical bug where run_eval.py always reports 0% recall. The PR installs the eval artifact as a real skill, fixes Windows stream reading and trigger detection, and addresses parallel worker issues. Last updated 2026-06-22.
https://github.com/anthropics/skills/pull/1298

**skill-quality-analyzer + skill-security-analyzer** (PR #83) — @eovidiu
Two meta-skills for evaluating skill quality across five dimensions (structure, documentation, correctness, performance, security) and analyzing security properties. Open since November 2025. Last updated 2026-01-07.
https://github.com/anthropics/skills/pull/83

**skill-creator: multiple Windows fixes** (PRs #1099, #1050) — @joshuawowk and @gstreet-ops
Two separate PRs addressing subprocess PATHEXT and encoding issues on Windows. Both were updated in late May 2026.
https://github.com/anthropics/skills/pull/1099
https://github.com/anthropics/skills/pull/1050

**YAML validation improvements** (PRs #361, #539) — @Mr-Neutr0n and @Lubrsy706
Both add pre-parse checks for unquoted YAML special characters in description fields, which cause silent parsing failures. PR #361 is broader (detects `:`, `#`, `{`, `}`, `[`, `]`); PR #539 focuses on `:`.
https://github.com/anthropics/skills/pull/361
https://github.com/anthropics/skills/pull/539

---

## 4. Daily Notes

- **The run_eval.py recall bug is the most active unresolved infrastructure issue.** Both PRs #1298 and #1099, and issues #556 and #1169, describe a consistent failure pattern: evaluation scripts report 0% recall on every query, making the description-optimization loop optimize against noise. Multiple independent contributors have reproduced it across platforms.

- **Windows compatibility is a concentrated friction point.** Three PRs (#1298, #1099, #1050) and issue #1061 document distinct Windows failures: subprocess PATH handling, cp1252 encoding, and select-on-pipe errors. These are all in the skill-creator tooling, not in skills themselves.

- **No clear demand signal for a single new skill category.** The proposed skill PRs span nine distinct domains (typography, ODT, SAP predictive analytics, testing, media generation, memory, ServiceNow, cognitive frameworks, governance). No single direction has multiple independent contributors.