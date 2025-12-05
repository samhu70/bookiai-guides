---
title: "会计科目表"
summary: "说明科目表页面的用途、如何管理科目，并标注 UI 截图位置。"
tags: ["guides", "accounts", "configuration"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/07-chart-of-accounts.md"
hero_image: "" # optional; 在此放科目表总览截图（例：../assets/chart_of_accounts/hero.png）
status: "draft"
---

# 会计科目表

> 在这里查看、调整和扩展科目；需要新代码时可用 AI 工具栏。

<div align="center">
  <img src="../assets/chart_of_accounts/hero.png" alt="科目表主截图" />
</div>

## 1. 页面用途
- 集中查看全部科目：代码、名称、报表类型、类别与当前余额。
- 通过搜索与筛选快速定位科目，方便过账前检查。

## 2. 列表与筛选
- 按代码或名称搜索；按资产负债表/损益表类别（资产、负债、收入、费用）筛选。
- 列包含代码、名称、报表类型、类别和余额。

## 3. 编辑科目
- 通过编辑操作修改名称、报表类型、类别或父级。
- 如需调整代码，保持留空编号规则；可设置 “mandatory” 或 “internal only” 等标签。
- 更改即刻生效，并影响后续分录建议。

<div align="center">
  <img src="../assets/chart_of_accounts/edit.png" alt="编辑科目弹窗" />
</div>

## 4. 新增或删除科目
- 点击 “Add Account” 新建代码、名称、报表类型与父级。
- 删除仅在无阻塞分录时允许；先完成核对或迁移余额。
- 新科目遵循留空规则；AI 可建议下一个可用编码。

## 5. AI 建议
- 打开 AI Suggestions 工具栏，描述业务需求，让助手给出代码/名称/理由。
- 批准即可自动创建科目，再继续处理分录。

<div align="center">
  <img src="../assets/chart_of_accounts/ai.png" alt="AI 科目建议" />
</div>

## 6. 下一步
- 配置完科目后，前往 [科目明细](./08-accounts-transactions.md) 查看该科目的分录。

---
