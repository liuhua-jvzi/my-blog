---
title: VitePress createContentLoader 报错解决方案
date: 2026-11-02
tags: [VitePress, 踩坑, ESM]
---

# VitePress createContentLoader 报错解决方案

## 问题描述

在使用 VitePress 的 `createContentLoader` 实现首页最新文章自动扫描时，遇到以下两个错误：

### 错误一：ESM 无法被 require 加载

```
[plugin: externalize-deps] "vitepress" resolved to an ESM file. 
ESM file cannot be loaded by `require`.
```

### 错误二：模块解析失败

```
TypeError: Failed to resolve module specifier '.md?import&t=xxx'
```

## 排查过程

一开始误以为是项目路径包含中文导致的问题，把项目复制到纯英文路径 `D:\my-blog`，结果一样报错。

尝试过的写法：

| 写法 | 结果 |
|------|------|
| `posts.data.ts` + 默认导入 | ❌ ESM cannot be loaded by require |
| `posts.data.mjs` + 默认导入 | ❌ `.md?import` 错误 |
| `posts.data.js` + 默认导入 | ❌ ESM cannot be loaded by require |

## 最终解决方案

**三个条件缺一不可：**

### 1. package.json 加 `"type": "module"`

```json
{
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.4"
  }
}
```

### 2. 数据加载文件用 `.data.js` 后缀（不是 `.mjs`、`.ts`）

```js
// docs/posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('**/*.md', {
  excerpt: true,
  transform(rawData) {
    return rawData
      .filter((page) => {
        const url = page.url
        const parts = url.split('/').filter(Boolean)
        if (parts.length <= 1) return false
        if (url.endsWith('/')) return false
        return true
      })
      .map((page) => ({
        title: page.frontmatter.title || page.url,
        url: page.url.replace(/\.html$/, ''),
        date: page.frontmatter.date || '',
        tags: page.frontmatter.tags || [],
        description: (page.excerpt || '')
          .replace(/<[^>]+>/g, '')
          .replace(/[#*`>\-]/g, '')
          .slice(0, 80)
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 6)
  }
})
```

### 3. 在 md 页面中用具名导入（不是默认导入）

```vue
<script setup>
import { data as posts } from './posts.data.js'
</script>

<template>
  <a v-for="post in posts" :key="post.url" :href="post.url">
    {{ post.title }}
  </a>
</template>
```

> 官方文档明确说明：数据加载文件用 `export default` 导出 loader 对象，但在页面里要用 `import { data }` **具名导入**数据（VitePress 内部会自动调用 load 方法并暴露为 `data` 具名导出）。

## 结论

- 中文路径 **不是问题**，加了 `"type": "module"` 后中文路径完全正常
- 关键是 `package.json` 的 `"type": "module"` + `.data.js` 后缀 + 具名导入，三者缺一不可
