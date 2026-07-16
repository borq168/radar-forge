# AI CLI 工具社区动态日报 2026-07-16

> 生成时间: 2026-07-16 00:22 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区横向对比日报（2026-07-16）

## 1. 今日横向概览
今日四个 AI 编程 CLI/ 桌面工具均有版本或社区活跃更新：**Claude Code** 发布 v2.1.211，重点解决子代理输出可见性与权限预览安全问题，社区多账户管理诉求持续升温；**OpenAI Codex** 连续推送三个 Rust 侧 alpha 版本，issues 区以 Windows 崩溃和多代理模型配置为焦点；**Kimi Code** 发布 patch 版 v0.24.2，通过 50 个 PR 集中修复 CLI 静默退出、认证绕过、模型兼容等关键缺陷；**OpenCode** 发布 v1.18.2，限制子代理嵌套深度，并因新标签布局引发大量 UI 讨论，上下文溢出与压缩相关问题被集中修补。

## 2. 各工具活跃度对比
| 工具 | 今日 Issues 更新 | 今日 PR 更新 | 版本发布 |
|------|-----------------|-------------|---------|
| Claude Code | 10 条精选热点（总量未公开） | 4 条（全部列出） | v2.1.211 |
| OpenAI Codex | 50 条更新 | 43 条更新 | rust-v0.145.0-alpha.12/.13/.14（无详细说明） |
| Kimi Code | 6 条新 issue（3 closed + 3 open） | 50 条更新 | v0.24.2 |
| OpenCode | 10 条精选热点（总量未公开） | 10 条精选（总量未公开） | v1.18.2 |

> 注：部分工具未公开全部更新数量，表格仅记录可获取的明确数据。

## 3. 共同出现的功能方向
多个工具社区今日出现若干相同的需求或修复方向：

- **子代理 / 多代理控制与成本**
  - **Claude Code**：agent fan‑out 导致海量 token 消耗、后台代理虚假停滞、嵌套代理通信失败。
  - **OpenAI Codex**：GPT‑5.6 Sol 无法为 subagent 单独指定模型；subagent 分页历史保留 PR。
  - **Kimi Code**：后台子代理面板行去重、会话状态由 Agent 活动衍生。
  - **OpenCode**：默认禁止子代理启动嵌套子代理，增加 `subagent_depth` 限制；子代理结果导致的溢出检测修复。

- **上下文溢出与自动压缩缺陷**
  - **Claude Code**：自动精简（compaction）丢弃技能信息，长会话中功能丢失。
  - **OpenAI Codex**：虽未直接以 issue 出现，但 PR 侧保留了分页历史、响应缓冲等预防性优化。
  - **OpenCode**：压缩检查因首步 token 超标、忽略大型工具输出、大请求绕过压缩等问题集中暴露并修复，相关 issue 多达 4 条以上。

- **权限与安全**
  - **Claude Code**：修复权限预览中 Unicode 双向覆盖、零宽字符等安全问题。
  - **Kimi Code**：修复 Kap‑server 认证绕过（URL 编码绕过 Bearer 认证）。
  - **OpenCode**：修正 WebFetch “始终允许”作用域过大问题，防止意外授权所有 URL。

- **IDE / 编辑器集成与 UI 稳定性**
  - **Claude Code**：VS Code 扩展忽略 `remoteControlAtStartup`、Vim 模式下 Esc 清空提示。
  - **OpenAI Codex**：大量 Windows 桌面端崩溃、卡顿、沙箱 ACL 问题。
  - **Kimi Code**：VS Code 插件不兼容新版 Kimi Code、暗色主题按钮可见性。
  - **OpenCode**：新水平标签布局导致标题截断、Agent 切换按钮消失、侧边栏丢失。

- **会话可见性与状态管理**
  - **Claude Code**：fork/resume 冲突、无实例身份标识，用户无法追踪会话。
  - **OpenAI Codex**：远程 SSH 会话聊天历史消失、符号链接路径导致记录丢失。
  - **Kimi Code**：中断后上下文保留 PR、会话状态从 Agent 活动衍生。
  - **OpenCode**：自动生成会话标题需求、Prompt 跨会话泄漏担忧、标签标题截断。

## 4. 差异化定位分析
- **Claude Code**：深耕 **多账户工作流**（呼声最高，657 👍）与 **远程控制 / VS Code 深度集成**；agent 费用与调度管控是用户核心关切。侧重于中大型企业和顾问型用户。
- **OpenAI Codex**：主打 **多代理与自定义模型接入**，Rust 侧持续迭代底层；但 **Windows 桌面端质量**成为最大短板，大量性能与权限问题占据反馈主导。目标用户偏向使用 OpenAI 生态且对扩展性要求高的开发者。
- **Kimi Code**：以 **快速修复与技能系统** 见长，单日 50 PR 体现极高的响应速度；聚焦 CLI/Web 双模、轻量级 agent 能力，插件与外部模型兼容是近期攻坚方向。适合对轻量和本土化有需求的个人/小团队。
- **OpenCode**：重心在 **开源桌面客户端 UI/UX**（标签、面板、快捷键）与 **插件/MCP 生态**；上下文溢出和压缩策略的精细化调整表明其对长任务稳定性有较高追求。更偏向桌面客户端重度使用者与插件贡献者。

