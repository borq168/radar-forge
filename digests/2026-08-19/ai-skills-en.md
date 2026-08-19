# Skills Ecosystem Highlights 2026-08-19

> Generated: 2026-08-19 00:42 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-19

## 1. Top Skills Ranking

The following PRs attracted the most community discussion and development activity in this dataset:

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall** (`@MartinCajiao`)
- Fixes a critical bug where `run_eval.py` reports recall=0% for every skill description, rendering the optimization loop useless. Addresses issue #556 (12 comments, 7 👍). Includes fixes for Windows stream reading, trigger detection, and parallel workers. Status: **Open**, last updated 2026-06-23.
- https://github.com/anthropics/skills/pull/1298

**#514 — Add document-typography skill** (`@PGTBoos`)
- A skill for typographic quality control in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Targets a common failure mode for Claude-generated documents. Status: **Open**, last updated 2026-03-13.
- https://github.com/anthropics/skills/pull/514

**#1367 — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate** (`@YuhaoLin2005`)
- A universal skill that audits AI output before delivery: file verification, then reasoning audit across four dimensions in damage-severity order. Claims to work with any project and model. Status: **Open**, last updated 2026-07-02.
- https://github.com/anthropics/skills/pull/1367

**#568 — feat: add ServiceNow platform skill** (`@Vanka07`)
- Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub. The most recent update was 2026-08-12, indicating ongoing review. Status: **Open**.
- https://github.com/anthropics/skills/pull/568

**#525 — Add pyxel skill for retro game development** (`@kitao`)
- Skill for the Pyxel retro game engine and its MCP server. Covers workflow: write → run_and_capture → inspect → iterate. Last updated 2026-07-15. Status: **Open**.
- https://github.com/anthropics/skills/pull/525

**#723 — feat: add testing-patterns skill** (`@4444J99`)
- Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), and other patterns. Status: **Open**, last updated 2026-04-21.
- https://github.com/anthropics/skills/pull/723

**#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace** (`@eovidiu`)
- Two meta-skills: skill-quality-analyzer (evaluates across five dimensions: structure, documentation, examples, resources, etc.) and skill-security-analyzer. Status: **Open**, last updated 2026-01-07.
- https://github.com/anthropics/skills/pull/83

---

## 2. Community Demand Clusters

From the 50 Issues reviewed, the following skill directions received repeated requests or discussion:

**Infrastructure & Tooling Fixes (highest engagement)**
- The `run_eval.py` bug (#556, 12 comments, 7 👍) and the `skill-creator` being out of best practice (#202, 8 comments) dominate. Multiple maintainers have submitted overlapping fixes (PRs #1298, #1099, #1050), indicating this is a blocking issue for the skill development workflow.
- https://github.com/anthropics/skills/issues/556
- https://github.com/anthropics/skills/issues/202

**Security & Trust Boundary**
- Issue #492 (43 comments, 2 👍) raises concerns about community skills distributed under the `anthropic/` namespace, creating a trust boundary vulnerability. This is the most-commented issue in the dataset.
- https://github.com/anthropics/skills/issues/492

**Enterprise & Organization Sharing**
- Issue #228 (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai, bypassing the current manual download/upload workflow. This has the highest 👍 count in the dataset.
- https://github.com/anthropics/skills/issues/228

**Context Window & Performance**
- Issue #1487 (4 comments) reports that the `claude-api` skill injects ~156k tokens eagerly, exhausting the context window. Issue #189 (6 comments, 9 👍) documents duplicate skills from `document-skills` and `example-skills` plugins.
- https://github.com/anthropics/skills/issues/1487
- https://github.com/anthropics/skills/issues/189

**New Skill Proposals**
- Agent governance patterns (#412, 6 comments), compact-memory symbolic notation (#1329, 9 comments), and a reasoning quality gate pipeline (#1385, 4 comments) were proposed. These are early-stage ideas with some community discussion.
- https://github.com/anthropics/skills/issues/412
- https://github.com/anthropics/skills/issues/1329
- https://github.com/anthropics/skills/issues/1385

---

## 3. Active Pending Skills

These PRs have active discussion and remain unmerged:

**#1298 — run_eval.py 0% recall fix** (`@MartinCajiao`)
- Addresses issue #556, which has 12 comments and 7 👍. The fix is comprehensive: it installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. Discussion is ongoing. This is the most technically detailed fix in the dataset.
- https://github.com/anthropics/skills/pull/1298

**#1099 — run_eval.py crash on Windows** (`@joshuawowk`)
- A separate Windows fix for the same eval pipeline, addressing the same root cause as #1050 and #1298. Discussion notes overlap with #1298. Status: last updated 2026-05-24.
- https://github.com/anthropics/skills/pull/1099

**#1050 — Windows subprocess + encoding bugs** (`@gstreet-ops`)
- Two 1-line fixes for Windows compatibility: `PATHEXT` handling for `claude.cmd` and `subprocess.PIPE` encoding. This is a narrow fix compared to #1298. Status: last updated 2026-05-24.
- https://github.com/anthropics/skills/pull/1050

**#1367 — self-audit skill** (`@YuhaoLin2005`)
- The author has also opened issue #1385 proposing a three-gate pipeline that extends the same concept. Discussion on the PR is limited, but the linked issue shows active conversation. Status: last updated 2026-07-02.
- https://github.com/anthropics/skills/pull/1367

**#1538 — fix: bring two skills back under the Agent Skills spec** (`@bechor25`)
- Identifies two skills (`template/SKILL.md` and another) that fail `skills-ref validate` against the repository's own spec. This is a compliance/standards PR. Status: last updated 2026-08-12.
- https://github.com/anthropics/skills/pull/1538

---

## 4. Daily Notes

- **The evaluation tooling pipeline is the dominant concern.** The `run_eval.py` / `run_loop.py` / `improve_description.py` stack is broken for all users, with recall=0% reported regardless of description content. Three separate PRs (#1298, #1099, #1050) and one issue (#556) address this, making it the single largest cluster of development activity in the dataset. Windows compatibility is a recurring sub-theme.

- **Security and trust boundaries are an emerging concern.** Issue #492 (43 comments) about namespace impersonation is the most-commented item in the dataset. This is a structural concern distinct from any single skill bug — it relates to how the skills ecosystem is organized and governed.

- **No clear signal on which new skill proposals will land.** The ServiceNow (#568), pyxel (#525), and testing-patterns (#723) PRs have been open for 3–5 months. The self-audit skill (#1367) is the most recent substantive addition. There is insufficient data to indicate which of these will be merged or in what timeframe.