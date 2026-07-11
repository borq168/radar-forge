# OpenClaw 生态日报 2026-07-11

> Issues: 419 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-07-11 00:23 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026‑07‑11

## 1. 今日活动概览
过去 24 小时内，项目共收到 **419 条 Issue 更新**（新开/活跃 227 条，关闭 192 条）以及 **500 条 PR 更新**（待合并 339 条，已合并/关闭 161 条）。无新版本发布。社区讨论集中在工具输出渲染异常、嵌入式提示缓存边界断裂、网关内存泄漏等长期稳定性问题上，同时有多项修复 PR 被提交，安全与消息传递可靠性是今日焦点。

## 2. 版本发布
未发布新版本。

## 3. 项目进展
今日共有 192 个 Issue 与 161 个 PR 被关闭/合并。从已关闭 Issue 可见下列修复已落地：

- **Discord 插件断连不重连** #99681：修复了 WebSocket 1006 关闭后无法自动恢复的问题，避免影响进行中的会话。
- **安全策略优先级反转** #91283：更正 `minSecurity` 函数中 `full` 与 `allowlist` 的等级顺序，防止会话权限被错误压制。
- **并发审批导致 allowlist 丢失** #44749：解决了 `allow-always` 审批并发写入时的最后写入胜出竞争条件。
- **沙箱僵尸进程累积** #68691：修复了 PPID=1 的僵尸进程不被回收、累积至 `pids.max` 的风险。
- **Telegram 大文件死锁** #27984：修复了 5‑20MB 文件导致聊天永久锁定、需重启网关的问题。
- **控制 UI 的 CSP 与 Zod 冲突** #78362：解决了 `eval` 违规及 401 配置拉取失败问题。
- **预压缩内存刷新安全需求** #63829：为每代理配置独立 memory‑wiki 保险库的增强请求已关闭（需求落地或转为其他方案）。

此外，多个修复 PR 处于待合并状态，详见后续章节。

## 4. 社区热点
### 最活跃 Issues（按评论数）
1. **#99241 ‑ Tool outputs 被误渲染为图片附件导致 agent 无法读取**
   `🦐 platinum hermit` · 20 评论 · 2 👍
   在长运行、ANSI 密集的工具工作流中，stdout/stderr 会折叠为 `(see attached image)` 占位符，agent 丧失对关键证据的可读性。社区强烈要求修复。

2. **#102175 ‑ 嵌入式提示缓存跨策略与 Responses 边界断裂**
   `🦞 diamond lobster` · 16 评论 · 1 👍
   长生存嵌入式会话在跨房间事件、发送者策略变更、队列重建等场景中丢失提示缓存连续性，导致成本上升和响应延迟。

3. **#91588 ‑ 网关内存泄漏（350 MB→15.5 GB）致反复 OOM**
   `🐚 platinum hermit` · 15 评论 · 1 👍
   RSS 在数天内从 350 MB 增长至 15.5 GB，进程被 OOM killer 终止，引起持续重启循环。用户强烈要求内存稳定性修复。

4. **#12602 ‑ Slack Block Kit 支持**
   `🌊 off-meta tidepool` · 14 评论 · 0 👍
   希望 agent 消息支持交互式 Block Kit，而非纯文本加 markdown。

5. **#63829 ‑ 每代理独立 memory‑wiki 配置**（已关闭）
   `🦞 diamond lobster` · 13 评论 · 10 👍
   需求已解决或转为其他方式，热议中收到大量赞同。

### 高关注 PR
以下 PR 虽评论数不详，但标签显示其重要性：

- **#96083** `gateway` 重启恢复持久化重试预算（`🦪 silver shellfish` · 待验证）
  解决重启恢复时无条件重复尝试致无限重试的问题。
- **#102189** `gateway` 稳定跨边界提示缓存（`🦐 gold shrimp` · 等待作者）
  关联 #102175，意图修复缓存断裂。
- **#103534** `gateway` `sessions.patch` 跨插件所有权检查（`🦪 silver shellfish` · 待验证）
  修复插件可越权归档他人会话的安全边界。
- **#103562** `discord` 修复回复会话初始化冲突导致的静默消息丢失（`🦪 silver shellfish` · 待验证）
  目标消除 Discord 入站消息在会话冲突时被无声丢弃的问题。

