# OpenClaw 生态日报 2026-07-08

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-08 00:55 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报
**日期：2026-07-08**

---

## 1. 今日活动概览
在过去 24 小时内，OpenClaw 项目共产生 500 条 Issue 更新（新开/活跃 380 条，关闭 120 条）及 500 条 PR 更新（待合并 355 条，已合并/关闭 145 条）。无新版本发布。社区持续聚焦于消息泄露、会话状态丢失、沙箱隔离失败、多智能体编排可靠性等核心稳定性问题，同时多个长期未解决的高优先级 Bug 和功能请求仍处于讨论中，修复类 PR 正陆续推进。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 项目进展
以下重要 PR 于今日被合并或关闭，推进了项目的若干改进：

- **#101931** `refactor(memory-wiki): localize internal helper types` – 清理 Memory Wiki 插件内部类型导出，减少外部 API 表面。
- **#68936** `Autofix: add PR review autofix pipeline + Windows daemon` – 新增基于 Claude Agent SDK 的 PR 审阅自动修复流水线及 Windows 后台守护进程（已关闭，可能已合并或弃用）。
- 此外，多项长期 Feature Request 被关闭，包括：
  - **#90370** `支持 PostgreSQL 替代 SQLite 作为内部存储`（12 条评论，已关闭）
  - **#40418** `Automated Session Memory Preservation & Synthesis`（已关闭）
  - **#45388** `TUI --session mode doesn't live-stream messages`（已关闭）
  - **#52972** `Bug: Incorrect 'I did not schedule a reminder' note appended to messages`（已关闭）

这些关闭动作表明维护者正在梳理积压需求并作出取舍。

---

## 4. 社区热点
以下为今日评论数最高的活跃 Issue，反映社区当前最关心的讨论焦点：

- **#25592** `Text between tool calls leaks to messaging channels`
  链接：https://github.com/openclaw/openclaw/issues/25592
  评论：33 | 标签：P1, 安全, 消息丢失
  工具调用间的内部文字被泄露至 Slack、iMessage 等消息渠道，构成严重 UX 和安全问题。已有相关修复 PR（`clawsweeper:linked-pr-open`）但尚未合并，需产品和安全审查。

- **#44925** `[Bug]: Subagent completion silently lost — no retry, no notification, no auto-restart on timeout`
  链接：https://github.com/openclaw/openclaw/issues/44925
  评论：21 | 标签：P1, 会话状态, 消息丢失
  子智能体任务完成结果静默丢失，无重试、无通知、无自动重启，影响 Telegram 论坛机器人等多通道场景。已有关联 PR 但修复未落地。

- **#11829** `Security Roadmap: Protecting API Keys from Agent Access`
  链接：https://github.com/openclaw/openclaw/issues/11829
  评论：20 | 标签：bug, security
  多项 API 密钥可能通过提示词或聊天泄露，讨论分层次保护方案，至今仍是安全路线图核心议题。

- **#85333** `openclaw doctor --fix 4-5x slower on 2026.5.20 vs 2026.5.19`
  链接：https://github.com/openclaw/openclaw/issues/85333
  评论：15 | 标签：P1, 性能回归, 崩溃循环
  `doctor --fix` 性能严重退化，生产环境从 55 秒增至 229 秒以上，暴露出会话快照路径遍历瓶颈。

- **#29387** `Bootstrap files in agentDir are silently ignored`
  链接：https://github.com/openclaw/openclaw/issues/29387
  评论：14 | 👍 5 | 标签：P1, 安全, 会话状态
  每智能体引导文件仅工作区目录生效，`agentDir` 下的 SOUL.md 等被忽略，造成用户困惑与行为不一致。

- **#43367** `Multi-agent orchestration is unstable`
  链接：https://github.com/openclaw/openclaw/issues/43367
  评论：13 | 标签：P1, 会话状态, 数据丢失
  并发 `agents add`、配置覆盖、会话锁失败和子进程脱离等导致多智能体协作极不可靠。

此外，PR 讨论热度数据暂缺（评论字段为 undefined），暂无法纳入热点分析。

---

## 5. Bug 与稳定性
今日高优先级或严重性 Bug 汇总如下（按严重程度与影响面排列），多数已关联修复 PR 但仍在排期：

| Issue | 标题 | 严重程度 | 是否已有 fix PR |
|-------|------|----------|------------------|
| #25592 | 工具调用文字泄露至消息渠道 | P1，安全 | ✅ (linked-pr-open) |
| #44925 | 子智能体完成结果静默丢失 | P1，消息丢失 | ✅ (linked-pr-open) |
| #22676 | Signal 守护进程停止竞态条件导致孤立进程和发送失败 | P1，崩溃循环 | ✅ (linked-pr-open) |
| #31583 | `exec` 工具不继承技能环境变量 | P1，安全/认证 | ✅ (linked-pr-open) |
| #99241 | 工具输出被渲染为“图片附件”导致智能体无法读取 | P1，消息丢失 | ❓ (needs-live-repro) |
| #85333 | `doctor --fix` 性能回归 4-5 倍慢 | P1，性能 | ❌ (no-new-fix-pr) |
| #37634 | `workspaceAccess: none` 下沙箱工作区仍为只读 | P1，会话状态 | ❌ (no-new-fix-pr) |
| #38327 | 2026.3.2 版本下 Gemini 3.1 崩溃 | P1，回归 | ❌ (需验证) |
| #41199 | 智能体间通信工具参数冲突导致执行失败 | P1，消息丢失 | ❓ (needs-live-repro) |
| #31331 | Docker 安装下沙箱工作区无法绑定 | P1，安全/行为 | ❌ (no-new-fix-pr) |
| #41744 | 飞书消息媒体附件丢失 | P1，消息丢失 | ✅ (linked-pr-open) |
| #22676 等 | 多个回归及行为缺陷 | P2/P3 | 部分有 PR |

