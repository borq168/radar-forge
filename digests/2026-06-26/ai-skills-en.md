# Skills Ecosystem Highlights 2026-06-26

> Generated: 2026-06-26 00:35 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-26

## 1. Top Skills Ranking

The following skill additions (via Pull Requests) represent the most substantial new capabilities proposed during the period. All remain open.

### 1. document-typography (PR #514)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a pervasive quality gap in Claude’s output.
**Status:** Open since March 2026. No maintainer merge or rejection signal yet.

### 2. ODT (OpenDocument) skill (PR #486)
**Functionality:** Create, fill, read, and convert `.odt`/`.ods` files, including template filling and ODT-to-HTML conversion. Addresses LibreOffice/document‑standard workflows.
**Status:** Open since March 2026. No further activity after April.

### 3. testing-patterns skill (PR #723)
**Functionality:** Comprehensive testing guidance including unit, React, integration, E2E, and performance testing, with a Testing Trophy philosophy.
**Status:** Open since March 2026. Last update April 2026.

### 4. AppDeploy skill (PR #360)
**Functionality:** Enables Claude to deploy and manage full‑stack web apps via the AppDeploy platform, including lifecycle management.
**Status:** Open since February 2026. Last updated May 2026.

### 5. codebase-inventory-audit skill (PR #147)
**Functionality:** 10‑step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat, producing a single-source‑of‑truth report.
**Status:** Open since December 2025. Last updated February 2026.

### 6. shodh-memory skill (PR #154)
**Functionality:** Persistent context/memory system for AI agents across conversations, using proactive context retrieval and structured memory entries.
**Status:** Open since December 2025. Last updated March 2026.

### 7. SAP-RPT-1-OSS predictor skill (PR #181)
**Functionality:** Wraps SAP’s open‑source tabular foundation model for predictive analytics on business data.
**Status:** Open since December 2025. Last updated March 2026.

### 8. Meta-skills: skill-quality-analyzer and skill-security-analyzer (PR #83)
**Functionality:** Two complementary meta‑skills for evaluating other skills along structural/security dimensions.
**Status:** Open since November 2025. Last updated January 2026.

## 2. Community Demand Clusters

From the 50 Issues examined, the following recurring themes emerge:

- **Skill‑creator reliability and cross‑platform compatibility** — Multiple Issues (#556, #1169, #1061, #202, #361, #362) and related PRs (#1298, #1099, #1050, #1323) report that `run_eval.py` and `run_loop.py` produce `recall=0%` for all queries on all platforms, and fail entirely on Windows due to subprocess handling and encoding assumptions. This is the single most active cluster.
- **Security and trust boundaries** — Issue #492 warns that community skills distributed under the `anthropic/` namespace can impersonate official skills, creating a trust vulnerability. Issue #1175 raises concerns about embedding access control logic inside SKILL.md files for SharePoint integration.
- **New skill proposals** — Several Issues propose concrete new skills not yet in the repository: agent‑governance (safety patterns for agent systems, #412) and compact‑memory (symbolic notation for agent memory, #1329). Both received positive feedback.
- **Infrastructure and interoperability** — Requests to expose skills as MCP tools (#16), enable AWS Bedrock support (#29), and allow org‑wide skill sharing (#228) reflect a desire for broader integration.
- **Duplicate skills and installation confusion** — Issue #189 notes that `document-skills` and `example-skills` plugins contain identical content, causing context‑window waste.

## 3. Active Pending Skills

Several PRs remain open with recent activity and ongoing discussion:

- **PR #1298** (fix skill‑creator run_eval.py) — Addresses the root cause of 0% recall across all queries. The author (@MartinCajiao) provides a detailed fix including artifact installation, Windows stream reading, trigger detection, and parallel worker fixes. Updated 2026‑06‑23 with 4 commits. Strong maintainer engagement expected given the severity.
- **PR #1323** (fix trigger detection in run_eval) — Another approach targeting the same recall=0% bug, by @Polluelo978. Updated 2026‑06‑25. Likely to be either merged or folded into #1298.
- **PR #361** and **PR #362** (YAML special character detection & UTF‑8 panic fix) — Both by @Mr‑Neutr0n, address validation and crash issues in `quick_validate.py`. Updated 2026‑06‑10. Partially duplicated by later PR #539. No merge yet.
- **PR #1099** and **PR #1050** (Windows compatibility) — Two separate PRs fixing subprocess `PATHEXT` handling and pipe encoding on Windows. Updated 2026‑05‑24. Related to Issues #1061 and #556.

These PRs are not yet merged, but given the high number of independent reproductions of the `recall=0%` bug, the maintainers are likely evaluating the fix designs.

## 4. Daily Notes

- **`recall=0%` is the dominant blocker across the repository** — The `run_eval.py` script, which powers the description‑optimization loop, consistently reports 0% trigger rate for all test queries. At least three separate PRs (1298, 1323, 1099) and four Issues (556, 1169, 1061, 202) address this. Until resolved, new skill submissions cannot be automatically evaluated, and the description‑improvement feedback loop is effectively broken.
- **Windows compatibility remains a weak point** — Multiple PRs (1050, 1099, 362) and Issue #1061 detail failures on native Windows Python due to subprocess, encoding, and pipe assumptions. No maintainer response visible in the data.
- **Community is pro-actively proposing governance and memory skills** — Issue #412 (agent‑governance) and #1329 (compact‑memory) received support and detailed comments, indicating appetite for safety‑ and context‑management capabilities beyond the current skill catalogue.