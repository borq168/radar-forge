# OpenClaw 生态日报 2026-07-30

> Issues: 500 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-07-30 00:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报（2026-07-30）

## 1. 今日活动概览
过去24小时内，OpenClaw 仓库共收到 **500 条 Issue 更新**（新开/活跃 438 条，关闭 62 条）和 **500 条 PR 更新**（待合并 409 条，已合并/关闭 91 条）。未发布新版本（Release 为 0）。整体来看，社区讨论高度集中在 Codex 集成、会话状态丢失、OAuth 认证稳定性、以及各类渠道（Telegram、Discord、QQ 等）的消息投递可靠性问题上，同时有大量修复性 PR 处于待合并状态。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展（今日已关闭的重要 PR）
从已公开的关闭记录中可见至少两个修复被合并或关闭：
- **#116025** fix(doctor): fail closed on unknown channel schema for groupAllowFrom migration
  修复了 `doctor` 命令在升级（beta.4 → beta.5）时因未知渠道 schema 导致迁移失败的问题，改为 fail-closed 策略，避免静默破坏配置。
  [链接](https://github.com/openclaw/openclaw/pull/116025)
- **#116137** fix: avoid Swift contention on hosted release runs
  修复了 macOS Swift 测试在 GitHub Actions 托管运行器上因并行执行竞争导致的 CI 重复失败问题。
  [链接](https://github.com/openclaw/openclaw/pull/116137)

此外，今日仍有大量高优先级 PR 等待合并，涉及会话持久化、渠道路由修复、UI 响应性、内存压缩、安全头清理等（详见后文）。

## 4. 社区热点（讨论最活跃的 Issues）
- **#91009** Codex PreToolUse native hook relay spawns CPU-bound processes and stalls gateway RPC（18 评论）
  用户报告 Codex 集成在调用工具时会产生大量短命的 `openclaw-hooks` 进程，单个进程 CPU 占用超过 100%，导致网关 RPC 阻塞。
  [链接](https://github.com/openclaw/openclaw/issues/91009)
- **#86996** Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts（15 评论）
  启用 Active Memory 并使用 Codex 后端时，Telegram 直接消息出现严重延迟、钩子超时、启动中断和网关事件循环停顿。
  [链接](https://github.com/openclaw/openclaw/issues/86996)
- **#39476** A2A sessions_send: target agent can call sessions_send back, causing duplicate messages（13 评论）
  代理间调用 `sessions_send` 可能导致目标代理反向调用，产生重复消息，属于长存未决的会话状态问题。
  [链接](https://github.com/openclaw/openclaw/issues/39476)
- **#84516** Codex app-server: long agent replies silently truncated at ~1000–1100 chars（11 评论）
  Codex 模型在无头调用时静默截断回复（约 1000–1100 字符），`aborted` 为 false 且无错误信息，严重影响可用性。
  [链接](https://github.com/openclaw/openclaw/issues/84516)
- **#112423** Large SQLite transcript cleanup blocks the gateway event loop（9 评论）
  归档大型 SQLite 会话记录时，全量读取、压缩、文件 I/O 均在网关线程中执行，导致事件循环卡顿。
  [链接](https://github.com/openclaw/openclaw/issues/112423)

这些热点反映出社区对 **Codex/Copilot 生态的稳定性、会话一致性、性能回退** 的强烈关注。

## 5. Bug 与稳定性（按严重程度排列）
### P0 / 高影响
- **#84882** [data-loss] memory-core Dreaming 的“normalized recall artifacts”步骤会静默删除每日记忆文件（`memory/YYYY-MM-DD.md`）。
  [链接](https://github.com/openclaw/openclaw/issues/84882)
- **#109009** [PR open] 修复共享频道会话（群组）错误注入 MEMORY.md 的隐私问题（P0，已有 PR）。
  [链接](https://github.com/openclaw/openclaw/pull/109009)
- **#116128** [PR ready] 修复 `apply_patch` 在上下文行上重写字节导致静默数据损坏（P0，已有 PR）。
  [链接](https://github.com/openclaw/openclaw/pull/116128)

### P1 / 严重（部分）
- **#91009** 前述 Codex hook 进程 CPU 爆炸（已有关联 PR）。
- **#86215** Codex OAuth 刷新失败会使代理僵死数小时，无告警、无主动轮换（无公开 fix PR）。
  [链接](https://github.com/openclaw/openclaw/issues/86215)
- **#89278** Codex OAuth 刷新成功但 cron/heartbeat 因 10s 认证超时失败（回归）。
  [链接](https://github.com/openclaw/openclaw/issues/89278)
- **#92433** 子代理完成通知在父代理运行结束前被吞没，导致完成事件丢失（无 fix PR）。
  [链接](https://github.com/openclaw/openclaw/issues/92433)
- **#89095** 子代理超时后父会话未收到任何通知（无 fix PR）。
  [链接](https://github.com/openclaw/openclaw/issues/89095)
- **#88707** 升级 2026.5.28 后 Bedrock 提供商注册失效，所有调用失败（`No API provider registered`），回归，已有大量用户受影响。
  [链接](https://github.com/openclaw/openclaw/issues/88707)
- **#97178** [已关闭] 修复 `openclaw gateway install` 重复注册 LaunchAgent 导致重启风暴的问题。
  [链接](https://github.com/openclaw/openclaw/issues/97178)（已关闭）
- **#115391** [PR open] 修复运行时路由绑定将对话路由至错误代理的问题（P1 PR）。
  [链接](https://github.com/openclaw/openclaw/pull/115391)

### 回归问题
- **#105528** Windows 上 `exec`/`read` 工具在 v2026.6.x 中静默返回空输出。
- **#88955** QQ Bot WebSocket 重连后投递适配器未重新注册，导致“Outbound not configured”错误。
- **#87327** 隔离代理在 `runtime-plugins` 阶段停滞（2026.5.22 版起）。
- **#88079** WebChat 中 Kimi Code 和 DeepSeek Reasoner 的 reasoning_content 流不工作（仅 MiniMax 正常）。

多个回归问题集中在 2026.5.x 系列版本，提示近期的版本升级引入了会话、认证以及渠道投递方面的稳定性衰退。

## 6. 功能请求归类
- **渠道能力增强**
  - **#88154** 请求 Slack 模态框支持，实现结构化交互工作流。
  - **#81061** 请求 `before_route_inbound_message` 钩子，用于渠道桥接/代理等预路由拦截。
  - **#96278** [PR] 为 Telegram 语音消息发送 typing 提示，改善体验。
- **可观测性与成本管理**
  - **#13219** 请求 per-model 用量日志，支持成本追踪。
  - **#82548** 请求 AI 安全与质量可观测性事件（含提示注入检测、引用质量等）。
  - **#85461** 捕获图像生成提供商的使用元数据。
- **运行时与自动化**
  - **#43454** [已关闭] 请求网关生命周期钩子（`onSubagentComplete` 等），已关闭但可能重新讨论。
  - **#8299** 请求配置选项以抑制子代理通告。
  - **#87660** 请求生命周期感知的 MEMORY.md 精炼，避免自动删除人工锚点。
- **模型发现与选择**
  - **#10687** 请求完全动态模型发现（OpenRouter 等），解决静态目录模型滞后问题。
  - **#109017** 报告 Anthropic 新模型不出现，且模型列表对手动添加模型崩溃。
- **UI/UX 改进**
  - **#116078** [PR] 模型设置后引导可选频道配置，改善首次使用体验。
  - **#116104** [PR] 修复移动端 Send/Stop 按钮无响应问题。
  - **#96265** [PR] 添加交互式启动菜单（thin wrapper）。

## 7. 用户反馈摘要
- **Codex 深度集成用户普遍不满**：CPU 爆破、回复截断、OAuth 认证僵死、子代理工具丢失等问题交织，导致生产环境不可靠。多位用户明确表示必须回退版本或关闭 Codex 原生功能才能恢复正常使用。
- **内存与梦境系统**：用户反馈 `memory-core` 的梦境压缩会静默删除人工编写的记忆条目（#84882），甚至破坏 `MEMORY.md` 格式（#116057 有 PR 修复），信任度下降。
- **渠道消息丢失**：多个报告指出 Telegram、Discord、WhatsApp 等渠道中，代理回复已生成但未送达（如 #92186 自动模式下的回复栅栏导致仅最后一条消息送达），严重影响多用户协作场景。
- **升级灾难**：#79375 和 #97178 都描述了升级导致的双服务冲突或重复注册，用户呼吁更稳定的安装/升级路径和灰度发布标签（#73537 请求生产稳定性标签）。
- **Windows 用户困境**：`exec`/`read` 工具静默失败（#105528），导致 Windows 上的自动化工作流几乎不可用，社区情绪沮丧。
- **模型覆盖与回退缺失**：用户发现 Anthropic 拒绝/OpenAI content_filter 无法触发模型回退链（#98976），且 Codex OAuth 失效后无积极的提供商切换，普遍认为故障恢复策略不足。

## 8. 待处理积压（长期未响应的重要 Issue/PR）
- **#39476** A2A 重复消息问题（P1，创建于 2026-03-08，至今 4 个月，标记 stale）。
  [链接](https://github.com/openclaw/openclaw/issues/39476)
- **#80040** 级联故障：OAuth 失效 → 空占位回复 → 提供商切换导致重复工具执行（P2，创建于 2026-05-10，stale）。
  [链接](https://github.com/openclaw/openclaw/issues/80040)
- **#52526** `agent --json` 返回 hook 前文本而非最终输出（P2，创建于 2026-03-22，stale）。
  [链接](https://github.com/openclaw/openclaw/issues/52526)
- **#87665** Discord 子代理任务默认 `done_only` 导致频道卡在 typing 指示器（已关闭，但本质问题可能仍存在）。
  [链接](https://github.com/openclaw/openclaw/issues/87665)
- **#82572** [PR] 持久化 followup 队列以防网关重启丢失（XL PR，自 2026-05-16 起待审查）。
  [链接](https://github.com/openclaw/openclaw/pull/82572)
- **#96662** [PR] 修复 Codex 原生子代理任务更新不显示（自 2026-06-25 起）。
  [链接](https://github.com/openclaw/openclaw/pull/96662)

这些积压项大多影响核心稳定性和用户体验，建议维护者优先关注，尤其是那些已有关联 PR 但长期未合并的条目。

---

## 横向生态对比

# 开源 AI 智能体项目横向对比日报（2026-07-30）

## 1. 今日横向概览
OpenClaw 社区今日涌入共 1000 条 Issue 与 PR 更新，讨论焦点高度集中于 Codex 集成稳定性、会话状态丢失及多渠道消息投递的可靠性危机，同时积压了大量高优先级修复 PR。youdao lobster 则以内部开发者的 15 项 PR 更新为主，全部围绕 cowork 协作模块的体验打磨与稳定性修复，无公开 Issue 或社区讨论。两项目均未发布新版本，但 OpenClaw 呈现出明显的用户信任波动与大量待处理积压，而 lobster 表现为封闭式的产品迭代。

## 2. 各项目活跃度对比
| 项目 | Issue 更新数 | PR 更新数 | Release | 事实性备注 |
|------|--------------|-----------|---------|-------------|
| OpenClaw | 500（新开/活跃 438，关闭 62） | 500（待合并 409，已合并/关闭 91） | 0 | 无新版本；P0 数据丢失、隐私泄露、CPU 爆炸等严重问题集中暴露；大量修复性 PR 积压 |
| youdao lobster | 0 | 15（开放 2，关闭/合并 13） | 0 | 无新版本；全部更新来自内部开发，聚焦 cowork 模块修复与增强；社区无互动 |

## 3. OpenClaw 与同类对照
- **活动量差异**：OpenClaw 今日的 Issue/PR 更新量是 lobster 的 66 倍，体现出庞大的社区参与规模和问题反馈密度；lobster 则完全由内部开发驱动，无外部用户声音。
- **技术重点差异**：OpenClaw 的技术讨论覆盖 AI 代理运行时（Codex 集成、Hook 进程、网关事件循环）、多渠道消息投递（Telegram、Discord、QQ 等）、认证与会话生命周期等复杂分布式系统问题；lobster 的技术工作集中在桌面端协作 UI（侧聊输入、消息闪烁、滚动位置、弹窗层级）与认证回调的局部修复。
- **社区讨论面差异**：OpenClaw 出现大量用户对生产可用性的直接抱怨，并围绕功能请求（模型动态发现、可观测性、生命周期钩子）展开讨论；lobster 今日无任何用户反馈或功能请求，社区参与度极低。

## 4. 共同出现的技术方向
今日数据中，两个项目在以下技术方向出现交集：

- **认证与授权稳定性**
  OpenClaw：Codex OAuth 刷新失败导致代理僵死数小时（#86215），OAuth 刷新成功但心跳超时失败（#89278）。
  youdao lobster：修复登录重试时本地回调丢失的问题（PR #2360），确保重复与并发登录下的认证可靠性。
  两者均涉及认证流程的健壮性修复，反映出 AI 应用中第三方服务授权与令牌管理的共通挑战。

- **会话与消息同步可靠性**
  OpenClaw：A2A 代理间会话重复消息（#39476），渠道中已生成回复未送达（#92186），子代理完成通知丢失（#92433）。
  youdao lobster：按会话 ID 限定刷新事件防止滚动跳动（PR #2364），修复 IM 周期性消息闪烁（PR #2363），侧聊输入累积摘录处理（PR #2406）。
  两者都在处理会话状态一致性、消息投递/显示的正确性与时延问题，只是 OpenClaw 偏向服务端多代理通信，lobster 偏向客户端 UI 与协同。

> 注：以上交集基于今日数据，不代表两项目长期技术路线重合。

## 5. 差异化定位分析
- **功能侧重**
  OpenClaw：通用 AI 智能体运行时框架，支持多种 LLM 后端（包括 Codex）、多渠道接入（社交 IM、WebChat 等）、插件系统、记忆与梦境、代理间通信（A2A），侧重可扩展性和开发者自定义能力。
  youdao lobster：面向终端用户的 AI 协作桌面应用，内建 cowork 模块、侧聊、IM 集成、邮箱诊断等，功能聚焦于团队协作场景下的 AI 辅助交互，产品化程度高但可扩展性未在今日动态中体现。

- **目标用户**
  OpenClaw：开发者、自建 AI 助手的技术用户，需自行部署、配置渠道和模型，承担运维成本。
  youdao lobster：直接面向团队或个人的桌面软件用户，提供开箱即用的 AI 协作功能，无需深入技术细节。

- **技术架构**
  OpenClaw：分布式网关 + 代理运行时，涉及多进程 Hook 执行、SQLite 会话持久化、OAuth 令牌管理、多渠道适配器等，架构复杂度高，容易受并发与资源竞争影响。
  youdao lobster：Electron 桌面应用，本地状态管理 + 远程服务协作，UI 层与认证、更新、缓存等模块交互，架构相对集中，问题多表现在 UI 响应与本地逻辑上。

## 6. 社区活跃度记录
- **高活跃度 / 无版本发布**
  OpenClaw：单日 Issue 与 PR 更新均达 500，社区讨论热烈，但大量 Bug 报告和待合并 PR 显示当下处于问题消化与修复阶段，尚未形成稳定版本输出。

- **低活跃度 / 内部开发驱动**
  youdao lobster：单日仅 15 个 PR 更新，无外部 Issue 或评论，连续多个 PR 无社区互动，说明项目维护以内部团队合作为主，外部生态尚未形成。

> 活跃度仅基于今日数据，不做长期成熟度推断。

## 7. 有证据支撑的观察
1. **OpenClaw 面临严重的生产稳定性危机**
   今日出现 P0 级数据丢失（记忆文件静默删除）、隐私泄露（共享频道会话注入 MEMORY.md）、CPU 爆破（Codex Hook 进程）、回复截断等多项高影响问题，且多个关联 PR 已准备却未合并，导致用户明确表示必须回退版本或关闭功能才能使用。这反映出当前主干版本在 Codex 集成与核心运行时上的可靠性不足。

2. **youdao lobster 今天的迭代完全围绕产品体验“打磨”**
   今日关闭/合并的 13 个 PR 全部涉及侧聊输入优化、消息闪烁修复、滚动位置保持、弹窗层级、标题栏对齐、更新频率等细节，且 Run Safety 功能因设计缺陷被回滚，显示该产品正处于精细化的 UI/UX 修复阶段，而非功能扩展期。

3. **两个项目都出现“有修复 PR 但未合并”的积压现象**
   OpenClaw 有大量 P0/P1 修复 PR（如 #109009、#116128、#115391）等待合并，lobster 的定时任务首次推送修复（PR #1232）已停滞近 4 个月。这提示双方在代码审查与发布节奏上均存在瓶颈，但 OpenClaw 的积压已直接拖累社区信任。

4. **OpenClaw 的社区反馈包含强烈的故障恢复与可观测性诉求**
   多起 Issue 要求模型回退链、提供商切换、per-model 用量日志、安全质量事件（#13219、#82548、#98976），说明用户不仅需要修复单个 Bug，更期望系统具备自愈与透明监控能力。相比之下，lobster 今日无任何此类诉求，用户声音完全缺失。

5. **今日暂无明确跨项目信号**
   除认证与会话可靠性的共通修复外，两个项目在技术栈、用户场景和社区结构上无直接关联，今日未出现同一生态趋势或技术方案的交叉印证。

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# youdao lobster 项目日报 | 2026 年 7 月 30 日

## 1. 今日活动概览
过去 24 小时，项目共有 15 个 Pull Request 发生更新，其中 2 个保持开放，13 个被关闭或合并。没有新 Issue 提交，也没有新版本发布。主要工作集中在 **cowork 协作模块**的多项修复与增强，包括侧聊输入优化、选中文本标签功能、导出弹窗层级修正、会话刷新滚动跳跃修复、IM 消息闪烁修复等。此外，认证回调、窗口标题栏样式、自动更新检查频率等也得到调整，并有一次针对 Run Safety 功能的回滚。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日关闭或合并的 PR 推进了以下功能与修复：

- **侧聊体验增强**
  - [PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405) 为侧聊添加选中文本标签，支持直接发送与后续编辑，并增加状态防护与测试。
  - [PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406) 改进侧聊输入处理：面板打开期间累积选中文本摘录，移除产品级问题长度限制，同时保留上下文边界与传输安全检查。

- **协作模块稳定性修复**
  - [PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376) 将导出选项弹窗挂载到 body 层，避免层叠上下文冲突。
  - [PR #2364](https://github.com/netease-youdao/LobsterAI/pull/2364) 按会话 ID 限定刷新事件，保留已加载消息历史，防止滚动位置跳动。
  - [PR #2363](https://github.com/netease-youdao/LobsterAI/pull/2363) 修复周期性 IM 消息闪烁，在协调时比较匹配历史窗口，并在网关尾部不匹配时保留旧消息。
  - [PR #2346](https://github.com/netease-youdao/LobsterAI/pull/2346) 邮箱诊断功能改为在新聊天中打开，防止旧会话或 IM 会话覆盖。

- **认证与窗口 UI**
  - [PR #2360](https://github.com/netease-youdao/LobsterAI/pull/2360) 修复登录重试时本地回调丢失的问题，在重复与并发登录时复用活动回调服务器，并增加诊断与回归测试。
  - [PR #2355](https://github.com/netease-youdao/LobsterAI/pull/2355) 对齐 Windows 标题栏按钮悬停色，使其与侧边栏控件主题色一致。

- **更新与配置调整**
  - [PR #2347](https://github.com/netease-youdao/LobsterAI/pull/2347) 将自动更新检查间隔从 12 小时缩短至 2 小时。

- **重构与回滚**
  - [PR #2404](https://github.com/netease-youdao/LobsterAI/pull/2404) 标记为针对 Kimi K3 自动兼容性的重构（无详细摘要）。
  - [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) 回滚 openclaw 中 Run Safety 合约的「无进展令牌燃烧」门控，撤销了 PR #2400 引入的功能，原因是在评审中发现发布阻塞问题（包括 receipt 身份键控、假成功后续处理、压缩 runId 处理、字节核算不匹配等），并同步更新了 DeepSeek 缓存探测规范。

- **长期问题的关闭**
  - [PR #1322](https://github.com/netease-youdao/LobsterAI/pull/1322) 被关闭，该 PR 修复了 cowork 内存判官缓存中假 LRU 驱逐问题，使缓存命中时将条目移到最近位置，实现真正的 LRU 策略。

## 4. 社区热点
本日所有 PR 均无公开评论，未出现活跃讨论或用户集中互动。

## 5. Bug 与稳定性
- **Run Safety 功能回滚（已修复/回滚）**
  [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) 因存在多个发布阻塞问题而被回滚，消除了 token 核算、消息处理与状态一致性方面的隐患。

- **定时任务首次执行结果未推送（修复仍开放）**
  [PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232) 修复了定时任务首次运行时 UI 收不到 `runUpdate` 通知的问题，根因是 `previousRunAtMs` 初始为 0 导致条件判断失败。该 PR 标记为 stale，自 2026‑04‑01 起未合并，仍处于开放状态。

- **缓存驱逐非真正 LRU（已修复）**
  [PR #1322](https://github.com/netease-youdao/LobsterAI/pull/1322) 已关闭，修复了 LLM 内存判官缓存中实际未按 LRU 策略驱逐的问题。

- **其他稳定性修复**
  已通过 [PR #2364](https://github.com/netease-youdao/LobsterAI/pull/2364) 修复会话刷新滚动跳变，[PR #2363](https://github.com/netease-youdao/LobsterAI/pull/2363) 修复 IM 消息闪烁，[PR #2360](https://github.com/netease-youdao/LobsterAI/pull/2360) 修复登录重试回调丢失，均属于已修复的问题。

## 6. 功能请求归类
本日无用户主动提交的功能请求 Issue。开发者侧通过 [PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405) 新增了“选中文本显示为可移除上下文标签”的侧聊功能，属于主动功能增强。

## 7. 用户反馈摘要
由于所有 PR 均无用户评论，无可用反馈信息。

## 8. 待处理积压
以下长期未关闭的 PR 值得维护者关注：

- **[PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232)**：修复定时任务首次执行不推送结果的问题，已创建近 4 个月，标记为 stale，仍处于开放状态，建议确认是否合并或关闭。
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**：dependabot 自动提交的 electron 依赖更新（electron 40.2.1 → 43.2.0），自 2026‑04‑02 起开放，未合并，需评估是否升级或关闭。

</details>