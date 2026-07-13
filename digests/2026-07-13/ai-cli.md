# AI CLI 工具社区动态日报 2026-07-13

> 生成时间: 2026-07-13 00:24 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区横向对比报告 | 2026-07-13

## 1. 今日横向概览
今日四个工具均未发布重大版本，社区活动集中在问题反馈与修复。Claude Code 和 OpenAI Codex 的 Issue 讨论均达到 50 条，Claude Code 主要因权限系统在 IDE 与终端的表现不一致、大上下文下 Advisor 工具不可用等引发热议；Codex 社区则被 GPT-5.6 系列多代理模型的强制行为及 Windows 桌面端稳定性问题所主导。Kimi Code 虽 Issue 新增不多，但 PR 高达 32 次更新并释出 v0.23.6 补丁，推进 i18n、agent‑core‑v2 落地等多项改进；OpenCode 未发布版本，但围绕 v2 配置加载、剪贴板失效、模型兼容性以及数据库膨胀等问题呈持续互动。

## 2. 各工具活跃度对比
| 工具 | 今日活跃 Issue 数 | 今日 PR 数（更新/合并） | 版本发布 |
|------|------------------|--------------------------|----------|
| Claude Code | 50（50 条活跃讨论） | 3（全部为修复性提交） | 无 |
| OpenAI Codex | 50（获新评论的活跃 Issue） | 3（含 TUI 增强、安全修复） | 无 |
| Kimi Code | 6 个新增 Issue | 32 次更新，7 个已合并 | v0.23.6（补丁） |
| OpenCode | 10+（精选 10 条） | 10+（精选 10 条） | 无（仅自动验证产物） |

## 3. 共同出现的功能方向
**多代理/模型控制与行为透明度**
Codex 的 GPT-5.6 Sol/Luna 强制启用 MultiAgent V2 且不允许指定子代理模型（#31814，#31097）；Claude Code 中 Advisor 工具在大上下文下变为 unavailable（#67609）；OpenCode 出现部分模型工具调用死循环（#3743）；Kimi Code 则通过 agent‑core‑v2 引擎重构，尝试从架构端提升可控性。多个社区同时表达了对代理行为更细粒度控制的需求。

**权限、安全策略与用户控制**
Claude Code 的 `.claude/settings.local.json` 在 IDE 扩展中被旁路（#15921）以及 Allow 规则加载不生效（#57132）；OpenCode 社区高票呼吁更安全的默认权限配置（#5076）；Codex 侧则提交了拒接主机 ChatGPT 认证令牌注入的安全 PR。工具在权限模型的可靠性与默认安全策略上存在共性挑战。

**跨平台体验（尤其是 Windows）**
Claude Code 出现 Windows 沙箱崩溃（#76094）及 Squirrel→MSIX 迁移后快捷方式残留（#76980）；Codex 有大量 Windows 11 卡顿/崩溃及远程控制失败问题（#20214，#30178等）；Kimi Code 的 Windows Git Bash 检测失败（#1579）；OpenCode 的新布局下 Plan/Build 模式切换在 Windows 上失效（#31972）。桌面端质量，尤其是 Windows 适配，为共需修复的主题。

**会话持久化与状态管理**
Claude Code 的会话压缩导致过时参数恢复并丢失最后用户消息（#50724）；Codex 的重连循环与远程项目不显示聊天记录；Kimi Code 的 Web 刷新后 goal 状态丢失（#1584）；OpenCode 的事件表无限制增长至 13GB（#33356）。会话一致性及资源释放是普遍暴露的弱点。

**CLI 交互与输出体验**
Claude Code 的硬换行问题获 51 👍（#43113）；Codex 的 `wait` 工具产生 token 浪费且 SQLite 锁竞争导致 TUI 冻结（#32640，#20213）；OpenCode 的剪贴板复制失效获百余关注（#4283）；Kimi Code 的 `kimi web` 默认后台化违背 CLI 惯例（#1560）。对终端渲染、资源使用和操作符惯性的优化期待在多个社区间重叠。

## 4. 差异化定位分析
- **Claude Code**
  侧重深度代码理解与项目感知（Advisor 工具），权限体系可精细配置并与 IDE 扩展联动，但当前在跨环境（终端/IDE）一致性、大上下文稳定性和桌面端质量上承受较大压力。目标用户是需要强代码分析和遵循安全合规控制的专业开发者。

