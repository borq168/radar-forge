# AI CLI 工具社区动态日报 2026-07-11

> 生成时间: 2026-07-11 00:23 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

以下是基于 2026-07-11 各 AI CLI 工具社区动态生成的横向对比分析报告。

---

## 1. 今日横向概览

今日四款工具均以问题修复与体验优化为主，未见重大功能发布。Claude Code 通过补丁版本改进终端健康检查与权限流程；OpenAI Codex 连续推出两个 Alpha 版本迭代，社区将主要精力投入 Windows 稳定性与多代理模型行为；Kimi Code 在快速合入 16 个 PR 的同时，暴露出 Web 端交互缺陷与 VS Code 扩展退化；OpenCode 虽未发布的版本，但 TUI 重构与跨平台兼容讨论最为密集。新模型（Fable 5、GPT‑5.6 系列）在多个社区同时引发兼容性或行为异常反馈，成为一个跨工具的共性信号。

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issues | 今日 PR 数 | 发行版情况 |
|------|----------------|------------|------------|
| Claude Code | 10 | 6 | v2.1.206（功能增强） |
| OpenAI Codex | 10 | 10 | rust-v0.145.0-alpha.3 / alpha.4（快速迭代） |
| Kimi Code | 9 | **16** | 0.23.5（补丁修复） |
| OpenCode | 10 | 8 | 无 |

> 注：Issue 数量取自各日报“社区热点 Issues”条目数，反映当日受关注较高的新发或持续讨论的问题。

## 3. 共同出现的功能方向

以下需求或问题在至少两个工具社区中同时出现，具有跨工具共性：

- **新模型稳定性与兼容性**
  Claude Code（Fable 5 静默工具调用、Advisor 不可用）、OpenAI Codex（GPT‑5.6 Sol 子代理模型强制绑定、Spark 参数拒绝）、OpenCode（GPT‑5.6 Luna 404、Sol 推理丢失）以及 Kimi Code（请求支持 gpt‑5.6‑sol）均反映出新一代模型在实际 CLI 环境中的表现未达预期，成为开发者共同痛点。

- **桌面/IDE 集成稳定性**
  Claude Code 的 VS Code 扩展挂起（AskUserQuestion 小组件）、OpenAI Codex 的 Windows 桌面频繁冻结与 Shell 卡死、Kimi Code 的 VS Code 扩展性能退化、OpenCode 的 Windows TUI 启动失败，共同指向多平台桌面与 IDE 集成亟需打磨。

- **交互与 UI 打磨（终端/Web 端）**
  Claude Code 的终端鼠标误触与“仅滚动”请求、OpenAI Codex 的斜杠命令弹窗重复出现与统一应用 UX 回归、Kimi Code 的 Web 端模式按钮失效与搜索弹窗热键冲突，均反映出现代 CLI 工具在复杂交互界面（TUI/Web）中的设计短板。

- **用量可见性与计费可信度**
  Claude Code（Max 套餐限额异常消耗）、OpenAI Codex（重置失败、单次对话耗尽月配额）、Kimi Code（需求底部栏显示额度/用量）同时提出对消耗透明度和计费准确性的诉求，表明付费用户对实时资源控制的期望在上升。

## 4. 差异化定位分析

- **Claude Code**
  侧重 **安全与控制**：凸显组织管理、MCP 权限、安全护栏、健康检查（`/doctor`）等企业级特性。今日 PR 集中在安全指南增强、钩子示例等，体现对可信执行环境的持续投入。目标用户偏向对模型行为有精细管理要求的团队。

- **OpenAI Codex**
  强调 **多模型与多代理编排**：子代理、环境隔离、统一桌面应用是其核心差异。今日 PR 涉及子代理环境限制、模型参数动态适配，Issue 中大量反映 Agent 工作流需求。快速迭代的 Alpha 版本表明其正在积极收敛 CLI 与桌面端的统一体验，面向深度使用 GPT 生态的开发者。

- **Kimi Code**
  定位 **广泛的接入性与插件生态**：通过 OAuth 登录 ChatGPT 订阅、外部状态栏命令、插件市场流水线等 PR，体现其试图聚合多种模型供应源并快速扩展工具链。agent‑core‑v2 引擎的落地表明底层架构正在升级，适合希望在一个界面中切换多模型、重视 Web 端体验的开发者。

- **OpenCode**
  社区驱动的 **开源与多平台可移植性**：高度关注移动端、桌面集成浏览器、Nix 支持等跨场景能力，V2 TUI 重构是其当前技术主线。其对多种提供商（含 OAuth）的兼容和 CodeMode 异步工作流的深化，显示出为不同工作流提供通用底层的意图，目标用户是希望深度定制和跨平台使用的开源社区开发者。

## 5. 社区活跃度记录

