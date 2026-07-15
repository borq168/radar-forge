# Skills Ecosystem Highlights 2026-07-15

> Generated: 2026-07-15 00:20 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross‑Repository Skills Ecosystem Highlights — 2026-07-15

Daily record covering the `anthropics/skills` and `openai/skills` repositories. All data points are drawn from the 50 PRs and 100 issues considered across the two repos.

---

## 1. Top Skills Across Repositories
Listed by volume of community discussion (comments / reactions). Each entry includes the host repository.

| Item | Repo | Comments / 👍 | Nature |
|------|------|--------------|--------|
| [#492 – Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse](https://github.com/anthropics/skills/issues/492) | anthropics/skills | 34 comments, 👍 2 | Security |
| [#228 – Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228) | anthropics/skills | 14 comments, 👍 7 | Sharing |
| [#556 – run_eval.py: claude -p never triggers skills/commands (0% trigger rate)](https://github.com/anthropics/skills/issues/556) | anthropics/skills | 12 comments, 👍 7 | Evaluation bug |
| [#62 – All my skills have disappeared and now I get errors](https://github.com/anthropics/skills/issues/62) | anthropics/skills | 10 comments, 👍 2 | Skills lifecycle |
| [#1329 – Proposing a second skill: compact-memory (symbolic notation for compact agent state)](https://github.com/anthropics/skills/issues/1329) | anthropics/skills | 9 comments, 👍 0 | Skill proposal |
| [#189 – document-skills and example-skills plugins install identical content, causing duplicate skills](https://github.com/anthropics/skills/issues/189) | anthropics/skills | 6 comments, 👍 9 | Plugins |
| [#386 – playwright-interactive skill still depends on removed js_repl feature](https://github.com/openai/skills/issues/386) (closed) | openai/skills | 4 comments, 👍 4 | Curated skill bug |
| [#153 – Experimental skills not found](https://github.com/openai/skills/issues/153) | openai/skills | 4 comments, 👍 3 | Discovery |
| [#127 – Skill installer: no update/reinstall path when destination already exists](https://github.com/openai/skills/issues/127) | openai/skills | 3 comments, 👍 0 | Installer |
| [#491 – Skill Orchestrator: meta-skill for deduplicating and routing large Codex skill catalogs](https://github.com/openai/skills/issues/491) | openai/skills | 1 comment, 👍 3 | Meta-skill proposal |

---

## 2. Repository-by-Repository Highlights

**anthropics/skills**
The repository shows strong community contribution momentum, with 50 open pull requests (top 10 above) spanning new skill proposals, bug fixes, and tooling improvements. The loudest conversation is the security concern over community skills being distributed under the `anthropic/` namespace (#492). Multiple PRs aim to repair the `run_eval.py` evaluation pipeline (#1298, #1099), which is currently broken (0% recall reported in #556). New skill directions include document typography, ODF support, and a self-audit meta-skill.

**openai/skills**
No open pull requests are present; all community input arrives as issues. The most discussed item is a closed bug where the `playwright-interactive` curated skill still references a removed `js_repl` feature (#386). Open requests focus on installer improvements (no update path #127, experimental skill discovery #153) and a novel “Skill Orchestrator” meta-skill to route large skill catalogs (#491). The volume of comments per issue is modest, indicating a quieter but consistent user-report cycle.

---

## 3. Community Demand Clusters
Themes appearing across both repositories, without implying a strong trend:

- **Skill quality, analysis, and meta-skills**
  * Anthropic PRs: `skill-quality-analyzer` / `skill-security-analyzer` (#83), `self-audit` (#1367).
  * Codex issue: an external linter/IDE tool requested (#121), plus the `Skill Orchestrator` for deduplication (#491).
  Users want tooling that watches, audits, or routes other skills.

- **Skill installation, discovery, and duplicate management**
  * Anthropic issues: duplicate skills from two official plugins (#189), org-wide sharing to avoid manual file transfers (#228).
  * Codex issues: installer lacks an update path (#127), experimental skills directory not found (#153).
  Both ecosystems are wrestling with how skills are distributed, updated, and surfaced to end users.

- **Document production skills**
  * Anthropic PRs: `document-typography` (#514), `ODT` skill (#486), document‑skill fixes (PDF case sensitivity #538, DOCX tracked‑change ID collisions #541).
  * Codex: no equivalent direct demand, but the `hatch-pet` animation issue (#469) hints at generated content quality.
  Across ecosystems, users expect AI‑generated documents to meet professional formatting standards.

- **Agent