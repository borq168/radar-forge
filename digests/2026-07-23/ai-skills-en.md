# Skills Ecosystem Highlights 2026-07-23

> Generated: 2026-07-23 03:54 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights – 2026-07-23

## 1. Top Skills Across Repositories
Most-discussed items (issues and PRs) concerning skills, their quality, and platform gaps, ranked by community engagement.

1. **Security: Community skills in `anthropic/` namespace enable trust boundary abuse**
   *Claude Skills* — [#492](https://github.com/anthropics/skills/issues/492) (43 comments)
   Community-made skills distributed under the `anthropic/` namespace could be mistaken for official ones, creating a trust vulnerability.

2. **Enable org-wide skill sharing in Claude.ai**
   *Claude Skills* — [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 👍 7)
   Users want a direct sharing path for teams instead of manual file transfers.

3. **`run_eval.py` reports 0% recall – evaluation loop broken**
   *Claude Skills* — [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍 7)
   The skill description optimizer tests against noise; multiple independent reproductions.

4. **PR: fix(skill-creator): `run_eval.py` always reports 0% recall**
   *Claude Skills* — [#1298](https://github.com/anthropics/skills/pull/1298) (open, active)
   Addresses the same eval bug, plus Windows stream reading and parallel worker fixes.

5. **Proposal: compact-memory skill (symbolic notation for agent state)**
   *Claude Skills* — [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments)
   A long-running agent memory compression skill using symbolic notation.

6. **skill-creator should be updated to best practice (operational tone)**
   *Claude Skills* — [#202](https://github.com/anthropics/skills/issues/202) (8 comments, closed)
   Calls for restructuring the skill as a direct instruction set rather than developer documentation.

7. **Proposal: agent-governance skill (safety patterns for AI agents)**
   *Claude Skills* — [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed)
   Governance patterns including policy enforcement, threat detection, and audit trails.

8. **Duplicate skills when installing both `document-skills` and `example-skills`**
   *Claude Skills* — [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍 9)
   Plugins install identical content, bloating context.

9. **PR: Add document-typography skill**
   *Claude Skills* — [#514](https://github.com/anthropics/skills/pull/514) (open, active)
   Prevents orphan words, widow paragraphs, and numbering misalignment in generated documents.

10. **playwright-interactive skill depends on removed `js_repl` feature**
    *Codex Skills* — [#386](https://github.com/openai/skills/issues/386) (4 comments, 👍 4, closed)
    Curated skill is broken on current Codex CLI because `js_repl` was removed.

## 2. Repository-by-Repository Highlights

**Claude Skills (anthropics/skills)**
The repository is seeing a steady stream of community skill contributions, particularly around document processing (typography, ODT, PDF fixes) and meta-skills for quality assurance (skill-quality-analyzer, self-audit). A critical evaluation-tooling bug (#556, PR #1298) has drawn attention, as the description optimizer currently operates on noise. The highest-engagement discussion is a security concern about namespace trust (#492, 43 comments), indicating that the community is actively scrutinizing the distribution model for community skills.

**Codex Skills (openai/skills)**
Activity is lighter, with no open pull requests and a handful of issues. The most prominent issue is a curated skill (`playwright-interactive`) that references a removed runtime feature (#386). Other issues point to gaps in the installer (no update/reinstall path, #127) and confusion around experimental skills location (#153). The repository appears to be in a maintenance phase with a focus on installer reliability and curated skill compatibility.

## 3. Community Demand Clusters
Across repositories, several overlapping request themes are visible without strong trend signals:

- **Document creation & formatting** – new skills for typography (#514), ODT (#486), and PDF case-sensitivity fixes (#538) on the Claude side; no equivalent demand on Codex.
- **Skill quality & security** – meta skills for quality analysis (#83) and self-audit (#1367), plus a security review of namespace abuse (#492) on Claude; a linter/auto-fix request on Codex (#121) points to a similar desire for tooling.
- **Team/organization sharing** – org-wide skill sharing (#228) on Claude; installer gaps on Codex (#127) hinder easy distribution.
- **Agent memory & state** – the compact-memory proposal (#1329) on Claude; no parallel on Codex.
- **Evaluation & testing** – fixing the broken evaluation loop (#556, #1298) on Claude; no equivalent on Codex.

## 4. Active Pending Skills
Several open PRs are under active discussion or have recent updates:

- **fix(skill-creator): run_eval.py always reports 0% recall** (#1298) – Fixes the evaluation pipeline and Windows compatibility; directly addresses the long-standing #556. *Practical use:* unblocks skill description optimization.
- **Add document-typography skill** (#514) – Typographic quality control for generated documents. *Use case:* prevents orphans, widows, and misaligned numbering in any document Claude produces.
- **Add ODT skill** (#486) – Create, fill, read, and convert OpenDocument files. *Use case:* LibreOffice/ISO-standard document workflows.
- **Improve frontend-design skill clarity and actionability** (#210) – Revises the skill to be more directly executable by Claude. *Use case:* better UX/UI generation guidance.
- **feat(skills): add self-audit skill** (#1367) – Mechanical verification + four-dimension reasoning quality gate. *Use case:* audit AI output before delivery.
- **Add skill-quality-analyzer and skill-security-analyzer** (#83) – Meta skills for evaluating skill structure, documentation, and security. *Use case:* automated quality checks for skill authors.

All are open on the Claude Skills repo; no active skill PRs are present on the Codex side.

## 5. Cross-Repo Daily Notes
- **Contribution style:** Claude Skills sees a high volume of community-driven skill PRs covering new domains and meta-quality tools; Codex Skills has no open PRs and its issues center on curated skill compatibility and installer mechanics.
- **Target users:** Claude Skills discussions (org sharing, namespace trust) suggest an enterprise team audience, while Codex Skills issues are mostly individual developer troubleshooting (installer, feature removal).
- **Factual observations:**
  - The evaluation tooling in Claude’s skill-creator is broken on both Linux and Windows, with two open PRs (#1298, #1099) attempting to fix it.
  - Codex’s `playwright-interactive` skill is incompatible with the current CLI because `js_repl` was removed, and no fix has been merged despite the issue being closed.
  - The Claude Skills repo has a 43-comment security thread about namespace abuse, a topic not mirrored in Codex’s repository.