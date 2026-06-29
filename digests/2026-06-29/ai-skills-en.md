# Skills Ecosystem Highlights 2026-06-29

> Generated: 2026-06-29 00:33 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights — 2026-06-29

## Top Skills Ranking

### 1. `skill-creator` Fixes (PR #1298) — Most Active PR
**Functionality:** Fixes `run_eval.py` which reports 0% recall for all skill descriptions, breaking the description-optimization loop. The fix installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers.
**Discussion:** Author details root cause analysis—the eval artifact was never being treated as an installable skill, so trigger detection always failed. 10+ independent reproductions of the 0% recall issue cited. PR references #556 and #1169. Multiple reviewers engaged on the Windows-specific fixes.
**Status:** Open, last updated 2026-06-23
**Link:** https://github.com/anthropics/skills/pull/1298

### 2. `document-typography` Skill (PR #514)
**Functionality:** Quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment in generated documents.
**Discussion:** Skill addresses a universal pain point in Claude document generation. No maintainer comments visible; PR has been open since March 2026 with no merge activity.
**Status:** Open
**Link:** https://github.com/anthropics/skills/pull/514

### 3. `ODT` Skill — OpenDocument Text (PR #486)
**Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, LibreOffice.
**Discussion:** Broad scope including template filling and ODT-to-HTML conversion. No maintainer engagement visible.
**Status:** Open since March 2026
**Link:** https://github.com/anthropics/skills/pull/486

### 4. `frontend-design` Skill Improvement (PR #210)
**Functionality:** Revises the existing frontend-design skill for clarity and actionability. Ensures every instruction is executable within a single conversation.
**Discussion:** Author focused on making guidance specific enough to steer Claude behavior without ambiguity. No maintainer comments.
**Status:** Open since January 2026
**Link:** https://github.com/anthropics/skills/pull/210

### 5. Meta-Skills: `skill-quality-analyzer` and `skill-security-analyzer` (PR #83)
**Functionality:** Two meta-skills for evaluating other skills. Quality analyzer scores across Structure & Documentation (20%), with other dimensions. Security analyzer evaluates trust and safety.
**Discussion:** Oldest open PR in the top set (November 2025). Proposes adding self-evaluation tooling to the ecosystem.
**Status:** Open
**Link:** https://github.com/anthropics/skills/pull/83

### 6. `testing-patterns` Skill (PR #723)
**Functionality:** Comprehensive testing coverage—Testing Trophy model, unit testing (AAA pattern), React component testing with Testing Library, E2E with Playwright/Cypress, and other testing levels.
**Discussion:** Covers the full testing stack. No maintainer comments visible.
**Status:** Open since March 2026
**Link:** https://github.com/anthropics/skills/pull/723

### 7. `AppDeploy` Skill (PR #360)
**Functionality:** Deploy and manage full-stack web apps to public URLs via AppDeploy.ai. Includes lifecycle management, versioning, and environment variables.
**Discussion:** Integrates a third-party deployment service. Last updated May 2026.
**Status:** Open
**Link:** https://github.com/anthropics/skills/pull/360

### 8. `shodh-memory` Skill (PR #154)
**Functionality:** Persistent memory system maintaining context across conversations. Teaches Claude when to call `proactive_context`, how to structure memories, and retrieval patterns.
**Discussion:** Addresses long-running agent memory, a commonly requested capability. No maintainer comments.
**Status:** Open since December 2025
**Link:** https://github.com/anthropics/skills/pull/154

---

## Community Demand Clusters

### Cluster 1: skill-creator Toolchain Reliability (Highest Signal)
Multiple open issues report the same root cause—`run_eval.py` produces 0% recall for all queries, making the description-optimization loop useless. Reports from independent users:
- #556: "claude -p never triggers skills/commands (0% trigger rate across all queries)" — 7 upvotes, 12 comments
- #1169: "skill-creator description-optimisation loop: recall=0% on every iteration" — 1 upvote, 3 comments
- #1061: "Windows compatibility: skill-creator scripts fail (subprocess PATHEXT, cp1252 encoding, select on pipes)" — 1 upvote, 3 comments

