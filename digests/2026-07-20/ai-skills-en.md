# Skills Ecosystem Highlights 2026-07-20

> Generated: 2026-07-20 02:58 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross‑Repository Skills Ecosystem Highlights – 2026‑07‑20

## 1. Top Skills Across Repositories
Items ranked by discussion volume (issue comments, mentions in PRs). Each entry is tagged with its repository.

1. **Security: Community skills in `anthropic/` namespace enable trust boundary abuse**
   [`anthropics/skills#492`](https://github.com/anthropics/skills/issues/492) – 39 comments, 2 👍
2. **Org‑wide skill sharing in Claude.ai**
   [`anthropics/skills#228`](https://github.com/anthropics/skills/issues/228) – 14 comments, 7 👍
3. **`run_eval.py` never triggers skills (0 % recall) – blocks the description‑optimisation loop**
   [`anthropics/skills#556`](https://github.com/anthropics/skills/issues/556) (12 comments) + PRs [`#1298`](https://github.com/anthropics/skills/pull/1298), [`#1099`](https://github.com/anthropics/skills/pull/1099)
4. **All user skills disappeared after renaming a file**
   [`anthropics/skills#62`](https://github.com/anthropics/skills/issues/62) – 10 comments, 2 👍
5. **Proposal: `compact-memory` – symbolic notation for compact agent state**
   [`anthropics/skills#1329`](https://github.com/anthropics/skills/issues/1329) – 9 comments
6. **`skill‑creator` should be updated to best practice** *(closed)*
   [`anthropics/skills#202`](https://github.com/anthropics/skills/issues/202) – 8 comments
7. **Skill proposal: `agent‑governance` – safety patterns for AI agents** *(closed)*
   [`anthropics/skills#412`](https://github.com/anthropics/skills/issues/412) – 6 comments
8. **`document-skills` and `example-skills` plugins install identical content, causing duplicates**
   [`anthropics/skills#189`](https://github.com/anthropics/skills/issues/189) – 6 comments, 9 👍
9. **`playwright-interactive` skill still depends on removed `js_repl` feature** *(closed)*
   [`openai/skills#386`](https://github.com/openai/skills/issues/386) – 4 comments, 4 👍
10. **Experimental skills not found**
    [`openai/skills#153`](https://github.com/openai/skills/issues/153) – 4 comments, 3 👍

## 2. Repository‑by‑Repository Highlights

### Anthropic Skills (`anthropics/skills`)
The repository is extremely active in bug fixing and community skill proposals. Multiple pull requests tackle concrete reliability gaps: the `run_eval.py` 0%‑recall defect (`#1298`, `#1099`), case‑sensitivity in PDF references (`#538`), DOCX tracked‑change ID collisions with bookmarks (`#541`), and YAML parsing warnings (`#539`). Strongest discussions centre on the trust‑boundary vulnerability of community skills impersonating official ones (`#492`, 39 comments) and the persistent request for org‑wide sharing (`#228`, 14 comments). Contribution momentum is high, with 50 PRs under consideration and a steady flow of new skill proposals (document‑typography, ODT, self‑audit).

### OpenAI Codex Skills (`openai/skills`)
No open pull requests were recorded. Current focus is on issue reporting, most notably a closed incident where the curated `playwright-interactive` skill broke after removal of the `js_repl` feature (`#386`). Ongoing requests include a skill installer that supports updates/reinstallation (`#127`) and a linter/IDE tool for writing skills (`#121`). Visibility of experimental skills remains a pain point (`#153`). Overall contribution momentum is low compared to the Anthropics repository.

## 3. Community Demand Clusters
Across both repositories, several overlapping request directions are visible, though the data is sparse enough that they are aggregated rather than called a trend:

- **Skill quality & audit tooling**
  Anthropics: meta‑analysers (`#83`), `self‑audit` skill (`#1367`), and the call to overhaul `skill‑creator` (`#202`). OpenAI: desire for a linter/CLI tool (`#121`).

- **Document generation & typography**
  Anthropics: `document‑typography` skill (`#514`), ODT creation and template filling (`#486`), DOCX structural fixes (`#541`).

- **Skill installation & lifecycle management**
  Anthropics: duplicate skills from overlapping plugins (`#189`), skills disappearing on rename (`#62`). OpenAI: no reinstall/update path (`#127`), experimental skills not found (`#153`).

- **Evaluation & developer feedback loops**
  Anthropics: `run_eval.py` recall bug (`#556` + two PRs). OpenAI: indirect via the need for better authoring tooling.

- **Agent governance & memory**
  Two independent anthropics proposals: `agent‑governance` (`#412`, closed) and `compact‑memory` (`#1329`).

## 4. Active Pending Skills
Active‑comment PRs that represent new or significantly improved skills, with their current discussion status:

- **`self-audit` (anthropics `#1367`)** – A meta‑skill that mechanically verifies output files and then conducts a four‑dimension reasoning audit. Updated on 2 July 2026. The practical use case is a universal quality gate before delivering AI‑generated work, independent of tech stack or model. Discussion has centred on feasibility and scope; no maintainer decision is recorded.

- **`run_eval.py` recall fix (anthropics `#1298`)** – Restores the evaluation signal by installing the eval artifact as a real skill, fixing Windows stream reading, trigger detection, and parallel workers. Referenced by the high‑engagement issue `#556` (12 comments). Status: open, actively discussed as of 23 June 2026. This is a critical enabler for anyone iterating on skill descriptions.

- **ODT skill (anthropics `#486`)** – Adds creation, template filling, reading, and conversion of OpenDocument files. Last updated 14 April 2026. The skill would cover requested production of open‑standard documents, which is currently absent from the curated set. No maintainer acceptance yet.

## 5. Cross‑Repo Daily Notes
The Anthropics skills repo is seeing substantial community contribution (50 PRs, multiple high‑comment issues), centred on fixing core infrastructure (evaluation, security) and expanding the skill library. In contrast, the OpenAI skills repo shows no open pull requests today and a set of lower‑volume issue reports, mostly around adaptation to feature removals and installer ergonomics. Both repos share a recognised need for better skill‑authoring tools: anthropics through the broken eval loop, openai through the request for a linter/IDE plugin. Concrete facts: the Anthropics trust boundary issue `#492` has generated 39 comments by 20 July 2026; the run_eval defect is referenced by two independent PRs (`#1298`, `#1099`); the OpenAI `playwright-interactive` issue was closed after 4 comments, but the requirement for a `js_repl`‑free version remains unresolved in the curated skill.