## 5. Bug 与稳定性
### 严重/紧急 (P0)
- **#91588** 网关内存泄漏至 15.5 GB 致 OOM
  标签 `clawsweeper:no-new-fix-pr` 表明尚无合并的修复 PR，但相关讨论持续活跃。
- **#101763** 托管版 Molty 模型 ID 错误（`claude-opus-4.8` 应为 `4-8`）
  导致所有代理回复失败。标签 `P0`，无修复 PR。

### 高优先级 (P1)
- **#84569** WhatsApp 长模型调用后会话停滞，回复不送达
  已有修复 PR（`clawsweeper:linked-pr-open`）。
- **#83959** Codex 应用服务器启动重试耗尽
  有修复 PR 待合并。
- **#85714** LLM 忘记调用投递工具致 agent 最后信息滞留（**已关闭**）
- **#87109** 网关空闲堆增长至 1073 MB+，cron 任务静默失败
  标签 `stale`，尚无 fix PR。
- **#40982** CLI 3 分钟看门狗上限过大导致长时间挂起
  需移除或提高上限，有修复 PR 待合并。
- **#90684** 非 Discord 渠道未执行文本清洗，泄露内部工具标签
  `stale`，无修复 PR。

### 中优先级 (P2)
- **#70903** 提供商冷却文件在计费恢复后仍锁定用户数小时
  `stale`，已有修复 PR 待合并。
- **#86217** iOS 后台位置声明可能缺失 `UIBackgroundModes=location`
  安全相关，待进一步讨论。
- **#99681** Discord 1006 断连不重连（**已关闭**）
- **#91283** `minSecurity` 逻辑错误（**已关闭**）
- **#68691** 沙箱僵尸进程（**已关闭**）

## 6. 功能请求归类
社区今日集中提出的增强方向：

- **渠道交互增强**
  - #12602 Slack Block Kit 支持
  - #7476 WhatsApp 贴纸发送
  - #8355 语音通话流式 TTS 管道（句子级合成）
  - #7406 Telegram 话题名人类可读显示
  - #8508 可配置/动态确认表情符号
  - #8913 按渠道定制思考块格式

- **代理与工作流控制**
  - #6890 代理可配置 Ralph Loop 迭代上限
  - #9912 `maxTurns`/`maxToolCalls` 约束
  - #10467 多通道子代理并发（`sessions_spawn` lane 支持）
  - #9797 `queue_status` 工具使代理感知队列负载
  - #8299 可配置抑制子代理公告
  - #7524 `groupScope` 选项合并群聊会话

- **安全与沙箱**
  - #7722 文件系统访问沙箱配置验证与拒绝路径
  - #90354 预压缩内存刷新附加/验证保护
  - #8287 节点注册代理工具扩展能力

- **可观测性与体验**
  - #9637 TUI 可访问性：禁用 emoji/Unicode
  - #9409 上下文溢出错误信息提供具体数值
  - #8812 工具输出中的链接自动转可点击
  - #7006 暴露 OpenRouter 实际使用模型与成本
  - #7379 `/usage` 底部显示高级请求占比

- **后台与基础设施**
  - #9865 批量 API 支持（降低后台任务成本）
  - #9155 `cron.defaults.delivery` 默认投递配置
  - #8673 OAuth 令牌刷新添加重试逻辑
  - #10354 `message` 工具 `channel` 参数添加枚举与描述

已有关联 PR 的功能推进：
- **#103811** Google Meet 插件保留完整字幕记录（实现 #103387）。
- **#103995** Slack 评论独立于工具进度显示。
- **#97828** Telegram 推理预览清理逻辑修复。

## 7. 用户反馈摘要
从高频评论中提炼的真实痛点：

- **会话与消息丢失**：用户多次遭遇工具输出转为不可读图片、WathsApp 消息因会话停滞丢失、Discord 回复静默丢弃、agent 最后消息因忘记投递工具而消失等问题，普遍对消息传递的确定性产生担忧。
- **内存与 OOM 崩溃**：多位用户报告网关长期内存泄漏至十几 GB，导致 OOM 重启甚至 cron 静默失败，严重影响托管与生产环境。
- **安全与权限混乱**：`minSecurity` 反转、并发审批丢 allowlist、插件越权访问会话等安全问题反映出策略执行层的漏洞，社区对审计重视。
- **成本与可观测性**：用户希望感知模型路由实际成本、提示缓存断裂导致额外 token 支出、提供更清晰的上下文溢出诊断信息。
- **集成体验粗糙**：Telegram 大文件死锁、Feishu 分页缺失、QQBot 令牌请求无超时等问题暴露出渠道适配仍有许多硬边界。
- **无障碍与多平台**：屏幕阅读器用户因 emoji 和特殊符号感到困扰，WSL/Windows 测试偶发失败影响开发者体验。

