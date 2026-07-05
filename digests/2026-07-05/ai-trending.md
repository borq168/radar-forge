# GitHub AI 热榜日报 2026-07-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-05 00:28 UTC

---

## GitHub AI 热榜日报 (2026-07-05)

### 1. 今日热榜概览
今日 GitHub AI 热榜共筛选出 70 余个 AI 相关活跃仓库。Trending 榜单中，围绕 Coding Agent 的“Skills（技能配置）”和 MCP（模型上下文协议）工具占据主导，显示出开发者对提升 AI 编程助手定制化与外部控制能力的明确需求。主题搜索方面，RAG 引擎、Agent 框架和向量数据库等基础设施项目保持高星数与高活跃度，同时端侧推理与垂直场景应用（如安全测试、本地会议记录）也有新项目涌现。

### 2. 各维度热门项目

#### 🔧 AI 基础工具
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐0 (+304 today)
  为 Coding Agent 提供 Chrome DevTools 控制的 MCP 服务，扩展 AI 调试前端的能力。
- [CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp) ⭐0 (+69 today)
  Unity 编辑器的 MCP 桥接工具，允许 LLM 管理资产、控制场景和编辑脚本。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐85,371
  高吞吐、内存高效的 LLM 推理和服务引擎，持续作为推理层核心基础设施。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,154
  支持百余个数据集和主流大模型的 LLM 综合评估平台。

#### 🤖 AI 智能体/工作流
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) ⭐83,965 (+1089 today)
  通过“原始人”式极简语言与 Claude Code 交互的 Skill，宣称可削减 65% 的 Token 消耗。
- [mattpocock/skills](https://github.com/mattpocock/skills) ⭐0 (+973 today)
  知名开发者 Matt Pocock 分享的 `.claude` 目录下的真实工程师 Skills 配置集合。
- [alibaba/page-agent](https://github.com/alibaba/page-agent) ⭐0 (+742 today)
  阿里开源的网页内 GUI Agent，支持使用自然语言直接控制 Web 界面元素。
- [agentskills/agentskills](https://github.com/agentskills/agentskills) ⭐0 (+351 today)
  Agent Skills 的规范与文档仓库，致力于标准化 AI 编程助手的技能定义。
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow) ⭐76,101
  字节开源的长周期 SuperAgent 框架，结合沙箱、记忆和子智能体处理复杂任务。

#### 📦 AI 应用
- [usestrix/strix](https://github.com/usestrix/strix) ⭐0 (+1904 today)
  开源 AI 渗透测试工具，用于自动发现并修复应用程序的安全漏洞。
- [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) ⭐0 (+718 today)
  基于 Rust 构建的本地优先 AI 会议助手，集成 Parakeet/Whisper 转录与 Ollama 摘要，无需云端处理。
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) ⭐0 (+471 today)
  定期更新的主流 AI 产品（含 Claude Fable 5、GPT 5.5 等）系统提示词提取合集。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐36,626
  从任意文档生成真实可编辑 PowerPoint 的 AI 工具，支持原生形状、图表及音频旁白。

#### 🧠 大模型/训练
- [AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai) ⭐7
  纯 Rust 构建的 Decoder-only LLM，支持 INT4/GGUF 量化与 LoRA 微调，无 Python/PyTorch 依赖。
- [Picovoice/picollm](https://github.com/Picovoice/picollm) ⭐313
  基于 X-Bit 量化技术的端侧 LLM 推理引擎。
- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) ⭐605
  大语言模型机器遗忘（Machine Unlearning）领域的资源与论文合集。

#### 🔍 RAG/知识库
- [langgenius/dify](https://github.com/langgenius/dify) ⭐147,673
  生产就绪的 Agentic 工作流开发平台，在 RAG 与 Agent 编排赛道保持高活跃度。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐85,832
  为各类 Agent 提供跨会话持久化上下文的工具，通过 AI 压缩并注入相关记忆。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐77,672
  将代码、SQL、文档或视频转化为可查询知识图谱的 AI 编程助手 Skill。
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) ⭐33,729
  面向无向量（Vectorless）、基于推理的 RAG 系统的文档索引工具。

### 3. 热榜观察
今日热榜最显著的事实分布是“Agent Skills”与“MCP（模型上下文协议）”相关项目的密集出现。Trending 榜单中，至少有 7 个项目直接涉及 Claude Code/Codex 的技能配置、规范制定或 MCP 桥接（如 `caveman`、`mattpocock/skills`、`agentskills`、`chrome-devtools-mcp`）。这表明开发者对 AI 编程助手的诉求已从基础代码生成转向深度定制工作流与外部工具控制。此外，垂直场景的本地化 AI 应用（如 Rust 编写的本地会议助手 `meetily`、AI 渗透测试工具 `strix`）获得了较高的单日 Star 增长，反映出用户对数据隐私和特定专业领域自动化的明确需求。

### 4. 可跟踪项目
- **[agentskills/agentskills](https://github.com/agentskills/agentskills)**：作为 Agent Skills 的规范与文档仓库，其标准化尝试可能影响未来 AI 编程助手插件生态的开发与分发模式。
- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** 与 **[CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp)**：MCP 协议向浏览器调试和 3D 引擎（Unity）延伸的具体落地，值得观察其在复杂 UI/UX 开发中的实际采纳率。
- **[usestrix/strix](https://github.com/usestrix/strix)**：AI 在网络安全攻防（渗透测试）领域的开源实践，单日增长近 2000 Star，可跟踪其在真实安全审计场景中的漏洞发现率与误报率。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**：主打“无向量（Vectorless）”和基于推理的 RAG，为传统向量检索提供了一种差异化的技术路线，适合关注其在长文本和复杂逻辑检索中的表现。