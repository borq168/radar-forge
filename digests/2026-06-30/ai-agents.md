# OpenClaw 生态日报 2026-06-30

> Issues: 375 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-30 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去24小时内，OpenClaw 项目保持高频迭代，共更新 375 条 Issues（新开/活跃 304 条，关闭 71 条）和 500 条 PR（待合并 447 条，已合并/关闭 53 条）。今日无新版本发布，社区讨论主要集中在多通道消息投递的稳定性、底层存储引擎重构以及跨平台客户端支持。核心维护者正在推进会话存储向 SQLite 迁移及多项通道级（Telegram/Discord/iMessage）的安全与功能修复。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日合并或推进了多个重要 PR，主要涉及底层架构重构与通道能力增强：
- **存储引擎重构**：PR [#96625](https://github.com/openclaw/openclaw/pull/96625) 推进了将 sessions 和 transcripts 翻转至 SQLite 存储的重构，使 SQLite 成为会话元数据和转录事件的规范运行时存储，逐步替代原有的 JSON/JSONL 文件。
- **子 Agent 模型继承**：PR [#89469](https://github.com/openclaw/openclaw/pull/89469) 实现了原生子 Agent 生成时继承请求者会话的活跃模型（`model: "inherit"`），简化多 Agent 协作配置。
- **通道能力增强**：PR [#97806](https://github.com/openclaw/openclaw/pull/97806) 为 Telegram 增加了 bot-to-bot 策略基础；PR [#96106](https://github.com/openclaw/openclaw/pull/96106) 修复了在 Discord 上展示 Anthropic 推理过程和工具调用前注释的问题。
- **安全与权限控制**：PR [#97961](https://github.com/openclaw/openclaw/pull/97961) 限制了 iMessage 群组管理操作，要求所有者授权或 `operator.admin` 权限；PR [#97952](https://github.com/openclaw/openclaw/pull/97952) 要求原生 Codex 控件必须具备管理员权限。

## 4. 社区热点
- **跨平台客户端诉求**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 是关于 Linux/Windows Clawdbot Apps 的长期需求，今日依然活跃（110 条评论，81 个赞），用户强烈期望获得与 macOS 同等功能的桌面端应用。
- **Telegram 新特性支持**：Issue [#79077](https://github.com/openclaw/openclaw/issues/79077) 讨论了对 Telegram 5月发布的 Guest Bots 和 Bot-to-Bot 通信功能的支持，相关 PR [#97806](https://github.com/openclaw/openclaw/pull/97806) 已提交并进入审查阶段。
- **DeepSeek 缓存命中率问题**：Issue [#94518](https://github.com/openclaw/openclaw/issues/94518) 引起较多关注（8 个赞），用户反馈升级到 6.x 版本后，DeepSeek 的提示缓存命中率跌至 10% 以下，怀疑是边界感知缓存破坏了前缀匹配。

## 5. Bug 与稳定性
今日报告了多个影响消息投递和系统稳定性的问题：
- **P0 级安全/权限**：
  - iMessage 群组操作权限绕过：PR [#97961](https://github.com/openclaw/openclaw/pull/97961) 修复了非授权调用者修改 iMessage 群组成员和元数据的问题。
- **P1 级消息丢失与阻塞**：
  - 会话写锁超时阻塞子 Agent 投递：Issue [#86538](https://github.com/openclaw/openclaw/issues/86538) 报告 Session JSONL 写锁超时导致主通道和子 Agent 通道消息丢失。
  - Telegram 消息静默丢失：Issue [#80520](https://github.com/openclaw/openclaw/issues/80520) 报告网关接收并处理了消息，但未记录 `sendMessage` API 调用，用户收不到回复。
  - 计费/配额拒绝导致 Followup Agent 静默丢弃消息：Issue [#80700](https://github.com/openclaw/openclaw/issues/80700) 指出模型提供商拒绝请求时，入站消息被静默丢弃，无任何用户提示。
  - Discord 服务器回复回归：Issue [#81484](https://github.com/openclaw/openclaw/issues/81484) 报告 2026.5.7 版本中 Discord 频道回复间歇性失败或进入重复出站循环。
- **P1 级性能与回归**：
  - CLI 命令冷启动回归：Issue [#82070](https://github.com/openclaw/openclaw/issues/82070) 报告升级到 2026.5.12 后，Linux 上所有 CLI 命令出现约 14 秒的冷启动延迟。
  - 嵌入式运行 "auth" 阶段阻塞：Issue [#75782](https://github.com/openclaw/openclaw/issues/75782) 报告 auth 阶段同步耗时 10-15 秒，阻塞事件循环。
  - 代理 NO_PROXY 匹配失效：PR [#97713](https://github.com/openclaw/openclaw/pull/97713) 修复了设置 `HTTPS_PROXY` 时，全局 undici 调度器未正确应用 `NO_PROXY` 导致内部插件请求被错误路由的问题。

## 6. 功能请求归类
- **通道与集成**：
  - 支持 Telegram bot-to-bot 和 guest-bot 模式（Issue [#79077](https://github.com/openclaw/openclaw/issues/79077)，PR [#97806](https://github.com/openclaw/openclaw/pull/97806)）。
  - 为斜杠命令描述添加 i18n 字段，以支持中文等非英语用户（Issue [#79458](https://github.com/openclaw/openclaw/issues/79458)）。
- **插件与 SDK**：
  - 允许 Skill 作者定义 setup hook，在安装/更新后运行自定义脚本（Issue [#80213](https://github.com/openclaw/openclaw/issues/80213)）。
  - 暴露稳定的插件 SDK 接口，用于已安装 Skill 的工作流（Issue [#81913](https://github.com/openclaw/openclaw/issues/81913)）。
- **用户体验**：
  - 允许在 onboarding 流程中配置多个提供商和模型（Issue [#81960](https://github.com/openclaw/openclaw/issues/81960)）。

## 7. 用户反馈摘要
- **消息投递的“静默失败”痛点**：多位用户反馈在 Telegram、Discord 以及遇到模型计费限制时，系统倾向于“静默丢弃”消息而不向用户发送错误通知（如 [#80520](https://github.com/openclaw/openclaw/issues/80520), [#80700](https://github.com/openclaw/openclaw/issues/80700)），这导致用户误以为 Agent 未响应，严重影响交互体验。
- **升级后的性能与成本焦虑**：用户反馈升级到 6.x 后 DeepSeek 缓存命中率暴跌（[#94518](https://github.com/openclaw/openclaw/issues/94518)），以及 CLI 冷启动和 Auth 阶段出现 10-15 秒的异常延迟（[#82070](https://github.com/openclaw/openclaw/issues/82070), [#75782](https://github.com/openclaw/openclaw/issues/75782)），表明近期版本迭代在性能优化和 API 兼容性上给部分用户带来了困扰。
- **多 Agent 协作的上下文丢失**：在子 Agent 生成和 Cron 隔离任务中，用户遇到上下文丢失、会话状态非确定性以及工具调用被错误截断的问题（[#81490](https://github.com/openclaw/openclaw/issues/81490), [#81514](https://github.com/openclaw/openclaw/issues/81514)），反映出复杂编排场景下的状态管理仍需完善。

## 8. 待处理积压
- **跨平台桌面端缺失**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 创建于 2026 年初，累积 110 条评论和 81 个赞，Linux 和 Windows 客户端的缺失仍是社区最大的未满足需求之一，目前被打上 `help wanted` 和 `needs-product-decision` 标签。
- **入站消息预路由 Hook 缺失**：Issue [#81061](https://github.com/openclaw/openclaw/issues/81061) 提出增加 `before_route_inbound_message` Hook 以支持通道桥接/代理，目前处于 `stale` 状态，但涉及架构扩展，需维护者评估。
- **CLI 会话元数据缺失**：Issue [#80286](https://github.com/openclaw/openclaw/issues/80286) 报告 `sessions --json` 缺少子 Agent 运行时的父级元数据，处于 `stale` 状态，影响依赖 CLI 进行自动化运维的用户。

---

## 横向生态对比

## 1. 今日横向概览
今日四个项目均无新版本发布，开发活动主要集中在底层架构优化、多智能体协作及通道适配上。OpenClaw 保持了极高的迭代频率，重点推进存储引擎重构与多通道消息稳定性修复；Zeroclaw 和 NanoBot 维持中等活跃度，分别聚焦于 SOP 记忆扩展、Provider 兼容性修复以及上下文压缩与沙箱安全增强；PicoClaw 活动量较小，主要围绕隐私通信网关接入与 LLM 计费优化展开。

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/已合并或关闭) | Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 304 / 71 | 447 / 53 | 无 | 推进 SQLite 存储重构，修复多通道消息静默丢失及权限绕过问题。 |
| **NanoBot** | 4 / 3 | 22 / 10 | 无 | 修复 Shell 路径提取安全绕过，优化上下文压缩以降低 Token 消耗。 |
| **Zeroclaw** | 43 / 7 | 40 / 10 | 无 | 增加 SOP 程序性记忆支持，修复 Kimi-code 等 Provider 流式工具调用报错。 |
| **PicoClaw** | 2 / 1 | 3 / 0 | 无 | 提议新增 DeltaChat 网关，引入 AWS Bedrock 提示缓存支持。 |

## 3. OpenClaw 与同类对照
- **活动量差异**：OpenClaw 的 Issues (375) 和 PRs (500) 数量远超其他三个项目总和，呈现显著的高频迭代特征，社区讨论与代码提交极为密集。
- **技术重点差异**：OpenClaw 侧重于底层存储引擎重构（向 SQLite 迁移）和复杂多通道（iMessage/Discord/Telegram）的权限与稳定性治理；Zeroclaw 偏向 SOP 记忆系统构建与多渠道适配；NanoBot 关注轻量级执行环境的安全沙箱与上下文 Token 优化；PicoClaw 则聚焦于特定网关协议扩展与云厂商 API 适配。
- **社区讨论面差异**：OpenClaw 社区讨论高度集中于跨平台桌面端缺失、消息静默失败及升级后的性能/成本回归；其他项目社区讨论更聚焦于具体场景痛点，如 NanoBot 的 Docker 依赖臃肿争议、Zeroclaw 的特定 Provider 兼容性报错以及 PicoClaw 的隐私通信网关诉求。

## 4. 共同出现的技术方向
- **Prompt Caching（提示缓存）与成本优化**：OpenClaw 面临 DeepSeek 缓存命中率暴跌问题 ([#94518](https://github.com/openclaw/openclaw/issues/94518))；NanoBot 修复了上下文截断导致前缀缓存失效的问题 ([#4222](https://github.com/HKUDS/nanobot/issues/4222))；PicoClaw 提交了 AWS Bedrock Prompt Caching 支持 ([#3163](https://github.com/sipeed/picoclaw/pull/3163))。
- **多智能体（Multi-Agent）协作与上下文管理**：OpenClaw 推进子 Agent 模型继承 ([#89469](https://github.com/openclaw/openclaw/pull/89469)) 并面临上下文丢失反馈 ([#81490](https://github.com/openclaw/openclaw/issues/81490))；NanoBot 推进原生 A2A 对等委托机制 ([#4571](https://github.com/HKUDS/nanobot/pull/4571)) 及子代理模型预设 ([#4291](https://github.com/HKUDS/nanobot/pull/4291))；Zeroclaw 讨论 A2A 代理发现机制 RFC ([#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218))。
- **通道/网关扩展与适配**：OpenClaw 增强 Telegram/Discord 能力并修复 iMessage 权限 ([#97806](https://github.com/openclaw/openclaw/pull/97806), [#97961](https://github.com/openclaw/openclaw/pull/97961))；Zeroclaw 新增 Inkbox、GitHub 渠道及 WhatsApp 位置支持 ([#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384), [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504))；PicoClaw 推进 DeltaChat 网关并讨论 SimpleX/Tox 需求 ([#3063](https://github.com/sipeed/picoclaw/pull/3063), [#3093](https://github.com/sipeed/picoclaw/issues/3093))。

## 5. 差异化定位分析
- **OpenClaw**：功能侧重全平台通道集成与复杂多 Agent 编排，目标用户为需要高可用、多通道消息投递的个人 AI 助手重度用户及开发者，技术架构正经历向 SQLite 规范存储的底层重构。
- **NanoBot**：功能侧重轻量级执行、安全沙箱与上下文压缩，目标用户为关注部署体积、API 调用成本及本地代码执行安全的开发者，技术架构强调单进程/轻量容器内的资源隔离。
- **Zeroclaw**：功能侧重 SOP（标准作业程序）记忆、事件源扩展及丰富的第三方渠道集成，目标用户为需要构建复杂自动化工作流和企业级 Agent 的团队，技术架构包含 WASM 插件运行时与程序性记忆引擎。
- **PicoClaw**：功能侧重隐私通信网关接入与特定云厂商 LLM 接口适配，目标用户为对通信隐私有极高要求或依赖特定云基础设施的极客/小众用户，技术架构偏向轻量级网关路由与前端面板。

## 6. 社区活跃度记录
- **高频活跃层**：OpenClaw（375 Issues, 500 PRs），社区讨论与代码提交极为密集，处于高速迭代期。
- **中频活跃层**：Zeroclaw（50 Issues, 50 PRs）与 NanoBot（7 Issues, 32 PRs），保持稳定的日常开发节奏与社区互动，有明确的 RFC 讨论和核心模块重构。
- **低频活跃层**：PicoClaw（3 Issues, 3 PRs），今日活动量较小，以个别功能 PR 推进和长尾 Issue 维护为主。
*(注：今日四个项目均无 Release 发布。)*

## 7. 有证据支撑的观察
- **LLM 提示缓存（Prompt Caching）机制的脆弱性正成为成本控制的痛点**：OpenClaw 用户反馈升级后 DeepSeek 缓存命中率跌至 10% 以下 ([#94518](https://github.com/openclaw/openclaw/issues/94518))，NanoBot 社区指出上下文截断机制会导致前缀缓存持续失效 ([#4222](https://github.com/HKUDS/nanobot/issues/4222))，而 PicoClaw 正在主动引入 AWS Bedrock 的显式缓存点支持 ([#3163](https://github.com/sipeed/picoclaw/pull/3163))。这表明随着 Agent 上下文动态变化，如何维持 Prompt Caching 的有效性已成为各项目优化 API 成本的共同技术挑战。
- **多智能体（A2A）协作正从简单的任务分发向深度状态与权限管理演进**：OpenClaw 在推进子 Agent 模型继承 ([#89469](https://github.com/openclaw/openclaw/pull/89469)) 的同时，面临子 Agent 上下文丢失和会话状态非确定性的反馈 ([#81490](https://github.com/openclaw/openclaw/issues/81490))；NanoBot 正在实现跨委托的深度守卫与原生 A2A 对等委托 ([#4571](https://github.com/HKUDS/nanobot/pull/4571))；Zeroclaw 则在探讨 A2A 代理发现机制 ([#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218))。这说明多 Agent 架构已度过基础连通阶段，当前重点转向解决上下文隔离、权限越界和动态发现等深水区问题。
- **消息投递的“静默失败”与“占位符回复”严重影响 Agent 交互体验**：OpenClaw 集中爆发了 Telegram/Discord 及计费拒绝时的消息静默丢弃问题 ([#80520](https://github.com/openclaw/openclaw/issues/80520), [#80700](https://github.com/openclaw/openclaw/issues/80700))，Zeroclaw 用户也反馈条件渠道任务在无内容时仍发送可见回复而缺乏真正的 no-reply 支持 ([#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410))。这反映出在多渠道异步通信场景下，完善错误回退机制和静默状态管理是提升终端用户体验的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去 24 小时内，NanoBot 项目保持较高的开发活跃度，共更新 7 条 Issues（4 条新开/活跃，3 条已关闭）和 32 条 PR（22 条待合并，10 条已合并/关闭）。今日无新版本发布。社区讨论主要围绕项目“轻量级”定位的依赖争议、上下文缓存失效问题以及执行环境配置展开；开发侧则集中推进了安全修复（Shell 路径提取、MCP 凭证脱敏）、性能优化（上下文压缩）以及多智能体（A2A）协作特性的代码提交。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日有大量 PR 处于待合并（OPEN）状态，展示了多个核心模块的推进情况：
- **安全与沙箱增强**：修复了 Shell 守卫中绝对路径提取遗漏等号后路径的安全绕过问题 ([#4594](https://github.com/HKUDS/nanobot/pull/4594))；增加了 MCP 服务器 URL 日志记录前的凭证脱敏处理 ([#4584](https://github.com/HKUDS/nanobot/pull/4584))；补充了 bwrap 沙箱挂载的回归测试 ([#4577](https://github.com/HKUDS/nanobot/pull/4577))。
- **性能与上下文优化**：提交了两个相关的性能优化 PR，旨在通过压缩超大子智能体公告 ([#4581](https://github.com/HKUDS/nanobot/pull/4581)) 和裁剪/压缩工具执行输出 ([#4588](https://github.com/HKUDS/nanobot/pull/4588)) 来减少输入 Token 消耗，降低 API 调用成本。
- **多智能体与架构重构**：推进了原生 Agent-to-Agent (A2A) 对等委托机制及跨委托深度守卫 ([#4571](https://github.com/HKUDS/nanobot/pull/4571))；为出站运行时事件引入了类型化层 ([#4590](https://github.com/HKUDS/nanobot/pull/4590))。
- **WebUI 与体验改进**：默认显示 WebUI 会话时间戳 ([#4586](https://github.com/HKUDS/nanobot/pull/4586))，并新增了会话 Markdown 导出功能 ([#4587](https://github.com/HKUDS/nanobot/pull/4587))。
- **已关闭/合并**：关闭了添加网关 Webhook 触发器的 PR ([#4502](https://github.com/HKUDS/nanobot/pull/4502))。

## 4. 社区热点
- **“轻量级”定位与依赖争议**：Issue [#660](https://github.com/HKUDS/nanobot/issues/660) 是今日评论最活跃（15 条评论，5 个赞）的话题。用户指出项目自称“ultra-lightweight”，但 Dockerfile 中同时要求 Python 和 Node.js，存在依赖臃肿。该 Issue 已于今日关闭，表明维护者已对此进行了回应或处理。
- **Prompt 缓存失效问题**：Issue [#4222](https://github.com/HKUDS/nanobot/issues/4222) 探讨了 `max_messages` 截断和 microcompact 机制导致前缀/提示缓存持续失效的问题。该 Issue 今日被关闭，反映出社区对 LLM 调用成本和延迟优化的高度关注。

## 5. Bug 与稳定性
今日报告并跟进了多个影响稳定性和安全性的 Bug：
- **严重/安全级别**：
  - **Shell 路径提取绕过**：`ExecTool` 在启用 `restrictToWorkspace` 时，未能提取等号后的绝对路径（如 `curl --output=/etc/passwd`），导致工作区 containment 检查被绕过。已有修复 PR [#4594](https://github.com/HKUDS/nanobot/pull/4594)。([#4592](https://github.com/HKUDS/nanobot/issues/4592))
  - **MCP 凭证泄露**：MCP 服务器 URL 中的凭证（userinfo 或 query string）在日志中被明文打印。已有修复 PR [#4584](https://github.com/HKUDS/nanobot/pull/4584)。
- **功能/逻辑级别**：
  - **Tool Call ID 污染**：`apply_final_call_ids` 错误地覆盖了非文件编辑工具的正确 `tool_call.id`，导致会话永久中毒。已有修复 PR [#4596](https://github.com/HKUDS/nanobot/pull/4596)。([#4595](https://github.com/HKUDS/nanobot/issues/4595))
  - **配置迁移空指针**：`load_config` 中的 tool-key 迁移未处理 null sections，可能导致启动崩溃。已有修复 PR [#4583](https://github.com/HKUDS/nanobot/pull/4583)。
  - **微信渠道非流式中继 Bug**：微信渠道因缺少 `streaming` 字段被迫使用非流式 API，导致部分中继丢弃 tool_use 信息。已有修复 PR [#4567](https://github.com/HKUDS/nanobot/pull/4567)。

## 6. 功能请求归类
- **模型与推理控制**：请求支持自动推理努力升级（Automatic reasoning effort escalation），根据任务复杂度动态调整 `reasoningEffort`。([#4419](https://github.com/HKUDS/nanobot/issues/4419))
- **执行环境增强**：请求在子进程执行时支持 conda 虚拟环境，以满足实际场景中的依赖隔离需求。([#4580](https://github.com/HKUDS/nanobot/issues/4580))
- **多智能体与子代理**：
  - 允许子代理使用可配置的模型预设（Provider/Model/Temp），已有 PR [#4291](https://github.com/HKUDS/nanobot/pull/4291)。
  - 原生 A2A 对等委托机制，已有 PR [#4571](https://github.com/HKUDS/nanobot/pull/4571)。
- **网络与代理配置**：支持 Provider 作用域的代理（Proxy）配置，已有 PR [#4578](https://github.com/HKUDS/nanobot/pull/4578)。
- **触发器机制**：添加会话绑定的本地触发器（Local triggers），已有 PR [#4591](https://github.com/HKUDS/nanobot/pull/4591)。

## 7. 用户反馈摘要
- **环境隔离痛点**：用户在使用 `exec` 工具时，提出需要虚拟环境（如 conda）支持，默认路径无法满足复杂项目的依赖管理需求（[#4580](https://github.com/HKUDS/nanobot/issues/4580)）。
- **成本与性能痛点**：上下文截断和压缩机制如果设计不当，会导致 LLM 的 Prompt Caching 失效，直接增加 API 调用成本并增加延迟（[#4222](https://github.com/HKUDS/nanobot/issues/4222)）。
- **部署体验痛点**：用户对“轻量级”宣传与实际 Docker 镜像中包含 Node.js 和 Python 双栈依赖感到困惑，认为这增加了部署体积和复杂度（[#660](https://github.com/HKUDS/nanobot/issues/660)）。

## 8. 待处理积压
以下 Issue/PR 创建时间较早，目前仍处于 OPEN 状态，建议维护者关注：
- **PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) & [#4293](https://github.com/HKUDS/nanobot/pull/4293)**：创建于 2026-06-11（距今约 19 天），涉及子代理模型预设和 `process_direct` 中的 `pending_queue` 注入，属于多智能体核心逻辑改进。
- **Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419)**：创建于 2026-06-20（距今 10 天），关于自动推理努力升级的功能请求，目前已有 4 条评论但无实质代码推进。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去24小时内，Zeroclaw 项目共更新了 50 条 Issues（43 条新开或活跃，7 条关闭）和 50 条 Pull Requests（40 条待合并，10 条已合并或关闭）。今日无新版本发布。社区讨论与代码贡献主要聚焦于 Provider 兼容性修复、MCP 工具上下文增强、SOP（标准作业程序）记忆与事件源扩展，以及多渠道（Channel）适配和 CI/CD 安全加固。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
- [PR #8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441) (已关闭): 修复了 OpenAI 兼容 Provider（如 Groq）在原生工具调用时，因 `role-tool` 消息缺少顶层 `name` 字段而导致的请求拒绝问题。
- [PR #8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436) (已关闭): 补充了运行时历史消息管理的文档，明确了 `max_history_messages` 硬上限与 `whole-turn trim` 机制的并存关系。
- [PR #8403](https://github.com/zeroclaw-labs/zeroclaw/pull/8403) (已合并): 作为 MCP 资源/提示词功能的前置 PR（PR A），为后续的 resources-as-context 和 named-prompt 渲染奠定了基础（在 [PR #8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508) 中被提及）。

## 4. 社区热点
- [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (11 评论): 讨论在使用 kimi-code provider 进行流式聊天调用工具时，因 `reasoning_content` 缺失导致 API 报 400 错误的问题，阻塞了相关工作流。
- [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (9 评论): 探讨系统提示词中的工具可用性（tool-availability）与各个入口点（channels, gateway, WebSocket 等）实际生效工具不匹配的问题，属于核心架构一致性讨论。
- [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6 评论): 关于增加 Computer-use 能力的 RFC，提议让 Agent 能够截取屏幕截图并发送鼠标/键盘事件以控制本地桌面。
- [Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) (5 评论): 针对多智能体安装场景下的 A2A（Agent-to-Agent）代理发现机制（`.well-known/agent-card.json`）进行 RFC 讨论。

## 5. Bug 与稳定性
**S1 - 工作流阻塞 (Workflow Blocked)**
- [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600): Kimi-code provider 流式调用工具报错。
- [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756): OpenAI Responses/reasoning 和 Anthropic 模型在轮次中无法接收 native/MCP 工具。
- [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Telegram 渠道配置后 `doctor` 检查仍失败，且 Bot 无法在 TG 中回复。
- [Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) (已关闭): 多模态 `vision_provider` 被静默忽略，入站图像被路由到 fallback。

**S2 - 行为降级 (Degraded Behavior)**
- [Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410): 条件渠道任务（如“有新邮件则通知，否则保持沉默”）在无内容时仍发送可见回复，缺乏一等的 no-reply 结果支持。
- [Issue #8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334): `skills install/list/remove` CLI 命令默认指向 `data_dir`，但多智能体运行时不加载该目录，导致技能管理流程失效。
- [Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800): ZeroCode TUI 的帮助信息和快捷键在 macOS 上存在误导或不可达。
- [Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312): 翻译工具的 leak-repair 机制遗留了过期的 translations-map 条目，导致数据静默丢失。

**相关修复 PR**
- [PR #8510](https://github.com/zeroclaw-labs/zeroclaw/pull/8510): 修复 OpenAI 兼容请求中 assistant tool-call content 为空字符串（应省略或为 null）导致的严格后端报错。
- [PR #8149](https://github.com/zeroclaw-labs/zeroclaw/pull/8149): 修复 WASM 插件 host 中 mutex 中毒导致 panic 的问题，改用 `unwrap_or_else` 容错。
- [PR #7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960): 修复 `execute_pipeline` 子工具执行绕过 per-agent `ToolAccessPolicy` 的安全漏洞。
- [PR #8003](https://github.com/zeroclaw-labs/zeroclaw/pull/8003): 修复 session 终止时未触发 `session_end` hook 的死代码问题。

## 6. 功能请求归类
**MCP 与工具增强**
- [PR #8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508): 为 MCP 增加 resources-as-context、pinning 和 named-prompt 渲染功能。
- [PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496): 集中化 deferred-MCP 访问策略，作为单一事实来源。

**SOP (标准作业程序) 与记忆**
- [PR #8509](https://github.com/zeroclaw-labs/zeroclaw/pull/8509): 增加 SOP 程序性记忆工作坊（procedural memory workshop），支持 Agent 创建、检查和隔离 SOP 提案。
- [PR #8506](https://github.com/zeroclaw-labs/zeroclaw/pull/8506): SOP 引擎消费 CAS run claims，实现跨实例的冷却/并发决策共享。
- [PR #8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461): 为 SOP 引擎增加文件系统事件源（filesystem SOP event source）。

**渠道 (Channels) 与集成**
- [PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384): 新增原生 Inkbox 渠道（支持 email, SMS, voice, iMessage）及 Quickstart 引导。
- [PR #8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504): 新增 GitHub 渠道，支持 GitHub App 认证、Issue/PR 评论及 SOP ingress。
- [PR #8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427): WhatsApp Web 渠道增加原生位置图钉（location pin）支持。
- [PR #8440](https://github.com/zeroclaw-labs/zeroclaw/pull/8440): Telegram 渠道增加 per-channel 入站防抖（debounce）配置。

**架构与 RFC 提案**
- [Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170): 提议在 Web 仪表板中增加应用内升级及可选的监督重启功能。
- [Issue #8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462): 针对 OTel LLM 和工具内容的运行时策略 RFC。
- [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135): 提议 Wasm-first 插件运行时，将 Wasm 作为默认插件运行时并强制能力声明与签名。

## 7. 用户反馈摘要
- **配置与部署痛点**：用户反馈在配置 Telegram 渠道时，即使使用了 quickstart 和 zerocode，`zeroclaw channels doctor` 仍提示未设置，且 Bot 无法在 TG 中响应（[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)）。此外，多智能体部署下，`skills install` 等 CLI 命令默认路径与运行时加载路径不一致，导致技能安装后无法被直接使用（[#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)）。
- **交互与体验痛点**：macOS 用户指出 ZeroCode TUI 的快捷键帮助信息存在误导，部分操作在当前输入状态下不可达（[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)）。在渠道任务中，用户期望 Agent 在无需回复时能保持真正的静默，而不是发送可见的“无回复”占位符（[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)）。
- **Provider 兼容性痛点**：使用 Kimi-code 等特定 provider 时，流式工具调用因缺少 `reasoning_content` 字段直接导致 API 报错，阻断了自动化工作流（[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)）。

## 8. 待处理积压
- [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (创建于 2026-04-24): 追踪在批量回滚（c3ff635）中丢失的 153 个 commit。这些 commit 包含已审查合并的 bug 修复和功能改进，目前仍需恢复。
- [Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) (创建于 2026-04-27): Nextcloud Talk 渠道使用了错误的 bot message API 导致响应失败，目前处于 accepted 状态但未见修复 PR。
- [Issue #6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) (创建于 2026-05-10): 需要在 v0.8.0 固化 provider/config 语义前，协调运行时模型切换与新的 provider 结构，涉及多个配置表面的统一。
- [Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) (创建于 2026-06-11): 提议使用 OCI 兼容的容器注册表作为 WASM 插件的存储和发现机制，替代原计划的 JSON 索引文件，目前等待维护者审查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去 24 小时内，PicoClaw 项目共有 3 条 Issue 和 3 条 PR 产生更新活动。今日无新版本发布，也无 PR 被合并。Issue 方面关闭了 1 个关于低版本 iOS 兼容性的 Bug，另有 2 个 Issue 保持活跃；3 个 PR 均处于待合并（Open）状态，主要涉及新通信网关接入、AWS Bedrock 缓存优化及 Token 用量统计功能。

## 2. 版本发布
*(今日无新版本发布)*

## 3. 项目进展
今日暂无 PR 被合并或关闭。3 个处于 Open 状态的 PR 正在推进中：
- **网关扩展**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 提议新增 DeltaChat 网关支持，并附带了相关文档更新。
- **成本与性能优化**：PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) 为 AWS Bedrock 引入 Converse API 的 Prompt Caching（提示缓存）支持，通过显式 cache points 降低输入 Token 的计费成本。
- **可观测性增强**：PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 计划在 Pico 通道的最终消息中输出每轮 LLM 的实际 Token 消耗（区分输入/输出），以便下游消费者追踪用量。

## 4. 社区热点
- **网关协议需求讨论**：Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 是今日评论最多（4 条评论）的议题，用户明确提出对 SimpleX、Wire 或 Tox 等去中心化/隐私保护通信网关的需求，反映了部分用户对高隐私通信渠道的诉求。
- **低版本 iOS 兼容性**：Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) 产生了 3 条评论，讨论了在 iOS 16.4 以下版本 Safari 浏览器中 PicoClaw 面板无法正常工作的问题，该 Issue 今日已被关闭。

## 5. Bug 与稳定性
- **大模型工具调用解析异常（中等严重）**：Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) 报告在使用火山引擎 Doubao Seed 2.0 Pro 模型时，工具调用（Tool calls）偶尔未被正确执行，而是作为原始 `<seed:tool_call>` XML 文本直接泄露给用户。目前暂无对应的修复 PR，需关注模型输出格式解析的鲁棒性。
- **前端面板兼容性（已解决）**：Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) 报告的 iOS 16.4 以下 Safari 浏览器面板失效问题今日已被关闭。

## 6. 功能请求归类
- **通信网关扩展**：
  - 用户请求：Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 请求增加 SimpleX、Wire 或 Tox 网关。
  - 代码实现：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 提交了 DeltaChat 网关的实现代码。
- **LLM 接口与计费优化**：
  - PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) 增加 AWS Bedrock 提示缓存功能。
  - PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 增加单轮对话 Token 使用量统计输出。

## 7. 用户反馈摘要
- **隐私通信场景**：用户（[#3093](https://github.com/sipeed/picoclaw/issues/3093)）对现有的网关支持不满足，明确寻求 SimpleX/Tox 等主打隐私和去中心化的协议支持，表明 PicoClaw 被应用于对通信隐私有较高要求的场景。
- **大模型 API 兼容性**：用户（[#3153](https://github.com/sipeed/picoclaw/issues/3153)）在使用国产大模型（火山引擎豆包）时遇到 Tool Call 格式解析失败的问题，反映出不同 LLM 提供商在 Function Calling 输出格式上的差异给 Agent 框架带来的适配挑战。
- **移动端旧设备兼容**：用户（[#3090](https://github.com/sipeed/picoclaw/issues/3090)）在较旧的 iOS 设备（<16.4）上访问 Web 面板时遇到阻碍，提示前端技术栈可能对旧版 WebKit 引擎存在兼容性门槛。

## 8. 待处理积压
以下 Issue 和 PR 已被系统或维护者标记为 `[stale]`（停滞），建议维护者重新评估、推进或清理：
- **Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093)**：关于 SimpleX/Tox 网关的需求（创建于 06-10），目前处于开放且停滞状态。
- **Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153)**：豆包模型 Tool Call 文本泄露 Bug（创建于 06-22），影响 Agent 工具执行成功率，需确认是否纳入修复计划。
- **PR [#3156](https://github.com/sipeed/picoclaw/pull/3156)**：输出每轮 LLM Token 用量的功能 PR（创建于 06-22），目前处于 stale 状态，需确认是否因代码审查阻塞或缺少测试用例。

</details>