# Skills Ecosystem Highlights 2026-08-10

> Generated: 2026-08-10 01:03 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-10

## 1. Top Skills Ranking

Based on comment activity, the following 8 Skills (represented by Pull Requests) are the most discussed in the repository:

**1. `document-typography` (#514)**
- **Functionality**: Typographic quality control for AI-generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment.
- **Discussion highlights**: Addresses a class of visual formatting issues that affect every Claude-generated document. The skill targets a gap not covered by existing document skills.
- **Status**: Open, not merged. Last updated 2026-03-13.
- [https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)

**2. `odt` (#486)**
- **Functionality**: OpenDocument Text (.odt, .ods) creation, template filling, and conversion to HTML.
- **Discussion highlights**: Covers a format not previously supported in the skills collection. Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice document".
- **Status**: Open, not merged. Last updated 2026-04-14.
- [https://github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)

**3. `frontend-design` improvement (#210)**
- **Functionality**: Revises the existing frontend-design skill to improve clarity, actionability, and internal coherence.
- **Discussion highlights**: Focuses on ensuring every instruction is actionable within a single Claude conversation and specific enough to steer behavior without ambiguity.
- **Status**: Open, not merged. Last updated 2026-03-07.
- [https://github.com/anthropics/skills/pull/210](https://github.com/anthropics/skills/pull/210)

**4. `skill-quality-analyzer` and `skill-security-analyzer` (#83)**
- **Functionality**: Two meta-skills for evaluating other skills. The quality analyzer covers structure & documentation (20%), and the security analyzer covers security patterns.
- **Discussion highlights**: Adds a meta-layer to the skills ecosystem. Discussion likely centers on quality metrics and security evaluation criteria.
- **Status**: Open, not merged. Last updated 2026-01-07.
- [https://github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)

**5. `self-audit` (#1367)**
- **Functionality**: Mechanical file verification plus a four-dimension reasoning quality audit in damage-severity priority order. Universal across projects, tech stacks, and models.
- **Discussion highlights**: Proposes a delivery verification gate that runs before output is finalized. Step 0 verifies every claimed output file exists.
- **Status**: Open, not merged. Last updated 2026-07-02.
- [https://github.com/anthropics/skills/pull/1367](https://github.com/anthropics/skills/pull/1367)

**6. `testing-patterns` (#723)**
- **Functionality**: Comprehensive testing skill covering the full testing stack — testing philosophy (Trophy model), unit testing (AAA pattern), React component testing, and edge cases.
- **Discussion highlights**: Addresses a gap in the skills collection around testing methodology and patterns.
- **Status**: Open, not merged. Last updated 2026-04-21.
- [https://github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)

**7. `pyxel` (#525)**
- **Functionality**: Skill for retro game development using the Pyxel engine and its MCP server. Covers the workflow: write → run_and_capture → inspect → iterate.
- **Discussion highlights**: Adds support for a specific game development framework. Triggers on requests for retro/pixel-art/8-bit games with Python.
- **Status**: Open, not merged. Last updated 2026-07-15.
- [https://github.com/anthropics/skills/pull/525](https://github.com/anthropics/skills/pull/525)

**8. `plan-file-hygiene` (#1479)**
- **Functionality**: Addresses planning artifact accumulation — skills that generate planning artifacts with no lifecycle management.
- **Discussion highlights**: Built on the framing that planning artifacts accumulate with no lifecycle, as identified by community members @halilxibrahim and @xg-gh-25.
- **Status**: Open, not merged. Last updated 2026-07-27.
- [https://github.com/anthropics/skills/pull/1479](https://github.com/anthropics/skills/pull/1479)

---

## 2. Community Demand Clusters

From 50 Issues, the following demand directions are most frequently mentioned:

**Security and Trust Boundary** (#492, #1175)
- Issue #492 (43 comments) describes community skills distributed under the `anthropic/` namespace, creating a trust boundary vulnerability where users may grant elevated permissions to community skills they believe are official.
- Issue #1175 (4 comments) raises concerns about security and context window handling when processing SharePoint Online documents via Agent Skills, specifically around writing access control logic directly in SKILL.md.
- These are distinct concerns — one about namespace trust, the other about access control implementation — but both center on security boundaries.

**New Skill Proposals** (#1329, #412, #1385)
- #1329: `compact-memory` — symbolic notation for compact agent state, aimed at reducing context consumption from long-running agent notes.
- #412: `agent-governance` — safety patterns for AI agent systems including policy enforcement, threat detection, trust scoring, and audit trails.
- #1385: Reasoning Quality Gate Pipeline — a three-gate pipeline covering pre-task calibration, adversarial review, and delivery verification.
- These proposals represent independent directions (memory efficiency, safety governance, output quality) rather than a single cluster.

**Integration and Platform** (#16, #29)
- #16: Request to expose Skills as MCPs (Model Context Protocol), suggesting MCP as a way to signal the API of all software.
- #29: Question about using Skills with AWS Bedrock.
- These are small (4 comments each) but represent ongoing interest in platform integration.

---

## 3. Active Pending Skills

PRs with active discussion that remain unmerged:

**`fix(skill-creator): run_eval.py always reports 0% recall` (#1298)**
- **Discussion**: Addresses the `run_eval.py` bug where recall is reported as 0% for every skill description regardless of content. The fix involves installing the eval artifact as a real skill, fixing Windows stream reading, trigger detection, and parallel workers. Referenced in issues #556, #1169, and multiple independent reproductions. The description-optimization loop is currently optimizing against noise.
- **Status**: Open since 2026-06-10, last updated 2026-06-23.
- [https://github.com/anthropics/skills/pull/1298](https://github.com/anthropics/skills/pull/1298)

**`fix(skill-creator): isolate trigger-eval command files from the live project registry` (#1261)**
- **Discussion**: Fixes issue #1260 — the trigger eval writes synthetic command files into the user's live project `.claude/commands/` directory, causing concurrent Claude Code sessions to see partial eval state. The fix isolates these files.
- **Status**: Open since 2026-06-04, last updated 2026-07-08.
- [https://github.com/anthropics/skills/pull/1261](https://github.com/anthropics/skills/pull/1261)

**`feat(skills): add self-audit` (#1367)**
- **Discussion**: Adds a four-dimension reasoning quality gate. The PR description emphasizes it is universal — works with any project, any tech stack, any model. Discussion likely focuses on the mechanical verification step and the damage-severity ordering.
- **Status**: Open since 2026-06-28, last updated 2026-07-02.
- [https://github.com/anthropics/skills/pull/1367](https://github.com/anthropics/skills/pull/1367)

**`Add plan-file-hygiene skill` (#1479)**
- **Discussion**: Addresses issue #1417. The PR credits community members for framing the problem as a lifecycle gap. Discussion includes whether the original proposer wants to take a first pass, with the author offering to hand over.
- **Status**: Open since 2026-07-25, last updated 2026-07-27.
- [https://github.com/anthropics/skills/pull/1479](https://github.com/anthropics/skills/pull/1479)

---

## 4. Daily Notes

1. **The `run_eval.py` zero-recall bug is the most active cross-cutting issue in the repository.** Three distinct PRs (#1298, #1323, #1099) and two issues (#556, #1169) address the same fundamental problem: the evaluation script reports 0% recall for every query, making the description-optimization loop effectively random. The PRs propose different fixes (Windows compatibility, trigger detection logic, eval artifact installation), suggesting the root cause may involve multiple failure modes.

2. **Security concerns around the skills distribution model are gaining attention.** Issue #492 (43 comments, the highest of any issue) raises a trust boundary vulnerability where community skills under the `anthropic/` namespace could impersonate official skills. This is a distinct concern from the SPO security discussion in #1175, but both indicate growing awareness of the trust implications of the skills ecosystem.

3. **The `document-typography` skill (#514) is the most discussed new skill proposal.** It addresses a class of visual formatting problems (orphans, widows, misalignment) that affect every AI-generated document and are not covered by existing document skills. With no maintainer response visible in the data, it remains open after five months.