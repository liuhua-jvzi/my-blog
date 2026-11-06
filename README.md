# 我的个人博客

基于 [VitePress](https://vitepress.dev/) 的个人博客：学习笔记、技术沉淀、项目经历、生活随笔与归档。

## 本地开发

要求 Node.js 18+（推荐 20，仓库里的 `.nvmrc` 已指定）。

```bash
npm install
npm run docs:dev      # 本地开发，默认 http://localhost:5173
npm run docs:build    # 构建，产物在 docs/.vitepress/dist
npm run docs:preview  # 本地预览构建产物
```

## 部署到 Cloudflare Pages

1. 把本仓库推送到 GitHub。
2. 打开 Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**，选择这个仓库。
3. 构建配置：

   | 配置项 | 值 |
   |--------|-----|
   | Framework preset | VitePress（没有就选 None） |
   | Build command | `npm run docs:build` |
   | Build output directory | `docs/.vitepress/dist` |
   | Root directory | 留空 |
   | 环境变量 | `NODE_VERSION` = `20` |

4. 点击 **Save and Deploy**，完成后访问 `https://<项目名>.pages.dev`。

之后每次 `git push` 都会自动重新构建并部署。

### 上传构建产物（访问不了 GitHub 时用这个）

```bash
npm run docs:build
```

然后打开 Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**，
把 `docs/.vitepress/dist` 文件夹（或打包好的 zip）拖进去，填一个项目名（全局唯一），
部署完成后会得到 `https://<项目名>.pages.dev`。

缺点是没有自动部署，每次更新都要重新构建、重新上传。

### 命令行上传（Wrangler）

```bash
npm run docs:build
npx wrangler pages deploy docs/.vitepress/dist --project-name=my-blog
```

> `my-blog` 这个项目名需要全局唯一，如果被占用就换一个名字。

## 目录结构

```
docs/
├── .vitepress/          # 站点配置、主题、组件
│   ├── config.mts
│   ├── sidebar.js       # 自动生成侧边栏
│   └── theme/
├── public/              # 头像、封面、图标等静态资源
├── 学习笔记/
├── 技术沉淀/
├── 项目经历/
├── 生活随笔/
├── 归档.md
└── 关于我.md
```

## 写文章

在对应分类目录下新建 `.md` 文件，frontmatter 示例：

```yaml
---
title: 文章标题
date: 2026-11-06
tags: [java, 笔记]
order: 1
---
```

`date` 和 `tags` 会显示在首页卡片和归档页；`order` 控制侧边栏排序。保存后侧边栏会自动更新。
