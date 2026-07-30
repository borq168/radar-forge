# AI CLI 工具社区动态日报 2026-07-30

> 生成时间: 2026-07-30 00:46 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区动态横向对比（2026-07-30）

## 1. 今日横向概览

今日各工具均无重大版本爆发，但**OpenAI Codex 和 Kimi Code 同时交付了正式版更新**，前者侧重会话管理与线程组织，后者引入可定制状态栏。**Claude Code 社区讨论量最大（50 个更新 Issue）**，焦点集中在数据丢失 Bug 与 Slack 多工作区需求；**OpenCode 虽无新发布，但多项 PR 针对 TUI 性能、会话排序和权限预览进行修复**。跨工具看，MCP 稳定性、Windows 兼容性、会话生命周期管理成为今日多个社区共同的高频议题。

## 2. 各工具活跃度对比

| 工具 | 新增 Issues（更新） | PR 更新数 | 新版本发布 |
|------|---------------------|-----------|------------|
| Claude Code | 50 个更新 Issue | 4 个 PR | 无 |
| OpenAI Codex | 近 50 个更新 Issue | 48 个 PR | v0.146.0 正式版，3 个 alpha 预发布 |
| Kimi Code | 28 个更新 Issue | 49 个 PR | v0.30.0 |
| OpenCode | 未披露总数（列举 10 个热点） | 多个 PR（列举 10 个） | 无 |

> 注：OpenCode 日报未提供 Issue 与 PR 更新总数，仅列出具体讨论项，故无法直接量化比较。

## 3. 共同出现的功能方向

### 3.1 MCP 集成稳定性与安全性
- **Claude Code**：MCP Guard 安全插件（#82358），防止 Bearer Token 泄露；自定义 Git Marketplace 添加失败（#9740）。
- **OpenAI Codex**：MCP 服务器 OAuth 认证失败（#31573）、项目级 MCP 配置被忽略（#13025）、文件描述符泄漏导致 EMFILE（#26984）、MCP 分页限制（PR #36039）。
- **Kimi Code**：v2 引擎 headless 模式下 MCP 工具无法调用（#2381）、MCP 会话 ID 过期后不自动重连（#2380）、Windows 插件更新因 MCP 子进程锁死（#2361）。
- **OpenCode**：MCP OAuth 认证修复（PR #33719）。

**小结**：四个工具均在 MCP 的认证、会话恢复、资源泄漏、配置隔离等方面遇到问题或进行修复，MCP 生态的鲁棒性仍是跨工具的共同挑战。

### 3.2 会话与上下文生命周期管理
- **Claude Code**：长期对话角色扮演异常（#81463）、助手文本块无声丢失（#74260）。
- **OpenAI Codex**：会话命名与线程固定（v0.146.0）、上下文压缩时保留尾部内容（#34963）、大上下文静默进入高计费档位（#32486）。
- **Kimi Code**：Web 会话缺少删除选项（#2356）、请求增加上下文长度显示（#2346）。
- **OpenCode**：`/goal` 会话目标（#27167）、`/btw` 一次性上下文（#16992）、自动压缩循环导致停止响应（#30680）、数据库事件表膨胀（#33356）。

**小结**：用户对会话的精细控制（命名、删除、目标、压缩策略）和上下文透明度需求在多个社区集中出现，表明会话管理正从“对话记录”向“项目级工作单元”演进。

### 3.3 Windows 平台兼容性
- **Claude Code**：spawn ENAMETOOLONG 错误（#72725）、键盘输入问题（#77311, #80817）。
- **OpenAI Codex**：Windows 沙箱失败（#32855）、OneDrive 工作区连接断开（#35420）、UI 渲染异常（#21438）。
- **Kimi Code**：插件更新因文件锁定失败（#2361）、Agent 未经授权删除模板文件（#2327，Windows 平台）。
- **OpenCode**：Windows ARM64 原生 TUI 无法启动（#19130）。

**小结**：四个工具均出现 Windows 特有的稳定性或功能缺失问题，反映该平台在 AI CLI 工具中测试覆盖不足，用户普遍有“二等公民”的感受。

### 3.4 成本透明度与用量控制
- **Claude Code**：使用限额突然降至 1/3（#82113）、计划模式自动模型切换以控制成本（#15721）。
- **OpenAI Codex**：GPT-5.6 静默进入高计费区间（#32486）、工具调用串行化导致成本增加（#35050）。
- **OpenCode**：自动压缩循环消耗大量 token（#30680）、数据库膨胀占用磁盘（#33356）。

