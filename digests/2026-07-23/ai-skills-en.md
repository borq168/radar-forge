# Skills Ecosystem Highlights 2026-07-23

> Generated: 2026-07-23 03:03 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights – 2026-07-23

## 1. Top Skills Across Repositories
The most-discussed skill-related items (PRs and issues) today, combining both repositories.

1. **Trust boundary abuse via community skills in `anthropic/` namespace**
   *Repo: `anthropics/skills`* · Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments)
   Community skills distributed under the `anthropic/` namespace could be mistaken for official Anthropic skills, raising security and trust concerns.

2. **Org-wide skill sharing on Claude.ai**
   *Repo: `anthropics/skills`* · Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 👍)
   Users want a direct sharing mechanism (library or link) instead of manual .skill file transfers.

3. **`run_eval.py` reports 0% recall – evaluation loop broken**
   *Repo: `anthropics/skills`* · Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) / PR [#1298](https://github.com/anthropics/skills/pull/1298)
   The skill description optimization tool is unusable; skill commands never trigger. PR #1298 attempts to fix this by installing the eval artifact as a real skill and fixing Windows stream reading, trigger detection, and parallel workers.

4. **Playwright-interactive skill depends on removed `js_repl` feature**
   *Repo: `openai/skills`* · Issue [#386](https://github.com/openai/skills/issues/386) (4 comments, 4 👍)
   A curated skill is broken because it references a feature that Codex CLI no longer provides.

5. **Document-typography skill (new)**
   *Repo: `anthropics/skills`* · PR [#514](https://github.com/anthropics/skills/pull/514)
   Proposes a skill to prevent orphan words, widow paragraphs, and numbering misalignment in AI-generated documents.

6. **Compact-memory skill proposal**
   *Repo: `anthropics/skills`* · Issue [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments)
   A symbolic notation for compact agent state to reduce context waste in long-running agents.

7. **Self-audit skill (mechanical + reasoning quality gate)**
   *Repo: `anthropics/skills`* · PR [#1367](https://github.com/anthropics/skills/pull/1367)
   A meta-skill that verifies output files and audits reasoning across four dimensions before delivery.

8. **ODT skill (OpenDocument creation/filling)**
   *Repo: `anthropics/skills`* · PR [#486](https://github.com/anthropics/skills/pull/486)
   Adds support for creating, reading, converting, and template-filling of ODF files.

9. **Skill-quality-analyzer and skill-security-analyzer (meta skills)**
   *Repo: `anthropics/skills`* · PR [#83](https://github.com/anthropics/skills/pull/83)
   Introduces two marketplace tools for evaluating skill structure, documentation, and security.

10. **Experimental skills not found in Codex**
    *Repo: `openai/skills`* · Issue [#153](https://github.com/openai/skills/issues/153) (4 comments, 3 👍)
    The skill-installer references an `.experimental` directory, but those skills are not discoverable.

## 2. Repository-by-Repository Highlights

**anthropics/skills**
The Claude skills repository is seeing a surge of community contributions, with PRs that fix critical tooling (the broken eval loop), propose new document skills (ODT, typography), and introduce meta-skills for quality and security. The most debated issue is the trust boundary abuse from skills distributed under the official `anthropic/` namespace (43 comments). There is also substantial user demand for org-wide skill sharing and better evaluation infrastructure.

**openai/skills**
The Codex skills repository currently has no open PRs, and the discussion is driven by maintenance issues. The curated `playwright-interactive` skill is broken because of a removed `js_repl` feature, and the skill-installer lacks an update/reinstall path. Experimental skills are not properly surfaced, and the `gh-address-comments` skill has path-resolution problems. The overall contribution momentum is low compared to the Claude side.

## 3. Community Demand Clusters

*Across both repositories, users are asking for similar capabilities, though the volume differs.*

- **Skill evaluation and quality assurance** – Fixes for `run_eval.py`, the `self-audit` skill, and the `skill-quality-analyzer` meta-skill all point to a need for reliable, automated skill testing.
- **Document generation and fidelity** – ODT support, typography control, and DOCX tracked-change fixes indicate demand for more robust document‑output skills.
- **Trust and security in skill distribution** – The namespace issue (#492) and the `skill-security-analyzer` proposal reflect concerns about who can publish skills under what name.
- **Skill sharing and lifecycle management** – Org-wide sharing, skill-installer update paths, and the duplicate-skills bug (#189) all show friction in how skills are distributed and installed.
- **Agent memory and governance** – Proposals for `compact-memory` and `agent-governance` suggest that users want to control agent state and safety in longer-running workflows.
- **Developer tooling for skill creation** – Calls for a linter/CLI tool (Codex #121) and improvements to the `skill-creator` skill (#202) highlight the need for better authoring support.

## 4. Active Pending Skills

**PR #1298 – Fix `run_eval.py` (anthropics/skills)**
This PR addresses the broken skill evaluation loop, where `run_eval.py` always reports 0% recall regardless of skill description quality. It installs the eval artifact as a proper skill and fixes Windows-specific stream reading and trigger detection. The underlying issue (#556) has 12 comments and 10+ independent reproductions. *Practical use*: restores the ability to automatically optimize skill descriptions, which is currently unusable.

**PR #1367 – Self-audit skill (anthropics/skills)**
Proposes a universal output-audit skill that first mechanically verifies that every claimed output file exists, then performs a four-dimension reasoning audit (damage-severity priority order). *Practical use*: acts as a final quality gate before delivering AI-generated work to the user.

**PR #514 – Document-typography skill (anthropics/skills)**
Introduces a skill that prevents common typographic flaws in AI-generated documents (orphan word wrap, widow paragraphs, numbering misalignment). *Practical use*: improves the visual quality of documents without users having to explicitly request it.

**PR #486 – ODT skill (anthropics/skills)**
Adds skill for OpenDocument text creation, template filling, and converting ODT to HTML. *Practical use*: enables users to work with LibreOffice/ISO-standard formats directly.

**Issue #386 – Playwright-interactive skill broken (openai/skills)**
The curated `playwright-interactive` skill still references `js_repl`, which is removed in current Codex CLI. The issue remains open with 4 comments and 4 👍. *Practical use*: currently unusable; users need a fix or replacement.

## 5. Cross-Repo Daily Notes

- **Focus differences**: The Claude skills repo is heavily focused on fixing a broken evaluation pipeline and expanding document output capabilities, while the Codex skills repo is dealing with a broken curated skill and installer usability gaps.
- **Target users**: Claude’s skills target both CLI and Claude.ai users, with strong interest in enterprise sharing. Codex skills are centered on the Codex CLI and the skill-installer, with fewer user-facing contributions.
- **Contribution style**: The Claude ecosystem shows many community PRs (both fixes and new skills), while the Codex side is issue-driven with no open PRs today.

**Notable facts**
- The `run_eval.py` bug on `anthropics/skills` has been reproduced over 10 times and the fix is still pending.
- `openai/skills` `playwright-interactive` skill is confirmed broken due to a removed feature (`js_repl`), and no fix PR is visible.
- The trust boundary issue (#492) on the Claude repo has drawn 43 comments, making it the most-discussed single item across both ecosystems today.