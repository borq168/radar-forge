# OpenClaw 生态日报 2026-06-30

> Issues: 354 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-29 22:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去24小时内，OpenClaw 仓库保持高度活跃，共更新 354 条 Issues（其中 277 条新开或活跃，77 条关闭）和 500 条 PR（57 条已合并或关闭）。项目发布了 `v2026.6.11-beta.2` 版本，重点增强了渠道控制与自动化能力。社区讨论集中在多智能体会话状态管理、消息路由丢失以及跨平台桌面端支持等核心痛点上，维护者正在通过大量防御性编程 PR 加固 Agent 核心运行时的稳定性。

## 2. 版本发布
- **v2026.6.11-beta.2**
  - **更新内容**：增强了渠道控制能力，包括支持 Slack relay 模式、原生 Mattermost `/oc_queue` 命令，以及支持按 DM（私信）覆盖模型配置，使渠道操作的自动化和调优更加便捷。
  - **相关 Issue/PR**：#94707, #95546, #95120。

## 3. 项目进展
今日合并或关闭了多个关键修复与优化 PR，同时有大量针对核心运行时的加固 PR 处于活跃评审状态：
- **Ollama Cloud 工具调用修复**：关闭了 [#96474](https://github.com/openclaw/openclaw/pull/96474)，修复了通过 OpenAI 兼容路由使用 Ollama Cloud 模型时，第二次 Agent 轮次因 `tool_calls` 参数格式问题导致 400 错误的问题。
- **语音控制权限收紧**：关闭了 [#97874](https://github.com/openclaw/openclaw/pull/97874)，要求 Talk Voice 设置必须具有 admin 或 owner 权限，防止越权修改。
- **Agent 核心防御性编程**：@vincentkoc 提交了十余个 PR（如 [#89171](https://github.com/openclaw/openclaw/pull/89171), [#89159](https://github.com/openclaw/openclaw/pull/89159), [#89149](https://github.com/openclaw/openclaw/pull/89149), [#89136](https://github.com/openclaw/openclaw/pull/89136) 等），全面加固 `agent-core`、`plugin-sdk` 和 `gateway` 中的工具注册与诊断逻辑，防止因不可读或格式错误的工具名称/描述符导致 Agent 循环崩溃。
- **子智能体消息投递修复**：[#97932](https://github.com/openclaw/openclaw/pull/97932) 和 [#97922](https://github.com/openclaw/openclaw/pull/97922) 正在修复 Telegram 话题中子智能体完成通知引发的级联故障，以及投递放弃时预期完成消息被静默丢弃的问题。

## 4. 社区热点
- **跨平台桌面端诉求**：[#75](https://github.com/openclaw/openclaw/issues/75) (110 条评论) 持续是社区最关注的 Issue，用户强烈呼吁提供与 macOS 功能对齐的 Linux 和 Windows 桌面端应用。
- **会话写锁超时阻塞**：[#86538](https://github.com/openclaw/openclaw/issues/86538) (18 条评论) 讨论了 Session JSONL 写锁超时导致主线程、定时任务和子智能体通道阻塞，并引发交付/生命周期失败的问题，目前缺乏足够的诊断信息。
- **QA 测试套件与 Codex 工具对齐**：[#80319](https://github.com/openclaw/openclaw/issues/80319) (17 条评论) 澄清了 QA 工具默认套件中 Codex 原生工具与 OpenClaw 动态工具对等性的测试逻辑，确认这是 QA 框架问题而非广泛的运行时工具丢失。
- **SQLite 会话接缝**：[#79902](https://github.com/openclaw/openclaw/issues/79902) (13 条评论) 提议在数据库优先的运行时之上添加对 Companion 友好的 SQLite 转录/会话接缝，以便高级消费者构建规范状态而无需抓取不透明的 Blob。

## 5. Bug 与稳定性
今日报告了多个影响消息投递和会话状态的严重 Bug，部分已有修复 PR 或已被关闭：
- **P1 严重问题**：
  - **消息静默丢弃**：Telegram 消息被网关接收但未记录 `sendMessage` API 调用 ([#80520](https://github.com/openclaw/openclaw/issues/80520))；Followup agent 因账单/配额拒绝时静默丢弃入站消息 ([#80700](https://github.com/openclaw/openclaw/issues/80700))。
  - **会话与状态异常**：GPT-4o Agent 会话在单次文本响应后退出，未继续工具调用循环 ([#81567](https://github.com/openclaw/openclaw/issues/81567))；子智能体完成后在父路由上生成新运行，而非恢复已产出的会话 ([#81490](https://github.com/openclaw/openclaw/issues/81490))。
  - **定时任务失败**：隔离的 Cron 任务在 `model-call-started` 阶段持续报 "LLM request failed" ([#91363](https://github.com/openclaw/openclaw/issues/91363))。
  - **Node v26 兼容性**：macOS 下 Node v26 导致 Discord 等 HTTP 响应 gzip 未解压，报 JSON 解析错误 ([#79752](https://github.com/openclaw/openclaw/issues/79752))。
- **P2 回归与性能问题**：
  - **缓存与延迟**：升级 6.x 后 DeepSeek 缓存命中率跌破 10% ([#94518](https://github.com/openclaw/openclaw/issues/94518))；Codex OAuth 路径在微小提示下耗时约 28 秒 ([#95121](https://github.com/openclaw/openclaw/issues/95121))；CLI 命令冷启动出现约 14 秒的回归 ([#82070](https://github.com/openclaw/openclaw/issues/82070))。
  - **已修复/关闭的 Bug**：修复了 Heartbeat 驱动的 Agent 回复导致 `pendingFinalDelivery` 卡住的问题 ([#83184](https://github.com/openclaw/openclaw/issues/83184))；修复了 GitHub Copilot 静态默认模型列表遮蔽实时权限发现的问题 ([#88548](https://github.com/openclaw/openclaw/issues/88548))；修复了 `memory_search` 在强制重建后报 "index scope changed" 的问题 ([#91592](https://github.com/openclaw/openclaw/issues/91592))。

## 6. 功能请求归类
- **渠道与网关增强**：
  - 支持 Telegram 5月7日发布的 Bot-to-Bot 和 Guest-Bot 模式 ([#79077](https://github.com/openclaw/openclaw/issues/79077))。
  - 提供无 AI 引擎的 Gateway-lite 模式，用于确定性部署和 Webhook 调度 ([#86881](https://github.com/openclaw/openclaw/issues/86881))。
  - 增加 `before_route_inbound_message` 钩子，支持入站消息的预路由拦截 ([#81061](https://github.com/openclaw/openclaw/issues/81061))。
- **插件与 SDK 扩展**：
  - 允许 Skill 作者在 `SKILL.md` 中定义 `setup.script` 钩子，在安装/更新后运行自定义脚本 ([#80213](https://github.com/openclaw/openclaw/issues/80213))。
  - 暴露稳定的插件 SDK 表面，用于已安装 Skill 的工作流 ([#81913](https://github.com/openclaw/openclaw/issues/81913))。
- **模型与配置**：
  - 允许在 `openclaw onboard` 引导流程中配置多个提供商和模型 ([#81960](https://github.com/openclaw/openclaw/issues/81960))。

## 7. 用户反馈摘要
- **痛点**：用户对“静默失败”反馈强烈，尤其是 Telegram 和 Discord 渠道的消息丢失、子智能体任务完成无通知，以及配额耗尽时无用户提示，这严重影响了 Agent 的可靠性感知。
- **性能抱怨**：多个用户报告了升级后的性能退化，包括 CLI 启动慢、嵌入式运行 Auth 阶段阻塞（10-15秒）、以及特定提供商（如 DeepSeek、Codex）的缓存命中率下降和延迟增加。
- **环境兼容性**：Node.js 版本升级（如 v24 到 v26）和 macOS 系统更新导致了未预料的回归（如 gzip 解压失败、TCC 权限疯狂请求 [#94147](https://github.com/openclaw/openclaw/issues/94147)），提示项目需要更严格的运行时环境锁定或兼容性测试。

## 8. 待处理积压
- **Linux/Windows 桌面端支持** ([#75](https://github.com/openclaw/openclaw/issues/75))：自 2026 年 1 月创建，累积 110 条评论，标记为 `help wanted` 和 `P2`，是社区最渴望的功能，但目前缺乏实质性进展。
- **入站消息预路由钩子** ([#81061](https://github.com/openclaw/openclaw/issues/81061))：标记为 `stale`，但对于构建复杂的通道桥接和代理场景至关重要，需维护者重新评估架构可行性。
- **CLI 会话 JSON 输出缺失子智能体元数据** ([#80286](https://github.com/openclaw/openclaw/issues/80286))：标记为 `stale`，阻塞了依赖 CLI 进行子智能体运行时父系谱分析的外部消费者。

---

## 横向生态对比

## 1. 今日横向概览
今日 OpenClaw 保持极高活跃度，发布 beta 版本并集中修复消息路由与核心运行时稳定性问题；Zeroclaw 维持中等活跃，重点推进 WASM 插件架构与多通道集成；NanoBot 和 PicoClaw 活跃度较低，前者主要处理安全修复与“轻量级”定位争议，后者聚焦于去中心化网关接入与云厂商 API 成本优化。整体来看，各项目的社区讨论与代码提交均高度关注多智能体协作（A2A）机制的落地与消息通道的稳定性。

## 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | Release 情况 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 354 | 500 | `v2026.6.11-beta.2` | 发布新版本，提交大量防御性编程 PR 加固核心运行时，集中处理消息静默丢弃问题。 |
| **NanoBot** | 5 | 31 | 无 | 关闭“超轻量级”定位争议 Issue，推进 Shell 守卫安全修复与上下文压缩优化。 |
| **Zeroclaw** | 50 | 50 | 无 | 推进 SOP 引擎与 WASM 插件架构，修复 Kimi 流式调用报错及 Telegram 通道配置诊断误报。 |
| **PicoClaw** | 3 | 3 | 无 | 讨论去中心化通信网关需求，提交 AWS Bedrock 提示缓存与 Token 追踪 PR。 |

## 3. OpenClaw 与同类对照
- **活动量差异**：OpenClaw 的 Issues (354) 和 PRs (500) 数量远超其他三个项目总和，呈现压倒性的代码提交与社区讨论规模。Zeroclaw 居中 (50/50)，NanoBot (5/31) 和 PicoClaw (3/3) 处于低频维护状态。
- **技术重点差异**：OpenClaw 今日侧重于底层运行时的防御性编程、会话状态管理与渠道自动化；Zeroclaw 聚焦于 WASM 插件运行时、SOP 引擎及 A2A 协议发现；NanoBot 关注上下文压缩、安全守卫与执行环境隔离；PicoClaw 则偏向网关扩展与 API 成本控制。
- **社区讨论面差异**：OpenClaw 社区集中爆发对“静默失败”（消息丢失、无通知）和性能退化的抱怨，并强烈呼吁跨平台桌面端；Zeroclaw 社区更多探讨架构演进（WASM、A2A）与具体通道（Telegram/WhatsApp）的配置诊断问题；NanoBot 和 PicoClaw 的讨论则局限于特定的依赖争议和单一模型/网关的兼容性。

## 4. 共同出现的技术方向
- **多智能体协作 (A2A) 与子智能体管理**：
  - **OpenClaw**：修复子智能体消息投递级联故障 ([#97932](https://github.com/openclaw/openclaw/pull/97932), [#97922](https://github.com/openclaw/openclaw/pull/97922))，讨论子智能体完成后生成新运行的问题 ([#81490](https://github.com/openclaw/openclaw/issues/81490))。
  - **NanoBot**：引入原生 A2A 对等委托机制 ([#4571](https://github.com/HKUDS/nanobot/pull/4571))，允许子智能体使用模型预设 ([#4291](https://github.com/HKUDS/nanobot/pull/4291))，修复子智能体结果注入失败 ([#4293](https://github.com/HKUDS/nanobot/pull/4293))。
  - **Zeroclaw**：探讨 A2A 协议发现机制 RFC ([#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218))。
- **消息通道适配与稳定性**：
  - **OpenClaw**：修复 Telegram 话题消息投递问题，讨论 Telegram Bot-to-Bot 模式 ([#79077](https://github.com/openclaw/openclaw/issues/79077))。
  - **Zeroclaw**：修复 Telegram channel 配置诊断误报 ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505))，为 WhatsApp Web 添加位置图钉支持 ([#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427))。
  - **PicoClaw**：提议新增 Delta Chat 网关 ([#3063](https://github.com/sipeed/picoclaw/pull/3063))，讨论 SimpleX/Tox 等去中心化网关需求 ([#3093](https://github.com/sipeed/picoclaw/issues/3093))。
- **API 成本优化与上下文管理**：
  - **NanoBot**：修复上下文截断导致的前缀缓存失效 ([#4222](https://github.com/HKUDS/nanobot/issues/4222))，推进上下文修剪与压缩 ([#4581](https://github.com/HKUDS/nanobot/pull/4581), [#4588](https://github.com/HKUDS/nanobot/pull/4588))。
  - **PicoClaw**：引入 AWS Bedrock 提示缓存支持 ([#3163](https://github.com/sipeed/picoclaw/pull/3163))，追踪单轮 Token 使用量 ([#3156](https://github.com/sipeed/picoclaw/pull/3156))。

## 5. 差异化定位分析
- **OpenClaw**：定位为全功能、重度个人/企业级 AI 助手平台。功能侧重全渠道接入、复杂的会话状态管理与多智能体编排。目标用户为需要高可靠性和丰富自动化能力的开发者。技术架构庞大，当前正通过大量防御性编程加固核心运行时。
- **Zeroclaw**：定位为插件化、事件驱动的智能体框架。功能侧重 WASM 插件运行时、SOP 引擎与多通道集成。目标用户为希望自定义 Agent 行为逻辑和扩展底层能力的开发者。技术架构向 Wasm-first 和 A2A 协议演进。
- **NanoBot**：定位为轻量级、注重执行效率与安全的个人助手。功能侧重上下文压缩、执行环境隔离（如 conda）与安全守卫。目标用户为关注部署体积、推理成本与本地代码执行安全的用户。技术架构试图在“轻量”与多语言依赖间寻找平衡。
- **PicoClaw**：定位为极简的 AI 通信网关与成本优化代理。功能侧重新兴/去中心化通信协议接入与云厂商 API 特性适配。目标用户为关注隐私通信与严格控制 LLM 调用成本的集成者。技术架构轻量，聚焦于协议转换与 API 代理。

## 6. 社区活跃度记录
- **极高活跃 (Tier 1)**：**OpenClaw**。单日 354 条 Issues 和 500 条 PR，发布 beta 版本，社区讨论热烈且涉及大量底层修复。
- **中等活跃 (Tier 2)**：**Zeroclaw**。单日 50 条 Issues 和 50 条 PR，有持续的架构 RFC 讨论和通道适配 PR 提交。
- **低频维护 (Tier 3)**：**NanoBot** (5 Issues, 31 PRs) 与 **PicoClaw** (3 Issues, 3 PRs)。主要处理特定的安全修复、Bug 跟进及少量功能 PR，社区讨论局限于个别争议或特定需求。

## 7. 有证据支撑的观察
1. **多智能体 (A2A) 架构进入深水区工程修复阶段**：今日 OpenClaw、NanoBot 和 Zeroclaw 均在处理子智能体/多智能体相关的核心问题。OpenClaw 在修复子智能体消息投递与状态恢复的级联故障，NanoBot 提交了原生 A2A 对等委托与结果注入修复 PR，Zeroclaw 则在探讨 A2A 协议发现机制 RFC。这表明多智能体协作已跨越初步设计阶段，进入解决状态同步、结果注入和协议发现等具体工程问题的阶段。
2. **系统可观测性与确定性反馈成为自动化场景的核心痛点**：OpenClaw 用户强烈抱怨 Telegram/Discord 消息丢失、子智能体任务完成无通知及配额耗尽无提示；Zeroclaw 用户反馈 Telegram 配置诊断工具出现“假阴性”误报，且条件触发任务缺乏原生的“不回复”机制。这反映出随着 Agent 深入自动化场景，用户对系统状态的可观测性和确定性反馈提出了更高要求。
3. **上下文缓存与 Token 成本控制成为框架层的主动优化方向**：NanoBot 今日修复了上下文截断导致的前缀缓存失效 Bug，并推进上下文压缩 PR；PicoClaw 提交了 AWS Bedrock 提示缓存支持及 Token 使用量精确追踪 PR。这表明在长上下文和频繁调用的场景下，优化 API 计费成本已成为框架开发者主动推进的关键优化方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去 24 小时内，NanoBot 项目共产生 5 条 Issue 更新（3 条活跃/新开，2 条关闭）和 31 条 PR 更新（21 条待合并，10 条已合并/关闭）。今日无新版本发布。社区讨论主要围绕项目“轻量级”定位的争议、上下文缓存失效问题以及推理努力程度（reasoning effort）的自动化控制。开发侧则集中推进了安全修复（如 Shell 守卫路径提取、MCP 凭证脱敏）、性能优化（上下文压缩）以及多智能体（A2A）协作机制的探索。

## 2. 项目进展
今日关闭/合并的重要 PR 和 Issue 包括：
- **关闭争议 Issue**：关闭了关于项目自称“ultra-lightweight”但依赖 Node.js 的争议 Issue [#660](https://github.com/HKUDS/nanobot/issues/660)。
- **修复缓存失效 Bug**：关闭了上下文治理管道中 `max_messages` 截断和 microcompact 导致前缀/提示缓存持续失效的 Bug [#4222](https://github.com/HKUDS/nanobot/issues/4222)。
- **关闭重复/替代 PR**：关闭了重复的 PR [#4570](https://github.com/HKUDS/nanobot/pull/4570)（为 spawn 工具添加子智能体模型覆盖）以及被关闭的网关 Webhook 触发器 PR [#4502](https://github.com/HKUDS/nanobot/pull/4502)。

## 3. 社区热点
- **项目定位与依赖争议**：Issue [#660](https://github.com/HKUDS/nanobot/issues/660) 是今日评论最多（15 条）且获赞最多（5 个）的讨论。用户质疑项目宣称“超轻量级”却在 Dockerfile 中同时要求 Python 和 Node.js，引发了关于项目架构和依赖管理的深入讨论。该 Issue 现已关闭。
- **推理努力程度自动升级**：Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) 获得了 4 条评论，提议为推理模型增加自动推理努力升级机制（默认+升级级别），以优化模型思考深度与响应成本的平衡。
- **上下文缓存失效问题**：Issue [#4222](https://github.com/HKUDS/nanobot/issues/4222) 有 3 条评论，详细分析了 `max_messages` 截断边界漂移和 microcompact 机制如何破坏 LLM 的前缀缓存，该问题已关闭，预计已有对应修复合入。

## 4. Bug 与稳定性
今日报告并跟进的 Bug 及安全问题按严重程度排列如下：
- **[安全] Shell 守卫路径提取遗漏**：Issue [#4592](https://github.com/HKUDS/nanobot/issues/4592) 指出 `ExecTool` 在提取绝对路径时遗漏了等号（`=`）后的路径，可能导致绕过工作区限制（如 `curl --output=/etc/passwd`）。已有修复 PR [#4594](https://github.com/HKUDS/nanobot/pull/4594) 提交。
- **[安全] MCP URL 凭证泄露**：PR [#4584](https://github.com/HKUDS/nanobot/pull/4584) 修复了 MCP 服务器 URL 在日志中未脱敏的问题，防止 userinfo 或 query string 中的 token 泄露。
- **[Bug] 子智能体结果注入失败**：PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) 修复了 cron 作业等直接调用生成子智能体时，由于缺少 `pending_queue` 导致结果无法在回合中注入的问题。
- **[Bug] 微信渠道非流式中继 Bug**：PR [#4567](https://github.com/HKUDS/nanobot/pull/4567) 修复了微信配置中 `streaming` 字段被静默丢弃的问题，并通过缓冲回复交付来规避上游非流式中继丢弃 `tool_use` 信息的 Bug。
- **[Bug] 配置迁移空指针异常**：PR [#4583](https://github.com/HKUDS/nanobot/pull/4583) 修复了 `load_config()` 中工具键迁移逻辑在遇到 null sections 时未正确处理默认值的问题。

## 5. 功能请求归类
- **多智能体与子智能体协作**：
  - PR [#4571](https://github.com/HKUDS/nanobot/pull/4571) 引入原生 A2A（Agent-to-Agent）对等委托机制及跨委托深度守卫，支持智能体团队协作。
  - PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 允许子智能体使用可配置的模型预设（Model Presets），实现任务路由。
- **上下文与性能优化**：
  - PR [#4581](https://github.com/HKUDS/nanobot/pull/4581) 和 [#4588](https://github.com/HKUDS/nanobot/pull/4588) 致力于减少上下文和输入 token 的使用，通过修剪、压缩和处理工具输出（如 JSON、diff、日志）来降低成本。
- **执行环境与触发器**：
  - Issue [#4580](https://github.com/HKUDS/nanobot/issues/4580) 请求在子进程执行中使用 conda 虚拟环境。
  - PR [#4591](https://github.com/HKUDS/nanobot/pull/4591) 添加了会话绑定的本地触发器（Local triggers），支持通过文件系统队列传递消息。
- **Provider 与 WebUI 增强**：
  - PR [#4578](https://github.com/HKUDS/nanobot/pull/4578) 支持 Provider 作用域的代理（Proxy）配置。
  - PR [#4587](https://github.com/HKUDS/nanobot/pull/4587) 为 WebUI 增加会话 Markdown 导出功能；PR [#4586](https://github.com/HKUDS/nanobot/pull/4586) 默认显示 WebUI 会话时间戳。

## 6. 用户反馈摘要
- **架构与依赖痛点**：用户对 Dockerfile 中同时包含 Python 和 Node.js 感到不满，认为这与“超轻量级”的宣传不符，增加了部署体积（[#660](https://github.com/HKUDS/nanobot/issues/660)）。
- **执行环境隔离需求**：用户反馈在实际场景中，默认的 subprocess 执行路径无法满足需求，强烈需要虚拟环境（如 conda）的兼容性和便捷配置，以隔离不同任务的依赖（[#4580](https://github.com/HKUDS/nanobot/issues/4580)）。
- **OAuth 配置体验**：用户指出在 `nanobot setup` 期间，如果只想使用 OAuth provider，系统默认不将其设置为主 provider，导致配置过程浪费时间，期望优化 CLI 登录流程（[#4573](https://github.com/HKUDS/nanobot/pull/4573)）。

## 7. 待处理积压
- **子智能体结果注入修复**：PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) 创建于 2026-06-11，修复了 `process_direct` 中子智能体结果注入的问题，目前仍处于 OPEN 状态，已积压近 20 天，建议维护者优先 Review。
- **子智能体模型预设支持**：PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 同样创建于 2026-06-11，允许子智能体使用可配置的模型预设，处于 OPEN 状态，需关注合并进度以推进多智能体路由能力。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去 24 小时内，Zeroclaw 项目共更新了 50 条 Issues（其中 43 条新开或活跃，7 条关闭）和 50 条 Pull Requests（40 条待合并，10 条已合并或关闭）。今日无新版本发布。社区讨论与代码提交主要集中在多智能体架构（A2A）、WASM 插件运行时、MCP 工具集成，以及各类消息通道（Telegram、WhatsApp、Nextcloud Talk 等）的适配与稳定性修复上。

## 2. 项目进展
今日共有 10 条 PR 被合并或关闭，主要推进了以下功能与修复：
- **SOP (Standard Operating Procedure) 引擎完善**：合并/关闭了 [#8502](https://github.com/zeroclaw-labs/zeroclaw/pull/8502)（完善 payload 安全 ingress）与 [#8493](https://github.com/zeroclaw-labs/zeroclaw/pull/8493)（强制执行步骤作用域与模式事件），增强了 SOP 执行时的安全校验与工具作用域隔离。
- **Provider 兼容性修复**：关闭了 [#8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441)，修复了 Groq 原生工具调用中因缺少 `name` 字段导致的请求拒绝问题。
- **文档与运行时说明**：关闭了 [#8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436)，补充了关于 `max_history_messages` 硬上限与 whole-turn trim 机制的运行时文档说明。

## 3. 社区热点
今日讨论最活跃的 Issues 主要集中在底层架构演进与核心工作流阻断问题上：
- **Kimi 提供商流式调用报错**：[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)（11 条评论）。用户报告在使用 kimi-code provider 进行流式聊天调用工具时，因 API 要求 `reasoning_content` 但缺失导致 400 Bad Request，阻断了工作流。
- **系统提示词与工具可用性不匹配**：[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)（9 条评论）。指出系统提示词告知推理模型“无工具可用”，但实际请求中包含了 native/MCP 工具。该问题在直接运行时路径已修复，但在 WebSocket、多模态等其他入口点仍存在同类 mismatch。
- **桌面 Computer-use 能力 RFC**：[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)（6 条评论）。提议引入截屏与键鼠控制能力，使 Agent 能够操作本地桌面 GUI，对标 OpenAI Codex 等竞品的 computer-use 功能。
- **多智能体 A2A 发现机制 RFC**：[#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)（5 条评论）。探讨在单个 ZeroClaw 实例托管多个 Agent 时，如何通过 `.well-known/agent-card.json` 实现 A2A（Agent-to-Agent）协议发现。

## 4. Bug 与稳定性
今日报告了多个影响核心工作流的 Bug，按严重程度排列如下：

**S1 - 工作流阻断 (Workflow blocked)**
- [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600): Kimi-code provider 流式调用工具时 API 报错（400 Bad Request）。
- [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Telegram channel 无法配置。`zeroclaw channels doctor` 误报未设置，导致 Bot 在 TG 无响应。
- [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756): OpenAI Responses/reasoning 和 Anthropic turns 中，native/MCP 工具在模型轮次中不可用。

**S2 - 行为降级 (Degraded behavior)**
- [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410): Channel tasks 缺少原生的“不回复”结果。条件任务（如“无新邮件则保持沉默”）在无内容时仍会发送可见回复。
- [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334): `skills install/list/remove` 命令的目标 `data_dir` 未被多智能体运行时正确加载，导致技能管理流程失效。
- [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800): ZeroCode TUI 的快捷键帮助文档在 macOS 上具有误导性，部分操作在当前输入状态下无法触达。
- [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312): `fill-translations` 泄漏修复遗留了过期的 translations-map 条目，导致静默数据丢失。

**相关修复 PR (待合并)**
- [#8149](https://github.com/zeroclaw-labs/zeroclaw/pull/8149): 修复 WASM 插件 host 中 mutex lock poison 导致的 panic。
- [#8148](https://github.com/zeroclaw-labs/zeroclaw/pull/8148): 修复 Anthropic streaming request builder 中的序列化 panic。
- [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960): 修复 `execute_pipeline` 子工具执行未受 per-agent `ToolAccessPolicy` 限制的安全越权问题。

## 5. 功能请求归类
今日的功能请求与 PR 呈现出向**插件化架构**、**多通道集成**与**SOP 事件驱动**集中的特点：

- **架构与多智能体 (A2A & 插件)**
  - [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) / [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497): 推进 Wasm-first 插件运行时，提议使用 OCI 兼容容器注册表作为 WASM 插件的存储与发现机制。
  - [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140): 提议支持混合技能插件（SKILL.md 编排 + WASM 二进制工具）。
- **Channel 与外部集成**
  - [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) (PR): 添加原生 Inkbox channel，支持 email、SMS、voice 和 iMessage。
  - [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504) (PR): 添加 GitHub channel，支持 App 认证、Issue/PR 评论及 SOP ingress。
  - [#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427) (PR): 为 WhatsApp Web 添加原生位置图钉（Location pin）支持。
- **运行时与工具链**
  - [#8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508) (PR): 为 MCP 增加 resources-as-context、pinning 和 named-prompt 渲染功能。
  - [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170): 提议在 Web 仪表盘中增加应用内升级及可选的监督重启功能。

## 6. 用户反馈摘要
从今日的 Issues 评论中，可以提炼出以下真实用户痛点与使用场景：
- **配置与诊断工具的准确性**：用户在配置 Telegram 时遭遇“假阴性”诊断，CLI 工具 `channels doctor` 提示未配置，但实际已配置，导致排查方向错误（[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)）。
- **条件触发任务的“静默”需求**：在自动化巡检场景（如定时检查邮件）中，用户强烈需要一种原生的“无事件则不回复”机制，而不是让 Agent 输出“没有新邮件”等冗余信息（[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)）。
- **跨平台 TUI 体验**：macOS 用户反馈 ZeroCode TUI 的快捷键提示与实际系统行为不符，影响了终端环境下的操作效率（[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)）。
- **群聊上下文被动接收**：在 WhatsApp 群聊场景中，用户希望 Bot 能够“潜水”并被动吸收未 @ 它的群消息作为上下文，而不必每次都触发 Agent turn（[#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)）。

## 7. 待处理积压
以下 Issue 创建时间较早且涉及核心架构或历史遗留问题，建议维护者重点关注：
- [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (创建于 2026-04-24): **追踪批量回滚中丢失的 153 个 commit**。需要恢复在 `c3ff635` 回滚中误删的已审核 bug 修复和功能改进。
- [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) (创建于 2026-05-10): **协调运行时模型切换与 provider 结构**。需要在 v0.8.0 固化 provider/config 语义前，解决 `/models` 等 slash command 与底层 provider 结构的对齐问题。
- [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) (创建于 2026-04-26): **混合技能插件 (SKILL.md + WASM)**。作为 markdown-only 技能插件的后续，该架构设计已搁置两月，需推进落地。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-30)

## 1. 今日活动概览
过去 24 小时内，PicoClaw 项目共有 3 条 Issues 和 3 条 Pull Requests 发生更新。其中 Issues 包含 2 条活跃/新开和 1 条已关闭，PR 均为待合并状态（3 条）。今日无新版本发布。社区讨论与代码提交主要围绕新通信网关接入、云厂商 API 成本优化（提示缓存）以及特定大模型工具调用的兼容性 Bug 展开。

## 2. 项目进展
今日无 PR 被合并或关闭。当前有 3 个 PR 处于活跃/待合并状态，主要推进了网关扩展和云厂商 API 特性支持：
- **Delta Chat 网关接入**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 提议新增 Delta Chat 网关支持，并附带了相关文档更新。
- **AWS Bedrock 提示缓存**：PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) 引入了对 AWS Bedrock Converse API 提示缓存（Prompt Caching）的支持，通过显式缓存点降低输入 token 的计费成本。
- **Token 使用量追踪**：PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 计划在 Pico 通道的最终消息中输出每轮对话的实际 LLM token 消耗（区分输入/输出），以便下游消费者进行成本追踪。

## 3. 社区热点
今日讨论最活跃的 Issue 是关于新通信协议网关的需求：
- **去中心化/加密通信网关需求**：Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 获得了 4 条评论和 1 个赞，用户提出需要 SimpleX、Wire 或 Tox 网关。结合待合并的 Delta Chat 网关 PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)，观察到社区对隐私保护及去中心化通信协议接入 PicoClaw 存在明确诉求。

## 4. Bug 与稳定性
今日更新了 2 个 Bug 相关的 Issue，涉及前端兼容性和大模型 API 解析问题：
- **火山引擎豆包模型工具调用解析异常（中等严重）**：Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) 报告在使用 `doubao-seed-2.0-pro` 模型时，工具调用偶尔未被正确执行，而是作为原始 `<seed:tool_call>` XML 文本泄露给用户。目前暂无对应的修复 PR。
- **低版本 iOS Safari 面板兼容性问题（已关闭）**：Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) 报告在 iOS 16.4 以下版本的 Safari 浏览器中无法正常使用 PicoClaw 面板。该 Issue 今日被标记为 stale 并关闭，表明维护者可能不再支持过低版本的浏览器，或认为该问题优先级较低。

## 5. 功能请求归类
- **通信网关扩展**：用户请求支持 SimpleX、Wire 或 Tox 等注重隐私的通信协议（[#3093](https://github.com/sipeed/picoclaw/issues/3093)）。同时，开发者提交了 Delta Chat 网关的实现 PR（[#3063](https://github.com/sipeed/picoclaw/pull/3063)）。
- **API 成本与用量监控**：开发者主动提交了 AWS Bedrock 提示缓存支持（[#3163](https://github.com/sipeed/picoclaw/pull/3163)）以及单轮对话 Token 使用量精确统计（[#3156](https://github.com/sipeed/picoclaw/pull/3156)）的功能 PR，旨在优化大模型调用成本并提供更细粒度的用量数据。

## 6. 用户反馈摘要
- **痛点**：在使用国内大模型（如火山引擎豆包）时，模型返回的特定格式（如 `<seed:tool_call>`）未能被 PicoClaw 正确拦截和解析，导致工具调用失败并暴露底层提示词/格式（[#3153](https://github.com/sipeed/picoclaw/issues/3153)）。
- **使用场景**：用户希望在更多注重隐私和去中心化的即时通讯软件（如 SimpleX, Tox）中使用 PicoClaw 作为 AI 网关（[#3093](https://github.com/sipeed/picoclaw/issues/3093)）。此外，开发者在集成 AWS Bedrock 时，对降低长上下文或系统提示词的重复计费成本有明确的工程需求（[#3163](https://github.com/sipeed/picoclaw/pull/3163)）。

## 7. 待处理积压
以下 Issue 和 PR 被标记为 `[stale]`（停滞）或长期未合并，需维护者关注：
- **PR [#3156](https://github.com/sipeed/picoclaw/pull/3156)**：由 @loafoe 提交的 Token 使用量追踪功能，创建于 06-22，目前处于 stale 状态，等待代码审查。
- **PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)**：Delta Chat 网关接入 PR，创建于 06-08，已搁置超过 3 周，等待合并或反馈。
- **Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093)**：关于 SimpleX/Tox 网关的需求，创建于 06-10，虽有讨论但被标记为 stale，需确认是否纳入后续规划或关闭。

</details>