These are accompanied by multiple PRs attempting fixes (#1298, #1323, #1099, #1050). This is the single most-discussed problem in the repository.

**Link examples:** https://github.com/anthropics/skills/issues/556, https://github.com/anthropics/skills/issues/1169

### Cluster 2: Security & Trust Boundary (Issue #492)
Issue #492 raises that community skills are distributed under the `anthropic/` namespace, creating a trust vulnerability. Users may grant elevated permissions thinking skills are official Anthropic releases. 27 comments (highest of any issue), 2 upvotes. Last updated June 28, 2026—sustained discussion.

**Link:** https://github.com/anthropics/skills/issues/492

### Cluster 3: Organizational/Enterprise Sharing (Issue #228)
Demand for org-wide skill sharing within Claude.ai. Current workflow requires manual .skill file transfer via Slack/Teams and manual upload. 7 upvotes, 14 comments. No solution or maintainer commitment visible.

**Link:** https://github.com/anthropics/skills/issues/228

### Cluster 4: Platform Integration (Smaller Signal)
- #29: AWS Bedrock compatibility question (4 comments, no resolution)
- #16: Expose Skills as MCPs (4 comments, opened October 2025)

These represent early-stage demand for cross-platform portability. No maintainer response.

**Links:** https://github.com/anthropics/skills/issues/29, https://github.com/anthropics/skills/issues/16

---

## Active Pending Skills

### PR #1298 (skill-creator fix) — Most Active
**Status:** Open, discussed above. Last updated June 23, 2026. Author addressing multiple reviewers on Windows-specific subprocess and encoding issues. Discussion focused on whether the fix correctly installs the eval artifact as a real skill vs. using a different detection method.
**Link:** https://github.com/anthropics/skills/pull/1298

### PR #1323 (run_eval trigger detection fix)
**Status:** Open since June 16, 2026. Last updated June 25. Addresses a complementary issue to #1298—trigger detection misses the real skill name and bails on first non-Skill tool. Discussion centers on whether both PRs (#1298 and #1323) should be merged together.
**Link:** https://github.com/anthropics/skills/pull/1323

### PR #1099 (Windows subprocess pipe crash)
**Status:** Open since May 7, 2026. Fixes `run_eval.py` crash on Windows where every query is recorded as "not triggered" due to WinError 10038 on subprocess pipe reads. One-line fix per the summary. Discussion with maintainers ongoing.
**Link:** https://github.com/anthropics/skills/pull/1099

### PR #1050 (Windows subprocess + encoding bugs)
**Status:** Open since April 27, 2026. Two one-line fixes: `PATHEXT` handling for `claude.cmd` on Windows, and `locale.getpreferredencoding()` for cp1252 output parsing. Author reports both fixes necessary for `run_loop.py` to work on Windows 11. Last updated May 24.
**Link:** https://github.com/anthropics/skills/pull/1050

### PR #361 (YAML special character detection)
**Status:** Open since February 9, 2026. Last updated June 10—recent activity. Adds pre-parse validation in `quick_validate.py` for unquoted description fields containing `:`, `#`, `{`, `[`. Overlaps with PR #539. Discussion on whether to merge as sibling or supersede.
**Link:** https://github.com/anthropics/skills/pull/361

---

## Daily Notes

1. **The `run_eval.py` 0% recall bug is the dominant technical issue in the repository.** Multiple independent users report the same symptom, and three distinct PRs (#1298, #1323, #1099) attempt overlapping fixes. This bug blocks the entire skill-creation optimization workflow, which explains the concentration of activity.

2. **A security concern around namespace trust is gaining traction.** Issue #492 (27 comments, updated June 28) has the highest engagement of any issue. The core claim—that community skills under the `anthropic/` namespace create a trust boundary vulnerability—has not received a maintainer response as of the data cutoff.

3. **No maintainer-merged PRs appear in this data sample.** All top PRs remain open with varying levels of maintainer engagement. The longest-pending skill additions (PR #83 from November 2025, PR #154 from December 2025) have no maintainer comments, suggesting a backlog in skill review and merge capacity.