- **OpenAI Codex**
  以 GPT-5.6 等最新模型为核心，多代理、远程会话、IDE 集成和桌面应用覆盖面广。今日特点在于被强制启用的多代理行为引发了开发者对可控性的担忧，且 Windows 平台体验短板明显。适合追求前沿模型能力、愿意在生态闭环内工作的开发者。

- **Kimi Code**
  重心在 Web UI、国际化与插件生态的开放，今天最明显的信号是 agent‑core‑v2 的落地和多语言支持，响应中文社区诉求。发布频率和 PR 合并量说明工程活跃，功能重心偏向 Web 化与低门槛使用。

- **OpenCode**
  开源、多模型兼容（OpenAI、Kimi、Ollama 等）和高度可配置的终端客户端，强调用户自控和成本管理（如 Zen 付费）。当前聚焦在 v2 配置加载的健壮性、终端基础交互以及数据库膨胀等底层问题，目标用户是偏好开源、需要自主掌控模型和提供商的 CLI 用户。

## 5. 社区活跃度记录
从今日数据看：
- **Issue 讨论热度**：Claude Code 与 OpenAI Codex 并列最高，各 50 条活跃 Issue，但 Claude Code 的评论和点赞数在多个问题上明显更集中（如 #43113 获 51 赞），讨论深度更高。
- **PR 提交与工程活跃度**：Kimi Code 以 32 次 PR 更新（7 个合并）和一次补丁发布明显领先，显示出持续的高速迭代。OpenCode 虽然数量不及 Kimi，但精选 10 条 PR 表明社区贡献保持稳定。Claude Code 和 Codex 的 PR 各仅 3 条，均为修复性改动，大规模功能合并暂未见行动。
- **版本发布**：仅 Kimi Code 发布了 v0.23.6 补丁，其他工具今日无正式产出。

整体上，Kimi Code 今日在持续集成和响应速度上更胜一筹；Claude Code 与 Codex 处于问题高发期，社区反馈踊跃但核心团队尚未有即时功能合并；OpenCode 维持平稳的项目维护节奏。

## 6. 有证据支撑的观察
1. **多代理架构的“黑盒”行为已成为跨工具的突出痛点**
   Codex 的 Sol/Luna 模型强制启用 MultiAgent V2 并限制用户配置子代理模型；Claude Code 的 Advisor 在高令牌负载下静默失效；OpenCode 报告的模型工具调用死循环——三者共同反映出当前多代理系统在透明度、可控性及复杂上下文下的稳定性不足，并非单一工具的问题。

2. **权限与配置的一致性模型正在多个工具中受到挑战**
   Claude Code 的 settings.local.json 在 IDE 被忽略、Codex 的多代理设置被模型元数据强制覆盖、OpenCode 的全局配置在子目录不加载，均暴露出用户施加的配置与控制意图在高阶特性面前被削弱。如何让配置可靠生效是今日多个社区的共性追问。

3. **Windows 平台的稳定性短板覆盖了所有工具**
   从 Claude Code 的沙箱崩溃、Codex 的卡顿与远程控制失败、Kimi Code 的 Git Bash 检测错误到 OpenCode 的 Plan 模式失效，表明 Windows 开发环境的兼容性与桌面端基础设施仍为所有 AI CLI 工具的薄弱地带，用户复现率与反馈力度均高。

4. **会话状态与存储管理出现系统性缺陷信号**
   会话压缩导致上下文丢失（Claude Code）、远程重连后状态不同步（Codex）、Web 刷新状态清退（Kimi Code）以及事件表膨胀至 13GB（OpenCode），共同指向会话持久化策略、存储压缩和一致性恢复机制在各工具中均未完备，影响长时间开发工作流的可持续性。

5. **终端输出与交互的打磨重新成为热点**
   Claude Code 的硬换行设计（51 赞）、Codex 的 `wait` 工具浪费 token 并导致 TUI 冻结、OpenCode 的剪贴板失效（逾百关注）——这些基础交互细节获得高票支持，说明在日常使用密度加大后，开发者对 CLI 渲染效率、操作体感的要求显著提升，推动工具重新审视“终端体验”的投入。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-13

## 今日更新概览
过去 24 小时内社区共跟踪到 50 个活跃 Issue 和 3 个 Pull Request，无新版本发布。讨论热度集中在权限系统对 `.claude/settings.local.json` 的遵守问题、`claude-fable-5` 大上下文下 Advisor 工具不可用、以及连续出现的模型安全/AUP 误判场景。此外，桌面端迁移导致的快捷方式残留、Windows 下沙箱崩溃等体验问题也开始浮现。

