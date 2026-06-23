# OpenClaw 生态日报 2026-06-23

> Issues: 265 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-23 00:34 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 OpenClaw 项目 GitHub 数据，我为您生成了 2026-06-23 的项目动态日报。

---

### OpenClaw 项目动态日报 — 2026-06-23

#### 1. 今日活动概览

过去 24 小时内，OpenClaw 项目活跃度较高。社区共提交了 265 条 Issue 更新（其中新开或活跃 178 条，关闭 87 条）和 500 条 PR 更新（其中待合并 435 条，已合并或关闭 65 条）。项目发布了 `v2026.6.10-beta.2` 版本。社区焦点集中在解决近期版本引入的回归性 Bug（如内存泄漏、会话状态丢失）和核心功能的稳定性优化上，同时有多个重要的功能请求和修复正在进行中。

#### 2. 版本发布

**新版本: v2026.6.10-beta.2**

- **链接**: [查看 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.6.10-beta.2)
- **核心变化**:
  - **自动快速对话模式**: 新增了对话自动快速模式，OpenClaw 可在短轮次对话中启用快速模式，并在需要更长时间运行的长对话中恢复至标准模式，以平衡响应速度和可靠性。(#85104)
  - **更可靠的模型路由**: 对模型路由逻辑进行了改进，提高了模型调度的稳定性。

#### 3. 项目进展

过去24小时内，项目有多项关键修复被合并或推进到关键阶段：

- **跨平台支持 (Windows)**: PR [#68936](https://github.com/openclaw/openclaw/pull/68936) 新增了 PR 审核自动修复流水线和 Windows 守护进程支持。
- **安全与边界**: PR [#78521](https://github.com/openclaw/openclaw/pull/78521) 在传输边界包装工具执行结果，增强了安全性。
- **核心修复**:
  - PR [#95614](https://github.com/openclaw/openclaw/pull/95614) 修复了 `memory-wiki` 在源文件重新摄入时丢失用户笔记的问题。
  - PR [#95218](https://github.com/openclaw/openclaw/pull/95218) 限制了 Provider JSON 响应的读取大小，防止了潜在的内存问题。
  - PR [#95880](https://github.com/openclaw/openclaw/pull/95880) 泛化了 QA 测试证据生成工作流。
  - PR [#95890](https://github.com/openclaw/openclaw/pull/95890) 修复了 CI 中对 `unzip` 工具的依赖，改进了兼容性。

#### 4. 社区热点

- **#91588 [Critical: Gateway Memory Leak]** ([链接](https://github.com/openclaw/openclaw/issues/91588))
  - **热度**: 13条评论，P0 严重级别。
  - **诉求**: 网关进程存在严重内存泄漏，运行2-3天后 RSS 从 350MB 增长至 15.5GB，导致 OOM 被杀并引发重启循环。这是当前社区最关心的问题之一，严重影响了长期运行的服务器部署。

- **#95279 [Provide a trusted inbound-decoration contract]** ([链接](https://github.com/openclaw/openclaw/issues/95279))
  - **热度**: 3条评论，4个👍。社区支持度高。
  - **诉求**: 当前系统在输入消息中混入了未经验证的元数据块（如会话信息、发送者等），导致消息体与原始消息不一致。用户希望有一个“可信的内联装饰契约”，以便消费者可以清晰地去重或剥离这些装饰，而不依赖易被伪造的文本启发式方法。

- **#90370 [Feature Request] 支持PostgreSQL替代SQLite** ([链接](https://github.com/openclaw/openclaw/issues/90370))
  - **热度**: 11条评论，2个👍。
  - **诉求**: 社区中一部分中大型部署用户强烈要求支持 PostgreSQL 作为可选的内部存储后端，以避免强制使用 SQLite 带来的资源浪费、数据孤岛及高并发性能问题。

#### 5. Bug 与稳定性

以下 Bug 按严重程度排列：

- **P0 (Critical)**:
  - **#91588**: [网关内存泄漏](https://github.com/openclaw/openclaw/issues/91588)，数天内 RSS 从 350MB 增长至 15.5GB，导致 OOM 崩溃。**暂无 Fix PR**。
  - **#92302 (Closed)**: [Windows 上 QMD 内存后端路径损坏](https://github.com/openclaw/openclaw/issues/92302)。**已通过 `memory.backend = "builtin"` 方案解决/关闭**。

- **P1 (High)**:
  - **#88312**: [2026.5.27版本引入的Codex应用服务器回合完成停滞回归](https://github.com/openclaw/openclaw/issues/88312)。**暂无 Fix PR**。
  - **#95623**: [跨 Provider 故障转移时，`tool_use.id` 净化器未能处理 OpenAI 复合 ID，导致 Anthropic 400 错误](https://github.com/openclaw/openclaw/issues/95623)。**暂无 Fix PR**。
  - **#95495**: [2026.6.9 版本无提示迁移了向量存储位置，导致用户需要重新嵌入1499个文件](https://github.com/openclaw/openclaw/issues/95495)。**暂无 Fix PR**。
  - **#95833**: [子代理中止结算无法释放会话 JSONL 锁](https://github.com/openclaw/openclaw/issues/95833)，导致会话永久损坏。**暂无 Fix PR**。
  - **#95760**: [NVIDIA Build Provider 流式传输在中途被静默切断](https://github.com/openclaw/openclaw/issues/95760)，会话进入僵尸状态。**暂无 Fix PR**。

- **其他影响广泛的问题**:
  - **#86538**: [会话写入锁超时阻塞递送通道](https://github.com/openclaw/openclaw/issues/86538)。
  - **#91363**: [隔离 cron 任务持续在 `model-call-started` 阶段失败](https://github.com/openclaw/openclaw/issues/91363)。
  - **#94147**: [macOS 应用因每秒重建 `CLLocationManager` 导致疯狂请求TCC权限](https://github.com/openclaw/openclaw/issues/94147)。

#### 6. 功能请求归类

- **存储后端扩展**:
  - **#90370**: [请求支持 PostgreSQL 数据库](https://github.com/openclaw/openclaw/issues/90370) 作为 SQLite 的替代方案。目前无关联修复 PR。

- **频道与消息优化**:
  - **#8299**: [请求新增配置项以抑制子代理公告](https://github.com/openclaw/openclaw/issues/8299)。目前无关联修复 PR。
  - **#78431**: [请求为 Discord 实现 `messages.statusReactions` 生命周期](https://github.com/openclaw/openclaw/issues/78431)，以支持任务完成状态的持久化表情。目前无关联修复 PR。
  - **#54794**: [请求增加 Telegram 内联查询支持](https://github.com/openclaw/openclaw/issues/54794)。

- **配置与部署**:
  - **#53638**: [请求支持按频道/群组/私聊配置模型覆盖](https://github.com/openclaw/openclaw/issues/53638)。**此 Issue 已关闭**。
  - **#92516**: [容器化部署无法使用外部化频道插件](https://github.com/openclaw/openclaw/issues/92516)，因为权限问题。

- **会话与状态管理**:
  - **#86023**: [Codex 长会话应使用语义线程/启动缓存所有权](https://github.com/openclaw/openclaw/issues/86023)。
  - **#43564**: [请求支持 ACP 会话技能上下文注入](https://github.com/openclaw/openclaw/issues/43564)。

#### 7. 用户反馈摘要

- **痛点**:
  - **升级灾难**: 多位用户报告，升级到 `2026.6.x` 系列版本后，遭遇了无提示的数据迁移（#95495）、功能回归（#88312, #93041, #93905）和严重的性能问题（#91588），导致工作流中断，信任度下降。
  - **部署烦恼**: 容器化和小团队用户面临插件系统权限限制（#92516）、数据库选择单一（#90370）以及特定平台（如 macOS, Windows, Android）的各种兼容性问题（#94147, #92302, #87058）。
  - **调试困难**: Bug 报告普遍指向缺乏足够的诊断信息。例如，会话写锁超时（#86538）、内存泄漏（#91588）和递送失败（#85743）等问题难以快速定位和修复。
  - **模型集成不稳定**: 与第三方模型/Provider（如 DeepSeek, Ollama, Anthropic）的集成频繁出现连接中断、认证失败和静默错误，影响了核心对话体验（#88657, #94251, #95612, #95489）。
- **满意点**:
  - 用户对 `v2026.6.10-beta.2` 中引入的“自动快速对话模式”（#85104）和改善的模型路由表示欢迎，这表明社区在持续关注性能优化。

#### 8. 待处理积压

部分长期未得到回应或仍处于堆积状态的重要 Issue/PR，提醒维护者关注：

- **长期待处理的功能请求**:
  - **#8299**: [抑制子代理公告](https://github.com/openclaw/openclaw/issues/8299) (2026-02-03 提出，至今已超4个月)。
  - **#54794**: [Telegram 内联查询](https://github.com/openclaw/openclaw/issues/54794) (2026-03-26 提出)。
  - **#43564**: [ACP 技能上下文注入](https://github.com/openclaw/openclaw/issues/43564) (2026-03-12 提出)。

- **长期存在的 Bug**:
  - **#85743**: [`pendingFinalDelivery` 心跳重放循环](https://github.com/openclaw/openclaw/issues/85743) 问题，可能影响多个用户的会话递送。
  - **#86538**: [会话写锁超时](https://github.com/openclaw/openclaw/issues/86538) 问题，影响面广但长期未关闭。

- **长期未合入的 PR**:
  - 多个 P1/P2 级别的 PR，如 [#78184](https://github.com/openclaw/openclaw/pull/78184) (执行审批提示修复)、[#76806](https://github.com/openclaw/openclaw/pull/76806) (上下文溢出断路器) 等，均处于 `waiting on author` 或 `needs proof` 状态，可能需要维护者介入推动。

---

## 横向生态对比

# 2026-06-23 AI智能体与个人AI助手开源项目横向对比分析

## 1. 今日横向概览

2026年6月23日，四个项目呈现差异明显的活动格局。OpenClaw 以 265 条 Issue 和 500 条 PR 更新维持最高量级，但待合入 PR 积压严重（435条）；Zeroclaw 同样保持高强度讨论，50 条 Issue 与 50 条 PR 中绝大多数为待审核状态，且集中涌现大量架构安全 RFC。PicoClaw 合并效率最高，34 个 PR 被合入，并发布了一个 nightly 版本。NanoBot 相对安静，仅 4 个 Issue 但通过 12 个稳定性修复 PR 巩固了网关和 WebUI 的可靠性。各项目今日均未发布正式版次（OpenClaw 为 beta.2，PicoClaw 为 nightly）。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 / 关闭） | PRs（待合并 / 已合并关闭） | Release | 事实性备注 |
|------|-----------------------------|----------------------------|---------|------------|
| **OpenClaw** | 178 新开/活跃, 87 关闭 | 435 待合并, 65 已合并/关闭 | `v2026.6.10-beta.2` | 回归性Bug修复集中，社区最关注网关内存泄漏（P0）。 |
| **NanoBot** | 2 新开/活跃, 2 关闭 | 15 待合并, 12 已合并/关闭 | 无 | 主要由 @Re-bin 完成网关、MCP、WebUI 稳定性修复。 |
| **Zeroclaw** | 42 新开/活跃, 8 关闭 | 48 待合并, 2 已合并/关闭 | 无 | 社区焦点为安全 RFC（供应链签名、Wasm 沙箱）及 S1 级 Bug（MCP 工具缺失、上下文预算）。 |
| **PicoClaw** | 2 新开/活跃, 0 关闭 | 10 待合并, 34 已合并/关闭 | `v0.3.0-nightly.20260622.287853ab` | 合并效率高，修复了 JSONL 崩溃、类型断言 panic 等问题，新增 `direct_reply` 和 MiMo 模型支持。 |

## 3. OpenClaw 与同类对照

**活动量**：OpenClaw 的 Issue/PR 总数远超其他项目（265+500），但待合入 PR 占比 87%，说明维护者 Review 瓶颈明显；NanoBot 待合入占比 56%，Zeroclaw 高达 96%，PicoClaw 仅 23%，活跃度与合并效率间存在显著差异。

**技术重点**：OpenClaw 今日核心是修复回归性稳定问题（内存泄漏、会话丢失、数据迁移无提示），并推出自动快速对话模式优化响应速度。NanoBot 同样聚焦稳定性（网关关闭异常、MCP 连接崩溃），但范围更窄。Zeroclaw 则处于架构转型期——大量 RFC 围绕“消除 Node.js 依赖”和“原生动态链接库插件系统”，Bug 修复优先级低于安全设计。PicoClaw 处理的多是中层稳定性修复（类型断言、消息总线背压），还引入了新的 spawn 交互模式（`direct_reply`）。

**社区讨论面**：OpenClaw 社区最关心长期运行稳定性（P0 内存泄漏、写锁超时），升级灾难反馈集中；Zeroclaw 社区讨论高度集中在安全与架构方向；NanoBot 和 PicoClaw 的讨论较为务实，多为具体功能请求（Telegram 富消息、去中心化网关）和短期 Bug。

## 4. 共同出现的技术方向

- **MCP（Model Context Protocol）集成稳定性**：NanoBot 合并了 4 个 MCP 相关修复（关闭异常、重连崩溃、注册漏洞），Zeroclaw 有 S1 级 Bug“MCP 工具在 TUI 中不可用”（#8193）。OpenClaw 与 PicoClaw 今日未涉及 MCP 话题。
- **跨平台兼容性（Windows）**：OpenClaw 合入了 Windows 守护进程支持 PR（#68936），Zeroclaw 修复了 Windows 自更新（#7853）且存在 74 个 Windows 测试失败（#7462）。NanoBot 和 PicoClaw 无明确 Windows 相关更新。
- **对话上下文窗口调整**：OpenClaw 新增了自动快速对话模式平衡长/短对话响应，NanoBot 将默认上下文窗口从 65K 调整至 200K（#4448）。Zeroclaw 则长期存在默认 32K 上下文预算被系统提示占用的问题（#5808）。
- **存储后端扩展诉求**：OpenClaw 社区持续要求支持 PostgreSQL 替代 SQLite（#90370），PicoClaw 和 NanoBot 今日无类似诉求，Zeroclaw 无。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 全功能智能体框架，强调模型路由、多 Provider 调度、频道插件生态 | 轻量级智能体网关，专注 WebUI 与多通信渠道的快速集成 | 安全优先的 AI 智能体，强推 Wasm 沙箱、供应链签名、消除 Node.js 依赖 | 嵌入式/边缘优先的 AI 助手，注重与硬件（如 Sipeed 板）的集成和快速迭代 |
| **目标用户** | 高级开发者/运维，追求大规模部署和深度定制 | 中小团队、个人开发者，追求开箱即用和多平台入口 | 安全敏感型组织、去中心化爱好者，愿意接受架构实验 | 硬件开发者、物联网场景、快速原型用户 |
| **技术架构** | 单体微内核 + 插件系统，支持多种运行时 | 网关+WebUI 分离架构，依赖 Node.js 生态 | 纯 Rust + WebAssembly，计划彻底移除 Node.js，采用原生.so/.dll 插件 | 基于 Go/其他轻量语言？从仓库名 sipeed 看可能偏向嵌入式，但代码细节不明 |
| **今日社区热点** | 网关内存泄漏、升级灾难、PostgreSQL 支持 | 网关守护进程、子代理模型配置 | 安全 RFC（供应链签名、Wasm 运行时）、MCP 工具缺失、上下文预算 | SimpleX/Tox 去中心化网关、Volcengine 豆包工具调用泄漏 |

## 6. 社区活跃度记录

基于今日的 Issue/PR 数量及发布记录，可将四个项目划分为三个活跃度层级：

- **高活跃度**：OpenClaw（大量 Issue/PR 流动，但合并效率低）、Zeroclaw（RFC 密集，架构讨论活跃，待合并积压严重）
- **中活跃度**：PicoClaw（Issue 少但 PR 合入效率高，低频高质）
- **低活跃度**：NanoBot（Issue 数量极少，PR 活动更偏向存量修复）

注意：PicoClaw 虽然 Issue 仅 2 个，但 34 个 PR 被合入，实际产出并不低。此分层基于公开活动量，不涉及项目成熟度评估——OpenClaw 的活跃也可能因 Bug 频发引起，并非正向信号。

## 7. 有证据支撑的观察

1. **MCP 集成仍是智能体项目的核心痛点**：NanoBot 和 Zeroclaw 今日均发生了 MCP 相关的 Bug 修复或功能阻塞（连接崩溃、工具不可见），而 OpenClaw 和 PicoClaw 未见同类问题，显示各项目在 MCP 支持上进展不一。

2. **跨平台（Windows）兼容性改善被多个项目重视**：OpenClaw 和 Zeroclaw 今日各有 Windows 相关修复合入（守护进程、自更新），且 Zeroclaw 暴露了 74 个 Windows 测试失败，表明该领域是近期投入方向。

3. **架构安全与依赖简化为 Zeroclaw 当前最优先议题**：今日 Zeroclaw 新开了至少 5 个涉及安全/架构的 RFC（#7674 消除 Node.js、#8177 供应链签名、#8135 Wasm 插件运行时、#8132 前端替代 React），而 Bug 修复 PR 仅 2 个合入。这与其 `type:rfc` 标签密集出现一致。

4. **社区对“升级灾难”的容忍度在下滑**：OpenClaw 多个用户报告 2026.6.x 版本无提示数据迁移、功能回归、网关内存泄漏，导致信任度下降。这种“频繁破坏性变更”的反馈在 Zeroclaw 和 NanoBot 中未见，说明后两者发布节奏更保守。

5. **去中心化通信协议需求零星出现但未获回应**：PicoClaw 的 Issue #3093（请求 SimpleX/Tox）已存在两周无维护者介入，Zeroclaw 和 OpenClaw 无类似诉求。这可能是未被充分关注的细分方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，以下是为您生成的 NanoBot 项目动态日报。

---

## NanoBot 项目动态日报 | 2026-06-23

### 1. 今日活动概览

过去24小时内，项目共处理了4个Issues（其中2个新开/活跃，2个已关闭）和27个Pull Requests（其中12个已合并/关闭，15个待合并）。主要工作集中在提升网关和WebUI的稳定性，多个由同一贡献者（@Re-bin）提交的修复PR已合并，修复了网关关闭、WebUI历史刷新以及MCP连接相关的崩溃问题。此外，默认上下文窗口已从65K调整至200K。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日合并了多个关键的稳定性修复PR，显著提升了核心组件的健壮性。

- **网关与MCP稳定性**: 合并了由 @Re-bin 提交的一系列修复：
  - [#4454 fix: stabilize gateway shutdown and webui fork replay](https://github.com/HKUDS/nanobot/pull/4454): 修复了前台网关在收到信号时未能正常关闭的问题。
  - [#4456 fix(gateway): tolerate cancelled channel tasks during shutdown](https://github.com/HKUDS/nanobot/pull/4456): 修复了网关关闭时，因通道任务已被取消而引发的异常。
  - [#4450 fix: close MCP stdio transports from agent task](https://github.com/HKUDS/nanobot/pull/4450): 修复了MCP stdio传输在代理任务关闭时可能引发的AnyIO取消作用域错误。
- **WebUI 体验修复**:
  - [#4453 fix(webui): follow active turn output after send](https://github.com/HKUDS/nanobot/pull/4453): 修复了发送消息后，页面自动滚动跟随Agent输出的行为逻辑。
  - [#4455 fix(webui): preserve fork replies during history refresh](https://github.com/HKUDS/nanobot/pull/4455): 修复了分叉线程中，回复内容可能在历史刷新后消失的竞态问题。
  - [#4451 fix(webui): stabilize sent turn layout and dev reloads](https://github.com/HKUDS/nanobot/pull/4451): 修复了发送消息后的布局错位与热重载问题。
- **配置与发布**:
  - [#4448 chore(config): default context window to 200k](https://github.com/HKUDS/nanobot/pull/4448): 将默认上下文窗口从65K tokens调整为200K。
  - [#4445 chore(release): prepare v0.2.2](https://github.com/HKUDS/nanobot/pull/4445): 推进了v0.2.2版本的发布准备工作，包括版本号和文档更新。

### 4. 社区热点

- **#1461 [CLOSED] 统一守护进程网关语义层**
  [链接](https://github.com/HKUDS/nanobot/issues/1461)
  该Issue虽已关闭，但在过去24小时内仍有更新。它提出将NanoBot网关升级为后台守护进程，提供统一的重启/状态/日志控制体验。这反映了部分用户对更专业化、类似系统服务的运行方式的诉求，以支持更稳定的多平台部署。

- **#4413 [OPEN] 支持 Telegram Bot API 10.1 富消息**
  [链接](https://github.com/HKUDS/nanobot/issues/4413)
  此Issue获得了2条评论，请求支持新版Telegram Bot API中的富消息格式，以便发送更格式化的文本。这表明社区用户正关注与最新上游API的兼容性，并希望提升在Telegram平台上的消息展示效果。

### 5. Bug 与稳定性

- **严重: MCP连接管理错误**:
  - [#4441 fix(mcp): force-close streamable_http generator on reconnect failure](https://github.com/HKUDS/nanobot/pull/4441): 修复了MCP服务器重连失败时，网关因任务作用域管理不当而崩溃的问题。
  - [#4436 fix(tools): gate MCP resource and prompt registration behind enabledTools](https://github.com/HKUDS/nanobot/pull/4436): 修复了MCP `enabledTools` 白名单仅对工具生效，但未限制资源和提示词注册的漏洞。
  - [#4450 fix: close MCP stdio transports from agent task](https://github.com/HKUDS/nanobot/pull/4450): 修复了MCP stdio传输在特定场景下的关闭错误。（已合并）
- **中等: 会话与WebUI状态不一致**:
  - [#4443 fix: guard against duplicate tool_use ids in streamed responses](https://github.com/HKUDS/nanobot/pull/4443): 修复了流式响应中重复的 `tool_use` ID 导致会话后续请求失败的“致命”问题，该问题会使会话永久不可用。
  - [#4433 fix(pairing): normalize sender IDs to str in the pairing store](https://github.com/HKUDS/nanobot/pull/4433): 修复了配对存储中发送者ID类型不一致，可能导致静默拒绝的问题。
- **轻微: 行为优化**:
  - [#4397 fix(runner): insert user-attention hint before mid-turn user messages](https://github.com/HKUDS/nanobot/pull/4397): 建议在用户于工具调用期间打断时，插入一个hint消息，引导LLM优先响应用户输入。

### 6. 功能请求归类

- **平台/渠道扩展**:
  - Issue [#4413](https://github.com/HKUDS/nanobot/issues/4413): 请求适配Telegram Bot API 10.1的富消息格式。
  - PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) [OPEN]: 增加对Mattermost通信渠道的支持。
  - PR [#4446](https://github.com/HKUDS/nanobot/pull/4446) [OPEN]: 为钉钉渠道增加“禁止私聊”配置和群内@发送者回复功能。
- **用户体验 (UX)**:
  - Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376) [CLOSED] (被点赞): 提出改进`nanobot onboard --wizard`向导，使其对新手/非技术用户更友好。
  - Issue [#4457](https://github.com/HKUDS/nanobot/pull/4457) / PR [#4458](https://github.com/HKUDS/nanobot/pull/4458) [OPEN]: 为WebUI添加PWA（渐进式Web应用）支持，以便在移动设备主屏幕安装。
- **内部/运维改进**:
  - Issue [#1461](https://github.com/HKUDS/nanobot/issues/1461) [CLOSED]: 提议将网关作为后台守护进程运行，并提供统一控制接口。
  - PR [#4460](https://github.com/HKUDS/nanobot/pull/4460) [OPEN]: 提议将项目Node.js版本升级到24。
  - PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) [OPEN]: 允许子代理（Subagents）使用与其父代理不同的模型预设（通过`spawn`调用时指定）。

### 7. 用户反馈摘要

从今日的Issue评论和PR提交中，可以观察到以下用户诉求：

- **配置复杂性**: Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376) 的提议（获得1个👍）表明，有非技术用户认为`nanobot onboard --wizard`要求了解过多技术细节，上手门槛较高。
- **平台兼容性**: 用户对与特定平台（Telegram, Mattermost, 钉钉）的深度集成和功能完善有持续需求，包括支持API新特性、增强消息格式和增加控制选项。
- **运行稳定性**: 多个Bug修复PR（如网关关闭、MCP连接问题）的集中出现，表面近期社区部署可能遭遇了相关的稳定性挑战。@Re-bin 对这些问题的快速修复得到了社区的积极反馈（体现在PR的快速合并上）。

### 8. 待处理积压

- **PR #4291**: [feat(spawn): allow subagents to use configurable model presets](https://github.com/HKUDS/nanobot/pull/4291)
  创建于6月11日，已持续12天。该PR涉及子代理模型配置，是一个非常重要的功能扩展。尽管今日有更新，但其开放时间较长，且尚无明确进展或维护者反馈，建议维护者关注并评估。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 GitHub 数据生成的 Zeroclaw 项目动态日报。

---

## Zeroclaw 项目动态日报 (2026-06-23)

### 1. 今日活动概览
过去 24 小时内，Zeroclaw 项目社区活跃度极高，共有 50 条 Issue 和 50 条 PR 被更新。其中，新开/活跃的 Issue 为 42 条，另有 8 条关闭；PR 方面，待合并的高达 48 条，仅 2 条被合并或关闭。项目未发布新版本。社区讨论的核心集中在**安全加固**（如供应链签名、Wasm 沙箱）、**架构升级**（消除 Node.js 依赖、插件系统）以及**多个严重 Bug** 的修复上。大量涉及“风险：高”且带 `type:rfc` 的 Issue 被提出，表明项目正在经历一轮重大的架构重组和安全性审查。

### 2. 版本发布
无

### 3. 项目进展
今日被关闭的 PR 数量较少，但涉及重要修复：
- **PR #7853 [CLOSED]**：由 @NiuBlibing 贡献，**修复了 Windows 平台的自我更新功能**。之前的实现因为 Windows 锁定运行中进程文件无法删除，导致更新彻底失败。此 PR 不仅修复了该问题，还通过添加临时文件重试、集成测试和熔断机制强化了整个更新流程。这表明项目对多平台（特别是 Windows）的稳定性投入了关注。
- **PR #7999 [CLOSED]**：由 @MaHaoHao-ch 贡献，对 Zerocode TUI 的配置界面进行了改进，可以**显示当前激活的配置目录**。这在用户通过 `--config-dir` 参数或环境变量运行多个配置时非常有用。
- **Issue #7688 [CLOSED]**：由 @Audacity88 提出，作为测试覆盖工作的一部分，**增加了运行时钩子的恐慌恢复（panic recovery）和取消传播（cancellation propagation）测试**，提升了运行时核心的健壮性。

### 4. 社区热点
今日社区讨论焦点集中在两大 RFC（Request for Comments）和几个关键 Bug 上：
- **#7420: RFC: 原生动态链接库插件系统** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)): 尽管已关闭，但作为讨论数最多的 Issue（6条评论），引发了社区对核心架构的深度思考。该 RFC 旨在解决单体架构痛点，通过原生 .so/.dll 插件系统替代现有的微内核方案。
- **#7674: RFC: WebAssembly-first，消除 Node.js 依赖** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)): 同样讨论热烈（5条评论），提出彻底移除项目对 Node.js 生态的依赖，转向纯 Rust + WebAssembly，以降低供应链风险。这被视为一个重大的架构方向决策。
- **#8193: Bug: MCP 工具在 TUI 会话中缺失** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)): 这是一个 **S1 (工作流阻塞)** 级别的 Bug，用户报告通过 MCP 协议连接的工具无法在 Zerocode TUI 中使用，而在网关侧可见。社区对此问题反应迅速，已有多条评论分析根因。
- **#8177: RFC: 供应链签名与 SLSA 溯源** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)): 虽然创建于今日但已有3条评论，社区对构建和发布流程的安全性高度关注。

### 5. Bug 与稳定性
今日报告的 Bug 主要集中在运行时行为异常和平台兼容性上，按严重程度排列：

- **S1 (工作流阻塞)**
    - **#8193**: MCP 工具在 Zerocode TUI 中不可见 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8193))。该问题已有对应的 **修复 PR #8199** 提出。
    - **#5808**: 默认 32k 上下文预算在首次迭代时即被系统提示和工具定义超额占用，导致持续触发上下文截断 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5808))。这是一个长期存在的问题，近期又有新评论。
    - **#7756**: 原生/MCP 工具在 OpenAI Reasoning 和 Anthropic 模型上不可用 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7756))。
    - **#8154**: Kimi Code 模型 API 端点地址错误，导致为 404 故障 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8154))。

- **S0 (数据丢失/安全风险)**
    - **#8013 [CLOSED]**: 禁用 Agent 后，其绑定的 Discord 频道并未停止响应 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8013))。该问题虽已关闭，但其严重性表明核心的状态管理逻辑需要加强。

- **S2 (功能降级)**
    - **#7462**: 在 Windows 11 系统上存在 **74 个测试失败**，主要是由于路径语义和终端编码不兼容导致 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))。CI 仅运行在 Linux 上，导致此问题未被及时发现。
    - **#6360**: Telegram 频道的提示缓存（Prompt Caching）功能失效，导致 LLM 反复重新处理，增加了延迟和成本 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6360))。

### 6. 功能请求归类
今日用户提出的新功能需求主要围绕以下方面，且多有对应的 RFC 或 PR 跟进：

- **安全性与权限模型**
    - **#8125**: 快速启动时自动设置“yolo”风险配置，以匹配无限制运行模式的体验 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8125))。
    - **#8076**: 提供本地用户名/密码认证提供者，以支持无身份提供者（IdP）的浏览器登录 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8076))。
    - **#8135**: 将 Wasm 作为默认插件运行时，并引入能力强制和签名分发机制 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8135))。
    - **#8132**: 用 Rust→Wasm 框架（如 Dioxus, Leptos）替代当前的 React/Vite 前端构建，以消除 Node.js 依赖 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8132))。

- **CI/CD 与开发体验**
    - **#8059, #8057, #8056**: 由 @piiiico 提出的系列 CI 增强，涉及清理 `deny.toml` 策略、添加 CodeQL/Trivy 等安全扫描任务、以及设置 PR 合并的必要安全检查门禁。这些拆分开的 Issue 表明 CI 正在走向精细化。
    - **#8078**: 提议增加一个本地的“预提交门禁”，在代码推送到远端之前，在本地运行完整的贡献者检查标准 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8078))。
    - **#8170**: 提议在 Web 仪表盘增加**应用内升级和受控重启功能** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8170))。

- **渠道与集成**
    - **#8046**: 为 Telegram 频道添加可选的 Webhook 模式，与现有的长轮询模式互补 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8046))。
    - **#8134**: 实现 `session_ttl_hours` 配置，以自动清理陈旧会话，降低 Token 消耗 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8134))。
    - **#8138**: 支持 OpenRouter 模型 fallback 配置，当一个模型不可用时自动切换到备用模型 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8138))。

### 7. 用户反馈摘要
- **痛点明显**: 多个 `S1` 级别的 Bug 被报告，如 **MCP 工具在 TUI 不可用** (#8193) 和 **Kimi API 地址失效** (#8154)，直接阻塞了用户的使用流程，反映了 Beta/早期阶段常见的问题。
- **对架构安全性的高度关注**: #7674 (消除 Node.js) 和 #8177 (供应链签名) 的提出和讨论，表明核心用户群体对现代软件开发中的供应链攻击风险有清晰认识，并期待 ZeroClaw 在架构层面就进行防范。
- **对配置体验的抱怨**: #8125 从一个侧面反映了用户觉得默认的风险配置过于严格，影响快速上手体验。
- **平台兼容性呼声高涨**: #7462 的 74 个 Windows 测试失败和 #7853 的 Windows 自更新问题修复，说明社区中有相当一部分 Windows 用户，且对跨平台体验有较高要求。
- **正面反馈**: 从 #8043 (集成 aardvark-sys crate) 和 #7688 (增加钩子测试) 等 Issue 的关闭或讨论来看，维护者与社区能就如何优化代码结构达成共识，合作氛围良好。

### 8. 待处理积压
以下 Issue/PR 为长期未获解决的阻塞性问题，或近期刚被标记为 `needs-maintainer-review`，需维护者重点关注：
- **#5808**: **S1 优先级**的上下文预算问题，已持续超过两个月，至今仍有新评论，讨论解决方案，但尚未看到最终修复合入。
- **#7462**: **74 个 Windows 测试失败**问题，严重阻碍了 Windows 用户的开发与贡献，虽被标记为 `status:accepted`，但进展缓慢。
- **#6360**: Telegram 提示缓存失效问题，影响特定渠道用户的日常使用体验。
- **#8193** 和 **#8154**: 新提出的 **S1 级别** Bug，虽有 PR 跟进，但需要维护者尽快进行 Review 和合并，以解除用户阻塞。
- **#7432**: v0.9.0 版本跟踪 Issue，汇总了 134 个待办项 (18 个 PR, 116 个 Issue)，反映出下一个版本的发布工作繁重，维护者需要合理安排优先级，避免分步过大。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-06-23

## 1. 今日活动概览

过去24小时，PicoClaw 仓库保持活跃：共更新2个 Issues（均为新开/活跃，无关闭），44个 Pull Requests（其中10个待合并，34个已合并/关闭）。此外，发布了一个 nightly 构建版本 `v0.3.0-nightly.20260622.287853ab`。社区方面，有用户反馈 Volcengine 豆包模型工具调用泄漏问题，同时多项功能开发和 bug 修复 PR 被合并。

## 2. 版本发布

**nightly 构建：** `v0.3.0-nightly.20260622.287853ab`

- 标签：nightly
- 说明：自动化构建，可能不稳定，谨慎使用。
- 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.0...main

> 本次为日常构建，未标注破坏性变更或迁移说明。

## 3. 项目进展

今日有34个 PR 被合并/关闭，以下为较重要的功能推进和修复：

| PR 编号 | 类型 | 摘要 |
|--------|------|------|
| #3155 | 功能合并 | `feat(spawn): add direct_reply parameter with SkipInboundTurn support` - 解决 spawn 异步回调导致重复消息的问题，通过 `ToolResult.SkipInboundTurn` 提供两种清晰的行为路径。 |
| #3152 | 功能合并 | `add installation instructions to picoclaw skills search` - 增强技能搜索输出，明确告知用户如何安装搜索到的技能。 |
| #3053 | 修复合并 | `fix(evolution): add ok check for LoadOrStore type assertion in lockStoreFile` - 修复因未检查类型断言导致的潜在 panic。 |
| #3091 | 修复合并 | `fix(openai_compat): add ok check for native_search type assertion` - 修复类型断言忽略 `ok` 导致静默禁用 native_search 的问题。 |
| #3101 | 依赖升级 | `build(deps-dev): bump vite from 8.0.13 to 8.0.16` |
| #3105 | 依赖升级 | `build(deps-dev): bump eslint from 10.2.1 to 10.4.1` |
| #2906 | 修复合并 | `Fix message bus backpressure handling and health visibility` - 改进消息总线背压处理，使用有界等待取代无界阻塞，并增强健康可见性。 |
| #2915 | 功能合并 | `feat(providers): add CommonModels for MiMo provider` - 为 MiMo 提供商添加 `mimo-v2.5` 和 `mimo-v2.5-pro` 模型推荐，提升 WebUI 视觉模型默认选择体验。 |
| #2913 | 修复合并 | `Fix JSONL session index hot-path cloning and TTL refresh semantics` - 修复 JSONL 会话索引在缓存命中时仍完整克隆内存索引的热路径性能问题。 |
| #2907 | 修复合并 | `Fix JSONL store metadata drift after crash` - 修复 JSONL 存储崩溃后的元数据不一致问题。 |

此外，仍有10个 PR 处于待合并状态，其中包括多个依赖升级（`shadcn`, `@vitejs/plugin-react`, `typescript-eslint` 等）以及 `[stale]` 标记的代码修复。

## 4. 社区热点

**#3093 [Feature] I need SimpleX or tox**
- 作者：@Damian-o2 | 创建：2026-06-10 | 最近更新：2026-06-22
- 评论：3 | 👍：1
- 链接：https://github.com/sipeed/picoclaw/issues/3093

用户明确需要 PicoClaw 支持 **SimpleX** 或 **Tox** 网关协议，目前已有3条讨论但尚未有维护者官方回应。该 Issue 持续受到关注，反映出部分用户对去中心化通信网关的需求。

**#3153 [BUG] Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text**
- 作者：@ms8great | 创建：2026-06-22 | 更新：2026-06-22
- 评论：0 | 👍：0
- 链接：https://github.com/sipeed/picoclaw/issues/3153

该 Bug 报告了使用 v0.2.8 配合 Volcengine 豆包模型时，工具调用会以原始 XML 文本泄露给用户而非被执行，影响实际使用。此 Issue 在发布当日即有关联修复 PR #3154，维护者响应迅速。

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 |
|----------|------------|------|------|
| 中 | #3153 | Volcengine Doubao Seed 模型工具调用偶尔以 `<seed:tool_call>` 原始文本泄露（而非执行） | 已有 fix PR #3154（待合并） |
| 中 | #3131 | `pkg/tools/registry.go` 中三个类型断言缺少 `ok` 检查，可能 panic | PR #3131 待合并（stale） |
| 低 | #3128 | 四个搜索提供商（Bing, Tavily, Sogou, Perplexity）中 `resp.Body.Close()` 错误未被忽略 | PR #3128 待合并（stale） |
| 低 | #3053, #3091 | loadStoreFile 和 native_search 类型断言问题 | 今日已合并修复 |

## 6. 功能请求归类

| 功能诉求 | 对应 Issue / PR | 描述 |
|----------|-----------------|------|
| 新网关协议 | #3093（Issue） | 请求集成 SimpleX 或 Tox 等去中心化通信网关。 |
| Android ADB 远程操作 | #3157（PR，未合并） | 新增实验性 ADB 工具，支持设备列表、截图、UI 层次摘要、点击、滑动等操作，默认关闭。 |
| 每轮 LLM token 用量追踪 | #3156（PR，待合并） | 在 Pico 通道的最终消息中携带 input/output token 数量，供下游消费者跟踪对话 token 消耗。 |
| spawn 指令 direct_reply 参数 | #3155（PR，已合并） | 通过 `ToolResult.SkipInboundTurn` 控制直接回复 vs 触发主 Agent 的行为，解决重复消息。 |
| 技能安装指引 | #3152（PR，已合并） | 在 `picoclaw skills search` 输出中添加技能安装命令。 |
| 远程 WebSocket Agent 模式 | #3118（PR，待合并） | 为 `picoclaw agent` 增加 `--remote` 参数，支持通过 WebSocket 连接远程 Pico 实例工作。 |

## 7. 用户反馈摘要

- **Volcengine 豆包工具调用问题**（#3153）：用户 `@ms8great` 报告在 v0.2.8 中使用 `doubao-seed-2.0-pro` 时，偶尔出现 `raw <seed:tool_call>` 文本，导致工具无法正常执行，严重阻碍使用。用户提供了示例输出。
- **网关需求**（#3093）：用户 `@Damian-o2` 直接表达“我需要 SimpleX 或 tox”，表明当前 PicoClaw 的网关选择未覆盖部分去中心化协议用户的需求。该 Issue 有3条评论但维护者尚未介入。
- 以上是今日 Issues 中明确的用户痛点。其余 PR 多为自动化依赖升级或代码风格修复，无显性用户反馈。

## 8. 待处理积压

以下 Issue 或 PR 已长时间未获维护者回应或合入，提醒关注：

- **#3093 [Feature] I need SimpleX or tox**
  创建于 2026-06-10，已有两周，用户诉求明确但无维护者回复。
  链接：https://github.com/sipeed/picoclaw/issues/3093

- **#3118 Add remote Pico WebSocket mode to picoclaw agent**
  PR 创建于 2026-06-12，已标记 `[stale]`，目前仍有待审核。
  链接：https://github.com/sipeed/picoclaw/pull/3118

- **#3104 build(deps): bump shadcn from 4.7.0 to 4.11.0**
  依赖更新 PR，创建于 2026-06-11，因冲突或审核延迟被打上 `[stale]` 标签。
  链接：https://github.com/sipeed/picoclaw/pull/3104

- **#3131 fix(registry): add ok checks for tool schema type assertions**
  稳定性修复 PR 已标记 `[stale]`（2026-06-15），尚未合并。
  链接：https://github.com/sipeed/picoclaw/pull/3131

</details>