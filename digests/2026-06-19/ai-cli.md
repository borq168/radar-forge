# AI CLI 工具社区动态日报 2026-06-19

> 生成时间: 2026-06-19 00:42 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，基于您提供的 2026-06-19 各主流 AI CLI 工具社区动态摘要，我为您生成以下横向对比分析报告。

---

## AI CLI 工具社区动态横向对比报告 (2026-06-19)

### 1. 今日横向概览

今日各 AI CLI 工具的社区动态呈现“稳定性挑战”与“功能深耕”并存的局面。**Claude Code** 和 **Gemini CLI** 均遭遇了影响核心体验的回归问题，前者涉及团队工具消失和会话数据丢失，后者受困于Agent挂起与Shell交互卡死。相比之下，**OpenAI Codex** 和 **GitHub Copilot CLI** 在持续发布新功能的同时，社区反馈更聚焦于特定平台（如Windows）的兼容性问题与MCP生态的完善。**Kimi Code** 和 **Qwen Code** 今日社区动态相对温和，前者集中在网络代理和配置体验，后者则展现了对核心解析器、输入校验等底层质量的精细修复。

### 2. 各工具活跃度对比

| 工具名称 | 今日活跃 Issues (示例) | 今日活跃 PRs (示例) | 版本发布 | 社区热点焦点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10条 (高热度，如#59248, #68721) | 7条 | 无 | **回归问题频发**、数据丢失、API无响应、团队管理工具消失 |
| **OpenAI Codex** | 10条 (高人气，如#2558) | 10条 | Rust v0.141.0正式版 | **跨平台兼容性**、远程连接加密、预算管理、图像生成回归 |
| **Gemini CLI** | 10条 (如#21409, #25166) | 10条 | v0.47.0正式版 | **核心Agent稳定性**、Shell交互卡死、文件写入损坏、VSCode认证 |
| **GitHub Copilot CLI** | 10条 (高严重性，如#3700, #3860) | 1条 | 无 | **MCP认证与兼容性**、WSL2性能回归、权限沙箱Bug、会话分裂 |
| **Kimi Code** | 3条 | 1条 | 无 | **网络代理兼容性**、Windows扩展安装、配置体验简化 |
| **OpenCode** | 10条 (高赞，如#8456) | 10条 | 无 | **功能需求旺盛** (多Auth、自动换模型)、TUI恢复问题、文件监控稳定性 |
| **Qwen Code** | 10条 | 10条 | v0.18.3-nightly | **核心解析器修复**、OAuth令牌管理、GIF图片处理、Token消耗统计需求 |

### 3. 共同出现的功能方向

以下需求在多个工具的社区中同时出现，反映出开发者社区的普遍诉求：

- **MCP 生态稳定性与易用性**:
  - **Claude Code**：内置 MCP 自动注入且认证失败 (#69324)，子代理无法访问 MCP 工具。
  - **GitHub Copilot CLI**：MCP OAuth 未正确附加 (#3838)，子代理无法访问 MCP 工具 (#3812)。
  - **Kimi Code**：用户反馈 MCP 服务器和插件配置体验复杂 (#2460)。
  - **OpenCode**：MCP 长任务缺少进度令牌导致超时 (PR #28246)。

- **Agent 行为可靠性**:
  - **Claude Code**：Agent 静默保留清理导致会话丢失 (#59248)。
  - **Gemini CLI**：Agent 在执行任务时挂起 (#21409)，子代理错误报告成功 (#22323)。
  - **GitHub Copilot CLI**：后台侧边栏 (Subconscious) 在被禁用后仍启动 (#3859)。

- **会话管理与恢复**:
  - **Claude Code**：会话数据被静默清理 (#59248)，会话从 UI 消失但文件仍在 (#59736)。
  - **GitHub Copilot CLI**：缓慢的 `/resume` 操作导致会话分裂 (#3856)，请求恢复已归档会话 (#3518)。

- **基于任务类型的智能模型路由**:
  - **OpenCode**：功能请求，希望根据编码、架构等任务类型自动切换模型 (#8456，37 👍)。
  - **Gemini CLI**：用户反映 Agent 不会主动使用自定义技能和子 Agent (#21968)。

- **模型与提供商支持**:
  - **OpenCode**：请求支持 `claude-opus-4.6` 的视觉能力 (#14289)，以及为特定提供商添加缺失模型。
  - **GitHub Copilot CLI**：部分后端不支持其自定义工具调用格式 (#3839)，影响模型兼容性。

### 4. 差异化定位分析

- **Claude Code**: **“全能型助手，但稳定性拖累体验”**。功能丰富，尤其强调MCP和插件生态，但近几个版本的回归问题频发，从团队工具到会话数据，严重影响了用户信心。定位偏向于能胜任复杂任务的AI副驾驶，但当前状态显示出“功能先行，稳定滞后”的特点。
- **OpenAI Codex**: **“远程执行与加密的先行者”**。今日发布的v0.141.0版本主要围绕远程执行的端到端加密和跨平台兼容性，显示出其技术侧重点在于为专业开发者提供安全、可靠的远程工作流。对Windows平台的兼容性持续性投入，但问题仍然突出。
- **Gemini CLI**: **“追求Agent智能化，但自主性不足”**。社区活跃度集中在Agent的核心行为上，用户希望Agent能更智能、更主动地使用工具和技能，而非在执行基础任务时挂起或错误汇报。其在Auto Memory等上下文管理功能上的迭代，表明其试图在理解用户意图方面做得更深。
- **GitHub Copilot CLI**: **“安全与集成的试验场”**。社区问题高度集中在安全机制（沙箱、内容排除）和MCP认证上，这与GitHub作为代码托管平台，对安全性的高度重视一脉相承。同时，WSL2上的严重性能问题，暴露了其在不同开发环境下的适配挑战。
- **Kimi Code**: **“聚焦网络和起步体验的破局者”**。社区规模较小，反馈直接。核心问题是网络代理（呼应了国内网络环境需求）和配置复杂度（新用户留存关键）。通过快速PR修复核心bug，体现了敏捷的社区反馈响应。
- **OpenCode**: **“高度可定制的IDE工具台”**。社区需求非常差异化，从多认证配置文件、任务类型自动换模型、到递归技能发现，用户期望它是一个可以深度定制、适应各种复杂工作流的平台。TUI性能和文件监控是其当前的核心稳定性挑战。
- **Qwen Code**: **“扎实的工程化实践者”**。社区活动和PR集中在底层质量、输入校验、跨平台兼容性（macOS tmux、Linux系统休眠）和文件处理（GIF、WebP）。其目标似乎是打造一个稳定、无bug、对开发者友好的基础工具，而非追求花哨的Agent功能。

### 5. 社区活跃度记录

- **整体规模最大、讨论最深入**: **OpenCode** 和 **Qwen Code** 今日均有50条以上Issue和PR更新，说明其用户基数庞大且社区贡献活跃。OpenCode的讨论集中在功能需求，Qwen Code则聚焦于Bug修复和代码质量。
- **问题严重度和讨论热度最高**: **Claude Code** 和 **GitHub Copilot CLI**。Claude Code的会话数据丢失和API无响应直接导致工作流中断，社区反应激烈（高赞、高评论数）。GitHub Copilot CLI的WSL2高CPU占用和沙箱Bug也属高优先级问题。
- **版本发布节奏最稳定**: **OpenAI Codex** 当日发布正式版v0.141.0，体现了其稳定的迭代节奏。**Gemini CLI** 和 **Qwen Code** 分别发布了正式版和夜间版，显示出持续的工程投入。
- **维护者响应最快**: **Kimi Code**。其社区提交的代理问题(#2455)半天内即有关联PR(#2461)提交，展现了极高的维护效率。

### 6. 有证据支撑的观察

1.  **“稳定性和回归”是当前所有主流AI CLI工具的共同阿喀琉斯之踵**：
    - **证据**：Claude Code有团队管理工具消失 (#68721) 和API无响应 (#69358)；Gemini CLI的Agent挂起 (#21409)；GitHub Copilot CLI的WSL2性能回归 (#3700)；OpenCode的musl libc崩溃 (#27589) 和TUI侧边栏隐藏 (#30877)。
    - **解读**：快速迭代功能的同时，如何保证核心体验的稳定是所有工具面临的重大挑战。用户的耐心正在被高频次的回归问题消耗。

2.  **MCP生态系统正处于“希望与摩擦并存”的早期阶段**：
    - **证据**：Claude Code和GitHub Copilot CLI都出现了MCP认证失败、子代理无法访问MCP工具的问题。Kimi Code的用户也反映MCP配置复杂。
    - **解读**：MCP作为连接AI与外部世界的核心协议，其标准化和健壮性还未达到用户预期。认证流程、插件通信、跨组件访问仍是亟待解决的技术摩擦点。

3.  **跨平台支持（尤其是Windows和WSL2）仍是显著的体验分水岭**：
    - **证据**：OpenAI Codex的Windows沙盒问题 (#26158) 和Chrome插件注册表问题 (#24040)；GitHub Copilot CLI的WSL2高CPU占用 (#3700)；Kimi Code的Windows+Git Bash扩展安装问题 (#2462)。
    - **解读**：macOS仍是AI CLI工具的首选平台。对于依赖Windows或WSL2的开发者，他们需要面对更多的兼容性挑战和性能退化，这直接影响了工具在该用户群体中的普及率。

4.  **基于任务类型自动切换模型的“智能路由”功能，正成为社区强心声**：
    - **证据**：OpenCode用户强烈要求此功能 (#8456, 37 👍)，Gemini CLI用户也抱怨Agent不会主动使用合适的技能 (#21968)。
    - **解读**：开发者不再满足于“一个模型走天下”，他们希望AI工具能像人类专家一样，针对不同任务（编码、架构、调试）选择最合适的模型（或策略），以实现效率与成本的平衡。这将是下一阶段AI CLI工具智能化的关键方向。

5.  **资源管理与数据分析需求开始浮现**：
    - **证据**：Claude Code社区希望获得Skill使用次数的分析 (#35319, 29 👍)；Qwen Code用户希望统计每日Token消耗 (#4479)。
    - **解读**：随着AI工具深度融入工作流，开发者开始关注其“成本”和“效率”。他们不再只关心AI能否完成任务，更关心任务完成得是否经济。提供详细的资源消耗和调用统计，将帮助企业级用户做更好的ROI评估和资源规划。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 — 2026-06-19

## 今日更新概览

过去24小时内，Claude Code 仓库未发布新版本，但社区活跃度较高：共更新了50条 Issue（标签覆盖 bug、enhancement、regression 等），7条 Pull Request 有更新。热门话题集中在**会话数据丢失**（#59248）、**团队管理工具回归**（#68721）、**API 响应异常**（#69358）以及 **MCP 自动注入认证失败**（#69324）等关键问题上。

## 社区热点 Issues（10 条）

### 1. 静默保留清理导致会话记录丢失（#59248）
- **链接**：https://github.com/anthropics/claude-code/issues/59248
- **影响**：macOS 用户在工作区中所有历史会话记录（包括前一天的对话）被自动删除，无法恢复。
- **社区反应**：16 条评论，6 👍。用户质疑此行为缺少 opt-in 机制和恢复途径。
- **标签**：bug, data-loss, platform:macos

### 2. 团队管理工具 TeamCreate/TeamDelete 在 2.1.178 中消失（#68721）
- **链接**：https://github.com/anthropics/claude-code/issues/68721
- **影响**：Linux 用户升级后无法使用原生团队管理工具，属于从 2.1.177 开始的回归。
- **社区反应**：14 条评论，5 👍。用户需回退版本才能恢复功能。
- **标签**：bug, regression, platform:linux, area:agents

### 3. 2.1.181 API 无响应（#69358）
- **链接**：https://github.com/anthropics/claude-code/issues/69358
- **影响**：Linux 用户在最新版 v2.1.181 中持续遇到 API 无任何响应的问题。
- **社区反应**：2 条评论，11 👍（高赞）。影响范围较大，急需修复。
- **标签**：bug, regression, api:anthropic, platform:linux

### 4. 内置设计 MCP `claude_design` 自动注入且 401（#69324）
- **链接**：https://github.com/anthropics/claude-code/issues/69324
- **影响**：macOS 用户每次启动会话时自动注入 `claude_design` MCP 服务器，但认证失败（HTTP 401），即使禁用了 `frontend-design` 插件。
- **社区反应**：2 条评论，0 👍。属于持续性干扰。
- **标签**：bug, area:mcp, area:plugins, platform:macos

### 5. `/config` 对话框完全无法保存设置（#69466）
- **链接**：https://github.com/anthropics/claude-code/issues/69466
- **影响**：macOS 上 `/config` 对话框按 Enter 只会切换选项而非保存，只能按 Escape 放弃修改。疑似 v2.1.181 回归。
- **社区反应**：2 条评论，0 👍。用户无法调整任意设置。
- **标签**：bug, platform:macos, area:cli

### 6. Windows 桌面端会话重启后消失，JSONL 文件仍在（#59736）
- **链接**：https://github.com/anthropics/claude-code/issues/59736
- **影响**：Windows 用户在 Desktop 3p 创建的会话重启后从 UI 消失，但 `.jsonl` 文件还保留在磁盘上。
- **社区反应**：10 条评论，1 👍。
- **标签**：bug, platform:windows, area:desktop

### 7. JetBrains IDE 原生插件需求（#47166）
- **链接**：https://github.com/anthropics/claude-code/issues/47166
- **影响**：用户希望有类似 VS Code 扩展的 JetBrains 原生 Claude AI 助手接口插件。
- **社区反应**：25 条评论（今日最多），1 👍。讨论热度高但赞数较低，可能尚有争议。
- **标签**：enhancement, area:ide, platform:intellij

### 8. 语音输出辅助功能请求（#58429）
- **链接**：https://github.com/anthropics/claude-code/issues/58429
- **影响**：建议为桌面版增加内置选项朗读 Claude 回答，方便盲人或低视力用户以及手忙场景。
- **社区反应**：13 条评论，3 👍。
- **标签**：enhancement, area:a11y, area:desktop

### 9. rootfs.img.zst 校验和不匹配（#68514）
- **链接**：https://github.com/anthropics/claude-code/issues/68514
- **影响**：macOS Sequoia 15.7.7 ARM64 上安装/更新时出现 checksum 错误。
- **社区反应**：10 条评论，1 👍。怀疑是下载损坏或镜像问题。
- **标签**：bug, platform:macos（标记为 invalid，但已重新开放）

### 10. Skill 调用跟踪与使用分析（#35319）
- **链接**：https://github.com/anthropics/claude-code/issues/35319
- **影响**：组织用户希望获得 Skill 调用次数、使用频率等分析数据，以便管理。
- **社区反应**：5 条评论，29 👍（最高赞）。长期未解决但需求强烈。
- **标签**：enhancement, area:skills

## 重要 PR 进展（共 7 条）

由于过去 24 小时内只有 7 条 PR 有更新，以下全部列出：

### 1. 修复 lock-stale-issues 工作流分页失败（#69470）
- **链接**：https://github.com/anthropics/claude-code/pull/69470
- **内容**：将 offset 分页改为 search API，修复了自 2026-04-27 以来连续 53 次失败的定时任务。
- **状态**：已合并

### 2. 修复重复 IP 问题（#45553）
- **链接**：https://github.com/anthropics/claude-code/pull/45553
- **内容**：解决 IP 地址重复的问题。
- **状态**：打开中（创作于 2026-04-09，6月18日有更新）

### 3. 分页逻辑修复：当页不满时停止翻页（#68673）
- **链接**：https://github.com/anthropics/claude-code/pull/68673
- **内容**：修复脚本分页逻辑，在页未满时即终止翻页，而非仅当页为空时。
- **状态**：打开中

### 4. hookify 插件 Python 3.8 兼容性和 CWD 无关规则加载（#23972）
- **链接**：https://github.com/anthropics/claude-code/pull/23972
- **内容**：修复 `set -x` 和 `tuple[Dict, str]` 类型注解在 Python 3.8 下的兼容问题；修复规则加载依赖当前工作目录的问题。
- **状态**：打开中（创作于 2026-02-07）

### 5. 为 Claude Code 添加缺失的源代码（#41611）
- **链接**：https://github.com/anthropics/claude-code/pull/41611
- **内容**：添加缺失的源文件引用。
- **状态**：打开中

### 6. 开源 Claude Code（#41447）
- **链接**：https://github.com/anthropics/claude-code/pull/41447
- **内容**：声称将 Claude Code 开源，关闭 #59 等旧 Issue。
- **状态**：打开中（创作于 2026-03-31）

### 7. 更新 frontend-design skill 至 v1.1.0（#69226）
- **链接**：https://github.com/anthropics/claude-code/pull/69226
- **内容**：对前端设计技能进行改进，版本号升至 1.1.0，使已安装副本可获取更新。
- **状态**：已合并

## 功能需求归类

从近期 Issue 中梳理出以下几个反复出现的功能方向：

| 方向 | 代表 Issue | 需求描述 |
|------|-----------|----------|
| **IDE 深度集成** | #47166 | JetBrains 原生插件（非通用扩展） |
| **会话管理与恢复** | #59248, #59736, #60594 | 数据保留策略透明化、压缩会话可 /resume |
| **辅助功能** | #58429 | 语音输出、TUI 配色可配置 |
| **团队/协作增强** | #68721, #35319 | 原生团队管理工具（需修复回归）、Skill 使用分析 |
| **TUI 定制化** | #44423, #52160, #60786, #43216 | 边框颜色、窗口状态标识、用户输入颜色、项目级主题持久化 |
| **MCP 与插件可靠性** | #69324, #60224, #51385 | 自动注入 MCP 认证、MCP 初始化超时、OAuth 认证兼容性 |
| **API 稳定性** | #69358, #69465 | 服务端限流、API 无响应回归 |

## 开发者关注点

- **回归频发**：v2.1.178 团队管理工具消失、v2.1.181 `/config` 无法保存和 API 无响应，用户对版本质量信心下降。
- **数据安全恐慌**：会话记录被静默清理且无恢复手段（#59248），社区强烈要求提供 opt-in 确认和回收站机制。
- **MCP 生态系统摩擦**：内置 MCP 自动注入且不可禁用（#69324），导致每次启动弹错；第三方 stdio MCP 初始化超时导致工具静默丢失（#60224）。
- **桌面应用稳定性**：Windows 上会话重启后消失、macOS 上校验和失败、桌面版崩溃（#69318）等问题仍影响日常使用。
- **长期待办未解决**：Skill 分析（#35319，29👍）、JetBrains 插件（#47166，25 评论）等呼声高的功能数月无进展，用户开始重复提类似需求。

---

*数据截止时间：2026-06-19 UTC，来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，生成 2026 年 6 月 19 日的 OpenAI Codex 社区动态日报。

---

## OpenAI Codex 社区动态日报 | 2026-06-19

### 今日更新概览

昨日发布了 Rust 版 `v0.141.0` 正式版，带来远程执行加密通道及跨平台兼容性提升。社区讨论热度围绕 Windows 平台的功能回归与兼容性 Bug，以及 macOS 应用代码签名问题。多个涉及预算管理、远程主机连接和代理优化的 PR 正在推进中。

### 版本发布

- **rust-v0.141.0 (正式版)**: 0.141.0
  - **新特性**:
    - 远程执行器现使用经过身份验证的端到端加密 Noise 中继通道 (#26242, #26245)。
    - 跨平台远程执行现在会保留执行器本机的工作目录和 Shell，包括跨应用服务器和执行服务器边界的文件系统权限路径。
  - **下载**: [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.141.0)

- **多个 Alpha 版本**:
  - 发布了 `rust-v0.142.0-alpha.1`、`rust-v0.142.0-alpha.2`、`rust-v0.142.0-alpha.3` 以及 `rust-v0.141.0-alpha.7`。这些均为预发布版本，用于测试即将到来的功能。

### 社区热点 Issues

1.  **TUI 在 Zellij 中输出截断** ( #2558 )
    - **影响场景**: 使用 `codex-cli` 且运行在 Zellij 终端复用器内的用户。
    - **问题范围**: 输出的历史记录无法正确显示。该 Issue 已持续近一年，评论数高达 66 条，获得 114 个赞，是社区高度关注的历史遗留问题。
    - **社区反应**: 用户 `ForSeason` 报告，状态已关闭。
    - **链接**: [https://github.com/openai/codex/issues/2558](https://github.com/openai/codex/issues/2558)

2.  **Chrome 插件因 socket 连接错误导致超时** ( #21719 )
    - **影响场景**: 在 macOS 上使用 Codex Desktop 的 Chrome 浏览器自动化功能。
    - **问题范围**: Codex Desktop 自带的 Chrome 插件连接到错误的 socket，导致所有 `@chrome` 任务无法读取标签页或执行操作。
    - **社区反应**: 用户 `t17839339915-boop` 报告，12 条评论探讨了定位和复现步骤。
    - **链接**: [https://github.com/openai/codex/issues/21719](https://github.com/openai/codex/issues/21719)

3.  **从 Word 文档复制粘贴到聊天变成图片** ( #13730 )
    - **影响场景**: macOS 用户将 Microsoft Word 中的文本复制粘贴到 Codex 应用聊天框。
    - **问题范围**: 文本被错误地作为附加图像粘贴，而非纯文本。
    - **社区反应**: 用户 `STAlfsen` 报告，11 条评论中遇到了相同的困扰。
    - **链接**: [https://github.com/openai/codex/issues/13730](https://github.com/openai/codex/issues/13730)

4.  **CLI 图像生成回归: 有效图像未保存** ( #28422 )
    - **影响场景**: 使用 `codex-cli v0.140.0` 和 `gpt-5.4-mini` 模型生成图像。
    - **问题范围**: 图像已成功生成，但状态为“generating”，导致最终未被保存到本地。
    - **社区反应**: 用户 `aprendendo-codex` 报告，11 条评论，获 8 个赞，表明此回归影响较大。
    - **链接**: [https://github.com/openai/codex/issues/28422](https://github.com/openai/codex/issues/28422)

5.  **Windows 沙盒设置刷新失败 (OS Error 740)** ( #26158 )
    - **影响场景**: Windows 用户使用 Codex CLI 的沙盒模式。
    - **问题范围**: 自 v0.136.0 版本起，沙盒初始化失败，回滚至 v0.132.0 可正常工作。错误代码为 `CreateProcessAsUserW failed: 2`。
    - **社区反应**: 用户 `BaseBlank` 报告，11 条评论讨论了临时解决方案和版本比对。已关闭，推测已修复。
    - **链接**: [https://github.com/openai/codex/issues/26158](https://github.com/openai/codex/issues/26158)

6.  **WSL 代理模式初始化失败** ( #16815 )
    - **影响场景**: Windows 用户尝试将 Codex App 的代理环境切换到 WSL。
    - **问题范围**: 任务创建失败，报错 “AbsolutePathBuf deserialized without a base path”。
    - **社区反应**: 用户 `cc345` 报告，9 条评论，获得 7 个赞，是一个长期未解决的痛点问题。
    - **链接**: [https://github.com/openai/codex/issues/16815](https://github.com/openai/codex/issues/16815)

7.  **请求在 Desktop 和 iOS App 上提供更好的 SSH 密钥认证** ( #22857 )
    - **影响场景**: 通过 Desktop 或 iOS App 远程连接到 SSH 主机。
    - **问题范围**: SSH 密钥认证方式不够友好，用户希望有更便捷的密钥管理和验证流程。
    - **社区反应**: 用户 `rainx0r` 提出功能请求，9 条评论，10 个赞，显示了对远程连接功能的强烈兴趣。
    - **链接**: [https://github.com/openai/codex/issues/22857](https://github.com/openai/codex/issues/22857)

8.  **Windows 上 Chrome 扩展的 Native Messaging Host 注册表项缺失** ( #24040 )
    - **影响场景**: Windows 用户使用 Codex Desktop 的 Chrome 浏览器扩展。
    - **问题范围**: 由于缺少必要的 Windows 注册表键，Chrome 扩展无法与 Codex Desktop 通信，导致浏览器自动化功能失效。
    - **社区反应**: 用户 `JCEY289` 报告，8 条评论持续跟进，表明是一个常见的配置问题。
    - **链接**: [https://github.com/openai/codex/issues/24040](https://github.com/openai/codex/issues/24040)

9.  **浏览器插件启动失败: browser-client 不被信任** ( #25247 )
    - **影响场景**: 在 Codex Desktop App 内使用浏览器自动化插件。
    - **问题范围**: 安全校验导致插件启动初始化失败，提示“browser-client is not trusted”。
    - **社区反应**: 用户 `workpodsjun` 报告，8 条评论。
    - **链接**: [https://github.com/openai/codex/issues/25247](https://github.com/openai/codex/issues/25247)

10. **Codex 的 Git Diff 树引用破坏基于 libgit2 的 Git 客户端** ( #28241 )
    - **影响场景**: Windows 用户使用 Git GUI（如 GitHub Desktop、Sourcetree）或依赖 libgit2 的工具。
    - **问题范围**: Codex 生成的 `turn-diff` 树引用格式不标准，导致此类客户端无法解析仓库状态。
    - **社区反应**: 用户 `elachlan` 报告，7 条评论。
    - **链接**: [https://github.com/openai/codex/issues/28241](https://github.com/openai/codex/issues/28241)

### 重要 PR 进展

1.  **推动远程连接的端到端加密** ( #28707 )
    - **功能**: 当 rollout 预算耗尽时，主动中止当前对话轮次（turn），并通过现有 `CodexErr::TurnAborted` 错误传递此信息。
    - **链接**: [https://github.com/openai/codex/pull/28707](https://github.com/openai/codex/pull/28707)

2.  **优化远程插件的同步逻辑** ( #29005 )
    - **功能**: 当启用远程插件并使用 Codex 后端认证时，跳过启动时的 legacy `openai-curated` 仓库同步，加速启动。对于使用 API Key 或未认证的会话则保留原有行为。
    - **链接**: [https://github.com/openai/codex/pull/29005](https://github.com/openai/codex/pull/29005)

3.  **优化恢复（Resume）和 Fork 历史记录性能** ( #28806 )
    - **功能**: 应用基于检查点（checkpoint）的恢复和写时复制（copy-on-write）Fork 优化，显著减少`thread/resume`和`thread/fork`操作的历史工作量，同时保留对遗留或畸形 rollout 的回退行为。
    - **链接**: [https://github.com/openai/codex/pull/28806](https://github.com/openai/codex/pull/28806)

4.  **为 Remote Agent 添加共享认证系统代理合约** ( #26707 )
    - **功能**: 增加一个共享的认证/系统代理合约，作为后续 Windows 和 macOS 系统代理解析的基石。将 Codex 拥有的认证和启动 HTTP 客户端迁移到一个通用的路由感知边界。
    - **链接**: [https://github.com/openai/codex/pull/26707](https://github.com/openai/codex/pull/26707)

5.  **添加索引化网页搜索模式 (Indexed Web Search)** ( #28489 )
    - **功能**: 新增 `web_search = "indexed"` 模式，与 `disabled`、`cached`、`live` 并列。该模式专注于索引化网页搜索，用于优化搜索效率和成本。
    - **链接**: [https://github.com/openai/codex/pull/28489](https://github.com/openai/codex/pull/28489)

6.  **保留技能（Skill）描述在模型上下文之外** ( #29006 )
    - **功能**: 防止因技能描述超过 1024 字符限制而导致技能被丢弃。现在元数据将完整保留，仅向模型上下文发送截断后的描述片段，保证技能可被正常加载。
    - **链接**: [https://github.com/openai/codex/pull/29006](https://github.com/openai/codex/pull/29006)

7.  **避免图像生成的重复 Markdown 输出** ( #28996 )
    - **功能**: 修复了生成图片有时会重复渲染为行内 Markdown 和“open in”按钮的问题，用户反馈“感觉看到了三个相同的图像生成结果”。
    - **链接**: [https://github.com/openai/codex/pull/28996](https://github.com/openai/codex/pull/28996)

8.  **为凭据路由添加后端适配器** ( #28984 )
    - **功能**: 为托管代理（managed proxy）增加一个小型适配器，用于在认证的后端路由发现和代理拥有的凭据路由类型之间进行转换，保持 `codex-core` 的纯净。
    - **链接**: [https://github.com/openai/codex/pull/28984](https://github.com/openai/codex/pull/28984)

9.  **通过 MITM 代理路由带凭据的流量** ( #22675 )
    - **功能**: 为托管代理增加一个通用 MITM 操作，当 Codex 知道哪些 URL 前缀有存储的凭据时，可以自动将匹配的 HTTPS 流量通过凭据代理端点进行路由。
    - **链接**: [https://github.com/openai/codex/pull/22675](https://github.com/openai/codex/pull/22675)

10. **记录远程执行服务器生命周期指标** ( #27470 )
    - **功能**: 开始记录远程环境注册、Noise 连接建立的重试次数和持续时间等指标，用于监控远程执行服务器的稳定性和性能。
    - **链接**: [https://github.com/openai/codex/pull/27470](https://github.com/openai/codex/pull/27470)

### 功能需求归类

从今日更新的 Issues 中，用户反馈的功能需求主要集中在以下几个方面：

- **Windows 稳定性与兼容性**: 大量 Issue 指向 Windows 平台功能受挫，包括 WSL 代理模式、沙盒初始化、Chrome 插件注册表、VS Code 扩展白屏及文件树截断等问题。
- **跨平台体验一致性**:
  - **macOS**: 用户反馈应用代码签名验证失败、从 Word 粘贴文本变为图片、以及从桌面端远程连接 SSH 时的密钥认证体验问题。
  - **Windows**: 用户报告 Codex 在任务栏无图标、Bitdefender 误报、`Settings`按钮无响应等问题。
- **资源管理与效率**:
  - **预算**: 多位用户报告预算消耗异常快速（#28879, #28811），涉及具体用量计算和重置机制问题。
  - **性能**: 用户报告 `logs_2.sqlite-wal` 文件无限增长（#28997）以及 `syspolicyd/trustd` 高 CPU 占用（#28583）。
- **核心功能可靠性**:
  - **图像生成**: #28422 指出生成图像未被保存的回归 Bug，直接影响用户体验。
  - **插件/技能**: 多个 Issue 关于插件初始化失败（#25247）、技能加载被描述长度限制卡住（#28330）和 `subagent_notification` 消息混乱（#24225）。

### 开发者关注点

开发者在反馈中普遍流露出以下关注点：

1.  **Windows 平台已成主要痛点**: 频繁的报告显示，Windows 用户在使用远程执行、沙盒和浏览器自动化时，遇到了比其他平台更多的基础设施兼容性问题，严重影响了使用体验和信任感。
2.  **核心流程的“琐碎” Bugs 消耗信任**: 从“粘贴文本变图片”到“生成图像不保存”，再到“按钮无响应”，这些看似小题的 Bug 实际上正在消耗用户对应用日常基本功能的信赖。
3.  **资源预算的透明度和公平性**: 围绕预算消耗激增的讨论，显示用户对预算计算逻辑感到困惑且缺乏控制感。他们期望更透明、可预测的计费机制和预算提醒。
4.  **沙盒和远程连接的安全性与复杂性**: 对 SSH 密钥认证、加密通道、CA 证书管理等 PR 的频繁讨论，反映了开发者对执行环境安全性的高度关注，以及对当前配置复杂性的不满。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为你生成的 2026-06-19 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 — 2026-06-19

## 今日更新概览
今日社区动态主要集中在 **v0.47.0 版本的正式发布**，以及围绕 **Agent 核心稳定性**（如挂起、子代理成功误报）和 **Auto Memory 系统**的持续改进。开发者在 **Shell 命令执行卡死**和 **VSCode 扩展认证**方面反馈了新的问题，而 PR 侧则重点修复了文件写入编码错误、命令行提示符参数损坏等关键 bug。

## 版本发布
### v0.47.0 正式版
项目正式发布了 **v0.47.0** 版本。本次更新的核心内容是合并了 `v0.46.0-preview.0` 的变更日志，并对后端定义（backend def）进行了处理。
- 链接: https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0

## 社区热点 Issues
1.  **[Bug] 通用 Agent 挂起问题 (#21409)**
    - **影响场景**: 核心 Agent 功能。当 Gemini CLI 将任务委托给通用 Agent 时，会出现无限期挂起（长达一小时），即使是简单的文件夹创建操作也会失败。
    - **社区反馈**: 该问题获得 8 个 👍，用户反馈强烈。临时解决方法是手动指示模型不要委托给子 Agent。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21409

2.  **[Bug] 子 Agent 达到最大轮次后错误报告成功 (#22323)**
    - **影响场景**: Agent 任务执行的可靠性。`codebase_investigator` 子 Agent 在达到轮次上限后，错误地报告为 `status: "success"` 和 `Termination Reason: "GOAL"`，导致用户误以为任务成功完成。
    - **社区反馈**: 用户明确指出了核心问题逻辑矛盾，请求修复。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22323

3.  **[Bug/Feature] Agent 不主动使用自定义技能和子 Agent (#21968)**
    - **影响场景**: 用户自定义扩展能力。开发者反映，Gemini 基本不会自主调用用户定义的 `skills` 和 `sub-agents`，即使任务描述高度相关。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21968

4.  **[Bug] Shell 命令执行结束后卡死在“等待输入”状态 (#25166)**
    - **影响场景**: 命令行交互体验。执行完如 `ls` 等简单命令后，CLI 会错误显示命令仍在执行并“等待用户输入”，导致流程中断。
    - **社区反馈**: 获得 3 个 👍，是高频复现的用户痛点。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/25166

5.  **[Bug] 浏览器子 Agent 在 Wayland 环境下失败 (#21983)**
    - **影响场景**: 对使用 Wayland 显示协议的 Linux 用户。浏览器子 Agent 无法正常运行。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21983

6.  **[Bug] Auto Memory 无限重试低信号会话 (#26522)**
    - **影响场景**: Auto Memory 功能的效率。如果 Agent 判定某次会话“信号低”而选择不读取，该会话不会被标记为“已处理”，导致背景提取器反复重试，造成资源浪费。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/26522

7.  **[Bug] VSCode 扩展出现无限认证错误 (#28019)**
    - **影响场景**: VSCode IDE 集成。用户打开扩展后，登录页面无限加载，随后提示“已达到限制”或“在您所在区域不可用”。
    - **社区反馈**: 这是今日新提交的 Issue，可能影响大量 VSCode 用户。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/28019

8.  **[Bug/Feature] Agent 应阻止/劝阻破坏性行为 (#22672)**
    - **影响场景**: 安全性。在操作复杂 Git 命令或数据库时，Agent 可能会使用 `git reset --force` 等具有潜在破坏性的命令，而安全选项（如 `git branch -d`）存在。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22672

9.  **[Bug] 模型频繁在随机位置创建临时脚本 (#23571)**
    - **影响场景**: 工作空间整洁度。由于限制了模型直接执行 Shell，模型倾向于在多个目录下生成编辑脚本，造成清理困难。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/23571

10. **[Bug] 超过 128 个工具时遭遇 400 错误 (#24246)**
    - **影响场景**: 工具链扩展。当启用的工具数量超过上限时，Gemini CLI 会返回 400 错误，无法正常工作。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/24246

## 重要 PR 进展
1.  **修复 Jupyter Notebook 和 JSON 文件写入损坏 (#28000)**
    - **内容**: 解决了 `write_file` 工具在写入 `.ipynb` 和 `.json` 文件时，会静默破坏文件结构，导致无法解析或数据丢失的严重 Bug。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28000

2.  **修复 Web 抓取时的编码问题 (#27996)**
    - **内容**: `web-fetch` 工具不再硬编码使用 UTF-8 解码，而是正确解析 HTTP 响应头中的 `charset` 参数（如 GBK、ISO-8859-1），修复了非 UTF-8 网站内容乱码的问题。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27996

3.  **修复提示词替换中的 `$` 参数损坏 (#28013)**
    - **内容**: 修复了 `applySubstitutions` 函数中，当技能、子代理或工具描述包含 `$` 符号时（例如 `$`、`$&`），会导致替换逻辑错误，原生变为 undefined 或错误值的 Bug。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28013

4.  **修复 Git 分支名在 WSL 下不更新 (#28012)**
    - **内容**: 解决了在 WSL 或网络文件系统上执行 `git checkout` 后，CLI 底部的分支指示器不刷新、卡在旧分支名的问题。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28012

5.  **依赖版本固定与更新冷却 (#27948)**
    - **内容**: 将所有直接依赖严格锁定到精确版本，并强制执行 14 天的依赖更新冷却期，以减少因依赖意外升级导致的 CI 不稳定。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27948

6.  **实现 Cloud Run Webhook 处理服务 (#28015)**
    - **内容**: 为 Caretaker Agent 实现了 GitHub Webhook 事件接收服务，包括签名验证、Issue 入库和消息发布到 Pub/Sub。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28015

7.  **新增 `eval:inventory` 命令 (#28009)**
    - **内容**: 添加了一个新命令 `npm run eval:inventory`，用于列出仓库中所有定义的评估用例。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28009

8.  **新增 `models` 命令 (#27848)**
    - **内容**: 为 CLI 添加了 `gemini models` 命令，用户可借此列出所有可用 Gemini 模型、其上下文窗口大小和层级，支持文本和 JSON 输出。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27848

9.  **修复 macOS 上符号链接路径测试失败 (#27990)**
    - **内容**: 解决了 `EditTool` 和 `WriteFileTool` 在 macOS 上因 `/var` 指向 `/private/var` 的符号链接导致测试失败的问题。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27990

10. **OpenTelemetry 依赖批量更新 (#27954)**
    - **内容**: 批量升级了项目中的 OpenTelemetry 相关依赖包，以获取最新的性能和修复补丁。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27954

## 功能需求归类
从今日的 Issues 和 PR 中，可以归纳出以下持续存在的功能方向：
- **Agent 行为改善**: 用户反复要求 Agent 能更智能地、自主地使用用户定义的技能和子代理，并避免产生破坏性的操作。
- **核心稳定性**: 解决 Agent 挂起、子代理任务状态误报、Shell 命令执行后卡死等严重影响使用流程的 Bug 是当前的首要需求。
- **文件与编码支持**: 对特定文件格式（如 `.ipynb` 和 `.json`）的写入保护和正确处理非标准字符编码，是提升工具兼容性的重点。
- **内存系统完善**: 关于 Auto Memory 的 Issue 显示了社区对避免不必要的算力浪费、精准提取信息和管理无效信息的强烈需求。
- **IDE 集成**: VSCode 扩展新出现的认证问题，凸显了用户在跨平台和不同网络环境下获得稳定 IDE 交互体验的诉求。

## 开发者关注点
- **Agent 过度“成功”汇报**: 开发者指出，子代理在被中断（如达到最大轮次）后依然报告“任务成功”，这是一个明显的逻辑漏洞，可能导致用户错过重要反馈。
- **Shell 交互卡死**: Shell 命令执行完毕后被误判为“等待输入”，这是一个高优先级的交互 Bug，直接打断了开发者对命令状态判断的准确性。
- **WSL / 特殊文件系统体验**: 在 WSL 环境下 Git 分支名不刷新、macOS 上符号链接路径错误等问题，表明非标准文件系统下的兼容性仍需打磨。
- **Auto Memory 的资源管理**: 社区对 Auto Memory 无限重试低价值会话、生成无效补丁文件的反馈，表明用户对后台自动化功能的性能和质量非常敏感。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是 2026 年 6 月 19 日的 GitHub Copilot CLI 社区动态日报。

---

## GitHub Copilot CLI 社区动态日报 (2026-06-19)

### 1. 今日更新概览

今日社区活跃度极高，共有 38 个 Issue 和 1 个 PR 在 24 小时内获得更新。核心焦点集中在 **MCP（Model Context Protocol）** 的认证与子代理兼容性问题、权限控制系统（沙箱/内容排除）的稳定性缺陷，以及临时会话恢复时的状态分裂（session split）等影响日常使用的严重 Bug。此外，社区对模型兼容性和“插件”及“指令”共享的需求持续升温。

### 2. 版本发布

无

### 3. 社区热点 Issues（10条）

1.  **[#3838] Drive MCP OAuth未正确附加：重新认证成功后工具仍报错** - 核心问题在于 OAuth 流程表面成功且生成本地缓存，但发出的请求实际未携带认证凭据，导致 Drive 工具调用失败。此问题涉及认证（authentication）和 MCP 两大敏感领域，影响使用 Drive 等第三方 MCP 服务器的开发者。
    - 链接: https://github.com/github/copilot-cli/issues/3838

2.  **[#3700] WSL2 严重回归：空闲时CPU占用约215%，TUI输出冻结** - 这是一个高严重性 (High severity) 的 Bug，在 WSL2 环境下几乎每次新会话都会复现。CLI 在空闲时出现高 CPU 占用，且终端 UI (TUI) 输出卡死，必须重启才能恢复。这严重影响了 WSL2 用户的日常使用体验。
    - 链接: https://github.com/github/copilot-cli/issues/3700

3.  **[#3860] 内容排除（content-exclusion）过度拦截：阻止包括 /dev/null 在内的所有操作** - 这是一个高严重性 Bug。当内容排除规则触发后，进入“广域拦截”状态，导致包括写入 `/dev/null` 在内的所有文件操作均被拒绝，严重破坏了会话的可用性。
    - 链接: https://github.com/github/copilot-cli/issues/3860

4.  **[#3859] Copilot Subconscious后台侧边栏在记忆禁用后仍持续生成** - 用户反映，即使通过命令或配置完全禁用“Copilot Memory”，名为“Subconscious”的后台智能体（sidekick）仍会在每次提问时启动。这引发了对资源消耗和用户控制权的担忧。
    - 链接: https://github.com/github/copilot-cli/issues/3859

5.  **[#3839] Ollama Cloud不支持 Copilot CLI 的 custom_tool_call 负载** - 使用 BYOK（自带密钥）模式通过 Ollama Cloud 调用模型时，由于请求包含“custom_tool_call”格式，会导致请求失败（400错误）。这限制了用户在使用灵活模型路由时的兼容性。
    - 链接: https://github.com/github/copilot-cli/issues/3839

6.  **[#3856] 在缓慢的 /resume 选择器中多次按回车导致会话分裂** - 这是一个复杂的 Bug。在恢复一个长时间运行的会话时，如果在 `/resume` 选择器中多次按回车，可能会导致扩展插件发起的 `session.send` 调用错误地路由到不可见的上下文，导致主会话丢失工具且状态混乱。
    - 链接: https://github.com/github/copilot-cli/issues/3856

7.  **[#3812] 子代理无法再访问 MCP 工具** - 用户报告自定义子代理无法看到和访问 MCP 工具，推测与 MCP 工具的延迟加载有关。此问题可能导致依赖子代理调用 MCP 服务的工作流中断。
    - 链接: https://github.com/github/copilot-cli/issues/3812

8.  **[#3846] 计划审查（Plan review）菜单与严格兼容的 OpenAI 后端不兼容** - 该问题指出，当使用不支持函数调用（function_call）元数据的后端时，计划审查菜单无法正常显示。这提示需要增加兼容性回退机制。
    - 链接: https://github.com/github/copilot-cli/issues/3846

9.  **[#3857] 功能请求：为“允许目录访问”对话框增加“仅本次会话”选项** - 用户希望在临时访问某些目录时，不必永久授权。这是一个明确的功能需求，旨在提升安全性和使用的灵活性。
    - 链接: https://github.com/github/copilot-cli/issues/3857

10. **[#3518] 功能请求：增加取消归档/恢复已归档会话的能力** - 用户反馈误归档了包含大量上下文和子会话的重要会话，但无法恢复。这是一个高赞（👍 5）的功能请求，强调了会话管理功能的重要性。
    - 链接: https://github.com/github/copilot-cli/issues/3518

### 4. 重要 PR 进展 (1条)

1.  **[#3847] Plan review: 增加兼容性回退设计与测试用例** - 针对 Issue [#3846] 的问题，该 PR 提出了一个解决方案，包括 JSON优先的解析策略和 YAML、数字/列表启发式解析方法，并附带了测试用例。这展现了社区在解决模型兼容性问题上的积极贡献。
    - 链接: https://github.com/github/copilot-cli/pull/3847

### 5. 功能需求归类

-   **MCP (Model Context Protocol) 生态与兼容性**：社区对 MCP 工具的稳定性、认证流程（#3838）以及跨子代理的访问（#3812）提出了明确的需求。同时，用户也在探索如何让 MCP 融入更灵活的后端（#3839）。
-   **会话管理与状态持久性**：出现了多个与会话状态管理相关的问题和请求，包括恢复已归档会话（#3518）、避免会话“分裂”（#3856），以及处理由特定文件（#3791）或操作引发的会话“中毒”问题。
-   **沙箱与权限系统健壮性**：权限系统的 Bug 是高关注度区域。这包括内容排除规则的过度拦截（#3860）、后台 hooks 无法触发（#3013）以及文档与实际行为不符（#3861）。
-   **模型兼容性**：用户对非标准 OpenAI 后端的兼容性越来越关注，具体体现在计划审查菜单（#3846）、自定义工具调用格式（#3839）以及 CLI 与 VS Code 显示 effort 不一致（#3851）等问题。
-   **插件/指令共享与安装**：用户持续要求改进插件和指令文件的共享与管理机制，包括允许插件包含指令文件（#2727），以及更稳定的本地安装方案（#3136）。

### 6. 开发者关注点

-   **WSL2 性能与可用性**：WSL2 上的高 CPU 占用和 TUI 卡死（#3700）是高频痛点，直接导致开发者在 WSL2 上的工作流中断，修复优先级很高。
-   **权限与安全功能的可靠性**：无论是内容排除（#3860）、钩子（hooks）的执行时机（#3013）还是 MCP 认证（#3838），开发者普遍反映了这些安全/权限功能的不可预测性，这损害了用户对工具的信任。
-   **会话管理的复杂性和脆弱性**：会话恢复时的问题（#3856、#3518）表明会话状态管理仍有待改进，尤其是在涉及多上下文（如子代理、扩展）的长会话场景下。
-   **功能退化 (Regressions)**：社区多次提到“之前正常，升级后不正常”的退化问题（如 #3812、#3834 的 `@filename` 展开），这表明新版本的测试覆盖，特别是在回归测试方面，仍有提升空间。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-19

## 今日更新概览

过去 24 小时内，Kimi Code CLI 仓库新增 3 条活跃 Issue（1 条已关闭）和 1 条开放 PR。主要聚焦于网络代理兼容性修复、Windows 环境下的扩展安装问题，以及用户对 MCP 服务器/插件/技能配置体验的反馈。

## 社区热点 Issues

### 1. [#2455] [Bug] FetchURL 未读取系统代理，被墙环境下无法访问外网
- **状态**: 开放
- **作者**: @KuangYin-Z
- **影响场景**: 在存在 HTTP 代理/HTTPS 代理且被墙的环境中，使用 `FetchURL` 或 `WebSearch` 时，Kimi Code CLI 无法联网，而同一终端下的 `curl` 命令却能正常通过代理访问外网。用户使用的是 Linux WSL2 环境、Kimi Code 1.43.0 版本。
- **社区反应**: 2 条评论，0 👍。该 issue 已被关联 PR #2461 直接修复。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2455

### 2. [#2462] [Bug] Windows + Git Bash: VS Code 扩展无法解压内置 CLI（tar 无法处理 zip）
- **状态**: 开放
- **作者**: @yplgame
- **影响场景**: 在 Windows 10 x64 系统上使用 Git Bash (MSYS2) 时，Kimi Code VS Code 扩展自带的 CLI 压缩包为 zip 格式，而 Git Bash 中的 `tar` 命令无法处理 zip，导致扩展初始化失败。
- **社区反应**: 暂无评论。该问题会影响 Windows 用户通过 VS Code 扩展使用 Kimi Code 的体验。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2462

### 3. [#2460] [反馈] 引导和配置 MCP 服务器、插件和子技能的体验过于复杂
- **状态**: 已关闭（无官方回应）
- **作者**: @PowerBeef
- **影响场景**: 用户反馈虽然 Kimi Code 在正确连接后表现良好，但设置 `cua-driver`、多个 MCP 服务器、插件以及用户技能/子技能包时，配置流程不够直观、耗时较长。希望能简化配置步骤或提供更清晰的文档。
- **社区反应**: 一条反馈，无评论，已关闭。反映了新用户上手的配置痛点。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2460

## 重要 PR 进展

### 1. [#2461] fix(net): honour system proxy env vars in aiohttp sessions
- **状态**: 开放
- **作者**: @logicwu0
- **修复内容**: 针对 Issue #2455，所有通过 `aiohttp` 发出的 HTTP 请求（包括 `FetchURL` 和 `WebSearch`）默认未读取 `HTTP_PROXY` 和 `HTTPS_PROXY` 环境变量。该 PR 修改了会话创建逻辑，使其遵循系统代理设置，从而在存在代理的环境中能正常访问外部网络。
- **备注**: 暂无维护者审查评论，但该 PR 直接解决了因代理导致的功能不可用问题，对处于受限网络环境的用户意义重大。
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2461

## 功能需求归类

从今日活跃的 Issues/PR 中，可归类的功能方向有：

- **网络代理兼容性**（#2455, #2461）：用户在受控网络环境中需要 CLI 正确读取系统代理变量，这是当前最紧急的修复方向。
- **Windows 环境兼容性**（#2462）：VS Code 扩展在 Windows+Git Bash 下因压缩格式预期不匹配而失败，需考虑跨平台打包格式或使用 `unzip` 替代方案。
- **配置体验简化**（#2460）：MCP 服务器、插件、技能等扩展机制的配置学习曲线较高，用户希望更直观的引导或示例配置。

## 开发者关注点

- **代理问题优先级高**：有用户明确报告 "cannot access the external network in a blocked environment"，而社区已快速提交修复 PR，说明该问题对日常使用影响较大。
- **Windows 扩展安装受阻**：部分 Windows 开发者通过 VS Code Git Bash 环境启动时，扩展直接无法解压 CLI，属于开箱即用的兼容性缺陷。
- **配置复杂度影响用户留存**：虽然功能强大，但 "setup experience harder than it needs to be" 的反馈表明，降低新用户的学习门槛可能是下一阶段产品迭代的潜在优化方向。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 2026-06-19 OpenCode 社区动态日报

## 今日更新概览

截至2026年6月18日晚间，OpenCode 社区在过去24小时内保持活跃，共有50个Issue和50个PR被更新。其中，关于Alpine Linux (musl) 下TUI因符号缺失而崩溃的回归问题（#27589）讨论热度最高（35条评论）；同时，开发者社区对多认证配置文件（#5391）和基于任务类型自动切换模型（#8456）等功能的呼声持续攀升。

## 社区热点 Issues

1. **#27589 TUI fails on Alpine Linux (musl) in 1.14.50: getcontext symbol not found** 🔥 35条评论
   - **影响场景**：在基于 musl libc 的 Linux 发行版（如 Alpine）上运行 OpenCode 1.14.50 时，TUI 渲染库因找不到 `getcontext` 符号而无法初始化。
   - **社区反应**：用户 @ncopa 报告此为回归问题，1.14.48 版本正常。该问题获得12个赞，是当前最受关注的Bug。
   [查看详情](https://github.com/anomalyco/opencode/issues/27589)

2. **#14289 model "claude-opus-4.6" not supported for vision** ✨ 19条评论
   - **影响场景**：用户尝试使用最新 Anthropic 模型 `claude-opus-4.6` 时，发现其视觉能力未被支持。
   [查看详情](https://github.com/anomalyco/opencode/issues/14289)

3. **#450 Support for reasoning_effort parameter in UI** 💡 14条评论 / 26 👍
   - **影响场景**：多个模型（OpenAI、Gemini、Deepseek等）支持 `reasoning_effort` 参数，但UI中无法设置。
   [查看详情](https://github.com/anomalyco/opencode/issues/450)

4. **#25630 Regression: plugin provider.models() hook no longer populates custom providers** 12条评论
   - **影响场景**：PR #25167 合并后，插件提供的 `provider.models()` 钩子无法为用户自定义提供商（不在公开catalog中的 provider id）填充模型列表。
   [查看详情](https://github.com/anomalyco/opencode/issues/25630)

5. **#16610 Opencode hangs at startup if a .git repo is present and inotify user instances run out** 11条评论
   - **影响场景**：当系统限制 `inotify` 用户实例数（如 16 个）时，在包含 `.git` 目录的路径下启动 OpenCode 会完全挂起。
   [查看详情](https://github.com/anomalyco/opencode/issues/16610)

6. **#5391 [FEATURE]: multiple auth profiles per provider** 💡 11条评论 / 31 👍
   - **影响场景**：用户希望在同一个提供商下配置多组认证凭据，以便在不同项目或工作流中灵活切换。
   [查看详情](https://github.com/anomalyco/opencode/issues/5391)

7. **#8456 [FEATURE]: opencode could automatically use different models based on task type** 💡 9条评论 / 37 👍
   - **影响场景**：领先的AI编码工具支持按任务类型（如编码、架构、debug）自动选择不同模型，用户希望 OpenCode 也集成此能力。
   [查看详情](https://github.com/anomalyco/opencode/issues/8456)

8. **#30680 OpenCode immediately enters auto-compaction loop and stops generating responses** 7条评论
   - **影响场景**：OpenCode 在启动后立即陷入自动压缩循环，消耗大量 token 且不再响应任何用户输入，即使在新分区也如此。
   [查看详情](https://github.com/anomalyco/opencode/issues/30680)

9. **#30697 Move project folder to path B...OpenCode still opens and navigates to old path A** 6条评论
   - **影响场景**：Windows 环境下，将项目从路径A移动到路径B并删除A后，OpenCode 仍尝试打开不存在的旧路径。
   [查看详情](https://github.com/anomalyco/opencode/issues/30697)

10. **#30877 [Bug] v1.16.0: TUI sidebar "Modified Files" section completely hidden after path truncation fix** 5条评论 / 8 👍
    - **影响场景**：升级到v1.16.0后，TUI右侧边栏的“Modified Files”完全不渲染，用户无法看到未提交的变更。
    [查看详情](https://github.com/anomalyco/opencode/issues/30877)

## 重要 PR 进展

1. **#32924 Draft: Add native /goal foundation** 🏗️
   - **功能**：引入原生 `/goal` 基础，包括目标域模型、状态机、关系图和通过同步命令实现的基本生命周期。当前为草稿，需拆分后合并。
   [查看详情](https://github.com/anomalyco/opencode/pull/32924)

2. **#32922 fix: /unshare does not remove share link from TUI display** ✅ 新提交
   - **修复**：确保运行 `/unshare` 后，共享链接立即从本地同步显示状态中移除。
   [查看详情](https://github.com/anomalyco/opencode/pull/32922)

3. **#32914 docs: add GMI Cloud provider entry to providers directory** 📖
   - **文档**：新增 GMI Cloud 到提供商文档目录，包含连接设置和模型选择说明。
   [查看详情](https://github.com/anomalyco/opencode/pull/32914)

4. **#32919 fix: type safety and code hygiene improvements** 🔧
   - **修复**：恢复 Copilot 聊天块类型安全，修正 EventBridge 类型等代码改进。
   [查看详情](https://github.com/anomalyco/opencode/pull/32919)

5. **#32743 feat(session): native per-session goals with /goal and autonomous pursuit** ✨
   - **功能**：新增持久化的会话级目标，通过 `/goal` 命令管理，并支持AI自主追求。
   [查看详情](https://github.com/anomalyco/opencode/pull/32743)

6. **#32854 fix(core): tolerate file watcher startup failures** 🐛 **已合并**
   - **修复**：使文件监控初始化失败不再导致TUI崩溃或挂起，降级为警告日志，仅禁用自动刷新。
   [查看详情](https://github.com/anomalyco/opencode/pull/32854)

7. **#28246 fix: pass onprogress to callTool so progressToken is set and long-running MCP tools dont time out** 🐛 **已合并**
   - **修复**：将 `onprogress` 传递给 MCP 工具的 `callTool`，防止长时间运行的工具因缺少 `progressToken` 而超时。
   [查看详情](https://github.com/anomalyco/opencode/pull/28246)

8. **#28245 fix(session): include friendly provider name in system identity prompt** 🐛 **已合并**
   - **修复**：在系统提示的身份信息行中，使用提供商友好名称而非原始ID显示。
   [查看详情](https://github.com/anomalyco/opencode/pull/28245)

9. **#28232 feat: i18n - add Italian (it) locale** 🌐 **已合并**
   - **功能**：新增完整的意大利语本地化支持，覆盖应用与UI组件层上千个键值。
   [查看详情](https://github.com/anomalyco/opencode/pull/28232)

10. **#28224 feat(plugin): add experimental.message.store.before hook** ✨ **已合并**
    - **功能**：新增插件钩子，允许在消息部分写入SQLite之前进行拦截处理。
    [查看详情](https://github.com/anomalyco/opencode/pull/28224)

## 功能需求归类

- **模型与提供商支持**：社区持续要求支持更多模型，包括 Claude Opus 4.6 的视觉能力（#14289）、NanoGPT 提供商缺失的模型（#11787）、在Go订阅中添加非中国模型（#32904）。此外，还希望UI能支持 `reasoning_effort` 参数（#450）。
- **性能与稳定性**：多份反馈与文件监控相关——Linux 下 inotify 实例耗尽导致挂起（#16610）、自动压缩 token 循环（#30680）。也有关于 TUI 输入延迟的反馈（#32859）。一个修复PR（#32854）已被合并以容忍文件监控故障。
- **UI/UX**：用户希望基于任务类型自动切换模型（#8456），递归技能发现（#21495），以及多文件 `apply_patch` 时展示所有文件的 diff（#17076）。同时，TUI侧边栏隐藏问题（#30877）影响使用体验。
- **MCP 与插件生态**：MCP 工具参数序列化错误（#28472）、MCP 调用缺少进度指示器（#26328）、插件钩子回退（#25630）和注册 agent 在更新后丢失（#30855），反映了插件系统稳定性需求。
- **项目/路径管理**：跨平台的项目路径持久化问题集中出现，包括 Windows 上移动/删除项目后 OpenCode 仍访问旧路径（#30697、#31888），以及 `@` 文件引用不包含启动后创建的文件（#32747、#32915）。

## 开发者关注点

1. **TUI 输入性能**：多位开发者反馈 TUI 在 1.17.8 版本存在严重输入延迟，即使关闭所有插件和 MCP 也依然卡顿（#32859）。
2. **文件监控与索引**：开发者关注文件监控的稳定性——inotify 实例耗尽会导致启动挂起（#16610），而 `@` 文件引用索引不刷新（#32747、#32915）则影响日常操作效率。
3. **MCP 工具参数类型**：参数为 `object` 类型时被序列化为字符串的问题（#28472）影响了与 MCP 服务的集成。
4. **API Token 计费**：有多条独立反馈（#32911、#32846）指出在1.17.x版本中使用 Deepseek API 时存在超额计费问题，这直接影响了用户的 API 使用成本。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-19

## 📅 今日更新概览

过去 24 小时内，Qwen Code 发布了 v0.18.3-nightly.20260618 版本，修复了文件历史中 sed 编辑追踪的问题。社区共有 50 条 Issues 和 50 条 PRs 获得更新，其中多项修复集中在核心解析器、OAuth 令牌管理、会话搜索输入及跨平台兼容性上。开发者 @tt-a1i 贡献了多组输入校验相关的 Bug 修复，社区对 Token 消耗统计、QQ 机器人适配等功能需求讨论活跃。

---

## 🚀 版本发布

### v0.18.3-nightly.20260618.bc3e0b405
- **主要变更**：修复核心模块对文件历史中受支持的 sed 编辑进行追踪（`fix(core): Track supported sed edits in file history`）。

---

## 🔥 社区热点 Issues（10 条）

### 1.  #4479 – 需求：统计每日 Token 消耗量
- **状态**：CLOSED | **评论**：16
- **摘要**：用户希望 Qwen Code 能显示每日使用的 Token 数量，担心一次性使用消耗过高（如 3000 万 Token）。
- **链接**：https://github.com/QwenLM/qwen-code/issues/4479

### 2.  #4987 – PR #4779 静默回退了已合并的 #4652 功能
- **状态**：CLOSED | **评论**：5
- **摘要**：开发者发现 PR #4779 在解决冲突时意外撤销了 #4652 的 IME 光标定位功能，要求 PR 内解决冲突而非回退无关特性。
- **链接**：https://github.com/QwenLM/qwen-code/issues/4987

### 3.  #5261 – 升级后无法展开 Thinking 块
- **状态**：CLOSED | **评论**：4
- **摘要**：更新到 v0.18.2 后，屏幕只显示 “Thought for 1s”，缺少可折叠的 Thinking 块或展开快捷键。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5261

### 4.  #5147 – `/quit` 后 OOM（自动内存管理导致）
- **状态**：CLOSED | **评论**：3
- **摘要**：短会话在执行 `/quit` 后仍可能因 `managed auto-memory` 后台任务触发 V8 堆内存溢出，已通过 #5181 修复。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5147

### 5.  #5201 – 功能请求：QQ 机器人 Channel Adapter
- **状态**：CLOSED | **评论**：3
- **摘要**：用户提议新增 QQ 机器人官方通道适配器，支持 WebSocket Gateway、消息收发等，与 Telegram、微信等并列。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5201

### 6.  #5348 – Cron 解析器接受无效数字字段（如 `5x`）
- **状态**：CLOSED | **评论**：3
- **摘要**：`parseCron()` 使用 `parseInt` 解析字段时未做完整 token 校验，导致 `5x * * * *` 被错误接受。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5348

### 7.  #5365 – FileTokenStorage 首次保存时无法创建令牌文件
- **状态**：OPEN | **评论**：3
- **摘要**：`setCredentials()` 调用 `loadTokens()` 但文件不存在时抛出异常，应改为自动创建空令牌文件。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5365

### 8.  #5339 – GIF 图片总是回退到默认 tokenizer 尺寸
- **状态**：CLOSED | **评论**：3
- **摘要**：`ImageTokenizer` 的 GIF 尺寸解析代码因缺少 `image/gif` 在 `SUPPORTED_IMAGE_MIME_TYPES` 中，导致 GIF 图像始终获得 `512x512` 回退。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5339

### 9.  #5159 – macOS tmux 中触控板滚动触发历史导航
- **状态**：CLOSED | **评论**：3
- **摘要**：在 tmux 会话中使用触控板上下滑动会循环显示历史输入，而非滚动对话视图，影响 macOS 用户交互。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5159

### 10. #5370 – Grep 输出解析丢弃包含冒号的文件路径
- **状态**：OPEN | **评论**：2
- **摘要**：grep 解析器按 `filePath:lineNumber:content` 拆分，若路径中有冒号（如 `dir:name/file.txt`），则匹配被忽略。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5370

---

## 🔧 重要 PR 进展（10 条）

### 1.  #4850 – `feat(extensions): interactive multi-tab /extensions manager`
- **状态**：OPEN | **评论**：-
- **摘要**：将 `/extensions` 改为交互式多标签管理器（Installed / Discover / Sources），覆盖扩展安装、发现、配置和移除全流程。
- **链接**：https://github.com/QwenLM/qwen-code/pull/4850

### 2.  #5358 – `fix(cli): validate restore checkpoints before mutation`
- **状态**：OPEN | **评论**：-
- **摘要**：在 `/restore` 回滚文件或替换历史前校验 checkpoint 的 `toolCall`，修复缺失 `toolCall` 时的错误路径。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5358

### 3.  #5362 – `fix(core): honor ripgrep builtin setting at runtime`
- **状态**：OPEN | **评论**：-
- **摘要**：将 `tools.useBuiltinRipgrep` 设置传递到实际执行路径，并缓存 bundled 与 system rg 的选择结果。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5362

### 4.  #5369 – `fix(cli): preserve workspace trust state for extensions`
- **状态**：OPEN | **评论**：-
- **摘要**：修复 `isWorkspaceTrusted()` 返回 `TrustResult` 对象被当作布尔值的问题，确保扩展和 MCP 服务器正确识别未信任工作区。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5369

### 5.  #5367 – `fix(core): create token file on first save`
- **状态**：OPEN | **评论**：-
- **摘要**：允许文件令牌存储写入路径从空令牌映射开始，修复首次保存时因文件不存在而失败的问题。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5367

### 6.  #5360 – `fix(core): expire tokens at buffer boundary`
- **状态**：OPEN | **评论**：-
- **摘要**：将令牌过期时间改为精确的 5 分钟刷新缓冲区边界，与 `MCPOAuthTokenStorage` 行为对齐。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5360

### 7.  #5318 – `fix(core): pass --no-ask-password to systemd-inhibit`
- **状态**：OPEN | **评论**：-
- **摘要**：在调用 `systemd-inhibit` 时添加 `--no-ask-password`，防止在未登录 DE 的 Linux 系统中弹出密码认证导致 TUI 阻塞。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5318

### 8.  #5319 – `refactor(tools): rename TodoWrite tool display name to TodoList`
- **状态**：CLOSED | **评论**：-
- **摘要**：将 todo 工具的 UI 展示名称从 “TodoWrite” 改为 “TodoList”，保留内部 wire 名称 `todo_write` 不变，涉及 TUI、Web-shell 和 WebUI。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5319

### 9.  #5245 – `fix: hide empty native sessions on Windows`
- **状态**：OPEN | **评论**：-
- **摘要**：修复 Windows 下 tilde 路径扩展（`~\`）和工具/技能任务后产生的空 `(session)` 会话，隐藏这类无内容会话。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5245

### 10. #5181 – `fix(core): prevent OOM in auto-memory extraction during /quit`
- **状态**：CLOSED | **评论**：-
- **摘要**：修复 `/quit` 后 managed auto-memory 调用 `buildTranscriptMessages()` 导致堆内存溢出（OOM）的问题，通过限制传递给 LLM 的历史文本长度（最多 30k 字符）。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5181

---

## 📊 功能需求归类

从本周更新的 Issues 中，用户反复提及以下功能方向：

| 方向 | 代表 Issue |
|------|-----------|
| **统计与分析** | #4479 Token 日消耗统计、#5366 估计响应时间显示 |
| **平台集成与适配** | #5201 QQ 机器人通道、#5159 tmux 触控板兼容 |
| **用户界面增强** | #5261 Thinking 块可折叠、#5366 响应时间可选显示 |
| **文件与媒体处理** | #5339 GIF 尺寸解析、#5336 WebP/AVI 魔数检测 |
| **输入与编辑器交互** | #4987 IME 光标定位回退、#5341 emoji 输入截断、#5347 会话标题截断 |

---

## 💡 开发者关注点

1. **输入校验与安全**：多位开发者反复提交针对 `parseInt`、冒号拆分、正则匹配等脆弱解析逻辑的修复（如 #5348、#5313、#5329、#5332、#5345），表明输入处理是当前质量的薄弱环节。
2. **令牌与 OAuth 管理**：#5365、#5360、#5355 等 Issue 聚焦于令牌文件的创建、过期边界和空值处理，说明 MCP OAuth 流程仍在打磨中。
3. **跨平台行为差异**：Windows 下空会话生成（#5244）、macOS tmux 滚轮冲突（#5159）、Linux 系统休眠认证阻塞（#5281）暴露了桌面与终端环境适配的缺失。
4. **内存与性能**：#5147 OOM 问题虽已修复，但表明大型历史记录下的内存管理仍需更严谨的限流策略。
5. **功能回归风险**：#4987 指出合并 PR 时回退已合并特性的问题，提示社区需要更规范的冲突解决流程。

---

> **数据来源**：GitHub [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 动态，更新截止 2026-06-19。

</details>