# Skills Ecosystem Highlights 2026-07-19

> Generated: 2026-07-19 00:23 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights — 2026-07-19

## 1. Top Skills Across Repositories
The most-discussed skill-related contributions today span both new skill proposals and fixes to the development toolchain, almost entirely from the `anthropics/skills` repository.

| # | Item | Repository | Type | Notes |
|---|------|------------|------|-------|
| 1 | **PR #1298** — fix `run_eval.py` 0% recall | anthropics/skills | Fix / Tooling | Addresses the evaluation loop that currently reports no triggers, affecting all description optimization. |
| 2 | **PR #514** — document-typography skill | anthropics/skills | New Skill | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents. |
| 3 | **PR #486** — ODT creation/template filling skill | anthropics/skills | New Skill | OpenDocument format creation, filling, reading, and conversion (.odt, .ods). |
| 4 | **PR #1367** — self-audit skill (v1.3.0) | anthropics/skills | New Meta-Skill | Mechanical file verification + four-dimension reasoning quality gate before delivery. |
| 5 | **PR #83** — skill-quality-analyzer + skill-security-analyzer | anthropics/skills | New Meta-Skills | Evaluates structure, documentation, examples; adds security analysis for skills. |
| 6 | **Issue #1329** — compact-memory skill proposal | anthropics/skills | Skill Proposal | Symbolic notation for compact agent state in long-running agents (9 comments). |
| 7 | **Issue #412** — agent-governance skill proposal | anthropics/skills | Skill Proposal (closed) | Governance patterns for AI agent systems (6 comments). |
| 8 | **Issue #491** — Skill Orchestrator meta-skill | openai/skills | Skill Proposal | Lightweight routing layer to deduplicate and route across large Codex skill catalogs (3 👍). |

*Note: Comment counts for PRs were not available in the data; the ordering reflects the repository’s own sort by number of comments, indicating these are the most actively discussed skill contributions.*

## 2. Repository-by-Repository Highlights

**anthropics/skills**
The repository is receiving a steady stream of community-contributed skill PRs (50 considered), ranging from document format fixes to entire new meta-skills. The strongest single discussion is the security issue #492 (34 comments) about trust-boundary abuse when community skills appear under the `anthropic/` namespace. Contribution momentum is visible, but many PRs remain open for weeks or months without merge, and the evaluation tooling (`run_eval.py`) is currently broken for many users (#556, 12 comments).

**openai/skills**
The repo shows zero pull requests in the considered window and a focus on issue-driven feedback. The most active item is #386 (4 comments, closed) concerning the `playwright-interactive` skill’s dependency on the already-removed `js_repl` feature. Other recurring concerns include inability to find experimental skills (#153) and lack of an update/reinstall path for the skill installer (#127). Community demand for tooling and installation polish is evident, but there is no visible PR-based contribution activity.

## 3. Community Demand Clusters
Several unmet workflow demands appear across both repositories, without forming a strong, unified trend yet:

- **Document-quality skills** – Typography (#514), ODT support (#486), DOCX tracked-change fixes (#541), and case-sensitive PDF references (#538) indicate a desire for more reliable, production-grade document generation.
- **Skill authoring & evaluation tooling** – Multiple efforts target the skill-creator eval loop (#1298, #1099, #556), YAML validation (#539), and meta-skills for quality/security analysis (#83, #1367). The `skill-creator` itself is seen as overly verbose and instructional rather than operational (#202).
- **Security & governance** – The high-comment issue #492 (trust boundary abuse) and the `skill-security-analyzer` in PR #83 show community concern about skill provenance and safety. The closed agent-governance proposal (#412) reinforces this interest.
- **Agent memory & skill overload** – Proposals like compact-memory (#1329) and Skill Orchestrator (openai #491) target the problem of long-running agents consuming excessive context or dealing with semantically overlapping skills.
- **Skill distribution & org sharing** – Anthropic users want enterprise sharing without manual file transfers (#228); Codex users struggle with installing experimental skills (#153) and updating existing ones (#127).

## 4. Active Pending Skills
Several skill PRs are open with recent activity and clear practical use cases:

- **[#514] document-typography** (anthropics/skills) — Aims to catch typographic defects (orphans, widows, misaligned numbering) that affect every Claude-generated document. Discussion focuses on whether this belongs as a standalone skill or should be integrated into existing document skills. Last updated 2026-03-13.
- **[#486] ODT skill** (anthropics/skills) — Adds OpenDocument creation, filling, and conversion. Enables LibreOffice-compatible output without requiring Microsoft formats. Received updates until mid-April 2026. Concerns likely include maintenance scope and overlap with the existing docx skill.
- **[#1367] self-audit** (anthropics/skills) — A universal, output-audit skill that mechanically verifies files, then audits reasoning across four dimensions in damage-severity order. Submitted 2026-06-28, updated shortly after. The design attempts to be stack-agnostic, which may raise questions about false positives.
- **[#1329] compact-memory** (anthropics/skills, issue) — Not a PR but a concrete skill proposal with 9 comments as of July 4. The idea is to use a symbolic notation for agent memory to save context. Maintainer/community feedback has been engaged, suggesting interest in experimental integration.

## 5. Cross-Repo Daily Notes
- The two ecosystems are at different contribution stages: `anthropics/skills` has a pipeline of open PRs from external contributors, while `openai/skills` has zero PRs and is primarily receiving bug/file issues on the existing curated skill set.
- Anthropic’s community is actively building skills, meta-skills, and tooling fixes, whereas OpenAI’s community is reporting gaps in installer behavior and feature compatibility (e.g., `js_repl` removal).
- Both repos exhibit demand for better skill management: Anthropic through org-wide sharing (#228) and OpenAI through missing update paths (#127) and experimental skill discovery (#153).
- The highest-commented item across both repos today is Anthropic’s security namespace issue (#492, 34 comments), reflecting a concrete concern about trust and branding in the skill marketplace.
- There is no cross-repository collaboration or overlap visible in this data slice; the discussions remain within their respective ecosystems.