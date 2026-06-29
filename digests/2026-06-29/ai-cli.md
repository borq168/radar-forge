# AI CLI 工具社区动态日报 2026-06-29

> 生成时间: 2026-06-29 00:33 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，以下是基于您提供的 2026-06-29 各主流 AI CLI 工具社区动态摘要生成的横向对比分析报告。

---

## AI CLI 工具横向对比分析日报 | 2026-06-29

### 1. 今日横向概览

今日各 AI CLI 工具的社区动态呈现出 **“分化加剧，痛点集中”** 的态势。**Claude Code** 和 **OpenAI Codex** 社区均遭遇了严重的成本/配额定价争议，用户对 Agent 行为失控和消耗异常的抱怨成为今日最显著的交集。**Gemini CLI** 和 **OpenCode** 社区的活跃度较高，前者侧重于子代理行为正确性和安全修复，后者则因广泛的模型兼容性和交互稳定性问题而吸引了大量讨论。相比之下，**GitHub Copilot CLI** 和 **Kimi Code CLI** 社区则相对平静，主要聚焦于特定的兼容性 bug 和性能问题。

### 2. 各工具活跃度对比

下表基于各工具今日的社区动态摘要进行汇总。

| 工具名称 | 今日活跃 Issue 数 | 今日重要 PR 数 | 版本发布 | 社区主要情绪 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (精选) | 5 (精选) | 无 | 担忧 (成本)、不满 (功能缺失)、沮丧 (Bug) |
| **OpenAI Codex** | 10 (精选) | 10 (精选) | 无 | 愤怒 (成本飙升)、反馈 (性能问题) |
| **Gemini CLI** | 10 (精选) | 10 (精选) | 1 个 (安全修复) | 困惑 (子代理行为)、期待 (功能改进) |
| **GitHub Copilot CLI** | 7 (更新) | 1 (已关闭) | 无 | 平稳 (特定问题反馈) |
| **Kimi Code CLI** | 2 (长期) | 0 | 无 | 失望 (长期未修复) |
| **OpenCode** | 10 (精选) | 10 (精选) | 无 | 亢奋 (讨论热烈)、抱怨 (兼容性、订阅问题) |

### 3. 共同出现的功能方向

今日，多个工具的社区不约而同地反映了以下痛点和需求：

