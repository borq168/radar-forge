# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-23 03:03 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区横向对比日报 | 2026-07-23

## 1. 今日横向概览
今日仅有 **Claude Code** 与 **Kimi Code** 两个工具产出有效社区动态摘要，OpenAI Codex 和 OpenCode 的自动化摘要生成失败，无法纳入对比。Claude Code 发布了 v2.1.218，重点优化后台子代理与无障碍体验，社区围绕桌面工具缺陷、任务工具回归、沙盒回归等问题展开了大量讨论。Kimi Code 发布 0.29.0，新增 ACP 思考努力程度选择，社区焦点集中在权限配置一致性、模型消费感知、终端交互体验和 ACP 协议健壮性上。两个社区在**工具链可靠性、配额透明度、交互一致性**方面表现出共同的焦虑。

## 2. 各工具活跃度对比
| 工具 | 今日新增/更新 Issues | 今日新增/更新 PRs | 版本发布 | 备注 |
|------|---------------------|-------------------|----------|------|
| Claude Code | 50 个 Issue 更新 | 9 个 PR 更新 | v2.1.218 | 热点 Issue 含 57 评论、99 赞等高互动 |
| Kimi Code | 32 条 Issue 更新 | 50 条 PR 动态 | @moonshot-ai/kimi-code@0.29.0 | 多个 PR 修复历史遗留问题 |
| OpenAI Codex | 摘要生成失败 | — | — | — |
| OpenCode | 摘要生成失败 | — | — | — |

*注：Kimi Code 的“50 条 PR 动态”统计口径可能包含已合入的 PR，Claude Code 的 9 个 PR 为“今日进展”数；两者直接可比性有限，但均反映当日合并与修复活跃度。*

## 3. 共同出现的功能方向
- **桌面应用与终端体验对齐**
  Claude Code（#71726）要求桌面应用支持工具调用间的即时转向，削弱的能力与 CLI 不一致；Kimi Code 则大量 TUI 体验 Issue（#2039 闪烁、#2007 补全优先级、#2051 链接可点击）表明终端交互打磨是两方共同诉求。

- **配额与模型消耗透明度**
  Claude Code 用户抱怨 Fable 5 额度提示混乱（#80409 等），Kimi Code 用户反映 K3 模型输入 token 异常消耗（#2031）和近期配额消耗加快（#2072），两者均要求更清晰、实时的用量感知（Kimi #872 要求状态栏显示配额）。

- **任务/计划与结构化工作流中断**
  Claude Code 的任务工具（TaskCreate/TodoWrite）突然回归（#80210），计划命令改进（PR #18217）；Kimi Code 则通过双模型路由（PR #1996）和技能目录管理（#1983）尝试优化工作流编排，结构化任务管理的稳定性是共同痛点。

- **权限与安全策略一致性**
  Claude Code 的沙盒回归（#79997）和 Kimi Code 的交互模式忽略 hooks 与权限规则（#2070）都暴露出安全机制在不同运行模式下的不一致，影响用户信任。

- **插件生态与可扩展性阻塞**
  Claude Code 插件市场“已发布”不可见（#80263），Kimi Code 希望从 GitLab 安装插件（#2063），两个社区均面临插件发现与分发机制不成熟的问题。

## 4. 差异化定位分析
- **Claude Code**：侧重**桌面应用 + CLI 双端统一**，并与 Claude.ai 生态打通，面向习惯 Anthropic 模型和 Max 订阅的专业开发者；当前核心矛盾是桌面端功能滞后于 CLI，以及沙盒、认证等基础设施稳定性问题。
- **Kimi Code**：明显偏向**终端交互（TUI）与 ACP 协议**，以 Moonshot 的 K 系列模型为底座，用户群体对配额消耗极为敏感；社区诉求集中在 TUI 交互细节、多模型路由、中文支持等，呈现更“工具化”和“成本可控”的定位。
- **OpenAI Codex / OpenCode**：今日无数据，无法对比。

