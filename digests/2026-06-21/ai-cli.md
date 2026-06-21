# AI CLI 工具社区动态日报 2026-06-21

> 生成时间: 2026-06-21 00:36 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，我将基于您提供的 2026 年 6 月 21 日各主流 AI CLI 工具的社区动态，为您生成以下横向对比分析报告。

---

### 1. 今日横向概览

今日（2026-06-21）各 AI CLI 工具社区均高度活跃，但核心议题分化明显。**Claude Code 和 OpenAI Codex** 均因版本更新引入了严重影响用户正常工作的回归 Bug，前者表现为 Linux 平台 API 无响应和子 Agent 无限递归，后者则导致 Desktop 版核心功能的系统性 `sandboxPolicy` 缺失。相比之下，**Gemini CLI、GitHub Copilot CLI 和 Qwen Code** 的社区反馈更集中于长期的、基于具体使用场景的功能缺失和稳定性问题，而非突发性灾难故障。**OpenCode 和 Kimi Code** 则通过小版本发布和 PR 修复，稳步优化代理行为、跨平台兼容性等基础体验。整体来看，行业在追求新功能的同时，核心稳定性与 Agent 行为可预测性仍是当前最突出的用户痛点。

### 2. 各工具活跃度对比

| 工具名称 | 今日新/更新 Issue 数量 | 今日新/更新 PR 数量 | 今日版本发布 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 50 | 4 | v2.1.185 (小版本，调整超时提示) |
| **OpenAI Codex** | 50 | 50 | rust-v0.142.0-alpha.7 (预发布) |
| **Gemini CLI** | 未明确，但选取10个典型 | 10 (含合并) | 无 |
| **GitHub Copilot CLI** | 13 | 3 (含合并) | 无 |
| **Kimi Code CLI** | 2 (已关闭) | 2 (含合并) | 无 |
| **OpenCode** | 50 | 50 | v1.17.9 (Bug修复) |
| **Qwen Code** | >50 | >50 | v0.18.4 (Bug修复) |

**分析**：OpenAI Codex、OpenCode 和 Qwen Code 的仓库更新极为活跃，Issue 和 PR 数量均超过 50，表明社区参与度极高，但也可能反映问题较多或代码库变化频繁。Claude Code 虽 Issue 数量多，但 PR 数量相对较少，修复响应速度可能较慢。Kimi Code CLI 和 GitHub Copilot CLI 今日活跃度相对较低。

### 3. 共同出现的功能方向

多个工具的社区在同一天提出了相似的功能诉求，具体如下：