## 5. 社区活跃度记录
- **OpenAI Codex** 以 50 issues + 43 PRs 的明确数字领先，社区输入量和代码改动规模最大。
- **Kimi Code** 的 50 PRs 显示极强的工程吞吐，但新 issue 仅 6 条，可能偏向内部快速解决。
- **Claude Code** 与 **OpenCode** 未公开全量数据，但从热点 issue 的点赞数和评论量看，Claude Code 在多账户议题上积累了显著的用户声量（657 👍），OpenCode 的 UI 争议也引发集中讨论，两者社区讨论密度高。

## 6. 有证据支撑的观察
1. **Agent 下级调度与成本控制已成为跨工具的共性痛点**
   四个工具今日均出现与子代理 / 多代理相关的缺陷报告或修复（fan‑out token 暴涨、子代理模型不可配、嵌套控制、后台停滞），说明 agent 编排的复杂度和资源消耗正在从高级功能转化为日常使用的主要摩擦点。

2. **上下文溢出与压缩机制仍不成熟，影响长任务可靠性**
   Claude Code、OpenCode 均出现 compaction 丢失信息或溢出检测失败的问题；OpenCode 更在短时间内修复了多个 token 溢出相关的计算时间差漏洞，反映出当前工具在上下文管理上的护城河尚未建立，多个项目仍在补课。

3. **安全修复密集出现，身份认证与权限滥用被重视**
   今日 Claude Code（Unicode 安全渲染）、Kimi Code（认证绕过）、OpenCode（WebFetch 权限过大）均包含安全相关修复，暗示随着 Agent 自主操作能力增强，攻击面也在扩大，各维护者正在主动收敛。

4. **桌面端跨平台体验一致性普遍不足**
   OpenAI Codex 的 Windows 端问题几乎统治了 issue 列表，Claude Code 的 Windows 拼写检查、OpenCode 的 Linux 侧边栏丢失与新 UI 争议，表明非 macOS 或非 CLI 用户的体验仍是工具稳定性的薄弱环节。

5. **插件 / MCP / 自定义模型互操作浮现技术分歧**
   OpenAI Codex 因 MCP 工具使用专有 `namespace` 包装被社区批评兼容性差，Kimi Code 的自定义模型降级和 OpenCode 的动态工具注册则试图保持开放，不同工具的协议选择正在影响其生态可扩展性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 — 2026-07-16

## 今日更新概览
今日发布 **v2.1.211** 版本，新增 `--forward-subagent-text` 输出能力并修复了权限预览中的 Unicode 安全问题。社区讨论高度活跃，最热议题“多账户管理”已积累 131 条评论与 657 个 👍；大量反馈围绕 Agent 架构的稳定性和费用控制、VS Code 集成、以及跨平台认证问题展开。PR 侧则出现一个全新的质量流水线插件和若干工具链修复。

---

## 版本发布
**v2.1.211**
- 新增 `--forward-subagent-text` flag 及环境变量 `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT`，允许在 `stream-json` 输出中包含子代理的文本和思维过程，方便调试与日志分析。
- 修复权限预览传递给聊天渠道时未正确处理双向覆盖（bidi-override）、零宽字符和相似字形的安全问题，提升信息展示的安全性。

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.211

---

## 社区热点 Issues（10 条精选）

### 1. 多账户管理与快速切换（#18435）
**开放 · 131 评论 · 657 👍**
桌面版用户强烈要求支持多个 Claude 账户的配置和快速切换，当前只能单账户使用严重影响多项目/多客户场景。呼声极高，已持续讨论半年。
🔗 https://github.com/anthropics/claude-code/issues/18435

### 2. 个人仓库在 Web 端不可见（#18467）
**开放 · 25 评论 · 65 👍**
安装 Claude GitHub App 后，个人拥有的仓库无法在 `claude.ai/code` 显示，仅组织仓库可用。影响大量个人开发者使用 Web IDE 功能。
🔗 https://github.com/anthropics/claude-code/issues/18467

### 3. Remote Control 模式下 MCP 权限弹窗不出现（#60385）
**已关闭（已修复） · 20 评论**
使用 `--remote-control` 驱动时，某些 MCP 工具的权限审批对话框不会在 Web UI 渲染，导致本地 TUI 被卡住，直到手动干预。该问题已关闭，修复给远程协作体验带来重要改善。
🔗 https://github.com/anthropics/claude-code/issues/60385