- **成本控制与配额管理**：这是今日最强烈的跨工具信号。
    - **Claude Code**：用户报告 Agent 在 5 分钟内烧毁整个 5x 积分计划，且无警告（[#72127](https://github.com/anthropics/claude-code/issues/72127)）。
    - **OpenAI Codex**：大量 Plus/Pro 用户投诉速率限制成本暴涨 10-20 倍（[#28879](https://github.com/openai/codex/issues/28879)），或在极短时间内耗尽配额（[#29955](https://github.com/openai/codex/issues/29955)）。
    - **OpenCode**：用户反馈付费订阅后未激活（[#32420](https://github.com/anomalyco/opencode/issues/32420)），引发了对其计费系统的质疑。

- **Agent 行为可预测性与正确性**：
    - **Claude Code**：Agent 使用“最近上下文偏见”解析歧义，执行错误操作（[#72170](https://github.com/anthropics/claude-code/issues/72170)）。
    - **Gemini CLI**：子代理达到最大轮次后错误报告为“成功”（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），以及通用代理在特定场景下无限期挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）。
    - **OpenCode**：Agent 绕过 Plan 模式直接执行（[#34190](https://github.com/anomalyco/opencode/issues/34190)）。

- **安全与误报**：
    - **Claude Code**：安全机制对本地 Telnet 调试产生误报（[#72168](https://github.com/anthropics/claude-code/issues/72168)）。
    - **Gemini CLI**：修复了信任对话框可能泄露实际执行 Hook 信息的安全缺陷（[#27915](https://github.com/google-gemini/gemini-cli/pull/27915)）。

- **长上下文稳定性**：
    - **Claude Code**：长会话后工具调用标记泄露到文本回复中（[#71812](https://github.com/anthropics/claude-code/issues/71812)）。
    - **OpenAI Codex**：用户怀疑 GPT-5.5 推理 token 被截断，影响复杂任务表现（[#30364](https://github.com/openai/codex/issues/30364)）。

### 4. 差异化定位分析

- **Claude Code**：定位为 **全能、高自主性的 Agent**。其社区讨论覆盖了从底层沙箱兼容性（[! ](https://github.com/anthropics/claude-code/issues/64301)字符转义）到顶层 UX（插件管理、鼠标交互）的广泛问题，技术深度和广度要求高。用户期望其能处理复杂、长尾的开发任务，但对模型自主性边界和成本失控的容忍度低。

- **OpenAI Codex**：定位为 **高性能、核心服务型**。社区核心矛盾集中在**价格与性能的公平性**（速率限制、配额消耗）上。用户对 GPT-5.5 模型的 token 效率和推理质量高度敏感，且对平台稳定性（如 OAuth 认证、Windows 兼容性）有基础要求。

- **Gemini CLI**：定位为 **安全、可编程的 Agent 平台**。其社区突出强调**安全修复**（SSRF 防护、信任对话框）和 **子代理体系的正确性**。这表明其目标用户群更偏向需要精确控制、关注安全合规和复杂工作流编排的开发者，例如通过 SDK、钩子（Hooks）和 A2A 协议进行深度集成。

- **GitHub Copilot CLI**：定位为 **IDE / SDK 集成和辅助工具**。社区讨论聚焦于**企业代理兼容性**、SDK 集成细节和具体场景下的会话管理。这标志着它的核心用户是 GitHub 生态的深度使用者，更关注与现有工作流的无缝衔接而非独立的 Agent 能力。

- **Kimi Code CLI**：定位为**高性价比的轻量级模型**。社区反馈（循环读取、内存泄漏）反映出其在稳定性和资源管理上与头部工具存在差距，但 Issue 数量少也可能说明其用户基数相对较小或社区活跃度不高。

- **OpenCode**：定位为 **开源、高度可定制的社区驱动工具**。社区极度活跃，讨论范围极广，从模型兼容性（Gemma-4、MiniMax）到 IDE 集成（Cursor CLI支持），再到基础交互（复制粘贴）。这种活跃度来源于其开源属性和对多种后端模型的支持，但“众口难调”也导致了大量关于稳定性、功能一致性（如 Skills）和付费流程的投诉。

### 5. 社区活跃度记录

- **最活跃（讨论热度）**：**OpenCode**。50 条活跃 Issue 和 50 条活跃 PR，且相关讨论（如 Cursor CLI 支持）获得极高的点赞和评论数，表明社区参与度非常高。
- **最活跃（官方响应与修复）**：**OpenAI Codex** 和 **Gemini CLI**。前者针对速率限制问题在数个小时内提交了多个相关 PR（[#30488](https://github.com/openai/codex/pull/30488), [#30395](https://github.com/openai/codex/pull/30395)），后者快速发布了包含安全修复的 Nightly 版本，展示了较高的开发维护投入。
- **社区痛点最集中**：**Claude Code** 和 **OpenAI Codex**。两者社区的“成本失控”呼声形成了今日的行业级热点，直接反映了用户对 AI 编程助手消费模式的核心担忧。
- **最沉寂**：**Kimi Code CLI**。过去 24 小时内无版本发布、无新 PR，仅有的两条 Issue 均为长期未解决的 Bug。

### 6. 有证据支撑的观察

1.  **成本失控是核心矛盾**：**Claude Code** 和 **OpenAI Codex** 的用户均对 Agent 的高消耗和不可预测的计费行为表达了强烈不满。这不再是简单的功能请求，而是直接触及商业模式的信任危机。用户需求的不仅是“控制”，更是“透明和公平”。
2.  **“可靠性”是构建复杂 Agent 的第一道坎**：**Gemini CLI** 对子代理状态的误报、**OpenCode** 中 Agent 的“越狱”行为、以及 **Claude Code** 的上下文偏见，都指向一个共同问题：当前的 Agent 架构在执行**需要精确遵循指令**的任务时，其内在的“黑盒”行为模式不稳定，削弱了用户对其的信任。
3.  **安全与可用性之间存在持续张力**：从 **Claude Code** 的安全误报（telnet）到 **Gemini CLI** 的信任对话框漏洞修复，再到 **OpenCode** 关于 Skills 暴露不一致的问题，用户的反馈表明，在追求更安全的沙箱和权限控制时，不应牺牲合法操作的流畅性。一刀切的安全策略会损害开发效率和用户信任。
4.  **本地模型兼容性是开源工具的“阿喀琉斯之踵”**：**OpenCode** 大量 Issue 指向对 Gemma-4、DeepSeek 等新模型的兼容性问题，以及 **Kimi Code CLI** 在特定端点配置下的循环死锁故障，说明依赖本地或第三方模型的开源工具，其稳定性的瓶颈在于模型生态的碎片化和兼容性维护的复杂性。
5.  **今日暂无明确跨工具信号** 表明对某一特定技术路线的压倒性胜利（如 MCP）。各工具在 MCP、插件、钩子（Hooks）、子代理等技术路径上各有侧重，且都面临集成复杂度、安全性和可用性的挑战，尚未形成统一的事实标准。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是 2026-06-29 的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-06-29

## 今日更新概览

今日社区活跃度集中在 Bug 报告和功能请求上，社区围绕 Agent 成本失控、安全误报、以及 MCP 与 IDE 集成的兼容性问题展开了大量讨论。昨日至今日无新版本发布，但社区提交的 Issues 和 PR 数量保持稳定，反映出用户对工具的稳定性和可扩展性有较高期待。

## 版本发布

无。（过去 24 小时内无新 Release。）

## 社区热点 Issues

1.  **插件系统与 Desktop 体验割裂**
    - **Issue:** [#42142](https://github.com/anthropics/claude-code/issues/42142) `[BUG] Claude Code Desktop Doesn't Have /plugin Command and cannot add plugin marketplaces`
    - 用户反馈 Claude Code Desktop 版不支持 `/plugin`命令，且无法配置插件市场，同时模型经常对此产生幻觉，严重影响了使用体验。该问题评论数高，说明 Desktop 用户群体对插件功能有强烈需求。

2.  **Agent 工作流成本失控**
    - **Issue:** [#72127](https://github.com/anthropics/claude-code/issues/72127) `[BUG] Workflow tool burned entire 5x plan in ~5 minutes with no warning`
    - 用户在尝试简单研究任务时，Claude Code 在未发出警告或请求授权的情况下，于 5 分钟内消耗了整个 5 倍的 Credits 计划，引发了对于 Agent 成本上限和安全风控的担忧。

3.  **TUI 鼠标交互控制过于“一刀切”**
    - **Issue:** [#70672](https://github.com/anthropics/claude-code/issues/70672) `[Feature Request] Add granular mouse control options to disable click-selection while preserving scroll`
    - 新功能“鼠标点击选择菜单”虽然方便了部分用户，但另一些用户认为其行为具有破坏性。社区希望获得更精细的控制粒度，比如仅保留滚动功能。该请求获得了 18 个 👍，代表了一个广泛的需求。

4.  **Bash 沙箱与 `!` 字符的兼容性问题**
    - **Issue:** [#64301](https://github.com/anthropics/claude-code/issues/64301) `[BUG] Bash sandbox (bubblewrap) corrupts ! to \! in commands`
    - 在 Linux 下启用 Bash 沙箱后，会导致命令中的 `!` 被错误转义为 `\!`，使得沙箱在 Agent 工作流中几乎不可用。这是一个严重影响 Linux 用户核心功能的问题。

5.  **OAuth 认证失败与证书链问题**
    - **Issue:** [#71766](https://github.com/anthropics/claude-code/issues/71766) `[BUG] OAuth login/refresh fails with UNABLE_TO_GET_ISSUER_CERT`
    - 由于 `platform.claude.com` 的 Let's Encrypt 新证书链问题，部分 Windows/Linux 用户无法完成 OAuth 登录或刷新。这可能与底层 Node.js 的 CA 证书存储有关，是一个影响面较广的注册/登录问题。

6.  **长上下文中的 Tool-Call 标记泄露**
    - **Issue:** [#71812](https://github.com/anthropics/claude-code/issues/71812) `[Bug] Tool-call markup leaks into assistant text after large context accumulation`
    - 在经历长时间会话、积累大量上下文后，工具调用的内部标记 (`<invoke>`) 会泄露到模型的文本回复中，而不是被执行。这表明在长上下文场景下，模型的指令遵循能力可能出现退化。

7.  **Linux 上的 Telnet 安全误报**
    - **Issue:** [#72168](https://github.com/anthropics/claude-code/issues/72168) `[Bug] False positive security flag for local telnet connection`
    - 用户尝试通过 Telnet 连接本地设备时，遭遇了安全误报导致操作被中断。这反映了当前安全过滤机制在判断特定技术场景（如本地网络调试）时仍存在精度问题。

8.  **Agent 使用“最近上下文偏见”解决歧义**
    - **Issue:** [#72170](https://github.com/anthropics/claude-code/issues/72170) `[Bug] Agent resolves an ambiguous case identifier by recent-context bias`
    - 当用户引用一个具有两个有效命名空间解释的标识符时，Agent 错误地使用了最近的上下文而非精确匹配来解析，并执行了错误操作。这揭示了模型在精确性与上下文敏感性之间的平衡问题。

9.  **`/usage` 命令因限速而失败**
    - **Issue:** [#32503](https://github.com/anthropics/claude-code/issues/32503) `[BUG] /usage command fails with rate_limit_error`
    - 一个持续数月的已知问题，用户在使用 `/usage` 命令查看用量时频繁遇到 API 限速错误，导致无法监控自己的消费情况。

10. **JetBrains 插件在 WSL2 下误判 IDE 为孤立进程**
    - **Issue:** [#72129](https://github.com/anthropics/claude-code/issues/72129) `[BUG] /ide rejects valid JetBrains lockfile from WSL2`
    - WSL2 用户无法在 JetBrains IDE 中正常使用 Claude Code，因为插件无法正确识别 Windows 端的 IDE 进程，将其错误地标记为“孤立”并拒绝连接。这影响了 WSL 虚拟化开发环境下的 IDE 集成体验。

## 重要 PR 进展

由于过去24小时内 Pull Requests 数量较少（共5条），以下列出其中值得关注的内容：

1.  **“开放源代码”提议**
    - **PR:** [#41447](https://github.com/anthropics/claude-code/pull/41447) `[OPEN] feat: open source claude code ✨`
    - 社区成员发起的开源 Claude Code 的 PR。虽然被合并的可能性极低，但该 PR 的存在本身就反映了社区对于工具透明度和可定制性的强烈愿望。

2.  **新插件：会话上下文导出 (`/handover`)**
    - **PR:** [#72037](https://github.com/anthropics/claude-code/pull/72037) `[OPEN] Add handover plugin: export session context for LLM-to-LLM handoffs`
    - 一个旨在解决“会话交接”痛点的社区插件，可以将当前 Claude Code 的会话上下文导出为结构化 Markdown 文件，方便粘贴到其他 LLM 或与新团队成员共享。

3.  **新插件：MCP 安全策略网关 (`protect-mcp`)**
    - **PR:** [#72014](https://github.com/anthropics/claude-code/pull/72014) `[OPEN] Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts`
    - 这是一个强化 MCP 安全性的社区插件，引入了“失败时关闭”的策略门控机制，在工具调用前进行策略检查，并为每次决策签名，生成可离线验证的收据。

4.  **文档更新：插件安装指引**
    - **PR:** [#72000](https://github.com/anthropics/claude-code/pull/72000) `[OPEN] docs: update plugin install instructions to recommended installers`
    - 社区成员提交的文档更新，旨在改进官方插件安装指南，推荐更便捷的安装方式。

5.  **修复 Hook 事件过滤**
    - **PR:** [#62315](https://github.com/anthropics/claude-code/pull/62315) `[CLOSED] Fix hookify event filtering in pre/post hooks`
    - 一个近期被合并的修复，解决了在 pre/post hooks 中事件过滤逻辑存在的问题，这对于构建自定义行为和编排的开发者来说是一个重要的底层修复。

## 功能需求归类

-   **IDE 与插件生态**
    - **多平台 IDE 兼容性:** WSL2 下的 JetBrains 插件进程识别（[#72129](https://github.com/anthropics/claude-code/issues/72129)）、VSCode 扩展对自定义命令的检测（[#62979](https://github.com/anthropics/claude-code/issues/62979)）。
    - **Desktop 功能完整性:** 用户反复要求 Desktop 版必须拥有与 CLI 版同等的插件管理能力（[#42142](https://github.com/anthropics/claude-code/issues/42142)）。

-   **Agent 行为与成本控制**
    - **透明消费:** 用户要求 Agent 在执行高成本操作前提供明确的警告和授权确认（[#72127](https://github.com/anthropics/claude-code/issues/72127)），并要求 `/usage` 命令稳定可靠（[#32503](https://github.com/anthropics/claude-code/issues/32503)）。
    - **决策一致性:** 用户希望 Agent 在重大设计决策与琐碎确认之间找到更合理的平衡点（[#61929](https://github.com/anthropics/claude-code/issues/61929)），并能在歧义时精确地遵循指令（[#72170](https://github.com/anthropics/claude-code/issues/72170)）。

-   **安全与权限**
    - **误报问题:** 安全过滤机制对于合法的开发操作（如本地 Telnet 调试）出现误报（[#72168](https://github.com/anthropics/claude-code/issues/72168)），以及在反编译/安全分析等领域的误判（[#72163](https://github.com/anthropics/claude-code/issues/72163)）。
    - **OAuth 与认证:** 证书链变更导致的登录失败问题（[#71766](https://github.com/anthropics/claude-code/issues/71766)）成为一个信任和安全性的障碍。

-   **核心体验与性能**
    - **长上下文稳定性:** 用户持续反馈长会话后出现的工具调用标记泄露（[#71812](https://github.com/anthropics/claude-code/issues/71812)）和模型输出质量下降的问题（[#62989](https://github.com/anthropics/claude-code/issues/62989)）。
    - **调试工具:** 用户需要能够查看完整上下文窗口内容的调试命令，以更好地理解和优化自定义钩子和编排逻辑（[#72035](https://github.com/anthropics/claude-code/issues/72035)）。

## 开发者关注点

1.  **MCP 插件与本地环境的集成仍是一个痛点。** 多个 Issue 指向了 MCP 工具在不同平台（Windows、Linux、macOS）下的兼容性问题，包括环境变量传递（[#62332](https://github.com/anthropics/claude-code/issues/62332)）、工具注册（[#72111](https://github.com/anthropics/claude-code/issues/72111)）和安全性（[#72014](https://github.com/anthropics/claude-code/issues/72014)）。这表明 MCP 虽然潜力巨大，但其实用性和集成复杂度是开发者面临的主要挑战。

2.  **对 Sandbox 安全性与可用性存在矛盾预期。** 一方面，社区对 Bash 沙箱误转义核心字符 (`!`) 表示不满（[#64301](https://github.com/anthropics/claude-code/issues/64301)）；另一方面，用户也抱怨安全策略对正常操作的误判（[#72168](https://github.com/anthropics/claude-code/issues/72168)）。开发者希望沙箱既能保护环境，又不会干扰正常的 Linux/POSIX 命令执行。

3.  **对 Agent 工作流的成本和主动性的不满在增加。** [#72127](https://github.com/anthropics/claude-code/issues/72127) 描述的“5分钟烧掉5倍 Credits”事件揭示了一个关键需求：Agent 必须具备更好的成本和风险感知能力，在失控前主动与用户沟通，而非事后报告。这与用户在 [#72170](https://github.com/anthropics/claude-code/issues/72170) 中所抱怨的“错误行动”一起，构成了对 Agent 自主性边界的强烈质疑。

4.  **“热更新”和“同步”是高频场景下的基础需求。** [#72162](https://github.com/anthropics/claude-code/issues/72162) 报告了 `/plugin marketplace update` 后无法立即应用更新的问题。这表明，无论是对插件还是核心应用，开发者在进行迭代调试时，对即时反馈和快速加载循环有极高的要求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-29

---

## 今日更新概览

过去 24 小时内，社区围绕 **速率限制成本异常飙升** 和 **Windows 客户端稳定性** 的讨论持续升温。共有 30 条活跃 Issue 更新，其中 #28879 评论数突破 194 条，引发大量用户对 Plus/Pro 计划配额消耗异常的反馈。同时，开发团队提交了 36 个 PR，重点修复了 TUI 中重复输入、弹窗残留等问题，并新增了 **写入工具批准模式** 和 **速率限制重置信用详情展示** 等实用功能。

---

## 社区热点 Issues（Top 10）

### 1. #28879 — Codex (GPT-5.5, Plus 计划) 速率限制成本暴涨 10-20 倍
- **评论 / 点赞**：194 / 337
- **摘要**：自 6 月 16 日起，`gpt-5.5` 模型在 Plus 计划下每次请求消耗的限额比例增长了 10-20 倍，原本能用 20+ 次请求的预算现在仅能支撑 2-3 次。用户日志显示 `limit-% consumed per token` 异常飙升。
- **链接**：https://github.com/openai/codex/issues/28879

### 2. #28224 — SQLite 反馈日志年写入量可达 640 TB，损耗 SSD 寿命
- **评论 / 点赞**：97 / 403
- **摘要**：Codex CLI 的本地 SQLite 反馈日志写入量巨大，已通过 #29432、#29457 等 PR 修复减少约 85% 的日志。目前 Issue 标记为 OPEN 但作者计划关闭。
- **链接**：https://github.com/openai/codex/issues/28224

### 3. #2847 — 希望提供排除敏感文件的机制
- **评论 / 点赞**：86 / 447
- **摘要**：用户希望在仓库级别和全局级别添加 `.codexignore` 机制，明确禁止 Agent 读取或发送某些文件（如 `node_modules/` 可搜索但不发送内容），以保护敏感数据。
- **链接**：https://github.com/openai/codex/issues/2847

### 4. #29955 — 100 额度用 1 条消息归零，5 小时限制立刻 0%
- **评论 / 点赞**：30 / 8
- **摘要**：Pro*5 用户反馈发送一条消息后 100 信用额度和 5 小时使用限制同时耗尽，重启应用无改善。
- **链接**：https://github.com/openai/codex/issues/29955

### 5. #30002 — 5 小时限制在约 41 分钟内烧尽
- **评论 / 点赞**：28 / 6
- **摘要**：Pro 账户在限额重置后仅 41 分钟（约 135 万 token）即再次触发 `usage_limit_reached`，而正常使用可达到 1.56 亿 token 才会触发，表明服务端配额统计存在严重偏差。
- **链接**：https://github.com/openai/codex/issues/30002

### 6. #29072 — Windows Codex 桌面版 `apply_patch` 失败
- **评论 / 点赞**：25 / 19
- **摘要**：Windows 下 `codex-windows-sandbox-setup.exe` 无法从包路径正确启动，导致 `apply_patch` 工具调用持续失败。影响所有使用文件补丁功能的用户。
- **链接**：https://github.com/openai/codex/issues/29072

### 7. #24510 — Codex Desktop 高 CPU：无限制的线程元数据处理
- **评论 / 点赞**：24 / 0
- **摘要**：本地配置中存在大量活跃线程时，`~/.codex/state_5...` 中的 title/preview/metadata 导致应用服务器持续高 CPU/GPU 占用。
- **链接**：https://github.com/openai/codex/issues/24510

### 8. #17320 — 流式响应时 SQLite WAL 写入过多（忽略 `RUST_LOG` 设置）
- **评论 / 点赞**：16 / 36
- **摘要**：即使通过环境变量降低了日志级别，TRACE 级别的日志仍被写入 SQLite WAL 文件，导致大量 I/O 和性能开销。
- **链接**：https://github.com/openai/codex/issues/17320

### 9. #30364 — GPT-5.5 推理 token 集中在 516/1034/1552 边界，可能降低复杂任务效果
- **评论 / 点赞**：12 / 12
- **摘要**：用户聚合 `token_count` 数据发现 `gpt-5.5` 的 `reasoning_output_tokens` 异常集中在 516、1034、1552 等固定值，暗示模型推理步骤被截断，导致复杂任务质量下降。
- **链接**：https://github.com/openai/codex/issues/30364

### 10. #28969 — 建议添加禁用“60 秒自动解决问题”的设置
- **评论 / 点赞**：5 / 46
- **摘要**：CLI 用户在提问后 60 秒内若无操作，Agent 自动执行操作，用户希望能通过配置关闭此行为。
- **链接**：https://github.com/openai/codex/issues/28969

---

## 重要 PR 进展（Top 10）

### 1. #29740 — 使用模型元数据控制技能使用指令
- **状态**：OPEN
- **摘要**：新增 `include_skills_usage_instructions` 模型元数据字段（默认 false），并为 `gpt-5.5` 启用；移除硬编码的旧模型匹配逻辑，使技能渲染更灵活。
- **链接**：https://github.com/openai/codex/pull/29740

### 2. #30482 — 新增“writes”工具批准模式
- **状态**：OPEN（已审查）
- **摘要**：在 `AppToolApproval` 中添加 `writes` 模式：只读工具（`readOnlyHint = true`）自动放行，其他工具（包括非破坏性写入）均需用户确认，提升安全控制粒度。
- **链接**：https://github.com/openai/codex/pull/30482

### 3. #30493 — 可配置多代理模式提示文本
- **状态**：OPEN（已审查）
- **摘要**：增加 `features.multi_agent.mode_hint` 配置项，允许部署方指定稳定的多代理模式提示文本（如 explicit-only / proactive），避免因推理努力变化导致提示切换。
- **链接**：https://github.com/openai/codex/pull/30493

### 4. #30487 — 从不受支持的推理努力值回退
- **状态**：OPEN
- **摘要**：修复跨线程消息可强制传入 `max` 等线程模型不支持的 reasoning effort 导致请求失败的问题。现自动回退到模型支持的最大 effort。
- **链接**：https://github.com/openai/codex/pull/30487

### 5. #30488 — TUI 中显示重置信用详情（配合 #30395）
- **状态**：OPEN（已审查）
- **摘要**：在“Redeem usage limit reset”弹出框中，按过期时间排序展示可用的重置信用及其到期时间，帮助用户选择具体使用哪一个。
- **链接**：https://github.com/openai/codex/pull/30488

### 6. #30395 — 服务端暴露速率限制重置信用详情
- **状态**：OPEN（已审查）
- **摘要**：为 `account/rateLimits/read` 接口新增 v2 响应字段，返回可用重置信用列表、过期时间及消耗接口，配合前端展示。
- **链接**：https://github.com/openai/codex/pull/30395

### 7. #30480 — 修复 TUI 中重复的 Unicode 键盘输入
- **状态**：OPEN
- **摘要**：停止请求 Codex 未使用的 Kitty 备选按键报告，保留必要的 escape 消歧义，解决 Windows Terminal 和 Warp 中出现的重复非 ASCII 输入。
- **链接**：https://github.com/openai/codex/pull/30480

### 8. #30478 — 保持 TUI 视口底部对齐，防止滚动丢失历史
- **状态**：OPEN
- **摘要**：当 composer 行数增长或流式渲染时，保持 inline viewport 底部与最新内容对齐，避免多行输入导致已显示的历史行被顶上不可见。
- **链接**：https://github.com/openai/codex/pull/30478

### 9. #30467 — 将 `max` 视为一级推理努力值
- **状态**：OPEN（已审查）
- **摘要**：此前 `max` 被当作自定义 effort，导致推理选择器中显示为小写 `max`。现将其纳入已知 effort 列表，获得统一的产品化标签。
- **链接**：https://github.com/openai/codex/pull/30467

### 10. #30297 — 默认启用远程插件
- **状态**：CLOSED
- **摘要**：将 `remote_plugin` 功能从开发中升级为默认启用，保留显式禁用的覆盖项，并更新了 TUI 和 app-server 中的相关测试。
- **链接**：https://github.com/openai/codex/pull/30297

---

## 功能需求归类

从近期热门 Issue 中可以梳理出社区反复提及的改进方向：

| 需求方向 | 涉及 Issue |
|---------|------------|
| **速率限制 / 配额公平性** | #28879, #29955, #30002, #30357 |
| **性能与日志写入优化** | #28224, #17320, #24510, #30405 |
| **Windows 平台兼容性** | #29072, #10090, #16690, #25237, #29427, #30473 |
| **敏感文件保护 / 排除机制** | #2847 |
| **用户交互控制（自动解决、弹窗）** | #28969, #30492, #30490, #30479 |
| **TUI 输入与显示问题** | #30480, #30478, #24485 |

---

## 开发者关注点

- **速率限制成本失控**：多位 Plus/Pro 用户反映配额在极短时间内耗尽（#28879、#29955、#30002），部分反馈指向服务端 `rate_limits` 统计逻辑存在 bug，社区期待官方尽快定位修复。
- **Windows 沙箱及工具调用失败**：`apply_patch`、`elevated_windows_sandbox`、PowerShell 解析 `@{u}` 等问题持续影响 Windows 用户的核心体验，多个 Issue 长期未关闭（#29072、#10090、#30473）。
- **本地日志对 SSD 的磨损**：即使已通过 PR 减少了 85% 的日志量（#28224），部分用户仍然在较新版本中发现高频率 TRACE 写入（#30405），需要更彻底的日志过滤机制。
- **推理 token 异常聚集怀疑**：社区用户通过数据分析发现 GPT-5.5 的 `reasoning_output_tokens` 出现固定边界值（#30364），可能影响复杂代码生成质量，呼吁 OpenAI 披露或调整模型推理截断策略。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，遵照您的指示。以下是基于提供的 GitHub 数据生成的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 (2026-06-29)

## 今日更新概览

昨日（2026-06-28）至今日，Gemini CLI 项目发布了一个专注于安全修复的 nightly 版本。社区讨论热点集中在子代理（Subagent）的行为正确性问题上，特别是关于最大执行轮次（MAX_TURNS）耗尽后被错误报告为成功、以及代理在特定情况下挂起等问题。同时，多个涉及“Auto Memory”功能的 Bug 修复和功能改进也引起了广泛关注。

## 版本发布

**v0.51.0-nightly.20260628.gae0a3aa7b**

本次 Nightly 版仅包含一项重要的安全修复：

- **安全修复**: 强制在敏感路径黑名单（blocklist）和 VS Code HITL（人工介入）功能中执行**大小写不敏感**的匹配规则。此举旨在提升针对跨平台路径混淆攻击的防御能力。
- **Full Changelog**: [查看详情](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-ni)

---

## 社区热点 Issues

以下列出了10个值得关注的 Issue，它们反映了社区用户在当前使用中遇到的真实问题和诉求。

1.  **子代理达到最大执行轮次却被报告为成功**
    - **#22323**: `codebase_investigator` 等子代理在达到 `MAX_TURNS` 限制而被强制终止时，代理引擎仍将其状态报告为 `success`，终止原因为 `GOAL`。这导致用户无法区分任务究竟是正常完成还是被意外截断，干扰了对代理执行过程的判断。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22323

2.  **通用代理（Generalist Agent）挂起**
    - **#21409**: 用户报告，当 Gemini CLI 将任务委托给通用代理时，客户端会无限期挂起。即使是创建文件夹这样的简单操作也无法完成，用户不得不手动取消。一个可行的临时解决方案是指示模型不要将任务委托给子代理。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21409

3.  **Shell命令执行后卡在“等待输入”状态**
    - **#25166**: 一个普遍性的 Bug，模型执行完一个简单的CLI命令后，UI界面会卡在“`Awaiting user input`”（等待用户输入）状态，即使命令实际已经完成。这严重影响了工作流的连续性。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/25166

4.  **“Auto Memory”在低信号会话上无限重试**
    - **#26522**: “Auto Memory”功能存在逻辑问题：如果提取代理认为某个会话“信号弱”而决定不读取，该会话不会被标记为“已处理”。这导致该会话会被反复呈现给模型进行判断，浪费算力和时间。建议引入基于次数的重试上限。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/26522

5.  **“Auto Memory”日志中未实现确定性脱敏**
    - **#26525**: “Auto Memory”在读取本地记录时，将内容发送给 AI 模型进行脱敏处理，但这发生在内容已进入模型上下文之后。同时，该服务还可能记录已安装的技能（Skills）内容。这带来了潜在的安全风险，建议在读取前就进行确定性脱敏。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/26525

6.  **浏览器代理（Browser Agent）在 Wayland 环境下失效**
    - **#21983**: 在 Wayland 显示协议下运行浏览器代理时，代理会因 `GOAL` 而终止，但实际并未完成预期操作，导致功能不可用。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21983

7.  **“get-shit-done”输出钩子导致 CLI 崩溃**
    - **#22186**: 当“`get-shit-done`”功能即将完成并打印摘要时，Gemini CLI 会因输出钩子（Output Hook）的 Bug 而崩溃，导致用户无法看到最终结果。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22186

8.  **Bug 报告不包含子代理的上下文**
    - **#21763**: 使用 `/bug` 命令生成的报告仅包含主会话的日志，而忽略了子代理内部运行的详细信息。这使得开发者难以定位和修复发生在子代理中的深层次问题。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21763

9.  **Agent 不主动使用自定义技能（Skills）和子代理**
    - **#21968**: 用户反馈，Gemini CLI 的主要代理**极少**自主调用用户配置的自定义技能或子代理，即使当前任务明显与对应技能描述相关。用户需要明确指令模型“去用某个技能”，这会降低自动化体验。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21968

10. **在创建 Vite 应用时卡在交互式提示符**
    - **#22465**: 当指令模型创建新的 Vite 应用时，模型在执行 `create-vite` 命令后卡在交互式提示符界面，无法正确处理需要用户手动输入的场景。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22465

---

## 重要 PR 进展

以下挑选了10个具有代表性的 Pull Request，涵盖了功能修复、安全增强和依赖更新。

1.  **安全修复：改进 Web 请求的 SSRF 防护**
    - **#27744**: 修复了 `web-fetch` 功能中 SSRF（服务端请求伪造）防护的绕过漏洞。原先通过比较 URL 的 hostname 是否为私有 IP，现改为先解析 DNS，再对解析后的真实 IP 进行校验，拦截了类似 `127.0.0.1.nip.io` 等通配符 DNS 服务的绕过攻击。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27744

2.  **安全修复：信任对话框泄漏实际执行的 Hook 信息**
    - **#27915**: 修复了一个安全缺陷：工作区信任（Workspace Trust）对话框中显示的是与**实际执行相反**的 Hook 信息。攻击者可以利用此差异，在用户确认信任后，执行未在对话框中展示的恶意命令。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27915

3.  **功能修复：修复 VS Code 插件关闭 Diff 标签后丢失终端焦点**
    - **#28183**: 修复了 VS Code 扩展（`vscode-ide-companion`）的一个问题。在批准文件编辑后，关闭 diff 预览标签会“窃取”集成终端的键盘焦点，用户需要手动点击终端后才能继续操作。此修复将焦点保持在终端内。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28183

4.  **功能修复：A2A 服务器修复 501 响应后崩溃问题**
    - **#27754**: 修复了 A2A 服务器在处理 `GET /tasks/metadata` 请求时，发送 501 状态码后未正确返回，继续执行后续代码导致 `ERR_HTTP_HEADERS_SENT` 错误而崩溃的问题。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27754

5.  **功能修复：修复斜杠命令冲突通知的去重逻辑**
    - **#27860**: 修复了斜杠命令冲突通知的一个 Bug。当冲突解决后又再次出现时，通知不会再次发送。此 PR 重建了冲突处理器，确保冲突状态变更时能正确触发通知。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27860

6.  **功能修复：在 UI 中保留正在执行的子代理工具调用**
    - **#27862**: 修复了 UI 的问题，确保当子代理调用工具时，这些工具调用过程能在 UI 中正确展示，而不是被忽略或覆盖，提升了对子代理行为的可视性。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27862

7.  **功能修复：修复“forever”作为有效会话保留周期**
    - **#24179**: 修复了当用户在设置中将 `maxAge` 设置为 `"forever"` 时，会话清理逻辑会因“格式无效”而报错的问题。现在已能正确识别并跳过“永久”保留的会话。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/24179

8.  **功能改进：在工具调用中优先使用结构化显示标题**
    - **#27863**: 改进了非交互式模式（Non-interactive mode）下的工具调用展示逻辑，优先使用工具返回的结构化数据中的显示标题，提升输出信息的可读性。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27863

9.  **文档完善：补充 `BeforeTool` Hook 的“ask”决策文档**
    - **#28064**: 补充了开发文档，明确了 `BeforeTool` Hook 的输出中，`decision`字段可以包含 `"ask"` 值，用于在工具执行前强制征求用户确认。使文档与实际实现保持一致。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28064

10. **测试改进：将 A2A 服务器测试迁移到 vi.stubEnv()**
    - **#27755**: 将 A2A 服务器测试中的 `process.env` 直接操作统一迁移到 Vitest 的 `vi.stubEnv()` 方法，以符合项目规范 (`GEMINI.md`)，提升测试的隔离性和可靠性。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27755

---

## 功能需求归类

从近期的 Issue 讨论中，可以归纳出以下用户反复提及的功能方向：

- **子代理行为与正确性**: 用户普遍关注子代理的执行逻辑，包括正确地报告其终止原因（如 #22323）、更合理地自主调用技能（如 #21968）、以及在遇到交互提示时能正确处理（如 #22465）。
- **代理安全性与权限控制**: 安全是持续关注点。包括对 Shell 命令的权限细化（如 #22672 防止破坏性操作）、URL 访问的 SSRF 防护（如 #27744）、以及 Auto Memory 和日志系统的脱敏与隐私保护（如 #26525, #26522）。
- **UI/UX 改进与稳定性**: 包含 Shell 命令执行后的界面卡死问题（#25166）、终端 resize 的性能与闪烁问题（#21924）、以及外部编辑器退出后的界面刷新问题（#24935），显示出用户对终端交互体验的稳定性要求很高。
- **代码理解与 AST 感知**: 用户期望代理能更智能地理解代码结构，而非仅做文本匹配。相关的 Issue（如 #22745, #22746）讨论引入 AST（抽象语法树）感知的文件读取、搜索和代码库映射，以减少 Token 消耗并提升定位代码的准确性。

---

## 开发者关注点

以下是开发者反馈中较为集中的痛点和高频需求：

1.  **子代理的可观测性不足**: 开发者难以理解子代理的内部决策过程。例如，子代理被意外终止后，报告信息误导性大（#22323），生成的 Bug 报告也缺少关键的子代理上下文（#21763）。**高频需求**: 改进子代理的日志记录和错误报告机制，使其行为更加透明。

2.  **代理缺乏“自我意识”和可预测性**: 开发者发现模型的行为不够可靠。例如，模型不按预期使用已有的技能（#21968），或者在特定场景下（如执行交互命令）会无限挂起（#21409, #25166）。**痛点**: 代理行为的不可预测性增加了用户监督和“兜底”的成本。

3.  **自动化操作的安全与破坏性担忧**: 开发者对模型自动执行高权限操作（如 `git reset --force`）感到不安（#22672），同时对服务端请求安全（#27744）和本地数据隐私（#26525）有明确担忧。**高频需求**: 更细粒度的权限控制与更全面的安全检查，以及更明确的操作风险提示。

4.  **本地开发环境的兼容性问题**: 部分开发者遇到了与环境相关的问题，如在 Wayland 下浏览器代理失效（#21983），或是对 Symlink 的支持不完整（#20079），这影响了部分开发环境的正常使用体验。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-29

## 今日更新概览

过去 24 小时无新版本发布。社区活跃度较高，共更新 7 条 Issue 和 1 条 PR，其中 1 条 Issue 被关闭。用户反馈集中在代理网络兼容性、终端复制行为、会话管理可视化增强以及 Windows 路径 bug 等方面。

## 社区热点 Issues

### 1. #2978 – `session.create` 在企业代理后 headless 模式下失败
- **状态**: 开放
- **摘要**: 使用 `@github/copilot-sdk` v0.3.0 + CLI v1.0.36 在 headless 模式、公司 HTTP 代理环境下调用 `session.create` 返回“fetch failed”。即便 CLI 子进程正确继承代理环境变量，且独立使用 `undici` 7.22 可正常访问 `api.github.com`，问题依然存在。
- **标签**: `area:enterprise`, `area:networking`
- **链接**: https://github.com/github/copilot-cli/issues/2978
- **影响范围**: 企业代理用户使用 SDK 头显模式时无法创建会话。

### 2. #3964 – 软换行复制时仍丢失换行边界空格（v1.0.65 未完全修复 #3666）
- **状态**: 已关闭
- **摘要**: 在终端中复制软换行输出时，换行边界处的空格仍被丢弃，导致两个单词粘在一起。该问题在 v1.0.49 曾标记为修复，但用户在 v1.0.59 的“第二个单词”位置上仍复现，v1.0.65 仍未彻底解决。
- **链接**: https://github.com/github/copilot-cli/issues/3964
- **影响范围**: 终端输出复制操作的可靠性。

### 3. #3971 – 功能请求：仓库会话应支持完整文件树浏览器
- **状态**: 开放（待分类）
- **摘要**: 文件夹会话侧边栏可展示完整文件树，但仓库会话（worktree）仅显示 Git 变更视图。用户希望在仓库会话中也获得类似文件浏览器体验，便于导航和打开任意文件。
- **链接**: https://github.com/github/copilot-cli/issues/3971

### 4. #3970 – 功能请求：用户自定义会话标签（可搜索/过滤）
- **状态**: 开放（待分类）
- **摘要**: 随着活跃会话增多，仅靠名称无法有效组织和检索。建议为会话添加可搜索和过滤的自定义标签，以支持多特性、多仓库、多工作流的场景。
- **链接**: https://github.com/github/copilot-cli/issues/3970

### 5. #3969 – 功能请求：会话列表中的计划状态指示器（徽章/图标）
- **状态**: 开放（待分类）
- **摘要**: 管理多个会话时无法直观看到每个会话的计划阶段（如正在进行、已完成等），需逐个打开查看。建议在会话列表项上添加状态指示器。
- **链接**: https://github.com/github/copilot-cli/issues/3969

### 6. #3967 – Copilot 在两个终端中突然消失并提示未安装（Ubuntu 24.04）
- **状态**: 开放（待分类）
- **摘要**: 用户首次使用 Copilot 表现良好，但之后在 Guake 和普通终端中消失，运行命令提示“未安装”。问题与终端环境切换或 shell 配置有关。
- **链接**: https://github.com/github/copilot-cli/issues/3967

### 7. #3815 – Windows 上调试日志保存路径缺少反斜杠
- **状态**: 开放
- **标签**: `area:platform-windows`
- **摘要**: 输出调试日志时显示的文件夹路径缺少 `\` 字符，导致用户无法直接复制粘贴到 Windows 资源管理器中使用。
- **链接**: https://github.com/github/copilot-cli/issues/3815

## 重要 PR 进展

### #3968 – 重命名 `changelog.md` 到 `changelog.md`
- **状态**: 已关闭
- **作者**: @creepyalissa-coder
- **链接**: https://github.com/github/copilot-cli/pull/3968
- **说明**: 该 PR 将文件重命名为自身（无实质变更），疑似误操作或测试提交。维护者已关闭。

## 功能需求归类

从今日更新的 Feature Request 中可归纳出以下社区高频诉求：

- **会话管理增强**
  - 仓库会话支持完整文件树浏览器（#3971）
  - 自定义标签实现会话分类与搜索（#3970）
  - 会话列表显示计划状态指示器（#3969）
- **代理与网络兼容性**
  - SDK headless 模式下的企业代理问题（#2978）
- **终端输出与交互**
  - 软换行复制空格丢失的回归问题（#3964）
- **平台稳定性**
  - Windows 下日志路径格式错误（#3815）
  - Ubuntu 下终端环境切换后应用消失（#3967）

## 开发者关注点

1. **企业代理环境依然存在障碍**：SDK 的 headless 模式无法在合规代理下创建会话，尽管 CLI 本身已支持代理变量。该 Issue 持续近两个月仍未解决，企业用户受影响较大。
2. **复制行为缺陷反复出现**：软换行边界空格丢失问题曾声称修复但再次暴露，用户需反复报告，影响日常使用信任。
3. **会话管理缺乏可视化**：多个功能请求指向同一方向——用户希望在不打开会话的前提下获得更多上下文信息，如文件结构、状态、自定义分类。
4. **Windows 与 Linux 的细节 bug**：Windows 路径格式错误虽小但影响操作便捷性；Ubuntu 下终端环境切换导致应用不可用，可能与 shell 配置或安装路径变化有关。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，以下是根据您提供的 GitHub 数据生成的 **2026-06-29 Kimi Code CLI 社区动态日报**。

---

# Kimi Code CLI 社区动态日报 | 2026-06-29

## 今日更新概览

过去24小时内，Kimi CLI 无新版本发布，亦无新增 Pull Request。社区活跃度集中在两则长期存在的 Issue 上，其中关于 CLI 循环读取文件的 bug（#640）获得 15 条评论，用户复现环境详实；另一则涉及 VSCode 插件内存消耗（#1592）于昨日经用户更新后再次引起关注。

## 版本发布

无。

## 社区热点 Issues

### 1. #640 [Bug] Kimi CLI stuck in reading one file again and again and stuck in a loop
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/640
- **影响场景**：在使用自定义 Anthropic 端点（通过 `config.toml` 配置）并指定模型 `mimo-v2-flash` 时，CLI 会反复读取同一个文件并陷入死循环。影响 KCLI 0.76 版本，运行在 Linux 6.18.3-arch1-1 x86_64 环境。
- **社区反应**：共 15 条评论，1 个 👍，用户提供了详细的复现步骤和日志，至今未关闭。开发者尚未在 issue 中给出明确修复时间表。

### 2. #1592 [Bug] kimi code vscode 插件很耗内存 // kimi code vscode plug-in consumes a lot of memory
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1592
- **影响场景**：用户反映在 VSCode 中长时间执行 Kimi Code 插件任务（如代码补全、对话）时，内存占用持续增长，影响体验。插件版本 0.4.5，运行在 macOS 14 arm64。
- **社区反应**：目前仅 1 条评论，用户补充了更详细的内存占用数据。该 issue 创建于 3 月，近期更新表明问题仍未解决。

## 功能需求归类

基于上述两条 Issue，用户反复提及的功能痛点可归纳为两类：

| 需求方向 | 来源 Issue | 具体描述 |
|----------|------------|----------|
| **性能与资源消耗** | #1592 | VSCode 插件长时间运行后内存占用过高，影响开发环境稳定性 |
| **核心交互稳定性** | #640 | CLI 在特定模型/配置下调入文件时出现循环读取死循环，导致任务无法完成 |

## 开发者关注点

- **Linux + 自定义端点稳定性**：使用 `config.toml` 配置非官方 API 端点的用户，在模型 `mimo-v2-flash` 上遭遇循环读取 bug，严重影响自动化流程。该问题已存在近半年，用户期待官方尽快定位根因。
- **VSCode 插件资源泄漏**：macOS 用户反映长时间使用后内存持续上涨，推测存在内存泄漏或缺乏资源释放机制。由于使用人群较广，该问题对插件日常可用性构成威胁。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-06-29

## 今日更新概览

过去 24 小时内，OpenCode 仓库共有 **50 条活跃 Issue** 和 **50 条活跃 PR**（含关闭/合并状态）。社区讨论热度最高的议题集中在 **Cursor CLI 支持**（74 条评论、186 👍）、**CLI 下无法复制粘贴**（50 条评论）以及 **Gemma-4 模型交互失败**（19 条评论）。PR 方面，多个修复补丁已完成合并，涉及 **MCP OAuth 重连**、**桌面端浏览器集成**、**会话成本显示**等核心功能。无新版本发布。

## 社区热点 Issues（10 条）

1. **[#2072] Support for Cursor?** — 作者建议 OpenCode 支持 Cursor 新发布的 CLI 作为后端，虽然其 API 未公开，但仍引起广泛讨论。74 条评论，186 👍
   [链接](https://github.com/anomalyco/opencode/issues/2072)

2. **[#13984] can not copy and paste in opencode CLI** — 用户反馈在 OpenCode TUI 中复制文本后，无法通过 Ctrl+V 粘贴。50 条评论，23 👍
   [链接](https://github.com/anomalyco/opencode/issues/13984)

3. **[#21034] gemma-4-26b and gemma-4-31b opencode interaction issues leading to tool loops/failures** — 使用最新 tokenizer 和引擎补丁后，Gemma-4 双模型在 OpenCode 中仍无法正常使用（LM Studio 0.4.9，Metal llama.cpp 2.11.0）。19 条评论，20 👍
   [链接](https://github.com/anomalyco/opencode/issues/21034)

4. **[#7692] [bug, windows] JSON Parse Error with Zhipu GLM-4.7** — 流式解析器错误拼接分块数据导致 JSON 解析失败，已关闭。13 条评论
   [链接](https://github.com/anomalyco/opencode/issues/7692)

5. **[#5565] [bug] Every so often, at least once per day, the agent/model starts returning weird stuff** — 模型偶尔输出乱码/非预期内容，疑似被注入异常代码。12 条评论
   [链接](https://github.com/anomalyco/opencode/issues/5565)

6. **[#26772] [FEATURE]: Integrated browser for desktop** — 请求为桌面版添加内置浏览器工作区，方便用户检查前端项目。10 条评论
   [链接](https://github.com/anomalyco/opencode/issues/26772)

7. **[#32420] Paid Go subscription — charged but not activated** — 多位用户反馈支付 $10 后订阅未激活，API 密钥无效，客服无响应。10 条评论
   [链接](https://github.com/anomalyco/opencode/issues/32420)

8. **[#34228] opencode exposes an unstable, incomplete subset of project skills to the model** — 项目技能（Skills）在不同会话间不一致，35 个技能中部分被忽略。8 条评论，已关闭
   [链接](https://github.com/anomalyco/opencode/issues/34228)

9. **[#30680] OpenCode immediately enters auto-compaction loop and stops generating responses** — 即使在新空文件夹中，OpenCode 也会重复自动压缩消耗 tokens，最终停止响应。8 条评论，已关闭
   [链接](https://github.com/anomalyco/opencode/issues/30680)

10. **[#33399] opencode utilization at 99-100% randomly - opencode unresponsive** — CLI 进程随机飙升到 99-100% CPU，导致键盘无法输入。7 条评论
    [链接](https://github.com/anomalyco/opencode/issues/33399)

## 重要 PR 进展（10 条）

1. **[#34356] feat(sdk-next): let embedders contribute plugins via opencode.plugin** — 为嵌入式 SDK 添加 `opencode.plugin(definition)`，允许嵌入方通过标准发现流程贡献插件。已关闭，未合并
   [链接](https://github.com/anomalyco/opencode/pull/34356)

2. **[#34336] feat(core): add v2 manual compaction** — 实现 V2 会话手动压缩，与自动压缩共享选择器/总结器/事件，并暴露错误给生成客户端。开放中
   [链接](https://github.com/anomalyco/opencode/pull/34336)

3. **[#29876] feat(tui): integrate ServerAuth headers into transport configuration** — 修复 `OPENCODE_SERVER_PASSWORD` 与 `--mdns` / `--hostname` 的冲突，仅通过显式 CLI 标志进入外部模式。已关闭
   [链接](https://github.com/anomalyco/opencode/pull/29876)

4. **[#34355] fix(app): suppress middle-click tab auxclick** — 阻止关闭标题栏标签后的中键点击默认行为，提升桌面标签操作稳定性。开放中
   [链接](https://github.com/anomalyco/opencode/pull/34355)

5. **[#34352] fix(app): register export logs globally** — 将 `logs.export` 移至全局命令注册，使其脱离旧布局路由可用，并保留桌面菜单入口。开放中
   [链接](https://github.com/anomalyco/opencode/pull/34352)

6. **[#34353] fix(core): fallback to ripgrep when fff fails** — 当 `fff` 初始化失败时回退到 ripgrep，防止桌面端文件搜索静默返回空结果。开放中
   [链接](https://github.com/anomalyco/opencode/pull/34353)

7. **[#30849] fix(opencode): strip MiniMax trailing tool_call leak suffix** — 针对 MiniMax 模型在文本末尾泄露 tool_call 标记的问题添加清理器。开放中
   [链接](https://github.com/anomalyco/opencode/pull/30849)

8. **[#34351] fix(app): wrap model.set in startTransition** — 将模型切换操作包装在 Solid 的 `startTransition` 中，防止 UI 阻塞。已关闭
   [链接](https://github.com/anomalyco/opencode/pull/34351)

9. **[#28887] feat(desktop): Display stored totals for Tokens and Cost in Desktop Session Context** — 修复桌面端会话总成本仅显示已加载消息的问题，改为从数据库读取存储的总量。已关闭
   [链接](https://github.com/anomalyco/opencode/pull/28887)

10. **[#33920] fix(mcp): reconnect after OAuth even when server is disabled** — 修复 MCP OAuth 流程完成后服务端被标记为 `"enabled": false` 导致重连失败的问题。已关闭
    [链接](https://github.com/anomalyco/opencode/pull/33920)

## 功能需求归类

根据近期 Issues，用户反复提及以下功能方向：

- **IDE 集成**：持续有人请求支持 Cursor 的 CLI（#2072），以及兼容 `.claude/CLAUDE.md` 项目文件（#17436）。
- **模型兼容性**：Gemma-4 系列、DeepSeek v4（Nvidia NIM）、MiniMax 等新模型存在交互失败或 tool_call 异常；GitHub Copilot 提供者也出现模型列表为空（#33696）。
- **CLI/桌面交互**：复制粘贴无法工作（#13984）、桌面端窗口卡顿（#34346）、CPU 占用 100%（#33399）、自动压缩循环（#30680）等稳定性问题。
- **付费与订阅**：Go 订阅付款后未激活（#32420），以及 OpenAI Copilot 与自有 API Key 的计费混淆（#34348）。
- **内置浏览器**：多个 Issue 请求桌面版集成浏览器（#26772，#30755），便于预览和调试前端项目。
- **权限与 Agent 控制**：Agent 绕过 Plan 模式限制直接执行操作（#34190），以及技能配置不一致（#34228）和 Session 生命周期 Hook（#5409）。

## 开发者关注点

- **高优先级痛点**：CLI 下无法复制粘贴影响日常使用；付费用户订阅激活失败且客服无响应，损害信任。
- **模型兼容性**：Gemma-4、DeepSeek v4、MiniMax 等主流新模型无法在 OpenCode 中正常使用，用户不得不回退或自行修复。
- **性能与稳定性**：随机 CPU 100% 导致死机、自动压缩循环耗 token 等严重影响效率，且无明确触发条件。
- **配置一致性**：Skills 和 Agent 配置在不同的会话中表现不一致，已配置的 agent 被静默忽略（#34326），暴露的权限和技能子集不稳定。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>