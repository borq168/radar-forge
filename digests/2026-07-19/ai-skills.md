# Skills 生态热点 2026-07-19

> 生成时间: 2026-07-19 00:23 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告（2026‑07‑19）

数据源：`anthropics/skills`、`openai/skills` 两个仓库共 50 条 PR 与 100 条 Issue。以下信息均来自当日快照。

---

## 1. 全生态热门议题 / 技能提案
按 Issue 评论数、👍 数及其他参与信号排序，列出最受关注的技能、工具与需求。

| 议题 | 仓库 | 热度信号 | 备注 |
|------|------|----------|------|
| [#492 社区技能冒充官方命名空间的安全风险](https://github.com/anthropics/skills/issues/492) | anthropics/skills | 💬 34 条评论 · 👍 2 | 提出社区技能可通过 `anthropic/` 前缀提升信任，存在权限滥用可能 |
| [#228 组织内技能共享需求](https://github.com/anthropics/skills/issues/228) | anthropics/skills | 💬 14 · 👍 7 | 希望 Claude.ai 提供团队共享技能库或直接分享链接 |
| [#556 `run_eval.py` 始终无法触发技能（0% 召回率）](https://github.com/anthropics/skills/issues/556) | anthropics/skills | 💬 12 · 👍 7 | 技能评测工具失效，导致描述优化循环无效 |
| [#62 用户创建的 12 个复杂技能全部消失](https://github.com/anthropics/skills/issues/62) | anthropics/skills | 💬 10 · 👍 2 | 技能消失、重命名后不可用，暴露技能持久化问题 |
| [#1329 提议 `compact-memory` 压缩代理记忆技能](https://github.com/anthropics/skills/issues/1329) | anthropics/skills | 💬 9 | 用符号标记压缩长期代理状态，减少上下文消耗 |
| [#202 要求更新 `skill-creator` 为可操作指令而非教学文档](https://github.com/anthropics/skills/issues/202) | anthropics/skills | 💬 8 · 👍 1 | 当前版本解释概念多于指导执行，且命名不规范 |
| [#386 `playwright-interactive` 依赖已移除的 `js_repl` 功能](https://github.com/openai/skills/issues/386) | openai/skills | 💬 4 · 👍 4 | 导致精选技能不可用，需更新依赖 |
| [#491 技能编排器（Skill Orchestrator）提案](https://github.com/openai/skills/issues/491) | openai/skills | 💬 1 · 👍 3 | 轻量路由层，解决技能目录膨胀和语义重叠问题 |

> PR 评论数在数据源中均为 `undefined`，因此未纳入热度排序。部分 PR 如 [#1298（修复 run_eval.py）](https://github.com/anthropics/skills/pull/1298)、[#514（文档排印技能）](https://github.com/anthropics/skills/pull/514) 基于其修复根本问题和多次更新，推测获得不少讨论，但无法量化。

---

## 2. 各仓库亮点

### `anthropics/skills`
- 社区贡献持续涌入，PR 覆盖 bug 修复（`run_eval.py`、DAX 混淆、YAML 解析）、新技能（排印、ODT、技能质量分析器）以及技能创建工具本身的优化。
- 热门讨论集中在**工具链可靠性**（`run_eval.py` 召回率为 0% 直接影响整个描述优化循环）和**技能分发与安全**（命名空间冒用、技能消失、组织共享）。
- 安全相关 Issue #492 有 34 条评论，是全天最热，反映用户对技能信任边界的强烈关切。

### `openai/skills`
- 未见开放的 PR，社区活动完全集中在 Issue 区，以**缺陷报告和功能请求**为主。
- 核心问题是**精选技能对已移除功能的依赖**（#386 `js_repl`），导致技能无法使用；同时**技能安装器缺乏更新/重装路径**（#127）和**实验技能无法发现**（#153）等工具链问题突出。
- 提案 #491 “Skill Orchestrator” 显示用户开始寻找管理大规模技能目录的方法，与 Claude 侧对元技能（分析器、安全审计）的需求形成呼应。

---

## 3. 社区需求归类

| 需求方向 | 具体诉求（来源） | 出现范围 |
|----------|------------------|----------|
| **技能评测与质量保障** | `run_eval.py` 修复（#1298、#556、#1099）、`skill-quality-analyzer` 元技能（#83）、`skill-creator` 指令化（#202） | 仅 `anthropics/skills`，但工具失效影响面大 |
| **文档生成与排版** | 文档排印技能（#514）、ODT 创建/模板填充（#486）、已合并的 PDF 等文档技能持续修复 | 两仓库均有文档输出需求，Claude 侧技能更细粒度 |
| **技能分发与安装治理** | 命名空间冒用（#492）、技能消失（#62）、组织共享（#228）、无更新安装路径（#127）、实验技能不可见（#153） | 跨仓库：Claude 侧重共享与信任，Codex 侧重安装器功能 |
| **代理与系统管理** | 代理治理技能（#412）、技能编排器（#491）、紧凑记忆（#1329） | 两仓库均出现，体现对长期代理管控和上下文压缩的共同需求 |
| **安全与信任** | 社区技能冒充官方认证（#492）、自我审计技能（#1367） | 当前仅在 `anthropics/skills` 明确讨论，但 Codex 侧如安装安全隐患尚未凸显 |

*趋势观察：以上仅在单个仓库或极少数 Issue 中出现，不构成生态级趋势，仅作为社区信号记录。*

---

## 4. 活跃待合并 Skills（PR）

因 PR 评论数缺失，以下基于描述内容、关联 Issue 及最近更新情况，列出当前有实质修改、但尚未合并的 PR。

| PR | 仓库 | 状态 | 做什么 | 为何关注 |
|----|------|------|--------|----------|
| [#1298 修复 `run_eval.py` 零召回及 Windows 读取错误](https://github.com/anthropics/skills/pull/1298) | anthropics/skills | OPEN | 修复评测工具在多平台的触发检测、流读取和并行工作器问题 | 解决 #556 等 10+ 独立复现报告，是技能描述优化能否正常工作的关键 |
| [#514 新增文档排印技能](https://github.com/anthropics/skills/pull/514) | anthropics/skills | OPEN | 防止 AI 生成文档中的孤行、寡节、编号错位 | 通用文档质量问题，触发频率高，影响阅读体验 |
| [#541 修复 DAX 跟踪更改与书签 ID 冲突](https://github.com/anthropics/skills/pull/541) | anthropics/skills | OPEN | 避免 DAX 添加跟踪更改时导致文档损坏 | 已根因分析，硬编码低 ID 会与现有书签冲突 |
| [#539 修复 YAML 描述中包含冒号时的解析异常](https://github.com/anthropics/skills/pull/539) | anthropics/skills | OPEN | 在 YAML 解析前检测未加引号的描述字段 | 防止技能安装时因特殊字符而静默失败 |
| [#1367 新增自我审计技能](https://github.com/anthropics/skills/pull/1367) | anthropics/skills | OPEN | 交付前文件验证 + 四个维度的推理审计 | 面向通用项目，提供质量门控，与安全诉求一致 |

*Codex 仓库无 PR，故该小节仅涉及 Claude 侧。*

---

## 5. 跨仓库今日备注

- **关注重点差异**：`anthropics/skills` 社区同时推进新技能贡献与基础设施修复（评测、解析），`openai/skills` 目前集中在保持已有技能可用性（依赖兼容）和安装工具的改善。
- **贡献模式**：Claude 侧以 PR 驱动，社区直接提交技能或修复；Codex 侧以 Issue 反馈为主，当日无 PR 提交，技能提案亦通过 Issue 提出。
- **共同痛点**：两个仓库的安装/分发机制都受到质疑——Claude 的技能消失、命名空间冒用，Codex 的无更新路径、实验技能不可见，说明**技能生命周期管理**仍是生态基础薄弱环节。

*事实备注：*
1. `run_eval.py` 在 Claude 侧已被确认 10+ 次独立复现，且影响了 `improve_description.py` 等整个描述优化链条，但修复尚未合并。
2. Codex 的 `playwright-interactive` 技能在 `codex-cli 0.128.0` 中因依赖缺失而不可用，提示精选技能需随平台功能变化持续维护。
3. 两仓库均出现对“元技能”（分析器、编排器、审计）的兴趣，但都处于提案或初版阶段，未形成广泛采用的模块。