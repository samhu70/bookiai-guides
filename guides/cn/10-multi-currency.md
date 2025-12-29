---
title: "10.多币种账簿"
summary: "开启多币种、管理汇率、录入外币分录与查看报表。"
slug: "/cn000010"
tags: ["guides", "currency", "fx"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/10-multi-currency.md"
hero_image: "" # optional; 在此放多币种主截图（示例：../assets/multi_currency/hero.png）
status: "draft"
---

# 10.多币种账簿

> 以本位币记账，同时支持多币种分录与报表。

<div align="center">
  <img src="/assets/muilti_currency/ledgersettings.png" alt="账簿设置中的本位币展示" />
</div>

## 1. 前置准备
- 本位币在工作区初始化时设定，可由管理员在「设置 > 财务」调整。
- 多币种默认开启，无需单独配置或维护币种清单。
- 汇率由系统自动拉取，用户不需要选择或配置来源。
- 确认角色具备录入分录的权限。

## 2. 录入外币分录
- 创建分录时选择交易币种并输入外币金额。
- 若交易币种与本位币不同，系统会按入账日期从 ECB 实时获取的汇率自动折算本位币金额。
- 分录同时保存交易币种金额与本位币金额；修改入账日期会按新日期重新调用 ECB 汇率。
- 如需让审核人验证金额，可上传相关凭证（发票/合同等）。

<div align="center">
  <img src="/assets/muilti_currency/multicurrency.png" alt="多币种录入概览" />
</div>

## 3. 汇率行为
- BookiAI 在入账时通过开源接口实时获取 ECB 汇率，不维护每日汇率存储表。
- 回溯或未来日期的分录都会在保存/改期时获取对应日期的 ECB 汇率。
- 如需体现合同特殊汇率差额，可额外记录一笔调节分录。

## 4. 报表与视图
- 科目明细与账簿仪表盘会展示币种标签和本位币折算值。
- 试算平衡表与损益表保持本位币；目前导出仅包含本位币金额（如需双币导出可后续补充）。
- AI 分录助手会尊重所选交易币种，给出对应的科目建议。
- 核心原则：接收并留痕外币交易，但账簿结算和报表仍按本位币，保持最精简的合规财务处理。

---
