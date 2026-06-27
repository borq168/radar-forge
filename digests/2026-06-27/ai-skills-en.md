# Skills Ecosystem Highlights 2026-06-27

> Generated: 2026-06-27 00:32 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-27

## 1. Top Skills Ranking

The following Pull Requests have generated the most discussion in the repository. Each represents either a new Skill or a significant improvement to an existing one.

- **#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
  *URL: https://github.com/anthropics/skills/pull/1298*
  A comprehensive fix for the `run_eval.py` script that has been reporting 0% recall across all skill descriptions (referenced in #556, #1169, and 10+ independent reproductions). The PR addresses Windows stream reading, trigger detection logic, and parallel worker issues. The core problem is that `run_eval.py` installs the eval artifact in a way that the `claude -p` subprocess never recognizes the Skill command. This is the most active PR in the repository, with ongoing review and refinement through late June. **Status: OPEN**

- **#514 — Add document-typography skill: typographic quality control for generated documents**
  *URL: https://github.com/anthropics/skills/pull/514*
  Addresses orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The skill targets a specific quality gap that affects every document Claude generates. Proposes a focused, narrow skill rather than a broad document-formatting tool. **Status: OPEN**

- **#538 — fix(pdf): correct case-sensitive file references in SKILL.md**
  *URL: https://github.com/anthropics/skills/pull/538*
  Fixes 8 case-sensitivity mismatches where `SKILL.md` referenced `REFERENCE.md` and `FORMS.md` (uppercase) while the actual files are lowercase. This breaks on case-sensitive filesystems (Linux, macOS). A simple but impactful correctness fix with community maintenance value. **Status: OPEN**

- **#486 — Add ODT skill — OpenDocument text creation and template filling**
  *URL: https://github.com/anthropics/skills/pull/486*
  A new skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). Covers triggers for "ODT", "ODS", "ODF", "OpenDocument", and "LibreOffice document" mentions. Extends the document-skills ecosystem to open-source formats. **Status: OPEN**

- **#210 — Improve frontend-design skill clarity and actionability**
  *URL: https://github.com/anthropics/skills/pull/210*
  Revises the frontend-design skill to make instructions more actionable and specific enough for Claude to follow in a single conversation. Focuses on reducing ambiguity in the skill's guidance. **Status: OPEN**

- **#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace**
  *URL: https://github.com/anthropics/skills/pull/83*
  Two meta skills for the example-skills marketplace: a quality analysis tool evaluating structure, documentation, and examples across five dimensions, and a security analysis tool for community skill review. **Status: OPEN**

- **#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks**
  *URL: https://github.com/anthropics/skills/pull/541*
  Fixes document corruption when the DOCX skill adds tracked changes to documents that already contain bookmarks. The root cause is a shared `w:id` ID space in OOXML between bookmarks and tracked changes — the skill's examples used hardcoded low IDs that collide with existing bookmark IDs. **Status: OPEN**

## 2. Community Demand Clusters

The following groups of related Issue topics emerged from the data, based on multiple independent requesters or threads.

- **Security & Trust Boundary Concerns**
  Multiple Issues raise concerns about trust and security in the skills ecosystem. Issue #492 (21 comments, highest in the repository) reports that community skills are distributed under the `anthropic/` namespace, enabling impersonation of official skills and potential permission escalation. Issue #1175 discusses security and context-window concerns when handling enterprise documents (SharePoint Online) via Agent Skills, noting that access control logic written into `SKILL.md` files may be insufficient. No maintainer resolution has been posted on either as of this report.

- **Platform Compatibility & Distribution**
  Several issues request better platform support and skill distribution mechanisms. Issue #228 (14 comments) requests org-wide skill sharing in Claude.ai, noting the current manual download-and-upload workflow is cumbersome. Issue #16 requests exposing Skills as MCPs (Model Context Protocol) for programmatic integration. Issue #29 asks about AWS Bedrock compatibility with skills — currently unanswered. These share a common thread: users want skills to work across more platforms and distribution channels.