**关键观察：** 大量高优先级问题处于“有 PR 但未合并”或“无新修复 PR”的状态，核心修复流水线可能存在瓶颈。社区对消息丢失和会话状态一致性的敏感度显著上升。

---

## 6. 功能请求归类
今日可见的功能请求主要包括：

- **安全与隔离**
  - #39604 `tools.web.fetch.allowPrivateNetwork` 允许访问内部网络（👍 11）
  - #42475 每智能体成本预算网关级实施
  - #40786 备份 CLI 添加类似 .gitignore 的排除模式
  - #22358 子智能体完成后扩展钩子
  - #43454 网关生命周期钩子（onSubagentComplete 等）

- **多智能体与协作**
  - #35203 RFC: 能力画像 + 共享黑板 + 分层记忆 + Token 成本治理
  - #42026 分布式智能体运行时（分离控制面与计算面）
  - #27445 `announceTarget` 选项控制子智能体完成通告路由

- **用户体验与 UI**
  - #42840 MathJax/LaTeX 支持（👍 9）
  - #28300 主题定制系统（👍 5）
  - #33413 Slack 助理线程状态显示工具级进度（👍 3）
  - #40678 跨通道可见性镜像到 TUI
  - #33102 TUI 支持 --deliver 默认配置

- **通道与集成**
  - #20786 Telegram Business Bot 支持（👍 6）
  - #49931 Windows 下 exec 工具可配置 shell

- **记忆与持久化**
  - #22438 分层引导文件加载以控制上下文消耗

许多请求已存在数周至数月，但尚无明显排期迹象。

---

## 7. 用户反馈摘要
从 Issues 评论和描述中提炼的真实用户痛点包括：

- **消息与状态丢失是首要负面体验**：多用户反映智能体在 Telegram、飞书等渠道出现“回复静默消失”“工具输出变成图片占位符”“子智能体结果丢失”，严重影响生产可靠性。例如，#44925 中用户 @IIIyban 详细列举了三种子智能体静默失败模式；#43367 的 @waliddafif 指出并发配置导致“只有一个子集真正被创建”。
- **安全顾虑持续升温**：#25592 的文字泄露让内部处理逻辑暴露于聊天窗口，#11829 的安全路线图长期未闭环，#31583 的环境变量缺失直接妨碍密钥注入，用户 @cwebb77 明确表达“无法注入 GOG_KEYRING_PASSWORD”。
- **性能回退引发运维焦虑**：#85333 的 `doctor --fix` 耗时翻倍，@samson1357924 在 Oracle Cloud VPS 上实测出 55s→229s 的退化，强调“生产环境不可接受”。
- **文档与行为不一致**：引导文件忽略（#29387）、头像端点 404（#38439）、错误提示困惑（#52972 已关闭）等表明用户体验细节尚存较多摩擦。
- **功能缺口具体且强烈**：私有网络访问请求获 👍 11，数学公式渲染获 👍 9，Telegram Business Bot 获 👍 6，显示用户对扩展工作边界和商业场景集成的迫切需求。

---

## 8. 待处理积压
以下为长期未响应或虽有关联 PR 但未合并的高优先级条目，提醒维护者关注：

- **#25592** (P1, 安全) 创建于 2026-02-24，有关联 PR 但至今未合并，需产品、安全多部门决策。
- **#44925** (P1, 消息丢失) 创建于 2026-03-13，修复 PR 挂起，子智能体可靠性基础问题未解。
- **#11829** (安全路线图) 创建于 2026-02-08，仅讨论未实质性推进。
- **#37634** (P1, 沙箱隔离) 创建于 2026-03-06，`workspaceAccess: none` 仍不可写，获 👍 7，未有新修复 PR。
- **#43367** (P1, 多智能体编排) 创建于 2026-03-11，无修复 PR，用户 @waliddafif 的完整用例仍待响应。
- **#85333** (P1, 性能回归) 创建于 2026-05-22，无修复 PR，且出现“no-new-fix-pr”标签，表明修复可能受阻。
- **#29387** (P1, 引导文件忽略) 创建于 2026-02-28，有 PR 链接但未合并，影响用户对智能体个性化配置的信任。

此外，多个功能请求如 #22438（2月）、#42475（3月）等虽标记为 P2，但已积压数月，社区关注度未减。

---

*注：本日报仅基于提供的 GitHub 数据片段生成，实际项目全貌可能超出所展示范围。*

---

## 横向生态对比

# 开源个人 AI 助手项目横向对比日报
**日期：2026-07-08**

