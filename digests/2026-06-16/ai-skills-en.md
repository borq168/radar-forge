# Skills Ecosystem Highlights 2026-06-16

> Generated: 2026-06-16 02:52 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-16

Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests received the most discussion activity. All are currently open.

### #514 — document-typography skill
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — common typographic issues across generated output.
- **Discussion highlights**: Author notes these problems "affect every document Claude generates." PR targets a recurring quality gap not addressed by format-specific skills.
- **Status**: Open since 2026-03-04, last updated 2026-03-13.
- **Link**: https://github.com/anthropics/skills/pull/514

### #486 — ODT skill (OpenDocument text)
- **Functionality**: Enables creation, template filling, parsing, and conversion of .odt/.ods files. Triggers on mentions of ODF, OpenDocument, or LibreOffice.
- **Discussion highlights**: Addresses demand for open-source document format support alongside existing DOCX/PDF skills.
- **Status**: Open since 2026-03-01, last updated 2026-04-14.
- **Link**: https://github.com/anthropics/skills/pull/486

### #210 — Improve frontend-design skill clarity
- **Functionality**: Revises the existing frontend-design skill so every instruction is executable within a single conversation, with specific enough guidance to steer Claude's behavior.
- **Discussion highlights**: Focuses on actionability and token efficiency — ensuring skill guidance is precise rather than educational.
- **Status**: Open since 2026-01-05, last updated 2026-03-07.
- **Link**: https://github.com/anthropics/skills/pull/210

### #83 — skill-quality-analyzer and skill-security-analyzer
- **Functionality**: Two meta-skills: one evaluates skills across five quality dimensions (structure, security, reliability, performance, prompt robustness); the other audits skill security patterns (prompt injection, data exfiltration, privilege escalation).
- **Discussion highlights**: Introduces tooling for skill authors to self-evaluate their contributions. Covers both quality and security in a structured framework.
- **Status**: Open since 2025-11-06, last updated 2026-01-07.
- **Link**: https://github.com/anthropics/skills/pull/83

### #181 — SAP-RPT-1-OSS predictor skill
- **Functionality**: Uses SAP's open-source tabular foundation model (Apache 2.0, released at SAP TechEd 2025) for predictive analytics on SAP business data.
- **Discussion highlights**: Enterprise-domain skill integrating an external model for structured data prediction. Targets SAP customers and business analysts.
- **Status**: Open since 2025-12-28, last updated 2026-03-16.
- **Link**: https://github.com/anthropics/skills/pull/181

### #1140 — agent-creator meta-skill
- **Functionality**: Generates task-specific agent sets. Also fixes multi-tool parallel evaluation and adds Windows support for recalc.py. Addresses Issue #1120.
- **Discussion highlights**: Meta-skill for composing smaller agent groups. Includes stability fixes for evaluation infrastructure.
- **Status**: Open since 2026-05-15, last updated 2026-06-02.
- **Link**: https://github.com/anthropics/skills/pull/1140

### #723 — testing-patterns skill
- **Functionality**: Covers full testing stack: philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), integration testing, E2E, and visual regression.
- **Discussion highlights**: Comprehensive addition for a domain not yet covered in the skills collection.
- **Status**: Open since 2026-03-22, last updated 2026-04-21.
- **Link**: https://github.com/anthropics/skills/pull/723

### #444 — AURELION skill suite (kernel, advisor, agent, memory)
- **Functionality**: Four skills from the AURELION ecosystem: structured cognitive templates (5-floor framework), professional knowledge management patterns. Includes advisor, agent, and persistent memory components.
- **Discussion highlights**: Multi-skill ecosystem submission. Covers cognitive scaffolding and knowledge management.
- **Status**: Open since 2026-02-21, last updated 2026-05-06.
- **Link**: https://github.com/anthropics/skills/pull/444

---

## 2. Community Demand Clusters

Issues reveal several recurring unmet needs. These are grouped by topic, not presented as confirmed trends.

### Infrastructure reliability (skill-creator tooling)
Multiple issues report that `run_eval.py` (the description-optimization loop) returns **0% recall on every iteration**, making description optimization effectively non-functional:
- **#556**: "claude -p never triggers skills/commands (0% trigger rate across all queries)" — 7 upvotes, 12 comments
- **#1061**: Windows compatibility failures in skill-creator scripts — subprocess PATHEXT, cp1252 encoding, select on pipes
- **#1169**: recall=0% on every iteration including literal slash-command queries

