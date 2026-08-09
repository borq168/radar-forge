# Skills Ecosystem Highlights 2026-08-09

> Generated: 2026-08-09 01:01 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-09

## 1. Top Skills Ranking

### #1298 — `run_eval.py` recall=0% fix (skill-creator)
**Functionality:** Fixes the `run_eval.py` script that reports 0% recall for all skill descriptions, rendering the description-optimization loop (`run_loop.py`, `improve_description.py`) non-functional. Addresses #556 and 10+ independent reproductions.
**Discussion:** The most active PR in the repository. Addresses a critical bug that prevents skill description optimization from working — the loop optimizes against noise rather than real signals. Multiple contributors have independently reproduced the issue.
**Status:** Open (created 2026-06-10, updated 2026-06-23)
https://github.com/anthropics/skills/pull/1298

### #514 — Document typography skill
**Functionality:** Typographic quality control for AI-generated documents — prevents orphan words, widow paragraphs, and numbering misalignment in generated documents.
**Discussion:** Addresses a common pain point in AI document generation. The author notes these issues affect "every document Claude generates" and that users rarely request typographic fixes.
**Status:** Open (created 2026-03-04, updated 2026-03-13)
https://github.com/anthropics/skills/pull/514

### #486 — ODT skill (OpenDocument text creation)
**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice documents.
**Discussion:** Addresses demand for open-source document format support. Relatively straightforward skill addition with clear trigger definitions.
**Status:** Open (created 2026-03-01, updated 2026-04-14)
https://github.com/anthropics/skills/pull/486

### #210 — Frontend-design skill clarity improvement
**Functionality:** Revises the frontend-design skill to improve clarity, actionability, and internal coherence. Ensures instructions are followable within a single conversation.
**Discussion:** Focuses on skill quality rather than new functionality. The goal is to make guidance specific enough to steer behavior without being overly prescriptive.
**Status:** Open (created 2026-01-05, updated 2026-03-07)
https://github.com/anthropics/skills/pull/210

### #1367 — Self-audit skill (v1.3.0)
**Functionality:** A skill that audits AI output before delivery — mechanical file verification followed by four-dimension reasoning audit in damage-severity priority order. Universal across projects and tech stacks.
**Discussion:** Proposes a structured quality gate pipeline. The skill performs mechanical verification of output files, then applies reasoning quality checks.
**Status:** Open (created 2026-06-28, updated 2026-07-02)
https://github.com/anthropics/skills/pull/1367

### #1479 — Plan-file-hygiene skill
**Functionality:** Addresses accumulation of planning artifacts with no lifecycle management. Built on the framing that planning artifacts need explicit lifecycle handling.
**Discussion:** Credit given to community members @halilxibrahim and @xg-gh-25 for identifying the problem and framing it as a lifecycle gap. Author offers to hand over to @halilxibrahim.
**Status:** Open (created 2026-07-25, updated 2026-07-27)
https://github.com/anthropics/skills/pull/1479

## 2. Community Demand Clusters

### Skill Development Tooling Reliability
Multiple issues report that `run_eval.py` and related scripts `run_loop.py` and `improve_description.py` produce 0% recall across all queries. Issues #556, #1169, and #1323 document this bug with 10+ independent reproductions. The bug prevents skill creators from optimizing skill descriptions, making the skill creation toolchain effectively non-functional for description improvement.

### Security and Trust Boundaries
Issue #492 (43 comments, 2 👍) raises concerns about community skills distributed under the `anthropic/` namespace impersonating official Anthropic skills. This creates a trust boundary vulnerability where users may grant elevated permissions to community skills they believe are official. Issue #1175 raises related concerns about security when handling SharePoint Online documents via agent skills.

### Organizational Skill Sharing
Issue #228 (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai. Currently users must download .skill files and share them manually via Slack/Teams. A shared skill library or direct sharing link is requested.

