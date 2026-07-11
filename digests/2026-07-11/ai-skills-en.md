# Skills Ecosystem Highlights 2026-07-11

> Generated: 2026-07-11 00:23 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross‑Repository Skills Ecosystem Highlights — 2026-07-11

## 1. Top Skills Across Repositories
The most-discussed items across both repositories today are issues, not PRs (PR comment data unavailable). Ranked by comment volume, with relevant skill/PR context noted.

1. **Security: Community skills under `anthropic/` namespace enable trust boundary abuse** (`anthropics/skills` #492) — 34 comments. A critical governance concern about community skills impersonating official Anthropic skills.
2. **Enable org-wide skill sharing in Claude.ai** (`anthropics/skills` #228) — 14 comments. Top user request for enterprise collaboration.
3. **run_eval.py never triggers skills (0% trigger rate)** (`anthropics/skills` #556) — 12 comments. Core evaluation infrastructure bug blocking skill description optimization; directly linked to PR #1298 and #1099.
4. **All my skills have disappeared and now I get errors** (`anthropics/skills` #62) — 10 comments. User‑impacting state loss when skill files are renamed or moved.
5. **Proposing compact-memory skill (symbolic notation for agent state)** (`anthropics/skills` #1329) — 9 comments. Community skill design discussion.
6. **skill-creator should be updated to best practice** (`anthropics/skills` #202, closed) — 8 comments. Meta discussion on skill authoring guidelines.
7. **Agent-governance skill proposal** (`anthropics/skills` #412, closed) — 6 comments. Safety patterns for agent systems.
8. **document-skills and example-skills plugins cause duplicate skills** (`anthropics/skills` #189) — 6 comments, 9 👍. Packaging conflict.
9. **playwright-interactive skill depends on removed `js_repl` feature** (`openai/skills` #386, closed) — 4 comments, 4 👍. Cross‑version incompatibility in curated skills.
10. **Experimental skills not found** (`openai/skills` #153) — 4 comments, 3 👍. Discoverability issue for non‑curated skills.

**Source:** `anthropics/skills` issues dominate; `openai/skills` issues are smaller in volume but highlight installer and feature‑drift pain points.

## 2. Repository-by-Repository Highlights

### anthropics/skills
The repository is focused on fixing core tooling (multiple `run_eval.py` PRs targeting Windows crashes and 0% recall) while receiving a steady stream of community skill proposals like document‑typography (#514), ODT (#486), self‑audit (#1367), and meta‑quality analyzers (#83). Security and organizational sharing demands (#492, #228) are the most commented, reflecting growing enterprise deployment interest. Contribution momentum is strong with numerous open PRs and active issue discussions.

### openai/skills
Activity is issue‑driven, with no open pull requests in today’s snapshot. Top concerns include the installer’s inability to update/reinstall skills (#127), curated skills referencing removed features (#386), and difficulty discovering experimental skills (#153). A meta‑skill “Skill Orchestrator” proposal (#491) hints at early interest in routing across large skill catalogs. The repo appears to be in a maintenance/triage phase rather than active expansion.

## 3. Community Demand Clusters
Groups of similar requests across repositories, without overstating trend strength:

- **Evaluation & Quality Assurance for Skills:** `run_eval.py` fixes (anthropic #1298, #1099, #556), skill‑quality‑analyzer meta‑skill (anthropic #83), self‑audit skill (anthropic #1367), and a linter/IDE tool request (openai #121). Users want reliable testing and mechanical verification of skill behavior.
- **Document Production & Formatting Skills:** ODT creation (anthropic #486), document‑typography (anthropic #514), and a desire for more output‑format skills.
- **Skill Packaging & Lifecycle Management:** Duplicate skill installation (anthropic #189), missing update/reinstall path (openai #127), experimental skill discoverability (openai #153), and org‑wide sharing (anthropic #228). Both ecosystems struggle with distribution and lifecycle.
- **Security & Trust:** Trust boundary abuse via namespaces (anthropic #492) and agent‑governance proposals (anthropic #412).
- **Meta & Routing Skills:** compact‑memory for agent state (anthropic #1329), Skill Orchestrator for deduplication (openai #491).

## 4. Active Pending Skills
Open pull requests with current discussion and clear practical use cases. Comment counts unavailable; observations drawn from titles, descriptions, and linked issues.

- **fix(skill-creator): run_eval.py always reports 0% recall (#1298)** — Addresses the broken evaluation loop by installing the eval artifact as a real skill, fixing Windows stream reading, trigger detection, and parallel workers. Directly tied to the widely‑reproduced issue #556. **Use case:** unblocks skill description optimization for developers.
  https://github.com/anthropics/skills/pull/1298

- **Add document-typography skill (#514)** — Prevents orphan words, widow paragraphs, and numbering misalignment in AI‑generated documents. **Use case:** improves quality of every document Claude produces without explicit user requests.
  https://github.com/anthropics/skills/pull/514

- **Add ODT skill — OpenDocument creation, template filling, and ODT→HTML conversion (#486)** — Enables document workflows for open‑source formats. **Use case:** users requesting LibreOffice‑compatible outputs.
  https://github.com/anthropics/skills/pull/486

- **feat(skills): add self‑audit — mechanical verification + four‑dimension reasoning quality gate (#1367)** — Audits AI output before delivery with file existence checks and damage‑severity reasoning. **Use case:** universal quality gate for any project.
  https://github.com/anthropics/skills/pull/1367

- **skill-creator: fix run_eval.py crash on Windows (#1099)** — Earlier Windows‑specific fix for `run_eval.py` pipe reading, recording all queries as “not triggered”. **Use case:** enables evaluation on Windows.
  https://github.com/anthropics/skills/pull/1099

All listed PRs are open; merge status not indicated. Discussion likely revolves around testing and alignment with maintainer guidelines.

## 5. Cross-Repo Daily Notes
- **Anthropic** skills development is highly community‑contribution driven, with multiple active PRs addressing tooling bugs and introducing new skill capabilities. **OpenAI** skills repository shows only issue activity, with no open PRs today, suggesting a different collaboration model or a slower contribution cycle.
- Both repositories face skill lifecycle pain: `anthropics/skills` battles duplicate skills and trust concerns, while `openai/skills` struggles with installer updates and feature‑compatibility of curated skills.
- The single recurring infrastructure pain point across ecosystems is evaluation reliability: `run_eval.py` failures in Anthropic’s tooling are being patched by multiple contributors, indicating it’s a critical path for skill authors.

**Factual notes:**
- 50 PRs considered in `anthropics/skills`, 0 in `openai/skills`.
- Top five issues by comment count all belong to `anthropics/skills`.
- No cross‑repo collaboration visible in today’s data.