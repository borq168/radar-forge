# OpenClaw 生态日报 2026-07-05

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-05 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-07-05)

## 1. 今日活动概览
过去 24 小时内，OpenClaw 仓库保持高度活跃，共记录 500 条 Issue 更新（460 条新开/活跃，40 条已关闭）与 500 条 PR 更新（348 条待合并，152 条已合并/关闭）。今日无新版本发布。社区讨论与代码贡献主要集中在多智能体编排稳定性、会话状态与锁管理、多渠道适配器（Telegram/Slack/WhatsApp 等）修复，以及 TUI/Gateway 队列机制的优化上。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
**已关闭/合并的重要 PR：**
- [#100047](https://github.com/openclaw/openclaw/pull/100047)：修复 Gateway 中 `truncateCloseReason` 在截断 WebSocket 关闭原因时破坏多字节 UTF-8 序列导致乱码的问题。
- [#89078](https://github.com/openclaw/openclaw/pull/89078)：修复 TUI 和 Gateway 的队列模式繁忙守卫（busy guard）及排队轮次取消契约，解决用户在 Agent 繁忙时发送提示被阻断的问题。
- [#100026](https://github.com/openclaw/openclaw/pull/100026)：修复运行时会话清理和符号链接目录（如 macOS `/var` 到 `/private/var`）下的媒体暂存失败问题。
- [#100114](https://github.com/openclaw/openclaw/pull/100114)：修复 QA 通道处理无元数据最终回复时的异常。
- [#100083](https://github.com/openclaw/openclaw/pull/100083)：更新 `oxlint-tsgolint` 依赖，处理类型断言相关的 lint 规则更新。

**推进中的重要 PR：**
- [#100123](https://github.com/openclaw/openclaw/pull/100123)：为 TUI 增加 Agent 繁忙时的提示排队功能，避免用户输入被直接拒绝。
- [#100119](https://github.com/openclaw/openclaw/pull/100119)：暴露入站媒体下载失败事件，防止 WhatsApp、Signal、飞书等渠道在媒体下载失败时发送幽灵占位符或丢失字幕。
- [#99088](https://github.com/openclaw/openclaw/pull/99088)：为 xAI 添加实时语音提供商（Realtime Voice Provider）支持，集成 Grok Voice Agent。
- [#100007](https://github.com/openclaw/openclaw/pull/100007)：修复自动回复前缀匹配器，使其支持包含数字和标点符号的自定义静默令牌（如 `NO_REPLY2`）。

## 4. 社区热点
- **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** (20条评论)：讨论 Subagent 任务编排中结果静默丢失的问题（无重试、无通知、超时不自动重启）。这是近期多智能体稳定性的核心痛点，涉及多种底层失败模式。
- **[Issue #48788](https://github.com/openclaw/openclaw/issues/48788)** (18条评论)：提议建立集中的文件名编码实用工具，以处理跨所有渠道适配器的多编码（如 Shift-JIS, GB18030）Content-Disposition，旨在彻底解决飞书等渠道的中文文件名乱码问题。
- **[Issue #32473](https://github.com/openclaw/openclaw/issues/32473)** (17条评论，已关闭)：关于 Control UI 需要设备身份（HTTPS 或 localhost 安全上下文）的回归 Bug，影响了 VPS 和 Docker 部署用户，目前该 Issue 已关闭。
- **[Issue #22676](https://github.com/openclaw/openclaw/issues/22676)** (17条评论)：Signal daemon 在 SIGUSR1 重启时的竞态条件，导致旧进程未释放端口和锁，新进程产生孤儿进程和发送失败。

## 5. Bug 与稳定性
**P0 级别（阻断性/计费异常）：**
- [Issue #99594](https://github.com/openclaw/openclaw/issues/99594)：Cloud 实例在余额充足（$109）且 Pro 计划激活的情况下，错误提示“out of credits”，阻断所有聊天尝试。

**P1 级别（严重/崩溃/数据丢失/安全）：**
- [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)：Subagent 完成状态静默丢失，无重试或自动重启机制。
- [Issue #22676](https://github.com/openclaw/openclaw/issues/22676)：Signal daemon `stop()` 竞态条件导致孤儿进程。
- [Issue #48003](https://github.com/openclaw/openclaw/issues/48003)：Steer 模式未在主会话运行中注入消息，消息被错误排队直到 turn 完成。
- [Issue #43367](https://github.com/openclaw/openclaw/issues/43367)：多智能体编排不稳定，并发 `agents add` 导致配置覆盖、会话锁失败和子任务脱离。
- [Issue #44905](https://github.com/openclaw/openclaw/issues/44905)：Discord 渠道泄露内部 tool-call 追踪信息（如 `NO_REPLY`, JSON 参数）到公共频道。
- [Issue #54155](https://github.com/openclaw/openclaw/issues/54155)：Gateway 内存泄漏，4 天内从 389MB 增长至 14.7GB。
- [Issue #49603](https://github.com/openclaw/openclaw/issues/49603)：Gateway 重启时，若 PID 匹配当前进程，孤儿锁文件未被清理导致死锁。
- [Issue #51396](https://github.com/openclaw/openclaw/issues/51396)：`clearUnboundScopes` 无条件剥离非本地 token-auth 客户端的 operator scopes，导致后端客户端 `chat.send` 失败。

**P2 级别（行为异常/UX 摩擦）：**
- [Issue #51429](https://github.com/openclaw/openclaw/issues/51429)：代码中硬编码了特定用户的工作路径（`/Users/wangtao`），导致新用户环境自动创建错误目录。
- [Issue #45765](https://github.com/openclaw/openclaw/issues/45765)：`OPENCLAW_HOME` 设置为 `~/.openclaw` 时产生嵌套目录 `~/.openclaw/.openclaw`。
- [Issue #43747](https://github.com/openclaw/openclaw/issues/43747)：内存管理行为不一致，不同用户的 memory 存储和 chunking 表现混乱。

## 6. 功能请求归类
**架构与扩展性：**
- [Issue #22438](https://github.com/openclaw/openclaw/issues/22438)：提议分层引导文件加载（Tiered bootstrap file loading），以渐进式控制上下文，减少大工作区下的 Token 浪费。
- [Issue #13583](https://github.com/openclaw/openclaw/issues/13583)：请求响应前强制执行钩子（Pre-response enforcement hooks），用于高风险工作流中的强制工具调用或策略规则拦截。
- [Issue #42475](https://github.com/openclaw/openclaw/issues/42475)：在网关级别实施每个 Agent 的成本预算强制执行（Per-agent cost budget enforcement）。
- [Issue #7722](https://github.com/openclaw/openclaw/issues/7722)：文件系统沙盒配置（`tools.fileAccess`），限制 Agent 的文件读写路径。

**渠道与集成：**
- [Issue #50093](https://github.com/openclaw/openclaw/issues/50093)：WhatsApp 断线重连后回填（Backfill）遗漏的消息。
- [Issue #20786](https://github.com/openclaw/openclaw/issues/20786)：支持 Telegram Business Bot（接收 `business_message` 更新）。

**UI/UX 改进：**
- [Issue #42840](https://github.com/openclaw/openclaw/issues/42840)：Control UI 增加 MathJax/LaTeX 渲染支持。
- [Issue #33413](https://github.com/openclaw/openclaw/issues/33413)：在 Slack 助手线程状态中动态显示工具级别的执行进度。

## 7. 用户反馈摘要
- **多智能体与并发痛点**：用户在执行并行编码批次或复杂编排时，频繁遭遇配置覆盖、会话锁失败和子代理状态不同步的问题（#43367, #44925），反映出当前多智能体架构在并发控制和状态同步上的脆弱性。
- **内存与上下文管理**：用户对内存管理的黑盒状态和不可预测性表示不满（#43747），同时呼吁更细粒度的上下文控制（#22438）和成本限制（#42475），以应对长会话和 Token 消耗失控的问题。
- **部署与配置摩擦**：硬编码路径（#51429）、环境变量解析错误（#53628, #45765）以及 Cloud 实例计费显示 Bug（#99594）严重影响了新用户的 onboarding 体验和付费用户的信任度。

## 8. 待处理积压
- **[Issue #7722](https://github.com/openclaw/openclaw/issues/7722)** (创建于 2026-02-03)：文件系统沙盒配置请求。对于企业级和安全敏感部署至关重要，目前仍有 9 条评论但无实质推进。
- **[Issue #13583](https://github.com/openclaw/openclaw/issues/13583)** (创建于 2026-02-10)：响应前强制执行钩子（hard gates）。金融/安全等高风险场景的强需求，长期处于 Open 状态。
- **[Issue #22676](https://github.com/openclaw/openclaw/issues/22676)** (创建于 2026-02-21)：Signal daemon 重启竞态条件。导致消息发送失败，已积压超 4 个月，影响 Signal 渠道的可靠性。
- **[PR #41275](https://github.com/openclaw/openclaw/pull/41275)** (创建于 2026-03-09)：修复 cron UI 允许 `timeoutSeconds: 0` 表示无超时模式。长期处于 `needs proof` 状态，阻碍了用户配置长耗时定时任务。

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比日报 (2026-07-05)

## 1. 今日横向概览
今日四大开源项目均无新版本发布，社区活动主要聚焦于底层稳定性修复与多渠道适配器维护。OpenClaw 保持极高活跃度，集中处理多智能体并发编排与网关内存泄漏等重度工程问题；Zeroclaw 处于代码集中提交期，大量推进 Goal 模式拆分与 Provider 兼容性修复；NanoBot 与 PicoClaw 活跃度较低，主要围绕 MCP 工具调用容错、WebUI 移动端适配及底层加密库替换等具体痛点进行修补。

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃/关闭) | PRs (待合并/已合并关闭) | Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (460 / 40) | 500 (348 / 152) | 无 | 聚焦多智能体编排稳定性、会话锁管理、TUI/Gateway 队列优化；暴露出多个 P0/P1 级阻断性与崩溃 Bug。 |
| **Zeroclaw** | 50 (39 / 11) | 50 (48 / 2) | 无 | 绝大多数 PR 处于 Open/Review 状态；重点推进 Goal 模式拆分、SOP 增强及 ZeroCode TUI 交互缺陷修复。 |
| **NanoBot** | 3 (1 / 2) | 12 (5 / 7) | 无 | 修复 MCP 工具调用崩溃与 Copilot Token 竞态条件；推进 WebUI 流式渲染与子智能体 MCP 继承。 |
| **PicoClaw** | 4 (3 / 1) | 7 (5 / 2) | 无 | 活动量最小；讨论底层加密库替换（libolm 至 vodozemac），回滚了导致编译错误的测试用例 PR。 |

## 3. OpenClaw 与同类对照
- **活动量差异**：OpenClaw 今日产生 1000 条 Issue/PR 更新，是 Zeroclaw 的 10 倍，NanoBot 与 PicoClaw 的百倍以上，显示出其作为大型复杂系统的高频迭代特征。
- **技术重点差异**：OpenClaw 今日的技术重心在于“系统级容错与并发控制”（如 Subagent 状态丢失 #44925、Gateway 内存泄漏 #54155、Signal 竞态条件 #22676）；而同类项目更多关注“协议层对接与单点体验”（如 NanoBot 的 MCP 容错、Zeroclaw 的 Provider 400 错误修复、PicoClaw 的 Android 端启动失败）。
- **社区讨论面差异**：OpenClaw 的讨论深度涉及企业级特性（如成本预算强制执行 #42475、文件系统沙盒 #7722）；Zeroclaw 侧重于工作流治理（SOP 路由、看板自动化 RFC）；NanoBot 和 PicoClaw 则更贴近个人开发者的日常使用摩擦（如 WebUI 窄视口溢出、Matrix 加密消息解析失败）。

## 4. 共同出现的技术方向
- **MCP (Model Context Protocol) 工程化落地**：NanoBot 修复了 MCP 畸形结果导致的进程崩溃 (#4666) 并推进子智能体 MCP 继承 (#4697)；Zeroclaw 处理了 MCP 工具在 TUI 会话中丢失的问题 (#8193)。
- **多渠道 (Channel) 适配器维护**：四个项目今日均涉及渠道集成。OpenClaw 修复 WhatsApp/Signal/Discord 异常；NanoBot 推进 Mattermost (#4459) 与钉钉修复；Zeroclaw 新增 OpenAI 兼容 (#8710) 与 Gitea (#8611) 渠道；PicoClaw 优化 LINE 响应体处理 (#3189) 与 Matrix 加密 (#3194)。
- **子智能体 (Subagent) 状态与权限管理**：OpenClaw 集中暴露 Subagent 任务编排结果静默丢失 (#44925) 及并发配置覆盖 (#43367) 问题；NanoBot 则从功能侧提出为子智能体提供可配置的 MCP 继承权限 (#4697)。

## 5. 差异化定位分析
- **OpenClaw**：定位为高并发、全功能的多智能体编排中枢。架构复杂度高，当前面临的主要挑战是分布式状态同步、长连接内存管理及企业级安全/计费隔离。
- **Zeroclaw**：定位为侧重确定性工作流与代码生成的代理框架。技术架构上深度绑定 SOP（标准作业程序）与 Goal 模式，正致力于将大型功能模块化拆分，并广泛兼容第三方 Provider。
- **NanoBot**：定位为轻量级、注重开发者体验的个人 AI 助手。功能侧重于 MCP 协议的深度集成、WebUI 的多端交互细节（如流式 Markdown 渲染）以及主流 IM 渠道的快速接入。
- **PicoClaw**：定位为侧重边缘端/移动端及隐私安全的轻量级助手。技术架构上关注 Android 端兼容性、端到端加密（E2EE）通道支持及底层依赖的现代化（如替换加密库）。

## 6. 社区活跃度记录
- **极高活跃度**：**OpenClaw**。单日 500 Issue + 500 PR，社区讨论与代码提交极为密集，处于高频迭代与重度 Bug 消化期。
- **中高活跃度**：**Zeroclaw**。单日 50 Issue + 50 PR，但 96% 的 PR 处于待合并状态，表明维护者正在进行集中的代码提交与审查（可能为 v0.8.3 版本蓄力）。
- **低活跃度**：**NanoBot** 与 **PicoClaw**。单日 Issue 和 PR 均在个位数，社区互动主要集中在特定 Bug 的修复确认与少量功能 PR 的推进，处于常规维护状态。

## 7. 有证据支撑的观察
1. **MCP 协议的工程化容错仍是当前痛点**：NanoBot (#4652, #4302) 和 Zeroclaw (#8193) 今日均暴露出 MCP 工具调用异常导致崩溃或工具丢失的问题。这表明 MCP 从协议规范到生产级容错处理（如畸形结果降级、重连状态恢复）仍需大量工程打磨。
2. **多智能体并发控制是复杂编排的核心技术壁垒**：OpenClaw 今日集中爆发多个 P1 级多智能体问题（#44925 状态丢失、#43367 并发配置覆盖、#48003 消息错误排队），反映出在并行任务场景下，会话锁、状态机和上下文隔离的实现难度极高，极易引发级联故障。
3. **Channel 适配器的生命周期管理占据大量日常维护精力**：四个项目今日均涉及 Channel/Provider 的修复或新增。除了基础的消息收发，断线重连（OpenClaw #50093）、进程退出时的流任务清理（NanoBot #4646）、以及特定平台的消息格式兼容（Zeroclaw #8615 静默删除内容）等生命周期管理细节，构成了渠道集成中最繁重的维护工作。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### 1. 今日活动概览
过去 24 小时内，NanoBot 项目共有 3 条 Issues 更新（1 条活跃，2 条已关闭）和 12 条 PR 更新（5 条待合并，7 条已关闭/合并）。今日无新版本发布。社区活动主要集中在修复 MCP 工具调用异常、Copilot Token 刷新竞态条件等底层稳定性问题，以及优化 WebUI 在移动端的显示和流式渲染体验。此外，子智能体（Subagent）的 MCP 继承配置和 Mattermost 渠道集成等功能性 PR 仍在推进中。

### 2. 项目进展
今日关闭/合并了 7 个 PR，主要集中在底层稳定性、Provider 修复和配置序列化方面：
- **MCP 异常处理**：关闭了 [#4666](https://github.com/HKUDS/nanobot/pull/4666)，修复了 MCP 工具返回畸形结果或超时时导致进程崩溃的问题，将其转化为结构化的工具错误。
- **Copilot 竞态条件修复**：关闭了 [#4684](https://github.com/HKUDS/nanobot/pull/4684)，通过引入 `asyncio.Lock` 解决了 GitHub Copilot Provider 在并发请求下 Token 刷新的竞态条件问题。
- **原子写入恢复**：关闭了 [#4653](https://github.com/HKUDS/nanobot/pull/4653)，修复了 `pairing._save()` 重构后丢失的崩溃持久化原子写入（fsync）机制。
- **Gateway 与 Channel 稳定性**：关闭了 [#4690](https://github.com/HKUDS/nanobot/pull/4690) 处理 Windows 下 `nanobot gateway stop` 的 fallback 崩溃；关闭了 [#4646](https://github.com/HKUDS/nanobot/pull/4646) 确保钉钉 Channel 在 shutdown 时正确停止 stream task。
- **配置序列化**：关闭了 [#4692](https://github.com/HKUDS/nanobot/pull/4692)，将 `model_presets` 序列化为驼峰命名（camelCase）以对齐官方文档规范。

### 3. 社区热点
- **MCP 工具调用与重连崩溃**：Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) 报告了 MCP 工具调用异常时进程直接崩溃的问题，该 Issue 已被关闭，对应的修复 PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) 也已关闭。另一个相关的 Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 讨论了 MCP 重连后 Gateway 级别的崩溃，目前仍处于 Open 状态，显示 MCP 连接的稳定性是社区持续关注的痛点。
- **WebUI 体验优化**：PR [#4696](https://github.com/HKUDS/nanobot/pull/4696) 提出了平滑流式 Markdown 渲染的方案，通过 rAF 调度器和动画减少原始 Markdown 标记的闪烁；PR [#4694](https://github.com/HKUDS/nanobot/pull/4694) 则致力于修复移动端窄视口下聊天窗口和输入框被裁剪的问题。这两个 PR 反映了用户对 WebUI 交互细节和多端适配的较高要求。

### 4. Bug 与稳定性
今日涉及多个严重度为 P1 和 P2 的 Bug 修复与报告：
- **[P1] MCP 畸形结果导致崩溃**：Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) 报告，已通过 PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) 修复（已关闭）。
- **[P1] 配对数据原子写入丢失**：PR [#4653](https://github.com/HKUDS/nanobot/pull/4653) 修复了 `_write_text_atomic` 中缺少 fsync 导致的回归问题（已关闭）。
- **[P2] Copilot Token 刷新竞态条件**：Issue [#4677](https://github.com/HKUDS/nanobot/issues/4677) 报告，已通过 PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) 加锁修复（已关闭）。
- **[P2] Windows Gateway 停止崩溃**：PR [#4690](https://github.com/HKUDS/nanobot/pull/4690) 修复了 Windows 下 `CTRL_BREAK_EVENT` 被拒绝时的 traceback 问题（已关闭）。
- **[P2] 钉钉 Channel 关闭未停止 Stream**：PR [#4646](https://github.com/HKUDS/nanobot/pull/4646) 修复了 shutdown 时未取消 DingTalk stream task 的问题（已关闭）。
- **[P2] WebUI 窄视口布局溢出**：由 PR [#4694](https://github.com/HKUDS/nanobot/pull/4694) 提及的移动端水平滚动和裁剪问题，修复 PR 目前待合并。
- **[未定级] MCP 重连后 Gateway 崩溃**：Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 仍处于 Open 状态，尚未有直接关联的修复 PR 合并。

### 5. 功能请求归类
- **子智能体（Subagent）能力增强**：PR [#4697](https://github.com/HKUDS/nanobot/pull/4697) 提出为专业子智能体提供可配置的 MCP 继承功能。默认情况下子智能体不继承主智能体的 MCP 服务器，该 PR 允许通过配置赋予子智能体数据库或搜索等 MCP 访问权限，避免通过 raw shell 重新实现。
- **新渠道集成**：PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) 正在推进 Mattermost 渠道的支持，包含 WebSocket 实时消息和流式响应编辑功能。
- **WebUI 渲染优化**：PR [#4696](https://github.com/HKUDS/nanobot/pull/4696) 提议引入带缓冲和自然阅读速度的流式 Markdown 揭示动画，以提升长文本输出的视觉体验。

### 6. 用户反馈摘要
- **MCP 异常处理机制粗暴**：用户在 Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) 和 [#4302](https://github.com/HKUDS/nanobot/issues/4302) 中反馈，当 MCP 工具返回错误、空数据或发生超时时，系统缺乏优雅的降级或自动纠正机制，直接导致进程或 Gateway 崩溃。用户期望系统能自动修正输入参数或提供结构化错误，而不是直接中断服务。
- **WebUI 移动端适配不足**：通过 PR [#4694](https://github.com/HKUDS/nanobot/pull/4694) 的描述可以看出，用户在移动端浏览器使用 WebUI 时，遇到长 Markdown 或链接导致整个页面水平滚动、输入框被遮挡或裁剪的问题，影响了移动端的使用体验。
- **多端错误提示不一致**：PR [#4698](https://github.com/HKUDS/nanobot/pull/4698) 指出，用户在 CLI 和 WebUI 中遇到 `oauth_cli_kit` 未安装时，看到的错误提示和安装指引不一致，增加了排查成本。

### 7. 待处理积压
- **MCP 重连崩溃问题**：Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 创建于 2026-06-11，至今近一个月仍处于 Open 状态。该问题涉及 MCP 会话终止后重连导致的 Gateway 级别崩溃，属于底层通信稳定性问题，建议维护者优先关注并推进修复。
- **Mattermost 渠道集成**：PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) 创建于 2026-06-22，目前仍处于 Open 状态。作为一个新的 Channel 集成，可能涉及较多的代码审查和测试，建议维护者跟进 Review 进度。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-07-05)

## 1. 今日活动概览
过去 24 小时内，Zeroclaw 项目共更新了 50 条 Issues（其中 39 条新开或活跃，11 条已关闭）和 50 条 Pull Requests（48 条待合并，2 条已合并/关闭）。今日无新版本发布。社区讨论和代码提交主要围绕 v0.8.3 版本的运行时执行、Provider 兼容性修复、Goal 模式（目标模式）的拆分实现，以及 ZeroCode TUI 的交互缺陷修复展开。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日 PR 绝大多数（48/50）处于 Open/Review 状态，表明大量功能正在集中提交和审查中。重点推进的代码变更包括：
- **Goal 模式（目标模式）拆分实现**：提交了多个大型 PR 推进 Goal 模式，包括添加 channel `/goal` 命令准入 ([#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689))、添加受信任的 goal 工具和委派边界 ([#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688))，以及添加 goal 控制器和验证器 ([#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687))。
- **Channel 与 Provider 扩展**：新增 OpenAI 兼容 Channel ([#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710))，支持通过 HTTP/SSE 暴露 OpenAI 兼容端点；新增 Gitea/Forgejo provider 用于 Git forge channel ([#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611))；Matrix channel 增加单消息进度草稿功能 ([#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443))。
- **安全与泄漏检测**：修复安全扫描中的误报问题，保留生成的文件引用 ([#8723](https://github.com/zeroclaw-labs/zeroclaw/pull/8723))。
- **SOP (标准作业程序) 增强**：推进可视化 SOP 编写界面及相关测试 ([#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590))。

## 4. 社区热点
- **MCP 工具在 TUI 中丢失问题**：Issue [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) 获得最多评论（15 条），用户报告 MCP 服务器连接并暴露了工具，但 Zerocode TUI 会话未接收到发现的 MCP 工具，导致工作流阻塞（S1）。该 Issue 目前已关闭，表明问题已得到处理。
- **工作流与看板自动化 RFC**：Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（13 条评论）讨论了工作通道、看板自动化和标签清理的治理 RFC，目前处于接受并逐步推广阶段，反映了社区对项目治理规范化的关注。
- **Goal 模式实施拆分**：Issue [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)（7 条评论）作为 Tracker 协调将已实现的 goal-mode 工作拆分为可审查的 PR，体现了维护者对大型功能模块化提交的重视。

## 5. Bug 与稳定性
今日报告了多个影响工作流和稳定性的 Bug，按严重程度排列如下：

**严重 (S1/P1 - 工作流阻塞/安全风险)**
- **Skill-review fork 崩溃**：[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) 报告在工具密集型 turn 之后，后台 `skill-review` fork 发生越界切片 panic，导致整个 agent 进程 SIGSEGV (139) 崩溃。
- **OpenRouter/OpenAI 格式 Provider 400 错误**：[#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) 报告原生 tool-call 参数未经验证直接发送，导致 Provider 返回 400 和空回复。
- **SOP 审批门控绕过**：[#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) 报告 `advance_step` 缺少运行状态守卫，驱动者可通过 `sop_advance` 绕过审批门控。
- **Context compression 丢弃消息**：[#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)（已关闭）曾报告 OpenAI 兼容 provider 的上下文压缩会完全丢弃 `assistant(tool_calls)` 和 `tool(result)`，导致工具循环。

**中等 (S2/P2 - 行为降级/体验受损)**
- **Cron 任务内存召回失效**：[#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) 报告设置 `uses_memory = false` 后，Cron 任务仍会召回内存。已有相关 PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) 尝试在 CLI 和 API 中暴露该标志。
- **ZeroCode TUI 交互缺陷**：代码块复制包含 Markdown 围栏 ([#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664))、日志详情隐藏事件属性 ([#8646](https://github.com/zeroclaw-labs/zeroclaw/issues/8646))、代码 turn 完成但无可见输出 ([#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644))。
- **兼容 Provider 静默删除内容**：[#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) 报告无条件剥离 `<think>` 标签导致合法内容被静默删除。
- **高熵检测器误报**：[#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) 和 [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) 报告泄漏检测器将合法的生成文件名误判为高熵令牌并替换。已有 PR [#8723](https://github.com/zeroclaw-labs/zeroclaw/pull/8723) 尝试修复。

## 6. 功能请求归类
- **Provider 与模型支持**：
  - 请求通过配置文件禁用 Bedrock Nova 2 Lite 的 cachePoint 功能以解决缓存错误 ([#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720))。
  - 请求在 Anthropic 拒绝时进行故障转移，以便降级处理能够正确显示（对应 PR [#8721](https://github.com/zeroclaw-labs/zeroclaw/pull/8721)）。
- **SOP (标准作业程序) 路由**：
  - 请求当 SOP 步骤的 `when` 条件为 false 时，应进入下一步而非结束运行，以支持多阶段 SOP ([#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719))。
- **可观测性**：
  - 请求实现 Turn 级别的 OTel 跟踪关联，将 `llm.call` / `tool.call` 等 span 嵌套在单个 turn trace 下 ([#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641))。
- **UI/UX 增强**：
  - 请求在 ZeroCode TUI、Gateway 和 CLI 中添加模型上下文窗口使用率进度条（对应 PR [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)）。

## 7. 用户反馈摘要
- **痛点**：
  - **Provider 兼容性阵痛**：多个 Issue（[#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675), [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615), [#7862](https://github.com/zeroclaw-labs/zeroclaw/issues/7862)）反映了在使用 OpenAI 兼容、OpenRouter、vLLM 等第三方 Provider 时，由于参数序列化、空工具列表、特定标签处理不当，导致请求失败或内容丢失。
  - **TUI 交互细节粗糙**：ZeroCode TUI 在代码块复制、日志查看和状态显示上存在多个“降级行为”，用户反馈复制代码会带上 Markdown 标记，日志面板无法查看完整 payload，影响开发调试效率。
  - **安全扫描误报**：高熵令牌检测器过于激进，导致正常的文件名（如微信媒体文件、MD5 哈希文件名）被替换为 `[REDACTED]`，破坏了文件处理工作流。
- **使用场景**：
  - 用户正在深度使用 SOP 功能构建确定性工作流，并提出了多阶段循环和可视化编辑的需求。
  - 开发者在尝试通过 Channel 集成更多平台（如 OpenAI 兼容客户端、Matrix、Gitea），表明 Zeroclaw 正被用作多平台统一的 AI 代理中枢。

## 8. 待处理积压
- **长期未关闭的 RFC 与 Tracker**：
  - Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (RFC: Work Lanes, Board Automation) 创建于 5 月 20 日，虽已 Accept 但仍在 rollout 中。
  - Issue [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) (RFC: OCI-Compliant Container Registries for WASM Plugins) 创建于 6 月 11 日，目前状态为 blocked，涉及 WASM 插件存储和发现机制的重大架构变更。
- **早期遗留 Bug**：
  - Issue [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) (Add config option to disable LeakDetector) 创建于 3 月 27 日，至今仍有用户在反馈类似问题（[#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722)），表明该配置选项或底层逻辑重构仍未彻底落地。
  - Issue [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) (Turn-level OTel trace correlation) 创建于 5 月 13 日，可观测性的重要增强功能仍在推进中。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-05)

## 1. 今日活动概览
过去 24 小时内，PicoClaw 项目共有 4 条 Issues 和 7 条 Pull Requests 发生更新。其中 Issues 新开/活跃 3 条，关闭 1 条；PR 待合并 5 条，关闭 2 条。今日无新版本发布。代码层面的更新主要集中在依赖升级、国际化补充、LINE 通道错误处理优化以及 Agent 运行时配置覆盖等功能尝试，同时回滚了一个导致编译错误的测试用例 PR。

## 2. 项目进展
今日关闭了 2 个 PR，均与代码修复和回滚相关：
- **回滚测试用例**：PR [#3221](https://github.com/sipeed/picoclaw/pull/3221) 被关闭，该 PR 回滚了之前关于 sandbox fs Windows 路径处理的测试覆盖（#3158），原因是 `pkg/providers/openai_compat/provider.go` 中存在 log import 错误。
- **Agent 会话清理修复**：PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 被关闭，该 PR 旨在修复当消息路由到非默认 Agent 时，执行 `/clear` 命令误清除默认 Agent 会话的问题。

此外，有 5 个 PR 处于待合并状态。其中 4 个由 @chengzhichao-xydt 提交，涉及 Docker 基础镜像升级（[#3192](https://github.com/sipeed/picoclaw/pull/3192)）、`.gitignore` 清理（[#3191](https://github.com/sipeed/picoclaw/pull/3191)）、国际化键值同步（[#3190](https://github.com/sipeed/picoclaw/pull/3190)）以及 LINE 通道响应体关闭错误的显式忽略（[#3189](https://github.com/sipeed/picoclaw/pull/3189)）。另一个待合并 PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) 引入了对 Agent 特定运行时参数覆盖的支持。

## 3. 社区热点
今日讨论相对活跃的 Issues 主要集中在底层加密库替换和上下文记忆问题上：
- **替换底层加密库**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 获得了 2 个点赞和 4 条评论。用户提议使用 `vodozemac` 替代目前不再维护且存在安全隐患的 `libolm`，并将其标记为高优先级（priority: high）和 help wanted。
- **上下文记忆丢失**：Issue [#3150](https://github.com/sipeed/picoclaw/issues/3150) 有 4 条评论，用户反馈 AI 助手在对话中出现“失忆”（丢失上下文）现象，该 Issue 今日被标记为 stale 并关闭。

## 4. Bug 与稳定性
今日活跃/更新的 Bug 报告主要涉及移动端兼容性和加密通道配置：
- **Android 端服务启动失败**：Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) 报告在 Android 设备上无法启动服务，且无法在设置中更改路径，尽管已授予完整权限。目前已有 2 条评论，尚无明确的修复 PR。
- **Matrix 加密消息解析失败**：Issue [#3194](https://github.com/sipeed/picoclaw/issues/3194) 报告在运行 `picoclaw gateway` 时，收到加密消息但提示“crypto is not enabled”。该问题被标记为 stale，暂无关联的修复 PR。
- **Agent 会话清理逻辑错误**：如前所述，PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 试图修复多 Agent 路由下 `/clear` 命令的会话清理 Bug，但该 PR 已被关闭，问题是否彻底解决或已被其他提交覆盖需进一步确认。

## 5. 功能请求归类
- **Agent 运行时参数自定义**：PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) 提出支持 Agent 级别的运行时配置覆盖，允许在 `agents.list` 中为特定 Agent 定义 `max_tokens`、摘要阈值（summarization thresholds）和分割标记（split_on_marker），以满足更细粒度的 Agent 行为控制需求。
- **加密库现代化**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 请求将加密依赖从 `libolm` 迁移至官方推荐的 `vodozemac`，并建议在编译时使 `libolm` 变为可选项。

## 6. 用户反馈摘要
- **痛点**：Android 用户反馈应用权限充足但服务依然无法启动，且设置界面的路径修改功能失效（[#3182](https://github.com/sipeed/picoclaw/issues/3182)），影响了移动端部署体验。
- **使用场景**：用户在配置 Matrix 通道并尝试处理端到端加密（E2EE）消息时，遇到了加密模块未正确启用的阻碍（[#3194](https://github.com/sipeed/picoclaw/issues/3194)），表明 Matrix 加密频道的配置流程或默认行为可能存在文档缺失或逻辑缺陷。
- **满意度/不满意**：用户对 AI 对话过程中的上下文丢失（“失忆”）表示不满（[#3150](https://github.com/sipeed/picoclaw/issues/3150)），这直接影响了作为个人 AI 助手的核心对话体验。

## 7. 待处理积压
以下 Issue 和 PR 被标记为 `stale`（陈旧）或长期处于 Open 状态，建议维护者关注：
- **高优先级特性积压**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 涉及底层安全与依赖维护（替换 `libolm`），被标记为 `priority: high` 和 `help wanted`，但自 6 月 9 日创建以来仍处于 Open 状态。
- **多个陈旧的维护性 PR**：由 @chengzhichao-xydt 提交的 4 个 PR（[#3189](https://github.com/sipeed/picoclaw/pull/3189), [#3190](https://github.com/sipeed/picoclaw/pull/3190), [#3191](https://github.com/sipeed/picoclaw/pull/3191), [#3192](https://github.com/sipeed/picoclaw/pull/3192)）均被标记为 `stale`，涉及国际化、Docker 镜像升级和代码清理，建议尽快 Review 并合并或关闭。
- **陈旧 Bug**：Issue [#3194](https://github.com/sipeed/picoclaw/issues/3194)（Matrix 加密报错）被标记为 `stale`，需确认是否为环境配置问题或确实存在代码缺陷。

</details>