# Skills Ecosystem Highlights 2026-07-14

> Generated: 2026-07-14 00:21 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Cross-Repository Skills Ecosystem Highlights — 2026-07-14

## 1. Top Skills Across Repositories
List covers the most-discussed items (PRs and issues) spanning new skills, tooling, and governance, with their origin repos.

1. **Security: community skills under `anthropic/` namespace** — [Claude #492](https://github.com/anthropics/skills/issues/492) (34 comments). Impersonation risk from community skills distributed under the official namespace.
2. **Org-wide skill sharing** — [Claude #228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 👍). Demand for built-in sharing rather than manual .skill file transfer.
3. **`run_eval.py` always reports 0% recall** — [Claude #556](https://github.com/anthropics/skills/issues/556) (12 comments) & PRs [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099). Eval tooling broken on multiple platforms, blocking skill optimization loops.
4. **Document-typography skill** — [Claude PR #514](https://github.com/anthropics/skills/pull/514). New skill for typographic quality (orphan/widow control, numbering) in AI-generated documents.
5. **ODT skill (OpenDocument)** — [Claude PR #486](https://github.com/anthropics/skills/pull/486). Create, fill, read, and convert ODF files; covers LibreOffice/open-source document workflows.
6. **Self-audit skill** — [Claude PR #1367](https://github.com/anthropics/skills/pull/1367). Mechanical file verification plus four-dimension reasoning quality gate before output delivery.
7. **Playwright-interactive still depends on removed `js_repl`** — [Codex #386](https://github.com/openai/skills/issues/386) (closed, 4 comments). Curated skill broken by feature removal; highlights maintenance gap.
8. **Skill Orchestrator meta-skill** — [Codex #491](https://github.com/openai/skills/issues/491) (1 comment, 3 👍). Lightweight routing layer to deduplicate and direct large skill catalogs.
9. **Compact-memory skill (symbolic notation)** — [Claude #1329](https://github.com/anthropics/skills/issues/1329) (9 comments). Condense agent memory/notes into compact symbolic form to save context.
10. **Experimental skills not found** — [Codex #153](https://github.com/openai/skills/issues/153) (4 comments, 3 👍). Skill installer cannot reach experimental skills; installation path gap.

## 2. Repository-by-Repository Highlights
**Claude Skills (anthropics/skills)**
Active contributor community produces a steady stream of new skill PRs (document-typography, ODT, self-audit, quality/security analyzers) and tooling fixes, with particular emphasis on repairing the `run_eval` eval loop. Discussion volume concentrates on trust/safety (namespace impersonation) and enterprise sharing. The repo’s contribution momentum is visibly broad, mixing document-format skills with meta-skills and infrastructure hardening.

**Codex Skills (openai/skills)**
Community PR activity is minimal; the issue tracker carries the weight of reported needs. Key signals include dependency drift (playwright-interactive `js_repl` removal), installer limitations (no update/reinstall path, experimental skills inaccessible), and early-stage ideas for skill-authoring tooling and a meta-skill orchestrator. The ecosystem feels dependent on a smaller set of maintainer-side fix-ups.

## 3. Community Demand Clusters
These clusters represent similar requested directions across repositories without claiming a strong trend.

- **Skill quality, governance, and routing meta-skills**
  Claude PRs: skill-quality-analyzer ([#83](https://github.com/anthropics/skills/pull/83)), self-audit ([#1367](https://github.com/anthropics/skills/pull/1367)), agent-governance proposal ([#412](https://github.com/anthropics/skills/issues/412)). Codex: Skill Orchestrator ([#491](https://github.com/openai/skills/issues/491)). Users want skills that vet other skills’ output, enforce safety patterns, and route across overlapping catalogs.

- **Document-format expansion & polish**
  ODT skill ([#486](https://github.com/anthropics/skills/pull/486)), document-typography ([#514](https://github.com/anthropics/skills/pull/514)), plus existing PDF/DOCX fixes. Consistent appetite for production-grade document-handling capabilities beyond plain text.

- **Skill-authoring tooling**
  Codex request for a linter/IDE plugin ([#121](https://github.com/openai/skills/issues/121)), Claude PRs fixing YAML validation warnings ([#539](https://github.com/anthropics/skills/pull/539)) and case-sensitivity in references ([#538](https://github.com/anthropics/skills/pull/538)). Both ecosystems show demand for easier, safer skill creation.

- **Distribution, installation, and trust**
  Claude: org sharing ([#228](https://github.com/anthropics/skills/issues/228)), community namespace abuse ([#492](https://github.com/anthropics/skills/issues/492)), duplicate content from plugins ([#189](https://github.com/anthropics/skills/issues/189)). Codex: installer lacks update/reinstall ([#127](https://github.com/openai/skills/issues/127)), experimental skills unreachable ([#153](https://github.com/openai/skills/issues/153)). Lifecycle management and trust boundaries are cross-cutting concerns.

## 4. Active Pending Skills
These PRs (and one substantial issue proposal) have open status and recent activity, with practical use cases.

- **Self-audit skill** — [Claude #1367](https://github.com/anthropics/skills/pull/1367) (opened 2026-06-28, updated 2026-07-02). Adds a universal output-audit skill that mechanically verifies file claims and then runs a four-dimension reasoning gate. Use case: any agent producing deliverable files can automatically catch missing outputs, uncommitted code, or logic gaps before handoff.

- **`run_eval.py` recall fix (Windows + eval artifact)** — [Claude #1298](https://github.com/anthropics/skills/pull/1298) (updated 2026-06-23) and [Claude #1099](https://github.com/anthropics/skills/pull/1099) (updated 2026-05-24). These PRs aim to repair the eval loop that currently reports 0% recall on Windows and other setups. Use case: skill creators need a working evaluation loop to iteratively improve skill descriptions; without the fix the optimization process is random.

- **Document-typography skill** — [Claude #514](https://github.com/anthropics/skills/pull/514) (updated 2026-03-13). Introduces typographic QC for generated documents (orphan/widow control, numbering alignment). Use case: every document Claude produces currently lacks these checks, and the skill would catch layout defects automatically.

- **OpenDocument (ODT/ODS) skill** — [Claude #486](https://github.com/anthropics/skills/pull/486) (updated 2026-04-14). Provides creation, template filling, and HTML conversion for ODF files. Use case: users working in LibreOffice/open-source office suites gain a first-class document skill.

- **Skill Orchestrator (meta-skill)** — [Codex #491](https://github.com/openai/skills/issues/491) (opened 2026-06-12). Though an issue, it is a concrete proposal with upvotes. The orchestrator acts as a lightweight router to avoid conflicts when many skills are installed. Use case: teams with large skill catalogs can install the orchestrator to select the right skill without duplicate or overlapping tool calls.

## 5. Cross-Repo Daily Notes
The Claude skills repo shows a broader set of community-driven PRs (50 total shown, many open) covering