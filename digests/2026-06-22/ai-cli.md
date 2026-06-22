# AI CLI 工具社区动态日报 2026-06-22

> 生成时间: 2026-06-22 00:36 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为一名专注于 AI 开发工具生态的资深技术分析师，以下是我基于您提供的 2026-06-22 各主流 AI CLI 工具社区动态摘要，生成的横向对比分析报告。

---

# AI CLI 工具横向对比分析报告 | 2026-06-22

## 1. 今日横向概览

今日，各主流 AI CLI 工具社区活动分化明显。**Qwen Code** 和 **OpenAI Codex** 是今日唯二有版本发布的工具，其中Qwen Code发布了正式版，而Codex则进行了密集的Alpha迭代。**Claude Code** 社区讨论热度极高，API稳定性问题是其最大痛点。**Gemini CLI** 和 **OpenCode** 的社区活跃度中等，但均暴露出Agent行为不稳定和模型兼容性等问题。**GitHub Copilot CLI** 社区新增少量反馈，但涉及计费准确性和权限控制的议题较为关键。**Kimi Code CLI** 在过去24小时内无任何社区活动。

## 2. 各工具活跃度对比

| 工具名称 | 今日版本发布 | Issues 更新(约) | PR 更新(约) | 核心社区热点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 无 | 50+ | 2 | API 503错误、多账户切换、跨平台Bug |
| **OpenAI Codex** | 3个 Rust Alpha 版 | 50+ | 10+ | 速率限制成本飙升、Windows支持、IDE集成 |
| **Gemini CLI** | 无 | 50 | 18 | Agent挂起、子代理虚假成功、Shell等待输入 |
| **GitHub Copilot CLI** | 无 | 10 | 1 | 计费错误、Windows ARM64崩溃、插件作用域 |
| **Kimi Code CLI** | 无 | 0 | 0 | 无活动 |
| **OpenCode** | 无 | 50 | 50 | 模型兼容性、TUI崩溃、Zen API CORS问题 |
| **Qwen Code** | v0.18.5 正式版 | 28 | 46 | 工具重复调用防护、会话恢复、CLI渲染修复 |

## 3. 共同出现的功能方向

今日，多个工具社区在以下方向出现了需求共振：