## 1. 今日横向概览
今日 OpenClaw 继续以极高的问题和合并量处理消息泄露、会话状态丢失等核心稳定性缺陷；NanoBot 爆发同类型 WebUI 令牌未鉴权漏洞并快速跟进 WhatsApp 群组回归等问题；Zeroclaw 聚焦 MCP 工具过滤失效、内存增长和 shell 安全确认策略；PicoClaw 活动量较低，新报告一个速率限制不生效的缺陷，同时关闭了停滞的 Android ADB 功能 PR。四个项目今日均无新版本发布，整体处于密集修复和需求梳理阶段。

## 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新（活跃/关闭） | 今日 PR 更新（待合并/已合并关闭） | 新发布 | 事实性备注 |
|------|---------------------------|----------------------------------|--------|------------|
| OpenClaw | 500（380 / 120） | 500（355 / 145） | 无 | 问题集中在消息泄露、会话状态丢失、沙箱隔离与多智能体编排，大量 P1 缺陷有修复 PR 但未合并 |
| NanoBot | 12（9 / 3） | 29（20 / 9） | 无 | 爆发 3 个本地环回 WebUI 令牌安全漏洞；WhatsApp 群组控制回归、多模态崩溃等有对应修复 PR |
| Zeroclaw | 23（19 / 4） | 50（44 / 6） | 无 | MCP 工具过滤、内存增长、SOP 审批绕过等高风险项均有修复 PR；大型功能 PR 积压 |
| PicoClaw | 7（5 / 2） | 4（3 / 1） | 无 | 新报告速率限制不生效缺陷；关闭停滞的 ADB 功能 PR；多个 stale Bug 无修复 |

## 3. OpenClaw 与同类对照
仅基于今日数据，OpenClaw 的活动量（Issue 500 条、PR 500 条）远高于其他三个项目，社区讨论热度、缺陷等级和复杂度也明显高出。其技术重点集中于多智能体编排的可靠性（子智能体结果丢失、并发配置覆盖）、沙箱隔离失败和消息管道泄露等深层基础设施问题，而 NanoBot、Zeroclaw 更多关注特定通道集成安全、工具链过滤与 WebUI 可用性。OpenClaw 的社区讨论面横跨安全路线图、性能回归、记忆系统等，反驳同类项目多围绕单通道或单模块的应急修复。

## 4. 共同出现的技术方向
今日多项目共同暴露的需求或风险包括：

- **消息/工具调用泄露与状态丢失**：OpenClaw（#25592 工具调用文字泄露至消息渠道，#44925 子智能体结果静默丢失）、NanoBot（工具准备阶段异常被静默吞掉）、PicoClaw（豆包模型工具调用 XML 泄露至对话）、Zeroclaw（技能 prompt 与注册表不匹配导致工具误导）均出现此类问题。
- **本地与 WebUI 访问令牌安全**：NanoBot 连续 3 个未鉴权令牌漏洞，OpenClaw 安全路线图（#11829）持续关注 API 密钥保护，两者共同指向本地部署环境下的凭证防护盲区。
- **shell 与工具执行安全控制**：Zeroclaw（#7155 提出每次高风险 shell 需人工确认策略）、OpenClaw（#31583 exec 工具不继承环境变量，影响密钥注入）和企业安全相关需求。
- **性能与内存稳定性**：OpenClaw（`doctor --fix` 性能回归 4-5 倍）、Zeroclaw（MCP 工具 schema 克隆导致 OOM）均出现资源消耗异常问题。

涉及项目：OpenClaw、NanoBot、Zeroclaw、PicoClaw。

## 5. 差异化定位分析

- **功能侧重**
  - OpenClaw：多智能体协作、会话状态管理、沙箱隔离、跨通道安全，面向复杂生产级个人助手。
  - NanoBot：多通道即时通信（WhatsApp、飞书、Telegram、Matrix 等）和 WebUI 交互，注重开箱即用与集成易用性。
  - Zeroclaw：技能（Skills）系统、MCP 工具链、SOP（标准操作流程）编排与安全策略细粒度控制（如 shell 确认、工具过滤）。
  - PicoClaw：轻量边缘设备助手，接入简单模型和通道（Delta Chat、实验性 ADB），追求低资源占用和小巧形态。

- **目标用户**
  - OpenClaw：需要多智能体、多通道生产环境的企业或高级开发者。
  - NanoBot：希望快速搭建多渠道机器人的个人用户或小团队，技术门槛相对较低。
  - Zeroclaw：注重技能编排、工具安全与流程自动化的中高级开发者。
  - PicoClaw：在嵌入式设备或低配环境上运行助手的爱好者或开发者。

- **技术架构关键差异**
  - OpenClaw：拥有复杂沙箱、多通道网关、Memory Wiki、Agent 引导系统等重型基础设施。
  - NanoBot：基于插件式通道和 WebUI 的单实例多通道架构，相对轻量。
  - Zeroclaw：围绕 Skills、MCP、SOP 和安全策略构建的 agent 框架，工具动态注入与计量化 providers。
  - PicoClaw：最简工具集与网关适配，代码量少，依赖简单。

## 6. 社区活跃度记录
基于今日 Issue/PR 更新数量及发布情况，可划分为：