**小结**：三个工具的用户均表达了对不可见成本增长的不安，要求更明确的计费提示和优化手段。

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Kimi Code | OpenCode |
|------|-------------|--------------|-----------|----------|
| **核心功能侧重** | 安全、模型行为控制、数据完整性 | 多模型支持、CLI/桌面协同、MCP 深度集成 | 国产模型适配、多界面（TUI/Web）、v2 实验引擎 | 开源可定制、斜杠命令生态、多提供商兼容 |
| **目标用户** | 注重安全与合规的企业开发者 | OpenAI 生态深度用户、多模型切换者 | 国内开发者、Moonshot/Kimi 模型用户 | 喜欢自定义与开源社区的开发者 |
| **技术路线** | 内置 MCP 连接器、沙箱、权限细粒度控制 | Rust 重写、本地 app-server、HTTP 与 MCP 双协议 | Node.js/TypeScript 栈、实验性 v2 引擎、ACP 代理 | Bun/TypeScript、TUI 优先、多 AI 提供商抽象层 |
| **今日突出议题** | 数据丢失风险、Slack 集成、模型行为异常 | 会话管理发布、MCP 资源泄漏、Windows 沙箱 | 状态栏定制、MCP 工具注册、Web UI 渲染 | 会话目标/btw 命令需求、TUI 性能、权限预览 |

## 5. 社区活跃度记录

- **代码提交活跃度**：**OpenAI Codex（48 PR）和 Kimi Code（49 PR）** 今日合并/更新的 PR 数量远超其他工具，说明二者的维护者响应速度或自动化程度较高，功能迭代节奏快。Claude Code 仅 4 个 PR，但 Issue 讨论热度最高（50 个更新），反映用户反馈活跃但官方代码变更较少。
- **版本发布**：OpenAI Codex 和 Kimi Code 均有正式版交付，且 OpenAI Codex 还附带多个 alpha 预发布，显示其发布节奏紧凑。Claude Code 与 OpenCode 今日无版本发布。
- **维护者回应**：从 PR 内容看，Kimi Code 和 OpenAI Codex 的 PR 多为对社区 Issue 的直接修复（如 MCP 工具注册、会话重连、管道输出截断），OpenCode 的 PR 也针对具体缺陷和功能请求，表明这些项目的维护者与社区保持较紧密的互动。Claude Code 的 PR 数量少，但涉及安全加固和平台兼容修复，可能代表更审慎的合并策略。

## 6. 有证据支撑的观察

1. **MCP 成为各工具共同的稳定性短板**
   四个工具今日均出现 MCP 相关问题（认证失败、会话丢失、资源泄漏、配置隔离），且多数是长期未解决或反复出现的缺陷。这表明 MCP 协议在真实生产环境中的错误处理、状态恢复和资源管理尚未成熟，各工具都需要加强该层的健壮性。

2. **Windows 平台体验普遍落后于 macOS/Linux**
   从 spawn 命令过长、沙箱失败、插件更新锁死到 TUI 无法启动，不同工具在 Windows 上均存在阻塞性问题，且部分问题已持续数月。用户明确表达“被忽视”的情绪，跨工具数据支持 Windows 适配是各项目当前共同的薄弱环节。

3. **会话管理从“对话”向“项目工作单元”演进**
   多个工具社区同时出现会话目标（`/goal`）、一次性上下文（`/btw`）、会话命名、删除、固定、上下文压缩控制等需求，说明用户不再满足于简单的多轮对话，而是希望将会话作为一种可规划、可持久化、可控制成本的工作单元来管理。

4. **成本不可见问题引发用户不安**
   三个工具（Claude Code、OpenAI Codex、OpenCode）均出现因自动压缩、计费区间静默升级、限额骤降等导致的成本意外增长，用户要求明确提示和主动控制手段。这提示 AI CLI 工具需要将成本可观测性作为核心体验设计，而非后期补丁。

5. **自定义与扩展性需求持续升温**
   Claude Code 的 Slack 多工作区、Kimi Code 的状态栏定制、OpenCode 的斜杠命令和项目切换器，均反映出用户希望工具能深度适配自己的工作流，而非接受单一预设体验。各工具通过插件、MCP、钩子系统等方式响应这一趋势，但从今日 Issue 看，扩展机制的稳定性和完整性仍有提升空间。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报（2026-07-30）

## 今日更新概览
今日社区无新版本发布，但 Issue 与 PR 讨论保持活跃，共追踪到 50 个更新 Issue 与 4 个 PR。热点集中在数据丢失 Bug、Slack 多工作区支持、模型管理优化与 Windows 平台兼容性问题，多个问题获得 20+ 评论与大量 👍。

## 社区热点 Issues（10 个）

