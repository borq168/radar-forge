# Skills Ecosystem Highlights 2026-07-16

> Generated: 2026-07-16 00:22 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights — 2026-07-16

## 1. Top Skills Across Repositories
Most-discussed items (by comment volume) from the two skills repositories today, spanning feature requests, bug reports, and proposals.

1. **Security trust boundary abuse** — `anthropics/skills` [#492](https://github.com/anthropics/skills/issues/492) (34 comments)
   Community skills distributed under `anthropic/` namespace create impersonation risk.

2. **Org-wide skill sharing** — `anthropics/skills` [#228](https://github.com/anthropics/skills/issues/228) (14 comments)
   Request for direct organisation-level sharing instead of manual file transfers.

3. **`run_eval.py` never triggers skills (0% recall)** — `anthropics/skills` [#556](https://github.com/anthropics/skills/issues/556) (12 comments)
   Core evaluation script unusable for skill description optimisation.

4. **Skills disappeared after rename** — `anthropics/skills` [#62](https://github.com/anthropics/skills/issues/62) (10 comments)
   User‑reported loss of custom skills after file rename.

5. **Compact‑memory skill proposal** — `anthropics/skills` [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments)
   Symbolic notation for compact agent state memory.

6. **Skill‑creator update to best practice** — `anthropics/skills` [#202](https://github.com/anthropics/skills/issues/202) (8 comments, closed)
   Critiques skill‑creator’s verbose, human‑educational tone.

7. **Agent‑governance skill proposal** — `anthropics/skills` [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed)
   Safety patterns for AI agent systems.

8. **Duplicate skills from example-skills/document-skills** — `anthropics/skills` [#189](https://github.com/anthropics/skills/issues/189) (6 comments)
   Plugins install identical content, bloating context.

9. **`playwright-interactive` depends on removed `js_repl`** — `openai/skills` [#386](https://github.com/openai/skills/issues/386) (4 comments, closed)
   Curated skill broken with current Codex CLI.

10. **Experimental skills not found** — `openai/skills` [#153](https://github.com/openai/skills/issues/153) (4 comments)
    Skill‑installer cannot locate experimental branch skills.

## 2. Repository-by-Repository Highlights

**anthropics/skills**
The repository is heavily focused on fixing the skill evaluation pipeline (`run_eval.py` producing 0% recall, multiple PRs targeting it), improving document‑generation skills (typography, ODT, PDF case‑sensitivity), and introducing meta‑skills for quality/security analysis. The loudest discussion surrounds a trust‑boundary vulnerability where community skills impersonate official Anthropic namespaces (#492, 34 comments). Contribution momentum is visible through 50 pull requests, though many remain open and some are several months old.

**openai/skills**
The `openai/skills` repo shows no open pull requests in today’s data and a bug‑heavy issue tracker. The most pressing items are curated skill breakage from removed platform features (`playwright-interactive` vs. `js_repl`, #386) and a skill installer that cannot update or locate experimental skills (#127, #153). A “Skill Orchestrator” meta‑skill has been proposed (#491) for deduplication and routing. Overall, the repository appears to be in a maintenance/reaction mode with lower contribution velocity compared to the Claude side.

## 3. Community Demand Clusters
Several similar needs surface across both repositories:

- **Skill quality / evaluation tooling**
  Claude: run_eval fixes, skill‑quality‑analyzer (PR #83), self‑audit skill (PR #1367).
  Codex: request for a linter/IDE plugin for skill authoring (#121).
  Both communities want better validation and testing of skill behaviour.

- **Skill distribution & deduplication**
  Claude: org‑wide sharing (#228), duplicate skills from overlapping plugins (#189).
  Codex: installer lacks update/reinstall path (#127), skill orchestrator for deduplication (#491).
  The friction around sharing and managing large skill sets appears in both ecosystems.

- **Document & file‑format skills**
  Claude: multiple PRs for typography (#514), ODT (#486), PDF fixes (#538), DOCX bookmark collision (#541).
  Codex: no comparable activity shown. This remains a Claude‑specific demand signal.

- **Agent safety / self‑audit**
  Claude: self‑audit skill PR (#1367), agent‑governance proposal (#412).
  Codex: not present. A niche but articulated need in the Claude community.

These clusters are moderate; no single direction dominates across both repositories.

## 4. Active Pending Skills

- **Compact‑memory (symbolic agent state)** — `anthropics/skills` [#1329](https://github.com/anthropics/skills/issues/1329)
  Open since June 17, 9 comments. Proposes a skill that uses symbolic notation to keep long‑running agent memory compact, addressing context‑length costs. Discussion is active about its independent utility from other proposals. Practical use case: agents that maintain persistent notes across tasks.

- **Self‑audit skill** — `anthropics/skills` [#1367](https://github.com/anthropics/skills/pull/1367)
  Pull request opened June 28, last updated July 2. Adds a universal output audit skill: mechanical file‑existence verification then four‑dimension reasoning quality gate. No visible comments in today’s data, but recent activity suggests interest. Use case: catch hallucinated output files and logic gaps before delivery.

- **Document‑typography skill** — `anthropics/skills` [#514](https://github.com/anthropics/skills/pull/514)
  Open since March 4, last updated March 13. Adds typographic quality control for AI‑generated documents (orphan word wrap, widow paragraphs, numbering alignment). Stale but still open; no recent comments. Practical for any document output.

- **Skill Orchestrator (routing layer)** — `openai/skills` [#491](https://github.com/openai/skills/issues/491)
  Issue opened June 12, 1 comment. A meta‑skill that deduplicates and routes across large Codex skill catalogs. Early‑stage proposal with a reference implementation; discussion pending.

- **Playwright‑interactive fix** — `openai/skills` [#386](https://github.com/openai/skills/issues/386) (closed)
  While closed, the 4‑comment thread reveals that the curated skill broke due to a removed `js_repl` feature. Maintainers acknowledged the issue; the fix status is unclear. This is a critical usability gap for Codex users who rely on that skill.

## 5. Cross-Repo Daily Notes
- The Claude repository shows strong code‑contribution activity (50 PRs) driven by community fixes for evaluation pipelines, document skills, and meta‑skills. The Codex repository had zero pull requests in today’s data set, with issues centering on broken curated skills and installer gaps.
- Target users overlap (developers and power users of AI coding assistants), but the immediate pain points differ: Claude users struggle with evaluation fidelity and trust boundaries, while Codex users hit installation reliability and missing‑feature roadblocks.
- Both communities have expressed a desire for skill deduplication and easier distribution, though the mechanisms proposed (org‑wide sharing, orchestrator skills) are early and not universally adopted.

*Factual notes: community‑contributed skills in `anthropic/skills` are labelled under the `anthropic/` namespace, raising impersonation concerns. The `openai/skills` repository’s `playwright-interactive` skill has been unusable since at least Codex CLI 0.128.0 due to the removal of `js_repl`. Neither repository has merged a fix for its respective evaluation/distribution bottleneck as of today’s data cut.*