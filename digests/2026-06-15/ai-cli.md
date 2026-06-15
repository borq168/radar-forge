# AI CLI 工具社区动态日报 2026-06-15

> 生成时间: 2026-06-15 02:51 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比分析日报 | 2026-06-15

## 一、今日横向概览

今日（2026-06-15）各主流 AI CLI 工具的社区活动差异显著。**OpenCode** 和 **Qwen Code** 的 Issue 与 PR 更新量最大（均超过 50 条），其中 OpenCode 还发布了 v1.17.7 修复版本；**Claude Code** 与 **Gemini CLI** 的中高优先级 Bug 讨论集中；**OpenAI Codex** 的 Windows 桌面端崩溃问题引发多条同类 Issue；**GitHub Copilot CLI** 和 **Kimi Code CLI** 社区相对安静，各有 3~8 个 Issue 更新。共性问题上，多个工具社区今日均反映了 **Agent 子任务行为失控**、**安全/权限边界缺陷** 以及 **Windows 平台稳定性** 三大类问题。

## 二、各工具活跃度对比

| 工具 | 过去24h Issue 更新数 | 过去24h PR 活动数 | 今日 Release | 高热度 Issue 示例（👍或💬） |
|------|----------------------|-------------------|--------------|----------------------------|
| Claude Code | 50 条 | 5 个（1 修复 + 2 Bounty） | 无 | #50246 消息队列 (92👍), #32544 误收费 (14👍) |
| OpenAI Codex | 约10+（热门30中） | 约10个（MCP/速率限制等） | 无 | #14593 Token消耗过快 (268👍), #11023 Linux桌面 (568👍) |
| Gemini CLI | 约10+（热点中7个） | 约10个（依赖更新为主） | 无 | #21409 Agent挂起 (8👍), #25166 Shell卡死 (P1) |
| GitHub Copilot CLI | 8 个（1 closed） | 0 个 | 无 | #3558 重复ID错误 (7👍), #956 脚本路径错误 (2👍) |
| Kimi Code CLI | 3 个 | 4 个（3 已合并） | 无 | #2123 限速严重 (2条评论), #2451 系统提示词冲突 |
| OpenCode | 50+ 条 | 50+ 条 | v1.17.7 | #28846 DeepSeek降价 (77💬, 79👍), #13984 复制粘贴 (48💬) |
| Qwen Code | 27 条 | 50 条 | 无（nightly构建失败） | #3203 免费配额调整 (135💬), #5055 Trojan误报 (5💬) |

## 三、共同出现的功能方向

1. **Agent/子代理行为可靠性**
   - **Claude Code**：子代理无限递归与 Token 失控（#68430 CRITICAL），子代理忽视禁止生成设置。
   - **Gemini CLI**：子代理错误报告“成功”（#22323）、Agent 挂起（#21409）。
   - **OpenCode**：转发父级附件到子代理（PR #32302）、子会话继承工作区（#30355）。
   - **Qwen Code**：重复大工具结果导致 OOM（#5101 P1）、sudo 权限无法允许（#5119）。
   - **共性问题**：子代理的执行控制、状态反馈准确性和资源消耗管理成为多工具痛点。

2. **安全与权限模型缺陷**
   - **Claude Code**：子代理自主调用付费外部脚本（Bounty PR #67699）。
   - **OpenAI Codex**：安全检测误报（#27817, #28015），正常开发被阻断。
   - **Gemini CLI**：Auto Memory 敏感信息处理（#26525）。
   - **OpenCode**：MCP 子进程泄漏完整环境变量（#31778 安全漏洞）。
   - **Qwen Code**：权限探针被绕过（#5102 P2）、Trojan误报（#5055）。
   - **共性问题**：多个工具的安全机制存在误报/绕过或信息泄漏隐患。

3. **Windows 平台兼容性**
   - **OpenAI Codex**：桌面版更新后闪退（#27979, #27367, #25807 多条），WSL 二进制缺失（#28103）。
   - **Claude Code**：Windows 桌面白屏（#51143）。
   - **Kimi Code**：Windows 粘贴支持（PR #2018 已合并）、shell 可配置（PR #839 已合并）、日志锁修复（PR #2020）。
   - **Qwen Code**：MCP filesystem 在 Windows 下工具不可用（#4218）。
   - **共性问题**：Windows 用户在桌面应用启动、MCP 集成、终端交互方面仍面临较多稳定性问题。

## 四、差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|------|-------------|--------------|------------|--------------------|-----------|----------|-----------|
| **功能侧重** | 深度代码编辑、子代理协作、会话管理 | 桌面+CLI双模式、Agent 插件生态、异步钩子 | Agent 自主性、技能/子代理系统、Auto Memory | GitHub/Azure DevOps 工作流集成、Agent Skills | 轻量级 CLI、多模型支持（k2.7 等） | MCP 优先、插件扩展、多提供商支持 | 模型适配（DeepSeek/Qwen）、工作流引擎、扩展管理器 |
| **目标用户** | 高级开发者/团队，重视细粒度控制与成本 | 多平台开发者（Mac/Windows/Linux 需求强） | 需要高自主性 Agent 的用户 | GitHub 生态重度用户 | 从 Claude/Cursor 迁移的性价比用户 | 开源社区、自建模型网关用户 | 阿里云/百炼用户、追求多模型切换 |
| **技术路线** | 本地优先 + 子代理递归模式 | 语义搜索 + 多 Agent 并行 + 异步钩子 | 深度 RL 评估 + 组件级可靠性测试 | 绑定 GitHub API 与工作项 | 快速迭代、补丁优先 | 紧跟 MCP 标准、插件化架构 | 工作流编排 + 权限探针 + 动态模型 |

## 五、社区活跃度记录

- **最活跃（Issue+PR 数量超50）**：**OpenCode** 和 **Qwen Code**，说明其社区参与度高、维护者响应积极（OpenCode 今日有版本发布，Qwen Code 有10+新 PR）。
- **中高活跃（10~50条更新）**：**Claude Code**（50条Issue、5个PR）、**Gemini CLI**（约10+ Issue、10+ PR，但多为依赖更新）、**OpenAI Codex**（约10+ Issue、10+ PR 含复杂功能 PR）。
- **低活跃（<10条更新）**：**GitHub Copilot CLI**（8 Issue、0 PR）、**Kimi Code**（3 Issue、4 PR）。其中 Kimi Code 的 PR 合并率较高（3/4 已合并），但 Issue 社区反馈较少。
- **维护者回应质量**：Claude Code 对 CRITICAL 子代理递归（#68430）标记及时；Gemini CLI 对多个 P1 Issue 标记 `need-retesting`；OpenCode 发布 v1.17.7 修复多个社区报告的问题；Qwen Code 在 #5101/#5102 中标记 P1/P2 并欢迎 PR 贡献。**Kimi Code 的限速投诉（#2123）已持续近2个月无官方回复，维护者回应不足。**

## 六、有证据支撑的观察

1. **子代理/Agent 自执行控制是当前最大共性风险**。Claude Code 的 CRITICAL 递归（#68430）与收费脚本执行（Bounty #67699）、Gemini 的子代理误报成功（#22323）、Qwen Code 的权限探针被绕过（#5102）均指向 Agent 自主行为缺乏可靠的停止机制和反馈真实性。该问题影响成本和安全，属于跨工具的高危信号。

2. **Windows 平台用户体验仍显著落后于 macOS/Linux**。OpenAI Codex 桌面版多个版本持续闪退（#27979等）、Claude Code 白屏（#51143）、Qwen Code MCP 不兼容（#4218），而 Kimi Code 正在通过补丁改善（粘贴、shell、日志）。但无明显迹象表明这些工具已将 Windows 稳定性设为最高优先级。

3. **安全检测误报开始影响正常开发流程**。OpenAI Codex 将税务报税（#27817）和本地仓库维护（#28015）误判为风险；Claude Code 社区报告子代理调用付费脚本（#67654）；OpenCode 暴露 MCP 环境变量泄漏（#31778）。安全机制的精度和透明度成为开发者关注的新焦点。

4. **成本控制与配额透明度是付费用户的核心焦虑**。Kimi Code 限速严重且无透明显示（#2123）、Qwen Code 免费层配额骤降（#3203 135条评论）、OpenCode 社区要求按降价调整配额（#28846 79👍）、Claude Code 误计费（#32544）。多个工具在计费/配额沟通上存在信息不对称，易引发用户流失。

