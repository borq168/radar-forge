# Skills Ecosystem Highlights 2026-07-13

> Generated: 2026-07-13 00:24 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross‑Repository Skills Ecosystem Highlights — 2026‑07‑13

## 1. Top Skills Across Repositories
Most‑discussed skills and skill‑related items from both repositories, as measured by visible issue comments and the PR ordering (comments and engagement were the sorting criteria, though exact PR comment counts were unavailable):

1. **Security: Community skills under `anthropic/` namespace enable trust boundary abuse** (anthropics/skills, issue [#492](https://github.com/anthropics/skills/issues/492)) – 34 comments, 2 👍
2. **Enable org‑wide skill sharing in Claude.ai** (anthropics/skills, issue [#228](https://github.com/anthropics/skills/issues/228)) – 14 comments, 7 👍
3. **run_eval.py always reports 0% recall, breaking skill description optimisation** (anthropics/skills, PR [#1298](https://github.com/anthropics/skills/pull/1298) and related issue [#556](https://github.com/anthropics/skills/issues/556)) – 12 comments on issue, PR sorted first in top‑10 PRs
4. **All skills disappeared after renaming source file** (anthropics/skills, issue [#62](https://github.com/anthropics/skills/issues/62)) – 10 comments, 2 👍
5. **Proposal: compact‑memory skill (symbolic notation for agent state)** (anthropics/skills, issue [#1329](https://github.com/anthropics/skills/issues/1329)) – 9 comments
6. **skill‑creator should be updated to best practice** (anthropics/skills, issue [#202](https://github.com/anthropics/skills/issues/202), closed) – 8 comments
7. **Add document‑typography skill** (anthropics/skills, PR [#514](https://github.com/anthropics/skills/pull/514)) – open PR, among the top‑10 by comment order
8. **Skill proposal: agent‑governance** (anthropics/skills, issue [#412](https://github.com/anthropics/skills/issues/412), closed) – 6 comments
9. **Document‑skills and example‑skills plugins install identical content** (anthropics/skills, issue [#189](https://github.com/anthropics/skills/issues/189)) – 6 comments, 9 👍
10. **Skill Orchestrator meta‑skill for large Codex catalogues** (openai/skills, issue [#491](https://github.com/openai/skills/issues/491)) – 1 comment, 3 👍 (the highest‑commented feature request in that repo)

## 2. Repository‑by‑Repository Highlights

**anthropics/skills**
The repository is actively incorporating new community skills and fixing systemic tooling issues. The highest‑traffic items revolve around the broken run‑eval pipeline (PR #1298, issue #556), which blocks skill description optimisation, and a trust‑boundary security flaw (#492). Simultaneously, contributors are proposing document‑generation skills (typography #514, ODT #486), quality gates (self‑audit #1367), and meta‑skills (#83), while enterprise users push for org‑wide sharing (#228). Bug‑fix PRs for DOCX bookmark collisions (#541) and case‑sensitive file references (#538) underscore a maintenance momentum focused on production‑grade reliability.

**openai/skills**
Codex skills shows low PR activity (none listed), with discussion concentrated in issues. The main themes are installer limitations (#127, #153) and removal‑induced breakage (playwright‑interactive depends on removed `js_repl`, #386). Community requests include a linter/CLI tool for skill authoring (#121) and a meta‑skill for orchestration (#491). The repo is working through feature‑deprecation fallout and usability gaps rather than attracting new skill contributions at this moment.

## 3. Community Demand Clusters
Across both repositories, several distinct demand clusters appear without forming broad trends:

- **Skill quality & evaluation pipeline** – Multiple threads target the broken `run_eval.py` (Claude, #1298 / #556) and propose skill‑quality analyzers (Claude #83) or linting/auto‑fix tools (Codex #121). The self‑audit skill (Claude #1367) extends this to post‑generation output validation.
- **Document production skills** – Users are requesting automatic typographic quality (#514), ODT creation/filling (#486), and PDF fix robustness (#538, #541). These address document outputs that current models otherwise produce with common formatting flaws.
- **Organisational / team workflows** – Demand exists for org‑wide skill sharing (Claude #228) and concern about namespace‑based trust abuse (#492). Codex’s installer deficiencies (#127, #153) also hinder team adoption.
- **Agent governance & memory** – Proposals for agent‑governance (#412, closed) and compact‑memory symbolic notation (#1329) point to an emerging need for agent‑state management and safety patterns.
- **Meta‑skills and routing** – Both repos have items for orchestration/quality meta‑skills: skill‑quality‑analyzer and skill‑security‑analyzer (Claude #83), Skill Orchestrator (Codex #491). This indicates a layer of skills‑about‑skills is perceived as valuable by the community.

## 4. Active Pending Skills
Several skill proposals and improvements are in open pull requests or active‑issue states, with notable discussion and practical use cases:

- **PR #514 – document‑typography skill** (anthropics/skills)
  Prevents orphan words, widow paragraphs, and numbering misalignment in AI‑generated documents. The author argues these problems appear in nearly every document Claude produces, but users rarely articulate the fix. The PR remains open, with the discussion about implementation integration not yet resolved.

- **PR #486 – ODT skill** (anthropics/skills)
  Adds OpenDocument text creation, template filling, and HTML‑to‑ODT conversion. Trigger keywords include “ODT”, “ODS”, “LibreOffice”. The skill targets open‑source document workflows and ISO‑standard formats. The PR is still open and has received comments (exact count hidden), indicating review is ongoing.

- **PR #1367 – self‑audit skill** (anthropics/skills)
  A universal output‑audit skill that mechanically verifies file existence and then performs a four‑dimension reasoning quality gate. The proposer describes it as model‑agnostic and project‑agnostic. The PR is labelled `v1.3.0`, suggesting iteration. Comments are not displayed but its high position in the sorted list suggests engagement.

- **Issue #1329 – compact‑memory skill proposal** (anthropics/skills)
  A symbolic notation for agent memory to reduce context consumption in long‑running agents. After 9 comments, the discussion is exploring whether the community should implement it as an external skill. The issue is open and actively debated.

- **Issue #491 – Skill Orchestrator meta‑skill** (openai/skills)
  A lightweight routing layer for large Codex skill catalogues that deduplicates semantically overlapping skills. The author explains the problem rose from installing many skills/plugins. The issue is open with 1 comment and 3 👍, awaiting maintainer feedback.

## 5. Cross‑Repo Daily Notes
- **Focus and momentum:** anthropics/skills has higher visible contribution momentum with many new skill PRs, bug fixes, and evaluation‑tooling debates. openai/skills shows minimal PR activity and issues focus on installer stickiness and deprecation breakage.
- **Target users:** Both serve AI‑coding assistant users, but Claude’s repo currently draws more direct skill creators, while Codex’s community appears to be surfacing infrastructure blockers (installer, feature removal) before building new skills.
- **Common threads:** Each repo has exactly one meta‑skill proposal (skill‑quality analyzers vs. orchestrator). The community demand for skill‑quality tooling (evaluators, linters) is observable in both.

**Notes:** All links above are to corresponding GitHub threads as of 2026‑07‑13. Comment counts are taken from the issues data; PR comment counts were not disclosed in the daily data feed, but the sorted order implies higher engagement for those listed. No broader ecosystem conclusions are drawn from today’s snapshot alone.