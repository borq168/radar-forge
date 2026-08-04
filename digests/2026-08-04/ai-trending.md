# GitHub AI 热榜日报 2026-08-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-04 01:00 UTC

---

# GitHub AI 热榜日报（2026-08-04）

## 今日热榜概览

今日 Trending 榜单中与 AI/ML 明确相关的项目共 13 个，集中在 **AI 智能体/工作流** 和 **AI 基础工具** 两个类别。智能体方向涌现出多项新项目：安全渗透 AI 路由包 `reverse-skill` 以 +2446 stars 位居今日榜首，团队级 Agent 记忆中心 `TencentDB-Agent-Memory` 和互联网访问代理 `Agent-Reach` 分别获得 +1090 和 +1057 stars。基础工具方面，超轻量 70B 推理引擎 `airllm` 和 PDF 智能检测库 `pdf-inspector` 也表现突出。微软两门 AI 入门教程今日重新获得大量关注，合计新增 2677 stars。主题搜索中 RAG/知识库与 LLM 生态项目保持高基数，但无异常增量。

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

- **[lyogavin/airllm](https://github.com/lyogavin/airllm)** ⭐0 (+1085 today) — 单张 4GB GPU 即可运行 70B 模型的推理引擎，大幅降低大模型本地部署的硬件门槛。
- **[antirez/ds4](https://github.com/antirez/ds4)** ⭐0 (+384 today) — DeepSeek 4 Flash 和 PRO 的本地推理引擎，统一支持 Metal、CUDA 和 ROCm，覆盖 Apple Silicon、NVIDIA 和 AMD 显卡。
- **[firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector)** ⭐0 (+1699 today) — 快速 PDF 检测与分类 Rust 库，自动识别扫描版/文本版 PDF，为 RAG 管道的路由决策提供预处理能力。
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** ⭐0 (+278 today) — 免费在终端、App、IDE 或手机中使用 Claude Code、Codex 等 AI 编码工具，支持语音输入，类似 OpenClaw 方案。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐177,710 — 本地运行 Kimi、DeepSeek、Qwen 等模型的 CLI 工具，持续作为本地推理基础设施被广泛使用。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** ⭐0 (+2446 today) — 面向逆向/渗透测试的安全技能路由包，AI 自动路由 + 按需工具链自举，支持 Claude Code、Cursor、Cline 等 AI 编码客户端，属于安全 + Agent 的垂直组合。
- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** ⭐0 (+1090 today) — 团队级 AI Agent 记忆中心，将对话、文档、代码转化为四种可复用记忆资产（Chat Memory、Skill、LLM-Wiki、Code-Graph），支持跨 Agent 共享与治理。
- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** ⭐0 (+883 today) — 基于 DeepSeek 的终端原生 AI 编码代理，利用前缀缓存实现稳定长期运行，可在终端中持续执行编码任务。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** ⭐0 (+1057 today) — 让 AI Agent 拥有全互联网视野，一条 CLI 即可读取和搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等平台，零 API 费用，降低 Agent 获取外部数据的成本。
- **[livekit/agents](https://github.com/livekit/agents)** ⭐0 (+148 today) — 构建实时语音 AI 代理的框架，支持语音交互、视频与转录，适合语音助手、客服等场景。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐107,751 — 让 AI 代理自动操作浏览器，完成网页任务，是 Agent 应用层的重要基础设施。

### 📦 AI 应用（具体产品、垂直场景解决方案）

- **[microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)** ⭐0 (+1902 today) — 微软 12 周 24 课时的 AI 入门教程，以 Jupyter Notebook 形式提供，今日新增 stars 为当日第二高，说明入门类资源持续有需求。
- **[microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners)** ⭐0 (+775 today) — 微软 21 课时的生成式 AI 入门教程，配套代码与实践，与上一课程形成互补。
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** ⭐0 (+200 today) — 面向金融市场的基座模型，理解金融语言，属于垂直领域的大模型应用。
- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** ⭐0 (+412 today) — 开源 AI 语音工作室，支持语音克隆、听写和创作，提供完整的语音处理产品。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐147,744 — 用户友好的 AI 界面，支持 Ollama 和 OpenAI API，是本地部署 LLM 的常用前端。

### 🧠 大模型/训练（模型权重、训练框架、微调）

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐100,474 — 从零实现类 ChatGPT LLM 的 PyTorch 教程，持续被用于教学和模型训练入门。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,266 — 支持 100+ 数据集的 LLM 评估平台，覆盖 Llama、Qwen、GPT-4 等主流模型，适合模型选型对比。
- **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** ⭐4,436 — 在 Apple Silicon 上学习 LLM 推理服务的课程，结合 vLLM 和 Qwen 实践，面向系统工程师。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐151,229 — 构建 Agent 工作流和 RAG 管道的协作平台，支持云端、VPC 或自托管部署。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐86,737 — 开源 RAG 引擎，融合 Agent 能力，提供上下文层给 LLM。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐62,422 — 通用记忆层，为 AI Agent 提供持久化长期记忆，支持跨会话知识注入。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** ⭐64,299 — 本地优先的 Agent 体验，内置 RAG、多种模型和文档管理，适合个人或团队使用。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐45,494 — 高性能云原生向量数据库，支撑大规模 ANN 搜索，是 RAG 系统的核心存储组件。

## 热榜观察

今日 Trending 中 **AI 智能体/工作流** 类项目数量最多（5 个），且新增 stars 总量领先，表明 Agent 方向仍是当前社区最活跃的领域。一个新出现的细分类型是 **安全渗透 + AI 智能体** 的组合（`reverse-skill`），将安全工具链以 AI 路由方式组织，支持多个 AI 编码客户端，属于较罕见的垂直整合。团队级 Agent 记忆中心（`TencentDB-Agent-Memory`）和零费用互联网访问代理（`Agent-Reach`）也属于相对新颖的尝试，前者强调企业级共享记忆，后者降低 Agent 获取数据的经济门槛。基础工具方面，PDF 智能检测（`pdf-inspector`）和超轻量推理（`airllm`）均获得较高关注，说明开发者仍在寻找更低成本的本地推理和数据处理方案。微软两门 AI 教程今日新增 stars 合计 2677，可能受近期教育推广或课程更新驱动。主题搜索中 RAG/知识库项目保持高基数，但今日无显著增量，属于稳定维护状态。

## 可跟踪项目

- **reverse-skill**（安全 AI 路由）—— 安全与 AI Agent 的结合是较少见的场景，若其自动化工具链自举能力被验证，可能吸引更多安全从业者参与。
- **TencentDB-Agent-Memory**（团队记忆中心）—— 企业级 Agent 记忆共享方案，需观察其与现有 RAG 系统的集成度和实际落地效果。
- **Agent-Reach**（零费用互联网代理）—— 无 API 费用地访问多个平台，可能降低 Agent 开发者的数据获取成本，后续关注其稳定性和支持平台扩展。
- **ds4**（DeepSeek 本地推理引擎）—— 由 Redis 作者 antirez 开发，跨平台推理能力值得关注，尤其对 Apple Silicon 用户的体验。
- **Kronos**（金融基础模型）—— 垂直领域基座模型，若其金融语言理解能力在社区得到验证，可能推动金融 AI 应用的进一步探索。