### Context Window and Token Efficiency
Issue #1487 reports that the `claude-api` skill eagerly injects ~156k tokens, exhausting the context window in a single tool call. Issue #189 describes duplicate skills from overlapping plugin content wasting context window space. Issue #202 criticizes the skill-creator skill's verbose, educational tone as token-inefficient.

### New Skill Proposals
- **Agent governance** (#412): Safety patterns for AI agent systems — policy enforcement, threat detection, trust scoring, audit trails.
- **Compact memory** (#1329): Symbolic notation for compact agent state to reduce context consumption.
- **Reasoning quality gate pipeline** (#1385): Three-gate pipeline for pre-task calibration, adversarial review, and delivery verification.

## 3. Active Pending Skills

### #1298 — `run_eval.py` recall=0% fix (skill-creator)
**Discussion:** Multiple PRs address the same underlying bug. #1298 is the most comprehensive, fixing the eval artifact installation, Windows stream reading, trigger detection, and parallel workers. Related PRs #1323, #1261, #1099, and #1050 address subsets of the same problem. The number of independent fixes suggests the bug is well-understood and has multiple contributors working on solutions.
**Status:** Open since 2026-06-10, updated 2026-06-23
https://github.com/anthropics/skills/pull/1298

### #1323 — `run_eval` trigger detection misses real skill name
**Discussion:** Another fix for the recall=0% bug, specifically addressing how `run_single_query` fails to detect skill triggering. The PR notes that the optimization loop "just returns the original description and never actually improves it" when all candidates are tied at 0% recall.
**Status:** Open since 2026-06-16, updated 2026-06-25
https://github.com/anthropics/skills/pull/1323

### #1261 — Isolate trigger-eval command files from live project registry
**Discussion:** Fixes #1260 — the trigger eval writes synthetic command files into the user's live project `.claude/commands/` directory, causing concurrent Claude Code sessions to pick up eval artifacts. The fix isolates eval files from the live project registry.
**Status:** Open since 2026-06-04, updated 2026-07-08
https://github.com/anthropics/skills/pull/1261

### #1367 — Self-audit skill (v1.3.0)
**Discussion:** Proposes a universal quality audit skill with mechanical file verification and four-dimension reasoning audit. The author has an associated issue #1385 proposing a three-gate pipeline extension. The skill is described as "universal — works with any project, any tech stack, any model."
**Status:** Open since 2026-06-28, updated 2026-07-02
https://github.com/anthropics/skills/pull/1367

### #1479 — Plan-file-hygiene skill
**Discussion:** Addresses the lifecycle gap for planning artifacts. The author explicitly credits community members for identifying the problem, and offers to hand over maintainership. This suggests collaborative development and community-driven skill design.
**Status:** Open since 2026-07-25, updated 2026-07-27
https://github.com/anthropics/skills/pull/1479

## 4. Daily Notes

1. **The `run_eval.py` recall=0% bug is the dominant issue in the repository today.** Five separate PRs (#1298, #1323, #1261, #1099, #1050) and three issues (#556, #1169, #1323) address this bug. The bug renders the skill description optimization loop effectively non-functional — all candidates are scored at 0% recall, so the loop returns the original description unchanged. Multiple independent contributors have reproduced and are working on fixes, suggesting the bug is systemic and well-understood.

2. **Community demand for security and governance features is growing.** Issue #492 (43 comments, the most-commented issue) raises trust boundary concerns about community skills impersonating official Anthropic skills. Issue #412 proposes an agent-governance skill. Issue #1385 proposes a reasoning quality gate pipeline. These indicate community interest in safety and quality assurance patterns for the skills ecosystem.

3. **Context window management remains a recurring concern.** Issue #1487 reports a single skill injecting ~156k tokens. Issue #189 describes duplicate skills from overlapping plugins. Issue #202 criticizes verbose skill documentation. These concerns span tooling bugs, plugin design, and skill authoring practices, suggesting this is a multi-faceted problem without a single obvious solution.