### 4. VS Code 扩展忽略 `remoteControlAtStartup`（#62149）
**开放 · 8 评论 · 5 👍**
VS Code 扩展启动时不尊重 `remoteControlAtStartup` 设置，此为第三次提交（此前被自动 dup-bot 误关闭），用户希望尽快修复以支持远程控制工作流。
🔗 https://github.com/anthropics/claude-code/issues/62149

### 5. Agent fan-out 导致海量 token 消耗（#77834）
**开放 · 2 评论 · 0 👍**
每个子任务启动时支付约 47K 未缓存 token，形成数百万 token 用量。这是新报问题，反映 Agent 编排的成本控制缺陷。
🔗 https://github.com/anthropics/claude-code/issues/77834

### 6. 会话实例不可见——“穿大衣的孩子们”（#77463）
**开放 · 2 评论 · 0 👍**
多个会话间 fork/resume 出现分歧、陈旧写入冲突、无实例身份标识，导致用户无法追踪和管理当前会话状态。问题深刻触及会话治理的缺失。
🔗 https://github.com/anthropics/claude-code/issues/77463

### 7. Vim 模式下 Esc 键清空 agent 屏提示（#69181）
**开放 · 2 评论 · 5 👍**
Vim 模式启用后，在 agent 界面按 Esc 本应切换模式却清空了整个提示文本，严重影响 Vim 用户的操作流。
🔗 https://github.com/anthropics/claude-code/issues/69181

### 8. 自动精简（compaction）导致技能信息丢失（#74990）
**开放 · 2 评论 · 1 👍**
`/compact` 或自动压缩会丢弃“可用技能”系统提示，`/reload-skills` 报告“无变化”，导致技能在长会话中丢失，影响功能可用性。
🔗 https://github.com/anthropics/claude-code/issues/74990

### 9. Windows 下拼写检查无法关闭（#58693）
**开放 · 7 评论 · 3 👍**
Windows 桌面版强制拼写检查，使输入文本难以阅读且无法禁用，影响使用体验。
🔗 https://github.com/anthropics/claude-code/issues/58693

### 10. 后台代理“影子等待”虚假停滞（#74317）
**开放 · 1 评论 · 0 👍**
子代理声称正在“等待后台代理完成”，但实际上并未生成任何后台任务，导致流程卡死。此问题与嵌套代理通信（#77950）高度相关。
🔗 https://github.com/anthropics/claude-code/issues/74317

---

## 重要 PR 进展

由于过去 24 小时仅有 4 个 PR 更新，全部列出：

### 1. 新增代码质量流水线插件（#77916）
**作者：RonMizrahi**
引入一个技能型插件 `code-quality-pipeline`，定义了“文件级检查”和“合并前检查”两道质量门，将代码审查流程结构化。
🔗 https://github.com/anthropics/claude-code/pull/77916

### 2. 添加官方市场限制示例设置（#77709）
**作者：hangnality**
新增 `settings-official-marketplace-only.json` 示例，演示如何通过 `strictKnownMarketplaces` 将插件市场限制为 Anthropic 官方市场，增强安全性配置参考。
🔗 https://github.com/anthropics/claude-code/pull/77709

### 3. 修复插件设置校验脚本的假阳性（#77705）
**作者：andyleeboo**
修复 `validate-settings.sh` 在文件缺少 frontmatter 时仍然通过检查的错误，避免没有 YAML 头部的设置文件被误判为有效。
🔗 https://github.com/anthropics/claude-code/pull/77705

### 4. claude-compare 工具提交（#77613）
**作者：1napz**
提交一个名为 `claude-compare` 的新工具（暂无详细描述），可能用于比较 Claude 输出或配置。
🔗 https://github.com/anthropics/claude-code/pull/77613

---

## 功能需求归类（来自 Issues 的高频方向）

- **IDE 与编辑器集成**：多账户切换、VS Code 扩展的 session 管理、远程控制启动行为、Vim 模式兼容性。
- **Agent 架构与成本**：后台代理停滞、fan-out token 消耗、嵌套代理通信失败、子代理虚假停滞；用户对 Agent 调度的稳定性和费用透明性有强烈诉求。
- **权限与安全**：MCP 权限弹窗丢失、Unicode 安全字符处理；远程控制场景下的权限流改善。
- **会话与状态管理**：多实例身份识别、fork/resume 冲突、技能丢失等会话持久性问题。
- **跨平台与网络**：Android + Codespaces 认证问题、ECONNRESET 连接错误、Windows 拼写检查强制开启等。
- **配置同步与插件生态**：跨机器同步 `~/.claude/` 设置、插件市场安全限制、热重载自定义 agent 等。

---

## 开发者关注点

