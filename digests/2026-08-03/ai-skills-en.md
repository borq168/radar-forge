# Skills Ecosystem Highlights 2026-08-03

> Generated: 2026-08-03 00:25 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights — 2026-08-03

## 1. Top Skills Ranking

The following PRs are the most-discussed skills or skill-related contributions in the current dataset, based on issue cross-references, multiple related PRs, and sustained comment activity.

**1. `run_eval.py` recall fix (skill-creator)** — PR #1298
- **Functionality**: Fixes `run_eval.py` which reports 0% recall for every skill description, breaking the description-optimization loop. Addresses a root cause where the eval artifact is not installed as a real skill, plus Windows stream reading, trigger detection, and parallel worker fixes.
- **Discussion**: This is the most cross-referenced PR in the repository. It directly addresses issue #556 (12 comments, 7 👍) and is related to PRs #1099, #1050, #1323, and #1261, all attempting to fix the same recall=0% bug from different angles. The discussion spans Windows compatibility, trigger detection logic, and command file isolation.
- **Status**: Open (created 2026-06-10, updated 2026-06-23). No maintainer merge yet.
- **Link**: https://github.com/anthropics/skills/pull/1298

**2. `self-audit` skill (v1.3.0)** — PR #1367
- **Functionality**: A universal skill that audits AI output before delivery, combining mechanical file verification with a four-dimension reasoning quality audit, prioritized by damage severity. Works with any project, tech stack, or model.
- **Discussion**: The PR proposes a structured quality gate pipeline. The author has also filed issue #1385 proposing a three-gate Reasoning Quality Gate Pipeline, indicating sustained interest in output quality assurance.
- **Status**: Open (created 2026-06-28, updated 2026-07-02). Comments are undefined but linked issue has 4 comments.
- **Link**: https://github.com/anthropics/skills/pull/1367

**3. `document-typography` skill** — PR #514
- **Functionality**: Typographic quality control for AI-generated documents. Prevents orphan word wrap, widow paragraphs, and numbering misalignment—problems that affect every document Claude generates.
- **Discussion**: The PR argues this is a universal issue ("Users rarely ask for good typography, but they notice when it's wrong"). No negative feedback evident in the PR.
- **Status**: Open (created 2026-03-04, updated 2026-03-13). No recent activity.
- **Link**: https://github.com/anthropics/skills/pull/514

**4. `testing-patterns` skill** — PR #723
- **Functionality**: Comprehensive testing skill covering the full stack—testing philosophy (Trophy model), unit testing (AAA pattern), React component testing, and guidance on what to test vs. what not to test.
- **Discussion**: Adds a structured, pedagogical skill for one of the most common developer workflows. No controversy evident.
- **Status**: Open (created 2026-03-22, updated 2026-04-21).
- **Link**: https://github.com/anthropics/skills/pull/723