## 8. 待处理积压
下列高优或安全相关 Issue 长期未响应，建议维护者关注：

- **#87109** macOS 空闲堆增长至 1 GB+ 致 cron 静默失败（P1 · stale）
- **#90684** 非 Discord 渠道未清洗工具标签导致信息泄露（P1 · stale）
- **#70903** 提供商冷却文件持久化导致用户账户锁死（P2 · stale · 已有 PR 待合并）
- **#40982** CLI 3 分钟看门狗上限不合理（P1 · 有 PR 待合并）
- **#86217** iOS 后台位置声明缺失（安全相关 · P2）
- **#93928** Feishu 驱动分页缺失报 File not found（P2 · 已有修复 PR 待合并）

---

*注：本日报基于 UTC 时间 2026-07-11 数据窗口生成，链接均为 GitHub 实况。部分 Issue 已关闭，其状态变化可能在本周期外，此处反映截至当前的最新闭合信息。*

---

## 横向生态对比

# 2026-07-11 横向对比分析报告

## 1. 今日横向概览
OpenClaw 今日议题与 PR 处理量居高不下，大量集中在网关内存泄漏、工具输出渲染异常、提示缓存断裂及安全策略修复等生产环境的长期稳定性问题，同时有十余项修复 PR 处于待合并状态。LobsterAI 活动规模相对较小，主要推进了协同排队修复、定时任务路由修正与 Windows UI 兼容，用户侧反馈多 Agent 配置意外共享的回归缺陷。两项目均未发布新版本，社区焦点均涉及多 Agent 场景下的消息可靠性与会话状态一致性。

## 2. 各项目活跃度对比

| 项目 | 新置/活跃 Issue | 关闭 Issue | 待合并 PR | 已合并/关闭 PR | 新版本 | 事实性备注 |
|------|----------------|------------|-----------|----------------|--------|------------|
| OpenClaw | 227 | 192 | 339 | 161 | 无 | 含 P0 内存泄漏与模型 ID 错误，多个安全边界修复已合，大量 PR 积压 |
| LobsterAI | 2 | 1 | 7 | 10 | 无 | 重点修复协同流程与定时推送，发现多 Agent 配置共享 Bug，无严重安全类问题 |

**说明**：上述为今日报告统计口径，OpenClaw 总 Issue 更新 419 条、PR 更新 500 条，远超 LobsterAI 的约 20 条 PR 与 3 条 Issue，活跃量级相差约 20 倍。

## 3. OpenClaw 与同类对照
基于今日数据，OpenClaw 的活动量、技术纵深与社区讨论面均显著高于 LobsterAI。OpenClaw 的讨论集中在分布式网关的长期内存稳定性、跨渠道消息清洗、沙箱安全、提示缓存等后端基础设施层面；LobsterAI 则聚焦于桌面客户端的协同 UI 流程与定时推送的工程实现。OpenClaw 社区对 P0/P1 级内存泄漏、会话安全性表现出高度关注并形成多个高评论议题，LobsterAI 议题较为集中，以具体功能修复和用户流程回归为主。

## 4. 共同出现的技术方向
- **多代理/协同场景下的状态隔离与消息可靠投递**
  OpenClaw 出现嵌入式提示缓存跨边界断裂（#102175）、工具输出被误渲染导致信息丢失（#99241）、WhatsApp 会话停滞（#84569）以及 Discord 回复静默丢弃（#103562）；LobsterAI 今日合并的多个 PR 均在修复协同排队、推送投递结果误报，另有 Bug 报告多 Agent 的 USER.md 意外相互覆盖（#2293）。两者均反映出多代理协同时的状态隔离缺陷和消息确定性投递的共性诉求。

- **定时与后台任务的准确性**
  OpenClaw 有 cron 任务因网关内存泄漏静默失败（#87109）及投递工具过期；LobsterAI 则修复了定时任务在企微/钉钉中的路由丢失、大小写处理与投递状态误报，并补充了“工作日”选项（待合并 PR）。两方面都围绕后台自动任务在复杂通道中的可靠执行展开。

