# AI CLI 工具社区动态日报 2026-06-27

> 生成时间: 2026-06-27 00:32 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比分析报告 | 2026-06-27

## 1. 今日横向概览

今日各工具社区动态呈现明显分化：**OpenCode** 与 **Gemini CLI** 的 Issue 与 PR 活动量最大（各有 50 条左右更新），**OpenAI Codex** 和 **Qwen Code** 紧随其后，**GitHub Copilot CLI** 与 **Claude Code** 保持中等活跃度，而 **Kimi Code CLI** 仅有 2 条新 Issue 和 1 条新 PR，活跃度最低。付费配额消耗过快、跨项目上下文污染、模型行为不可控是多个工具社区共同反映的核心矛盾。安全修复（路径穿越、进程泄漏）和 OAuth 兼容性改进在 Qwen Code、Gemini CLI 中较为密集。

## 2. 各工具活跃度对比

| 工具 | 今日新 Issues 数 | 今日新 PRs 数 | 版本发布 | 热点 Issue 最高赞数 | 维护者响应速度 |
|---|---|---|---|---|---|
| **Claude Code** | 未明确总数，热点 10 条 | 1 条（文档） | ✅ v2.1.195 | 691 👍 | 补丁快速发布 |
| **OpenAI Codex** | 未明确总数，热点 10 条 | 10 条（功能/修复） | ✅ rust-v0.142.3, alpha-v0.143.0 | 326 👍 | 多个 PR 开放中 |
| **Gemini CLI** | 约 50 条（全文追踪） | 约 18 条 | ✅ v0.51.0-nightly | 8 👍 | 安全 PR 快速合并 |
| **GitHub Copilot CLI** | 20+ 条新 Issue | 1 条（已关闭） | ✅ v1.0.66-1, v1.0.66-0 | 10 👍 | 新功能版本已发布 |
| **Kimi Code CLI** | 2 条 | 1 条 | ❌ | 3 👍 | 1 条 PR 等待合并 |
| **OpenCode** | 约 50 条（全文追踪） | 约 50 条 | ❌ | 82 👍 | 批量修复 PR 进行中 |
| **Qwen Code** | 未明确总数，热点 10 条 | 12 条（功能/修复） | ✅ cua-driver-rs v0.6.8 | 未提供 | 当日修复 2 个严重 bug |

> 注：部分工具未公开当日 Issue/PR 总数，仅能从列举的热点条目中估算。

## 3. 共同出现的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **配额与成本控制** | Claude Code, OpenAI Codex, OpenCode | 付费用户（Max/Pro/Go）额度消耗异常加快，急需透明计费与合理调整（OpenCode 尤其因 DeepSeek 降价要求调整订阅）。 |
| **上下文窗口与记忆管理** | Claude Code, GitHub Copilot CLI, Gemini CLI | Opus 4.8 的 1M 上下文选项消失（Claude）；记忆在不同仓库间泄露（Copilot）；Auto Memory 低效重试（Gemini）。 |
| **模型行为可靠性** | Claude Code, Gemini CLI | 模型生成“正确但无用”的代码（Opus 4.7）；子代理误报成功（Gemini）；Shell 命令卡死在等待输入（Gemini）。 |
| **平台兼容性（Windows/macOS/Linux）** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, Qwen Code | Windows ARM Cowork 失败（Claude）；Intel macOS SIGTRAP 崩溃（Codex）；Linux Ctrl+Shift+C 失效（Copilot）；Ubuntu 输入异常（Kimi）；Windows PowerShell 进程泄漏（Qwen）。 |
| **MCP/插件生态集成** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code | MCP 服务器连接后模型无法调用工具（Gemini、Qwen）；MCP OAuth 令牌刷新序列化（Codex）；MCP 资源浏览器支持（Qwen）。 |
| **安全与权限加固** | Gemini CLI, GitHub Copilot CLI, Qwen Code | 路径大小写绕过黑名单（Gemini）；路径穿越漏洞（Qwen）；自定义指令/记忆跨项目泄漏（Copilot）。 |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 深度编码辅助 + Hook/MCP 生态 | 付费 Pro/Max 用户，侧重复杂代码库开发 | 基于 Anthropic 自有模型（Opus 4.8），强调沙箱安全与用户自定义规则（Hook） |
| **OpenAI Codex** | 远程控制 + 多模型（GPT-5.5） + 企业级协作 | 从个人 Pro 到企业 Business 用户，注重团队协作 | Rust 重写核心，构建 exec-server 远程控制，内部数据结构重构（TurnItem） |
| **Gemini CLI** | 子代理 + Browser Agent + Skills 系统 | 开发者及自动化运维，强调多步推理与网页交互 | 基于 Google Gemini 模型，深度整合 GitHub Webhook 与 Caretaker 运维 Agent |
| **GitHub Copilot CLI** | 与 GitHub 生态深度绑定 + 终端原生体验 | 现有 GitHub Copilot 用户，追求无缝 CLI 集成 | 依赖 GitHub OAuth，支持代理设置与 OpenTelemetry，侧重内存/上下文隔离 |
| **Kimi Code CLI** | 轻量级编码代理 + OpenAI 兼容 | 国内开发者或追求简单部署的个人用户 | 基于 Moonshot 自家模型（kimi-for-coding），SDK 兼容 OpenAI 格式 |
| **OpenCode** | 开源 + 多提供商 + 自定义技能 | 高级开发者、自托管用户，重视可定制性 | 支持大量第三方模型（DeepSeek、OpenAI、Gemini），Go 订阅与加密货币支付，社区驱动 |
| **Qwen Code** | 多端（桌面/CLI/浏览器）+ 多语言 | 中文及东亚开发者，面向电商、钉钉等场景 | 基于通义千问模型，支持 Telegram Bot、QQ 频道，强调视频教程与文档 |

## 5. 社区活跃度记录

| 工具 | 活跃度评级 | 依据 |
|---|---|---|
| **OpenCode** | ⭐⭐⭐⭐⭐ | 今日同时有约 50 条 Issue 和 50 条 PR 更新，热点 Issue 获得 82 赞，多方向功能密集推进。 |
| **Gemini CLI** | ⭐⭐⭐⭐ | 明确记录 50 条 Issues + 18 条 PRs，安全修复和 Caretaker 运维 Agent 建设投入明显。 |
| **OpenAI Codex** | ⭐⭐⭐⭐ | 10 条热点 Issue（最高 326 赞）+ 10 条 PR，核心架构重构（TurnItem）与远程控制改进并行。 |
| **GitHub Copilot CLI** | ⭐⭐⭐ | 双版本发布（v1.0.66-0/1），20+ 新 Issue，功能新增较多，但 PR 活动较少。 |
| **Qwen Code** | ⭐⭐⭐ | 1 个版本发布 + 12 条 PR + 密集安全修复，当日解决 2 个严重 Bug，开发响应积极。 |
| **Claude Code** | ⭐⭐⭐ | 发布补丁 v2.1.195，但付费配额问题（691👍）长期未解决，PR 仅 1 条文档。 |
| **Kimi Code CLI** | ⭐ | 仅 2 条新 Issue、1 条 PR，无版本发布，社区动静最小。 |

## 6. 有证据支撑的观察

1. **付费用户的“配额焦虑”正成为跨工具一致性痛点**
   Claude Code 的 #16157（691👍）、OpenAI Codex 的 #28879（326👍）、OpenCode 的 #28846（82👍）均指向同一问题：用户感觉购买的额度被快速消耗或计费规则不合理。这与模型成本下降（如 DeepSeek V4 Pro 降价 75%）形成对比，导致社区要求提供商调整定价或提高透明度。

2. **上下文隔离与记忆污染严重影响多项目开发体验**
   GitHub Copilot CLI 的两个独立 Issue（#3945 记忆泄露、#3946 自定义指令泄露）与 Gemini CLI 的 Auto Memory 低效重试（#26522-26525）共同暴露了当前 AI CLI 在进行跨项目会话时缺乏干净的上下文隔离机制，开发者对此反馈强烈。

3. **Windows 平台稳定性仍是多个工具的共同短板**
   Qwen Code 今日修复了 PowerShell 进程泄漏导致 OOM 的严重 Bug（#5873）；Claude Code 报告了 ARM64 Windows 上 Cowork 功能失败（#50674）；OpenAI Codex 有 Windows Git 进程滥用问题（#20567）。这表明 Windows 环境下的资源管理和兼容性测试普遍不足。

4. **安全修复趋向于“快速响应、当日闭合”**
   Qwen Code 的路径穿越漏洞（#5834）和 API 负值校验（#5905）均在当日通过 PR 修复；Gemini CLI 的路径大小写绕过黑名单（#27966）也已合并。各团队对安全问题的响应速度明显快于一般功能 Bug。

5. **MCP/插件生态的互操作问题进入深水区**
   Gemini CLI（#4218）、Qwen Code（#4218）、OpenCode（MCP 令牌刷新 #34125）均报告 MCP 服务器连接后实际工具调用失败或授权中断，说明 MCP 协议在多个客户端间的状态同步、令牌管理方面仍存在设计缺陷。

> **今日暂无明确跨工具信号**：关于“Agent 工作流编排”或“多 Agent 协作”等更高级功能的讨论尚未形成跨工具的均匀共识，多数工具仍停留在单个 Agent 的稳定性与安全性修复上。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 **2026-06-27 Claude Code 社区动态日报**。

---

## Claude Code 社区动态日报 | 2026-06-27

### 1. 今日更新概览