---

## 版本发布
今日无新版本。

---

## 社区热点 Issues（前 10）

1. **#15921** | VSCode 扩展：即使启用 `bypassPermissions`，`.claude/settings.local.json` 权限仍被忽略
   作者：@elliottgaryusa | 28💬 | 👍28
   Bash/Write/Edit 操作不尊重项目级 settings.local.json 中的权限配置，核心工具层权限模型在 IDE 环境中行为不一致。
   https://github.com/anthropics/claude-code/issues/15921

2. **#67609** | Advisor 工具在 `claude-fable-5` 上约 100K token 上下文后返回 "unavailable"
   作者：@mikeberlinworkshop | 20💬 | 👍38
   当对话长度超过 100K token 时 Advisor 功能完全失效，影响重度会话和大型项目分析场景。
   https://github.com/anthropics/claude-code/issues/67609

3. **#43113** | 请求添加标志以禁用硬换行，交由终端自动换行（Markdown 内容）
   作者：@jfdube | 10💬 | 👍51
   当前 Claude Code 在 Prose/Markdown 输出中频繁插入硬换行，破坏格式和可读性，用户希望实现“长行”渲染模式。
   https://github.com/anthropics/claude-code/issues/43113

4. **#57132** | `~/.claude/` 下的 Allow 规则显示已加载但不生效
   作者：@hwaterer | 9💬
   权限系统 UI 报告规则已加载，但实际执行时仍弹出确认请求，配置文件路径覆盖逻辑存在缺陷。
   https://github.com/anthropics/claude-code/issues/57132

5. **#52477** | 模型覆盖用户记忆中的明确代词，默认使用男性倾向
   作者：@raleighsedona | 8💬 | 👍2
   Claude 在用户设置明确性别代词后，仍然在生成内容中替换为 “he/him”，涉及记忆和模型输出行为的偏差。
   https://github.com/anthropics/claude-code/issues/52477

6. **#58215**（已关闭）| 代理视图不应自动完成会话，需手动归档
   作者：@jonathanlaniado | 7💬 | 👍3
   用户认为自动完成会话会丢失上下文，主张在工作流中引入明确的完成/归档动作。
   https://github.com/anthropics/claude-code/issues/58215

7. **#76094** | Cowork 沙箱在 Windows 下 `sdk_install` 失败，VM 崩溃（回归 v2.1.181 → 2.1.202）
   作者：@andrey-savov | 5💬
   虚拟机在安装 SDK 时因「连接强制关闭」失败，影响 Windows 平台下的 Cowork 协作功能。
   https://github.com/anthropics/claude-code/issues/76094

8. **#50724**（已关闭）| 压缩后过时技能参数重新出现，最后用户消息丢失
   作者：@juanfaustoperalta | 6💬 | 👍1
   会话自动压缩后，Claude 错误地恢复了数小时前的指令参数，跳过了最近的用户消息，导致上下文混乱。
   https://github.com/anthropics/claude-code/issues/50724

9. **#76980** | Windows 桌面版 Squirrel→MSIX 迁移后快捷方式残留
   作者：@SingingOwl | 1💬
   更新后旧快捷方式未被清理，多个设备上出现桌面及开始菜单中的孤立链接。
   https://github.com/anthropics/claude-code/issues/76980

10. **#76694** | Cowork：新建项目丢失“选择文件夹”菜单，变为纯上传知识库
    作者：@rexilx | 4💬
    Chat/Cowork 合并后，macOS 桌面端上下文菜单功能降级，无法正常创建本地项目文件夹。
    https://github.com/anthropics/claude-code/issues/76694

---

## 重要 PR 进展
今日仅有 3 个 Pull Request，均为修复性提交：

1. **#76986** | 修复 `scripts/auto-close-duplicates.ts`：关闭重复 Issue 时保留已有标签
   作者：@AliAltivate
   原有逻辑使用 `PATCH` 设置状态时直接覆盖全部标签，现改为追加 `duplicate` 标签。
   https://github.com/anthropics/claude-code/pull/76986

2. **#76985** | 修复 `validate-agent.sh`：正确读取多行描述字段
   作者：@AliAltivate
   `grep` 行读取导致仅截取描述首行，现改为支持完整多行 Frontmatter 提取。
   https://github.com/anthropics/claude-code/pull/76985

