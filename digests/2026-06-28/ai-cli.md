# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 00:32 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比日报 | 2026-06-28

## 1. 今日横向概览

今日各主流 AI CLI 工具社区普遍保持较高活跃度。**Claude Code** 因用户集中提交十余个“网络安全误报”Issue 引发对安全审核粒度的讨论，**OpenAI Codex** 的 `gpt-5.5` 速率限制成本飙升问题成为社区最大痛点（333👍），**Gemini CLI** 和 **Qwen Code** 分别围绕 Agent 行为可靠性和输出截断/重试循环进行大量修复，**OpenCode** 重点解决 WSL 路径兼容性与会话管理问题，**GitHub Copilot CLI** 因 v1.0.66 出现多个 Windows 回归 Bug 而受到关注，**Kimi Code CLI** 过去 24 小时无活动。

## 2. 各工具活跃度对比

| 工具 | 更新 Issues 数 | 更新 PRs 数 | 版本发布 | 社区热度最高的 Issue（👍/评论） |
|---|---|---|---|---|
| Claude Code | 50+ | 1 | 无 | #69706 Windows 认证错误（10👍/21条） |
| OpenAI Codex | 较多（未精确统计） | 密集（约10+条重要PR） | 3个rust-alpha版（无日志） | #28879 速率限制成本飙升（333👍/186条） |
| Gemini CLI | 50 | 18 | 无 | #15956 浏览器控制提案（14条评论） |
| GitHub Copilot CLI | 约10条新Issue | 3（2OPEN+1CLOSED） | 无 | #2165 Ubuntu Keychain损坏（20👍） |
| Kimi Code CLI | 0 | 0 | 无 | 无活动 |
| OpenCode | 50 | 50 | 无 | #23153 加密货币支付（24👍/13条） |
| Qwen Code | 27 | 50 | 1个nightly版本 | #5756 输出截断重试循环（较多讨论） |

## 3. 共同出现的功能方向

- **Windows 平台兼容性**：**Claude Code**（认证失败 #69706、环境变量缺失 #71924、MCP卡死 #71922）、**OpenAI Codex**（沙箱安装失败 #29072、编辑器空白 #21863、进程残留 #29408）、**GitHub Copilot CLI**（`.bat`启动失败 #3958、剪贴板失效 #3949）、**OpenCode**（WSL路径转换错误 #30895、#19473）、**Qwen Code**（`cua-driver.exe`高CPU #5922）均遭遇Windows独有Bug，说明跨平台体验仍是共同短板。

- **速率限制/配额/成本透明度**：**OpenAI Codex** 的 #28879（10-20倍成本飙升）、**GitHub Copilot CLI** 的 #3960（自定义模型仍消耗GitHub配额）、**OpenCode** 的 #12219（积分不足错误）均反映用户对资源消耗的敏感度和透明化需求。

- **Agent/模型行为可控性**：**Claude Code** 的 #57200（模型忽略指令）、**Gemini CLI** 的 #22323（子代理误报成功）、#21409（Agent挂起）、**Qwen Code** 的 #5756（输出截断重试循环）都指向用户希望AI代理能更可预测、可配置。

- **安全与权限控制**：**Claude Code** 的安全误报群（#71910等）、**Gemini CLI** 的 Shell参数展开确认（PR #28175）、日志脱敏（#26525）、**OpenCode** 的路径遍历防护（PR #5911）显示用户对数据安全和操作风险的关注。

- **MCP 集成稳定性**：**Claude Code**（MCP指令未传递 #23808、Chrome MCP卡死 #71922）、**OpenAI Codex**（MCP OAuth序列化重构 #30292-30296）、**Gemini CLI**（MCP工具名前缀匹配 #28033）均涉及MCP协议层的Bug修复或功能增强。

## 4. 差异化定位分析

- **Claude Code**：定位“安全敏感型开发者工具”，今日社区动态中安全误报议题（cyber类）系统性爆发，用户群体多为网络安全、固件分析等领域的工程人员。同时 Windows 支持仍在追赶，但社区对安全策略粒度的讨论最为深入。

- **OpenAI Codex**：定位“高性能模型+深度集成”，今日焦点在 `gpt-5.5` 的成本效益争议上，用户对模型的依赖度极高，因此配额消耗异常直接引发强烈不满。其 PR 工作集中在 MCP OAuth 序列化、企业插件策略等后端基础设施，显示其企业级方向。

- **Gemini CLI**：定位“Agent 编排与多工具协同”，今日核心问题是 Agent 行为可靠性（挂起、误报、不主动调用技能），同时安全加固（Shell参数展开确认、Bot补丁审批）显示其对权限控制的重视。浏览器控制提案（#15956）体现其扩展能力意图。

- **GitHub Copilot CLI**：定位“轻量级开发者副驾”，今日主要处理版本回归问题，特别是 Windows 和 macOS 的交互细节（幽灵字符、触摸板滚动、拖拽失效），显示其更注重即时用户体验而非深度功能。Ubuntu Keychain 认证长期未修复说明 Linux 支持优先级较低。

- **OpenCode**：定位“开源灵活集成”，社区同时覆盖支付方式（加密货币）、WSL 路径兼容、多平台部署（桌面、TUI、服务端）等诸多议题，代码库更新量极大（50 PRs），反映出开放社区参与度高。会话管理和撤销重做等 UX 改进突出。

- **Qwen Code**：定位“多模型+多渠道部署”，今日发布 nightly 版本修复 `web_fetch`，同时涉及QQ机器人、Telegram、Chrome扩展、钉钉频道等多渠道适配，区别于其他工具专注于单一终端。输出截断和缓存命中率优化则关注成本效率。

## 5. 社区活跃度记录

- **最活跃（按PR数量）**：**OpenCode** 和 **Qwen Code** 各更新约50个PR，且核心维护者（`thdxr`, `cwj2001` 等）提交了会话重命名、撤销重做等关键功能；**OpenAI Codex** 的 PR 数量虽未精确统计，但系列性 MCP OAuth PR 显示持续投入。
- **最活跃（按Issue热议度）**：**OpenAI Codex** 的 #28879（333👍）为今日唯一超过100👍的 Issue，成为跨工具级热点；**Claude Code** 的网络安全误报系列（10+ Issue）和 **Gemini CLI** 的 Agent 挂起问题（8👍）次之。
- **维护者响应**：**OpenCode** 和 **Qwen Code** 有多条维护者直接参与的评论和PR；**Claude Code** 团队关闭了历史Bug #23808；**GitHub Copilot CLI** 对 #3958 等回归问题尚未有官方回应；**Kimi Code CLI** 完全无声。
- **版本发布**：仅 **OpenAI Codex**（3个alpha）和 **Qwen Code**（1个nightly）有更新，其他5个工具均无正式版发布。

## 6. 有证据支撑的观察

1. **Windows 兼容性问题是全行业共性短板**：7个工具中的6个（Kimi除外）今日均报告了Windows相关Bug，覆盖认证、MCP、剪贴板、路径转换、CPU占用等不同层面，且部分为版本回归（Copilot CLI v1.0.66）。没有单一工具在Windows上提供无痛体验。

2. **用户对AI代理行为透明度的要求明显上升**：Gemini CLI（子代理误报成功、Agent挂起、任务不可见）、Qwen Code（后台cron任务无法列出/停止、输出截断重试循环）、Claude Code（模型忽略指令）均反映用户不再满足于“黑盒”执行，而是希望获知代理的决策过程和资源使用情况。

