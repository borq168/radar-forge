# Skills Ecosystem Highlights 2026-08-11

> Generated: 2026-08-11 01:02 UTC | Repositories covered: 2

Sources:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ One or more skills repositories failed to fetch. The report uses partial or missing data.

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

Here is the skills community highlights report based on the data from github.com/anthropics/skills as of 2026-08-11.

---

### Skills Community Highlights Report

**Date:** 2026-08-11
**Source:** github.com/anthropics/skills

---

### 1. Top Skills Ranking

The following are the most-discussed Skill Pull Requests (PRs) based on community engagement and the depth of their technical discussions.

1.  **Skill-Creator Fixes (Multiple PRs):** The most active area of discussion is the series of PRs fixing the `run_eval.py` script. PRs #1298, #1099, #1050, and #1323 all address the critical bug where the evaluation loop reports `recall=0%` on every iteration, rendering the description-optimization loop useless. The discussions detail the root causes, including Windows subprocess handling, YAML parsing failures, and tool detection logic. This is a high-priority, multi-faceted fix.
    - **Status:** Open. Community is actively submitting patches for different aspects of the problem.
    - **Links:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323)

2.  **Document Typography (#514):** A skill for preventing common typographic errors in AI-generated documents, such as orphan words, widow paragraphs, and numbering misalignment. The discussion highlights the universal nature of the problem ("These issues affect every document Claude generates") and the high value of a skill that addresses a frequent, unasked-for quality issue.
    - **Status:** Open. No strong objections; the skill appears to be addressing a clear, unmet need.
    - **Link:** [#514](https://github.com/anthropics/skills/pull/514)

3.  **Self-Audit / Reasoning Quality Gate (#1367):** A skill that performs a two-step audit: mechanical file verification followed by a four-dimension reasoning quality check. The discussion focuses on its universal applicability ("any project, any tech stack, any model") and its structured, damage-severity-prioritized approach. This skill is a direct response to the quality-control gap identified in the community.
    - **Status:** Open. A high-quality proposal with a clear, well-defined scope.
    - **Link:** [#1367](https://github.com/anthropics/skills/pull/1367)

4.  **ODT Skill (#486):** Adds support for creating, filling, and converting OpenDocument Format files (.odt, .ods). The discussion centers on expanding the document-ecosystem beyond the existing PDF and DOCX skills to include open-source standards, a frequent request from users of LibreOffice and similar tools.
    - **Status:** Open. Represents a clear expansion of the document skills portfolio.
    - **Link:** [#486](https://github.com/anthropics/skills/pull/486)

5.  **Skill-Quality/Security Analyzers (#83):** Proposes two meta-skills: one for evaluating skill quality across five dimensions, and another for security analysis. The discussion highlights the community’s desire for tools to ensure the reliability and safety of the skills they use or create, especially as the ecosystem grows.
    - **Status:** Open. A foundational proposal for skill ecosystem governance.
    - **Link:** [#83](https://github.com/anthropics/skills/pull/83)

6.  **Pyxel Retro Game Engine (#525):** Integrates the Pyxel retro game engine, enabling Claude to create and iterate on pixel-art games. The discussion is notable for being a concrete, creative-use case that extends skills beyond document generation and code refactoring into a specific creative domain.
    - **Status:** Open. A unique and well-defined skill with a specific MCP server dependency.
    - **Link:** [#525](https://github.com/anthropics/skills/pull/525)

7.  **Testing Patterns (#723):** A comprehensive skill covering the full testing stack, including unit testing, React component testing, and testing philosophy. The discussion highlights the community’s need for structured, opinionated guidance on testing, a critical but often chaotic part of software development.
    - **Status:** Open. A large, well-structured skill addressing a core developer workflow.
    - **Link:** [#723](https://github.com/anthropics/skills/pull/723)

8.  **Plan-File-Hygiene (#1479):** Addresses the problem of planning artifacts accumulating in projects without clear lifecycle management. The discussion explicitly credits community members for defining the problem, showing a collaborative development process where the solution is built on community framing.
    - **Status:** Open. A direct response to a community-identified workflow gap.
    - **Link:** [#1479](https://github.com/anthropics/skills/pull/1479)

---

### 2. Community Demand Clusters

The following unmet workflow demands are clearly visible in the Issues data, representing new skill directions the community is asking for.

- **Security & Governance:** Issue #492 raises a significant trust-boundary vulnerability where community skills are distributed under the `anthropic/` namespace, impersonating official ones. Issue #1175 questions the security implications of handling sensitive documents (e.g., SharePoint Online) via skills. This cluster signals a strong demand for namespace management, security auditing, and official distribution channels.
    - **Link:** [#492](https://github.com/anthropics/skills/issues/492), [#1175](https://github.com/anthropics/skills/issues/1175)

- **Agent Cognition & Memory Management:** Issue #1329 proposes a "compact-memory" skill for symbolic notation to manage long-running agent state more efficiently. Issue #1385 proposes a "Reasoning Quality Gate Pipeline" for pre-task calibration and adversarial review. This cluster points to a demand for skills that help agents manage their own cognition and context, rather than just performing external tasks.
    - **Link:** [#1329](https://github.com/anthropics/skills/issues/1329), [#1385](https://github.com/anthropics/skills/issues/1385)

- **Ecosystem Efficiency & Integration:** Issue #228 requests org-wide skill sharing to avoid manual file transfers. Issue #1487 reports a critical bug where a single skill (`claude-api`) eagerly injects ~156k tokens, exhausting the context window. This cluster highlights a demand for better platform-level features (sharing, installation) and a need for skills to be designed with resource efficiency in mind.
    - **Link:** [#228](https://github.com/anthropics/skills/issues/228), [#1487](https://github.com/anthropics/skills/issues/1487)

---

### 3. Active Pending Skills

These PRs have active technical discussions and are not yet merged.

- **`run_eval.py` Multi-Fix Patch (#1298):** This PR is central to the major `recall=0%` bug. It proposes a comprehensive fix that installs the eval artifact as a real skill and fixes Windows stream reading. The discussion is ongoing, as other PRs (#1099, #1050, #1323) offer alternative or incremental fixes for the same core problem. The community is actively debating the best approach to a unified solution.
    - **Status:** Open. High engagement. The discussion is focused on scope and correctness.
    - **Link:** [#1298](https://github.com/anthropics/skills/pull/1298)

- **Self-Audit Skill (#1367):** The discussion is exploring the skill's design trade-offs, particularly its "universal" claim and how it interacts with project-specific requirements. The author is actively defending the design choices and rationale.
    - **Status:** Open. Discussing scope and design philosophy.
    - **Link:** [#1367](https://github.com/anthropics/skills/pull/1367)

- **Isolate Eval Command Files (#1261):** This PR directly addresses the root cause of the `recall=0%` bug by preventing the eval script from polluting the user's live project directory. The discussion is technical, focusing on the `find_project_root()` logic and how to safely isolate eval artifacts.
    - **Status:** Open. Discussion is focused on implementation details for a critical fix.
    - **Link:** [#1261](https://github.com/anthropics/skills/pull/1261)

---

### 4. Daily Notes

- **The `run_eval.py` pipeline is the single most broken critical path.** Data shows 4 PRs and 3 Issues all converging on the same symptom: `recall=0%` in the description-optimization loop. This is not a minor bug; it is a systemic failure that undermines the entire skill-creation workflow, making it impossible to empirically improve a skill's description. The community is actively submitting fixes, but a unified solution is still pending.

- **Community focus is shifting from "what can a skill do?" to "how do we ensure skills are safe and reliable?"** The emergence of security analyzers (#83, #492), reasoning quality gates (#1367, #1385), and self-audit skills (#1367) indicates a maturing ecosystem. The initial excitement about creating new skills is being complemented by a demand for tools that govern, audit, and verify them.

- **The bug report on `claude-api` skill (#1487) highlights a critical failure mode for skill design.** Injecting 156k tokens in a single call is a catastrophic use of the context window. This serves as a clear, evidence-backed warning that skill authors must be acutely aware of token budgets and avoid "eager injection" patterns that can instantly exhaust a user's available context.