# Skills Ecosystem Highlights 2026-08-18

> Generated: 2026-08-18 00:42 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights – 2026-08-18

## Top Skills Ranking

The following Pull Requests represent the most actively discussed or substantial new Skill contributions in the repository. All are currently open.

1. **#1298 – fix(skill-creator): run_eval.py always reports 0% recall**
   Addresses a critical bug where `run_eval.py` (and dependents `run_loop.py`, `improve_description.py`) produce `recall=0%` for every skill description. The fix installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. The issue has been independently reproduced 10+ times.
   [Link](https://github.com/anthropics/skills/pull/1298)

2. **#514 – Add document-typography skill**
   New Skill for typographic quality control in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Targets a common pain point in Claude’s document output.
   [Link](https://github.com/anthropics/skills/pull/514)

3. **#486 – Add ODT skill (OpenDocument text creation, template filling, ODT→HTML)**
   Comprehensive Skill for handling `.odt`, `.ods` files – creation, conversion, template filling. Covers LibreOffice, ISO standard formats.
   [Link](https://github.com/anthropics/skills/pull/486)

4. **#83 – Add skill-quality-analyzer and skill-security-analyzer to marketplace**
   Two meta-skills: one evaluating Skill structure, documentation, and examples across five dimensions; the other auditing Skills for security vulnerabilities. Part of the example-skills collection.
   [Link](https://github.com/anthropics/skills/pull/83)

5. **#1367 – feat(skills): add self-audit – mechanical verification + four-dimension reasoning quality gate (v1.3.0)**
   A universal skill that first verifies every claimed output file exists, then applies a four-dimension reasoning audit in damage-severity order. Designed to work with any project or model.
   [Link](https://github.com/anthropics/skills/pull/1367)

6. **#568 – feat: add ServiceNow platform skill**
   Broad Skill covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, IntegrationHub, and CSDM. A large-scope enterprise skill.
   [Link](https://github.com/anthropics/skills/pull/568)

7. **#723 – feat: add testing-patterns skill**
   Comprehensive testing skill covering philosophy, unit testing (AAA pattern, naming), React component testing (Testing Library), and more. Targets the full testing stack.
   [Link](https://github.com/anthropics/skills/pull/723)

8. **#525 – Add pyxel skill for retro game development**
   Skill for the Pyxel retro game engine (via pyxel-mcp MCP server). Documents the workflow: write → run_and_capture → inspect → iterate.
   [Link](https://github.com/anthropics/skills/pull/525)

---

## Community Demand Clusters

From the 50 issues (top 15 shown), several distinct demand areas emerge:

- **Security & Trust Boundaries**
  Issue #492 (43 comments) warns that community skills distributed under the `anthropic/` namespace enable trust boundary abuse, potentially leading to elevated permissions for unofficial skills. Issue #1175 (4 comments) raises concerns about security and context window when handling SharePoint Online documents via Agent Skills.
  [#492](https://github.com/anthropics/skills/issues/492) | [#1175](https://github.com/anthropics/skills/issues/1175)

- **Skill Distribution & Sharing**
  Issue #228 (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai – currently users must manually share `.skill` files. Issue #189 (6 comments, 9 👍) reports that `document-skills` and `example-skills` plugins install identical content, causing duplicates. Issue #62 (10 comments) describes skills disappearing after file renaming.
  [#228](https://github.com/anthropics/skills/issues/228) | [#189](https://github.com/anthropics/skills/issues/189) | [#62](https://github.com/anthropics/skills/issues/62)

- **Skill Development Tooling Reliability**
  Issue #556 (12 comments, 7 👍) documents the `run_eval.py` 0% trigger rate bug that PR #1298 aims to fix. Issue #202 (8 comments) calls for updating `skill-creator` to best practices – it reads like developer documentation rather than an operational skill. Issue #1487 (4 comments) reports that the `claude-api` skill injects ~156k tokens, exhausting the context window. Issue #1362 (3 comments) lists three independent problems with `web-artifacts-builder` scripts.
  [#556](https://github.com/anthropics/skills/issues/556) | [#202](https://github.com/anthropics/skills/issues/202) | [#1487](https://github.com/anthropics/skills/issues/1487) | [#1362](https://github.com/anthropics/skills/issues/1362)

- **New Skill Proposals**
  Several issues propose skills focused on agent quality and governance:
  - #1329 (9 comments): compact-memory – symbolic notation for compact agent state to save context.
  - #412 (6 comments): agent-governance – safety patterns for AI agent systems (policy enforcement, threat detection, trust scoring, audit trails).
  - #1385 (4 comments): Reasoning Quality Gate Pipeline – pre-task calibration, adversarial review, delivery verification.
  [#1329](https://github.com/anthropics/skills/issues/1329) | [#412](https://github.com/anthropics/skills/issues/412) | [#1385](https://github.com/anthropics/skills/issues/1385)

- **Integration & Platform Requests**
  Issue #29 (4 comments) asks about using Skills with AWS Bedrock. Issue #16 (4 comments) proposes exposing Skills as MCPs. Issue #12 (4 comments, 1 👍) requests guidance to avoid whitespace reformatting in the docx/ooxml skill.
  [#29](https://github.com/anthropics/skills/issues/29) | [#16](https://github.com/anthropics/skills/issues/16) | [#12](https://github.com/anthropics/skills/issues/12)

---

## Active Pending Skills

These Pull Requests have recent updates and/or ongoing discussion but remain unmerged.

- **#1298 – fix(skill-creator): run_eval.py 0% recall**
  Updated 2026-06-23. The most commented-on PR. Fixes a systemic bug blocking skill evaluation. The author has engaged with multiple reviewer comments.
  [Link](https://github.com/anthropics/skills/pull/1298)

- **#1367 – feat(skills): add self-audit quality gate**
  Updated 2026-07-02. A new universal skill for verification and reasoning audit. The author has also opened issue #1385 proposing a pipeline extension.
  [Link](https://github.com/anthropics/skills/pull/1367)

- **#568 – feat: add ServiceNow platform skill**
  Updated 2026-08-12. A large enterprise skill with broad coverage. Last updated less than a week ago, suggesting ongoing review.
  [Link](https://github.com/anthropics/skills/pull/568)

- **#525 – Add pyxel skill for retro game development**
  Updated 2026-07-15. Supported by an external MCP server. The author is active in the Pyxel ecosystem.
  [Link](https://github.com/anthropics/skills/pull/525)

- **#1595 – docs: add UIZZE to partner skills**
  Updated 2026-08-17 (yesterday). A simple documentation addition linking to an external anti-UI-slop skill. Low technical complexity.
  [Link](https://github.com/anthropics/skills/pull/1595)

- **#1538 – fix: bring two skills back under the Agent Skills spec**
  Updated 2026-08-12. Addresses validation failures in `template/SKILL.md` and another skill. Involves spec compliance.
  [Link](https://github.com/anthropics/skills/pull/1538)

---

## Daily Notes

1. **Skill development tooling is the most active area of community concern.** Multiple PRs and issues target the `skill-creator` scripts (run_eval.py, Windows compatibility, validation). The 0% recall bug (#556, PR #1298) affects all skill optimization workflows and has been independently reproduced. This suggests that basic tooling reliability is a bottleneck for the community’s ability to contribute high-quality skills.

2. **Security and trust are emerging as a distinct cluster.** Issue #492 (43 comments) on namespace abuse and issue #1175 on SPO security concerns, together with the addition of a `skill-security-analyzer` (PR #83), indicate growing awareness of trust boundaries in the skills ecosystem. This is not yet a dominant trend but is supported by multiple independent items.

3. **Meta-skills and quality assurance are receiving sustained attention.** PR #1367 (self-audit), issue #1385 (reasoning quality gate pipeline), and issue #412 (agent-governance) all propose skills that evaluate or govern other skills. The community is actively exploring how to ensure reliability and safety of AI output through skill-based mechanisms.