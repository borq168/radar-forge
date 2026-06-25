# Skills Ecosystem Highlights 2026-06-25

> Generated: 2026-06-25 00:33 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-25

## 1. Top Skills Ranking

The following are the most-discussed Skills Pull Requests (new or significantly improved skills) in the repository. All are currently open.

**#514 – Add document-typography skill**
[PR #514](https://github.com/anthropics/skills/pull/514)
Functionality: Provides typographic quality control for AI-generated documents—orphan word wrap, widow paragraphs, numbering misalignment.
Discussion highlights: Contributor notes these issues affect every document Claude generates and users rarely ask for them explicitly, making the skill a valuable default.
Status: Open since 2026-03-04, last updated 2026-03-13.

**#486 – Add ODT skill**
[PR #486](https://github.com/anthropics/skills/pull/486)
Functionality: Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods), including template filling and ODT-to-HTML conversion.
Discussion highlights: Covers ISO-standard document workflows for open-source environments.
Status: Open since 2026-03-01, last updated 2026-04-14.

**#210 – Improve frontend-design skill clarity and actionability**
[PR #210](https://github.com/anthropics/skills/pull/210)
Functionality: Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation and the guidance is specific enough to steer Claude’s behavior.
Discussion highlights: Emphasis on internal coherence and token efficiency.
Status: Open since 2026-01-05, last updated 2026-03-07.

**#83 – Add skill-quality-analyzer and skill-security-analyzer to marketplace**
[PR #83](https://github.com/anthropics/skills/pull/83)
Functionality: Two meta-skills—quality analysis across five dimensions (structure, documentation, etc.) and security analysis for Claude Skills.
Discussion highlights: These are the first meta-skills proposed for the marketplace, enabling automated skill auditing.
Status: Open since 2025-11-06, last updated 2026-01-07.

**#181 – Add SAP-RPT-1-OSS predictor skill**
[PR #181](https://github.com/anthropics/skills/pull/181)
Functionality: Integration with SAP’s open source tabular foundation model (SAP-RPT-1-OSS) for predictive analytics on SAP business data.
Discussion highlights: Introduced enterprise-grade predictive modeling directly into Claude.
Status: Open since 2025-12-28, last updated 2026-03-16.

**#723 – Add testing-patterns skill**
[PR #723](https://github.com/anthropics/skills/pull/723)
Functionality: Comprehensive testing skill covering philosophy (Testing Trophy), unit testing, React component testing, end-to-end testing, and performance/fuzz testing.
Discussion highlights: Addresses a wide gap in the skills ecosystem—structured test guidance.
Status: Open since 2026-03-22, last updated 2026-04-21.

**#360 – Added AppDeploy skill**
[PR #360](https://github.com/anthropics/skills/pull/360)
Functionality: Enables Claude to deploy and manage full-stack web apps to a public URL via AppDeploy, including lifecycle management.
Discussion highlights: Bridges AI code generation and immediate live deployment.
Status: Open since 2026-02-09, last updated 2026-05-04.

**#147 – Add codebase-inventory-audit skill**
[PR #147](https://github.com/anthropics/skills/pull/147)
Functionality: Systematic 10-step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat; produces a CODEBASE-STATUS.md.
Discussion highlights: Aimed at large-scale codebase hygiene.
Status: Open since 2025-12-16, last updated 2026-02-04.

---

## 2. Community Demand Clusters

From the 50 Issues examined, three distinct demand clusters emerge:

### a. Security and Trust Boundary Concerns
- Issue [#492](https://github.com/anthropics/skills/issues/492): Community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability. (16 comments, 2 👍)
- Issue [#1175](https://github.com/anthropics/skills/issues/1175): Concerns about embedding access control logic inside SKILL.md when handling internal SharePoint documents—potential context window leakage. (4 comments)

### b. Core Infrastructure Reliability (skill-creator & evaluation tooling)
- Issue [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` reports 0% trigger rate on all queries, breaking the description-optimisation loop. (12 comments, 7 👍)
- Issue [#1169](https://github.com/anthropics/skills/issues/1169): Similar 0% recall in `run_loop.py` on every iteration. (3 comments, 1 👍)
- Issue [#1061](https://github.com/anthropics/skills/issues/1061): Three Windows-specific compatibility failures (subprocess PATHEXT, cp1252 encoding, select on pipes). (3 comments, 1 👍)
- Issue [#202](https://github.com/anthropics/skills/issues/202) (closed): Request to rewrite skill-creator as an actionable instruction set rather than developer documentation. (8 comments)
- Issue [#189](https://github.com/anthropics/skills/issues/189): Duplicate skills installed when both `document-skills` and `example-skills` plugins are used. (6 comments, 9 👍)

### c. New Skill Proposals & Integration Needs
- Issue [#412](https://github.com/anthropics/skills/issues/412): Proposal for an **agent-governance** skill—policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems. (6 comments)
- Issue [#1329](https://github.com/anthropics/skills/issues/1329): Proposal for a **compact-memory** skill using symbolic notation to reduce context overhead for long-running agents. (4 comments)
- Issue [#228](https://github.com/anthropics/skills/issues/228): Org-wide skill sharing (desire for shared skill libraries or direct sharing links). (14 comments, 7 👍)
- Issue [#16](https://github.com/anthropics/skills/issues/16): Suggestion to expose Skills as MCPs for standardized API signaling. (4 comments)
- Issue [#29](https://github.com/anthropics/skills/issues/29): Request for AWS Bedrock compatibility. (4 comments)

---

## 3. Active Pending Skills

The following PRs continue to receive recent discussion and remain unmerged. (Update dates shown are the most recent activity recorded.)

**#1298 – Fix skill-creator run_eval.py always reports 0% recall**
[PR #1298](https://github.com/anthropics/skills/pull/1298)
Updated 2026-06-23. Addresses the critical bug where the eval pipeline reports 0% recall for all skill descriptions (#556). Includes fixes for Windows stream reading, trigger detection, and parallel workers. The PR is under active review.

**#1323 – Fix skill-creator trigger detection misses real skill name**
[PR #1323](https://github.com/anthropics/skills/pull/1323)
Updated 2026-06-23. Identifies a second root cause for 0% recall: `run_single_query` bails on the first non-Skill tool and fails to detect skill triggering. Complementary to #1298.

**#361 – Detect unquoted YAML special characters in description fields**
[PR #361](https://github.com/anthropics/skills/pull/361)
Updated 2026-06-10. Adds pre-parse validation in `quick_validate.py` to catch unquoted `description` and `compatibility` values with `: # { } [ ]`. Prevents silent parsing errors.

**#362 – Fix skill-creator UTF-8 panic on multi-byte characters**
[PR #362](https://github.com/anthropics/skills/pull/362)
Updated 2026-06-10. Replaces character-length checks with UTF-8 byte-length validation to avoid Rust panics when the CLI processes non-ASCII characters.

**#1099 – Fix run_eval.py crash on Windows when reading from subprocess pipe**
[PR #1099](https://github.com/anthropics/skills/pull/1099)
Updated 2026-05-24. Addresses `[WinError 10038]` and the “not triggered” symptom on native Windows Python.

**#514 – Add document-typography skill**
[PR #514](https://github.com/anthropics/skills/pull/514)
Updated 2026-03-13. Still open with no recent maintainer response; the community has not closed or merged the proposal.

---

## 4. Daily Notes

- **Skill-creator reliability dominates recent activity.** The majority of high-comment PRs and Issues in the top listing address the `run_eval.py` 0% recall bug, Windows compatibility, and validation failures. This indicates that the skill development tooling itself is the community’s primary friction point.
- **Security awareness is rising.** Issue #492 (namespace impersonation) and #1175 (permission logic in SKILL.md