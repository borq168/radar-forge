# AI CLI 工具社区动态日报 2026-06-18

> 生成时间: 2026-06-18 00:39 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为一名专注于AI开发工具生态的资深技术分析师，基于您提供的2026年6月18日各主流AI CLI工具的社区动态数据，我将为您生成一份专业的横向对比分析报告。

---

### AI CLI 工具生态横向对比分析报告 (2026-06-18)

#### 1. 今日横向概览

今日，各AI CLI工具生态普遍处于“稳定迭代”状态，但社区活跃度差异显著。**OpenAI Codex** 和 **OpenCode** 更新最为密集，均在大规模PR合并中进行架构重构和功能拓展。**Claude Code** 发布小版本修复并添加新命令，但一个持续数月的卡死问题成为社区最大痛点。**Gemini CLI** 和 **GitHub Copilot CLI** 关注点集中在Agent稳定性和服务可靠性上。相较之下，**Qwen Code** 社区正激烈讨论收费政策变动，而 **Kimi Code CLI** 则相对沉寂。

#### 2. 各工具活跃度对比

| 工具名称 | 过去24小时活跃 Issues 数 | 过去24小时活跃 PR 数 | 本次发布版本 | 版本更新要点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 30 条 (精选10条) | 5 | v2.1.181 | 新增 `/config` 命令、macOS 沙箱选项 |
| **OpenAI Codex** | 50+ 条 (精选10条) | 50+ (精选10条) | rust-v0.141.0-alpha.6/5 | 密集的Rust版本Alpha迭代，无详细说明 |
| **Gemini CLI** | 50 条 (精选10条) | 20 条 (精选10条) | v0.48.0-preview.0 | 预览版发布，包含CI和依赖更新 |
| **GitHub Copilot CLI** | 10 条 (精选) | 0 | v1.0.64-0 | 新增 `/diagnose` 命令、MCP注册表安装、`/security-review` 正式可用 |
| **Kimi Code CLI** | 2 条 | 0 | 无 | - |
| **OpenCode** | 50+ 条 (精选10条) | 50+ 条 (精选10条) | v1.17.8 | 优化会话时间线加载，修复MCP schema与API key配置 |
| **Qwen Code** | 49 条 (精选10条) | 50 条 (精选10条) | v0.18.3 | 修复CLI中用户取消提问后的程序停止问题 |

#### 3. 共同出现的功能方向

今日多个工具社区共同指向以下功能需求：

- **多Agent/团队协作**：**Claude Code**、**OpenAI Codex**、**Gemini CLI**、**OpenCode** 均收到关于Agent间通信、任务编排、子代理管理与隔离的诉求。例如：**Claude Code** 的跨会话通信和Agent Teams独立配置，**OpenAI Codex** 的按轮次/线程级别配置多代理模式，**Gemini CLI** 的子代理成功误导性报告和自主使用技能问题，**OpenCode** 的多Agent编排。
- **MCP集成与工具生态**：**Claude Code**、**GitHub Copilot CLI**、**OpenCode** 都聚焦于MCP的集成深度和体验问题。**Claude Code** 涉及远程/SSH环境下的OAuth认证障碍；**GitHub Copilot CLI** 新的发布版本直接支持了MCP注册表安装，但同时遇到了子代理无法访问MCP工具的Bug；**OpenCode** 修复了MCP schema验证问题。
- **安全与权限控制**：**Claude Code** 的 `--dangerously-skip-permissions` 在远程端失效、**Gemini CLI** 要求Agent避免破坏性行为、**OpenCode** 对Agent沙箱隔离的高需求、**GitHub Copilot CLI** 插件 `preToolUse` 无法静默执行，都指向用户对更精细、更可控的安全模型的迫切需求。
- **性能与稳定性**：**Claude Code** 的长期卡死问题、**OpenAI Codex** 的频繁断连和系统资源耗尽、**GitHub Copilot CLI** 的服务中断、**OpenCode** 的GPT响应慢和CPU占用高，共同构成了对核心服务可靠性和性能的普遍担忧。

#### 4. 差异化定位分析

- **Claude Code：“自主代理与团队先驱”**：功能上聚焦于Agent团队管理、跨会话通信和深度的远程控制，体现出对复杂、协作式开发工作流的支持。其对Agent自主性的追求也带来了稳定性（如卡死）和权限控制方面的挑战。
- **OpenAI Codex：“架构迭代与新能力探索者”**：通过高频发布Alpha版本和大量底层PR（如引入传输无关的Session运行时、重构插件安装系统），显示出对架构基础进行重大升级的意图。其社区Issues更多地反映了复杂系统和扩展功能带来的阵痛。
- **Gemini CLI：“Google生态与自动化集成者”**：与Google Cloud（ACP协议）、Android（Wayland兼容性）的集成是其特点。社区反馈核心在于Agent自身行为的可靠性和健壮性，期待其能更智能、主动地利用自定义技能。
- **GitHub Copilot CLI：“GitHub生态粘合与插件平台”**：紧密绑定GitHub和VS Code生态，近期重点转向MCP生态集成和插件系统。用户痛点集中在服务稳定性、插件权限模型和MCP工具在复杂场景下的可用性。
- **Kimi Code CLI：“关注点分散的潜力股”**：从数据看，社区活跃度极低，反馈集中在基础功能的缺失（如SSL忽略、模式切换）。该工具可能仍处于早期用户积累或功能探索阶段。
- **OpenCode：“开源灵活性与模型中立平台”**：作为开源项目，其社区诉求集中在IDE集成（VS Code扩展）、模型自动发现与切换、以及深度的自定义配置（如沙箱、任务路由）。体现了其作为“开放平台”的定位，但也面临来自多个模型提供商兼容性的挑战。
- **Qwen Code：“国产化与社区治理试探者”**：其社区动态核心围绕收费政策调整（OAuth额度）展开，这表明商业化进程是当前焦点。技术层面，其对本地模型、Token统计、多模态（视觉桥）的支持体现了对特定用户群体的关注。

#### 5. 社区活跃度记录

从数据密度看，**今日活跃度最高的工具为 OpenAI Codex 和 OpenCode**，两者在Issues和PR数量上均远超其他工具，社区讨论和开发活动极其密集。**Claude Code** 和 **Gemini CLI** 保持稳定的活跃度，社区讨论深度高。**GitHub Copilot CLI** 因服务中断事件和版本发布，社区情绪集中。**Qwen Code** 因收费政策引发大量讨论，但技术讨论热度并存。**Kimi Code CLI** 活跃度最低，社区反馈信号微弱。

#### 6. 有证据支撑的观察

- **观察一：多Agent协作成为共性需求，但实现路径各异。** **Claude Code**（跨会话、Agent Teams）、**OpenAI Codex**（协议、线程级配置）、**Gemini CLI**（子代理行为）、**OpenCode**（多Agent编排）均收到相关诉求。这表明开发者正从“单一指令”转向“多Agent协作”的工作范式。各工具的实现侧重点不同：**Claude Code** 强调管理，**OpenAI Codex** 强调配置灵活性，**Gemini CLI** 强调自主性，**OpenCode** 强调隔离性。
- **观察二：MCP协议面临“最后一公里”集成挑战。** **Claude Code**（远程OAuth）、**GitHub Copilot CLI**（子代理访问权限）、**OpenCode**（schema验证）的多个Issues表明，MCP的标准化接口已初步完成，但在实际的企业级、远程、多层级代理等复杂应用场景中，其认证、安全、进程边界的处理仍是集成痛点。
- **观察三：安全权限模型正从“二元选择”走向“精细化管控”。** **Claude Code** 的 (`--dangerously-skip-permissions` vs 服务器端覆盖) 和 **GitHub Copilot CLI** 的（白名单 vs 全手动确认）都反映出“全有或全无”的权限模式已不能满足需求。用户渴望对文件操作、网络访问、危险命令等有**上下文感知**和**可配置**的细粒度权限策略，这在 **OpenCode** 的Agent沙箱呼声中也得到印证。
- **观察四：性能与稳定性是维系用户信任的底线。** **Claude Code** 长达数月的卡死、**OpenAI Codex** 的频繁断连、**GitHub Copilot CLI** 的服务中断，这些“老问题”或“燃眉之急”是大量社区反馈的焦点。持续的稳定性问题会快速消耗用户信任，并可能成为用户选择其他替代工具的驱动力。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 – 2026-06-18

