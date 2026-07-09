# AI CLI 工具社区动态日报 2026-07-09

> 生成时间: 2026-07-09 00:28 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

以下是基于 2026-07-09 各 AI CLI 工具社区动态生成的横向对比分析。

---

### 1. 今日横向概览
今日共计 7 款工具中有 4 款发布了新版本，其中 **OpenAI Codex** 和 **Gemini CLI** 同时推进正式版与预览版，**Claude Code** 与 **Qwen Code** 各发布一个修复/功能版本。社区反馈中，**子代理稳定性**、**上下文压缩副作用**、**Windows 兼容性**在多个工具社区高频出现，且 **Claude Code** 与 **OpenAI Codex** 均出现严重配额/成本异常报告。**Kimi Code** 活跃度极低，仅一条企业 SSL 证书相关需求更新。

### 2. 各工具活跃度对比
| 工具 | Issues 数（今日更新） | PRs 数（今日更新） | Release 情况 |
|------|-------------------|------------------|-------------|
| Claude Code | 热点 10 个（未披露总数） | 6 个 | v2.1.205（修复版） |
| OpenAI Codex | **50 个**（新增/更新） | **50 个**（新增/更新） | rust-v0.143.0（正式） + v0.144.0-alpha.1/.2（预发布） |
| Gemini CLI | 50 个（新增/更新） | 17 个 | v0.50.0（正式） + v0.51.0-preview.0（预览） |
| GitHub Copilot CLI | 41 个（当日更新） | 2 个（低质量，无实质合并） | 无 |
| Kimi Code CLI | 1 个 | 0 | 无 |
| OpenCode | 热点 10 个（活跃度高，未披露总数） | 至少 6 个（可见截断前） | 无 |
| Qwen Code | 热点 10 个（未披露总数） | 10 个（可见） | v0.19.8（正式） |

> 注：标注“热点 X 个”指报告仅选取高讨论度 Issue，并非社区当日全部更新量。

### 3. 共同出现的功能方向
- **子代理/Agent 执行可靠性**
  Claude Code（子代理无限衍生并消耗 3M token）、Gemini CLI（子代理 MAX_TURNS 误报、通用代理挂起）、OpenCode（子代理 bash 调用后无限挂起）、Qwen Code（子代理陷入相同工具调用死循环）。共同诉求是对子代理加装超时、循环检测、成本上限和状态透明度。

- **上下文压缩导致状态丢失或死循环**
  Claude Code（压缩后早期内容对模型不可见但 UI 仍显示）、Copilot CLI（自动压缩后触发无限“Plan → Compact → Re-Plan”循环）、Qwen Code（压缩后 MEMORY.md 内容丢失且索引未刷新）。三者均暴露上下文压缩的恢复缺陷。

- **Windows 平台功能缺失/崩溃**
  Claude Code（Cowork 依赖 HCS 服务不可用、IME 失效）、OpenAI Codex（`apply_patch` 沙箱无法启动、Computer Use 缺失工具、安装程序解析失败）、Qwen Code（扩展安装因临时目录冲突失败）。跨工具现象明显。

- **成本/配额管理透明性**
  Claude Code（Opus 子代理误计费为 Fable、极端 token 消耗）、OpenAI Codex（企业额度一次提示后耗尽、gpt-5.5 推理 token 固定边界聚集）。两者均出现用户对账单和资源消耗的质疑。

- **工具调用基础可靠性**
  OpenAI Codex（`exec_command`/`shell_command` 系统性失败）、Gemini CLI（shell 命令执行完仍显示“等待用户输入”）、Claude Code（工具调用前文本丢失）。直接影响核心编写流程。

### 4. 差异化定位分析
- **Claude Code**：重心在**多模型编排（advisor/Opus/Fable）+ 长时间自主 agent**，但当前社区痛点集中于这种架构带来的**成本失控**和上下文管理缺陷。插件安全（protect-mcp）也开始萌芽。
- **OpenAI Codex**：明显推进**远程插件、云服务集成（Bedrock）、TUI 可观测性**，但模型行为（gpt-5.5 token 聚集）和新版本回归问题使稳定性成为突出矛盾。
- **Gemini CLI**：今日特征是在**安全加固（RCE/SSRF/OAuth）和渲染体验（CJK、emoji）**上密集投入，同时试图规范化工具注册；其 agent 模型自主调用 Skills 的短板仍未解决。
- **GitHub Copilot CLI**：用户对**自定义斜杠命令**和**企业策略兼容**呼声极高，但开发侧未做出实质性响应，且出现上下文压缩致命循环，呈现“反馈密、修复疏”的状态。
- **Kimi Code CLI**：几乎无活跃开发迹象，唯一反馈是**企业网络中的 SSL 中间人拦截**，定位偏向受限环境下的简单适配。
- **OpenCode**：聚焦**多模型兼容（Gemma、Ollama）、MCP 协议能力补全和性能优化**，同时对危险操作护栏、会话持久化等使用者体验问题保持跟进，生态偏向开放、自托管。
- **Qwen Code**：重点围绕**daemon 多工作区架构、企业 IM 渠道集成（WeCom、QQ Bot）、Windows 健壮性**，并持续完善记忆系统和后台调度，体现明显的国内企业生产环境适配取向。

### 5. 社区活跃度记录
按当日可量化数据（Issue/PR 更新量、版本发布）综合评估：
- **OpenAI Codex**：50 Issues / 50 PRs / 3 个版本，为今日最活跃项目。
- **Gemini CLI**：50 Issues / 17 PRs / 2 个版本，活跃度紧随其后。
- **Qwen Code**：10 个可见 PR + 正式版本发布，开发响应积极。
- **Claude Code**：发布修复版本、Issue/PR 质量高，但未披露全量数据。
- **Copilot CLI**：41 个 Issue 更新但 PR 近乎停滞，属于“问题涌入多、维护响应少”的状态。
- **OpenCode**：Issue/PR 活跃度高但无版本发布，社区自我运转特征强。
- **Kimi Code**：仅 1 个 Issue 活动，几近休眠。

### 6. 有证据支撑的观察
1. **子代理治理成为跨工具的共同短板**
   Claude Code、Gemini CLI、OpenCode、Qwen Code 同日均出现子代理相关缺陷（无限消耗、挂起、误报成功、死循环），说明基于 agent 的自主工作流在资源边界和异常退出处理上尚不成熟，用户普遍要求加入更多控制手段。

2. **上下文压缩副作用已在三个主流工具中引发严重可用性问题**
   Copilot CLI 的无限重规划、Claude Code 的不可见面历史、Qwen Code 的记忆丢失，三起独立报告均指向压缩后状态恢复不完整，是当前大上下文工作流的关键障碍。

