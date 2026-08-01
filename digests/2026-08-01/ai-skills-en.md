# Skills Ecosystem Highlights 2026-08-01

> Generated: 2026-08-01 08:16 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-01

## 1. Top Skills Ranking

The following PRs represent the most-discussed Skill contributions in the repository. All are currently open.

### #1298 — Fix `run_eval.py` always reporting 0% recall
- **Skill area:** `skill-creator` (meta-tooling)
- **Functionality:** Comprehensive fix for the eval pipeline that installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel worker race conditions. Addresses the root cause of `recall=0%` for every description (#556).
- **Discussion highlights:** The most significant PR in the repository by volume. Multiple independent reproductions confirm the eval loop is optimizing against noise. The fix touches the core tooling that all skill authors depend on.
- **Status:** Open; last updated 2026-06-23
- **Link:** https://github.com/anthropics/skills/pull/1298

### #514 — Add document-typography skill
- **Skill area:** Document generation
- **Functionality:** Quality control for AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Covers common typographic issues in Claude-generated output.
- **Discussion highlights:** Addresses a universal pain point across document types. The PR notes these issues "affect every document Claude generates."
- **Status:** Open; last updated 2026-03-13
- **Link:** https://github.com/anthropics/skills/pull/514

### #486 — Add ODT skill (OpenDocument text creation and template filling)
- **Skill area:** Document format support
- **Functionality:** Creates, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, OpenDocument, LibreOffice.
- **Discussion highlights:** Fills a gap in document format coverage beyond the existing DOCX and PDF skills. Includes template filling and ODT-to-HTML conversion.
- **Status:** Open; last updated 2026-04-14
- **Link:** https://github.com/anthropics/skills/pull/486

### #210 — Improve frontend-design skill clarity and actionability
- **Skill area:** Frontend design
- **Functionality:** Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation, with specific guidance to steer Claude behavior.
- **Discussion highlights:** Focuses on skill quality itself — ensuring instructions are concrete enough for Claude to follow. Raises questions about how skills should be structured for reliability.
- **Status:** Open; last updated 2026-03-07
- **Link:** https://github.com/anthropics/skills/pull/210

### #83 — Add skill-quality-analyzer and skill-security-analyzer
- **Skill area:** Meta skills (quality and security analysis)
- **Functionality:** Two meta skills: (1) skill-quality-analyzer evaluates skills across five dimensions (Structure & Documentation, etc.), (2) skill-security-analyzer assesses security posture. Both are designed for the marketplace.
- **Discussion highlights:** Proposes a self-review mechanism for the skill ecosystem. The quality analyzer defines explicit scoring criteria, which could become a de facto standard for skill submissions.
- **Status:** Open; last updated 2026-01-07
- **Link:** https://github.com/anthropics/skills/pull/83

### #1367 — Add self-audit skill (mechanical verification + four-dimension reasoning quality gate)
- **Skill area:** Output quality assurance
- **Functionality:** A universal skill that audits AI output before delivery — mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Works with any project or tech stack.
- **Discussion highlights:** Proposes a structured quality gate pipeline. The author has also filed a related issue (#1385) proposing a three-gate pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification).
- **Status:** Open; last updated 2026-07-02
- **Link:** https://github.com/anthropics/skills/pull/1367

### #723 — Add testing-patterns skill
- **Skill area:** Software testing
- **Functionality:** Comprehensive testing skill covering testing philosophy (Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and edge cases.
- **Discussion highlights:** Broad coverage of the testing stack. The skill defines what to test vs. what NOT to test, addressing a common gap in AI-generated test suites.
- **Status:** Open; last updated 2026-04-21
- **Link:** https://github.com/anthropics/skills/pull/723

### #525 — Add pyxel skill for retro game development
- **Skill area:** Game development
- **Functionality:** Skill for the Pyxel retro game engine (via pyxel-mcp MCP server). Covers workflow: write → run_and_capture → inspect → iterate.
- **Discussion highlights:** Represents a new category (game development) in the skills collection. Integrates with an MCP server, showing a pattern for skills that rely on external tools.
- **Status:** Open; last updated 2026-07-15
- **Link:** https://github.com/anthropics/skills/pull/525

## 2. Community Demand Clusters

The following grouped demands emerge from the Issues dataset (50 total, top 15 shown). These are observations, not confirmed trends.

### Security and trust boundary concerns
- **#492** (43 comments, 2 👍): Community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability. Users may grant elevated permissions to skills they believe are official. This is the most-commented issue in the repository.
- **#1175** (4 comments): Concerns about writing access control and permission logic directly in SKILL.md files when handling SharePoint Online documents via Agent Skills.
- **Link:** https://github.com/anthropics/skills/issues/492

### Skill-creator tooling reliability (Windows and cross-platform)
- **#556** (12 comments, 7 👍): `run_eval.py` reports 0% trigger rate across all queries. Multiple users independently reproduced this.
- **#1061** (3 comments, 2 👍): Three specific Windows compatibility issues in `run_eval.py`: subprocess PATHEXT, cp1252 encoding, and `select` on pipes.
- **#1169** (3 comments, 1 👍): `skill-creator` description-optimization loop reports `recall=0%` on every iteration, including literal slash-command queries.
- **#202** (8 comments, closed): Request to update `skill-creator` to best practices — it reads more like developer documentation than an operational skill.
- **Link:** https://github.com/anthropics/skills/issues/556

### Skill sharing and distribution
- **#228** (16 comments, 8 👍): Request for org-wide skill sharing in Claude.ai — currently users must download .skill files and send via Slack/Teams, then manually import.
- **#189** (6 comments, 9 👍): `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in Claude Code's context window.
- **#16** (4 comments): Request to expose Skills as MCPs, using a standard protocol for creating and packaging AI software.
- **Link:** https://github.com/anthropics/skills/issues/228

### New skill proposals
- **#1329** (9 comments): Proposal for `compact-memory` — symbolic notation for compact agent state, addressing context window usage from long-running agents.
- **#412** (6 comments, closed): Proposal for `agent-governance` — safety patterns for AI agent systems (policy enforcement, threat detection, trust scoring, audit trails).
- **#1385** (3 comments): Proposal for a Reasoning Quality Gate Pipeline — three-gate pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification).
- **Link:** https://github.com/anthropics/skills/issues/1329

### Context window and resource management
- **#1487** (4 comments): `claude-api` skill eagerly injects ~156k tokens, exhausting the context window in a single tool call. Environment: Claude Code 2.1.220.
- **Link:** https://github.com/anthropics/skills/issues/1487

## 3. Active Pending Skills

These PRs have active discussion threads and are not yet merged. Descriptions include current state without predicting landing time.

### #1298 — Fix `run_eval.py` 0% recall (discussed above)
- **Current discussion:** The PR consolidates fixes for multiple root causes (installation, Windows, trigger detection, parallel workers). The breadth of changes may require careful review. 0 comments listed but the issue references (#556) show 12+ independent reproductions, suggesting community urgency.
- **Status:** Open since 2026-06-10, last updated 2026-06-23
- **Link:** https://github.com/anthropics/skills/pull/1298

### #1367 — Self-audit skill (discussed above)
- **Current discussion:** Proposes a universal skill for mechanical verification + reasoning audit. The author has also filed a related issue (#1385) proposing a three-gate pipeline, suggesting active iteration on the concept. The PR is versioned as v1.3.0.
- **Status:** Open since 2026-06-28, last updated 2026-07-02
- **Link:** https://github.com/anthropics/skills/pull/1367

### #1479 — Add plan-file-hygiene skill
- **Functionality:** Addresses planning artifacts that accumulate with no lifecycle (issue #1417). Credits community members for naming the problem and framing it as a lifecycle gap.
- **Current discussion:** The author explicitly offers to hand off to another contributor who expressed interest in taking a first pass. This suggests collaborative development rather than a single-author submission.
- **Status:** Open since 2026-07-25, last updated 2026-07-27
- **Link:** https://github.com/anthropics/skills/pull/1479

### #1302 — Add color-expert skill
- **Functionality:** Self-contained color expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with "what to use when" guidance (OKLCH for scales, OKLAB for gradients, CAM16 for perception).
- **Current discussion:** A specialized domain skill with detailed reference material. The author has maintained the skill (last updated 2026-07-21), suggesting ongoing refinement.
- **Status:** Open since 2026-06-10, last updated 2026-07-21
- **Link:** https://github.com/anthropics/skills/pull/1302

### #1261 — Isolate trigger-eval command files from the live project registry
- **Functionality:** Fixes issue #1260 where the trigger eval writes synthetic command files into the user's live project `.claude/commands/` directory, causing concurrent Claude Code sessions to pick up eval artifacts.
- **Current discussion:** Addresses a race condition in the eval tooling. Multiple PRs (#1298, #1323) touch similar areas of `run_eval.py`, suggesting coordination may be needed.
- **Status:** Open since 2026-06-04, last updated 2026-07-08
- **Link:** https://github.com/anthropics/skills/pull/1261

### #1323 — Fix `run_eval` trigger detection misses real skill name
- **Functionality:** Fixes `run_single_query` failing to detect skill triggers, causing the optimization loop to report `recall=0%` for every should-trigger query. All candidates tied at 0 means the loop returns the original description unchanged.
- **Current discussion:** Overlaps with #1298 and #1261 in addressing the same `run_eval.py` recall=0% problem. The three PRs may be competing or complementary fixes.
- **Status:** Open since 2026-06-16, last updated 2026-06-25
- **Link:** https://github.com/anthropics/skills/pull/1323

## 4. Daily Notes

1. **The `run_eval.py` 0% recall bug is the single most-impactful issue in the repository.** Multiple PRs (#1298, #1099, #1050, #1323, #1261) and issues (#556, #1169, #1061) all address the same fundamental problem: the skill-creator's evaluation loop cannot detect skill triggers, making the description-optimization pipeline effectively broken for all skill authors. The proliferation of parallel fixes suggests the maintainers have not yet merged a solution, and the community is producing competing or complementary approaches.

2. **Windows compatibility is a recurring failure mode in the skill-creator tooling.** Three separate issues (#1061, #556, #1169) and multiple PRs (#1050, #1099, #1298) identify Unix-specific assumptions in `subprocess.Popen`, encoding handling, and pipe I/O. The `claude` CLI ships as `claude.cmd` on Windows, which Python's `subprocess` does not resolve via `PATHEXT` — a 1-line fix that has been proposed multiple times but not yet merged.

3. **Security concerns around the skill distribution model are the most-discussed topic in the Issues tracker.** Issue #492 (43 comments) identifies a trust boundary vulnerability where community skills impersonate official Anthropic skills under the `anthropic/` namespace. This is the highest-comment-count issue in the dataset. The related issue #1175 raises concerns about embedding access control logic directly in SKILL.md files. No clear consensus on mitigation has emerged from the discussion.