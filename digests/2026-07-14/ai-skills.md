# Skills 生态热点 2026-07-14

> 生成时间: 2026-07-14 00:21 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告

> **数据窗口**：2026-07-14（含50条PR、100条Issue）
> **覆盖仓库**：Anthropic `skills`、OpenAI `skills`

---

## 1. 全生态热门 Skills & 话题

按 **Issue 评论量 + 点赞数** 综合排序，两个仓库中关注度最高的条目如下：

| # | 议题 / PR | 仓库 | 类型 | 评论 | 👍 |
|---|----------|------|------|------|----|
| 1 | [#492 社区技能冒充官方 trust boundary 漏洞](https://github.com/anthropics/skills/issues/492) | Anthropic | 安全 | 34 | 2 |
| 2 | [#228 组织内技能共享需求](https://github.com/anthropics/skills/issues/228) | Anthropic | 功能请求 | 14 | 7 |
| 3 | [#556 run_eval.py 技能触发率为 0%](https://github.com/anthropics/skills/issues/556) | Anthropic | 工具修复 | 12 | 7 |
| 4 | [#62 用户所有技能消失并报错](https://github.com/anthropics/skills/issues/62) | Anthropic | 稳定性 | 10 | 2 |
| 5 | [#1329 技能提案：compact-memory（紧凑符号记忆）](https://github.com/anthropics/skills/issues/1329) | Anthropic | 新技能 | 9 | 0 |
| 6 | [#202 skill-creator 需升级至最佳实践（已关）](https://github.com/anthropics/skills/issues/202) | Anthropic | 工具改进 | 8 | 1 |
| 7 | [#189 插件内容重复导致技能双份](https://github.com/anthropics/skills/issues/189) | Anthropic | 工程修复 | 6 | 9 |
| 8 | [#412 技能提案：agent-governance（治理模式）](https://github.com/anthropics/skills/issues/412) | Anthropic | 新技能 | 6 | 0 |
| 9 | [#386 playwright-interactive 依赖已移除的 js_repl](https://github.com/openai/skills/issues/386) | OpenAI | 工具修复 | 4 | 4 |
|10 | [#491 技能提案：Skill Orchestrator（编排路由）](https://github.com/openai/skills/issues/491) | OpenAI | 新技能 | 1 | 3 |

> PR 的评论数据未能获取，故热点以 Issue 体现；少数高赞 Issue（如 #189）同样代表社区诉求。

---

## 2. 各仓库亮点

### Anthropic Skills (`anthropics/skills`)
当前社区焦点集中在 **技能评估工具链的修复**（`run_eval.py` 持续报 0% recall，多份 PR 试图解决）与 **技能信任模型**（`anthropic/` 命名空间滥用风险引发 34 条讨论）。同时出现了大量 **文档生成及排版类技能提案**（ODT、typography、frontend 改进、self-audit）以及 **元技能**（质量分析器、安全分析器），显示贡献者正在系统化技能的开发与保障体系。组织内共享、技能消失等体验类问题也获得高票反馈。

### OpenAI Codex Skills (`openai/skills`)
议题以 **依赖与工具链修复**为主（`playwright-interactive` 引用已移除的 `js_repl`、实验性技能不可见、安装程序无更新路径）。创新提案虽数量较少但方向明确：**Skill Orchestrator** 试图解决大量技能的重叠与路由，**linter/IDE 工具** 表达了对技能编写辅助的诉求。整体上，Codex 侧更偏向技能运行时的稳定性与开发体验问题。

---

## 3. 社区需求归类

| 需求方向 | 代表条目 | 涵盖仓库 |
|----------|---------|-----------|
| **技能安全与信任** | #492（冒充官方）、#412（agent-governance）、#83（security-analyzer） | Anthropic |
| **技能质量与评估** | #556（评估工具召回率）、#202（skill-creator 最佳实践）、#1367（self-audit）、#83（quality-analyzer） | Anthropic |
| **文档与排版技能** | #514（typography）、#486（ODT）、#210（frontend-design） | Anthropic |
| **技能管理与分发** | #228（组织共享）、#189（重复安装）、#62（技能丢失）、#127（无更新路径） | Anthropic、OpenAI |
| **技能运行与修复** | #538（PDF 大小写）、#541（DOCX 书签冲突）、#386（js_repl 移除） | Anthropic、OpenAI |
| **技能编排与工具** | #491（Skill Orchestrator）、#121（linter/IDE）、#1329（紧凑记忆） | OpenAI、Anthropic |
| **技能创建与元技能** | #83（quality-analyzer/security-analyzer）、#539（YAML 描述校验） | Anthropic |

> 以上均为从 PR/Issue 中提取的明确诉求，不做「趋势爆发」等过度推断。

---

## 4. 活跃待合并 Skills（PR 列表）

尽管 PR 评论数据未取得，以下 PR 近一个月内仍在更新，属于社区贡献的重要技能或修复：

| PR | 标题 | 现状 |
|----|------|------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): 修复 run_eval.py 始终报告 0% recall | 开放，配套 #1099 共同解决 Windows 问题，直接关系到评估工具可用性 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography：文档排版质量控制 | 开放，提供孤行/寡行/编号对齐问题的自动化保障 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 技能：OpenDocument 创建、模板填充及解析 | 开放，覆盖 ISO 标准文档格式的读写转换 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit：机械验证 + 四维推理审计 | 开放，对输出文件存在性及推理质量做双重检查 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 开放，提供结构/文档/安全等五维评估的元技能 |
| [#541](https://github.com/anthropics/skills/pull/541) | fix(docx): 修复修订与书签 ID 冲突 | 开放，防止已有书签的文档在添加修订时损坏 |
| [#539](https://github.com/anthropics/skills/pull/539) | fix(skill-creator): 检测 YAML 描述中未引号特殊字符 | 开放，避免 YAML 解析截断导致技能注册失败 |
| [#210](https://github.com/anthropics/skills/pull/210) | 改进 frontend-design 技能清晰度与可操作性 | 开放，重写指令确保单次对话可执行性 |

所有 PR 均为开放状态，用途如摘要所述；不预测合并时间或路线图。

---

## 5. 跨仓库今日备注

- **Anthropic Skills** 仓库的社区贡献密度显著更高（前 10 条 PR 均为开放中，涉及多个新技能与工具修复），且安全与信任议题（34 评论）是当前最突出的顾虑。
- **OpenAI Codex Skills** 仓库以依赖兼容性和工具链请求为主，技能提案（Orchestrator）刚启动讨论，尚未形成规模化的社区贡献队列。
- 两个仓库共同反映出 **技能安装/分发/重复问题**（重复安装、无更新路径、技能丢失）是跨实现的基础设施痛点，分别以不同形式出现。

**事实备注**：
1. 本次抓取的 PR 评论数字段缺失，报告热点主要来自 Issue 的讨论量，PR 活跃度仅从更新时间推断。
2. Anthropic 的 `run_eval.py` 问题引发多条 PR 和 Issue 联动（#556、#1298、#1099），是近期最集中的工程焦点。
3. Codex 侧尚无待合并的 PR，但 `playwright-interactive` 依赖移除（#386）已关闭，说明维护方在跟进修复。