- **Tooling Reliability (skill-creator scripts)**
  The `run_eval.py` and associated script failures form the largest cluster of bug reports. Issue #556 (12 comments) documents the 0% trigger rate when using `claude -p`, with multiple independent reproductions. Issue #1169 confirms the same `recall=0%` behavior in the description-optimization loop. Issue #1061 documents Windows compatibility failures (PATHEXT, cp1252 encoding, select-on-pipe issues). Issue #62 reports skills disappearing entirely. These point to systemic instability in the skill development tooling.

- **New Skill Proposals: Agent Governance and Compact Memory**
  Issue #1329 (6 comments) proposes a "compact-memory" skill using symbolic notation for long-running agent state, reducing context overhead from verbose prose notes. Issue #412 (6 comments, now CLOSED) proposed an "agent-governance" skill for safety patterns — policy enforcement, threat detection, trust scoring, and audit trails. Both reflect community interest in agent infrastructure skills rather than domain-specific skills.

## 3. Active Pending Skills

These PRs have recent activity or ongoing discussion and have not yet been merged.

- **#1298 — run_eval.py 0% recall fix (see section 1)**
  The most active PR. Multiple reviewers have tested the proposed changes. The discussion includes refinements to how trigger detection validates that the installed skill was actually invoked. The PR references 10+ independent reproductions of the bug across issues #556, #1169, and others. **Discussion: ongoing technical review, no merge commit as of report date.**

- **#539 and #361 — YAML special-character validation (overlapping PRs)**
  *#539: https://github.com/anthropics/skills/pull/539*
  *#361: https://github.com/anthropics/skills/pull/361*
  Both PRs address the same problem: unquoted `description` fields containing YAML special characters (`:`, `#`, `{`, `}`, `[`, `]`) cause `yaml.safe_load()` to silently misparse values. #539 adds pre-parse validation specifically for colons; #361 has a broader scope including all special characters. Both target `quick_validate.py`. The overlap suggests the maintainers may need to choose or merge approaches. #539 was updated in April, #361 in June with rebase. **Discussion: overlapping scope, no resolution.**

- **#1323 — run_eval trigger detection fix (alternative approach)**
  *URL: https://github.com/anthropics/skills/pull/1323*
  Filed on June 16, just 6 days after #1298. This PR identifies that `run_eval.py::run_single_query` fails to detect skill triggering because it bails on the first non-Skill tool it encounters, before finding the Skill invocation. A different root-cause analysis than #1298, suggesting the community is independently diagnosing the same failure mode. **Discussion: new entry, no merge yet.**

- **#723 — testing-patterns skill**
  *URL: https://github.com/anthropics/skills/pull/723*
  Adds a comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern, test naming), React component testing (Testing Library), and integration/E2E testing. Last updated in April, no discussion in recent weeks. **Discussion: stalled, awaiting review.**

## 4. Daily Notes

- **The `run_eval.py` 0% recall bug is the dominant signal in today's data.** Three separate PRs (#1298, #1323, and the related #1099/#1050 Windows fixes) plus two open Issues (#556, #1169) all address the same failure mode: `run_eval.py` consistently reports `recall=0%` because the `claude -p` subprocess never triggers installed skills. This is blocking the description-optimization loop from functioning at all, meaning the skill-creator's core feature is effectively broken for all users. The community is independently identifying different root causes (artifact installation vs. tool-invocation parsing), suggesting a multi-faceted failure.

- **Windows compatibility remains a persistent gap.** Issues #1061 and PRs #1050, #1099, and #1298 all document Unix-first assumptions in the skill-creator scripts: `PATHEXT` for `.cmd` resolution, `cp1252` encoding handling, and `select()` use on Windows pipes. These are reported by multiple independent users (joshuawowk, gstreet-ops, just2majic) in April–June 2026, indicating sustained demand for Windows support.

- **Community contributions are shifting from domain skills to infrastructure skills and meta-tooling.** PR #83 (quality/security analyzers), Issue #1329 (compact memory), Issue #412 (agent governance), and Issue #16 (MCP exposure) all focus on the skills ecosystem itself rather than domain-specific capabilities. This may reflect maturing adoption: as the basic skill-authoring workflow stabilizes, contributors begin building tools _for_ skill development rather than just skills for end users. The signal is present but not yet strong enough to call a trend.