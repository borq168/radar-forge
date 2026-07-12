# AI CLI 工具社区动态日报 2026-07-12

> 生成时间: 2026-07-12 00:24 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区动态横向对比 · 2026-07-12

## 今日横向概览
今日 Claude Code 发布 v2.1.207 修复自动模式开关与终端卡顿，是唯一有版本更新的工具。OpenAI Codex 与 OpenCode 均无发布，但 Issue 更新量维持高位（各 50 条），前者围绕配额与 Linux 桌面需求激烈讨论，后者则被 YOLO 模式和高 CPU 占用问题主导。Kimi Code 无新发布，但 PR 密集（20 个），集中修复 Web UI 交互缺陷并导入 agent-v2 引擎。整体上，性能与资源消耗是今日跨工具最突出的共性问题，会话交互增强与第三方模型兼容则形成另一组并行的改进方向。

## 各工具活跃度对比
| 工具 | Issues 更新数（约） | PR 更新数（精选） | 新发布 |
|------|-------------------|------------------|--------|
| Claude Code | 50 | 5 | v2.1.207 |
| OpenAI Codex | 50 | 20 | 无 |
| Kimi Code | 3（新开）+ 20 PR | 20 | 无 |
| OpenCode | 50 | 10 | 无 |

> 注：Claude Code、OpenAI Codex、OpenCode 的“50 条”均指当日有更新的 Issue（含新开与评论），Kimi Code 的“3 个新 Issue”为单独统计。

## 共同出现的功能方向
- **性能与资源占用**
  Claude Code 修复了长响应导致终端冻结的问题；OpenAI Codex 的 SQLite 日志年写入量可达 ~640 TB，引发 SSD 耐久性担忧；OpenCode 出现多起空闲/限流等待时 CPU 居高不下的报告（#30086、#19466）。
- **会话交互增强**
  Claude Code 用户呼吁 `/fork` 命令以便在任务运行中派生新会话；Kimi Code 提出 `/copy` 命令以复制部分输出为 Markdown；OpenCode 则强烈要求添加 `/btw` 命令以自然语言插入背景信息，并出现会话无法自动重命名问题。
- **第三方/多模型兼容性**
  Kimi Code 在使用第三方 OpenAI 兼容供应商时，关闭思考模式未正确传递参数；OpenCode 既有自动发现 Ollama/LM Studio 模型列表的长期需求，又紧急修复了 Gemini 工具调用参数解析与 GPT-5.6 系列模型不可用的问题；OpenAI Codex 同时出现 GPT-5.3/5.6 新模型不支持的参数错误和子代理模型无法自定义的限制。
- **平台与部署兼容性**
  Claude Code 的 Windows 协作功能缺失及数据目录重定向需求；OpenAI Codex 的 Linux 桌面应用呼声（733 赞）与 Windows 沙箱 Smart App Control 冲突；OpenCode 修复了 Windows 剪贴板粘贴与 SSH 环境终端能力检测回归。

## 差异化定位分析
- **Claude Code** 侧重安全可控的协作式开发，今日主要解决长会话稳定性、插件安全加固与 Windows 平台短板，并通过自动模式减少配置摩擦。
- **OpenAI Codex** 强依赖 OpenAI 模型生态，社区焦点集中在计费/配额透明度、桌面客户端跨平台体验以及新模型与现有功能的适配，更多服务于付费 Pro 用户的完整工具链需求。
- **Kimi Code** 明显处于工程化冲刺阶段：大量 PR 修复 Web UI 细节（滚动、断线恢复、路径选择器），并开始引入国际化框架与 agent-v2 核心引擎，目标用户可能偏向 Web/TUI 混合交互场景。
- **OpenCode** 定位为本地优先、多模型支持的开放 CLI，今日突出特征是对完全跳过权限弹窗（YOLO 模式）的强烈诉求，同时持续处理多供应商兼容与 TUI 配置恢复，反映出“高可控、脚本化”的工作流倾向。

## 社区活跃度记录
- **OpenAI Codex 与 OpenCode 的 Issue 讨论最热**：两者均达到 50 条更新，Codex 出现单条 205 评论的电话验证问题与 733 赞的功能请求；OpenCode 的 YOLO 模式与高 CPU 占用持续吸引用户提供临时方案。
- **Kimi Code 在 PR 侧非常活跃**：24 小时内 20 个 PR 得到更新，且多数为 Web UI 问题修复与架构迁移代码，显示团队在密集落地新特性。
- **Claude Code 是唯一有发布的一方**：v2.1.207 解决了自动模式环境变量与流式输出冻结两个痛点，但 Windows 协作缺失等问题仍未关闭。