## 5. 社区活跃度记录
- **Claude Code**：单日 50 个 Issue 更新，且 Top 1 Issue 收到 57 评论和 25 赞，显示社区卷入度高；版本发布节奏稳定，且维护者已关闭部分高热度缺陷（如 #80002）。综合来看，用户反馈活跃且能推动维护者响应。
- **Kimi Code**：PR 动态 50 条，说明代码合并与修复吞吐量较大，且多个 PR 直接关联历史 Issue（如 #2081 修复 #1931，#2074 修复 #1925），维护者响应链清晰。Issue 侧虽不及 Claude Code 热度集中，但功能需求、体验优化类 Issue 持续性高，生态建设期特征明显。
- **OpenAI Codex / OpenCode**：摘要生成失败，无法评估当日活跃度。

## 6. 有证据支撑的观察
- **双端体验一致性成为显性竞争因素**：Claude Code 的桌面应用在工具调用、转向输入、远程控制等方面的缺陷，与 Kimi Code 在 TUI 交互上的打磨诉求，共同指向“开发者在哪里使用 AI 编程”这一体验连贯性问题。
- **模型配额与成本危机正在侵蚀用户信任**：两个工具均出现用户对“配额突然耗尽”“消耗异常加速”的抱怨，且维护者尚未提供彻底透明的解决机制，可能成为用户流失的导火索。
- **安全机制在不同运行模式下的割裂感加剧**：Claude Code 的沙盒回归仅在特定安装方式下触发，Kimi Code 的权限规则在交互模式下失效，都表明安全策略未经过多模式一致性测试，是当前 CI/CD 流水线对手最忌讳的可靠性风险。
- **插件生态仍处于早期阶段**：Claude Code 的插件市场“幽灵发布”和 Kimi Code 的安装源扩展需求，显示两个工具的插件体系均未达到“可发现、可安装、可信任”的成熟度，生态飞轮尚未启动。
- **今日暂无明确跨工具信号**：由于仅有 Claude Code 和 Kimi Code 两个有效数据源，无法从中提炼出覆盖整个 AI CLI 赛道的明确趋势，以上观察仅基于两个社区的独立证据归纳。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-23

## 1. 今日更新概览
过去 24 小时仓库发布 v2.1.218 版本，将 `/code-review` 改为后台子代理以节省对话上下文，并改善屏幕阅读器体验。社区活跃度维持高位，新增及更新 50 个 Issue 和 9 个 Pull Request，其中 macOS 桌面端工具调用缺陷、桌面应用转向对齐、任务工具回归等问题引发大量讨论。

## 2. 版本发布
**v2.1.218**
- `/code-review` 改为后台子代理运行，审查结果不再占用主对话上下文，并可保持堆叠斜杠命令作为审查目标。
- 为删除操作（`Option+Delete`、`Ctrl+W`、`Cmd+Backspace`）的单词和行删除加入屏幕阅读器公告，增强无障碍支持。

## 3. 社区热点 Issues（Top 10）

1. **#80002 [CLOSED] macOS 桌面端 Filesystem 扩展永不触发 tools/call**
   57 评论 · 25 👍
   macOS 桌面应用在 `tools/list` 成功返回后，第一方文件系统扩展从不派发 `tools/call`，日志中无任何调用记录，导致自动化流程中断。该问题已关闭，但社区反馈热度极高。
   https://github.com/anthropics/claude-code/issues/80002

2. **#13843 [OPEN] 从 Claude.ai 分享对话上下文到 Claude Code**
   25 评论 · 99 👍
   用户希望在 Claude.ai 中规划项目后，能将完整对话上下文导入 Claude Code 继续执行，避免重复描述。需求长期未解决，赞数接近 100。
   https://github.com/anthropics/claude-code/issues/13843

3. **#71726 [OPEN] 桌面应用：像 CLI 那样在工具调用间注入排队消息（转向对齐）**
   9 评论 · 16 👍
   桌面应用的 Code 窗口在任务运行时，用户输入的消息会排队至任务结束，而 CLI 可在工具调用间即时注入“转向”指令。两者行为不一致，影响流畅度。
   https://github.com/anthropics/claude-code/issues/71726