- **高活跃**：OpenClaw（日 500 Issue / 500 PR，讨论深度和广度突出）
- **中等活跃**：Zeroclaw（23 / 50，大量功能 PR 与安全修复并行）、NanoBot（12 / 29，快速响应渠道回归与安全漏洞）
- **低活跃**：PicoClaw（7 / 4，多项 Bug 进入 stale，维护者回应滞后）

四个项目今日均无版本发布，表明均处于修复积压与功能迭代并行、尚未达到发版阈值的阶段。

## 7. 有证据支撑的观察

1. **多项目同时遭遇消息/工具调用泄露与吞错问题**
   OpenClaw（工具调用文字泄露、子智能体静默丢失）、NanoBot（工具准备吞错）、PicoClaw（工具调用 XML 泄露）、Zeroclaw（技能提示词与工具注册表不匹配）暴露出 agent 与工具链交互的可靠性在复杂场景下普遍不足，成为跨项目痛点。

2. **本地 WebUI 访问凭证安全成盲区**
   NanoBot 今日一研究员连续报告 3 个令牌未鉴权漏洞，OpenClaw 安全路线图长期关注 API 密钥保护。两个项目同时出现此类问题，说明在开源个人助手领域，localhost 假设下的访问控制设计被忽视。

3. **安全修复 PR 与漏洞报告存在响应差距**
   OpenClaw 多个 P1 漏洞虽有修复 PR 但长期未合并；NanoBot 令牌漏洞尚无维护者回复；Zeroclaw 部分高风险缺陷已由对应 PR 覆盖，但大型功能 PR 积压；PicoClaw 多项 Bug 无修复 PR 而被标记 stale。维护资源与社区需求之间的张力在今天数据中清晰可见。

4. **OpenClaw 在问题复杂度与社区讨论深度上显著领先**
   其讨论涉及多智能体编排、沙箱隔离、性能回归、安全路线图等系统级课题，Issue 评论数和标签集中度远高于其他项目，反映出该项目的企业级多场景定位和更大规模的用户基础。

5. **性能与内存稳定性是多个项目的潜在风险**
   OpenClaw 的 `doctor --fix` 性能退化

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-08