5. **MCP 集成成为差异化竞争点，但标准跟进速度不一**。OpenCode 优先完整 MCP 客户端规范（#28567），Gemini CLI 修复数组型工具结果（PR #27730），Claude Code 也在改进 MCP 相关工具。而 Qwen Code 的 MCP filesystem 在 Windows 上不可用（#4218），OpenAI Codex 则提升 MCP 超时（PR #28234）。整体上 OpenCode 和 Qwen Code 的 MCP PR 密度更高。

---

**今日暂无明确跨工具信号**：未见任何工具社区集中讨论 “Agent 编排图/可视化” 或 “多模型联邦” 等前沿方向。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-06-15 的 Claude Code 社区动态日报。

---

# 2026-06-15 Claude Code 社区动态日报

**本期导读：** 今日社区活跃度较高，主要围绕**子代理无限递归和 Token 消耗失控**（#68430）、**会话数据意外丢失**（#41458）、**文件截断**（#53940）以及 **macOS 内核级内存泄漏**（#66020）等严重 Bug。功能需求方面，**消息队列模式**（#50246）以 92 个 👍 成为最受期待的功能，同时用户对 **Appshots 风格的窗口捕获**（#68498）有强烈呼声。

## 今日更新概览

今天（2026-06-15）没有发布新版本，但 Issue 和 PR 社区非常活跃。过去 24 小时内，共有 50 条 Issue 被更新，其中多个关于子代理失控、资源泄漏、API 过载处理和模型可靠性问题的讨论热度很高。同时，有 5 个 PR 处于活动状态，包括 1 个正式修复 PR 和 2 个 Bounty PR。

## 社区热点 Issues

