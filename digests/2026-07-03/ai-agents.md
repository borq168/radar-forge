# OpenClaw 生态日报 2026-07-03

> Issues: 192 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-03 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-07-03)

## 1. 今日活动概览
过去 24 小时内，OpenClaw 仓库共更新了 192 条 Issue（其中 112 条新开或活跃，80 条已关闭）和 500 条 PR（446 条待合并，54 条已合并或关闭）。项目发布了 `v2026.7.1-beta.1` 测试版本，核心更新包括对 OpenAI GPT-5.6 模型家族的原生支持以及外部 harness 挂载功能。社区讨论与代码提交高度集中在多智能体会话状态管理、消息路由泄漏修复以及各端（iOS/Android/Telegram）客户端的兼容性打磨上。

## 2. 版本发布
**v2026.7.1-beta.1**
- **OpenAI GPT-5.6 支持**：OpenClaw 现已在模型目录、能力评估和运行时选择路径中全面识别 GPT-5.6 模型家族 ([#98333](https://github.com/openclaw/openclaw/pull/98333))。
- **外部 harness 挂载**：新增 `openclaw attach` 命令，允许针对现有的 Gateway 会话启动外部 harness，增强了调试与扩展能力。

## 3. 项目进展
今日合并/关闭的重要 PR 主要集中在测试覆盖扩展、会话状态修复与客户端崩溃修复：
- **会话与子智能体管理**：修复了子智能体排空后顶层会话未被正确唤醒的问题 ([#99258](https://github.com/openclaw/openclaw/pull/99258))。
- **WebChat 渲染修复**：修复了 WebChat 中包含西里尔字母（多字节 UTF-8）的工具结果被错误渲染为图片附件的问题 ([#99186](https://github.com/openclaw/openclaw/issues/99186))。
- **iOS 稳定性**：修复了 iOS 语音唤醒（Voice Wake）在重新安装麦克风 tap 时可能导致的 AVFoundation 崩溃问题 ([#99093](https://github.com/openclaw/openclaw/issues/99093))。
- **QA 测试覆盖**：完善了 QA 实验室对 Crabline 扩展绑定的测试覆盖，新增了对 Signal、Mattermost 和 Matrix 通道的发送与状态归一化测试 ([#98779](https://github.com/openclaw/openclaw/pull/98779), [#99262](https://github.com/openclaw/openclaw/pull/99262), [#99264](https://github.com/openclaw/openclaw/pull/99264))。
- **依赖与安装**：关闭了 `memory-lancedb` 2026.6.1 因 `apache-arrow` 版本冲突导致安装失败的问题 ([#90295](https://github.com/openclaw/openclaw/issues/90295))。

## 4. 社区热点
- **工具调用文本泄漏到消息通道** ([#25592](https://github.com/openclaw/openclaw/issues/25592))：今日评论数最多（33条）。用户反馈智能体在工具调用之间产生的内部处理文本（如错误处理、确认）被直接路由到 Slack/iMessage 等活跃消息通道，造成严重的 UX 问题。
- **Codex app-server 回合完成停滞回归** ([#88312](https://github.com/openclaw/openclaw/issues/88312))：19条评论。多工具智能体回合在 2026.5.27 版本后可靠失败，提示“Codex stopped before confirming the turn was complete”，被标记为回归 Bug。
- **默认将私有记忆排除在共享会话之外** ([#99225](https://github.com/openclaw/openclaw/pull/99225))：由核心维护者提交的 XL 尺寸 PR，修复了共享群组或通道会话默认接收私有长期工作区记忆的隐私边界 Bug，涉及多个扩展和通道的配置调整。

## 5. Bug 与稳定性
**P1 严重 / 崩溃 / 消息丢失**
- **消息泄漏**：工具调用间的文本泄漏到外部消息通道 ([#25592](https://github.com/openclaw/openclaw/issues/25592))。
- **会话状态损坏**：并发 agent-to-agent turn 分叉会话树，压缩后重建产生被 Anthropic 拒绝的请求，导致转录永久损坏 ([#98790](https://github.com/openclaw/openclaw/issues/98790))。
- **重入保护缺失**：v2026.6.11 发布的 dist 缺少重入保护，导致回复会话初始化冲突 ([#98416](https://github.com/openclaw/openclaw/issues/98416))。
- **安全/幻觉**：助手自行插入了伪造的带时间戳的用户回合，并将其作为真实输入进行回答 ([#99253](https://github.com/openclaw/openclaw/issues/99253))。
- **磁盘 I/O 挂起**：Codex Apps 插件发现可能导致单次请求期间磁盘 I/O 过高，引发进程挂起 ([#99071](https://github.com/openclaw/openclaw/issues/99071))。

**P2 中等 / 功能异常**
- **Node 升级导致 Fork 失败**：Homebrew 升级 Node 后，本地 embedding worker fork 失败（ENOENT），因为继承了已删除二进制的 execPath ([#99183](https://github.com/openclaw/openclaw/issues/99183))。*已有修复 PR [#99222](https://github.com/openclaw/openclaw/pull/99222)*。
- **沙盒媒体限制**：沙盒媒体暂存限制硬编码为 5 MB，用户无法配置，导致大文件无法复制 ([#40880](https://github.com/openclaw/openclaw/issues/40880))。
- **Cron 交付跳过**：Cron 隔离 agentTurn 在早期工具错误被分类为致命时，跳过最终交付 ([#94846](https://github.com/openclaw/openclaw/issues/94846))。

## 6. 功能请求归类
- **多智能体架构**：提议增强多智能体协作，引入能力画像、共享黑板、分层记忆边界和 Token 成本治理 ([#35203](https://github.com/openclaw/openclaw/issues/35203))；支持从外部工作区自动发现智能体配置 ([#32530](https://github.com/openclaw/openclaw/issues/32530))。
- **UI/UX 改进**：建议基于 UX 评分重构配置页面 UI ([#75947](https://github.com/openclaw/openclaw/issues/75947))；通过 AI 摘要自动生成会话标题 ([#77165](https://github.com/openclaw/openclaw/issues/77165))；为 macOS 添加浮动智能体气泡 ([#11623](https://github.com/openclaw/openclaw/issues/11623))。
- **客户端与通道集成**：请求为官方 iOS 应用添加 CarPlay 支持 ([#97993](https://github.com/openclaw/openclaw/issues/97993))；MSTeams 通道绑定的智能体需要选择退出每线程会话的选项 ([#81084](https://github.com/openclaw/openclaw/issues/81084))；IRC 支持通过 draft/multiline 发送 markdown 消息 ([#55901](https://github.com/openclaw/openclaw/pull/55901))。

## 7. 用户反馈摘要
- **内部状态外泄困扰**：用户对智能体将“思考过程”或“工具调用确认”直接发送到 Slack/iMessage 感到困扰，认为这破坏了助手的拟真感和通道的整洁度 ([#25592](https://github.com/openclaw/openclaw/issues/25592))。
- **长会话与多智能体稳定性**：多个 Issue 反映了在复杂多智能体网关或长会话中，消息未送达、会话卡死或子智能体完成后状态未正确更新的问题（如 [#87744](https://github.com/openclaw/openclaw/issues/87744), [#97983](https://github.com/openclaw/openclaw/issues/97983)），表明会话状态机在并发场景下仍需打磨。
- **客户端 Onboarding 摩擦**：Android 和 iOS 客户端在权限请求（如相机、照片有限访问）和局域网配置解析上存在 UX 缺陷，导致用户在初始配对和连接时失败 ([#99046](https://github.com/openclaw/openclaw/issues/99046), [#98044](https://github.com/openclaw/openclaw/issues/98044), [#87216](https://github.com/openclaw/openclaw/issues/87216))。
- **企业环境适配**：企业用户在使用 GitHub Enterprise 数据驻留 Copilot 认证时遇到硬编码域名阻碍，已有 PR 正在解决此问题 ([#99221](https://github.com/openclaw/openclaw/pull/99221))。

## 8. 待处理积压
以下 Issue/PR 创建时间较早且处于 `stale` 状态，但仍有用户关注或影响核心功能，建议维护者重新评估：
- **Image tool 依赖报错不透明**：在未安装 `sharp` 时抛出 opaque "Failed to optimize image" 错误，缺乏 fallback 和明确提示 ([#73148](https://github.com/openclaw/openclaw/issues/73148)，创建于 04-28)。
- **Gemini 模型回归**：2026.3.2 版本中使用 `google-vertex/gemini-3.1-pro-preview` 时出现 "Cannot convert undefined or null to object" 崩溃 ([#38327](https://github.com/openclaw/openclaw/issues/38327)，创建于 03-06)。
- **Provider Fallback 策略优化**：提议按失败类别进行 provider fallback，隔离 auth-broken 的 providers 以减少无效重试延迟 ([#47910](https://github.com/openclaw/openclaw/issues/47910)，创建于 03-16)。
- **Reminder-guard 误报**：修复 reminder-guard 在记忆相关语句（如 "I'll remember that"）上的误报 PR 长期未合并 ([#47589](https://github.com/openclaw/openclaw/pull/47589)，创建于 03-15)。

---

## 横向生态对比

## 1. 今日横向概览
今日 OpenClaw 保持极高活跃度，发布了支持 GPT-5.6 的 beta 版本并集中处理多智能体会话状态与消息路由泄漏问题；NanoBot 和 Zeroclaw 维持中等活跃度，分别侧重于安全漏洞修复、Provider 参数适配以及内存上下文与多渠道重构；PicoClaw 活跃度较低，主要进行前后端依赖项批量升级并发布 Nightly 构建，同时暴露出配置迁移阻断与通道断连问题。整体来看，各项目的日常维护均高度聚焦于多渠道 IM 接入的稳定性打磨与大模型接口的兼容性修复。

## 2. 各项目活跃度对比

| 项目 | 新增/活跃 Issues | 关闭 Issues | 待合并 PRs | 合并/关闭 PRs | Release 情况 | 事实性备注 |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** | 112 | 80 | 446 | 54 | `v2026.7.1-beta.1` | 发布支持 GPT-5.6 的测试版，集中修复消息泄漏与会话状态问题。 |
| **NanoBot** | 94 | 3 | 34 | 28 | 无 | 重点修复 SSRF 等安全漏洞，适配 Anthropic Sonnet 5 及 Copilot。 |
| **Zeroclaw** | 33 | 4 | 30 | 20 | 无 | 推进 Git/WhatsApp 渠道接入，重构内存上下文，修复 RUSTSEC 漏洞。 |
| **PicoClaw** | 2 | 0 | 11 | 14 | `v0.3.1-nightly` | 批量升级前后端依赖，暴露 v2 至 v3 配置迁移阻断问题。 |

## 3. OpenClaw 与同类对照
- **活动量差异**：OpenClaw 的 Issue (192) 和 PR (500) 交互数量远超其他三个项目（NanoBot 159, Zeroclaw 87, PicoClaw 27），显示出其社区规模和代码吞吐量的绝对优势，且拥有庞大的待合并 PR 池（446 条）。
- **技术重点差异**：OpenClaw 今日聚焦于复杂的多智能体会话状态机修复、子智能体排空唤醒及消息路由泄漏等深层架构问题；而 NanoBot 和 Zeroclaw 更多停留在单 Agent 的安全边界（如 SSRF、出站授权）、Provider 参数兼容（如 Sonnet 5 的 temperature 参数）及基础渠道接入上；PicoClaw 则处于依赖升级和基础配置解析阶段。
- **社区讨论面差异**：OpenClaw 的讨论深入到企业环境适配（GitHub Enterprise）、多端 UX（iOS 语音唤醒、CarPlay）及隐私边界（私有记忆排除）；同类项目则更多讨论具体的 IM 渠道细节（如钉钉文件上传、飞书进度通知、Matrix 长轮询断开）及底层运行时环境（如 Windows Shell 语义、WSL2 OOM）。

## 4. 共同出现的技术方向
- **多渠道 IM 接入与稳定性打磨**：
  - **OpenClaw**：修复 WebChat 渲染、Slack/iMessage 消息泄漏，讨论 MSTeams、IRC 支持。
  - **NanoBot**：引入 Mattermost 渠道，讨论钉钉文件上传、飞书进度通知、Telegram 长轮询挂起。
  - **Zeroclaw**：推进 WhatsApp Web 和 Git forge 渠道接入。
  - **PicoClaw**：修复 Matrix 通道 `/sync` 长轮询静默断开问题。
- **大模型 Provider 兼容与适配**：
  - **OpenClaw**：原生支持 OpenAI GPT-5.6 模型家族。
  - **NanoBot**：修复 Anthropic Sonnet 5 拒绝 `temperature` 参数的问题，处理 OpenAI 兼容接口 `<tool_call>` 解析。
  - **PicoClaw**：尝试解析 Volcengine Doubao Seed 的 XML 工具调用格式。
- **跨平台与 Windows 环境兼容性**：
  - **NanoBot**：修复 Windows 下 `exec` 工具 Shell 语义不一致及后台进程状态不一致问题。
  - **Zeroclaw**：为 Windows MSVC 目标静态链接 CRT，讨论 Windows 11 下 74 个测试失败的问题。

## 5. 差异化定位分析
- **OpenClaw**：定位为全功能、多智能体协同的个人 AI 助手网关。技术架构侧重于复杂的会话状态树管理、多端（iOS/Android/Web）原生体验以及企业级集成，目标用户涵盖极客玩家与企业级用户。
- **NanoBot**：定位为轻量、安全且易于扩展的多渠道 Agent 框架。技术架构侧重于细粒度的安全控制（SSRF、出站授权）、Dream 机制与多渠道消息聚合，目标用户偏向注重隐私与 IM 渠道集成的开发者。
- **Zeroclaw**：定位为基于 Rust 构建的高性能、强类型 Agent 运行时。技术架构侧重于底层内存上下文管理、SOP（标准作业程序）引擎及严格的安全审计（RUSTSEC），目标用户偏向追求极致性能与系统级控制的开发者。
- **PicoClaw**：定位为基于 Go/React 的轻量级自托管 AI 助手。技术架构侧重于前后端依赖管理与基础通道网关，目前处于快速迭代与配置结构重构期（v2 到 v3），目标用户偏向个人自托管爱好者。

## 6. 社区活跃度记录
- **T0（极高活跃度）**：OpenClaw。单日近 700 次 Issue/PR 交互，发布 beta 版本，社区反馈涵盖从底层架构到前端 UX 的各个层面，维护者响应密集。
- **T1（中高活跃度）**：NanoBot。单日 159 次交互，维护者对安全漏洞和 Provider 兼容性问题响应迅速，建立了明确的“Radar Finding”技术债务追踪机制。
- **T2（中等活跃度）**：Zeroclaw。单日 87 次交互，PR 推进有序，核心维护者正在主导内存管理和渠道接入的底层重构，讨论深度较高。
- **T3（低活跃度）**：PicoClaw。单日 27 次交互，主要为自动化依赖升级和 Nightly 构建，社区反馈较少，主要依赖自动化脚本和少量核心维护者清理 stale PR。

## 7. 有证据支撑的观察
1. **IM 渠道长连接与消息聚合成为共性运维痛点**：NanoBot 的 Telegram 长轮询挂起（[#3626](https://github.com/HKUDS/nanobot/issues/3626)）、PicoClaw 的 Matrix `/sync` 静默断开（[#3203](https://github.com/sipeed/picoclaw/issues/3203)），以及 OpenClaw 和 NanoBot 中关于消息分片/聚合（如钉钉文件与 @ 提及分离 [#3344](https://github.com/HKUDS/nanobot/issues/3344)）的讨论，表明当前开源 Agent 在对接第三方 IM 时，普遍缺乏健壮的断线重连与消息上下文聚合机制。
2. **大模型 Provider 接口碎片化加剧适配成本**：OpenClaw 适配 GPT-5.6（[#98333](https://github.com/openclaw/openclaw/pull/98333)），NanoBot 处理 Sonnet 5 的参数限制（[#4683](https://github.com/HKUDS/nanobot/issues/4683)）和 OpenAI 兼容接口的非标准 `<tool_call>`（[#4061](https://github.com/HKUDS/nanobot/issues/4061)），PicoClaw 解析 Doubao Seed 的 XML 工具调用（[#3165](https://github.com/sipeed/picoclaw/pull/3165)）。这表明尽管“OpenAI 兼容”被广泛提及，但各厂商在工具调用格式和参数校验上的隐性差异，仍迫使框架层投入大量精力进行防御性编程。
3. **安全与隔离机制从“外围防护”向“Agent 原生内置”演进**：NanoBot 修复 SSRF 和增加出站消息授权钩子（[#4668](https://github.com/HKUDS/nanobot/pull/4668)），Zeroclaw 推进 per-agent 环境变量配置以隔离 MCP 实例（[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)），OpenClaw 修复私有记忆泄漏到共享会话的 Bug（[#99225](https://github.com/openclaw/openclaw/pull/99225)）。这反映出随着 Agent 具备更多外部操作能力，社区对安全边界的定义已从单纯的代码执行沙盒，扩展到消息路由、记忆隔离和工具调用的细粒度权限控制。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-03)

## 1. 今日活动概览
过去 24 小时内，NanoBot 项目保持高度活跃，共更新 97 条 Issues（新开/活跃 94 条，已关闭 3 条）和 62 条 Pull Requests（待合并 34 条，已合并/关闭 28 条）。今日未发布新版本。社区与维护者的精力主要集中在安全漏洞修复（SSRF、出站消息授权）、大模型 Provider 兼容性适配（Anthropic Sonnet 5、Copilot 竞态条件）以及多渠道（Mattermost、飞书、Telegram）的稳定性优化上。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日关闭了 1 个重要的批量修复 PR，并有大量针对核心机制的修复 PR 处于待合并状态：
- **批量问题修复**：关闭了 PR [#4648](https://github.com/HKUDS/nanobot/pull/4648) (Fix validated issue batch)，该 PR 集中修复了 13 个已验证的 Issue（包括 #4078, #4076, #4075 等），涵盖了 API 鉴权、消息出站策略、Dream 写入保护等核心问题。
- **安全与网络修复**：PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) 修复了 SSRF 检查中的 DNS 验证问题，通过固定 DNS 解析防止重绑定攻击；PR [#4668](https://github.com/HKUDS/nanobot/pull/4668) 为 `message` 工具增加了出站接收者授权钩子，防止向未授权目标发送消息。
- **Provider 适配**：PR [#4685](https://github.com/HKUDS/nanobot/pull/4685) 修复了 Anthropic Sonnet 5 模型拒绝 `temperature` 参数的问题；PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) 使用 `asyncio.Lock` 修复了 GitHub Copilot Token 刷新时的竞态条件。
- **新渠道支持**：PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) 引入了 Mattermost 渠道支持，包含 WebSocket 实时消息和流式响应编辑功能。

## 4. 社区热点
- **Nanobot Radar Finding** ([#4657](https://github.com/HKUDS/nanobot/issues/4657))：维护者创建了一个追踪 Issue，专门记录 13 个已独立验证为真实 Bug、安全漏洞或重构债务，但目前尚无 PR 解决的 Issue，作为近期的技术债务看板。
- **钉钉群文件上传问题** ([#3344](https://github.com/HKUDS/nanobot/issues/3344))：用户反馈在钉钉群中上传文件并 @nanobot 时，由于文件和提及被作为两条独立消息发送，导致 Agent 无法接收文件，引发了关于渠道消息聚合机制的讨论。
- **Anthropic OAuth 支持** ([#4604](https://github.com/HKUDS/nanobot/issues/4604))：用户请求支持 Anthropic OAuth，以便 Claude 订阅用户无需 API Key 即可使用。对应的 PR [#4632](https://github.com/HKUDS/nanobot/pull/4632) 已提交，支持通过 `claude setup-token` 生成的 OAuth token 进行认证。

## 5. Bug 与稳定性
今日报告并处理了多个影响可用性和安全性的 Bug：
- **严重/安全类**：
  - `message` 工具缺乏出站授权且接受任意媒体路径 ([#4076](https://github.com/HKUDS/nanobot/issues/4076))，已有修复 PR [#4668](https://github.com/HKUDS/nanobot/pull/4668)。
  - SSRF URL 验证未固定 DNS 解析（隐含于 PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) 修复 #4611）。
  - Dream 机制可能覆盖用户手动创建的 Skills（隐含于 PR [#4667](https://github.com/HKUDS/nanobot/pull/4667) 修复 #4075）。
- **Provider 兼容类**：
  - Anthropic `claude-sonnet-5` 因未省略 `temperature` 参数导致 400 错误 ([#4683](https://github.com/HKUDS/nanobot/issues/4683))，已有修复 PR [#4685](https://github.com/HKUDS/nanobot/pull/4685)。
  - OpenAI 兼容接口返回的文本格式 `<tool_call>` 未被解析为结构化调用 ([#4061](https://github.com/HKUDS/nanobot/issues/4061))，已有修复 PR [#4662](https://github.com/HKUDS/nanobot/pull/4662)。
  - Ollama 模型（如 gemma4:e4b）工具调用格式损坏，导致幻觉 ([#2829](https://github.com/HKUDS/nanobot/issues/2829))。
- **系统与渠道类**：
  - Windows 下 `exec` 工具单行使用 `cmd.exe`，多行使用 `PowerShell`，导致跨平台命令语义不一致 ([#4544](https://github.com/HKUDS/nanobot/issues/4544))。
  - Telegram 长轮询在网络波动时静默挂起，Bot 存活但停止接收更新 ([#3626](https://github.com/HKUDS/nanobot/issues/3626))。
  - Windows 下 `gateway --background` 重启后，实际运行状态与 JSON 记录不一致 ([#4511](https://github.com/HKUDS/nanobot/issues/4511))。

## 6. 功能请求归类
- **模型与 Provider 管理**：
  - 请求支持按会话覆盖模型配置，以便在隐私/成本与速度之间切换 ([#4253](https://github.com/HKUDS/nanobot/issues/4253))。
  - 请求自动推理努力升级（Automatic reasoning effort escalation），根据任务复杂度动态调整 `reasoningEffort` ([#4419](https://github.com/HKUDS/nanobot/issues/4419))。
  - 新增 OpenCode Zen Provider 支持 (PR [#4686](https://github.com/HKUDS/nanobot/pull/4686))。
- **渠道与交互**：
  - 请求增加语音输出/TTS 支持，闭环语音交互 ([#4010](https://github.com/HKUDS/nanobot/issues/4010))。
  - 请求飞书渠道支持进度通知（`send_progress`）([#3166](https://github.com/HKUDS/nanobot/issues/3166))。
  - 请求 Telegram 支持按群组覆盖策略（如特定群 open，特定群 mention）([#3309](https://github.com/HKUDS/nanobot/issues/3309))。
  - 请求 WhatsApp 在真人回复后暂停 Bot 回复 12 小时 ([#2837](https://github.com/HKUDS/nanobot/issues/2837))。
- **Agent 架构与扩展**：
  - 请求引入类似 Copilot CLI 的插件系统以扩展 Agent 功能 ([#2231](https://github.com/HKUDS/nanobot/issues/2231))。
  - 请求支持基于 Embedding 的上下文压缩/语义检索管道，以替代单纯的 Token 裁剪 ([#2937](https://github.com/HKUDS/nanobot/issues/2937))。

## 7. 用户反馈摘要
- **多渠道细节体验不佳**：用户反馈在接入常用 IM（钉钉、飞书、微信）时，存在文件上传与 @ 提及分离（[#3344](https://github.com/HKUDS/nanobot/issues/3344)）、进度通知不显示（[#3166](https://github.com/HKUDS/nanobot/issues/3166)）、MCP 工具实时消息无法广播（[#3343](https://github.com/HKUDS/nanobot/issues/3343)）等痛点，表明渠道适配的边界情况仍需深入打磨。
- **Windows 环境兼容性**：Windows 用户明确指出了后台进程管理（[#4511](https://github.com/HKUDS/nanobot/issues/4511)）和 Shell 执行语义（[#4544](https://github.com/HKUDS/nanobot/issues/4544)）的问题，反映出项目在跨平台底层调用上对 Windows 的支持仍有欠缺。
- **隐私与数据隔离担忧**：WhatsApp 渠道目前所有聊天共享单一 workspace，导致用户 A 的隐私信息被用于回复 用户 B（[#2836](https://github.com/HKUDS/nanobot/issues/2836)），用户强烈要求实现基于 `chat_id` 的工作区隔离。

## 8. 待处理积压
- **Radar 追踪债务**：Issue [#4657](https://github.com/HKUDS/nanobot/issues/4657) 中列出的 13 个已验证但无 PR 的 Issue（如 Cron job 上下文复用 [#4082](https://github.com/HKUDS/nanobot/issues/4082)、Heartbeat 调试触发 [#3437](https://github.com/HKUDS/nanobot/issues/3437) 等）需维护者优先分配精力。
- **长期架构级 Feature Request**：
  - **插件系统** ([#2231](https://github.com/HKUDS/nanobot/issues/2231)，3月提出)：社区对 Agent 扩展性的核心诉求，目前仅有讨论无实质推进。
  - **语音交互延迟指标** ([#3257](https://github.com/HKUDS/nanobot/issues/3257)，4月提出)：缺乏 STT->LLM->TTS 全链路延迟监控，影响语音助手场景调优。
  - **外部 Agent 调用** ([#3436](https://github.com/HKUDS/nanobot/issues/3436)，4月提出)：用户希望 Nanobot 能作为调度层调用 opencode/codex 等外部框架。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-07-03)

## 1. 今日活动概览
过去 24 小时内，Zeroclaw 项目共更新了 37 条 Issue（其中 33 条新开或活跃，4 条关闭）和 50 条 PR（30 条待合并，20 条已合并或关闭）。今日无新版本发布。社区讨论和代码提交主要围绕多渠道接入（Git/WhatsApp）、内存上下文管理、安全与依赖审计（如修复 RUSTSEC 漏洞）以及 Windows 平台的兼容性修复展开。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
数据概览显示今日有 20 个 PR 被合并或关闭。从当前活跃且推进中的 OPEN PR 来看，核心开发工作集中在以下方向：
- **多渠道与 SOP 接入**：推进 Git forge channel（GitHub/Gitea 提供者）及 SOP 入口 substrate 的拆分重构，将原本庞大的 PR 拆分为可审查的切片（[#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609), [#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611), [#8618](https://github.com/zeroclaw-labs/zeroclaw/pull/8618)）。
- **内存与上下文管理**：引入基于 `TurnOrigin` 的统一内存上下文注入机制（[#8619](https://github.com/zeroclaw-labs/zeroclaw/pull/8619)），并推进持久化内存存储的 Epic A 重构，增加可逆替换、写入去重和预算控制（[#8570](https://github.com/zeroclaw-labs/zeroclaw/pull/8570)）。
- **安全与依赖治理**：移除 `rag-pdf` 特性以清除 `ttf-parser` 的 RUSTSEC-2026-0192 漏洞（[#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547)），并增加针对 zip 炸弹防护的回归测试（[#8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574)）。
- **平台兼容性**：为 Windows MSVC 目标静态链接 CRT，解决发布包的运行时依赖问题（[#8604](https://github.com/zeroclaw-labs/zeroclaw/pull/8604)）。

## 4. 社区热点
- **MCP 工具在 TUI 中丢失问题**：Issue [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) 获得 14 条评论，用户报告 MCP 服务器连接成功但 TUI 会话无法接收发现的工具，被标记为 S1 级别工作流阻塞。
- **工作流与看板自动化 RFC**：Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 有 13 条评论，讨论 Work Lanes 和 Label 清理，旨在减轻维护者手动管理看板的负担。
- **Windows 测试失败**：Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 讨论 Windows 11 下 74 个测试失败的问题，涉及 Unix 专属命令、路径语义和控制台编码差异。
- **Agent 自定义环境变量**：Issue [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) 讨论支持 per-agent 环境变量配置，以解决多租户和共享 MCP 实例的身份与令牌隔离问题。

## 5. Bug 与稳定性
- **S1 - 工作流阻塞**：
  - MCP 工具在 TUI 会话中不可见（[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)）。
  - 源码安装包含 `embedded-web` 时，因 web API 客户端未生成导致 TypeScript 编译失败（[#8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632)）。
  - WhatsApp Web 设备链接因 WhatsApp 新的 passkey/SHORTCAKE 机制而失效（[#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)）。
- **S0/S1 - 内存与崩溃**：
  - WSL2 下连续出现 OOM（Out of Memory）导致进程被系统 Kill（[#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)）。
- **S2 - 行为降级**：
  - 兼容的 provider 静默删除内容：无条件的 `<think>` 标签剥离导致未闭合标签产生空回复（[#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615)）。
  - Headless 确定性 SOP 步骤未执行即被记录为 Completed，产生虚假审计追踪（[#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)）。
  - `skills install/list/remove` 目标指向 `data_dir`，多 agent 运行时无法加载（[#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)），已有相关修复 PR [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) 正在推进。
  - Gemini 400 错误：历史序列化器违反不变量，导致 assistant tool_call 出现在首个 user turn 之前（[#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)）。

## 6. 功能请求归类
- **OpenAI 兼容 API**：请求添加 OpenAI 兼容的 chat completions 端点，以便 Open WebUI、LobeChat 等标准客户端直接接入（[#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550), [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）。
- **多模型与 Provider 管理**：请求支持多模型 provider 的便捷 per-chat 模型切换（[#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)）；提议将 `wire_api` 作为 Provider 模型的主要组织轴（[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)）。
- **工具与文件读取增强**：增强 `file_read` 工具，支持默认行数限制、字符集检测、分页 PDF 和分块二进制读取（[#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602)）。
- **Agent 评估**：请求添加 Agent 评估工具（`zeroclaw eval`），支持 replay 和 live 模式及 LLM-as-judge（[#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)）。

## 7. 用户反馈摘要
- **多租户与隔离痛点**：用户在配置共享 MCP 实例和多 agent 运行时，面临身份、参数和 token 隔离困难，迫切需要 per-agent 的环境变量和 secrets 配置机制（[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)）。
- **第三方客户端接入壁垒**：部分用户反馈目前仅支持 WebSocket 和特定 channel 协议，导致使用主流前端时不得不自行编写适配器，呼吁原生支持 OpenAI 兼容接口（[#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)）。
- **Windows 平台体验**：Windows 用户遇到测试失败、路径语义差异以及 MSVC 运行时依赖问题，反映出项目在跨平台 CI 和发布构建上仍需完善（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462), [#8604](https://github.com/zeroclaw-labs/zeroclaw/pull/8604)）。
- **文档与示例缺失**：用户指出 SOP 引擎概念良好，但官方文档缺乏详细的语法示例和复杂场景说明（[#8587](https://github.com/zeroclaw-labs/zeroclaw/issues/8587)）。

## 8. 待处理积压
- **WSL2 连续 OOM 问题**：Issue [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) 创建于 4 月初，属于 S0 级别的数据丢失/安全风险，目前仍处于 `needs-repro` 状态，需维护者进一步跟进内存泄漏或资源管理问题。
- **Gemini 历史序列化 Bug**：Issue [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) 创建于 5 月初，导致 Gemini 模型调用直接 400 报错，阻塞特定 provider 的正常使用。
- **CI 关键路径优化**：Issue [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) 提出改善 Rust 构建缓存和 CI 调度，目前 PR CI 仍需 15-20 分钟，对开发迭代效率有一定影响。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-03)

## 1. 今日活动概览
2026年7月2日，PicoClaw 项目共产生 2 条新 Issue 和 25 条 PR 更新（其中 14 条已合并/关闭，11 条待合并）。项目发布了最新的 v0.3.1 Nightly 自动化构建版本。今日的核心活动集中在前后端依赖项的批量升级（如 ESLint、shadcn、AWS SDK 等），以及处理用户反馈的配置迁移阻断和 Matrix 通道连接稳定性问题。

## 2. 版本发布
- **v0.3.1-nightly.20260702.2cf030d2** (Nightly Build)
  - **更新内容**：基于 `main` 分支的最新自动化构建版本（[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)）。
  - **注意事项**：官方提示此为自动化构建，可能存在不稳定性，建议谨慎用于生产环境。结合今日 Issue #3206，用户在从 v2 升级至 v3 配置时遇到迁移失败问题，使用此 Nightly 版本或最新 Release 时需特别注意配置文件的向后兼容性。

## 3. 项目进展
今日关闭/合并了 14 个 PR，主要集中在依赖项升级和过期 PR 的清理：
- **依赖升级**：合并/关闭了多个前端和 Go 后端的依赖更新，包括 `react-i18next` (17.0.7)、`shadcn` (4.12.0)、`typescript-eslint` (8.62.1)、`@vitejs/plugin-react` (6.0.3)、`anthropic-sdk-go` (1.55.1) 以及 `golang.org/x/crypto` (0.53.0) 等（[#3212](https://github.com/sipeed/picoclaw/pull/3212), [#3214](https://github.com/sipeed/picoclaw/pull/3214), [#3215](https://github.com/sipeed/picoclaw/pull/3215), [#3216](https://github.com/sipeed/picoclaw/pull/3216), [#3209](https://github.com/sipeed/picoclaw/pull/3209), [#3210](https://github.com/sipeed/picoclaw/pull/3210)）。
- **清理 Stale PRs**：关闭了多个标记为 `[stale]` 的历史 PR，包括跨站启动器设置请求拦截 ([#3160](https://github.com/sipeed/picoclaw/pull/3160))、自定义 allow 规则下的 deny 模式修复 ([#3161](https://github.com/sipeed/picoclaw/pull/3161))、Windows 沙盒文件系统路径处理测试 ([#3158](https://github.com/sipeed/picoclaw/pull/3158)) 以及 DeltaChat 网关功能 ([#3063](https://github.com/sipeed/picoclaw/pull/3063))。

## 4. 社区热点
今日社区反馈主要集中在版本升级带来的配置兼容性和通道连接的稳定性问题：
- **配置迁移阻断**：Issue [#3206](https://github.com/sipeed/picoclaw/issues/3206) 报告了 v2 到 v3 的配置迁移失败，系统错误地将 `build_info` 和 `session.dm_scope` 识别为未知字段，导致 `picoclaw status` 等基础命令无法运行。这直接影响了新版本的平滑升级体验。
- **Matrix 通道静默断开**：Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203) 指出 Matrix 频道的 `/sync` 长轮询在遇到网络波动或服务器重启时会永久断开，且由于主进程未崩溃，systemd 无法触发自动重启，导致消息接收静默失败。

## 5. Bug 与稳定性
- **[严重] Matrix 同步循环无重连逻辑 (Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203))**：网络中断后 Matrix 通道静默死亡。目前尚无对应的修复 PR，需要维护者补充重连机制或进程健康检查。
- **[中等] v2→v3 配置迁移失败 (Issue [#3206](https://github.com/sipeed/picoclaw/issues/3206))**：全新安装或升级时，配置解析器拒绝 `build_info` 和 `session.dm_scope` 字段。目前无修复 PR，可能需要在配置解析逻辑中增加对旧字段的兼容或自动清理。
- **[低] LINE 通道 Send 方法类型断言潜在 Panic (PR [#3171](https://github.com/sipeed/picoclaw/pull/3171))**：为 `sync.Map` 类型断言增加 `ok` 检查以防止意外类型导致的崩溃。该 PR 目前处于 Open 且被标记为 `[stale]` 状态，等待合并。

## 6. 功能请求归类
- **OpenAI 兼容性与特定模型支持**：PR [#3165](https://github.com/sipeed/picoclaw/pull/3165) 尝试恢复并解析 Volcengine Doubao Seed 的 `<seed:tool_call>` XML 块，以支持特定大模型的工具调用格式。该 PR 目前处于 Open 状态。
- **新通道网关**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 曾提议添加 DeltaChat 网关支持，但今日已被关闭，表明该功能请求暂未获采纳或实现方式被否决。

## 7. 用户反馈摘要
- **升级痛点**：用户在执行 `picoclaw status` 时遭遇配置解析报错（[#3206](https://github.com/sipeed/picoclaw/issues/3206)），表明 v3 配置结构的严格校验在向后兼容或字段清理方面存在遗漏，导致基础命令不可用，引发升级挫败感。
- **运维盲区**：用户反馈 Matrix 通道断开后“静默死亡”（[#3203](https://github.com/sipeed/picoclaw/issues/3203)），暴露出当前架构在长连接维护上的缺陷。由于主进程存活，传统的 `Restart=on-failure` 运维策略失效，用户期望内置更健壮的网络重连逻辑或健康探针。

## 8. 待处理积压
以下 PR 包含实质性的代码修复，但目前处于 Open 且被标记为 `[stale]`（停滞）状态，建议维护者重新评估并推进：
- **PR [#3165](https://github.com/sipeed/picoclaw/pull/3165)**：修复 OpenAI 兼容层中 Volcengine Doubao Seed XML 工具调用的解析与提取问题。
- **PR [#3171](https://github.com/sipeed/picoclaw/pull/3171)**：修复 LINE 通道 `Send` 方法中 `sync.Map` 类型断言可能引发的 Panic 问题。

*注：今日关闭的多个 `[stale]` PR（如 [#3160](https://github.com/sipeed/picoclaw/pull/3160) 跨站请求拦截、[#3161](https://github.com/sipeed/picoclaw/pull/3161) exec 权限控制）若未被合并入主分支，其对应的安全与逻辑缺陷可能仍需通过其他分支或新 PR 解决，需维护者关注。*

</details>