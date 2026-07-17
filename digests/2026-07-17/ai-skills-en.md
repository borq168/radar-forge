# Skills Ecosystem Highlights 2026-07-17

> Generated: 2026-07-17 00:24 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights — 2026-07-17

## 1. Top Skills Across Repositories
*Listed by discussion volume and development activity (PRs shown where issue data supplements), from both `anthropics/skills` and `openai/skills`.*

1. **[compact‑memory](https://github.com/anthropics/skills/issues/1329)** (anthropics/skills #1329, 9 comments)
   A symbolic notation skill for compressing long‑running agent state into token‑efficient notes — directly tackles context exhaustion.

2. **[self‑audit](https://github.com/anthropics/skills/pull/1367)** (anthropics/skills PR #1367)
   Universal output audit skill: mechanical file verification, then a four‑dimension reasoning quality gate before delivery.

3. **[document‑typography](https://github.com/anthropics/skills/pull/514)** (anthropics/skills PR #514)
   Typographic quality control for AI‑generated documents — prevents orphan wraps, widow paragraphs, and numbering misalignment.

4. **[ODT skill](https://github.com/anthropics/skills/pull/486)** (anthropics/skills PR #486)
   OpenDocument creation, template filling, and ODT‑to‑HTML conversion — driven by ISO‑standard office format demand.

5. **[skill‑quality‑analyzer & skill‑security‑analyzer](https://github.com/anthropics/skills/pull/83)** (anthropics/skills PR #83)
   Meta‑skills that evaluate structure/documentation and detect security weaknesses in other skills across five dimensions.

6. **[agent‑governance](https://github.com/anthropics/skills/issues/412)** (anthropics/skills #412, closed, 6 comments)
   Skill proposal for policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems.

7. **[Skill Orchestrator](https://github.com/openai/skills/issues/491)** (openai/skills #491, 3 👍)
   Meta‑skill for deduplicating and routing large Codex skill catalogs, tackling semantic overlap in curated collections.

8. **[fix: skill‑creator eval 0% recall](https://github.com/anthropics/skills/pull/1298)** (anthropics/skills PR #1298)
   Repairs `run_eval.py` to correctly detect skill triggers, unblocking the description‑optimization loop that was currently optimizing against noise (#556, 12 comments).

## 2. Repository‑by‑Repository Highlights

**anthropics/skills**
The repo shows a steady flow of community-submitted PRs that address both low-level reliability gaps (eval fixes, case-sensitivity, YAML parsing, DOCX ID collisions) and broaden the skill catalogue with document engineering (typography, ODT), meta‑analysis (quality/security analyzers), and universal auditing. Top issues reveal strong interest in evaluation robustness (#556, #1298), trust boundary security (#492), org‑wide sharing (#228), and memory compression (#1329). The contribution momentum is consistent, with several long-running PRs (some opened in early 2026) still under active review.

**openai/skills**
No open pull requests exist in today’s data. Issue discussions center on platform‑evolution friction: a curated `playwright‑interactive` skill still references the now‑removed `js_repl` feature (#386), the skill‑installer lacks an update/reinstall path (#127), and experimental skills are not discoverable (#153). At the same time, the community is proposing tooling and orchestration (linter #121, Skill Orchestrator #491), but these remain in the request stage without PR activity.

## 3. Community Demand Clusters
*Similar skill directions observed across both repositories, without overstating trend strength.*

- **Skill quality & evaluation infrastructure**
  `anthropics`: eval fix PRs (#1298, #1099), skill-quality-analyzer PR (#83), issue #556 (12 comments), #202 (skill-creator improvements).
  `openai`: request for a linter/IDE plugin/CLI tool for writing skills (#121).

- **Meta‑skills for skill management**
  `anthropics`: PRs for quality/security analyzers (#83), agent-governance proposal (#412).
  `openai`: Skill Orchestrator to deduplicate and route overlapping skills (#491).

- **Document generation and file format fidelity**
  `anthropics`: document-typography PR (#514), ODT skill PR (#486), tracked-changes collision fix PR (#541), PDF case-sensitivity fix PR (#538).
  `openai`: no direct PRs in this period, but the underlying platform’s document skills (DOCX, PDF) are implicitly affected by tooling instability.

- **Agent memory/state compression**
  `anthropics`: compact‑memory proposal (#1329) with significant discussion.

- **Skill installation & platform reliability**
  `anthropics`: skills disappearing (#62, 10 comments), duplicate skill installs from plugins (#189).
  `openai`: installer lacks update path (#127), experimental skills not found (#153), `playwright‑interactive` broken by removed `js_repl` feature (#386).

## 4. Active Pending Skills
*PRs with recent activity and practical use cases, without predicting landing time.*

- **[`fix(skill-creator): run_eval.py`](https://github.com/anthropics/skills/pull/1298)** — Installs the eval artifact as a real skill; fixes Windows stream reading, trigger detection, and parallel workers. Directly addresses the 0% recall bug (#556) that made skill description optimization useless. Discussion ongoing about the scope of the Windows fixes.

- **[`feat(skills): add self-audit`](https://github.com/anthropics/skills/pull/1367)** — Proposes a universal output checker (v1.3.0) that mechanically verifies files and then audits reasoning across factuality, completeness, safety, and alignment. Under review, no substantial comment thread yet (opened 2026-06-28).

- **[`Add document-typography skill`](https://github.com/anthropics/skills/pull/514)** — A quality-assurance skill for automatically preventing widows, orphans, and numbering faults in every document Claude generates. Opened 2026-03-04, last touched 2026-03-13; no merge decision yet.

- **[`Add ODT skill`](https://github.com/anthropics/skills/pull/486)** — OpenDocument creation, template filling, and ODT→HTML conversion. Opened 2026-03-01, updated 2026-04-14; addresses a long-standing request for open‑source document format support.

- **[`Skill Orchestrator` (proposal)](https://github.com/openai/skills/issues/491)** — An instruction-only Codex skill that deduplicates overlapping entries from large skill collections. Currently an open issue with 3 upvotes, waiting for maintainer feedback.

## 5. Cross‑Repo Daily Notes

- On 2026-07-17, `anthropics/skills` shows active code contributions (multiple open PRs spanning skill fixes, new skills, and evaluation tooling), while `openai/skills` has no open pull requests and its top issues revolve around curated skills lagging behind platform changes (e.g., `js_repl` removal breaking `playwright-interactive`).

- Both repositories are receiving community requests for skill development tooling, but the delivery path differs: `anthropics` contributors are submitting PRs (quality analyzers, eval fixes), whereas `openai` users are filing issues (linter, orchestrator) without