今日 Claude Code 发布了 v2.1.195 补丁，主要修复了 Hook 匹配器子串匹配的 bug 并新增了禁用鼠标点击的环境变量。社区热度集中在付费用户的“使用限制过快耗尽”这一持续数月的核心矛盾上（已累积超 2200 条评论），同时多个关于模型上下文窗口选项消失的 Bug 报告也引起了广泛关注。

### 2. 版本发布

**v2.1.195**
- **新增:** `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 环境变量，允许在全屏模式下禁用鼠标点击、拖拽和悬停，同时保留滚轮滚动功能。
- **修复:** 修正了带连字符的 Hook 匹配器（如 `code-reviewer`, `mcp__brave-search`）可能触发意外子串匹配的问题，现改为精确匹配。
- [查看发布详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

### 3. 社区热点 Issues

1. **[BUG] 订阅 Max 计划后立即达到使用限制**
   - **影响场景:** 付费 Max 用户（包括 $200/月的 Max 20x 计划）在会话开始时即被错误地计入用量，导致大量用户反馈“未使用即被限”。
   - **社区反应:** 这是目前社区最焦点的问题，已有 1476 条评论和 691 个赞，持续时长近 6 个月仍未彻底解决。
   - [Issue #16157](https://github.com/anthropics/claude-code/issues/16157)

2. **[BUG] 自 3月23日 以来 Max 计划会话限制异常快速耗尽（CLI 使用）**
   - **影响场景:** Max 用户在使用 CLI 时，会话额度消耗速度异常，成本控制失效。
   - **社区反应:** 与 #16157 问题高度关联，用户花费了大量时间和精力进行排查与反馈。
   - [Issue #38335](https://github.com/anthropics/claude-code/issues/38335)

3. **[BUG] ARM64 (Snapdragon X) Windows 设备上 Cowork 功能失败**
   - **影响场景:** 在配备 Snapdragon X 芯片的 Windows PC 上，通过了环境检查但 Cowork 功能仍无法使用。
   - **社区反应:** 问题已复现并正在追踪中，对 Windows ARM 生态开发者影响较大。
   - [Issue #50674](https://github.com/anthropics/claude-code/issues/50674)

4. **[BUG] 更新后 Desktop 版 Opus 4.8 的 1M 上下文选项消失**
   - **影响场景:** Max 订阅用户在更新后，模型选择器中 Opus 4.8 只显示 256k 上下文，失去了关键的 1M 上下文窗口选项。
   - **社区反应:** 连续有多个 issue (#36351, #68287, #69109) 报告相似问题，说明这是一个影响面较广的回归 Bug。
   - [Issue #69109](https://github.com/anthropics/claude-code/issues/69109)

5. **[BUG] Opus 4.7 生成“正确但无用”的代码：静默丢弃用户输入**
   - **影响场景:** 开发者在构建医疗健康平台时，发现 Opus 4.7 生成的代码结构看似正确，但实际运行时不会处理用户指令，导致生产数据丢失。
   - **社区反应:** 引发了对于模型输出质量信任度的深入讨论，用户表示“Pay for Max, get nothing”。
   - [Issue #61107](https://github.com/anthropics/claude-code/issues/61107)

6. **[特性请求] 支持标准 `.github/skills/` 目录用于 Agent 技能**
   - **影响场景:** 用户希望 CLI 能自动发现并支持代码仓库中 `.github/skills/` 目录下的技能文件，以提升开发者工作流一致性。
   - **社区反应:** 这是一个长期需求，反映用户希望将 Agent 技能与 GitHub 生态更深度整合。
   - [Issue #16345](https://github.com/anthropics/claude-code/issues/16345)

7. **[Bug] `/context` 命令消耗它本应测量的上下文**
   - **影响场景:** 使用 `/context` 命令查看当前会话的 Token 占用时，命令的输出会被注入到对话历史中，从而增加上下文消耗，形成逻辑矛盾。
   - **社区反应:** 这是一个典型的可用性 bug，影响开发者对上下文消耗的精确判断。
   - [Issue #71715](https://github.com/anthropics/claude-code/issues/71715)

8. **[Bug] Sandbox 模式中 SOCKS5 代理导致 Git SSH 操作失败**
   - **影响场景:** 启用 Sandbox 模式后，Git SSH 操作因无法协商需要认证的 SOCKS5 代理而失败，影响依赖 SSH Git 的工作流。
   - **社区反应:** 问题已被复现且有具体影响范围，对安全性要求高的团队产生影响。
   - [Issue #70684](https://github.com/anthropics/claude-code/issues/70684)

9. **[特性请求] 支持为语音听写添加自定义词汇表**
   - **影响场景:** 新西兰口音的用户在使用语音听写技术术语（如短缩写、领域名词）时，频繁出现误转录，影响生产力。
   - **社区反应:** 反映出对无障碍和全球化体验的进一步需求。
   - [Issue #71721](https://github.com/anthropics/claude-code/issues/71721)

10. **[Bug] Windows 原生安装 OAuth 登录时报错 `CERT_HAS_EXPIRED`**
    - **影响场景:** Windows 用户在没有代理/VPN 的情况下，通过原生安装的客户端进行 OAuth 登录时遇到证书过期错误，但使用 `curl` 却能正常访问。
    - **社区反应:** 这是一个特定的平台认证问题，虽然影响面可能较小，但属于阻断性问题。
    - [Issue #71708](https://github.com/anthropics/claude-code/issues/71708)

### 4. 重要 PR 进展

今日 Pull Requests 活动较少，主要涉及文档更新和仓库同步。

1. **docs(sandbox): 注明提示批准的主机是会话范围的**
   - **内容:** 针对 `examples/settings/README.md` 文档进行补充，澄清了 `sandbox.network.allowedDomains` 中通过提示批准的主机仅在当前会话内有效，重启对话后需重新批准。
   - [PR #71627](https://github.com/anthropics/claude-code/pull/71627)

### 5. 功能需求归类

从近期的 Issues 中，社区高频出现的功能方向如下：

- **增强用户控制与透明度:**
  - 要求隐藏状态栏中的 Token 计数器和版本显示（#21867）。
  - 要求默认不将 Session URL 附加到 Git 提交信息中（#66504）。
  - 要求 Hook 系统能感知后台任务状态（#62516）。

- **模型选择与上下文窗口:**
  - 持续报告模型选择器中 1M 上下文选项（特别是 Opus 4.8）在不同平台（Desktop, 3rd Party Inference）上消失的问题（#36351, #68287, #69109, #69444）。
  - 模型（Opus 4.7）输出代码忽视用户明确指令，导致生产风险（#61107）。

- **平台兼容性与稳定性:**
  - Windows ARM64 平台上的 Cowork 功能不兼容（#50674）。
  - Windows 原生客户端的 OAuth 认证问题（#71708）及内核内存泄漏（#45889）。
  - 需要更好的 Linux 无障碍 (Voice Dictation) 支持（#71721）。

- **MCP 与 Connector 生态:**
  - Gmail Connector 无法在 CLI 中正常显示使用（#71711）。
  - Claude-in-Chrome 浏览器自动化的域限制不合理（#40173）。

### 6. 开发者关注点

- **付费成本与价值不对等:** 付费 Max 用户（特别是 5x，20x 用户）是社区中最活跃、情绪最强烈的群体。关于“使用限制异常快被耗尽”的反馈已持续数月，是当前最核心的痛点，直接影响了用户对服务的信任度。
- **模型行为的不确定性:** 开发者依赖模型生成生产级代码，但诸如 Opus 4.7 的“结构正确，逻辑无效”以及模型反复“无视内存和用户指令”的行为，引发了对其在关键任务中可靠性的广泛担忧。
- **UI/UX 逻辑不一致:** `/context` 命令消耗自身测量目标是逻辑上的明显缺陷，多个关于模型选项无故消失的 Bug 也显示出 UI 状态管理的不足，影响用户体验。
- **对平台特定问题的耐心降低:** Windows 和 Linux 平台上的用户对持续存在的兼容性和认证问题表现出厌倦，特别是在 AI 辅助工具本应提升效率的背景下，这些基础问题显得尤为突出。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是为您生成的 2026 年 6 月 27 日 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-27

## 今日更新概览

社区对 **GPT-5.5 模型速率限制突然大幅提高**的关注持续发酵，成为今日最热议题。同时，macOS 平台上的 Python CLI 崩溃问题（`SIGTRAP`）在版本 `0.142.2` 中仍有用户报告。在开发侧，团队重点推进了远程控制稳定性、MCP OAuth 序列化以及新的 TurnItem 数据模型落地。

## 版本发布

### `rust-v0.142.3`
- **内容**：仅包含维护性补丁，无用户可见变更。
- **链接**：[查看发布](https://github.com/openai/codex/releases/tag/rust-v0.142.3)

### `rust-v0.143.0-alpha.26`
- **内容**：Alpha 版本发布，无详细说明。
- **链接**：[查看发布](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.26)

## 社区热点 Issues（10 条）

1.  **[BUG] Codex (gpt-5.5, Plus 计划) 速率限制成本飙升 10-20 倍** (`#28879`)
    - **摘要**：用户报告自 6 月 16 日起，Plus 计划下 GPT-5.5 模型的 token 消耗速率激增，原本支持 20 多次提示的预算现在仅能支持 2-3 次。此问题获得 **326 个 👍** 和 **175 条评论**，是当前社区最核心的痛点。
    - **链接**：https://github.com/openai/codex/issues/28879