## 今日更新概览

过去24小时内，Anthropics 发布了 v2.1.181 小版本，新增 `/config` 命令可动态修改任意设置，并加入 `sandbox.allowAppleEvents` 的 macOS 沙箱选项。社区方面，一个持续数月的严重卡死/冻结问题（#26224）仍在讨论中，累计 118 条评论、143 个 👍，是当前最受关注的 Bug；同时，与 Multi-Agent 协作、权限控制、MCP 集成相关的多个功能请求和 Bug 获得大量社区反馈。共跟踪到 30 条活跃 Issue 和 5 个 PR（过去24小时更新）。

---

## 版本发布

### v2.1.181（2026-06-18）
- **`/config key=value` 语法**：支持在交互式、`-p` 和 Remote Control 模式中动态设置任意配置项（如 `/config thinking=false`），无需编辑配置文件或重启会话。
- **`sandbox.allowAppleEvents` 设置**：macOS 用户可选择允许沙箱内的命令发送 Apple Events，拓展自动化脚本能力。
- **`CLAUDE_CLIENT_P` 环境变量**：新增客户端标识相关变量（细节待补全）。

---

## 社区热点 Issues（10 条）

### 1. #26224 – [BUG] Claude Code 长时间卡死 / 冻结（严重）
- **链接**：https://github.com/anthropics/claude-code/issues/26224
- **作者**：@nullbio | 创建：2026-02-17 | 更新：2026-06-17 | 评论：118 | 👍：143
- **摘要**：用户在大量 prompt 后遭遇 5-20 分钟以上无响应，影响日常开发流。虽被标记为 `bug`，但维护者尚未给出明确根因或修复版。该问题已持续数月，社区累积大量复现报告。

### 2. #24798 – [增强] 多 Claude 会话间的跨会话通信
- **链接**：https://github.com/anthropics/claude-code/issues/24798
- **作者**：@hmcg001 | 创建：2026-02-10 | 更新：2026-06-17 | 评论：35 | 👍：16
- **摘要**：用户运行多个并行 Claude Code 会话（不同模块/任务）时，无法协调依赖关系或共享上下文。请求新增协议/接口，使会话间可传递状态和任务依赖。

### 3. #29214 – [BUG] Remote Control 移动端无视 `--dangerously-skip-permissions`
- **链接**：https://github.com/anthropics/claude-code/issues/29214
- **作者**：@hoiung | 创建：2026-02-27 | 更新：2026-06-17 | 评论：30 | 👍：76
- **摘要**：使用 `--dangerously-skip-permissions` 启动会话后，Claude 移动 App 仍对每次文件编辑和 bash 命令弹出权限确认。期望移动端继承本地权限模式。

### 4. #44243 – [增强] 内置 Slack 连接器需支持多工作区
- **链接**：https://github.com/anthropics/claude-code/issues/44243
- **作者**：@nath-maker | 创建：2026-04-06 | 更新：2026-06-17 | 评论：27 | 👍：57
- **摘要**：当前 Slack MCP 连接器只支持单个工作区，无法通过 UI 或配置添加第二个工作区，限制了咨询师等跨工作区使用场景。

### 5. #23669 – [增强] Agent Teams：支持每个队友独立的工作目录、CLAUDE.md 和 MCP 配置
- **链接**：https://github.com/anthropics/claude-code/issues/23669
- **作者**：@hugobarauna | 创建：2026-02-06 | 更新：2026-06-17 | 评论：24 | 👍：28
- **摘要**：当并行处理多个仓库时，队友继承 Team Lead 的工作目录和配置，无法独立管理不同项目的 `.claude/` 设置。用户希望每个 Team 成员能指定自己的 WDK 和 MCP 配置。

### 6. #28300 – [增强] 跨机器多智能体协作（Agent-to-Agent 协议）
- **链接**：https://github.com/anthropics/claude-code/issues/28300
- **作者**：@MarioK1975 | 创建：2026-02-24 | 更新：2026-06-17 | 评论：26 | 👍：0
- **摘要**：大型分布式系统需多台机器上的 Claude Code 实例协同开发，当前无原生协议支持 Agent 跨机器发现、任务分配和结果合并。

### 7. #61993 – [BUG] 子智能体无法再生成子智能体（Task/Agent 原语嵌套受限）
- **链接**：https://github.com/anthropics/claude-code/issues/61993
- **作者**：@xblabs | 创建：2026-05-24 | 更新：2026-06-17 | 评论：18 | 👍：0
- **摘要**：Windows 平台下，子 Agent 生成的上下文不可用 `Task` 或 `Agent` 原语，导致无法实现深层嵌套的 Agent 层次结构。用户期望递归 Agents 能力。

### 8. #65514 – [BUG] Pro 计划用户无法使用 1M 上下文，显示需要额外积分
- **链接**：https://github.com/anthropics/claude-code/issues/65514
- **作者**：@Rene3481 | 创建：2026-06-04 | 更新：2026-06-17 | 评论：18 | 👍：2
- **摘要**：使用量仅 17% 的 Pro 用户在尝试激活 1M 上下文时被提示“需要 Usage Credits”，怀疑是计费系统错误或条件未明确满足。影响 Windows + VSCode 用户。

### 9. #68721 – [BUG] 2.1.178 回归：原生团队管理工具 TeamCreate/TeamDelete 不再暴露
- **链接**：https://github.com/anthropics/claude-code/issues/68721
- **作者**：@cjmsync | 创建：2026-06-16 | 更新：2026-06-17 | 评论：6 | 👍：4
- **摘要**：升级到 2.1.178 后，之前版本可用的内置团队管理工具（TeamCreate / TeamDelete）在 Agent 工具列表中消失。Linux 平台，已标记为 regression，维护者未回复。

### 10. #69205 – [BUG] 远程 HTTP MCP OAuth 在 SSH 机器上不可行（Google OAuth 重定向限制）
- **链接**：https://github.com/anthropics/claude-code/issues/69205
- **作者**：@nick-youngblut | 创建：2026-06-17 | 更新：2026-06-18 | 评论：3
- **摘要**：通过 SSH 连接到远程机器时，HTTP MCP 服务器的 OAuth 认证因回调重定向必须回环到本地浏览器而失败。用户期望支持远程/无头环境下的 MCP OAuth 流程。

---

## 重要 PR 进展（5 条）

### 1. #69226 – [更新] 前端设计 skill（1.1.0 版）
- **链接**：https://github.com/anthropics/claude-code/pull/69226
- **作者**：@williamqian12 | 创建：2026-06-17 | 更新：2026-06-18
- **摘要**：改进前端设计 skill，版本升至 1.1.0，已安装用户可自动接收更新。

### 2. #19867 – [修复] code-review 插件：允许新 commit 推送后触发重新审查
- **链接**：https://github.com/anthropics/claude-code/pull/19867
- **作者**：@nielskaspers | 创建：2026-01-21 | 更新：2026-06-17
- **摘要**：修复 code-review 插件的预检查逻辑，当有新的 commit 被推送到 PR 时，不再错误跳过审查。增加 `--force` 参数以完全覆盖跳过条件。

### 3. #33443 – [修复] 更新 Dockerfile 使用原生安装器（弃用 npm install）
- **链接**：https://github.com/anthropics/claude-code/pull/33443
- **作者**：@pri2si17-1997 | 创建：2026-03-12 | 更新：2026-06-17
- **摘要**：将 `.devcontainer/Dockerfile` 升级至 node 24.14，并使用原生安装器替换已废弃的 `npm install` 方式。

### 4. #60427 – [文档] README 中标准化 GitHub 大小写
- **链接**：https://github.com/anthropics/claude-code/pull/60427
- **作者**：@MackDing | 创建：2026-05-19 | 更新：2026-06-17（已关闭）
- **摘要**：修 README 中 GitHub 的大小写为官方标准格式。

### 5. #60732 – [文档] 润色插件 README 文案
- **链接**：https://github.com/anthropics/claude-code/pull/60732
- **作者**：@MackDing | 创建：2026-05-20 | 更新：2026-06-17（已关闭）
- **摘要**：微调插件生态描述句，提升可读性。

---

