# GitHub AI Trending Digest 2026-07-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-10 00:29 UTC

---

# GitHub AI Trending Digest — 2026-07-10

## 1. Today’s Hot List Brief
Today’s AI trend is overwhelmingly agent-focused: **ai-job-search** skyrocketed with +3,716 stars, while **agent-skills** and **OfficeCLI** both drew +2,500 and +1,929 respectively. Tooling that equips Claude-based coding agents—skills, design-system guidance, and Office file automation—dominated the top spots. A leaked collection of real system prompts (**system_prompts_leaks**) also surged, showing strong developer interest in model internals. Overall, the day belongs to projects that turn existing AI models into more capable, autonomous agents for practical tasks.

## 2. Top Projects by Category

### 🤖 AI Agents / Workflows
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — ⭐+2,554 today
  Production-grade engineering skills for AI coding agents; directly boosts agent performance.

- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** — ⭐+1,929 today
  Office suite designed for AI agents to read, edit, and automate Word, Excel, and PowerPoint without Office installed.

- **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** — ⭐+1,391 today
  Curated DESIGN.md files from popular brands so coding agents can generate matching UIs.

- **[vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)** — ⭐+535 today
  Fully autonomous AI agent system for complex penetration testing tasks.

### 🔧 AI Infrastructure
- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — ⭐+1,125 today
  Extracted system prompts from Claude, ChatGPT, Gemini, Grok, Cursor, Copilot, and more—updated regularly.

- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** — ⭐+718 today
  Gives Claude the ability to download, extract frames, transcribe, and analyse any video.

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — ⭐+215 today
  LLM-friendly open-source web crawler and scraper, making sites ready for AI consumption.

- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** — ⭐+185 today
  MCP server granting Claude terminal control, filesystem search, and diff editing.

- **[anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks)** — ⭐+194 today
  Official notebooks showcasing effective Claude usage patterns.

### 📦 AI Applications
- **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)** — ⭐+3,716 today
  AI-powered job application framework built on Claude Code; evaluates listings, tailors CVs, writes cover letters, and preps interviews.

- **[kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts)** — ⭐+235 today
  Lightweight text-to-speech model that runs entirely on CPU—fits in your pocket.

### 🧠 LLMs / Training
- No trending projects in this category today.
  (Perennial frameworks like [huggingface/transformers](https://github.com/huggingface/transformers) ⭐162k remain active in the last 7 days but did not make the daily trending list.)

### 🔍 RAG / Knowledge
- No trending projects in this category today.
  (Notable still‑active: [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐84.7k, [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐60.5k, though no daily star spike was recorded.)

## 3. Hot List Observations
Today’s data shows a clear concentration in **AI agents and supporting infrastructure**. Among the 11 AI‑relevant trending repos, 5 directly enable or extend AI agents (skills, design files, Office automation, pentesting, job-search framework), while 4 provide agent infrastructure (terminal control, video input, crawling, and Claude usage guides). The remaining two are a practical TTS model and a curated system‑prompt leak.

No repository focused on large‑language‑model training, fine‑tuning, or vector‑database/RAG broke into the trending list. This suggests the community’s immediate attention has shifted from building new foundation models toward **practical agent orchestration** and **tool‑use expansion** of existing models like Claude. The massive one‑day spikes for `ai-job-search` and `agent-skills` (3.7k and 2.5k) indicate virality, likely driven by social‑media shares and AI newsletter features.

The appearance of `system_prompts_leaks` with 1.1k new stars is unusual; it points to growing curiosity (and perhaps security concerns) about how top‑tier models are instructed behind the scenes. The simultaneous appearance of multiple “agent skills” and “design‑for‑agents” projects suggests an emerging pattern where the community is building standardised assets specifically for AI coding agents.

## 4. Community Hot Spots
- **ai-job-search** — Unusually high traction for a freshly launched tool; solves a universal pain point (job applications) with Claude‑driven automation. Worth watching for forks and integrations.
- **agent-skills** — A collection of production‑grade engineering skills for AI coding agents. If the concept catches on, it could influence how development teams structure knowledge for their AI copilots.
- **OfficeCLI** — First‑class Office document manipulation without Office installation, meant exclusively for AI agents. Signals growing demand for headless document tooling in agent workflows.
- **system_prompts_leaks** — A one‑stop repository of real system prompts from major models. Developers and security researchers will likely scrutinise these for insights into model behaviour and limitations.
- **claude‑video** — A creative hack extending Claude with video comprehension. Demonstrates how quickly the community can add multimodal capabilities to text‑centric models through external tooling.