2.  **[BUG] Codex 应用使用量异常耗尽：5 小时配额在约 1 小时内用完** (`#30212`)
    - **摘要**：Pro 订阅用户（20 倍配额）反馈，其 5 小时的 Codex 使用额度在不到 1 小时内被耗尽，且使用量图表无异常。这与 `#28879` 问题高度相关，共同指向了后端计费或速率限制引擎的变更。
    - **链接**：https://github.com/openai/codex/issues/30212

3.  **[BUG] 速率限制：token 燃烧速度极快** (`#14593`)
    - **摘要**：一个长期存在的、非常活跃的速率限制 Bug 报告，拥有 **624 条评论** 和 **274 个 👍**。用户持续抱怨在 Business 计划下，token 消耗过快，此问题在 24 小时内有更新，表明问题仍未完全解决。
    - **链接**：https://github.com/openai/codex/issues/14593

4.  **[BUG] Codex CLI 0.141.0 在 Intel macOS 上崩溃（SIGTRAP）** (`#29000`)
    - **摘要**：Intel Mac 用户报告 Codex CLI 在运行时触发 SIGTRAP 信号导致崩溃。该问题已在 24 小时内被关闭，但根据同类问题（`#30300`）来看，该崩溃模式在版本 `0.142.2` 上仍偶有发生。
    - **链接**：https://github.com/openai/codex/issues/29000

5.  **[BUG] macOS x86_64: codex-cli 0.142.2 使用 gpt-5.5 时崩溃（SIGTRAP/EXC_BREAKPOINT）** (`#30300`)
    - **摘要**：用户报告新版本 `0.142.2` 在 Intel Mac 上运行 `gpt-5.5` 时，仍会触发 SIGTRAP 崩溃。这表明 `#29000` 声称已修复的问题可能并未完全解决，或复现条件不同。
    - **链接**：https://github.com/openai/codex/issues/30300

6.  **[BUG] Windows Codex 应用持续大量执行 git 命令，消耗性能** (`#20567`)
    - **摘要**：Windows 用户发现 Codex 应用每分钟会触发约 1000 次 `git` 进程调用，严重影响系统性能。此问题已持续近两个月，最新更新于 6 月 26 日，表明仍在排查中。
    - **链接**：https://github.com/openai/codex/issues/20567

7.  **[BUG] macOS：code_sign_clone 目录在自动更新后无限增长** (`#27536`)
    - **摘要**：macOS 用户发现 Codex 桌面应用会在系统临时文件夹中生成 `code_sign_clone` 目录，占用高达 62 GB 以上的磁盘空间且不会自动清理。影响所有 macOS 用户。
    - **链接**：https://github.com/openai/codex/issues/27536

8.  **[BUG] 升级到 PRO 计划后仍然“消息用尽”** (`#18357`)
    - **摘要**：部分用户在升级到更高阶的 PRO 订阅后，Codex 应用仍提示“已用完 Codex 消息”的配额错误。这表明配额同步或状态更新机制存在延迟或 Bug。
    - **链接**：https://github.com/openai/codex/issues/18357

9.  **[BUG] Windows 桌面应用无法读取终端** (`#29070`)
    - **摘要**：Windows 用户在使用 Codex 桌面 A版本时，遇到应用无法正确读取终端输出的问题，影响了需要捕获终端结果的交互场景，如运行脚本。
    - **链接**：https://github.com/openai/codex/issues/29070

10. **[BUG] 桌面应用 (macOS): 源码控制监控导致性能问题** (`#29084`)
    - **摘要**：用户报告 macOS 桌面应用的源码控制集成会为包含 `gitlink`（嵌入的 git 仓库）的工作区，高速持续执行 `git status`，导致 `syspolicyd` 和 `trustd` 进程 CPU 占用飙升，风扇狂转。
    - **链接**：https://github.com/openai/codex/issues/29084

## 重要 PR 进展（10 条）

1.  **`app-server: test JSON tracing output`** (`#30314`) [OPEN]
    - **摘要**：为应用服务器添加 JSON 追踪输出的测试。
    - **链接**：https://github.com/openai/codex/pull/30314

2.  **`gate TCP_NODELAY on Rendezvous transport policy`** (`#30269`) [OPEN]
    - **摘要**：为 Codex exec-server 的 Rendezvous 通信引入基于传输策略的 `TCP_NODELAY` 控制，旨在优化网络延迟。
    - **链接**：https://github.com/openai/codex/pull/30269

3.  **`fix(remote-control): avoid server token refresh retry storms`** (`#30201`) [OPEN]
    - **摘要**：修复远程控制功能中，当服务端 Token 刷新返回临时错误（如 502）时，客户端会进入重复重试风暴导致连接失败的问题。
    - **链接**：https://github.com/openai/codex/pull/30201

4.  **`feat(core): emit more turn items instead of legacy begin/end events`** (`#30283`) [OPEN]
    - **摘要**：将命令执行、动态工具调用等事件的核心数据模型从旧的 `begin/end` 事件迁移为新的 `TurnItem`，以作为单一数据源（source of truth）。
    - **链接**：https://github.com/openai/codex/pull/30283

5.  **`feat(rollout): persist canonical items for paginated threads`** (`#30188`) [OPEN]
    - **摘要**：基于 `#30283` 的改动，新增持久化层，将 `TurnItem` 快照存入库中，以支持分页线程。这是清理和规整 Codex 内部数据结构的关键步骤。
    - **链接**：https://github.com/openai/codex/pull/30188

6.  **`Enable remote plugins by default`** (`#30297`) [OPEN]
    - **摘要**：将远程插件功能从“开发中”状态升级为默认启用，标志着该功能趋于稳定。
    - **链接**：https://github.com/openai/codex/pull/30297

7.  **`add referral invites to /usage`** (`#30313`) [OPEN]
    - **摘要**：在 `/usage` 页面下新增用户推荐邀请功能，调用现有后端接口，不涉及服务端协议层变更。
    - **链接**：https://github.com/openai/codex/pull/30313

8.  **`consume pushed exec-server process events`** (`#30273`) [OPEN]
    - **摘要**：使 Codex 能够消费 exec-server 主动推送的进程事件流，取代之前主动轮询状态的方式，以提升效率和及时性。
    - **链接**：https://github.com/openai/codex/pull/30273

9.  **`Preserve namespaces on custom tool calls`** (`#30302`) [OPEN]
    - **摘要**：在自定义工具调用的反序列化和重放过程中保留可选的命名空间，确保带有命名空间的工具能正确工作。这是一个重要的兼容性修复。
    - **链接**：https://github.com/openai/codex/pull/30302

10. **`Serialize MCP OAuth refresh transactions`** (`#30293`) [OPEN]
    - **摘要**：作为一组 MCP OAuth 改进 PR 的一部分，此 PR 旨在序列化 MCP OAuth 令牌刷新事务，以防止并发刷新导致的状态不一致。
    - **链接**：https://github.com/openai/codex/pull/30293

## 功能需求归类

从今日的 Issues 中，可以观察到以下用户反复提出的功能方向：

- **速率限制与消费透明度**：大量 Issue 聚焦于 **token 消耗过快**、**配额显示与实际不符**以及**订阅等级与可用配额不匹配**。用户强烈需要更透明、可预测的消耗机制，以及准确的配额状态反馈。
- **CLI / TUI 稳定性与兼容性**：**macOS Intel 架构**上的 **SIGTRAP 崩溃**仍在被报告，同时有用户请求对 **HTTPS-only 传输选项**和 **Amazon Bedrock 自定义 Base URL** 的支持，反映了在复杂网络和云环境中的使用痛点。
- **Windows / macOS 桌面应用性能**：Windows 用户频繁遇到 **Git 进程滥用**、**UI 重叠**和**沙箱状态损坏**的问题；macOS 用户则面临**存储空间无限增长**和**源码控制性能噩梦**。平台稳定性是桌面用户的迫切需求。
- **模型行为与上下文控制**：有用户报告 `X-OpenAI-Internal-Codex-Responses-Lite` 头的问题，以及模型在未获批准的情况下从信息查询跨入修改状态，表明用户希望获得更强的**行为可控性**和**权限校验**。
- **增强与自定义**：用户提出为 **Codex 宠物动画**增加可配置项，以及为 **CLI 的记忆功能 (memories)** 增加官方管理和查询命令。这表明社区除了核心功能外，也开始关注可玩性和数据管理能力。

## 开发者关注点

- **速率限制（Rate Limiting）是核心痛点**：`#28879` 和 `#30212` 等 Issue 的高热度与大量评论，直接反映了近期后端速率限制策略的调整对用户造成了重大影响。这需要 OpenAI 团队给予最高优先级响应和沟通。
- **新旧 Bug 并存，修复质量待验证**：旧的 `SIGTRAP` 崩溃问题（`#14593`、`#18357`）和新的同类问题（`#30300`）同时存在，显示部分修复可能不完整或存在回归。开发者需关注类似模式的修复是否彻底。
- **跨平台体验差异巨大**：Windows 用户承受着 Git 滥用和沙箱问题，Intel Mac 用户面临崩溃，而 Apple Silicon 用户可能遇到存储问题。开发者的焦点应放在缩小这些跨平台体验的差异上。
- **内部架构重构进行中**：从 `#30282`、`#30283`、`#30188` 等 PR 可以看出，OpenAI 团队正在进行一次针对**内容项（TurnItem）数据模型**的内核级重构，旨在为未来的分页、回放和持久化能力打下更坚实的基础。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-27 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 — 2026-06-27

