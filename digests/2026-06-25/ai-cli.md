# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-25 00:33 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比分析报告（2026-06-25）

## 1. 今日横向概览

今日各工具活动密集：Claude Code 与 GitHub Copilot CLI 分别发布小版本修复（v2.1.191、v1.0.65）；OpenAI Codex 连续推出5个 Rust Alpha 更新；Gemini CLI、Kimi Code CLI、Qwen Code 虽无新版本，但社区 Issue 和 PR 讨论活跃；OpenCode 发布 v1.17.10 并推进 MCP 客户端能力增强。社区焦点高度集中在 **Token 消耗与成本**、**MCP/Hook 集成稳定性**、**Windows 兼容性** 以及 **配置/模型被意外修改** 等问题上。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（条） | 重要 PR（条） | 今日 Release（个） |
|------|------------------|---------------|-------------------|
| Claude Code | 10 | 5 | 2 |
| OpenAI Codex | 10 | 10 | 5 |
| Gemini CLI | 10 | 10 | 0 |
| GitHub Copilot CLI | 10 | 1 | 1 |
| Kimi Code CLI | 5 | 2 | 0 |
| OpenCode | 10 | 10 | 1 |
| Qwen Code | 10 | 10 | 1 |

*注：Issues/PR 数为各日报中单独列出的“热点”或“重要”条目，不代表当日仓库所有活动总量。OpenCode 日报提及“共更新 50 个 Issue 和 50 个 PR”，但横向对比统一采用精选条目数。*

## 3. 共同出现的功能方向

- **Token 消耗与成本飙升**：Claude Code（#42249）、OpenAI Codex（#14593, #28879）、Kimi Code CLI（#1994, #2472）均报告异常快的 Token 消耗或费率上涨，社区讨论激烈（Codex 单一 Issue 评论达 620 条）。用户对 AI 编程工具的经济性高度敏感。
- **MCP / Hook / 插件配置自动重载和子代理传递**：Claude Code（#24057）、OpenAI Codex（#19871）、Gemini CLI（#21968, #27964）、Kimi Code CLI（#1942 已修复）、OpenCode（#28567）均涉及 MCP 或 Hook 配置修改后需要重启会话、子代理未继承配置、跨服务器 URI 混淆等问题，表明 MCP 生态集成仍处于早期磨合阶段。
- **Windows 平台兼容性问题**：Claude Code（插件安装失败 #67595、订阅识别失败 #69786、模型被静默修改 #66407）、OpenAI Codex（apply_patch 失败 #29072）、GitHub Copilot CLI（AppImage 环境变量泄漏 #3925）、OpenCode（TUI 崩溃 #32706）均出现 Windows 特定 bug，影响企业用户和桌面开发者。
- **模型设置/配置被静默修改**：Claude Code（Windows Cowork 模型被改为 Opus #66407）、Qwen Code（升级后自动切换高价模型 #5819）、Gemini CLI（用户配置被忽略 #22267）引发用户对行为透明度的强烈不满。
- **移动端/远程会话功能缺失**：Claude Code（移动端多账户切换 #36151, 372 👍）、GitHub Copilot CLI（移动端远程无法发送 Shell 命令 #3922-3924）均暴露移动协作短板。

## 4. 差异化定位分析

| 工具 | 核心侧重点 | 目标用户 | 技术路线特点 |
|------|-----------|---------|-------------|
| **Claude Code** | 多模型（Opus/Sonnet）、技能系统、MCP/Hooks、跨平台终端 | 企业开发者、高级个人用户 | 注重代理能力和上下文管理（/rewind、Advisor）；社区驱动功能迭代 |
| **OpenAI Codex** | GPT-5.5 模型、多代理模式（Ultra 推理努力）、MCP 认证枚举、Rust 架构 | 已有 OpenAI 订阅的开发者 | 强调性能和规模化（Alpha 频繁发布）；Rate-limit 和 Token 成本问题突出 |
| **Gemini CLI** | 子代理行为管理、自动记忆（Auto Memory）、安全脱敏、ADK 集成 | Google 生态用户、安全敏感团队 | 侧重 Agent 透明度和可控性（如工具注册发现）；浏览器子代理是特色 |
| **GitHub Copilot CLI** | 与 GitHub 生态深度绑定、插件/Skills、企业级配置推送 | GitHub 企业用户、团队 | 强调与 IDE/Codespaces 协同；移动端和终端渲染是当前短板 |
| **Kimi Code CLI** | K2.6 模型、简洁架构、MCP 工作流兼容 | 对 Token 成本敏感的 Moonshot 用户 | 社区规模较小，但对 MCP 子代理传递和上下文压缩问题反馈集中 |
| **OpenCode** | MCP 完整客户端（资源模板/订阅/进度）、开源、本地优先 | 开源社区、自托管爱好者 | 积极跟进 MCP 协议最新特性；TUI 稳定性和隐私默认设定是讨论热点 |
| **Qwen Code** | 多智能体、语音输入、技能自动生成、安全模式 | Qwen 模型用户、自托管 LLM 用户 | 功能覆盖面广（/loop、todos、语音）；安全漏洞（路径遍历）和配置静默变更是痛点 |

## 5. 社区活跃度记录

- **Release 数量**：OpenAI Codex 5 个（Alpha）> Claude Code 2 个 > GitHub Copilot CLI / OpenCode / Qwen Code 各 1 个 > Gemini CLI / Kimi Code CLI 0 个。Codex 更新最频繁，但均为 Alpha 版本。
- **社区讨论热度（单个 Issue 最高评论/点赞）**：OpenAI Codex 的 #14593（620 评论/271 👍）和 #28879（133 评论/269 👍）远超其他工具；Claude Code 的 #36151（106 评论/372 👍）点赞数最高；Gemini CLI 的 #22323（8 评论）相对温和，但多个 P1 bug 被标记。
- **维护者回应**：OpenCode 合并了 10 条 PR，其中多个来自社区贡献者（@Nomadcxx 系列）；Qwen Code 合并了 10 条 PR，修复了安全漏洞和滚动闪烁；Kimi Code CLI 合并了 2 条 PR，修复了 MCP 配置传递问题。Claude Code 和 Copilot CLI 的 PR 数量较少，但均有版本发布。

综合判断，**OpenAI Codex 和 Claude Code** 在用户量级和讨论烈度上领先；**OpenCode 和 Qwen Code** 在社区贡献者协作效率上表现突出；**Kimi Code CLI** 社区虽小但反馈集中。

## 6. 有证据支撑的观察

1. **Token 成本是跨工具的“头号公敌”**：Claude Code（#42249，17 👍）、Codex（#14593，271 👍；#28879，269 👍）、Kimi（#1994，7 👍）三个独立社区在同一天集中投诉 Token 消耗异常或费率上涨，且 Codex 单一 Issue 评论达 620 条，表明该问题已从个体现象演变为影响用户决策的系统性风险。

2. **MCP/Hook 集成稳定性不足，配置变更重启代价过高**：Claude Code（#24057）要求修改 MCP/Hook 配置文件后必须重启会话；OpenCode（#28567）请求完整 MCP 客户端能力；Kimi 于今日合并 PR #1942 修复子代理未继承 MCP 配置。这表明 MCP 生态虽被广泛采纳，但配置热加载和子代理继承仍是普遍短板。

3. **Windows 平台成为“第二公民”**：今日至少有 4 个工具出现 Windows 特定 Bug（Claude Code 3 个、Codex 1 个、Copilot 1 个、OpenCode 1 个），涵盖安装失败、订阅认证、模型配置被静默修改、TUI 崩溃、环境变量泄漏等场景。Windows 企业用户群体受影响的广度值得关注。

4. **模型配置被静默修改引发信任危机**：Claude Code（#66407，Windows Cowork 模型被改为 Opus）和 Qwen Code（#5819，升级后自动切换高价模型）均报告模型选择未经用户同意被更改，且用户无法回退。这种“静默变更”行为直接冲击用户对工具可预测性的信任。

5. **移动/远程协作功能是差异化缺口**：Claude Code 用户强烈要求多账户切换（372 👍），Copilot CLI 用户反馈移动端无法发送 Shell 命令或上传文件（#3922-3924）。移动端支持在多个工具中尚未形成成熟方案，可能成为下一阶段竞争焦点。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是为您生成的 2026-06-25 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-06-25

## 今日更新概览

Claude Code 今日发布了 v2.1.191 和 v2.1.190 两个小版本更新，主要包含 `/rewind` 支持恢复 `/clear` 后的对话、修复流式响应时滚动条跳动等问题。社区讨论活跃，截至今天共有 50 条活跃议题，其中关于移动端多账户切换、VSCode 扩展与 Bedrock 的兼容性问题以及技能子目录支持的讨论热度最高。

## 版本发布