**5. `color-expert` skill** — PR #1302
- **Functionality**: A self-contained color expertise skill covering color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with a "what to use when" table (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and palette generation.
- **Discussion**: A specialized, domain-rich skill from a known contributor (@meodai). The PR is detailed and well-structured.
- **Status**: Open (created 2026-06-10, updated 2026-07-21).
- **Link**: https://github.com/anthropics/skills/pull/1302

**6. `plan-file-hygiene` skill** — PR #1479
- **Functionality**: Addresses issue #1417 about planning artifacts accumulating in projects with no lifecycle management. The skill provides a lifecycle for planning files (cleanup, archiving, expiration).
- **Discussion**: The PR credits multiple community members for framing the problem as a lifecycle gap. The author explicitly offers to hand off to the original problem-filer.
- **Status**: Open (created 2026-07-25, updated 2026-07-27). Very recent.
- **Link**: https://github.com/anthropics/skills/pull/1479

**7. `skill-quality-analyzer` and `skill-security-analyzer`** — PR #83
- **Functionality**: Two meta-skills for the marketplace. The quality analyzer evaluates skills across Structure & Documentation (20%), plus other dimensions. The security analyzer focuses on trust boundary analysis.
- **Discussion**: An early PR (Nov 2025) that has remained open for 8+ months. The security analyzer is directly relevant to the ongoing security namespace issue (#492).
- **Status**: Open (created 2025-11-06, updated 2026-01-07).
- **Link**: https://github.com/anthropics/skills/pull/83

---

## 2. Community Demand Clusters

From the 50 issues analyzed, the following clusters of unmet demand emerge, each supported by multiple independent items.

**Cluster A: Security and Trust Boundaries** (3 issues)
- **#492** (43 comments, 2 👍): Community skills distributed under the `anthropic/` namespace impersonate official skills, enabling trust boundary abuse. The most-commented issue in the repository.
- **#1175** (4 comments): Concerns about security and context window when handling SharePoint Online documents via Agent Skills, specifically writing access control logic inside SKILL.md.
- **#1487** (4 comments): The `claude-api` skill eagerly injects ~156k tokens, exhausting the context window in a single tool call—a security/efficiency concern.
- **Pattern**: Multiple contributors are independently raising concerns about trust, permissions, and resource exhaustion in the skills ecosystem. The namespace impersonation issue is the most active security discussion.

**Cluster B: Tooling & Infrastructure Reliability** (4 issues)
- **#556** (12 comments, 7 👍): `run_eval.py` reports 0% trigger rate across all queries, making the optimization loop unusable.
- **#1061** (3 comments, 2 👍): Windows compatibility failures in skill-creator scripts (subprocess, encoding, pipe issues).
- **#1169** (3 comments, 1 👍): `recall=0%` on every iteration of the description-optimization loop, including literal slash-command queries.
- **#189** (6 comments, 9 👍): `document-skills` and `example-skills` plugins install identical content, causing duplicate skills.
- **Pattern**: The most concretely reported bugs are in the skill-creator tooling, with three independent reports of the same recall=0% bug and two reports of Windows compatibility issues. This is the highest-frequency bug cluster.

**Cluster C: New Skill Directions** (3 issues)
- **#1329** (9 comments): Proposal for a `compact-memory` skill using symbolic notation for compact agent state, targeting long-running agents that spend too much context on prose notes.
- **#1385** (4 comments): Proposal for a three-gate Reasoning Quality Gate Pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification), building on the PR #1367 `self-audit` skill.
- **#412** (6 comments, closed): Proposal for an `agent-governance` skill covering safety patterns—policy enforcement, threat detection, trust scoring, audit trails.
- **Pattern**: Community members are proposing skills that address agent lifecycle and quality assurance, rather than domain-specific tasks. The proposals are increasingly structured (multi-gate, symbolic notation).

**Cluster D: Platform & Integration** (3 issues)
- **#228** (16 comments, 8 👍): Request for org-wide skill sharing in Claude.ai, eliminating the current download-and-upload workflow.
- **#29** (4 comments): Request for AWS Bedrock compatibility.
- **#16** (4 comments): Request to expose Skills as MCPs.
- **Pattern**: These are integration and distribution requests, not skill content proposals. The org-wide sharing request has the highest 👍 count (8) of any issue.

---

## 3. Active Pending Skills

These are open PRs with active discussion or recent updates that have not yet been merged.

**PR #1298 — `run_eval.py` recall fix** (updated 2026-06-23)
- Multiple fixes to the same broken eval pipeline. The PR is one of at least five PRs (#1099, #1050, #1323, #1261, #1298) addressing the same root cause. No maintainer has merged any of them, suggesting the fix may be more complex than a single PR can address, or the maintainers are evaluating the best approach.
- Link: https://github.com/anthropics/skills/pull/1298

**PR #1367 — `self-audit` skill v1.3.0** (updated 2026-07-02)
- A detailed skill with mechanical verification and reasoning audit. The author has also filed a related proposal issue (#1385). The skill is well-structured and appears to be a serious contribution.
- Link: https://github.com/anthropics/skills/pull/1367

**PR #1479 — `plan-file-hygiene` skill** (updated 2026-07-27)
- Very recent PR (July 25). The author credits multiple community members for the problem framing and offers to hand off authorship. This collaborative tone suggests the PR may be iterated on before merge.
- Link: https://github.com/anthropics/skills/pull/1479

**PR #1302 — `color-expert` skill** (updated 2026-07-21)
- From a known contributor with domain expertise. The PR is well-documented and self-contained. No negative feedback visible.
- Link: https://github.com/anthropics/skills/pull/1302

**PR #1261 — isolate trigger-eval command files** (updated 2026-07-08)
- Fixes a race condition where synthetic command files from the eval script leak into the user's live project `.claude/commands/` directory, causing conflicts with concurrent Claude Code sessions. Addresses issue #1260.
- Link: https://github.com/anthropics/skills/pull/1261

---

## 4. Daily Notes

1. **The `run_eval.py` recall=0% bug is the most-fix-attempted problem in the repository.** Five independent PRs (#1099, #1050, #1323, #1261, #1298) and three issues (#556, #1061, #1169) address the same underlying failure. None have been merged as of August 3, 2026. This suggests the bug is either architecturally deep (not fixable by a single PR) or the maintainers have not yet reviewed the submissions. The skill-creation workflow is effectively broken for all contributors relying on the optimization loop.

2. **Community skill proposals are shifting from domain-specific tasks to agent lifecycle management.** The most active recent proposals (self-audit, compact-memory, plan-file-hygiene, agent-governance) all address how an agent manages its own state, output quality, and file hygiene over time—rather than adding new domain capabilities. This is a single observation from the current data, not a confirmed trend.

3. **The security namespace issue (#492) has the highest comment count (43) of any issue, but has not generated a corresponding PR to fix it.** The issue describes a tangible trust boundary vulnerability (community skills distributed under `anthropic/` namespace), but no one has submitted a PR implementing namespace validation, permission scoping, or origin labeling. This may indicate the fix requires changes to the platform's skill distribution mechanism rather than a repository-level change.