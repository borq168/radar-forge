# Skills Ecosystem Highlights 2026-08-17

> Generated: 2026-08-17 03:50 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills Community Highlights Report – 2026-08-17

## 1. Top Skills Ranking

The most-discussed Pull Requests (by comment count) in the repository cover new skill proposals, critical fixes, and tooling improvements. Below are the top 8.

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|--------------|----------------------|--------|
| 1 | **#1298 – Fix run_eval.py 0% recall** | Repairs the skill‑creator’s evaluation script so that recall is no longer always 0%; fixes Windows stream reading, trigger detection, and parallel workers. | Multiple independent reproductions of the bug (issue #556). The PR is a direct fix for the optimisation loop running against noise. | Open |
| 2 | **#514 – document‑typography** | Typographic quality control for AI‑generated documents: prevents orphan word wrap, widow paragraphs, and numbering misalignment. | Addresses common document quality issues. No negative reactions; seen as a practical addition. | Open |
| 3 | **#538 – Fix case‑sensitive file references in pdf skill** | Corrects 8 case‑sensitivity mismatches in `skills/pdf/SKILL.md` that break on case‑sensitive filesystems. | A straightforward fix; the same author also contributed similar fixes for docx and YAML validation. | Open |
| 4 | **#486 – ODT (OpenDocument) skill** | Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods) including template processing. | Adds a new file format to the skills library. No major controversy; waits for review. | Open |
| 5 | **#210 – Improve frontend‑design skill clarity** | Rewrites the frontend‑design skill to be more actionable and internally coherent, ensuring every instruction is actually executable by Claude. | Focus on skill quality; the PR aims to make the skill “steer behaviour without hallucination”. | Open |
| 6 | **#83 – skill‑quality‑analyzer & skill‑security‑analyzer** | Two meta‑skills for evaluating other skills across five dimensions (structure, documentation, etc.) and for security analysis. | Introduces a new category of “meta‑skills”. Discussion likely revolves around utility and potential overlap with built‑in validation. | Open |
| 7 | **#1367 – self‑audit (v1.3.0)** | A skill that audits AI output: mechanical file verification first, then a four‑dimension reasoning audit in damage‑severity order. | Proposes a universal quality gate. The author also filed a related issue (#1385) for a pipeline. | Open |
| 8 | **#723 – testing‑patterns** | Comprehensive testing skill covering the Testing Trophy model, unit tests, React component tests, integration, end‑to‑end, and property‑based testing. | Large scope; likely to be a reference skill for testing workflows. | Open |

## 2. Community Demand Clusters

From the 50 sampled Issues, several recurring themes emerge. These are grouped by similarity, not as confirmed trends.

**New Skill Proposals**
- **compact‑memory** (#1329) – Symbolic notation for compact agent state, reducing context overhead.
- **agent‑governance** (#412) – Safety patterns for AI agent systems: policy enforcement, threat detection, audit trails.
- **reasoning quality gate pipeline** (#1385) – Three‑stage pipeline (pre‑task calibration, adversarial review, delivery verification).

**Platform & Tooling Improvements**
- **Organisation‑wide skill sharing** (#228) – Direct sharing within Claude.ai, avoiding manual file transfer.
- **MCP exposure of skills** (#16) – Expose skills as MCP tools for better API integration.
- **AWS Bedrock compatibility** (#29) – Request to make skills work with Bedrock deployments.

**Security & Trust Concerns**
- **Namespace trust boundary abuse** (#492) – Community skills distributed under the `anthropic/` namespace create a trust vulnerability. High comment count (43) and 2 👍.
- **SPO document security** (#1175) – Security concerns when embedding access control logic inside SKILL.md for SharePoint Online.

**Bug/Quality Reports**
- **run_eval.py 0% recall** (#556, #1419) – Persistent evaluation bug affecting skill‑creator.
- **Duplicate skills from loading both plugins** (#189) – `document-skills` and `example-skills` contain identical content.
- **Context window exhaustion by claude‑api skill** (#1487) – Skill eagerly injects ~156k tokens.

## 3. Active Pending Skills

Several open PRs are still under active discussion (comments ongoing, updates within the last month). The following are representative:

- **#1298 – Fix run_eval.py** – The most‑commented PR. Discusses the root cause of the 0% recall bug and Windows compatibility. Last updated 2026‑06‑23.
- **#514 – document‑typography** – Waiting for review. Last updated 2026‑03‑13.
- **#568 – ServiceNow platform skill** – Very broad scope covering ITSM, ITOM, SecOps, etc. Last updated 2026‑08‑12 (active).
- **#1367 – self‑audit** – Author has also filed a related issue. Last updated 2026‑07‑02.
- **#1479 – plan‑file‑hygiene** – Addresses the accumulation of planning artifacts. Credits community members for framing the problem. Last updated 2026‑07‑27.
- **#1538 – Fix two skills to match Agent Skills spec** – A validation fix; the author noted that `template/SKILL.md` and another skill fail spec conformance. Last updated 2026‑08‑12.

All are open; no maintainer merge decisions are visible in the data.

## 4. Daily Notes

1. **Windows compatibility is a recurring pain point.** Three PRs (#1298, #1099, #1050) and two issues (#556, #1419) directly address Windows‑specific failures in the skill‑creator toolchain. This suggests a growing Windows user base that is currently underserved.

2. **The run_eval 0% recall bug is the most visible blocker.** It appears in multiple PRs and issues, with 10+ independent reproductions. The fix in #1298 is the most active PR, but the bug remains unresolved as of the data snapshot.

3. **Skill quality and trust are emerging community concerns.** The security namespace issue (#492) has the highest comment count (43) of all issues. Additionally, proposals for meta‑skills (quality‑analyzer, self‑audit) and the reasoning quality gate pipeline indicate a desire for more rigorous skill evaluation and safety checks.