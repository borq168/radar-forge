# GitHub AI 热榜日报 2026-07-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-04 00:27 UTC

---

## 日报写作边界
- 这是日报，不是周报、月报或投研报告；优先记录事实、数量、具体变化、用户诉求、维护者回应和链接。
- 不要为了凑结构强行给出鲜明观点、生态格局判断、趋势研判、路线图预测或工具选型建议。
- 只有当今日数据中有多条独立证据互相支撑时，才可写成“趋势”；证据不足时写成“观察”，或直接省略。
- 避免使用“正在成为事实标准”“核心竞争力”“拐点”“爆发”“一超多强”等缺少充分证据的强判断。

---

### 1. 今日热榜概览
今日 GitHub AI 热榜主要集中在 AI 智能体工作流与编程辅助工具领域，尤其是围绕 Claude Code 和 Codex 等终端编程 Agent 的插件与技能（Skills）生态大量涌现。同时，降低 Agent 运行成本（如 Token 压缩、上下文管理）和保障 Agent 执行安全（如沙箱、渗透测试）的基础设施项目获得了显著关注。大模型底层框架与 RAG 检索增强项目则保持了稳定的长期热度。

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [pytorch/pytorch](https://github.com/pytorch/pytorch)：⭐101,429 (+293 today) | 核心深度学习框架，提供张量计算与动态神经网络支持。
- [anthropics/claude-code](https://github.com/anthropics/claude-code)：(+221 today) | Anthropic 官方推出的终端 AI 编程代理工具，支持自然语言执行代码与 Git 工作流。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)：(+405 today) | 为编程 Agent 提供的 Chrome DevTools MCP 服务，便于 Agent 调试前端代码。
- [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)：(+60 today) | 腾讯云开源的轻量级安全沙箱，专为 AI Agent 提供并发、安全的代码执行环境。
- [vllm-project/vllm](https://github.com/vllm-project/vllm)：⭐85,288 | 高吞吐量且内存高效的 LLM 推理与服务引擎。

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)：⭐82,924 (+2863 today) | Claude Code 技能插件，通过简化语法（“原始人”说话方式）减少 65% 的 Token 消耗。
- [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)：(+634 today) | 允许在 Claude Code 中调用 Codex 进行代码审查或任务委派的桥接插件。
- [obra/superpowers](https://github.com/obra/superpowers)：(+1209 today) | 智能体技能框架与软件开发方法论，旨在规范 Agent 的开发工作流。
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)：(+1208 today) | 包含前端开发、社区运营等多个专家角色设定的 AI 代理提示词与流程集合。
- [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)：(+478 today) | 运行在终端中的 Agent 多路复用器，用于管理多个并发智能体。
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow)：⭐76,014 | 字节跳动开源的长周期 SuperAgent 框架，支持沙箱、记忆与子代理协同。

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [usestrix/strix](https://github.com/usestrix/strix)：(+2803 today) | 开源 AI 渗透测试工具，用于自动化发现并修复应用程序的安全漏洞。
- [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)：(+793 today) | 哈佛大学《机器学习系统》课程的开源教材及配套代码。
- [santifer/career-ops](https://github.com/santifer/career-ops)：⭐58,398 | 基于 Claude Code 构建的 AI 求职系统，支持多技能模式与批量处理。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)：⭐53,851 | LLM 驱动的多市场股票智能分析系统，集成多源数据与自动推送。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)：⭐36,435 | 从任意文档生成真实可编辑 PPT 的 AI 工具，支持原生形状与音频旁白。

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [huggingface/transformers](https://github.com/huggingface/transformers)：⭐162,208 | 主流的模型定义框架，支持文本、视觉、音频等多模态模型的训练与推理。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind)：⭐52,527 | 提供 2 小时从零训练 64M 参数小模型的完整教程与代码。
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)：⭐59,086 | YOLO 系列视觉模型框架，涵盖目标检测、分割与追踪（含 YOLO26/11）。
- [open-compass/opencompass](https://github.com/open-compass/opencompass)：⭐7,151 | 支持百余种数据集与主流大模型的综合评测平台。

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [safishamsi/graphify](https://github.com/safishamsi/graphify)：⭐77,117 (+945 today) | 将代码、SQL、文档等转化为可查询知识图谱的 AI 编程助手技能。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)：⭐85,697 | 为多种编程 Agent 提供跨会话持久化上下文的记忆压缩与注入工具。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：⭐84,227 | 结合深度 RAG 与 Agent 能力的开源检索增强生成引擎。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)：⭐56,248 | 在输入 LLM 前压缩工具输出和 RAG 块，可减少 60-95% 的 Token 消耗。
- [mem0ai/mem0](https://github.com/mem0ai/mem0)：⭐60,038 | 为 AI Agent 提供通用、持久化记忆层的基础设施。

### 3. 热榜观察
今日热榜中，AI 智能体/工作流类别的项目新增 stars 最为集中，尤其是围绕终端编程 Agent（如 Claude Code、Codex）的“技能（Skills）”与插件生态大量涌现。数据表明，开发者对 Agent 的关注点正从“如何构建”转向“如何降本与提效”，例如 `caveman` 和 `headroom` 均通过压缩上下文来降低 Token 消耗，`claude-mem` 则解决跨会话记忆问题。此外，为 Agent 提供安全执行环境（`CubeSandbox`）和自动化安全测试（`strix`）的基础设施项目增多，反映出 Agent 在实际生产环境落地时对安全与隔离的明确诉求。

### 4. 可跟踪项目
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)：通过极简语法压缩 Token 的思路在长上下文编程 Agent 中具有实用价值，可跟踪其实际节省比例与代码理解准确率的平衡。
- [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)：专为 AI Agent 设计的轻量级沙箱，可跟踪其在多智能体并发执行代码时的隔离性能与资源开销。
- [safishamsi/graphify](https://github.com/safishamsi/graphify)：将异构数据（代码、数据库、文档）统一转化为知识图谱，可跟踪其在复杂企业级代码库 RAG 中的检索召回效果。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)：官方提供的 MCP 服务，可跟踪前端开发 Agent 利用浏览器底层调试能力自动化修复 UI 缺陷的进展。