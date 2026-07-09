# GitHub AI Trending Digest 2026-07-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-09 00:28 UTC

---

## GitHub AI Trending Digest – 2026-07-09

### 1. Today’s Hot List Brief
AI agent tooling dominates today’s trending list, led by `iOfficeAI/OfficeCLI` (+1,717 stars) – an Office suite built for agents – and `addyosmani/agent-skills` (+1,297), which packages production-grade engineering skills for coding agents. System‑prompt collections surged again with `asgeirtj/system_prompts_leaks` (+1,218), while agentic frameworks (`obra/superpowers`, `claude-video`) and agent infrastructure (`TencentCloud/CubeSandbox`, `TencentDB-Agent-Memory`) collectively attracted thousands of new stars. The pattern is clear: the community is aggressively building the productivity layer around coding agents and long‑running agent sessions.

---

### 2. Top Projects by Category

#### 🤖 AI Agents / Workflows
| Project | Stars | What it is & why it matters today |
|---------|-------|-------------------------------------|
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | ⭐1,717 (all today) | A single‑binary CLI that lets AI agents read, edit, and automate Word, Excel, and PowerPoint files – no Office installation required. The strongest single‑day jump in the list. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | ⭐1,297 (all today) | A set of production‑grade engineering skills for AI coding agents (e.g., code review, testing, refactoring). Highlights a growing demand for reusable agentic “skills”. |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐1,116 (all today) | An agentic skills framework and software development methodology. The rapid uptake suggests teams are adopting structured approaches to building autonomous developer agents. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | ⭐951 (all today) | Gives Claude the ability to download, transcribe, and analyse any video. Extends multimodal agent capabilities without relying on native vision APIs. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | ⭐352 (all today) | An agent skill that researches topics across Reddit, X, YouTube, HN, Polymarket, etc. and synthesises a grounded summary. Illustrates the trend of augmenting agents with real‑time web intelligence. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | total 211,577 | A high‑star agent framework tagged `ai-agent`. While not today’s trending new star, it remains a very active, growing project in the agent ecosystem. |

#### 🔧 AI Infrastructure (dev tools, sandboxes, executors)
| Project | Stars | What it is & why it matters today |
|---------|-------|-------------------------------------|
| [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | ⭐564 (all today) | Instant, concurrent, secure sandbox for AI agents. Addresses a critical gap: safe execution environments for agent‑generated code. |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | ⭐28 today (total not provided) | An MCP server granting Claude terminal control, filesystem search, and diff editing. A small but steady gain reflecting the importance of secure local toolchains for agents. |
| [ollama/ollama](https://github.com/ollama/ollama) | total 175,752 | The go‑to local LLM runner, with recent support for Kimi‑K2.6, GLM‑5.1, and other models. Active in `llm` topic, underpins many agent setups. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | total 85,734 | High‑throughput LLM inference engine. Continues to be a staple in self‑hosted and enterprise agent architectures. |

#### 🔍 RAG / Knowledge (vector stores, agent memory, retrieval)
| Project | Stars | What it is & why it matters today |
|---------|-------|-------------------------------------|
| [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐395 (all today) | A lightweight, in‑process vector database in C++. Its appearance today signals interest in embeddable, low‑dependency vector search for agents. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | ⭐318 (all today) | A 4‑tier progressive pipeline for fully local agent long‑term memory, with zero external API dependencies. Directly tackles persistent context across sessions. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | total 60,425 | Universal memory layer for AI agents; tagged `rag`. Remains one of the most watched projects in the agent‑memory space this week. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | total 84,616 | Leading open‑source RAG engine with agent capabilities. Active in `rag` topic, reflecting sustained interest in production‑grade RAG pipelines. |

#### 📦 AI Applications (vertical solutions)
| Project | Stars | What it is & why it matters today |
|---------|-------|-------------------------------------|
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | ⭐799 (all today) | Turns commodity WiFi signals into real‑time spatial intelligence, presence detection, and vital‑sign monitoring – without video. A novel AI‑driven sensing application. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | total 37,753 | AI‑generated, fully editable PowerPoint presentations from any document. Active this week under `ai-agent`, emblematic of office‑productivity AI apps. |

#### 🧠 LLMs / Training (prompts, evaluation)
| Project | Stars | What it is & why it matters today |
|---------|-------|-------------------------------------|
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | total 54,168 / +1,218 today | Extracted system prompts from Claude, ChatGPT, Gemini, Grok, Copilot, and more. A high‑velocity repository feeding developer curiosity about model steering. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | total 7,173 | LLM evaluation platform supporting 100+ datasets. While not today’s trending star, it remains among the most active `llm-model` projects this week. |

---

### 3. Hot List Observations
Today’s data shows a pronounced concentration in **agent‑adjacent tools** – far more than in typical daily snapshots. Of the 10 AI‑relevant trending repos, 7 are directly about agent skills, office interaction, memory, sandboxing, or prompting for agents. The standout numbers on `OfficeCLI` (+1,717) and `agent-skills` (+1,297) indicate that the community is moving from building agent frameworks to building the concrete, reusable modules that make agents productive on real tasks.

A second noteworthy cluster is **agent memory and persistence**. Both `TencentDB-Agent-Memory` (+318) and `zvec` (+395) appeared on trending, and the topic search highlights high‑star projects like `mem0` and `ragflow` that were also active this week. This suggests a shared effort to solve the problem of giving agents long‑term, local context without external API calls – a direct response to the practical friction of stateless agent sessions.

The `system_prompts_leaks` repository (+1,218) continues to draw attention; its frequent updates with prompts from the latest model releases (Claude Fable 5, Gemini 3.5 Flash, etc.) keep it in the daily trending orbit. No new LLM releases or major training news are reflected in today’s data – the focus is squarely on the middleware and operational layer around existing models.

---

### 4. Community Hot Spots
- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) & [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** – Both are new repositories with explosive first‑day growth. Developers are clearly seeking ready‑to‑use capabilities for coding and document‑automation agents.
- **[TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox) & [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** – Tencent’s dual release of a sandbox and a memory pipeline for agents landed on the same day, pointing to a deliberate push into agent infrastructure. Both are worth exploring for teams building production‑grade agent systems.
- **[alibaba/zvec](https://github.com/alibaba/zvec)** – A lightweight, in‑process vector database written in C++. For developers wanting to embed fast vector search without heavy dependencies, this is a timely option, especially given the day’s focus on local‑first agent memory.
- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** – Continuously updated prompts from frontier models. Useful for understanding how model providers steer behaviour, and for constructing your own agent system prompts.