3. **成本透明化成为企业用户的核心焦虑，至少两个头部工具集中爆发**
   Claude Code 和 OpenAI Codex 同时出现额度/计费异常报告，表明在复杂 agent 模式下，现有按 token 计费的透明度已无法满足开发者预期，账单准确性争议扩大。

4. **Windows 平台在三款工具中被视为优先级兼容性问题**
   Claude Code、OpenAI Codex、Qwen Code 各自存在因沙箱、虚拟化或文件系统差异导致的特有故障，且均非边缘用例，反映出跨平台一致性仍是行业级挑战。

5. **安全补丁快照：Gemini CLI 与 Claude Code 同日强化运行时安全**
   Gemini CLI 集中修复 RCE、SSRF、OAuth 风险，Claude Code 出现 MCP 工具调用策略门控 PR，表明随着 CLI 工具承担更多自主执行职责，社区已开始从被动漏洞修复转向主动的沙箱/策略控制。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-09

## 今日更新概览
过去 24 小时发布了一个修复版本 v2.1.205，解决了自动模式下篡改会话记录文件、`--json-schema` 输出无效和格式关键字拒绝等问题。社区热度集中在 advisor/Opus/Fable 系列模型的可用性、token 消耗异常、Cowork 功能在 Windows 下的故障、以及桌面版与 agent 模式带来的成本控制困扰，多帖讨论延续数周至今。

## 版本发布

**v2.1.205**
发布时间：2026-07-09
- 新增自动模式规则，阻止篡改 session 记录文件（transcript files）。
- 修复了 `--json-schema` 在 schema 无效时仍静默输出非结构化结果的问题，以及使用 `format` 关键字的 schema 被拒绝的问题。
- 修复了在处理过程中发送消息导致挂起（sil）的问题。

## 社区热点 Issues（10 个）

1. **#69238 - Advisor 触发后 API 无响应，错误“No response from API”**
   使用 Sonnet 作为基座，触发 advisor（Opus 4.8）时频繁报错并重试，影响 macOS 下 TUI/API 体验。44 条讨论、70 👍，表明影响面大。
   https://github.com/anthropics/claude-code/issues/69238

2. **#73365 - Fable 5 advisor 在所有会话中始终“不可用”**
   用户报告在 v2.1.198 中启用 Fable 5 advisor 后一直不可用，跨多个会话，标记为 bug/duplicate。28 条评论、55 👍。
   https://github.com/anthropics/claude-code/issues/73365

3. **#56913 - 请求让自主 Claude Code 真正可行：分层 Opus brains + Sonnet workers + 持久状态**
   希望将 Claude Code 作为长期运行的编排智能体，用于流水线、训练、监控等场景。42 条评论，讨论方向涵盖 agent 架构、状态持久化和成本控制。
   https://github.com/anthropics/claude-code/issues/56913

4. **#42249 - 极端 token 消耗：正常使用数分钟耗尽配额**
   macOS 下执行常规开发任务（读文件、编辑、git）即触发异常 token 消耗，日常配额 ~1 小时用完。36 条评论、17 👍，成本问题持续引发关注。
   https://github.com/anthropics/claude-code/issues/42249

5. **#74649 - Windows 11 Pro 下 Cowork 不工作：缺少 HCS 服务**
   尽管虚拟化已完全启用，Cowork 标签页仍不可用，yukonSilver 状态显示 unsupported。23 条评论，涉及 Windows 用户协作体验。
   https://github.com/anthropics/claude-code/issues/74649

6. **#65620 - 工具调用前的助手文本丢失（仅保留思考块）**
   自 2026-06-04 起，模型在发出工具调用前的文本块（思考后）未写入 session 记录，影响可追溯性和调试。18 条评论、7 👍，macOS 回归问题。
   https://github.com/anthropics/claude-code/issues/65620

7. **#66023 - 单次 Workflow 调用生成 46 个 Opus 子代理，消耗约 3M token 且无成本确认**
   子代理运行 Opus 4.8，继承主会话模型，18 分钟内产生约 300 万 token，任务输出最终被丢弃。6 条评论，凸显 agent 成本管理缺失。
   https://github.com/anthropics/claude-code/issues/66023

8. **#67636 - 代理并行生成导致 token 过度消耗后崩溃或触及限额**
   Claude 生成 10-15 个代理执行大量读取后崩溃，消耗数百万 token，本可由 1-2 个代理完成。
   https://github.com/anthropics/claude-code/issues/67636

9. **#73597 - Opus 子代理被计费为 Fable 用量**
   用户发现子代理实际运行 Opus 但账单显示 Fable，涉及计费准确性问题。
   https://github.com/anthropics/claude-code/issues/73597

10. **#75924 - 会话历史在上下文压缩后仍显示但模型无法访问，无警告或退出选项**
    长会话触发上下文压缩后，早期对话内容对模型不可见，但 UI 仍完整展示，用户易产生误解。
    https://github.com/anthropics/claude-code/issues/75924

## 重要 PR 进展（6 条）

1. **#41447 - feat: 开源 claude code ✨**
   虽为老 PR，今日仍有更新，尝试推动项目开源，关联多个 issue。
   https://github.com/anthropics/claude-code/pull/41447

2. **#75541 - fix(sweep): 分页获取 issue 事件，并在关闭过期 issue 时遵循“未标记”状态**
   修复脚本因未正确分页和识别标签而错误关闭 issue 的问题。
   https://github.com/anthropics/claude-code/pull/75541

3. **#72014 - 新增 protect-mcp 插件：提供 fail-closed Cedar 策略门控及签名回执**
   实现 MCP 工具调用的阻断策略和离线可验证签名，增强安全性。
   https://github.com/anthropics/claude-code/pull/72014

4. **#68673 - fix(scripts): 在页面未满时即停止分页**
   修正脚本的分页终止条件，避免不必要的请求。
   https://github.com/anthropics/claude-code/pull/68673

5. **#75537 - fix(hook-development): 识别全部五种 hook 处理器类型**
   更新插件开发技能文档和校验脚本，使其与实际支持的 5 种 hook 类型同步。
   https://github.com/anthropics/claude-code/pull/75537

6. **#75529 - docs(code-review 插件): 阐明与内置 /code-review 技能的关系**
   说明 code-review 插件独立于内置技能，并修正安装文档的命令命名冲突。
   https://github.com/anthropics/claude-code/pull/75529

## 功能需求归类

