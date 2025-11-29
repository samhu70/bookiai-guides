# BookiAI Guides (Local Drafts)

Use this folder to draft/review guides locally, then push to GitHub. The blog will link to the GitHub source as the canonical version.

## Structure
- `guides/*.md`: each guide with frontmatter.
- `guides/assets/<slug>/`: images per guide (keep sizes small; use LFS or object storage if large).

## Frontmatter template
```yaml
---
title: "Accounts & Access: From Sign-up to Billing"
summary: "Sign-up, login, email verification, password management, free quotas, upgrades/expansions, and downgrades."
tags: ["guides", "accounts"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/accounts-and-access.md"
hero_image: "" # optional, use object storage URL if available
status: "draft"
---
```

## Workflow
1) Write/edit the guide locally; link images via relative paths in `assets/`.
2) Push to the GitHub repo (private or public).
3) In the BookiAI blog, create a directory page (title + summary + external link) pointing to the GitHub guide; set category to `guides`.
4) Update status as you move through `draft` → `ready` → `published`.
