# Skills 生态热点 2026-07-13

> 生成时间: 2026-07-13 00:24 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告

**覆盖仓库**：`anthropics/skills`（Claude）、`openai/skills`（Codex）
**数据窗口**：截至 2026-07-13，含 50 条 PR、100 条 Issue

---

## 1. 全生态热门 Skills

热度综合评论数、👍 数和讨论实质性，以下为当前最受关注的技能/技能相关条目：

| 条目 | 仓库 | 类型 | 热度指标 | 链接 |
|------|------|------|----------|------|
| 社区技能冒充 `anthropic/` 命名空间的信任边界攻击 | anthropics/skills | Issue #492 | 34 评论，👍 2 | [#492](https://github.com/anthropics/skills/issues/492) |
| 组织级技能共享能力缺失 | anthropics/skills | Issue #228 | 14 评论，👍 7 | [#228](https://github.com/anthropics/skills/issues/228) |
| `run_eval.py` 在 CLI 下 0% 触发率导致技能评估失效 | anthropics/skills | Issue #556 | 12 评论，👍 7 | [#556](https://github.com/anthropics/skills/issues/556) |
| 技能消失与重命名引发的持久化错误 | anthropics/skills | Issue #62 | 10 评论，👍 2 | [#62](https://github.com/anthropics/skills/issues/62) |
| 紧凑记忆技能（compact-memory）提案：用符号化标记压缩 agent 状态 | anthropics/skills | Issue #1329 | 9 评论，👍 0 | [#1329](https://github.com/anthropics/skills/issues/1329) |
| 技能创建器应更新为最佳实践（已关闭） | anthropics/skills | Issue #202 | 8 评论，👍 1 | [#202](https://github.com/anthropics/skills/issues/202) |
| 文档技能与示例技能插件安装重复内容 | anthropics/skills | Issue #189 | 6 评论，👍 9 | [#189](https://github.com/anthropics/skills/issues/189) |
| Playwright 交互式技能依赖已移除的 `js_repl` 功能 | openai/skills | Issue #386 | 4 评论，👍 4 | [#386](https://github.com/openai/skills/issues/386) |
| 实验性技能无法发现 | openai/skills | Issue #153 | 4 评论，👍 3 | [#153](https://github.com/openai/skills/issues/153) |
| 技能安装器无更新/重装路径 | openai/skills | Issue #127 | 3 评论，👍 0 | [#127](https://github.com/openai/skills/issues/127) |

---

## 2. 各仓库亮点

### `anthropics/skills`
社区贡献活跃，50 个 PR 涵盖技能修复、新增与工具改进。当前讨论集中在评估工具链的可靠性（`run_eval.py` 多处 bug）、安全与信任边界（社区技能冒用命名空间）、以及组织共享能力缺失。同时出现一批文档生产力类技能（ODT、排版、PDF 大小写修复）和质量/治理类提案（技能质量分析器、自审计技能、agent 治理），表明用户正从“能用”向“可靠、可管理”演进。

### `openai/skills`
无 open PR，但 Issue 暴露了工具链成熟度问题：核心 curated 技能因平台功能移除而失效（#386），安装器缺乏更新路径（#127），实验性技能路径模糊（#153）。另有少量技能提案（技能编排器 #491、动画优化 #469），但整体贡献度和讨论量均低于 Claude 生态。

---

## 3. 社区需求归类

以下为两个仓库中反复出现或形成聚类的工作流需求，仅反映当前提出的方向：

- **文档生成与格式保真**
  Claude PR 中出现了 ODT 技能（#486）、文档排版控制（#514）、PDF 大小写引用修复（#538）。需求集中在 Office/开源文档格式的创建、模板填充及其生成质量细节。

- **技能质量与安全治理**
  Claude 生态提出了技能质量分析器（#83）、技能安全分析器（#83）、自审计技能（#1367）、agent 治理（#412），以及命名空间信任攻击议题（#492）。Codex 侧尚无对应诉求。

- **工具链稳定与开发者体验**
  Claude 的 `run_eval.py` 修复（#1298、#1099）、YAML 描述验证（#539）及 Codex 的 `js_repl` 移除导致技能失效（#386）、安装器无更新（#127），均指向技能开发和分发链条中的断点。

- **技能共享与分发**
  Claude 强烈要求组织内共享（#228）和解决重复安装（#189）；Codex 的“实验性技能不可见”（#153）也属于分发路径问题。尚未形成跨仓库的标准化方案。

- **记忆与状态管理**
  Claude 提出紧凑记忆技能（#1329），试图用符号化标记压缩 agent 长期状态，属于新的方向，Codex 侧未见呼应。

- **技能编排/路由**
  Codex 出现技能编排器提案（#491），用于消除多技能重叠；Claude 侧尚未出现类似 PR，但技能重复问题（#189）侧面反映了相同痛点。

---

## 4. 活跃待合并 Skills

**来自 `anthropics/skills` 的开放 PR：**

- **修复 `run_eval.py` 0% 召回率问题** ([#1298](https://github.com/anthropics/skills/pull/1298))
  解决评估工具因 artifact 安装、Windows 流读取、触发检测等问题导致技能描述优化完全无效的 bug。相关 Issue #556 有 12 条评论，多个用户独立复现。该 PR 是技能创建与优化链的关键修复。

- **增加文档排版技能** ([#514](https://github.com/anthropics/skills/pull/514))
  自动检测并修正 AI 生成文档的孤字换行、标题与后文分离、编号不对齐等排版问题。属于用户体验增强类技能，未有公开反对。

- **ODT 技能** ([#486](https://github.com/anthropics/skills/pull/486))
  实现 OpenDocument 格式创建、模板填充与 ODT 到 HTML 转换。讨论了 ISO 标准文件格式的原生支持需求，目前开放等待审核。

- **改进 frontend-design 技能** ([#210](https://github.com/anthropics/skills/pull/210))
  提升指令清晰度和可执行性，使 Claude 能在单次对话内遵照完成，属于技能文档优化。

- **技能创建器：YAML 描述特殊字符警告** ([#539](https://github.com/anthropics/skills/pull/539))
  发现未引号描述含冒号时会导致静默解析失败，增加预验证。修复了开发者体验死角。

- **自审计技能** ([#1367](https://github.com/anthropics/skills/pull/1367))
  机械验证文件生成后再进行四维推理审计，按伤害严重度优先排序，通用技能。2026-06-28 创建，仍在讨论中。

以上 PR 均处于 **OPEN** 状态，实际用途分别对应工具修复、新文档能力、质量校验。Codex 仓库无开放 PR。

---

## 5. 跨仓库今日备注

- **关注重点分化**：Claude 生态同时涌现代码级修复和新技能提案，呈现“建设+维护”双轨；Codex 生态 Issue 主要反映工具链断连，技能提议零星，更偏向“排障”阶段。
- **贡献活跃度差异**：Claude 仓库 50 个 PR 涵盖前端、文档、评估工具、安全等多个方向；Codex 仓库同期无 PR，Issue 互动也较少，反映学习/参与曲线或平台稳定性对贡献活跃度的影响。
- **事实备注**：
  1. 两个仓库均存在技能分发/安装路径问题（Claude 重复安装，Codex 无更新路径）。
  2. Claude 社区已提出技能信任边界利用的具体攻击场景（Issue #492），Codex 侧尚未观察到安全意识提案。
  3. `js_repl` 从 Codex 移除导致 curated 技能失效，说明平台端功能下架对技能生态有直接冲击。