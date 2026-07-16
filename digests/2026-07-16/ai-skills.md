# Skills 生态热点 2026-07-16

> 生成时间: 2026-07-16 00:22 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告

数据窗口：2026-07-16
覆盖仓库：2 个 · 纳入 PR：50 条 · 纳入 Issue：100 条

---

## 1. 全生态热门 Skills（评论 / 关注度最高）

按 Issue 评论数与 👍 综合排序，跨仓库 TOP 8：

| 热度排序 | 仓库 | 编号 | 标题 | 评论 | 👍 |
|---------|------|------|------|------|------|
| 1 | Claude | [#492](https://github.com/anthropics/skills/issues/492) | Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse | 34 | 2 |
| 2 | Claude | [#228](https://github.com/anthropics/skills/issues/228) | Enable org-wide skill sharing in Claude.ai | 14 | 7 |
| 3 | Claude | [#556](https://github.com/anthropics/skills/issues/556) | run_eval.py: claude -p never triggers skills/commands (0% trigger rate) | 12 | 7 |
| 4 | Claude | [#62](https://github.com/anthropics/skills/issues/62) | All my skills have disappeared and now i get errors | 10 | 2 |
| 5 | Claude | [#1329](https://github.com/anthropics/skills/issues/1329) | Proposing a second skill: compact-memory | 9 | 0 |
| 6 | Claude | [#202](https://github.com/anthropics/skills/issues/202) | skill-creator should be updated to best practice | 8 | 1 |
| 7 | Claude | [#189](https://github.com/anthropics/skills/issues/189) | document-skills and example-skills plugins install identical content, causing duplicate skills | 6 | 9 |
| 8 | Codex | [#386](https://github.com/openai/skills/issues/386) | playwright-interactive skill still depends on removed js_repl feature | 4 | 4 |

> 注：PR 评论数均为 undefined，未进入该排名；Codex 后续高评论 Issue 为 #153（4 评）、#127（3 评）等，此处截断至第 8。

---

## 2. 各仓库亮点

**Claude Skills (anthropics/skills)**
讨论集中在技能信任边界与组织共享需求，安全命名空间问题热度最高（34 评论）。技能创建工具链的可靠性是另一焦点——`run_eval.py` 触发率为 0 的问题催生了多个修复 PR。社区贡献活跃，PR 覆盖文档排版、ODT 支持、DOCX 书签冲突、YAML 预检等具体修复，以及元技能的质量/安全分析器和自审计技能。

**Codex Skills (openai/skills)**
Issue 围绕技能安装与依赖兼容性展开，`playwright-interactive` 依赖已移除的 `js_repl` 导致使用中断。实验性技能路径发现、更新/重装路径缺失等问题仍在讨论中。贡献以提议为主（如 Skill Orchestrator），当期无 PR 合并，整体工程互动低于 Claude 仓库。

---

## 3. 社区需求归类

从两个仓库的 Issue 与 PR 中提炼出的高频技艺方向：

- **安全与治理**
  Claude #492（社区技能命名冒充官方）、#412（agent-governance 安全模式）。

- **组织协作与技能共享**
  Claude #228（组织内直接共享技能，避免手动传递 .skill 文件）。

- **技能工程工具链**
  Claude #556 / #202 / #539 + 多个 PR（eval 触发、skill-creator 最佳实践、YAML 预检）；Codex #121（linter/IDE 工具）、#127（更新/重装路径缺失）。

- **技能发现与去重**
  Claude #189（插件安装导致重复技能）；Codex #491（Skill Orchestrator 去重与路由）。

- **代理记忆与状态**
  Claude #1329（compact-memory – 符号化压缩代理状态记录）。

- **文档生成与格式处理**
  Claude PR #514（文档排版质量控制）、#486（ODT 创建/填充）、#541（DOCX 书签 id 冲突）、#538（PDF 大小写引用修复）。

- **元技能与输出审计**
  Claude PR #83（skill-quality-analyzer、skill-security-analyzer）、#1367（输出自审计，机械验证 + 四维推理质量门）。

---

## 4. 活跃待合并 Skills（PR 状态与用途）

以下 PR 当前均为 OPEN 状态，尚无合并决定，按功能归类说明：

- **eval 修复系列**
  - [#1298](https://github.com/anthropics/skills/pull/1298) 修复 `run_eval.py` 始终返回 0% recall 的问题，涉及 Windows 流读取、触发检测与并行 worker。
  - [#1099](https://github.com/anthropics/skills/pull/1099) 单独修复 Windows 下因管道错误导致的 0% 触发率。两者从不同角度解决同一 Issue #556。

- **文档技能新增**
  - [#514](https://github.com/anthropics/skills/pull/514) 引入 document-typography 技能，自动检测生成文档中的孤立词、标题无伴正文等排版缺陷。
  - [#486](https://github.com/anthropics/skills/pull/486) 提供 ODT/ODS 格式创建、模板填充及 ODT 转 HTML 能力。

- **文档技能修复**
  - [#538](https://github.com/anthropics/skills/pull/538) 修正 PDF 技能中 8 处文件名大小写引用错误，避免 case-sensitive 环境失效。
  - [#541](https://github.com/anthropics/skills/pull/541) 修复 DOCX 技能添加修订时与已有书签的 `w:id` 冲突导致文档损坏。

- **技能创建器优化**
  - [#539](https://github.com/anthropics/skills/pull/539) 在 YAML 前处理阶段检测未引号包裹的 description 字段中的 `:`，防止静默解析错误。

- **前端设计技能改进**
  - [#210](https://github.com/anthropics/skills/pull/210) 提升 frontend-design 技能的清晰度与可执行性，确保指令在单次对话中可落地。

- **元技能与分析**
  - [#83](https://github.com/anthropics/skills/pull/83) 新增 skill-quality-analyzer 和 skill-security-analyzer，从结构化/文档/示例/功能/安全性等维度评估技能。
  - [#1367](https://github.com/anthropics/skills/pull/1367) 新增 self-audit 技能，先进行机械文件存在性检查，再按损害严重度进行四维推理审计。

---

## 5. 跨仓库今日备注

- Claude 仓库中 `run_eval.py` 引发的评估失效问题同时被两个 PR 交叉修复，反映出工具链稳定性是当前贡献者最紧迫的工程痛点。
- Codex 仓库有用户提出了“Skill Orchestrator”以处理技能目录膨胀与语义重叠，这与 Claude #189 的重复安装问题在需求上相近。
- Claude 仓库的社群贡献以具体修复和新增技能为主，Codex 仓库则更多是基础设施诉求（安装路径、实验性技能发现），两者当前阶段不同。

*每条备注均基于当日数据，未进行趋势外推。*