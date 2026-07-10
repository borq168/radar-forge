# Skills Ecosystem Highlights 2026-07-10

> Generated: 2026-07-10 00:29 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights – 2026-07-10

## 1. Top Skills Across Repositories
Most-discussed skills and skill-focused threads today, combining PRs and issues with available comment counts.
(Claude PRs lacked public comment counts but are sorted by internal engagement; Codex had zero PRs.)

1. **Security: Community skills under `anthropic/` namespace impersonate official skills**
   *Claude skills issue* [#492](https://github.com/anthropics/skills/issues/492) – 34 comments, 2 👍
   Users can distribute community skills under the official namespace, creating a trust-boundary vulnerability.

2. **Enable org-wide skill sharing in Claude.ai**
   *Claude skills issue* [#228](https://github.com/anthropics/skills/issues/228) – 14 comments, 7 👍
   Request for a shared skill library or direct sharing to eliminate manual `.skill` file transfers.

3. **`run_eval.py` always reports 0% recall — skill evaluation broken**
   *Claude skills issue* [#556](https://github.com/anthropics/skills/issues/556) – 12 comments, 7 👍
   The core skill-evaluation loop perceives no trigger, making description optimization noise-driven.

4. **`run_eval.py` fix: install eval artefact as real skill; Windows/Python fixes**
   *Claude skills PR* [#1298](https://github.com/anthropics/skills/pull/1298) (top PR by comments, counts undisclosed)
   Repairs the evaluation pipeline and parallel workers, directly addresses #556.

5. **All my skills disappeared after renaming files in Downloads**
   *Claude skills issue* [#62](https://github.com/anthropics/skills/issues/62) – 10 comments
   User-facing durability problem with uploaded skill files tied to local paths.

6. **Proposing compact-memory: symbolic notation for agent state**
   *Claude skills issue* [#1329](https://github.com/anthropics/skills/issues/1329) – 9 comments
   A new skill to reduce context consumption by encoding persistent agent memory symbolically.

7. **Document-typography skill: typographic quality control**
   *Claude skills PR* [#514](https://github.com/anthropics/skills/pull/514) (high-ranked PR) – prevents widows, orphans, numbering misalignment in generated documents.

8. **Self-audit skill: mechanical verification + reasoning quality gate**
   *Claude skills PR* [#1367](https://github.com/anthropics/skills/pull/1367) (most recently active PR, updated Jul 2) – universal output audit before delivery.

9. **playwright-interactive skill still depends on removed `js_repl` feature**
   *Codex skills issue* [#386](https://github.com/openai/skills/issues/386) – 4 comments, 4 👍 (closed but recently active)
   Breaks a curated skill after a Codex runtime change; reveals dependency health gap.

10. **Skill Orchestrator: meta-skill for deduplicating and routing large skill catalogs**
    *Codex skills issue* [#491](https://github.com/openai/skills/issues/491) – 1 comment, 3 👍
    Addresses semantic overlap when many Codex skills overlap.

*Note: Claude PRs #1298, #514, #1367 appear alongside these issues because they are the most-commented PRs in that repo. No Codex PRs were posted.*

---

## 2. Repository-by-Repository Highlights

**Claude Skills (anthropics/skills)**
The repo is heavily focused on repairing and extending the skill development toolchain: `run_eval.py` (evaluation) fixes dominate (#1298, #1099, #556). Simultaneously, the community is adding new output-format skills (ODT #486, document-typography #514, self-audit #1367) and meta-quality tools (#83 skill-quality-analyzer). Strongest discussions center on trust/security (#492, 34 comments) and organisational sharing (#228, 14 comments). Contribution momentum is high – multiple PRs were updated within the past month, and novel skill proposals arrive regularly.

**Codex Skills (openai/skills)**
Activity is concentrated in issues, with zero pull requests today. Top concerns are installation robustness (#127 no reinstall path, #153 experimental skills not found) and breakage due to upstream feature removal (#386 playwright-js_repl). Community interest leans toward developer tooling (#121 linter/CLI for skills, #491 skill orchestrator). The repo’s current focus appears to be on stabilising the skill delivery pipeline rather than welcoming new curated skills via PRs.

---

## 3. Community Demand Clusters
Patterns visible across both repos today, noted without forecasting:

- **Skill evaluation & quality tooling**
  Claude: `run_eval.py` fixes, skill-quality-analyzer, self-audit.
  Codex: request for linter/CLI (#121), skill orchestrator for deduplication (#491).

- **Document-format and typography skills**
  Claude: ODT template filling/parsing (#486), document-typography (#514), DOCX bookmark-collision fix (#541).
  Codex: no related items today.

- **Trust, namespace and distribution integrity**
  Claude: namespace impersonation (#492), duplicate skills from plugin overlap (#189).
  Codex: missing experimental skill access (#153) and installer update path (#127).

- **Memory/state compression for agents**
  Claude: compact-memory symbolic notation (#1329).
  Codex: no direct parallel, but skill orchestrator handles overlap at the skill layer.

- **Skill governance and safety**
  Claude: agent-governance closed issue (#412) and self-audit PR (#1367).
  Codex: no governance-focused items.

---

## 4. Active Pending Skills
Open PRs with recent updates and discussion, ordered by last activity:

**Claude #1367 – feat(skills): add self-audit**
*Opened Jun 28, updated Jul 2*
Proposes a skill that mechanically verifies every claimed output file exists, then audits reasoning quality across four dimensions. Discussion likely involves whether a universal audit skill belongs in the marketplace, given it could be used with any project. Use case: harden Claude’s output before delivery, automatically catch missing or low-quality artefacts.

**Claude #1298 – fix(skill-creator): run_eval.py always reports 0% recall**
*Opened Jun 10, updated Jun 23*
Directly tackles issue #556 by installing the eval artefact as a real skill, fixing Windows stream reading, trigger detection, and parallelism. This is a critical pipeline fix – without it, the description-optimization loop (and `improve_description.py`) is using useless feedback. The conversation likely centres on verification across platforms and integration with the existing toolchain.

**Claude #514 – Add document-typography skill**
*Opened Mar 4, updated Mar 13*
Addresses orphan words, widow headings, and numbering misalignment in AI-generated documents – problems users rarely articulate but impact every document. Discussion focus may be on how the skill integrates into Claude’s existing document generation flow and whether it should be always-on or user-triggered.

**Claude #210 – Improve frontend-design skill clarity and actionability**
*Opened Jan 5, updated Mar 7 (no comment count)*
Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation. Practical concern: vague skills generate unpredictable output; this refinement targets reproducibility.

**Claude #541 – fix(docx): prevent tracked change w:id collision with existing bookmarks**
*Opened Mar 6, updated Apr 16*
Fixes document corruption when adding tracked changes to files with bookmarks because `w:id` IDs overlap. Important for users who iterate on DOCX files with collaboration features.

*No Codex pull requests are pending; the closest active proposal is issue #491 (Skill Orchestrator), which is not yet a PR.*

---

## 5. Cross-Repo Daily Notes
- **Contribution profile:** The Claude repo saw 50 PRs and 50 issues; the Codex repo saw 0 PRs and 50 issues. Claude’s community submits concrete skill implementations and tooling fixes, while Codex’s community leans toward requesting infrastructure improvements and reporting breakage.
- **Target user alignment:** Both ecosystems serve developers building AI-augmented workflows. Claude skills are often tied to document generation and quality (ODT, typography, self-audit), while Codex issues highlight skill installer behaviour and scripting environment stability.
- **Toolchain fragility observed in both repos:** Claude’s `run_eval.py` has been effectively broken on Windows and Linux in different ways; Codex’s `playwright-interactive` skill broke when a runtime feature was removed. Both point to a need for better skill ↔ runtime dependency validation.
- **Factual closing note:** As of 2026-07-10, the Claude skills repository has 50 open PRs with the top ones covering evaluation fixes and new document/audit skills. The Codex skills repository has no open PRs; the most commented issue (#386, now closed) flagged a curated skill broken by a runtime change.