4. **#77966 [OPEN] Linux 平台 OAuth 循环：state 参数丢失**
   8 评论 · 6 👍
   在 Linux / IntelliJ 集成中，登录时重定向后 state 参数被丢弃，导致无限“sign in again”循环，影响多平台认证稳定性。
   https://github.com/anthropics/claude-code/issues/77966

5. **#78933 [OPEN] Windows 桌面 Remote Control 无法连接**
   8 评论 · 0 👍
   运行 `/remote-control` 时抛出 `Cannot read properties of undefined (reading 'session_url')`，连接和断开均失败，远程控制功能完全不可用。
   https://github.com/anthropics/claude-code/issues/78933

6. **#50894 [CLOSED] 焦点模式隐藏实质性助手消息**
   5 评论 · 4 👍
   Focus mode 原意是隐藏冗长工具输出，却错误地将工具调用之间的助手说明文字也一并隐藏，导致用户看不到关键回答。问题已关闭（stale）。
   https://github.com/anthropics/claude-code/issues/50894

7. **#80404 [OPEN] 休眠/恢复后事件循环饥饿导致 ~200% CPU 和输入延迟**
   4 评论 · 0 👍
   Windows 下休眠恢复后，空闲会话的 libuv 事件循环 `uv_backend_timeout() == 0`，造成两个核心满载旋转，数十分钟后自行终止，类似 macOS 历史问题 #62308。
   https://github.com/anthropics/claude-code/issues/80404

8. **#80263 [OPEN] 插件市场：已发布插件 “cortex” 从未出现**
   3 评论 · 0 👍
   插件在控制台显示“已发布”超过 10 天，但公开目录中搜索不到，且重新提交会产生重复条目，阻塞插件上线。
   https://github.com/anthropics/claude-code/issues/80263

9. **#79997 [OPEN] v2.1.216 沙盒回归：bwrap 无法创建目录**
   3 评论 · 2 👍
   非 root 安装且上级目录为 root 所有时，沙盒挂载失败，导致所有 Bash 工具调用在运行前即被终止，属 2.1.216 引入的严重回归。
   https://github.com/anthropics/claude-code/issues/79997

10. **#80210 [OPEN] 任务工具（TaskCreate/TodoWrite）回归**
    1 评论 · 3 👍
    `todoFeatureEnabled: true` 的情况下，结构化任务工具与 TodoWrite 自 2026-07-21 起突然不再暴露给模型，疑似账户级门控，严重影响工作流。
    https://github.com/anthropics/claude-code/issues/80210

## 4. 重要 PR 进展

1. **#18217 [CLOSED] 添加 `/planwith` 命令支持内联计划模式**
   为 `/plan` 提供直接接受提示参数的能力，避免先切换模式再输入任务的繁琐两步操作。
   https://github.com/anthropics/claude-code/pull/18217

2. **#80353 [OPEN] GCP 网关注：校验和失败时停止部署**
   在 GCP 网关部署脚本中增加二进制校验和验证，失败时终止并清理，提升安全性。
   https://github.com/anthropics/claude-code/pull/80353

3. **#80326 [OPEN] 账户配置文件插件**
   新增 `account-profiles` 插件，管理独立的 `CLAUDE_CONFIG_DIR` 环境，便于在个人、工作、客户账号间切换。
   https://github.com/anthropics/claude-code/pull/80326

4. **#80294 [OPEN] 文档修复：替换 1 个失效链接（Wayback 存档）**
   自动修复 README 中的 npm 包链接，使用 archive.org 快照，确保文档可达性。
   https://github.com/anthropics/claude-code/pull/80294

5. **#80241 [OPEN] 修复：控制台在 Claude 添加文本时滚动到历史顶部**
   解决终端输出更新时意外跳转至历史记录开头的问题，改善交互体验。
   https://github.com/anthropics/claude-code/pull/80241

6. **#80229 [OPEN] 文档修复：再次替换 1 个失效链接**
   同 #80294，修复 README 中的另一处断链。
   https://github.com/anthropics/claude-code/pull/80229

7. **#80196 [OPEN] 修复：自动压缩在上下文 100% 时从不触发**
   解决 v2.1.153 中 Max 订阅、200K 模式下，自动压缩机制失效导致上下文满溢的问题。
   https://github.com/anthropics/claude-code/pull/80196