## 1. 今日活动概览
过去 24 小时 NanoBot 主仓库共产生 12 条 Issue 更新（9 条活跃/新开，3 条关闭）和 29 条 PR 更新（20 条待合并，9 条已合并或关闭），但无新版本发布。社区集中爆出 3 个同类型的本地环回 WebUI 令牌安全漏洞，同时 WhatsApp 群组回归、工具验证吞错、流式回复与 WebUI 队列混乱等回归问题被快速跟进，大部分关键问题已有对应的修复 PR 提出。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日关闭了 3 个 PR，即完成了以下工作落地：
- **飞书新会话分隔消息** — [#4763](https://github.com/HKUDS/nanobot/pull/4763) 已关闭，使飞书渠道的 `/new` 指令以系统分隔消息形式呈现，避免冗余文本气泡。
- **提供商托管型网页搜索支持** — [#3743](https://github.com/HKUDS/nanobot/pull/3743) 关闭，引入对 Azure OpenAI Responses API 等提供商原生 web search 工具的支持。
- **Agent 内部回调简化与清理** — [#3232](https://github.com/HKUDS/nanobot/pull/3232) 关闭，重构了任务完成回调逻辑并恢复了遗漏的代码块。

## 4. 社区热点
- **LLM 流停滞超过 90 秒** — [#4013](https://github.com/HKUDS/nanobot/issues/4013) (已关闭，6 条评论)
  用户 @mxnbf 反馈从 0.1.5post2 升级到 0.2.0 后频繁遇到“stream stalled for more than 90 seconds”错误，怀疑与硬编码的长任务目标有关，反映在 webui 下几乎无法正常工作。该问题在社区引发较多讨论，现已关闭（可能是上游修复或配置调整）。
- **连续 3 个本地 WebUI 令牌未鉴权漏洞** — [#4825](https://github.com/HKUDS/nanobot/issues/4825) [#4826](https://github.com/HKUDS/nanobot/issues/4826) [#4827](https://github.com/HKUDS/nanobot/issues/4827)
  同一安全研究员 @YLChen-007 在一天内报告了三个高度相关的安全问题，指出当 `tokenIssueSecret` 及静态 `token` 均未配置时，任意本地进程可通过 `/webui/bootstrap` 接口获得有效的 API 持有者令牌。目前这几个 Issue 均无评论，但因其严重性，受到匿名关注和赞同。
- **WhatsApp 群组 allowFrom 失效** — [#4823](https://github.com/HKUDS/nanobot/issues/4823) (3 条评论)
  用户 @mxnbf 详细描述了 0.2.2 前版本允许通过群组 ID 限制群聊，更新后该机制破裂，导致机器人在所有群内回复，引发隐私与频控担忧。对应修复 PR [#4834](https://github.com/HKUDS/nanobot/pull/4834) 已提交。

## 5. Bug 与稳定性
**严重（安全 / 崩溃）**
- **WebUI 引导令牌未鉴权**（3 个 Issue，见 4.热点）— 暂无直接对应的修复 PR，但已有相关 PR [#4669](https://github.com/HKUDS/nanobot/pull/4669) 要求 `serve` 命令强制 API 密钥，部分缓解风险。
- **多模态消息 `.strip()` 导致崩溃** — [#4800](https://github.com/HKUDS/nanobot/issues/4800) 已由 [#4837](https://github.com/HKUDS/nanobot/pull/4837) 修复。
- **工具准备阶段 `suppress(Exception)` 吞掉验证错误** — [#4805](https://github.com/HKUDS/nanobot/issues/4805) 同 [#4837](https://github.com/HKUDS/nanobot/pull/4837) 修复。
- **WebUI 登陆消息可能错发至已有聊天** — [#4835](https://github.com/HKUDS/nanobot/issues/4835) 已有修复 PR [#4836](https://github.com/HKUDS/nanobot/pull/4836)。

**中等**
- **Slack 依赖 `aiohttp` 缺失导致插件无法启用** — [#4829](https://github.com/HKUDS/nanobot/issues/4829) 已有修复 PR [#4830](https://github.com/HKUDS/nanobot/pull/4830)。
- **WhatsApp 群组允许列表失效（回归）** — [#4823](https://github.com/HKUDS/nanobot/issues/4823) 已有修复 PR [#4834](https://github.com/HKUDS/nanobot/pull/4834)。
- **Matrix 设备显示为“未信任”** — [#4841](https://github.com/HKUDS/nanobot/issues/4841) 暂无修复 PR。描述跨签名与 SAS 验证路径缺失，影响 Element 客户端使用。

**已修复**
- **DNS 重绑定 TOCTOU 在 SSRF 校验中的问题** — [#4611](https://github.com/HKUDS/nanobot/issues/4611) 已关闭，推测已纳入安全加固。
- **LLM 流停滞 90 秒** — [#4013](https://github.com/HKUDS/nanobot/issues/4013) 已关闭。

## 6. 功能请求归类
- **WebUI 文件编辑差异视图** — [#4828](https://github.com/HKUDS/nanobot/pull/4828) 提出使用标准 unified diff 在 WebUI 展示文件编辑变更。
- **WebUI 文档附件支持** — [#4771](https://github.com/HKUDS/nanobot/pull/4771) 拓展附件上传类型到 PDF 等文档。
- **MCP 服务器空闲超时自动终止** — [#4506](https://github.com/HKUDS/nanobot/pull/4506) 增加 `idle_timeout` 配置避免僵尸进程资源泄漏（仍为冲突，未合并）。
- **提供商托管的网页搜索** — [#3741](https://github.com/HKUDS/nanobot/issues/3741) (已关闭) 通过 [#3743](https://github.com/HKUDS/nanobot/pull/3743) 落地。
- **CLI Shift+Enter 支持** — [#4832](https://github.com/HKUDS/nanobot/pull/4832) 修复特定终端上多行输入时转义字符残留问题。
- **QQ 自动重连指数退避** — [#4838](https://github.com/HKUDS/nanobot/pull/4838) 改善连接稳定性。
- **WebUI 自动化来源标记保留** — [#4822](https://github.com/HKUDS/nanobot/pull/4822) 修复流式回复中 metadat 丢失。
- **持续性目标工具的运行时门控** — [#4833](https://github.com/HKUDS/nanobot/pull/4833) 将长期目标工具替换为基于运行时模式动态注入，减少模型可见决策空间。

## 7. 用户反馈摘要
- **升级体验恶化**：@mxnbf 在 [#4013](https://github.com/HKUDS/nanobot/issues/4013) 中表示 0.2.0 后的流式稳定性显著下降，“any real work useless”，需反复请 AI 继续，产生糟糕的使用体验。
- **群聊隐私恐慌**：同样来自 @mxnbf（[#4823](https://github.com/HKUDS/nanobot/issues/4823)），指出 WhatsApp 群组允许控制失效后，机器人无差别地在所有群内发言，用户直言“我可以预见到这会导致什么”，表现出对隐私泄露的强烈担忧。
- **Slack 插件不可用**：@alekwo（[#4829](https://github.com/HKUDS/nanobot/issues/4829)）发现 Slack 构建依赖缺失，导致直接无法启用插件，表明渠道集成测试覆盖不足。
- **安全隐忧明确**：@YLChen-007 连续提交 3 个令牌泄露漏洞，说明无密本地使用时严重安全盲区。
- **Matrix 信任异常困惑**：@orrinwitt（[#4841](https://github.com/HKUDS/nanobot/issues/4841)）反馈在新版 Element 客户端下无法清除“未信任”警告，希望项目提供手动验证路径。
- **工具错误被静默吞掉**：@hamb1y（[#4805](https://github.com/HKUDS/nanobot/issues/4805)）指出 validator 错误消失导致排错困难，促使 #4837 修复。

## 8. 待处理积压
- **#4506 MCP 空闲超时 PR** — 打开 13 天，仍为冲突状态，关乎资源泄漏修复，需要关注。
- **#4764 MCP 网关取消作用域隔离** — 由于 streamable-http 超时导致网关崩溃的修复 PR，仍为冲突，影响 MCP 稳定性。
- **#4841 Matrix 信任问题** — 今日新建，尚无响应，影响 E2EE 场景下的初次启动体验。
- **系列安全漏洞 #4825 ~ #4827** — 虽为今日报告，但严重性高，尚未见维护者分配或处理进展，需要优先评审。

*注：以上链接均为 https://github.com/HKUDS/nanobot 下的对应编号。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 | 2026-07-08

## 1. 今日活动概览
过去 24 小时内，项目 Issue 活跃度较高，共 23 条更新，其中新开/活跃 19 条、关闭 4 条；Pull Request 更新达 50 条，其中 6 条已合并/关闭，其余 44 条仍待审核。无新版本发布。主要活动集中在 MCP 工具过滤、技能与安全策略对齐、shell 命令确认、内存增长修复、文档错误反馈等关键问题，多个高风险缺陷已有对应 fix PR 进入 review 阶段。

## 3. 项目进展
今日共有 **6 项 PR 被合并或关闭**，但提供的详情列表中未列出具体条目。从已关闭的 Issue 可推断部分进展：
- **RustSec 依赖修复**：Issue #8782（RUSTSEC-2026-0204 违规）已关闭，可能与依赖升级相关（对应 PR #8818 仍 open，但可能另有合并）。
- **SOP 审批 gate 绕过漏洞**：#8678 报告 `advance_step` 无运行状态 guard，已被关闭，推测已有修复合入主分支。
- **新技能创建能力**：#8815 希望 agent 能创建完整技能包，该 issue 今日被关闭，可能已通过实现或讨论达到结论。

由于 PR 合并详情未直接提供，以上仅为基于 Issue 状态的合理推断。

## 4. 社区热点
**讨论最活跃的 Issue：**
- **#6699 [MCP 工具过滤组无效]** 评论 9 次，持续数周。用户反馈 `tool_filter_groups` 对真实 MCP 工具完全无作用，存在前缀匹配错误，且与延迟加载机制无集成。维护者 Nick Pape 关注，今日仍在更新，对应 fix 在 PR #8819 中推进。
- **#7155 [高安全 shell 命令确认策略]** 评论 6 次，新增“每次执行都需人工确认”的中间层及类 Claude Code 的 allow/ask/deny 模式，以满足细粒度安全控制需求。此需求有 RFC 标签，表明涉及架构设计，关注度持续。

**值得关注的 PR：**
- **PR #8690** 为 `/model --agent` 增加发送者授权门控，避免权限泄漏，涉及安全策略，标签 `risk:high`，今日仍在活跃更新。
- **PR #8821** 引入 `run_model_query` 计量化 provider 接口，旨在让 agent 在达到最大迭代时优雅生成摘要，是技能系统与 token 控制的关键增强。

## 5. Bug 与稳定性
今日报告或活跃的缺陷主要集中在运行时、技能、MCP 及门户层，以下是按严重程度排列的关键条目：

**高风险 (S1/S2)**
- **#8678 SOP 审批 gate 绕过** (S2, risk:high) – `advance_step` 缺少运行状态检查，驱动者可绕过审批。**已关闭**，可能已修复。
- **#8642 MCP 工具 schema 克隆导致内存无限制增长** (risk:high) – 每个迭代都会深度克隆工具 schema，引发 WSL2 下 OOM。**有 fix PR #8817**（Arc 共享 schema）正在 review 中。
- **#6699 MCP 工具过滤组无作用** (risk:high) – 过滤器按名称前缀误判，导致 MCP 工具过滤完全失效。**有 fix PR #8819** 正在处理。
- **#8804 技能 prompt 广告的工具集与注册表不匹配** – 提示词只按种类列工具，导致 MCP 缺失、权限提升工具过度列出。**有 fix PR #8805** 对齐 register 逻辑。
- **#8787 技能注册的工具绕过 allowed_tools/excluded_tools** – 注册时未检查 `SecurityPolicy`，权限控制被绕过。**有 fix PR #8788** 应用 denylist。
- **#8794 停止 agent 后上下文丢失** (S1) – 中途停止会导致整个推理步骤被丢弃，后续消息无记忆，工作流被阻断。**无明确 fix PR**，需关注。

**中低风险**
- **#8800 Windows 端口残留** (S2) – 进程被杀后端口仍处于 LISTENING/CLOSE_WAIT 状态，新守护进程无法绑定。暂无关联修复 PR。
- **#6698 Fluent 区域文件滞后** (S2) – 多语言文件缺少关键翻译，影响国际化体验。无 PR。
- **#8797 Telegram 配置文档引用未知属性** (S3) – 引导流程不一致，用户困惑。无 PR。
- **#8810 文档中 Telegram 示例错误** (S2) – 社区用户指出文档与命令输出不符，存在“slop”。无 PR。
- **#8791 / #8792 Web 仪表板 UI 缺陷** – 侧边栏宽度错误导致水平滚动条、Skills 导航项缺失，影响使用体验。无 PR。

## 6. 功能请求归类
今日开放或更新的功能相关需求与对应的 PR 包括：

- **Shell 安全增强 (#7155)**：每次执行高风险 shell 命令均需手动确认 + allow/ask/deny 模式匹配策略。尚无直接对应 PR。
- **预构建全通道资产 (#7952)**：除默认预构建外，提供包含所有通道的 `channels-full` 二进制包，以消除配置通道时的困惑。状态 blocked，需维护者审核。
- **日志配置热重载 (#8314)**：期望修改 `log_persistence` 等设置后无需重启守护进程。**有 PR #8816** 正在实施。
- **Web 仪表板体验优化**：
  - 折叠已完成回合的中间步骤成单一卡片 (#8803) – 无 PR。
  - 合并 `/ws/chat` 与 `/acp` 为统一协议 (#8798) – RFC 阶段，无 PR。
- **技能管理新增 `create` 行为 (#8815)**：允许 agent 直接创建完整技能 bundle，而非散落的 `.md` 文件。**该 Issue 已关闭**。
- **SOP 可视化创作 (#8736)**：跟踪 PR #8590 引入的节点图编辑器、实时运行覆盖、通道 fan-in 等功能，该 PR 规模巨大（XL），尚在开发中。
- **Cron 任务暴露 `uses_memory` 标志 (#8676)**：通过 CLI、工具和网关 API 让 agent 可设置此字段。有对应 PR。
- **技能 prompt_injection_mode 运行时覆盖 (#8235)**：允许每个 agent 独立配置注入模式，PR 已 open。
- **Inkbox 原生通道 (#8384)**：新增邮件/短信/语音/iMessage 通道及快速安装引导，PR 规模 XL，状态 open。
- **TodoWrite 任务追踪 (#8639)**：实现类似 Claude Code 的实时只读任务列表，PR 标记为 XL。

## 7. 用户反馈摘要
从 Issue 摘要及标题可提炼出社区的真实痛点：

- **安全与可控性焦虑**：用户强烈希望获得细粒度的 shell 命令确认策略（#7155）、MCP 工具访问控制生效（#6699）、技能工具纳入安全策略（#8787），并修复 SOP 审批绕过漏洞（#8678）。说明多 agent 与生产环境部署对权限隔离要求很高。
- **内存与稳定性困扰**：Windows 下僵尸端口（#8800）和 MCP 工具 schema 克隆导致的内存膨胀（#8642）直接影响长期运行稳定性，开发者特意从 OOM 跟踪中拆分问题，反馈急迫。
- **文档与开发体验**：多个渠道的配置文档错误（#8797, #8810）、区域文件翻译滞后（#6698），以及技能提示词误导（#8804）被多次指出，社区对“零配置”和“信实文档”期望较高。
- **工作流中断**：停止 agent 后上下文全部丢失（#8794）被标记为 S1（工作流阻塞），用户反映严重破坏调试与连续性体验。
- **Web UI 打磨**：侧边栏布局问题、缺失导航、无法折叠过多中间步骤等反馈，表明仪表板作为主要交互入口，用户对可用性敏感。

## 8. 待处理积压
以下 Issue 或 PR 长期开放且标签显示需要维护者介入，建议关注：

- **#6699** (59 天) – MCP 工具过滤根本性失效，虽有活跃 PR #8819，但需尽快合并以修复高风险错误。
- **#7952** (19 天) – 全通道预构建需求，标记 `blocked` 与 `needs-maintainer-review`，停滞无回应。
- **#8073** (18 天) – v0.8.3 可观测性/文档/依赖/发布跟踪任务，无评论，可能遗漏。
- **#8736** (3 天) – SOP 创作表面跟踪，但没有讨论，而对应 PR #8590 尺寸极大（XL），需评估拆解。
- **PR #8590** – SOP 可视化创作，代码量大、涉及面广，开放一周无详细 review 记录，可能阻塞后续 SOP 功能。
- **PR #8384** – Inkbox 通道，XL 规模，长期 open，需要社区或维护者集中 review。

---

*今日数据反映出项目在安全性、内存管理和多通道体验上正进行密集修复与迭代，多个高风险缺陷已有针对性补丁，但文档与 UI 细节仍需打磨，且大型功能 PR 的 review 积压或成为近期瓶颈。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-07-08

---

## 1. 今日活动概览
过去 24 小时，PicoClaw 仓库共有 7 条 Issues 更新（5 条仍开放，2 条关闭）和 4 条 Pull Requests 更新（3 条待审查，1 条关闭），无新版本发布。今日最为突出的变化是一个关于速率限制不生效的新 Bug 被提交，此外一个停滞已久的 Android ADB 功能 PR 被关闭，项目轻量 Delta Chat 重构与文件写入修复 PR 仍在等待审查。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 项目进展
- **已关闭 PR**：[#3157](https://github.com/sipeed/picoclaw/pull/3157) *feat: add Android ADB remote operations tool* 因停滞（stale）被关闭。该 PR 曾尝试添加 Android ADB 实验性远程操作工具，提供设备列表、截图、UI 层次结构、点击、滑动、文本输入等固定原语，未合并。
- **待审查 PR**：
  - [#3233](https://github.com/sipeed/picoclaw/pull/3233) *Fix pr 3222 backward compat* 今日新开，针对 [#3222](https://github.com/sipeed/picoclaw/pull/3222) 的重构进行向后兼容修复。
  - [#3222](https://github.com/sipeed/picoclaw/pull/3222) *refactor(deltachat): cleanup implementation, documentation -320LOC* 对 Delta Chat 集成进行了大幅清理，移除旧功能、硬编码列表，并重命名 API。
  - [#3226](https://github.com/sipeed/picoclaw/pull/3226) *fix(tools): stop write_file from coaching destructive overwrite (#3150)* 修复 `write_file` 工具在文件存在时诱导模型使用 `overwrite` 导致破坏性覆盖的问题。

上述 PR 均未合并，反映了社区对稳定性与代码质量的持续打磨。

---

## 4. 社区热点
- **[已关闭] [#3093](https://github.com/sipeed/picoclaw/issues/3093) *[Feature] I need SimpleX or tox***
  作者请求在 PicoClaw 中集成 SimpleX、Wire 或 Tox 网关，该 Issue 自从 2026-06-10 创建后获得 5 条评论和 1 个赞，于昨日关闭（被标记为 stale）。讨论反映出对端到端加密通信渠道的需求，但项目维护方未采纳。

- **[开放] [#3153](https://github.com/sipeed/picoclaw/issues/3153) *[BUG] Volcengine Doubao Seed tool calls occasionally leak as <seed:tool_call> text***
  3 条评论，关注度一般，但问题明确：使用火山引擎豆包模型时，工具调用的 XML 内容偶尔会直接泄露给用户而非被执行。因长时间未修复，已标记为 stale。

---

## 5. Bug 与稳定性
今日报告或持续的 Bug 按影响程度排列：

| 严重度 | Issue | 描述 | 状态 | 关联修复 |
|--------|-------|------|------|----------|
| 高 | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | 仅配置单一模型且未设置 fallback 时，速率限制完全不生效（PicoClaw 0.3.1）。 | 今日新开 | 无 |
| 中 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 工具调用 XML 泄露，影响对话可靠性。 | Open (stale) | 无 |
| 中 | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | NanoKVM 上配置 GPT-5.4 默认配置无法使用，所有交互返回错误。 | Open (stale) | 无 |
| 中 | [#3159](https://github.com/sipeed/picoclaw/issues/3159) | 连续提问不同主题时 AI 错误重复上一个任务（deepseek-v4-flash-free）。 | Closed (stale) | 无（可能已间接修复或自动关闭） |
| 低 | [#3197](https://github.com/sipeed/picoclaw/issues/3197) [#3196](https://github.com/sipeed/picoclaw/issues/3196) | Codex / Antygravity OAuth 登录失败，两个 Issue 可能重复。 | Open (stale) | 无 |

值得注意的是多个 Bug 因长期未活动被标记 stale，但没有对应的修复 PR，表明维护力量暂未覆盖这些模块。

---

## 6. 功能请求归类
- **即时通信协议集成**：
  [#3093](https://github.com/sipeed/picoclaw/issues/3093) 请求支持 SimpleX、Wire 或 Tox，用于构建具备隐私网关的助手。该请求已关闭，未进入实现。
- **Android 设备控制**：
  [#3157](https://github.com/sipeed/picoclaw/pull/3157) 由社区贡献者提交的实验性 ADB 工具，因停滞被关闭，功能未进入主干。
- **现有模型 OAuth 支持修复**：
  [#3197](https://github.com/sipeed/picoclaw/issues/3197) 与 [#3196](https://github.com/sipeed/picoclaw/issues/3196) 间接表达了用户对 Codex 和 Antygravity 登录功能可用的需求，本质上是缺陷而非新功能。

---

## 7. 用户反馈摘要
从 Issue 摘要和描述中可提取以下真实痛点：
- **工具调用稳定性**：用户 @ms8great 反馈豆包模型的工具调用会以原始 XML 形式泄露，破坏了任务执行流程。
- **平台兼容性**：@rtadams89 在 NanoKVM 环境中未能顺利启动 PicoClaw 搭配 GPT-5.4，配置文档未能解决连接失败问题。
- **重复行为与状态管理**：@oKatTjC 报告在跨主题提问时，助手会不必要地重复先前任务，影响效率。
- **认证流程异常**：@nyawitniorang 在两个 Issue 中指出 OAuth 登录对特定提供商失效，但未得到响应，用户可能感到被忽视。
- **资源控制策略失效**：@VictorSu000 敏锐地发现未配置 fallback 时速率限制策略完全跳过，这对依赖 API 配额的用户构成风险。

社区整体对可靠性、配置边界和错误处理有明确期待，但维护方回应滞后。

---

## 8. 待处理积压
下列 Issue/PR 因长时间无活动已被系统标记为 stale，但问题依然存在，建议维护者优先关注：
- **[#3153](https://github.com/sipeed/picoclaw/issues/3153)** 工具调用泄露（22 日未解决）
- **[#3195](https://github.com/sipeed/picoclaw/issues/3195)** NanoKVM 兼容性（8 日未解决）
- **[#3197](https://github.com/sipeed/picoclaw/issues/3197) [#3196](https://github.com/sipeed/picoclaw/issues/3196)** OAuth 登录失效（8 日未解决，可能重复）
- **[#3157](https://github.com/sipeed/picoclaw/pull/3157)** ADB 工具 PR（已关闭，但可作为社区贡献的参考存档）

以上 Issue 多数涉及用户实际无法使用功能的场景，持续积压可能影响项目信任度。

---

</details>