## 功能需求归类

从近期 Issue 中，社区反复提及的方向包括：

- **多 Agent / 团队协作**：跨会话通信（#24798）、Agent Teams 独立配置（#23669）、跨机器 Agent 协议（#28300）、子 Agent 递归（#61993）、团队管理工具回归（#68721）。
- **权限与远程控制**：`--dangerously-skip-permissions` 在移动端失效（#29214）、Remote Control 被服务器端开关覆盖（#62205）、远程 MCP OAuth 不适用（#69205）。
- **性能与稳定性**：长时间会话卡死（#26224）、终端文本损坏（#68711）、滚动锁定（#51393）、1M 上下文计费错乱（#65514）。
- **集成与插件**：Slack 多工作区（#44243）、MCP 服务器认证方案（#69205）、插件 skill 重复加载（#60375）。
- **UI/UX**：Thinking 指示器颜色不可定制（#69229）、项目名称动画（#62387）、提问弹窗不应中断输入（#59336）、子 Agent 后台活动无可视反馈（#67485）。
- **平台兼容性**：Windows 子 Agent 限制（#61993）、Windows Terminal 滚动（#51393）、Linux tmux 焦点抢夺（#49184）、Bun 在 Windows 上崩溃（#60363）。

---

## 开发者关注点

- **持续数月的卡死问题仍未解决**：#26224 自 2 月报告已逾四个月，累计 118 条评论，是该仓库评论数最高的 Issue，对高频使用场景影响严重。
- **Multi-Agent 协作是当前最热需求**：至少 5 个增强型 Issue（#24798、#28300、#23669、#61993、#67485）聚焦不同粒度的 Agent 间通信、配置共享与可视性。
- **权限与 Remote Control 体验不一致**：多个报告指出 `--dangerously-skip-permissions` 在移动端、Desktop 端被服务器端配置或 A/B 测试覆盖，造成信任模式混乱。
- **回归问题反复出现**：如 #68721（团队管理工具回归）、#51393（Windows Terminal 滚动回归）等，社区对版本更新的稳定性敏感。
- **MCP 生态增长中的认证障碍**：#69205 揭示远程/SSH 环境下 OAuth 流程缺乏适配，将限制 MCP 服务器在企业远程工作流中的采纳。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，生成一份结构清晰、语言专业的 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-18

## 今日更新概览
过去 24 小时内，Codex 社区非常活跃，共计有超过 50 条 Issues 和 50 个 PR 获得更新。社区反馈主要集中在 **连接稳定性**、**身份认证** 以及 **macOS 兼容性** 等关键问题上。同时，开发团队在 **多代理模式**、**插件安装系统** 和 **性能优化** 方面提交了重要的 PR，显示出对架构重构和功能深化的持续投入。

## 版本发布
- **`rust-v0.141.0-alpha.6` 和 `rust-v0.141.0-alpha.5`**：过去24小时内发布了两个Rust相关的Alpha版本。未提供具体更新说明，但高频的Alpha版本发布表明团队正在进行密集的开发和内部测试。

## 社区热点 Issues

1. **#18960: Codex App 频繁断连重连**
   - **影响场景**: Codex App 用户在使用过程中频繁遇到 WebSocket 连接断开，导致流式输出中断。
   - **问题范围**: 过去几小时内，macOS 平台 Pro 用户持续遭遇此问题。
   - **社区反应**: 共 44 条评论和 34 个👍，是当前讨论最热烈的问题，用户普遍反映体验受到严重影响。
   - **链接**: https://github.com/openai/codex/issues/18960

2. **#25670: CLI 认证彻底“崩溃”**
   - **影响场景**: 用户通过 CLI 进行多层验证（通行密钥、手机、认证App）后，仍被要求输入电话号码，导致无法登录。
   - **问题范围**: 影响添加了多重验证方式的用户，可能与旧号码绑定有关。
   - **社区反应**: 33 条评论，19 个👍，认证流程的体验问题是用户痛点。
   - **链接**: https://github.com/openai/codex/issues/25670

3. **#28190: macOS 系统阻止 `rg` (ripgrep) 运行**
   - **影响场景**: Codex CLI 在 macOS 上运行时，依赖的工具 `rg` 被系统安全策略阻止，导致功能异常。
   - **问题范围**: 影响 0.139.0 版本的 Pro 用户，使用 `gpt-5.5` 模型。
   - **社区反应**: 31 条评论，53 个👍，点赞数很高，说明这是一个影响面广的兼容性问题。
   - **链接**: https://github.com/openai/codex/issues/28190

4. **#28015: 安全检测误报，频繁打断正常操作**
   - **影响场景**: Codex CLI 将常规的本地仓库维护操作（如检查状态、清理分支）误判为网络安全威胁，并弹出确认提示。
   - **问题范围**: 该“安全-检查”机制过于敏感，中断了正常的 DevOps 工作流程。
   - **社区反应**: 20 条评论，用户明确表示这不是安全相关的操作，批评了误报行为。
   - **链接**: https://github.com/openai/codex/issues/28015

5. **#5041: VS Code 扩展沙箱错误 (长期问题)**
   - **影响场景**: VS Code 扩展即使在启用 `danger-full-access` 后，仍阻止网络访问并返回持久性的沙箱错误。
   - **问题范围**: 影响 `gpt-5-codex` 模型在 Linux 平台上的用户。虽然已关闭，但过去24小时仍有更新，表明可能被重新审视。
   - **社区反应**: 12 条评论，10 个👍。这是一个持续近9个月的老问题，间接反映了沙箱机制的复杂性。
   - **链接**: https://github.com/openai/codex/issues/5041

6. **#28422: `image_gen` 功能回归**
   - **影响场景**: Codex CLI 0.140.0 版本中，当图片生成状态保持为 `generating` 时，生成的图片无法被正确保存。
   - **问题范围**: 影响Windows平台Pro用户，由版本更新引入。
   - **社区反应**: 9 条评论，用户确认这是一个由更新导致的回归问题并提供了复现步骤。
   - **链接**: https://github.com/openai/codex/issues/28422

7. **#28071: Codex Desktop 导致 `syspolicyd` 耗尽**
   - **影响场景**: Codex Desktop 在 macOS 上运行后，系统安全策略守护进程 (`syspolicyd`) 资源被耗尽，导致应用无法重启，直到系统重启。
   - **问题范围**: 影响 `26.609.41114` 版本用户，描述详细，提供 Code Signing 细节。
   - **社区反应**: 8 条评论，该问题严重影响可用性。
   - **链接**: https://github.com/openai/codex/issues/28071

8. **#25921: Crashpad 崩溃日志无限增长**
   - **影响场景**: Codex Desktop 持续生成 “Crashpad” 崩溃转储文件，每天可增长超过 5GB，占用大量磁盘空间。
   - **问题范围**: 影响 macOS 平台用户，问题持续存在。
   - **社区反应**: 8 条评论，用户报告具体增长数据，这是一个被长期忽视的性能问题。
   - **链接**: https://github.com/openai/codex/issues/25921

9. **#28811: 公开版 Codex 速率限制重置异常**
   - **影响场景**: 公开版 Codex 的速率限制重置似乎被立即应用，而非按承诺的“累积”方式给予用户。
   - **问题范围**: 影响公开版用户，与 OpenAI 官方的“重置累积”承诺相矛盾。
   - **社区反应**: 4 条评论，用户质疑策略执行的一致性。
   - **链接**: https://github.com/openai/codex/issues/28811

10. **#28672: Business 版 Codex 无法使用**
    - **影响场景**: ChatGPT Business 用户在 Ubuntu 开发容器中登录 Codex 后，发送消息即返回 401 认证错误，并强制要求重新电话验证。
    - **问题范围**: 2 个席位均受影响，导致 Business 套餐完全不可用。
    - **社区反应**: 3 条评论，问题严重，但讨论热度不高，可能影响范围有限。
    - **链接**: https://github.com/openai/codex/issues/28672

## 重要 PR 进展

1. **#28813: 在 `Esc` 中断前暂停活跃的 `/goal`**
   - **功能/修复**: 修复了 `Ctrl+C` 能暂停 `/goal` 但 `Esc` 不能的问题，统一了中断行为。
   - **链接**: https://github.com/openai/codex/pull/28813