8. **#80195 [OPEN] 修复：Max 订阅立即达到使用上限**
   修复 Max 用户因特定计费或配额逻辑错误，会话刚开始即被限制的 bug。
   https://github.com/anthropics/claude-code/pull/80195

9. **#80112 [OPEN] 使 devcontainer 防火墙初始化容忍 DNS 解析失败**
   改进防火墙脚本，单个域名解析失败不再中断整个初始化，提高容器开发环境可靠性。
   https://github.com/anthropics/claude-code/pull/80112

## 5. 功能需求归类

- **桌面与 CLI 体验对齐**
  #71726、#77724 要求桌面应用支持任务中途的即时“转向”输入，当前排队机制削弱了交互效率。

- **跨端上下文共享**
  #13843 请求从 Claude.ai 到 Claude Code 的对话迁移能力，呼声极高。

- **任务与计划工具完善**
  #80210、#80213 反映任务工具（TaskCreate/TodoWrite）意外消失，PR #18217 尝试将 `/plan` 与内联提示结合，说明用户对结构化任务管理有持续需求。

- **沙盒与权限稳定性**
  #79997、#80412、#80410 显示沙盒路径、权限降级等问题，尤其在 Linux 和 macOS 不同安装方式下频繁出现。

- **插件市场与账户管理**
  #80263 插件发布后不可见，PR #80326 提供账户配置文件切换，表明社区对插件生态和多账户支持的期待。

- **模型配额与可用性**
  #80409、#80382、#79410 涉及 Fable 5 额度提示混乱、调度锁定模型等问题，用户对 Max 订阅的模型使用透明度有较多抱怨。

- **远程控制与多设备**
  #78933 远程控制完全不可用，影响从移动端控制桌面会话的场景。

- **无障碍与国际化**
  #80415 韩文在 UI 卡片中乱码，v2.1.218 开始加入屏幕阅读器支持，无障碍关注度上升。

## 6. 开发者关注点

- **桌面应用功能滞后**：CLI 已有的转向、会话管理能力在桌面端缺失，导致开发者偏好终端而非桌面 App。
- **认证与网络稳定性**：OAuth 重定向参数丢失、Cloudflare 403 循环、休眠后事件循环死锁等问题，频繁打断开发流程。
- **任务与计划工具消失**：关键工具回归突然，且无明确恢复时间，打断了依赖结构化任务的工作流。
- **沙盒回归困扰 Linux/非 root 用户**：2.1.216 后沙盒错误使 Bash 工具调用全灭，影响面广。
- **模型配额界面混乱**：Fable 5 的可用性提示互相矛盾，用户难以判断是否真的耗尽额度，影响信任度。
- **插件生态阻塞**：已发布插件无法在市场中展示，缺乏社区插件发现和安装体验。
- **性能与资源消耗**：事件循环饥饿导致 CPU 满载，自动压缩失效，长文本丢失等问题，消耗计算资源并威胁数据完整性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报（2026-07-23）

## 今日更新概览
今日社区共产生 32 条 Issue 更新和 50 条 PR 动态，聚焦于权限配置一致性、模型消费感知、TUI 交互体验及 ACP 协议健壮性。版本 0.29.0 发布，新增 ACP 客户端思考努力程度选择支持。