## 有证据支撑的观察
1. **性能与资源消耗成为多个工具的集中痛点**
   Claude Code 终端冻结修复、OpenAI Codex 的 SQLite 过量写入 SSD、OpenCode 的 CPU 高占用，三者独立报告均出现在今日，说明长时运行或高负载场景下的资源管理是当前 CLI 工具的共同挑战。

2. **会话内与跨会话的交互灵活性被普遍要求增强**
   Claude Code 的 `/fork`、Kimi Code 的 `/copy`、OpenCode 的 `/btw` 命令以及会话选择器、自动重命名问题，都指向开发者希望在不中断流程的情况下更精细地管理对话与信息片段。

3. **第三方模型与供应商兼容性仍存在碎片化问题**
   Kimi Code 的推理控制失效、OpenCode 的 Gemini 参数解析和本地模型列表手动维护、OpenAI Codex 新模型参数不兼容——均反映出在多模型/多供应商支持中，参数规范、接口一致性尚未形成统一体验，对本地和混合部署用户影响尤为明显。

4. **平台支持差距持续影响用户体验**
   Claude Code 的 Windows 协作缺失、OpenAI Codex 长期无 Linux 桌面客户端、OpenCode 的 Windows 剪贴板/SSH 终端修复，均是各工具各自应对的平台短板，并形成用户社区的持续声量。

5. **安全与内容控制以不同形态出现在各项目**
   Claude Code 出现不适短语与插件脚本加固 PR；OpenAI Codex 通过电话验证与沙箱策略调整提升安全；OpenCode 的 YOLO 模式诉求则是从“信任”角度对安全边界的反向推动。三条线独立，但反映出安全模型与用户自主权之间的张力。

今日暂无明确跨工具的架构层面信号。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026 年 7 月 12 日

## 今日更新概览
今日社区发布了 v2.1.207 版本，主要取消了部分平台的自动模式（Auto mode）额外开关要求，并修复了长响应造成的终端卡顿。Issue 区共收到 50 条更新，Windows 协作功能缺失成为最高热度的开放讨论；另有 5 个 PR 涉及插件安全性加固、证书修复与设计技能调整。

## 版本发布

**v2.1.207**
- 在 Bedrock、Vertex AI 和 Foundry 上使用自动模式不再需要 `CLAUDE_CODE_ENABLE_AUTO_MODE` 环境变量（可通过设置中的 `disableAutoMode` 关闭）。
- 修复了流式输出包含超长列表、表格、段落时终端冻结和按键延迟的问题。
- 发布链接：[v2.1.207](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)

## 社区热点 Issues（精选 10 条）

