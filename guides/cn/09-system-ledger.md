---
title: "9.系统账簿与计费"
summary: "理解计费账簿、各区域展示内容，并标注截图位置。"
slug: "/cn000009"
tags: ["guides", "ledger", "billing"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/09-system-ledger.md"
hero_image: "" # optional; 在此放系统账簿主截图（例：../assets/system_ledger/hero.png）
status: "draft"
---

# 9.系统账簿与计费

> 系统账簿是计费中心：会员扣费、附加包和发票都在这里。

## 观看视频
<div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", borderRadius:"12px", boxShadow:"0 12px 30px rgba(0,0,0,0.25)"}}>
  <iframe
    src="https://www.youtube.com/embed/ZqoLlM0fJic"
    title="系统账簿与计费演示"
    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
<p style={{marginTop:"0.6rem"}}>需要链接？<a href="https://www.youtube.com/watch?v=ZqoLlM0fJic">在 YouTube 打开</a>。</p>

<div align="center">
  <img src="/assets/system_ledger/hero.png" alt="系统账簿主截图" />
</div>

## 1. 页面用途
- 让计费透明：每笔会员扣费、加购和退款都会记录。
- 在需要管理支付方式时下载发票或跳转 Stripe 门户。

## 2. 账簿卡片概览
- 在仪表盘中固定显示，带 “System” 标记以区分业务账簿。
- 展示最近充值、下一次计划扣费、当前余额；包含计费文件的存储标签。

<div align="center">
  <img src="/assets/system_ledger/card.png" alt="系统账簿卡片" />
</div>

## 3. 交易列表
- 行内容：日期、参考号、描述、金额、状态（已支付/已退款）。
- 可按类型筛选（会员扣费、加购、退款）以聚焦需要的信息。
- 操作：下载发票、查看支付方式，或在可用时打开 Stripe 门户。

## 4. 下载发票
- 点击发票图标下载对应扣费的 PDF 收据。
- “Manage in Stripe portal” 打开 Stripe，更新卡片或进行门户操作。
- 如缺少历史收据，可在头部的支持入口请求。

## 4. 下一步
- 使用 [科目明细](./08-accounts-transactions.md) 查看所有账簿分录，包括已记录的计费扣款。

---