## 5. 差异化定位分析
| 维度 | OpenClaw | LobsterAI |
|------|----------|------------|
| 功能侧重 | 多通道 AI 代理网关、沙箱执行、安全策略、提示缓存与成本控制 | 桌面 AI 助手客户端、协同工作流、IM 群聊定时推送、本地 UI 体验 |
| 目标用户 | 自托管/生产级开发者、需要高可靠通道集成的团队 | 个人用户及小团队，追求开箱即用的桌面协同与定时自动化 |
| 技术架构关键差异 | 重后端与网关，涉及 WebSocket 恢复、内存管理、OAuth、嵌入式缓存、per‑agent 隔离 | 前端与本地混合，关注窗口状态管理、构建兼容性、IM 连接器投递、本地索引重建 |

## 6. 社区活跃度记录
基于今日数量与发布情况，仅记录活跃度分层（不做成熟度评分）：
- **高活跃**：OpenClaw —— 单日 Issue/PR 更新合计近千条，多个议题评论超过 10 条，P0 问题在社区中被积极追踪。
- **中低活跃**：LobsterAI —— 单日 PR 操作 17 条、Issue 3 条，讨论集中于少数 Bug 与功能 PR，社区反馈直接且聚焦。
两项目今日均无 Release，均处于高迭代修复和功能补全阶段。

## 7. 有证据支撑的观察
1. **消息可靠性是多通道代理的共同痛点**
   OpenClaw 多条高优 Issue（#99241、#84569、#103562）和 LobsterAI 的协同投递修复、定时任务误报修正，均直接指向消息从生成到送达全链路的确定性不足，两侧均有实质修复行动。

