---
title: "3.创建你的第一个账簿"
summary: "新建账簿、导入会计科目表，并准备期初余额。"
slug: "/cn000003"
tags: ["guides", "ledger", "setup"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/03-creating-your-first-ledger.md"
hero_image: "" # optional
status: "draft"
---

# 3.创建你的第一个账簿

> 为新用户提供操作手册，指导创建第一个账簿、导入科目，并为交易做好准备。

## 观看视频
<div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", borderRadius:"12px", boxShadow:"0 12px 30px rgba(0,0,0,0.25)"}}>
  <iframe
    src="https://www.youtube.com/embed/vE2gCAzcP3Y"
    title="创建你的第一个账簿"
    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
<p style={{marginTop:"0.6rem"}}>需要链接？<a href="https://youtu.be/vE2gCAzcP3Y">在 YouTube 打开</a>。</p>

## 1. 创建账簿
- **位置**：Dashboard → “Create ledger”（会员为 “Add ledger”）。
- **表单字段与默认值**：
  - **Ledger Name**（必填，≥3 个字符）：示例 “Q1 2024 Financials”。
  - **Company Name**（必填，≥3 个字符）：法定/注册名称。
  - **Company Description**（可选，≤1500 字符）：描述业务、行业、主要产品/服务。**该描述会在创建后发送给 AI，以便推荐定制化的会计科目表。提供越多细节（行业、收入模式、地区、GAAP/IFRS 提示），建议越贴合。**
  - **Country**：目前为 `AU`。
  - **Currency**：默认 `AUD`；可选 USD/EUR/GBP/CNY/JPY/NZD/SGD/CAD/HKD。
  - **Tax Consideration (GST)**：当 Country = AU 时可选；如需 GST 拆分则勾选。
- **免费 vs 会员**：免费用户 1 个账簿；会员可在额度内创建多个。
- **截图**：
  <div align="center">
    <img src="/assets/createledger/create-ledger.png" alt="Create ledger form" />
  </div>

## 2. 账簿创建后的 AI 建议
- 完成账簿设置后，系统会自动将公司描述（及其他资料）传给 AI 助手。
- AI 返回的会计科目表会显示在 “AI Suggestions” 面板；它会遵循公司描述、当地规则，并使用你期望的留空编码。
- 接受建议即可填充账簿；之后仍可编辑或删除科目。
- 截图：
  <div align="center">
    <img src="/assets/createledger/ai-suggestions.png" alt="AI-generated account suggestions" />
  </div>

## 3. 下一步
- 录入首条会计分录，或上传原始单据以使用 AI 辅助分录。
- （可选）配置自动化和告警。

## 示例公司描述
> “BookiAI 为澳大利亚科技成长型公司提供 AI 辅助记账。我们管理一家 SaaS 企业的多实体财务，收入为经常性订阅，支付渠道多样，客户包含 USD/AUD。主要活动包括软件订阅、专业服务和 AWS 基础设施成本。遵循 AASB/IFRS 合规，费用按产品线和区域跟踪。”
>
> 可将此示例作为公司描述模板，方便 AI 定制科目表建议——请提及与你相关的行业、收入模式、币种组合或合规规则。

---
> 下一篇：[账簿总览](./04-ledger-overview.md)。
