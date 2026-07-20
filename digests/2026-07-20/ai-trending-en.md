# GitHub AI Trending Digest 2026-07-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-20 02:58 UTC

---

# GitHub AI Trending Digest — 2026-07-20

## Today's Hot List Brief
Agent tooling dominates today’s trending AI repositories. The top new-stars-gainer is **bojieli/ai-agent-book**, an open-source book on AI agent design with full code, grabbing 1,734 stars. Close behind are **jamiepine/voicebox** (AI voice studio, +610), **tirth8205/code-review-graph** (local-first code intelligence graph for AI coding tools, +663), and **KnockOutEZ/wigolo** (free, local web search/fetch for agents over MCP, +595). Several inference and CLI-agent projects also broke through, including **ktransformers** (+360), **airllm** (+358), and **Kimi Code CLI** (+410), signaling sustained interest in efficient LLM deployment and agent harnesses.

---

## Top Projects by Category

### 🔧 AI Infrastructure
- [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) ⭐0 (+410 today)
  Kimi Code CLI – a terminal-native coding agent from Moonshot AI.
- [kvcache-ai/ktransformers](https://github.com/kvcache-ai/ktransformers) ⭐0 (+360 today)
  Heterogeneous LLM inference/fine‑tuning framework for running large models efficiently.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) ⭐0 (+358 today)
  Enables 70B LLM inference on a single 4GB GPU via aggressive compression.
- [github/copilot-sdk](https://github.com/github/copilot-sdk) ⭐0 (+39 today)
  Multi‑platform SDK for embedding GitHub Copilot Agent into external apps and services.
- [trycua/cua](https://github.com/trycua/cua) ⭐0 (+64 today)
  Scale computer‑use 2.0 with open‑source drivers, cross‑OS fleets, and benchmarks.
- [ollama/ollama](https://github.com/ollama/ollama) ⭐176,471 total
  (Background) The most‑starred local LLM runner; listed for context on inference infrastructure.

### 🤖 AI Agents / Workflows
- [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) ⭐0 (+1,734 today)
  《深入理解 AI Agent》– a complete book and code repository on agent principles and engineering (by 李博杰).
- [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) ⭐0 (+501 today)
  A hands‑on AI engineering curriculum: “Learn it. Build it. Ship it.”
- [1jehuang/jcode](https://github.com/1jehuang/jcode) ⭐0 (+235 today)
  Rust‑based Coding Agent Harness for orchestrating LLM‑powered development tasks.
- [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) ⭐0 (+83 today)
  AI Agent Assistant framework integrating multiple IM platforms, LLMs, and plugins.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐185,616 total
  (Background) Still the most‑known open‑source autonomous agent platform.

### 📦 AI Applications
- [jamiepine/voicebox](https://github.com/jamiepine/voicebox) ⭐0 (+610 today)
  Open‑source AI voice studio: clone, dictate, create – a complete voice workflow.
- [PostHog/posthog](https://github.com/PostHog/posthog) ⭐0 (+411 today)
  “Self‑driving product” platform with AI observability, session replay, and MCP integration for agent‑driven debugging.
- [Canner/WrenAI](https://github.com/Canner/WrenAI) ⭐0 (+121 today)
  Generative BI for AI agents – governed text‑to‑SQL with dashboards, charts, and 20+ data source connectors.
- [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo) ⭐0 (+595 today)
  Local‑first search, fetch, crawl & research web over MCP for AI coding agents – zero API keys.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐48,770 total
  AI productivity studio with agents, smart chat, and 300+ assistants; unified LLM access.

### 🧠 LLMs / Training
- [kvcache-ai/ktransformers](https://github.com/kvcache-ai/ktransformers) (also infra) – fine‑tune/inference optimization.
- [lyogavin/airllm](https://github.com/lyogavin/airllm) (also infra) – extreme memory‑saving inference.
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐162,745 total
  The foundational model‑definition framework for training and inference.
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐86,660 total
  High‑throughput LLM serving engine with PagedAttention.

### 🔍 RAG / Knowledge
- [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) ⭐0 (+663 today)
  Builds a persistent, queryable knowledge graph of your codebase to cut context for code reviews and large‑repo AI workflows.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐85,415 total
  RAG engine with agent capabilities, providing a deep context layer for LLMs.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐61,234 total
  Universal memory layer for agents (RAG‑focused).
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐91,655 total
  Turn any folder of code, schemas, or docs into a queryable knowledge graph for AI assistants.
- [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) ⭐85,815 total
  Bridges document images/PDFs to structured data for LLMs; 100+ languages.

---

## Hot List Observations
Today’s trending data is heavily skewed toward **developer‑facing agent tooling** and **local‑first AI workflows**. Repositories like `code-review-graph`, `wigolo`, `jcode`, and `kimi-cli` all directly address how AI coding agents interact with codebases and the web, suggesting that the community is actively solving the “context and tools” bottleneck for agents. The agent‑book and `ai-engineering-from-scratch` indicate a parallel demand for educational material as agent development moves into the mainstream.

Inference efficiency remains a recurring theme: `airllm` (70B on 4GB) and `ktransformers` both gained significant traction, reflecting the persistent need to run large models on commodity hardware. The presence of `PostHog` (with AI observability baked in) and `voicebox` (AI voice studio) shows that application‑layer AI tools are also breaking through, not just core frameworks.

The topic‑search data confirms that **RAG and vector databases** continue to be a gravitational centre – `ragflow`, `mem0`, `graphify`, and `anything-llm` all hold massive star counts. However, today’s trending list itself is light on new RAG projects except for the code‑graph repository; new activity favours the “agent harness” category.

No single LLM release or industry event is directly referenced in today’s data; the pattern is an organic, tooling‑driven expansion of the agent ecosystem.

---

## Community Hot Spots
- **`bojieli/ai-agent-book`** – An authoritative, complete guide to AI agent design and engineering in Chinese, with runnable code. Worth following for anyone building agents from scratch.
- **`tirth8205/code-review-graph`** – Persistent code‑intelligence graphs for AI coding assistants; could become a standard pre‑processing step in large-repo workflows.
- **`KnockOutEZ/wigolo`** – Local‑first, zero‑cost web search/fetch for agents over MCP; eliminates a major friction point (API keys, cloud dependency) for agent developers.
- **`lyogavin/airllm`** – Pushing the limit of consumer‑GPU inference for 70B models; valuable for edge deployment and personal AI experiments.
- **`Canner/WrenAI`** – Governed text‑to‑SQL with a growing list of data sources; a concrete example of GenBI being packaged for AI agents.