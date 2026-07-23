# Skills 生态热点 2026-07-23

> 生成时间: 2026-07-23 03:03 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告
**2026-07-23**

## 1. 全生态热门 Skills
按 Issue 评论数、👍 数及跨仓库关注度综合排序，涵盖 Skill 提案、缺陷与需求讨论：

1. **Security: Community skills under anthropic/ namespace enable trust boundary abuse**（Claude Skills）
   - 评论 43 · 👍 2 · 讨论社区技能在 `anthropic/` 命名空间下冒充官方技能，形成信任边界漏洞。
   - 链接：https://github.com/anthropics/skills/issues/492

2. **Enable org-wide skill sharing in Claude.ai**（Claude Skills）
   - 评论 14 · 👍 7 · 请求在组织内直接共享技能，避免手动文件传输。
   - 链接：https://github.com/anthropics/skills/issues/228

3. **run_eval.py: claude -p never triggers skills/commands**（Claude Skills）
   - 评论 12 · 👍 7 · 评估脚本无法触发技能，导致优化循环依赖噪声。
   - 链接：https://github.com/anthropics/skills/issues/556

4. **All my skills have disappeared**（Claude Skills）
   - 评论 10 · 👍 2 · 用户创建的 12 个技能突然全部消失，文件重命名可能导致关联丢失。
   - 链接：https://github.com/anthropics/skills/issues/62

5. **Proposing a second skill: compact-memory**（Claude Skills）
   - 评论 9 · 👍 0 · 提议使用符号化紧凑表示法压缩长期代理状态内存。
   - 链接：https://github.com/anthropics/skills/issues/1329

6. **skill-creator should be updated to best practice**（Claude Skills，已关闭）
   - 评论 8 · 👍 1 · 认为 skill-creator 更像开发者文档而非操作技能，优化 token 效率。
   - 链接：https://github.com/anthropics/skills/issues/202

7. **document-skills and example-skills install identical content**（Claude Skills）
   - 评论 6 · 👍 9 · 两个插件安装相同技能导致重复，违背 README 设计。
   - 链接：https://github.com/anthropics/skills/issues/189

8. **playwright-interactive skill still depends on removed js_repl feature**（Codex Skills，已关闭）
   - 评论 4 · 👍 4 · 策划技能依赖已移除的功能，导致不可用。
   - 链接：https://github.com/openai/skills/issues/386

9. **Experimental skills not found**（Codex Skills）
   - 评论 4 · 👍 3 · 实验性技能路径无法被技能安装器发现。
   - 链接：https://github.com/openai/skills/issues/153

10. **gh-address-comments can’t find scripts/fetch_comments.py**（Codex Skills）
    - 评论 2 · 👍 4 · 技能脚本路径问题导致回退到 GraphQL，影响功能。
    - 链接：https://github.com/openai/skills/issues/96

> 注：PR 评论数在数据中均为 undefined，因此未纳入热度排序；主要依据 Issue 讨论量。

## 2. 各仓库亮点
**Claude Skills (github.com/anthropics/skills)**
- 社区贡献持续活跃，PR 涵盖文档排版、ODT 模板、前端设计、质量/安全分析器、自我审计等新技能，以及多处 eval、PDF、DOCX 的修复。
- 讨论热点集中在安全信任边界（#492）、组织级共享（#228）、eval 工具严重缺陷（#556）及技能消失（#62），同时已出现紧凑记忆、代理治理等高级技能提案。
- 维护者回应可见于 eval 问题（#556 关联多个修复 PR），但整体 PR 合并进度不明。

**Codex Skills (github.com/openai/skills)**
- 本期无新 PR，维护重点在于解决已有技能的功能退化：playwright-interactive 依赖已移除的 `js_repl`（#386），`gh-address-comments` 脚本路径异常（#96）。
- 用户反馈集中在安装器改进（无更新路径 #127）、实验性技能发现（#153）及开发者工具需求（linter/CLI 工具 #121）。
- 活跃度相对较低，但仍有用户持续报告问题，反映对技能可靠性的依赖。

## 3. 社区需求归类
将两个仓库中出现的 Skill 方向与诉求合并，按相近主题归类（不夸大趋势强度）：

- **文档生成与排版**：`document-typography`（防孤行/寡行）、ODT 模板填充与转换（PR #514, #486）。
- **安全与治理**：代理治理安全模式（#412）、社区技能信任边界修复（#492）。
- **评估与质量保障**：技能评估工具 `run_eval` 修复（#556, #1298, #1099）、技能质量/安全分析器（#83）、skill-creator 最佳实践（#202）。
- **记忆与状态管理**：紧凑记忆符号化表示（#1329）。
- **组织共享与部署**：组织内技能共享（#228）、插件重复安装问题（#189）、安装器更新/重新安装路径（#127）。
- **前端/UI 设计**：前端设计技能清晰度与可操作性改进（#210）。
- **开发工具链**：技能编写 linter/IDE 插件/CLI 工具（#121）、技能依赖管理（#386）、脚本路径可靠性（#96）。

## 4. 活跃待合并 Skills
由于本期 PR 评论数均为 undefined，无法直接判断讨论活跃度。以下为值得关注的待合并 PR，但缺少活跃讨论迹象：

- **[#1298] fix(skill-creator): run_eval.py always reports 0% recall** — 修复 eval 工具核心缺陷，影响多个下游脚本，关联 Issue #556 有 12 条评论。当前状态 OPEN，实际用途：恢复技能描述优化循环的有效性。
  链接：https://github.com/anthropics/skills/pull/1298

- **[#514] Add document-typography skill** — 新增文档排版质量控制技能，解决 AI 生成文档中的常见排版问题。状态 OPEN，无活跃讨论记录。
  链接：https://github.com/anthropics/skills/pull/514

- **[#1367] feat(skills): add self-audit** — 通用输出审计技能，先机械验证再四维推理审查。状态 OPEN，2026-06-28 创建，暂无评论。
  链接：https://github.com/anthropics/skills/pull/1367

- **[#83] Add skill-quality-analyzer and skill-security-analyzer** — 元技能用于评估技能质量与安全。状态 OPEN，创建于 2025-11-06，更新至 2026-01-07，无评论。
  链接：https://github.com/anthropics/skills/pull/83

> 所有这些 PR 均处于 OPEN 状态，相关讨论散落在 Issue 中，合并进度未知。

## 5. 跨仓库今日备注
- Claude Skills 仓库的社区贡献形态以新技能提案和框架修复并重，关注点侧重于技能生态的扩展与信任模型；Codex Skills 仓库则更多是现有技能的功能维护和工具链缺失补全，贡献活跃度明显偏低。
- 一个跨仓库共同存在的需求是**技能的可发现性与安装可靠性**（Claude 的重复安装、Codex 的实验性技能路径问题），但 Claude 侧进一步延伸到组织级共享，Codex 侧尚未出现类似诉求。
- **事实备注**：
  1. Anthropic 技能仓库的 `run_eval.py` 存在全线 0% 召回率问题，已持续数月，有多人独立复现（#556），多个 PR 尝试修复但仍未合并。
  2. OpenAI 技能仓库的 `playwright-interactive` 因 `js_repl` 功能移除而失效（#386，已关闭），提示技能与平台特性耦合的风险。
  3. 两个仓库均未见技能市场或共享机制的正式发布，但 Claude 侧已出现用户对命名空间冒用的强烈安全担忧（#492）。