3. **#15165**（已关闭）| 更新 README.md 中的失效文档链接
   作者：@nicholasoxford
   更换了一个已损坏的文档 URL。
   https://github.com/anthropics/claude-code/pull/15165

---

## 功能需求归类
- **IDE 集成与界面**：VSCode 扩展的权限行为统一（#15921）、状态指示器对齐桌面版（#77003）、RTL 语言渲染支持（#75196）。
- **权限与策略系统**：Allow/Deny 规则实际匹配逻辑的可靠性（#57132）、Bypass 模式在 IDE 中的行为（#15921）、意外持久化接受（#65848 已关闭）。
- **模型行为与安全**：Advisor 大上下文失效（#67609）、记忆与代词偏差（#52477）、AUP/安全分类误判（多条已关闭，如 #65873、#65846、#65891 等）。
- **跨平台体验**：Windows 沙箱稳定性（#76094）、安装迁移快捷方式残留（#76980）、点击焦点穿透权限弹窗（#76743）。
- **协作特性**：Cowork 项目创建菜单丢失（#76694）、会话管理策略（#58215）。

---

## 开发者关注点
1. **权限模型在 IDE 环境的一致性**：VSCode 扩展中 settings.local.json 被旁路，暴露出权限配置在终端与扩展间的不统一，直接影响希望精细控制工具访问的开发者工作流。
2. **大上下文模型的稳定性与可用性**：`claude-fable-5` 在约 100K token 后 Advisor 工具消失，成为处理大型代码库时的致命障碍，社区反响强烈。
3. **安全分类器误判干扰开发**：多条已关闭 Issue 显示，开发远程管理、交易应用、Minecraft 模组等正常项目时频繁触发 AUP 拦截，增加心智负担。
4. **输出格式控制需求**：硬换行问题获得 51 个点赞，反映开发者对 Markdown 长文本输出的可读性有明确期待，希望终端自行处理换行。
5. **桌面端质量**：从安装迁移到沙箱运行、项目创建等一系列 Windows/macOS 相关问题持续出现，表明跨平台基础设施仍需加固。

---

*数据来源：https://github.com/anthropics/claude-code 公开 Issue & PR 流。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 – 2026 年 7 月 13 日

## 今日更新概览
过去 24 小时内无新版本发布，但社区 issue 更新频繁，共有 50 条活跃 issue 获得新评论。焦点集中在 GPT-5.6 Sol 模型的多代理子代理模型强制行为、Windows 桌面端的性能与稳定性问题，以及 CLI 中 `wait` 工具的超长等待导致的 token 浪费。PR 侧仅更新 3 项，其中一项为 TUI 交互增强，一项为安全修复。

## 版本发布
无新版本发布。

## 社区热点 Issues
从过去 24 小时更新且评论与关注度最高的 issue 中，选取以下 10 个值得关注的问题：