-   **MCP 集成与稳定性**：
    -   **Claude Code**: VS Code 扩展完全忽略 MCP 服务器配置 (#19054)，托管插件 MCP 依赖未自动安装。
    -   **OpenAI Codex**: 支持入站 MCP 通知 (#15299)，MCP 沙箱元数据作用域变更引发严重回归 (PR #29268)。
    -   **Gemini CLI**: MCP 图像 MIME 类型检测修复 (PR #27878)。
    -   **GitHub Copilot CLI**: 子代理与特定 MCP 配置 (`deferTools: never`) 不兼容 (#3875)。

-   **Agent / 子 Agent 行为控制**：
    -   **Claude Code**: 子 Agent 无限递归导致 Token 爆炸 (#68619，标记为 CRITICAL)。
    -   **Gemini CLI**: Generalist Agent 持续挂起 (#21409)，子 Agent 恢复时误报成功 (#22323)。
    -   **GitHub Copilot CLI**: 子代理在特定模型和 MCP 配置下无法工作 (#3875)。
    -   **OpenCode**: 为 Task 工具（子代理）添加可配置超时参数 (#15080)。

-   **会话上下文可见性与管理**：
    -   **OpenCode**: 增加 TUI 对话框显示上下文使用量 (#6152)，支持展开粘贴文本 (#8501)。
    -   **GitHub Copilot CLI**: 聊天会话中缺少上下文窗口可见性 (#3867)。

-   **跨平台兼容性**：
    -   **Claude Code**: Linux 平台持续无 API 响应 (#69358)。
    -   **OpenAI Codex**: Windows 平台 `sandboxPolicy` 缺失 (##29193)，WSL 项目兼容性问题。
    -   **Kimi Code CLI**: Windows + Git Bash 下 VS Code 扩展安装失败 (#2462)。
    -   **OpenCode**: TUI 在 Alpine Linux (musl) 上崩溃 (#27589)。

-   **插件/钩子 (Hook) 系统改进**：
    -   **Claude Code**: Hookify 规则引擎的多个隐式 Bug 修复 (PR #69727, #69698)。
    -   **GitHub Copilot CLI**: 缺少列出已安装钩子的命令 (#3871)，钩子配置因大小写错误被静默忽略 (#3872)。

### 4. 差异化定位分析

-   **Claude Code (深度编码 Agent)**： 侧重构建复杂的、长期运行的自动化工作流（子 Agent、Hookify）。其独特优势在于深度代码操作能力，但今日暴露出的子 Agent 递归、文件残留等问题，表明其在 Agent 编排的可靠性和安全性上仍有待打磨。目标用户是追求极致自动化的高级开发者。
-   **OpenAI Codex (全能型平台)**： 强调多模态交互（图片、浏览器控制）、丰富的第三方工具集成（MCP）和插件生态。今日的 `sandboxPolicy` 回归问题直接命中了其核心沙箱隔离和工具执行机制，这对依赖其复杂工具链的用户打击巨大。定位更接近一个功能全面的“AI 开发操作系统”。
-   **Gemini CLI (多代理协作)**： 其独特价值在于 Generalist Agent 对子 Agent 的委派模式。问题集中在 Agent 挂起、误报成功和忽略技能配置等“决策链路”上。这表明其 AI 核心在复杂任务分解和状态管理上存在挑战，目标是需要灵活任务分配和自动化记忆的开发者。
-   **GitHub Copilot CLI (IDE 增强型助手)**： 深度嵌入 GitHub 和 VS Code 生态，更侧重于提升日常开发的流畅性。用户反馈集中在权限控制、上下文透明度和方案/计划模式等细粒度交互体验上。其定位是成为开发者“顺手”且“可控”的辅助工具，而非主导一切的 Agent。
-   **Kimi Code CLI (简洁高效)**： 社区动态显示出其对工具链稳定性和网络兼容性的关注（代理支持）。PR #2063 的合并说明其在响应社区个性化配置需求（默认技能）方面动作迅速。定位偏向于一个干净、流行、快速迭代的轻量级 CLI。
-   **OpenCode (开源、可定制)**： 作为完全开源的项目，其社区活跃度高且贡献意愿强。用户需求和 PR 覆盖了从沙箱权限（#2242）到非 Git 项目支持（PR #33164）等众多长尾场景。其核心竞争力在于社区驱动、高度可定制的灵活性和广泛的模型/提供商支持。
-   **Qwen Code (集成与兼容性)**： 今日的 Issue 高度集中在输入验证（大小写、路径边界）的严格性上，这反映出其代码库正在经历一次安全性和健壮性的“扫描与加固”。独特的 OAuth、钉钉、npm 注册表集成等表明其面向中国开发者的本土化生态特性。

### 5. 社区活跃度记录

-   **开发者反馈最强烈**：**OpenAI Codex**，其版本更新引发的大范围功能失效（`sandboxPolicy`）导致多个相关 Issue 和回滚 PR 激增，开发者情绪最为迫切。
-   **问题影响最严重**：**Claude Code** 的“子 Agent 无限递归”（#68619）被标记为 CRITICAL，直接关联高额 Token 消耗，对付费用户威胁最大。
-   **维护者响应最快**：**Qwen Code** 对大量大小写和路径边界 Issues 迅速关闭并修复，且 PR 合并高效，显示出良好的维护节奏。**OpenCode** 同样有多个修复和功能 PR 被合并。
-   **长期积压问题**：**Claude Code** 的 VS Code 扩展 MCP 支持 Issue（#19054）已持续 5 个月无官方回复，表明某个特定集成路径的维护可能被边缘化。

### 6. 有证据支撑的观察

1.  **Agent 行为失控是今天报告中的核心风险**：Claude Code 的子 Agent 无限递归（#68619）、Gemini CLI 的 Agent 挂起（#21409）和误报成功（#22323），以及 GitHub Copilot CLI 的钩子静默失败（#3872），共同指向一个趋势：AI Agent 在复杂、长周期任务中的行为可预测性和自纠正能力仍是重大挑战，用户正在为此付出实实在在的成本（Token、时间、数据丢失）。

2.  **MCP 集成体验是共同的薄弱环节**：从 Claude Code（配置被忽略）、OpenAI Codex（引入回归）、Gemini CLI（兼容性问题）到 GitHub Copilot CLI（与代理/配置冲突），MCP 的集成并非“即插即用”。社区对 MCP 的期待很高，但当前实现普遍存在稳定性、依赖管理和配置冲突问题，距离无缝体验还有距离。

3.  **平台兼容性问题是分散开发精力的长期负担**：Linux 在 Claude Code 上遇到 API 无响应，Windows 成为 OpenAI Codex 和 Kimi Code CLI 的问题重灾区，Alpine Linux (musl) 则让 OpenCode 崩溃。在追求功能快速迭代时，对非主流平台的测试和适配投入不足，正在消耗大量非核心用户的好感。

4.  **安全与权限控制意识显著上升**：OpenCode 社区对沙箱代理的强烈呼吁（#2242，55👍），GitHub Copilot CLI 用户对自动允许权限的请求（#3877）和钩子权限控制失效的抱怨（#3874），以及 Qwen Code 对路径边界安全校验的密集修复，表明用户不再满足于简单的“允许/拒绝”二元控制，而是要求更细粒度、更可靠的权限模型。

5.  **性能与配置管理细节的打磨渐成主流需求**：跨工具的讨论焦点开始从“能否实现这个功能”转向“功能实现得是否顺手、可控”。例如，OpenCode 的上下文使用量显示（#6152）、GitHub Copilot CLI 的上下文透明度（#3867）、Kimi Code CLI 的默认技能配置（PR #2063），以及 Claude Code 对超时提示文案的优化（v2.1.185），都体现了社区对精细化、可感知的用户体验的追求。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 2026-06-21

## 今日更新概览

Anthropic 于今日发布 Claude Code 小版本 v2.1.185，主要调整了 API 流超时提示文案与等待阈值。过去 24 小时内社区共更新 50 条 Issue（含新提交与状态变更），其中 API 连接稳定性、子 Agent 无限递归、桌面应用崩溃等问题讨论热度最高；另有 4 个 Pull Request 被提交，集中在 Hookify 规则修复与文档更新。

## 版本发布

**v2.1.185** — 2026-06-21
- 将 stream-stall 提示从 "No response from API · Retrying in …" 改为 "Waiting for API response · will retry in …"
- 触发等待提示的静默时间阈值从 10 秒放宽至 20 秒

该版本旨在减少因短暂网络抖动导致的用户焦虑，同时保持更长的等待窗口以降低误判。
🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.185

## 社区热点 Issues

挑选 10 条评论数最多或影响面最广的 Issue：

### 1. VS Code 扩展完全忽略 MCP 服务器配置
- **#19054** | 作者: @Orbject | 评论: 21 | 👍 26
- 用户报告 Claude Code for VS Code 完全不使用配置好的 MCP 服务器，导致工具链断裂。该 Issue 已持续 5 个月未获官方回复。
- 🔗 https://github.com/anthropics/claude-code/issues/19054

### 2. Linux 平台持续无 API 响应（v2.1.181/183）
- **#69358** | 作者: @vctrstrm | 评论: 19 | 👍 55
- 自 2.1.181 起，Linux 用户频繁遭遇 "No Response From API" 错误，最新版本仍未修复，社区反映强烈。
- 🔗 https://github.com/anthropics/claude-code/issues/69358

### 3. 子 Agent 无限递归导致 Token 爆炸级消耗（CRITICAL）
- **#68619** | 作者: @loncharles | 评论: 18 | 👍 5
- 子 Agent 递归深度超过 50 层，无视 `CLAUDE_CODE_FORK_SUBAGENT=0` 环境变量，Token 浪费严重。权限拒绝后反而触发更多子 Agent 生成，造成灾难性消耗。
- 🔗 https://github.com/anthropics/claude-code/issues/68619

### 4. 模型在同一会话内频繁忽略 CLAUDE.md 指令
- **#60339** | 已关闭 | 作者: @sakal-s | 评论: 8 | 👍 2
- 即使 `CLAUDE.md` 已载入上下文，模型仍间歇性违反明确指令。用户更正后立刻再次违规。
- 🔗 https://github.com/anthropics/claude-code/issues/60339

### 5. 桌面应用 1.8089.1 启动崩溃——内置二进制未签名
- **#61114** | 作者: @momodays777-lang | 评论: 7
- macOS ARM64 上 Desktop app 启动即崩溃，原因是捆绑的 Claude Code 2.1.142 二进制文件未签名/格式错误。
- 🔗 https://github.com/anthropics/claude-code/issues/61114

### 6. Session 文件无限制增长导致 OOM 崩溃
- **#20367** | 已关闭 | 作者: @LorenzoNava99 | 评论: 6 | 👍 2
- 长期运行的 session 积累的 JSONL 文件超过 1GB 后，应用启动时因内存不足崩溃（core dumped）。
- 🔗 https://github.com/anthropics/claude-code/issues/20367

### 7. 托管插件 MCP 服务器依赖未自动安装
- **#60130** | 已关闭 | 作者: @edgaraskazlauskas | 评论: 6
- 配置了 Managed plugin MCP 后，插件依赖（如 npm 包）不会被自动安装，导致 MCP 服务器启动失败。
- 🔗 https://github.com/anthropics/claude-code/issues/60130

### 8. 后台守护进程会话因瞬时 Socket 错误永久失败
- **#68789** | 作者: @sheldon | 评论: 4
- 后台 Agent 会话遇到临时网络断开（"socket connection closed unexpectedly"）后标记为永久失败，无自动重试/重连机制。
- 🔗 https://github.com/anthropics/claude-code/issues/68789

### 9. ExitWorktree 删除操作报成功但残留工作目录与分支
- **#69802** | 作者: @jsolly | 评论: 2
- `ExitWorktree (remove)` 返回成功，但实际工作树目录、管理条目及分支依然存在，偶发损坏仓库 core.bare 配置。
- 🔗 https://github.com/anthropics/claude-code/issues/69802

### 10. 移动端远程控制会话不留本地历史（数据丢失）
- **#69764** | 作者: @mekinney | 评论: 2
- 通过 Claude 手机 App 启动并在 Windows PC 本地执行的命令，会话永远不会保存到桌面端 Recents 或 `~/claude/projects/` 中。
- 🔗 https://github.com/anthropics/claude-code/issues/69764

## 重要 PR 进展

过去 24 小时内共提交 4 个 Pull Request，全部与 bug 修复或文档更新相关。

### 1. 修复 Hookify 文件规则未应用于 Write 工具内容
- **#69727** | 作者: @clown6613 | 未合并
- 问题：`event: file` 的 hookify 规则（如 “Warn About Debug Code”）在 Claude 使用 `Write` 工具创建新文件时从不触发。根因是 `config_loader` 将字段名硬编码为 `new_text` 而非适配 `Write` 工具。
- 🔗 https://github.com/anthropics/claude-code/pull/69727

### 2. 修复 Statsig 事件时间单位错误
- **#69716** | 作者: @clown6613 | 未合并
- `claude-dedupe-issues.yml` 工作流向 Statsig 发送了秒级字符串时间戳，与 API 要求的毫秒级数字不符。兄弟工作流 `log-issue-events.yml` 已正确处理。
- 🔗 https://github.com/anthropics/claude-code/pull/69716

### 3. 更新插件 README 使用推荐安装方式
- **#69710** | 已合并 | 作者: @clown6613
- 将 `plugins/README.md` 中过时的 `npm install -g @anthropic-ai/claude-code` 替换为 `curl -fsSL https://claude.ai/install` 等推荐方式。
- 🔗 https://github.com/anthropics/claude-code/pull/69710

### 4. 修复 Hookify 插件 Marketplace 安装时的导入路径问题
- **#69698** | 作者: @shrivs4 | 未合并
- 从插件市场安装 hookify 后，因 import 路径使用了相对路径而非根相对路径导致模块加载失败。
- 🔗 https://github.com/anthropics/claude-code/pull/69698

## 功能需求归类

从今日更新的 Issues 中提取社区反复提及的功能方向（不涉及路线图预测）：

| 功能方向 | 代表 Issue | 用户诉求要点 |
|---------|-----------|------------|
| **MCP 服务器集成** | #19054, #60130, #69797 | VS Code 扩展完整支持 MCP；托管插件依赖自动安装；OAuth 流程稳定性 |
| **Agent / 子 Agent 管理** | #68619, #68789 | 限制子 Agent 递归深度；网络错误时自动重连；Agent 状态持久化兜底 |
| **CLAUDE.md 遵从性** | #60339, #61296 | 模型需严格遵循指令；不同模型（Opus vs Sonnet）行为差异 |
| **桌面应用稳定性** | #61114, #20367, #50238 | 启动崩溃、OOM、session 文件无大小限制 |
| **跨平台兼容** | #69358 (Linux), #69764 (Windows) | Linux API 无响应；Windows 上移动端远程会话数据丢失 |
| **会话管理与持久化** | #66126, #65669 | 提供 `create_session` MCP 工具；更新后 session 分组重置 |
| **UI / 提示优化** | #61675 | `/goal` 长提示缺少折叠控制；任务状态被遮挡 |
| **工具行为修复** | #69802 | ExitWorktree 误报成功；Write 工具内容未被 hookify 规则检查 |

## 开发者关注点

1. **API 连接稳定性是当前最大痛点**：#69358（Linux 无响应）在24小时内获得 55 个 👍 和 19 条评论，大量用户反馈 v2.1.181/183 无法使用。新版 v2.1.185 仅调整了超时提示文案和等待时间，并未根本解决无响应问题。

2. **子 Agent 无限递归正在消耗用户大量 Token**：#68619 的严重等级标记为 CRITICAL，用户报告递归深度超 50 层，且修改 `CLAUDE_CODE_FORK_SUBAGENT=0` 无效。此问题若大面积影响使用，可能导致付费用户产生巨额账单。

3. **CLAUDE.md 指令不被遵守频繁被提及**：多个 Issue（#60339、#61296）指向同一现象——模型（尤其 Opus）在复杂项目中忽略用户定义的项目配置指令，用户需反复纠正，严重影响工作流。

4. **MCP 生态集成体验仍有缺口**：VS Code 插件完全忽略 MCP 服务器配置（#19054，积压 5 个月无答复），托管插件依赖安装失败（#60130），OAuth 流因 session 状态丢失中断（#69797）。社区期待统一的 MCP 集成方案。

5. **桌面应用崩溃与数据丢失**：macOS 启动崩溃（#61114）、session 文件 OOM（#20367）、移动端远程会话不留记录（#69764），这些数据持久化问题降低了重度用户的信任度。

6. **hookify 规则引擎存在多个隐式 bug**：同一天 2 个 PR 同时修复 hookify 相关缺陷（#69727、#69698），说明该功能在复杂场景下的正确性需要持续加固。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-06-21 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-21

## 今日更新概览

今日社区高度活跃，共产生 50 个 Issue 和 50 个 PR 的更新。核心焦点在于 **Codex Desktop 26.616.41845 版本更新后出现的系统性 `sandboxPolicy` 字段缺失错误**，该问题广泛影响了 Windows 和 macOS 平台上的 `node_repl`、浏览器控制、计算机使用（Computer Use）等核心功能。同时，社区对 **敏感文件排除机制**、**语义搜索** 和 **VS Code 聊天隔离** 等功能需求的讨论热度持续。

## 版本发布

- **rust-v0.142.0-alpha.7**: 发布了新的预发布版本，但未提供详细的更新日志。

## 社区热点 Issues (10 个)

1.  **[#2847] A way to exclude sensitive files**
    - **影响场景**: 用户需要一种机制来明确标记 Codex agent 不能读取或发送给模型的敏感文件/路径。
    - **问题范围**: 这是一个长期存在的功能请求，评论数高达 78 条，获赞 409 个，表明社区对此功能有强烈的普遍需求。
    - **社区反应**: 用户期望支持仓库级别（.codexignore）和全局级别的忽略文件，类似于 `.gitignore` 的机制。
    - **链接**: https://github.com/openai/codex/issues/2847

2.  **[#29189] Codex Desktop 26.616.41845 node_repl fails: codex/sandbox-state-meta missing sandboxPolicy**
    - **影响场景**: Codex Desktop 更新后，其内置的 node_repl 功能完全失效，导致依赖此功能的所有工具（如 @Chrome, @Browser, @Computer）无法使用。
    - **问题范围**: 此问题影响 macOS 用户，是今天一系列“sandboxPolicy 缺失”错误报告的源头之一。
    - **社区反应**: 用户 bobchristof-gp 报告了详细的错误日志和版本信息，引发了 55 条评论，显示这是更新后的重大回归问题。
    - **链接**: https://github.com/openai/codex/issues/29189

3.  **[#18960] Frequent reconnect loop in Codex App: websocket closed by server before response.completed**
    - **影响场景**: Codex App 频繁出现 Websocket 重连循环，导致流式生成中断，影响用户正常使用。
    - **问题范围**: 这是一个持续存在的问题，自 4 月 22 日以来已有 49 条评论，获赞 35 个，表明连接稳定性是一个长期困扰部分用户的问题。
    - **社区反应**: 用户 GGBondBlueWhale 提供了详细的客户端版本和平台信息。
    - **链接**: https://github.com/openai/codex/issues/18960

4.  **[#28879] Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x since June 16**
    - **影响场景**: 自 6 月 16 日起，Plus 用户在使用 gpt-5.5 模型时，速率限制（rate-limit）成本急剧上升，导致预算在 2-3 个 prompt 内耗尽。
    - **问题范围**: 严重影响 Plus 用户的日常使用体验，获赞 67 个，说明问题具有普遍性。
    - **社区反应**: 用户 mihneaptu 提供了详细的 token 消耗日志对比，证实了消耗增加了 10-20 倍。
    - **链接**: https://github.com/openai/codex/issues/28879

5.  **[#5181] Semantic codebase indexing and search**
    - **影响场景**: Codex CLI 在大型代码库中难以准确定位代码位置。
    - **问题范围**: 用户需求明确，希望 Codex CLI 增加语义索引和搜索能力，以提升在大型项目中的导航和编码效率。
    - **社区反应**: 获赞 45 个，评论数 20 条，说明这是一个广泛认可的体验改进方向。
    - **链接**: https://github.com/openai/codex/issues/5181

6.  **[#29193] Windows Codex Desktop 26.616: node_repl/js fails with missing sandboxPolicy**
    - **影响场景**: Windows 版 Codex Desktop 更新后同样出现 `sandboxPolicy` 缺失错误，导致 `node_repl/js` 工具无法运行。
    - **问题范围**: 这是与 #29189 相同的跨平台回归问题，影响 Windows 用户，评论数 17 条。
    - **社区反应**: 用户 CMFHF-404 报告了与 macOS 版本相同的错误信息。
    - **链接**: https://github.com/openai/codex/issues/29193

7.  **[#22898] Codex mobile shows running desktop as offline and Reconnect silently does nothing**
    - **影响场景**: Codex iOS 移动端无法正确识别已运行的桌面端，且“重新连接”按钮无效。
    - **问题范围**: 影响移动端与桌面端的联动体验，评论数 14 条，获赞 40 个。
    - **社区反应**: 用户 GGBondBlueWhale 详细描述了问题表现，包括无加载状态、无重试指示等。
    - **链接**: https://github.com/openai/codex/issues/22898

8.  **[#25319] Scope Codex VS Code chats to the current workspace/project**
    - **影响场景**: Codex VS Code 扩展的聊天/线程历史在所有项目中是全局共享的，而非基于当前工作区。
    - **问题范围**: 影响多项目管理体验，用户希望按项目隔离聊天历史。
    - **社区反应**: 获赞 34 个，显示出用户对更好的 IDE 集成体验的期待。
    - **链接**: https://github.com/openai/codex/issues/25319

9.  **[#15299] Support inbound MCP notifications routed into an active Codex CLI session**
    - **影响场景**: 用户无法通过外部渠道（如外部信号、事件）向正在运行的 Codex CLI 会话推送消息。
    - **问题范围**: 这是一个关于扩展 Codex CLI 能力的 MCP 功能请求，希望实现双向通道。
    - **社区反应**: 讨论如何让外部事件作为“通知”进入 Codex 会话。
    - **链接**: https://github.com/openai/codex/issues/15299

10. **[#29240] Codex in-app browser control broken after update: missing sandboxPolicy**
    - **影响场景**: 更新至 Codex Desktop 26.616.41845 后，macOS 用户的 in-app 浏览器功能失效。
    - **问题范围**: 再次确认了新版 Desktop 在 macOS 上的浏览器控制功能存在普遍性的 `sandboxPolicy` 缺失问题。
    - **社区反应**: 用户 jerrychabolla 报告的问题与 #29189 高度一致，进一步证实了该回归的广泛性。
    - **链接**: https://github.com/openai/codex/issues/29240

## 重要 PR 进展 (10 个)

1.  **[#29268] Revert “Scope MCP sandbox metadata to server environment (#28914)”**
    - **功能/修复**: 回滚了某次关于 MCP sandbox 元数据作用域的改动。
    - **意义**: 这直接回应了今日大量报告的 `sandboxPolicy` 缺失错误，是紧急的修复尝试。
    - **链接**: https://github.com/openai/codex/pull/29268

2.  **[#29266] Route image generation writes through ExecutorFileSystem**
    - **功能**: 将图像生成的文件写入操作统一路由到 `ExecutorFileSystem`。
    - **意义**: 这表明 Codex 正在重构文件系统访问路径，为更统一的沙箱和权限管理做准备。
    - **链接**: https://github.com/openai/codex/pull/29266

3.  **[#26229] Add protected data mode to core and app server**
    - **功能**: 为核心和应用服务器添加“受保护数据模式”。
    - **意义**: 一个重要的安全特性，当 MCP 工具返回标识为受保护的数据时，核心端可以激活此模式，后续连接调用需要明确授权。
    - **链接**: https://github.com/openai/codex/pull/26229

4.  **[#29259] prototype mcp_history thread hint injection**
    - **功能**: 原型验证在构建初始上下文时，让框架（harness）调用 `mcp_history` MCP，并向模型注入线程提示。
    - **意义**: 探索让模型在发起工具调用前就能获得线程历史上下文的能力，以减少不必要的工具调用。
    - **链接**: https://github.com/openai/codex/pull/29259

5.  **[#29249] migrate environment context to model world state**
    - **功能**: 将模型可见的环境上下文迁移到类型化的“世界状态”（world state）中。
    - **意义**: 为环境状态提供可回放、类型化的表示，是 Codex 核心架构重构的重要一步。
    - **链接**: https://github.com/openai/codex/pull/29249

6.  **[#29255] add configurable token budget compaction reminder**
    - **功能**: 为 token 预算功能添加可配置的“压缩提醒”。
    - **意义**: 允许在模型即将触发上下文压缩时，给予可配置的提示，让模型有机会整理输出，改善压缩后的连贯性。
    - **链接**: https://github.com/openai/codex/pull/29255

7.  **[#29143] ci: restore custom Windows runner with hermetic LLVM 0.7.9**
    - **功能/修复**: 修复 CI 流程，恢复使用自建的 Windows 运行器。
    - **意义**: 基础设施优化，确保 Windows 平台上的持续集成环境稳定可靠。
    - **链接**: https://github.com/openai/codex/pull/29143

8.  **[#28845] Support plugin agent roles**
    - **功能**: 支持插件（Plugin）定义自己的 agent 角色。
    - **意义**: 插件生态的重要扩展，允许插件定义专门的 agent 类型（如 `sample:researcher`），可以被 `spawn_agent` 调用，增强了 Codex 的模块化和专业化能力。
    - **链接**: https://github.com/openai/codex/pull/28845

9.  **[#29245] app-server: refresh Codex Apps tools periodically**
    - **功能**: 为 app-server 添加周期性刷新 Codex Apps MCP 工具缓存的功能。
    - **意义**: 提升系统稳定性，无需重启即可获取最新的 MCP 工具列表，减少因缓存过期导致的问题。
    - **链接**: https://github.com/openai/codex/pull/29245

10. **[#28232] Add workspace headline statusline item**
    - **功能**: 在 TUI 界面的状态行中添加“工作区标题”的显示。
    - **意义**: 提升 TUI 用户的信息感知，让用户能实时看到当前工作区的声明信息。
    - **链接**: https://github.com/openai/codex/pull/28232

## 功能需求归类

根据近期 Issues 讨论，用户反馈的功能需求主要集中在以下几个方向：

- **安全性与数据控制**: 用户强烈要求增加 **敏感文件排除机制**（如 `.codexignore`），以控制 Agent 可访问的文件范围，防止敏感数据泄露。
- **代码库理解与导航**: 存在对 **语义代码库索引和搜索** 功能的明确呼声，以帮助 Codex CLI 在更大、更复杂的项目中更准确地定位和理解代码。
- **IDE 集成优化**: **VS Code 扩展的聊天隔离** 是高频需求，用户希望聊天历史能根据工作区/项目进行作用域划分。
- **扩展性与互联**: 用户希望支持 **入站 MCP 通知**，使 Codex CLI 能响应外部事件，实现更灵活的自动化工作流。同时，**插件 agent 角色**的支持开启了对专业化和模块化 agent 的探索。
- **性能与稳定性**: 持续存在对 **连接稳定性**（如 Websocket 重连）和 **成本/速率限制可预测性** 的改进需求。

## 开发者关注点

1.  **Codex Desktop 26.616.41845 版本的重大回归**: 今日开发者最强烈的反馈集中于此版本引入的 `codex/sandbox-state-meta` 中 `sandboxPolicy` 字段缺失的严重 Bug。该问题导致 macOS 和 Windows 上依赖 `node_repl` 的功能（如浏览器控制、计算机使用）完全瘫痪。PR #29268（回滚相关改动）是目前最明确的修复信号。

2.  **速率限制与成本波动**: 部分 Plus 计划用户观察到 gpt-5.5 模型的 token 成本在 6 月 16 日后飙升 10-20 倍，导致使用预算严重缩水。此问题引发了广泛的关注和讨论，用户期望官方能给出明确的解释和修复。

3.  **Windows 平台兼容性问题**: 除了上述的 `sandboxPolicy` 问题，Windows 用户还报告了与 WSL 项目兼容性、WebSearch 被 Cloudflare 拦截、以及权限提示循环等多个独立问题。这表明 Windows 平台的用户体验仍有待优化。

4.  **跨设备连接体验**: 移动端 Codex App 与桌面端连接状态不一致，且重连功能无效，影响了多设备协同工作的信心。用户期望更可靠的连接状态同步和手动重连的明确反馈。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-21 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-21

## 今日更新概览
过去24小时内，Gemini CLI 仓库无新版本发布。社区讨论主要围绕**Agent挂起**、**工具循环调用**及**自动化内存管理**等长期存在的痛点问题。在代码贡献方面，多个修复性 PR 持续推进，重点关注**安全漏洞修复**、**MCP图像MIME类型检测**以及**终端交互体验的改进**。

## 社区热点 Issues
1.  **`google_web_search` 工具在无结果时无限循环 (Issue #28037)**
    - **摘要**: 当 `google_web_search` 工具对某个查询未返回相关结果时，Agent 会陷入无限循环，反复发起搜索而无法停止。该问题由用户在2026-06-19提出，今天更新，已有6条评论，被标记为 `kind/bug`。
    - **影响场景**: 使用 Web 搜索功能的开发者，当搜索无结果时，Agent 会持续消耗 API 配额和等待时间。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/28037

2.  **Generalist Agent 持续挂起 (Issue #21409)**
    - **摘要**: 一个持续近三个月的严重 Bug。当 `gemini-cli` 需要将任务委托给 generalist agent 时，Agent 会无限期挂起，即使是创建文件夹这类简单操作也无法完成。获得社区8个 👍 的支持。
    - **影响场景**: 依赖 Agent 执行本地文件操作或更复杂任务的开发者。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/21409

3.  **Shell 命令执行后挂起，显示“等待输入” (Issue #25166)**
    - **摘要**: 在 Shell 命令执行完成后，CLI 仍然显示命令正在运行并等待用户输入，导致流程中断。该问题影响了简单的、不需要用户交互的终端命令。
    - **影响场景**: 与 Shell 频繁交互的开发工作流，如运行脚本、编译等。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/25166

4.  **子Agent恢复时误报成功 (Issue #22323)**
    - **摘要**: 例如 `codebase_investigator` 子 Agent 在已达到最大轮次限制后被中断，但恢复时却向主 Agent 报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际发生的截断，可能导致后续决策错误。
    - **影响场景**: 需要长期、多步骤分析的大型代码库任务。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/22323

5.  **Gemini 不主动使用自定义技能和子Agent (Issue #21968)**
    - **摘要**: 用户反馈，即使定义了与任务高度相关的自定义技能（如“gradle”、“git”），Gemini 也极少主动调用，除非被明确指令。
    - **影响场景**: 通过自定义技能扩展 Agent 能力的用户。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/21968

6.  **模型频繁在随机位置创建临时脚本 (Issue #23571)**
    - **摘要**: 当模型被限制通过 Shell 执行任务时，它倾向于在项目各目录下生成大量临时脚本，给后续的代码清理和提交带来很大负担。
    - **影响场景**: 所有使用 Agent 进行编码的用户，特别是注重代码库整洁的团队。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/23571

7.  **Auto Memory 仅将低信噪比的对话标记为“未处理” (Issue #26522)**
    - **摘要**: Auto Memory 功能在处理历史会话时，如果 Agent 判断某次会话“信号低”而不去读取，该会话会一直留在处理队列中，导致 Agent 反复尝试处理无效内容。
    - **影响场景**: 使用自动化记忆功能来优化跨会话上下文的用户。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/26522

8.  **浏览器 Agent 在 Wayland 下失败 (Issue #21983)**
    - **摘要**: `browser_agent` 子 Agent 在 Wayland 显示服务器环境下无法正常工作，报错而终止。
    - **影响场景**: 使用 Linux Wayland 桌面的开发者，无法使用浏览器自动化功能。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/21983

9.  **Agent 应阻止/劝阻破坏性行为 (Issue #22672)**
    - **摘要**: 建议 Agent 在进行复杂 Git 操作或数据库维护时，避免使用 `git reset` 或 `--force` 等具有破坏性的命令，优先选择更安全的替代方案。
    - **影响场景**: 任何与版本控制或生产环境数据交互的自动化任务。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/22672

10. **浏览器 Agent 忽略 `settings.json` 中的配置 (Issue #22267)**
    - **摘要**: 用户通过在 `settings.json` 中配置的 `maxTurns` 等参数，对浏览器 Agent 完全无效。`AgentRegistry` 虽然能读取配置，但最终并未被 Agent 使用。
    - **影响场景**: 所有需要自定义浏览器 Agent 行为的用户。
    - **链接**: https://github.com/google-gemini/gemini-cli/issues/22267

## 重要 PR 进展
1.  **修复 MCP 图像 MIME 类型检测 (PR #27878)**
    - **摘要**: 该 PR 修复了 Figma MCP 集成返回的 WebP 图片被错误标记为 `image/png`，导致 API 请求报 400 错误的问题。实现方式为本地二进制数据签名嗅探。
    - **状态**: `OPEN`, `priority/p1`
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27878

2.  **修复提示模板替换中`$`符号的转义问题 (PR #28055)**
    - **摘要**: 修复了在技能、子Agent或工具描述中包含 `$` 序列（如 `$$`, `$&`）时，系统提示模板替换会错误处理并损坏内容的 Bug。这解决了长尾的高优先级问题。
    - **状态**: `OPEN`, `area/agent`
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/28055

3.  **限制待处理的工具响应数量 (PR #27870)**
    - **摘要**: 一个非常大的工具结果在成为待处理的 `functionResponse` 前，可能导致问题。该 PR 对此进行上限限制，以防止 Agent 行为异常。
    - **状态**: `OPEN`, `priority/p1`
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27870

4.  **升级 `shell-quote` 依赖修复 CVE-2026-9277 (PR #27856)**
    - **摘要**: 将 `shell-quote` 库从 1.8.3 升级至 1.8.4，修复一个严重级别的安全漏洞 CVE-2026-9277。
    - **状态**: `OPEN`, 由安全扫描机器人发起。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27856

5.  **为 eval inventory 命令添加 JSON 输出 (PR #28058)**
    - **摘要**: `eval inventory` 命令新增 `--json` 参数，使其输出格式适合在 CI/CD、脚本和自动化检查中使用，提升了可编程性。
    - **状态**: `OPEN`, 增加了一个中型 PR。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/28058

6.  **修复 Cloud Shell 中 `.env` 文件不可读导致的崩溃 (PR #28059)**
    - **摘要**: 当在 Cloud Shell 环境下的 `.env` 文件被沙箱拒绝读取（EACCES 错误）时，CLI 会直接崩溃。此 PR 添加了错误处理以防止此崩溃。
    - **状态**: `OPEN`, `priority/p2`
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/28059

7.  **修复错误信息中 URL 末尾的句点 (PR #28054)**
    - **摘要**: 修复了在错误信息中，URL 后面紧跟句点（句号）的问题，以确保渲染出的链接是可点击的。
    - **状态**: `OPEN`, `priority/p2`
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/28054

8.  **升级 `vitest` 依赖修复 CVE-2026-47429 (PR #27857)**
    - **摘要**: 将测试框架 `vitest` 从 3.2.4 升级至 4.1.0，修复一个严重级别的安全漏洞 CVE-2026-47429。
    - **状态**: `OPEN`, 由安全扫描机器人发起。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27857

9.  **添加原生拖放和 `Cmd+V` 粘贴图片支持 (PR #27859)**
    - **摘要**: 一个期待已久的功能，此 PR 在标准终端模拟器中为 Gemini CLI 添加了拖放文件和 `Cmd+V`/`Ctrl+V` 粘贴剪贴板图片的原生支持，实现了视觉多模态能力的重大升级。
    - **状态**: `OPEN`, `priority/p3`
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/27859

10. **完善钩子 Hook 文档 (PRs #28064, #28057)**
    - **摘要**: 两个文档相关的 PR 持续完善 Hooks 参考文档。`#28064` 补充了 `BeforeTool` 输出中 `decision: "ask"` 的说明；`#28057` 补全了 `LLMResponse.usageMetadata` 中所有三个 Token 计数（不仅仅是 `totalTokenCount`）的文档字段。
    - **链接**: https://github.com/google-gemini/gemini-cli/pull/28064, https://github.com/google-gemini/gemini-cli/pull/28057

## 功能需求归类
- **代理行为与可靠性**: 用户多次反馈 Agent 在复杂场景下的挂起（#21409）、执行后卡死（#25166）、工具无限循环（#28037）以及未主动使用已配置技能（#21968）等问题。对 `settings.json` 配置的忽略（#22267）也降低了用户体验的可控性。
- **记忆系统**: 围绕自动化记忆（Auto Memory）的 Issue 集中在处理低效内容（#26522）、无效补丁（#26523）以及日志记录中的安全隐私风险（#26525）上。用户希望记忆系统更智能、更可靠。
- **安全与隐私**: 社区对安全表达了关注，包括升级关键依赖修复 CVE（#27856, #27857），以及关于 Agent 执行破坏性操作的讨论（#22672）和内容在传输到模型前的脱敏问题（#26525）。
- **开发者体验**: 包括对改进终端界面性能（#21924）、修复外部编辑器退出后界面错乱（#24935）、以及提供 CLI 自身诊断信息（#21432）的需求。新增对拖放和粘贴图片的支持（#27859）也属于此范畴。
- **非桌面环境兼容性**: 有具体 Issue 报告了在某些特定环境下的兼容性问题，例如浏览器 Agent 在 Wayland 下的失败（#21983）。

## 开发者关注点
- **Agent 的“不智能”行为是主要痛点**: 开发者最头疼的不是功能缺失，而是 Agent 在基础任务上的不可靠表现，包括挂起、假成功、循环、以及不理解简单约束（如不创建临时文件）。
- **安全合规是紧要任务**: 多个由安全扫描器自动发起的依赖升级 PR 和关于日志内容安全的讨论表明，开发者（特别是贡献者）对运行时的安全性和合规性非常敏感。
- **对记忆系统效率的关切**: 虽然 Auto Memory 是一个前瞻性功能，但当前存在大量噪音和错误处理。开发者担心它可能消耗不必要的 API 调用和上下文窗口，而非真正提升效率。
- **需要更透明的诊断信息**: 缺乏对 CLI 自身状态、配置启用情况和发生错误的清晰说明（如 Issue #21432），使得开发者难以进行故障排查。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是根据您提供的 GitHub 数据生成的 2026 年 6 月 21 日 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-21

## 今日更新概览

今日仓库活跃度较高，共有 13 条 Issue 和 3 条 PR 在 24 小时内获得更新。社区反馈集中在插件/钩子（hooks）的管理与配置、会话（session）体验优化以及终端渲染（terminal-rendering）等问题上，多个 Issue 明确了用户对于更精细权限控制和上下文可见性的需求。

## 社区热点 Issues

以下为今日值得关注的 Issue 摘要，问题范围覆盖了从插件管理、终端渲染缺陷到权限控制等多个方面。

1.  **#1240: 支持 `copilot --acp` 中的会话使用统计**
    -   **影响场景**：高级用户和运维人员希望了解 AI 会话的上下文消耗（Token、成本等）。
    -   **问题范围**：请求实现 `agentclientprotocol.com` 的 `session-usage` 标准，以便在 CLI 中查看会话资源使用情况。该议题提出较早，依旧在讨论中。
    -   **链接**: [#1240](https://github.com/github/copilot-cli/issues/1240)

2.  **#3876: 退出时错误地禁用了鼠标追踪**
    -   **影响场景**：所有使用终端的用户，退出 Copilot CLI 后鼠标滚动失效。
    -   **问题范围**：报告了一个 Bug，指出 CLI 退出时未能正确恢复终端设置，导致鼠标按键事件追踪（button-event tracking）未被关闭。维护者已确认并关闭（CLOSED）。
    -   **链接**: [#3876](https://github.com/github/copilot-cli/issues/3876)

3.  **#3871: 缺少列出已安装钩子（Hooks）的命令**
    -   **影响场景**：插件或钩子的开发者与管理用户。
    -   **问题范围**：用户指出 MCP 服务器可以通过 `copilot mcp list` 枚举，但钩子（Hooks）却没有任何等效的列举命令，导致管理困难。
    -   **链接**: [#3871](https://github.com/github/copilot-cli/issues/3871)

4.  **#3872: 大小写错误的钩子事件键被静默忽略**
    -   **影响场景**：所有配置了钩子的用户。
    -   **问题范围**：报告了一个 Bug，当 `hooks.json` 配置中的事件键（如 `PreToolUse`）拼写错误（如大小写不对），CLI 会静默地忽略该钩子，不报任何警告，仅在 debug 日志级别留下记录。这可能导致用户以为钩子生效，但实际上并未运行。
    -   **链接**: [#3872](https://github.com/github/copilot-cli/issues/3872)

5.  **#3878: 计划实施后自动恢复为规划（Plan）模式**
    -   **影响场景**：习惯使用“先计划后执行”工作流的用户。
    -   **问题范围**：用户希望将“规划”（Plan）设为默认模式，但在规划被自动执行（Autopilot）后，会话会停留在 Autopilot 模式，而用户期望它自动回退到 Plan 模式。
    -   **链接**: [#3878](https://github.com/github/copilot-cli/issues/3878)

6.  **#3877: 会话启动时自动允许所有权限**
    -   **影响场景**：在受信任的本地开发环境中，希望跳过繁琐权限确认的用户。
    -   **问题范围**：用户请求新增一个配置项，允许在启动新会话时自动执行 `/allow-all` 命令，以减少重复的交互确认。
    -   **链接**: [#3877](https://github.com/github/copilot-cli/issues/3877)

7.  **#3875: 子代理无法与特定模型及 `deferTools: never` 配置共同工作**
    -   **影响场景**：使用 GPT-5.4/5.5 作为主模型，并配置了特定 MCP 服务器的用户。
    -   **问题范围**：报告了一个 Bug，当某些 MCP 服务器配置为 `deferTools: never` 时，子代理模型（`mai-code-1-flash-picker`）无法被正确创建或调用。
    -   **链接**: [#3875](https://github.com/github/copilot-cli/issues/3875)

8.  **#3874: VS Code 中的 `preToolUse` 钩子拒绝功能不生效**
    -   **影响场景**：在 VS Code 中使用 Copilot Chat，并配置了权限控制钩子的用户。
    -   **问题范围**：用户指出，在 VS Code 的聊天会话中，配置在 `.github/hooks/hooks.json` 里的 `PreToolUse` 钩子无法正确拒绝（deny）命令，即权限控制失效。
    -   **链接**: [#3874](https://github.com/github/copilot-cli/issues/3874)

9.  **#3867: 聊天会话中缺少上下文窗口可见性**
    -   **影响场景**：所有使用长会话的用户。
    -   **问题范围**：用户提出没有 UI 指示器来显示当前上下文的 Token 使用量，且上下文压缩（compaction）是静默进行的，用户完全不知情。这可能导致用户在不了解上下文丢失的情况下得到不理想的回答。
    -   **链接**: [#3867](https://github.com/github/copilot-cli/issues/3867)

10. **#3868: 右键单击多个聊天/会话时应用冻结”
    -   **影响场景**：同时打开多个会话标签页的用户。
    -   **问题范围**：报告了一个 Bug，当用户在打开的多个聊天或项目会话中右键点击任意一个时，应用会变得无响应（冻结）。
    -   **链接**: [#3868](https://github.com/github/copilot-cli/issues/3868)

## 重要 PR 进展

今日共有 3 条 PR 获得更新，其中两条已被合并或关闭。

1.  **#2587: 使用 GitHub Agentic Workflows 进行自动化 Issue 分类**
    -   **功能内容**：引入了一个由 AI 驱动的工作流，在 Issue 被创建或重新打开时，自动为其打上 `area:` 标签和 `triage` 标签。该 PR 已被合并。
    -   **链接**: [#2587](https://github.com/github/copilot-cli/pull/2587)

2.  **#1014: 记录 Esc 键行为修复的文档**
    -   **功能内容**：在 Changelog 中记录了关于 Esc 键行为的修复：在“告知 Copilot 如何修改”的文本输入界面按下 Esc 键，现在将返回选项选择器，而不是自动选择“No”。该 PR 已被合并。
    -   **链接**: [#1014](https://github.com/github/copilot-cli/pull/1014)

3.  **#3873: 添加初始问候的日志**
    -   **功能内容**：这是一个开放中的 PR，其描述为空。从标题看，旨在为 CLI 启动时添加日志记录。
    -   **链接**: [#3873](https://github.com/github/copilot-cli/pull/3873)

## 功能需求归类

从今日的 Issue 中，用户反复提及的功能诉求可归类为以下几个方向：

-   **会话（Sessions）管理**：用户对会话的可见性和控制权有更高要求，包括：**查看上下文使用量**（#3867）、**查看会话成本**（#1240）、**自动清理远程会话**（#3072）以及**右键菜单卡顿**（#3868）的修复。
-   **权限与自动化（Permissions & Automation）**：用户期望更灵活的权限控制，例如**自动允许所有权限**（#3877）。同时，钩子（Hook）的**静默失败**（#3872）和**在 VS Code 中失效**（#3874）问题突出，表明该功能的稳定性和可见性亟待提升。
-   **插件与钩子（Plugins & Hooks）**：用户需要有**统一的管理界面**来列举和检查所有已安装的钩子（#3871），类似于 MCP 服务器的管理方式。
-   **模型与兼容性（Models & Compatibility）**：特定模型组合（如 GPT-5.4/5.5 搭配 `deferTools: never`）引发了子代理无法工作的问题（#3875），表明跨模型和配置的兼容性测试仍需加强。
-   **UI/UX 改进**：包含**终端鼠标追踪恢复**（#3876）和 **/ask 功能**显示区域太小不便于阅读（#3869）等终端渲染问题。

## 开发者关注点

-   **静默失败问题需要警惕**：钩子配置因大小写错误被静默忽略（#3872）是一个典型的坏体验，开发者强烈希望 CLI 在配置错误时给出明确警告，而不是让问题无声无息地发生。
-   **需要更好的上下文透明度**：开发者不希望在不知情的情况下丢失上下文（#3867），他们希望看到清晰的 Token 使用指示器来主动管理会话开销。
-   **权限控制的粒度与便捷性需要平衡**：一方面有用户希望 “自动允许” 以提升效率（#3877），另一方面也有用户依赖 `PreToolUse` 钩子进行细粒度拒绝（#3874）。这意味着系统需要同时支持“默认允许，精准拒绝”和“自动允许”等多种模式。
-   **子代理与复杂配置仍有坑**：当采用多模型、多代理（子代理）和复杂 MCP 配置时，容易出现兼容性问题（#3875），这对于采用高级工作流的用户来说是一个明确的痛点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为您生成的 2026-06-21 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态日报 | 2026-06-21

## 今日更新概览

过去24小时内，项目没有发布新版本。社区活跃度平稳，共有2个已关闭的Issue和2个Pull Request获得了更新，其中1个PR为开放状态，社区讨论集中在Windows平台兼容性和交互体验优化上。

## 版本发布

无

## 社区热点 Issues

**1. Windows + Git Bash: VS Code 扩展提取 CLI 失败 (#2462)**
- **摘要**：用户在 Windows 系统上使用 Git Bash 时，VS Code 扩展无法正确解压捆绑的 CLI 工具，原因是 `tar` 命令无法处理 ZIP 格式的压缩包。该问题针对的是 VS Code 扩展的安装流程，而非独立 CLI 工具。
- **影响场景**：Windows + Git Bash (MSYS2) 环境下的 VS Code 扩展用户安装受阻。
- **状态**：已关闭。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2462

**2. Kimi Code 聊天面板应支持符号/行号点击跳转 (#2440)**
- **摘要**：用户反馈当前聊天面板中，文件路径是**可点击**的，但函数/方法名等代码符号**不支持**点击跳转到其定义或声明行，降低了代码审查和导航效率。希望支持点击符号直接跳转到代码定义。
- **影响场景**：所有在聊天面板中进行代码审查或引用代码的开发者。
- **状态**：已关闭。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2440

## 重要 PR 进展

**1. [已合并] feat(config): 添加 `default_skills` 配置项 (#2063)**
- **摘要**：实现了用户在社区提出的功能需求 (#2062)，现在可以在配置文件中设置 `default_skills`，新会话启动时会自动激活指定的技能。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2063

**2. [开放中] fix: 在 FetchURL 中尊重系统代理设置 (#2463)**
- **摘要**：修复了工具内 `FetchURL` 功能在需要代理的网络环境中无法工作的问题。原因为 `aiohttp` 库默认不读取 `HTTP_PROXY` 环境变量，导致请求失败。此PR使该功能能正确读取并使用系统代理设置。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2463

## 功能需求归类

- **IDE 集成与交互**：用户希望 Kimi Code 聊天面板中的代码符号（如函数名）能够通过点击直接跳转到定义位置（#2440）。这反映了开发者对在对话界面内实现无缝代码导航的明确需求。
- **平台兼容性**：Windows + Git Bash 环境下，VS Code 扩展的安装流程存在工具链兼容性问题（#2462），说明跨平台（尤其是 Windows 环境）下的安装和运行体验仍有优化空间。

## 开发者关注点

- **代理网络支持**：开发者反馈 `FetchURL` 功能无法在需要代理的网络环境下正常工作（PR #2463），这是一个影响企业级或受限网络环境用户的痛点问题，目前已有社区贡献者提交了修复方案。
- **配置灵活性需求**：社区对自动激活技能（`default_skills`）的配置支持有明确需求（PR #2063），这表明用户希望进一步定制化和自动化每次会话的启用行为。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-21

## 今日更新概览

- 发布补丁版本 **v1.17.9**，修复代理步骤限制、模型检测大小写问题，并添加自定义请求头支持。
- 社区讨论活跃，过去24小时共更新50个Issue和50个PR，其中沙箱代理、粘贴文本展开、会话上下文用量显示等长期需求持续获得大量关注。
- 多个违规提交已关闭/合并，包括多个针对Nix构建兼容性、TUI渲染修复的PR，同时一项为OpenCode Desktop添加非Git项目设置编辑的新特性PR被提交。

---

## 版本发布

### v1.17.9

- **Bugfixes**
  - 强制最终文本响应以尊重配置的代理步骤限制，避免中途失败。
  - 修复Devstral模型检测时提供者ID大小写不一致的问题（感谢 @Robin1987China）。
  - 将用户配置的自定义请求头传递给Copilot模型请求。
- **Improvements**
  - 添加 `high`（描述不完整，原文截断）
- 发布时间：过去24小时内（标签 v1.17.9）

---

## 社区热点 Issues（10条）

1. **#2242 [OPEN] 是否有办法沙箱代理？**
   作者希望限制代理终端命令访问/编辑当前目录之外的文件。macOS有seatbelt机制，但OpenCode无对应功能，获得55👍、77条评论。
   [查看详情](https://github.com/anomalyco/opencode/issues/2242)

2. **#8501 [OPEN] 展开粘贴文本（如 `[Pasted ~1 lines]`）**
   用户希望能在粘贴摘要后展开查看原文本以便编辑或检查，获得183👍、26条评论，属于高人气功能请求。
   [查看详情](https://github.com/anomalyco/opencode/issues/8501)

3. **#6152 [OPEN] 会话上下文使用量（类似Claude的 `/context`）**
   建议增加TUI对话框显示当前会话上下文窗口的详细分解，帮助用户了解token消耗。112👍、19条评论。
   [查看详情](https://github.com/anomalyco/opencode/issues/6152)

4. **#27589 [OPEN] TUI在Alpine Linux (musl) 1.14.50版本崩溃：getcontext符号未找到**
   回归问题，1.14.48正常，1.14.50报错，影响musl用户。36条评论。
   [查看详情](https://github.com/anomalyco/opencode/issues/27589)

5. **#29462 [OPEN] Skills工具将所有发现技能无上限注入系统提示**
   当技能库很大时（如10万条），每次都会包含所有技能描述，导致token浪费。建议添加截断或分页。11条评论。
   [查看详情](https://github.com/anomalyco/opencode/issues/29462)

6. **#31755 [OPEN] MiniMax直接API缓存可能因新的思维切换而损坏，而OpenRouter BYOK仍正常缓存**
   用户发现MiniMax M3模型直接API的缓存行为在特定时间后出现回归，可能与新增的思考开关有关。10条评论。
   [查看详情](https://github.com/anomalyco/opencode/issues/31755)

7. **#32444 [CLOSED] GLM-5.2思考变体（High/Max）未被暴露——`variants()`中全量排除`glm`**
   模型ID包含“glm”就被完全排除变体选择器，导致用户无法在运行时切换思考模式。9条评论，已关闭。
   [查看详情](https://github.com/anomalyco/opencode/issues/32444)

8. **#31119 [OPEN] 错误：no such column: name**
   用户升级到1.16.2后应用无法使用，报数据库列不存在，影响回归用户。7条评论。
   [查看详情](https://github.com/anomalyco/opencode/issues/31119)

9. **#15080 [OPEN] 为Task工具添加可配置超时参数**
   Task工具（用于调度子代理）没有超时限制，子代理可能挂起。请求增加配置参数。5条评论，2👍。
   [查看详情](https://github.com/anomalyco/opencode/issues/15080)

10. **#33102 [OPEN] OpenCode Go工作区订阅在仪表板中消失且无法管理**
    用户被重复扣费，但仪表板没有显示有效订阅。3条评论，刚创建（2026-06-20）。
    [查看详情](https://github.com/anomalyco/opencode/issues/33102)

---

## 重要 PR 进展（10条）

1. **#33010 [OPEN] 添加Android/Termux支持至postinstall、wrapper和publish**
   为Termux（Android arm64）提供全面支持，修正`platformMap`并添加编译配置。需测试。
   [查看详情](https://github.com/anomalyco/opencode/pull/33010)

2. **#33166 [OPEN] 跳过Nix版本的bun版本检查**
   由于bun 1.3.14存在bug导致Nix包构建失败，采用Nixpkgs中已有的hack修复。关闭 #28389。
   [查看详情](https://github.com/anomalyco/opencode/pull/33166)

3. **#33164 [OPEN] 允许编辑非Git项目设置**
   OpenCode Desktop之前只允许Git仓库的项目设置编辑，此PR扩展至任何文件夹。
   [查看详情](https://github.com/anomalyco/opencode/pull/33164)

4. **#32896 [CLOSED] fix(compaction): 为输出保留完整头部空间**
   修正压缩模块中对`limit.input`模型的计算逻辑，移除20K保留上限，关闭 #32656。已合并。
   [查看详情](https://github.com/anomalyco/opencode/pull/32896)

5. **#33162 [OPEN] feat(cli): 添加yolo权限别名**
   为已有`--dangerously-skip-permissions`选项添加`--yolo`别名，并支持环境变量。
   [查看详情](https://github.com/anomalyco/opencode/pull/33162)

6. **#18306 [CLOSED] 添加Open WebUI提供者**
   长期悬挂PR，终于合并，为OpenCode新增Open WebUI兼容提供者。
   [查看详情](https://github.com/anomalyco/opencode/pull/18306)

7. **#33148 [OPEN] 允许通过配置跳过会话标题生成**
   针对本地模型生成慢的问题，新增`skip-title`选项避免不必要的LLM调用。
   [查看详情](https://github.com/anomalyco/opencode/pull/33148)

8. **#33160 [OPEN] fix(mcp): 修复向OpenAI兼容提供者发送null参数**
   MCP工具参数缺少显式类型时，MiniMax等模型收到null值，导致调用失败。
   [查看详情](https://github.com/anomalyco/opencode/pull/33160)

9. **#33144 [OPEN] 添加代理团队和嵌套子代理委派**
   实现多层级子代理委派、预算恢复等机制，部分解决 #32166。功能量大，需仔细review。
   [查看详情](https://github.com/anomalyco/opencode/pull/33144)

10. **#33158 [CLOSED] fix(tui): 分离子代理工具行**
    修复TUI渲染时子代理任务行与其它元素的重叠问题，更新快照。已合并。
    [查看详情](https://github.com/anomalyco/opencode/pull/33158)

---

## 功能需求归类

- **代理沙箱/权限控制**：#2242（限制代理终端命令范围）、#33162（添加yolo别名）持续有用户关注。
- **会话上下文管理**：#8501（展开粘贴文本）、#6152（显示上下文使用量）、#33148（跳过标题生成）、#33140（跳过标题生成）——用户希望更精细控制token使用和上下文展示。
- **模型与提供者兼容性**：#32444（GLM-5.2思考变体）、#31755（MiniMax缓存）、#7078（本地Ollama连接）、#18306（Open WebUI）——开发者持续要求支持更多模型和提供者。
- **TUI/UI改进**：#25390（`$HOME`变量支持）、#18092（Web UI文件diff预览）、#33106（大会话diff崩溃）——用户对稳定性和易用性的诉求。
- **稳定性与兼容性**：#27589（Alpine Linux musl）、#31119（数据库列缺失）、#33102（订阅管理）——回归和平台兼容问题是常见痛点。

---

## 开发者关注点

- **回归问题频发**：多个Issue（#27589、#31119、#31755）指向新版本引入的回归，尤其在数据库迁移、平台适配、缓存逻辑方面，社区急需更稳健的测试覆盖。
- **配置灵活性不足**：安装脚本忽略环境变量（#7675）、插件路径不支持`$HOME`（#25390）、非Git项目无法编辑设置（#33164）——开发者希望更符合Unix习惯的配置系统。
- **子代理与资源管控**：#15080（Task超时）、#29462（Skills无上限注入）显示用户在高阶自动化场景中对资源限制和效率优化的强烈需求。
- **跨平台/容器支持**：Alpine musl、Android Termux、Nix构建等非主流平台的兼容性改进正在被积极贡献，但核心维护者响应速度仍待提升。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-21

## 1. 今日更新概览

过去 24 小时内，Qwen Code 发布了 **v0.18.4** 正式版及 **v0.18.4-preview.0** 预览版，主要修复了核心文件历史中 sed 编辑跟踪机制。社区提交了 **超过 50 个 Issues** 和 **超过 50 个 PRs**，其中数量庞大的 Issues 集中于大小写敏感的 URL/域名检查缺陷、路径边界安全校验缺失、以及各类参数解析宽松导致的不稳定行为。维护者积极响应，多个修复已合并进入 `main` 分支。

---

## 2. 版本发布

### v0.18.4 正式版 & v0.18.4-preview.0

- **Release 标签**：[v0.18.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.4)、[v0.18.4-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.4-preview.0)
- **更新亮点**：
  - **修复(core)**：在 `file history` 中正确跟踪支持的 sed 编辑操作，避免历史记录遗漏或错误回放（PR [#5255](https://github.com/QwenLM/qwen-code/pull/5255)）。
  - 同步了此前 v0.18.3 的持续集成与发布脚本调整。
- **影响场景**：所有使用 `sed` 编辑模式进行文件修改的用户，特别是自动化脚本执行和历史回溯功能。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔔 #1009 [已关闭] CLI approval mode 配置错误导致启动崩溃
- **优先级**: P1
- **摘要**：用户在 CLI 中配置 `approval mode` 为空值时，程序报错 `Invalid approval mode` 并直接退出。
- **影响**：所有使用 `qwen` 命令行工具且 approval mode 配置不当的用户。
- **社区反应**：7 条评论，维护者已复现并修复。
- **链接**：https://github.com/QwenLM/qwen-code/issues/1009

### 🔔 #5442 [已关闭] Qwen OAuth 端点 URL 大小写导致协议前缀错误
- **优先级**: P2
- **摘要**：`QwenContentGenerator.getCurrentEndpoint()` 使用 `startsWith('http')` 检查协议，因大小写敏感，`HTTPS://...` 被错误添加 `https://` 前缀，导致双协议头。
- **影响**：使用大写 URL scheme 的 OAuth 认证场景（如某些企业代理）。
- **标签**：`welcome-pr`（欢迎社区贡献修复）。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5442

### 🔔 #5465 [已关闭] 钉钉 webhook URL 大写被误认为会话 ID
- **优先级**: P2
- **摘要**：`DingtalkChannel.isConversationId` 使用 `!chatId.startsWith("http")` 判断，大写 `HTTPS://...` 被当作对话 ID，导致 webhook 功能失效。
- **影响**：使用钉钉集成且 webhook URL 为大写字母的用户。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5465

### 🔔 #5451 [已关闭] HTTP marketplace 源错误使用 HTTPS 客户端
- **优先级**: P2
- **摘要**：`loadMarketplaceConfigFromSource` 允许 `http://` 地址，但共享 fetch 工具始终调用 `https.get`，导致 HTTP 源请求被 Node 拒绝。
- **影响**：插件/扩展下载场景，若市场地址为 HTTP 则无法加载。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5451

### 🔔 #5444 [已关闭] @file 临时目录异常匹配兄弟路径前缀
- **优先级**: P2
- **摘要**：`@file` 处理中的路径检查使用 `absolutePathName.startsWith(projectTempDir)`，若临时目录为 `/tmp/qwen/tmp`，则 `/tmp/qwen/tmp-other/...` 也被当作安全路径，存在安全旁路风险。
- **影响**：文件操作权限校验，可能允许越权读取或写入。
- **标签**：`welcome-pr`，关注安全。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5444

### 🔔 #5440 [已关闭] 安装检测前缀匹配缺少路径边界
- **优先级**: P2
- **摘要**：`getInstallationInfo()` 使用 `realPath.startsWith(normalizedProjectRoot)` 判断项目根目录，导致 `/home/user/proj-extra` 被误认为属于 `/home/user/proj`，影响运行模式判断。
- **影响**：项目路径相似但不同时，可能触发错误的本地 GIT 或包安装模式。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5440

### 🔔 #5472 [开启] 回归：实时全屏思维流（从 v0.18.2 起）
- **优先级**: P3
- **摘要**：用户反馈 `#5261` 修复后，`think` 模式在实时显示思维链时仍然无法展开，需要手动 `Ctrl+O` 查看。请求恢复 v0.18.2 之前的实时流式渲染。
- **社区反应**：有 1 个 👍 支持，属于用户体验回归诉求。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5472

### 🔔 #5436 [已关闭] npm 扩展注册表获取误判大写 HTTPS URL
- **优先级**: P2
- **摘要**：`fetchNpmJson` 和 `downloadNpmFile` 使用 `url.startsWith("https://")` 区分 HTTP/HTTPS 客户端，大写 `HTTPS://...` 被分配给 HTTP 客户端，导致证书验证错误或连接失败。
- **影响**：使用自定义 npm registry 且 URL 为大写的情况。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5436

### 🔔 #5471 [已关闭] 远程输入忽略截断后写入的新命令
- **优先级**: P2
- **摘要**：`RemoteInputWatcher` 基于已消费字节数偏移跟踪，当外部写入者截断/轮换文件并写入新命令时，watcher 继续忽略后续行。
- **影响**：使用 `--input-file` JSONL 流式输入的用户（如 CI/CD 或外部编排工具）。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5471

### 🔔 #5518 [开启] bundle restore 拒绝带尾部分隔符的目标目录
- **优先级**: P2
- **摘要**：`restoreFiles()` 在检查路径逃逸时使用 `fullPath.startsWith(targetDir + sep)`，若调用方传入 `targetDir/`（带尾部斜杠），则 `...` 拼接后路径不匹配，导致误报逃逸。
- **影响**：桌面端或 CLI 的 bundle 解压功能，当目标目录来自用户输入时容易触发。
- **链接**：https://github.com/QwenLM/qwen-code/issues/5518

---

## 4. 重要 PR 进展（精选 10 条）

### 🚀 #5539 [开启] refactor(core): 用 customHeaders 替换 OpenRouter/Requesty 专有 provider 类
- **内容**：移除 `OpenRouterOpenAICompatibleProvider` 和 `RequestyOpenAICompatibleProvider`，改用 `ProviderConfig.customHeaders` 字段直接在 preset 中声明认证头。减少了重复代码，便于新增供应商。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5539

### 🚀 #5502 [开启] feat(voice): 语音听写（原生捕获、流式传输与偏置）
- **内容**：新增 `/voice` 命令，支持按住空格录音/点击切换/静音结束提交；引入 `/model --voice` 选择转录模型。属于重要新功能，尚在开发。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5502

### 🚀 #5432 [已合并] perf(core): 直接读 .git/HEAD 获取当前 Git 分支
- **内容**：替换 `git rev-parse --abbrev-ref HEAD` 为直接读取文件，减少每次渲染时的子进程开销。属于性能优化。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5432

### 🚀 #5478 [已合并] feat(core): 添加 Requesty 作为一等模型供应商
- **内容**：新增 `Requesty` 提供商支持（OpenAI 兼容网关），与 OpenRouter 格式一致。用户可通过 `qwen --model requesty/xxx` 使用。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5478

### 🚀 #5535 [已合并] test(core): 等待 cron 锁探测接管测试稳定
- **内容**：修复了 cron 锁竞争测试中的时序问题，避免断言过早执行。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5535

### 🚀 #5473 [已合并] fix(cli): 处理截断的远程输入文件
- **内容**：检测文件被截断/重写后重新读取，避免跳过新写入的命令（修复 #5471）。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5473

### 🚀 #5245 [开启] fix: 隐藏 Windows 上空的原生会话（包含 ~\ 路径展开）
- **内容**：修复 Windows 上 `~\` 路径未展开为 home 目录的问题，以及空原生会话显示空白的问题。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5245

### 🚀 #5515 [已合并] fix(desktop): 允许 bundle 文件名中含有双点
- **内容**：仅拒绝 `..` 路径段，允许像 `..plans` 或 `a..b` 这样的合法文件名；增加回归测试。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5515

### 🚀 #5529 [已合并] test(desktop): 更新被阻止 scheme 的 open-url 断言
- **内容**：修正测试用例以匹配当前错误信息，确保 `file:` 等被阻止 scheme 不转发到外部。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5529

### 🚀 #5494 [已合并] fix(core): 空 parts 数组不被误判为函数调用/响应
- **内容**：`isFunctionResponse` 和 `isFunctionCall` 现在要求至少一个 part，避免空数组 `[]` 被 `[].every()` 误判。
- **链接**：https://github.com/QwenLM/qwen-code/pull/5494

---

## 5. 功能需求归类

从今日的 Issues 和 PRs 中，可以观察到用户和贡献者反复提及以下几类方向：

| 分类 | 代表需求 |
|------|----------|
| **URL 方案大小写规范化** | 多个 Issue 反馈 OAuth、钉钉、npm 扩展、favicon、桌面图标等场景中，代码使用 `startsWith("http")` 导致 `HTTPS://` 被误处理。 |
| **路径边界安全检查增强** | 临时目录、项目根目录、bundle 恢复、会话计划目录等检查只做前缀匹配，导致兄弟路径被误信任。 |
| **参数解析严格化** | `parseInt`、`Number()` 对 `2.5`、`1e5`、`0x10` 等格式宽容，导致静默截断或意外值。多个问题指向环境变量、API 参数、LSP 端口等。 |
| **实时思维链显示恢复** | v0.18.2 后实时全屏思维链被移除，用户请求恢复（#5472）。 |
| **新模型/供应商支持** | PR #5539 和 #5478 添加了 Requesty 支持，并提议使用 `customHeaders` 简化供应商扩展。 |
| **语音输入功能** | PR #5502 实现了原生语音听写，属于首次引入的交互方式。 |

---

## 6. 开发者关注点

- **输入验证的隐形风险**：多个高频 Issues 揭示了在 URL、路径、数值参数检查中频繁使用 `startsWith`、`parseInt` 等不严格方法。开发者应警惕此类“边界假阳性”，尤其是在安全相关的路径白名单场景中。
- **跨平台兼容性**：Windows 上 `~` 路径展开、空原生会话等问题数次出现，表明桌面端 Windows 用户基础正增长，但平台适配仍有遗漏。
- **回归管控**：实时思维链（#5472）的回归引起了社区注意，说明核心用户体验功能的变化需谨慎管理回归测试。
- **贡献者友好**：大量 Issue 被打上 `welcome-pr` 标签，且修复被快速合并，反映出项目维护者对社区贡献的开放态度；建议开发者可据此选择低优先级但清晰的修复切入。

---

*数据来源：GitHub [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)，统计时间窗口 2026-06-20 00:00 ~ 2026-06-21 08:00 (UTC)。*

</details>