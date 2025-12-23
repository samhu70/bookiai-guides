---
title: "7.会计科目表"
summary: "说明科目表页面的用途、如何管理科目，并标注 UI 截图位置。"
slug: "/cn000007"
tags: ["guides", "accounts", "configuration"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/07-chart-of-accounts.md"
hero_image: "" # optional; 在此放科目表总览截图（例：../assets/chart_of_accounts/hero.png）
status: "draft"
---

# 7.会计科目表

> 在这里查看、调整和扩展科目；需要新代码时可用 AI 工具栏。

## 观看视频
<div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", borderRadius:"12px", boxShadow:"0 12px 30px rgba(0,0,0,0.25)"}}>
  <iframe
    src="https://www.youtube.com/embed/NmMcdbKufZg"
    title="会计科目表演示"
    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
<p style={{marginTop:"0.6rem"}}>需要链接？<a href="https://www.youtube.com/watch?v=NmMcdbKufZg">在 YouTube 打开</a>。</p>

<div align="center">
  <img src="/assets/chart_of_accounts/hero.png" alt="科目表主截图" />
</div>

## 1. 页面用途
- 集中查看全部科目：代码、名称、报表类型与类别。
- 通过搜索与筛选快速定位科目，方便过账前检查；余额不在此展示（查看科目明细页）。

## 2. 列表与筛选
- 按代码或名称搜索；按资产负债表/损益表类别（资产、负债、收入、费用）筛选。
- 列包含代码、名称、报表类型与类别。

## 3. 编辑科目
- 通过编辑操作修改名称、报表类型、类别或父级。
- 如需调整代码，保持留空编号规则；可设置 “mandatory” 或 “internal only” 等标签。
- 更改即刻生效，并影响后续分录建议。

<div align="center">
  <img src="/assets/chart_of_accounts/edit.png" alt="编辑科目弹窗" />
</div>

## 4. 新增或删除科目
- 点击 “Add Account” 新建代码、名称、报表类型与父级。
- 删除仅在无阻塞分录时允许；先完成核对或迁移余额。
- 新科目遵循留空规则；AI 可建议下一个可用编码。

## 5. AI 建议
- 打开 AI Suggestions 工具栏，描述业务需求，让助手给出代码/名称/理由。
- 批准即可自动创建科目，再继续处理分录。

<div align="center">
  <img src="/assets/chart_of_accounts/ai.png" alt="AI 科目建议" />
</div>

## 6. 下一步
- 配置完科目后，前往 [科目明细](./08-accounts-transactions.md) 查看该科目的分录。

---
