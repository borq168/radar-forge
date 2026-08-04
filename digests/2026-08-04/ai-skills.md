# Skills 生态热点 2026-08-04

> 生成时间: 2026-08-04 01:00 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills 社区热点报告（2026-08-04）

## 1. 热门 Skills 排行

以下 5 个 PR 在评论数排序中位列前茅，代表社区当前关注度最高的 Skill 相关提案或改进。

### #514 — Add document-typography skill
- **功能**：为 AI 生成文档提供排版质量控制，防止孤行、寡段、编号错位等常见问题。
- **讨论热点**：社区认为该技能可解决 Claude 生成文档的普遍排版缺陷，但部分评论质疑其触发条件与已有文档技能的重叠。
- **当前状态**：OPEN，未合并。

### #486 — Add ODT skill (OpenDocument text creation and template filling)
- **功能**：支持创建、填充、读取、转换 ODF 格式文件（.odt, .ods），包含 LibreOffice 文档处理。
- **讨论热点**：讨论集中在 ODT 格式的兼容性、模板填充的边界条件，以及是否应与现有 DOCX 技能合并。
- **当前状态**：OPEN，未合并。

### #210 — Improve frontend-design skill clarity and actionability
- **功能**：修订前端设计技能，使其指令更清晰、可操作，确保 Claude 能在单次对话中执行。
- **讨论热点**：多位贡献者就技能内示例的粒度、与现有设计系统技能的冲突提出修改建议。
- **当前状态**：OPEN，未合并。

### #83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace
- **功能**：两个元技能，分别评估技能质量（结构、文档、测试等）和安全性（权限、数据泄露等）。
- **讨论热点**：社区关注此类元技能是否应作为官方基准，以及它们对技能生态的治理价值。
- **当前状态**：OPEN，未合并。

### #1367 — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate
- **功能**：在 AI 输出交付前执行机械检查（文件存在性）和四维度推理审计（按损害严重性排序）。
- **讨论热点**：讨论聚焦于审计维度的选择、是否与现有 quality-analyzer 重复，以及如何避免过度消耗上下文。
- **当前状态**：OPEN，未合并。

### #525 — Add pyxel skill for retro game development
- **功能**：基于 Pyxel 引擎的复古游戏开发技能，支持 MCP 服务器交互。
- **讨论热点**：社区对内嵌 MCP 调用的设计模式（write → run_and_capture → iterate）表示兴趣，但也担心平台绑定。
- **当前状态**：OPEN，未合并。

## 2. 社区需求归类

从 Issues 中提取社区提出的新 Skill 方向或功能需求，以下为出现频率较高的类别：

### 安全与治理
- **#492**：社区技能被分发在 `anthropic/` 命名空间下，造成信任边界滥用。建议增加官方签名或隔离社区技能。
- **#412**（已关闭）：提议 `agent-governance` 技能，涵盖策略执行、威胁检测、信任评分、审计追踪。

### 协作与共享
- **#228**：组织级技能共享功能，当前需手动下载上传，缺乏直接分享链接或共享库。
- **#16**：将 Skills 暴露为 MCP 协议接口，以标准化 API 信号。

### 上下文窗口优化
- **#1487**：`claude-api` 技能单次注入约 156k tokens 导致上下文窗口耗尽，社区呼吁技能应支持按需加载或分段注入。
- **#1329**：提议 `compact-memory` 技能，用符号表示法压缩长时 agent 状态，减少上下文消耗。

### 推理质量与流程
- **#1385**：提议三阶段推理质量门槛流水线（前置校准 → 对抗审查 → 交付验证），已有两个门实现（`self-audit` 和另一个技能）。
- **#202**（已关闭）：`skill-creator` 技能应改为最佳实践，避免教育性语气，提高 token 效率。

### 平台兼容性
- **#29**：询问如何将 Skills 用于 AWS Bedrock，目前无官方支持。
- **#1061**：Windows 上 `skill-creator` 脚本因 Unix 假设失败（PATHEXT、编码、pipe 读取），多个用户复现。

## 3. 活跃待合并 Skills

以下 PR 评论活跃，社区讨论充分，但尚未合并。注意：不预测落地时间，仅记录当前状态。

### #1298 — fix(skill-creator): run_eval.py always reports 0% recall
- **讨论焦点**：修复了 `run_eval.py` 报告 0% recall 的多重原因（安装 eval artifact、Windows 流读取、触发检测、并行 worker）。该修复直接影响 `run_loop.py` 和 `improve_description.py` 的优化信号。评论中多位用户报告独立复现，维护者已参与讨论。
- **当前状态**：OPEN，审查中，未合并。

### #1099 — skill-creator: fix run_eval.py crash on Windows (subprocess pipe)
- **讨论焦点**：Windows 上 `run_eval.py` 因 `subprocess` pipe 读取错误导致所有查询标记为“未触发”，优化循环得到假数据。该 PR 与 #1298 部分重叠，社区建议合并二者。
- **当前状态**：OPEN，未合并。

### #1050 — skill-creator: fix Windows subprocess + encoding bugs
- **讨论焦点**：修复 `claude.cmd` 未通过 PATHEXT 正确解析、以及 `cp1252` 编码问题。社区讨论指出这是 Windows 用户的普遍阻塞，需与 #1099 协调。
- **当前状态**：OPEN，未合并。

### #1261 — fix(skill-creator): isolate trigger-eval command files from live project registry
- **讨论焦点**：触发评估时写入的合成命令文件会污染用户真实项目 `.claude/commands/`，导致并行工作期间冲突。社区确认该问题在多人协作时尤其严重。
- **当前状态**：OPEN，未合并。

### #539 — fix(skill-creator): warn on unquoted description with YAML special characters
- **讨论焦点**：未加引号的 `description` 字段中包含冒号 `:` 会导致 YAML 解析静默失败，PR 添加前置校验。社区讨论认为该预防性校验对社区贡献者友好。
- **当前状态**：OPEN，未合并。

## 4. 今日记录备注

- **bug 修复类 PR 占据多数热门**：今日 PR 列表中前 20 条有 7 条直接针对 `skill-creator` 的 bug 修复（#1298、#1099、#1050、#1261、#539、#1323、#541），且 Issue 中 #556、#1169、#1061 等同样指向 `run_eval.py` 的 recall=0% 和 Windows 兼容问题。这表明 `skill-creator` 的稳定性是当前社区最突出的痛点，社区正在集中贡献修复。
- **社区对安全与治理的诉求上升**：Issue #492 获得 43 条评论，讨论命名空间冒用带来的信任风险；#228 关于组织级技能共享也有 16 条评论。安全与协作是当前 Issue 中评论量最高的两个方向，但尚未有对应的 PR 或官方回应。
- **新增技能 PR 数量多但合并缓慢**：从 PR 列表看，新增技能（如 #514、#486、#525、#1302 等）提交时间早（2025 年 11 月至 2026 年 3 月），至今仍为 OPEN 状态，说明合并门槛较高或维护者响应周期较长。