# Skills 生态热点 2026-07-10

> 生成时间: 2026-07-10 00:29 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告（2026-07-10）

## 1. 全生态热门 Skills
按 Issue 评论数 + 👍 数综合热度排名，覆盖两大仓库（PR 因评论数据缺失暂未纳入，详见第 4 节）：
1. [anthropics/skills#492](https://github.com/anthropics/skills/issues/492) — 安全：社区技能通过 anthropic/ 命名空间分发引发信任边界滥用（34 评论，2 👍）
2. [anthropics/skills#228](https://github.com/anthropics/skills/issues/228) — 组织级技能共享需求（14 评论，7 👍）
3. [anthropics/skills#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 始终报告 0% 触发率（12 评论，7 👍）
4. [anthropics/skills#62](https://github.com/anthropics/skills/issues/62) — 用户创建的所有技能消失且报错（10 评论，2 👍）
5. [anthropics/skills#1329](https://github.com/anthropics/skills/issues/1329) — 提议 compact-memory 技能（符号化紧凑 Agent 状态）（9 评论）
6. [openai/skills#386](https://github.com/openai/skills/issues/386) — `playwright-interactive` 仍依赖已移除的 `js_repl` 功能（4 评论，4 👍）
7. [openai/skills#153](https://github.com/openai/skills/issues/153) — 实验性技能无法被发现（4 评论，3 👍）
8. [openai/skills#96](https://github.com/openai/skills/issues/96) — `gh-address-comments` 找不到 `scripts/fetch_comments.py`（2 评论，4 👍）

## 2. 各仓库亮点
- **anthropics/skills**
  社区贡献极活跃（50 个开放 PR，50 个 Issue），讨论聚焦于技能创建工具链的可靠性（`run_eval.py` 长期 0% recall 问题），技能安全与信任边界（社区技能冒充官方），以及企业内的组织共享。新技能提案方向涵盖 ODT 文档、排版质量控制、技能自我审计等，但多数 PR 尚缺维护者评论。

- **openai/skills**
  无开放 PR，Issue 集中在技能发现与安装的稳定性缺口：策划技能依赖已移除的运行时特性导致失效，实验性技能的路径无法解析，安装器缺少更新/复装逻辑。社区提出的 Skill Orchestrator（元技能去重路由）和开发工具需求（linter/插件）反映出对规模化技能管理的初步关注。

## 3. 社区需求归类
- **技能信任与安全**
  Claude 社区认为 `anthropic/` 前缀冒充官方技能会误导用户授权（#492）。Codex 侧本次未观察到同类诉求。

- **企业内部技能分发**
  Claude 用户要求通过组织库或链接直接共享技能，避免手动传输 `.skill` 文件（#228）。Codex 未出现相同需求。

- **技能开发与评估工具改进**
  Claude 的 `skill-creator` 评估脚本长期无法正常触发技能（#556）；社区提交了 Windows 兼容修复 PR（#1298、#1099），并呼吁更新最佳实践（#202）。Codex 侧有人提出开发 linter/IDE 插件辅助写作（#121）。

- **技能发现与目录管理**
  两个仓库均出现去重和编排需求：Claude 侧 `document-skills` 与 `example-skills` 安装重复技能（#189）；Codex 侧提出 Skill Orchestrator 用于大规模技能目录的路由与去重（#491）。另外，Codex 实验性技能存在路径引用问题导致不可见（#153）。

- **技能可靠性 / 依赖管理**
  Codex 的策划技能依赖已移除的 `js_repl` 特性（#386），且部分技能找不到自有脚本（#96）。Claude 侧存在用户技能因文件移动而全部丢失的案例（#62），以及 `skill-creator` YAML 解析错误（#539）。这些反映出技能运行时的脆弱性。

- **Agent 记忆与状态压缩**
  社区提出 compact-memory 技能，用符号化表示法压缩长期 Agent 的记忆占用（#1329），属于新兴方向。

- **文档生成技能**
  新兴提案包括 ODT 创建/填充（#486）、排版质量控制（#514）、PDF 引用大小写修复（#538），说明办公文档生成仍是有持续需求的细分方向。

- **技能质量与治理元技能**
  若干 PR 提交了 skill-quality-analyzer（#83）、self-audit 推理质量门（#1367）等元技能，旨在标准化技能评估。

## 4. 活跃待合并 Skills（PR）
以下 PR 处于 Open 状态，与热门 Issue 直接相关或代表较重要的技能提案，但均无公开评论：
- [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298) — 修复 `run_eval.py` 在全平台（含 Windows）上返回 0% recall 的问题，直接对应高热度 Issue #556。
- [anthropics/skills#1099](https://github.com/anthropics/skills/pull/1099) — 单独修复 Windows 下 `run_eval.py` 因 subprocess pipe 崩溃导致的技能不触发问题。
- [anthropics/skills#514](https://github.com/anthropics/skills/pull/514) — 新增 document-typography 技能，预防 AI 生成文档中的孤行、寡段与编号错位。
- [anthropics/skills#486](https://github.com/anthropics/skills/pull/486) — 提供 ODT 文件创建、模板填充与解析转换能力。
- [anthropics/skills#1367](https://github.com/anthropics/skills/pull/1367) — self-audit 技能，先做机械性文件验证，再做四维度推理审计。
- [anthropics/skills#541](https://github.com/anthropics/skills/pull/541) — 修复 DOCX 技能在现有书签文档中添加修订时 `w:id` 冲突导致文件损坏。
- [anthropics/skills#539](https://github.com/anthropics/skills/pull/539) — 在 `quick_validate.py` 中预解析 YAML，检测未加引号且含 `:` 的 description 字段，避免静默截断。

以上 PR 均未收到维护者审阅响应，实际用途明确，合并时间未可知。

## 5. 跨仓库今日备注
- 两个仓库今日最热议题的性质差异明显：Claude 社区头号热点是“社区技能冒充官方”（信任与治理），而 Codex 侧头号热点是“策划技能依赖已移除特性”（运行时依赖断裂）。