1. **Agent 编排可靠性**：子代理停滞、虚假等待、fan-out token 暴增等问题集中爆发，直接冲击生产工作流和预算控制，成为当前最尖锐的痛点。
2. **会话可见性与治理**：用户无法感知会话实例、重名、冲突写入，导致“烧钱还不知情”，要求提供实例标识和冲突提示。
3. **IDE 体验碎片化**：Windows、macOS、Linux 各平台问题差异大，VS Code 扩展对远程控制和 session 删除确认等细节处理不足，体验一致性待提升。
4. **成本监控与限流误导**：部分用户看到“使用限额已到”但实际用量很低，引发困惑和对计费的信任危机。
5. **社区 voices 声音**：多账户管理功能呼声最高（657 赞），说明大量专业用户正管理多个客户或组织，迫切需要官方支持。

---

*注：以上内容仅基于 24 小时内更新的公开数据，不代表官方立场或长期趋势。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-07-16 OpenAI Codex 社区动态日报

## 今日更新概览
今天 Codex 社区发布了三个 Rust 侧 alpha 版本（0.145.0-alpha.12 ~ .14），但未附带详细变更说明。Issues 区过去 24 小时内更新了 50 条，Pull Requests 区更新了 43 条，活跃度很高。反馈焦点集中在 **Windows 桌面应用崩溃与性能**、**GPT-5.6 Sol 子代理模型配置缺陷**、**远程 SSH 会话丢失** 以及 **MCP 自定义后端兼容性** 等问题上。

## 版本发布
- **rust-v0.145.0-alpha.14** – 无详细 release note
- **rust-v0.145.0-alpha.13** – 同上
- **rust-v0.145.0-alpha.12** – 同上

> 三个版本均为 Rust 侧连续 alpha 发布，猜测为小版本迭代或内部依赖更新，暂无公开功能说明。

## 社区热点 Issues (10 条)

1. **#31814 [CLOSED] GPT-5.6 Sol 无法为 subagent 指定模型**
   - 影响场景：MultiAgent V2 使用时，所有子代理被强制使用 Sol 实例，用户无法单独配置。
   - 社区反应：79 条评论，👍 153，热度极高。
   🔗 https://github.com/openai/codex/issues/31814

2. **#28969 [OPEN] 希望增加设置禁用 60 秒自动回答问题**
   - CLI 在提问后若用户未及时回应，会自动使用默认答案，部分场景下造成困扰。
   - 36 评论，👍 124，呼声强烈。
   🔗 https://github.com/openai/codex/issues/28969

3. **#33381 [OPEN] Windows ARM64 桌面应用启动后约 16 秒崩溃**
   - 现象：窗口出现后应用闪退，Crashpad 持续生成 minidump；`serialport` 原生模块延迟加载失败。
   - 35 评论，👍 24，新近严重回归。
   🔗 https://github.com/openai/codex/issues/33381

4. **#33375 [OPEN] Windows 应用因 serialport.node 重复加载失败导致 UI 严重卡顿**
   - 应用整体交互变得极其迟缓，影响正常使用。
   - 21 评论，👍 13。
   🔗 https://github.com/openai/codex/issues/33375

5. **#23198 [OPEN] Windows 桌面应用整体运行极其缓慢**
   - 即使机器负载正常，Codex 自身操作响应很慢。已存在多日，至今未解决。
   - 16 评论，👍 44。
   🔗 https://github.com/openai/codex/issues/23198

6. **#30527 [OPEN] Windows Defender 行为监控导致 Codex 高 CPU 占用**
   - 最近一次更新后 Defender 持续扫描 Codex 进程，CPU 飙升。
   - 13 评论，👍 11。
   🔗 https://github.com/openai/codex/issues/30527

7. **#13036 [OPEN] 支持同时显示多个聊天会话**
   - 当前 macOS 应用只能激活单个聊天线程，多任务或使用多代理工作流时受限。
   - 10 评论，👍 6。
   🔗 https://github.com/openai/codex/issues/13036

8. **#23186 [OPEN] 自定义 / 本地模型提供者无法使用 MCP 工具**
   - Codex 将 MCP 服务端工具用 `type:"namespace"` 包装，多数后端无法解析该专有扩展。
   - 2 评论，👍 14，对自定义模型集成是重大障碍。
   🔗 https://github.com/openai/codex/issues/23186

9. **#32880 [OPEN] Windows 桌面回归：沙箱 ACL 阻止 Git 写入 linked worktrees**
   - 更新后 Codex 无法执行自主 Git 操作（如 merge、commit），workspace-write 被 DENY。
   - 5 评论，👍 0，虽热度低但影响核心功能。
   🔗 https://github.com/openai/codex/issues/32880

10. **#33450 [OPEN] Windows 应用每秒生成 12–13 个 git.exe 进程并重复创建空 .git 目录**
    - 导致系统资源浪费，可能加剧性能问题。为新提 issue，正在追踪。
    - 1 评论，👍 1。
    🔗 https://github.com/openai/codex/issues/33450