从今日数据看，**Kimi Code 在代码贡献层面最活跃**（16 个 PR），包含引擎升级、OAuth 登录、插件市场、错误处理等多个方向，维护者响应速度快。**OpenAI Codex 发行版迭代最频繁**（两个 Alpha 版本），同时有 10 个 Issues 和 10 个 PR 的平衡活跃度。**Claude Code 单 Issue 讨论深度最高**（最高 792 条评论），显示用户反馈粘性极强，但 PR 数量较少（6 个）。**OpenCode 在没有新版本的情况下，社区仍然通过 Issue 与 PR 驱动 V2 打磨与跨平台修复**，自发参与度较高。

综合活跃度排序（基于数量、发布与反馈量）：Codex ≈ Kimi > Claude ≈ OpenCode（均为高活跃度仓库，仅细微差别）。

## 6. 有证据支撑的观察

- **新模型在 CLI 工具中的表现已形成跨工具痛点**：至少三款工具（Claude、Codex、OpenCode）同时出现针对旗舰新模型（Fable 5、GPT‑5.6 系列）的行为异常、兼容性缺失或不可用反馈，另一款工具（Kimi）则出现新增模型支持的请求。多条独立证据表明，这些模型在工具链中的集成尚未稳定。

- **桌面端与 TUI 的交互粗糙感正在侵蚀开发者信任**：鼠标误触、弹窗冲突、UI 冻结、前端渲染滞后等问题在 Claude Code、Codex、Kimi Code 和 OpenCode 中均有报告，且多数处于未解决状态。终端和桌面应用从“辅助”变为“主要交互界面”后，其设计简陋已成为普遍摩擦来源。

- **计费与消耗的不可见 / 不可信问题在三个工具中集中爆发**：Claude Code 的限额异常消耗（792 评论）、Codex 的重置失败与分钟烧尽月配额、Kimi Code 的额度可视化需求，构成付费用户信任危机的多案例证据，反映出当前 CLI 工具在资源计量与控制反馈上的集体不足。

- **底层引擎重构成为多个工具的并行主线**：Kimi Code 的 agent‑core‑v2 实验性引入、OpenCode 的 V2 服务与 TUI 重构、OpenAI Codex 的多代理限制与环境隔离，均表明各工具正试图通过架构升级来解决扩展性问题，而此过程中不可避免地引入了新的不稳定因素（如连接风暴、事件丢失）。

- **开源与多模型接入策略出现分化**：Claude Code 保持较为封闭但深度整合的路线，OpenCode 坚持开源与多提供商兼容，Kimi Code 开始通过 OAuth 和插件扩展外部模型接入，Codex 则统一桌面与 CLI 体验并强化自有模型控制。这种差异在今日 PR 和 Issue 中体现得尤为清晰，暂无“统一标准”迹象。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# 2026-07-11 Claude Code 社区动态日报

## 今日更新概览
过去24小时，Claude Code 发布了 v2.1.206 版本，增加了目录路径建议、`/doctor` 健康检查及 `/commit-push-pr` 自动允许推送等改进。社区 Issue 活跃，最高讨论量 Issue 已累积 792 条评论，主要围绕 Max 套餐的会话限额异常消耗；终端交互（鼠标误触、滚动模式）和 Fable 5 模型行为成为开发者集中反馈的痛点。PR 方面有 6 个提交，涵盖安全规则增强、Windows 启动器、远程控制文档及钩子示例。

## 版本发布
**v2.1.206** （发布于 2026-07-10）
- `/cd` 命令新增目录路径建议，行为与 `/add-dir` 一致。
- 新增 `/doctor` 检查，可建议裁剪已检入的 `CLAUDE.md` 文件，移除可从代码库中推断出的内容。
- `/commit-push-pr` 现在自动允许向仓库配置的远程分支执行 `git push`。

## 社区热点 Issues （10 条）