1. **GPT-5.6 Sol 无法为子代理指定模型，强制所有子代理使用 Sol 模型**
   [#31814](https://github.com/openai/codex/issues/31814) 由 `@spadaval` 提交。模型元数据强制启用 MultiAgent V2 并隐藏子代理配置，导致无法单独指定子代理模型。已有 56 条讨论、121 个 👍，社区反响强烈。

2. **Codex App 频繁出现重连循环**
   [#18960](https://github.com/openai/codex/issues/18960) 由 `@GGBondBlueWhale` 提交。macOS 上 WebSocket 连接反复中断，影响 Pro 订阅用户。51 条评论、39 个 👍，为长期未解决的高票问题。

3. **Windows 11 Pro 上 Codex App 频繁卡死/卡顿**
   [#20214](https://github.com/openai/codex/issues/20214) 由 `@squarepots` 提交。尽管系统资源充足，应用仍出现频繁冻结，影响 Plus 用户。34 条评论、48 个 👍，是 Windows 稳定性问题的代表。

4. **GPT-5.5 无视禁用设置强制启用 MultiAgentV2 并隐藏自定义代理控制项**
   [#31097](https://github.com/openai/codex/issues/31097) 由 `@Alek2077` 提交。CLI 下使用 gpt-5.5 时，MultiAgentV2 被强制开启，用户无法控制子代理模型。6 条评论、6 个 👍，与 #31814 呼应，揭示多代理模型强制行为的普遍性。

5. **`fetch-codex-manual.mjs` 因重定向后缺少 `x-content-sha256` 头而失败**
   [#31984](https://github.com/openai/codex/issues/31984) 由 `@maguroid` 提交。官方文档技能脚本无法拉取手册，影响内置文档查询功能。5 条评论、13 个 👍，属于 skills 体系故障。

6. **VS Code 扩展最新更新后 `Shift+Tab` 无法切换 Plan 模式**
   [#32147](https://github.com/openai/codex/issues/32147) 由 `@aleksandrdubovit` 提交。IDE 扩展版本 26.707.31428 在 Windows 11 上出现快捷键失效。6 条评论、6 个 👍，影响依赖 Plan 模式的用户。

7. **内置 `wait` 工具最长约 50 秒限制导致大量无意义 token 消耗**
   [#32640](https://github.com/openai/codex/issues/32640) 由 `@MPC7500` 提交。在 gpt-5.6-luna 模型下，MultiAgent V2 每 50 秒重新采样，造成长等场景的 token 浪费。4 条评论，今日新增且技术细节明确。

8. **macOS 上 `codex app` 忽略已安装的 ChatGPT.app 并重复创建 Codex.app**
   [#31944](https://github.com/openai/codex/issues/31944) 由 `@DCjanus` 提交。CLI 启动应用时未能识别统一后的 ChatGPT.app，导致重复安装。4 条评论、7 个 👍，是统一桌面应用后出现的兼容性问题。

9. **Codex Desktop 因缺少工具调用结果导致整个应用崩溃**
   [#32653](https://github.com/openai/codex/issues/32653) 由 `@auridian` 提交。Windows 11 下最新版本 26.707.6957.0 出现崩溃，错误提示 tool call result 缺失。3 条评论，今日提交，影响 pro 用户。

10. **多终端 CLI 因 SQLite 锁竞争导致 TUI 冻结，且无 BUSY 重试**
    [#20213](https://github.com/openai/codex/issues/20213) 由 `@solosvip` 提交。并发 CLI 实例共享 `state_5.sqlite` 时输入延迟、流式输出死锁。6 条评论、1 个 👍，是 CLI 重度使用者关注的基础设施问题。

## 重要 PR 进展
今日仅有 3 个 PR 更新，分别涵盖安全、TUI 新特性和编辑器增强：

- **[Codex] 在启用个人访问令牌时拒绝主机的 ChatGPT 认证令牌注入**
  [#29898](https://github.com/openai/codex/pull/29898) 已关闭。修复了 PAT 认证模式下 `account/login/start` 可能注入主机令牌的安全漏洞，增加端到端回归测试和授权转换限制文档。

- **feat(TUI): 使用会话分叉编辑之前的提示**
  [#30504](https://github.com/openai/codex/pull/30504) 开放中。将 TUI 的提示编辑改为创建会话分支，避免当前使用的 `thread/rollback` 破坏性删除对话轮次，提升交互安全性。

- **改进 Composer 完成目标解析**
  [#32628](https://github.com/openai/codex/pull/32628) 由 `copyberry[bot]` 提交并关闭。优化了 `@` 和 `$` 完成目标的解析，处理光标两侧的原子文本元素，优先选取最近的可编辑提及，避免文件、技能、插件候选时的误匹配。

## 功能需求归类
从近期 issue 中可梳理出几类高频功能方向（仅记录出现频次，不作路线图推测）：

- **子代理/多代理模型控制**：`#31814`、`#31097`、`#32587` 均反映 GPT-5.5/5.6 模型强制多代理 V2 且无法自定义子代理模型，用户希望恢复细粒度模型选择。
- **Windows 平台体验优化**：包括 `#20214`（卡顿）、`#30178`（内嵌浏览器崩溃）、`#32492`（沙箱设置卡住）、`#31387`（远程控制无法启用）、`#31973`（远程重连死锁）等，覆盖性能、远程控制、沙箱等场景。
- **远程会话与同步**：`#27284`（SSH 远程项目不显示聊天记录）、`#31973`（远程控制永久重连），暴露出远程连接状态管理与 UI 同步的缺陷。
- **CLI 工具健壮性**：`#20213`（SQLite 锁竞争）、`#32640`（`wait` 工具 token 浪费）、`#11877`（TUI 动画过度输出），集中在并发、资源使用与终端体验上。
- **自动化工作流增强**：`#29184`（持久线程交付）、`#28064`（手动触发自动化），指向对自动化执行的更灵活控制。
- **IDE 与编辑器集成**：`#32147`（VS Code 扩展快捷键失效），显示插件更新后的回归问题。
- **桌面应用基础体验**：`#29088`（向上箭头键行为回归）、`#28141`（终端面板不渲染）、`#31944`（重复创建 App）、`#32657`（验证号码异常），影响日常操作的丝滑度。

## 开发者关注点
今日社区讨论暴露出几个集中的痛点：

- **多代理模型的“黑盒”行为**：GPT-5.5/5.6 系列强制启用 MultiAgent V2 且不允许指定子代理模型，开发者认为丧失了可控性，相关 issue 评论和点赞数均显著偏高。
- **Windows 桌面端稳定性不足**：卡顿、崩溃、内嵌浏览器导致主应用退出、远程控制失败等问题频发，覆盖范围广且可复现度高。
- **长时间运行与并发场景下的资源管理**：`wait` 工具和 SQLite 锁竞争表明 CLI 在处理长时间等待和并发访问时缺乏有效重试或节能机制，导致 token 浪费甚至 UI 冻结。
- **统一桌面应用后的兼容性瑕疵**：Codex 与 ChatGPT 应用合并后，CLI 识别旧路径失败、重复创建应用等表现，提示迁移过程中存在未覆盖的检测逻辑。
- **核心交互回归**：向上箭头浏览历史、快捷键切换 Plan 模式等基础操作的失效，对本就依赖快捷键和命令行效率的开发者影响直接，修复呼声较高。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 | 2026-07-13

## 今日更新概览
今天社区发布了 v0.23.6 补丁版本，修复了对话中被忽略的提示词处理逻辑。Issues 区新增 6 条反馈，集中在 Web UI 后台化行为、状态持久化 bug、Windows Git Bash 检测失败及 API 数据异常等问题；Pull Requests 共有 32 次更新，其中 7 个已合并关闭，功能亮点包括 i18n 国际化方案、agent-core-v2 引擎落地、大量 Web UI 稳健性修复及 MCP 工具名简化。

## 版本发布
### @moonshot-ai/kimi-code@0.23.6
- 修复：将用户已忽略的提问提示视为“选择不回答”，避免卡在交互流中。
- Pull Request: [#1550](https://github.com/MoonshotAI/kimi-code/pull/1550)

## 社区热点 Issues

1. **Web 默认守护进程化违反 Unix CLI 惯例**
   [#1560](https://github.com/MoonshotAI/kimi-code/issues/1560)
   `kimi web` 直接后台运行，用户期望前台执行，守护进程应由 `--daemon` 等显式标志控制。影响自动化脚本和开发体验。

2. **Web 刷新后 goal 状态丢失**
   [#1584](https://github.com/MoonshotAI/kimi-code/issues/1584)
   浏览器刷新页面后，当前 goal 的展示状态会消失，需要等待下一次状态更新才能恢复，严重影响任务跟踪的连贯性。

3. **Windows 原生 MSYS2 环境下 Git Bash 检测失败**
   [#1579](https://github.com/MoonshotAI/kimi-code/issues/1579)
   当 Git 来自 MSYS2 的 ucrt64/clang64 等环境时，kimi-code 无法正确识别 bash 路径，导致启动失败。

4. **API `/usages` 接口 `totalQuota` 字段一直返回 99**
   [#1569](https://github.com/MoonshotAI/kimi-code/issues/1569)
   用量查询 API 返回的配额字段与账号实际月度限额不符，疑似 BUG，影响计费和用量监控的准确性。

5. **请求补充 Windows Git Bash 路径陷阱文档**
   [#1568](https://github.com/MoonshotAI/kimi-code/issues/1568)
   在 Windows 上通过 Git Bash 执行原生命令时，路径转换问题容易导致失败，用户希望增加诊断提示或文档说明。

6. **社区插件市场缺少公开提交流程**
   [#1566](https://github.com/MoonshotAI/kimi-code/issues/1566)
   目前可通过私有 URL 自定义插件市场，但缺少像插件市场 JSON 提交与审核的开放机制，阻碍社区贡献和分享。

## 重要 PR 进展

1. **多语言国际化支持 (i18n)**
   [#1561](https://github.com/MoonshotAI/kimi-code/pull/1561)
   为 CLI、TUI、Web UI 全面添加中英文国际化引擎与语言切换器，覆盖前端交互与系统提示。

2. **agent-core-v2 引擎及 kap-server 落地实验性开关**
   [#1441](https://github.com/MoonshotAI/kimi-code/pull/1441)（已关闭）
   将新一代 agent 内核与 kap-server 集成到主分支，启用实验性特性标志，为后续架构升级铺路。

3. **TUI 交互式 shell 迁移到 v2 引擎**
   [#1543](https://github.com/MoonshotAI/kimi-code/pull/1543)
   为 v2 内核重构 TUI 的 agent 调用层，改用 facade 模式并实现延迟的 session 创建，使交互式终端不再依赖遗留 v1 SDK。

4. **Windows Git Bash 检测修复（MSYS2 原生工具链兼容）**
   [#1580](https://github.com/MoonshotAI/kimi-code/pull/1580)
   针对 Issue #1579，增强 shell 探测逻辑，覆盖 `ucrt64`、`clang64`、`clangarm64` 等 MSYS2 环境的前缀，正确找到 bash.exe。

5. **Web UI 访问令牌持久化**
   [#1567](https://github.com/MoonshotAI/kimi-code/pull/1567)（已关闭）
   将服务端 access token 存入 local storage，避免换标签或重启浏览器后需要重新输入，解决“token 隔一阵就需要重新输入”的痛点。

6. **Web UI 宽 Markdown 表格滚动修复**
   [#1575](https://github.com/MoonshotAI/kimi-code/pull/1575) [#1577](https://github.com/MoonshotAI/kimi-code/pull/1577)（均已关闭）
   解决宽表格在小屏幕上挤压变形和桌面端溢出问题，为表格单独提供横向滚动容器，保持全宽可读。

7. **Web UI 重连后会话状态恢复**
   [#1572](https://github.com/MoonshotAI/kimi-code/pull/1572)（已关闭）
   修复客户端断连后，会话的旋转指示器不消失、消息阻塞的 bug，确保 turn 完成后状态正确清退。

8. **子代理超时文档同步**
   [#1582](https://github.com/MoonshotAI/kimi-code/pull/1582)（已关闭）
   更新 0.23.6 引入的可配置超时 `timeout_ms` 相关文档，纠正旧版关于默认值的描述。

9. **插件 MCP 工具名简化**
   [#1549](https://github.com/MoonshotAI/kimi-code/pull/1549)
   去掉工具名中冗余的 `plugin-` 前缀和服务器段，使如 `mcp__plugin-ifind-mcp_s__get_financial_statements` 缩短为 `mcp__ifind__get_financial_statements`，提升使用效率。

10. **绑定 0.0.0.0 时显示局域网访问 URL**
    [#1571](https://github.com/MoonshotAI/kimi-code/pull/1571)
     当 vis-server 监听所有接口时，自动列举本地 IPv4 地址并在启动横幅中打印，方便从手机或平板远程控制。

## 功能需求归类
- **CLI 行为与惯例**：要求 `kimi web` 默认前台运行，守护进程需显式标志（#1560）。
- **Web UI 状态与交互**：goal 状态刷新丢失（#1584），访问令牌持久化（#1567 已解决），重连恢复（#1572 已解决），宽表格渲染（#1575/#1577 已解决）。
- **Windows 平台兼容性**：MSYS2 Git Bash 检测（#1579，#1580），路径陷阱文档（#1568）。
- **API 准确性**：`/usages` 接口 totalQuota 返回错误（#1569）。
- **生态与插件**：社区插件市场公开提交流程（#1566），MCP 工具名简化（#1549）。
- **开发者体验**：国际化支持（#1561），agent-core-v2 落地（#1441），TUI 迁移 v2（#1543）。

## 开发者关注点
- **Web UI 的稳健性与体验**：本周多个 PR 围绕 Web 端的令牌、重连、表格渲染等问题进行修复，反映出社区对 Web 作为主要交互界面的关注，但仍有状态丢失等未解决问题。
- **Unix 哲学与 CLI 预期**：DevOps 用户强烈期望遵守前台进程、显式守护进程的惯例，这对自动化与系统集成至关重要。
- **Windows 开发环境的异构性**：Git Bash 检测需要覆盖更多 MSYS2 变体，说明部分用户使用深度定制的 Windows 工具链，兼容性仍需完善。
- **API 数据可信度**：计费/配额接口返回值异常直接影响用户对自身用量和成本的控制，需要快速确认并修复。
- **插件生态开放诉求**：社区希望从“自定义 URL”走向“公开提交与审核”的模式，降低贡献门槛，丰富 Kimi Code 的扩展能力。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-13

## 今日更新概览
过去 24 小时社区活跃度集中在 OpenCode v2 的配置加载与插件兼容性问题，以及 GPT-5.6 系列模型的持续适配。多项基础交互功能（如剪贴板复制）因高票反馈再度被推至焦点；同时针对请求头合并、SQLite 错误保留、终端焦点抢占等 PR 提交了修复。今日无正式版本发布，Releases 仅包含自动化验证产物。

## 版本发布
今日无正式版本发布，只有两条 PR 验证证据（`pr-36567-evidence`、`pr-36516-evidence`）被自动生成。

## 社区热点 Issues（精选 10 则）

1. **#4283 剪贴板复制功能失效**
   [OPEN] 评论 113 · 👍 105 | [链接](https://github.com/anomalyco/opencode/issues/4283)
   用户从终端选择回复文本后无法成功复制到剪贴板，影响日常使用。大量用户确认受影响，要求尽快修复。

2. **#36140 GPT-5.6 Luna 返回 “model not found”**
   [OPEN] 评论 24 · 👍 84 | [链接](https://github.com/anomalyco/opencode/issues/36140)
   内置 OpenAI 提供商的 `gpt-5.6-luna` 在 ChatGPT OAuth 下请求失败（HTTP 404），但同账号其他 GPT-5 模型正常，多数尝试新模型的用户受困。

3. **#5076 请求更安全的默认权限配置**
   [CLOSED] 评论 13 · 👍 61 | [链接](https://github.com/anomalyco/opencode/issues/5076)
   指出现有默认配置允许自由读取、写入和网络访问，存在安全隐患，要求改为更保守的默认值。虽已关闭，但获大量赞同。

4. **#3743 某些模型出现工具调用死循环**
   [OPEN] 评论 26 · 👍 12 | [链接](https://github.com/anomalyco/opencode/issues/3743)
   使用 KIMI K2、MiniMax 2、GLM 4.6 等模型时反复执行同一工具调用，需手动停止或执行 `/compact`，影响开发效率。

5. **#33318 Zen 付费余额仍触发免费额度限制**
   [OPEN] 评论 8 | [链接](https://github.com/anomalyco/opencode/issues/33318)
   账户有 $20 付费余额，使用不足 1 小时仍提示“Free usage exceeded”，扣费逻辑与免费/付费切分不清。

6. **#22132 本地 Ollama 提供程序挂起**
   [OPEN] 评论 15 · 👍 5 | [链接](https://github.com/anomalyco/opencode/issues/22132)
   通过 `@ai-sdk/openai-compatible` 配置的本地 Ollama 处理简单提示时挂起，但同一 API 端点通过直接调用正常，影响本地模型用户。

7. **#31972 新布局与设计下 Plan/Build 模式无法切换**
   [OPEN] 评论 7 · 👍 6 | [链接](https://github.com/anomalyco/opencode/issues/31972)
   开启新布局功能标志后，UI 切换和 Ctrl+. 快捷键均失效，Plan/Build 模式无法切换，主要影响 Windows 用户。

8. **#33356 事件表无限制增长至 13GB**
   [OPEN] 评论 4 | [链接](https://github.com/anomalyco/opencode/issues/33356)
   `opencode.db` 中 `event` 表因无保留/压缩策略不断膨胀，长期运行实例已达 ~13GB，甚至填满磁盘。

9. **#36539 v2 配置：子仓库无法合并全局与共享工作区配置**
   [OPEN] 评论 3 | [链接](https://github.com/anomalyco/opencode/issues/36539)
   在 OpenCode v2 子 Git 仓库中打开时，后台服务未加载 `OPENCODE_CONFIG_DIR` 指向的共享配置，环境变量正确但会话配置不完整。

10. **#36485 v2 CLI：全局配置仅在 `$HOME` 加载**
    [OPEN] 评论 3 | [链接](https://github.com/anomalyco/opencode/issues/36485)
    运行 `opencode2` 时，只有在 `$HOME` 目录才会读取 `~/.config/opencode/opencode.jsonc`，任何子目录均忽略全局配置，导致 MCP 服务器等设置丢失。

## 重要 PR 进展（精选 10 则）

1. **#36579 修复模型自定义请求头被丢弃**
   [OPEN] [链接](https://github.com/anomalyco/opencode/pull/36579)
   修复 `prepareOptions()` 中未合并 `model.request.headers` 的问题，使自定义请求头（如 AgentRouter 的 User

</details>