3. **成本/配额争议出现分化信号**：OpenAI Codex 的“10-20倍成本飙升”获得333👍，成为今日跨工具最大单一热点；而 Qwen Code 关注的Anthropic缓存命中率（#5942）则是技术层面优化方向。GitHub Copilot CLI 的自定义模型依然消耗GitHub配额（#3960）则暴露计费逻辑不透明。这表明用户对AI工具的付费模型和资源消耗的敏感度正在成为核心决策因素。

4. **MCP 生态处于深度磨合期**：Claude Code、OpenAI Codex、Gemini CLI 三款工具均涉及MCP协议的Bug修复或架构改进（指令传递、OAuth序列化、工具名前缀匹配）。MCP作为标准化协议，其跨工具实现的一致性和稳定性仍有待提升。

5. **开源工具社区贡献度显著高于闭源工具**：OpenCode（50 PRs）和 Qwen Code（50 PRs）的日更新量远超 Claude Code（1 PR）和 GitHub Copilot CLI（3 PRs）。开源模式在快速修复、功能演进和平台适配（如OpenCode的WSL修复、Qwen Code的QQ机器人）上展现出更高的响应速度。闭源工具的热点集中于用户反馈与 Bug 报告，而非社区协作改进。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-06-28 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-06-28

## 今日更新概览

今日社区活跃度极高，共产生超过 50 条 Issues 更新。核心动态集中在两方面：一是用户 `@sworrl` 集中提交了十余个关于“网络/信息安全（cyber）”安全过滤误报的 Issue，引发了社区对安全审核机制的讨论；二是 Windows 平台的认证与 MCP 集成问题持续发酵，成为另一大用户痛点。此外，团队今日关闭了多个历史遗留 Bug，包括 MCP 指令传递和 VSCode UI 交互问题。

## 版本发布

无新版本发布。

## 社区热点 Issues