1. **#38335 Max 套餐会话限额异常快速消耗**
   作者 @karenrebecag，792 条评论，468 👍。从 2026-03-23 起，CLI 使用中会话限额消耗速度明显异常，大量用户受波及，至今未关闭，是社区最热的帖子。
   [查看详情](https://github.com/anthropics/claude-code/issues/38335)

2. **#66960 Fable 5 模型在事故响应中长时间静默后无意义提问**
   @rasatpetabit 反馈，在重大事故处置时，Fable 5 模型执行了 16 分钟静默工具调用，最后仅弹出一个“从未分享过的发现”的 AskUserQuestion，交互体验极差。
   [查看详情](https://github.com/anthropics/claude-code/issues/66960)

3. **#49979 Windows 11 上 Claude Chrome MCP 导航/阅读页面对所有域拒绝**
   @iechegoyen 报告在 Windows 11 + Claude Desktop 环境中，Chrome MCP 的 `navigate` 与 `read_page` 工具无任何审批弹窗即一律拒绝，涉及多个关联 Issue。
   [查看详情](https://github.com/anthropics/claude-code/issues/49979)

4. **#71539 鼠标单击重聚焦终端误触发权限提示**
   @quenti77 发现单击终端窗口来重获焦点，会被解释为点击权限弹窗上的选项，导致意外批准/拒绝。8 条评论，17 个 👍。
   [查看详情](https://github.com/anthropics/claude-code/issues/71539)

5. **#70539 请求“仅滚动”鼠标模式**
   @janinko 提出在 TUI 全屏模式下，目前开关鼠标后，任意点击都可能误触按钮或展开/折叠工具输出，希望增加仅保留滚轮滚动的模式。已获 68 个 👍。
   [查看详情](https://github.com/anthropics/claude-code/issues/70539)

6. **#74260 助手文本块被静默丢弃，不出现在 JSONL 记录中**
   @federbenjamin 报告在自适应思考模式下，同一回合中文本块后跟随更多思考时，中间的文本块会在 TUI 中消失且不写入 JSONL 日志，可能造成数据丢失。
   [查看详情](https://github.com/anthropics/claude-code/issues/74260)

7. **#70438 VS Code 扩展中 AskUserQuestion 小组件只渲染头部后挂起**
   @mihayloffdv-spec 反映了在 VS Code 扩展中，通过 Skill 调用的 AskUserQuestion 小组件随机出现只显示圆点标题、无问题卡片的现象，会话无限挂起。
   [查看详情](https://github.com/anthropics/claude-code/issues/70438)

8. **#74714 组织管理员禁用 Claude Code 订阅访问导致无法使用**
   @jeremytrindade 在使用时收到“组织已禁用 Claude 订阅访问”提示，要求切换至 API key 或联系管理员，这可能会影响团队用户。
   [查看详情](https://github.com/anthropics/claude-code/issues/74714)

9. **#76189 Fable 5 的 Advisor 在存在任何工具调用后返回 “unavailable”**
   @perelin 发现只要会话中出现过哪怕一条工具调用（如 `Bash(ls)`），使用 Fable 5 作为顾问模型时服务端就会返回不可用错误，而 Opus 未受影响。
   [查看详情](https://github.com/anthropics/claude-code/issues/76189)

10. **#71792 `--dangerously-load-development-channels` 无法注册裸 `server:` 通道**
    @ray-amjad 指出 `.mcp.json` 中声明了通道能力的 MCP 服务器，工具可正常调用，但入站通知被静默丢弃，影响开发通道调试。
    [查看详情](https://github.com/anthropics/claude-code/issues/71792)

> 另有关注度较高的 **#76528**（今日新开）：鼠标重聚焦点击在 AskUserQuestion/权限对话框中同时执行选择和提交，要求可选择的选择后确认行为。

## 重要 PR 进展 （共 6 个）

1. **#41447 feat: open source claude code ✨**
   @gameroman 提交了一个社区愿望强烈的 PR，意图将 Claude Code 开源，关联了多个反馈 Issue，引发大量讨论。
   [查看详情](https://github.com/anthropics/claude-code/pull/41447)

2. **#76475 标记 innerHTML/outerHTML += 追加操作的安全隐患**
   @winklemad 发现安全指南的 XSS 规则只匹配了赋值操作，遗漏了 `el.innerHTML += userInput` 这类拼接写入，此 PR 填补了这一检测盲区。
   [查看详情](https://github.com/anthropics/claude-code/pull/76475)

3. **#76394 新增 Claude Code Launcher - Windows CLI 应用**
   @orangewater119 贡献了一个适用于 PowerShell 的功能齐全的 Windows 命令行启动器，包含 14 个交互菜单功能。
   [查看详情](https://github.com/anthropics/claude-code/pull/76394)

4. **#76298 文档：记录 Remote Control 后台任务面板**
   @Arnesh-Vimalraj 更新了远程控制文档，描述了 Web/移动端后台任务面板及 v2.1.205 新增的任务状态同步行为。
   [查看详情](https://github.com/anthropics/claude-code/pull/76298)

5. **#76289 示例钩子：演示复合命令预检及 deny-and-steer 模式**
   @ss251 扩展了 bash 命令验证器示例，展示如何检测命令链、管道及主动命令替换，并提供了可选的只读过滤允许列表。
   [查看详情](https://github.com/anthropics/claude-code/pull/76289)

6. **#76274 security-guidance：用仓库根路径解析审查路径并强化 findings 数组契约**
   @ss251 修复了安全指南插件中审查器传递路径混乱（相对路径、根锚定路径）的问题，统一用仓库根路径解析。
   [查看详情](https://github.com/anthropics/claude-code/pull/76274)

## 功能需求归类
从近期 Issue 看，开发者反复提及的功能方向集中在：
- **终端鼠标交互优化**：避免误触（仅滚动模式、分步确认点击），如 #71539、#70539、#76528。
- **模型行为/响应质量（尤其 Fable 5）**：静默工具调用、无意义提问、Advisor 不可用等 (#66960、#76189)。
- **IDE / 集成稳定性**：VS Code 扩展中挂起问题 (#70438)、Chrome MCP 权限失效 (#49979)。
- **会话与资源消耗管理**：异常快速的限额消耗 (#38335) 以及组织级订阅控制 (#74714)。
- **MCP 开发与通道支持**：通道通知丢失 (#71792)、裸通道注册等。
- **数据完整性**：对话内容丢失 (#74260) 引发日志记录信心问题。

## 开发者关注点
当前开发者集中痛点：
1. **终端交互设计**：全屏 TUI 下鼠标的支持程度与误操作之间的矛盾，强烈要求可配置鼠标行为。
2. **Fable 5 模型稳定性与可用性**：在多条 Issue 中反映其在关键任务（事件响应、顾问）中的行为不可预期，甚至静默失败。
3. **平台兼容性**：Windows 上的 MCP 权限弹窗缺失、组织级账号限制，影响部分企业用户。
4. **工具与扩展可靠性**：VS Code 扩展交互小组件挂起、对话消息丢失，侵蚀开发信任。
5. **安全与权限模型**：安全护栏误触发（如 #73909），以及权限提示易被误操作，期待更精细的控制。

---
*数据统计时间：2026-07-10 UTC，覆盖 Anthropic 官方仓库 24 小时内更新。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-11

## 今日更新概览
过去 24 小时仓库发布了两个 CLI Alpha 版本（`rust-v0.145.0-alpha.3` 与 `alpha.4`），同时社区问题与拉取请求高度活跃。问题集中在 Windows 桌面性能、子代理模型绑定、计费/速率限制异常以及全新统一应用的 UX 回归；众多修复型 PR 被快速合并，涉及模型兼容性、补丁保留和可靠性增强。

## 版本发布
- **rust-v0.145.0-alpha.4** — 跟进 Alpha 3 的再构建，未提供独立变更说明。
- **rust-v0.145.0-alpha.3** — 同一序列的上一版本，亦为快速迭代的 Alpha 快照。

## 社区热点 Issues（10 项）

1. **GPT-5.6 Sol 无法为子代理指定模型，强制所有子代理使用 Sol**
   [#31814](https://github.com/openai/codex/issues/31814)
   使用 GPT-5.6 Sol 时，MultiAgent V2 会忽略用户自定义的子代理模型配置，并默认隐藏子代理元数据，破坏多模型协作工作流。32 条讨论，81 👍。

2. **Windows 11 Pro 上 Codex 桌面应用频繁卡顿/冻结，资源充足**
   [#20214](https://github.com/openai/codex/issues/20214)
   多用户报告在 Windows 11 下桌面应用界面严重掉帧，即使系统资源充裕。该问题已持续数月，31 条评论，45 👍。

3. **桌面应用间歇冻结 Windows Shell，打开 Codex Settings 可暂时缓解**
   [#16374](https://github.com/openai/codex/issues/16374)
   主应用在 Windows 11 Pro 下会卡死整个 Shell，用户发现进入设置界面可解除冻结，26 条评论，10 👍。

4. **重置失败，消耗了重置次数但未生效**
   [#31606](https://github.com/openai/codex/issues/31606)
   Pro 订阅者的重置计数器被扣除后速率限制并未刷新，影响付费使用体验。23 条评论，25 👍。

5. **Spark 模型拒绝 `reasoning.summary` 参数**
   [#13009](https://github.com/openai/codex/issues/13009)（已关闭）
   GPT-5.3 Codex Spark 无法处理 `reasoning.summary`，导致调用失败。尽管已关闭，仍有 21 条讨论。

6. **请求增加设置以禁用 60 秒自动回答问题机制**
   [#28969](https://github.com/openai/codex/issues/28969)
   CLI 的自动超时回答导致用户无法手动确认长上下文决策，21 条评论，104 👍（高票需求）。

7. **统一 ChatGPT/Codex 桌面应用存在 UX 回退**
   [#31862](https://github.com/openai/codex/issues/31862)
   新合并的桌面应用中多项交互体验劣化，例如侧边栏自定义消失、消息切换卡顿，15 条评论。

8. **Computer Use 1.0.1000366 在 macOS 15.7.7 启动崩溃**
   [#32032](https://github.com/openai/codex/issues/32032)
   因缺少 Swift 并发符号导致原生辅助进程退出，`dyld` 报错，影响 macOS 用户，14 条评论。

9. **自定义 stdio MCP 服务器工具未暴露给桌面线程**
   [#19425](https://github.com/openai/codex/issues/19425)
   工具发现成功但无法在桌面线程中使用，疑似 App Server 的回归缺陷，14 条评论。

10. **多付费账户计费异常：一次提示即耗尽限额，月度配额一日用完**
    [#31668](https://github.com/openai/codex/issues/31668)
    多个 Pro/企业账户遭遇相同问题，可能与用量统计或速率限制的回归有关，6 条评论。

## 重要 PR 进展（10 项）

- **按模型支持度处理 `reasoning.summary` 参数**
  [#32290](https://github.com/openai/codex/pull/32290) — 为模型元数据增加 `supports_reasoning_summary_parameter`，对不支持参数模型禁止发送，避免 Spark 等模型报错。

- **本地线程存储支持分页项目持久化**
  [#32289](https://github.com/openai/codex/pull/32289) — 修复线程存储无法写入分页内容的问题，提高 CLI 和桌面端历史记录一致性。

- **将 GPT-5.6 Sol 设为 Amazon Bedrock 默认模型**
  [#32288](https://github.com/openai/codex/pull/32288) — 静态目录中提高 Sol/Terra/Luna 的优先级，使 Sol 成为 Bedrock 用户的默认选项。

- **明确安全缓冲提示中的等待行为**
  [#32286](https://github.com/openai/codex/pull/32286) — 将按键文案改为“关闭并继续等待”，并补充说明无需操作，提高交互清晰度。

- **修复自动补全在提及之间的定位问题**
  [#30463](https://github.com/openai/codex/pull/30463) — 当一个未绑定技能提及和一已绑定提及相邻时，避免补全定位到右侧已绑定项。

- **修复斜杠命令弹窗消失后立即重新出现**
  [#30492](https://github.com/openai/codex/pull/30492) — 记录已关闭的命令令牌，直到令牌改变才允许再次弹出，消除 Esc 无效的体验。

- **核心：允许限制子代理环境**
  [#31662](https://github.com/openai/codex/pull/31662) — 新增 `environment_ids` 参数，可显式限定子代理运行环境，增强安全隔离。

- **Windows 下保留换行符应用补丁**
  [#30882](https://github.com/openai/codex/pull/30882) — 引入 `apply_patch_preserve_line_endings` 特性标志，确保补丁不会破坏 CRLF 文件。

- **加速反向历史搜索**
  [#30887](https://github.com/openai/codex/pull/30887) — 由逐条加载优化为批次扫描，大幅减少 `history.jsonl` 锁定与 I/O，提升 TUI 响应速度。

- **在终端回合完成事件中包含错误信息**
  [#32280](https://github.com/openai/codex/pull/32280) — 将终端错误完整传递至 `TurnCompleteEvent`，便于上层捕获和诊断。

## 功能需求归类

- **多代理与子代理控制**：要求细化子代理模型选择、环境隔离、避免强制继承父模型配置（#31814, #26363, #24704）。
- **Windows 桌面性能与稳定性**：反复报告冻结、UI 卡顿、资源泄漏，横跨 Shell、文本渲染、应用浏览器等组件（#20214, #16374, #29821, #31212, #30178）。
- **模型兼容性与参数适配**：多个新模型（Sol、Spark）遭遇不支持的参数或配置忽略（#31814, #13009, #31846, #32146）。
- **计费与速率限制准确性**：重置无效、用量耗尽过快、多账户受影响，已从孤立事件上升为系统性质疑（#31606, #31668, #23192）。
- **CLI 工具体验增强**：要求禁用自动回答、提供子代理线程选择器、保留提示缓存血统等（#28969, #30813, #24704）。
- **统一桌面应用 UX 回归**：项目和侧边栏功能缺失、对话浏览闪烁、合并后出现多起退化（#31862, #32016, #31878）。

## 开发者关注点

1. **Windows 环境成为严重瓶颈**：从安装器失败（#32149）到内核池增长、桌面冻结、浏览器内嵌崩溃，覆盖面极广，Windows 用户的开发体验受到明显影响。
2. **多代理模型锁定引发工作流破坏**：GPT-5.6 Sol 自动强制子代理为同模型，与用户自定义代理配置冲突，降低高级编排灵活性。
3. **速率限制计费可信度危机**：多账户报告重置消耗后限流未恢复、单次对话烧尽月配额，可能指向底层会计逻辑的缺陷。
4. **新统一应用的交互打磨不足**：桌面版合并 ChatGPT/Codex 后出现项目丢失、滚动闪烁、性能回退，开发者期望快速获得修复以保持工作效率。
5. **模型参数支持缺乏前向验证**：Spark 和 Sol 对 `reasoning.summary` 等参数响应不一致，导致 CLI 和 App 端调用失败，对自动化脚本影响较大。

---

*本日报基于 [github.com/openai/codex](https://github.com/openai/codex) 公开数据自动生成，仅反映指定日期内的社区活动，不构成路线图预测或投资建议。*

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

## Kimi Code 社区动态日报 | 2026-07-11

### 今日更新概览
过去24小时内，Kimi Code 发布了 0.23.5 补丁版本，修复了 Web 端“轮次结束”重复通知与图片压缩提示泄漏等问题。社区活跃度较高：新增 9 个 Issue 集中反馈 Web 端交互缺陷、用量可见性与新模型支持需求；另有 16 个 PR 推进中，涵盖 agent-core-v2 引擎落地、插件市场发布、ChatGPT OAuth 登录等多项功能。

### 版本发布
**@moonshot-ai/kimi-code@0.23.5**
- 修复：Web 端 “Turn finished” 桌面通知重复发送问题，以及会话完成后的声音提示来源单一化。[[#1542](https://github.com/MoonshotAI/kimi-code/pull/1542)]

### 社区热点 Issues
1. **自定义 Registry 生成文档缺失** [#1366](https://github.com/MoonshotAI/kimi-code/issues/1366)
   用户询问如何自行创建 `api.json` 以导入自定义模型供应商，目前文档仅说明导入方法，未覆盖生成步骤，影响自建代理或镜像站用户接入。

2. **底部状态栏期望显示额度/用量** [#1171](https://github.com/MoonshotAI/kimi-code/issues/1171)
   CLI 底部缺少订阅额度与 5 小时频限的实时可视反馈，用户经常在对话中途才发现额度耗尽。建议常驻进度条展示用量余量与重置倒计时。

3. **VS Code 扩展严重质量与性能回退** [#1500](https://github.com/MoonshotAI/kimi-code/issues/1500)
   Kimi Code 2.7 在 VS Code 中相比 2.5 出现了指令遵循度、表现力与 token 效率的明显退化，模型忽略明确指令、虚构修改并过度消耗 token 进行不必要推理，直接影响开发效率。

4. **对话标题建议通过本地 AI 自动总结** [#1544](https://github.com/MoonshotAI/kimi-code/issues/1544)
   目前 Web 端对话标题默认为用户第一句话，当后续讨论偏离主题时，标题无法反映实际内容，造成历史对话查找困难。希望利用本地 AI 自动生成概括性标题。

5. **Kimi Web 工作区新建对话时模式按钮失效** [#1541](https://github.com/MoonshotAI/kimi-code/issues/1541)
   在 Web 端工作区新建对话时，点击“模式”按钮无响应，无法切换模式，疑似 UI 事件绑定异常。

6. **ESC 关闭搜索弹窗误终止后台任务** [#1538](https://github.com/MoonshotAI/kimi-code/issues/1538)
   搜索会话弹窗的 ESC 关闭快捷键与任务终止热键冲突，导致用户仅为关闭弹窗却意外终止了正在运行的后台任务，影响任务稳定性。

7. **插件加载器将 CHANGELOG.md 注册为技能** [#1539](https://github.com/MoonshotAI/kimi-code/issues/1539)
   官方 `kimi-datasource` 插件的根目录 `CHANGELOG.md` 被技能加载器错误识别为名为 “CHANGELOG” 的技能，未跳过无 YAML 前言的 Markdown 文件，污染技能列表。

8. **VS Code 扩展前端渲染节流问题** [#1537](https://github.com/MoonshotAI/kimi-code/issues/1537)
   网络日志显示后端已完成所有 token 流传输并将任务标记为完成，但前端仍按固定打字延迟逐字渲染，未直接加载完整响应，影响响应查看体验。

9. **请求支持 gpt-5.6-sol 模型** [#1532](https://github.com/MoonshotAI/kimi-code/issues/1532)
   用户希望 Kimi Code 能加入对 gpt-5.6-sol 模型的支持，以在工具中使用该模型。

### 重要 PR 进展
1. **agent-core-v2 引擎与 kap-server 实验性引入** [#1441](https://github.com/MoonshotAI/kimi-code/pull/1441)
   将新一代 agent-core-v2 引擎和 kap-server 通过实验性标志落地，是底层架构升级的关键合入。

2. **TUI 接入 agent-core-v2 并支持延迟会话创建** [#1543](https://github.com/MoonshotAI/kimi-code/pull/1543)
   使交互式 TUI 界面摆脱旧版 v1 SDK，直连 agent-core-v2，配合延迟会话创建，为新引擎端到端体验铺路。

3. **外部状态栏命令支持** [#1493](https://github.com/MoonshotAI/kimi-code/pull/1493)
   TUI 新增通过外部命令渲染底栏状态栏的能力，接收 session、模型等元数据，丰富终端个性化配置。

4. **ChatGPT Plus/Pro OAuth 登录** [#1529](https://github.com/MoonshotAI/kimi-code/pull/1529)
   增加 OpenAI 设备码 OAuth 认证，支持 ChatGPT Plus/Pro 订阅用户直接登录并获取可用的 Codex 模型列表，拓宽模型供应来源。

5. **插件市场发布流水线** [#1540](https://github.com/MoonshotAI/kimi-code/pull/1540)
   在 Release 工作流中加入插件市场构建与上传步骤，自动产出插件市场制品，简化插件分发。

6. **拒绝不支持的图片格式并防止会话污染** [#1536](https://github.com/MoonshotAI/kimi-code/pull/1536)
   对 AVIF、HEIC 等未支持的图片格式在上传阶段即拒绝并给出明确提示，避免将不可处理的二进制数据送至模型端导致会话异常。

7. **隐藏用户消息气泡中的系统旁白** [#1535](https://github.com/MoonshotAI/kimi-code/pull/1535)
   修复 Web 端大图压缩后系统注入的 `<system>` 压缩说明直接显示在用户消息气泡中的问题，改为隐蔽提示，保持界面干净。

8. **LLM API 容错增强：429 与过载处理** [#1530](https://github.com/MoonshotAI/kimi-code/pull/1530)
   改进对 API 返回 429 限频、服务过载及流中断的容错处理，避免长时间评测运行中因临时错误导致整个回话中断。

9. **agent-core-v2 轮次结果细节保留** [#1531](https://github.com/MoonshotAI/kimi-code/pull/1531)
   修复 agent-core-v2 中轮次结束事件丢失步骤计数、取消原因等问题，确保上层界面能获取完整执行信息。

10. **WebBridge 安装链接更新** [#1547](https://github.com/MoonshotAI/kimi-code/pull/1547) (已合并)
    将 `/plugins` 面板中 Kimi WebBridge 的安装链接从旧页面更新至新地址，避免用户跳转失败。

### 功能需求归类
- **用量与额度可视化**（#1171、多次提及）：在 CLI 底栏、Web 界面中需要直观展示剩余额度、限频状态与重置倒计时。
- **对话标题智能生成**（#1544）：希望用本地 AI 对对话内容自动总结成简洁标题，替代当前仅取第一句的做法。
- **新模型支持**（#1532）：请求支持 gpt-5.6-sol 等社区关注的新模型。
- **Web 端稳定性与交互缺陷**（#1541、#1538、#1537）：工作区模式按钮失效、热键冲突、前端渲染滞后等，说明 Web 端在近期的交互可靠性需要加强。
- **插件与文档完善**（#1366、#1539）：自定义 Registry 生成文档缺失、插件技能错误加载，提示插件生态和开发者文档需进一步细化。

### 开发者关注点
- **VS Code 扩展退化**（#1500）成为痛点焦点，模型行为退步、token 浪费等问题直接影响日常编码体验，需尽快验证与修复。
- **Web 端交互连贯性**：多个 Issue 指向新建对话、模式切换、弹窗关闭等基础操作的失效或副作用，表明前端近期改动可能引入回归。
- **底层引擎迁移进程**：agent-core-v2 相关 PR 密集（#1441、#1543、#1531），开发者社区密切关注新引擎的稳定性与 TUI/VS Code 的适配进度。
- **API 容错与可靠性**：对 429 和过载的容错增强（#1530）反映长时间运行任务的健壮性需求，尤其在大规模评测或自动化场景中。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 2026-07-11 日报

### 1. 今日更新概览
今日无新版本发布。社区围绕移动端支持、GPT‑5.6 系列模型兼容性、V2 TUI 交互完善及多平台稳定性展开集中讨论，多项 bug 修复和功能 PR 已提交或在审。

### 2. 版本发布
（无）

### 3. 社区热点 Issues

- **移动端版本 Feature Request** [#10288](https://github.com/anomalyco/opencode/issues/10288)
  强烈希望提供 Android/iOS/Web UI 版本，以便开发者随时获取 AI 编程协助。该 Issue 已累积 89 个👍和 14 条讨论，表明移动化是社区高频需求。

- **桌面版集成浏览器** [#26772](https://github.com/anomalyco/opencode/issues/26772)
  用户提出在 OpenCode 桌面端内嵌浏览器工作区，用于审查和交互 Web 页面，有助于前端开发和调试场景。

- **GPT‑5.6 Luna 模型 404 错误** [#36140](https://github.com/anomalyco/opencode/issues/36140)
  通过 ChatGPT OAuth 调用 `gpt-5.6-luna` 返回模型未找到。影响尝试最新模型的用户，已有 44 个👍，社区期待快速修复。

- **macOS 上 GPT‑5.6 Sol 推理部分丢失** [#36241](https://github.com/anomalyco/opencode/issues/36241)
  `gpt-5.6-sol-fast/high` 在流式推理时反复报告 `reasoning part …:0 not found`，影响深度学习工作流。

- **并发会话导致 NFS 上 SQLite 数据库损坏** [#14970](https://github.com/anomalyco/opencode/issues/14970)
  在 NFS 挂载的环境下打开多个 opencode 会话会破坏共享数据库。影响团队协作和容器化场景，有 19 个👍。

- **Windows TUI 启动失败** [#35828](https://github.com/anomalyco/opencode/issues/35828)
  当项目已有 `.opencode` 目录时 Windows 端启动报错，妨碍 Windows 开发者正常使用。

- **V2 服务重启导致连接风暴与资源尖峰** [#36285](https://github.com/anomalyco/opencode/issues/36285)
  在自动更新或手动重启时，托管服务替换会断开所有现有 TUI，引发大量位置图冷启动，延迟 SSE 就绪，影响流畅性。

- **TUI 外部引用文件自动完成缺失** [#34040](https://github.com/anomalyco/opencode/issues/34040)
  配置的引用目录在自动完成中只显示别名，不列出目录内文件，降低了 file‑based agent 的使用效率。

- **对话持久化描述误导** [#36326](https://github.com/anomalyco/opencode/issues/36326)
  助手曾告知用户关机后可直接“continue”恢复会话，实际会话重新开始。沟通与实际行为不符，影响用户信任。

- **Interactive Steering 功能请求** [#19205](https://github.com/anomalyco/opencode/issues/19205)
  用户期望支持 GPT‑5.4 的交互式转向（Interactive Steering），能对排队任务发送指令。虽已关闭，但仍获 26 个👍，需求明确。

### 4. 重要 PR 进展

- **修复 CLI 服务状态报告** [#36275](https://github.com/anomalyco/opencode/pull/36275)
  用明确的 JSON 状态检查替换误导性的输出，区分注册、可达性和健康格式等，改善运维体验。

- **限制会话输出令牌** [#36333](https://github.com/anomalyco/opencode/pull/36333)
  将 V2 提供商的输出令牌上限设为 32,000，避免占用整个上下文窗口的模型异常消耗。

- **合并 Git 发现查询** [#36321](https://github.com/anomalyco/opencode/pull/36321)
  将 Git 仓库元数据发现合并为一个子进程调用，并支持无工作树的回退，提升启动性能。

- **CodeMode 搜索 fixture 目录** [#36332](https://github.com/anomalyco/opencode/pull/36332)
  注册 200 个临时工具到 20 个命名空间，并通过 `$codemode.search` 执行端到端测试，增强工具搜索覆盖。

- **CodeMode 支持 Promise 链** [#36304](https://github.com/anomalyco/opencode/pull/36304)
  在 CodeMode 沙箱中实现 `.then/.catch/.finally`，基于 #35782 的组合器，完善异步工作流。

- **页面评论导航组样式修复** [#36330](https://github.com/anomalyco/opencode/pull/36330)
  将文件树和导航间距统一为 12px，保持箭头按钮齐平，修复折叠元数据时叠加间距问题。

- **为 V2 分支启用 Nix CI** [#36329](https://github.com/anomalyco/opencode/pull/36329)
  将 v2 分支加入 nix‑hashes CI，便于 Nix 用户测试和开发。对应 Issue #36328。

- **GitHub Copilot 提供商模型 400 修复**（相关问题 #36305，已有 Closed PR 处理）
  社区贡献者正跟进解决 Copilot 模型 `/chat/completions` 端点 400 错误，相关 PR 已合并。

### 5. 功能需求归类

- **跨平台与移动化**
  - 移动端应用（#10288）
  - 桌面集成浏览器（#26772）
  - 文件管理 UI 增强（如打开文件夹按钮，见 #36313）

- **模型支持与兼容性**
  - GPT‑5.6 系列兼容（#36140, #36241）
  - Xcode 27 自定义模型配置不生效（#34743）
  - GitHub Copilot 模型列表空白（#36268）

- **会话与协作稳定性**
  - NFS/并发环境下数据库损坏（#14970）
  - 并发运行数据库锁（#33320）
  - 服务重启连接风暴（#36285）

- **TUI 交互体验**
  - V2 模态行为统一（#36302）
  - 自动完成外部引用文件（#34040）
  - 子代理返回主视图无提示（#36322）
  - fork 模态无效果（#36323）
  - 提供者标签简化（#36270）

- **工作流增强**
  - Interactive Steering 支持（#19205）
  - 交互式 Shell 加载 RC 文件（#36308）
  - 对话持久化准确性（#36326）

- **生态系统与工具链**
  - 插件目录发现（#31641 已关闭）
  - Nix 支持（#36328, #34671）
  - 领域分发命名与归因（#36317）

### 6. 开发者关注点

- **模型访问与稳定性**：新模型（如 GPT‑5.6 系列）通过 OAuth 调用时频繁出现 404 或推理失败，影响尝鲜用户信任。提供商的模型列表同步和 Copilot 端点匹配问题需持续投入。

- **并发与存储健壮性**：在 NFS 或多会话环境下，SQLite 数据库易损坏或出现锁错误，团队需要更可靠的并发控制和锁管理。

- **V2 TUI 打磨**：V2 版本中存在多处交互不流畅、提示缺失、视图切换不便等问题，开发团队（[@kitlangton](https://github.com/kitlangton) 等人）正在密集优化，社区也积极测试反馈。

- **Windows 与特定 CPU 兼容性**：Windows 端 TUI 启动失败和 Intel Kaby Lake 上 SIGILL 崩溃，说明跨平台二进制和绑定仍需加固。

- **开发流程集成**：如何让 OpenCode 与 Xcode、Shell 环境（rc 文件）、CAD 等专业工具无缝衔接，是提升垂直场景渗透率的关键诉求。

- **明确定义的工作区与持久化**：用户期望会话能真实持久化，且文件/目录操作的入口（如打开资源管理器）应更直观，减少“助手说可恢复但实际不行”的信息落差。

</details>