**Link**: https://github.com/anthropics/skills/issues/556
**Link**: https://github.com/anthropics/skills/issues/1061
**Link**: https://github.com/anthropics/skills/issues/1169

### Organizational sharing and governance
- **#228**: "Enable org-wide skill sharing in Claude.ai" — 7 upvotes, 14 comments. Currently requires manual .skill file transfer and upload.
- **#492**: "Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse" — 2 upvotes, 7 comments
- **#412**: "Skill proposal: agent-governance — safety patterns for AI agent systems" — closed, but received 6 comments

**Link**: https://github.com/anthropics/skills/issues/228
**Link**: https://github.com/anthropics/skills/issues/492
**Link**: https://github.com/anthropics/skills/issues/412

### Platform integration gaps
- **#16**: "Expose Skills as MCPs" — 4 comments. Suggests exposing skill functionality through MCP tool definitions.
- **#29**: "Usage with Bedrock" — 4 comments. Unclear how to use skills with AWS Bedrock.

**Link**: https://github.com/anthropics/skills/issues/16
**Link**: https://github.com/anthropics/skills/issues/29

### Skill authoring and distribution pain points
- **#189**: document-skills and example-skills plugins install identical content, causing duplicate skills — 9 upvotes, 6 comments
- **#1220**: "Multi-file preload / inline bundling for skill reference files" — 2 comments. Currently only SKILL.md is delivered; reference files are not bundled.

**Link**: https://github.com/anthropics/skills/issues/189
**Link**: https://github.com/anthropics/skills/issues/1220

---

## 3. Active Pending Skills

These PRs have active discussion or recent updates but remain unmerged.

### #1298 — fix(skill-creator): run_eval.py 0% recall — install eval artifact as real skill; fix Windows
- **Summary**: Comprehensive fix for the 0% recall problem (also covered in issues #556 and #1169). Addresses skill installation, Windows stream reading, trigger detection, and parallel workers.
- **Recent activity**: Last updated 2026-06-11 (5 days ago). Author reports 10+ independent reproductions of the recall=0% symptom.
- **Link**: https://github.com/anthropics/skills/pull/1298

### #361 — Detect unquoted YAML special characters in description fields
- **Summary**: Adds pre-parse validation for unquoted `description` and `compatibility` values containing YAML special characters (`: # { } [ ]`). Prevents silent misparsing.
- **Recent activity**: Last updated 2026-06-10 (6 days ago). Related to #539 (fix(skill-creator): warn on unquoted description).
- **Link**: https://github.com/anthropics/skills/pull/361

### #362 — Fix skill-creator UTF-8 panic on multi-byte characters
- **Summary**: Replaces character-based length checks with UTF-8 byte-length validation to prevent Rust panics when processing multi-byte characters. Adds byte-aware helper functions.
- **Recent activity**: Last updated 2026-06-10 (6 days ago).
- **Link**: https://github.com/anthropics/skills/pull/362

### #1050 — skill-creator: fix Windows subprocess + encoding bugs
- **Summary**: Two 1-line fixes: handles `claude.cmd` on Windows (PATHEXT not honored by subprocess) and fixes cp1252 encoding. Found running run_loop.py on Windows 11.
- **Status**: Last updated 2026-05-24.
- **Link**: https://github.com/anthropics/skills/pull/1050

### #1099 — skill-creator: fix run_eval.py crash on Windows
- **Summary**: `run_eval.py` unusable on Windows — every query recorded as "not triggered" regardless of description. Root cause is WinError 10038 on subprocess pipe reads.
- **Status**: Last updated 2026-05-24.
- **Link**: https://github.com/anthropics/skills/pull/1099

---

## 4. Daily Notes

- **The `run_eval.py` 0% recall problem is the single most-discussed infrastructure issue in today's data.** It appears in at least 3 issues (#556, #1169, #1061) plus at least 2 PRs (#1298, #1099). All describe the same symptom: the description-optimization loop scores recall=0% on every iteration, making it effectively non-functional. Multiple independent reproductions are reported across Windows and presumably Linux environments.

- **Windows compatibility remains a persistent compatibility gap.** Three separate PRs (#1298, #1050, #1099) and one issue (#1061) address Windows-specific failures in skill-creator scripts. The problems span subprocess invocation, encoding (cp1252), and pipe I/O — suggesting the tooling was developed and tested primarily on Unix.

- **YAML frontmatter parsing issues are receiving repeated fixes.** PR #361 and PR #539 both address unquoted YAML special characters causing silent misparsing. PR #362 fixes a related UTF-8 panic. This cluster suggests that skill validation currently has blind spots that are being uncovered through real-world use.