- **模型可用性与稳定性**：频繁出现 advisor（Opus/Fable）不可用、API 无响应、认证失败等问题，涉及 Windows 和 macOS。
- **成本控制与 token 消耗透明化**：多个 issue 反映极端 token 消耗、子代理产生高额费用且无事先确认、计费模型标注错误等。
- **Agent 与 Workflow 治理**：请求支持分层智能体架构、持久状态、防止代理过度生成、引入成本与并发控制。
- **Windows 平台适配**：Cowork 功能因 HCS 服务缺失无法使用，IME 输入在背景会话查看器中失效，存在多个仅 Windows 影响的问题。
- **桌面版与远程控制**：工作树池回收导致会话目录丢失、预览子系统路径失效、远程控制初始化失败，影响桌面端稳定性。
- **IDE/VSCode 集成**：希望支持仅会话级模型切换（不写入 settings.json）、修复文本被错误加密为思考块等问题。
- **插件与工作流可分发性**：请求将 Workflow 脚本作为可分发插件组件，并增强插件安全性（如 protect-mcp）。

## 开发者关注点

1. **模型服务可靠性与错误反馈**：多次出现 advisor 静默失败、API 错误 ECONNRESET、401 认证失效，缺乏清晰诊断信息。
2. **成本失控风险**：子代理或 Workflow 自动衍生大量 Opus 调用，无成本预估或确认机制，导致开发者意外产生高额费用。
3. **上下文与历史管理**：会话历史在压缩后对模型不可见，但 UI 仍显示，容易误导；前置助手文本丢失影响审计与调试。
4. **Windows 环境下的功能缺失**：Cowork、IME 输入等核心功能在 Windows 上不稳定，影响跨平台体验。
5. **桌面版状态管理缺陷**：工作树池重用、预览路径僵化、窗口焦点异常等问题影响多任务场景下的可靠性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-09

## 1. 今日更新概览
过去24小时社区活跃度很高，共新增/更新50个Issue与50个Pull Request。以 `gpt-5.5` 模型行为异常、CLI工具调用失败、配额消耗异常为核心的高热度讨论帖吸引了大量开发者参与。同时，多个修复性PR（如安装器解析、TUI摘要清理、线程审阅者保持等）与基础设施PR（基准测试、Bedrock集成）集中涌现，显示出团队对稳定性和体验问题的快速响应。

