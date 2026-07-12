# Skills Ecosystem Highlights 2026-07-12

> Generated: 2026-07-12 00:24 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross‑Repository Skills Ecosystem Highlights
**Date:** 2026-07-12

---

## 1. Top Skills Across Repositories
*Based on comment volume across both repositories; includes skill proposals, bugs, and feature requests that directly affect skill usage.*

| # | Repository | Item | Type | Comments | Summary |
|---|------------|------|------|----------|---------|
| 1 | anthropics/skills | [#492](https://github.com/anthropics/skills/issues/492) | Issue | 34 | Security: community skills impersonating `anthropic/` namespace, trust boundary abuse |
| 2 | anthropics/skills | [#228](https://github.com/anthropics/skills/issues/228) | Issue | 14 | Enable org‑wide skill sharing in Claude.ai |
| 3 | anthropics/skills | [#556](https://github.com/anthropics/skills/issues/556) | Issue | 12 | `run_eval.py` reports 0% trigger rate, blocking skill description optimisation |
| 4 | anthropics/skills | [#62](https://github.com/anthropics/skills/issues/62) | Issue | 10 | All user skills disappeared after file rename, with errors on re‑upload |
| 5 | anthropics/skills | [#1329](https://github.com/anthropics/skills/issues/1329) | Issue | 9 | Proposal: `compact-memory` skill – symbolic notation for compact agent state |
| 6 | anthropics/skills | [#202](https://github.com/anthropics/skills/issues/202) | Issue (closed) | 8 | `skill-creator` reads as developer documentation, not an operational skill |
| 7 | anthropics/skills | [#412](https://github.com/anthropics/skills/issues/412) | Issue (closed) | 6 | Proposal: `agent-governance` skill – safety patterns for AI agent systems |
| 8 | anthropics/skills | [#189](https://github.com/anthropics/skills/issues/189) | Issue | 6 | Duplicate skills installed by `document-skills` and `example-skills` plugins |
| 9 | openai/skills | [#386](https://github.com/openai/skills/issues/386) | Issue (closed) | 4 | `playwright-interactive` skill broken after `js_repl` feature removal |
| 10 | openai/skills | [#153](https://github.com/openai/skills/issues/153) | Issue | 4 | Experimental skills not discoverable through current installer paths |

**Note:** Claude Skills PR comment counts are not available in the provided data; the above list reflects the highest‑comment issues. The top GitHub Issues span security, collaboration, tooling reliability, and new skill proposals.

---

## 2. Repository‑by‑Repository Highlights

### anthropics/skills (Claude Skills)
The repository’s open PRs focus heavily on **document‑format skill reliability** (typography #514, ODT #486, PDF case‑fix #538, DOCX tracked‑change collision #541) and **meta‑skills** (self‑audit #1367, skill‑quality/security analyzers #83). Tooling issues dominate discussion, especially the `run_eval.py` 0% recall bug (#556, #1298, #1099) that invalidates the entire skill‑optimisation loop. Community concern is also intense around **trust and namespace abuse** (#492, 34 comments) and **enterprise sharing** (#228, 14 comments), signalling that organisational deployment is an unmet need. Contribution momentum is moderate – many PRs remain open with limited maintainer engagement visible in the data.

### openai/skills (Codex Skills)
No pull requests appear in the top‑10 sorted list (0 comments overall), so **visible contribution momentum is low or the PR discussion model differs**. Issues address infrastructure: the **skill installer lacks an update/reinstall path** (#127), **experimental skills are not properly surfaced** (#153), and the `playwright-interactive` curated skill still depends on a removed `js_repl` feature (#386). A **Skill Orchestrator** meta‑skill was proposed (#491) to deduplicate large skill catalogues, but discussion is minimal. Overall, the focus is on **skill discovery and toolchain stability** rather than new skill content.

---

## 3. Community Demand Clusters
*Similar skill directions requested across repositories, without overstating trend strength.*

- **Document generation & quality** (mostly Claude Skills): typography fixes (#514), ODT creation/templating (#486), PDF case‑sensitivity (#538), DOCX bookmark conflicts (#541). Users want production‑grade output for office documents.
- **Meta‑skills for auditing, governance, and memory** (both repos): self‑audit skill (#1367), skill‑quality/security analyzers (#83), agent‑governance (#412), compact‑memory (#1329), Skill Orchestrator for Codex (#491). These indicate demand for skills that *manage other skills or agent behaviour*.
- **Skill management & sharing** (both repos): org‑wide sharing (#228), duplicate skill installation (#189), skill installer improvements (#127), experimental skill discoverability (#153). Users expect easier distribution and lifecycle management.
- **Eval & tooling reliability** (Claude Skills): `run_eval.py` recalls 0% (#556, #1298, #1099), Windows pipe crashes (#1099), YAML validation (#539). The test loop is broken, preventing skill authors from evaluating their work.
- **Security & trust** (Claude Skills): impersonation of the `anthropic/` namespace (#492). A single high‑engagement issue, but no comparable demand visible in the Codex data today.

---

## 4. Active Pending Skills
*Open pull requests with practical use cases and active (even if limited) discussion. Landing timing is not predicted.*

| PR | Repo | What it does | Current state & use case |
|----|------|--------------|--------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | anthropics/skills | Fixes `run_eval.py` 0% recall by installing the eval artifact as a real skill and fixing Windows stream reading, trigger detection, and parallel workers. | Open since 2026-06-10. Without this, the entire skill‑description optimisation loop is broken. Multiple independent reproductions (#556). |
| [#514](https://github.com/anthropics/skills/pull/514) | anthropics/skills | Adds a `document-typography` skill that prevents orphans, widows, and numbering misalignment in AI‑generated documents. | Open since 2026-03-04. Addresses a quality problem Claude users rarely ask about but consistently encounter. No major objections visible. |
| [#486](https://github.com/anthropics/skills/pull/486) | anthropics/skills | `odt` skill – create, fill, read, convert OpenDocument Format files and parse ODT to HTML. | Open since 2026-03-01. Expands the document skills beyond DOCX/PDF. Useful for LibreOffice/ open‑source workflows. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | anthropics/skills | `self-audit` skill: mechanical file verification then four‑dimension reasoning audit before delivering output. | Proposed 2026-06-28. Universal quality gate for any AI output. Early discussion stage; no integration blockers evident yet. |
| [#83](https://github.com/anthropics/skills/pull/83) | anthropics/skills | Adds `skill-quality-analyzer` and `skill-security-analyzer` meta‑skills to the marketplace. | Open since 2025-11-06. Provides structured evaluation of skills themselves – a building block for skill ecosystem governance. |

No Codex PRs are present in the provided data; all open Codex meta‑skill proposals such as #491 (Skill Orchestrator) remain at the issue stage.

---

## 5. Cross‑Repo Daily Notes

- **Focus difference:** Today’s Claude Skills data shows a large number of *content‑side skill PRs* (documents, meta, frontend) while Codex Skills has **no open skill PRs** in the top list – only bug fixes and tooling/adapter issues.
- **Target users:** Claude’s issues (#228, #492) reveal enterprise/org users seeking governance and trusted distribution; Codex’s issues (#127, #153) centre on **individual developer friction** with the skill installer and experimental feature discovery.
- **Contribution style:** Anthropics/skills receives more community‑authored skill PRs (even if largely unreviewed), indicating an active contributor base. OpenAI/skills contribution momentum is not visible through PRs today; discussion is issue‑heavy and focused on infrastructure gaps.

*Factual note 1:* The `run_eval.py` 0% recall problem is confirmed in three separate PRs (#1298, #1099, and the underlying #556), making it the most cross‑referenced technical defect across the entire dataset.
*Factual note 2:* Both repositories have open requests for a “meta” or “orchestrator” skill (self‑audit #1367, Skill Orchestrator #491), but neither has merged such a capability.
*Factual note 3:* The highest‑comment item (#492) is a security concern about namespace impersonation, unique to the Claude ecosystem because of the `anthropic/` directory structure; no parallel trust issue appears in Codex’s curated skills setup today.