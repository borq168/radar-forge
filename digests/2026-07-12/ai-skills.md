# Skills 生态热点 2026-07-12

> 生成时间: 2026-07-12 00:24 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告（2026-07-12）

## 1. 全生态热门 Skills

按评论数、点赞等关注度指标排序，列出两大生态中当前最活跃的议题（含已关闭议题）。

| # | 议题/PR | 仓库 | 类型 | 评论 | 👍 | 简要 |
|---|---------|------|------|------|----|------|
| 1 | [#492 Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse](https://github.com/anthropics/skills/issues/492) | anthropics/skills | Issue | 34 | 2 | 社区技能冒充官方命名空间，产生信任边界漏洞 |
| 2 | [#228 Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228) | anthropics/skills | Issue | 14 | 7 | 请求在组织内直接共享技能，替代手动文件传输 |
| 3 | [#556 run_eval.py: claude -p never triggers skills (0% trigger rate)](https://github.com/anthropics/skills/issues/556) | anthropics/skills | Issue | 12 | 7 | 技能评估脚本始终无法触发任何技能，召回率 0% |
| 4 | [#62 All my skills have disappeared and now I get errors](https://github.com/anthropics/skills/issues/62) | anthropics/skills | Issue | 10 | 2 | 用户技能文件消失引发大规模困惑 |
| 5 | [#1329 Proposing compact-memory (symbolic notation for compact agent state)](https://github.com/anthropics/skills/issues/1329) | anthropics/skills | Issue | 9 | 0 | 提出用符号化记忆压缩长期代理状态 |
| 6 | [#202 skill-creator should be updated to best practice](https://github.com/anthropics/skills/issues/202) | anthropics/skills | Issue（已关闭） | 8 | 1 | skill-creator 存在冗长、教育性过强、违反自身命名规范等问题 |
| 7 | [#189 document-skills and example-skills plugins install identical content](https://github.com/anthropics/skills/issues/189) | anthropics/skills | Issue | 6 | 9 | 两个插件安装相同技能导致上下文窗口重复 |
| 8 | [#386 playwright-interactive skill still depends on removed js_repl feature](https://github.com/openai/skills/issues/386) | openai/skills | Issue（已关闭） | 4 | 4 | 精选技能依赖已移除的 js_repl，导致不可用 |
| 9 | [#153 Experimental skills not found](https://github.com/openai/skills/issues/153) | openai/skills | Issue | 4 | 3 | 实验性技能未按文档预期被安装程序发现 |
| 10 | [#412 Skill proposal: agent-governance — safety patterns for AI agent systems](https://github.com/anthropics/skills/issues/412) | anthropics/skills | Issue（已关闭） | 6 | 0 | 提出代理治理技能，覆盖策略执行、威胁检测等 |

*注：Claude PR 列表虽有多项打开，但均未出现评论计数（标记为 undefined），无法纳入活跃度排序。*

## 2. 各仓库亮点

### anthropics/skills（Claude Skills）
讨论集中于基础设施信任：安全议题（#492）引发了最多的评论，社区对命名空间假冒与权限提升高度警觉。开发者工具链故障（#556）得到 10+ 次独立复现，直接促使多个 PR（#1298、#1099）尝试修复评估环路。组织级共享（#228）、技能意外消失（#62）和重复安装（#189）反映出用户对分发与可靠性日益增强的需求。PR 提交量较大（50 条），但缺乏公开评审讨论，提示审核流程可能滞后。

### openai/skills（Codex Skills）
热点主要是功能兼容性与安装体验。已关闭的 #386 显示精选技能依赖已移除的 `js_repl`，用户遭遇中断。安装程序（skill-installer）存在问题：无更新/重装路径（#127）、无法发现实验性技能（#153、#259）。社区也提出技能编写辅助工具（linter #121）和技能编排层（#491）。该仓库没有 PR 记录，反馈全部通过 Issue 表达，活跃度相对较低。

## 3. 社区需求归类

跨仓库出现的诉求可归纳为以下几类，均来自用户自发的同类表达：

- **技能评估与质量保障**
  Claude：#556（eval 0% 触发率）、#83（skill-quality-analyzer）、#1367（self-audit 自审计）；Codex：#121（linter/IDE 插件）。
  反映用户需要可工作的评估工具链和代码风格检查。

- **文档与格式生成**
  Claude 存在多个针对文档技能的新提案与修复：#514（typography 质量控制）、#486（ODT 创建与模板填充）、#541（OOXML 冲突修复）。
  文档处理仍是高频新建技能方向。

- **安全与治理**
  Claude #492（信任边界）、#412（agent-governance）。
  用户希望技能系统内嵌权限、审计与安全策略。

- **分发与共享**
  Claude #228（组织内共享）、#189（重复安装）；Codex #127（无更新路径）、#153（实验技能不可见）、#491（技能编排去重）。
  跨仓库共同需求：更可靠的分发、安装更新与去重机制。

- **代理状态与记忆**
  Claude #1329（compact-memory）。
  长对话或长期运行代理对上下文压缩的高效表示有需求。

- **现有技能可用性修复**
  Codex #386（播放剧本依赖已移除功能）、#96（脚本路径找不到）。
  发布技能的维护与兼容性成为用户刚需。

*注意：上述归类仅基于当日数据，需求强度的跨生态比较证据不足，不构成趋势判断。*

## 4. 活跃待合并 Skills（PR）

所有 PR 均未记录评论活动，以下列出在议题中被提及或有重复关注的实现性 PR，状态均为 OPEN。

- **[#1298 fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)**
  安装评估 artifact 为真实 skill，修复 Windows 流读取、触发检测与并行 worker，解决 #556 的根本问题。多项独立复现证明评估回路全损。

- **[#1099 skill-creator: fix run_eval.py crash on Windows](https://github.com/anthropics/skills/pull/1099)**
  针对 Windows 下 subprocess 管道读取异常，消除 “not triggered” 洪流。

- **[#514 Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
  防止 AI 生成文档的排版缺陷（孤行、寡行、编号错位），直接作用于每一次文档生成。

- **[#486 Add ODT skill](https://github.com/anthropics/skills/pull/486)**
  支持 OpenDocument 格式创建、模板填充及 ODT 到 HTML 转换，覆盖 LibreOffice 生态。

- **[#1367 feat(skills): add self-audit](https://github.com/anthropics/skills/pull/1367)**
  在输出交付前执行机械验证与四维度推理审计，面向通用项目和模型。

- **[#541 fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)**
  修复文档技能在已有书签的文档中添加修订时导致的 OOXML 损坏。

- **[#210 Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**
  重写前端设计技能，使指令更清晰、可执行。

上述 PR 均来自社区贡献，基本未获得仓库维护者评论，但对应 Issue 反馈积极，代表明确的用户诉求。

## 5. 跨仓库今日备注

- Claude Skills 社区更聚焦技能**基础设施的可信与可用性**（评估工具、安全命名空间、组织共享），并持续涌入多样化的技能提案（文档、记忆、审计），而 Codex 社区主要关注**技能安装与已有功能的兼容性**。
- 两个仓库的贡献模式差异明显：Claude 有大量第三方 PR 提交但评审缺位，Codex 则完全通过 Issue 反馈，未见公开的社区技能 PR。
- 事实 1：跨仓库均出现“技能无法正常发现/触发”的问题（Claude #556、Codex #153），是当前用户最直接的痛点。
- 事实 2：在重复技能或技能重叠方面，Claude #189 和 Codex #491 分别提出了去重需求，但解决方案尚未落地。
- 事实 3：Claude 的 `run_eval.py` 故障已演化为跨平台共同问题（#556、#1298、#1099），影响技能描述优化流程的整体可信度。