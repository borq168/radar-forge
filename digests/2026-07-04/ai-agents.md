# OpenClaw 生态日报 2026-07-04

> Issues: 232 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-04 00:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-07-04)

## 1. 今日活动概览
过去24小时内，OpenClaw 社区保持高度活跃，共更新 232 条 Issues（新开/活跃 146 条，关闭 86 条）和 500 条 PR（待合并 455 条，已合并/关闭 45 条）。今日无新版本发布，社区讨论与代码提交主要集中在消息路由可靠性、上下文压缩超时机制、多 Agent 协作架构以及底层存储向 SQLite 迁移等核心模块。观察发现，消息交付丢失与长上下文处理失败是当前用户反馈最密集的痛点。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日已合并/关闭 45 个 PR，主要包含针对 Web UI 在非安全 HTTP 上下文下剪贴板 API 失效的修复（[#98764](https://github.com/openclaw/openclaw/pull/98764), [#98780](https://github.com/openclaw/openclaw/pull/98780), [#99630](https://github.com/openclaw/openclaw/pull/99630)）以及图像数据 URL 格式化的代码重构清理（[#99715](https://github.com/openclaw/openclaw/pull/99715)）。
同时，多项重要重构与功能 PR 正在活跃推进中：
- **底层存储重构**：[#98236](https://github.com/openclaw/openclaw/pull/98236) 提议将 session 和 transcript 存储全面翻转为 SQLite，以替代现有的 JSON/JSONL 文件，目前处于等待作者更新状态。
- **发布流程优化**：[#99352](https://github.com/openclaw/openclaw/pull/99352) 引入每月 npm `extended-stable` 发布标签，以支持更长周期的稳定版维护。
- **安全与权限**：[#99530](https://github.com/openclaw/openclaw/pull/99530) 要求对 OpenClaw 生命周期命令（如 gateway/daemon 变更）增加显式审批机制，防止越权执行。
- **模型兼容性**：[#99643](https://github.com/openclaw/openclaw/pull/99643) 修复了 OpenCode Go 中 DeepSeek V4 思考层级元数据暴露不完整的问题。

## 4. 社区热点
- **工具调用间文本泄露到消息通道** ([#25592](https://github.com/openclaw/openclaw/issues/25592), 33条评论)：当 Agent 在工具调用之间产生文本（如错误处理、确认或旁白）时，这些内部处理输出会被错误地路由到 Slack/iMessage 等活跃消息通道。用户强烈要求隔离内部处理日志与最终交付消息。
- **Codex worker 失控加固冲刺** ([#99551](https://github.com/openclaw/openclaw/issues/99551), 14条评论)：针对特定 incident worker 暴露的 Codex/OpenClaw worker 故障模式，社区正在推进一系列加固子任务，旨在不改变现有 PR 的前提下提升系统容错率。
- **图像工具依赖缺失报错不透明** ([#73148](https://github.com/openclaw/openclaw/issues/73148), 14条评论)：在未安装可选 `sharp` 依赖的环境中，图像工具会抛出模糊的 "Failed to optimize image" 错误，缺乏降级方案或明确的依赖缺失提示。
- **会话与转录存储向 SQLite 迁移** ([#98236](https://github.com/openclaw/openclaw/pull/98236))：该大型重构 PR 引发了关于运行时状态管理、并发写入及向后兼容性的深入讨论。

## 5. Bug 与稳定性
**严重 (P1/Crash/Regression)**
- **重入守卫缺失** ([#98416](https://github.com/openclaw/openclaw/issues/98416))：v2026.6.11 发布包中缺失重入守卫，导致回复会话初始化冲突。
- **压缩超时机制缺陷** ([#92043](https://github.com/openclaw/openclaw/issues/92043))：180s 的嵌入式压缩超时是全局单一时钟，导致长历史或慢速本地模型的合法压缩在每轮都 identically 失败。
- **Node 26 图像媒体处理崩溃** ([#99263](https://github.com/openclaw/openclaw/issues/99263))：在 Node.js 26 下，Gateway 处理入站图像时因 `FileHandle` 被 GC 关闭而抛出 `ERR_INVALID_STATE` 崩溃。
- **工具输出回归** ([#98528](https://github.com/openclaw/openclaw/issues/98528), 已关闭)：v2026.6.11 中工具（exec, web_fetch 等）在每轮首次调用后返回空输出。
- **网关操作后工具表面失效** ([#99586](https://github.com/openclaw/openclaw/issues/99586))：执行触及网关的操作后，运行时工具表面返回空白主体，仅重启容器可短暂恢复。

**中等 (P2/Message Loss/Behavior)**
- **最终消息丢失** ([#85714](https://github.com/openclaw/openclaw/issues/85714))：当 LLM 忘记调用配置的 delivery tool 时，Agent 的最终 `agent_message` 会被滞留，缺乏 `task_complete` 的降级交付机制。
- **工具输出退化为图像占位符** ([#96857](https://github.com/openclaw/openclaw/issues/96857), [#99241](https://github.com/openclaw/openclaw/issues/99241))：正常的工具文本输出在 Agent 上下文中退化为 `(see attached image)`，导致 Agent 无法读取 stdout/stderr。已有相关修复 PR [#99370](https://github.com/openclaw/openclaw/pull/99370) 处理零字节文件内联问题。
- **Bedrock 长上下文静默中止** ([#87876](https://github.com/openclaw/openclaw/issues/87876))：使用 `amazon-bedrock` 的 Agent 会话在处理长上下文流式响应约 6 分钟后静默中止，无重试或降级。
- **Provider 拒绝未触发 Fallback** ([#99164](https://github.com/openclaw/openclaw/pull/99164), PR)：修复了 Anthropic 安全分类器和 OpenAI `content_filter` 拒绝时绕过模型回退链的问题。

## 6. 功能请求归类
- **多 Agent 协作与配置**：
  - [#35203](https://github.com/openclaw/openclaw/issues/35203)：RFC 提议增强多 Agent 系统，引入能力画像、共享黑板、分层记忆边界和 Token 成本治理。
  - [#55401](https://github.com/openclaw/openclaw/issues/55401)：请求在多 Agent 部署中支持按 Agent 覆盖插件配置（如 `openclaw-mem0`），打破全局单一配置限制。
- **渠道集成与 UI 交互**：
  - [#99426](https://github.com/openclaw/openclaw/pull/99426) (PR)：为 iOS 聊天编辑器添加斜杠命令选择器，提升命令发现与过滤体验。
  - [#8892](https://github.com/openclaw/openclaw/issues/8892)：请求在 TUI 中增加 `--agent` 标志，以直接指定处理会话的 Agent。
  - [#99583](https://github.com/openclaw/openclaw/issues/99583)：提议实现智能会话自动标题，支持延迟生成、廉价模型调用及主题感知重命名。
- **架构与存储**：
  - [#32530](https://github.com/openclaw/openclaw/issues/32530)：请求从外部工作区自动发现并加载 Agent 配置，免除在中心配置文件中手动注册。

## 7. 用户反馈摘要
- **消息路由与交付痛点**：用户频繁报告内部处理文本泄露到外部 IM（[#25592](https://github.com/openclaw/openclaw/issues/25592)）以及最终回复因 LLM 行为偏差而丢失（[#85714](https://github.com/openclaw/openclaw/issues/85714)）。这表明当前消息交付管道在区分“内部思考/工具调用”与“最终用户交付”时缺乏严格的边界控制。
- **长上下文与本地模型体验**：使用本地模型（Ollama/LM Studio）或长上下文场景的用户对当前的超时和压缩机制表示不满。180s 的硬超时（[#92043](https://github.com/openclaw/openclaw/issues/92043)）和重复的自动压缩循环（[#78562](https://github.com/openclaw/openclaw/issues/78562)）导致合法任务被中断，用户呼吁更细粒度的进度复用和超时配置。
- **多 Agent 网关性能**：在启用 `active-memory` 插件的多 Agent 网关部署中，用户观察到正常回复变慢或不可靠（[#72015](https://github.com/openclaw/openclaw/issues/72015)），且每请求的身份验证和工具打包占据了大量 TTFT（首字时间）（[#80131](https://github.com/openclaw/openclaw/issues/80131)）。

## 8. 待处理积压
- **沙盒媒体大小硬编码** ([#40880](https://github.com/openclaw/openclaw/issues/40880), 3月创建)：沙盒媒体暂存限制硬编码为 5MB，导致大文件无法复制，用户请求将其改为用户可配置。
- **PowerShell 配置文件导致 Auth 阻塞** ([#71865](https://github.com/openclaw/openclaw/issues/71865), 4月创建)：当 `openclaw.json` 由 PowerShell 创建（包含 BOM 和详细缩进）时，`auth login` 流程因 size-drop guard 静默失败。
- **Channel 停止超时导致永久死亡** ([#70024](https://github.com/openclaw/openclaw/issues/70024), 4月创建)：`stopChannel` 超时后未清理 store 状态，导致通道处于 `running: true` 但实际永久死亡，缺乏自动恢复机制。
- **Safe/Unsafe ClawdBot 架构讨论** ([#6731](https://github.com/openclaw/openclaw/issues/6731), 2月创建，已关闭)：虽然已关闭，但该 Issue 积累了 12 条评论，反映了社区对通过 Rust 重写或沙盒环境实现严格安全/不安全模式隔离的长期诉求。

---

## 横向生态对比

## 1. 今日横向概览
今日 OpenClaw 保持极高活跃度，社区讨论与代码提交密集，主要聚焦消息路由隔离、上下文压缩超时机制及底层存储向 SQLite 迁移。NanoBot 与 Zeroclaw 维持中等活跃度，前者重点推进 Provider 适配与短期记忆丢失修复，后者侧重于项目治理 RFC、WASM 插件架构及 SOP 引擎稳定性。PicoClaw 活跃度相对较低，今日发布了 v0.3.1 版本，主要修复多 IM 通道断线重连及模型回退机制。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新数 | PR 更新数 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 232 (146开/活跃, 86关) | 500 (455待, 45合/关) | 无 | 消息路由与长上下文痛点密集，推进 SQLite 存储重构与多 Agent 协作 RFC。 |
| **NanoBot** | 29 (27活跃, 2关) | 38 (32待, 6合/关) | 无 | 修复 Anthropic 模型兼容性问题，推进上下文连续性修复与 WebUI 启动器。 |
| **Zeroclaw** | 36 (32开/活跃, 4关) | 50 (44待, 6合/关) | 无 | 推进目标模式 (Goal Mode) 与 WASM 插件隔离，排查 Windows 测试兼容性与内存泄漏。 |
| **PicoClaw** | 2 | 17 | v0.3.1 | 修复 WhatsApp/Matrix 断线重连，引入 Agent 协作总线与模型默认回退链。 |

## 3. OpenClaw 与同类对照
- **活动量差异**：OpenClaw 的 Issues (232) 和 PRs (500) 数量远超其他三个项目，呈现数量级差异，处于高速迭代与底层重构期。
- **技术重点差异**：OpenClaw 侧重于底层架构重构（如 SQLite 迁移、重入守卫、压缩超时机制）和复杂的多 Agent 消息路由隔离；NanoBot 关注 Provider 适配与短期记忆修复；Zeroclaw 聚焦企业级特性（OIDC、SOP 引擎、WASM 插件）；PicoClaw 侧重 IM 通道长连接稳定性。
- **社区讨论面差异**：OpenClaw 的讨论深入到具体的底层机制（如 180s 全局单一时钟超时、Node 26 GC 崩溃），而 NanoBot 和 PicoClaw 更多集中在用户体验与部署层面（如 WebUI 移动端适配、Android 启动失败、IM 断连）。

## 4. 共同出现的技术方向
- **多 Agent 协作与通信**：OpenClaw 讨论多 Agent 能力画像与共享黑板 ([#35203](https://github.com/openclaw/openclaw/issues/35203))；NanoBot 提议子智能体访问 MCP ([#4166](https://github.com/HKUDS/nanobot/issues/4166)) 及原生 A2A 编排 ([#4179](https://github.com/HKUDS/nanobot/issues/4179))；PicoClaw 引入内部 Agent 协作总线 ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937))。
- **上下文与记忆管理优化**：OpenClaw 面临长上下文压缩超时 ([#92043](https://github.com/openclaw/openclaw/issues/92043))；NanoBot 修复短期记忆丢失 ([#4044](https://github.com/HKUDS/nanobot/issues/4044)) 及上下文合并误删消息 ([#4307](https://github.com/HKUDS/nanobot/issues/4307))；Zeroclaw 推进 cron 任务的 `uses_memory` 标志以精细控制上下文注入 ([PR #8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676))。
- **IM 通道稳定性与重连机制**：PicoClaw 修复 WhatsApp WebSocket 断连 ([#3178](https://github.com/sipeed/picoclaw/issues/3178)) 和 Matrix 同步循环中断 ([PR #3219](https://github.com/sipeed/picoclaw/pull/3219))；NanoBot 积压了 Telegram 长轮询挂起问题 ([#3626](https://github.com/HKUDS/nanobot/issues/3626))；Zeroclaw 报告 WhatsApp Web 设备链接因新机制失效 ([#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627))。

## 5. 差异化定位分析
- **OpenClaw**：功能侧重底层运行时、高并发消息路由与复杂多 Agent 编排；目标用户为需要深度定制和大规模部署的开发者；技术架构涉及底层存储重构（SQLite）、严格的权限审批与网关隔离。
- **NanoBot**：功能侧重轻量级部署、Provider 快速适配与 WebUI 交互体验；目标用户为个人开发者及中小团队；技术架构强调插件化控制、Dream 系统自我改进及移动端 PWA 支持。
- **Zeroclaw**：功能侧重企业级合规、自动化工作流（SOP）与安全隔离；目标用户为企业级客户与合规要求高的组织；技术架构引入 WASM 进程外执行、OIDC 认证及持久化目标模式（Goal Mode）。
- **PicoClaw**：功能侧重多 IM 渠道接入、移动端部署与网络弱环境下的容错；目标用户为个人极客及移动端/边缘设备用户；技术架构聚焦长连接重试、模型回退链及跨平台兼容。

## 6. 社区活跃度记录
- **极高活跃度**：OpenClaw（232 Issues, 500 PRs），社区讨论与代码提交极为密集，处于高速迭代与底层重构期。
- **中等活跃度**：Zeroclaw（36 Issues, 50 PRs）与 NanoBot（29 Issues, 38 PRs），保持稳定的日常维护与功能推进，有明确的 RFC 讨论和 PR 合并。
- **较低活跃度**：PicoClaw（2 Issues, 17 PRs），今日主要围绕新版本发布后的修复与特定通道重构，日常 Issue 讨论较少。

## 7. 有证据支撑的观察
- **观察 1：第三方 IM 渠道的接口变更与网络波动是跨项目的共同稳定性痛点。** PicoClaw 修复 WhatsApp 断连与 Matrix 同步中断，Zeroclaw 报告 WhatsApp 新 passkey 机制导致链接失效，NanoBot 存在 Telegram 长轮询挂起积压，表明强依赖第三方非官方/半官方 API 的通道在长期维护中面临较高的失效风险。
- **观察 2：多 Agent 系统正在补齐内部通信与状态隔离的基础设施。** OpenClaw 讨论多 Agent 共享黑板与分层记忆，NanoBot 提议原生 A2A 编排与子智能体通知聚合，PicoClaw 引入持久化的 Agent 协作总线，显示多 Agent 架构正从简单的任务分发向复杂的通信与状态隔离演进。
- **观察 3：长上下文与记忆管理机制在复杂对话场景下普遍面临可靠性挑战。** OpenClaw 暴露 180s 全局单一压缩超时缺陷，NanoBot 出现短期记忆丢失与上下文合并误删，Zeroclaw 推进 cron 任务记忆注入的精细化控制，反映出随着对话轮数增加，现有的上下文截断与压缩策略在多个项目中均暴露出不足。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-04)

## 1. 今日活动概览
过去 24 小时内，NanoBot 项目共更新了 29 条 Issues（27 条活跃，2 条关闭）和 38 条 PR（32 条待合并，6 条已合并/关闭）。今日无新版本发布。社区讨论和代码提交主要集中在内存与上下文管理优化、Provider（如 Anthropic、OpenCode）适配与修复、以及多渠道（Mattermost）和 WebUI 体验增强上。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在 Provider 兼容性修复与插件化架构推进：
- **Provider 适配与修复**：关闭了 PR [#4685](https://github.com/HKUDS/nanobot/pull/4685) 和 [#4687](https://github.com/HKUDS/nanobot/pull/4687)，修复了 Anthropic 提供商中 `claude-sonnet-5` 模型不支持 `temperature` 参数导致 400 错误的问题，并将默认模型从过时的 `claude-sonnet-4-20250514` 更新为 `claude-sonnet-4-6`。
- **插件与功能控制**：关闭了 PR [#4396](https://github.com/HKUDS/nanobot/pull/4396) 和 [#4691](https://github.com/HKUDS/nanobot/pull/4691)，推进了可选插件控制功能，允许用户通过 CLI 和 WebUI 显式启用/禁用较重的内置通道和功能，优化了默认安装体积。
- **WebUI 启动器**：关闭了 PR [#4688](https://github.com/HKUDS/nanobot/pull/4688)，为 WebUI 添加了安全的首次运行启动器命令 `nanobot webui`，简化了本地部署的初始配置流程。

## 4. 社区热点
- **短期记忆丢失与上下文压力**：Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044)（6 条评论）和 PR [#4280](https://github.com/HKUDS/nanobot/pull/4280) 持续受到关注。用户反馈在多轮对话中 Agent 会“忘记”自己刚问过的问题，根源指向上下文窗口压力和消息合并机制，PR 提出了在上下文压力下保持上下文连续性的修复方案。
- **Dream 系统的技能重复创建**：Issue [#4467](https://github.com/HKUDS/nanobot/issues/4467) 和 PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) 讨论了 Dream 系统在每次运行时重复创建 `skills/` 目录的问题。PR 提出了通过写入守卫（write guard）来阻止重复创建并引导编辑现有技能的方案。
- **Mattermost 渠道集成**：PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) 提出了新增 Mattermost 渠道支持，包含 WebSocket 实时消息和流式响应编辑功能，进一步丰富了企业级 IM 接入选项。

## 5. Bug 与稳定性
- **P1 级别 / 崩溃问题**：
  - **MCP 工具调用异常导致进程崩溃**：Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) 报告当 MCP 工具调用返回错误或空数据时，NanoBot 进程直接崩溃。PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) 已提交修复，通过捕获异常并将超时、取消和重试失败标记为结构化工具错误来防止崩溃。
  - **MCP 重连导致 Gateway 崩溃**：Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 报告会话终止后尝试 MCP 重连时 Gateway 崩溃，目前尚无直接关联的修复 PR。
  - **CLI 交互模式流式输出丢失**：PR [#4654](https://github.com/HKUDS/nanobot/pull/4654) 修复了在交互模式下，当 Provider 返回完整响应但未触发流式回调时，最终响应文本被静默丢弃的问题。
- **P2 级别 / 逻辑与兼容性问题**：
  - **Windows 下 Gateway 后台运行与停止问题**：Issue [#4511](https://github.com/HKUDS/nanobot/issues/4511) 报告 `--background` 选项在重启后进程信息不一致；PR [#4690](https://github.com/HKUDS/nanobot/pull/4690) 修复了在 Windows 下执行 `nanobot gateway stop` 时因拒绝 `CTRL_BREAK_EVENT` 导致的崩溃回退逻辑。
  - **Post-turn 合并清除 Agent 自身消息**：Issue [#4307](https://github.com/HKUDS/nanobot/issues/4307) 报告在长多轮迭代中，上下文合并（consolidation）会归档 Agent 自身的交付消息，导致用户后续引用丢失。

## 6. 功能请求归类
- **记忆与历史检索**：
  - Issue [#4440](https://github.com/HKUDS/nanobot/issues/4440) 提议增加只读的 `search_history` 工具以召回 `memory/history.jsonl` 中的内容，对应 PR [#4439](https://github.com/HKUDS/nanobot/pull/4439) 已提交实现。
  - Issue [#3744](https://github.com/HKUDS/nanobot/issues/3744) 请求在多 IM 用户共享同一 Agent 时提供 Session 级别的 MEMORY 功能。
- **子智能体 (Subagent) 与多智能体协作**：
  - Issue [#4166](https://github.com/HKUDS/nanobot/issues/4166) 请求允许子智能体访问 MCP 服务。
  - Issue [#4279](https://github.com/HKUDS/nanobot/issues/4279) 建议聚合子智能体的通知以防止 LLM 幻觉。
  - Issue [#4179](https://github.com/HKUDS/nanobot/issues/4179) 提议通过 Peer Subagents 实现原生的 Agent-to-Agent (A2A) 编排。
- **WebUI 与移动端体验**：
  - Issue [#4693](https://github.com/HKUDS/nanobot/issues/4693) 和 [#4479](https://github.com/HKUDS/nanobot/issues/4479) 关注 WebUI 的移动端响应式布局、PWA 支持及侧边栏滑动操作。
  - Issue [#4218](https://github.com/HKUDS/nanobot/issues/4218) 请求在 WebUI 中增加 Cron Job 管理界面。

## 7. 用户反馈摘要
- **上下文与记忆痛点**：用户频繁反馈 Agent 在多轮对话中出现“短期记忆丢失”（[#4044](https://github.com/HKUDS/nanobot/issues/4044)），以及在长对话后上下文合并机制会误删 Agent 自己的回复（[#4307](https://github.com/HKUDS/nanobot/issues/4307)）。这表明当前的上下文窗口管理和消息截断策略在复杂对话场景下仍不够稳健。
- **Dream 系统的“幻觉”与冗余**：用户指出 Dream 系统在自我改进时缺乏实时学习能力（[#3973](https://github.com/HKUDS/nanobot/issues/3973)），且容易重复创建已存在的技能文件（[#4467](https://github.com/HKUDS/nanobot/issues/4467)），甚至生成与实际 Git diff 不符的审计日志（PR [#4673](https://github.com/HKUDS/nanobot/pull/4673)），影响了自动化工作流的可靠性。
- **多渠道与部署体验**：Windows 用户在后台运行和停止 Gateway 时遇到进程状态不一致和崩溃问题（[#4511](https://github.com/HKUDS/nanobot/issues/4511)）；同时，用户期望更平滑的移动端 WebUI 体验（[#4693](https://github.com/HKUDS/nanobot/issues/4693)）和更直观的首次运行配置流程（PR [#4688](https://github.com/HKUDS/nanobot/pull/4688)）。

## 8. 待处理积压
- **Telegram 长轮询挂起**：Issue [#3626](https://github.com/HKUDS/nanobot/issues/3626)（创建于 2026-05-05）报告了网络波动导致 Telegram bot 静默停止接收消息的问题，至今近两个月未有实质性修复或关闭，影响 IM 渠道的稳定性。
- **OpenAI 兼容接口文本格式工具调用解析**：Issue [#4061](https://github.com/HKUDS/nanobot/issues/4061)（创建于 2026-05-29）指出部分 OpenAI 兼容提供商以纯文本标记而非结构化 `tool_calls` 返回工具调用，导致 NanoBot 无法分发工具，目前仍处于 Open 状态。
- **Bwrap 沙盒挂载配置**：Issue [#4107](https://github.com/HKUDS/nanobot/issues/4107)（创建于 2026-05-30）请求允许为 bwrap 沙盒配置额外的绑定挂载（bind mounts），以支持更复杂的本地工具执行场景，目前尚未有对应 PR。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-07-04)

## 1. 今日活动概览
过去 24 小时内，Zeroclaw 项目共更新了 36 条 Issues（新开/活跃 32 条，已关闭 4 条）和 50 条 PR（待合并 44 条，已合并/关闭 6 条）。今日无新版本发布。社区活动主要聚焦于项目治理 RFC 的推进、插件系统架构（WASM 进程外执行与技能源替换）的演进、SOP（标准作业程序）引擎的稳定性修复，以及跨平台（Windows/WSL2）环境下的兼容性测试与内存泄漏问题排查。

## 2. 项目进展
今日详细列表中暂无新合并的 PR（6 个已合并/关闭的 PR 未展示详情），但有多个核心功能与架构重构 PR 处于活跃推进状态：
- **Goal Mode (目标模式)**：PR [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) 正在实现 RFC [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 提出的持久化目标模式，支持 Agent 在预算耗尽、暂停或取消前自主推进单一目标。
- **插件系统重构**：PR [#8661](https://github.com/zeroclaw-labs/zeroclaw/pull/8661) 提出了通过 `zeroclaw-plugin-host` sidecar 进程外执行 WASM 插件的原型验证，以增强安全隔离；PR [#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638) 移除了硬编码的 ClawHub 源，改用基于 `git-catalog` 的通用技能安装方式。
- **SOP 与自动化增强**：PR [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) 引入了可视化的 SOP 编写界面及通道扇入测试；PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) 在 CLI、工具和网关 API 中暴露了 cron 任务的 `uses_memory` 标志，以精细控制上下文注入。
- **Provider 流式解析修复**：PR [#8663](https://github.com/zeroclaw-labs/zeroclaw/pull/8663) 修复了 SSE 解析器将 socket EOF 误判为成功结束，从而导致流式响应被意外截断的问题。

## 3. 社区热点
- **项目治理与看板自动化**：Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（13 条评论）是关于工作通道、看板自动化和标签清理的治理 RFC。该提案旨在减轻维护者手动路由工作的负担，目前已被接受并处于逐步推行阶段。
- **OIDC 认证支持**：Issue [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（7 条评论）讨论了引入 OIDC 认证提供商的 RFC。这是多租户和企业级部署的关键安全/架构需求，目前正在进行 Definition-of-Done 拆解。
- **Windows 测试兼容性**：Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（8 条评论）指出在 Windows 11（简体中文，代码页 936）环境下存在 74 个测试失败。主要原因包括 Unix 专属命令、路径语义和控制台编码差异，凸显了当前 CI 仅覆盖 Linux 带来的跨平台盲区。

## 4. Bug 与稳定性
- **[严重] 进程崩溃 (SIGSEGV)**：Issue [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) 报告在工具密集型 turn 之后，`skill-review` 后台 fork 因切片越界（`skills/review.rs:159`）引发 panic，导致整个 Agent 进程崩溃退出（139/SIGSEGV）。暂无直接 fix PR。
- **[严重] 内存泄漏**：Issue [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 追踪了 MCP/工具 schema 克隆导致 Agent 循环中 RSS 无限增长的问题（从已关闭的 WSL2 OOM Issue [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) 中拆分）。暂无 fix PR。
- **[高] 安全与权限绕过**：
  - Issue [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) 指出 SOP 引擎的 `advance_step` 缺乏运行状态守卫，驱动者可通过 `sop_advance` 绕过审批网关。
  - Issue [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) 指出 `/model --agent` 作用域缺乏按发送者授权检查，任何能发消息的用户均可更改 Agent 的有效模型。
- **[高] Provider 400 错误**：Issue [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) 报告格式错误的原生 tool-call 参数未经验证直接发送给 OpenRouter/OpenAI 格式提供商，导致 400 错误和空回复。
- **[中] 平台与集成故障**：Issue [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) 报告 WhatsApp Web 设备链接因 WhatsApp 新的 passkey/SHORTCAKE 机制而失效；Issue [#8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632) 报告包含 `embedded-web` 的源码安装因 API 客户端生成时序问题而编译失败。

## 5. 功能请求归类
- **Agent 自主性与记忆管理**：
  - 目标模式 (Goal Mode)：RFC [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 及 PR [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) 推进有界自主会话工作。
  - 记忆控制：Issue [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397)、[#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) 和 PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) 要求在 CLI、工具和 Web 网关 UI 中暴露 cron 任务的 `uses_memory` 标志，以便精细控制自动化任务的上下文注入。
- **插件与技能生态**：
  - Issue [#8636](https://github.com/zeroclaw-labs/zeroclaw/issues/8636) 跟进第三方验证插件编写指南后的非文档类修复（如 feature-graph 和 config seeding，对应 PR [#8641](https://github.com/zeroclaw-labs/zeroclaw/pull/8641) 和 [#8662](https://github.com/zeroclaw-labs/zeroclaw/pull/8662)）。
- **UI/UX 改进**：Issue [#8653](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) 建议 ZeroCode 窗格进入时自动恢复最近的 Code 会话，减少手动恢复的摩擦。

## 6. 用户反馈摘要
- **跨平台与本地开发痛点**：Windows 用户（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)）反馈在中文环境（代码页 936）下运行测试套件遭遇大面积失败，表明当前 CI 忽视了 Windows 开发者的本地验证需求。WSL2 用户（[#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542), [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)）则深受内存泄漏和 OOM 重启风暴困扰。
- **SOP 审计与可靠性**：用户反馈 SOP 引擎在 headless 触发时存在“假绿”审计轨迹（[#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)），即确定性步骤未执行却被标记为完成，这对依赖 SOP 进行合规审计的场景是严重痛点。此外，Web Dashboard 无法读取共享 SOP（[#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)）也阻塞了可视化工作流配置。
- **第三方集成脆弱性**：WhatsApp 通道（[#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)）因官方更新链接机制而直接瘫痪，反映出强依赖第三方非官方/半官方 API 的通道在长期维护中面临较高的失效风险。

## 7. 待处理积压
- **Windows 测试失败 ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))**：创建于 2026-06-10，74 个测试失败，优先级 P1。目前仍处于 Open 状态，需维护者介入修复路径和编码兼容性问题。
- **OIDC 认证支持 ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))**：创建于 2026-06-03，作为 P1 优先级的安全/架构 RFC，目前仍在讨论和拆解阶段，对于企业级用户接入至关重要，需加快落地。
- **Agent Scope 授权硬化 ([#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044))**：创建于 2026-06-20，涉及多用户环境下的模型覆盖权限漏洞，目前无实质性修复 PR，存在安全隐患。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-04)

## 1. 今日活动概览
过去 24 小时内，PicoClaw 项目共更新了 2 条 Issues 和 17 条 Pull Requests，并发布了 v0.3.1 新版本。今日的代码提交主要集中在消息通道（WhatsApp、Matrix、Discord、DeltaChat）的断线重连机制修复与功能增强，以及多 Agent 路由和模型回退机制的优化。此外，社区针对 Android 端服务启动异常和 WhatsApp 连接超时问题提出了反馈。

## 2. 版本发布
- **v0.3.1** ([Release Link](https://github.com/sipeed/picoclaw/releases/tag/v0.3.1))
  - **更新内容**：本次小版本更新主要合并了 NearAI 提供商支持 ([#2917](https://github.com/sipeed/picoclaw/pull/2917))、Codex 存储锁类型断言修复 ([#3053](https://github.com/sipeed/picoclaw/pull/3053)) 以及其他底层依赖合并。
  - **注意事项**：无明显的破坏性变更说明，建议常规升级。

## 3. 项目进展
今日关闭/合并了 5 个 PR，主要涉及代码清理、逻辑修正与替代提交：
- **Agent 会话清理**：关闭了 [#3223](https://github.com/sipeed/picoclaw/pull/3223)，由新的 PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 替代，旨在修复当消息路由到非默认 Agent 时，执行 `/clear` 命令错误清理默认 Agent 会话的问题。
- **Web 搜索工具优化**：关闭了 [#3128](https://github.com/sipeed/picoclaw/pull/3128)，显式忽略 `resp.Body.Close()` 错误，清理了 Bing、Tavily 等搜索提供商中无意义的错误处理。
- **子 Agent 消息去重**：关闭了 [#3142](https://github.com/sipeed/picoclaw/pull/3142)，修复了 spawn 子 Agent 完成时 `ToolResult` 导致重复消息推送的问题。
- **Token 使用量统计**：关闭了 [#3156](https://github.com/sipeed/picoclaw/pull/3156)，原计划在 Pico 通道输出每轮 LLM token 使用量。
- **DeltaChat 网关**：关闭了 [#3063](https://github.com/sipeed/picoclaw/pull/3063)，相关功能已重构至新的清理 PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) 中。

## 4. 社区热点
- **Agent 协作总线**：PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 引入了内部 Agent 协作总线（Agent Collaboration Bus），支持持久化跨 Agent 通信、独立会话历史和权限感知消息路由，是今日架构层面讨论度较高的功能。
- **模型默认回退链**：PR [#3200](https://github.com/sipeed/picoclaw/pull/3200) 提出在 Web UI 和后端 API 中增加可配置的模型默认回退链（Fallback Chain），允许用户设置主模型及多个备用模型并自定义排序。

## 5. Bug 与稳定性
今日报告及修复的 Bug 主要集中在长连接通道的断线重连和配置迁移：
- **WhatsApp Websocket 断连 (高)**：Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) 报告 WhatsApp 连接超时。PR [#3220](https://github.com/sipeed/picoclaw/pull/3220) 和 [#3179](https://github.com/sipeed/picoclaw/pull/3179) 提供了修复，增加了带指数退避的 WebSocket 重连机制和异步消息分发，防止死连接阻塞。
- **Matrix 同步循环中断 (高)**：PR [#3219](https://github.com/sipeed/picoclaw/pull/3219) 修复了 Matrix 同步循环在网络中断或服务器重启时永久退出的问题，增加了重试机制。
- **v2 到 v3 配置迁移失败 (中)**：PR [#3218](https://github.com/sipeed/picoclaw/pull/3218) 修复了因 `legacyDiagnosticConfig` 缺少 `BuildInfo` 字段，导致 v2 配置被误报为包含未知字段而阻断迁移的问题。
- **火山引擎豆包 Seed XML 解析 (中)**：PR [#3165](https://github.com/sipeed/picoclaw/pull/3165) 修复了 OpenAI 兼容接口中无法正确恢复 `<seed:tool_call>` XML 块的问题，并抑制了流式输出中的 XML 泄露。
- **测试代码回退 (低)**：PR [#3221](https://github.com/sipeed/picoclaw/pull/3221) 回退了沙盒文件系统 Windows 路径处理的测试，原因是 `provider.go` 中存在日志导入错误。

## 6. 功能请求归类
- **通道与网关扩展**：
  - PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) 新增了 Simplex 通道类型支持。
  - PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) 对 DeltaChat 实现进行了大规模重构（删减 320 行代码），清理了遗留功能、移除了基于密码的邮件配置，并完善了文档。
- **权限与访问控制**：
  - PR [#3217](https://github.com/sipeed/picoclaw/pull/3217) 为 Discord 通道增加了基于角色的访问控制（`allow_roles`），允许特定角色 ID 的用户与 Bot 交互，无需特权 Intent。

## 7. 用户反馈摘要
- **Android 端服务启动失败**：Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) 中用户反馈在 Android 设备上无法启动 PicoClaw 服务，且无法在设置中更改路径，即使已授予完整权限。这反映了移动端部署环境下的权限或路径兼容性问题。
- **WhatsApp 连接稳定性**：Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) 用户反馈在使用 Docker 和 launchpad 部署时，WhatsApp WebSocket 出现超时，影响了定时任务的执行，凸显了长连接在复杂网络环境下的脆弱性。

## 8. 待处理积压
- **Agent 协作总线**：PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 自 5 月 24 日创建以来仍处于 Open 状态，涉及核心架构变更，需维护者进一步 Review。
- **Android 版本 Bug**：Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) 已被标记为 `[stale]`，但用户反馈的 Android 端无法启动问题尚未有明确的修复 PR 关联，需关注移动端支持优先级。
- **Simplex 通道支持**：PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) 自 6 月 27 日提交，目前仍在等待代码审查与合并。

</details>