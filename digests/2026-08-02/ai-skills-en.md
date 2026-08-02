# Skills Ecosystem Highlights 2026-08-02

> Generated: 2026-08-02 03:56 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report — 2026-08-02

## 1. Top Skills Ranking

The most-discussed Pull Requests by comment count are dominated by a single critical bug family in the skill-creator toolchain, alongside several new skill proposals.

### #1298 — Fix `run_eval.py` 0% recall bug (multiple root causes)
**Functionality:** Repairs the evaluation script that scores skill descriptions for trigger accuracy. The PR addresses three failure modes: the eval artifact not being installed as a real skill, Windows stream reading errors, trigger detection failures, and parallel worker issues.
**Discussion:** This is the highest-comment PR in the dataset. The author reports that `run_eval.py` — and by extension `run_loop.py` and `improve_description.py` — consistently reports `recall=0%` for every skill description (#556, 10+ independent reproductions). The description-optimization loop is "currently optimizing against noise."
**Status:** Open, updated 2026-06-23. [Link](https://github.com/anthropics/skills/pull/1298)

### #514 — Add document-typography skill
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The author notes these issues affect every document Claude generates and users rarely request typographic fixes.
**Discussion:** Addresses a universal quality-of-life gap in document generation. No significant controversy noted.
**Status:** Open since 2026-03-04. [Link](https://github.com/anthropics/skills/pull/514)

### #538 — Fix case-sensitive file references in PDF skill
**Functionality:** Corrects 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where uppercase references (`REFERENCE.md`, `FORMS.md`) point to lowercase filenames, breaking on case-sensitive filesystems.
**Discussion:** Simple correctness fix. No extended discussion.
**Status:** Open since 2026-03-06. [Link](https://github.com/anthropics/skills/pull/538)

### #486 — Add ODT skill (OpenDocument text creation)
**Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods), triggered by mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice.
**Discussion:** Straightforward format-extension PR. No controversy.
**Status:** Open since 2026-03-01. [Link](https://github.com/anthropics/skills/pull/486)

### #210 — Improve frontend-design skill clarity and actionability
**Functionality:** Rewrites the frontend-design skill to ensure every instruction is something Claude can follow within a single conversation, with specific enough guidance to steer behavior without ambiguity.
**Discussion:** Focused on internal coherence and actionability. No extended discussion.
**Status:** Open since 2026-01-05. [Link](https://github.com/anthropics/skills/pull/210)

### #83 — Add skill-quality-analyzer and skill-security-analyzer meta-skills
**Functionality:** Two meta-skills for evaluating other skills: quality analysis across five dimensions (structure, documentation, examples, resources) and security analysis.
**Discussion:** Meta-skills that help the skills ecosystem self-regulate. No controversy.
**Status:** Open since 2025-11-06. [Link](https://github.com/anthropics/skills/pull/83)

### #1367 — Add self-audit skill (mechanical verification + reasoning quality gate)
**Functionality:** A skill that audits AI output before delivery: mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Claims universal compatibility with any project, stack, or model.
**Discussion:** Proposes a structured pre-delivery quality gate. Updated recently (2026-07-02).
**Status:** Open. [Link](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Clusters

From Issues, the most active unmet workflow demands group into three clusters:

### Security and trust boundary abuse (Issue #492)
43 comments, 2 👍. Community-raised concern that community-made skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability. Users may grant elevated permissions to community skills they believe are official. This is the highest-engagement issue in the dataset. [Link](https://github.com/anthropics/skills/issues/492)

### Skill-creator toolchain reliability (Issues #556, #1169, #1061)
Multiple issues report the same core bug: `run_eval.py` reports 0% trigger rate across all queries, making the description-optimization loop useless. Issue #556 has 12 comments and 7 👍. Issue #1169 adds that even literal slash-command queries score 0% recall. Issue #1061 documents three Windows compatibility failures (subprocess PATHEXT, cp1252 encoding, select on pipes). This is the most-impactful bug cluster in the community. [Link](https://github.com/anthropics/skills/issues/556) | [Link](https://github.com/anthropics/skills/issues/1169) | [Link](https://github.com/anthropics/skills/issues/1061)

### Org-wide skill sharing (Issue #228)
16 comments, 8 👍. Users request direct skill sharing within organizations without requiring manual .skill file download/re-upload workflow. Currently users must send files via Slack/Teams and have colleagues navigate to Settings > Capabilities. [Link](https://github.com/anthropics/skills/issues/228)

---

## 3. Active Pending Skills

PRs with active discussion not yet merged:

### #1298 — Fix `run_eval.py` (see section 1)
The most active PR. Multiple independent contributors have filed parallel fixes (#1099, #1050, #1323, #1261) addressing the same 0% recall problem from different angles. Discussion appears to be converging on a unified fix approach. [Link](https://github.com/anthropics/skills/pull/1298)

### #1367 — Self-audit skill (v1.3.0)
Updated 2026-07-02, the most recent major feature PR. Proposes a two-step quality gate: mechanical file verification then four-dimension reasoning audit. The author has also filed a related proposal issue (#1385) for a three-gate pipeline. Discussion appears focused on the reasoning audit dimensions. [Link](https://github.com/anthropics/skills/pull/1367)

### #1479 — Plan-file-hygiene skill
Updated 2026-07-27, addresses #1417 (planning artifacts accumulate with no lifecycle). The author credits community members for naming the problem and framing it as a lifecycle gap. Discussion appears collaborative with the original issue reporter. [Link](https://github.com/anthropics/skills/pull/1479)

### #1302 — Color-expert skill
Updated 2026-07-21. A self-contained color-expertise skill covering color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with a "what to use when" table (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and color theory. No controversy. [Link](https://github.com/anthropics/skills/pull/1302)

---

## 4. Daily Notes

1. **The `run_eval.py` 0% recall bug is the dominant community signal.** Five separate PRs (#1298, #1099, #1050, #1323, #1261) and three issues (#556, #1169, #1061) address the same root failure: the evaluation loop cannot detect skill triggers, making the description-optimization pipeline produce no signal. The bug is reported cross-platform (Windows and Unix) and has been independently reproduced by 10+ users. This is the single highest-impact problem in the repository today.

2. **Security namespace concerns are the highest-engagement non-bug issue.** Issue #492 (43 comments) about community skills impersonating official Anthropic skills under the `anthropic/` namespace has more discussion than any other design or feature request. This suggests the community is actively concerned about trust boundaries in the skill distribution model.

3. **Meta-skills for quality assurance are emerging as a contribution pattern.** Two PRs (#83, skill-quality-analyzer and skill-security-analyzer; #1367, self-audit) propose skills that evaluate other skills or outputs. This is a small sample (2 PRs) and does not yet constitute a trend, but the pattern is worth noting: contributors are building tools to govern the ecosystem rather than just adding domain skills.