### v2.1.191
- **新增**: 对 `/rewind` 命令的支持，现在可以恢复使用 `/clear` 命令清除之前的对话。
- **修复**: 在流式响应过程中，阅读早期输出内容时滚动位置自动跳至底部的错误。
- **修复**: 后台代理在被停止后“复活”的问题——从当前任务面板停止代理后，其进程将被彻底终止。
- **链接**: [查看发布详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

### v2.1.190
- **内容**: Bug 修复和可靠性改进。
- **链接**: [查看发布详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.190)

## 社区热点 Issues

1.  **[Feature] 移动端多账户切换** ([#36151](https://github.com/anthropics/claude-code/issues/36151))
    - **影响场景**: 拥有多个 Anthropic 账号的用户，在移动端希望在不共享邮箱的情况下快速切换账号。
    - **社区反应**: **106 条评论 / 372 👍**。这是目前社区关注度最高、讨论最激烈的议题之一，用户普遍认为这是移动端体验的核心缺失功能。

2.  **[Bug] Bedrock 用户遭遇 VSCode 扩展流中断** ([#52151](https://github.com/anthropics/claude-code/issues/52151))
    - **问题范围**: 通过 AWS Bedrock 使用 Opus 4.7 (1M上下文) 的 Mac 用户，在 VSCode GUI 中会遭遇流式输出中断（0 事件），并回退显示 `Unhandled case: [object Object]` 错误。
    - **影响**: 严重阻塞了通过 Bedrock 使用 Opus 模型进行大型代码库开发的用户。**48 条评论 / 34 👍**。

3.  **[Feature] 技能（Skills）支持子目录** ([#10238](https://github.com/anthropics/claude-code/issues/10238))
    - **影响场景**: 用户希望将特定技能（如代码规范、测试框架）组织在子目录中，以便于管理和复用，但目前仅支持平铺存放。
    - **社区反应**: 该需求已持续 8 个月，**45 条评论 / 159 👍**，反映了团队和组织用户对技能模块化管理的强烈需求。

4.  **[Feature] 集成 GitLab** ([#12346](https://github.com/anthropics/claude-code/issues/12346))
    - **影响场景**: 大量使用 GitLab 进行代码托管和 CI/CD 的团队，希望 Claude Code 能直接连接到 GitLab 仓库、处理合并请求（MRs）并支持移动端操作。
    - **社区反应**: **44 条评论 / 108 👍**，巩固了“对 GitHub 之外的主流 Git 平台集成”是社区的核心诉求之一。

5.  **[Bug] MCP/Hooks/插件配置修改后需重启** ([#24057](https://github.com/anthropics/claude-code/issues/24057))
    - **痛点**: 每次调整 MCP 服务器、Hook 或插件的配置文件，都必须重启整个对话会话，导致上下文丢失。有用户反馈在一次开发中因此重启了三次。
    - **社区反应**: **28 条评论 / 13 👍**。虽然是老问题，但持续有用户在讨论，强调这是影响开发“心流”的关键问题。

6.  **[Bug] 令牌消耗异常过快** ([#42249](https://github.com/anthropics/claude-code/issues/42249))
    - **痛点**: 用户反馈正常开发任务（读文件、编辑代码、运行 git 命令）导致令牌配额异常消耗，一个小时左右就用光日限额。
    - **社区反应**: **25 条评论 / 17 👍**。此问题直接关系到用户对 Pro 订阅性价比的感知，社区反响强烈。

7.  **[Bug] Advisor 功能触发时 API 无响应** ([#69238](https://github.com/anthropics/claude-code/issues/69238))
    - **问题范围**: 使用 Sonnet 模型时，触发 Advisor 功能（会调用 Opus 4.8）常常导致 “No response from API” 错误，并强制等待 2 分 25 秒重试。
    - **社区反应**: 近期新报 Bug，**24 条评论 / 34 👍**，说明该问题影响面较广，用户对“等待加重试”的机制不满。

8.  **[Bug] Windows Defender 导致插件安装失败** ([#67595](https://github.com/anthropics/claude-code/issues/67595))
    - **问题范围**: 在开启 Windows Defender 实时保护的 Windows 11 企业版上，非管理员用户执行 `/plugin install` 会因 `EBUSY`（文件重命名冲突）而失败。
    - **影响**: 阻碍了 Windows 企业用户的使用，尤其是在受 IT 管控的机器上。

9.  **[Bug] Windows 应用悄然修改 Cowork 模型** ([#66407](https://github.com/anthropics/claude-code/issues/66407))
    - **问题范围**: Windows 桌面版 Claude Code 在更新后，Cowork 空间的模型从 Sonnet 4.6 被改为 Opus 4.7，且模型选择器变为灰色不可选。
    - **影响**: 对于成本敏感或希望使用更快模型的用户，此行为破坏了用户预期且缺乏透明度。

10. **[Bug] Windows 端 Pro 订阅未被识别** ([#69786](https://github.com/anthropics/claude-code/issues/69786))
    - **问题范围**: 在 Windows 系统上，付费的 Pro 订阅用户持续遭遇 `missing user:profile scope` 或 `subscription auth not active` 错误。
    - **影响**: 直接导致付费用户无法使用核心功能，是影响用户体验的严重问题。

## 重要 PR 进展

1.  **修复服务器速率限制** ([#70634](https://github.com/anthropics/claude-code/pull/70634))
    - **内容**: 解决了正常使用过程中因服务器限速导致的问题。关闭了 Issue #70631。

2.  **处理 Anthropic API 限速头部信息** ([#70633](https://github.com/anthropics/claude-code/pull/70633))
    - **内容**: 改进了对 Anthropic API 返回的限速（Rate Limiting）头部信息的处理逻辑。关闭了 Issue #70630。

3.  **安全修复：插件中存在用户可控URL风险** ([#70582](https://github.com/anthropics/claude-code/pull/70582))
    - **内容**: 修复了 `plugins/security-guidance/hooks/llm.py` 中的一个严重安全漏洞（CRITICAL），该漏洞可能导致应用接受用户控制的URL。

4.  **纠正拼写错误** ([#66854](https://github.com/anthropics/claude-code/pull/66854))
    - **内容**: 一个修正代码中拼写错误的 PR，细节未详细说明。

5.  **安全修复：gitutil.py 子进程调用清理** ([#70538](https://github.com/anthropics/claude-code/pull/70538))
    - **内容**: 修复了 `plugins/security-guidance/hooks/gitutil.py` 中的严重安全漏洞（CRITICAL），涉及对子进程调用的输入进行了清理。

## 功能需求归类

- **访问与平台支持**:
    - 移动端多账号切换 ([#36151](https://github.com/anthropics/claude-code/issues/36151))
    - JetBrains IDE 插件 ([#47166](https://github.com/anthropics/claude-code/issues/47166))
    - 添加对 GitLab 仓库和 MR 的支持 ([#12346](https://github.com/anthropics/claude-code/issues/12346))
    - 远程控制：终端可附加到手机发起的会话 ([#70699](https://github.com/anthropics/claude-code/issues/70699))
- **性能与可靠性**:
    - VSCode 扩展在 Bedrock 场景下的流式中断问题 ([#52151](https://github.com/anthropics/claude-code/issues/52151))
    - 令牌消耗异常过快，导致配额迅速用尽 ([#42249](https://github.com/anthropics/claude-code/issues/42249))
- **配置与体验优化**:
    - 技能（Skills）支持子目录组织结构 ([#10238](https://github.com/anthropics/claude-code/issues/10238))
    - MCP/插件/钩子配置文件变更后应自动重载，避免重启 ([#24057](https://github.com/anthropics/claude-code/issues/24057))
    - 允许用户禁用启动时的欢迎横幅 ([#2254](https://github.com/anthropics/claude-code/issues/2254))
    - 启用上下文无关的终端滚动/查找功能，替代原生终端滚动条 ([#70309](https://github.com/anthropics/claude-code/issues/70309))
- **模型与功能增强**:
    - 提供 `opusplan` 的 1M 上下文预设支持 Sonnet 4.6 ([#53987](https://github.com/anthropics/claude-code/issues/53987))
    - 允许 Claude 主动触发上下文压缩 ([#33026](https://github.com/anthropics/claude-code/issues/33026))

## 开发者关注点

- **成本与性能焦虑**: 令牌消耗异常 ([#42249](https://github.com/anthropics/claude-code/issues/42249)) 的问题直接点中了当前用户对 AI 编程工具成本的敏感神经，是社区讨论和点赞的热点。
- **操作流畅性受阻**:
    - “配置修改-重启”循环 ([#24057](https://github.com/anthropics/claude-code/issues/24057)) 严重影响开发心流。
    - 在 VSCode 等主流 IDE 中，通过 Bedrock 使用高端模型时的稳定性不足 ([#52151](https://github.com/anthropics/claude-code/issues/52151))，限制了此类用户的使用场景。
    - 终端内滚动和视图操作体验不佳 ([#70309](https://github.com/anthropics/claude-code/issues/70309))，对重度终端用户造成困扰。
- **Windows 平台兼容性仍为痛点**: 多个独立 Bug（如插件安装失败 [#67595](https://github.com/anthropics/claude-code/issues/67595)、订阅识别失败 [#69786](https://github.com/anthropics/claude-code/issues/69786)、模型设置被静默覆盖 [#66407](https://github.com/anthropics/claude-code/issues/66407)）表明，Claude Code 在 Windows 平台上的稳定性和行为一致性是开发者关注的重点。
- **跨平台与跨应用行为不一致**: 用户反馈 CLI 工作正常，但在 VSCode GUI 中出错（[#52151](https://github.com/anthropics/claude-code/issues/52151)），以及在 CLI 和 VSCode 扩展中提示队列行为不同（[#69184](https://github.com/anthropics/claude-code/issues/69184)），说明维护不同平台/界面之间的体验一致性是一个关键挑战。
- **子代理的模型继承问题**: `opusplan` 等计划模式下的子代理（如 Explore）可能会错误地继承计划阶段的升级模型，而非使用其自身定义的模型，可能导致意外的成本或行为（[#67942](https://github.com/anthropics/claude-code/issues/67942)）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-06-25

## 今日更新概览

过去24小时内，Codex 发布了5个 Rust 版本的 Alpha 更新（0.143.0-alpha.11 至 .15），社区 Issues 和 PRs 活跃度较高。Issue 讨论集中在 token 消耗异常、Rate-limit 成本飙升以及 MCP/子代理稳定性问题上；PR 方面则围绕多代理模式、Ultra 推理努力、MCP 认证枚举、以及 exec-server 并发处理等方向展开。

## 版本发布

过去24小时内发布了5个 Rust 版本的 Alpha 更新：

- `rust-v0.143.0-alpha.11` 至 `rust-v0.143.0-alpha.15`
  均为“Release 0.143.0-alpha.*”简注，未附带详细变更日志。预计为修复或小幅迭代。

## 社区热点 Issues（10条）

### 1. [#14593] Burning tokens very fast（🔥 620 评论 / 271 👍）
- **作者**: @cy-ooi88
- **影响场景**: Business 用户在使用 VS Code 扩展时，token 消耗异常快速，会话预算在几分钟内耗尽。
- **社区反应**: 大量用户表示遇到相同问题，形成持续讨论。
- [链接](https://github.com/openai/codex/issues/14593)

### 2. [#28879] Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x since June 16（133 评论 / 269 👍）
- **作者**: @mihneaptu
- **影响场景**: Plus 用户反映自6月16日起，同一模型（gpt-5.5）下每个 token 的成本上升 10~20 倍，原本可支持 20+ 次对话的预算现在仅够 2~3 次。
- **社区反应**: 用户提供日志证据，要求 Open AI 给出解释。
- [链接](https://github.com/openai/codex/issues/28879)

### 3. [#13733] Background process polling wastes tokens（29 评论 / 23 👍）
- **作者**: @jitlabs-sg
- **影响场景**: 后台进程（如 `cargo build`）运行时，Codex 进入轮询循环，每次状态检查都会携带完整对话历史作为 API 请求，导致大量 token 浪费。
- [链接](https://github.com/openai/codex/issues/13733)

### 4. [#21753] Full Claude Code Hook Parity (29+)（18 评论 / 17 👍）
- **作者**: @oxysoft
- **影响场景**: 用户希望 Codex 的 Hook 系统达到与 Claude Code 同等的完备度（覆盖生命周期、自动化等），该 Issue 作为跟踪清单。
- [链接](https://github.com/openai/codex/issues/21753)

### 5. [#29072] Windows Codex App: apply_patch fails because sandbox setup cannot launch（17 评论 / 16 👍）
- **作者**: @zane-xin
- **影响场景**: Windows 平台上，`apply_patch` 操作失败，因为沙箱安装程序无法从包路径启动。用户不得不手动解压文件，影响工作效率。
- [链接](https://github.com/openai/codex/issues/29072)

### 6. [#2916] OpenAI service tier support（17 评论 / 50 👍）
- **作者**: @jakvbs
- **影响场景**: 用户希望 Codex CLI 能支持配置 API 服务层（service_tier），以便在不同使用场景下优化成本与延迟。需求持续关注近一年。
- [链接](https://github.com/openai/codex/issues/2916)

### 7. [#15299] Support inbound MCP notifications routed into active CLI session（14 评论 / 7 👍）
- **作者**: @jasny
- **影响场景**: 希望外部通道（如 MCP 通知）能将入站消息推送至正在运行的 Codex CLI 会话中，目前仅支持 Codex 调用 MCP 工具，无反方向路由。
- [链接](https://github.com/openai/codex/issues/15299)

### 8. [#29356] Context compaction loses operational continuity（13 评论）
- **作者**: @1dZb1
- **影响场景**: Codex Desktop 的自动上下文压缩会丢失长任务的操作连续性，用户建议保留最后5个操作步骤，避免中断工作流。
- [链接](https://github.com/openai/codex/issues/29356)

### 9. [#24389] multi_agent_v1.close_agent can hang for hours（11 评论）
- **作者**: @DreamZzz
- **影响场景**: 父线程在调用 `close_agent` 关闭无响应的子代理时可能挂起超过8小时，同时用户没有收到错误反馈。
- [链接](https://github.com/openai/codex/issues/24389)

### 10. [#19871] MCP tool invocation regressed for custom/local providers in v0.117.0+（10 评论 / 5 👍）
- **作者**: @neurostream
- **影响场景**: 面向 Ollama 等自定义/本地模型提供商的 MCP 工具调用在 v0.117.0 后变得不可靠，用户确认多个版本仍有问题。
- [链接](https://github.com/openai/codex/issues/19871)

## 重要 PR 进展（10条）

### 1. [#29924] Represent MCP authentication with an enum
- **作者**: @aibrahim-oai
- **内容**: 将 MCP 认证从布尔值（`use_chatgpt_auth`）改为枚举，以清晰区分 OAuth 和 ChatGPT 会话两种认证流。
- [链接](https://github.com/openai/codex/pull/29924)

### 2. [#29923] Support external clock sleeps
- **作者**: @rka-oai
- **内容**: 将 `clock.sleep` 路由至外部时钟提供者，最大时长提升至12小时；新增 `currentTime/sleep` 通知和 `currentTime/wake` 请求。
- [链接](https://github.com/openai/codex/pull/29923)

### 3. [#29910] Nest sleep config under current time reminder
- **作者**: @rka-oai
- **内容**: 将 sleep 工具的启用配置从顶级 `[features].sleep_tool` 迁移至 `[features.current_time_reminder].sleep_tool`，并移除独立的 `Feature::SleepTool` 标志。
- [链接](https://github.com/openai/codex/pull/29910)

### 4. [#29710] Derive multi-agent mode from Ultra effort（已 code-reviewed）
- **作者**: @shijie-oai
- **内容**: 当 Ultra 选择主动委派时，不再保留客户端单独选择的多代理模式，而是从 turn 的推理努力中派生，使生命周期决策统一。
- [链接](https://github.com/openai/codex/pull/29710)

### 5. [#29683] Add managed new-thread model settings
- **作者**: @hefuc-oai
- **内容**: 为 App 新线程添加管理员可配置的默认模型、推理努力和服务层，优先级高于 `config.toml`，但用户显式选择仍可覆盖。
- [链接](https://github.com/openai/codex/pull/29683)

### 6. [#29709] Add gated Ultra reasoning effort（已 code-reviewed）
- **作者**: @shijie-oai
- **内容**: Ultra 推理努力作为产品级选择，仅当活跃模型目录和 `multi_agent_mode` 特性均启用时才可发现，无需新后端推理 token。
- [链接](https://github.com/openai/codex/pull/29709)

### 7. [#29907] Namespace sleep under clock（已关闭）
- **作者**: @rka-oai
- **内容**: 将 sleep 工具从顶层 `sleep` 重命名为 `clock.sleep`，与 `clock.curr_time` 保持在统一命名空间，更新集成测试。
- [链接](https://github.com/openai/codex/pull/29907)

### 8. [#26705] TUI Plugin Sharing 5 - polish remote plugin catalog rows（已 code-reviewed）
- **作者**: @canvrno-oai
- **内容**: 插件分享 PR 栈的最后一环：对远程插件目录行和标签页进行 TUI 优化，如 admin 禁用的插件显示为只读，admin 安装的插件计数与排序与已安装插件一致。
- [链接](https://github.com/openai/codex/pull/26705)

### 9. [#29754] Preserve live turn history across reconnects
- **作者**: @JaviSoto
- **内容**: 线程恢复时重建累积的、权威的 turn 历史，确保断线重连后对话记录连续。
- [链接](https://github.com/openai/codex/pull/29754)

### 10. [#29930] Track selected capability readiness per executor
- **作者**: @jif-oai
- **内容**: 为每个执行器绑定选择的能力根，提供线程内单一真实源，防止重复解析和不一致状态。
- [链接](https://github.com/openai/codex/pull/29930)

## 功能需求归类

从近期 Issues 和 PRs 中，用户反复提到的功能方向包括：

| 方向 | 代表 Issue/PR |
|------|---------------|
| **Token 消耗与 Rate-limit 优化** | #14593, #28879, #13733 |
| **MCP 双向通信与认证增强** | #15299, #19871, #29924 |
| **多代理/子代理管理与稳定性** | #24389, #19197, #29710 |
| **跨平台兼容性（Windows/macOS）** | #29072, #25667, #26990 |
| **上下文压缩与连续性** | #29356, #28495, #28592 |
| **服务层/模型配置灵活化** | #2916, #29683, #29709 |
| **插件/Hook 系统完善** | #21753, #26705 |
| **Sandbox 权限与审批流** | #23393, #29915 |
| **会话同步与重连** | #14722, #29754 |
| **背景进程与异步任务支持** | #2062, #22003 |

注意：以上归类基于现有 Issue 标签和讨论，不代表 Open AI 官方路线图。

## 开发者关注点

1. **Token 成本飙升**：两位不同订阅等级的用户（Business、Plus）均报告 token 消耗异常，其中一个 issue 的评论数达 620 条，说明该问题影响广泛且缺乏临时解决方案。
2. **Windows 平台稳定性**：沙箱安装、权限弹窗、`apply_patch` 失败等问题集中出现，Windows 用户工作流程频繁受阻。
3. **子代理挂起无反馈**：`close_agent` 长时间阻塞且无错误提示，影响自动化流水线可靠性。
4. **MCP 工具调用回归**：针对自定义模型提供商（如 Ollama）的 MCP 调用在多个版本中不可靠，开发者需被迫回退旧版本。
5. **上下文压缩导致工作流中断**：自动压缩丢失操作步骤，用户呼吁保留关键历史片段。
6. **缺少服务层控制**：用户无法在 CLI 中配置 API 服务层（service_tier），限制成本优化。
7. **应用退出后残留文件**：macOS 应用每次启动后残留约 965MB 的 `code_sign_clone` 目录，占用磁盘空间。

---

*以上内容基于 GitHub 仓库 openai/codex 截至 2026-06-25 的公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026 年 6 月 25 日 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-25

## 今日更新概览

过去 24 小时内，社区主要围绕 Agent（代理）系统的稳定性、安全性以及自动记忆（Auto Memory）功能的质量问题进行讨论。维护者团队继续推进性能优化和安全加固 PR，但今日无新版本发布。社区反馈主要集中在子代理行为异常、终端卡死以及配置覆盖失效等具体使用场景上。

## 社区热点 Issues

以下挑选了 10 个值得记录的 Issue，反映了用户在不同场景下遇到的具体问题。

1.  **子代理达到最大轮次后错误报告为“成功”**
    *   **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **影响场景**: 当 `codebase_investigator` 等子代理在达到 `MAX_TURNS` 限制而被中断时，系统错误地将其终止原因报告为“GOAL”并标记为成功，导致用户无法感知任务被中断。
    *   **社区反应**: 该问题被标记为 `kind/bug` 和 `priority/p1`，评论数达到 8 条，说明这是一个影响任务可靠性的严重问题，社区对此表示关注。

2.  **通用代理（Generalist agent）挂起**
    *   **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **影响场景**: 当 Gemini CLI 将任务（如创建文件夹）委托给通用代理时，代理会无限期挂起，用户需要手动取消。
    *   **社区反应**: 此问题获得了 8 个 👍，表明影响范围较广。用户 `@turmanticant` 提供了一个临时解决方案：指示模型不要调用子代理。目前该问题状态为 `status/need-retesting`，等待重新测试验证。

3.  **Shell 命令执行后卡在“等待输入”状态**
    *   **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **影响场景**: 极简单的 Shell 命令执行完成后，Gemini CLI 仍显示命令正在运行并处于“Awaiting user input”状态，造成挂起。
    *   **社区反应**: 这是影响日常使用流畅性的痛点，被标记为 `priority/p1` 和 `kind/bug`。用户对命令行工具的反馈中，此类执行状态同步问题比较敏感。

4.  **浏览器子代理在 Wayland 下失败**
    *   **链接**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **影响场景**: 在 Wayland 显示协议下，浏览器子代理（Browser Agent）无法正常工作，导致自动化浏览器任务失败。
    *   **社区反应**: 此 Issue 标记了 `agent/browser`，直接关联到浏览器自动化功能的兼容性。Wayland 作为 Linux 主流显示协议的普及，使得这个问题影响面较广。

5.  **Gemini 不使用自定义技能和子代理**
    *   **链接**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **影响场景**: 用户自定义了 Gradle、Git 等技能，但 Gemini CLI 在执行相关任务时不会主动调用这些技能或子代理，仅在用户明确指示时才会使用。
    *   **社区反应**: 这是一个用户体验问题，用户希望 Agent 能更智能地自动选择合适的工具，违背了通过技能扩展功能的设计初衷。目前该问题状态为 `status/need-retesting`。

6.  **工具数量超过 128 个时出现 400 错误**
    *   **链接**: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **影响场景**: 当启用的工具数量超过 128 个时，Gemini CLI 会遇到 400 错误。作者期望 Agent 能更智能地限制作用域内的工具数量。
    *   **社区反应**: 该问题影响到需要大量工具扩展的高级用户和工作流，是功能伸缩性的关键卡点。建议开发者关注工具注册与发现机制。

7.  **Agent 应该阻止/劝阻破坏性操作**
    *   **链接**: [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
    *   **影响场景**: Agent 在某些场景下（如复杂 Git 操作、数据库维护）会使用 `git reset`、`--force` 等可能造成破坏的命令，而缺乏更安全的替代方案建议。
    *   **社区反应**: 社区成员 `@abhipatel12` 提出了增强 Agent 安全意识和决策能力的建议，被标记为 `kind/customer-issue`。这表明用户越来越关注 Agent 在敏感操作上的行为安全性。

8.  **浏览器代理忽略 `settings.json` 配置覆盖**
    *   **链接**: [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
    *   **影响场景**: 用户在全局或项目级 `settings.json` 中对浏览器代理的 `maxTurns` 等参数进行了配置，但代理完全忽略了这些覆盖设置。
    *   **社区反应**: 这是一个配置管理 Bug，影响用户的个性化定制能力。`AgentRegistry` 未能正确应用合并后的配置，导致用户期望与实际行为不符。

9.  **自动记忆（Auto Memory）的日志安全问题**
    *   **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **影响场景**: Auto Memory 在将本地转录内容发送到模型前，未能进行确定性的机密信息脱敏处理，且现有日志可能记录过多内容，存在安全风险。
    *   **社区反应**: 该问题被标记为 `area/security`，属于安全范畴。`@SandyTao520` 强调了在数据进入模型上下文之前就进行脱敏处理的重要性。

10. **自动记忆（Auto Memory）对低信号会话的无限重试**
    *   **链接**: [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    *   **影响场景**: 只有当提取代理成功读取会话转录后，Auto Memory 才会将其标记为“已处理”。如果代理评估某个会话“信号低”而跳过，该会话会保持“未处理”状态，并在后续被不断重新发现和分析，导致无效循环和资源浪费。
    *   **社区反应**: 此问题与 #26523、#26516 共同构成 Auto Memory 系统的质量改进议题。社区对后台智能系统的高效性和可靠性提出了明确的优化需求。

## 重要 PR 进展

以下挑选了 10 个重要的 PR，涵盖了安全、性能和功能增强。

1.  **安全修复：强制大小写不敏感敏感路径黑名单和 VS Code HITL**
    *   **链接**: [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)
    *   **说明**: 针对绕过 `.git`、`.env` 等敏感目录黑名单的漏洞，实现了严格的大小写不敏感校验。
2.  **性能优化：优化 VirtualizedList 并修复点击处理**
    *   **链接**: [#27636](https://github.com/google-gemini/gemini-cli/pull/27636)
    *   **说明**: 优化了大列表（VirtualizedList）的渲染和滚动性能，并改进了静态项目的点击处理，旨在提升终端 UI 在高数据量下的流畅度。
3.  **新功能：实现 Cloud Run Webhook 接入服务**
    *   **链接**: [#28015](https://github.com/google-gemini/gemini-cli/pull/28015)
    *   **说明**: 为 Caretaker Agent 实现了 Cloud Run Webhook 服务，作为 GitHub Webhooks 的入口，进行签名验证、Firestore 存储和 Pub/Sub 消息发布，增强 CI/CD 自动化能力。
4.  **新功能：添加工具注册发现功能**
    *   **链接**: [#28113](https://github.com/google-gemini/gemini-cli/pull/28113)
    *   **说明**: 新增一个小的工具注册表，用于评估报告和 AST 提取，便于系统性地管理内置工具，并抽象出 eval 断言中使用到的工具名称。
5.  **安全修复：解决“思想泄露”问题**
    *   **链接**: [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    *   **说明**: 通过剥离清洗后的历史记录中的模型内部推理（thoughts），解决模型内部思考泄漏到纯文本历史中的问题，避免后续轮次模型混乱或陷入循环。
6.  **Bug 修复：修复 `no_proxy` 测试**
    *   **链接**: [#28131](https://github.com/google-gemini/gemini-cli/pull/28131)
    *   **说明**: 修复了在已设置 `NO_PROXY` 环境变量的环境中运行测试会失败的问题，确保测试环境的纯净性。
7.  **路径修复：解决 `@` 引用文件的防御性路径解析**
    *   **链接**: [#28053](https://github.com/google-gemini/gemini-cli/pull/28053)
    *   **说明**: 修复了当模型传递 `@policies/new-policies.txt` 这类路径时，`read_file` 等工具报“文件未找到”的生产环境 Bug。
8.  **MCP 修复：限定资源解析范围防止跨服务器 URI 混淆**
    *   **链接**: [#27964](https://github.com/google-gemini/gemini-cli/pull/27964)
    *   **说明**: 修复了多 MCP 服务器场景下的安全隐患，当 URI 冲突时，回退查找不再返回错误结果，改为失败关闭，避免可信服务器资源被“影子”。
9.  **新功能：实现 ADK Agent Session**
    *   **链接**: [#26680](https://github.com/google-gemini/gemini-cli/pull/26680)
    *   **说明**: 实现了 ADK（Agent Development Kit）代理会话的功能，为未来的 Agent 开发框架集成奠定基础。
10. **Bug 修复：改进“安装源未找到”错误信息**
    *   **链接**: [#28130](https://github.com/google-gemini/gemini-cli/pull/28130)
    *   **说明**: 改进了 `inferInstallMetadata` 函数抛出的错误信息，使其更清晰地指向正确的 GitHub URL 和身份验证修复方案。

## 功能需求归类

从近期的 Issues 中，可以归纳出以下用户反复提到的功能方向：

*   **安全与合规**: 用户持续关注 Agent 行为的安全性，包括对敏感文件/目录的确定性脱敏（#26525）、防止 Agent 执行破坏性操作（#22672）、以及 MCP 跨服务器资源混淆（#27964）等。
*   **Agent 行为管理**: 核心诉求是让 Agent 更智能、更可控。这包括 Agent 能自动识别并调用合适的技能/子代理（#21968）、更清晰地报告任务中断原因（#22323）、以及尊重配置覆盖（#22267）。
*   **系统稳定性与性能**: 用户对挂起（#21409、#25166）和大列表性能问题（#27636）的反馈，指向了对基础底层稳定性和 UI 交互流畅度的强烈需求。
*   **自动记忆（Auto Memory）系统改进**: 用户指出了该系统的多个问题，如低质量会话重复处理（#26522）、无效补丁处理（#26523）以及日志安全性（#26525），表明该功能仍需大量打磨。

## 开发者关注点

根据近期反馈，开发者社区的一些主要痛点或高频需求包括：

*   **Agent 挂起与无响应**：通用代理和 Shell 命令执行后的挂起问题是影响工作效率的最严重 bug，开发者希望得到根本解决。
*   **子代理行为透明度**：开发者需要一个更透明的子代理执行过程，尤其是在出现错误或达到限制时，报告应准确反映中断原因，而非误报成功。
*   **Agent 的“工具意识”**：开发者花时间创建了技能和子代理，但 Agent 不主动使用它们，这让技能扩展的价值大打折扣。开发者期望 Agent 能理解并善用现有工具。
*   **配置覆盖的权威性**：用户自定义的 `settings.json` 配置应具有最高优先级，Agent 不得忽略用户明确设置的参数，这是用户体验的基础保障。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是基于您提供的 GitHub 数据生成的 2026-06-25 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-25

## 今日更新概览

昨日发布了 v1.0.65 补丁版本，主要修复了 `/cd` 工作目录持久化及命令参数中的权限提示问题。社区讨论热度主要集中在插件 Hook 行为、模型配额与选择、终端渲染缺陷以及移动端远程会话的功能缺失上。此外，一个关于自动化 Issue 分类的 PR 已被合并。

## 版本发布

### v1.0.65
- **发布时间：** 2026-06-24
- **主要更新：**
    - 修复 `/cd` 命令：现在会持久化工作目录，恢复会话时会自动回到该目录，并发现新目录中的自定义 Agent。
    - 修复权限提示：使用带有斜杠前缀字符串参数的命令（如 `--body "/azp run"`）不再触发不必要的文件系统权限弹窗。
    - 全屏时间线显示保持稳定。
- **链接：** [Release v1.0.65](https://github.com/github/copilot-cli/releases/tag/v1.0.65)

## 社区热点 Issues

1. **[插件] Hook 无法静默重写命令**
    - **Issue #2643**：使用 `preToolUse` Hook 通过 `updatedInput` 静默重写命令时，即使设置了 `permissionDecision: allow`，CLI 仍会弹出确认对话框。此问题导致自动化工作流被中断，社区有 11 条讨论，表明该问题对插件开发者影响较大。
    - **链接：** https://github.com/github/copilot-cli/issues/2643

2. **[功能请求] 支持技能（Skills）子文件夹**
    - **Issue #1632**：用户希望能在 `skills` 文件夹下创建子文件夹来组织大量技能，当前仅支持扁平结构。该建议获得了 21 个 👍，是社区呼声最高的功能请求之一，反映了用户管理中大型技能库的迫切需求。
    - **链接：** https://github.com/github/copilot-cli/issues/1632

3. **[Bug] 模型全部显示为“已阻止/已禁用”**
    - **Issue #3832**：在 6月16日 GitHub Copilot 服务中断后，模型选择界面中的所有模型均显示为“Blocked/Disabled”，导致无法开启新会话。该问题引发了关于服务恢复后状态同步的讨论。
    - **链接：** https://github.com/github/copilot-cli/issues/3832

4. **[Bug] 模型配额扣除计算错误**
    - **Issue #3881**：用户反馈在使用 Claude Sonnet 4.5 (6x 倍率) 模型时，单次请求被扣除了 5% 的配额，而非预期的 2%。用户要求返还多扣的配额，这关乎用户付费权益的准确性。
    - **链接：** https://github.com/github/copilot-cli/issues/3881

5. **[Bug] 恢复会话时模型选择为空**
    - **Issue #3913**：在恢复历史会话时，模型选择列表为空或显示为“被阻止”，而新建会话则正常。该问题在 v1.0.64 版本中出现，是一个影响工作流连续性的回归性 Bug。
    - **链接：** https://github.com/github/copilot-cli/issues/3913

6. **[功能请求] 可配置的快捷键绑定**
    - **Issue #2419 & #1729**：多位用户提出希望自定义快捷键，例如绑定 F1-F3 快速切换模型，或让快捷键与个人习惯的终端操作保持一致。这表明用户对高效操作和深度个性化配置有强烈需求。
    - **链接：** [Issue #2419](https://github.com/github/copilot-cli/issues/2419) | [Issue #1729](https://github.com/github/copilot-cli/issues/1729)

7. **[Bug] 终端渲染问题：长字符截断与 Markdown 解析错误**
    - **Issue #3921 & #3920**：两个由同一用户提交的渲染 Bug 在昨日获得关注。#3921 指出在多行选择的自由回答输入时，输入框会截断字符；#3920 指出当输出中包含两个长破折号时，Markdown 渲染器会错误地将其解析为删除线。
    - **链接：** [Issue #3921](https://github.com/github/copilot-cli/issues/3921) | [Issue #3920](https://github.com/github/copilot-cli/issues/3920)

8. **[Bug / 功能缺失] 移动端远程会话功能不完整**
    - **Issue #3922, #3923, #3924**：用户反馈从 GitHub 移动应用连接到远程 CLI 会话时，无法发送 `!` Shell 命令、无法上传文件/图片、也无法发送 `/slash` 命令。这暴露了移动端远程控制能力上的明显短板。
    - **链接：** [Issue #3924](https://github.com/github/copilot-cli/issues/3924) | [Issue #3923](https://github.com/github/copilot-cli/issues/3923) | [Issue #3922](https://github.com/github/copilot-cli/issues/3922)

9. **[Bug] Linux AppImage 环境变量泄漏阻塞 Git 操作**
    - **Issue #3925**：在 Linux 上，Copilot 桌面 AppImage 会将其捆绑库的 `LD_LIBRARY_PATH` 泄漏给子进程（如 `git`），导致 `git fetch` 因符号查找失败而中断，进而影响会话创建。这是一个平台相关的严重兼容性问题。
    - **链接：** https://github.com/github/copilot-cli/issues/3925

10. **[功能请求] 企业级服务器托管配置**
    - **Issue #3909**：组织管理员希望能在服务端统一推送环境变量等配置给开发者的本地 CLI，当前只能通过 Codespaces 管理云端环境。此需求关乎企业大规模推广和管理的可行性。
    - **链接：** https://github.com/github/copilot-cli/issues/3909

## 重要 PR 进展

- **自动化 Issue 分类工作流 (PR #2587)**
    - **状态：** 已合并
    - **内容：** 引入基于 Agentic Workflows 的 AI 工作流，可在 Issue 创建或重开时自动打上 `area:` 和 `triage` 标签，有助于提高 Issue 管理效率。
    - **链接：** https://github.com/github/copilot-cli/pull/2587

*（注：数据集中过去24小时内仅有一条 PR 更新。）*

## 功能需求归类

- **插件 (Plugins) 与 Agent 能力：** 用户强烈要求改进插件 Hook 的行为（静默重写）和技能的组织管理（子文件夹），核心诉求是提升自动化和可管理性。
- **用户界面与交互体验：** 可配置快捷键、更智能的 `/cd` 自动补全行为、区分“已排队”和“待处理”消息的文档，均指向用户希望在 CLI 中获得更流畅、更可控的交互体验。
- **终端渲染与兼容性：** 对 Markdown 解析错误、长文本截断等终端渲染问题的反馈增多，同时 Linux 环境变量泄漏问题也凸显了跨平台兼容性的挑战。
- **企业与管理功能：** 企业级配置下发和 Kerberos 代理支持等需求，反映出企业用户将 Copilot CLI 纳入正式开发环境的部署与管理诉求。
- **移动端与远程控制：** 移动端远程会话功能的明显缺失，是目前用户吐槽的集中点之一，包括 Shell 命令和文件传输等基础功能。

## 开发者关注点

- **插件 Hook 行为：** 开发者在使用 `preToolUse` Hook 时普遍抱怨无法实现“静默”重写，这阻碍了他们构建完全自动化的工具链和 Agent。
- **会话与模型状态恢复：** 会话恢复后模型选择为空，以及服务异常后模型状态无法正确恢复，是影响日常工作效率的严重问题。
- **配额扣除的准确性与透明度：** 用户对模型使用配额的计费逻辑高度敏感，任何超出预期的扣除都会引发信任危机和账单争议。
- **移动端协作瓶颈：** 移动设备远程连接后的功能缺失，使得 Copilot CLI 在“随时随地协作”场景下的价值大打折扣。
- **Linux 环境兼容性：** AppImage 导致的环境变量泄漏问题，对于 Linux 用户是阻塞性的严重 Bug，需要尽快修复。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为您准备的 2026-06-25 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态日报 | 2026-06-25

## 今日更新概览

昨日，Kimi Code CLI 仓库社区沟通活跃，共计 5 个 Issue 和 2 个 Pull Request 在 24 小时内获得了更新。社区关注点集中在**Token 消耗效率**（用量计算、上下文压缩）和 **MCP 工作流**（配置传播、目录兼容性）问题上。暂无新版本发布。

## 版本发布

无

## 社区热点 Issues

1.  **[#1994] 用量计算逻辑争议：任务次数与 Token 消耗不匹配**
    -   用户报告称，仅完成 2 个任务即耗尽了 2 小时的订阅额度。订阅说明提及“约 300-1200 次 API 请求”，实际体验却与预期不符。用户推测是由于 **K2.6 模型思维链过长，导致单次请求消耗 Token 过多**。该 Issue 获得了 7 个赞，反映了社区对计费透明度和模型效率的共同关注。
    -   [Issue 链接](https://github.com/MoonshotAI/kimi-cli/issues/1994)

2.  **[#640] CLI 陷入文件读取循环**
    -   一个存在时间较长的 Bug 被重新关注。用户在使用自定义 Anthropic 端点配合 `mimo-v2-flash` 模型时，CLI 进程会陷入对同一个文件的反复读取，形成死循环。此问题影响了在 Linux 平台上的正常编码流程，至今仍有 14 条评论，表明问题排查难度较高。
    -   [Issue 链接](https://github.com/MoonshotAI/kimi-cli/issues/640)

3.  **[#2472] 上下文压缩机制浪费约 20k Token**
    -   用户报告，当会话触发上下文压缩（Context Compaction）后，系统会**重新加载系统提示词和项目级指令**（如 `AGENTS.md`），导致约 2 万个 Token 被无意义消耗。此问题影响了长会话的开发效率，与 #1994 共同指向 Token 使用优化是当前的核心痛点。
    -   [Issue 链接](https://github.com/MoonshotAI/kimi-cli/issues/2472)

4.  **[#2469] `kimi web` 命令的 MCP 服务器目录错误**
    -   已关闭的 Bug。当用户通过 `kimi web` 命令启动时，MCP 服务器会从 **CLI 的安装目录**启动，而非从用户的**项目工作目录**启动。这会导致依赖项目相对路径的 MCP 工具无法正常工作，破坏了基于工作区的工具生态。
    -   [Issue 链接](https://github.com/MoonshotAI/kimi-cli/issues/2469)

5.  **[#2473] `/web` 指令报错**
    -   一个已关闭的 Bug。用户反映在版本 0.19.2 中，使用 `/web` 指令时出现报错。该问题在新版中可能已被修复，但其出现提示了 `web` 功能在特定版本下的兼容性问题。
    -   [Issue 链接](https://github.com/MoonshotAI/kimi-cli/issues/2473)

## 重要 PR 进展

1.  **[#1942] 修复 MCP 配置无法传递给子代理 (Subagent)**
    -   一个关键的修复 PR 被合并。该 PR 解决了两个问题：1) 子代理（如 explore, coder, plan）从未收到 MCP 配置；2) 恢复会话后 MCP 配置未生效。这保证了多层次代理工作流和会话中断恢复场景下 MCP 工具的可用性。
    -   [PR 链接](https://github.com/MoonshotAI/kimi-cli/pull/1942)

2.  **[#1377] 新增 Vim 风格 j/k 键盘导航**
    -   一个增强功能 PR 被合并。为审批（Approval）和问题（Question）选择界面增加了 Vim 风格的 `j/k` 键上下导航支持。这提升了使用键盘驱动 CLI 的开发者的操作流畅度。
    -   [PR 链接](https://github.com/MoonshotAI/kimi-cli/pull/1377)

## 功能需求归类

从近期（包括今日更新）的 Issues 中，可以归类出以下用户反复提及的功能方向：

-   **Token 消耗效率**：用量计算模型与模型实际 Token 消耗不匹配，以及上下文压缩机制存在优化空间。这是社区讨论最密集的方向。
-   **MCP 工作流兼容性**：确保 MCP 配置在不同子代理、会话恢复及不同启动命令（`kimi` vs `kimi web`）下稳定、一致地工作。
-   **Web 端功能稳定性**：`/web` 指令及通过 `kimi web` 启动的相关功能存在稳定性问题，需要持续关注。

## 开发者关注点

总结今日更新中开发者反馈较为集中的痛点：

1.  **Token 消耗巨大**：特别是使用 K2.6 等高级模型时，思维链过程较长，导致订阅额度（会员 2 小时）消耗过快，实际可用任务次数远低于预期，给高效开发带来成本压力。
2.  **CLI 工作目录问题**：启动 MCP 服务器时，工作目录的歧义（安装目录 vs 项目目录）导致依赖路径的 MCP 工具失效，破坏了工作流的一致性。
3.  **Session 管理缺陷**：长会话中的上下文压缩机制并未有效提升 Token 利用率，反而因重载指令而浪费 Token，与设计初衷相悖。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，各位开发者，以下是 2026 年 6 月 25 日的 OpenCode 社区动态日报。

---

## 2026-06-25 OpenCode 社区动态日报

### 1. 今日更新概览

今日社区活跃度较高，共更新了 50 个 Issue 和 50 个 Pull Request。版本 v1.17.10 发布，带来了 MCP 服务器指令集成、`--mini` CLI 模式等核心改进。社区讨论焦点集中在 MCP 客户端能力的完善（特别是资源模板和订阅）以及 OAuth 认证流程中的多个 bug 上。多位贡献者（如 `@Nomadcxx`）正持续推进 MCP 功能的系列 PR。

### 2. 版本发布

**v1.17.10 发布**
- **核心改进：**
  - 将 MCP 服务器指令添加到会话上下文中（贡献者: @Arcadi4）。
  - 新增 OpenCode 管理的 Provider 集成支持。
  - 新增 MCP 资源模板列表功能。
  - 新增 MCP 资源读取工具。
  - 新增 `--mini` CLI 模式。
- **Bug 修复：**
  - 修复了特定情况下 MCP 资源模板工具的显示问题。

### 3. 社区热点 Issues

1.  **[FEATURE]: Full MCP client capabilities** ([#28567](https://github.com/anomalyco/opencode/issues/28567))
    - **影响场景：** 开发者使用 MCP 协议集成外部工具和服务。
    - **问题范围：** 贡献者 `@Arcadi4` 提出 OpenCode 的 MCP 客户端功能落后于最新标准，请求支持完整的 MCP 客户端能力。获得 25 个👍，社区关注度极高。
    - **社区反应：** 该 Issue 关联了多个后续 PR，是当前社区开发的重点方向。

2.  **OpenCode is not private by default?** ([#10416](https://github.com/anomalyco/opencode/issues/10416)) (已关闭)
    - **影响场景：** 用户对本地隐私和数据安全的要求。
    - **问题范围：** 用户 `@MatthewCroughan` 发现会话标题的生成需要联网，即使使用本地 LLM 也不例外，引发了关于默认隐私设置的讨论，共 59 条评论。
    - **社区反应：** 讨论热烈，揭示了用户对网络隔离下的功能依赖性问题。

3.  **Opencode - Always "error=Model tried to call unavailable tool"** ([#21090](https://github.com/anomalyco/opencode/issues/21090))
    - **影响场景：** 新用户上手，希望让模型直接操作本地代码。
    - **问题范围：** 用户 `@Flagelmann` 质疑 OpenCode 无法像宣传那样分析代码库，模型持续返回工具不可用的错误，对核心体验影响较大。
    - **社区反应：** 由 7 个👍表明这不是个例，反映了新用户在使用中的常见困惑。

4.  **Ctrl+Z closes/suspends OpenCode instead of undoing text input (Linux)** ([#24817](https://github.com/anomalyco/opencode/issues/24817))
    - **影响场景：** Linux 用户的日常命令行输入体验。
    - **问题范围：** `Ctrl+Z` 作为常见的撤销快捷键，在 Linux 终端下导致进程挂起而非撤销文字。与 `#19256` 描述相同问题。
    - **社区反应：** 该问题获得 4 个👍，表明对 Linux 用户体验的关注。

5.  **[BUG]: Error: no such column: name** ([#31119](https://github.com/anomalyco/opencode/issues/31119))
    - **影响场景：** 用户从旧版本升级到新版本时。
    - **问题范围：** 从 v1.16.2 升级后，应用因数据库 Schema 问题直接崩溃无法使用。
    - **社区反应：** 核心 Bug，影响用户正常升级和使用，获得了 5 个👍。

6.  **TUI crash with "An error occurred in Effect.tryPromise" on 1.17.0 or higher** ([#32706](https://github.com/anomalyco/opencode/issues/32706))
    - **影响场景：** 升级到 1.17.0 及以上版本后，使用 TUI 界面。
    - **问题范围：** 用户在 Windows 平台上启动 TUI 时立即崩溃，严重阻碍使用。
    - **社区反应：** 同样获得 2 个👍，表明是影响面较广的回归问题。

7.  **[BUG]: qwen3.7-max/plus on OpenCode Go (Zen API) - frequent 524 timeout behind Cloudflare** ([#33726](https://github.com/anomalyco/opencode/issues/33726))
    - **影响场景：** 付费用户使用 OpenCode Go 服务时，调用特定模型。
    - **问题范围：** 用户 `@Joelincn` 反馈 qwen3.7 系列模型服务不稳定，频繁超时，分析原因为 Cloudflare 代理的超时限制。关联已关闭的 Issue `#33721`。
    - **社区反应：** 反映了官方托管服务（Zen API）的稳定性问题。

8.  **[FEATURE]: Support `opencode.local.json` for project-local config overrides** ([#17232](https://github.com/anomalyco/opencode/issues/17232))
    - **影响场景：** 团队协作或需要项目级配置覆盖的场景。
    - **问题范围：** 请求允许在项目根目录下使用 `opencode.local.json` 文件，以实现项目局部配置的覆盖和个性化。
    - **社区反应：** 获得了 8 个👍，是社区呼声较高的功能需求。

9.  **Upgrade / downgrade** ([#8261](https://github.com/anomalyco/opencode/issues/8261))
    - **影响场景：** 用户在遇到版本问题后需要降级。
    - **问题范围：** 用户`@klonuo` 反馈，`opencode upgrade` 命令只能升级，无法降级到特定版本。虽然可以通过手动安装解决，但缺乏官方支持。
    - **社区反应：** 一个长期存在的基础功能需求。

10. **Entra Authentication for MCP doesn't work** ([#12308](https://github.com/anomalyco/opencode/issues/12308))
    - **影响场景：** 企业用户使用微软 Entra ID 认证的 MCP 服务。
    - **问题范围：** OAuth 流程中硬编码的 `resource` 参数与应用注册的标识符不匹配，导致认证失败。
    - **社区反应：** 企业级 MCP 集成的一个具体障碍，影响了特定用户群体的使用。

### 4. 重要 PR 进展

1.  **[PR] fix(event): remove directory filter from SSE stream** ([#33737](https://github.com/anomalyco/opencode/pull/33737))
    - **内容：** 修复了一个关键 Bug。由于 SSE 事件处理中不当的目录过滤，导致 TUI 消息不可见。贡献者 `@EZotoff` 移除了这个过滤条件。

2.  **[PR] feat(mcp): surface tool progress** ([#32480](https://github.com/anomalyco/opencode/pull/32480))
    - **内容：** 贡献者 `@Nomadcxx` 实现将 MCP 工具的进度通知（`$PROGRESS_NOTIFICATION`）透传到 OpenCode 的前端进度显示中，提升交互体验。

3.  **[PR] feat(mcp): support templates and completion** ([#32943](https://github.com/anomalyco/opencode/pull/32943))
    - **内容：** 同样来自 `@Nomadcxx`，实现了 MCP 资源模板（`resources/templates/list`）和补全（completion）功能。

4.  **[PR] feat(mcp): support resource subscriptions** ([#32936](https://github.com/anomalyco/opencode/pull/32936))
    - **内容：** `@Nomadcxx` 的又一力作，为 MCP 添加了资源订阅功能，当 MCP 服务器资源变化时，OpenCode 可以及时收到通知。

5.  **[PR] feat(cli): add standalone v2 session flow** ([#33281](https://github.com/anomalyco/opencode/pull/33281))
    - **内容：** 核心贡献者 `@thdxr` 在 CLI 中添加了独立的 v2 会话流程。该模式启动一个私有的认证服务子进程，并通过 v2 API 管理会话数据。

6.  **[PR] fix(opencode): cap retry backoff when response headers lack retry-after** ([#33733](https://github.com/anomalyco/opencode/pull/33733))
    - **内容：** `@1volt12` 修复了会话重试逻辑中的一个 Bug。当响应头中缺少 `retry-after` 信息时，重试退避时间被限制在 30 秒内，防止过高延迟。

7.  **[PR] feat(tui): publish tui.session.select on in-TUI session navigation** ([#33734](https://github.com/anomalyco/opencode/pull/33734))
    - **内容：** `@santiperone` 为 TUI 中的会话切换操作增加了总线事件推送，修复了在 TUI 内切换会话时状态不同步的问题。

8.  **[PR] fix(mcp): isolate OAuth request headers** ([#33722](https://github.com/anomalyco/opencode/pull/33722))
    - **内容：** `@rekram1-node` 修复了 MCP 认证中的安全问题。确保配置的请求头不会被泄露到跨域请求、Token 交换或授权服务器发现等非预期场景中。

9.  **[PR] fix: Home and End keys not working** ([#33554](https://github.com/anomalyco/opencode/pull/33554))
    - **内容：** 修复了在提示输入框中，Home 和 End 键无法移动文本光标的问题。

10. **[PR] fix(mcp): configure Figma OAuth client** ([#32676](https://github.com/anomalyco/opencode/pull/32676))
    - **内容：** 添加了对 Figma MCP 服务的 OAuth 客户端内置支持，简化用户的 Figma 集成流程。

### 5. 功能需求归类

从近期的动态中，可以归类出社区关注的几个主要功能方向：

- **MCP 客户端能力增强**：这是当前绝对的开发主线。Issue `#28567` 和与之关联的多个 PR（`#32480`, `#32943`, `#32936`）表明，社区强烈希望 OpenCode 能成为一个全功能的 MCP 客户端，全面支持资源、工具、订阅、进度报告等最新协议特性。
- **隐私与本地化**：Issue `#10416` 的讨论说明，用户对“本地优先”和“默认隐私”有很强的诉求，期望核心对话功能（如会话命名）能完全在本地离线完成，不依赖外部网络。
- **CLI/TUI 稳定性与兼容性**：多个 Bug（`#32706`, `#31607`, `#31119`）和快捷键冲突（`#24817`）报告显示，TUI 在不同平台（特别是 Windows 和 Linux）上的稳定性以及与终端快捷键的兼容性是用户的持续痛点。

### 6. 开发者关注点

- **MCP 认证（OAuth/SSE）的易用性**：多个关闭的 Issue（`#5444`, `#12308`, `#16893`, `#26301`, `#28895`） 都指向 MCP 的 OAuth 认证流程存在各种问题。开发者需要更顺畅、更可靠的认证体验。新 PR `#33722` 试图解决其中关于请求头隔离的安全问题，这说明认证不仅是易用性，也涉及安全性。
- **Windows 平台的兼容性问题**：从 Issue `#14074` (命令识别) 到 `#20162` (PATH问题) 再到 `#32706` (TUI崩溃)，Windows 用户在安装和使用 OpenCode 时遇到了更多门槛。
- **升级与降级流程**：Issue `#8261` 和 `#31119` 反映了版本管理工具链的缺失。平滑的升级体验，特别是升级失败后的降级回滚能力，是提升用户信赖度的重要环节。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是为您生成的 2026-06-25 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 — 2026-06-25

## 今日更新概览

今日社区发布了 v0.19.2 及对应预览版，主要新增了远程 LSP 状态路由。社区围绕安全漏洞、模型自动切换和终端 UI 的 Bug 展开了激烈讨论。同时，CI/CD 管线优化和技能管理相关的功能需求也获得了高度关注。

## 版本发布

-   **v0.19.2 & v0.19.2-preview.0**
    -   **主要更新**: 新增了远程 LSP (Language Server Protocol) 状态路由（`feat(serve): Add remote LSP status route`），由社区贡献者 @doudouOUC 完成。
    -   **注意**: 本次发布流程 (`publish` 任务) 在 GitHub Actions 上曾出现失败记录（Issue #5831），但最终版本已成功发布。
    -   链接: [v0.19.2 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2)

-   **其他每日版本**
    -   同步发布了 `v0.19.1-nightly.20260624.a234860a4` 和 `v0.18.5-preview.0` 等每日构建或预览版本，内容与 v0.19.2 类似。

## 社区热点 Issues

1.  **#5834 [P1/安全]: 路径遍历漏洞导致源代码被意外删除**
    -   **场景**: 桌面版在删除代码源文件时，未对用户提供的 `sourceSlug` 进行路径合法性校验，攻击者可通过构造 `../sessions` 等路径片段逃离工作区目录，删除不相关的文件。
    -   **范围**: 严重的逻辑漏洞，影响版本管理的文件操作安全。
    -   **社区反应**: 已迅速提交修复 PR，社区讨论热烈，开发者警惕性高。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5834

2.  **#5819 [P2/Bug]: 升级后自动切换为更高价格的模型并修改配置**
    -   **场景**: 用户从 v0.18.3 升级到 v0.19 后，`settings.json` 中的模型配置被静默修改为更昂贵的付费模型，导致用户在不知情的情况下大量消耗 API 额度，直至收到费用预警。
    -   **范围**: 用户体验的严重问题，影响模型选择和费用控制。
    -   **社区反应**: 用户反馈强烈，开发者已在跟进，此问题与用户期望的“版本升级行为可预期”原则相悖。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5819

3.  **#5837 [Bug]: 智能体最后一条回复被截断**
    -   **场景**: 在长期对话或生成复杂响应时，智能体的最后一条回应在 UI 上显示不全，但在日志文件中内容完整。
    -   **范围**: UI 渲染 Bug，影响用户在 Windows 平台下的核心使用体验。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5837

4.  **#5736 [性能]: 近期更新导致本地 LLM 频繁重新处理完整对话**
    -   **场景**: 用户在简单续写对话时，发现本地部署的 LLM 不再进行增量处理，而是每次都强制重新处理全部历史上下文，导致生成速度显著变慢。
    -   **范围**: 影响自托管用户的性能体验，与缓存逻辑有关。
    -   **社区反应**: 用户给出了详细的 `llama.cpp` 日志，有助于开发者定位。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5736

5.  **#5800 [Bug]: 终端输出超过屏幕高度时，最后一行被覆盖**
    -   **场景**: 在默认终端模式下，当智能体的回复内容超过终端窗口高度时，回复的最后一行会在完成瞬间被隐藏或覆盖。
    -   **范围**: 终端 UI 渲染 Bug，影响所有使用默认终端模式的用户。
    -   **社区反应**: 该问题被标记为欢迎 PR 贡献。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5800

6.  **#5836 [功能请求]: 任务清单 (todos) 能否支持跨设备同步？**
    -   **场景**: 当前 todos 存储在本地 `~/.qwen/todos/`，不受 Git 控制。用户希望在创建时可选持久化到项目内，以便在不同机器间同步项目状态。
    -   **范围**: 会话管理与配置功能，涉及持久化策略。
    -   **社区反应**: 用户提出了具体的实现建议（选择落盘位置），并指出 `plans`、`memories` 也存在同样问题。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5836

7.  **#5219 [P2/CI]: 集成测试仅在发布时运行，导致问题在合并分支后才暴露**
    -   **场景**: 端到端集成测试 (`integration-tests/`) 仅在每夜的 Release 流程中运行。这导致 PR 在通过单元测试合并后，可能存在的集成问题在发布时才被发现。
    -   **范围**: 开发流程与 CI/CD 管线问题，影响软件交付质量。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5219

8.  **#5838 [功能请求]: 允许用户调整智能体执行命令的超时时间**
    -   **场景**: 智能体执行某些耗时命令（如长时间运行的脚本）时，可能被默认超时打断。用户希望有配置项可以自定义这个超时限制。
    -   **范围**: 工具使用与 Shell 交互功能。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5838

9.  **#5823 [Bug]: `/loop` 定时任务静默执行且无法查看或停止**
    -   **场景**: 用户创建的 `/loop` 循环任务在后台静默执行，再次打开新会话时，模型会自动开始工作。用户无法在会话中看到、停止或管理这些后台任务，感到困惑。
    -   **范围**: CLI 命令与后台自动化功能，影响用户对工具的掌控感。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5823

10. **#5798 [Bug]: 多智能体运行时，滚动查看历史记录失效且屏幕闪烁**
    -   **场景**: 在非 VP 模式下，当后台有多个智能体运行时，用户无法向上滚动查看历史对话记录，屏幕会闪烁并强制回到底部。
    -   **范围**: 终端 UI 的并发渲染问题，已提交修复 PR。
    -   链接: https://github.com/QwenLM/qwen-code/issues/5798

## 重要 PR 进展

1.  **#5835 [Fix]: 重新应用提供商配置时保留已选模型**
    -   **内容**: 修复了在重新认证或刷新令牌时，模型选择会被重置的问题，确保用户激活的模型在流程中保持不变。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5835

2.  **#5808 [Fix]: 用户中止 `/loop` 任务时取消待处理的唤醒**
    -   **内容**: 解决了用户按下 Esc 中止循环任务后，该循环仍会在预定时间再次启动的问题。现在中止会彻底结束循环。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5808

3.  **#5829 [Fix]: 拒绝并处理不安全的源代码路径标识符**
    -   **内容**: 针对 #5834 安全漏洞的修复。在删除源文件前，增加对 `sourceSlug` 的合法性验证，阻止路径穿越攻击。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5829

4.  **#5799 [Fix]: 防止非 VP 模式下多智能体运行时的滚动回弹和闪烁**
    -   **内容**: 修复了 #5798 问题。通过动态调整页脚高度预留，确保主内容区域在后台智能体运行时不会溢出终端，保持滚动正常。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5799

5.  **#5616 [Feature]: 确认自动生成的技能 (Skills) 后再持久化**
    -   **内容**: 智能体在用户进行大量工具调用后自动生成的技能，现在会先展示给用户确认，不再静默保存。一次性的操作不会再被错误地吸收为永久技能。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5616

6.  **#5827 [Fix]: 为 OpenAI 管道添加流式传输不活动超时**
    -   **内容**: 修复了流式响应时，如果模型提供方输出中断，Qwen Code 会因没有超时而无限等待的问题。新增加了对 chunk 之间不活动的超时机制。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5827

7.  **#5817 [Feature]: 为语音输入支持用户自定义关键词文件**
    -   **内容**: 允许用户提供一个配置文件，向语音识别的关键词列表中添加项目或领域特有的术语，以提高特定词汇的识别准确率。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5817

8.  **#4943 [Feature]: 添加 `--safe-mode` 安全模式**
    -   **内容**: 新增启动参数，可以禁用所有用户自定义配置（如钩子、扩展、MCP 服务器等），提供一个纯净的基线环境用于问题排查。
    -   链接: https://github.com/QwenLM/qwen-code/pull/4943

9.  **#5657 [Fix]: 阻止重复的提供者工具调用响应**
    -   **内容**: 解决了一个导致 Qwen Code 陷入无限工具结果循环的 Bug，该 Bug 由模型重复返回同一个工具调用 ID 触发。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5657

10. **#5826 [Feature]: 添加技能使用统计**
    -   **内容**: 新增了 `skill usage stats` 功能，可以统计会话中每个技能的实际调用次数，并通过 `/stats skills` 路由对外暴露，为开发者提供数据洞察。
    -   链接: https://github.com/QwenLM/qwen-code/pull/5826

## 功能需求归类

根据今日的社区反馈，用户的功能需求主要集中在以下几个方向：

| 功能方向 | 具体诉求 |
| :--- | :--- |
| **语音功能** | 支持用户配置关键词文件优化语音识别 (#5816, #5817)；将语音输入功能扩展到 Web Shell 和桌面 UI (#5796)。 |
| **会话与同步** | 支持任务清单 (Todos) 和计划 (Plans) 跨设备同步 (#5836)；优化恢复已折叠会话时上下文预览 (#5759)。 |
| **CI/CD 与质量** | 要求集成测试在 PR 阶段运行，防止回归 (#5219)；AI 辅助 PR 应包含集成测试更新 (#5665)；优化 CI 流程，缩短 PR 构建时间 (#5027)。 |
| **UI/UX** | 替换表情符号为统一的 Unicode 文字符号 (#5787)；为新用户默认启用状态栏 (#5789)；智能体执行命令超时可配置 (#5838)。 |
| **安全与配置** | 修复路径穿越等安全漏洞 (#5834)；禁止模型版本升级时静默更改用户配置 (#5819)；增加安全模式用于排查 (#4943)。 |
| **模型与应用** | 重新应用提供商配置时保留已选模型 (#5835)；支持在 ModelStudio 向导中恢复自定义模型 ID (#5636)。 |

## 开发者关注点

从今日的反馈和讨论中，开发者社区的主要痛点和关注点集中在以下几个方面：

-   **“静默变更”的困扰**: 无论是升级后自动切换高价模型，还是 `/loop` 任务在后台静默执行，用户对工具不可预期的、缺乏透明度的行为感到非常不满。**用户期望升级和配置变更行为是可预测、可控且有明确通知的**。
-   **工具稳定性的信任危机**: “集成测试仅在发布前运行”、“路径穿越漏洞”等问题，显示出当前测试和安全审计流程存在盲区，影响了开发者和用户对工具稳定性和安全性的信任。
-   **对本地/自托管环境的关注**: 围绕“完整提示重处理” (#5736) 和“流式超时”等问题的讨论，表明大量社区用户在使用本地或自托管模型，这部分群体对资源消耗、性能和网络容忍度有非常具体和严格的要求。
-   **异步任务的可见性**: `/loop` 功能带来的后台任务缺乏管理界面，用户无法察觉、查看或停止这些任务，是社区强调的“失去控制感”的典型例子。**提供任务管理、状态通知和可订制的行为是增强用户信心的关键**。

</details>