## 重要 PR 进展 (10 条)

1. **#33444 [CLOSED] 添加外部代理记忆迁移**
   - 支持将项目记忆 Markdown 文件迁移至 Codex 记忆扩展工作区，并保留项目作用域。
   🔗 https://github.com/openai/codex/pull/33444

2. **#33426 [CLOSED] 支持导入 Cursor 设置**
   - 可在 `/import` 流程中检测并导入 Cursor 的沙箱权限、MCP 服务器、项目指令、插件、命令及近期聊天。
   🔗 https://github.com/openai/codex/pull/33426

3. **#33425 [CLOSED] 通过 world state 刷新主机技能目录**
   - 主机技能变化后，后续 tick 可获取更新目录，而无需每轮重复注入完整目录。
   🔗 https://github.com/openai/codex/pull/33425

4. **#33423 [CLOSED] 并发加载 executor 插件声明**
   - MCP 服务端和 App 连接器声明文件改为并发读取，减少远程环境的启动延迟。
   🔗 https://github.com/openai/codex/pull/33423

5. **#33427 [CLOSED] 将延迟环境的能力根传递至 MCP**
   - 允许 deferred environment 在就绪时提供 capability roots，并通过验证、限制后合并至 MCP 上下文。
   🔗 https://github.com/openai/codex/pull/33427

6. **#33432 [CLOSED] 保留生成子代理的分页历史**
   - 当父代理开启分页历史时，子代理将继承该模式，并正确保留模型上下文与回滚前缀。
   🔗 https://github.com/openai/codex/pull/33432

7. **#33445 [CLOSED] 为网络代理选择提升的 Windows 沙箱**
   - 修复防火墙策略与用户登录沙箱身份绑定后，代理强制命令需要提升后端的问题。
   🔗 https://github.com/openai/codex/pull/33445

8. **#33441 [CLOSED] 审批场景后关闭 Codex 线程**
   - 确保每个审批场景的 Codex 线程正确关闭并返回验证结果，避免资源泄漏。
   🔗 https://github.com/openai/codex/pull/33441

9. **#29500 [OPEN] 支持按权限范围限定的 exec 规则**
   - exec 策略前缀规则将感知当前权限配置文件，使同一命令在不同 profile 下可拥有不同的审批策略。
   🔗 https://github.com/openai/codex/pull/29500

10. **#31781 [OPEN] 为 executor 提供绑定的 HTTP 响应缓冲**
    - 限制远程 exec-server 可发送的响应数据量，防止滥用 JSON-RPC 消息限制导致 app-server 内存膨胀。
    🔗 https://github.com/openai/codex/pull/31781

## 功能需求归类
从近期 Issues 中可观察到以下反复提到的方向（不构成路线图预测）：
- **Windows 稳定性与性能**：多起崩溃、卡顿、CPU 飙高、沙箱权限问题，集中在桌面应用。
- **多聊天视图**：用户期望在桌面应用中同时并排查看/操作多个聊天线程。
- **远程开发体验**：SSH 项目会话丢失、密钥认证后仍需交互登录、symlink 路径导致聊天记录消失。
- **自定义模型 & MCP 互操作**：非 OpenAI 后端无法解析 `namespace` 包装的工具定义，MCP 不可用。
- **子代理 / 多代理可控性**：希望为 subagent 指定不同模型，而非被父代理强制绑定。
- **自动行为控制**：希望提供开关关闭“60 秒自动解答”等自动化决策。
- **沙箱 / 权限粒度**：exec 规则需结合权限配置文件，避免全局生效。

## 开发者关注点
- **Windows 客户端是当前最大痛点**，ARM64 设备闪退、x64 下 UI 严重卡顿、Defender 干扰、Git 权限异常等问题集中爆发，严重影响日常使用。
- **远程 SSH 会话的健壮性不足**，聊天历史频繁消失、认证失败导致无法连接，远程开发场景体验不完整。
- **自定义模型接入受阻**，MCP 工具包装格式专有化导致绝大多数第三方后端无法配合，社区期望更标准的工具调用协议。
- **多 Agent 配置僵化**，用户无法细粒度控制子代理模型，限制了高级编排场景。
- **自动化行为缺少用户可控开关**，尤其在 CLI 问答场景中，强制自动响应引发了不少工作流干扰。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 | 2026-07-16

## 今日更新概览
过去 24 小时，Kimi Code 发布了 patch 版本 0.24.2，主要对齐打印模式运行生命周期。社区共产生 3 条新 Closed Issue 和 3 条 Open Issue，同时有 50 个 PR 更新，其中多个修复聚焦于 CLI 静默退出、模型能力对齐、Web 端显示异常及权限绕过等关键问题。

