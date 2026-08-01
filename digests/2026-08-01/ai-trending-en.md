# GitHub AI Trending Digest 2026-08-01

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-01 08:16 UTC

---

# GitHub AI Trending Digest – 2026-08-01

## Today's Hot List Brief

Today's AI trending activity is dominated by three themes: **AI agent skill/plugin ecosystems** (e.g., `reverse-skill`, `last30days-skill`, `openwork`), **Microsoft's educational AI repository** (`AI-For-Beginners` surging +1,592 stars), and **deepfakes** (`faceswap` continuing steady growth). The topic search reveals a massive influx of new agent harness projects (e.g., `ECC`, `hermes-agent`, `caveman`) and RAG/knowledge management tools. Notably, several projects target specific AI coding assistants (Claude Code, Codex, Cursor) with skill packs and memory layers.

## Top Projects by Category

### 🔧 AI Infrastructure
- **[github/copilot-sdk](https://github.com/github/copilot-sdk)** – ⭐0 (+7 today)
  Multi-platform SDK for integrating GitHub Copilot Agent into apps and services; official release adds Java support.
- **[ollama/ollama](https://github.com/ollama/ollama)** – ⭐177,474
  Local LLM runner supporting Kimi, GLM, MiniMax, DeepSeek, Qwen, etc.; now includes GLM-5.2 model.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** – ⭐163,216
  Core model-definition framework for state-of-the-art ML models; daily driver for most AI projects.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** – ⭐158,814
  API for web search, scraping, and interaction at scale; increasingly used as a data source for AI agents.

### 🤖 AI Agents / Workflows
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** – ⭐223,572
  "The agent that grows with you" – a popular autonomous agent framework gaining traction.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** – ⭐185,748
  Vision of accessible AI for everyone; continues to be a foundational agent platform.
- **[langgenius/dify](https://github.com/langgenius/dify)** – ⭐150,957
  Build agentic workflows and RAG pipelines with rich model and tool support in a collaborative workspace.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** – ⭐107,450
  Make websites accessible for AI agents; enables automated online task execution.
- **[different-ai/openwork](https://github.com/different-ai/openwork)** – ⭐0 (+806 today)
  Open-source alternative to Claude Cowork, powered by opencode; surged today as a direct competitor.
- **[zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** – ⭐0 (+335 today)
  AI-powered security skill router pack for Claude Code, Cursor, Cline, etc.; combines reverse engineering with agent routing.

### 📦 AI Applications
- **[deepfakes/faceswap](https://github.com/deepfakes/faceswap)** – ⭐0 (+93 today)
  Deepfakes software for all; remains a prominent deep learning application for face swapping.
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** – ⭐0 (+658 today)
  AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket; synthesizes grounded summaries.
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** – ⭐49,230
  AI productivity studio with smart chat, autonomous agents, and 300+ assistants; unified access to frontier LLMs.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** – ⭐42,277
  AI turns documents/topics into native PowerPoint decks with charts, transitions, and audio narration.

### 🧠 LLMs / Training
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** – ⭐100,270
  Step-by-step PyTorch implementation of a ChatGPT-like LLM; key resource for learning LLM internals.
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** – ⭐4,428
  Course on building a tiny vLLM + Qwen for Apple Silicon; systems engineering approach to LLM inference.
- **[AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)** – ⭐55
  Decoder-only LLM built from scratch in pure Rust using Candle; features gated DeltaNet + sparse attention + MoE.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** – ⭐7,254
  LLM evaluation platform supporting 100+ datasets across models like Llama3, Mistral, GPT-4, Qwen, etc.

### 🔍 RAG / Knowledge
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** – ⭐86,547
  Leading open-source RAG engine fusing retrieval-augmented generation with agent capabilities.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** – ⭐62,236
  Universal memory layer for AI agents; enables persistent context across sessions.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – ⭐99,880
  Turn any codebase/docs/configs into a queryable knowledge graph; works with Claude Code, Cursor, Codex.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** – ⭐45,444
  High-performance cloud-native vector database for scalable ANN search; production-grade RAG backend.
- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** – ⭐12,755
  MLsys2026 paper: "RAG on Everything" with 97% storage savings; runs 100% private on personal devices.

## Hot List Observations

Today's data shows a clear **concentration in the AI Agent category**, with multiple new projects targeting skill ecosystems for specific coding assistants (Claude Code, Codex, Cursor). The `reverse-skill` and `last30days-skill` repositories exemplify this trend: they package domain-specific skills (security research, topic summarization) as reusable AI agent modules. The emergence of `openwork` as a direct open-source clone of Claude Cowork indicates growing demand for transparent, self-hosted agent collaboration tools.

The **RAG/Knowledge** category also remains strong, with several new vector database projects (`LEANN`, `PageIndex`) and memory layers (`mem0`, `cognee`) focused on reducing token usage and improving retrieval accuracy. Notably, `Graphify-Labs/graphify` combines AST parsing with knowledge graphs, offering a deterministic alternative to vector-only approaches.

The **LLMs/Training** category is less active in terms of new stars, but the presence of `tiny-llm` and `AarambhDevHub/aarambh-studio` suggests continued interest in educational and lightweight implementations. The educational surge of `AI-For-Beginners` (+1,592 today) reflects a broader onboarding wave.

Unexpectedly, *faceswap* remains in the trending list, indicating sustained interest in generative AI applications beyond LLMs. No direct connection to any specific LLM release or industry event is evident from today's data alone.

## Community Hot Spots

- **`reverse-skill` (⭐335 today)** – Security researchers and AI developers are watching this skill pack that combines reverse engineering with AI routing; it's one of the few projects bridging cybersecurity and agent ecosystems.
- **`openwork` (⭐806 today)** – As an open-source alternative to Claude Cowork, it could become a standard for team-based AI agent workspaces; rapid star growth suggests strong community interest.
- **`mem0` (⭐62,236)** – Universal memory layer for AI agents is gaining traction as a key component for long-running, context-aware agents; its integration with multiple frameworks makes it a versatile tool.
- **`Graphify-Labs/graphify` (⭐99,880)** – The "queryable knowledge graph" approach for codebases is novel and may influence how AI agents understand project structure, especially for large codebases.
- **`tiny-llm` (⭐4,428)** – For developers interested in systems-level LLM inference, this course provides a hands-on build of a mini vLLM on Apple Silicon, filling a gap in practical serving education.