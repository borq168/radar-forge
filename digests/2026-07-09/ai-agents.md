# OpenClaw 生态日报 2026-07-09

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-09 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-07-09

## 1. 今日活动概览
过去24小时内，OpenClaw 仓库有 **500 条 Issue 更新**（新开/活跃 456 条，关闭 44 条）和 **500 条 PR 更新**（403 条待合并，97 条已合并或关闭）。**无新版本发布**。活跃讨论集中在多代理编排稳定性、会话状态丢失、性能回归、安全漏洞（工具调用泄露、提示注入）等方面；同时，若干长期存在的 P0/P1 问题及功能请求依然没有得到根本解决。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展 — 今日合并/关闭的重要 Pull Request
- **fix: inject completion acknowledgment when tool-only turns produce no text**
  关闭的 PR [#79631]：修复模型返回仅包含工具调用、无可见文本时 Telegram 等渠道收不到任何消息的问题。通过注入完成确认，保证用户总能看到反馈。
- **feat(update): support extended-stable package updates**
  关闭的 PR [#99811]：新增 `extended-stable` 更新频道，允许运营者安装并停留在某个长期支持月的 npm 发布版本上，而不必跟随 `latest`。

这些合并推进了消息投递可靠性以及版本管理的灵活性。

## 4. 社区热点 — 今日最活跃 Issue / PR
以下 Issue 在过去24小时评论数量最多，反映社区当前的集中关切：

- **[文本泄露到消息通道]**
  [#25592] 工具调用之间的内部文本（错误处理、处理确认、旁白）会泄露到 Slack/iMessage 等面向用户的消息通道，严重破坏用户体验。评论 35 条，已链接修复 PR，但仍在等待安全审核。
- **[子代理静默丢失]**
  [#44925] 子代理任务编排存在多种静默丢失结果的模式：完成通知失败、超时无重试、无自动重启。用户在实际 Telegram 聊天中遇到，子代理工作完成但结果消失。
- **[性能回归 4-5x]**
  [#85333] `openclaw doctor --fix` 在升级到 2026.5.20 后从 55s 骤降到 229s+。定位为会话快照路径遍历瓶颈，尚无修复 PR，影响生产环境。
- **[未清理的 issue 内容注入子代理提示]**
  [#45740] `gh-issues` 技能将用户可控的 issue 正文、评论原始注入子代理提示，无任何过滤。14 条评论讨论安全影响，等待安全审查。
- **[Steer 模式不注入中间消息]**
  [#48003] 主会话使用 steer 模式时，用户消息必须等到当前回合结束才被代理处理，而不是在工具边界动态注入。根源是 `KeyedAsyncQueue` 引入的变更，众投 3 👍。
- **[多代理编排不稳定]**
  [#43367] 并发添加代理导致配置覆盖、会话锁失败、子进程游离。13 条评论揭示多代理工作流在实际并行编码任务中几乎不可用。

另有多个高赞功能请求（如私有网络访问功能 [#39604] 获 11 👍，MathJax 支持 [#42840] 获 9 👍）继续引发讨论。

## 5. Bug 与稳定性 — 今日报告的严重问题
摘要列表中包含大量 P0/P1 标签的缺陷（部分已有修复 PR）：

| 严重度 | 标题 | Issue | 状态 |
|--------|------|-------|------|
| P0   | 会话因压缩超时而无限挂起，重复发送同一条消息 | [#43661] | 无修复 PR |
| P0   | 文档超前于稳定版，Heartbeat `IsolatedSessions` 配置不可用 | [#48920] | 无修复 PR |
| P1   | 沙箱容器在应用 `no-new-privileges` 后立即退出 | [#43996] | 无修复 PR |
| P1   | Google Vertex 模型升级后“Cannot convert undefined or null to object” | [#38327] | 已链接修复 PR |
| P1   | 原生 Anthropic 路径长期工具调用后永久 brick（`400 Invalid signature in thinking block`） | [#94228] | 已链接修复 PR |
| P1   | 启用 `tools.elevated.enabled: true` 后所有 exec 被错误路由到网关主机而非沙箱 | [#46786] | 无修复 PR |
| P1   | 心跳漂移修复（PR #39182）导致 Telegram 消息在活跃对话中被阻塞 | [#40611] | 已链接修复 PR |
| P1   | 孤立的锁文件在网关重启时未被清除，即使 PID 匹配当前进程 | [#49603] | 已链接修复 PR |
| P1   | 代理循环允许模拟工具调用（在文本内伪造调用）而非强制真正调用 | [#45049] | 无修复 PR |
| P2   | 内存管理混乱：不同用户的内存存储方式不一致 | [#43747] | 无修复 PR |

多个 P1 缺陷已经链接了修复 PR，但仍未合并。部分缺陷（如沙箱、模拟工具调用）严重性高却缺乏进展，是社区的主要焦虑来源。

## 6. 功能请求归类 — 用户提出的需求
今日活跃讨论中的功能请求涉及安全性、运维和用户体验：

- **安全与权限**
  - [#39604] 增加 `tools.web.fetch.allowPrivateNetwork` 开关，允许访问内网地址（11 👍）
  - [#40786] 备份命令支持 `.gitignore` 风格的排除模式，防止敏感文件泄露
  - [#45565] 为网关生命周期警告（如 `memorySearch failed`）提供专用路由通道，避免在对话频道中制造杂音

- **会话与多代理管理**
  - [#45608] 在 `/new` 或日重置前执行代理记忆刷新，保持与压缩时一致的知识保存（4 👍）
  - [#43454] 增补生命周期钩子（`onSubagentComplete`、`onToolCallThreshold`、`onTurnComplete`）以便工作区脚本响应
  - [#45501] 可配置的会话重置欢迎消息（`session.resetPrompt`）

- **成本与审计**
  - [#42475] 网关级别的每代理成本预算扣减（日常/月度限额）
  - [#46252] 成本仪表板应包含 `.jsonl.reset.<timestamp>` 归档文件，防止 `new` 用户日花费被严重低估

- **配置与 UI**
  - [#45758] 请求支持 YAML 作为配置文件格式（7 评论，2 👍）
  - [#42840] 控制 UI 增加 MathJax/LaTeX 公式渲染

- **架构变更**
  - [#42026] 提出分离控制平面与代理运行时的分布式架构（3 👍）
  - [#48874] 提议共享 LLM 层与隔离会话层的多会话架构

PR 侧也有功能增强：`write` 工具追加模式（[#77127]）正在等待维护者审核，直接对应长期请求 [#40001]。

## 7. 用户反馈摘要 — 真实使用场景与痛点
从今日高效讨论的评论和 Issue 描述中可以看出：

- **“静默丢失”是最令人不安的可靠性问题**：多个报告（[#44925]、[#47975]、[#86034]）均指出任务明明完成但用户毫无反馈或通知，甚至子代理会话残留导致主会话失去响应。
- **多代理工作流在生产中几乎不可用**：并发代理配置冲突、会话锁失效、子进程脱离，直接导致任务失败（[#43367]）。
- **配置和升级的摩擦**：`OPENCLAW_HOME` 导致的目录嵌套（[#45765]）、Google provider 配置在升级后无提示丢失（[#102163]）、文档与 release 不同步（[#48920]）等，使用户对环境迁移和版本跟进心存顾忌。
- **安全边界被侵蚀**：内部工具调用文本泄露到 Discord（[#44905]）、内部元数据回声污染（[#39847]）、无过滤的 issue 内容注入（[#45740]），让用户对代理在聊天通道中的行为产生不信任。
- **性能退步影响生产环境**：`openclaw doctor --fix` 的 4-5 倍变慢（[#85333]）直接拖慢运维操作。

## 8. 待处理积压 — 长期未解决的重要 Issue/PR
以下问题持续活跃但未解决，建议维护者优先关注：

- **[文本泄露到消息通道] [#25592]**
  创建于 2026-02-24，35 条评论，P1，已链接修复 PR，但仍需安全审核和产品决策。
- **[子代理静默丢失] [#44925]**
  创建于 2026-03-13，21 条评论，P1，无修复 PR，消息丢失模式已经梳理清晰，但缺乏行动。
- **[多代理编排不稳定] [#43367]**
  自 2026-03-11 起，13 条评论，P1，尽管已链接修复 PR，问题依然开放，影响并发场景。
- **[write 工具无追加模式] [#40001]**
  2026-03-08 创建，11 条评论，P1，已有 PR [#77127] 在等待审核，但数月未合并。
- **[会话压缩超时死锁] [#43661]**
  P0 严重级别，7 条评论，无修复 PR，沉默失败和重复消息发送已困扰用户 4 个月。
- **[成本仪表板漏计归档文件] [#46252]**
  P2，活跃讨论，直接影响成本监控准确性，长期悬置。

PR 侧：重构会话/转录存储到 SQLite 的 [#98236]（XL）以及持久化重启审计事件的 [#97189] 均在等待更进一步审查或作者回应。

---
*报告生成于 2026-07-09，基于 GitHub 仓库 openclaw/openclaw 的公开数据。*

---

## 横向生态对比

# 开源 AI 个人助手项目横向对比日报 | 2026-07-09

## 1. 今日横向概览
今日四个项目均无新版本发布。OpenClaw 以极高活跃度（各 500 条 Issue/PR 更新）持续消化大量社区反馈，但严重缺陷积压明显；NanoBot 活动量中等，集中处置了 3 个 WebUI 令牌泄露漏洞并快速闭环修复；Zeroclaw 活跃度同样较高，Issue 与 PR 更新均达 50 条，社区围绕插件安全、多代理隔离与提供者兼容展开密集讨论；PicoClaw 活跃度最低，仅记录了 2 个新 Issue 和 3 个已关闭 PR，聚焦嵌入式硬件平台的兼容性问题。

## 2. 各项目活跃度对比
| 项目 | Issues（新开/活跃｜已关闭） | PRs（待合并｜已合并/关闭） | 新版本 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 456｜44 | 403｜97 | 无 | 长期 P0/P1 缺陷（会话死锁、沙箱退出等）持续无修复；功能请求量最大 |
| **NanoBot** | 1｜7 | 17｜12 | 无 | 安全漏洞快速响应；`nano_timer` 等新工具入列；MCP 崩溃与僵尸进程修复待合并 |
| **Zeroclaw** | 40｜10 | 29｜21 | 无 | 活跃的 RFC 讨论（`.ignore` 文件、WASM 插件）；多轮消息丢失 S1 缺陷已接受但未修复 |
| **PicoClaw** | 2｜0 | 0｜3 | 无 | 全部 PR 已关闭/合并；视觉模型图片修复；NanoKVM 上 GPT 调用失败待处理 |

## 3. OpenClaw 与同类对照
- **活动量**：OpenClaw 的 Issue/PR 更新量级（各 500 条）是 Zeroclaw（各 50 条）的 10 倍，NanoBot 的 60 倍以上，PicoClaw 的数百倍，处于绝对领跑位置。
- **技术重点**：OpenClaw 今日焦点在多代理编排稳定性、会话状态丢失、性能回归及消息泄露安全；NanoBot 更侧重 WebUI 安全漏洞修补与自动化部署优化（非交互配置刷新）；Zeroclaw 则聚焦插件体系安全、提供者兼容性和多代理环境变量隔离；PicoClaw 专注硬件通道适配（NanoKVM、QQ）与告警通道集成。
- **社区讨论面**：OpenClaw 的讨论覆盖安全、可靠性、性能、配置、成本仪表板等多个维度，用户痛点以“静默丢失”“生产不可用”为主；NanoBot 和 Zeroclaw 围绕具体安全报告或 RFC 形成集中讨论；PicoClaw 社区讨论规模极小，仅个别 Issue 有零星互动。

## 4. 共同出现的技术方向
- **安全边界与泄露修复**：NanoBot 今日集中修补了 3 个 WebUI 令牌泄露漏洞；OpenClaw 持续追踪工具调用文本泄露、内部元数据回声、无过滤的 issue 内容注入等通道；Zeroclaw 讨论 `.ignore` 文件工作区保护机制（[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)），并推动插件权限与秘密模型隔离。三项目均反映出社区对“AI 代理在对话通道中泄露内部信息”的高度警惕。
- **多代理/多会话可靠性与状态丢失**：OpenClaw 的子代理静默丢失（[#44925](https://github.com/openclaw/openclaw/issues/44925)）、多代理编排不稳定（[#43367](https://github.com/openclaw/openclaw/issues/43367)）和 Zeroclaw 的单轮/多轮用户消息丢失（[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)）、代理环境变量隔离需求（[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)）都指向同一个方向：多代理间状态同步与消息可靠投递是当前类 Agent 框架的共性挑战。
- **MCP 连接与生命周期稳定性**：NanoBot 存在两个开放 PR 试图修复 MCP 网关崩溃（[#4764](https://github.com/HKUDS/nanobot/pull/4764)、[#4843](https://github.com/HKUDS/nanobot/pull/4843)）；Zeroclaw 通过共享 MCP 注册表防止心跳重复连接（[#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866)）。MCP 服务的健壮性在多项目中均受到重视。

## 5. 差异化定位分析
| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 多代理编排、多通道消息网关、会话管理、成本审计 | WebUI 操作中心、MCP 工具链、自动化配置、安全防护 | 多代理运行时、插件市场（WASM）、提供者抽象、多租户隔离 | 轻量通道接入、嵌入式硬件适配、运维告警通道 |
| **目标用户** | 需要复杂多代理协作与多平台消息集成的团队 | 注重 UI 交互与一键部署的开发者、小型团队 | 追求高度可扩展、插件化、多模型切换的进阶用户 | 边缘/硬件设备（如 NanoKVM）及特定通道（QQ）使用者 |
| **技术架构差异** | 单一大仓，高度集中的网关+代理架构，近期讨论分布式分离（[#42026](https://github.com/openclaw/openclaw/issues/42026)） | Node.js 实现，前端 WebUI 为核心，MCP 与工具紧密嵌入 | Rust 实现，编译期 feature 向运行时插件迁移（WASM），注重安全与性能 | 轻量级，与硬件产品（Sipeed NanoKVM）绑定，通道适配为主 |

## 6. 社区活跃度记录
- **极高活跃层**：OpenClaw（日 Issue/PR 更新各 500 条），社区反馈汹涌，大量缺陷与功能请求积压。
- **中等活跃层**：Zeroclaw（日更新各 50 条），RFC 与 bug 修复并行，互动密集；NanoBot（Issue 8 条 / PR 29 条），以 PR 驱动为主，安全响应迅速。
- **低活跃层**：PicoClaw（日更新 2 Issue、3 已关闭 PR），社区规模较小，问题反馈零散。

## 7. 有证据支撑的观察
1. **安全与泄露问题在多个项目中集中暴露**：OpenClaw 的工具调用文本泄露（[#25592](https://github.com/openclaw/openclaw/issues/25592)）、zeroclaw 的工作区文件保护（[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)）以及 NanoBot 的令牌泄露（[#4825](https://github.com/HKUDS/nanobot/issues/4825) 等）均在同一天处于讨论焦点，显示 AI 助手在信道安全、权限模型和内部信息过滤方面正面临社区检验。
2. **多代理可靠性缺陷是今日最突出的跨项目共性痛点**：OpenClaw 的“子代理静默丢失”（P1 无修复）与 Zeroclaw 的“单轮/多轮用户消息丢失”（S1 已接受但无 PR）分别造成任务结果消失和对话断裂，两者均严重影响生产可用性，但修复进展缓慢。
3. **MCP 连接稳定性成为多项目的维护重点**：NanoBot 以两个开放 PR 试图修复 MCP 网关崩溃，Zeroclaw 通过 PR [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) 修正心跳重复连接，表明 MCP 作为与外部工具交互的核心通道，其生命周期管理和异常恢复是当前社区的共同关注点。
4. **“无交互配置/自动化部署”需求在 NanoBot 得到快速响应，其他项目未见同日对应进展**：NanoBot 在收到 `#4851` 请求后数小时内即通过 PR `#4852` 实现 `--refresh` 非交互刷新，而 OpenClaw 虽有大量配置摩擦反馈（如 `OPENCLAW_HOME` 嵌套），今日并无对应的快速闭环改进。
5. **所有项目今日均无新版本发布，但 PR 合并仍活跃**：四个项目都没有推送新版本，但 OpenClaw 有 97 个 PR 合并/关闭，NanoBot 12 个，Zeroclaw 21 个，PicoClaw 3 个，说明处于密集迭代开发期，修复和新功能在快速并入主分支，但尚未达到发布阈值。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-09

## 1. 今日活动概览
过去 24 小时，NanoBot 仓库共产生 8 条 Issue 更新（1 条新开 / 活跃，7 条关闭）和 29 条 PR 更新（17 条待合并，12 条已合并或关闭），无新版本发布。安全团队快速响应了 3 个 WebUI 令牌泄露问题，并通过 `#4849` 落地了修复。配置管理、前端 diff 视图、核心工具 `nano_timer` 等多项功能入列 PR，MCP 连接稳定性与僵尸进程回收等 bug 修复也在推进中。

## 2. 项目进展 – 今日合并 / 关闭的重要 PR
- **[`#4849`] fix(webui): gate bootstrap API token issuance** – 拆分了 WebSocket 令牌与 REST API 令牌的生成逻辑，确保未配置密钥时远程调用无法获取 API 令牌，修补了由 `#4825`/`#4826`/`#4827` 报告的安全漏洞。
- **[`#4848`] refactor(agent): extract turn hook assembly** – 将每轮对话的 hook 组装逻辑从主循环中抽离到 `nanobot.agent.turn_hooks`，提升代码可维护性。
- **[`#4850`] docs: improve search entry pages** – 重新组织文档入口，增加搜索引导页面，将 README 中的新闻块移至发行档案区。
- **[`#4852`] Feature: non-interactive config refresh with 'nanobot onboard --refresh'** – 实现了非交互式配置刷新，对应 `#4851` 需求。
- **[`#4460`] chore: bump to node 24** – 升级 Node.js 版本至 24。
- **[`#12`] feat: add vision support for image recognition in Telegram** – 使 Telegram 通道支持图像识别的多模态消息。

## 3. 社区热点
- **WebUI 令牌安全漏洞集中处理**：研究员 @YLChen-007 在 7 月 7 日连续提交 `#4825`、`#4826`、`#4827` 三个安全报告，指出当 WebUI 绑定本地回环且未配置令牌密钥时，任何本地进程均可通过 `/webui/bootstrap` 获取 API 令牌。维护者当天即关闭了这些 Issue，并在 `#4849` 中完成修复，随后进一步在 `#4856` 中调整本地化策略，社区反馈迅速闭环。
- **非交互式配置刷新需求**：@alekwo 在 `#4851` 中提出自动化部署场景无法通过交互式 `nanobot onboard` 更新配置，该需求随即通过 `#4852` 实现并合入，反映出用户对无头化、自动化的强诉求。
链接：[#4825](https://github.com/HKUDS/nanobot/issues/4825)、[#4826](https://github.com/HKUDS/nanobot/issues/4826)、[#4827](https://github.com/HKUDS/nanobot/issues/4827)、[#4851](https://github.com/HKUDS/nanobot/issues/4851)

## 4. Bug 与稳定性
- **高优**
  - **MCP 网关崩溃**：两个开放 PR 均试图修复同一链路。`#4764` fix(mcp): isolate reconnect cancel scopes 通过隔离取消作用域防止网关崩溃；`#4843` fix(mcp): defer stale stack cleanup during reconnect 则推迟清理过时栈直到网关关闭。两个 PR 都处于 open，需合并决策。
  - **Shell 僵尸进程**：`#4840` fix(shell): reap zombie processes on all subprocess exit paths 解决了超时外的僵尸进程回收问题，标记 p1，待合并。

- **已关闭的稳定性问题**
  - `#2450` minimax-m2.7:cloud 第二次请求失败（已关闭，推测配套修复已合入）。
  - `#4829` Slack 依赖缺失 `aiohttp`，已关闭。
  - `#4078` OpenAI 兼容路由未认证访问（已关闭）。

## 5. 功能请求归类
当日出现的功能需求与对应 PR 如下（仅记录证据，不预判路线）：
- **非交互配置刷新**：`#4851` → `#4852` 已合并。
- **WebUI 文件编辑 diff 视图**：`#4828` feat(webui): add file edit diff progress view 待合并。
- **exec 命令重写器 (RTK)**：`#4854` feat(exec): add RTK command rewriter 待合并。
- **核心计时工具 nano_timer**：`#4853` feat(tools): add nano_timer core tool 待合并。
- **Cron 任务模型预设**：`#4622` feat(cron): support job model presets 待合并（存在冲突）。
- **Channels 引导式设置流**：`#4855` feat(channels): add guided setup flows 待合并。
- **长期目标显式运行时模式**：`#4844` Gate sustained goals behind explicit runtime mode 待合并（存在冲突）。

## 6. 用户反馈摘要
- **自动化与无头部署痛点**：@alekwo 在 `#4851` 中指出当前只能交互式更新配置，阻碍自动更新系统，这促成了 `--refresh` 参数的快速实现。
- **依赖完整性**：`#4829` 暴露了 Slack 插件因缺少 `aiohttp` 而无法启用，说明部分用户依赖精细化组件构建，PR `#4857` 尝试通过 Dockerfile 的 `NANOBOT_EXTRAS` 参数让构建更灵活。
- **安全敏感度**：多个安全报告在同一天被关闭，未引起长时间讨论，表明用户对这类风险持警惕态度，维护者的快速修复暂时满足了预期。

## 7. 待处理积压
- **`#4840` [p1] fix(shell): reap zombie processes** – 涉及子进程退出路径的全面僵尸回收，已 review 但未合并，僵尸进程问题可能影响长时间运行实例。
- **`#4844` [p1, conflict] Gate sustained goals**、**`#4622` [conflict] cron model presets**、**`#4855` [conflict] guided setup** – 均存在冲突标签，需优先解决合并冲突。
- **`#2873` fix(discord): preserve forwarded referenced messages**（创建于 4 月，仍开放），修复转发消息丢失内容，长期悬而未决。
- **`#4856` fix(webui): restore localhost bootstrap API tokens** – 虽为安全跟进，但标记为 `[security, p1]`，需及时决定是否合入，以同前面 `#4849` 形成完整本地–远程策略闭环。

> 所有链接均指向 GitHub Issues/PR，可点击查看详细讨论。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 | 2026-07-09

## 1. 今日活动概览
过去 24 小时，Zeroclaw 仓库共产生 50 条 Issue 更新（新开/活跃 40 条，已关闭 10 条）与 50 条 PR 更新（待合并 29 条，已关闭/合并 21 条），无新版本发布。合并/关闭的 PR 中，可见多个 bug 修复、功能增强和基础设施改进，例如提供者别名凭据修复、TodoWrite 跟踪器落地、MCP 注册表生命周期修正等。社区讨论集中在 agent 对自身能力（如 cron 任务）的认知缺失、多轮对话丢失消息、以及插件体系的安全与权限模型等话题上。

## 2. 版本发布
今日无新版本或候选版发布。

## 3. 项目进展
今日已合并或关闭的重要 PR（部分可能在数小时内合入 `master`）包括：

- **修复：提供者别名凭据暴露给模型目录** [#8861](https://github.com/zeroclaw-labs/zeroclaw/pull/8861)
  修复了 ZeroCode/网关/CLI 模型下拉列表因硬编码 `None` API 密钥而无法加载需凭据的 OpenAI 兼容家族（如 xAI/Grok、Groq、DeepSeek 等）的问题。现在 `create_model_provider` 使用别名凭据，`/models` 端点可正常工作。

- **实现 TodoWrite 跟踪器（ZeroCode 用户）** [#8639](https://github.com/zeroclaw-labs/zeroclaw/pull/8639)
  将 #8401 定义的 TodoWrite 功能落地，提供了实时只读任务跟踪器，支持 RPC、ACP 和持久化存储。用户可在 ZeroCode 中体验类似 Claude Code 的任务列表反馈。

- **修复：Skills 导航入口添加到侧栏** [#8795](https://github.com/zeroclaw-labs/zeroclaw/pull/8795)
  之前 Skills 页面（`/skills`）虽已实现但侧栏无入口。此次加入了带图标的导航项，普通用户可直接点击进入。

- **修复：共享 MCP 注册表以防止心跳采集重复连接** [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866)（Open 但可能临近合并）
  修正了守护进程心跳工作流中每次 tick 都重建 `McpRegistry` 的问题，避免了 stdio MCP 服务器被重复打开导致资源耗尽。

此外，已关闭的 Issues 中值得关注的是：
- [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) “集成飞书后默认调用 LLM 而非 Agent”被关闭（3 评论，可能已修复）。
- [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) “model_switch 工具跨轮次不持久”被关闭，推测相关修复已合入。
- [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) “skills install 面向 data_dir 导致多代理运行时未加载”问题被关闭。
- [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) “Agent 无法使用环境变量作为 http_request 密钥”已关闭，解决了身份验证令牌不可达的关键阻碍。

## 4. 社区热点
今日评论数最高的 Issue 集中反映了几个深层诉求：

- **#5862 [Bug] zeroclaw does not know it can add cron**（13 评论）
  用户希望 agent 能使用内置 cron 工具，但模型响应称“没有工具完成此操作”，暴露了 agent 能力感知缺失。讨论涉及工具声明与模型理解鸿沟，维护者标记 `status:blocked` 且需作者提供更多信息。链接：[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)

- **#8424 RFC: .ignore File Mechanism for Workspace File Protection**（7 评论）
  讨论工作区内敏感文件保护机制。当前 `forbidden_paths` 仅限制工作区外部路径，用户强烈要求 AI 代理无法访问 `rust-toolchain.toml`, `.env` 等内部文件。标签包含 `type:rfc`, `domain:architecture`, `risk:high`，显示出对安全性的高度关注。链接：[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)

- **#6034 [Bug]: 单轮对话以及多轮对话会出现丢失 user message的现象**（7 评论）
  在自定义 HTTP 提供者下，`Qwen3.5-35B` 模型返回 400 错误（“messages array must contain at least one user message”），表明消息组装流程会将用户消息截断或丢失。严重级别 S1，已获 `status:accepted`，持续发酵。链接：[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)

- **#8850: Move optional channels & tools from compile-time feature flags to runtime plugins**（4 评论）
  当天新开 RFC，提出将可选通道/工具从编译期 feature 转为运行时可安装的 WASM 插件，以减少二进制体积并简化分发。与近期插件系统的其他 RFC 联动，社区参与积极。链接：[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)

- **#8226: support per-agent custom environment variables configuration**（5 评论）
  希望引入 `runtime_context` 和 `runtime_secrets` 块，解决多代理多租户下工具配置和身份参数隔离问题，评论中提及跨 MCP 实例的共享需求。链接：[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)

PR 讨论热度多表现为未显示评论数（呈现 `undefined`），但一些体积较大的重构 PR（如 #8854 统一 provider 构建器）被多个标签关注，说明社区对代码质量与一致性有较高期待。

## 5. Bug 与稳定性
以下为今日仍活跃或受到关注的 bug，按严重度排列：

- **S0 (数据丢失/安全风险)**
  - [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672): 在小米思考模型（mimo-v2.5）工具调用循环中，`reasoning_content` 未传递给后续回合，导致推理链断裂。`status:blocked`，需要作者配合提供复现。
  - [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094): Quickstart 中添加 Anthropic 提供者后聊天窗口无法使用，直到重置才恢复，疑似配置不生效。需要重现（`r:needs-repro`），尚未分配修复 PR。

- **S1 (工作流阻塞)**
  - [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034): 单轮/多轮对话丢失用户消息，导致 400 错误，已获接受，影响所有使用兼容提供者的用户。
  - [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002): Telegram 通道内未明确寻址 Agent，导致 llama.cpp 未正确响应。`status:accepted`，但无公开修复 PR 关联。
  - [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527): macOS 应用无法工作，权限检测失败、显示空页面，重启后窗口消失。`status:blocked`，标记 `desktop, tauri`，可能需 Tauri 专项支持。

- **S2 (性能下降/功能退化)**
  - [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517): 上下文溢出导致 AI 产生幻觉或话题漂移，使用 Kimi 提供者时在 Discord 上频繁出现。`r:needs-repro`，暂无修复。
  - [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911): Android Termux 安装未知 aarch64 二进制失败，影响移动端部署体验。标记 `hardware, quickstart`，待社区贡献或官方支持。

- **已有关联修复的 Bug**
  - [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) 已关闭，修复了并发审批时全局侧信道状态覆盖问题。
  - [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) 已关闭，解决 skills 命令在多代理环境下的路径错位。

## 6. 功能请求归类
今日活跃的功能请求/RFC 主要围绕运行安全、插件模型、通道增强和架构演化：

- **安全与隔离**
  - [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) RFC: `.ignore` 文件机制保护工作区内部敏感文件。
  - [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) 请求支持每代理的自定义环境变量和密钥分离。
  - [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) RFC: 引入 `CompressionDecorator` 对提供商请求进行原生上下文压缩，防止 token 泛滥。

- **插件与运行时扩展**
  - [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) RFC: 将可选通道/工具从编译特性迁移到 WASM 运行时插件。
  - [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: 以 `wire_api` 为组织轴线重构提供者模型，统一不同后端的行为差异。
  - [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) RFC: 插件权限、配置与秘密模型开放问题探讨，请求更细粒度权限控制。
  - [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) RFC: 使用 OCI 兼容容器注册表作为 WASM 插件存储与发现机制。

- **通道增强**
  - [#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831) Discord 通道交互面提升跟踪，包括嵌入、斜杠命令选项、组件和语音。
  - [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) 预轮次路由意图抽取，使 agent 能提前识别自然语言中的路由请求。

- **架构与构建**
  - [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) RFC: 将 React/Vite Web UI 构建替换为 Rust→Wasm 框架（Dioxus/Leptos/Yew）。
  - [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: OpenAI 聊天补全兼容适配器，使 Open WebUI 等客户端可直接对接。

- **工具与开发体验**
  - [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) 请求增强 `file_read`：默认行数上限、字符集检测、分页 PDF、笔记本支持等。

目前未见以上多数功能请求有直接对应的 PR（部分新型 RFC 尚处讨论阶段），但维护者已通过标签（如 `status:accepted`, `status:blocked`）给出状态反映。

## 7. 用户反馈摘要
从 Issue 评论及描述中提炼的用户实际痛点：

- **Agent 工具感知局限**：用户期望 agent 能够自动利用内置 `zeroclaw cron` 设定定时任务，但模型能力盲区导致无法完成任务（#5862）。用户希望系统提示或能力声明更准确地反映可用工具集。
- **多轮对话可靠性不足**：高达 S1 级别的丢失用户消息问题（#6034）使用户无法信任连续对话，尤其是在本地部署或自定义提供商上。
- **安全粒度需求明确**：多名用户（如 #8424、#8226）明确表示需要工作区内文件的隔离控制，以及不同 agent 间的环境变量隔离，以保护生产配置和凭据。
- **移动端与边缘部署受阻**：Android Termux 安装失败（#7911）表明预编译二进制覆盖度不够，用户期望官方支持 `aarch64-linux-android` 构建或脚本修复。
- **插件系统生态期待**：多个 RFC 追求插件运行更安全、分发更标准，社区希望能轻松安装第三方通道/工具，而无需重新编译或泄露敏感信息。
- **UI/UX 一致性问题**：Quickstart 流程未正确暴露端口配置字段（PR #7215 尝试修复），以及技能管理界面缺失导航入口，均反映出首次用户体验流程仍需打磨。

## 8. 待处理积压
以下 Issue 创建时间较早但仍处于阻塞状态，维护者可能需要额外关注：

- **#5862** [Bug] zeroclaw 不知道可以添加 cron — 创建于 2026-04-18，已逾 2 个月，13 条评论，标签 `status:blocked, needs-author-action`，用户可能未提供足够复现信息，但诉求真实。
- **#6517** [Bug] 上下文溢出导致幻觉/话题漂移 — 创建于 5 月 7 日，2 评论，`r:needs-repro, status:blocked`，因难以复现而搁置。
- **#6724** [Bug] 所有配置通道 disabled

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-07-09)

### 1. 今日活动概览
过去 24 小时，PicoClaw 未发布新版本。社区活跃度集中在问题反馈与已关闭的改动上：共产生 2 个新/活跃 Issue（均为 Open 状态），以及 3 个已关闭 PR。Issue 涉及 NanoKVM 平台上的 GPT 模型调用失效与 QQ 频道流式输出功能缺失；PR 则完成了视觉模型图片传递修复、新增 Alertmanager 频道，以及网关绑定回退逻辑，无待合并 PR。

### 2. 版本发布
无。

### 3. 项目进展
- **修复 Anthropic 视觉模型无法读取图片**：[#3234](https://github.com/sipeed/picoclaw/pull/3234) 已关闭。在此之前，`anthropic_messages` 提供者构建请求体时仅发送文本，完全忽略 `msg.Media` 字段，导致加载的图片数据被丢弃，视觉模型返回“无法看到图片”的响应。该 PR 补全了图片嵌入逻辑。
- **新增 Grafana Alertmanager 频道**：[#2251](https://github.com/sipeed/picoclaw/pull/2251) 已关闭。增加 `grafana_alertmanager` 输入频道，可解析 Alertmanager webhook 推送的告警并格式化为可读消息，同时支持通过 `skill` 配置触发特定技能，增强了运维告警的自动化处理能力。
- **增强网关启动可靠性**：[#2278](https://github.com/sipeed/picoclaw/pull/2278) 已关闭。当配置的环回地址绑定失败（如某些容器环境），网关会回退到通配符绑定并配合 CIDR 允许列表，避免启动失败，提高了特殊网络环境下的开箱体验。

### 4. 社区热点
今日互动最多的条目是 **[#3195](https://github.com/sipeed/picoclaw/issues/3195) [BUG] OpenAI GPT does not work on NanoKVM with default config**（2 条评论）。用户反馈在 NanoKVM 2.4.0 上按文档配置 gpt-5.4 后，所有与 PicoClaw 的交互均返回错误，激起一定讨论。另一条功能请求 [#3201](https://github.com/sipeed/picoclaw/issues/3201) 有 1 条评论，热度较低。PR 侧无公开评论数据。

### 5. Bug 与稳定性
- **#3195 NanoKVM + OpenAI GPT 调用失败**：用户依据官方文档配置后依旧无法正常交互，具体错误信息尚未在摘要中披露。该问题直接影响 NanoKVM 用户的初始体验，目前无对应的修复 PR。

### 6. 功能请求归类
- **QQ 频道流式输出**：[#3201](https://github.com/sipeed/picoclaw/issues/3201) 请求 QQ 频道支持 token 级实时增量显示（目前仅 Telegram 与 Pico WebSocket 频道具备此能力）。该 Issue 已标记 `stale`，存在被自动关闭的风险。
- **近期已实现的功能增强**：Grafana Alertmanager 频道（#2251）和网关 CIDR 回退绑定（#2278）均已在本次关闭的 PR 中落地，属于维护者主动推进的能力扩展。

### 7. 用户反馈摘要
从 [#3195](https://github.com/sipeed/picoclaw/issues/3195) 可提炼的真实痛点：用户期望在 NanoKVM 上按文档步骤完成模型配置后即可立即使用，但遭遇全场景交互报错，说明 NanoKVM 环境下的模型适配可能存在未覆盖的边缘情况，用户难以自行排查。

### 8. 待处理积压
- **[#3195](https://github.com/sipeed/picoclaw/issues/3195)**：自 6 月 30 日创建以来虽有更新，但未见维护者明确回复或指派，属于新关键特性（NanoKVM）上的已知缺陷，建议优先确认。
- **[#3201](https://github.com/sipeed/picoclaw/issues/3201)**：功能请求已标记 `stale`，若无人跟进可能很快被关闭，但 QQ 频道用户对实时流式体验的需求真实存在，可考虑重新评估或延长讨论窗口。

</details>