2. **#28685 & #28792: 多代理模式增强**
   - **功能/修复**: 分别为“按轮次选择多代理模式”和“在线程级别配置多代理模式”引入支持，使代理的启用和选择更加灵活。
   - **链接**: https://github.com/openai/codex/pull/28685 & https://github.com/openai/codex/pull/28792

3. **#28806: 优化恢复和分叉历史**
   - **功能/修复**: 应用了基于检查点的恢复和写时复制分叉优化，旨在减少 `thread/resume` 和 `thread/fork` 等操作的延迟。
   - **链接**: https://github.com/openai/codex/pull/28806

4. **#28774: 为远程执行服务器添加 Noise 握手环境**
   - **功能/修复**: 通过 Noise 中继为远程 exec 服务器添加对环境管理器路径的支持，解决了短生命周期连接必须刷新凭据的问题。
   - **链接**: https://github.com/openai/codex/pull/28774

5. **#28815: 在管理认证请求中发送设备稳定 ID**
   - **功能/修复**: 让管理认证客户端提供设备稳定 ID，以改善认证流程的稳定性和可追溯性。
   - **链接**: https://github.com/openai/codex/pull/28815

6. **#28812: 为响应项添加可选 ID**
   - **功能/修复**: 为 `ResponseItem` 变体添加统一的、可选的内部 ID 形状，改善数据一致性和可寻址性。
   - **链接**: https://github.com/openai/codex/pull/28812

7. **#27500: 支持 `openai/form` 扩展表单**
   - **功能/修复**: 允许 App Server 客户端选择加入 `openai/form` MCP 扩展表单，为更复杂的用户交互提供基础。
   - **链接**: https://github.com/openai/codex/pull/27500

8. **#28817 ~ #28820 (系列 PR): 插件安装扩展重构**
   - **功能/修复**: 对插件安装进行了系列重构，包括添加执行器、后端、请求模型、以及从核心移除旧的单例安装工具。这是一个重大的代码清理和架构重塑。
   - **链接**: https://github.com/openai/codex/pull/28817 (及其相关 PR)

9. **#28605 & #28608: 插件和技能加载追踪优化**
   - **功能/修复**: 将插件和技能的配置加载追踪拆分为独立的 span，并传递插件命名空间以正确限定技能名称，旨在提升可观测性和功能性。
   - **链接**: https://github.com/openai/codex/pull/28605 & https://github.com/openai/codex/pull/28608

10. **#28787: 引入传输无关的 Session 运行时**
    - **功能/修复**: 将 Code-Mode 的会话所有权提取到传输无关的 `SessionRuntime` 中，为后续将会话状态移到独立进程做准备。这是一个关键的基础架构变更。
    - **链接**: https://github.com/openai/codex/pull/28787

## 功能需求归类

从过去24小时的 Issues 中，可以归纳出以下几个用户反复提出的功能方向：

