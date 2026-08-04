# Skills Ecosystem Highlights 2026-08-04

> Generated: 2026-08-04 01:00 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-04

## 1. Top Skills Ranking

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
[PR #1298](https://github.com/anthropics/skills/pull/1298)
A comprehensive fix for the `run_eval.py` bug that causes all skill descriptions to score `recall=0%`. The fix addresses the eval artifact installation, Windows stream reading, trigger detection, and parallel worker handling. This is the most actively worked-on PR in the repository, with multiple contributors (MartinCajiao, referencing related fixes by others). The description-optimization loop has been optimizing against noise. **Status:** Open, active discussion.

**#514 — Add document-typography skill**
[PR #514](https://github.com/anthropics/skills/pull/514)
Adds typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. The author notes these issues affect every document Claude generates. **Status:** Open, no recent activity.

**#1367 — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate**
[PR #1367](https://github.com/anthropics/skills/pull/1367)
A universal skill that audits AI output before delivery: mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. The author claims it works with any project, tech stack, or model. **Status:** Open, recent activity (updated 2026-07-02).

**#525 — Add pyxel skill for retro game development**
[PR #525](https://github.com/anthropics/skills/pull/525)
Adds a skill for the Pyxel retro game engine, covering workflow (write → run_and_capture → inspect → iterate). Triggered by requests for retro/pixel-art/8-bit games with Python. **Status:** Open, updated 2026-07-15.

**#1479 — Add plan-file-hygiene skill**
[PR #1479](https://github.com/anthropics/skills/pull/1479)
Addresses the problem of planning artifacts accumulating with no lifecycle. Credits community members for framing the problem as a lifecycle gap. **Status:** Open, recent activity (updated 2026-07-27).

**#1302 — Add color-expert skill**
[PR #1302](https://github.com/anthropics/skills/pull/1302)
A self-contained color-expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with a "what to use when" table (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and more. **Status:** Open, updated 2026-07-21.

**#1261 — fix(skill-creator): isolate trigger-eval command files from the live project registry**
[PR #1261](https://github.com/anthropics/skills/pull/1261)
Fixes #1260: the trigger eval writes synthetic command files into the user's live project `.claude/commands/` directory, causing concurrent Claude Code sessions to pick up eval-created commands. **Status:** Open, updated 2026-07-08.

---

## 2. Community Demand Clusters

**Skill-Creator Tooling Reliability**
Multiple issues report the same fundamental bug: `run_eval.py` reports `recall=0%` for all queries, making the description-optimization loop useless. Issues #556, #1169, #1061, and #202 all describe variations of this problem. The bug affects Windows users especially (subprocess PATHEXT, cp1252 encoding, select on pipes). This is the most active cluster by count.

**Security & Trust Boundary**
Issue #492 (43 comments) raises that community skills are distributed under the `anthropic/` namespace, creating a trust boundary vulnerability where users may grant elevated permissions to community skills they believe are official. Issue #1175 also raises security concerns about handling SharePoint Online documents via Agent Skills. The community is actively discussing namespace governance.

**Organizational Skill Sharing**
Issue #228 (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai. Currently users must manually share `.skill` files via Slack/Teams and have colleagues navigate to Settings > Capabilities to upload. The demand for a shared skill library or direct sharing link is clear.

**Meta-Skills for Quality Assurance**
A cluster of proposals seeks skills that audit AI output quality: Issue #1385 (Reasoning Quality Gate Pipeline), Issue #412 (agent-governance — safety patterns for AI agent systems), and Issue #1329 (compact-memory — symbolic notation for compact agent state). These represent a pattern of community members building on each other's proposals.

**Context Window Management**
Issue #1487 reports that the `claude-api` skill eagerly injects ~156k tokens, exhausting the context window in a single tool call. This is a specific, actionable concern about a bundled skill's behavior.

---

## 3. Active Pending Skills

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
Multiple PRs address the same root problem. #1298 is the most recent and comprehensive, but #1099 and #1050 also target the Windows subprocess and encoding issues. The discussion shows collaboration: #1298 references the earlier fixes and the author has incorporated community feedback. Merge depends on testing and resolving the parallel trigger detection logic.

**#1367 — self-audit skill**
The author has also opened proposal Issue #1385 for a "Reasoning Quality Gate Pipeline" that extends the concept. The PR is in active development with recent updates. The community discussion in #1385 suggests interest in a three-gate pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification).

**#525 — pyxel skill**
No recent comments, but the PR was updated 2026-07-15. The author (kitao) is also the maintainer of the pyxel-mcp server and the Pyxel engine itself, so the skill is well-supported. Likely awaiting review.

**#1479 — plan-file-hygiene skill**
The author explicitly credits community members for the problem framing and offers to hand off authorship. This suggests a collaborative, community-driven development process. The PR was updated 2026-07-27.

**#1302 — color-expert skill**
The author (meodai) is a known color systems contributor. The PR has been updated recently (2026-07-21) and covers a comprehensive color knowledge domain. No major blockers visible.

**#1261 — fix(skill-creator): isolate trigger-eval command files**
Fixes an active bug where eval-created commands collide with user's live project. The fix is targeted and well-scoped. Discussion is minimal but the bug is clearly documented.

---

## 4. Daily Notes

- **The `run_eval.py` recall=0% bug is the dominant active issue in the repository.** Five PRs and three Issues directly address it, representing the largest coordinated effort to fix a single problem. The bug affects the core skill development workflow — the description-optimization loop — and has been independently reproduced by multiple contributors.

- **Community skills are evolving toward "meta-skills" that audit AI output quality.** The self-audit PR (#1367), the reasoning quality gate proposal (#1385), and the agent-governance proposal (#412) form a pattern of community members building skills that monitor and validate other AI-generated content. This is a distinct cluster but based on only three items.

- **No clear signal on organizational adoption or enterprise usage.** While Issue #228 requests org-wide sharing, there are no enterprise-focused PRs or detailed enterprise use cases in the data. The community remains predominantly individual contributors and open-source developers.