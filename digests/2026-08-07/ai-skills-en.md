# Skills Ecosystem Highlights 2026-08-07

> Generated: 2026-08-07 02:10 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report – 2026-08-07

## 1. Top Skills Ranking (by discussion activity)

The following open Pull Requests have attracted the most community attention, based on the “Comments” sorting (though individual comment counts are not shown in the provided data). Each represents a new or improved Skill.

### #1298 – fix(skill-creator): run_eval.py always reports 0% recall
**Functionality:** Fixes the core evaluation script that tests skill description triggering. The bug causes `recall=0%` for every description, making the optimisation loop (run_loop.py, improve_description.py) useless.
**Discussion highlights:** Multiple independent reproductions reported (#556). The PR addresses Windows stream reading, trigger detection, and parallel worker issues.
**Status:** Open since 2026-06-10, updated 2026-06-23.
[GitHub](https://github.com/anthropics/skills/pull/1298)

### #514 – Add document-typography skill
**Functionality:** Prevents orphan words, widowed headers, and numbering misalignment in AI-generated documents – a common problem across all Claude outputs.
**Discussion highlights:** Users note that typographic quality is rarely requested but impacts readability. The skill is designed to be universal.
**Status:** Open since 2026-03-04, updated 2026-03-13.
[GitHub](https://github.com/anthropics/skills/pull/514)

### #1367 – feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate
**Functionality:** A meta-skill that audits AI output before delivery: verifies file existence, then runs a reasoning audit across four dimensions (damage-severity prioritised).
**Discussion highlights:** Universal applicability claimed; complements other quality-focused proposals (#1385).
**Status:** Open since 2026-06-28, updated 2026-07-02.
[GitHub](https://github.com/anthropics/skills/pull/1367)

### #723 – feat: add testing-patterns skill
**Functionality:** Covers the full testing stack: philosophy (Trophy model), unit testing (AAA), React, E2E, and edge cases.
**Discussion highlights:** Addresses a gap in the skills collection for software engineering testing practices.
**Status:** Open since 2026-03-22, updated 2026-04-21.
[GitHub](https://github.com/anthropics/skills/pull/723)

### #525 – Add pyxel skill for retro game development
**Functionality:** Integrates with the Pyxel retro game engine via an MCP server, enabling iterative game creation (write → run → inspect → iterate).
**Discussion highlights:** Niche but complete workflow; author is the creator of the Pyxel MCP server.
**Status:** Open since 2026-03-05, updated 2026-07-15.
[GitHub](https://github.com/anthropics/skills/pull/525)

### #1302 – Add color-expert skill
**Functionality:** Self-contained color expertise covering naming systems, color spaces, harmonies, and accessibility.
**Discussion highlights:** Broad coverage of color knowledge; useful for design, data visualisation, and accessibility tasks.
**Status:** Open since 2026-06-10, updated 2026-07-21.
[GitHub](https://github.com/anthropics/skills/pull/1302)

### #1479 – Add plan-file-hygiene skill
**Functionality:** Addresses the accumulation of planning artifacts (e.g., `.plan.md` files) with no lifecycle management.
**Discussion highlights:** Built on community framing from #1417; credit given to original issue contributors.
**Status:** Open since 2026-07-25, updated 2026-07-27.
[GitHub](https://github.com/anthropics/skills/pull/1479)

---

## 2. Community Demand Clusters (from Issues)

The top 15 issues (by comment count) reveal several recurring themes:

### Security & Trust
- **#492** (43 comments): Community skills distributed under the `anthropic/` namespace create trust boundary abuse. Users may grant elevated permissions to skills they mistake for official Anthropic ones.
- **#1175** (4 comments): Concerns about security and context window when handling SharePoint Online documents via Agent Skills, specifically writing access control logic inside SKILL.md.

### Skill Distribution & Sharing
- **#228** (16 comments): Request for org-wide skill sharing on Claude.ai – currently requires manual file transfer and upload.
- **#189** (6 comments): Duplicate skills when installing both `document-skills` and `example-skills` plugins; expectation that they should be disjoint.

### Skill Creator / Evaluation Tooling
- **#556** (12 comments): `run_eval.py` reports 0% trigger rate for all queries, making the optimisation loop ineffective.
- **#202** (8 comments): `skill-creator` skill reads like developer documentation rather than an operational skill; needs to be rewritten for actionability.
- **#1169** (3 comments): Similar recall=0% report when running `run_loop.py` against skills with defined slash-commands.

### New Skill Proposals
- **#1329** (9 comments): Proposal for a `compact-memory` skill – symbolic notation to reduce context usage by long-running agents.
- **#412** (6 comments): Proposal for `agent-governance` – safety patterns for AI agent systems (policy enforcement, threat detection, audit trails).
- **#1385** (4 comments): Proposal for a three-gate reasoning quality pipeline (pre-task calibration → adversarial review → delivery verification).

### Platform Integration
- **#29** (4 comments): Request for skills to work with AWS Bedrock.
- **#16** (4 comments): Request to expose skills as MCP (Model Context Protocol) tools.

### Document Skills
- **#12** (4 comments): Guidance to avoid whitespace reformatting in DOCX/OOXML skill; reported document corruption.

### Context Window Issues
- **#1487** (4 comments): `claude-api` skill injects ~156k tokens in a single tool call, exhausting the context window.

**Observation:** The most active theme is **security and trust** (#492), followed by **sharing/distribution** (#228) and **skill creator tooling reliability** (#556, #202, #1169). New skill proposals are diverse, with memory management and governance receiving notable interest.

---

## 3. Active Pending Skills (Open PRs with Ongoing Discussion)

Several open PRs have seen recent updates and community discussion, though none are merged yet.

### #1298 – fix(skill-creator): run_eval.py 0% recall
**Discussion:** Multiple contributors have reproduced the bug. The PR attempts to fix Windows stream reading, trigger detection, and parallel worker behaviour. Used by #1099 and #1050 to address related Windows subprocess issues.
**Status:** Open, last updated 2026-06-23.
[GitHub](https://github.com/anthropics/skills/pull/1298)

### #1323 – fix(skill-creator): run_eval trigger detection misses real skill name
**Discussion:** Another fix for the same recall=0% problem, focusing on the trigger detection logic itself.
**Status:** Open, updated 2026-06-25.
[GitHub](https://github.com/anthropics/skills/pull/1323)

### #1261 – fix(skill-creator): isolate trigger-eval command files from live project
**Discussion:** Addresses #1260 – the eval script writes synthetic command files into the user’s live project `.claude/commands/`, causing concurrency issues with other Claude Code sessions.
**Status:** Open, updated 2026-07-08.
[GitHub](https://github.com/anthropics/skills/pull/1261)

### #539 – fix(skill-creator): warn on unquoted description with YAML special characters
**Discussion:** Adds pre-parse validation to catch silent YAML parsing failures when descriptions contain `:`.
**Status:** Open, updated 2026-04-16.
[GitHub](https://github.com/anthropics/skills/pull/539)

### #541 – fix(docx): prevent tracked change w:id collision with existing bookmarks
**Discussion:** Fixes document corruption caused by hardcoded low IDs in OOXML.
**Status:** Open, updated 2026-04-16.
[GitHub](https://github.com/anthropics/skills/pull/541)

### #83 – Add skill-quality-analyzer and skill-security-analyzer to marketplace
**Discussion:** Two meta-skills for evaluating quality and security of other skills. Still open after several months.
**Status:** Open, updated 2026-01-07.
[GitHub](https://github.com/anthropics/skills/pull/83)

**Note:** Several PRs are interrelated – the `run_eval.py` fixes (#1298, #1323, #1261, #1099, #1050) are all attempting to resolve the same core evaluation failure, indicating a persistent pain point in the skill creator workflow.

---

## 4. Daily Notes

- **The `run_eval.py` evaluation pipeline is a critical blocker:** Four open PRs and multiple issues (#556, #1169) directly address the recall=0% bug. This is the most concentrated area of developer activity in the repository today. No single fix has been merged yet, and the problem affects all skill description optimisation.

- **Security and trust boundary concerns are rising:** Issue #492 (43 comments) is the most commented issue in the dataset. The proposal to distribute community skills under the `anthropic/` namespace without clear distinction has sparked significant discussion about trust and permission escalation.

- **No clear trend in new skill domains:** The proposals for new skills (memory, governance, testing, quality gates) are varied and not yet converging on a single direction. The community is exploring multiple independent niches rather than rallying around a few standard workflows.