2. **多 Agent 场景下配置与状态隔离仍存在缺陷**
   OpenClaw 出现并发审批策略穿透 (#44749)、安全策略反转 (#91283)、插件越权访问会话 (#103534)；LobsterAI 则暴露了多 Agent 的 “关于你” 配置被意外统一覆盖 (#2293)。双方都遇到多实体环境下的边界泄漏问题，且均有用户强烈要求隔离。

3. **内存与资源泄漏持续困扰长期运行服务**
   OpenClaw 的网关内存泄漏至 OOM (#91588) 和空闲堆增长致 cron 静默失败 (#87109) 已有大量讨论且尚未完全解决；LobsterAI 今日无类似报告，但历史修复涉及僵尸进程类问题（非今日），此项为 OpenClaw 单侧突出信号。

4. **社区对安全与策略透明度的重视度上升**
   OpenClaw 今日集中关闭了多项安全类问题，包括权限反转、并发丢失 allowlist、沙箱僵尸进程等；LobsterAI 虽未出现同级安全问题，但其定时目标路由修复涉及群组大小写、伪直聊隐藏等，显示对边界条件正确性的严格修正。

5. **开源助手生态均处于高频修复期，未进入版本发布节奏**
   两项目今日均无版本发布，活动以大量修复与功能 PR 的合并/提交为主，说明当前阶段重点在于打磨稳定性与补齐功能细节。

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# 2026-07-11 项目动态日报—— LobsterAI

## 1. 今日活动概览
过去24小时，LobsterAI 仓库未发布新版本；Issue 侧新增/活跃 2 条、关闭 1 条；Pull Request 侧合并/关闭 10 条、仍有 7 条待合并。主要开发工作集中在协同功能修复、定时任务路由修正、Windows 标题栏 UI 修正与构建兼容性改进，同时收到用户反馈多 Agent 下 USER.md 配置意外共享的 Bug。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭了 10 条 PR，其中重点修复与特性推进如下：

- **协同功能修复**
  - [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315) 修复协同排队 follow-up 协调器连接问题，支持跨会话与窗口最小化后继续处理排队任务。
  - [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) 确保仅提交用户选中的排队指令，增加回归测试与诊断日志，保护 FIFO 处理顺序。
  - [#2312](https://github.com/netease-youdao/LobsterAI/pull/2312) 修复 askuser 流程中窗口最小化导致状态丢失的缺陷。

- **定时任务与群聊推送**
  - [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) 重构 IM 群组定时任务路由，修复按 Bot 绑定 Agent 筛选目标、隐藏伪直聊条目，并迁移历史任务以保持原生投递目标与正确 Agent/账号。
  - [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314) 进一步补充兼容性：保留企微与钉钉群聊原始 ID 的大小写，修复钉钉连接器吞掉投递失败结果导致误报 `delivered=true` 的问题，并安全迁移已存为小写的定时目标。

- **渲染与界面**
  - [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) 修正 Windows 标题栏 logo 在侧边栏折叠并显示更新角标时的压缩问题，保持展开时的对齐及 macOS 行为。

- **内存索引与构建**
  - [#2311](https://github.com/netease-youdao/LobsterAI/pull/2311) 对所有 Agent 迁移过期的全文搜索索引，并在失败时安全重试，忽略孤立索引，提升知识库检索可靠性。
  - [#2309](https://github.com/netease-youdao/LobsterAI/pull/2309) 将空字节删除逻辑从 `String.replaceAll` 改为 ES2020 兼容的正则表达式，避免低版本运行时崩溃。

- **新功能**
  - [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) 新增文件夹上下文附件：支持将拖放/粘贴的本地文件夹作为可移除提示附件，并以路径上下文形式送入 OpenClaw 而非上传目录内容。

## 4. 社区热点
今日讨论最活跃的是 Bug 上报 Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)（评论 3 条）。
**核心诉求**：用户 @yepcn 创建多个 Agent 后，发现修改任一 Agent 的“关于你”内容或 USER.md 都会导致所有 Agent 的 USER.md 被同步覆盖；即使关闭软件后手动修改 workspace-* 下的对应文件，重启后仍会被 main agent 的 USER.md 统一替换。用户怀疑是近期更新引入的回归缺陷，并自行测试验证了覆盖规律，期待开发团队确认是否为 Bug 并提供修复。

## 5. Bug 与稳定性
- **严重/待处理**
  - [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 多 Agent 下 USER.md 意外共享覆盖。用户无法为不同 Agent 独立定制“关于你”描述，已提供详细复现步骤，暂无关联修复 PR。

- **已修复（今日合并）**
  - [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) + [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314)：定时任务在企微/钉钉群聊的场景下路由丢失、大小写问题与投递结果误报。
  - [#2312](https://github.com/netease-youdao/LobsterAI/pull/2312)：协作流程中 askuser 环节因窗口最小化触发状态丢失。
  - [#2309](https://github.com/netease-youdao/LobsterAI/pull/2309)：构建输出中空字节处理在部分 Node 版本上不兼容。
  - 历史 Bug [#1392](https://github.com/netease-youdao/LobsterAI/issues/1392)（部分定时任务开关无法点击）今日关闭，可能已被相关修复覆盖或纳入 stale 处理。

## 6. 功能请求归类
- **会话列表按时间分组**
  Issue [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) 请求为侧边栏会话列表增加“已置顶/今天/昨天/本周/更早”分组，类似 ChatGPT 等产品。已有对应 PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) 实现分组渲染与 i18n，目前仍为 open 状态等待合并。

- **其他功能增强 PR（待合并）**
  - [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) 定时任务增加“工作日（周一至周五）”选项，自动生成相应 cron 表达式。
  - [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) 支持通过粘贴 JSON 快速导入 MCP 自定义服务器配置。
  - [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) 为协同会话列表中出错会话增加红色错误状态指示灯。
  - [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) 修复附件标签国际化、Esc 关闭面板与删除保护提示等 UX 细节。

## 7. 用户反馈摘要
来自 [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 的具体反馈：用户在使用多个 Agent 时，期望每个 Agent 拥有独立的“关于你”设定；实际表现是所有 Agent 的 USER.md 被强制统一，即使手动编辑也会在重启后被覆盖。用户已通过关闭软件手动修改 workspace-* 目录验证到覆盖源是 main agent 的 USER.md，并表示“怀疑是最近更新时出现的一个 bug”。这反映了用户对多 Agent 个性化配置的强需求，当前缺陷严重干扰正常使用。

## 8. 待处理积压
- **长期开放的 dependabot 版本升级 PR**
  - [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) (actions/first-interaction 更新) 与 [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) (actions/stale v9→v10) 自 2026-04-02 起保持 open，虽今日有更新但尚未合并，建议关注其兼容性或决定是否关闭。

- **功能 PR 积压**
  以下 PR 同样自 4 月初提交，近期无实质推进，但内容与用户需求直接相关：
  - [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338)（会话时间分组）对应 [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337)。
  - [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331)（错误状态红点）。
  - [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333)（i18n 与交互修复）。
  维护者可根据优先级考虑评审或合并，以减少 stale 积压。

</details>