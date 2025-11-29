# BookiAI Guides (Local Drafts)

本目录用于在本地撰写/审阅教程稿件，完稿后推送到 GitHub，并在 BookiAI 博客中创建目录页指向 GitHub 正文。

## 结构
- `guides/<slug>/index.md`：每篇正文，含 frontmatter。
- `guides/<slug>/assets/`：对应图片（建议使用对象存储 URL 或 Git LFS）。

## Frontmatter 模板
```yaml
---
title: "Accounts & Access: From Sign-up to Billing"
summary: "注册、登录、邮箱验证、密码管理，以及免费额度与升级/扩容指南。"
tags: ["guides", "accounts"]
category: "guides"
github_url: "https://github.com/your-org/bookiai-guides/blob/main/guides/accounts-access/index.md"
hero_image: "https://cdn.example.com/blogs/heroes/accounts-access.jpg" # 可选，若有
status: "draft"
---
```

## 工作流
1) 在本地撰写 `index.md`，引用图片 URL。
2) 推送到 GitHub 仓库（私有/公开自选）。
3) 按博客后台流程创建目录页（标题+摘要+外链），分类 `guides`。
4) 更新状态：`draft` → `ready` → `published`。