- **Agent 行为稳定性与可观测性**：这是最广泛出现的痛点。
    - **Claude Code**: 模型自动切换 (Issue #69772)、OAuth 刷新死循环 (Issue #61912)。
    - **Gemini CLI**: Agent 挂起 (Issue #21409)、子代理虚假成功 (Issue #22323)、Shell 命令卡住 (Issue #25166)。
    - **Qwen Code**: 工具重复调用 (Issue #5019)、非交互模式误报成功 (PR #5564)。
    - **GitHub Copilot CLI**: 状态栏混淆 (Issue #3879)、上下文窗口无提示 (Issue #3867)。

- **MCP (Model Context Protocol) 集成健壮性**：
    - **Claude Code**: 连接 Atlassian MCP 时 Auth 协议冲突 (Issue #69035)。
    - **Gemini CLI**: 无法支持 MCP 交互式工具 (Issue #22249)、工具数量超限报错 (Issue #24246)。
    - **OpenCode**: 增加 MCP 资源订阅功能 (PR #29355)。

- **Windows 平台兼容性问题**：多个工具在 Windows 上存在不同层次的缺陷。
    - **Claude Code**: Windows 桌面版“Server is busy”错误 (Issue #52765)、无法修改工作目录 (Issue #54461)。
    - **OpenAI Codex**: 沙箱回归 (Issue #26158)、PowerShell 窗口闪烁 (Issue #26613)、Computer Use 不可用 (Issue #29267)。
    - **GitHub Copilot CLI**: Windows ARM64 下频繁崩溃 (Issue #3687)。

- **IDE 内集成体验**：用户对深度 IDE 集成的渴望十分强烈。
    - **OpenAI Codex**: 强烈要求在 IDE 内建差异化/审批流程 (Issue #2998)。
    - **Qwen Code**: IDEA 插件中问答框不显示 (Issue #4888)。
    - **GitHub Copilot CLI**: VS Code Agent Hook 拒绝功能失效 (Issue #3874)。

- **计费与成本透明性**：用户体验到成本控制焦虑。
    - **OpenAI Codex**: `gpt-5.5` 模型速率限制成本飙升10-20倍 (Issue #28879)。
    - **GitHub Copilot CLI**: 请求增加成本指标的 OpenTelemetry 导出 (Issue #3778)、计费配额扣除错误 (Issue #3881)。

## 4. 差异化定位分析

- **Claude Code & Anthropic 生态**：聚焦于**安全协作与多模态交互**。其“Cowork”协作功能、MCP协议的深入应用、以及对多账户管理的强需求，表明其目标用户是追求流程安全与团队协作的开发者。当前主要受限于 API 基础设施的稳定性。

- **OpenAI Codex**：专注于 **平台兼容性与 IDE 原生体验**。当前开发重心显著偏向 Windows 平台问题的修复和 IDE 内差异视图的集成，目标是成为跨平台的、深度整合到开发者IDE工作流的编码助手。成本失控是当前最大危机。

- **Gemini CLI**：强调 **Agent 的自动化与任务委派能力**。其子代理 (Sub-agent) 和通用代理 (Generalist Agent) 机制是其核心差异化。社区反馈集中于 Agent 可靠性和工具调用逻辑，说明其技术路线在取得成效的同时，稳定性和可预测性仍是主要挑战。

- **GitHub Copilot CLI**：立足于 **GitHub 生态与插件化**。其独特之处在于“插件 (Plugin)”和“钩子 (Hook)”系统，允许用户扩展和拦截其行为，适合企业级权限管理和工作流定制。当前挑战在于插件体系成熟度不足和平台稳定性。

- **Qwen Code**：以**快速迭代和务实修复**为特点。今日的正式版发布和活跃的PR，显示出其开发团队在积极响应社区反馈，特别是对工具调用防护、CLI渲染、非交互模式等核心功能的打磨。其差异化在于提供**从 CLI 到 IDE 插件到 API 的全链路闭环体验**，并积极引入语音输入等实验性功能。

- **Kimi Code CLI & OpenCode**：**Kimi Code** 今日无活动，生态尚不成熟。**OpenCode** 更像一个“模型聚合平台”，其定位在于兼容多种后端模型 (Zen, Copilot, OpenRouter)，但这也导致其为多模型兼容性付出代价，模型特定 Bug 频出。

## 5. 社区活跃度记录

- **最高活跃度**: **Qwen Code** 和 **OpenCode** 在PR和Issues总数上领先，表明其开发者社区参与度和官方响应速度最高。Qwen Code当天发布正式版是强有力的活跃信号。
- **高强度讨论**: **Claude Code** 和 **OpenAI Codex** 的社区讨论热度极高，虽然未发布正式版本，但高赞议题和大量评论反映了庞大的用户基数和强烈的诉求表达。Claude Code的“多账户切换”获得600+赞是今日之最。
- **中度活跃**: **Gemini CLI** 和 **GitHub Copilot CLI** 有持续的Issue讨论和PR跟进，但体量和热度不及前三者。
- **低活跃**: **Kimi Code CLI** 完全无活动，处于生态停滞状态。

## 6. 有证据支撑的观察

1.  **Agent 稳定性是当前全行业首要痛点**: Claude Code、Gemini CLI 和 Qwen Code 的社区反馈均指向 Agent（或子Agent）行为的不可预测性，包括挂起、虚假成功、工具循环调用等。这直接破坏了自动化工作流的可信度，是阻碍工具从“辅助”向“自主”演进的最大障碍。

2.  **成本与计费透明度成为关键用户体验指标**: OpenAI Codex 的成本飙升和 GitHub Copilot CLI 的计费错误，表明用户对工具经济账的敏感度极高。当成本变得不可预测或不透明时，会迅速招致大量负面反馈，甚至抵消工具本身带来的效率提升。这预示着未来“成本管控”将成为AI开发工具的一项标配功能。

3.  **CLI 渲染和交互体验的精细化是差异化抓手**: Qwen Code 快速修复输入框换行背景断裂和 resume 预览截断问题，OpenCode 修复 TUI 渲染崩溃，Gemini CLI 有性能PR解决终端闪烁。这表明在基础功能趋同的背景下，更流畅、更精致的终端用户体验（即“手感”）正在成为吸引挑剔开发者的重要砝码。

4.  **MCP 生态从“可用”转向“好用”面临挑战**: 虽然 MCP 协议已被广泛采用，但各工具在成熟对接上均遇到“最后一公里”问题，如协议不兼容、交互式工具支持缺失、大量工具超限等。当前的 MCP 生态基础设施和工具实现尚未足够健壮，集成方需要投入更多精力进行适配和容错处理。

5.  **今日暂无明确跨工具信号表明某项技术路线将成为“事实标准”**。各工具仍在探索中，Windows 平台问题、IDE 集成深度、Agent 稳定性是当前公认的三大攻坚方向。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，以下是为您生成的 2026-06-22 Claude Code 社区动态日报。

---

# Claude Code 社区动态 | 日报 2026-06-22

## 今日更新概览
- 过去24小时内 **无版本发布**，但社区活跃度保持在较高水平，一个关于 Anthropic API 服务不可用的紧急 Bug 在数小时内获得大量关注。
- 社区 Issues 总数超 50 条，评论区 Top 30 中 **跨平台问题（macOS、Windows、Linux）突出**，其中关于“多账户管理”的功能需求讨论最为热烈，获得 600+ 点赞。

## 社区热点 Issues (10条)

1. **\[Feature Request\] 多账户切换管理 (Issue #18435)**
   - **场景**：Claude Desktop 用户希望在单一桌面 App 内管理多个 Claude 账户，并实现快速切换。
   - **范围**：功能请求，影响所有多账户用户。作者 @Agentic-Marketer 认为这能有效简化工作流。
   - **反应**：获得 **601 个 👍** 和 **118 条评论**，是近期社区关注度最高的需求之一。
   - **链接**: https://github.com/anthropics/claude-code/issues/18435

2. **\[Bug\] Windows 桌面端“Server is busy”Cowork 错误 (Issue #52765)**
   - **场景**：Windows 用户在使用 Claude Cowork 功能时频繁遇到“Server is busy”报错，导致协作流程中断。
   - **范围**：Bug，影响 Windows 平台的 Cowork 功能，持续有用户报告。
   - **反应**：14 条评论，处于开放状态，开发者已关注。
   - **链接**: https://github.com/anthropics/claude-code/issues/52765

3. **\[Bug\] macOS 更新后 LAN SSH/网络访问被阻断 (Issue #37994)**
   - **场景**：Claude Desktop 更新后，运行在 macO上 的 Claude Code 无法访问本地网络资源，如 SSH、SCP，导致开发工作流中断。
   - **范围**：Bug，影响所有依赖本地网络通信的 macOS 开发者。用户认为该更新破坏了沙盒模式的兼容性。
   - **反应**：11 条评论，社区担忧情绪明显。
   - **链接**: https://github.com/anthropics/claude-code/issues/37994

4. **\[Bug\] 桌面版无法修改主工作目录或开启新对话 (Issue #54461)**
   - **场景**：Windows 桌面版用户被卡在当前项目，无法切换工作目录或开启全新对话，严重影响使用体验。
   - **范围**：Bug，影响 Windows 桌面版的基础交互功能。
   - **反应**：8 条评论，多位用户确认复现。
   - **链接**: https://github.com/anthropics/claude-code/issues/54461

5. **\[Bug\] Anthropic API Error: Service Unavailable (Issue #69942)**
   - **场景**：大量用户报告 Anthropic API 服务不可用，返回 503 错误，涵盖 macOS 和 VSCode 环境。
   - **范围**：紧急 Bug，影响所有依赖 API 服务的用户，包括 CLI、桌面版和 IDE 插件。
   - **反应**：5 条评论，但获得 **10 个 👍**，是今日新增 Issue 中热度最高的，表明其为影响广泛的全局性问题。
   - **链接**: https://github.com/anthropics/claude-code/issues/69942

6. **\[Bug\] 模型中自动将 1M Opus 切换为非 1M 版本导致 API 错误 (Issue #69772)**
   - **场景**：在会话中后台模型被静默切换，导致依赖 1M 上下文窗口的任务报错且无法恢复。
   - **范围**：Bug，影响使用长上下文任务的重度用户。用户描述问题难以排查，只能新建会话规避。
   - **反应**：5 条评论，该问题对工作流破坏性极大。
   - **链接**: https://github.com/anthropics/claude-code/issues/69772

7. **\[Bug\] OAuth 刷新失败导致跨会话持续 401 授权循环 (Issue #61912)**
   - **场景**：当 Claude Code 在 OAuth 令牌刷新期间遇到上游服务 5xx 错误时，其凭证状态会损坏，导致在所有后续会话中反复出现 401 授权失败。
   - **范围**：Bug，影响使用 OAuth 认证的用户，是一个难以自行修复的持久性问题。
   - **反应**：5 条评论，Linux 平台用户受影响，问题原因已接近定位。
   - **链接**: https://github.com/anthropics/claude-code/issues/61912

8. **\[Feature Request\] 子会话 API：程序化生成隔离会话 (Issue #68996)**
   - **场景**：开发者希望在当前 Claude Code 会话内通过调用 API 或工具，自动生成并管理一个独立的子会话，用于并行任务处理。
   - **范围**：功能请求，面向高级用户和自动化场景。
   - **反应**：3 条评论，概念新颖，代表了社区对更强大的自动化编排能力的期待。
   - **链接**: https://github.com/anthropics/claude-code/issues/68996

9. **\[Bug\] MCP 连接冲突：Authv2 失败而 /v1/sse 正常 (Issue #69035)**
   - **场景**：在连接 Atlassian MCP 时，使用 `/v1/mcp/authv2` 端点失败，而 `/v1/sse` 在同一账户下正常工作，造成认知和配置上的困扰。
   - **范围**：Bug，影响特定 MCP 连接的兼容性。
   - **反应**：2 条评论，社区希望 Anthropic 端能统一 Auth 协议或提供更清晰的错误指引。
   - **链接**: https://github.com/anthropics/claude-code/issues/69035

10. **\[Bug\] 打开聊天记录导致重复记录和排序错乱 (Issue #69939)**
    - **场景**：每次打开一个历史会话，Desktop 应用会无谓地追加重复的记录（如 mode, title），修改文件修改时间，导致会话被错误地排到“最近使用”顶部。
    - **范围**：Bug，影响桌面版用户管理大量会话的习惯，属于 UI/UX 层面的问题。
    - **反应**：2 条评论。
    - **链接**: https://github.com/anthropics/claude-code/issues/69939

## 重要 PR 进展 (2条)

1. **`fix: print error message before silent exit` (PR #69916)**
   - **功能**：修复了 `scripts/edit-issue-labels.sh` 脚本在无参数运行时静默退出的问题，改为在退出前打印明确的错误信息。
   - **分析**：这是一个维护性的 Bug 修复，主要改善开发者和社区贡献者在参与问题标签管理脚本时的调试体验。
   - **链接**: https://github.com/anthropics/claude-code/pull/69916

2. **`feat: add shell completions (bash, zsh, fish)` (PR #4943)**
   - **功能**：为 `claude` CLI 添加了 bash、zsh 和 fish 的 Shell 自动补全脚本，旨在提升命令行操作效率。
   - **分析**：这是一个待合并的功能增强 PR。由于长期未合并，社区可能期望官方支持此功能。如果集成，将显著改善开发者日常使用 CLI 的体验。
   - **链接**: https://github.com/anthropics/claude-code/pull/4943

## 功能需求归类

从近期的 Issues 来看，社区反馈的功能指向以下方向：

- **账户与认证管理**: 强烈需求多账户切换（#18435），以及对复杂 Auth 流程（MCP Authv2 #69035, OAuth #61912）的稳定性和透明化改进。
- **会话与工作流自动化**: 用户不仅满足于单次交互，开始寻求“子会话”等程序化编排能力（#68996）。
- **操作系统与平台兼容性**: 持续关注跨平台的一致体验，特别是 Windows 原生沙箱（#46740, 已closed）和 macOS 网络隔离问题（#37994）的修复。
- **MCP 集成稳定性**: 从 NetSuite MCP 连接中断（#69507）到 Atlassian Auth 协议冲突（#69035），社区对 MCP 生态的健壮性和兼容性提出了更高要求。
- **TUI / UI 体验优化**: 用户关注细节体验，如会话的“已读/未读”状态（#61533）、Thinking 标签的自定义（#57895）等。

## 开发者关注点

- **API 稳定性是首要痛点**: 多条 Bug（#69942, #69772, #69785）直指 API 服务的不稳定或模型行为异常，直接导致开发工作流完全中断，这是当前社区最紧急的负面反馈。
- **身份认证与授权问题频发**: 从桌面端的“Server is busy”（#52765）到 OAuth 刷新导致的永久 401（#61912），再到 Cowork 认证卡死（#44654），认证授权环节成为跨平台的反复故障点。
- **内存与会话管理漏洞**: “Auto Dream” 功能可能因一次崩溃而永久停用（#50694），“autoCompact”在特定场景下失效（#50920），这些都可能影响长任务的稳定运行，是重度用户的核心困扰。
- **MCP 连接需更健壮**: 针对特定服务的 MCP 连接（如 NetSuite, Atlassian）在更新后出现问题，显示 MCP 生态的基础设施仍需加固，以减少对第三方服务的依赖风险。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是为您生成的 2026 年 6 月 22 日 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-22

## 今日更新概览

过去24小时，Codex项目发布了3个Rust Alpha版本（0.142.0-alpha.8/9/10），社区活跃度极高。Issue方面，一个关于`gpt-5.5`模型速率限制成本飙升的问题获得了188个👍和96条评论，成为今日最受关注的事件。PR方面，开发者正密集重构“code-mode”模块的会话运行时，并优化桌面应用的线程列表与恢复性能。

## 版本发布

-   [**rust-v0.142.0-alpha.8**](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.8)
-   [**rust-v0.142.0-alpha.9**](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.9)
-   [**rust-v0.142.0-alpha.10**](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10)

过去24小时内连续发布了三个Alpha版本，但均未附带更新的发布说明，推测为持续的内部迭代或针对特定问题的快速修复。

## 社区热点 Issues

1.  **速率限制成本飙升** [#28879](https://github.com/openai/codex/issues/28879)
    -   **影响场景**: Plus用户使用`gpt-5.5`模型时，预算消耗速度较6月16日前激增10-20倍。
    -   **问题范围**: 用户反馈以前能用20多次的预算，现在仅2-3次提示就被耗尽。日志显示每次token消耗的“限额百分比”大幅增加。
    -   **社区反应**: 96条评论，188个👍，用户普遍感到困扰和不满。

2.  **Windows独立安装器需求** [#13993](https://github.com/openai/codex/issues/13993)
    -   **影响场景**: 受企业策略、离线环境或系统限制无法使用Microsoft Store的Windows用户。
    -   **问题范围**: 期望获得一个传统的`.exe`安装包，而不是依赖Windows Store分发。
    -   **社区反应**: 评论已达74条，153个👍，需求强烈且持续了3个多月。

3.  **IDE内建的差异/审批功能** [#2998](https://github.com/openai/codex/issues/2998)
    -   **影响场景**: 在VS Code等IDE中使用Codex插件的开发者。
    -   **问题范围**: Codex CLI终端已有红/绿差异显示和审批流程，但IDE插件中缺失。希望将相同的审批体验集成到编辑器界面中。
    -   **社区反应**: 62条评论，197个👍，是呼声最高的功能增强请求。

4.  **上下文窗口耗尽报错** [#9046](https://github.com/openai/codex/issues/9046)
    -   **影响场景**: 刚开启新会话，仅提问一次就出现错误。
    -   **问题范围**: 用户报告在会话初期就遇到“模型上下文窗口空间不足”的错误，导致无法继续工作。
    -   **社区反应**: 37条评论，提示这可能是一个影响广泛但复现条件不明确的BUG。

5.  **ChatGPT集成** [#2153](https://github.com/openai/codex/issues/2153)
    -   **影响场景**: 希望在Codex CLI和ChatGPT Web界面之间无缝切换。
    -   **问题范围**: 用户希望将Codex会话移动到ChatGPT进行头脑风暴，或将ChatGPT中的对话结果带到Codex CLI中。
    -   **社区反应**: 37条评论，149个👍，用户追求更灵活的工作流。

6.  **SQLite日志写入量过大** [#28224](https://github.com/openai/codex/issues/28224)
    -   **影响场景**: 所有Codex用户，特别是使用SSD的用户。
    -   **问题范围**: 本地SQLite反馈日志数据库持续高负载写入，在用户机上一年可写入约640TB数据，严重消耗SSD寿命。
    -   **社区反应**: 10条评论，29个👍，这是一个值得关注的性能和硬件损耗问题。

7.  **Windows沙箱回归故障** [#26158](https://github.com/openai/codex/issues/26158)
    -   **影响场景**: Windows上使用Codex CLI沙箱功能的用户。
    -   **问题范围**: 从0.132.0升级到0.136.0/0.138.0后，沙箱设置刷新失败，错误码740和2，回滚后恢复正常。
    -   **社区反应**: 12条评论，用户只能停留在旧版本以使用关键功能。

8.  **桌面端线程崩溃** [#29361](https://github.com/openai/codex/issues/29361)
    -   **影响场景**: macOS上的Codex Desktop用户。
    -   **问题范围**: 打开或恢复一个线程会导致应用服务器崩溃，根因是桌面应用向CLI发送了其不支持的`thread_tools`功能标记。
    -   **社区反应**: 6条评论，新提交的问题，可能导致桌面应用完全无法使用。

9.  **Windows PowerShell窗口闪烁** [#26613](https://github.com/openai/codex/issues/26613)
    -   **影响场景**: Windows上的Codex Desktop用户。
    -   **问题范围**: 后台进程轮询时，会短暂弹出可见的PowerShell窗口，干扰用户并影响使用体验。
    -   **社区反应**: 4条评论，持续的UI/UX问题。

10. **“计算机使用”在Windows不可用** [#29267](https://github.com/openai/codex/issues/29267)
    -   **影响场景**: Windows 11用户，已安装并使用Codex的“计算机使用”插件。
    -   **问题范围**: 功能因`sandboxPolicy`缺失而始终无法启动，无法检测或访问任何应用程序。
    -   **社区反应**: 3条评论，这是一个较新的BUG，影响Windows平台的高级自动化功能。

## 重要 PR 进展

1.  **优化线程恢复与派生** [#29357](https://github.com/openai/codex/pull/29357)、[#29367](https://github.com/openai/codex/pull/29367)
    -   **内容**: 加速本地`thread/resume`和`thread/fork`操作。通过使用阻塞工作线程解析文件、重用已加载历史记录以及避免重复读取，显著提升性能。
    -   **意义**: 针对桌面端需要频繁加载历史会话的场景进行优化，有望改善用户体验。

2.  **线程列表性能提升** [#29355](https://github.com/openai/codex/pull/29355)
    -   **内容**: 使用轻量级SQLite投影来处理`thread/list`请求，避免每次都扫描完整的文件系统。
    -   **意义**: 解决用户反馈中提到的“目录中大量子代理文件导致列表缓慢”的问题，提升主线程列表响应速度。

3.  **线程存储重构** [#29352](https://github.com/openai/codex/pull/29352)
    -   **内容**: 将显式的线程名称与从历史记录派生的标题分离，并为SQLite添加轻量级列表投影。
    -   **意义**: 为后续的UI交互和修复“隐藏超出50条历史会话”的问题打下了基础。

4.  **安全缓冲事件传播** [#29371](https://github.com/openai/codex/pull/29371)
    -   **内容**: 将“安全缓冲（safety buffering）”元数据从前端传输边界传递到应用服务器客户端。
    -   **意义**: 允许桌面应用或客户端渲染“正在进行安全审查”的状态，提升用户对模型安全审查过程的感知。

5.  **代码模式（Code-mode）核心重构** [#29290](https://github.com/openai/codex/pull/29290) 等系列PR
    -   **内容**: 一系列对“code-mode”模块的深度重构，包括：解耦单元格创建与观察、暴露传输中立的会话运行时、关闭命令性会话管理、线性化单元格终端状态等。
    -   **意义**: 重构`SessionRuntime`和通用协议，为未来支持更多客户端（如远程连接、MCP Server）和更稳定的状态管理做准备。这是今日PR的核心关注点。

6.  **避免冗余的历史读取** [#29109](https://github.com/openai/codex/pull/29109)
    -   **内容**: 在`thread/read`、恢复和派生操作中，避免解析两次同一个回滚文件。
    -   **意义**: 持续优化历史数据的读取路径，减少不必要的I/O操作，提升会话加载速度。

7.  **沙箱意图传递至远程执行服务器** [#29113](https://github.com/openai/codex/pull/29113)
    -   **内容**: 使远程执行服务器能够理解和强制执行从协调器发送的沙箱意图（Sandbox Intent）。
    -   **意义**: 完善了远程执行与本地沙箱策略的集成，使得协调器可以控制远程执行环境的安全性。

8.  **MCP沙箱状态消费** [#29358](https://github.com/openai/codex/pull/29358)
    -   **内容**: 允许Codex沙箱直接消费来自MCP（Model Context Protocol）服务器的`sandbox-state-meta`数据。
    -   **意义**: 扩展了MCP生态的整合能力，允许外部工具（如`node_repl`）将自身的沙箱状态信息传递给Codex。

9.  **计划模式提示词更新** [#29301](https://github.com/openai/codex/pull/29301)
    -   **内容**: 更新了“计划模式”的提示词，使其在生成计划后，能明确提示用户可以退出计划模式来执行该计划。
    -   **意义**: 改善对话流程，引导用户更顺畅地从规划和讨论过渡到实际编码执行。

10. **优化文件系统线程列表** [#29035](https://github.com/openai/codex/pull/29035)
    -   **内容**: 优化了文件系统回退方案下的`thread/list`逻辑，避免在查询交互式线程时，因解析所有子代理回滚摘要而造成性能瓶颈。
    -   **意义**: 解决了工作目录中包含大量子代理任务时，主线程列表加载缓慢的问题。

## 功能需求归类

-   **平台兼容性**: 对Windows平台的支持呼声最高，具体需求包括**独立安装程序**（#13993）、**WSL代理模式故障**（#16815）、**沙箱回归**（#26158）以及**PowerShell窗口闪烁**（#26613）等问题。
-   **IDE集成体验**: 用户强烈要求在IDE中集成**差异/审批流程**（#2998），并希望与**ChatGPT Web端实现无缝切换**（#2153）。
-   **性能与资源消耗**: 用户对性能问题非常敏感，主要关注点包括**SQLite日志写入量过大**（#28224）、**会话加载和列表性能**（#29357, #29355），以及**后台进程导致的系统卡顿**（#29177）。
-   **稳定性与BUG修复**: 大量高质量BUG报告集中在**速率限制成本**（#28879）、**上下文窗口耗尽**（#9046）、**桌面端崩溃**（#29361）和**特定功能（如Computer Use）的回归**（#29267）上。
-   **MCP（Model Context Protocol）集成**: 社区和官方都在关注Codex与外部MCP服务器的交互，包括**授权问题**（#18527）以及与**沙箱状态的共享**（#29358）。

## 开发者关注点

-   **成本与配额**: `gpt-5.5`模型的**速率限制成本激增10-20倍**是当前最核心的痛点，开发者需要官方就此问题做出解释和修复。
-   **Windows兼容性仍是短板**: Windows用户在使用中遇到多种不同的问题，从安装到代理模式再到基础功能（如沙箱、计算机使用），显示该平台下的稳定性和功能完整性亟待提升。
-   **本地性能与硬件消耗**: **SSD寿命损耗**和**系统卡顿**等由本地I/O、后台进程引起的问题，是开发者（尤其是重度用户）非常关注的运维性能指标。
-   **IDE集成深度不足**: 与成熟的CLI相比，**IDE扩展缺乏关键的工作流特性**（如Diff/审批视图），限制了其在日常开发中的价值，开发者对此感到遗憾。
-   **上下文管理缺陷**: **“上下文窗口耗尽”**的误报或过早报错提示，以及会话恢复时崩溃的问题，严重影响了长会话、复杂开发工作的连续性和可靠性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-22 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 — 2026-06-22

### 今日更新概览

过去24小时内，社区活跃度集中在 Issues 讨论的持续更新上，共涉及 50 条 Issues 和 18 条 Pull Requests。虽然无新版本发布，但多个 P1 级别的 Agent 稳定性 Bug（如子代理挂起、错误报告成功）获得了维护者的持续跟进。此外，Dependabot 自动发起了一批依赖更新 PR，同时社区贡献的 Bug 修复 PR 也在合并中。

### 社区热点 Issues

1.  **通用代理挂起问题持续发酵**
    [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - **摘要**: 用户报告 `gemini-cli` 在将任务委托给通用代理时，会无限期挂起，甚至简单的文件夹创建操作也无法完成。通过指示模型不使用子代理可以临时绕过。
    - **影响**: 严重影响了依赖子代理自动路由的自动化工作流，被标记为 `priority/p1`。该 Issue 获得了 8 个 👍，是近期社区反馈最强烈的稳定性问题之一。

2.  **子代理“虚假成功”误导调试**
    [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - **摘要**: 当一个子代理（如 `codebase_investigator`）达到最大周转次数 (`MAX_TURNS`) 时，它会错误地将自身状态报告为 `"success"` 和完成原因 `"GOAL"`，而非中断或超时。
    - **影响**: 导致用户和主 Agent 误以为分析已完成，掩盖了实际的执行中断问题。这严重影响了 Agent 链式任务的可观测性与可靠性。

3.  **Shell 命令执行后陷入“等待输入”**
    [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **摘要**: 在简单的 CLI 命令执行完毕后，Gemini CLI 会卡住，显示 shell 命令仍在活动并“等待用户输入”，尽管命令已经结束。该问题在 `v0.40.0` 及之后版本中尤其严重。
    - **影响**: 直接影响日常开发中执行 `git`、`npm` 等命令的效率和流畅度，用户可能需要强制中断会话。被标记为 `priority/p1`。

4.  **MCP 交互式工具支持缺失**
    [#22249](https://github.com/google-gemini/gemini-cli/issues/22249)
    - **摘要**: 当 MCP 服务器提供的工具需要用户交互式输入（如 Elicitation）时，Gemini CLI 会抛出 `“Method not found”` 错误，无法正常使用。
    - **影响**: 限制了 Gemini CLI 与那些需要动态、多步骤数据收集或确认的 MCP 服务器的集成能力，是一个功能层面的缺失。

5.  **浏览器子代理在 Wayland 下启动失败**
    [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - **摘要**: 浏览器子代理 (`browser subagent`) 在 Wayland 显示服务器环境下运行失败，无法正常启动和使用。
    - **影响**: 随着越来越多的 Linux 发行版默认使用 Wayland，该 Bug 将影响大量用户无法正常使用浏览器自动化功能。

6.  **Google 账号认证失败**
    [#16292](https://github.com/google-gemini/gemini-cli/issues/16292)
    - **摘要**: 用户在进行 Google 账号认证时，浏览器重定向到一个认证失败页面，导致无法登录。该 Issue 在沉寂数月后今日有更新，状态变为已关闭。
    - **影响**: 虽然已关闭，但该问题影响面较大，任何新用户或需要重新认证的用户都可能遇到此障碍。

7.  **Agent 主动发起破坏性操作风险**
    [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
    - **摘要**: 用户反馈 Agent 在执行复杂 `git` 操作或资源管理（如数据库）时，可能会无差别地使用 `git reset` 或 `--force` 等破坏性命令，缺乏对操作风险的评估和提示。
    - **影响**: 这是一个安全与可靠性问题，表明 Agent 在执行高风险操作时缺乏足够的安全护栏。

8.  **Agent 不主动使用自定义技能和子代理**
    [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - **摘要**: 用户反馈，即便配置了描述清晰的 `gradle` 或 `git` 自定义技能，Agent 也很少在相关操作中主动调用它们，只在用户明确指示时才使用。
    - **影响**: 弱化了自定义技能的价值，导致用户投递的配置被“闲置”，降低了工具的可定制性和效率。

9.  **超过 128 个工具时出现 400 错误**
    [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **摘要**: 当启用的工具（含 MCP 工具）超过 128 个时，Gemini CLI 与后端的交互会出现 HTTP 400 错误。用户期望 Agent 能在工具过多时更智能地筛选范围。
    - **影响**: 对于重度使用 MCP 集成的用户来说，工具数量上限成为了一个瓶颈。

10. **子代理运行缺乏权限控制**
    [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
    - **摘要**: 用户注意到在更新到 `v0.33.0` 后，子代理（如 `generalist`）即使在配置中被设置为“禁用”，依然会被调用执行。用户期望子代理行为应严格遵守配置。
    - **影响**: 破坏了用户对 Agent 行为的安全预期和配置管理，是一个权限校验上的回归性 Bug。

### 重要 PR 进展

1.  **[已合并] 修复发布流水线和调度器问题**
    [#28063](https://github.com/google-gemini/gemini-cli/pull/28063)
    - **内容**: 解决了 NPM 发布生命周期失败和调度器事件循环饥饿两个主要问题。通过添加 `--ignore-scripts` 标志和调整 `rAF` 实现来修复。

2.  **[已合并] 修复 VSCode 插件终端聚焦问题**
    [#28070](https://github.com/google-gemini/gemini-cli/pull/28070)
    - **内容**: 修复了在 VSCode IDE 伴侣插件中，关闭 diff 视图后终端焦点无法恢复的问题。

3.  **[已合并] 修复 ripgrep 启动检查**
    [#28071](https://github.com/google-gemini/gemini-cli/pull/28071)
    - **内容**: 在注册 ripgrep 搜索工具前，增加对其可执行文件的 spawn 检查，避免因 rg 未正确安装或路径有问题时导致的注册失败。

4.  **[已合并] 去除错误 URL 末尾句点**
    [#28069](https://github.com/google-gemini/gemini-cli/pull/28069)
    - **内容**: 修复了错误信息中 URL 结尾可能包含多余句点的问题，以确保链接可被正确点击。

5.  **[已合并] 修复依赖注入更新**
    [#28075, #28076, #28077](https://github.com/google-gemini/gemini-cli/pull/28075)
    - **内容**: Dependabot 创建的批量依赖更新 PR，涉及 `lychee-action`、`actions/checkout` 等 GitHub Actions 工具。

6.  **性能：终端大小调整时无闪烁**
    [#21924](https://github.com/google-gemini/gemini-cli/issues/21924)
    - **内容**: 一个已开放较长时间的 PR，旨在通过迁移到 `RenderStatic` 等方式解决在调整终端窗口大小时出现的高性能开销和帧闪烁问题。

7.  **[待审] 修复 DNS 绕过 SSRF 防护**
    [#27744](https://github.com/google-gemini/gemini-cli/pull/27744)
    - **内容**: 通过先解析 DNS 再进行 SSRF 检查，防止攻击者利用 `127.0.0.1.nip.io` 等通配符 DNS 服务绕过安全限制。

8.  **[待审] 限制 `.env` 文件加载失败影响**
    [#28059](https://github.com/google-gemini/gemini-cli/pull/28059)
    - **内容**: 防止某个不可读的 `.env` 文件（如权限问题 EACCES）导致整个扩展加载系统崩溃。

9.  **[待审] 修复 MCP 图像 MIME 类型检测**
    [#27878](https://github.com/google-gemini/gemini-cli/pull/27878)
    - **内容**: 通过本地签名嗅探来正确识别 WebP 等图像格式，修复了 Figma MCP 集成因错误标记为 PNG 而导致 HTTP 400 错误的问题。

10. **[待审] 修复消息检查器真空求值 Bug**
    [#28068](https://github.com/google-gemini/gemini-cli/pull/28068)
    - **内容**: 修复了 `messageInspectors.ts` 中 `isFunctionCall()` 等函数对空 `parts` 数组返回 `true` 的问题，该问题导致模型消息被错误分类。

### 功能需求归类

从近期活跃的 Issue 中，可以归纳出用户频繁提出的功能诉求方向：

- **Agent 行为可靠性**：用户强烈希望 Agent 和子代理的运行更加稳定和可预测。相关诉求包括：修复通用代理挂起、子代理超时后正确报告、管理超过限制的工具、避免无差别使用破坏性命令等。
- **MCP 协议兼容性与扩展性**：用户期望 Gemini CLI 能更好地支持 MCP 生态，包括支持交互式工具（Elicitation）、处理更多数量的工具、以及修复与特定 MCP 服务（如 Figma）的集成问题。
- **上下文感知与系统集成**：用户希望 Agent 能更深入地理解其运行环境，包括正确解析忽略文件（`.gitignore`）、感知 Wayland 等显示服务器、识别并主动使用已配置的自定义技能。
- **安全与沙箱机制**：社区对安全性的关注度持续升高，主要集中在防止 SSRF 攻击、对危险操作（如 `git reset --force`）进行确认、以及清理工作区的临时脚本以减少混乱。

### 开发者关注点

- **Agent 稳定性是首要痛点**：通用 Agent 挂起、子 Agent 虚假成功等 P1 级别 Bug 是开发者最关注的痛点。这些问题直接破坏了自动化工作流，削弱了工具的核心价值。社区提供了绕过方法（如禁止使用子代理），但这并非长久之计。
- **安全与信任问题凸显**：用户不仅关注工具的安全性能否防住外部攻击，也非常在意 Agent 自身的行为是否安全。Agent 可能不尊重配置（如禁用子代理）、可能无差别执行危险命令，这动摇了用户对于“委托 Agent 执行任务”的信任基础。
- **终端体验细节有待打磨**：Shell 命令执行后卡住、外部编辑器退出后界面混乱、终端调整大小时的闪烁等 BUG，虽然优先级可能不是 P1，但这些细节问题累积起来，严重影响了开发者的日常使用体验和流畅感。
- **MCP 集成的“最后一公里”问题**：MCP 协议的支持正在推进，但在处理非标准的工具 Schema、交互式提示以及超出数量的工具时，仍然存在较多兼容性问题，是当前开发者在使用 MCP 集成时的主要摩擦点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，这是为您生成的 2026-06-22 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-22

## 今日更新概览

过去24小时内，社区围绕 Copilot CLI 的**插件系统、权限模型、用户体验** 以及 **计费准确性** 提出了多个新问题。其中，关于“插件作用域”和“Windows ARM64 崩溃”的讨论持续发酵，同时新增了针对**计费错误**和**状态显示混淆**的反馈。今日无新版本发布，但有一条含义不明的 PR 提交。

## 版本发布

无。

## 社区热点 Issues

#### 1. 插件项目级作用域支持
-   **Issue #1665**（已关闭）：用户 [@willmarkley](https://github.com/willmarkley) 提议支持将 Copilot CLI 插件限制到特定项目或仓库，而非全局生效。该议题获得了 17 个赞，社区对精细化配置的需求明显。虽然 issue 已关闭，但其讨论内容对理解插件管理方向仍有价值。
-   **链接：** https://github.com/github/copilot-cli/issues/1665

#### 2. Windows ARM64 下频繁崩溃
-   **Issue #3687**（开放中）：用户 [@JW-Sthlm](https://github.com/JW-Sthlm) 报告了 `copilot.exe` 在 Windows ARM64 系统上，特别是在多会话启动和内存压力下，会以 `BEX64 / 0xc0000409` 错误异常退出。该问题跨多个版本（1.0.57 和 1.0.60）可复现，影响 Windows ARM 用户的稳定性。
-   **链接：** https://github.com/github/copilot-cli/issues/3687

#### 3. 缺少列出已安装 Hooks 的命令
-   **Issue #3871**（已关闭）：用户 [@ken-jo](https://github.com/ken-jo) 指出，虽然 MCP 服务器有 `copilot mcp list` 命令，但 Hooks（钩子）没有相应的列举命令，导致用户无法知晓已安装的钩子。此问题反映了插件功能在可观测性上的缺失。
-   **链接：** https://github.com/github/copilot-cli/issues/3871

#### 4. 无效 Issue 提交
-   **Issue #3882**（已关闭）：这是一个内容为空白的 Issue，由用户 [@ja552588](https://github.com/ja552588) 提交，可能为误操作或测试，已被关闭。
-   **链接：** https://github.com/github/copilot-cli/issues/3882

#### 5. 沙箱文档与功能不符
-   **Issue #3861**（开放中）：用户 [@torumakabe](https://github.com/torumakabe) 提出，关于沙箱功能的文档（如 `allowedHosts` 过滤、跨平台隔离）声称的功能实际上并未生效。该问题涉及文档准确性和沙箱能力的实际状态。
-   **链接：** https://github.com/github/copilot-cli/issues/3861

#### 6. 聊天会话缺少上下文窗口提示
-   **Issue #3867**（已关闭）：用户 [@sonydogg](https://github.com/sonydogg) 反映，在聊天会话中，没有用户界面指示上下文窗口的使用情况，且上下文压缩（compaction）在无通知的情况下静默发生。这影响了用户对会话状态的理解和控制。
-   **链接：** https://github.com/github/copilot-cli/issues/3867

#### 7. VS Code Agent Hook 拒绝功能失效
-   **Issue #3874**（开放中）：用户 [@springcomp](https://github.com/springcomp) 报告，在 VS Code 聊天会话中，通过 `preToolUse` 钩子拒绝特定命令的功能不起作用。这直接影响到用户通过钩子进行权限控制的能力。
-   **链接：** https://github.com/github/copilot-cli/issues/3874

#### 8. 请求增加成本指标的 OpenTelemetry 导出
-   **Issue #3778**（开放中）：用户 [@kewinremy](https://github.com/kewinremy) 希望 Copilot CLI 的 OpenTelemetry 导出能包含成本或计费指标，以实现与 Claude Code 类似的成本跟踪能力。体现了开发者对用量和成本精细化监控的需求。
-   **链接：** https://github.com/github/copilot-cli/issues/3778

#### 9. 计费配额扣除错误
-   **Issue #3881**（开放中）：用户 [@yurivict](https://github.com/yurivict) 报告了计费问题：一笔使用 6 倍乘法器的请求被扣除了 5% 的配额，而非预期的 2%。该问题直接涉及计费准确性，是高度敏感的功能性错误。
-   **链接：** https://github.com/github/copilot-cli/issues/3881

#### 10. 状态栏显示混淆：生成中 vs 后台任务
-   **Issue #3879**（开放中）：用户 [@mlhickey](https://github.com/mlhickey) 指出，当后台代理或 Shell 命令在运行时，状态栏显示 “Working / Waiting for background agents”，导致用户无法判断主代理是否空闲，从而难以确定何时可以安全输入。这是对用户体验细节的反馈。
-   **链接：** https://github.com/github/copilot-cli/issues/3879

## 重要 PR 进展

#### 1. 含义不明的 PR 提交
-   **PR #3880**（开放中）：用户 [@4tha5](https://github.com/4tha5) 提交了一个仅包含部分 UI 组件代码（ArtistCard）的 PR，摘要信息为 `beyond the streets of amaerica`，内容与 Copilot CLI 核心功能无关，可能为测试或误提交。
-   **链接：** https://github.com/github/copilot-cli/pull/3880

## 功能需求归类

从近期 Issues 中，可归纳出以下用户反复提及的功能方向：

-   **插件作用域管理**：用户希望插件能按项目/仓库进行隔离，而非全局限定。
-   **计费与配额透明性**：社区关注计费规则的准确性，并希望 OpenTelemetry 能提供成本指标。
-   **可观测性与诊断能力**：用户要求更清晰地了解系统状态，例如上下文窗口使用情况、已安装的钩子清单。
-   **平台稳定性**：Windows ARM64 平台的崩溃问题亟待解决。
-   **文档与功能对齐**：沙箱等功能在文档与实际表现之间存在差距。
-   **工作流可见性**：希望状态栏能清晰区分主代理的生成状态与后台任务的运行状态。

## 开发者关注点

-   **稳定性是基础**：Windows ARM64 下的崩溃问题（#3687）和计费错误（#3881）是当前最严重的功能性痛点，直接影响大量用户的核心体验。
-   **安全与权限控制反馈不佳**：无论是 Agent Hook 的拦截功能失效（#3874），还是文档与实际功能不符（#3861），都表明现有的权限与沙箱模型在可靠性和透明度上存在问题。
-   **用户体验细节有待打磨**：状态栏显示混淆（#3879）和缺乏上下文窗口提示（#3867）等问题，虽然不致命，但持续影响用户的使用流畅度和信任感，是提升产品成熟度的关键环节。
-   **配置粒度需求提升**：对插件项目级作用域的讨论（#1665）热度不减，说明简单的全局配置已无法满足复杂工作流和团队协作场景。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-06-22

## 今日更新概览

过去 24 小时内，OpenCode 仓库共产生了 50 条 Issue 更新和 50 条 PR 更新。社区焦点集中在 **模型兼容性修复**（尤其是 Claude Opus 4.7/4.8 在 Zen 和 Copilot 上的异常行为）、**TUI 渲染崩溃** 以及 **Zen API 的 CORS 阻塞问题**。此外，多个核心功能 PR 进入活跃状态，包括 `YOLO` 权限模式、系统提示不可变性、MCP 资源订阅等。

## 版本发布

与往常一样，过去 24 小时**无新版本发布**。当前最新版本仍为 1.17.7（见于 Issue #32706）。

## 社区热点 Issues（10 条）

### 1. Qwen3 / Kimi K2 对话中途停止
[#1522](https://github.com/anomalyco/opencode/issues/1522) (CLOSED, 💬10, 👍7)
用户在 OpenRouter 上使用 Qwen3 和 Kimi K2 时，模型会在某点停止调用工具，Qwen3 甚至循环重复回复。已关闭但未说明根本修复。

### 2. 将会话数据保存到项目文件夹
[#14292](https://github.com/anomalyco/opencode/issues/14292) (CLOSED, 💬10, 👍16)
用户要求会话数据和 session 文件默认保存在项目目录而非 `~/.opencode` 下。该功能显然受到大量用户赞同，已关闭（可能已实现或转至其他方案）。

### 3. YOLO 模式：自动批准所有权限提示
[#11831](https://github.com/anomalyco/opencode/issues/11831) (CLOSED, 💬9, 👍30)
支持度最高的功能请求之一。建议增加 `--yolo` 模式，允许一键自动批准所有工具权限，同时尊重显式拒绝规则。此议题已关闭，相关 PR 正在进行（见下文 #33279）。

### 4. 阿拉伯语等 RTL 语言支持
[#10908](https://github.com/anomalyco/opencode/issues/10908) (CLOSED, 💬9, 👍7)
要求为阿拉伯语、希伯来语、波斯语等 RTL 语言加入全面的布局、对齐和方向支持。不过 Issue #32726 显示桌面应用中 RTL 文本仍然显示为从左到右，表明该功能可能尚未完全落地。

### 5. Zen 提供 Claude Opus 4.6 报错 “no provider available”
[#30192](https://github.com/anomalyco/opencode/issues/30192) (OPEN, 💬8, 👍3)
自 5 月 28 日起，OpenCode Zen（Black 订阅）中的 Claude Opus 4.6 模型始终返回 “no provider available”，但其他 Zen 模型正常。用户怀疑是服务端问题。

### 6. Zen API CORS 预检请求返回 404
[#31041](https://github.com/anomalyco/opencode/issues/31041) (OPEN, 💬7, 👍2)
所有 Zen API 端点 (`/zen/v1/*`, `/zen/go/v1/*`) 在浏览器 CORS 预检 (OPTIONS) 时返回 404 HTML 页面，导致浏览器端客户端完全无法调用 API。这是一个基础路由问题，影响所有 Web 客户端。

### 7. Copilot Claude Opus 4.8 输出伪工具调用文本
[#31247](https://github.com/anomalyco/opencode/issues/31247) (OPEN, 💬6, 👍0)
使用 `github-copilot/claude-opus-4.8` 时，模型有时不返回结构化工具调用，而是将伪工具调用文本直接作为助手消息输出，导致后续请求失败（400 错误，见 #31807）。这是 Copilot 提供者特有的序列化缺陷。

### 8. TUI 在 1.17.0+ 启动时崩溃
[#32706](https://github.com/anomalyco/opencode/issues/32706) (OPEN, 💬2, 👍2)
Windows 用户在 1.17.0 到 1.17.7 版本中启动 TUI 立即崩溃，错误为 `An error occurred in Effect.tryPromise`。影响面较广，目前尚无官方解决方案。

### 9. Zen 列出的 Claude Opus 4.7/4.8 无法运行
[#33229](https://github.com/anomalyco/opencode/issues/33229) (OPEN, 💬2, 👍0)
Zen 认证正常，其他模型可用，但 `opencode/claude-opus-4-7` 和 `opencode/claude-opus-4-8` 在运行时失败。与 #30192 类似，指向 Zen 后端对最新 Opus 版本的支持不完整。

### 10. GLM-5.2 仍出现空消息占位符
[#33280](https://github.com/anomalyco/opencode/issues/33280) (OPEN, 💬0, 👍0)
GLM-5.2 通过 OpenAI 兼容接口使用时，对话中依然出现 `[System: Empty message content sanitised to satisfy protocol]` 占位符。该问题在 #17564 中曾报告并标记为“已完成”，现在回归，说明修复未完全覆盖此提供者。

## 重要 PR 进展（10 条）

### 1. 文档：添加函数式编程指南
[#33288](https://github.com/anomalyco/opencode/pull/33288) (CLOSED)
在根目录 `AGENTS.md` 中增加了函数式编程偏好配置说明，保持指导文本原样放在独立风格指南章节。合并后将对贡献者规范代码风格有帮助。

### 2. 修复：保护 VirtualTimelineRow 防止 undefined 崩溃
[#33287](https://github.com/anomalyco/opencode/pull/33287) (OPEN)
针对 Issue #33285，为 TUI 渲染组件 `VirtualTimelineRow` 增加守卫，防止访问 undefined 的 `size` 属性。这是连续多起渲染崩溃修复中的一环。

### 3. 修复：工具调用中的无效枚举参数应抛出错误
[#33150](https://github.com/anomalyco/opencode/pull/33150) (OPEN, contributor)
在工具调用中验证枚举类型参数，当值不匹配已知枚举时向语言模型返回错误，而不是静默失败。提升提供者与工具间的契约健壮性。

### 4. 功能：系统提示在会话创建后不可变
[#33246](https://github.com/anomalyco/opencode/pull/33246) (OPEN)
按 session ID 缓存系统提示，避免后续不必要的读取和重算。该变化能够减少 I/O 并保证系统提示一致性。

### 5. 修复：恢复桌面/Web 聊天中的 Markdown 标题层级
[#33284](https://github.com/anomalyco/opencode/pull/33284) (OPEN)
修复了 `markdown.css` 中所有标题（h1–h6）共用同一字号（14px）的 bug，恢复正确的标题层级样式。

### 6. 修复：去除 MiniMax 响应的尾部工具调用泄漏后缀
[#30849](https://github.com/anomalyco/opencode/pull/30849) (OPEN, contributor)
MiniMax 提供者偶尔会在助手文本末尾泄漏工具调用标记后缀，PR 添加了定向清理逻辑。

### 7. 重构：简化 Runner 状态转换
[#33270](https://github.com/anomalyco/opencode/pull/33270) (OPEN, contributor)
将互递归的重试函数替换为迭代的穷举状态转换循环，同时用状态机表示溢出恢复可用性，避免未处理的 pending 促销。

### 8. 功能：MCP 资源订阅 API 及自动提示
[#29355](https://github.com/anomalyco/opencode/pull/29355) (OPEN)
基于之前的关闭 PR 重新提交，实现 MCP 客户端资源订阅功能，包括自动向模型注入资源内容。这是 MCP 能力完备化的关键一步。

### 9. 功能：向插件暴露 skills API
[#29356](https://github.com/anomalyco/opencode/pull/29356) (OPEN)
通过 `PluginInput.skills` 将技能系统暴露给插件，允许插件开发者利用内建技能。同样为之前关闭 PR 的重新提交。

### 10. 功能：TUI 增加 YOLO 权限模式
[#33279](https://github.com/anomalyco/opencode/pull/33279) (OPEN)
实现 `--yolo` 作为规范自动批准标志，同时保留 `--dangerously-skip-permissions` 作为别名。在 TUI 命令中也支持该标志，将权限模式设为 `"auto"` 后自动批准所有权限请求。直接对应热门功能请求 #11831。

## 功能需求归类

从今日活跃的 Issues 中，用户反复提出的功能方向可归纳如下：

- **模型兼容性**：多个 Issue 反映 Zen 和 Copilot 提供者对最新 Claude Opus（4.6/4.7/4.8）的支持存在缺陷，包括“no provider available”、伪工具调用、prefill 400 错误。
- **自动化权限**：YOLO 模式的需求关注度极高（#11831 获得 30 👍），并且已有对应 PR 实现。
- **会话管理**：用户希望会话数据保存在项目文件夹（#14292），以及支持会话重命名（#32375）。
- **国际化与 RTL**：阿拉伯语、波斯语等 RTL 语言支持在 #10908 关闭后仍有报道 #32726 #32810 指出桌面端显示未修复。
- **TUI 稳定性**：多个 TUI 崩溃报告（#32706, #33285, #33283），集中在渲染器、Effect 错误等方面。
- **API/CORS**：Zen API 的 CORS 预检问题 (#31041) 阻塞所有浏览器端客户端，属于基础设施缺陷。
- **支付与订阅**：多起信用卡被拒及退款问题（#33264, #33252, #31956），可能与国际支付通道有关。

## 开发者关注点

- **Zen 与 Copilot 的最新模型可用性**是当前最大痛点：Claude Opus 4.6/4.7/4.8 在两个提供者上都出现了不同的崩溃或不兼容现象，用户无法享受最新模型能力。
- **TUI 崩溃频发**：从 1.17.0 到 1.17.7 都有人遭遇启动崩溃或渲染错误，且缺乏快速回退方案。
- **CORS 阻塞** 影响所有希望通过浏览器或 Web 客户端使用 Zen API 的用户，该问题已开放超过两周。
- **空消息占位符回归** 表明修复验证覆盖不足，提醒团队需要增加回归测试。
- **支付失败** 虽属边缘问题，但对于尝试购买付费订阅的新用户是直接障碍。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 – 2026-06-22

## 今日更新概览

过去 24 小时内，社区发布了 **v0.18.5 正式版** 和 **v0.18.3-nightly 夜版**，共修复 2 项核心问题。28 条 Issue 中有 17 条被关闭或进入处理流程，46 条 Pull Request 中有一半以上处于活跃讨论状态。重点关注领域包括 **CLI 渲染修复**、**工具重复调用防护**、**会话恢复与子代理功能增强** 以及 **CI/CD 测试基础设施改进**。

## 版本发布

### v0.18.5（正式版）
- **发布说明**：基于配置自动生成
- **主要变更**：
  - 修复：plan mode 提示需要用户选择加入（opt-in），避免意外进入计划模式（[#5433](https://github.com/QwenLM/qwen-code/pull/5433)）
  - 测试：删除重复的 gitdiff 未跟踪文件测试用例
- 标记：`release/v0.18.5`

### v0.18.3-nightly.20260621.6b2f800ab（夜版）
- 内容与正式版基本相同，属于同一天夜版构建

## 社区热点 Issues（选 10 条）

### 1. #4888 – [bug] IDEA 插件中 ask_user_question 不显示问题文本
- **影响场景**：IDEA 插件用户无法看到 Qwen 提问内容，也无法输入答案。
- **状态**：OPEN，10 条评论，0 👍
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/4888)

### 2. #5019 – [bug] 长程任务下大量工具重复调用导致会话终止
- **影响场景**：模型在长上下文中连续调用同名、同参数工具，触发 API 错误（400 InternalError Algo），打断工作流。
- **社区反应**：标记 `duplicate`、`welcome-pr`，已有关联 PR 推进修复。
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5019)

### 3. #5555 – [bug] `--resume` 后空格预览 thinking block 渲染截断
- **影响场景**：恢复会话后按空格展开 thinking block，思考内容显示不完整，终端换行断裂。
- **状态**：CLOSED（已修复），3 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5555)

### 4. #5562 – [bug] CLI 输入框换行时背景色渲染不连续
- **影响场景**：交互式 TUI 下输入多行文本，背景色出现断裂，影响视觉体验。
- **状态**：CLOSED（已修复），3 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5562)

### 5. #5559 – [feature] 为无 API Key 集成测试添加可回放的假模型响应
- **影响场景**：CI 中无法执行依赖模型端到端的测试，阻碍 PR 回归检查。
- **状态**：OPEN，3 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5559)

### 6. #5540 – [feature] 允许恢复已完成的后台子代理（通过 send_message 复活）
- **影响场景**：后台子代理一旦完成，就无法再次发送消息，用户希望可复活继续交互。
- **状态**：OPEN，3 条评论，已有对应 PR #5556
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5540)

### 7. #5574 – [bug] Shift+Tab 进入 plan mode 后自动执行无确认
- **影响场景**：通过 Shift+Tab 切换审批模式时，`exit_plan_mode` 工具直接执行计划，跳过用户确认。
- **状态**：OPEN，1 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5574)

### 8. #5563 – [bug/documentation] `mcp add --scope` 默认值文档与代码不一致
- **影响场景**：文档写默认值为 `project`，实际代码默认值为 `user`，导致用户困惑。
- **状态**：OPEN，2 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5563)

### 9. #5549 – [enhancement] 触发 Qwen Autofix 来处理 release 工作流失败
- **影响场景**：Release 失败后仅创建 Issue，需要人工排查，希望自动触发修复流程。
- **状态**：OPEN，2 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5549)

### 10. #5520 – [bug] standalone updater 拒绝包含双点（`..`）的安全文件名
- **影响场景**：合法文件名如 `qwen-code/release..notes.md` 被错误拦截，导致更新失败。
- **状态**：CLOSED，1 条评论
- [Issue 链接](https://github.com/QwenLM/qwen-code/issues/5520)

## 重要 PR 进展（选 10 条）

### 1. #5553 – [CLOSED] fix(core): keep bare fast model on current auth
- **内容**：修复快速模型选择器在不同认证类型下的作用域问题，防止 `coder-model` 错误转跳到 Qwen OAuth。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5553)

### 2. #5573 – [OPEN] fix(core): always-on guard for consecutive identical tool calls (#5019)
- **内容**：将连续相同工具调用检查提升为始终启用，无论 `skipLoopDetection` 设置如何，防止工具调用死循环。
- 关联 Issue #5019。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5573)

### 3. #5557 – [OPEN] feat(core): add Artifact tool to publish interactive HTML pages
- **内容**：新增实验性 `artifact` 工具，模型可将自包含的交互式 HTML 页面发布到本地文件并自动打开。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5557)

### 4. #5502 – [OPEN] feat(voice): voice dictation with native capture, streaming, and biasing
- **内容**：为 CLI 添加语音听写功能，支持按住/点击模式，以及 `/voice` 命令切换。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5502)

### 5. #5030 – [OPEN] feat(core,cli,sdk): resume an interrupted turn without a synthetic "continue" message
- **内容**：允许恢复因崩溃或中断而中断的回合，无需插入合成 `"continue"` 消息，增强会话连贯性。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5030)

### 6. #5560 – [OPEN] test(integration): add fake OpenAI server for no-AK daemon tests
- **内容**：添加轻量级 OpenAI 模拟服务器，支持 fixture 式文本响应、流式/非流式、工具调用等，使无 API Key 的集成测试可运行。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5560)

### 7. #5556 – [OPEN] feat: revivable background sub-agents and subagent transcript TTL
- **内容**：允许已完成的后台子代理接收新消息（复活），并添加子代理会话转录 TTL 清理机制。
- 关联 Issue #5540。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5556)

### 8. #5126 – [OPEN] feat(vision-bridge): transcribe images to text for text-only models
- **内容**：为纯文本模型添加自动视觉桥接，用户粘贴图片后自动发送给有图像能力的模型，转写为文本再传给主模型。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5126)

### 9. #5561 – [OPEN] feat(mcp): reconcile MCP servers live on settings change
- **内容**：实现 MCP 服务器热重载：编辑 `settings.json` 中的 `mcpServers` 配置后，自动连接/断开对应服务器，无需重启应用。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5561)

### 10. #5564 – [CLOSED] fix(cli): fail non-interactive runs on loop detection
- **内容**：非交互式 CLI 运行时，循环检测触发后现在标记为失败而非成功，确保 CI 工作流正确感知错误。
- [PR 链接](https://github.com/QwenLM/qwen-code/pull/5564)

## 功能需求归类

从今日提交和讨论中，可归纳出以下用户反复提到的功能方向：

1. **IDE 集成体验**
   - IDEA 插件中问答框不显示（#4888）
   - VS Code 插件自动发布流程（#5570 对应 PR #5572）

2. **CLI 渲染与交互**
   - 输入框换行背景断裂（#5562）–已修复
   - resume 预览截断（#5555）–已修复
   - 计划模式自动执行问题（#5574）

3. **会话管理与工作流**
   - 后台子代理可恢复（#5540，PR #5556）
   - 中断回合的优雅恢复（#5030）
   - 连续工具调用的自动防护（#5019，PR #5573）

4. **CI/CD 与测试基础设施**
   - 无需 API Key 的集成测试（#5559，PR #5560）
   - 非交互式循环检测报告失败信号（#5554，PR #5564）
   - Release 失败后自动触发修复（#5549，PR #5551）

5. **MCP 配置与文档**
   - `--scope` 默认值文档不匹配（#5563）
   - MCP 服务器热重载（#5561）

6. **新功能探索**
   - 语音输入（PR #5502）
   - Artifact 交互式页面发布（PR #5557）
   - Vision Bridge 图像转文本（PR #5126）

## 开发者关注点

以下为社区开发者反馈中反复提及的痛点或高频需求：

- **非交互式运行误报成功**：循环检测触发后仍以退出码 0 结束，导致 CI 流水线无法发现失败（#5554）。已被 PR #5564 修复。
- **计划模式缺乏确认机制**：通过快捷键进入计划模式后，`exit_plan_mode` 直接执行，绕过了用户确认步骤（#5574），存在安全隐患。
- **后台子代理无法复活**：当前后台代理达到 `completed` 状态后即无法继续交互，需手动重启会话，影响长任务自动化（#5540）。
- **集成测试覆盖不足**：因缺少 API Key，许多 e2e 测试无法在 PR CI 运行，回归仅在 release 时暴露（#5219，#5559）。
- **路径处理边界问题频发**：包括 UNC 路径、Windows 绝对路径、双点安全过滤、符号链接逃逸等，说明路径抽象层有待统一加固（#5538，#5522，#5481 等）。

---
> 数据来源：GitHub [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)（时间范围 2026-06-21 ~ 2026-06-22 UTC）

</details>