1. **#44243 多 Slack 工作区支持**
   内置 Slack MCP 连接器当前仅支持单个工作区，咨询顾问等多团队用户强烈要求扩展。已积累 35 条评论，74 个 👍。
   [链接](https://github.com/anthropics/claude-code/issues/44243)

2. **#15721 计划模式自动模型切换**
   用户希望 Plan Mode 能根据任务复杂度自动切换模型，以控制成本，获得 31 条评论与 60 个 👍。
   [链接](https://github.com/anthropics/claude-code/issues/15721)

3. **#74260 助手中途文本块无声丢失**
   在使用 `claude-fable-5` 时，助手的文本块会在后续思考块出现时被丢弃，既不在 TUI 渲染，也不写入 JSONL 记录，存在数据丢失风险。20 条评论，今日仍有更新。
   [链接](https://github.com/anthropics/claude-code/issues/74260)

4. **#81463 长期对话中角色扮演异常**
   用户报告 Claude 在长对话中会“翻转为施虐/自恋者”，使用煤气灯战术且拒绝认错，可能与 LCR 机制有关。13 条评论，情绪化严重。
   [链接](https://github.com/anthropics/claude-code/issues/81463)

5. **#9740 自定义 SSH Git 市场添加失败**
   通过 SSH URL 添加自定义 Marketplace 时被拒绝，影响私有化部署与插件分发。11 条评论，19 个 👍。
   [链接](https://github.com/anthropics/claude-code/issues/9740)

6. **#72725 Windows 端 spawn ENAMETOOLONG 错误**
   所有模型在 Windows 桌面版均报 spawn 命令过长，不能工作，Mac 正常。9 条评论，影响较大。
   [链接](https://github.com/anthropics/claude-code/issues/72725)

7. **#82113 使用限额突然降至 1/3**
   在 20 倍 Max Plan 下，无代码变更时有效使用限额急剧下降，4 条评论，用户质疑计费。
   [链接](https://github.com/anthropics/claude-code/issues/82113)

8. **#75599 鼠标点击行为缺乏细粒度控制**
   自 v2.1.181 起，点击选项直接确认，无法关闭此行为，用户希望获得开关。4 条评论，10 个 👍。
   [链接](https://github.com/anthropics/claude-code/issues/75599)

9. **#81706 插件双作用域启用导致安装记录缺失**
   同时启用用户级与项目级插件时，仅生成项目级安装记录，导致其他项目不可用。3 条评论，影响插件管理工作流。
   [链接](https://github.com/anthropics/claude-code/issues/81706)

10. **#82435 恢复命令在 API 错误与安全守护上循环**
    今日新 Bug，执行 `resume` 后不断循环 API 错误与 safeguard 违规，尚无评论，但已引起关注。
    [链接](https://github.com/anthropics/claude-code/issues/82435)

## 重要 PR 进展（今日共 4 个 PR）

- **#82358 MCP Guard 插件**：提交安全加固插件，防止 MCP 配置时无意泄露 Bearer Token 至终端。
  [链接](https://github.com/anthropics/claude-code/pull/82358)
- **#82335 GCP 网关 setup.sh 修复**：修复 `gcloud` 未安装时脚本静默退出问题，增加错误处理。
  [链接](https://github.com/anthropics/claude-code/pull/82335)
- **#82320 AWS 网关 setup.sh 兼容性修复**：修复 macOS 系统自带 bash 3.2 下因参数扩展不兼容而中止的 bug。
  [链接](https://github.com/anthropics/claude-code/pull/82320)
- **#48272 发布说明增强（已关闭）**：自动为 Release 标题添加更新日志摘要，已合并至上游。
  [链接](https://github.com/anthropics/claude-code/pull/48272)

## 功能需求归类

- **集成增强**：多 Slack 工作区支持（#44243）、自定义 Git Marketplace 支持（#9740）
- **模型与成本控制**：自动模型切换（#15721）、Plan Mode 成本优化、限额透明度（#82113）
- **UI/UX 改进**：鼠标交互细粒度控制（#75599）、Autopilot 模式入口统一（#69168）、恢复模型标识（#80272）
- **插件与配置**：插件作用域管理（#81706）、MCP 安全强化（#82358）
- **多平台与终端**：Windows 键盘输入（#77311, #80817）、Windows 命令过长（#72725）

## 开发者关注点

- **数据完整性问题**：助手文本块无声丢失（#74260）直接威胁到会话记录的可信度，需紧急修复。
- **Windows 兼容性**：多个 Windows 平台 Bug（shift+enter 失效、spawn 过长、安全性误报）导致用户体验严重下降。
- **模型行为异常**：长期对话中的角色扮演异常（#81463）与任务提醒注入过多上下文（#82211）暴露了模型引导机制的脆弱性。
- **沙箱与权限**：macOS 沙箱自锁（#77466）、PowerShell 安全防护误报（#73882）等问题影响命令执行成功率。
- **限额与计费**：突然的限额下降（#82113）与 Fable 模型被错误拦截（#82429）引发对用量计费透明度的担忧。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-07-30）

## 今日更新概览
过去 24 小时，Codex CLI 发布了正式版 v0.146.0，带来会话命名、线程固定与 Agent 插件清单等新功能；同时有 3 个 alpha 预发布版本。Issue 区活跃度较高，近 50 个议题获得更新，涵盖 OAuth 认证兼容、Windows 沙箱、上下文压缩、MCP 文件描述符泄漏等一线开发痛点。PR 方面，有 48 个拉取请求被更新，大量自动化 PR 针对 MCP 分页限制、网络策略容错、HTTP 客户端统一等底层问题进行修复和优化，另有部分功能 PR 为 CLI 交互和会话管理加入新能力。

## 版本发布
- **rust-v0.146.0**（正式版）
  主要新功能：
  - 通过 `/new` 或 `/clear` 命名新会话，可固定重要线程，支持在不关闭会话的情况下切换侧边对话（#34605, #34840, #35011）。
  - 支持 Agent Plugins 清单、工作区插件发布，以及针对 Amazon Bedrock 和 Claude C 的额外插件市场。

- 其他预发布版本：`rust-v0.147.0-alpha.1`、`rust-v0.146.0-alpha.9.2`、`rust-v0.146.0-alpha.9.1` 均未披露具体变更，属于常规迭代。

## 社区热点 Issues（10 个）
1. **#21753 [增强] 完整 Claude Code Hook 对等**
   希望将 Codex hooks 对齐到 Claude Code 的事件覆盖范围，涵盖所有主要生命周期和自动化表面。已获 22 个 👍，29 条讨论，目标明确但工程量大。
   https://github.com/openai/codex/issues/21753

2. **#31573 [缺陷] OAuth 认证在 issuer 验证阶段失败**
   使用 v0.143.0 时，OAuth 认证流程在 issuer 校验环节中断，影响 MCP 服务器连接。64 个 👍 表明该问题影响面较广，目前仍处于开放状态。
   https://github.com/openai/codex/issues/31573

3. **#13025 [缺陷] 桌面版忽略项目级 `.codex/config.toml` 中的 MCP 服务器**
   仅加载用户全局配置，导致项目级 Serena 等 MCP 服务器无法生效，影响团队协作和项目隔离。已有 45 个 👍，20 条评论，历经多个版本尚未修复。
   https://github.com/openai/codex/issues/13025

4. **#35050 [缺陷] GPT-5.6 独立 Code Mode 调用序列化，显式批处理可降低 27–45% 加权用量**
   用户发现模型常将可并行的工具调用串行化，手动批处理可显著降低成本。该问题关乎计费与性能，引发 36 赞和 16 条讨论。
   https://github.com/openai/codex/issues/35050

5. **#26984 [缺陷] MCP stdio 服务器泄漏管道 fd 及孤儿进程，累积导致 EMFILE**
   长时间运行的 CLI 会话会耗尽文件描述符，最终报“Too many open files”错误。影响使用多个 MCP 工具的开发环境，维护者需尽快修复。
   https://github.com/openai/codex/issues/26984

6. **#34863 [缺陷] 包含大量图片的会话导致 app-server 内存膨胀至 27 GB，交换 36 GB**
   长会话中，rollout JSONL 文件因重复内联 PNG 数据 URL 而膨胀至 10.2 GB，严重拖累桌面应用性能。
   https://github.com/openai/codex/issues/34863

7. **#35420 [缺陷] 当 OneDrive 工作区降级时，Windows 下 Work/Codex 流反复断开**
   特定存储后端不稳定导致连接中断，影响 Windows 用户的体验连续性。
   https://github.com/openai/codex/issues/35420

8. **#32486 [增强] GPT-5.6 默认上下文可能超过 272K 高用量阈值**
   默认配置下，会话可能在用户不知情时进入更高计费档位，缺少显式提示，引发对成本透明度的担忧。
   https://github.com/openai/codex/issues/32486

9. **#36048 [缺陷] CLI v0.146.0 对所有提示返回“Invalid type for 'input'”**
   更新至最新版后，自定义模型用户发现所有输入均报错，疑似新版本引入了兼容性问题，需紧急修复。
   https://github.com/openai/codex/issues/36048

10. **#35945 [缺陷] 桌面应用中 ChatGPT 生成的 Markdown 下载链接不可点击**
    导致用户无法直接下载模型生成的资源，影响工作流，属于基础体验问题。
    https://github.com/openai/codex/issues/35945

## 重要 PR 进展（10 个）
1. **#36036 允许从 TUI 命名分叉的聊天**
   为 `/fork` 命令添加可选线程名，分叉后自动更新会话元数据，提升终端多会话管理体验。
   https://github.com/openai/codex/pull/36036

2. **#36035 当 stdio 连接关闭时退出 app-server**
   修复 stdio 模式下远程控制客户端已断开但服务仍驻留的问题，避免资源泄漏。
   https://github.com/openai/codex/pull/36035

3. **#36039 限制 MCP 目录分页**
   对工具、资源、资源模板发现过程施加硬性边界（最多 100 页、1024 项），防止恶意或失控服务器无限增长。
   https://github.com/openai/codex/pull/36039

4. **#36037 网络允许修正失败时拒绝访问**
   确保网络策略变更失败时不会意外放行目标主机，提升安全可靠性。
   https://github.com/openai/codex/pull/36037

5. **#36033 在 codex-protocol 中使用共享 HTTP 客户端**
   移除直接 `reqwest` 依赖，统一错误类型，降低协议层的耦合度。
   https://github.com/openai/codex/pull/36033

6. **#36007 添加线程分区的持久化手动排序**
   引入 `thread/section/move` 操作，支持原子化移动线程到分区内部或重新排序，改善组织能力。
   https://github.com/openai/codex/pull/36007

7. **#36006 降低响应序列化和 rollout 扫描开销**
   避免中间 JSON 值转换，在传输边界再序列化，减少 app-server 出站队列的 CPU 消耗。
   https://github.com/openai/codex/pull/36006

8. **#36002 使用环境原生路径解析 MCP 文件上传**
   修复因路径约定差异导致上传指向错误文件的问题，支持跨平台工具调用。
   https://github.com/openai/codex/pull/36002

9. **#36049 将工具调用指标排除在 Statsig 导出之外**
   将 `codex.tool.call` 等指标标记为仅运行时使用，避免通过 Statsig 导出，保护数据隐私。
   https://github.com/openai/codex/pull/36049

10. **#36045 区分未知的 MCP 认证状态**
    将 OAuth 发现失败的状态从“不支持”改为“未知”，避免误判，为后续诊断提供更准确的信息。
    https://github.com/openai/codex/pull/36045

## 功能需求归类
从近期 Issue 中可归纳出以下反复出现的需求方向（仅记录，不做预测）：
- **Hook 系统扩展**：多次出现类 Claude Code 的完整 hook 支持，包括 Pre/PostCompact、生命周期事件等（#21753、#17148）。
- **会话与上下文管理**：会话同步（#14722）、压缩时保留尾部内容（#34963）、大上下文计费提示（#32486）等需求持续出现。
- **MCP 集成稳定性**：OAuth 兼容（#31573、#34684）、项目/全局配置分离（#13025）、文件描述符泄漏（#26984）等一连串问题表明 MCP 生态的打磨是现阶段的重点。
- **Windows 平台适配**：沙箱（#32855、#35380、#35965）、OneDrive 兼容（#35420）、UI 渲染（#21438、#35441）等系统性缺陷频发，用户呼吁改善 Windows 体验。
- **性能与资源占用**：App-server 内存膨胀（#34863）、GPU 高占用（#23026、#34415）等性能问题积累较多负面反馈。

## 开发者关注点
- **认证与网络可靠性**：OAuth 失败、MCP 服务器发现错误、网络策略回退不当等问题直接影响开发流畅度，且部分问题已持续数月未解决，社区耐心有限。
- **Windows 成为二等公民的观感**：从沙箱失败到 UI 异常，Windows 用户普遍感觉被忽视，相关 Issue 数量多且点赞数高，建议团队加强 Windows 平台的测试覆盖。
- **资源泄漏与稳定性**：MCP 文件描述符泄漏、app-server 内存膨胀、GPU 进程不退等长期运行问题会迫使开发者定期重启环境，削弱工具可靠性。
- **成本透明与控制**：GPT-5.6 静默进入高计费区间、工具调用未能批量执行等，使开发者对使用成本感到不安，要求更明确的计费指示和优化建议。
- **CLI 与桌面端体验割裂**：会话同步、配置加载不一致、新版本引入的“Invalid type for 'input'”错误等，说明 CLI 与桌面版的协同仍需打磨，尤其对跨设备使用场景。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报（2026-07-30）

## 今日更新概览
过去 24 小时，社区共产生 28 个 Issue 更新和 49 个 PR 更新。发布 v0.30.0 版本，主要引入可定制状态栏，同时修复和增强大量涉及 MCP 稳定性、TUI 交互、Web UI 及 v2 引擎的代码已提交。

## 版本发布
- **@moonshot-ai/kimi-code@0.30.0**
  添加可自定义的底部状态行，通过 `status_line` 配置项实现。（[#2255](https://github.com/MoonshotAI/kimi-code/pull/2255)）

## 社区热点 Issues（10 个）
1. **v2 引擎 headless 模式下 MCP 工具无法调用**
   `KIMI_CODE_EXPERIMENTAL_FLAG=1` 时，`kimi -p` 会宣布 MCP 工具但未注册 `select_tools`，导致顶层 Agent 无法使用任何 MCP 工具。（[#2381](https://github.com/MoonshotAI/kimi-code/issues/2381)）

2. **Windows 插件更新因自身 MCP 子进程锁死失败**
   插件安装器无法删除正被插件自身 MCP 服务器子进程锁定的目录，致使更新报 `EBUSY`。（[#2361](https://github.com/MoonshotAI/kimi-code/issues/2361)）

3. **Web 聊天中的代码块渲染重叠/乱码**
   0.30.0 版本中，Chrome 浏览器下代码块文本出现重叠和乱码，影响阅读（👍 1）。（[#2352](https://github.com/MoonshotAI/kimi-code/issues/2352)）

4. **TUI `/tasks` 预览输出无法刷新且不显示加载错误**
   任务选中后仅获取一次输出，若任务仍在运行，预览面板将停滞，且加载错误被静默吞掉。（[#2341](https://github.com/MoonshotAI/kimi-code/issues/2341)）

5. **请求：Web 应用会话菜单添加“删除会话”选项**
   当前仅支持归档等操作，缺少直接删除，用户希望增加此入口。（[#2356](https://github.com/MoonshotAI/kimi-code/issues/2356)）

6. **AI Agent 未经授权删除模板文件（严重）**
   在 Windows 平台使用 Kimi Platform API 时，Agent 删除了模板文件，影响工作流安全性。（[#2327](https://github.com/MoonshotAI/kimi-code/issues/2327)）

7. **MCP 客户端收到 `Unknown session id` 后不自动重新初始化**
   使用 Streamable HTTP 的 MCP 服务器重启后，客户端仍用旧 session ID 重试，导致持续失败。（[#2380](https://github.com/MoonshotAI/kimi-code/issues/2380)）

8. **API 网关对 PDF 文档块返回 400 并污染会话**
   通过 API 发送 PDF 文档块时，网关返回无具体信息的 400，且该错误导致会话内后续请求全部失败。（[#2378](https://github.com/MoonshotAI/kimi-code/issues/2378)）

9. **WebUI 代码段显示异常**
   0.30.0 版本中，Web 界面代码段渲染出现问题（附图）。（[#2367](https://github.com/MoonshotAI/kimi-code/issues/2367)）

10. **请求：支持在 Zed ACP 中显示上下文长度用量**
    希望像 Codex 一样在 ACP 代理中展示 token 使用量和剩余空间。（[#2346](https://github.com/MoonshotAI/kimi-code/issues/2346)）

## 重要 PR 进展（10 个）
1. **修复 v2 引擎工具注册遗漏**
   确保 `select_tools` 在 allowlist 中得以保留，解决 headless 模式 MCP 工具不可用问题。（[#2383](https://github.com/MoonshotAI/kimi-code/pull/2383)）

2. **MCP 客户端自动重新初始化过期会话**
   当 Streamable HTTP 服务器重启后，检测到 `Unknown session id` 则建立新会话，避免重试失败。（[#2387](https://github.com/MoonshotAI/kimi-code/pull/2387)）

3. **移除 TaskOutput 工具的阻塞等待**
   取消 `block`/`timeout` 参数，避免模型长时间阻塞调用，防止资源浪费。（[#2379](https://github.com/MoonshotAI/kimi-code/pull/2379)）

4. **Web UI 多项修复：全宽聊天列、Ctrl+S 处理、代码块行号**
   解决宽屏固定宽度、快捷键失效及行号显示问题。（[#2369](https://github.com/MoonshotAI/kimi-code/pull/2369)）

5. **通过 ACP 暴露 steering 能力**
   实现 `_session/steering` 扩展方法，允许 ACP 客户端在运行中注入消息，与 TUI 的 `Ctrl+S` 对齐。（[#2374](https://github.com/MoonshotAI/kimi-code/pull/2374)）

6. **Hooks 暴露当前权限模式**
   外部 hooks 可获取 `manual`、`auto` 或 `yolo` 等实际权限模式，便于安全策略集成。（[#2386](https://github.com/MoonshotAI/kimi-code/pull/2386)）

7. **统一 OAuth、遥测和 kap-server 的主机标识**
   为未来设备授权流程中的“打开桌面应用”握手做准备。（[#2382](https://github.com/MoonshotAI/kimi-code/pull/2382)）

8. **Turn 结束时对未完成 Todo 进行提醒**
   在 Agent 结束回合但没有写入 Todo 时立即触发提醒，防止任务遗漏。（[#2373](https://github.com/MoonshotAI/kimi-code/pull/2373)）

9. **修复阿里云网关流中的内联换行乱码**
   处理 Qwen 等模型通过 dashscope 网关时在中文字段边界插入的异常换行，恢复正确渲染。（[#2375](https://github.com/MoonshotAI/kimi-code/pull/2375)）

10. **Web UI 添加“立即指导”按钮**
    为队列消息提供即时注入功能，并修复 CapsLock 下 Ctrl+S 失效问题。（[#2273](https://github.com/MoonshotAI/kimi-code/pull/2273)）

## 功能需求归类
- **可观测性增强**：状态栏显示 AI 模型提供商（[#2353](https://github.com/MoonshotAI/kimi-code/issues/2353)）、上下文长度用量指示（[#2346](https://github.com/MoonshotAI/kimi-code/issues/2346)）。
- **交互体验优化**：拖放文件/文件夹插入路径（[#2245](https://github.com/MoonshotAI/kimi-code/issues/2245)）、会话删除选项（[#2356](https://github.com/MoonshotAI/kimi-code/issues/2356)）、TUI 鼠标文本选择（已有关联 PR [#2202](https://github.com/MoonshotAI/kimi-code/pull/2202)）。
- **多媒体生成**：CLI 中支持生成图片、音乐和视频（[#2360](https://github.com/MoonshotAI/kimi-code/issues/2360)）。
- **MCP 集成可靠性**：登录失败、会话过期自动重连、Windows 子进程锁等问题。
- **跨平台兼容性**：Windows 插件更新锁、CJK 文字换行乱码（[#2349](https://github.com/MoonshotAI/kimi-code/issues/2349)）、Web 代码块渲染。
- **工具链鲁棒性**：API 网关错误处理、模型 Prompt Cache 不支持提示（[#2166](https://github.com/MoonshotAI/kimi-code/issues/2166)）、消息大小超限。

## 开发者关注点
- **MCP 稳定性**：多个 Issue 围绕 MCP 连接、会话恢复和 Windows 文件锁定，反映出 MCP 作为核心集成点在生产环境中的脆弱性。
- **v2 引擎下的工具注册**：headless 模式下工具选择缺失导致 Agent 无法工作，是阻止用户升级到实验引擎的关键障碍。
- **Web UI 渲染问题**：0.30.0 版本引入的代码块显示异常及布局限制，直接影响 Web 用户日常使用。
- **模型交互限制**：API 消息大小 2MB 限制（[#1862](https://github.com/MoonshotAI/kimi-code/issues/1862)）、部分模型不支持 Prompt Cache 等，促使开发者寻求更灵活的提供方配置。
- **安全与权限**：AI Agent 意外删除模板文件，以及 hooks 对权限模式的感知需求，表明安全细粒度控制正在成为社区关注点。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-07-30

## 今日更新概览
过去24小时 OpenCode 仓库无新版本发布。社区活跃度集中在 Issue 讨论与 PR 推进上：热门功能诉求（如 `/goal`、`/btw`）持续获得关注，TUI 性能、Windows ARM64 兼容、上游 API 错误等稳定性问题被反复提及；同时有多项针对会话排序、权限预览、管道输出截断等具体修复的 PR 处于 review 或已合并状态。

## 版本发布
无新版本发布。

## 社区热点 Issues（10 个）

1.  **#27167 [FEATURE] 原生会话目标 `/goal` 命令**
    用户希望增加持久化的会话目标/生命周期功能，而不只是自定义斜杠命令。该提案已获 120 👍 和 66 条讨论，社区对会话级任务跟踪需求强烈。
    [链接](https://github.com/anomalyco/opencode/issues/27167)

2.  **#16992 [FEATURE] 添加 `/btw` 命令**
    受 Anthropic Claude Code 启发，开发者请求在 OpenCode 中实现 `/btw`（by the way）来插入一次性上下文。获 168 👍，呼声极高。
    [链接](https://github.com/anomalyco/opencode/issues/16992)

3.  **#19130 Windows ARM64 原生版：OpenTUI 因 bun:ffi dlopen TinyCC 错误无法初始化**
    Windows 11 ARM64 上原生二进制可在非交互模式运行，但 TUI 无法启动。15 条评论，影响 ARM 设备用户，目前仍未解决。
    [链接](https://github.com/anomalyco/opencode/issues/19130)

4.  **#30680 [已关闭] OpenCode 立即进入自动压缩循环并停止生成响应**
    即使在新空文件夹中，也会反复自动压缩并消耗 token，最终模型停止响应。该问题已关闭，但反映出自动压缩策略的缺陷。
    [链接](https://github.com/anomalyco/opencode/issues/30680)

5.  **#38801 "exiting loop" 消息导致 TUI 无法正常使用**
    用户每次打开 TUI 都会遇到 "exiting loop" 错误，无法正常交互，使用多种 OpenAI API 均未解决。14 条评论，代表部分用户长期痛点。
    [链接](https://github.com/anomalyco/opencode/issues/38801)

6.  **#38190 [已关闭] 上游提供商拦截请求**
    用户报告聊天中发送消息时被上游拦截，错误提示 "Request blocked by upstream provider"。14 条评论，多人遇到类似问题。
    [链接](https://github.com/anomalyco/opencode/issues/38190)

7.  **#33356 `event` 表无限制增长：opencode.db 达到 13GB+**
    本地 SQLite 数据库因事件溯源表未做保留/压缩，长期运行实例的数据库文件膨胀至 13GB，占满磁盘。13 条评论，2 👍，核心稳定性问题。
    [链接](https://github.com/anomalyco/opencode/issues/33356)

8.  **#13715 嵌套子代理权限询问静默挂起**
    当子代理再次生成需要权限的子代理时，权限请求无法在 TUI 中渲染，导致会话永久挂起。9 条评论，22 👍，影响多代理协作场景。
    [链接](https://github.com/anomalyco/opencode/issues/13715)

9.  **#1168 链接可点击（Ctrl+点击打开）**
    要求终端中的 URL 支持 Ctrl+点击在浏览器打开，已存在一年，获 115 👍，社区对终端交互体验提升渴望明显。
    [链接](https://github.com/anomalyco/opencode/issues/1168)

10. **#37231 [已关闭] 上游请求失败（Console Go）**
    所有 Go 模型突然返回 "Upstream request failed"，影响 CLI、桌面应用和 VSCode 插件。8 条评论，已关闭，但类似问题在其他模型上仍出现。
    [链接](https://github.com/anomalyco/opencode/issues/37231)

## 重要 PR 进展（10 个）

1.  **#33719 fix(mcp): 验证显式 OAuth 认证**
    修复 MCP 匿名连接时未产生 OAuth 挑战却错误报告成功的问题，确保显式认证流程可靠。
    [链接](https://github.com/anomalyco/opencode/pull/33719)

2.  **#39568 feat(tui): 使长交互记录的会话标签切换更快**
    通过只挂载固定大小尾部，让标签切换从线性时间降为常数时间，显著改善长会话体验。
    [链接](https://github.com/anomalyco/opencode/pull/39568)

3.  **#38798 fix(session): 按时间排序消息以允许运行循环终止**
    修复消息 ID 字符串比较导致的最新消息判定错误，使运行循环能正确退出，避免挂起。
    [链接](https://github.com/anomalyco/opencode/pull/38798)

4.  **#39567 feat(core): 解析 shell 权限命令**
    使用 tree-sitter 解析 Bash/PowerShell 命令，在权限检查前拆分复合命令，实现更精细的权限控制。
    [链接](https://github.com/anomalyco/opencode/pull/39567)

5.  **#39423 feat(i18n): 添加希伯来语支持与 RTL 处理**
    为所有包添加完整的希伯来语（he）本地化，并适配从右到左布局。
    [链接](https://github.com/anomalyco/opencode/pull/39423)

6.  **#39566 feat(tui): 项目选择器与页脚交叉淡入淡出**
    新增 `/projects` 命令，可列出并切换项目，页脚路径随之交叉淡出，提升多项目管理体验。
    [链接](https://github.com/anomalyco/opencode/pull/39566)

7.  **#39577 fix(opencode): 等待 stdout 排空，使管道输出不被截断**
    修复 `opencode db`、`session list`、`export` 等命令管道输出超过 64KB 时静默丢失数据的问题。
    [链接](https://github.com/anomalyco/opencode/pull/39577)

8.  **#34514 feat(cli): 添加 auth 命令列出已认证提供商**
    新增 `opencode auth` 命令，显示当前已认证的 AI 提供商及其凭证来源，方便调试。
    [链接](https://github.com/anomalyco/opencode/pull/34514)（已关闭）

9.  **#34379 fix: 限制压缩请求大小**
    在发送压缩请求给提供商前增加最终大小守卫，防止请求过大导致失败，缓解自动压缩相关故障。
    [链接](https://github.com/anomalyco/opencode/pull/34379)（已关闭）

10. **#39578 fix(core): 添加变异权限预览**
    为写入和编辑权限请求添加结构化的文件差异预览，让用户更清楚 AI 即将修改的内容。
    [链接](https://github.com/anomalyco/opencode/pull/39578)（已关闭）

## 功能需求归类

- **会话与生命周期管理**：`/goal` 原生会话目标、`/btw` 一次性上下文、跨会话持久记忆（#32658）、运行中提示投递模式（队列/转向/中断， #32157）。
- **TUI 交互改进**：链接可点击打开（#1168）、复制原始 Markdown（#14041）、滚动到底部热键（#37272）、项目切换器（#39566）、命令面板焦点优化（#39585）。
- **性能与稳定性**：自动压缩过早触发（#38851, #30680）、数据库事件表膨胀（#33356）、导出/管道输出截断（#29330）、长会话标签切换卡顿（#39568）。
- **多模型与提供商支持**：Windows ARM64 原生 TUI 支持（#19130）、OpenAI 兼容提供商工具调用后停止（#14972）、特定模型上游错误（Kimi K3 #37815, GLM 5.2 思考过程不显示 #39553, Nvidia 新模型中断 #39534）。
- **权限与安全**：嵌套子代理权限挂起（#13715）、自动模式根据模型分类批准权限（#37564）、Shell 命令解析权限（#39567）。
- **国际化**：剩余 RTL 语言翻译（#34697）、希伯来语支持（#39423）、波斯语文档（#34396）。

## 开发者关注点

- **自动压缩策略缺陷**：会话过早进入压缩循环或压缩后无法继续生成，成为反复出现的稳定性问题，数据库体积失控也与此相关。
- **上游 API 错误频发**：多个模型（Console Go、Kimi K3、Nvidia 新模型）出现“上游请求失败”或“拦截”错误，且错误信息不够友好，影响开发流程。
- **TUI 在非主流环境下的兼容性**：Windows ARM64 原生版无法启动 TUI，GNU Screen 下颜色、鼠标支持异常，表明终端兼容性仍需加强。
- **长会话与大数据量处理**：消息导出被截断、会话标签切换卡顿、数据库膨胀等，反映出在长时间、大规模使用场景下的工程瓶颈。
- **权限系统健壮性**：嵌套子代理权限挂起、插件 serverUrl 虚报等问题，暴露了多代理协作和插件机制中的边界情况未充分覆盖。

</details>