## 2. 版本发布
- **rust-v0.143.0** 正式版发布（7月8日）：
  远程插件默认启用，增加更丰富的目录行、npm市场来源及版本显示；Codex可通过macOS/Windows系统代理（含PAC）路由认证与Responses API流量。
  详情：[Release v0.143.0](https://github.com/openai/codex/releases/tag/rust-v0.143.0)
- **rust-v0.144.0-alpha.1 / alpha.2** 发布：
  预发布版，暂无详细功能说明。

## 3. 社区热点 Issues（按热度/代表性选取）
1. **#30364** GPT-5.5 Codex 推理token在516/1034/1552处异常聚集导致复杂任务性能下降
   影响：使用gpt-5.5模型的用户发现推理token总是达到固定边界，伴随推理质量下降。评论163条，👍265，为近期最高热度。
   链接：https://github.com/openai/codex/issues/30364

2. **#29072** Windows Codex App：`apply_patch` 因沙箱程序无法从包路径启动而失败
   影响：Windows用户无法正常应用代码补丁，核心工作流受阻。评论40条。
   链接：https://github.com/openai/codex/issues/29072

3. **#2153** 请求Codex与ChatGPT深度集成（跨会话、Web搜索等）
   影响：开发者希望在Codex和ChatGPT之间无缝转移会话，进行调研和创意实验。👍150，社区呼声极高。
   链接：https://github.com/openai/codex/issues/2153

4. **#31520** CLI更新命令因安装脚本无法解析版本元数据失败
   影响：用户通过官方脚本升级CLI时失败，报“找不到Codex包或发布资产”。👍23，反馈集中。
   链接：https://github.com/openai/codex/issues/31520

5. **#31611** Codex CLI 0.143.0 (Amazon Linux 2023) 中返回 `unsupported call: exec_command` 导致基础shell命令无法执行
   影响：生产环境下CLI工具完全不可用，降级到0.140.0可恢复。
   链接：https://github.com/openai/codex/issues/31611

6. **#31665** GPT-5.5工具调用失败 `unsupported call: exec_commandexec_command` — 模型发送了自指命名空间
   影响：模型对内置工具调用输出了重复、错误的前缀，多个macOS用户报告。与#31611同属工具调用故障。
   链接：https://github.com/openai/codex/issues/31665

7. **#31639** Windows CLI 0.143.0中 `shell_command` 失败，错误同 #31665 模式
   影响：Windows用户执行任何shell命令均失败，影响范围广。
   链接：https://github.com/openai/codex/issues/31639

8. **#31668** 多个付费账户的额度在单次提示后耗尽，企业额度一日烧尽
   影响：疑似系统性计费/速率限制回归，用户认为账号异常扣减。
   链接：https://github.com/openai/codex/issues/31668

9. **#30910** 请求重新打开 #19464 并支持1M上下文窗口
   影响：自gpt-5.5以来上下文窗口仅272K，用户多次请求扩大被关闭，现重新提起。
   链接：https://github.com/openai/codex/issues/30910

10. **#30486** Windows Desktop：Chrome/Computer Use插件虽已启用，但缺失 `mcp__node_repl__js` 工具
    影响：Windows上的计算机使用功能因缺少JavaScript执行工具而不可用，阻碍自动化场景。
    链接：https://github.com/openai/codex/issues/30486

## 4. 重要 PR 进展
1. **#31667** 修复安装程序解析紧凑发布元数据
   解决GitHub最新发布API返回单行JSON时导致的资产查找失败，直接关联Issue #31520。
   链接：https://github.com/openai/codex/pull/31667

2. **#31529** 核心：添加预回滚自动压缩回退（auto_compact_fallback）
   开发中的特性，允许在自动压缩回滚前发起一次受限采样请求，以保留更多上下文。
   链接：https://github.com/openai/codex/pull/31529

3. **#30278** 线程恢复时保留审阅者（reviewer）设置
   修复因应用重启导致审阅模式从auto倒退到user的问题，提升自动化连续性。
   链接：https://github.com/openai/codex/pull/30278

4. **#31327** / **#31326** / **#31325** 添加并实现托管的Amazon Bedrock登录/登出API及服务器端逻辑
   为Codex引入通过Bedrock托管API密钥的认证流程，扩展云服务商集成。
   链接：#31327 https://github.com/openai/codex/pull/31327 ，#31326 https://github.com/openai/codex/pull/31326 ，#31325 https://github.com/openai/codex/pull/31325

5. **#31176** 模型容量错误后重试活动目标
   避免因临时容量不足强制终止目标任务，改为自动重试，减少人工干预。
   链接：https://github.com/openai/codex/pull/31176

6. **#31661** / **#31660** 在TUI状态栏添加压缩计数
   用户可在状态行或标题中看到当前线程的上下文压缩次数，增强可观测性。
   链接：#31661 https://github.com/openai/codex/pull/31661 ，#31660 https://github.com/openai/codex/pull/31660

7. **#31652** 修复TUI中空推理摘要泄漏 `<!-- -->` 占位符
   避免无内容的摘要显示为空白行或HTML注释。
   链接：https://github.com/openai/codex/pull/31652

8. **#31429** / **#31428** / **#31295** 持续集成与基准测试：添加Bazel e2e基准测试、冷却技能加载宏基准等
   为性能回归检测提供自动化基础。
   链接：#31429 https://github.com/openai/codex/pull/31429 ，#31428 https://github.com/openai/codex/pull/31428 ，#31295 https://github.com/openai/codex/pull/31295

9. **#29869** 保留导入会话的原始时间顺序
   使导入的会话保持原有的创建和最后活动时间，改善会话管理体验。
   链接：https://github.com/openai/codex/pull/29869

10. **#30188** 为分页线程回滚持久化 TurnItems
    支持新的历史记录分页模式，滚动时持久化详细事件。
    链接：https://github.com/openai/codex/pull/30188

## 5. 功能需求归类
- **工具调用与CLI可靠性**：大量报告 `exec_command` / `shell_command` 调用失败（#31611, #31665, #31639），尤其在Windows和特定Linux发行版，用户强烈要求修复0.143.0回归。
- **模型行为与性能**：gpt-5.5 token固定边界聚类（#30364）引发广泛关注，上下文窗口被限制在272K，用户持续申请1M上下文支持（#30910）。
- **Windows兼容性**：Windows沙箱启动失败（#29072）、Computer Use功能缺失（#30486, #31549）、辅助进程泄漏（#31564）等问题突出，跨平台体验差距明显。
- **速率与配额管理**：多个付费用户遭遇额度异常快速消耗（#31668, #31647），质疑计费准确性；同时推进更透明的限额展示需求。
- **会话与审批流程**：要求子代理继承父级自动审批策略（#23324）、计划模式下支持变更操作（#31640）、防止重复发送消息（#19529）等UX打磨诉求。
- **集成与互操作**：ChatGPT双向集成（#2153）、本地提示别名（#31666）、VS Code扩展会话数上限提升（#15368）等需求持续出现。

## 6. 开发者关注点
- **稳定性危机**：桌面端崩溃（#31094 macOS时间库崩溃）、工具调用系统性失败（#31611,#31665等）和更新流程中断（#31520）成为今日最痛问题，部分用户已回退版本。
- **资源消耗透明性**：突然的令牌配额耗尽、上下文窗口限制、压缩次数不明确等因素让开发者感觉“黑盒”，亟需更多可观测性和控制手段（#21799状态显示混淆）。
- **功能断层**：新版发布后新功能（远程插件、代理）与回归并存，特别是Windows平台连续遭遇基础功能不可用，社区期待更快对齐。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-09

## 今日更新概览
过去24小时，Gemini CLI 同时发布了 v0.50.0 正式版和 v0.51.0-preview.0 预览版，主要包含发布流程修复与工具注册功能更新。社区活跃度较高，Issues 共新增/更新 50 条，聚焦 Agent 行为异常、认证卡死、Shell 执行挂起等长期问题；Pull Requests 有 17 个更新，其中多个安全修复（RCE、SSRF、OAuth）和能力增强（推理限制、文件处理、渲染优化）值得关注。

## 版本发布
- **v0.50.0**：修复了 npm 发布验证、工作区二进制文件遮蔽问题，并引入工具注册功能（feat/tool registry）。
  详情：[Release v0.50.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0)
- **v0.51.0-preview.0**：包含 v0.50.0-preview.1 的变更日志及 `no_proxy` 测试修复，版本号跃迁至 0.51.0 预览。
  详情：[Release v0.51.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-preview.0)

## 社区热点 Issues（10 条精选）
1. **子代理 MAX_TURNS 被错误报告为成功**
   [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) `codebase_investigator` 子代理达到最大轮次后仍返回 `status: "success"` 和终止原因 `GOAL`，隐藏了实际中断。影响调试与行为评估，10 条讨论，2 个 👍。

2. **通用代理挂起 8 人关注**
   [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 当 CLI 将任务交给通用代理时，会无限挂起（超过 1 小时），简单操作如创建文件夹也会卡死，引导模型不使用子代理可规避。评论 7 条，👍 8。

3. **认证完成后卡在选项窗口**
   [#28177](https://github.com/google-gemini/gemini-cli/issues/28177) Google 账号登录成功后终端里的选项框无法退出，用户被困在界面中，影响基本可用性。4 条评论，👍 4。

4. **Shell 命令执行完成后仍显示“等待用户输入”**
   [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) 简单命令执行完毕，CLI 却持续显示 shell 命令正在运行，提示“Awaiting user input”，导致流程卡死。4 条评论，👍 3。

5. **模型不主动使用自定义 Skills 和子代理**
   [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 即使定义了相关技能（如 gradle、git），模型也很少自动调用，除非明确指示。影响 Agent 自主性，6 条评论。

6. **Browser 子代理在 Wayland 下失败**
   [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) 浏览器代理在 Wayland 环境中因锁定配置等原因报错退出，限制 Linux 桌面用户，4 条讨论，👍 1。

7. **Auto Memory 对低信号会话无限重试**
   [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) 提取代理未读取低价值会话时，会话不会被标记为已处理，导致反复浮现，消耗资源，5 条评论。

8. **工具数量超过 400 时触发 400 错误**
   [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 当可用工具超过 400 个时，API 返回 400 错误，期望 Agent 能智能限缩工具范围，3 条讨论。

9. **模型频繁在随机位置创建临时脚本**
   [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) 模型被限制为仅 shell 执行后，会在多个目录创建编辑脚本，造成清理和提交困扰，3 条评论。

10. **Agent 停止/劝阻破坏性行为**
    [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 模型在执行 git 操作或数据库维护时可能使用 `git reset --force` 等危险命令，期望增强安全保护，3 条讨论，👍 1。

## 重要 PR 进展（10 条精选）
1. **修复 a2a-server 环境加载时的零点击 RCE**
   [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) 重构启动流程与环境加载，防止在不受信工作区中通过环境中毒实现 RCE（高安全风险）。

2. **限制单次请求的递归推理轮次**
   [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) 为核心推理引擎加入 15 轮递归上限（可配置），避免无限循环耗尽 CPU 和配额。

3. **任务取消时真正中断执行循环**
   [#28316](https://github.com/google-gemini/gemini-cli/pull/28316) 修复 Agent 模式下取消任务后仍存在“幽灵执行”的问题，同时解决多个竞态、内存泄漏和未锁定信任域漏洞。

4. **绕过 LLM 修正 JSON/IPYNB 文件写入**
   [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) 精确修复 `write_file` 和 `replace` 工具对 Jupyter Notebook 及 JSON 文件的损坏问题，跳过 LLM 修正逻辑。

5. **改进终端 Markdown 渲染：CJK 自动换行与粗体**
   [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) 解决 CJK 文本的硬换行与错误列表渲染，并支持 `__bold__` 语法，提升非英文用户阅读体验。

6. **OAuth 发现流程增加 SSRF 防护**
   [#28112](https://github.com/google-gemini/gemini-cli/pull/28112)（已关闭）在 `oauth-utils.ts` 添加环回地址检查与 DNS 验证，对齐 `web-fetch` 的安全水准。

7. **避免 OAuth 令牌交换时 keep-alive 套接字复用**
   [#28103](https://github.com/google-gemini/gemini-cli/pull/28103)（已关闭）解决 Node.js 安全补丁后 Google 登录“Premature close”错误。

8. **修复字符串截断导致 emoji 显示损坏**
   [#28224](https://github.com/google-gemini/gemini-cli/pull/28224) `sanitizeForDisplay` 在切分代理对字符时可能导致 emoji 变为乱码，改用 `Intl.Segmenter` 安全截断。

9. **解析带注释的 settings.json**
   [#28219](https://github.com/google-gemini/gemini-cli/pull/28219) CLI 父进程读取配置文件时支持 JSON 注释，避免内存自动配置回退到默认值。

10. **Careteker 工单处理入口：主工作循环与 LLM 编排器**
    [#28306](https://github.com/google-gemini/gemini-cli/pull/28306) 和 [#28307](https://github.com/google-gemini/gemini-cli/pull/28307) 实现基于 Cloud Run 的 Issue 自动分类与处理服务，集成 Antigravity SDK 与 GCS 日志。

## 功能需求归类（来自 Issues）
- **Agent 稳健性与异常恢复**：子代理 MAX_TURNS 误报、通用代理挂起、shell 命令完成判定、浏览器代理 Wayland 兼容、破坏性命令防护。
- **交互可用性**：认证窗口卡死、g-s-d 输出 hook 崩溃、终端 resize 闪烁、交互式命令卡住。
- **智能性与自主性**：Skills/子代理自动调用、AST 感知文件操作、工具数量超限处理、自我认知准确性。
- **内存与记忆系统**：低信号会话重试、无效补丁处理、安全红化与日志精简。
- **评估与可观测性**：组件级评估体系、内部评估反脆弱性、子代理轨迹分享与 /bug 报告包含子代理上下文。

## 开发者关注点
- **安全修复优先级高**：多起 RCE、SSRF、OAuth 令牌泄漏的 PR，表明近期社区对运行时安全加固投入较大。
- **Agent 执行可靠性质疑**：多个高赞 Issue 指向 Agent 在基础命令执行、子代理管理上的不稳定，用户工作流被频繁打断。
- **跨平台与边界情况**：Wayland 支持、CJK 渲染、emoji 截断、带注释配置文件解析等问题正在被逐一处理，反映出社区用户环境的多样性日益增长。
- **自动化与自我管理诉求**：希望模型能更积极地使用定义好的 Skills、避免危险操作、智能工具调度，减少人工干预。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-07-09）

## 1. 今日更新概览
过去 24 小时内无新版本发布。Issue 区保持活跃，共有 41 条问题在过去一天有更新记录，其中多个高赞特性请求与严重缺陷被社区持续关注。Pull Request 侧仅出现 2 个低质量提交，无实质性合并或代码改动。

## 2. 版本发布
今日无新版本。

## 3. 社区热点 Issues（精选 10 条）

1. **自定义斜杠命令支持**
   [#618](https://github.com/github/copilot-cli/issues/618) 请求从 `.github/prompts/` 目录读取自定义命令（类似 Claude Code），已关闭但评论达 32 条、👍 99，社区期待极高。

2. **企业策略下 macOS Gatekeeper 拦截**
   [#970](https://github.com/github/copilot-cli/issues/970) 每次通过 Homebrew 升级后，苹果安全策略都会阻止运行，需手动到“隐私与安全性”中放行，影响所有企业 Mac 用户。6 评论、👍 21。

3. **模型在规划与执行间自动切换**
   [#2792](https://github.com/github/copilot-cli/issues/2792) 希望 Copilot 能在规划任务时自动使用一个模型，执行时切换到另一个模型，以提升效率。4 评论、👍 14。

4. **无限规划循环：Plan → Compact → Re-Plan**
   [#3158](https://github.com/github/copilot-cli/issues/3158) （及 #3144–#3157 等 14 个重复问题）自动压缩上下文后，智能体反复重新规划而非执行，一次会话循环多达 217 次，零代码产出。已关闭但暴露上下文压缩状态恢复的重大缺陷。

5. **`/delegate` 忽略指定分支**
   [#2729](https://github.com/github/copilot-cli/issues/2729) 无论用户如何指定源分支或目标分支名，`/delegate` 均不遵循，导致工作分支混乱。4 评论、👍 2，已关闭。

6. **Linux 下剪贴板复制失效**
   [#3586](https://github.com/github/copilot-cli/issues/3586) 升级至 1.0.49 后复制功能中断，1.0.48 正常。2 评论、👍 1，已关闭。

7. **`/models` 无法查看扩展上下文定价**
   [#4059](https://github.com/github/copilot-cli/issues/4059) 界面中“1M”标记无法被选中或导航，用户看不到第二张费用表。1 评论，今日新增。

8. **旧 keychain 条目导致重复 OAuth 弹窗**
   [#2112](https://github.com/github/copilot-cli/issues/2112) 配置 HTTP MCP 服务器后，每次启动都会弹出浏览器授权窗口，根因是系统钥匙串中残留过期令牌。1 评论、👍 1。

9. **TUI 在 NFS/GPFS 上卡死**
   [#4053](https://github.com/github/copilot-cli/issues/4053) Linux 下家目录挂载于网络文件系统时，TUI 模式停在“Loading: N skills”，进程无日志、不响应。1 评论。

10. **BYOK 在 `--acp` 模式下仍被拒绝认证**
    [#4016](https://github.com/github/copilot-cli/issues/4016) 使用 `COPILOT_PROVIDER_*` 自定义模型提供方时，`--acp --stdio` 方式仍需 GitHub 登录（回归于 1.0.61–1.0.68）。1 评论、👍 2。

> 其他值得注意：`/resume` 对非 git 目录会话完全无效 [#4054](https://github.com/github/copilot-cli/issues/4054)；企业插件策略中插件从未同步到磁盘 [#4039](https://github.com/github/copilot-cli/issues/4039)；数据外泄保护误杀合规内容 [#4065](https://github.com/github/copilot-cli/issues/4065)；Windows Defender 反复扫描 `events.jsonl` 引发高 CPU [#4063](https://github.com/github/copilot-cli/issues/4063)。

## 4. 重要 PR 进展
今日仅有 2 个 PR 更新：
- [#4057](https://github.com/github/copilot-cli/pull/4057) 标题“Install”，无描述，疑似测试或误提。
- [#3708](https://github.com/github/copilot-cli/pull/3708) 标题“Add files via upload”，同样无内容说明。

两个 PR 均未提供实质功能或修复，社区无相关讨论。

## 5. 功能需求归类
从近期 Issue 中可提取以下反复出现的方向（不形成预测）：
- **自定义工作流集成**：自定义斜杠命令、可配置的退出恢复提示（#618、#4066）
- **模型调度控制**：规划/执行模型自动切换（#2792）
- **认证与安全体验**：OAuth 重复弹出、BYOK 模式认证修复、外泄保护过于激进（#2112、#4016、#4065）
- **平台兼容性**：macOS Gatekeeper、Linux 复制/剪贴板、WSL 链接失效、NFS 挂载卡死（#970、#3586、#4064、#4053）
- **会话与上下文可靠性**：压缩后死循环、非 git 目录会话恢复、事件日志持久化开销（#3158、#4054、#4063）
- **企业管理能力**：企业插件分发与清理、旧版本占用空间（#4039、#1624）

## 6. 开发者关注点
- **上下文压缩致命缺陷**：一系列 Issue 表明自动压缩后代理陷入重规划死循环，严重影响长期任务可用性，虽已关闭但根因修复状态未明确。
- **认证流程摩擦大**：企业策略、BYOK 场景下反复登入或拦截，降低自动化与 CI/CD 集成体验。
- **多平台兼容性问题突出**：macOS 安全弹窗、Linux 剪贴板失效、WSL 诊断链接无法工作等，使非标准开发环境用户持续受阻。
- **自定义需求强烈**：自定义斜杠命令获得极高投票，表明用户渴望将 Copilot CLI 融入团队特定工作流。
- **资源占用与管理**：旧版本堆积占用数 GB 磁盘、日志频繁 `open/close` 触发杀软重扫，呼唤更精细的资源管理策略。

---
*数据来源：[github/copilot-cli](https://github.com/github/copilot-cli) Issues & PRs，统计截至 2026-07-09。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-09

## 今日更新概览
过去 24 小时社区活跃度较低，无新版本发布，无 Pull Request 更新。仅有一条关于忽略 SSL 证书的功能请求（Issue #2458）在近日有少量讨论，反映出组织管控环境下开发者遇到的认证障碍。

## 版本发布
今日无新版本发布。

## 社区热点 Issues
仅一条 Issue 在过去 24 小时有更新：

- **#2458 [enhancement] Add option to ignore ssl certificate**
  @dmorsin 于 2026-06-17 提出，今日（7/8）有互动，累计 2 条评论，0 👍。
  用户反馈：企业管控的杀毒软件通过中间人（MiTM）方式重打包 SSL 流量，导致 `kimi login` 时因证书不匹配而失败，请求提供忽略 SSL 证书的选项。
  https://github.com/MoonshotAI/kimi-cli/issues/2458

## 重要 PR 进展
过去 24 小时无 Pull Request 更新。

## 功能需求归类
本期仅有一条需求，可归类为：

- **网络与安全适配**：在严格的企业网络环境（如自签证书、代理、审计）下运行 CLI 工具时，需要更灵活的 SSL 验证控制。

## 开发者关注点
基于本日唯一活跃反馈，开发者突出痛点在于：**企业化管理环境下的 SSL 中间人拦截导致 CLI 登录失败**，期望工具提供 `--insecure` 或类似选项以绕过证书校验（或允许自定义 CA bundle），方便受限网络下的使用。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-09

## 1. 今日更新概览
今天社区没有新的版本发布，但 issue 和 PR 活跃度很高。Memory Megathread 持续收集堆快照，围绕内存与性能的讨论最为热烈；同时 Gemma 4 工具调用、高 CPU 占用、MCP 能力完善以及 Linux 终端复制粘贴等问题成为新的焦点。PR 侧有多个针对提示缓存、UI 稳定性与子代理权限的修复提交。

## 2. 版本发布
无新版本发布。

## 3. 社区热点 Issues（10 个）

- **#20695 Memory Megathread**
  影响：全局内存异常综合追踪帖，维护者明确要求勿用 LLM 猜测方案，需提供堆快照协助定位。
  反应：108 条评论，84 个 👍，社区高度关注，已成为内存问题的集中入口。
  https://github.com/anomalyco/opencode/issues/20695

- **#11112 always stuck at “Preparing write...”**
  影响：Prometheus 等用户频繁遇到写入文件时卡死，工具执行中断后重试仍复现。
  反应：73 条评论，44 个 👍，问题持续数月尚未解决，影响日常使用。
  https://github.com/anomalyco/opencode/issues/11112

- **#20995 Gemma 4 (e4b) tool calling fails via Ollama**
  影响：通过 Ollama 兼容接口使用 Gemma 4 时，模型返回的流式 `tool_calls` 未被识别，导致工具调用失败。
  反应：30 条评论，47 个 👍，反映多模型兼容性仍是痛点。
  https://github.com/anomalyco/opencode/issues/20995

- **#28567 [CLOSED] Full MCP client capabilities**
  影响：OpenCode 的 MCP 客户端实现远落后于最新 MCP 标准，缺失多项协议能力。
  反应：22 条评论，25 个 👍，虽已关闭，但 MCP 完善仍是高频诉求，相关子议题仍在活跃。
  https://github.com/anomalyco/opencode/issues/28567

- **#6096 [FEATURE] Token per second display**
  影响：用户希望每次模型响应都显示令牌生成速度（TPS），以评估模型性能。
  反应：19 条评论，60 个 👍，呼声较高，开发体验需求明确。
  https://github.com/anomalyco/opencode/issues/6096

- **#30086 High CPU usage in newer versions**
  影响：最近版本中 CPU 占用飙升，过去能同时开 10+ 会话，现在 3 个就导致鼠标卡顿。
  反应：17 条评论，11 个 👍，直接影响多任务工作流。
  https://github.com/anomalyco/opencode/issues/30086

- **#17953 [CLOSED] Destructive file operation guardrails**
  影响：继 #17949（误删 Downloads）后，社区要求对大量文件删除等危险操作增加用户确认。
  反应：10 条评论，已关闭，但安全护栏仍是保障信任的重要改进方向。
  https://github.com/anomalyco/opencode/issues/17953

- **#33028 Subagents hang indefinitely after quick bash tool call**
  影响：子代理在执行完 bash 工具后流式调用永远挂起，无超时，只能手动退出。影响 `glm-5.2` 和 `minimax-m3` 等多个模型。
  反应：5 条评论，2 个 👍，暴露子代理稳定性缺陷。
  https://github.com/anomalyco/opencode/issues/33028

- **#35326 opencode web does not inherit terminal's working directory**
  影响：`opencode web` 不从终端当前目录启动，默认跳到系统根目录 `/`，影响工作流。
  反应：4 条评论，版本 1.17.13 仍未修复。
  https://github.com/anomalyco/opencode/issues/35326

- **#35978 [FEATURE] fix copy/paste problem of opencode cli in linux terminals**
  影响：Linux 终端下 OpenCode TUI 必须手动安装 `xclip`/`xsel`/`wl-clipboard` 才能复制粘贴，新用户门槛高。
  反应：今日创建，2 条评论，直指长期困扰 Linux 用户的体验短板。
  https://github.com/anomalyco/opencode/issues/35978

## 4. 重要 PR 进展（10 个）

- **#35982 fix(provider): improve prompt caching**
  为多个提供商发送专用缓存键，覆盖 OpenAI、Azure、xAI、DeepInfra 等，并修正 Cohere、Groq 等缓存定价识别。
  https://github.com/anomalyco/opencode/pull/35982

- **#34794 feat(provider): add --model free to pick random zero-cost model**
  新增 `--model free` 选项，每次运行时从 Zen 零成本模型中随机选取一个，降低试用门槛。
  https://github.com/anomalyco/opencode/pull/34794

- **#31798 fix(snapshot): reuse source git objects to avoid re-hashing huge repos**
  修复大型仓库（如 chromium）创建会话时因 `git add --all` 重新哈希而卡死的问题，改为复用已有 git 对象。
  https://github.com/anomalyco/opencode/pull/31798

- **#33846 fix(ui): stabilize shell output outline**
  通过透明 border 与内描边保证 shell 输出卡片在虚拟时间轴中不会因分数缩放而缺失边缘。
  https://github.com/anomalyco/opencode/pull/33846

- **#35628 fix(app): unmount hidden session panes**
  关闭的会话面板不再保留零尺寸实例，彻底卸载并修复了审查/终端叠加回归问题，减少资源占用。
  https://github.com/anomalyco/opencode/pull/35628

- **#35488 feat(app): persist review state per session**
  审查面板的变更模式、选中的审查文件现在按会话/工作区持久化，即使文件暂时不可用也能被恢复。
  https://github.com/anomalyco/opencode/pull/35488

- **#35829 feat(app

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-09

## 今日更新概览
今日项目发布了 v0.19.8 正式版，重点添加了 CLI 环境隔离能力并补全了 WeCom 频道文档。社区在会话管理、内存一致性和 daemon 多工作区方向讨论活跃，新增多个特性 PR（QQ Bot 适配、Webhook 触发、transcript 分页接口等），同时针对 Windows 安装、token 限制和模型兼容性等反馈的修复也在快速推进。

## 版本发布

**v0.19.8**
- 频道文档新增 WeCom 支持（[@DragonnZhang](https://github.com/DragonnZhang)）
- CLI `serve` 增加环境隔离与全量准入控制（[@doudouOUC](https://github.com/doudouOUC)）
v0.19.7-nightly 和 v0.19.6-preview.0 仅包含上述文档更新。

## 社区热点 Issues（10 条）

1. **#6378 [RFC] 单 daemon 支持多工作区**
   [链接](https://github.com/QwenLM/qwen-code/issues/6378) | 评论 19
   提案在保持现有客户端兼容的前提下，让一个 `qwen serve` daemon 服务多个工作区。大量讨论集中在会话隔离、路径映射和向后兼容方案上，是近期社区最关注的长线架构改进。

2. **#6334 Windows 下 extensions install 安装失败**
   [链接](https://github.com/QwenLM/qwen-code/issues/6334) | 👍 1 | 评论 5
   用户反馈 Qwen Code 自身提示从 git 安装扩展失败，非网络问题。该问题影响 Windows 平台扩展生态，多次报告后仍未解决，社区和维护者正在排查 git clone 逻辑。

3. **#6384 环境配置模型预留全量上下文窗口导致 hard limit: 0**
   [链接](https://github.com/QwenLM/qwen-code/issues/6384) | 评论 5
   当模型配置保留了其最大上下文窗口给输出时，Qwen Code 在发送前压缩阶段计算出 hard limit 为 0，导致请求直接失败。涉及 token 管理核心逻辑，对使用自定义模型的用户影响较大。

4. **#6505 Subagent 推理循环可无限重复相同工具调用**
   [链接](https://github.com/QwenLM/qwen-code/issues/6505) | 评论 4
   子代理在搜索/探索任务中陷入重复调用同一工具的同参数的死循环，主代理的循环检测未触发。影响后台自动化场景的可靠性，标记为可贡献修复（welcome-pr）。

5. **#6414 VS Code 扩展无法连接 Qwen 代理**
   [链接](https://github.com/QwenLM/qwen-code/issues/6414) | 评论 4
   VS Code 中提示 “Failed to connect to Qwen agent”，多个用户报告相同错误，可能涉及 daemon 通信或 IDE 集成层面的问题，仍在等待信息。

6. **#6246 qwen_code 无法正确识别自身进程，可能误杀所有 node 进程**
   [链接](https://github.com/QwenLM/qwen-code/issues/6246) | 评论 3
   当用户要求停止后台 node 进程时，Qwen Code 会终止包括自身在内的所有 node 进程，属于 shell 工具误伤，近期有修复 PR（#6544）跟进。

7. **#6487 Memory 索引过时及内容在压缩后丢失**
   [链接](https://github.com/QwenLM/qwen-code/issues/6487) | 评论 2
   `/remember` 后 MEMORY.md 索引未刷新，且内存压缩导致内容丢失。两个独立缺陷影响长时间会话的记忆可靠性，已有 PR #6497 尝试修复索引刷新。

8. **#6401 ProxyAgent 不支持 NO_PROXY**
   [链接](https://github.com/QwenLM/qwen-code/issues/6401) | 评论 2
   全局代理设置未遵循 `NO_PROXY` 环境变量，导致内网请求被错误代理。影响企业用户网络配置，社区期待修复。

9. **#6519 Anthropic Claude 4.8+ 模型因废弃 temperature 参数返回 400**
   [链接](https://github.com/QwenLM/qwen-code/issues/6519) | 评论 1
   使用 Claude Opus 4.8 时请求携带了已废弃的 `temperature` 参数，服务端拒绝。根因定位在核心模型适配层，需要移除参数发送。

10. **#6503 斜杠命令补全排序：近期使用覆盖名称 vs 别名优先级**
    [链接](https://github.com/QwenLM/qwen-code/issues/6503) | 评论 2
    执行 `/clear` 后，`/re` 的补全错误地将 `/clear` 的别名提示置于 `/resume` 前，尽管已有 PR #5577 修复过类似问题。用户体验细节但影响日常交互效率。

## 重要 PR 进展（10 条）

1. **#6457 feat(qqbot): 群消息处理与实验性定时消息**
   [链接](https://github.com/QwenLM/qwen-code/pull/6457)
   完成 QQ Bot 群聊消息关键词触发、@提及检测及定时消息支持，是 QQ 频道适配的最后一块拼图。

2. **#6525 feat(serve): 基于游标的分页 transcript 回放端点**
   [链接](https://github.com/QwenLM/qwen-code/pull/6525)
   为 `qwen serve` 增加 `GET /session/:id/transcript`，支持冻结快照、游标分页和父链重建，用于长会话审查和调试。

3. **#6495 feat(channels): 支持 Webhook 触发的频道任务**
   [链接](https://github.com/QwenLM/qwen-code/pull/6495)
   允许外部 Webhook 推送事件到 daemon，Qwen 处理后通过频道主动发送响应，拓展了自动化集成场景。

4. **#6534 fix: 修复 workspace skills 在扩展禁用和 ACP 预热时的状态**
   [链接](https://github.com/QwenLM/qwen-code/pull/6534)
   确保技能状态与扩展启用同步，并为 Web Shell 和 daemon 客户端补充 sessionless ACP 子进程预热路径。

5. **#6259 feat(daemon): daemon 重启后持久化会话 artifacts**
   [链接](https://github.com/QwenLM/qwen-code/pull/6259)
   实现 V2 daemon 会话工件元数据持久化，支持重启后恢复、墓碑记录和 fork 时重映射，大幅提升 daemon 可靠性。

6. **#6535 feat(scheduled-tasks): 通过 create_sub_session 增加隔离运行模式**
   [链接](https://github.com/QwenLM/qwen-code/pull/6535)
   为定时任务新增独立子会话工具，每次触发在干净上下文中执行，避免累积污染，优化后台任务稳定性。

7. **#6489 feat(hooks): 添加 MessageDisplay 钩子，支持流式中间状态**
   [链接](https://github.com/QwenLM/qwen-code/pull/6489)
   在助手回复流式输出过程中触发事件，填补了此前只能通过 Stop 钩子获取完整回复的缺口，方便实时处理。

8. **#6545 fix(extension): Windows 上扩展安装前清理临时目录避免克隆冲突**
   [链接](https://github.com/QwenLM/qwen-code/pull/6545)
   修复 Windows 下扩展安装时因残留目录导致的 `destination path already exists` 错误，直接解决 Issue #6334。

9. **#6459 feat(memory): 后台记忆代理超时可配置**
   [链接](https://github.com/QwenLM/qwen-code/pull/6459)
   新增 `memory.agentTimeoutMinutes` 设置，允许用户自定义提取、回顾等后台代理的最大运行时间，可设为 0 关闭超时。

10. **#6544 fix(shell): 避免基于 pgrep 的进程选择器误杀自身**
    [链接](https://github.com/QwenLM/qwen-code/pull/6544)
    增强 shell 工具的自我保护，阻止宽泛的 `pgrep` 选择器进入 `kill` 指令，并引导模型使用更安全的进程管理方式。

## 功能需求归类

从近期 Issues 中可归为以下几大方向（仅列出现象，不预测路线）：

- **会话与工作区管理**：多工作区 daemon、isolated 子会话、会话历史完整性（#6378、#6535、#6501）
- **内存系统可靠性**：压缩内容丢失、索引更新不及时、worktree 内存隔离（#6487、#6449、#6497）
- **渠道与集成**：WeCom 文档/适配、QQ Bot、Webhook 触发、DM 策略（#6490、#6457、#6495、#6392）
- **安装与平台兼容性**：Windows 安装/扩展失败、VS Code 连接问题（#6334、#6414、#3845、#6545）
- **Token 与上下文管理**：hard limit 0、模型温度参数兼容、上下文过大（#6384、#6519）
- **UI/UX 细节**：状态栏模型显示、审批模式标识、WebShell 引用渲染、斜杠补全排序（#6512、#6496、#6536、#6503）

## 开发者关注点

今日反馈中高频痛点与需求集中在：

1. **Windows 环境健壮性**：安装失败、扩展克隆、证书吊销等问题反复出现，平台体验亟需加强。
2. **daemon 架构演进**：多工作区支持呼声极高，相关资源隔离、artifact 持久化、会话索引等配套能力同步推进。
3. **记忆与上下文一致性**：压缩丢失、索引不刷新、worktree 间污染等问题影响长期任务可靠性。
4. **代理与网络配置**：NO_PROXY 忽略导致企业内部不可用，需尽快支持。
5. **工具安全性**：误杀自身进程、子代理循环无检测等运行时缺陷，正在通过针对性 PR 修复。

社区贡献活跃，欢迎有相关经验的开发者参与 [标记 welcome-pr 的 issues](https://github.com/QwenLM/qwen-code/issues?q=is%3Aissue+is%3Aopen+label%3Awelcome-pr)。

</details>