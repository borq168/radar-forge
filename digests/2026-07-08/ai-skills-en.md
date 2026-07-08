# Skills Ecosystem Highlights 2026-07-08

> Generated: 2026-07-08 00:55 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights — 2026-07-08

## Top Skills Ranking
*(Exact comment counts unavailable; PRs are listed as they appear in the “sorted by comments” view. All are open and unmerged.)*

1. **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302))
   *Functionality*: A self-contained skill for any task requiring colour knowledge — colour naming systems (ISCC‑NBS, Munsell, XKCD, RAL, …), colour‑space guidance (OKLCH for scales, OKLAB for gradients, CAM16 for appearance), and practical colour conversion.
   *Discussion/status*: Opened 2026‑06‑10, still open. The description emphasises a “what to use when” approach.

2. **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723))
   *Functionality*: Comprehensive skill covering testing philosophy (Testing Trophy), unit testing (AAA pattern, pure functions), React component testing, and general test‑naming and edge‑case strategies.
   *Discussion/status*: Opened 2026‑03‑22, open. Aims to bring testing best‑practice directly into Claude’s generation.

3. **document-typography** ([#514](https://github.com/anthropics/skills/pull/514))
   *Functionality*: Prevents typographic defects in AI‑generated documents: orphan word wrap, widow paragraphs, numbering misalignment.
   *Discussion/status*: Opened 2026‑03‑04, last activity 2026‑03‑13. The PR states these issues affect every document Claude generates.

4. **ODT skill** ([#486](https://github.com/anthropics/skills/pull/486))
   *Functionality*: Creates, fills, reads and converts OpenDocument Format files (`.odt`, `.ods`), including template filling and ODT‑to‑HTML conversion. Triggered by mentions of “ODF”, “LibreOffice document”, etc.
   *Discussion/status*: Opened 2026‑03‑01, last updated 2026‑04‑14. Open.

5. **sensory — macOS automation via AppleScript** ([#806](https://github.com/anthropics/skills/pull/806))
   *Functionality*: Teaches Claude to use `osascript` for native macOS automation instead of screenshot‑based computer use. Tier‑1 actions work out of the box; Tier‑2 needs Accessibility permissions.
   *Discussion/status*: Opened 2026‑03‑29, last activity 2026‑04‑02. Open.

6. **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367))
   *Functionality*: A universal output‑audit skill that mechanically verifies claimed output files exist, then performs a four‑dimension reasoning audit ordered by damage severity. Tagged as v1.3.0.
   *Discussion/status*: Opened 2026‑06‑28, open. Described as model‑ and stack‑agnostic.

7. **meta skills: skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83))
   *Functionality*: Two marketplace‑targeted skills for evaluating other skills. The quality analyzer scores structure, documentation, examples and resources; the security analyzer checks for vulnerabilities.
   *Discussion/status*: Opened 2025‑11‑06, open. Adds to `example-skills` collection.

8. **SAP‑RPT‑1‑OSS predictor** ([#181](https://github.com/anthropics/skills/pull/181))
   *Functionality*: Skill for using SAP’s open‑source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data.
   *Discussion/status*: Opened 2025‑12‑28, last update 2026‑03‑16. Open.

## Community Demand Clusters
*(Derived from issues, without overstating trend strength.)*

- **Symbolic compact memory/state** — Issue [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) proposes a `compact-memory` skill that uses a symbolic notation to compress agent notes and persistent memory, saving context‑window tokens.
- **Agent governance/safety patterns** — Issue [#412](https://github.com/anthropics/skills/issues/412) (6 comments, now closed) requested a skill teaching governance patterns, trust scoring, and audit trails for agent systems. Interest exists but the proposal did not proceed as an issue.
- **MCP exposure** — Issue [#16](https://github.com/anthropics/skills/issues/16) (4 comments) suggests exposing Skills as MCP (Model Context Protocol) servers to standardise their API surface (e.g., algorithmic‑art → `generateAlgorithmArt(...)`).
- **Org‑wide skill sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 👍7) requests a built‑in mechanism for sharing skills within an organisation in Claude.ai, moving beyond manual file exchange. Not a new skill direction, but a high‑demand platform feature.

## Active Pending Skills
*(Open PRs introducing new skills, awaiting review, with no public maintainer feedback visible.)*

- **document-typography** [#514](https://github.com/anthropics/skills/pull/514) — Addresses AI‑generated document typographic issues. Last activity 2026‑03‑13; open.
- **ODT** [#486](https://github.com/anthropics/skills/pull/486) — OpenDocument creation, template filling, and HTML conversion. Last activity 2026‑04‑14; open.
- **color-expert** [#1302](https://github.com/anthropics/skills/pull/1302) — Colour naming, colour‑space selection, and conversion. Opened 2026‑06‑10; open.
- **sensory (macOS AppleScript automation)** [#806](https://github.com/anthropics/skills/pull/806) — Native macOS automation via `osascript`. Last activity 2026‑04‑02; open.
- **self-audit** [#1367](https://github.com/anthropics/skills/pull/1367) — Universal AI‑output audit (mechanical + reasoning). Opened 2026‑06‑28; open.

## Daily Notes
- **skill‑creator evaluation pipeline is a recurring pain point.** Today’s data shows five open PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323), [#362](https://github.com/anthropics/skills/pull/362)) all fixing Windows compatibility, trigger detection, or encoding bugs in `run_eval.py`. These align with issue reports [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), and [#1061](https://github.com/anthropics/skills/issues/1061), confirming that the description‑optimisation loop currently fails to measure recall correctly on many systems.
- **Document‑fidelity skills draw sustained attention.** Alongside the document‑typography (#514) and ODT (#486) skill proposals, fixes for DOCX tracked‑changes ID collisions ([#541](https://github.com/anthropics/skills/pull/541)) and PDF case‑sensitivity ([#538](https://github.com/anthropics/skills/pull/538)) are pending, reflecting community focus on improving the quality of AI‑generated office documents.
- **Trust‑boundary concerns are under active discussion.** Issue [#492](https://github.com/anthropics/skills/issues/492) (34 comments) reports that community skills distributed under the `anthropic/` namespace could impersonate official skills, raising a trust‑boundary vulnerability. This is the highest‑comment issue in the snapshot.