## 版本发布
**v0.24.2**
- [PR #1704](https://github.com/MoonshotAI/kimi-code/pull/1704): 统一各引擎的 `print_mode` 运行生命周期，确保 `print_background_m` 等行为一致。

## 社区热点 Issues
1. **[项目级 Skill 未自动加载]** [#1653](https://github.com/MoonshotAI/kimi-code/issues/1653) (Closed)
   项目目录下 `.kimi/skills/` 定义的 Skill 无法出现在可用技能列表，影响本地自定义工作流，0.23.6 版本在 Windows 11 上复现。

2. **[Web 刷新后 Goal 状态丢失]** [#1584](https://github.com/MoonshotAI/kimi-code/issues/1584) (Closed)
   Web 界面刷新后 goal 状态清空，需等待下次更新才能恢复，影响长时间使用体验。

3. **[无描述 Bug 直接关闭]** [#1726](https://github.com/MoonshotAI/kimi-code/issues/1726) (Closed)
   标题仅标注 “closed” 的 Bug 单，无详情，可能在排查中快速关闭。

4. **[TUI 支持单 prompt 内联多 Skill 激活]** [#1736](https://github.com/MoonshotAI/kimi-code/issues/1736) (Open)
   当前仅 prompt 开头 `/skill:xxx` 格式生效，用户希望在长 prompt 中任意位置激活多个 Skill。

5. **[VS Code 插件兼容性]** [#1725](https://github.com/MoonshotAI/kimi-code/issues/1725) (Open)
   用户反馈新版 Kimi Code (0.24.1) 无法兼容 VS Code 插件，期待官方维护。

6. **[暗色主题下批准按钮显示不清]** [#1721](https://github.com/MoonshotAI/kimi-code/issues/1721) (Open)
   在黑色主题或暗色背景中，批准按钮文本几乎看不见，影响可操作性。

## 重要 PR 进展
1. **[修复 CLI 未捕获异常的静默退出]** [#1758](https://github.com/MoonshotAI/kimi-code/pull/1758) (Closed)
   用户遇到 CLI 无日志、无报错突然退出，修复两处未处理 rejection 导致的静默退出向量。

2. **[保留崩溃错误诊断日志]** [#1757](https://github.com/MoonshotAI/kimi-code/pull/1757) (Closed)
   CLI 异常退出时立即进程终止导致错误信息丢失，修复后确保诊断日志被持久化。

3. **[对齐 Anthropic 兼容模型能力]** [#1746](https://github.com/MoonshotAI/kimi-code/pull/1746) (Closed)
   自定义名称的 Anthropic 兼容模型被错误降级，修复模型切换和会话恢复中的能力对齐问题。

4. **[Web 端模型请求失败诊断]** [#1756](https://github.com/MoonshotAI/kimi-code/pull/1756) (Closed)
   Web 界面请求失败仅显示模糊文本，现在增加错误码、HTTP 状态等详细信息。

5. **[Web 端后台子代理行去重]** [#1754](https://github.com/MoonshotAI/kimi-code/pull/1754) (Closed)
   Agent 后台运行时代理面板会重复显示相同代理行，修复流式计算时的渲染去重。

6. **[修复 Kap‑server 认证绕过]** [#1753](https://github.com/MoonshotAI/kimi-code/pull/1753) (Closed)
   路由校验未处理 URL 编码，可通过百分号编码路径绕过 Bearer 认证，现已修复。

7. **[支持任意文件类型附件及远程 CSP 修复]** [#1731](https://github.com/MoonshotAI/kimi-code/pull/1731) (Closed)
   远程访问 Kimi 服务器时无法附加非文本文件，同时修复非 loopback 绑定下的 CSP 策略。

8. **[Web 确认对话框支持回车键]** [#1744](https://github.com/MoonshotAI/kimi-code/pull/1744) (Closed)
   模态确认框无法用 Enter 键确认，且异步操作处理不当，现已完善。

9. **[保留中断对话上下文]** [#1739](https://github.com/MoonshotAI/kimi-code/pull/1739) (Open)
   模型错误或用户中断后，后续提示丢失对话边界，修复后保留未完成轮次的上下文。

10. **[会话状态从 Agent 活动衍生]** [#1751](https://github.com/MoonshotAI/kimi-code/pull/1751) (Closed)
    重构 session 状态机，从 Agent 实际活动推导 busy 状态，解决重复流与会话状态回归问题。

## 功能需求归类
- **Skill 系统增强**
  项目级 Skill 自动加载 (#1653)、多 Skill 内联激活 (#1736) 反映出用户对本地 Skill 无缝集成的强烈需求。

- **IDE / 插件兼容性**
  VS Code 插件兼容性问题 (#1725) 成为拦路石，用户期待新旧版本插件机制一致。

- **Web 体验优化**
  Goal 状态持久化 (#1584)、按钮视觉可访问性 (#1721)、远程文件上传支持 (#1731) 共同指向 Web 端交互完善。

- **CLI 健壮性**
  多起静默退出 (#1758, #1757) 和未处理异常日志缺失，表明开发者对 CLI 稳定性和可观测性有较高期待。

## 开发者关注点
- **静默崩溃排查困难**：CLI 无任何日志退出让调试无从下手，修复后诊断能力得到提升。
- **模型兼容与认证**：第三方模型能力降级和权限绕过修复说明部署灵活性依赖框架的精准适配。
- **Web 端远程场景适配**：附件类型限制、CSP 错误和对话框交互等问题在远程服务器访问时被放大。
- **Skill 工作流阻断**：项目级技能无法识别，直接中断团队标准化流程。
- **插件生态延续**：旧有 VS Code 插件在新版本失效，反映出平台过渡期开发者对工具链连续性的需求。

---

*以上动态基于 [github.com/MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code) 公开数据整理，所有链接指向对应的 Issue 或 PR。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-16

## 今日更新概览
过去 24 小时，OpenCode 发布了 v1.18.2 修复版本，主要解决子代理嵌套与模型推理深度问题，并为桌面端增加新标签快捷键。社区 Issue 围绕新版 UI 变更产生大量讨论，尤其是标签布局、模式切换按钮消失等问题；同时多个长期存在的上下文溢出与自动压缩缺陷被集中跟进。PR 侧涌现出会话溢出检测时间差修复、WebFetch 权限范围修正、图像规范化等针对性改进。

## 版本发布
**v1.18.2**
- **Core：** 默认禁止子代理启动嵌套子代理，增加可配置的 `subagent_depth` 限制；改进 Meta 模型的默认推理深度。
- **Desktop：** 新增 `Mod+N` 快捷键用于打开新标签页。

## 社区热点 Issues（前 10）

1. **\[FEATURE\] 暴露 GitHub Copilot “Auto” 选项到模型选择器**
   [#25239](https://github.com/anomalyco/opencode/issues/25239) | 19 💬 | 👍 14
   用户希望模型下拉菜单中直接提供 Copilot 的自动选择能力，避免手动切换。该需求长期未决，近期讨论再次升温。

2. **桌面版新标签布局导致标题无法完整显示**
   [#36936](https://github.com/anomalyco/opencode/issues/36936) | 14 💬 | 👍 11
   升级至 v1.18 后，水平标签页标题截断严重，无法辨识会话。用户普遍认为这是回归，降级至 1.17 后恢复正常。

3. **桌面 v1.18.1 新布局隐藏了 Agent（Plan/Build）切换 UI**
   [#36997](https://github.com/anomalyco/opencode/issues/36997) | 9 💬 | 👍 2
   启用 `newLayoutDesigns: true` 后，Plan/Build 模式开关及指示器消失，用户无法判断或切换代理模式。

4. **\[FEATURE\] 通过 ACP 协议支持 Claude**
   [#24038](https://github.com/anomalyco/opencode/issues/24038) (已关闭) | 6 💬 | 👍 6
   请求利用 Agent Client Protocol 集成 Claude Code 订阅，提升多模型协作体验。该 Issue 已关闭，但社区热情很高。

5. **Plan/Build 切换按钮消失（多语言反馈）**
   [#37158](https://github.com/anomalyco/opencode/issues/37158) (已关闭) | 5 💬
   多个用户报告模式切换按钮失踪，团队随后确认并关闭相关问题，推测已在 v1.18.2 中修复。

6. **`opencode run` 在压缩模型 token 超限后意外退出**
   [#13946](https://github.com/anomalyco/opencode/issues/13946) (已关闭) | 4 💬
   非交互模式下，自动压缩后因溢出阈值计算错误导致进程 clean exit，影响 CI/CD 流水线。

7. **压缩溢出检查未计入大型工具输出，导致上下文超限**
   [#10634](https://github.com/anomalyco/opencode/issues/10634) (已关闭) | 4 💬 | 👍 6
   子代理返回海量结果时，finish-step 的溢出检查忽略累积上下文，仍可能触发 413 等错误，已与 #37194 联动修复。

8. **V2: Fable/Zen 请求体积绕过自动压缩**
   [#35013](https://github.com/anomalyco/opencode/issues/35013) (已关闭) | 4 💬
   大请求在达到 token 限制前就超过字节数封套，导致压缩永不触发，V2 中被修复。

9. **\[FEATURE\] 垂直标签页**
   [#36942](https://github.com/anomalyco/opencode/issues/36942) | 4 💬 | 👍 5
   用户要求恢复或提供垂直标签选项，以容纳更多会话标题，当前水平布局让多会话管理困难。

10. **桌面 Beta 版侧边栏丢失**
    [#28971](https://github.com/anomalyco/opencode/issues/28971) | 4 💬
     Linux 用户报告升级后侧边栏消失，切换命令无效，提示新布局可能未稳定。

## 重要 PR 进展（前 10）

1. **修复 Nix 桌面集成**
   [#37197](https://github.com/anomalyco/opencode/pull/37197) | 由 @jerome-benoit 提交
   恢复 Linux 下 Nix 包的桌面入口、图标等整合，解决因路径变更导致的启动问题。

2. **修正 WebFetch “始终允许”的作用域**
   [#37182](https://github.com/anomalyco/opencode/pull/37182) (已合并) | 由 @mgajda 提交
   将 `always-allow` 从全域名通配符缩小至当前 domain，防止意外授权所有 URL；附带测试用例。

3. **解决会话溢出检测的时间差漏洞**
   [#37194](https://github.com/anomalyco/opencode/pull/37194) | 由 @johncoffee715 提交
   修复 `isOverflow()` 仅检查上一步 token、输出预留上限 20K、缺少工具输出后检查等问题，大幅降低半路溢出风险。

4. **统一规范化工具与附件图像**
   [#37141](https://github.com/anomalyco/opencode/pull/37141) | 由 @rekram1-node 提交
   将图像缩放从 `read` 工具移到最终组装阶段，避免插件、MCP 等非读图路径产生未压缩内联 base64，减少请求体积。

5. **修复 Cloudflare Workers AI 混合消息内容类型**
   [#36850](https://github.com/anomalyco/opencode/pull/36850) | 由 @ulises-jeremias 提交
   归一化不一致的 `content` 类型，防止 Cloudflare 端拒绝请求，修复 #30381。

6. **支持外部动态 Effect 工具注册**
   [#37192](https://github.com/anomalyco/opencode/pull/37192) | 由 @kitlangton 提交
   允许 V2 插件不依赖内部 `Tool.make` 即可注册动态工具，解耦插件开发体验。

7. **处理通知服务器未就绪时的初始化崩溃**
   [#37190](https://github.com/anomalyco/opencode/pull/37190) | 由 @Anlmator 提交
   针对 WSL 环境下通知服务连接延迟，添加 fallback 状态，修复 #37171 的桌面崩溃。

8. **修复缓存写入令牌计费错误**
   [#36752](https://github.com/anomalyco/opencode/pull/36752) | 由 @lewislf 提交
   在 OpenAI 兼容网关下，cache.write 被误报为 0，现改为从原始用量读取，避免计费错误。

9. **为 MCP 工具展示运行进度**
   [#32480](https://github.com/anomalyco/opencode/pull/32480) (已合并) | 由 @Nomadcxx 提交
   将 MCP 进度通知映射到 OpenCode 运行中工具的进度显示，改善长时间工具的用户感知。

10. **MCP 资源列表变更事件发布**
    [#32478](https://github.com/anomalyco/opencode/pull/32478) (已合并) | 由 @Nomadcxx 提交
   服务器资源变更时主动通知，打通 MCP 资源订阅的基础能力。

## 功能需求归类

- **桌面 UI/UX 改进**：垂直标签（#36942）、标签标题显示（#36936）、侧边栏恢复（#28971）、新布局模式切换丢失（#36997/37158）。
- **会话与上下文管理**：自动压缩机制缺陷集中暴露（#10634/13946/35013/17340/32656），用户对溢出处理和子代理深度控制有强需求。
- **模型与集成**：Copilot Auto 选项（#25239）、ACP 协议支持 Claude（#24038）、模型输出乱码（#37127/37139）。
- **编辑器与文件操作**：手动文件编辑器（#26970）、图片附件显示（#21227）。
- **多会话体验**：自动生成会话标题（#30926）、防止 Prompt 跨会话泄漏（#35587）、按会话选择 MCP 服务器（#37168）。
- **国际化与无障碍**：IME 自动切换（#37167）、快捷键失灵（#37165）。

## 开发者关注点

- **新 UI 不稳定与可用性问题**：多数桌面用户对强制水平标签、模式切换按钮消失和侧边栏丢失表示不满，急需回退或完善方案。
- **上下文溢出处理频频爆雷**：多个长时间运行的会话或大型工具输出导致压缩失效、进而出错或静默退出，提示需要更激进的预算预留和实时溢出检测。
- **安全与权限边界**：AI 可能修改 `opencode.json` 提权（#37155），WebFetch “始终允许” 权限过大被迅速修复，表明安全敏感性在提高。
- **多模型协同与路由**：社区希望灵活选用 Copilot/Claude/OpenRouter，并在运行时按会话、按 MCP 动态配置，当前工具链尚不能完全满足。
- **WSL 及跨平台稳定性**：WSL 桌面重启崩溃（#37171）已得到快速修复，跨环境健壮性仍是焦点。

---

*注：以上链接均指向 [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) 对应条目。*

</details>