1. **[BUG] Windows 11 Pro 下协作功能缺失：Missing HCS services: vfpext**
   影响所有 Windows 用户的 Cowork 协作功能，已累积 51 条评论，暂未解决。涉及平台服务依赖问题。
   [#74649](https://github.com/anthropics/claude-code/issues/74649)

2. **[FEATURE] 终端标题配置（脚本化，类似 statusLine）**
   用户期望能通过脚本自定义终端标题，以便在多会话环境中快速识别窗口，已获 32 个点赞和 24 条讨论。
   [#17951](https://github.com/anthropics/claude-code/issues/17951)

3. **[BUG] 会话中途生成重复频道插件实例，导致 409 冲突与工具丢失**
   macOS 用户在会话运行约 3 分钟后出现 Telegram 频道插件重复启动，引发工具注册失败，已关闭但讨论激烈（16 条评论）。
   [#36800](https://github.com/anthropics/claude-code/issues/36800)

4. **[FEATURE] Windows 端 CLAUDE_DATA_DIR 环境变量或配置项**
   请求提供重新定位 `%APPDATA%\Claude\` 目录的能力，以便在受限环境或自定义部署中使用，收到 12 个赞同。
   [#57998](https://github.com/anthropics/claude-code/issues/57998)

5. **[FEATURE] 钩子输入 JSON 中包含 session_name**
   希望钩子回调（如 Stop、PermissionRequest）能提供人类可读的会话名称，而不仅是随机 session_id，便于桌面通知等场景识别会话。已关闭。
   [#36058](https://github.com/anthropics/claude-code/issues/36058)

6. **[BUG] 超大图片导致 400 错误触发重试循环，成本飙升约 35 倍**
   WSL 环境下，图片过大时 API 返回 400 错误但 Claude Code 进入无限重试并导致提示缓存失效，已关关闭。
   [#65636](https://github.com/anthropics/claude-code/issues/65636)

7. **[BUG] VSCode 扩展面板缺少 `mcp__ide__getDiagnostics` 工具**
   该 MCP 工具在集成终端可用，但在扩展面板中缺失，影响 IDE 诊断功能的使用，已关闭。
   [#40766](https://github.com/anthropics/claude-code/issues/40766)

8. **[BUG] LLM 输出中出现不适宜短语**
   报告模型输出中出现了 “The money shot”，涉及模型内容安全，虽评论不多但性质敏感。
   [#76540](https://github.com/anthropics/claude-code/issues/76540)

9. **[BUG] 新版本 2.1.207 导致 stdio MCP 服务器在 4 小时后被 SIGINT 且不恢复**
   Linux 用户发现升级后 MCP 服务器在运行约 4 小时被干净终止且不再重新连接，标注为回归问题。
   [#76769](https://github.com/anthropics/claude-code/issues/76769)

10. **[FEATURE] 允许在 Claude 执行任务时使用 `/fork` 命令**
    用户希望能在 Agent 工作期间直接派生新会话，提升交互灵活性。
    [#76777](https://github.com/anthropics/claude-code/issues/76777)

## 重要 PR 进展

1. **移除前端设计技能中的“retro-futuristic”推荐**
   PR 作者呼吁信任其判断，直接删除相关设计倾向，仍在开放讨论中。
   [#39043](https://github.com/anthropics/claude-code/pull/39043)

2. **修复：再现性审计确认的设计缺陷（日文说明）**
   批量修复 issue 分诊、生命周期状态、会话隔离与不可达代码路径等多个设计问题，已合并关闭。
   [#76673](https://github.com/anthropics/claude-code/pull/76673)

3. **修复：为 Bun 运行时加载 macOS 系统证书并处理 NO_PROXY 黑洞**
   解决了 macOS 下使用 Bun 运行时因自签名证书导致 Cowork 连接失败的问题，关闭了长期存在的 #24470。
   [#76640](https://github.com/anthropics/claude-code/pull/76640)

4. **修复（插件）：强化脚本中 YAML、路径及符号链接处理**
   针对官方插件示例增加了 YAML 注入、路径穿越和符号链接凭据覆写等防护。
   [#76581](https://github.com/anthropics/claude-code/pull/76581)

5. **修复（插件开发文档）：对齐用户配置文档与 v2.1.207 的 shell 注入修复**
   更新了插件钩子、监视器及 MCP 命令的文档与验证器，以匹配新版对 `${user_config.*}` 的禁用和配置读取变更。
   [#76576](https://github.com/anthropics/claude-code/pull/76576)

## 功能需求归类

- **协作与多会话管理**
  Cowork 功能在 Windows 上的缺失 (#74649)，以及运行中 `/fork` 需求 (#76777)、任务残留清理 (#62472) 等，反映出用户对多任务/协作场景的完善期待。

- **终端与界面体验**
  终端标题自定义 (#17951)、输出流冻结修复（已随 2.1.207 发布）和退出计划模式时终端显示异常 (#65713) 等，显示用户对交互体验细节的关注。

- **数据与配置可迁移性**
  呼声较高的需求包括 Windows 数据目录重定向 (#57998) 和用户全局记忆文件支持 (#62026)，旨在适应企业部署和个人跨项目使用。

- **成本与用量控制**
  多层级的消费阈值通知请求 (#74709) 以及超大图片引发的成本异常 (#65636)，表明用户需要更精细的账单预警和错误防护机制。

- **Agent 与工具链稳定性**
  针对子代理拒绝工具调用后行为不当 (#65684)、MCP 服务器意外终止 (#76769) 等问题的反馈，凸显出长时运行会话中工具生命周期的管理需求。

## 开发者关注点

- **平台兼容性痛点**：Windows 上的协作与工具（浏览器截图超时 #76649、`preview_start` 失败 #68341）持续困扰用户，部分问题长期未解决。
- **会话可靠性与资源泄漏**：重复插件实例 (#36800)、MCP 4 小时强制中断 (#76769)、终端输出损坏 (#65713) 均指向长时会话中的状态管理与恢复机制。
- **安全与内容控制**：LLM 输出不当短语 (#76540) 及插件脚本加固 PR（#76581、#76576）表明社区和官方对安全防护的重视。
- **自助排查能力不足**：多份 Issue 提到 Agent 缺乏自身上下文预算的自省机制（#65696），用户期望获得更透明的内部状态信息。
- **VSCode 生态一致性**：IDE 工具可用性差异（#40766）和会话删除误触问题（#65703）要求进一步对齐不同终端环境的功能表现。

---
> 以上内容基于公开的 GitHub 仓库数据自动生成，保证信息原样呈现，无额外推断或产品路线揣测。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-12

## 今日更新概览
今日无新版本发布。社区在 Issues 区继续保持活跃，过去 24 小时内 50 条 Issue 发生更新，其中热度最高的是已关闭的电话验证问题（205 条评论）、Linux 桌面应用的长期需求帖（733 个赞）以及 SQLite 日志过度写入 SSD 的讨论。Pull Request 侧有 20 条更新，主要集中在工具权限约束、核心环境继承、TUI 渲染修复和诊断改进等方向。

## 版本发布
无新发布。

## 社区热点 Issues

1. **电话验证问题** [#20161](https://github.com/openai/codex/issues/20161)（已关闭）
   用户在不同设备登录时遭遇电话验证，但账户中并未绑定手机号。该 Issue 收获了 205 条评论和 131 个赞，暴露出跨设备登录时的身份验证链路问题，目前已被关闭，但讨论热度仍高。

2. **Codex Linux 桌面应用** [#11023](https://github.com/openai/codex/issues/11023)
   用户强烈要求提供 Linux 原生桌面应用，当前 macOS 版本因功耗问题几乎不可用，而 Linux 桌面没有官方客户端。获取了 733 个赞和 164 条评论，是仓库中需求最集中的功能请求之一。

3. **SQLite 反馈日志年写入量可达 ~640 TB** [#28224](https://github.com/openai/codex/issues/28224)
   Codex CLI 的 SQLite 日志在生产环境中会快速消耗 SSD 耐久性。作者已确认 3 个 PR 合并后避免了 85% 的日志量，但 Issue 仍保持开放以跟踪剩余问题。讨论热度高（145 评论、432 赞），体现了对硬件寿命的担忧。

4. **GPT-5.6 Sol 子代理模型无法自定义** [#31814](https://github.com/openai/codex/issues/31814)
   GPT-5.6 Sol 模型会强制所有子代理也使用 Sol 实例，无法通过配置或提示调整为其他模型，限制了多代理工作流的灵活性。49 条评论、102 个赞，属于新模型与现有功能的不兼容问题。

5. **Pro 账户重置功能失效且浪费配额** [#31606](https://github.com/openai/codex/issues/31606)
   Windows 桌面版 Pro 用户在尝试重置时，重置并未生效且重置次数从 2 次降为 1 次。31 条评论，反映出速率限制机制的可信度问题。

6. **请求禁用 60 秒自动解决问题的设置** [#28969](https://github.com/openai/codex/issues/28969)
   用户希望增加配置项，避免 CLI 在提问后 60 秒自动将问题标记为已解决。105 个赞，需求较明确。

7. **Computer Use 在 macOS 15.7.7 崩溃** [#32032](https://github.com/openai/codex/issues/32032)
   Computer Use 功能因缺少 Swift 并发符号而在启动时直接崩溃，无法初始化 MCP/UI 控制。该问题可能与之前的 #22822 相关，20 条评论、11 赞。

8. **Windows 桌面沙箱因 Smart App Control 失败** [#22428](https://github.com/openai/codex/issues/22428)
   Windows 11 的 Smart App Control 功能会阻止未签名的 `node_repl.exe`，导致沙箱启动失败，错误信息为 `setup refresh had errors`。14 条评论，影响使用沙箱功能的 Windows 用户。

9. **GPT-5.3 Codex Spark 不支持的参数** [#31846](https://github.com/openai/codex/issues/31846)
   使用 GPT-5.3 Codex Spark 时出现 `Unsupported parameter: reasoning.summary` 错误，说明模型适配尚未完成。9 条评论、18 赞。

10. **Pro 账户缺少重置银行和邀请权益** [#28504](https://github.com/openai/codex/issues/28504)
    尽管持续订阅 Pro（$200/月），用户仍看不到 Codex 重置额度及推荐权益入口，怀疑权限下发存在遗漏。7 条评论。

## 重要 PR 进展

1. **限制托管线程使用服务器注册工具** [#31526](https://github.com/openai/codex/pull/31526)
   为托管应用服务器客户端新增 `server_registered_tools_only` 特性，严格按白名单控制工具集，提升托管环境的安全性。

2. **技能切换视图显示完整名称** [#32485](https://github.com/openai/codex/pull/32485)
   修复技能切换弹窗中名称被截断为 21 字符的问题，当空间足够时展示完整名称，避免隐藏关键后缀。

3. **发布新版本至 Cloudflare R2** [#31806](https://github.com/openai/codex/pull/31806)
   新增影子发布管道，将 Codex 安装器同步至 Cloudflare R2 存储，不影响现有 GitHub Releases 及安装 URL。

4. **Windows 可执行文件解析确定性** [#30036](https://github.com/openai/codex/pull/30036)
   修复 Windows 上启动子进程时因缺少 `lpApplicationName` 导致的可执行路径选择不确定问题，通过显式传递应用路径保证环境一致性。

5. **子代理继承当前步骤环境** [#30016](https://github.com/openai/codex/pull/30016)
   当延迟执行器在 turn 进行中附加时，子代理现在能继承请求中的最新环境快照，而非旧的 `TurnContext` 环境。

6. **缓存稳定执行器技能元数据** [#29960](https://github.com/openai/codex/pull/29960)
   将技能元数据发现缓存至稳定执行器，避免每次模型采样步骤都重新读取，降低开销。

7. **插件元数据与 MCP 运行时分离缓存** [#29946](https://github.com/openai/codex/pull/29946)
   将插件清单与运行时 MCP 进程解耦，分别管理生命周期，提高环境重建时的稳定性。

8. **保留父沙箱强制策略用于内存整合** [#32441](https://github.com/openai/codex/pull/32441)
   内存整合代理现在会继承父 turn 的沙箱和权限配置，确保安全性在后续处理中不被削弱。

9. **分页 rollout 记录添加序数** [#32332](https://github.com/openai/codex/pull/32332)
   为分页历史记录引入零基序数，使消费者能可靠处理后续增量数据，提升历史回溯的确定性。

10. **改进文件 blob 上传诊断** [#32305](https://github.com/openai/codex/pull/32305)
    为每个 blob 上传添加唯一请求 ID，并报告传输错误详情（隐藏完整签名 URL），增强可观测性。

## 功能需求归类

- **跨平台支持**：Linux 桌面应用 [#11023](https://github.com/openai/codex/issues/11023)、FreeBSD 支持 [#13802](https://github.com/openai/codex/issues/13802)、无头 Linux 远程主机移动端访问 [#23200](https://github.com/openai/codex/issues/23200)。
- **桌面应用体验优化**：暂停工作按钮 [#26539](https://github.com/openai/codex/issues/26539)、侧边会话生命周期管理 [#30350](https://github.com/openai/codex/issues/30350)、禁用自动解决问题 [#28969](https://github.com/openai/codex/issues/28969)。
- **配额与计费透明提高**：重置失效 [#31606](https://github.com/openai/codex/issues/31606)、配额异常归零 [#32279](https://github.com/openai/codex/issues/32279)、高用量阈值隐式触发 [#32486](https://github.com/openai/codex/issues/32486)、权益缺失 [#28504](https://github.com/openai/codex/issues/28504)。
- **沙箱与运行环境健壮性**：Windows 沙箱 Smart App Control 冲突 [#22428](https://github.com/openai/codex/issues/22428) / [#32487](https://github.com/openai/codex/issues/32487)、Computer Use 崩溃 [#32032](https://github.com/openai/codex/issues/32032)。
- **多代理与子代理控制**：子代理模型指定 [#31814](https://github.com/openai/codex/issues/31814)、子代理配置无法生效 [#19399](https://github.com/openai/codex/issues/19399)、工具驱动的代理无法选择自定义代理 [#32291](https://github.com/openai/codex/issues/32291)。

## 开发者关注点
- **Linux 原生支持呼声极高**，是目前社区票数最高的功能请求。
- **配额系统可靠性**：多位 Pro 用户反映重置失效、额度异常消失、不透明的计费阈值等问题，对付费体验影响较大。
- **资源占用隐形压力**：SQLite 日志大量写入、Windows 桌面端持续 CPU 占用等资源问题逐步浮现。
- **多代理与子代理的模型灵活性**：新模型强制绑定子代理限制了工作流设计，开发者期待更细粒度的模型选择能力。
- **沙箱与 Computer Use 的跨版本稳定性**：macOS 及 Windows 更新带来的符号缺失或安全策略冲突，正成为持续困扰。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 — 2026-07-12

## 今日更新概览
今日无新版本发布，但代码仓库非常活跃，共有 3 个新 Issue 和 20 个 Pull Request 在最近 24 小时内得到更新。社区关注点集中在 Web UI 交互体验修复、CLI 后台任务行为改进，以及 agent-v2 新引擎的落地，同时出现了首个国际化 (i18n) 功能 PR。

## 版本发布
无。

## 社区热点 Issues
今日仅新增 3 个 Issue，均处于 Open 状态，暂无大规模讨论。

- **第三方 OpenAI 兼容供应商推理控制失效**
  @lin200083 报告使用 DeepSeek V4 Flash 等第三方供应商时，配置文件中关闭思考模式 (`enabled = false`) 并不会显式传递 `reasoning_effort=none`，导致服务端仍按默认中等强度进行推理。作者还提供了与 OpenCode 工具行为的对比佐证。
  [#1362](https://github.com/MoonshotAI/kimi-code/issues/1362)

- **kimi web 违背 Unix CLI 惯例：默认后台运行**
  @7exec 指出 kimi web 命令默认以守护进程方式运行，与 Unix 惯例相悖（应由用户或服务管理器决定是否后台）。建议增加 `--daemon` 或 `-d` 显式参数。该吐槽获得共鸣。
  [#1560](https://github.com/MoonshotAI/kimi-code/issues/1560)

- **希望增加 /copy 命令以复制部分输出为 Markdown**
  @hinson0 提到在使用中经常需要将某段输出以 Markdown 格式复制出来，当前 `/export-md` 只能导出整个 session，无法选择部分内容，期望提供类似 Claude Code 的 `/copy` 功能。
  [#1551](https://github.com/MoonshotAI/kimi-code/issues/1551)

## 重要 PR 进展
从 20 个更新的 PR 中筛选出 10 项重要的功能开发与修复：

- **加入多语言国际化支持 (i18n)**
  @7723qqq 提交了完整的国际化工功能，覆盖 CLI/TUI/Web UI，新增中英文语言引擎和语言选择器。
  [#1561](https://github.com/MoonshotAI/kimi-code/pull/1561)

- **修复 Web 浏览历史时聊天界面意外滚动**
  @wbxl2000 解决了用户查看历史消息时因图片等内容加载导致的视口异常跳转问题，提升浏览体验。
  [#1553](https://github.com/MoonshotAI/kimi-code/pull/1553)

- **按 Esc 关闭对话框时不再中断正在运行的提示**
  @zbl1998-sdjn 修复了在 Web 会话中 ESC 关闭搜索弹窗会错误终止当前正在执行的任务的 bug。
  [#1559](https://github.com/MoonshotAI/kimi-code/pull/1559)

- **登陆 agent-core-v2 引擎及相关服务**
  @sailist 将 agent-core-v2 引擎和 kap-server 通过实验性标志引入，为后续架构迁移铺路。
  [#1441](https://github.com/MoonshotAI/kimi-code/pull/1441)

- **修复实时回话重连时步骤重复渲染为文本块**
  @wbxl2000 处理了 Web UI 在执行中重新连接时，将之前步骤中的思考块和工具调用错误聚合成纯文本的问题。
  [#1558](https://github.com/MoonshotAI/kimi-code/pull/1558)

- **Workspace 路径选择器支持直接输入绝对路径**
  @wbxl2000 优化了“添加工作区”对话框，允许用户直接键入绝对路径，并增加了内联校验，取代原来隐藏在按钮后的狭小输入框。
  [#1556](https://github.com/MoonshotAI/kimi-code/pull/1556)

- **插件扫描时跳过常规文档文件**
  @destire-mio 修复了官方插件将 CHANGELOG.md 等文档文件误识别为技能 (skill) 的问题。
  [#1557](https://github.com/MoonshotAI/kimi-code/pull/1557)

- **修复 Web UI 会话断线恢复后的媒体呈现丢失**
  @wbxl2000 解决了 ReadMediaFile 工具调用返回的图片卡片在页面刷新或重连后降级为普通文本的问题。
  [#1552](https://github.com/MoonshotAI/kimi-code/pull/1552)

- **处理 AskUserQuestion 被取消时的模型行为**
  @wbxl2000 将用户取消提问时的处理从“按推荐选项继续”改为“无回答”，避免模型误解用户意图。
  [#1550](https://github.com/MoonshotAI/kimi-code/pull/1550)

- **FetchURL 工具支持下载并返回图片**
  @bj456736 使 FetchURL 工具能够识别图像内容类型，将图片转换为 base64 data URI 返回，支持视觉任务。
  [#1499](https://github.com/MoonshotAI/kimi-code/pull/1499)

## 功能需求归类
根据近期 Issues 反馈的方向，可观察到以下类别：

- **第三方模型兼容性**：用户希望在使用其他 OpenAI 兼容供应商时，能够正确控制推理参数（如 `reasoning_effort`）。
- **CLI 行为与惯例遵守**：期望守护进程化遵循显式标志，而非默认后台运行。
- **内容导出灵活性**：需要更细粒度的输出复制能力，例如部分对话内容的 Markdown 复制。

## 开发者关注点
今日开发者反馈和 PR 修改集中在几个痛点：

- **Web UI 稳定性与交互细节**：包括浏览历史的滚动干扰、ESC 键误中断任务、会话重连后界面元素丢失、路径选择器不直观等一系列使用体验问题得到集中修复。
- **后台任务生命周期**：PR 中多次涉及 `kimi -p` 模式下后台 bash 命令的结果收尾和 session 保活，避免异步任务被过早终止。
- **架构演进（agent v2）**：agent-core-v2 引擎的引入和多处配套重构（v2 上下文操作、TUI 适配）表明向新架构的迁移已进入代码落地阶段。
- **国际化与可扩展性**：首个 i18n PR 标志着项目开始考虑多语言用户群体；同时插件相关修复（避免文档污染）也体现出对生态体验的打磨。

（日报基于过去 24 小时数据生成，所有链接均来自 github.com/MoonshotAI/kimi-code）

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-12**

---

## 今日更新概览
过去 24 小时社区未发布新版本，但 Issues 与 PR 均保持活跃：共有 50 条 Issue 被更新，其中多条高票功能请求（如跳过权限的“YOLO 模式”）持续吸引讨论；同时涌现一批针对 V2 TUI、Windows 剪贴板、Gemini 工具调用等问题的修复 PR，部分已快速合入。整体上，性能回归、新模型支持与自动化信任配置是今日最受关注的方向。

---

## 社区热点 Issues（10 条）
1. **#8463 [FEATURE] 请求 `--dangerously-skip-permissions`（YOLO 模式）**
   用户希望在自动化工作流或受信环境中完全跳过权限弹窗，避免交互中断。讨论热烈（28 评论，91 👍），不少人分享了临时绕过方案，但无官方回应。
   🔗 https://github.com/anomalyco/opencode/issues/8463

2. **#30086 新版 OpenCode 高 CPU 占用**
   近一周内，多个会话并行时 CPU 飙升，鼠标卡顿，空闲时仍不释放。影响 macOS/Windows 用户（24 评论，13 👍），多人报告类似问题，暂未定位根因。
   🔗 https://github.com/anomalyco/opencode/issues/30086

3. **#16992 [2.0] 请求增加 `/btw` 命令**
   模仿 Claude Code 的 `/btw`，允许开发者用自然语言添加背景信息。获 153 👍 与 18 评论，用户明确希望 2.0 内建此功能，社区情绪强烈。
   🔗 https://github.com/anomalyco/opencode/issues/16992

4. **#36140 GPT-5.6 Luna 返回“模型未找到”**
   使用 ChatGPT OAuth 调用 `gpt-5.6-luna` 时 404 错误，但同账号下 `gpt-5.6-sol` 正常。16 评论，69 👍，凸显新模型支持与 OAuth 后端不一致问题。
   🔗 https://github.com/anomalyco/opencode/issues/36140

5. **#6231 自动发现 OpenAI 兼容端点模型列表**
   针对 Ollama、LM Studio 等本地提供方，用户需手动维护模型列表，易出错。讨论长达数月（16 评论，169 👍），开发者普遍希望 `/models` 端点自动同步。
   🔗 https://github.com/anomalyco/opencode/issues/6231

6. **#8816 要求提供 `llms.txt` 与 Markdown 格式文档**
   希望 OpenCode 官方文档以 `llms.txt` 和可下载 Markdown 形式分发，方便 AI 工具读取（16 评论，35 👍），至今无实施进展。
   🔗 https://github.com/anomalyco/opencode/issues/8816

7. **#19466 `opencode` 空闲时占用 CPU**
   等待 API 速率限制时，i9-14900 核心使用率 ~50%，电源浪费严重。14 评论，11 👍，推测是轮询或重试逻辑不当。
   🔗 https://github.com/anomalyco/opencode/issues/19466

8. **#22132 OpenCode 1.4.3 与本地 Ollama 挂起**
   简单提示也会挂起，而 `/v1/chat/completions` 正常。12 评论，5 👍，影响一系列本地模型用户，可能与流式处理或超时配置有关。
   🔗 https://github.com/anomalyco/opencode/issues/22132

9. **#36465 “Revert message” 意外修改代码**
   会话内“还原消息”实际触发了代码回退，且无警告，在旧对话中操作甚至损坏 Git 仓库。今日新建，4 评论，提醒界面操作语义模糊亟需改进。
   🔗 https://github.com/anomalyco/opencode/issues/36465

10. **#36439 会话无法自动重命名**
    所有会话名称始终为 “New Session...”，即使已进行多轮对话。今日报告（3 评论），可能由插件冲突或 1.17.18 回归引起。
    🔗 https://github.com/anomalyco/opencode/issues/36439

---

## 重要 PR 进展（10 个）
1. **#36470 [TUI] Windows 剪贴板粘贴修复**
   改用 PowerShell 直接写入标准输入，绕过 `preventDefault` 导致粘贴失效的问题。瞄准 Windows Terminal 用户痛点。
   🔗 https://github.com/anomalyco/opencode/pull/36470

2. **#36466 加载 V2 TUI 自定义配置**
   修复了 V2 忽略 `tui.json` 中 leader key 等设置的错误（与 #36458 相关），已合入。
   🔗 https://github.com/anomalyco/opencode/pull/36466

3. **#35405 修复 Gemini 工具调用参数解析**
   解决 Gemini 模型返回扁平化点括号参数（如 `questions[0].header`）的问题，防止工具调用失败。
   🔗 https://github.com/anomalyco/opencode/pull/35405

4. **#36469 TUI 侧边栏宽度阈值修复**
   恢复侧边栏可见性由用户偏好与终端宽度共同决定，避免窄终端下侧边栏强制覆盖会话内容。
   🔗 https://github.com/anomalyco/opencode/pull/36469

5. **#36468 保留空 JSON 配置文件的合法性**
   修复向空配置插入 `$schema` 时产生多余逗号导致 JSON 无效的 bug，并增加回归测试。
   🔗 https://github.com/anomalyco/opencode/pull/36468

6. **#31955 本地 Whisper 语音输入**
   在提示撰写器增加多语言语音按钮，实现离线语音转文字，提升无障碍体验。
   🔗 https://github.com/anomalyco/opencode/pull/31955

7. **#31947 恢复 SSH 下终端能力检测**
   解决 1.16.0 起 TUI 在 SSH 会话中颜色错乱、无法识别 tmux 的回归。
   🔗 https://github.com/anomalyco/opencode/pull/31947

8. **#31946 Windows 会话路径与 Shell 环境综合修复**
   一次修复多个 Windows 桌面子进程路径错误、环境变量缺失及自动补全问题。
   🔗 https://github.com/anomalyco/opencode/pull/31946

9. **#31929 修复 OpenAI Codex OAuth 忽略 `baseURL` 配置**
   使 ChatGPT 订阅方式下自定义代理地址生效，影响众多使用中转服务的用户。
   🔗 https://github.com/anomalyco/opencode/pull/31929

10. **#31922 限制 SSE 事件积压与断开慢速消费者**
    为每个订阅者设置事件缓冲区上限，防止内存泄漏与挂起的 SSE 连接。
    🔗 https://github.com/anomalyco/opencode/pull/31922

---

## 功能需求归类
- **自动化信任与权限控制**
  跳过所有权限弹窗（YOLO 模式），受自动化 CI/CD 与脚本化使用的强烈需求驱动（#8463）。
- **类 Claude Code 的交互命令**
  增加 `/btw` 等背景补充命令，提升非对话式信息传递体验（#16992）。
- **模型管理与发现**
  自动列出兼容 OpenAI 端点的模型（#6231），以及正确支持新模型（如 GPT-5.6 系列）的 OAuth 限制（#36140，#36247）。
- **文档可访问性**
  提供 `llms.txt` 和 Markdown 文档（#8816），方便下游 AI 产品集成与检索。
- **会话与 UI 改进**
  启动时会话选择器（#36134）、自动重命名（#36439）、还原操作的语义修正（#36465）等。
- **性能与资源占用**
  反复报告的高 CPU 占用（#30086，#19466），尤其是空闲或限流等待时，成为性能类迭代的焦点。

---

## 开发者关注点
- **性能回归严重**：多个 Issues 反映 1.15+ 版本 CPU 使用率异常，即使在空闲等待时也无法降频，严重影响多任务稳定性。
- **模型兼容与 OAuth 健壮性**：GPT-5.6 系列通过 ChatGPT 订阅时出现 404 或限制值错误，暴露了后端不同通道的配置不一致问题。
- **V2 TUI 配置缺失**：自定义快捷键无效果、初始消息丢失等，表明 V2 迁移过程中对原有配置的兼容性覆盖不足。
- **自动化阻碍**：权限弹窗无法全局关闭，使得脚本化部署中 OpenCode 难以“静默”运行，开发者呼吁官方提供“危险模式”标志。
- **本地模型用户体验差**：Ollama 等本地提供方挂起、需手动列模型等，增加了使用摩擦，削弱了 OpenCode 的本地优先定位。

</details>