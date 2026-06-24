# Skills Ecosystem Highlights 2026-06-24

> Generated: 2026-06-24 00:28 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-24

## 1. Top Skills Ranking

Based on comment activity and discussion depth, the most-discussed Skill-related PRs in today’s data are:

- **#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
  A deep fix for the core evaluation script that causes `run_loop.py` and `improve_description.py` to optimize against noise. The PR addresses multiple root causes (artifact installation, Windows stream reading, trigger detection, parallel worker issues). Still open, with ongoing review as of 2026-06-23.
  [PR #1298](https://github.com/anthropics/skills/pull/1298)

- **#514 — Add document-typography skill**
  A new skill preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. The discussion centers on whether this should be a single skill or folded into broader document skills. Still open.
  [PR #514](https://github.com/anthropics/skills/pull/514)

- **#486 — Add ODT skill**
  Adds capability to create, fill, read, and convert OpenDocument Format files (.odt, .ods). Includes template filling and ODT-to-HTML conversion. Active discussion about scope overlap with existing PDF and DOCX skills. Still open.
  [PR #486](https://github.com/anthropics/skills/pull/486)

- **#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace**
  Two meta-skills for evaluating Claude Skills across five quality dimensions and security patterns. The PR discusses whether these belong in the example-skills collection or should be maintained separately. Still open.
  [PR #83](https://github.com/anthropics/skills/pull/83)

- **#723 — Add testing-patterns skill**
  A comprehensive testing skill covering unit tests, React component tests, integration tests, and E2E patterns. Active discussion about scope and whether it duplicates existing testing guidance. Still open.
  [PR #723](https://github.com/anthropics/skills/pull/723)

- **#360 — Added AppDeploy skill**
  Enables Claude to deploy and manage full-stack web apps via the AppDeploy service. Discussion focused on authentication handling and lifecycle management. Still open.
  [PR #360](https://github.com/anthropics/skills/pull/360)

- **#154 — Add shodh-memory skill**
  Persistent context system for AI agents, maintaining structured memories across conversations. Discussion covers memory format design and proactive context retrieval strategies. Still open.
  [PR #154](https://github.com/anthropics/skills/pull/154)

---

## 2. Community Demand Clusters

From 50 Issues reviewed, the most frequently requested new Skill directions and unmet needs are:

- **Skill distribution and sharing**
  - Org-wide skill sharing (#228, 14 comments, 7 👍): users want a shared skill library or direct sharing links instead of manual `.skill` file exchange.
  - Security concern about community skills under the `anthropic/` namespace (#492, 9 comments): creates trust boundary vulnerabilities.
  - Duplicate skills when installing both `document-skills` and `example-skills` plugins (#189, 6 comments, 9 👍).

- **Reliability of skill-creator tooling**
  - `run_eval.py` always returning 0% recall (#556, 12 comments, 7 👍; also #1169, 3 comments).
  - Windows compatibility failures (#1061, 3 comments; also #202 about skill-creator needing best-practice update, 8 comments).

- **Security and governance**
  - Agent governance skill proposal (#412, 6 comments): safety patterns, policy enforcement, audit trails.
  - Concerns about embedding access control logic in SKILL.md for SharePoint Online (#1175, 4 comments).

- **Platform integration gaps**
  - AWS Bedrock usage (#29, 4 comments).
  - Exposing Skills as MCPs (#16, 4 comments).
  - `agentskills.io` redirect error (#184, 3 comments, 4 👍).

- **New skill proposals**
  - Compact-memory skill using symbolic notation (#1329, 3 comments).
  - More specific skill proposals (e.g., frontend-design, testing-patterns) visible in PRs but also requested in Issues.

**Observation**: The cluster around `run_eval.py` reliability and Windows compatibility is the strongest signal. Multiple independent issues and PRs address the same underlying problem.

---

## 3. Active Pending Skills

PRs with recent comment activity (last 2 weeks) that have not yet been merged:

- **#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
  Updated 2026-06-23. The PR has attracted several review cycles. Discussion is converging on the evaluation artifact installation fix and Windows stream reading. Not yet merged.
  [PR #1298](https://github.com/anthropics/skills/pull/1298)

- **#1323 — fix(skill-creator): run_eval trigger detection misses real skill name**
  Updated 2026-06-23. A complementary fix to #1298 addressing a separate root cause (trigger detection bailing on first non-Skill tool). Maintainers are discussing whether to merge independently or combine with #1298.
  [PR #1323](https://github.com/anthropics/skills/pull/1323)

- **#361 — Detect unquoted YAML special characters in description fields**
  Updated 2026-06-10. Prevents silent YAML parsing failures. Active discussion about scope (whether to also check `compatibility` field) and error messaging.
  [PR #361](https://github.com/anthropics/skills/pull/361)

- **#362 — Fix skill-creator UTF-8 panic on multi-byte characters**
  Updated 2026-06-10. Replaces character-based length checks with byte-length validation. Reviewer is testing with CJK character sets.
  [PR #362](https://github.com/anthropics/skills/pull/362)

- **#539 — fix(skill-creator): warn on unquoted description with YAML special characters**
  Updated 2026-04-16. Another YAML validation fix, overlapping with #361. Discussion about consolidating approaches.
  [PR #539](https://github.com/anthropics/skills/pull/539)

---

## 4. Daily Notes

1. **`run_eval.py` reliability is the dominant concern.**
   Multiple PRs (#1298, #1323, #1099, #1050) and Issues (#556, #1169, #1061) all independently report the same symptom: 0% recall in the skill evaluation loop. The root causes are varied (Windows subprocess, trigger detection, artifact installation), but the community consensus is that the optimizer is currently optimizing against noise. This is the most actionable finding in today’s data.

2. **Windows compatibility is a recurring pain point.**
   At least three PRs (#1298, #1099, #1050) and one Issue (#1061) specifically address Windows failures (subprocess `PATHEXT`, `cp1252` encoding, `select` on pipes). Multiple maintainers have reproduced the issues, suggesting the skill-creator scripts have not been tested systematically on Windows.

3. **No clear signal on new skill direction consensus.**
   While several new skill proposals received discussion (#412 agent-governance, #1329 compact-memory, #514 document-typography), none has generated enough engagement to indicate strong community demand. The highest-traffic PRs are all bug fixes, not new skills.