1.  **[#69706] Windows API 认证错误**：用户 `@LAI0220` 报告在 Windows 平台上持续遇到 `API Error: 401 Invalid authentication credentials` 错误。该 Issue 获得 10 个赞和 21 条评论，是目前社区反馈最激烈的问题，影响用户正常登录使用。
    - 链接: https://github.com/anthropics/claude-code/issues/69706

2.  **[#57200] Linux 平台模型指令违规**：`@dvdmatt` 报告在使用 Claude 时，模型持续忽略指令并违反用户设定的规则。该问题在 Linux 平台下发生，有 9 条评论，反映出对模型行为可控性的担忧。
    - 链接: https://github.com/anthropics/claude-code/issues/57200

3.  **[#23808] MCP 服务器指令未传递给模型 (已关闭)**：该历史 Bug 今日被关闭。问题是在 Windows 平台上，MCP 服务器初始化响应中的指令并未传递给模型，导致模型无法理解工具使用规则。
    - 链接: https://github.com/anthropics/claude-code/issues/23808

4.  **[#71910] 安全误报：消费级无人机固件分析被拦截**：用户 `@sworrl` 报告，在进行合法的消费级无人机 USB 协议分析时，被安全系统误判为风险行为并中断会话。这是今日一系列“cyber”类误报的典型案例，引发对安全策略粒度的讨论。
    - 链接: https://github.com/anthropics/claude-code/issues/71910

5.  **[#70002] 认证失败与配置文件损坏**：`@MoralStrike` 报告在 Linux 和 VSCode 环境下，认证失败（401）后，同时出现用户配置文件 `.claude.json` 损坏的错误。该问题将认证问题与配置管理问题关联，增加了用户排查难度。
    - 链接: https://github.com/anthropics/claude-code/issues/70002

6.  **[#67220] Windows 原生 Toast 通知请求**：`@thiagomendonca-eu` 提议为 Windows 平台增加系统级 Toast 通知功能，使任务完成或等待输入时能像 macOS/Linux 一样得到原生提醒。该功能请求持续受到关注。
    - 链接: https://github.com/anthropics/claude-code/issues/67220

7.  **[#71924] Windows 环境变量缺失**：用户 `@exploretry` 发现，在 Windows 的 Claude Desktop 中，环境变量 `CLAUDE_PROJECT_DIR` 未按文档说明传递给 MCP 服务器和 Bash/PowerShell 子进程。
    - 链接: https://github.com/anthropics/claude-code/issues/71924

8.  **[#71926] 全屏 TUI 无法直接复制文本**：`@dosulliv` 报告，在 Linux 系统的全屏 TUI 模式下，文档描述需使用 `Shift+拖拽` 才能复制文本，但实际标准鼠标操作无法直接选择，与文档描述不符。
    - 链接: https://github.com/anthropics/claude-code/issues/71926

9.  **[#71925] 使用量限制剩余时间显示错误**：`@yanivhrs` 报告，当 API 返回剩余限制恢复时间为“1小时20分”时，UI 横幅错误地显示为“1小时内”，存在向下取整问题，误导用户。
    - 链接: https://github.com/anthropics/claude-code/issues/71925

10. **[#71922] Chrome MCP 集成导致 Windows CLI 卡死**：`@mtschoen` 报告，当 `claudeInChromeDefaultEnabled` 开启且 Chrome 未运行时，MCP 服务器会发送大量 `set_permission_mode` 请求，导致每个请求阻塞 10 秒，使新会话完全无法使用。
    - 链接: https://github.com/anthropics/claude-code/issues/71922

## 重要 PR 进展

1.  **[#68787] 脚本错误提示改进**：一个改进 PR 为 `edit-issue-labels.sh` 脚本增加了错误提示信息。原先在无参数调用时脚本静默退出，现在会向标准错误流输出说明，有助于 CI 流程的调试。
    - 链接: https://github.com/anthropics/claude-code/pull/68787

## 功能需求归类

*   **平台支持 】
    *   Windows 平台用户持续表达对“一等公民”体验的渴望，包括原生系统通知（`#67220`）、环境变量支持（`#71924`）、以及解决认证问题（`#69706`）。

*   **安全与审核机制 】
    *   安全过滤的“假阳性”问题是今日的核心诉求。大量 Issue（如 `#71910`）指出，当前的安全策略过于粗糙，会中断合法的开发工作，尤其是涉及硬件协议、固件分析等特定领域。

*   **UI/UX 改进 】
    *   用户在 VSCode 扩展（`#71928`）、全屏 TUI（`#71926`）和 CLT 交互（`#71921`）等方面提出了多项改进建议，核心诉求是减少误操作、提升信息透明度和操作便利性。

*   **MCP 与工具链集成 】
    *   环境变量传递（`#71924`）、Chrome 集成健壮性（`#71922`）等问题暴露了 MCP 生态在集成细节上仍有待完善。

*   **模型行为与定力 】
    *   `#57200` 等问题显示了开发者对模型能严格遵守用户设定指令和规则的需求。

## 开发者关注点

*   **安全误报成最大痛点**：由 `@sworrl` 发起的网络安全误报 Issue 群（共 10+ 个）是本日最显著的现象。这组 Issue 系统性地展示了现有安全审核模型在区分恶意攻击与正常工程实践（如 USB 协议分析、SDK 开发）上的失败，表明开发者急需更精准和可解释的安全策略。

*   **Windows 支持仍待完善**：从认证失败到MCP集成卡死、环境变量缺失，Windows 平台上的体验问题集中爆发。社区反馈显示，跨平台的一致性，特别是 Windows 与 macOS/Linux 的功能对齐，是用户高度关注的方向。

*   **认证流程脆弱**：401 错误和配置文件损坏（`#69706`、`#70002`）的并发出现，暗示认证模块可能存在状态管理或数据竞争问题，影响了基础使用的稳定性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于AI开发工具的技术分析师，我根据您提供的GitHub数据，为您生成2026年6月28日的OpenAI Codex社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-28

## 今日更新概览

今日社区活跃度极高，Issue 区围绕 `gpt-5.5` 模型的**速率限制和成本激增**问题的讨论达到新高度，已成为最受关注的事件。同时，开发者对 **Linux桌面应用**和**敏感文件排除**等功能的长期诉求热度不减。在代码层面，官方团队正在密集推进 **MCP OAuth 认证流程的序列化与恢复**工作，并修复了多项性能与稳定性问题。

## 版本发布

过去24小时内发布了3个Rust版本的增量更新，但均未附带详细的更新日志。

- **rust-v0.143.0-alpha.27**: [查看详情](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)
- **rust-v0.143.0-alpha.28**: [查看详情](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)
- **rust-v0.143.0-alpha.29**: [查看详情](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29)

## 社区热点 Issues

1.  **[Bug] Codex (gpt-5.5, Plus) 速率限制成本飙升至10-20倍，预算迅速耗尽**
    - **Issue**: [#28879](https://github.com/openai/codex/issues/28879)
    - **摘要**: 自6月16日起，大量Plus用户反馈在 `gpt-5.5` 模型上，每个token消耗的配额增长了10-20倍，导致5小时的使用预算在2-3次提示后即耗尽。该问题影响了依赖配额进行日常开发的用户，社区反响强烈，已有333个👍和186条评论，是目前讨论最激烈的议题。

2.  **[Enhancement] 请求推出Codex Linux桌面客户端**
    - **Issue**: [#11023](https://github.com/openai/codex/issues/11023)
    - **摘要**: 许多开发者因macOS客户端性能问题或希望使用Linux作为主力开发环境，强烈要求推出Linux桌面应用。该请求已持续近5个月，获得648个👍，是目前社区呼声最高的功能请求。

3.  **[Bug] Codex SQLite反馈日志写入量巨大，可达到640 TB/年**
    - **Issue**: [#28224](https://github.com/openai/codex/issues/28224)
    - **摘要**: 用户报告Codex的SQLite反馈日志写入量过大，会快速消耗SSD的寿命。维护者已通过合并三个PR修复了该问题，避免了约85%的日志写入。该问题已关闭，体现了社区与官方的高效协作。

4.  **[Enhancement] 请求增加排除敏感文件的机制 (.codexignore)**
    - **Issue**: [#2847](https://github.com/openai/codex/issues/2847)
    - **摘要**: 用户希望引入类似 `.gitignore` 的 `.codexignore` 文件，或提供全局配置，来显式标记并阻止AI代理读取或发送敏感文件。这是一个持续近10个月的长期诉求，获得414个👍。

5.  **[Bug] 配额瞬间耗尽：1条消息消耗100积分，5小时限制重置为0%**
    - **Issue**: [#29955](https://github.com/openai/codex/issues/29955)
    - **摘要**: 用户报告Pro*5计划中的积分和5小时配额消耗异常，一条消息即消耗100积分并清空所有使用时间。此问题与#28879高度相关，表明成本飙升问题影响面更广。

6.  **[Bug] Windows Codex App: apply_patch因沙箱安装程序无法启动而失败**
    - **Issue**: [#29072](https://github.com/openai/codex/issues/29072)
    - **摘要**: Windows版本的`apply_patch`功能在调用沙箱时失败，原因是 `codex-windows-sandbox-setup.exe` 无法从应用包路径正常运行。这是一个影响代码应用功能的阻塞性Bug，影响了Windows用户的体验。

7.  **[Bug] 关闭无响应的子代理 (subagent) 可能导致界面挂起数小时**
    - **Issue**: [#24389](https://github.com/openai/codex/issues/24389)
    - **摘要**: 在多智能体场景下，主进程尝试关闭一个无响应的子代理时，`close_agent` 函数会阻塞超过8小时，严重影响用户的开发流程。

8.  **[Bug] VS Code (Windows): 编辑器面板因URI路由问题显示为空白**
    - **Issue**: [#21863](https://github.com/openai/codex/issues/21863)
    - **摘要**: 在Windows上的VS Code扩展中，中央编辑器面板有时会打开一个空白页面。原因是扩展在处理Windows路径时，使用了一个错误的URI路由（`fsPath`），导致内容无法加载。

9.  **[Bug] Business Codex 反复出现401认证错误，需要强制电话验证**
    - **Issue**: [#28672](https://github.com/openai/codex/issues/28672)
    - **摘要**: ChatGPT Business 用户报告，在Ubuntu开发容器中使用Codex Web版时，会频繁遇到OAuth令牌失效（401错误），并触发强制重新认证和电话验证，导致服务不可用，影响了企业用户的正常协作。

10. **[Bug] Windows Desktop 在多人仓库工作区中残留重复/卡死的git.exe进程**
    - **Issue**: [#29408](https://github.com/openai/codex/issues/29408)
    - **摘要**: Codex Desktop 在Windows上会频繁发起Git轮询，导致大量 `git.exe` 进程残留，占用系统资源，影响性能。此问题在多仓库工作区中尤其明显。

## 重要 PR 进展

1.  **[MCP OAuth] 路由、序列化与恢复：系统性重构MCP OAuth流程**
    - **PRs**: [#30292](https://github.com/openai/codex/pull/30292), [#30293](https://github.com/openai/codex/pull/30293), [#30294](https://github.com/openai/codex/pull/30294), [#30295](https://github.com/openai/codex/pull/30295), [#30296](https://github.com/openai/codex/pull/30296) 等
    - **摘要**: 这是今日最核心的代码工作。`stevenlee-oai` 提交了一个系列的PR，旨在序列化共享的MCP OAuth凭证存储、路由OAuth恢复流程通过Codex、并报告存储状态。这有助于解决多线程/多进程环境下的OAuth并发问题，提升MCP插件的稳定性和认证可靠性。

2.  **[app-server] 增加 currentTime/read 请求超时时间**
    - **PR**: [#30384](https://github.com/openai/codex/pull/30384)
    - **摘要**: 将外部 `currentTime/read` 请求的超时时间从5秒增加到10秒。这可能是为了应对某些慢速或不可靠的外部服务，以减少因超时而导致的连接失败。

3.  **[plugins] 运行时强制执行市场来源策略**
    - **PR**: [#29691](https://github.com/openai/codex/pull/29691) (已合并)
    - **摘要**: 此PR旨在运行时强制执行企业级插件市场策略。通过实时过滤已屏蔽的插件、限制市场发现和报告功能，增强了企业对插件使用的管控能力。

4.  **[性能] 禁用 Rendezvous WebSocket 的 Nagle 算法**
    - **PR**: [#30269](https://github.com/openai/codex/pull/30269)
    - **摘要**: 在exec-server的Rendezvous WebSocket连接中，禁用Nagle算法。这可以减少小数据包的延迟，可能改善实时交互和工具调用的响应速度。

5.  **[app-server] 暴露环境信息RPC接口**
    - **PR**: [#30291](https://github.com/openai/codex/pull/30291)
    - **摘要**: 为app-server的客户端提供RPC接口，用于发现执行环境的Shell和当前工作目录。这对于需要选择或配置特定执行环境的高级用户和应用场景非常有用。

6.  **[Core] 稳定合成调用输出ID**
    - **PR**: [#30327](https://github.com/openai/codex/pull/30327) (已合并)
    - **摘要**: 修复了在对话重试时，系统为失败的工具调用合成的“aborted”输出ID不稳定的问题，确保对话历史的身份一致性。

7.  **[Apps] 使Apps指南对MCP的可用性做出反应**
    - **PR**: [#30226](https://github.com/openai/codex/pull/30226)
    - **摘要**: 当Apps MCP在对话中恢复可用时，允许Apps相关的使用指南动态添加到模型上下文中，帮助模型更好地理解和使用可用的工具。

8.  **[Custom Tools] 保留自定义工具调用的命名空间**
    - **PR**: [#30302](https://github.com/openai/codex/pull/30302)
    - **摘要**: 在工具调用的序列化和反序列化过程中，保留可选的命名空间信息。这有助于区分不同来源或不同版本的同名工具，改进了对复杂工具生态的支持。

## 功能需求归类

- **多平台与集成**：对 **Linux桌面客户端** 的需求呼声最高（#11023）；对于**Windows平台**，集中反馈了沙箱失败（#29072）、编辑器空白（#21863）、进程残留（#29408）及Git权限（#19190）等兼容性和稳定性问题。
- **成本与速率限制**：用户对 `gpt-5.5` 模型的**速率限制和成本飙升**（#28879、#29955）感到非常不满，这直接影响了开发效率和订阅价值。
- **数据隐私与安全**：开发者反复要求一种**排除敏感文件**（#2847、#24993）的机制，如 `.codexignore` 文件，以防止AI代理意外读取或上传隐私数据。
- **用户体验与交互**：用户希望恢复 **`/undo` 命令**（#9203）来撤销误操作；同时要求在**执行文件编辑前进行确认**（#24325），以获得对AI行为的控制感。
- **认证与身份管理**：企业用户遇到了**OAuth令牌频繁失效**（#28672）的问题，社区也在推动**MCP OAuth流程的健壮性**改进（#30292等系列PR）。

## 开发者关注点

- **成本激增成为首要痛点**：`gpt-5.5` 模型的速率限制和成本激增至10-20倍，导致订阅额度迅速耗尽，这严重干扰了开发者的正常使用，是目前社区中最核心和紧迫的痛点。
- **桌面应用稳定性仍然是心病**：无论是Windows还是macOS，用户都报告了各种卡死、崩溃、进程残留和功能故障，这表明桌面客户端的稳定性仍有很大的提升空间。
- **对数据持久化和性能的担忧**：`SQLite`日志导致SSD寿命缩短的问题虽然已修复，但反映出用户对Codex在后台行为（如日志写入、Git轮询）对磁盘和CPU产生潜在影响的担忧。
- **期待更精细的控制粒度**：从对 `.codexignore` 的长期需求，到要求编辑前确认、恢复 `/undo` 功能，都表明开发者希望获得对AI代理行为的更大控制权和安全感。

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-28 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-28

## 今日更新概览

过去24小时内，Gemini CLI 项目无新版本发布，但社区讨论活跃。项目仓库共有 **50 个议题** 和 **18 个拉取请求** 获得更新，主要集中在 **Agent 行为可靠性**、**安全加固** 以及 **路径与配置解析** 等方向的修复与功能提案上。

## 社区热点 Issues

1. **浏览器控制功能提案** ([#15956](https://github.com/google-gemini/gemini-cli/issues/15956))
   - **摘要**: 提议为 Gemini CLI 增加通过混合架构（语义代理 + 视觉代理）控制浏览器能力，以优化成本和速度。
   - **影响场景**: 自动化 Web 测试、数据采集、端到端流程执行。
   - **社区反应**: 讨论热烈，共 14 条评论，是近期最受关注的功能方向之一。

2. **子代理达到最大轮次后误报成功** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
   - **摘要**: `codebase_investigator` 等子代理在达到最大对话轮次后，本应被中断，但系统错误地报告任务成功。
   - **影响场景**: 依赖子代理结果进行自动化诊断或代码操作。
   - **社区反应**: 用户反馈强烈（2 个 👍），质疑 Agent 的状态报告可靠性，是 P1 级 Bug。

3. **通用型 Agent 挂起** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
   - **摘要**: 当 Gemini CLI 调用“通用型 Agent”时，任务会无限期挂起，用户反馈等待长达一小时也无法完成。
   - **影响场景**: 任何需要通用 Agent 处理的复杂任务。
   - **社区反应**: 获得 8 个 👍，是用户反馈最频繁的稳定性问题之一，表明 Agent 调度逻辑存在严重缺陷。

4. **Shell 命令执行后卡在“等待输入”** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
   - **摘要**: 执行完简单 CLI 命令后，终端状态仍显示为“Waiting input”，导致后续流程挂起。
   - **影响场景**: 所有依赖 Shell 工具的任务流程。
   - **社区反应**: 用户反馈该问题反复出现，严重影响日常使用体验。

5. **Agent 不主动使用自定义技能和子代理** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
   - **摘要**: 即使创建了特定技能的 Agent，主模型在相关任务中也不会主动调用它们，必须用户明确指令。
   - **影响场景**: 高级用户通过自定义 Agent 提升开发效率的场景。
   - **社区反应**: 开发者认为这削弱了 Agent 功能的实际价值。

6. **安全：Auto Memory 日志中缺少确定性脱敏** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
   - **摘要**: Auto Memory 功能在将敏感内容发送给模型前，脱敏策略不够可靠，且日志可能记录敏感信息。
   - **影响场景**: 使用自动记忆功能处理包含密钥或密码的项目。
   - **社区反应**: 关注度高，是安全领域的关键 Bug。

7. **Shell 参数展开导致意外执行** ([由 PR #28175 关联修复])
   - **摘要**: 通过在 PR 中修复，确认了允许列表中的 Shell 命令若包含参数展开（如 `${VAR}`），可能在非交互模式下被非法执行。
   - **影响场景**: 使用 YOLO 模式或自动化脚本执行 Shell 命令。
   - **社区反应**: 直接反映在 PR 的积极修复中，社区核心关注点。

8. **`settings.json` 配置被浏览器 Agent 忽略** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))
   - **摘要**: 用户通过配置文件设置的 `maxTurns` 等参数，对浏览器 Agent 无效。
   - **影响场景**: 需要精细控制浏览器子 Agent 行为的高级用户。
   - **社区反应**: 用户指出这是严重的配置覆盖问题，导致个性化设置形同虚设。

9. **子代理运行权限失控** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))
   - **摘要**: 升级到 v0.33.0 后，用户在配置中禁用了代理功能，但子代理仍然被调用执行。
   - **影响场景**: 只希望使用 MCP 功能、不希望 Agent 自主操作的开发者。
   - **社区反应**: 用户明确表达了安全与可控性诉求。

10. **`@` 引用文件路径解析错误** ([由 PR #28053 关联修复])
    - **摘要**: 模型在调用 `read_file` 等工具时，如果传递以 `@` 开头的路径（如在 `@policies/new-policies.txt` 中），会报“文件未找到”。
    - **影响场景**: 任何需要对对话中引用的文件进行操作的场景。

## 重要 PR 进展

1. **安全加固：要求批准 Bot 补丁构件** ([#28178](https://github.com/google-gemini/gemini-cli/pull/28178))
   - **内容**: 在 Bot 自动发布流水线中增加显式批准机制，防止未经验证的补丁被应用。
   - **影响**: 增强了 CI/CD 管道安全性，属于“失败-关闭”模式（fail-closed）。

2. **新增功能：添加评估覆盖率报告命令** ([#28169](https://github.com/google-gemini/gemini-cli/pull/28169))
   - **内容**: 新增 `eval:coverage` 命令，可交叉引用工具注册表与评估清单，报告内置工具的评估覆盖情况。
   - **影响**: 为工具开发者和维护者提供量化评估覆盖度的能力，有利于提升测试质量。

3. **安全修复：要求 Shell 参数展开时确认** ([#28175](https://github.com/google-gemini/gemini-cli/pull/28175))
   - **内容**: 将包含参数展开的允许列表 Shell 命令降级为“需确认”，并在非交互模式下直接禁止。
   - **影响**: 解决了因 Shell 变量展开导致的潜在安全风险。

4. **Bug 修复：A2A 服务器深度合并用户与工作区设置** ([#28094](https://github.com/google-gemini/gemini-cli/pull/28094))
   - **内容**: 修复 A2A 服务器中用户设置和工作区设置仅进行浅合并的问题。
   - **影响**: 保证工作区设置能正确覆盖用户设置的深层字段（如 `tools`, `telemetry`）。

5. **Bug 修复：防止消息检查器误判空 Parts 数组** ([#28068](https://github.com/google-gemini/gemini-cli/pull/28068))
   - **内容**: 修复了 `isFunctionCall()` 和 `isFunctionResponse()` 函数因空数组的 `every()` 方法真空性而返回 `true` 的逻辑缺陷。
   - **影响**: 消除了因错误识别空消息导致的潜在 Agent 行为异常。

6. **Bug 修复：缓冲聊天压缩遥测数据直到 SDK 初始化** ([#28093](https://github.com/google-gemini/gemini-cli/pull/28093))
   - **内容**: 修复 `logChatCompression()` 函数在未使用标准缓冲机制时直接发送遥测数据的问题。
   - **影响**: 保证了遥测数据在 SDK 完全初始化后才会被发送，提升企业级应用的数据完整性。

7. **功能修复：防止 Agent 在任务失败时静默扩展范围** ([#28172](https://github.com/google-gemini/gemini-cli/pull/28172))
   - **内容**: 当 Agent 初始方法失败时，会静默地切换到其他策略（如运行脚本），此 PR 通过强化提示指令来阻止这一行为。
   - **影响**: 让 Agent 行为更可预测，避免未授权的文件操作。

8. **Bug 修复：`@` 引用文件路径防御性解析** ([#28053](https://github.com/google-gemini/gemini-cli/pull/28053))
   - **内容**: 对以 `@` 为前缀的文件路径进行全面的防御性路径解析。
   - **影响**: 解决了以此种方式引用文件时出现的“File not found”生产环境 Bug。

9. **Bug 修复：模板替换时保留 `$` 序列** ([#28055](https://github.com/google-gemini/gemini-cli/pull/28055))
   - **内容**: 修复系统提示模板替换函数在遇到 `$$`、`$&` 等 `$` 序列时会错误解析的问题。
   - **影响**: 保证包含 `$` 符号的技能或工具描述能被正确应用。

10. **Bug 修复：MCP 工具名使用最长前缀匹配** ([#28033](https://github.com/google-gemini/gemini-cli/pull/28033))
    - **内容**: 当 MCP 服务器名包含下划线时，修复了工具名解析错误的问题。
    - **影响**: 提升了 MCP 工具路由的准确性和稳定性。

## 功能需求归类

从近期议题中可以观察到用户对以下功能方向有持续诉求：
- **Agent 行为与可靠性**：用户希望 Agent 能更准确地报告状态（如议题 #22323）、不要随机挂起（#21409）、主动调用已创建的技能（#21968）、并遵循配置限制（#22267）。
- **Agent 安全与权限控制**：用户要求更强的命令执行前审批（#22672、PR #28175）、更可靠的日志脱敏（#26525）、以及对 Agent 自主调用子角色的控制（#22093）。

## 开发者关注点

- **工具调用限制**：当工具数量超过 128 个时，Gemini CLI 会返回 400 错误（#24246），这限制了复杂项目或大量 MCP 工具的使用。
- **浏览器代理稳定性**：浏览器子代理在 Wayland 环境下失败（#21983），并且其对配置文件的忽略（#22267）也引起用户不满。
- **终端兼容性与体验**：存在外部编辑器退出后终端显示异常（#24935）、终端缩放时闪烁（#21924）以及 Shell 命令等待输入（#25166）等体验问题。
- **自定义技能集成**：用户报告，即使定义了相关技能（如 Gradle、Git），通用 Agent 也不会主动使用它们（#21968），这严重影响了用户构建个性化开发助手的使用体验。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是为您生成的 2026-06-28 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-28

## 今日更新概览

过去24小时内，社区活跃度较高，主要集中在新版本 v1.0.66 的多个回归性 Bug 报告，特别是 Windows 平台和终端渲染方面。此外，关于 Ubuntu Keychain 认证问题的长期 Issue (#2165) 也迎来了新的讨论，开发者反馈强烈。

## 版本发布

昨日无新版本发布。

## 社区热点 Issues

1.  **#2165 [Ubuntu Keychain 支持损坏]**
    - **影响场景**: Ubuntu 系统用户尝试配置 Copilot CLI 认证时，遭遇 Keychain 访问失败，且官方文档中的故障排除步骤存在错误。
    - **社区反馈**: 获得 20 👍，是目前讨论热度最高的 Bug 之一。用户 `@AndreaPi` 指出了文档错误和 `secret-tool` 未安装时的具体行为。

    - **链接**: [Issue #2165](https://github.com/github/copilot-cli/issues/2165)

2.  **#3958 [Windows: v1.0.66 启动 .bat/.cmd MCP 服务器失败（回归）]**
    - **影响场景**: Windows 用户在 v1.0.66 上，如果配置的 MCP 服务器命令为 `.bat` 或 `.cmd` 文件且带有参数，将无法启动，并报错 `The syntax of the command is incorrect.`。
    - **社区反馈**: 这是一个刚从 v1.0.65 升级后出现的回归问题，对依赖批处理脚本的用户影响较大。

    - **链接**: [Issue #3958](https://github.com/github/copilot-cli/issues/3958)

3.  **#3962 [最新版 Copilot v1.0.65 无法工作]**
    - **影响场景**: 用户在启动 Copilot CLI 后，应用卡在“Working”状态，无法正常响应用户输入。
    - **社区反馈**: 创建者 `@wangvisual` 描述了卡死现象，但该问题具体原因尚不明确，可能为个例。

    - **链接**: [Issue #3962](https://github.com/github/copilot-cli/issues/3962)

4.  **#3949 [Windows 11 复制功能失效]**
    - **影响场景**: 在 Windows 11 上，Copilot 提示内容已复制到剪贴板，但实际上剪贴板为空。
    - **社区反馈**: 用户 `@credmond` 认为这是一个严重 Bug，并建议在通知用户前进行剪贴板内容验证。

    - **链接**: [Issue #3949](https://github.com/github/copilot-cli/issues/3949)

5.  **#3959 [删除文本后出现幽灵字符]**
    - **影响场景**: 在 Copilot CLI 的 TUI 文本框中退格或删除字符后，原有字符的像素点未被完全擦除，产生视觉残留。
    - **社区反馈**: 这是一个关于终端渲染的视觉 Bug，虽然不致命，但影响用户体验。

    - **链接**: [Issue #3959](https://github.com/github/copilot-cli/issues/3959)

6.  **#3957 [MacBook Pro 触摸板无法滚动历史]**
    - **影响场景**: 在 MacBook Pro 上使用触摸板滚动，无法查看历史消息，反而会选中之前输入的 Prompt。
    - **社区反馈**: 创建者 `@doggy8088` 认为这是一个交互方式的问题，影响对话历史浏览。

    - **链接**: [Issue #3957](https://github.com/github/copilot-cli/issues/3957)

7.  **#3955 [macOS: 文件拖拽附加功能失效（回归）]**
    - **影响场景**: 在 macOS 的 Copilot 应用中，将文件从 Finder 拖拽到 Prompt 输入框不再生成附件。
    - **社区反馈**: 用户在 v1.0.65 版本中确认此功能回归，影响开发者快速提交代码或文件进行上下文分析。

    - **链接**: [Issue #3955](https://github.com/github/copilot-cli/issues/3955)

8.  **#1799 [如何关闭 alt-screen 视图？]**
    - **影响场景**: 部分用户不习惯新引入的 alt-screen 显示模式，希望切换回原始的终端输出模式。
    - **社区反馈**: 该 Issue 已有 10 条评论和 7 个 👍，说明用户对界面变革的接受度存在分歧，呼吁提供配置入口。

    - **链接**: [Issue #1799](https://github.com/github/copilot-cli/issues/1799)

9.  **#3963 [功能请求：显示会话保留/过期日期]**
    - **影响场景**: 用户发现 Copilot 会话会无故丢失，希望能在状态栏或界面上看到当前会话的保留策略或过期时间。
    - **社区反馈**: 这是一个清晰的功能需求，反映了用户对数据持久性的担忧。

    - **链接**: [Issue #3963](https://github.com/github/copilot-cli/issues/3963)

10. **#3960 [自定义模型提供者仍消耗 AI 配额]**
    - **影响场景**: 配置了自定义模型提供者（如 OpenAI）后，AI 使用量仍从 GitHub 账户中扣除，并未使用自定义提供者的额度。
    - **社区反馈**: 这可能是计费逻辑或功能设计上的问题，对使用自定义模型的用户构成了困扰。

    - **链接**: [Issue #3960](https://github.com/github/copilot-cli/issues/3960)

## 重要 PR 进展

1.  **#3928 [添加 .gitignore 和 settings 配置] [OPEN]**
    - **链接**: [PR #3928](https://github.com/github/copilot-cli/pull/3928)
    - **状态**: 开放中，昨日有更新。由 `@tpsaint` 创建，主要更新项目配置文件。
2.  **#3737 [Jigg empire ai] [OPEN]**
    - **链接**: [PR #3737](https://github.com/github/copilot-cli/pull/3737)
    - **状态**: 开放中，昨日有更新。由 `@j2030aiNotez` 创建，描述不明确。
3.  **#570 [WIP: Add macOS installation instructions to README.md] [CLOSED]**
    - **链接**: [PR #570](https://github.com/github/copilot-cli/pull/570)
    - **状态**: 已于昨日关闭。这是一项由 Copilot Agent 创建的早期工作，旨在完善 macOS 安装说明。

## 功能需求归类

-   **终端 UI/UX 优化**:
    -   **配置自定义**: 用户反复要求能够配置或禁用 alt-screen 视图 (#1799)。
    -   **交互改进**: 需要可定制的键盘快捷键，特别是针对 `/voice` 功能的切换 (#3672)。
    -   **平台体验**: macOS 和 Windows 上的特定交互（如滚动、拖拽）出现新的 Bug (#3955, #3957, #3949)。

-   **会话与数据管理**:
    -   **上下文管理**: 用户希望得到类似 Claude Code 的 `/btw` 功能，以不污染主对话流的方式即时提问 (#2778)。
    -   **数据持久性**: 用户要求清晰展示会话的保留和过期规则，避免数据意外丢失 (#3963)。

-   **平台兼容性**:
    -   **Windows**: 成为 Bug 高发平台，特别是对 `.bat` 脚本的支持和剪贴板操作 (#3958, #3949)。
    -   **Linux**: Ubuntu Keychain 认证问题依然是长期痛点 (#2165)。

-   **模型与配额**:
    -   **配额透明化**: 用户希望明确自定义模型提供者的使用逻辑，避免混淆 GitHub 配额和自定义提供者配额 (#3960)。

## 开发者关注点

-   **Windows 兼容性成为主要痛点**：新版本在 Windows 上的问题集中爆发，包括 MCP 服务器启动失败和复制粘贴功能异常。Windows 用户可能需要暂缓升级或密切关注修复进展。
-   **终端渲染和交互 Bug 反复出现**：从幽灵字符到无法滚动，再到文件拖拽失效，终端界面的稳定性和交互逻辑仍然是高频 Bug 区域，影响日常使用体验。
-   **关键功能回归**：用户对“文件拖拽”功能在 macOS 上的回归感到失望，这表明核心功能的测试覆盖可能需要加强。
-   **账户配额使用逻辑不明确**：自定义模型提供者依然消耗 GitHub 配额的问题，暴露了后台计费逻辑可能不够清晰，开发者在使用第三方模型时会感到困惑。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，根据您提供的 GitHub 数据，我为您生成了 2026-06-28 的 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 2026-06-28

## 今日更新概览

今日社区活跃度较高，共涉及 50 条 Issue 和 50 条 PR 的更新。社区焦点集中在 **WSL 路径兼容性**、**TUI 会话管理**以及 **LLM 提供商的集成问题** 上。值得留意的是，过去 24 小时内没有新的版本发布，但核心维护者提交了关于会话重命名和撤销功能的 PR，显示出对用户体验优化的持续投入。

## 社区热点 Issues (10条)

1.  **#23153: [FEATURE] 使用加密货币支付** - 该功能请求获得社区高度关注，有 24 个 👍 和 13 条评论。用户希望在 OpenCode Go 订阅服务中增加加密货币支付选项。这反映出用户对支付方式多样性的需求。
    - 链接: `https://github.com/anomalyco/opencode/issues/23153`

2.  **#13877: [BUG] TUI `/sessions` 选择器仅显示最近会话** - 一个持续了近4个月的 Bug，仍有 9 条评论。用户报告 TUI 中的会话选择器不能列出所有历史会话，影响长期使用者的体验。
    - 链接: `https://github.com/anomalyco/opencode/issues/13877`

3.  **#19473: [BUG] 桌面客户端向 WSL 服务端发送 UNC 路径，破坏所有的 Bash 工具调用** - 一个关键的平台兼容性问题，收到 7 条评论。Windows 桌面版与 WSL 后端结合使用时，路径格式不兼容导致所有 shell 命令执行失败。该问题已有**公开的临时解决方案**。
    - 链接: `https://github.com/anomalyco/opencode/issues/19473`

4.  **#12219: [BUG] “请求需要更多积分” 错误** - 一个影响免费模型使用的常见问题，有 7 条评论。使用 Kimi 2.5 Free 等模型时，若积分不足会直接报错，阻挡了部分用户的试用流程。
    - 链接: `https://github.com/anomalyco/opencode/issues/12219`

5.  **#19130: [BUG] Windows ARM64 上 TUI 初始化失败** - 关注 ARM64 原生支持的 Issue，有 6 条评论。原生 ARM64 命令运行正常，但 TUI 界面因 Bun 的 FFI 动态库加载问题而崩溃。
    - 链接: `https://github.com/anomalyco/opencode/issues/19130`

6.  **#33890: [BUG] Bun 1.3.14 在 Linux x86_64 上导致段错误** - 一个影响稳定的严重 Bug，有 6 条评论。在特定 AMD CPU 上，OpenCode TUI 因捆绑的 Bun 运行时问题而崩溃。
    - 链接: `https://github.com/anomalyco/opencode/issues/33890`

7.  **#30895: [BUG] 桌面版 v1.16.0 将 WSL 路径转换为 Windows 路径** - 与 #19473 类似的 WSL 路径问题，有 6 条评论。新版本在连接 WSL 服务端时，错误地将 WSL 的 `/mnt/c/...` 路径转换为 Windows 路径，导致文件和会话列表功能损坏。
    - 链接: `https://github.com/anomalyco/opencode/issues/30895`

8.  **#33213: [BUG] `opencode serve` 长时间运行导致内存泄漏** - 一个服务端稳定性问题，有 5 条评论。Server 模式下，进程内存和交换空间持续增长，可能影响生产环境的稳定性。
    - 链接: `https://github.com/anomalyco/opencode/issues/33213`

9.  **#34228: [BUG] 项目技能暴露不一致** - 一个由社区发现的新 Bug，有 5 条评论。用户在多个会话间发现，模型能够看到的项目技能集合是不稳定且不完整的，这直接影响 Agent 的工具使用能力。
    - 链接: `https://github.com/anomalyco/opencode/issues/34228`

10. **#34207: [BUG] 模型选择在回答后静默重置** - 一个影响工作流的 Bug，有 4 条评论。当 Agent 在运行时用户手动切换了模型，但 Agent 提问并得到用户回答后，模型会被静默地切换回原来的模型，导致用户的选择无效。
    - 链接: `https://github.com/anomalyco/opencode/issues/34207`

## 重要 PR 进展 (10条)

1.  **#34264: 添加会话重命名功能** - 由核心维护者 `thdxr` 提交。该 PR 实现了端到端的会话重命名，涉及 Schema、核心逻辑、协议接口和 UI。这是一个社区呼声较高的功能，与 Issue #25848 相关。
    - 链接: `https://github.com/anomalyco/opencode/pull/34264`

2.  **#34263: 为 V2 会话连接撤销/重做和回退功能** - 另一个由 `thdxr` 提交的关键 PR。它为新的会话系统打通了撤销、重做和回退的 UI 操作，显著提升了编辑体验。该 PR 已合并。
    - 链接: `https://github.com/anomalyco/opencode/pull/34263`

3.  **#34267: 修复 LLM 系统消息折叠** - 由 `kagura-agent` 提交的贡献。修复了当插件只追加一条消息时，先前合并的系统消息可能被错误地“折叠”或重复处理的 Bug。该 PR 正在开放中。
    - 链接: `https://github.com/anomalyco/opencode/pull/34267`

4.  **#29881: 修复 TUI 在 Wayland 系统上的粘贴功能** - 一个改善 Linux 兼容性的 PR。它增加了对 `wl-paste` 命令的支持，解决了在没有 `xsel`/`xclip` 的 Wayland 环境下无法使用 `Ctrl+V` 粘贴的问题。
    - 链接: `https://github.com/anomalyco/opencode/pull/29881`

5.  **#34256: 修复服务端拒绝外部目录提示** - 针对 WSL 路径问题的修复 PR。在查找实例前，服务端会拒绝外部目录的提示，这有助于解决 #19473 和 #30895 中描述的路径混淆问题。
    - 链接: `https://github.com/anomalyco/opencode/pull/34256`

6.  **#34261: 修复非减少性压缩** - 由 `cwj2001` 提交，修复 Issue #27924。当上下文压缩无法减少 token 消耗时，该 PR 阻止其进入无限循环，提高了系统的稳定性。
    - 链接: `https://github.com/anomalyco/opencode/pull/34261`

7.  **#34220: 为会话列表添加粘性表头** - 一个增强桌面应用用户体验的 PR。当滚动会话列表时，创建新会话的按钮将保持可见，方便操作。
    - 链接: `https://github.com/anomalyco/opencode/pull/34220`

8.  **#34234: 修复附件文件路径保留** - 修复了两个旧 Issue。该 PR 确保了当用户通过拖拽或粘贴添加文件附件时，文件的原始路径能够被保留并传递给 Agent，而不仅仅是嵌入数据。
    - 链接: `https://github.com/anomalyco/opencode/pull/34234`

9.  **#34242: 防止管道输入破坏 TUI 界面** - 修复了多个旧 Issue。解决了当标准输入被重定向时，TUI 界面被污染和键盘输入无效的问题。该 PR 替代了之前被关闭的修复。
    - 链接: `https://github.com/anomalyco/opencode/pull/34242`

10. **#34246: 添加 `tool_output_expanded_default` 选项** - 一个 TUI 配置增强。允许用户设置在 TUI 中查看工具输出时，默认是否展开，以满足不同用户的阅读习惯。
    - 链接: `https://github.com/anomalyco/opencode/pull/34246`

## 功能需求归类

从今日的 Issue 中可以看出，社区用户的需求主要集中在以下几个方向：

- **支付与订阅**: 用户明确要求增加**加密货币**支付选项 (#23153)。

- **会话管理**: 用户期望增强的会话管理功能，包括**手动重命名会话** (#25848) 和 **TUI 会话列表的完整显示** (#13877)。

- **平台兼容性**: 大量的 Issue 集中在 **Windows 与 WSL 的互操作** 上，特别是路径处理问题 (#19473, #30895)，以及对 **Windows ARM64** 的原生支持 (#19130)。

- **性能与稳定性**: 用户报告了 **Server 模式下的内存泄漏** (#33213) 和特定环境下的 **段错误** (#33890)，这些都是影响长时间稳定使用的痛点。

- **模型支持与体验**: 用户希望 OpenCode 能更好地集成**第三方模型**（如企业 GitHub Copilot 的模型 #34030），并关注不同模型在 **Prompt Cache** (#31348) 和 **功能调用（Tool Calling）** 上的兼容性 (#34113, #34130)。

## 开发者关注点

社区开发者在反馈中展现出以下共同的痛点和关注点：

- **路径处理是跨平台的首要难题**: 以 Windows 和 WSL 组合为例，频繁的路径转换错误是当前最影响开发体验的 Bug。用户期待更智能、更统一的路径解析机制。

- **会话体验的细节亟待优化**: “模型选择静默重置”、“技能暴露不一致”、“TUI 会话选择器不完整” 等 Bug 会直接打断工作流，开发者对这类影响“交互连续感”的问题非常敏感。

- **成本和资源管理困惑**: 如 #12219 的积分报错和 #31348 的 Prompt Cache 问题，开发者希望工具能提供更清晰的资源消耗信息，并在成本控制上更稳定可靠。

- **对模型差异化的关注**: 开发者已不满足于基本的模型接入，开始关注不同模型在图像输入、长上下文、链式思考（Chain-of-Thought）等具体能力上的兼容性差异，并希望工具能更智能地处理这些差异。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-28

## 今日更新概览
- 发布 v0.19.2-nightly.20260627 快照版本，修复了 `web_fetch` 的 JSON 回退问题。
- 过去 24 小时内共有 **27 个 Issues** 和 **50 个 PRs** 被更新，社区活跃度较高，其中大量讨论集中在代理超时、文件编辑重试循环、输出截断以及多设备同步等开发者痛点。
- **2 个新 Bug 报告**（#5942、#5941）涉及 Anthropic 缓存命中率低和滚动行为异常，吸引了维护者关注。

## 版本发布

### v0.19.2-nightly.20260627.d93bec905
- **修复**：`fix(core): allow web_fetch JSON fallback` — 允许调用 `web_fetch` 工具时以 JSON 格式回退，提升网络请求的容错性。
- **其他**：发布流程自动化 CI 更新。
- 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905

## 社区热点 Issues（10 条）

1. **#5838 - 允许用户调整代理发起命令的超时时间**
   `[priority/P2, feature-request]`
   用户反馈 AI 代理触发的进程超时不可配置，希望增加设置项。目前评论区已给出截图示例，维护者`@tt-a1i`参与了讨论。
   https://github.com/QwenLM/qwen-code/issues/5838

2. **#5836 - 任务清单 / todos 能否持久化到项目内跨设备同步**
   `[priority/P2, feature-request]`
   用户希望在创建 todos、plans、memories 时可以选择保存位置（如 `.qwen/todos`），以便跨设备 Git 共享，避免单设备丢失状态。
   https://github.com/QwenLM/qwen-code/issues/5836

3. **#5823 - `/loop` 定时任务静默触发，模型无法列出或停止自己的任务**
   `[priority/P2, bug/feature-request]`
   用户发现后台 cron 任务无任何可见性，每次新会话模型都会自动开始执行从未被告知的任务。建议增加任务列表和终止能力。
   https://github.com/QwenLM/qwen-code/issues/5823

4. **#5756 - 默认 8K 输出上限导致大文件写入重复截断与重试循环**
   `[priority/P2, bug]`
   当模型未显式设置 `max_tokens` 时，`CAPPED_DEFAULT_MAX_TOKENS=8000` 会截断大输出（如生成 wiki 文件），导致代理陷入“失败-重试”循环。该问题引发较多讨论，目前已关闭。
   https://github.com/QwenLM/qwen-code/issues/5756

5. **#5889 - `/loop` 添加 `.qwen/loop.md` 任务文件以支持持续编辑**
   `[priority/P2, feature-request]`
   用户建议为长时间运行的 `/loop` 模式提供一个持久化、可编辑的任务文件（`.qwen/loop.md`），以便中途修改指令而无须重启循环。
   https://github.com/QwenLM/qwen-code/issues/5889

6. **#5922 - `cua-driver.exe` 在任务结束后持续高 CPU 占用**
   `[priority/P2, bug]`
   在 Windows 上，`cua-driver.exe`（属于 `computer_use` 工具）即使代理空闲也保持高 CPU 占用，影响资源使用。维护者已标记为需要排查。
   https://github.com/QwenLM/qwen-code/issues/5922

7. **#5897 - 启动时反复打印 "unknown format 'uint64' ignored in schema" 警告**
   `[priority/P3, bug]`
   控制台在启动时输出多条 Schema 格式警告，虽然不影响功能但严重污染交互界面。已关闭。
   https://github.com/QwenLM/qwen-code/issues/5897

8. **#5942 - Anthropic 端点可避免的缓存未命中导致成本膨胀**
   `[priority/P2, bug]`
   用户指出 Qwen Code 在调用 Anthropic 协议时，侧查询使用了不同前缀，且断点会随最后一条消息移动，导致缓存命中率远低于 Claude Code 的接近 100%。维护者已确认该问题。
   https://github.com/QwenLM/qwen-code/issues/5942

9. **#5941 - 大模型输出时向上滚动滚轮直接跳到顶部**
   `[priority/P2, bug]`
   用户报告在模型生成内容过程中，向上滚动鼠标滚轮会跳跃到页面顶部，而不是像普通浏览器那样只滚动一段距离。影响阅读体验。
   https://github.com/QwenLM/qwen-code/issues/5941

10. **#5936 - 研究：Claude Chrome 扩展架构与 Qwen Code 浏览器 SDK 方向**
    `[type/feature-request, need-discussion]`
    由 `@yiliang114` 发起的架构研究 issue，对比 Claude 扩展与当前 daemon/SDK 架构，意图指导后续 Chrome 扩展重写工作（关联 #5777）。
    https://github.com/QwenLM/qwen-code/issues/5936

## 重要 PR 进展（10 条）

1. **#5835 - 重新应用提供商安装计划时保留选定的模型**
   避免重新认证、重新连接 ACP 或升级后模型被重置。核心用户体验改进。
   https://github.com/QwenLM/qwen-code/pull/5835

2. **#5911 - 统一桌面端 source slug 验证错误处理**
   保持严格的路径遍历防护，同时将遗留/无效 slug 路径返回结构化验证结果，减少未捕获的异常。
   https://github.com/QwenLM/qwen-code/pull/5911

3. **#5888 - feat(channels): qwen tag — 多人频道驻留代理（RFC + Phase 0）**
   引入基于钉钉的多人频道代理，复用现有 channel 适配器和 `qwen serve` 守护进程。社区对该功能讨论积极。
   https://github.com/QwenLM/qwen-code/pull/5888

4. **#5943 - 为 web-shell 添加错误边界，防止渲染崩溃白屏**
   三层错误边界（通用、消息体、内容块），使局部渲染失效时整体界面仍可操作。
   https://github.com/QwenLM/qwen-code/pull/5943

5. **#5030 - 支持恢复中断的轮次，无需合成 "continue" 消息**
   为 SDK/stream-json 调用者提供一流的断点继续能力，避免在对话历史中插入虚假消息。
   https://github.com/QwenLM/qwen-code/pull/5030

6. **#5777 - 通过 daemon 直连架构复活 Chrome 扩展**
   基于 #5626 提案重写扩展，不再依赖原生消息主机，直接通过 `qwen serve` 的 HTTP+SSE 接口工作。仍在开放中。
   https://github.com/QwenLM/qwen-code/pull/5777

7. **#5902 - QQ 机器人流式改进：空闲刷新、移除分文限制、Markdown 表格修复**
   重构了 QQ 机器人的流式行为：2 秒空闲刷新、取消 2000 字符限制、添加被动回复 TTL 和 Markdown 表格检测。
   https://github.com/QwenLM/qwen-code/pull/5902

8. **#5919 - 注册 Telegram 机器人命令菜单**
   调用 Telegram API 注册命令菜单，增加 `/start` 和 `/cancel` 命令，使菜单只显示本地可处理的命令。已合并关闭。
   https://github.com/QwenLM/qwen-code/pull/5919

9. **#5856 - 桌面端语音听写功能**
   为桌面 app 添加 `/voice` 语音输入，与 CLI 和 Web Shell 功能对齐，工具栏增加麦克风按钮和录音状态条。
   https://github.com/QwenLM/qwen-code/pull/5856

10. **#5944 - 修复重复 shell 检查变体循环**
    为重复的只读 Git 检查（`git status`、`git diff` 等）增加一直有效的循环守卫，当模型连续调用相似命令时停止运行，防止无限循环。
    https://github.com/QwenLM/qwen-code/pull/5944

## 功能需求归类

根据过去 24 小时内更新的 Issues，用户反复提到的功能方向包括：

- **跨设备与项目同步**：以 #5836 为代表，用户希望 todos、plans、memories 能持久化到项目目录中，通过 Git 实现多设备/多人共享。
- **代理行为可控性**：包括 #5838（超时配置）、#5823（后台任务可见性与控制）、#5889（循环任务可编辑文件），反映出对代理透明度和用户控制的强烈需求。
- **浏览器/频道扩展**：多个 Issues 和 PRs 覆盖 Chrome 扩展、Telegram 机器人、QQ 机器人、钉钉频道、Web Shell 增强，体现了多平台部署的明确方向。
- **性能与成本优化**：#5756（输出截断）、#5942（缓存命中率）、#5922（后台进程 CPU 占用）均指向运行时资源效率问题。
- **视觉与交互体验**：#5941（滚动跳顶）、#5897（格式警告污染界面）、#5933（MCP 对话框边框裁剪）属于 UI/UX 细节缺陷，社区欢迎贡献者修复。
- **模型与工具集灵活性**：#5597（vision 模型降级）、#5932（文件编辑重试循环修正）反映了对多模型切换和工具调用鲁棒性的需求。

## 开发者关注点

- **输出截断仍是核心痛点**：#5756 的修复已在讨论中，但 #5942 揭示的 Anthropic 缓存问题说明 token 管理仍需系统级优化。
- **后台任务缺乏透明度**：多个 issue（#5823、#5889）指出 `/loop` 和 cron 任务无法被模型查看或停止，开发者希望添加任务管理命令。
- **Windows 平台资源消耗问题**：#5922 中 `cua-driver.exe` 的高 CPU 占用即使在空闲时也存在，需要维护者优先排查。
- **文件编辑重试循环**：#5932 记录了一个典型场景：编辑两个文件时，成功一个后重试另一个导致无限循环，社区期望有更智能的退出机制。
- **安全与路径验证**：#5908、#5909 等继续推进 source slug 的严格校验和结构化错误，防范路径遍历漏洞，维护者表示欢迎贡献者参与。

</details>