*   **TUI/CLI 体验优化**: 用户期望更好的终端集成体验，例如#21666（TUI覆盖Neovim光标样式）、#28551（不中断正在输入用户）、#28527（支持非英文字符文件名搜索）。
*   **安全核查机制优化**: 社区对过于敏感、频繁误报的安全检测（#28015）表示不满，建议根据操作上下文降低对常见维护任务的警告。
*   **性能与稳定性**: 多个高性能问题被报告，包括 Crashpad 日志膨胀 (#25921)、syspolicyd 资源耗尽 (#28071)、子代理泄漏 (#17574, #24389) 等，系统资源管理是核心诉求。
*   **多代理与小助手协作**: 对多代理模式的灵活控制是明确的增强方向，包括按轮次选择代理 (#28685) 和线程级别配置 (#28792)。
*   **身份认证与账户管理**: 认证流程复杂且易出错（#25670），以及对速率限制机制透明度的质疑（#28688, #28811），表明用户对账户管理的稳定性和公平性有较高要求。

## 开发者关注点

*   **连接稳定性是头号痛点**: 最热门的 Issue (#18960) 聚焦于 App 端的 WebSocket 断连问题，这表明实时通信的可靠性是当前影响用户体验的首要因素。
*   **macOS 生态系统兼容性挑战**: 从系统安全策略阻止 `rg` (#28190) 到 `syspolicyd` 耗尽 (#28071)，再到 Intel Mac 的计算机使用功能缺失 (#26842)，macOS 平台用户正面临一系列兼容性挑战。
*   **身份认证流程过于冗余**: 多达33条评论的认证“崩溃”问题 (#25670) 表明，尽管安全性很重要，但复杂的多层验证流程正在成为用户的生产力瓶颈。
*   **子代理和后台进程管理**: 多个 Issues 提到子代理挂起 (#24389) 和泄漏 (#17574) 的问题，这提示开发者，随着多代理功能的推出，其背后的进程生命周期管理正成为新的关注焦点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026 年 6 月 18 日 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-18

## 今日更新概览

今日，Gemini CLI 发布了 v0.48.0-preview.0 预览版。社区活跃度稳定，共有 50 个 Issue 和 20 个 Pull Requests 在过去 24 小时内获得更新。开发者反馈集中在 **Agent 挂起、子代理（Sub-agent）行为异常** 以及 **Auto Memory（自动记忆）系统的健壮性** 等问题上。

## 版本发布

- **v0.48.0-preview.0**: 发布一个预览版。从 Commit 记录看，主要包含版本号升级和依赖更新相关的 CI 配置调整。由于 Changelog 内容在数据中不完整，实际功能变更未能完全展示。 [查看发布页](https://github.com/google-gemini/gemini-cli/releases/tag/v0.48.0-preview.0)

## 社区热点 Issues

1.  **Agent 通用性挂起**
    - **#21409**: 用户报告，当 Gemini CLI 将任务委托给通用 Agent 时会无限期挂起，即使是非常简单的操作（如创建文件夹）也无法完成。该问题获得 8 个 👍，表明影响范围较广。社区发现，通过指示模型不委托给子代理可以临时解决。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

2.  **子代理成功报告的误导性**
    - **#22323**: `codebase_investigator` 子代理在达到最大执行轮次（MAX_TURNS）后，即使未完成任何分析，也会报告状态为 `success`，隐藏了被中断的事实，导致用户误以为任务成功。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

3.  **Shell 命令执行卡死**
    - **#25166**: 一个高频痛点。在非常简单的 CLI 命令执行完毕后，Gemini CLI 仍会显示“Awaiting user input”（等待用户输入）并卡住，严重影响工作流。该问题被标记为 P1 优先级。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

4.  **Wayland 下浏览器子代理失败**
    - **#21983**: 用户报告在 Wayland 显示服务器环境下，浏览器子代理（Browser Subagent）无法正常工作并直接退出。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

5.  **Auto Memory 无信号会话无限重试**
    - **#26522**: Auto Memory 功能存在一个逻辑问题：当提取代理判定某个会话“无价值”而不读取时，该会话仍会保留在索引中，导致后续被无限次重试处理。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

6.  **Auto Memory 确定性编辑与日志泄漏**
    - **#26525**: 用户指出 Auto Memory 在将内容发送至模型前，日志中可能已记录了原始技能、密钥等信息，导致编辑过程存在安全漏洞。同时，要求实现确定性的编辑流程。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

7.  **Gemini 自主使用子代理和技能不足**
    - **#21968**: 用户反馈，即使配置了自定义技能（Skills）和子代理，Gemini CLI 也不会主动使用它们，除非用户明确指示。这降低了自定义自动化流程的效率。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

8.  **超过 128 个工具时出现 400 错误**
    - **#24246**: 当启用或可用的工具超过 128 个时，Gemini CLI 会遇到 400 错误，需要更智能的上下文管理来动态限制工具范围。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

9.  **Agent 应阻止破坏性行为**
    - **#22672**: 用户呼吁 Agent 在执行复杂 Git 操作（如 `git reset --force`）或修改数据库资源时应更具风险意识，优先推荐或选择更安全的替代方案。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **技能/代理文件作为符号链接不被识别**
    - **#20079**: 用户发现将 `~/.gemini/agents/` 目录下的文件设置为符号链接（Symlink）后，Gemini CLI 无法将其识别为有效的子代理。
    [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/20079)

## 重要 PR 进展

1.  **修复 Web 抓取编码问题** (#27996): 修复了 `web-fetch` 工具始终使用 UTF-8 解码响应体的问题。现在它会根据 `Content-Type` 头中的 `charset` 参数（如 GBK）进行正确解码，解决了访问非 UTF-8 编码网站时内容乱码的问题。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27996)

2.  **修复技能/代理内容注入** (#27994): 修复了当技能或子代理名称中包含 `$`、`&` 等特殊字符时，系统提示词（System Prompt）中的内容替换会出错的问题。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27994)

3.  **修复 CLI 配置错误处理** (#27987): 将解析命令行参数时发生的错误从直接 `process.exit(1)` 改为抛出 `FatalConfigError`，使错误能被上层代码更优雅地捕获和处理，提升了程序健壮性。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27987)

4.  **修复从家目录启动时的重复 Agent 警告** (#27995): 修复了当用户从 `~` 目录启动 `gemini` 时，因项目级和用户级 Agent 目录路径相同而产生的“重复 Agent 名称”的误报警告。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27995)

5.  **修复 macOS 符号链接路径测试** (#27990): 修复了在 macOS 上，因 `/var` 是 `/private/var` 的符号链接而导致的文本编辑（EditTool）和文件写入（WriteFileTool）相关测试的失败问题。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27990)

6.  **新增终端拖放与剪贴板粘贴** (#27859): 这是一个值得关注的功能性 PR，为 Gemini CLI 增加了原生拖放文件和 `Cmd+V`/`Ctrl+V` 粘贴剪贴板图片的能力，提升了多模态交互体验。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27859)

7.  **修复 MCP 请求头编码** (#27771): 修复了 MCP HTTP 传输中，当配置的 Header 值包含非 ASCII 字符（如 `mąka`）时，服务发现会失败的问题。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27771)

8.  **CI 安全修复：验证工作流来源** (#27753): 修复了一个 CI/CD 安全漏洞，防止恶意 Fork 仓库通过伪造工件来窃取仓库 Secrets，增强了流水线安全性。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27753)

9.  **MCP 资源读取的安全包装** (#27979): 将 `read_mcp_resource` 工具返回的文本内容也使用 `wrapUntrusted()` 进行包装，使其与 `mcp-tool` 行为保持一致，提升了安全性。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27979)

10. **ACP 协议支持报告缓存和思考 token** (#27986): 改进了 ACP 服务器的实现，现可在 `PromptResponse.usage` 中报告缓存的 Token 数和用于推理/思考的 Token 数，便于 ACP 客户端更精确地进行成本估算。
    [查看 PR](https://github.com/google-gemini/gemini-cli/pull/27986)

## 功能需求归类

从近期的 Issues 中，可以归纳出社区对以下几个方向的明确需求：

- **Agent 可靠性与健壮性**：
    - 解决 Agent 执行中的挂起、卡死问题。
    - 优化子代理的自主决策逻辑（何时使用、错误恢复）。
    - 提升子代理在特定环境（如 Wayland）下的兼容性。

- **安全与风险控制**：
    - 增强 Auto Memory 功能的确定性编辑和日志隐私保护。
    - 要求 Agent 在执行潜在破坏性操作（如 Git 强制操作）前主动评估并提醒用户。

- **工具与技能集成**：
    - 期望模型能更智能、主动地利用用户自定义的技能和子代理，而非仅在被指令时使用。
    - 需要 Agent 能动态管理上下文工具数量，避免因工具过多导致的 API 错误。

- **AST 感知能力**：
    - 社区持续关注利用 AST 来提升代码读取、搜索和代码库映射的精确度，这有助于减少无用 Token 消耗和提高代码修改的准确性。相关 Issue #22745 正在跟踪这一方向。

## 开发者关注点

- **Agent 卡死与响应中断**：Agent 在委托任务后长时间无响应是开发者最常抱怨的痛点之一，严重影响了自动化工作流的可靠性和信心。
- **子代理行为异常**：子代理在任务完成、成功/失败报告以及特定环境下的表现不稳定，导致开发者对其自主能力心存疑虑。
- **工具与技能集成不深入**：开发者花费精力配置了自定义技能和子代理，但发现模型不会主动使用它们，感觉配置投入未获得应有回报。
- **安全与日志担忧**：随着 Auto Memory 等自动化功能的加入，开发者开始关注其日志记录和数据处理的安全性，尤其是在处理敏感信息时。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是 2026 年 6 月 18 日的 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 - 2026-06-18

## 今日更新概览

今日发布了 v1.0.64-0 新版本，引入了 `/diagnose` 诊断命令和 MCP 注册表安装功能。社区活跃度较高，昨日发生的服务中断事件仍在发酵，多个相关 Issue 被关闭或持续讨论，同时用户对插件权限控制、MCP 工具集成和模型配置灵活性的诉求十分集中。

## 版本发布

**v1.0.64-0** 已发布，主要更新内容包括：

- **新增 `/diagnose` 命令**：用于分析会话日志，有助于排查问题。
- **新增 MCP 注册表安装功能**：支持浏览和安装 MCP 服务器。
- **`/security-review` 命令正式可用**：已面向所有用户开放，无需 `--experimental` 标志。
- **插件发现 MCP 服务器**：支持通过已安装的插件自动发现 MCP 服务器。
- **MCP 工具支持 CSV 输出**：扩展了 MCP 工具的输出格式。

## 社区热点 Issues

1.  **[#3832] 6月16日服务中断后，所有模型显示为 'Blocked/Disabled'** (已关闭)
    - **影响场景**：大规模服务中断后的恢复问题。用户在中断后无法选择任何模型或启动新会话。
    - **摘要**：报告了 2026年6月16日 17:45-18:15 UTC 的 Copilot 服务中断后，模型选择界面异常，所有模型被错误标记为“阻止/禁用”。
    - **链接**：https://github.com/github/copilot-cli/issues/3832

2.  **[#3831] 工作流中突然出现瞬时 API 错误并无限重试** (已关闭)
    - **影响场景**：正在进行的工作流被中断，影响开发连续性。
    - **摘要**：多个用户报告工作流在执行过程中无征兆地停止，控制台持续打印“Request failed due to a transient API error. Retrying...”，直至会话失效。
    - **链接**：https://github.com/github/copilot-cli/issues/3831

3.  **[#2643] 插件 `preToolUse` 静默重写命令时仍需用户手动确认** (开放)
    - **影响场景**：需要构建自动化、静默工作流的插件开发者。
    - **摘要**：当 `preToolUse` 钩子通过 `updatedInput` 和 `permissionDecision: allow` 重写命令时，CLI 仍会弹出交互式确认对话框，无法实现真正的静默重写。社区有 10 条讨论。
    - **链接**：https://github.com/github/copilot-cli/issues/2643

4.  **[#1973] 功能请求：交互模式下的工具白名单** (开放)
    - **影响场景**：希望在交互模式下提高效率，同时保持安全性的高级用户。
    - **摘要**：当前交互模式对每个工具（包括只读操作）都要求手动确认，而 `/allow-all` 又过于宽泛。用户期望能为安全操作（如 grep, git log）设置白名单。此诉求获得 20 个 👍。
    - **链接**：https://github.com/github/copilot-cli/issues/1973

5.  **[#254] Copilot CLI 反复要求重新登录** (开放)
    - **影响场景**：长期稳定使用 CLI 的用户，尤其影响自动化脚本和工作流。
    - **摘要**：一个持续报告的问题。用户反馈即使已经成功登录并正常使用多日，CLI 仍会突然要求重新登录，且新会话在退出后再次失效。社区有 9 条讨论。
    - **链接**：https://github.com/github/copilot-cli/issues/254

6.  **[#3560] 工具调用后出现 `Duplicate item found` 错误** (开放)
    - **影响场景**：依赖工具调用的复杂工作流，可能中断自动化流程。
    - **摘要**：描述了一个偶发的 `400` 错误。在模型执行工具调用后的下一次交互中，CLI 报错“发现重复ID”，导致后续对话失败，但纯文本对话仍正常工作。
    - **链接**：https://github.com/github/copilot-cli/issues/3560

7.  **[#3355] 功能请求：为 Claude Opus 4.6 配置更大的上下文窗口** (开放)
    - **影响场景**：进行深度、长时间技术会话的用户，频繁遇到上下文压缩（摘要）的问题。
    - **摘要**：用户指出 CLI 当前将 Claude Opus 4.6 的上下文限制在 200K tokens，而模型原生支持 1M tokens。社区认为这是 80% 的性能浪费，导致深度会话中频繁触发自动摘要。有 4 个 👍。
    - **链接**：https://github.com/github/copilot-cli/issues/3355

8.  **[#3812] 子代理无法访问 MCP 工具** (开放)
    - **影响场景**：使用子代理进行复杂任务编排的用户。
    - **摘要**：报告自定义子代理在最近的版本更新后，无法再看到或访问 MCP 工具。顶层代理仍然可以使用。开发者的初步分析指向 MCP 工具的延迟加载机制。
    - **链接**：https://github.com/github/copilot-cli/issues/3812

9.  **[#3074] 功能请求：添加 `/effort` 命令以快速调整推理强度** (开放)
    - **影响场景**：希望根据任务复杂度动态调整模型推理能力以提高效率的用户。
    - **摘要**：当前需要通过多步的 `/model` 命令来切换推理强度，过程繁琐。用户期望一个直接的 `/effort` 命令，以便在不同任务间快速切换“高”、“中”、“低”推理强度。
    - **链接**：https://github.com/github/copilot-cli/issues/3074

10. **[#3830] 功能请求：一键更新所有已安装的插件** (已关闭)
    - **影响场景**：安装了多个插件的用户，插件更新维护繁琐。
    - **摘要**：当前更新插件需要逐一执行，当安装多个插件时，维护成本高。社区建议添加一个单一命令来批量更新所有插件。
    - **链接**：https://github.com/github/copilot-cli/issues/3830

## 重要 PR 进展

今日无合并或更新的 Pull Requests。

## 功能需求归类

根据今日更新的 Issues，可以观察到以下几个被反复提及的功能方向：

- **插件与权限控制**：用户对插件的自动化能力提出了更高要求（如 #2643 的静默重写），同时希望获得更精细的权限控制（如 #1973 的工具白名单），避免“要么全部允许，要么全部手动确认”的二元选择。
- **MCP 工具生态集成**：随着 MCP 支持的推进，生态集成的稳定性成为焦点（如 #3812 的子代理访问）。同时，用户也要求更便捷的发现、安装（今日发布版本已支持）和管理 MCP 服务器。
- **模型与服务可靠性**：昨日的中断事件引发了大量关于服务稳定性和恢复机制的讨论（如 #3832, #3831）。此外，用户对模型配置的灵活性（如 #3355 的上下文窗口）和便捷的操作（如 #3074 的 `/effort` 命令）也有明确需求。
- **生活质量和用户体验**：持续的优化诉求包括改善会话管理（如 #254 的登录问题）、简化操作流程（如 #3830 的批量插件更新）和增强诊断能力（今日发布版本已支持 `/diagnose`）。

## 开发者关注点

- **服务中断的冲击**：6月16日的服务中断对开发者工作流造成了显著影响，导致模型不可用和任务中断。用户对服务稳定性及SLA提出了更高的期望。
- **插件权限的刚需**：插件系统的权限模型（`preToolUse`）无法满足静默自动化场景，这是插件开发者面临的核心痛点。
- **MCP 工具集成不稳定**：子代理无法访问 MCP 工具的问题，表明 MCP 集成在分层代理架构中可能存在缺陷，影响了复杂、自动化工作流的构建。
- **模型配置缺乏灵活性**：对 Claude Opus 上下文窗口限制的抱怨，反映出开发者希望充分利用顶级模型的能力，而不是被平台策略限制。对快速调整推理强度的需求也表明，用户希望在性能和效果之间寻求更高效的平衡。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-18

## 1. 今日更新概览

昨日（2026-06-17）社区共提交 2 个新 Issue，无新版本发布和 Pull Request 合并。两个 Issue 分别涉及会话运行中切换执行模式功能请求和 SSL 证书忽略选项改进，均处于开放状态且暂无评论。社区活跃度较低，未出现大量重复诉求。

## 2. 版本发布

无

## 3. 社区热点 Issues

（共有 2 条 Issue，全部列出）

### #2459 [Feature Request] 支持会话运行中切换执行模式（Agent ↔ Cluster）

- **作者**：[@PresentXoX](https://github.com/PresentXoX)
- **创建/更新**：2026-06-17
- **评论数**：0 | 👍：0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2459
- **摘要**：用户希望能在会话进行中动态切换执行模式（Agent ↔ Cluster），无需中断当前会话。该请求未提供更多细节，暂无维护者回应。

### #2458 [enhancement] Add option to ignore ssl certificate

- **作者**：[@dmorsin](https://github.com/dmorsin)
- **创建/更新**：2026-06-17
- **评论数**：0 | 👍：0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2458
- **摘要**：用户因组织内防病毒软件使用中间人（MiTM）方式注入自身证书，导致 CLI 登录时证书校验失败。请求增加“忽略 SSL 证书”选项以兼容此类环境。暂无维护者回应。

## 4. 重要 PR 进展

无

## 5. 功能需求归类

基于现有 2 个 Issue，可归类出以下功能方向（样本较少，仅作记录）：

| 功能方向 | 代表 Issue | 用户诉求摘要 |
|--------|-----------|------------|
| 会话管理增强 | #2459 | 支持运行中切换 Agent/Cluster 模式 |
| 网络/安全兼容性 | #2458 | 提供忽略 SSL 证书的选项，适配企业安全软件环境 |

目前暂未观察到多个 Issue 指向同一方向的趋势。

## 6. 开发者关注点

- **企业网络环境适配**：用户因防病毒软件/组织安全策略导致 SSL 证书校验失败，请求增加“忽略 SSL 证书”选项（#2458）。该痛点可能影响在企业内网或受管设备上使用 Kimi Code CLI 的用户。
- **执行模式动态切换**：用户希望在会话进行中即时切换 Agent 与 Cluster 模式，而非重新启动会话（#2459）。反映出用户对多模式工作流灵活性的需求，但该请求未附带具体使用场景说明，需进一步观察。

---

*数据来源：https://github.com/MoonshotAI/kimi-cli*
*统计时间：2026-06-18 00:00–2026-06-18 23:59（UTC）*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 2026-06-18 OpenCode 社区动态日报

## 今日更新概览

今天发布了 **v1.17.8**，重点改进了会话时间线加载速度并修复了 MCP schema 验证和 Cloudflare AI Gateway API key 配置两个关键 Bug。社区过去 24 小时共有 **50 个 Issues 和 50 个 PRs 更新**，其中 GPT 模型响应慢（#29079，117 条评论）和 Agent 沙箱隔离（#2242，72 条评论）是讨论最热烈的话题。此外，多个用户反复提出了对 VS Code 扩展、自动模型发现以及会话存储管理的诉求。

---

## 版本发布

### v1.17.8

**Core 改进**
- 会话时间线加载速度大幅提升，避免了闪烁或滚动跳动。

**Bug 修复**
- OpenAI 兼容提供商现在可正确接受此前因校验失败的 MCP 工具 schema（贡献者 @jquense）。
- Cloudflare AI Gateway 现在能正确接收配置的 API key（贡献者 @keefetang）。

---

## 社区热点 Issues（10 条）

1. **#29079 – GPT Models takes too long to respond**
   用户反馈 GPT 5.4 等模型响应时间极不稳定，简单指令有时需等待数分钟。
   👥 117 评论 | 👍 49
   🔗 https://github.com/anomalyco/opencode/issues/29079

2. **#2242 – Is there a way to sandbox the agent?**
   希望限制 Agent 终端命令只能访问当前目录，类似 macOS seatbelt 机制。
   👥 72 评论 | 👍 54
   🔗 https://github.com/anomalyco/opencode/issues/2242

3. **#27589 – TUI fails on Alpine Linux (musl): getcontext symbol not found**
   从 1.14.48 升级到 1.14.50 后 TUI 无法启动，回归问题。
   👥 33 评论 | 👍 12
   🔗 https://github.com/anomalyco/opencode/issues/27589

4. **#11176 – [FEATURE]: Official OpenCode VS Code extension**
   呼声最高的功能需求——希望 OpenCode 成为原生 VS Code 扩展，而非独立 TUI。
   👥 23 评论 | 👍 110
   🔗 https://github.com/anomalyco/opencode/issues/11176

5. **#17994 – [FEATURE]: Support for multi-agent orchestration in isolated workspaces**
   提议内置多编码 Agent 团队模式，在隔离工作区协调子会话。
   👥 21 评论 | 👍 2
   🔗 https://github.com/anomalyco/opencode/issues/17994

6. **#8456 – [FEATURE]: opencode could automatically use different models based on task type**
   希望根据任务类型（如代码生成、调试）自动切换模型。
   👥 7 评论 | 👍 36
   🔗 https://github.com/anomalyco/opencode/issues/8456

7. **#19466 – opencode is using CPU for doing nothing**
   在等待 API 限速重试期间，CPU 占用高达单核 50% (i9-14900)。
   👥 9 评论 | 👍 8
   🔗 https://github.com/anomalyco/opencode/issues/19466

8. **#20902 – bash tool hangs when command spawns background child processes**
   执行 `npm run build &` 等后台命令会导致会话卡死直至超时。
   👥 9 评论 | 👍 9
   🔗 https://github.com/anomalyco/opencode/issues/20902

9. **#24817 – Ctrl+Z closes/suspends OpenCode instead of undoing text input (Linux)**
   Linux 下 Ctrl+Z 触发 SIGTSTP 而非撤销输入，严重影响编辑体验。
   👥 5 评论 | 👍 2
   🔗 https://github.com/anomalyco/opencode/issues/24817

10. **#32444 – GLM-5.2 thinking-effort variants (High/Max) not exposed**
    Z.AI 的 GLM-5.2 支持 High/Max 两种推理级别，但 OpenCode 对含 "glm" 的模型一概返回空变体选择器。
    👥 3 评论 | 👍 8
    🔗 https://github.com/anomalyco/opencode/issues/32444

---

## 重要 PR 进展（10 条）

1. **#32731 – feat: auto-discover models from OpenAI-compatible providers**
   自动调用 `/v1/models` 获取已配置 baseURL 的提供商可用模型，无需手动逐个填写。
   🔗 https://github.com/anomalyco/opencode/pull/32731

2. **#32742 – docs: add opencode-loop to ecosystem**
   将社区插件 `opencode-loop`（提供 Claude Code 风格的自动继续和循环守护）加入官方生态列表。
   🔗 https://github.com/anomalyco/opencode/pull/32742

3. **#32612 – fix: exclude `-pro` models from ChatGPT-account model list**
   修复 ChatGPT OAuth 账号下显示 `gpt-5.5-pro` 但实际调用总是失败的问题。
   🔗 https://github.com/anomalyco/opencode/pull/32612

4. **#27554 – feat: local LAN provider discovery + auto-discover models**
   在 `/connect` 中添加本地局域网发现（mDNS + 扫描），并自动获取模型列表。
   🔗 https://github.com/anomalyco/opencode/pull/27554

5. **#28592 – fix: handle OSC52 clipboard passthrough properly under GNU screen**
   修正 screen 终端下的剪贴板传递（之前只为 tmux 做了适配）。
   🔗 https://github.com/anomalyco/opencode/pull/28592

6. **#32732 – Allow all file attachments**
   放开附件文件类型限制，允许上传任意格式。
   🔗 https://github.com/anomalyco/opencode/pull/32732

7. **#32734 – fix: support OpenRouter model variants**
   解决 OpenRouter 的 `:free`、`:extended` 等后缀变体无法被模型目录识别的问题。
   🔗 https://github.com/anomalyco/opencode/pull/32734

8. **#20491 – feat: add Kiro provider**
   新增 Kiro (AWS) 作为内置提供商（通过捆绑插件）。
   🔗 https://github.com/anomalyco/opencode/pull/20491

9. **#32743 – feat: native per-session goals with /goal**
   引入持久化会话目标系统，支持 `/goal` 命令和自主目标追踪（状态、描述、依赖）。
   🔗 https://github.com/anomalyco/opencode/pull/32743

10. **#28073 – feat: add Microsoft Foundry as a built-in auth provider**
    将 Microsoft Foundry 纳入 `/login` 内置提供商，优化 gpt-5.x 部署的 chat.params 配置。
    🔗 https://github.com/anomalyco/opencode/pull/28073

---

## 功能需求归类

从今日活跃的 Issues 中可以归纳出以下用户反复提及的功能方向：

| 方向 | 代表性 Issue | 社区关注度 |
|------|-------------|-----------|
| **IDE 集成** | #11176（官方 VS Code 扩展） | 最高（110 👍） |
| **模型自动发现与切换** | #8456（按任务类型自动选模型）、#32731（OpenAI 兼容发现）、#32444（GLM-5.2 变体） | 高 |
| **沙箱/权限控制** | #2242（Agent 文件访问限制）、#1852（sudo 中断 UI）、#32729（权限提升危险） | 高 |
| **性能与稳定性** | #29079（GPT 响应慢）、#19466（空闲 CPU 占用）、#20902（bash 后台挂起）、#32746（1.17.8 卡顿） | 高 |
| **会话生命周期管理** | #16101（存储回收、自动归档）、#32630（SQLite 自动清理配置） | 中等 |
| **多 Agent 协作** | #17994（多代理编排） | 中等 |
| **终端兼容性** | #27589（Alpine musl）、#24817（Ctrl+Z on Linux）、#23906（Web TUI logo 显示错误） | 中等 |

---

## 开发者关注点

- **响应延迟波动**：GPT 模型响应时间从数秒到数分钟不等，影响日常使用流畅度（#29079）。部分用户报告在等待 API 限速时 CPU 异常高（#19466）。
- **权限与安全缺失**：Agent 缺乏文件系统沙箱，sudo 命令会导致 UI 卡死（#1852），且有用户发现 Agent 可尝试提升自身权限（#32729）。沙箱隔离呼声很高（#2242，72 条评论）。
- **兼容性痛点**：Alpine Linux (musl) 回归性崩溃、Linux 下 Ctrl+Z 行为异常、GNU screen 下剪贴板失效，暴露出对非主流环境的适配不足。
- **会话数据膨胀**：本地 SQLite 数据库可达 700MB 且缺乏自动清理机制（#32630），用户希望加入 TTL、自动归档或可配置保留策略。
- **自定义模型支持不完整**：GLM-5.2 的 thinking-effort 变体被 blanket exclusion 忽略（#32444），OpenRouter 的变体后缀也需手动解决（#32734），反映出模型枚举逻辑的局限性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为一名专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，生成 2026 年 6 月 18 日的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-06-18

## 今日更新概览

今日 Qwen Code 发布了 **v0.18.3** 正式版，主要修复了 CLI 模块中用户提问被取消后的程序停止问题。社区活跃度保持高位，过去24小时内共有 **49 条 Issue** 和 **50 个 Pull Request** 获得更新，其中围绕 OAuth 免费额度调整、Token 用量统计以及多模型提供商冲突的讨论持续升温。

## 版本发布

项目团队在过去24小时内发布了 **1 个正式版** 及 **2 个预览版**，均为小版本迭代。

- **v0.18.3**: 正式版发布。主要修复了在 CLI 中，当 `ask_user_question` 被用户取消后，程序未能正确停止的问题。（[发布说明](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3)）
- **v0.18.3-preview.0**: 预览版，同样包含上述 CLI 修复。
- **v0.18.2**: 修复了上下文指令过长时的警告问题，并更新了过时的文档、CLI 语法和工具命名。
- **v0.18.1-preview.1**: 预览版，内容与 v0.18.2 相似，侧重文档和语法修复。

## 社区热点 Issues

以下是过去24小时内更新、评论活跃或影响范围较广的10个 Issue：

1.  **OAuth免费额度争议** (#3203)
    用户要求将 OAuth 免费额度从1000次/天降至100次/天，并计划于20日完全关闭免费入口。该 Issue 引发 **151 条**激烈讨论，反映了社区对收费政策变更的强烈关注。（[链接](https://github.com/QwenLM/qwen-code/issues/3203)）

2.  **Token消耗统计功能需求** (#4479)
    用户反馈单次任务消耗了3000万 Token，强烈要求增加每日 Token 用量统计功能，以便追踪成本。目前获 **16 条评论**，社区对此功能需求较高。（[链接](https://github.com/QwenLM/qwen-code/issues/4479)）

3.  **无法添加OpenAI兼容本地模型** (#3384)
    用户尝试使用Qwen Code连接本地VLLM服务时失败，即便按照文档配置 `settings.json` 也无法生效。该问题累计 **15 条评论**，影响了使用本地模型或第三方代理的用户。（[链接](https://github.com/QwenLM/qwen-code/issues/3384)）

4.  **OAuth会话持久化导致认证错误** (#1855)
    用户从 OAuth 切换至 Coding Plan API Key 后，旧会话未清理，导致持续出现 401 认证错误。该问题长期存在（创建于2月），近 **14 条评论**，是认证流程中的典型痛点。（[链接](https://github.com/QwenLM/qwen-code/issues/1855)）

5.  **Coding Plan购买显示“库存不足”** (#3307)
    用户反映 Alibaba Cloud 的 Coding Plan 持续多日处于“Temporarily out of stock”状态，无法购买。此问题已存在两个月，有 **10 条评论**，影响了用户从免费版向付费版的转化。（[链接](https://github.com/QwenLM/qwen-code/issues/3307)）

6.  **API密钥认证后无法使用** (#3914)
    用户配置 API Key 后，客户端无报错，但实际请求失败（`fetch failed`）。该问题涉及 Node.js 26 兼容性，获 **9 条评论**和 **3 个点赞**，是较为广泛的连接故障。（[链接](https://github.com/QwenLM/qwen-code/issues/3914)）

7.  **v0.18.0 新功能“可折叠思考块”无法展开** (#5261)
    升级至 v0.18.2 后，用户反馈只能看到“Thought for 1s”，但无法展开或折叠模型的思考过程。这是一个新版本 UI 交互的退化问题。（[链接](https://github.com/QwenLM/qwen-code/issues/5261)）

8.  **`context.fileName` 配置不生效** (#5267)
    用户尝试通过 `settings.json` 自定义附加文件时，配置未生效。这是最新的配置问题，可能与 `v0.18.3` 版本有关。（[链接](https://github.com/QwenLM/qwen-code/issues/5267)）

9.  **工具调用死循环** (#5234)
    用户反馈使用 `qwen3.7-plus` 模型时，工具调用陷入无限循环，无法正常结束。该问题在 Agent 工作流场景下影响较大。（[链接](https://github.com/QwenLM/qwen-code/issues/5234)）

10. **DeepSeek V4 预设错误** (#5252)
    用户报告 Qwen Code 的内置 DeepSeek V4 预设错误地启用了图像和视频模态。此问题会导致模型调用失败。（[链接](https://github.com/QwenLM/qwen-code/issues/5252)）

## 重要 PR 进展

以下 PR 在过去24小时内进行了更新，展示了项目最新的修复和功能开发动态：

1.  **[修复] 修正上下文文件名设置模式** (#5269)
    更新了 `context.fileName` 的设置模式，使编辑器能够正确接受字符串或字符串数组。这是对 #5267 报告的快速修复。（[链接](https://github.com/QwenLM/qwen-code/pull/5269)）

2.  **[修复] 保持 DeepSeek 预设为纯文本模式** (#5268)
    移除了 DeepSeek V4 预设中错误的图片/视频能力声明。这是对 #5252 的直接修复。（[链接](https://github.com/QwenLM/qwen-code/pull/5268)）

3.  **[功能] 新增QQ机器人渠道适配器** (#5202)
    社区贡献者提交了一个新的渠道适配器，允许将 Qwen Code 接入 QQ Bot，支持 WebSocket 网关、消息实体与事件处理。（[链接](https://github.com/QwenLM/qwen-code/pull/5202)）

4.  **[功能] 自定速循环引擎** (#5182 / #5197)
    实现了一个秒级精度的会话唤醒引擎，并为 `/loop` 命令提供了无需固定时间间隔的“自定速”模式，更像 Claude Code 的工作方式。（[链接](https://github.com/QwenLM/qwen-code/pull/5182)）

5.  **[功能] 恢复中断的对话轮次** (#5030)
    引入了一种无需插入“继续”消息即可恢复中断对话的一流方法，显著改善了会话管理和断点续传体验。（[链接](https://github.com/QwenLM/qwen-code/pull/5030)）

6.  **[修复] 保留轮次中的图片消息** (#5183)
    修复了在对话轮次重建时，图片消息可能丢失的问题，确保了多模态对话的完整性。（[链接](https://github.com/QwenLM/qwen-code/pull/5183)）

7.  **[功能] 使 ACP 权限超时可配置** (#5260)
    为 `qwen serve` 添加了 `--permission-response-timeout-ms` 标志，允许管理员配置等待用户授权响应的超时时间。（[链接](https://github.com/QwenLM/qwen-code/pull/5260)）

8.  **[功能] 可视化桥：为纯文本模型转录图像** (#5126)
    引入了一个可选的“视觉桥”功能：当纯文本模型收到图片时，自动将其发送给多模态模型转述为文本，再交给主力模型处理。（[链接](https://github.com/QwenLM/qwen-code/pull/5126)）

9.  **[修复] 工具调用死循环断路器** (#5242)
    针对 #5234 报告的工具调用死循环问题，提出了一个断路器或熔断机制来防止无限重复调用。（[链接](https://github.com/QwenLM/qwen-code/pull/5242)）

10. **[功能] CLI中渲染LaTeX数学公式** (#3439)
    一个长期开放的 PR，旨在支持在终端 Markdown 输出中渲染 LaTeX 数学公式，对学术类用户是重要特性。（[链接](https://github.com/QwenLM/qwen-code/pull/3439)）

## 功能需求归类

从今日的 Issue 中可以归纳出用户反复提及的几个功能方向：

- **认证与配额管理**：用户对 OAuth 付费策略调整（#3203）、配额上限不透明（#3267）以及切换 API Key 后的认证冲突（#1855）感到困惑，亟需更清晰的费用说明和账户管理机制。
- **Token 用量统计与可视化**：用户对单次任务消耗的 Token 数量感到“震惊”（#4479），要求增加在客户端或仪表盘中统计和显示每日 Token 消耗量的功能。
- **本地/自定义模型支持**：用户持续反馈配置 OpenAI 兼容的本地模型（#3384）或其他第三方提供商时遇到困难，期望改善 `settings.json` 的配置支持和 UI 向导（#4814）。
- **会话与历史管理**：用户需要更强大的会话管理能力，包括通过命令行列出、筛选、删除会话（#4825），以及在恢复崩溃或中断的会话时能有更好的体验（#5030）。
- **新渠道与集成**：社区正积极贡献新的渠道适配器，如 QQ Bot（#5201），表明用户有将 Qwen Code 融入更多样化工作流（如 IM 工具）的需求。
- **CLI 编辑器体验**：Vim 模式用户期望在自动补全菜单中支持 `Ctrl+n/p` 导航（#2561），以及修复在 tmux 下触控板滚动行为异常（#5159）等，说明开发者对 CLI 下的操作效率有较高要求。
- **内存与性能优化**：大型会话或长时间运行的任务（#5180）容易导致内存溢出（OOM），用户希望优化内存管理，特别是在“自动记忆”和构建会话摘要时（#5147）。

## 开发者关注点

总结开发者在反馈中表达的痛点和需求：

- **认证流程的脆弱性**：从 OAuth 切换到 API Key 后的 401 错误，以及免费额度耗尽后模糊的错误提示，构成了主要的用户流失风险。开发者希望在切换认证方式、或接近额度上限时，收到更明确的提示。
- **新版本功能体验不佳**：`v0.18.x` 版本引入的“可折叠思考块”在特定环境下无法展开（#5261），以及新 CLI 交互导致“退出计划模式”卡死（#5210），表明新功能的兼容性测试需要加强。
- **核心模型预设错误**：内置的 DeepSeek V4 模型配置错误（#5252）表明，在为流行模型提供“开箱即用”的预设时，需要进行更严谨的验证，以避免误导用户。
- **对“中断”和“恢复”能力的期望**：无论是由于网络、手动取消还是工具异常导致的执行中断，开发者都期望 Qwen Code 能提供一种优雅、可预期的方式来恢复任务，而不是简单地重试或重新开始。

</details>