## 版本发布
- **@moonshot-ai/kimi-code@0.29.0**
  支持从 ACP 客户端选择思考努力程度（thinking effort level），通过 [#1992](https://github.com/MoonshotAI/kimi-code/pull/1992) 实现。
  [Release 详情](https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.29.0)

## 社区热点 Issues（精选 10 项）

1. **交互式会话忽略 `config.toml` 中的 hooks 与权限规则**
   [#2070](https://github.com/MoonshotAI/kimi-code/issues/2070) 在 Windows 下，交互模式（`kimi`）不应用 `[[hooks]]` 和 `[[permission.rules]]`，而 headless（`-p`）模式正常。用户配置了 45 条权限规则和 2 个钩子却完全失效，影响安全与自动化流程。当前 5 评论，暂无官方回应。

2. **MCP 子进程代理注入 `[::1]` 导致 Python httpx 服务器崩溃**
   [#1931](https://github.com/MoonshotAI/kimi-code/issues/1931) 配置 HTTP 代理后，stdio 类型的 MCP 子进程环境变量 `NO_PROXY` 被注入 `[::1]`，Python 的 `httpx` 将其视为非法端口而退出，MCP 握手失败。影响 Linux 用户，已有 PR #2081 尝试修复。

3. **请求在状态栏展示 5 小时与每周配额余量**
   [#872](https://github.com/MoonshotAI/kimi-code/issues/872) 当前状态栏仅显示上下文用量，但 `/status` 命令可查出 5 小时滚动窗口和每周配额余量。用户希望直接显示在底部状态栏，便于实时感知用量。得到 2 个点赞。

4. **权限描述 `/auto` 与 `/yolo` 在 TUI 和 Web 版中相互矛盾**
   [#1866](https://github.com/MoonshotAI/kimi-code/issues/1866) 用户截图显示 TUI 与 Web 端对自动权限模式的说明不一致，造成困惑。影响用户体验，有 1 点赞。

5. **一次“高风险”拒绝后会话永久阻塞，无恢复路径**
   [#2080](https://github.com/MoonshotAI/kimi-code/issues/2080) 会话运行 5 小时后，一个请求被 400“高风险”拒绝，随后所有后续请求（17-21 轮）均失败，疑似误判导致会话卡死。严重影响长时间编码任务。

6. **TUI 在 Alacritty 中打开 `/usage` 时闪烁**
   [#2039](https://github.com/MoonshotAI/kimi-code/issues/2039) 当 agent 状态框实时更新时，在 Alacritty 终端中打开 `/usage` 面板会导致 TUI 闪烁。影响终端体验。

7. **`exit` 命令补全优先级过低**
   [#2007](https://github.com/MoonshotAI/kimi-code/issues/2007) 用户经常使用 `/exit`，但其补全优先级很低，需要输入完整命令才能匹配，希望提升优先级。已有 PR #2079 解决（已关闭）。

8. **K3 模型在自动模式下输入 token 消耗异常（单会话 1830 万）**
   [#2031](https://github.com/MoonshotAI/kimi-code/issues/2031) 用户报告 `kimi-k3` 在 auto 模式下，一个会话的输入 token 消耗高达 18.3M，远超预期，可能涉及配额浪费。

9. **Skill 描述超长时静默丢弃，无任何警告**
   [#1972](https://github.com/MoonshotAI/kimi-code/issues/1972) 当 skill 的 frontmatter `description` 超过未公开的长度限制时，该 skill 被静默移除，会话中不可见且无错误提示，调试成本极高。

10. **配额消耗速度在近期版本后明显加快**
    [#2072](https://github.com/MoonshotAI/kimi-code/issues/2072) 用户反映升级到 0.29.0 后，会员周配额消耗显著加快，影响 K3 和 K2.7 模型。可能关联 token 消耗或频率变化。

## 重要 PR 进展（精选 10 项）

1. **修复 MCP 子进程代理环境变量安全性**
   [#2081](https://github.com/MoonshotAI/kimi-code/pull/2081) 解决 #1931，保留 `[::1]` 对 Node 的 IPv6 支持，同时避免 Python `httpx` 崩溃，使 stdio MCP 子进程在代理环境下稳定运行。

2. **ACP 适配器正确表面失败回合**
   [#2076](https://github.com/MoonshotAI/kimi-code/pull/2076) 修复 #1813 和 #1865，非认证失败（如 400 错误、速率限制）现在会向 ACP 客户端返回错误，而非被静默视为成功空回合。

3. **密码认证性能优化：缓存 bcrypt 验证结果**
   [#2077](https://github.com/MoonshotAI/kimi-code/pull/2077) 修复 #1904，避免每次 API 请求都执行 cost-12 的 bcrypt 验证，显著提升 Kimi Web 在低性能设备上的启动和刷新速度。

4. **恢复损坏的会话索引文件**
   [#2074](https://github.com/MoonshotAI/kimi-code/pull/2074) 修复 #1925，当 `session_index.jsonl` 丢失换行符导致 JSON 拼接时，读取端可恢复记录，避免 `session.not_found` 错误，保障会话恢复可靠性。

5. **在 VS Code 终端中启用进度更新**
   [#2073](https://github.com/MoonshotAI/kimi-code/pull/2073) 修复 #1884，识别 `TERM_PROGRAM=vscode`，使 VS Code 集成终端能接收 OSC 9;4 进度更新，显示工作与空闲状态。

6. **添加全局 MCP 服务器超时配置**
   [#2065](https://github.com/MoonshotAI/kimi-code/pull/2065) 允许在配置中全局设置 MCP 服务器连接超时与工具调用超时，避免在慢速环境中逐个服务器配置。

7. **双模型路由：主代理与子代理使用不同模型和思考深度**
   [#1996](https://github.com/MoonshotAI/kimi-code/pull/1996) 解决 #568，支持主代理使用高性能推理模型，而子代理可路由到更快速便宜的模型，并独立设置思考努力程度。

8. **`disabled_skills` 配置：共享技能目录的拒绝列表**
   [#1983](https://github.com/MoonshotAI/kimi-code/pull/1983) 引入 `disabled_skills` 配置项，允许在共享技能目录中隐藏特定技能，不暴露给模型和菜单，解决 #1982。

9. **隔离工作区基线内容与系统提示的可信边界**
   [#2049](https://github.com/MoonshotAI/kimi-code/pull/2049) 修复 #2048，将 AGENTS.md、技能列表等用户可控内容从系统提示中分离，防止提示注入风险。

10. **TUI 新增 `/titleon` 与 `/titleoff` 命令**
    [#2019](https://github.com/MoonshotAI/kimi-code/pull/2019) 解决 #2018，允许在终端底部切换显示当前会话标题，便于在多个派生会话间快速区分。

## 功能需求归类

- **多语言与本地化**：多位用户要求 TUI 和 VSCode 插件提供中文界面（#1941、#2059），目前已有机翻的日文 README 合入（#2082）。
- **权限与命令体验**：权限规则在交互模式下失效（#2070）、`/auto` 与 `/yolo` 文案矛盾（#1866）、`exit` 补全优先级低（#2007）等，反映出用户对一致性和效率的期待。
- **记忆与规则系统扩展**：希望支持多规则文件、按目录定制（#2084），以及通用跨会话记忆提供者机制（#2075），对齐 Claude Code 的 rules 设计。
- **配额与用量感知**：要求状态栏显示配额余量（#872），近期版本消耗过快引发担忧（#2072），用量透明化是普遍诉求。
- **工作流与模型路由**：社区关注动态工作流（#2067）和双模型路由（#1996 已实现），希望通过模型分工提升效率与控制成本。
- **插件生态**：希望支持从 GitLab 安装插件（#2063），以及添加 Eden AI 作为内置提供商（#2053）。
- **TUI 交互细节**：链接可点击打开（#2051）、滚动时避免跳动（#1487）、降低闪烁（#2039）等终端体验优化需求持续出现。
- **安全与隔离**：要求隔离用户工作区内容与系统提示边界（#2048），防止间接提示注入。

## 开发者关注点

- **交互模式下的配置一致性**：hooks 和权限规则在交互式会话被忽略是高频痛点，直接影响安全策略落地。
- **ACP 协议健壮性**：多次出现失败回合静默的问题（#1813、#1865、#2080），维护者正通过 #2076 修复，但“高风险”拒绝导致的会话卡死仍需关注。
- **模型消费可控性**：K3 模型输入 token 失控（#2031）和配额消耗加速（#2072）让用户对计费和资源使用产生疑虑，期待更透明的消耗机制。
- **终端体验打磨**：从闪烁、补全优先级到链接点击，大量细节 Issue 表明开发者对 TUI 交互品质有较高要求。
- **记忆与规则的可管理性**：单一 `AGENTS.md` 限制日益明显，社区呼吁更灵活的记忆管理，相关 PR #1983 和功能请求 #2084 指向模块化规则系统。

*以上所有条目均附链接，可点击跳转至对应 GitHub Issue/PR。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>