1.  **[BUG] Cowork 编辑/写入工具会静默截断文件** [#53940](https://github.com/anthropics/claude-code/issues/53940)
    - **影响场景：** 用户使用 Cowork 模式下的 Edit/Write 工具编辑文件时，若输出超过某个字节限制，文件会被静默截断，且此问题没有文件大小限制（所有尺寸文件都可能触发）。
    - **社区反应：** 31 条评论，12 个 👍。用户 @gshaner23 详细报告了此问题，这可能导致数据静默丢失，影响所有使用 Cowork 功能的用户。

2.  **[Enhancement] 消息队列模式：将消息排队而非中断当前任务** [#50246](https://github.com/anthropics/claude-code/issues/50246)
    - **影响场景：** 当 Claude 正在执行任务时，用户无法发送后续指令，只能选择中断当前工作。
    - **社区反应：** 28 条评论，92 个 👍。这是一个社区呼声极高的功能请求。用户还发现存在一个重复 Issue ([#64204](https://github.com/anthropics/claude-code/issues/64204))，显示 VSCode 用户也期望此功能。

3.  **[BUG] `cleanupPeriodDays: 99999` 设置被忽略，490 个会话被静默删除** [#41458](https://github.com/anthropics/claude-code/issues/41458)
    - **影响场景：** 用户明确设置保留所有会话，但该设置被忽略，导致 490 个历史会话被自动清理。
    - **社区反应：** 16 条评论。这是一个严重的数据丢失 Bug，影响所有配置了会话保留策略的用户。

4.  **[BUG] 在可用计划容量内仍被额外计费 + 虚假的速率限制错误** [#32544](https://github.com/anthropics/claude-code/issues/32544)
    - **影响场景：** 用户账户仍有可用额度，但 Claude Code 错误地报告速率限制并产生额外费用。
    - **社区反应：** 15 条评论，14 个 👍。此问题长期未解决，影响 Linux 用户的成本和可用性。

5.  **[BUG] Claude Desktop 在 Windows 上持续显示空白/白屏** [#51143](https://github.com/anthropics/claude-code/issues/51143)
    - **影响场景：** Windows 用户无法正常使用 Claude Desktop 应用，Cowork 功能不可用，即使多次重装也无效。
    - **社区反应：** 13 条评论，12 个 👍。此问题严重阻碍 Windows 用户的使用。

6.  **[CRITICAL] 子代理无限递归与 Token 消耗失控** [#68430](https://github.com/anthropics/claude-code/issues/68430)
    - **影响场景：** **此 Issue 被标记为 CRITICAL。** 子代理会递归生成超过 50 层的子代理，忽略禁止生成的设置（`CLAUDE_CODE_FORK_SUBAGENT=0`），导致 Token 消耗失控，且子代理的所有工作成果都会丢失。
    - **社区反应：** 7 条评论。这是一个新爆出的严重回归，会迅速消耗用户大量配额或费用。

7.  **[BUG] macOS 内核级内存泄漏导致 Claude CLI 在约 20GB 处崩溃** [#66020](https://github.com/anthropics/claude-code/issues/66020)
    - **影响场景：** Claude Code CLI 在 macOS 上导致内核 `data.kalloc.1024` 区域泄漏，随着负载增加，泄漏速率从 21/秒飙升到 1027/秒，最终导致系统崩溃。
    - **社区反应：** 7 条评论。这是一个严重的系统级稳定性问题。

8.  **[FEATURE] 为 Task 工具添加 `cwd` 参数以设置子代理工作目录** [#12748](https://github.com/anthropics/claude-code/issues/12748)
    - **影响场景：** 当前子代理（Task 工具）无法被指定到特定目录工作，例如无法在 Git Worktrees 中执行任务。
    - **社区反应：** 10 条评论，23 个 👍。这是一个长期存在的功能需求，对于需要管理多个代码库分支的用户至关重要。

9.  **[BUG] HTTP 529 负载错误被误报为“速率限制”，导致并行会话和子代理硬失败** [#68502](https://github.com/anthropics/claude-code/issues/68502)
    - **影响场景：** 当用户并行运行多个 Claude Code 会话或使用子代理时，服务器过载（HTTP 529）被错误报告为客户端“速率限制”，且无自动重试，导致任务失败。
    - **社区反应：** 2 条评论。此问题影响了需要并发使用 Claude Code 的用户或团队。

10. **Feature Request: Appshots 风格的窗口捕获功能** [#68498](https://github.com/anthropics/claude-code/issues/68498)
    - **影响场景：** 用户需要将屏幕外的滚动内容（如长日志文件）提供给 Claude，当前流程繁琐。
    - **社区反应：** 4 条评论。这是一个新的高优先级功能请求，参考了 OpenAI Codex 的功能，旨在简化上下文提供流程。

## 重要 PR 进展

1.  **[OPEN] fix(scripts): 不要自动关闭已分配问题的 sweep 脚本** [#68423](https://github.com/anthropics/claude-code/pull/68423)
    - **功能或修复内容：** 修复了 `scripts/sweep.ts` 脚本的一个逻辑问题，该脚本在关闭过期 Issue 时，会错误地关闭那些虽然已分配但尚未被被分派人处理的 Issue。此 PR 旨在避免误操作。

2.  **[OPEN] [BUG] Claude 自主运行调用付费外部服务的后台脚本** (Bounty) [#67699](https://github.com/anthropics/claude-code/pull/67699)
    - **功能或修复内容：** 针对 Issue #67654 的 Bounty PR。旨在修复 Claude 在用户不知情的情况下，自主执行调用外部付费 API 的脚本的安全问题。

3.  **[OPEN] [BUG] 因计费错误导致账户降级** (Bounty) [#67409](https://github.com/anthropics/claude-code/pull/67409)
    - **功能或修复内容：** 针对 Issue #67407 的 Bounty PR。旨在解决计费系统错误导致用户账户被意外降级的问题。

4.  **[CLOSED] [BUG] Claude 自主运行调用付费外部服务的后台脚本** [#67722](https://github.com/anthropics/claude-code/pull/67722)
    - **功能或修复内容：** 与 #67699 同一个 Bounty 的另一份 PR，已被合并或关闭。

## 功能需求归类

从近期（主要为今日更新）的 Issue 中，可以看出用户关注以下几个功能方向：

- **任务与消息管理：** 用户强烈渴望一个“消息队列模式”([#50246](https://github.com/anthropics/claude-code/issues/50246))，以避免中断正在进行的任务。VSCode 扩展用户也提出了相同的需求 ([#64204](https://github.com/anthropics/claude-code/issues/64204))。
- **文件与上下文管理：**
    - 希望支持像 “Appshots” 那样，便捷地捕获（包括滚动内容在内的）整个窗口文本 ([#68498](https://github.com/anthropics/claude-code/issues/68498))。
    - 父子代理模块化：希望 `Task` 工具能支持指定工作目录（`cwd` 参数）以更好地管理 Git Worktrees 等项目结构 ([#12748](https://github.com/anthropics/claude-code/issues/12748))。
    - 项目作用域隔离：用户抱怨新的主页屏幕默认显示所有项目的对话历史，希望只显示当前项目的对话 ([#68495](https://github.com/anthropics/claude-code/issues/68495))。
- **窗口与屏幕渲染：** 用户希望在 macOS 的 iTerm2 中，Claude Code 的 TUI 渲染功能能更稳定，避免长时间使用后屏幕错乱 ([#68461](https://github.com/anthropics/claude-code/issues/68461))。

## 开发者关注点

- **子代理行为失控：** 开发者普遍担忧子代理的递归问题。`#68430` 报告了深度超过 50 层的子代理递归和 Token 失控，`#68110` 也报告了子代理无限递归导致的指数级 Token 消耗和费用飙升。这是一个关键的稳定性与成本问题。
- **资源泄漏与崩溃：**
    - **macOS:** Claude CLI 引发了内核内存泄漏 (`#66020`)，同时 Desktop 应用泄漏伪终端（`#66434`, `#65995`），均可能导致系统层面的不稳定或崩溃。
    - **Windows:** Desktop 应用出现顽固的白屏问题 (`#51143`)，并且有报告称最新版本完全无法运行 (`#68504`)。
- **模型可靠性问题：**
    - 新版 Opus 4.8 模型存在频繁的、无声的“空轮次”或“工具调用格式错误”的 Bug (`#68510`)。多个 Issue 也报告了工具调用输出为原始 XML 而不是被执行的 Bug，主要出现在 Windows Cowork 和 MCP 长会话中 (`#63870`, `#68354`, `#68472`)。
- **诊断信息误导性：** HTTP 529 服务器过载错误被错误地显示为“Rate limited”，这给开发者排查问题带来了困扰 (`#68502`)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-06-15 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-15

## 今日更新概览

过去 24 小时内，Codex 仓库无新版本发布，但社区活跃度极高，主要围绕 Windows 桌面应用更新后崩溃、Token 消耗过快、以及安全检测误报等严重问题展开讨论。此外，开发团队在多个 PR 中推进了 MCP 工具超时、速率限制重置、异步钩子等核心功能的开发。

## 社区热点 Issues

1.  **Token 消耗过快问题持续发酵**
    - **Issue #14593**: 自 3 月 13 日创建以来，该问题已获得 607 条评论和 268 个赞，成为社区最关注的话题。商业版用户在 VS Code 中反馈 Token 消耗极快，尽管问题已开启数月，但仍在持续收到新评论，表明该问题尚未得到完全解决。
    - **链接**: `https://github.com/openai/codex/issues/14593`

2.  **Linux 桌面客户端呼声最高**
    - **Issue #11023**: 获得 568 个赞，是需求最强烈的功能请求。用户因 Mac 版功耗问题希望转投 Linux 平台，但目前官方尚未提供 Linux 桌面应用。该问题持续引发讨论，是功能需求类的头号议题。
    - **链接**: `https://github.com/openai/codex/issues/11023`

3.  **Windows 桌面应用更新后“闪退”**
    - **Issue #27979**: 6月12日更新后，Windows 版 Codex Desktop 版本 26.609.4994.0 出现严重问题：点击启动后，窗口一闪而过，无法正常打开。该问题引发 21 条评论，表明其影响范围较广。
    - **链接**: `https://github.com/openai/codex/issues/27979`

4.  **Windows 桌面应用多个版本存在启动失败问题**
    - **Issue #27367**: Windows 10 Pro 用户在更新后遇到相同的“点击即退出”问题，而 CLI 版本工作正常。多个类似 Issue 的出现，指向了近期 Windows 桌面版更新可能存在普遍兼容性缺陷。
    - **链接**: `https://github.com/openai/codex/issues/27367`

5.  **Windows 桌面应用启动后立即退出**
    - **Issue #25807**: 另一名用户在 6月2日版本就报告了完全相同的“打开即退”问题，说明该 Bug 并非偶发，且在不同版本中持续存在。
    - **链接**: `https://github.com/openai/codex/issues/25807`

6.  **安全检测出现严重误报**
    - **Issue #27817**: 用户在合规的税务申报工作中，对话被错误标记为“网络安全风险”并阻断。这引发了用户对安全策略过于敏感、影响正常业务的担忧。
    - **链接**: `https://github.com/openai/codex/issues/27817`

7.  **CLI 版本的网络安全检测也存在误报**
    - **Issue #28015**: 与 #27817 类似，该问题报告了 CLI 版本在进行普通本地仓库维护（如检查状态）时，也被反复阻断。安全检测的误报问题已从桌面端蔓延至 CLI 端。
    - **链接**: `https://github.com/openai/codex/issues/28015`

8.  **macOS 系统因 Codex 引发高 CPU 占用**
    - **Issue #28180**: 用户在 macOS 上使用 Remotion 生成动画时，Codex 导致 `syspolicyd` 和 `trustd` 进程 CPU 占用率达 100%，造成系统冻结。虽然该 Issue 已关闭，但暴露了在特定工作流下的严重性能问题。
    - **链接**: `https://github.com/openai/codex/issues/28180`

9.  **WSL 模式下 Codex 二进制文件缺失**
    - **Issue #28103**: 最新的 Windows 桌面版 MSIX 安装包中，缺少运行“在 WSL 中运行 Agent”功能所需的 Linux 端 `codex` 二进制文件，导致该功能完全不可用。这对 WSL 用户影响较大。
    - **链接**: `https://github.com/openai/codex/issues/28103`

10. **大量 Issue 聚焦 Windows 平台稳定性**
    - **汇总**: 在今日更新的前 30 个热门 Issue 中，至少有 6 个直接与 Windows 桌面应用崩溃、启动失败或功能缺失相关。这构成了当前 Codex 社区最集中的投诉点。
    - **链接**: 参见 Issues #27979, #27367, #25807, #28103, #28212, #28243

## 重要 PR 进展

1.  **提高 MCP 工具默认超时时间**
    - **PR #28234**: 将 MCP 工具调用的默认超时时间从 120 秒增加到 300 秒，以应对耗时较长的工具调用场景。
    - **链接**: `https://github.com/openai/codex/pull/28234`

2.  **支持多工具安装请求**
    - **PR #27640**: 扩展了 `request_plugin_install` 功能，允许模型在一次请求中安装多个工具，提升了 Agent 的效率。
    - **链接**: `https://github.com/openai/codex/pull/27640`

3.  **增加用户输入自动解析计时器**
    - **PR #28235**: 为 `request_user_input` 提示增加了自动解析功能，当用户在一段时间内无交互时，系统可自动提交空响应，防止对话卡死。
    - **链接**: `https://github.com/openai/codex/pull/28235`

4.  **新增速率限制重置积分赎回功能**
    - **PR #28143**: 在服务端添加了读取和赎回个人速率限制重置积分的 API，为 CLI 客户端实现此功能奠定了基础。
    - **链接**: `https://github.com/openai/codex/pull/28143`

5.  **CLI 实现速率限制重置积分赎回**
    - **PR #28154**: 为 CLI 的 `/usage` 命令增加了查看和赎回速率限制重置积分的功能。
    - **链接**: `https://github.com/openai/codex/pull/28154`

6.  **为异步钩子增加有限运行时**
    - **PR #27771**: 为异步钩子（Async Hooks）引入了会话级、有资源限制的运行环境，确保其正确结束并将其输出用于后续模型请求。
    - **链接**: `https://github.com/openai/codex/pull/27771`

7.  **正式启用异步钩子**
    - **PR #27452**: 在 #27771 的基础上，正式启用异步钩子的声明和执行，并连通其输出到后续的模型请求中。
    - **链接**: `https://github.com/openai/codex/pull/27452`

8.  **在 UI 中显示钩子执行模式**
    - **PR #27772**: 在 TUI 界面中增加标识，以区分钩子是同步执行还是异步执行，提升可观测性。
    - **链接**: `https://github.com/openai/codex/pull/27772`

9.  **移除终端重排特性开关**
    - **PR #27794**: 由于 `terminal_resize_reflow` 功能已被验证稳定，此 PR 移除了相关的特性开关和旧代码路径，使其默认开启。
    - **链接**: `https://github.com/openai/codex/pull/27794`

10. **增加外部 Agent 导入进度记录**
    - **PR #28008**: 引入稳定 ID 以关联 Agent 导入的即时响应与后续完成通知，并对导入结果进行核算。与之配套的 **PR #28009** 增加了导入过程中的进度通知和错误遥测。
    - **链接**: `https://github.com/openai/codex/pull/28008`, `https://github.com/openai/codex/pull/28009`

## 功能需求归类

从近期的 Issues 中，用户反馈的功能需求主要集中在以下几个方向：

-   **平台支持**: 对原生 Linux 桌面客户端的呼声极高（#11023，568 👍），显示出用户对跨平台支持的强烈渴望。
-   **性能和资源优化**: 用户持续反馈 Token 消耗过快（#14593，268 👍）以及 GPU 占用高、电池消耗快（#20840）等问题。
-   **用户体验优化**:
    - **导航与历史**: 支持重命名任务/线程标题以改善历史导航，是常被提及的小功能（#12564）。
    - **终端集成**: 用户希望 CLI 能在终端标题栏设置独一无二的标识，以区分多个 AI 工具（#21958）。
    - **拼写检查**: Windows 用户希望可以在应用设置中自由开关拼写检查功能（#25431）。
-   **安全与合规**: 用户迫切需要解决安全检测误报问题（#27817, #28015），并希望有更清晰、合理的误报申诉流程（#28230）。

## 开发者关注点

-   **Windows 桌面端稳定性是首要痛点**: 多个关于桌面应用打开即崩溃的 Issue（#27979, #27367, #25807）表明，最新的 Windows 更新引入了严重的稳定性问题，直接影响了核心功能的使用，是当前最紧急的 Bug。
-   **成本控制担忧**: Token 消耗过快（#14593）与 Plan 使用情况不透明（#24942）的问题受到高度关注，开发者对 Codex 的使用成本表示担忧。
-   **安全策略过于僵化**: 系统将正常的本地开发（#28015）和金融报税（#27817）工作误判为高风险的网络安全行为，引发了开发者对 AI Agent 工作流中安全机制精细度的质疑。
-   **WSL 集成功能退化**: 新版 MSIX 包缺失 WSL 模式所需的二进制文件（#28103），导致该跨平台开发场景直接失效，影响了开发者的工作流程。
-   **资源占用问题**: macOS 上因特定工作流（如动画生成）导致系统资源耗尽（#28180），表明在处理复杂任务时，Codex 的进程管理依然存在缺陷。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是基于 2026-06-15 日 GitHub 数据生成的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-15

## 今日更新概览

今日社区讨论活跃，主要围绕 Agent 行为的稳定性与可靠性展开，多个与 Agent 挂起、子代理误报成功、以及工具调用不准确相关的高优先级 Issue 获得了持续关注与更新。此外，Pull Requests 方面，今日出现了由 Dependabot 发起的大规模依赖更新浪潮，包括多个核心库的重大版本升级。

## 社区热点 Issues

1.  **通用 Agent 严重挂起问题**
    -   **Issue**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - 通用 Agent 在执行简单任务（如创建文件夹）时无限期挂起，用户等待长达一小时仍无响应。社区对此反应强烈（👍: 8），目前状态为等待重新测试 (`status/need-retesting`)。严重影响用户日常使用体验。

2.  **子代理错误报告成功状态**
    -   **Issue**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - `codebase_investigator` 子代理在达到最大执行轮次 (MAX_TURNS) 后，错误地将自身状态报告为“成功”和“达到目标”，掩盖了任务被中断的事实。这是一个严重的反馈误导问题，影响用户对任务执行情况的判断。

3.  **Agent 不主动使用技能和子代理**
    -   **Issue**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - 用户反馈 Agent 在其工作流中不会主动利用用户自定义的技能（Skills）和子代理（Sub-agents），即使任务强相关也需要明确指令才会调用，降低了 Agent 的自主性和效率。

4.  **Shell 命令执行后卡死在“等待输入”状态**
    -   **Issue**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) - 一个常见但严重影响工作流的问题。Shell 命令执行完毕后，CI 界面仍显示为“等待用户输入”状态，导致 Agent 挂起。该问题被标记为 `priority/p1` 和 `effort/medium`。

5.  **AI 评估基础设施的鲁棒性问题**
    -   **Issue**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) - 作为追踪“组件级别评估”的 Epic，该项目旨在建立更系统化的 Agent 行为可靠性评估框架。今日有更新，表明团队仍在持续关注如何构建强大的内部评估体系。

6.  **AST 感知工具对代码库映射的影响评估**
    -   **Issue**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - 另一个追踪性 Epic，旨在评估引入 AST（抽象语法树）感知工具进行文件读取、搜索和代码库映射的价值。这预示着团队可能正在探索更深度的代码理解能力，以提升 Agent 的代码操作精度。

7.  **Auto Memory 功能的问题与改进**
    -   **Issues**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) - 多个关于 Auto Memory 功能的问题集中更新，涉及敏感信息处理、无效重试、以及无效补丁文件等问题。表明该功能的稳定性、安全性和资源效率仍在打磨中。

8.  **浏览器子代理在 Wayland 环境下失败**
    -   **Issue**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - 运行在 Wayland 显示服务器下的用户报告浏览器子代理启动或运行失败。这限制了特定 Linux 用户群体的功能可用性。

9.  **工具执行不准确和数据提取可靠性问题**
    -   **Issues**: [#27598](https://github.com/google-gemini/gemini-cli/issues/27598) - 用户报告 Agent 在工具调用、数据提取和服务集成方面存在系统性退化，简单任务也经常失败，需要多次纠正指令。该 Issue 已被关闭，但反映了 Agent 基础能力的用户感知问题。

10. **远程 Agent 的高级认证与后台操作**
    -   **Issue**: [#20303](https://github.com/google-gemini/gemini-cli/issues/20303) - 这是一个关于“远程 Agent”的 Epic 跟踪 Issue，计划实现任务级认证、第一方代理支持和后台处理能力。今日又有更新，表明该长期项目仍在推进中。

## 重要 PR 进展

1.  **修复遥测属性被截断导致的 GCP 导出错误**
    -   **PR**: [#27729](https://github.com/google-gemini/gemini-cli/pull/27729) - 针对请求 JSON 输出时控制台被错误栈刷屏的问题。修复了遥测指标的属性值未按 GCP 限制（1024 字符）截断导致的导出错误。这是一个生产环境的稳定性修复。

2.  **修复数组型工具结果处理**
    -   **PR**: [#27730](https://github.com/google-gemini/gemini-cli/pull/27730) - 修复了当工具返回 JSON 数组时，`McpComplianceTransport` 错误地将数据复制到 `structuredContent` 的问题，确保保留原始文本内容。修复了 Issue [#27725](https://github.com/google-gemini/gemini-cli/issues/27725)。

3.  **保持“auto”别名对非预览用户可见**
    -   **PR**: [#27718](https://github.com/google-gemini/gemini-cli/pull/27718) - 修复了当启用动态模型配置时，顶层 `auto` 模型别名对没有预览权限的用户不可见的问题，确保功能一致。

4.  **大规模依赖更新**
    -   **PRs**: [#27929](https://github.com/google-gemini/gemini-cli/pull/27929) 至 [#27934](https://github.com/google-gemini/gemini-cli/pull/27934) 及 [#27925](https://github.com/google-gemini/gemini-cli/pull/27925) - 今日出现由 Dependabot 发起的大量依赖版本升级 PR，包括核心库 `@google/genai` (1.30.0 -> 2.8.0), `yargs`, `puppeteer-core`, `undici`, `dotenv` 等，以及一个包含 53 个 npm 依赖的批量更新。这标志着一次重要的技术栈更新。

5.  **新的交互式策略对话框**
    -   **PR**: [#22456](https://github.com/google-gemini/gemini-cli/pull/22456) - 引入新的 `PoliciesDialog` 组件，用于交互式地管理 `/policies` 命令，替代原有的纯文本输出。该 PR 已合并，将为用户提供更好的策略管理体验。

6.  **非侵入式 UX 旅程测试框架**
    -   **PR**: [#23030](https://github.com/google-gemini/gemini-cli/pull/23030) - 引入了一个“UX Journey”测试框架，用于在不入侵代码的情况下验证终端 UI 中 React 组件的存在和视觉状态，有助于提升 UI 质量和自动化测试能力。该 PR 已合并。

## 功能需求归类

从今日的 Issue 更新中，可以观察到用户和社区关注的功能方向主要集中在：

1.  **Agent 自发性与工具使用**：反复出现的需求是让 Agent 更聪明、更主动地使用可用工具，包括自定义技能、子代理和各项核心功能（如文件操作、Shell 执行）。缺乏主动性是当前多个 Issue 批评的焦点。
2.  **模型的控制能力与安全性**：用户希望 Agent 能理解任务的破坏性（如 `git reset`、`--force` 操作），并主动避免或提示用户确认。同时，对 Agent 执行行为的可预测性和可控性（如子代理权限、设置覆盖）有更高的要求。
3.  **质量评估与测试基础设施**：从 “Robust component level evaluations” 等 Issue 可以看出，社区和开发者都在推动建立更严谨、更自动化的测试和评估体系，以确保 Agent 行为的可靠性和回归控制。

## 开发者关注点

开发者反馈的痛点和需求高频集中在以下几点：

*   **Agent 可靠性**：大量 P1 级别的 Issue 指向 Agent 挂起、崩溃、错误反馈等问题，这是当前最影响开发体验和效率的痛点。
*   **子代理行为不可控**：子代理的启用、行为边界、和主 Agent 的协作存在诸多问题，如未经允许启动、错误报告状态、不遵守配置等。
*   **环境兼容性问题**：特定环境（如 Wayland）和操作（如退出外部编辑器）会引发 UI 渲染错误或功能失效。
*   **资源消耗与清理**：Agent 在执行过程中会在项目各处生成临时脚本，增加清理负担，并对资源利用效率（如 Auto Memory 无限重试）表示担忧。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-15

## 今日更新概览

截至 2026-06-15，仓库过去 24 小时内无新版本发布、无新 Pull Request 合入或更新；8 个 Issues 发生状态变更或新增讨论，其中 1 个被标记为无效已关闭，另有 7 个开放中。社区反馈集中在 Agent Skills 脚本执行路径异常、由附件引发的会话中毒、以及 BYOK/自定义模型发现等方向。

---

## 社区热点 Issues（按关注度排序）

### 1. [#956] Agent skills scripts executed in wrong folder
- **状态**: OPEN | 创建 2026-01-13 | 更新 2026-06-14 | 💬 6 条评论 | 👍 2
- **简述**: 用户创建 Agent Skill 时，在 `SKILLS.md` 中按规范引用 `scripts/myscript.sh`，但 Copilot CLI 未在预期目录执行该脚本，导致路径错误。
- **影响场景**: 使用 Agent Skill 自定义脚本的开发者，目录结构依赖被打破，脚本无法找到相对资源。
- **链接**: https://github.com/github/copilot-cli/issues/956

### 2. [#3558] Duplicate Item Errors
- **状态**: OPEN | 创建 2026-05-28 | 更新 2026-06-14 | 💬 4 条评论 | 👍 7
- **简述**: 会话中提示词处理期间出现 `Duplicate item found with id fc_call_...` 错误，请求中包含重复项，导致 API 400。
- **影响场景**: 多轮对话或附带上次输出迭代时，可能因内部 ID 重复而不可用。
- **链接**: https://github.com/github/copilot-cli/issues/3558

### 3. [#3797] Different prompt input box layout in two different cmd tabs in the same window
- **状态**: OPEN | 创建/更新 2026-06-15 | 💬 1 条评论 | 👍 0
- **简述**: 同一窗口中两个 CMD 标签页出现不同提示框布局（截图显示布局差异），影响一致的用户体验。
- **影响场景**: 多标签终端用户，视觉布局随机变化，属于 UI 缺陷。
- **链接**: https://github.com/github/copilot-cli/issues/3797

### 4. [#3791] Malformed attachment poisons session; all subsequent turns fail with 400
- **状态**: OPEN | 创建/更新 2026-06-14 | 💬 0 条评论 | 👍 0
- **简述**: 一次附加上传了受密码保护的 `.xlsx`（格式不支持），导致会话中毒，即使后续对话不附带该文件，所有操作仍然返回 400 错误。需要重新启动会话才能恢复。
- **影响场景**: 使用原生附件功能的用户，一个无效附件即可破坏整场会话。
- **链接**: https://github.com/github/copilot-cli/issues/3791

### 5. [#3795] Feature request: opt-in model discovery for BYOK / custom providers
- **状态**: OPEN | 创建/更新 2026-06-14 | 💬 0 条评论 | 👍 0
- **简述**: 在 BYOK（自定义提供商）模式下，用户必须手动设置 `COPILOT_MODEL` 或 `--model` 参数；期望 CLI 能主动查询供应商提供的模型列表（如 OpenAPI 兼容模式）并减少手动配置。
- **影响场景**: 自建模型网关或使用非 GitHub 原生模型的企业用户，部署成本高。
- **链接**: https://github.com/github/copilot-cli/issues/3795

### 6. [#3794] Add Azure DevOps work items to Up next
- **状态**: OPEN | 创建/更新 2026-06-14 | 💬 0 条评论 | 👍 0
- **简述**: “Up next”全局面板（跨会话的任务收件箱）目前只展示 GitHub Issue/PR，但 Copilot CLI 已经支持 Azure DevOps 仓库作为项目。请求将 ADO 工作项也集成到面板中。
- **影响场景**: 使用 Azure DevOps 管理任务的团队，此处空白降低工作效率。
- **链接**: https://github.com/github/copilot-cli/issues/3794

### 7. [#3793] Random hexadecimal strings (疑似无效报告)
- **状态**: OPEN | 创建/更新 2026-06-14 | 💬 0 条评论 | 👍 0
- **简述**: 标题和内容仅包含一长串十六进制数字组合，无描述、重现步骤或错误描述。可能为误报或 Spam。
- **影响场景**: 可忽略，但占用社区维护资源。
- **链接**: https://github.com/github/copilot-cli/issues/3793

### 8. [#3796] hhhhhhh (已关闭 · invalid)
- **状态**: CLOSED | 创建/更新 2026-06-14 | 💬 1 条评论 | 👍 0
- **简述**: 内容无效，被标记为 `invalid` 并关闭。
- **链接**: https://github.com/github/copilot-cli/issues/3796

---

## 功能需求归类

从今日活跃的 Feature Request 类 Issue 中，可归纳出以下用户反复提及的功能方向（无预测，仅记录）：

| 功能方向 | 对应 Issue | 用户核心诉求 |
|---|---|---|
| **BYOK / 自定义模型发现** | #3795 | 在自定义提供商模式下自动发现可用模型列表，避免手配模型 ID |
| **Azure DevOps 集成** | #3794 | 将 ADO 工作项纳入“Up next”跨会话任务面板 |
| **附件/上下文鲁棒性** | #3791 | 阻止无效附件导致整个会话不可用，期望优雅降级或自动恢复 |
| **Agent Skills 执行路径** | #956 | 规范 `SKILLS.md` 中脚本的相对路径解析，使其符合 agentskills.io 规范 |
| **重复 ID 错误** | #3558 | 修复内部 ID 重复问题，避免 `duplicate item` 导致请求失败 |

---

## 开发者关注点

- **会话稳定性受单次恶意附件影响**：Issue #3791 揭示了只一个不兼容附件就能“毒化”整场会话的严重缺陷，后续所有请求均失败且无法自然恢复，属于高优先级 bug。
- **Agent Skills 路径解析不一致**：Issue #956 虽已有 6 条评论，但维护者仍未明确修复时间线，使用 Skill 脚本的用户长期受阻。
- **BYOK 模式易用性不足**：手动指定模型 ID 对多模型网关用户是痛点，社区希望在 CLI 启动时自动枚举可调用模型。
- **UI 层不一致**：Issue #3797 指出的多标签布局差异虽不致命，但影响专业终端用户的第一印象。
- **少量无效汇报**：Issue #3793 和 #3796 的出现说明社区中仍存在噪声报告，维护者可考虑加设机器人自动关闭无内容 Issue。

---

> 数据来源：github.com/github/copilot-cli，采集时间 2026-06-15 18:00 UTC。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-15

## 今日更新概览

过去24小时，Kimi Code CLI 仓库无新版本发布。社区活跃度一般，共更新3个Issue、4个Pull Request。Issue方面，用户反馈了限速严重、系统提示词冲突以及自动加载项目上下文的已关闭功能请求；PR方面，修复了多编辑块不匹配时的错误处理、Windows终端粘贴支持、并发日志文件锁问题以及Windows shell可配置支持。

---

## 社区热点 Issues

### 1. #850 [CLOSED] Auto-load project context/rules（已关闭）
- **作者**: @Al4ric | **创建**: 2026-02-02 | **更新**: 2026-06-14 | **评论**: 3 | 👍: 1
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/850
- **摘要**: 用户从 Claude Code 迁移而来，希望Kimi Code能像Claude自动读取 `CLAUDE.md` 一样，在会话启动时自动加载项目根目录的 `AGENTS.md`、`.cursorrules` 等上下文规则文件。该功能请求已关闭，未明确合并或拒绝。
- **影响场景**: 有项目级约定或自定义指令的开发者，希望减少手动配置工作。

### 2. #2123 [OPEN] 限速，限额严重
- **作者**: @littlePoBoy | **创建**: 2026-04-30 | **更新**: 2026-06-14 | **评论**: 2 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2123
- **摘要**: 用户投诉Code Plan订阅的限速极其严重，官方声称“每5小时300-1200次请求”，实际仅能调用60多次。额度信息不透明（仅显示百分比），退款遭拒，认为违反《消费者权益保护法》。维护者未在Issue中回应。
- **影响场景**: 付费订阅专业版的开发者，开发工作中断、服务可用性存疑。

### 3. #2451 [OPEN] System prompt conflicting with my desired workflow
- **作者**: @iaindooley | **创建**: 2026-06-14 | **更新**: 2026-06-14 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2451
- **摘要**: 用户使用Kimi Code v0.12.0 + k2.7-coding模型，通过API key接入。用户有严格的开发指南（如代码风格要求），但Kimi的系统提示词会覆盖或冲突，导致生成内容不符合预期。暂无维护者回复。
- **影响场景**: 需要精细控制AI生成行为的开发者，尤其是使用自定义规则或编码规范的用户。

---

## 重要 PR 进展

### 1. #2452 [OPEN] fix: fail StrReplaceFile when a multi-edit hunk is unmatched
- **作者**: @Osamaali313 | **创建**: 2026-06-14 | **更新**: 2026-06-14 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2452
- **摘要**: 修复 `StrReplaceFile` 工具在处理多编辑块时，只有当整体结果无变化才报错的逻辑。修复后，若某个编辑块无法匹配原内容，立即抛出异常，避免部分替换意外生效。
- **影响**: 提升文件编辑工具的可靠性，防止静默失败。

### 2. #2018 [CLOSED] feat: add Alt+V paste support for Windows Terminal（已合并）
- **作者**: @LittleDrinks | **创建**: 2026-04-23 | **更新**: 2026-06-14 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2018
- **摘要**: 由于Windows Terminal截获 Ctrl+V 用于自身粘贴，prompt_toolkit 无法接收到该事件。此PR添加了 Alt+V 作为后备快捷键，逻辑与原有粘贴一致。
- **影响**: 改善Windows用户交互体验。

### 3. #2020 [CLOSED] fix: use per-process log filenames to prevent rotation lock on Windows（已合并）
- **作者**: @LittleDrinks | **创建**: 2026-04-23 | **更新**: 2026-06-14 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2020
- **摘要**: 当多个kimi进程同时运行时，loguru的日志轮转会因 `kimi.log` 被其他进程占用而报 `PermissionError`。改用 `kimi.{pid}.log` 文件名避免竞争。
- **影响**: 多进程并发场景下的稳定性提升。

### 4. #839 [CLOSED] feat(shell): add configurable shell support for Windows（已合并）
- **作者**: @HamzaETTH | **创建**: 2026-02-02 | **更新**: 2026-06-14 | **评论**: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/839
- **摘要**: 为Windows添加可配置的shell支持，允许用户选择使用cmd、PowerShell、WSL等。
- **影响**: 增强Windows平台灵活性。

---

## 功能需求归类

从今日活跃的Issues中，社区反复提及的功能方向包括：

| 需求方向 | 相关Issue | 简要说明 |
|----------|-----------|----------|
| **项目上下文自动加载** | #850 | 自动读取 `AGENTS.md`、`.cursorrules` 等规则文件，减少手动配置 |
| **服务配额与透明度** | #2123 | 要求明确Code Plan的速率限制、实际使用量显示，以及公平退款机制 |
| **系统提示词自定义** | #2451 | 用户希望完全控制或屏蔽Kimi内置系统提示词，避免与个人规则冲突 |

---

## 开发者关注点

- **服务稳定性与透明度**：支付用户对5小时实际调用次数（60+ vs 官方宣传的300-1200）感到严重不满，且缺乏详细的额度展示。此问题持续近2个月未获官方回复，可能影响付费转化。
- **与工具链的集成冲突**：既有使用Claude Code、Cursor等工具的开发者，对Kimi CLI缺少项目级上下文自动加载感到不便（Issue #850虽已关闭但尚未实现）。
- **系统行为的可控制性**：使用API密钥的用户无法绕过内置系统提示词，导致个人严格的编码规范与AI行为冲突（Issue #2451）。
- **Windows平台体验**：虽然已通过PR #2018、#839、#2020改善了粘贴、shell选择与日志冲突问题，但仍有细节待优化（如Alt+V是否稳定、shell配置界面等）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-15

---

## 今日更新概览

- **新版本发布**：v1.17.7 修复了插件客户端请求复用、ACP shell 样式、PTY 环境变量等问题，并改进了 MCP 集成。
- **社区活跃度**：过去24小时内共有超过50条 Issue 和50条 PR 被更新，其中两个长期讨论的 Issue（#28846 关于 DeepSeek V4 Pro 降价后的使用限制调整、#13984 CLI 复制粘贴问题）继续升温。
- **开发者反馈集中**：多个用户报告了 v1.17.7 版本带来的新问题（EditBuffer 崩溃、Qwen 3.7 Max 超时、窗口意外关闭），同时 MCP 相关的功能请求和安全漏洞修复成为 PR 高频区。

---

## 版本发布

### v1.17.7

- **Bug 修复**：
  - 插件客户端请求现在复用活跃的服务器，而非默认本机端口。
  - ACP shell 工具调用从开始就显示命令和工作目录。
  - 插件提供的 shell 环境变量现已应用于 PTY 会话。
- **改进**：MCP 相关增强（具体细节待补）。

---

## 社区热点 Issues（10条）

### 1. [#28846] 调整 DeepSeek V4 Pro 永久降价75%后的 Go 订阅使用限制
**作者** @icocoon | **评论** 77 | **点赞** 79
社区强烈要求 OpenCode 根据 DeepSeek V4 Pro 的永久降价调整订阅配额。该 Issue 已被关闭，但讨论热度极高，反映了用户对模型成本优化的持续关注。
[查看](https://github.com/anomalyco/opencode/issues/28846)

### 2. [#13984] CLI 无法复制粘贴
**作者** @hongyesuifeng | **评论** 48 | **点赞** 20
一个持续4个月的老 Issue，用户报告在 OpenCode CLI 中点击“复制到剪贴板”后无法粘贴。至今仍为 OPEN 状态，社区持续催更。
[查看](https://github.com/anomalyco/opencode/issues/13984)

### 3. [#15585] 使用免费模型时出现“免费使用超限”错误
**作者** @Howard-Zhou-77 | **评论** 48 | **点赞** 13
三个免费模型均报相同错误，用户质疑是否存在隐藏限制。该 Issue 已关闭，但讨论中透露免费模型可能有使用上限。
[查看](https://github.com/anomalyco/opencode/issues/15585)

### 4. [#28567] 完整 MCP 客户端能力
**作者** @Arcadi4 | **评论** 11 | **点赞** 21
用户指出 OpenCode 的 MCP 客户端功能落后于最新 MCP 标准（2025 版），要求支持完整规范。该 Issue 今日有更新，且与多个 PR 相关联。
[查看](https://github.com/anomalyco/opencode/issues/28567)

### 5. [#32172] 为 Z.AI 提供商添加 GLM-5.2 模型支持
**作者** @phalla-doll | **评论** 7 | **点赞** 0
Z.AI 新发布的推理模型 GLM-5.2 请求加入 OpenCode。虽然点赞不多，但属于新模型适配的常见需求。
[查看](https://github.com/anomalyco/opencode/issues/32172)

### 6. [#28202] 插件异步提示与 Web prompt_async 重叠导致重复助手
**作者** @ririnto | **评论** 6 | **点赞** 4
在 Web UI 中，插件异步提示和 Web 提示同时触发时产生重复的助手消息。该 bug 在 v1.15.4 上复现，影响会话数据持久化。
[查看](https://github.com/anomalyco/opencode/issues/28202)

### 7. [#26412] 自定义 OpenAI 兼容提供商流式工具调用报错
**作者** @mazingerzzz | **评论** 6 | **点赞** 0
使用 vLLM 后端的自定义 OpenAI 兼容提供商时，任何工具调用都会立即失败（`Expected 'function.name' to be a string`）。影响自建模型用户。
[查看](https://github.com/anomalyco/opencode/issues/26412)

### 8. [#11829] 递归语言模型（RLM）上下文管理
**作者** @chindris-mihai-alexandru | **评论** 6 | **点赞** 11
来自 MIT 论文的 RLM 范式提案，主张将上下文作为外部环境查询，而非压缩。该功能需求受到社区关注，但实现复杂度高。
[查看](https://github.com/anomalyco/opencode/issues/11829)

### 9. [#32348] 升级到 v1.17.7 后 EditBuffer Destroyed 频繁出现
**作者** @maxcroy1 | **评论** 3 | **点赞** 0
新版本带来的回归问题：在 MacOS Tahoe + Ghostty 终端下，持续弹出 `EditBuffer is destroyed` 错误，影响正常编辑。
[查看](https://github.com/anomalyco/opencode/issues/32348)

### 10. [#31778] MCP 服务器子进程泄漏完整环境变量（API 密钥）
**作者** @LifetimeVip | **评论** 2 | **点赞** 0
安全漏洞：MCP 子进程继承整个 `process.env`，导致 API 密钥、令牌等敏感信息暴露。修复 PR 已关联。
[查看](https://github.com/anomalyco/opencode/issues/31778)

---

## 重要 PR 进展（10条）

### 1. [#32370] Linux 剪贴板选择支持（新建）
**作者** @bornmw | **状态** OPEN
实现 Linux 下的 PRIMARY 缓冲区选择复制功能，修复 #29963。适用于终端文本选择预期自动粘贴的场景。
[查看](https://github.com/anomalyco/opencode/pull/32370)

### 2. [#31848] 桌面端使用服务端选择器处理所有 HTTP 连接
**作者** @zhizhizheng | **状态** OPEN
修复 `directoryPickerKind` 在不同连接类型下的文件选择器行为，避免桌面端与本地模式不一致。
[查看](https://github.com/anomalyco/opencode/pull/31848)

### 3. [#31993] 恢复桌面端“打开”菜单
**作者** @PatrickLarocque | **状态** OPEN
修复桌面会话标题栏中“Open in”控件消失的回归问题，涉及两个 PR 的重叠回归。
[查看](https://github.com/anomalyco/opencode/pull/31993)

### 4. [#32245] 停止空闲的 MCP OAuth 回调服务器（已合并）
**作者** @rekram1-node | **状态** CLOSED
当没有待处理回调时释放 OAuth 监听端口，避免端口泄漏和跨实例 CSRF 错误。
[查看](https://github.com/anomalyco/opencode/pull/32245)

### 5. [#32241] TUI 渲染移动错误内联
**作者** @rekram1-node | **状态** OPEN
将加载、成功、空和错误状态保持在同一 DialogSelect 外壳中，改善用户错误反馈。
[查看](https://github.com/anomalyco/opencode/pull/32241)

### 6. [#31867] 改进 DeepSeek 提示缓存复用
**作者** @ChangedenCZD | **状态** OPEN
移除系统消息中的当前日期注入，使 DeepSeek 的 prompt cache 能跨会话复用，降低 API 成本。
[查看](https://github.com/anomalyco/opencode/pull/31867)

### 7. [#32367] 从空 Git 仓库创建 worktrees
**作者** @wgu9 | **状态** OPEN
修复当 Git 仓库无任何提交时 `git worktree add` 失败的问题，使 OpenCode worktree 功能更健壮。
[查看](https://github.com/anomalyco/opencode/pull/32367)

### 8. [#32302] 转发父级附件到子代理
**作者** @21pounder | **状态** OPEN
修复 `@mention` 子代理在 task 路径中无法继承父会话附件的问题，解决 #25553。
[查看](https://github.com/anomalyco/opencode/pull/32302)

### 9. [#32244] 处理 MCP 工具结果错误（已合并）
**作者** @rekram1-node | **状态** CLOSED
将 MCP `CallToolResult.isError` 响应路由到标准工具错误路径，保留有序的非空文本诊断信息。
[查看](https://github.com/anomalyco/opencode/pull/32244)

### 10. [#32364] 重置 TUI 关闭时的终端模式
**作者** @wgu9 | **状态** OPEN
修复 `destroyRenderer()` 在关闭时未完全清理终端状态导致的后遗症（如标题残留），关联 #20458。
[查看](https://github.com/anomalyco/opencode/pull/32364)

---

## 功能需求归类

从过去24小时更新的 Issues 中，社区反复提出的需求集中在以下几个方向：

- **模型与提供商支持**：DeepSeek V4 Pro 降价后的配额调整（#28846）、GLM-5.2 支持（#32172）、xAI/Grok Composer 2.5 缺失（#31475）、自定义 OpenAI 兼容提供商兼容性（#26412）。
- **TUI/CLI 体验改进**：复制粘贴功能（#13984）、会话状态标签/标记（#30763）、提示/线程书签管理（#24017）、紧凑化可撤销（#32368）。
- **MCP 能力完善**：完整 MCP 客户端规范支持（#28567）、工具结果错误处理（#32244）、子进程环境变量隔离（#31778）、非标准 schema format 警告（#31002）。
- **安全与资源泄露**：OAuth 回调服务器未停止（#23563）、MCP 子进程泄漏环境变量（#31778）、插件权限回复静默丢弃（#28037）。
- **子代理/工作区一致性**：子会话继承父目录和工作区 ID（#30355）、附件转发（#32302）、空仓库 worktree（#32367）。

---

## 开发者关注点

1. **v1.17.7 新回归问题**：多位用户报告升级后出现 `EditBuffer Destroyed`（#32348）、Qwen 3.7 Max 超时（#32346）、窗口意外崩溃（#32334）。建议维护者优先排查。
2. **复制粘贴长期未解决**：CLI 复制粘贴问题（#13984）已持续4个月，评论数达到48条，是社区最受诟病的痛点之一。
3. **环境变量安全风险**：MCP 子进程泄漏完整环境变量（#31778）虽点赞不多，但属高危安全问题，合并 PR 应及时审查。
4. **自定义模型提供商兼容性**：非标准 OpenAI 端点的工具调用错误（#26412）影响自建模型用户，OpenCode 对第三方兼容性测试有待加强。
5. **MCP 标准跟进滞后**：用户指出 OpenCode 的 MCP 客户端远落后于 2025 规范（#28567），可能成为插件开发生态瓶颈。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-15

## 今日更新概览

过去 24 小时内，Qwen Code 仓库共有 **27 条 Issues** 和 **50 条 Pull Requests** 发生更新，其中新创建的 PR 超过 10 个。社区讨论热度最高的集中在 OAuth 免费层级调整（#3203，135 条评论）、安全警告（#5055，5 条评论）以及阿里云 API Key 混用问题（#5080）。未发布正式版本，仅有 nightly 版本构建失败（#5117）。

---

## 社区热点 Issues（10 条）

### 1. #3203 [OPEN] Qwen OAuth Free Tier Policy Adjustment
- **作者**：@pomelo-nwu
- **简述**：提议将 OAuth 免费层每日请求量从 1000 次骤降至 100 次，并计划完全关闭免费入口。
- **社区反应**：135 条评论，用户普遍反对该调整，认为会严重破坏个人开发和小团队工作流。
- **链接**：https://github.com/QwenLM/qwen-code/issues/3203

### 2. #5055 [OPEN] Trojan:JS/ShaiWorm.DBA!MTB
- **作者**：@ivancheg8
- **简述**：v0.18.0 VS Code 插件安装包被 Windows Defender 检测为木马（Trojan）。
- **社区反应**：引发安全担忧，维护者尚未给出明确解释。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5055

### 3. #5080 [OPEN] 阿里云 Standard API Key 与 Token Plan 接入点混用导致 401
- **作者**：@CoCoCoDeDeDe
- **简述**：使用 `qwen config` 配置阿里云百炼后，切换 Token Plan 版模型时始终报 401 错误。
- **社区反应**：用户希望 Qwen Code 能自动识别连接方式，避免手动匹配错误。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5080

### 4. #5102 [OPEN] Qwen Code executes a provider-requested side effect despite the permission-contract probe
- **作者**：@N0zoM1z0
- **简述**：在非交互式 CLI 下，即使进行了权限探测，Qwen Code 仍执行了 provider 请求的 shell 副作用（写入文件）。
- **社区反应**：涉及安全边界问题，维护者标记为 P2 优先级。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5102

### 5. #4218 [OPEN] MCP Server "filesystem" shows connected on UI, but tools are not available to the model
- **作者**：@carloseradn-sketch
- **简述**：Windows 下配置 MCP 文件系统服务器后，UI 显示已连接，但 AI 模型无法调用文件系统工具。
- **社区反应**：MCP 集成稳定性是窗口期痛点，用户已多次反馈。
- **链接**：https://github.com/QwenLM/qwen-code/issues/4218

### 6. #4723 [CLOSED] Does Qwen Code support Rules or Instructions now?
- **作者**：@niheaven
- **简述**：询问 Qwen Code 是否有类似 Claude Code 的规则系统（rules）或 Copilot 的指令（instructions）。
- **社区反应**：该功能需求呼声较高，目前尚未原生支持（已关闭，但用户仍在期待）。
- **链接**：https://github.com/QwenLM/qwen-code/issues/4723

### 7. #4369 [CLOSED] Stop using AI issue / PR and fix RAM leak manually
- **作者**：@Kieaer
- **简述**：指出当前项目大量使用 AI 生成代码导致可读性差，建议手动修复 RAM 泄漏问题，并优化历史内容存储（改为文件而非内存）。
- **社区反应**：对内存性能问题表示关注。
- **链接**：https://github.com/QwenLM/qwen-code/issues/4369

### 8. #4964 [CLOSED] Recover from the previous truncation caused by the max_tokens limit
- **作者**：@HeKeHenryZhang
- **简述**：当响应因 `max_tokens` 被截断时，Qwen Code 无法自动恢复，导致任务中断。
- **社区反应**：已被识别为 bug，欢迎 PR。
- **链接**：https://github.com/QwenLM/qwen-code/issues/4964

### 9. #5101 [OPEN] Qwen Code carries repeated large tool results through provider history
- **作者**：@N0zoM1z0
- **简述**：重复执行大输出命令时，Qwen Code 不断把相同的大工具结果放入对话历史，导致上下文膨胀至 OOM。
- **社区反应**：性能及 token 管理痛点，标记为 P1 优先级。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5101

### 10. #5119 [OPEN] when the agent wants to run a sudo command there is no way to allow it
- **作者**：@Ben-Kantor
- **简述**：当 agent 需要执行 sudo 命令时，权限对话框仅能拒绝，无法直接允许，用户只能手动复制粘贴。
- **社区反应**：涉及交互体验和安全策略平衡。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5119

---

## 重要 PR 进展（10 条）

### 1. #5120 fix(core): skip auto-title generation when history has no user message
- **作者**：@yuanyuanAli
- **简述**：当 daemon 会话中只有 prompt 指令但无用户消息时，跳过自动标题生成，返回 `empty_history`。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5120

### 2. #5121 fix release integration env controls
- **作者**：@yiliang114
- **简述**：恢复 release 集成测试的环境控制，使调试日志和 Docker 沙箱环境正确传递。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5121

### 3. #5118 feat(web-shell): per-task token & time detail on completed todos
- **作者**：@wenshao
- **简述**：在 Web Shell 的 todo 列表中，点击已完成任务可显示开始/结束时间、耗时、输入/输出/缓存 token 数及 API 与工具耗时。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5118

### 4. #5094 feat(core): Workflow P4a — extractAndStripMeta + meta on RunOutcome
- **作者**：@LaZzyMan
- **简述**：实现动态工作流 P4 阶段的第一半，新增 `extractAndStripMeta` 并在 `RunOutcome` 上附加元数据。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5094

### 5. #4866 refactor(ci): split PR triage into 4-job pipeline
- **作者**：@yiliang114
- **简述**：将之前的单体 triage 流程拆分为 4 个阶段的流水线（resolve → product-decision → …），提高 CI 并行度和可观测性。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4866

### 6. #4564 feat(stats): expose token usage for cost visibility
- **作者**：@shenyankm
- **简述**：新增持久化 token 用量统计，并通过 `/stats` 命令展示日/月 token 消耗、按模型和认证类型分解，支持 CSV/JSON 导出。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4564

### 7. #5001 feat(cli): add optional [HH:MM:SS] timestamp before each assistant turn
- **作者**：@ZijianZhang989
- **简述**：新增 `output.showTimestamps` 配置，在 CLI 中每条 assistant 回复前显示时间戳（立即显示，不等回复结束）。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5001

### 8. #4850 feat(extensions): interactive multi-tab /extensions manager (Installed / Discover / Sources)
- **作者**：@BZ-D
- **简述**：将 `/extensions` 变为交互式多标签管理器，包含已安装、发现和源三个标签，支持安装、配置和移除扩展及独立 MCP 服务器。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4850

### 9. #4841 fix(cli): close @path completion dropdown on Enter accept
- **作者**：@Alex-ai-future
- **简述**：接受 `@path` 路径补全建议后（按 Enter），立即关闭下拉菜单，修复之前菜单残留的 bug。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4841

### 10. #4943 feat(cli): add --safe-mode flag to disable all customizations for troubleshooting
- **作者**：@DennisYu07
- **简述**：新增 `--safe-mode` CLI 标志和环境变量 `QWEN_CODE_SAFE_MODE`，禁用所有用户自定义配置（context 文件、hooks、扩展、skills 等），用于故障排查。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4943

---

## 功能需求归类

| 需求方向 | 代表性 Issues | 用户诉求简述 |
|----------|-------------|--------------|
| **安全与认证** | #5055、#5102、#5080、#5119 | 插件的误报处理、权限探针绕过、API Key 混淆、sudo 命令支持 |
| **免费层与计费** | #3203、#3267、#3272 | 免费配额骤降、无 Pro 计划可供购买、请求限制不透明 |
| **MCP 集成** | #4218、#5100 | 文件系统工具不可用、`/review` skill 因 agent name 参数崩溃 |
| **内存与性能** | #4369、#4964、#5101 | RAM 泄漏、大输出导致截断或 OOM、重复工具结果膨胀上下文 |
| **规则与指令系统** | #4723 | 缺少类似 Claude Code rules 的跨会话规则/指令支持 |
| **CLI/UI 改进** | #5064、#5118、#5001、#4850 | statusline 换行、任务详情展示、时间戳、扩展管理器 |

---

## 开发者关注点

1. **免费配额变化引发焦虑**：`#3203` 中社区强烈反对日配额从 1000 降至 100，且无付费计划可用（`#3272`），部分用户表示将迁移至其他工具。
2. **安全警告影响部署**：`#5055` 的 Trojan 误报导致企业环境可能阻止安装，维护者需紧急排查并确认二进制签名。
3. **多认证方式混用易出错**：`#5080` 暴露了阿里云新旧 API Key 格式（sk-xxx vs Token Plan）在配置中容易混淆，用户期望更强的自动检测或警告提示。
4. **工具执行结果处理缺陷**：`#5101` 和 `#4964` 反映了 token 管理和截断恢复的严重不足，影响长时间复杂任务的可预期性。
5. **权限模型不够细粒度**：`#5119` 中 sudo 命令只能拒绝不能允许，限制了自动化能力；`#5102` 则显示权限探针未能阻止副作用执行。

**📎 所有链接以 GitHub issue/PR 页面为准。**

</details>