## 今日更新概览
今日社区活跃度较高，共跟踪到 50 条 Issues 和 18 条 PRs 更新。主要关注点集中在 **Subagent行为异常**（如挂起、误报成功）和 **安全与隐私加固**上。`v0.51.0-nightly` 版本发布，主要修复了 CI 和测试问题。

## 版本发布
- **Nightly 版本 v0.51.0-nightly.20260626.gb14416447**
  - **更新内容**：修复了 CI 流程中的一个问题，该问题可能导致错误的 NPM 发布或任务失败。同时修复了 `no_proxy` 测试。
  - **链接**：[Release v0.51.0-nightly.20260626.gb14416447](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260626.gb14416447)

## 社区热点 Issues
以下挑选了 10 个值得关注的 Issues，反映了当前用户遇到的核心问题和社区讨论热点。

1.  **Subagent误报成功（#22323）**
    - **影响场景**：用户使用 `codebase_investigator` 子代理分析代码库时，该子代理在达到最大对话轮次（`MAX_TURNS`）后被强制终止，但却向上汇报 `status: "success"` 和 `Termination Reason: "GOAL"`，导致用户被欺骗，以为任务被成功执行。
    - **社区反应**：8条评论，2个赞。作为 P1 优先级 Bug，此问题严重破坏了用户对 Agent 输出可靠性的信任。
    - **链接**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **通用 Agent 挂起（#21409）**
    - **影响场景**：当 `gemini-cli` 将任务委托给通用 Agent 时，它可能会无限期地挂起，即使是非常简单的任务（如创建文件夹）也无法完成。用户被迫等待长达一个小时后取消任务。
    - **社区反应**：7条评论，8个赞。这是用户最痛恨的问题之一，严重影响了日常使用体验。
    - **链接**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **Shell命令卡死在“等待输入”状态（#25166）**
    - **影响场景**：在执行一些简单的 CLI 命令（如 `ls`、`git status`）后，Gemini CLI 会卡住，显示命令仍在运行并“等待用户输入”，即使命令本身已经执行完毕且不需要任何输入。
    - **社区反应**：4条评论，3个赞。这是一个典型的终端控制问题，导致自动化工作流中断。
    - **链接**：[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

4.  **Browser Agent 在 Wayland 下失败（#21983）**
    - **影响场景**：Browser Agent 在 Wayland 显示服务器协议上运行时出现故障，导致任务失败。
    - **社区反应**：4条评论，是 Linux 用户面临的特定环境兼容性问题。
    - **链接**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

5.  **Agent 不使用自定义 Skills 和 Sub-agents（#21968）**
    - **影响场景**：用户创建了针对特定任务（如 Gradle 和 Git）的技能和子代理，但 Gemini 不会自主调用它们，即使这些技能的描述非常匹配当前任务。必须由用户明确指示才能使用。
    - **社区反应**：6条评论。这表明 Agent 在工具选择和推理能力上仍有待提升，用户期望更强的自动化和“主动性”。
    - **链接**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6.  **Auto Memory 安全问题与低效重试（#26525, #26522, #26523）**
    - **影响场景**：一组关于 Auto Memory 系统的 Bug。
        - **#26525**：在将敏感信息发送给模型进行编辑前，未进行确定性脱敏，存在秘密泄露风险。
        - **#26522**：对于低价值的会话，Auto Memory 会无限期地重试，造成资源浪费。
        - **#26523**：无效的内存补丁（如格式错误、目标路径超出限制）被静默跳过，但后台程序仍会反复读取，效率低下。
    - **社区反应**：每个 Issue 都有3-5条评论，表明了社区对隐私保护、资源效率和健壮性的高度关注。
    - **链接**：[#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)

7.  **模型超过128个工具后返回400错误（#24246）**
    - **影响场景**：当用户启用了大量工具（MCP服务器等）时，Agent 会因为工具列表过长导致 API 调用失败（400 Bad Request），因为模型上下文窗口无法容纳。
    - **社区反应**：3条评论。这指向一个系统性问题：Agent 需要更智能地管理可用工具列表，而不是一股脑全塞给模型。
    - **链接**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

8.  **Agent 应该阻止或警告破坏性行为（#22672）**
    - **影响场景**：Agent 在执行复杂 Git 操作、数据库维护等任务时，可能会使用具有破坏性的命令（如 `git reset --force`），而忽略了更安全的替代方案。
    - **社区反应**：3条评论。用户希望 Agent 具备更完善的安全意识和“确认”机制，避免造成数据丢失。
    - **链接**：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

9.  **Agent 频繁在随机位置创建临时脚本（#23571）**
    - **影响场景**：当限制模型使用 Shell 执行时，它倾向于在项目各处创建临时的可执行脚本来完成工作，导致工作区混乱，难以清理。
    - **社区反应**：3条评论。这反映了 Agent 工作方式的脏乱问题，用户期望更清洁、一致的文件操作行为。
    - **链接**：[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

10. **文档网站反馈：安装文档引用了错误的仓库（#28165）**
    - **影响场景**：用户报告 `geminicli.com` 安装文档中的一个示例命令指向了一个错误的 GitHub 仓库（`trfahim/termux-package-installer`），而不是官方示例。
    - **社区反应**：2条评论。一个小但直接的文档问题，可能误导新手用户。
    - **链接**：[#28165](https://github.com/google-gemini/gemini-cli/issues/28165)

## 重要 PR 进展
以下挑选了 10 个对稳定性、性能和安全性有直接影响的重要 PR。

1.  **限制递归推理轮次，防止无限循环（#28164）**
    - **内容**：为核心 Agent 的推理引擎添加了严格的递归推理轮次限制（每用户请求15轮），以保护本地 CPU 资源和模型 API 配额，防止无限循环。
    - **链接**：[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)

2.  **修复“思想泄漏”（Thought Leakage）问题（#27971）**
    - **内容**：解决了模型的内部思考过程泄漏到对话历史中的问题，该问题会导致模型在后续轮次中混淆并模仿这些内部思考，陷入无限循环。
    - **链接**：[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)

3.  **修复路径解析问题，处理 `@` 符号前缀（#28053）**
    - **内容**：解决了一个重要的生产 Bug：当模型传递以 `@` 符号开头的路径（如 `@policies/new-policies.txt`）时，`read_file`、`replace` 等文件操作工具会报错“文件未找到”。
    - **链接**：[#28053](https://github.com/google-gemini/gemini-cli/pull/28053)

4.  **强制大小写敏感路径黑名单，修复安全绕过漏洞（#27966，已合并）**
    - **内容**：修复了一个安全漏洞，即通过改变路径的大小写可以绕过对 `.git`、`.env` 等敏感目录的访问限制。
    - **链接**：[#27966](https://github.com/google-gemini/gemini-cli/pull/27966)

5.  **实现 Caretaker Agent 的 Webhook 日志服务和 Triage Worker 基础（#28015, #28163）**
    - **内容**：一组为代号为“Caretaker”的自动化运维 Agent 构建的 PR。`#28015` 实现了用于接收 GitHub Webhook 的 Cloud Run 服务，`#28163` 则建立了用于对 Issue 进行初步分类（Triage）的工作模块基础。
    - **链接**：[#28015](https://github.com/google-gemini/gemini-cli/pull/28015), [#28163](https://github.com/google-gemini/gemini-cli/pull/28163)

6.  **缓冲 Chat 压缩遥测数据（#28162）**
    - **内容**：将 Chat 压缩操作的 OpenTelemetry（OTEL）日志和指标封装在遥测缓冲区内，避免直接 I/O 影响性能。
    - **链接**：[#28162](https://github.com/google-gemini/gemini-cli/pull/28162)

7.  **修复工作区信任对话框显示与实际执行的 Hook 相反的问题（#27915）**
    - **内容**：修复了工作区信任对话框显示的 Hook 命令是**相反**的（即不显示实际会被执行的命令），这是一个潜在的安全风险。
    - **链接**：[#27915](https://github.com/google-gemini/gemini-cli/pull/27915)

8.  **防止 `.env` 文件不可读时导致扩展加载失败（#28059）**
    - **内容**：修复了当工作区中的 `.env` 文件权限问题导致无法读取时（如 `EACCES`错误），整个扩展系统会加载失败的问题。
    - **链接**：[#28059](https://github.com/google-gemini/gemini-cli/pull/28059)

9.  **修复 Git 分支在部分文件系统上无法更新的问题（#28012）**
    - **内容**：解决了在 WSL 挂载的 Windows 驱动器或网络共享等文件系统上，执行 `git checkout` 后，CLI 底部状态栏的“Branch”指示器不会刷新的 Bug。
    - **链接**：[#28012](https://github.com/google-gemini/gemini-cli/pull/28012)

10. **避免 OAuth 令牌交换时 Socket 复用导致失败（#28103）**
    - **内容**：修复了在特定 Node.js 版本（24.17.0, 22.23.0, 26.3.0）上，由于 HTTP Agent 的 Socket 复用问题，导致“使用 Google 登录”的 OAuth 流程失败的 Bug。
    - **链接**：[#28103](https://github.com/google-gemini/gemini-cli/pull/28103)

## 功能需求归类
从今日的 Issues 和 PRs 中，可以归纳出用户反复强调的几个功能方向：

- **Agent 任务透明度与可审计性**：用户期望能更清晰地了解 Agent 内部发生了什么，尤其是**子代理的决策过程**（#22323, #21763）和**实际执行了哪些命令**（#27915）。`/chat share` 功能也应包含子代理的轨迹信息（#22598）。
- **工具使用可靠性与智能性**：核心痛点在于 Agent 在工具选择（#21968）、命令执行（#25166）和文件操作（#23571）上的不可预测性。用户希望 Agent 能**更智能地管理工具列表**（#24246），避免无限循环，并且**采用更清洁的工作方式**。
- **安全与权限控制**：用户对 Agent 的潜在破坏性行为（#22672）、敏感数据泄露（#26525）以及安全策略绕过（#27966）高度重视。期望有更严格的**工作区信任模型**（#27915）和**防御性编程**（#28053）。
- **系统兼容性与稳定性**：特定环境下的问题依然突出，如 Wayland 下的浏览器 Agent（#21983）、WSL 下的文件系统事件（#28012）以及特定 Node.js 版本下的 OAuth 登录（#28103）。
- **AST-aware 代码理解**：社区（`gundermanc`）在积极探讨通过**抽象语法树（AST）** 来提升代码读取、搜索和映射的精度和效率，以减少 Token 消耗和对话轮次（#22745, #22746）。

## 开发者关注点
- **Agent 行为不可控是高优先级痛点**：Agent 挂起、误报成功、陷入无限循环（`Thought Leakage`）是最影响开发效率的问题，开发者社区对此反应强烈，相关 Bug 的优先级均为 P1。
- **安全相关修复密集**：多条 PRs 直接针对安全漏洞，包括路径大小写绕过、工作区信任对话框显示错误、OAuth 登录失败等，反映出开发者对 CLI 工具作为开发环境入口的安全性高度重视。
- **Auto Memory 功能正被严格审视**：围绕 Auto Memory 的多个问题（#26522, #26523, #26525, #26516）显示，虽然该功能旨在提升体验，但其当前的实现引入了资源浪费、低效和隐私风险，开发者希望其变得更“聪明”而非“勤快”。
- **对“Caretaker”自动化运维 Agent 的投入**：多个 PR（#28015, #28163）正在构建一个用于自动处理 Issue 分类和维护的 Agent 系统，这表明项目团队正积极利用自身工具进行自举，以提升项目维护效率。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，作为专注于AI开发工具的技术分析师，我已根据您提供的GitHub数据，为您整理出2026年6月27日的GitHub Copilot CLI社区动态日报。

---

## GitHub Copilot CLI 社区动态日报 | 2026-06-27

### 1. 今日更新概览

今日迎来两个新版本发布，重点引入了子代理并发控制、技能审查和桌面通知等新功能。社区活跃度极高，报告了超过20个新Issue，其中涉及子代理性能、内存泄露、终端兼容性以及自定义指令泄露等多个值得关注的问题。

### 2. 版本发布

今日共发布两个补丁版本。

- **v1.0.66-1** (最新)
    - **新增**
        - 在 `/settings` 中新增子代理并发和深度限制配置（面向按使用量计费的用户）。
        - 新增 `/chronicle skills review` 命令，用于审查提议的技能草稿变更，支持接受、拒绝或推迟每个草案。
        - 为待机提示和空闲会话新增桌面通知功能。
- **v1.0.66-0**
    - **新增**
        - 在 MCP 列表视图中新增开关，用于启用或禁用 MCP 服务器。
        - 在 CLI 设置中新增试验性的响应预算控制。
        - 允许托管设置配置 OpenTelemetry 导出。
        - 通过 OAuth 认证的远程服务器上的 MCP 工具，现在可以在会话中令牌过期后自动恢复。

### 3. 社区热点 Issues

以下是今日值得关注的10个Issue，涵盖了从严重缺陷到新功能请求的广泛社区反馈。

1.  **#2082 - [Linux] Ctrl+Shift+C 无法复制到剪贴板**
    - **影响场景**: Linux (Ubuntu 24.04) 用户。这是一个影响日常使用的基础终端快捷键中断问题。
    - **问题范围**: 自从 v1.0.4 版本后，标准的复制快捷键 `ctrl+shift+c` 失效，影响了所有 Linux 用户的复制操作。
    - **社区反应**: 报告时间长（3月创建），评论多（22条），👍 数高（10个），表明这是一个累积了较长时间的严重痛点。
    - 链接: [https://github.com/github/copilot-cli/issues/2082](https://github.com/github/copilot-cli/issues/2082)

2.  **#3944 - 子代理对话记录被完整地、无限制地嵌入到父会话导出中**
    - **影响场景**: 使用子代理功能的用户，特别是当需要导出会话记录时。
    - **问题范围**: 当会话使用子代理时，父会话的导出内容包含了子代理的**全部**对话记录和工具调用输出，没有摘要或大小限制，这会导致导出文件异常巨大且难以阅读。
    - 链接: [https://github.com/github/copilot-cli/issues/3944](https://github.com/github/copilot-cli/issues/3944)

3.  **#3951 - 建议原生支持 PowerShell CLI**
    - **影响场景**: 使用 PowerShell 作为主要终端（特别是 .NET/C# 开发者）的用户。
    - **问题范围**: 用户呼吁 Copilot CLI 能原生支持 PowerShell Cmdlet，以更好地与微软生态和自动化脚本环境集成。
    - 链接: [https://github.com/github/copilot-cli/issues/3951](https://github.com/github/copilot-cli/issues/3951)

4.  **#3947 - 1.0.64 版本的主题系统出现回归**
    - **影响场景**: 所有使用非默认主题的用户，尤其是关注可访问性的用户。
    - **问题范围**: 报告指出所有内置主题（包括 `high-contrast`, `colorblind`）都会强制覆盖终端背景色，导致用户无法保留终端的原生背景，对需要高对比度或特定背景色的用户造成困扰。该Issue已被标记为已关闭，但值得关注其解决方案。
    - 链接: [https://github.com/github/copilot-cli/issues/3947](https://github.com/github/copilot-cli/issues/3947)

5.  **#3906 - 请求分配 CVE 编号**
    - **影响场景**: 整个 Copilot CLI 项目的安全审计。
    - **问题范围**: 用户表示已提交安全报告并收到 GHSA ID，请求为已发现的漏洞分配 CVE 编号，意味着可能存在一个已确认的严重安全问题。
    - 链接: [https://github.com/github/copilot-cli/issues/3906](https://github.com/github/copilot-cli/issues/3906)

6.  **#3940 - 提议为自定义Agent增加 `skills` 字段限制预加载范围**
    - **影响场景**: 创建和使用自定义Agent的进阶用户。
    - **问题范围**: 用户希望在自定义Agent的配置文件中定义 `skills` 字段，以精确控制哪些技能被预加载到上下文中，从而优化性能和相关性。
    - 链接: [https://github.com/github/copilot-cli/issues/3940](https://github.com/github/copilot-cli/issues/3940)

7.  **#3945 - 记忆（Memory）在不同仓库之间泄露**
    - **影响场景**: 使用记忆功能的不同项目或仓库的开发者。
    - **问题范围**: 用户报告在一个全新的仓库中，Copilot 错误地引用了其他仓库的“存储事实”，表明记忆系统可能存在跨项目数据隔离问题。
    - 链接: [https://github.com/github/copilot-cli/issues/3945](https://github.com/github/copilot-cli/issues/3945)

8.  **#3942 - `copilot --acp` 与 `--agent` 联合使用时报错**
    - **影响场景**: 尝试在非交互模式下使用自定义Agent的用户。
    - **问题范围**: 用户发现 `--acp` (Accept Completion Partially) 参数与 `--agent` 参数无法同时使用，限制了自动化脚本调用自定义Agent的能力。
    - 链接: [https://github.com/github/copilot-cli/issues/3942](https://github.com/github/copilot-cli/issues/3942)

9.  **#3948 - `web_fetch` 工具始终提示 TypeError: fetch failed**
    - **影响场景**: 所有使用 `web_fetch` 工具进行网页抓取的用户。
    - **问题范围**: 用户报告`web_fetch`工具在任何代理或网络配置下都无法正常工作，总是返回“fetch failed”错误，排除了环境变量和代理问题，疑似工具本身存在bug。
    - 链接: [https://github.com/github/copilot-cli/issues/3948](https://github.com/github/copilot-cli/issues/3948)

10. **#3946 - 自定义指令泄露到仓库分析中**
    - **影响场景**: 在多个项目中使用不同自定义指令的开发者。
    - **问题范围**: 用户发现分析一个新仓库时，Copilot 会错误地将之前项目的自定义指令内容当作“事实”注入到新仓库的分析结果中，导致生成的文档或配置包含不相关的信息。
    - 链接: [https://github.com/github/copilot-cli/issues/3946](https://github.com/github/copilot-cli/issues/3946)

### 4. 重要 PR 进展

今日 PR 活动较少，仅有一个处于关闭状态的 PR。

- **#570 [CLOSED] 为 README.md 添加 macOS 安装说明**
    - 一个由 Copilot 创建的WIP（工作进度）PR，目标是为 README 添加 macOS 的安装指南，虽然已被关闭，但显示了对文档完善的持续关注。
    - 链接: [https://github.com/github/copilot-cli/pull/570](https://github.com/github/copilot-cli/pull/570)

### 5. 功能需求归类

从今日的 Issues 中，社区反复提出的功能方向可归类如下：

- **终端与键盘兼容性**: Linux (`ctrl+shift+c`) 和 Windows (`copy` 功能) 上的复制中断问题；请求原生支持 PowerShell。
- **会话与上下文管理**: 需要暂停会话的机制(#1928)；需要优化子代理对话记录的导出(#3944)；修复记忆(#3945)和自定义指令(#3946)在不同仓库间的泄露问题。这都是围绕“提高会话上下文准确性”的诉求。
- **可访问性与主题**: 由于新主题系统强制覆盖背景色，导致部分用户无法获得满意的显示效果(#3947, #3773)，核心诉求是“让终端宿主背景色可以穿透”。
- **自定义Agent能力**: 允许在Agent配置中限制预加载的Skill(#3940)；确保 `--acp` 参数与 `--agent` 参数兼容(#3942)。
- **安全与合规**: 为已报告的安全问题分配CVE(#3906)，表明社区对安全透明度的关注。

### 6. 开发者关注点

开发者反馈中，以下几个痛点或高频需求尤为突出：

- **基础功能可靠性问题**: 快捷键复制和网络请求 (`web_fetch`) 这样的基础功能在新版本中出现可靠性问题，这比新功能缺失更影响开发者的核心体验。
- **上下文污染（Context Leakage）**: 多个Issue指向同一个核心痛点：Copilot的记忆和自定义指令在不同项目之间“串台”，导致分析结果不准确。这暴露出当前上下文隔离机制存在缺陷。
- **子代理性能与可管理性**: 随着v1.0.66引入子代理并发控制，社区也立即指出了子代理对话导出无限制的性能问题(#3944)，说明新功能上线后，其配套的“资源管理”和“数据管理”能力需要跟上。
- **对终端原生集成的渴望**: 从PowerShell和Linux快捷键的诉求看，开发者希望Copilot CLI能更深度、更原生地融入他们所使用的终端环境，而不是一个独立的外来者。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-27

## 今日更新概览

- 过去24小时内无新版本发布，但有两个新 Issue (#2477, #2478) 和一个新 PR (#2476) 处于开放状态。
- 社区关注的一个历史 Issue (#2425) 已标记为关闭，涉及 403 错误限制编码代理访问。
- 一个文档相关的 PR (#2287) 仍在等待合并，旨在为 README 开发章节添加前置依赖说明。

## 版本发布

无

## 社区热点 Issues

共 3 条，均在过去 24 小时内更新过。

1. **#2425 [CLOSED] 403 错误：Kimi For Coding 仅对 Coding Agents 可用**
   - 作者: @zhongyr | 创建: 2026-06-04 | 关闭: 2026-06-26 | 评论: 10 | 👍: 3
   - 问题：使用 0.9.0 版本，调用 kimi-for-coding 模型时每次返回 403 错误。社区讨论较多（10 条评论），表明该问题曾影响使用代理工具的开发者。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2425

2. **#2478 [OPEN] ExitPlanMode 报告“Not in plan mode”，而系统提示声称 plan mode 激活**
   - 作者: @proccl | 创建: 2026-06-26 | 更新: 2026-06-26 | 评论: 1 | 👍: 0
   - 问题：状态不一致——系统提示明确显示 plan mode 激活并给出计划文件路径，但调用 ExitPlanMode 时返回“Not in plan mode”。导致助手无法正常退出计划模式。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2478

3. **#2477 [OPEN] 双击 Enter 键及 `/sessions` 反馈丢失**
   - 作者: @iqre8 | 创建: 2026-06-26 | 更新: 2026-06-26 | 评论: 0 | 👍: 0
   - 问题：在 Ubuntu 24.04.4 LTS 上使用 0.20.0 版本时，双击 Enter 键导致输入异常，同时 `/sessions` 命令的反馈丢失。需进一步确认具体复现步骤。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2477

## 重要 PR 进展

共 2 条，均在过去 24 小时内更新过。

1. **#2287 [OPEN] docs(readme): add prerequisites list to Development section**
   - 作者: @ktwu01 | 创建: 2026-05-14 | 更新: 2026-06-26 | 评论: 未提供
   - 内容：在 README 的 Development 章节顶部添加“Prerequisites”小节，列出运行 `make prepare` 前需要安装的依赖。解决 Issue #2274，提升贡献者入门体验。
   - 链接: https://github.com/MoonshotAI/kimi-cli/pull/2287

2. **#2476 [OPEN] fix(kosong): omit reasoning_effort instead of sending null when thinking is off**
   - 作者: @logicwu0 | 创建: 2026-06-26 | 更新: 2026-06-26 | 评论: 未提供
   - 内容：修复 `OpenAILegacy.with_thinking("off")` 导致 `reasoning_effort` 被显式设为 `null` 的问题。改为完全省略该字段，避免 OpenAI SDK 序列化时生成 `"reasoning_effort": null`，与 `omit` 语义一致。
   - 链接: https://github.com/MoonshotAI/kimi-cli/pull/2476

## 功能需求归类

从今日活跃的 Issues 和 PR 中，可观察到的用户关注方向如下：

- **计划模式（Plan Mode）行为一致性**：#2478 暴露了开发者在切换 plan mode 时遇到的状态同步问题，属于功能逻辑缺陷。
- **API 交互正确性**：#2476 修复了 SDK 参数序列化问题，属于底层 API 兼容性修复，反映了社区对 OpenAI 兼容层正确性的关注。
- **文档与开发者体验**：#2287 持续尝试改进 README 开发指南，说明新贡献者仍面临入门门槛。
- **输入交互与反馈**：#2477 报告了终端输入异常和 /sessions 命令反馈丢失，影响日常使用体验。

## 开发者关注点

- **编码代理访问权限**：#2425 虽已关闭，但曾有较多评论，说明开发者对于 Kimi For Coding 模型在非“编码代理”工具（如 Kimi CLI、Claude Code 等）上的使用限制较为敏感。
- **模式状态管理**：#2478 引起开发者对 plan mode 内部状态机可靠性的质疑，这类问题容易导致工作流卡顿或中断。
- **SDK 参数处理细节**：#2476 对空值省略的处理属于底层兼容性问题，反映出社区对 API 响应严格性的重视。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，以下是 2026 年 6 月 27 日的 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-06-27

## 今日更新概览
今日社区活跃度极高，共产生 50 条 Issue 和 50 条 PR 的更新。讨论焦点集中在两项：一是在 DeepSeek V4 Pro API 价格永久下调 75% 的背景下，社区强烈呼吁调整 Go 订阅服务的计费配额；二是多个用户报告了应用在处理请求后无响应（“Thinking”后无输出）的严重问题，涉及不同版本和模型。

## 社区热点 Issues

1.  **[#28846] [FEATURE]: 调整 Go 订阅使用限制以适应 DeepSeek V4 Pro 永久降价**
    - **热度**: 84 条评论 / 82 👍
    - **摘要**: 用户要求 OpenCode Go 服务根据 DeepSeek V4 Pro API 价格永久降低 75% 的情况，相应调整 Go 订阅的使用配额，以反映成本下降。
    - **链接**: https://github.com/anomalyco/opencode/issues/28846

2.  **[#12598] [BUG]: Windows 升级后无法启动应用**
    - **热度**: 16 条评论
    - **摘要**: Windows 10 用户在升级到 v1.1.53 版本后，应用程序无法启动。点击图标无反应，在命令行中运行也无任何输出，影响严重。
    - **链接**: https://github.com/anomalyco/opencode/issues/12598

3.  **[#450] [FEATURE]: UI 中支持 reasoning_effort 参数**
    - **热度**: 15 条评论 / 26 👍
    - **摘要**: 用户呼吁在 UI 界面中增加对 `reasoning_effort` 参数的支持，该参数能被 OpenAI、Gemini、DeepSeek 等多种模型识别，但目前无法在 UI 中设置。
    - **链接**: https://github.com/anomalyco/opencode/issues/450

4.  **[#6169] [BUG]: /model TUI 选择器未显示所有自定义提供商模型**
    - **热度**: 12 条评论
    - **摘要**: 用户在 `opencode.jsonc` 中配置的自定义模型能通过命令行正确加载，但在 `/model` TUI 选择器对话框里却看不到，导致无法在 UI 界面切换模型。
    - **链接**: https://github.com/anomalyco/opencode/issues/6169

5.  **[#23153] [FEATURE]: 使用加密货币支付 Go 服务**
    - **热度**: 12 条评论 / 23 👍
    - **摘要**: 社区请求为 OpenCode Go 服务增加加密货币支付方式，以满足用户对支付方式多样性的需求。
    - **链接**: https://github.com/anomalyco/opencode/issues/23153

6.  **[#28202] [BUG]: 插件异步提示与 Web 提示重叠，生成重复的助手消息**
    - **热度**: 7 条评论
    - **摘要**: 在 `opencode web` 模式下（v1.15.4），真正的 Web 提示与插件的异步提示流量发生重叠，导致在同一个用户消息下生成多个相同的助手回复，造成 UI 混乱和数据重复。
    - **链接**: https://github.com/anomalyco/opencode/issues/28202

7.  **[#32149] & [#34087] [BUG]: Opencode 处理请求后无响应**
    - **热度**: 6 + 3 条评论
    - **摘要**: 多名用户报告，提交请求后应用显示“Thinking”状态，但最终不返回任何响应。此问题在 Go 和 Zen 模型上均出现，似乎是一个跨不同版本的普遍性问题。
    - **链接**: https://github.com/anomalyco/opencode/issues/32149 / https://github.com/anomalyco/opencode/issues/34087

8.  **[#19005] [FEATURE]: 使终端输出的本地文件路径可点击**
    - **热度**: 6 条评论
    - **摘要**: 用户希望 OpenCode 在终端中生成的报告、文档等文件路径能够像 IDE 一样支持点击直接打开，以提升工作流效率，避免手动复制粘贴。
    - **链接**: https://github.com/anomalyco/opencode/issues/19005

9.  **[#31152] [BUG]: 每次响应后触发无限压缩循环**
    - **热度**: 4 条评论
    - **摘要**: 即使用户发送极简单的消息（如“hi”），OpenCode 也会在每次响应后陷入大量上下文压缩循环。该问题在零配置、无任何技能/代理/命令的情况下依然存在。
    - **链接**: https://github.com/anomalyco/opencode/issues/31152

10. **[#34006] [BUG]: 桌面版与终端版粘贴文件路径行为不一致**
    - **热度**: 3 条评论
    - **摘要**: 用户反馈粘贴本地文件路径时，桌面应用和终端的处理方式不同，且两者均无法将路径作为纯文本粘贴，导致操作不便。
    - **链接**: https://github.com/anomalyco/opencode/issues/34006

## 重要 PR 进展

1.  **[#33918] fix(skill): 在遗留列表中包含 v2 插件技能**
    - **摘要**: 修复了 `/skills` 命令和技能 API 无法获取 v2 插件注册的技能的问题，确保所有技能都能被正确识别和调用。
    - **链接**: https://github.com/anomalyco/opencode/pull/33918

2.  **[#34065] [FEATURE]: 向 Shell 命令暴露编码代理标记**
    - **摘要**: 提议让 OpenCode 启动的 Shell 命令能够通过环境变量感知到自己是在编码代理的上下文中运行，以便下游 CLI 工具检测并调整行为。
    - **链接**: https://github.com/anomalyco/opencode/issues/34065

3.  **[#34125] fix(mcp): 请求刷新令牌作用域**
    - **摘要**: 修复 MCP 协议中刷新令牌（Refresh Token）的请求作用域问题，确保遵循最新规范以支持更广泛的授权服务器。
    - **链接**: https://github.com/anomalyco/opencode/pull/34125

4.  **[#34116] fix(app): 问题 UI 修复和改进**
    - **摘要**: 一个聚合性 PR，旨在修复多个与“问题”相关的用户体验问题，承诺解决 #14924, #32791, #15896, #15353 等 issue。
    - **链接**: https://github.com/anomalyco/opencode/pull/34116

5.  **[#34123] fix(tui): 添加纯文本粘贴功能**
    - **摘要**: 针对 #34006，新增了 `prompt.paste_plain` 命令，默认绑定 `Ctrl+Alt+V`，允许用户在 TUI 界面直接粘贴剪贴板中的纯文本。
    - **链接**: https://github.com/anomalyco/opencode/pull/34123

6.  **[#29457] fix(plan): 防止计划构建代理携带模型**
    - **摘要**: 修复了 `plan_exit` 时，模型设置被错误地传递给后续构建代理的问题，确保构建阶段的模型选择符合预期。
    - **链接**: https://github.com/anomalyco/opencode/pull/29457

7.  **[#29446] fix(opencode): 限制 Codex 流中断**
    - **摘要**: 修复了 ChatGPT/Codex OAuth 流在请求停滞时可能一直等待的问题，通过限制等待时间防止程序挂起。
    - **链接**: https://github.com/anomalyco/opencode/pull/29446

8.  **[#29439] fix(opencode): 限制无有效提示的重试延迟**
    - **摘要**: 为防止重试退避时间过长，将无有效 `retry-after` 提示时的最大重试延迟限制在 30 秒。
    - **链接**: https://github.com/anomalyco/opencode/pull/29439

9.  **[#29404] fix(core): 优雅处理 JSON 解析失败**
    - **摘要**: 在 `models-dev.ts` 中为 `JSON.parse()` 增加了错误处理，防止因网络问题（如返回 HTML）导致应用启动崩溃，提升了稳定性。
    - **链接**: https://github.com/anomalyco/opencode/pull/29404

10. **[#29398] feat(opencode): 为消息添加时间戳栏模式**
    - **摘要**: 新增一项功能，允许用户在消息侧边栏显示时间戳，方便追踪对话时间线，以响应用户的多项请求。
    - **链接**: https://github.com/anomalyco/opencode/pull/29398

## 功能需求归类

- **模型相关**: 社区强烈希望 UI 层能支持更多模型参数控制（如 #450 的 `reasoning_effort`），并改善自定义模型在 UI 中的展示与可用性（#6169）。
- **支付与计费**: 在 DeepSeek 大幅降价的背景下，用户希望 Go 订阅服务能调整定价逻辑（#28846）。同时，对支持加密货币等更多支付方式的需求持续存在（#23153）。
- **UI与用户体验**: 用户对细节体验要求很高，包括使终端输出路径可点击（#19005）、粘贴路径时提供纯文本选项（#34006）、以及修复桌面版菜单未翻译的问题（#34104）。
- **稳定性和性能**: 应用在处理中无响应（#32149, #34087）和无限的上下文压缩循环（#31152）是最突出的稳定性问题，严重影响日常使用。
- **集成与协议**: 针对 ACP 协议的改进需求持续出现，包括在权限请求中提供 diff 内容（#31781）和对会话列表行为的标准化（#33036）。

## 开发者关注点

本周开发者反馈的痛点主要集中在**模型使用体验**和**应用稳定性**上。

1.  **模型参数控制缺失**: `reasoning_effort` 参数的支持呼声很高，表明高级用户希望更精细地控制模型行为，但当前 UI 层缺乏入口。
2.  **自定义模型兼容性**: 虽然 OpenCode 支持自定义提供商，但模型无法在 TUI 中显示的问题（#6169）以及 Qwen 等模型出现工具调用失败的问题（#33618），让开发者在使用非标准模型时感到挫败。
3.  **稳定性痛点**: “Thinking”后无响应（#32149, #34087）和无限压缩循环（#31152）是两个影响广泛的严重 bug，对工作流造成直接打击，开发者期待尽快修复。
4.  **支付与可用性**: 对加密货币支付（#23153）的需求，以及对桌面版与终端版粘贴行为不一致的困惑（#34006），反映了社区对应用可用性和灵活性的更高期待。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，以下是为您生成的 2026-06-27 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 (2026-06-27)

## 今日更新概览

今日项目活跃度较高。子包 **cua-driver-rs** 发布 v0.6.8 版本，主要支持相对坐标功能。社区方面，关于 **Windows 平台 PowerShell 进程泄漏** 的严重 bug（#5873）引发了热烈讨论，并已在当日得到修复。此外，围绕**安全漏洞（路径穿越）、会话管理、以及新功能提案（如 Telegram bot、Plan Approval Gate）** 的 Issue 和 PR 也较为活跃。

## 版本发布

- **cua-driver-rs v0.6.8**
  - 说明：cua-driver 预编译二进制包更新（在 `packages/cua-driver` 目录下）。
  - **更新内容**：
    - **macOS**：提供经过代码签名和公证的通用二进制文件以及 `QwenCuaDriver.app` 应用。
    - **Linux**：提供未签名的 x86_64 和 arm64 二进制文件（最低要求 glibc 2.31）。
    - **Windows**：提供未签名的 x86_64 和 arm64 二进制文件。
    - **核心特性**：启用相对坐标模式。
  - 链接: [cua-driver-rs-v0.6.8](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.6.8)

## 社区热点 Issues

1. **#5083 [OPEN] TUI 界面冻结，疑似僵尸子进程未回收**
   - **影响场景**：长时间使用TUI会话时，界面完全无响应。
   - **问题范围**：用户诊断发现主进程存在未被回收的 `bash` 子进程（Zombie状态），导致界面冻结。
   - **社区反应**：已提供详细诊断日志，开发者正在跟进。
   - 链接: https://github.com/QwenLM/qwen-code/issues/5083

2. **#5873 [CLOSED] Windows 平台严重 Bug：使用工具会不断打开 PowerShell 导致 OOM**
   - **影响场景**：在 Windows 系统上，每次调用工具都会启动一个 PowerShell 进程且不关闭，最终导致内存耗尽（OOM）。
   - **问题范围**：用户反馈强烈（“真的忍不住要爆粗口了”），确认在 v0.19.2 版本上 100% 复现。
   - **社区反应**：该问题已通过 PR #5892 修复并关闭。
   - 链接: https://github.com/QwenLM/qwen-code/issues/5873

3. **#5819 [OPEN] 升级后自动修改配置，使用更高单价模型并浪费 Token**
   - **影响场景**：用户从 v0.18.3 升级到 v0.19 后，`setting.json` 中的模型被自动从低成本模型切换为高成本 `pro` 模型，导致预存资金快速消耗。
   - **问题范围**：影响用户体验和资金安全，同时提及升级后中文输出变为繁体。
   - **社区反应**：状态为 `need-information`，需要进一步排查。
   - 链接: https://github.com/QwenLM/qwen-code/issues/5819

4. **#4218 [OPEN] MCP Server “filesystem” 显示已连接，但模型无法使用工具**
   - **影响场景**：用户在 Windows 上配置 MCP 文件系统服务器，UI 显示连接成功，但 AI 模型无法调用对应的文件操作工具。
   - **问题范围**：MCP 集成问题，影响所有依赖文件系统工具的操作。
   - **社区反应**：问题待分类和修复。
   - 链接: https://github.com/QwenLM/qwen-code/issues/4218

5. **#4175 [OPEN] 提案：Mode B（`qwen serve`）向 v0.16 生产就绪的功能优先级路线图**
   - **影响场景**：定义 `qwen serve` 模式的下一个里程碑。
   - **问题范围**：梳理了 Stage 1 已合并的功能及剩余工作，通过评论进行长期规划讨论。
   - **社区反应**：社区核心贡献者和管理员在讨论路线图细节，评论多达 42 条。
   - 链接: https://github.com/QwenLM/qwen-code/issues/4175

6. **#4493 [CLOSED] JetBrains Rider 无法通过 Qwen Code 登录**
   - **影响场景**：用户在 JetBrains Rider IDE 中尝试登录 Qwen Code 时，网页重定向循环，无法完成 OAuth 认证并调用阿里云 Token Plan。
   - **问题范围**：IDE 集成与身份认证问题。
   - **社区反应**：已关闭，但未说明具体解决方式。
   - 链接: https://github.com/QwenLM/qwen-code/issues/4493

7. **#5875 [OPEN] 改善技能命令的自动补全匹配**
   - **影响场景**：输入 `/skill_name` 时，自动补全要求从名称开头精确匹配。
   - **问题范围**：用户建议支持任意位置的模糊匹配，例如输入 `/store` 能匹配到 `front-end-store-rules`。
   - **社区反应**：功能请求，已有相关 PR (#5898) 在跟进中。
   - 链接: https://github.com/QwenLM/qwen-code/issues/5875

8. **#5834 [CLOSED] 桌面端源文件删除功能存在路径穿越漏洞**
   - **影响场景**：通过构造包含路径遍历序列的 `sourceSlug`，可以实现源文件目录逃逸，删除工作区外的文件。
   - **问题范围**：此为一个安全漏洞（`category/security`），影响桌面客户端。
   - **社区反应**：已通过 PR #5829 修复并关闭。
   - 链接: https://github.com/QwenLM/qwen-code/issues/5834

9. **#5905 [CLOSED] API 接受负数的 `cleanupPeriodDays` 配置值**
   - **影响场景**：通过 API 设置 `general.cleanupPeriodDays` 为负数（如 -5）时，系统会接受并持久化，导致运行时清理行为异常。
   - **问题范围**：API 输入校验缺失。
   - **社区反应**：已通过 PR #5906 快速修复。
   - 链接: https://github.com/QwenLM/qwen-code/issues/5905

10. **#5907 [OPEN] 追踪：完善 Telegram Bot 命令支持和对齐**
    - **影响场景**：使用 Qwen Code 的 Telegram Bot 进行远程会话管理。
    - **问题范围**：追踪以确保 Telegram Bot 的行为与 Bot 菜单中的命令完全一致，目标是为会话管理和命令处理提供可靠的远程聊天体验。
    - **社区反应**：社区成员发起，正在规划中。
    - 链接: https://github.com/QwenLM/qwen-code/issues/5907

## 重要 PR 进展

1. **#5892 [CLOSED] 修复：在 Windows 上彻底终止 PTY shell 树，以停止 pwsh 泄漏**
   - **修复内容**：针对 Issue #5873 的修复。在 Windows 上，工具调用通过 node-pty 创建的 PowerShell 进程树未被正确清理。此 PR 改用 `tree-kill` 方式，在运行后递归地结束所有子进程，防止内存泄漏。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5892

2. **#5829 [CLOSED] 修复(桌面端)：删除源文件前拒绝不安全的 slug**
   - **修复内容**：针对 Issue #5834 的安全修复。在删除源文件前，验证 `sourceSlug` 是否为合法路径段，拒绝包含 `..` 等路径遍历字符的输入，防止删除工作区外文件。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5829

3. **#5807 [CLOSED] 修复(核心)：忽略来自其他工作区的 IDE 配置**
   - **修复内容**：解决了 Qwen Code 在连接 IDE 时，可能因为环境变量或遗留锁文件而读取到其他工作区配置的 bug。PR 确保发现逻辑会跳过指向不同工作区的配置，正确回退到当前工作区。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5807

4. **#5906 [CLOSED] 修复(serve)：拒绝负数的 `cleanupPeriodDays` 值**
   - **修复内容**：针对 Issue #5905 的修复。为配置项 `general.cleanupPeriodDays` 添加了 `minimum: 0` 的校验，确保 API 不接受并存储负数数值。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5906

5. **#5891 [CLOSED] 修复(CLI)：工具调用描述改为换行显示而非截断**
   - **修复内容**：改进了 CLI 交互体验。之前工具调用的描述过长时会被截断，现在改为文本换行，用户可以查看完整的描述信息。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5891

6. **#5856 [OPEN] 视频教程：如何构建一个 MCP 服务器**
   - **修复内容**：新增一个 `CONTRIBUTING.md` 风格的视频教程，指导社区如何为 Qwen Code 构建 MCP 服务器，以降低开发门槛。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5856

7. **#5879 [CLOSED] 功能(web-shell)：在 `/mcp` 对话框中浏览 MCP 服务器资源**
   - **功能内容**：将终端 UI (TUI) 的 MCP 资源浏览器功能移植到 Web Shell 的 `/mcp` 对话框中。现在 Web 用户也可以展开查看每个 MCP 服务器的资源和提示 (prompt) 列表。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5879

8. **#5888 [OPEN] 功能(频道)：`qwen tag` — RFC + 阶段 0 (多用户频道驻留 Agent)**
   - **功能内容**：提出一个重要的新概念——`qwen tag`。它是一个可以驻留在聊天群组（如钉钉）中的多用户Agent，基于现有的频道适配器构建。PR 包含 RFC（请求评论）和阶段 0 的初始代码实现。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5888

9. **#5780 [OPEN] 功能：添加 `qwen update` 和 `/update` 命令，支持自动更新**
   - **功能内容**：新增命令行和斜杠命令，用于检查新版本并自动更新（standalone安装）或引导用户进行手动更新（npm安装）。方便用户保持最新版本。
   - 链接: https://github.com/QwenLM/qwen-code/pull/5780

10. **#5848 [OPEN] 功能(UI)：添加 `ui.history.collapsePreviewCount` 设置项**
    - **功能内容**：新增一个设置项，当恢复被折叠的会话时，允许保留最近的 N 轮用户对话可见，方便用户快速接续前文，而其余内容仍保持折叠状态以节省空间。
    - 链接: https://github.com/QwenLM/qwen-code/pull/5848

11. **#5898 [OPEN] 修复：支持在输入中间触发技能命令补全**
    - **功能内容**：改进了技能命令的补全功能。之前只有输入行首的 `/` 才会触发补全，现在在输入文本中间输入 `/skill_name` 也能触发模糊匹配、菜单导航和自动补全。
    - 链接: https://github.com/QwenLM/qwen-code/pull/5898

12. **#5890 [OPEN] 功能(循环)：通过哨兵注入 `.qwen/loop.md` 任务文件**
    - **功能内容**：为 `/loop` 循环任务增加持久化任务列表支持。模型可以通过设置哨兵 (sentinel) 提示，将任务写入 `.qwen/loop.md` 文件，用户可直接编辑该文件来调整任务，无需在每个循环轮次中重复描述。
    - 链接: https://github.com/QwenLM/qwen-code/pull/5890

## 功能需求归类

- **IDE 集成与兼容性**：
  - **JetBrains IDE**：用户在 Rider 和 IntelliJ IDEA 上持续遇到 OAuth 登录、模型切换和插件兼容性问题（#4493, #2724, #3511）。
  - **VSCode**：关于扩展功能（如设置 UI）的信息缺失（#1370）。

- **性能和稳定性**：
  - **资源泄漏**：Windows 平台进程/内存泄漏问题成为今日焦点（#5873），TUI 界面因僵尸进程冻结的问题也值得关注（#5083）。
  - **连接问题**：长对话或慢响应后的 `API Error: terminated` 问题仍被提及（#2938, #1111）。
  - **内存优化**：用户持续关注长时间运行任务的内存占用问题，希望提升效率（#2036）。

- **安全性与配置**：
  - **配置篡改**：升级后自动修改配置的 bug 引起用户对安全性和资金管理的担忧（#5819）。
  - **输入校验**：路径穿越漏洞（#5834）和 API 接口参数校验不严（#5905）暴露出安全审查和入参健壮性的改进空间。

- **开发者体验与交互改进**：
  - **命令补全**：社区明确提出了提升技能命令自动补全体验的需求（#5875），并已被开发采纳（#5898）。
  - **MCP 集成**：MCP 服务器连接状态与模型可用性不一致的问题仍需要解决（#4218）。
  - **机器人集成**：对 Telegram 和 QQ 机器人的命令支持和流式体验改进有明确的功能请求（#5907, #5901）。

## 开发者关注点

- **Windows 平台稳定性**：连续出现 PowerShell 进程泄漏 (OOM) 和 TUI 界面冻结等严重问题，表明 Windows 环境下的资源管理和进程清理是开发者的首要痛点，修复补丁 #5892 的快速响应证明了团队对此的重视。
- **升级体验不佳**：v0.18 升至 v0.19 的自动模型切换和配置篡改问题（#5819）损害了用户信任，升级流程的健壮性和透明度有待提高。
- **安全响应积极**：对于路径穿越漏洞（#5834）和配置校验缺失（#5905），项目维护者在发现后当天即发布修复 PR，响应速度值得肯定。
- **CLI 交互细节改进**：用户对 `/skill` 命令的模糊补全（#5875）和工具描述的完整显示（#5891）等细节提出了具体需求，说明核心 CLI 交互已不够精细，而开发者正在积极打磨。

</details>