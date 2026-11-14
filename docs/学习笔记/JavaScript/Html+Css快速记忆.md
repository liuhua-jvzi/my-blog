---
title: Html+Css快速记忆
date: 2026-11-14
tags: [JavaScript]
order: 1
---

# Html+Css快速记忆

Html+Css常用重点速查

## 一、网页文件结构（.html）

```html
<html>
    <head>
        <style>
            //这里写css样式
        </style>
    </head>
    <body>
        //这里写html内容
        <script>
            //这里写JavaScript内容
        </script>
    </body>
</html>
```

## 二、HTML（标签）

### 1.标签

（1）双标签（常用）：

| 标签 | 说明 |
|------|------|
| `<html>` | （网页根标签，所有内容都包含在内） |
| `<head>` | （网页头部标签，存放标题、样式等配置信息） |
| `<title>` | （网页标题标签，显示在浏览器标签页上） |
| `<body>` | （网页主体标签，页面可见内容都写在这里） |
| `<div>` | （容器/分区标签，块级，划分页面结构用得最多） |
| `<span>` | （文本容器标签，行内，选中某段文字单独设置样式） |
| `<h1>` ~ `<h6>` | （标题标签，h1最大，h6最小，一个页面只用一个h1） |
| `<p>` | （段落标签） |
| `<strong>` | （加粗标签，带强调语义） |
| `<em>` | （斜体标签，带强调语义） |
| `<form>` | （表单标签，收集用户输入并提交数据） |
| `<table>` / `<tr>` / `<td>` | （表格 / 表格行 / 单元格，配套使用） |

（2）单标签（只有开始，没有结束）：

| 标签 | 说明 |
|------|------|
| `<br>` | （换行标签） |
| `<hr>` | （水平线标签） |
| `<img>` | （图片标签，src写图片路径，alt写加载失败时的提示文字） |
| `<input>` | （输入框标签，type决定类型：text文本、password密码、radio单选框、checkbox多选框、submit提交按钮） |
| `<meta>` | （元信息标签，如 charset="UTF-8" 设置字符集） |
| `<link>` | （引入外部资源标签，常用于引入外部css文件） |

（3）列表：

```html
<!-- 无序列表 -->
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
</ul>

<!-- 有序列表 -->
<ol>
    <li>第一项</li>
    <li>第二项</li>
</ol>
```

（4）超链接标签：

```html
<a href="https://www.baidu.com" target="_blank">百度一下</a>
```

- `<a>`（超链接标签），`href`（跳转地址），`target="_blank"`（在新窗口打开，默认 `_self` 在当前窗口打开）

（5）H5标签：结构与语义的作用

| 标签 | 说明 |
|------|------|
| `<header>` | （页面头部标签） |
| `<nav>` | （导航标签） |
| `<main>` | （页面主体标签） |
| `<footer>` | （页面底部标签） |

作用：让页面结构更清晰、语义化，方便浏览器和搜索引擎理解页面内容，比全部用 `<div>` 更有利于 SEO。

### 2.元素

（1）元素：`<p>Html和Css知识回顾</p>` （标签和内容一起叫元素）

（2）元素的属性：写在第一个标签内，属性名="属性值"(id="text")。例如：`<p id="text">Html和Css知识回顾</p>`

### 3.元素布局分类

| 类型 | 说明 | 示例 |
|------|--------|------|
| 块级元素 | 独占一行，可设宽高 | div、p、h1、ul |
| 行内元素 | 不换行，内容决定宽高 | span、a、strong |
| 行内块元素 | 不换行，可设宽高 | img、input、button |

转换：`display: block`（转块级）、`display: inline-block`（转行内块）

## 三、CSS（样式）

### 1.css选择器

（1）代码结构

```
选择器{
    属性1:属性值;
    属性2:属性值;
}
```

（2）选择器

**标签选择器：** **p、h1**（直接使用html对应的标签）

**id选择器：** **#** （用一个#表示），例：**id="text"**，所以选择器为 **#text**

**class选择器：** **.** （用一个.表示），例：**class="text"**，所以选择器为 **.text**

**后代选择器：** **p span**（表示p标签下的span）

**组合选择器：** **h1,p**（h1和p标签共用一个样式）

**伪类选择器：** **a:hover**（鼠标悬停时的样式，最常用）

优先级：**id选择器 > class选择器 > 标签选择器**；行内样式优先级最高（就近原则）

### 2.css样式属性

属性名:属性值

（1）字体属性：

| 属性 | 说明 | 常用值 |
|------|------|------|
| font-size | （字体大小） | 14px、16px |
| font-weight | （字体粗细） | normal（正常）、bold（加粗） |
| font-family | （字体类型） | "Microsoft YaHei"、宋体 |

（2）文本属性：

| 属性 | 说明 | 常用值 |
|------|------|------|
| color | （文字颜色） | red、#333、rgb(0,0,0) |
| text-align | （文本水平对齐） | left（左）、center（居中）、right（右） |
| text-decoration | （文本修饰线） | none（去掉a标签下划线，最常用）、underline（下划线） |
| text-indent | （首行缩进） | 2em（缩进2个字符） |
| line-height | （行高） | 1.5、24px（行高=盒子高时文字垂直居中） |

（3）背景属性：

| 属性 | 说明 | 常用值 |
|------|------|------|
| background-color | （背景颜色） | #fff、rgba(0,0,0,0.3) |
| background-image | （背景图片） | url("图片路径") |
| background-size | （背景图片大小） | cover（铺满裁剪）、contain（完整显示） |
| background | （背景复合属性，简写） | background: #fff url("1.jpg") no-repeat center/cover |

（4）盒子模型属性（重点）：

盒子模型组成：**content（内容）→ padding（内边距）→ border（边框）→ margin（外边距）**

| 属性 | 说明 | 常用值 |
|------|------|------|
| width / height | （宽 / 高） | 100px、50% |
| padding | （内边距，边框到内容的距离） | padding: 10px; padding: 10px 20px;（上下 左右） |
| margin | （外边距，盒子与盒子之间的距离） | margin: 0 auto;（上下0，左右自动→水平居中） |
| border | （边框复合属性） | border: 1px solid #ccc; |
| border-radius | （圆角） | 5px、50%（圆形） |
| box-sizing | （盒子计算方式） | border-box（宽高包含padding和border，常用） |

（5）布局属性（重点）：

| 属性 | 说明 | 常用值 |
|------|------|------|
| display | （显示模式） | block（块级）、inline-block（行内块）、flex（弹性布局）、none（隐藏不占位置） |
| float | （浮动） | left（左浮动）、right（右浮动） |
| position | （定位方式） | relative（相对定位，相对自己原位置）、absolute（绝对定位，相对最近有定位的父元素）、fixed（固定定位，相对浏览器窗口） |
| top / left | （定位偏移量，配合position使用） | 10px |
| overflow | （溢出处理） | hidden（隐藏溢出，最常用）、auto（自动出滚动条） |

（6）Flex弹性布局属性（重点）：

```css
/* 父容器（伸缩容器） */
.box {
    display: flex;           /* 开启弹性布局 */
    justify-content: center; /* 主轴对齐：flex-start、center、space-between(两端对齐) */
    align-items: center;     /* 侧轴对齐：flex-start、center、stretch(拉伸,默认) */
}

/* 子元素（伸缩项） */
.item {
    flex: 1;                /* 平分父容器剩余空间，常用于等分布局 */
}
```

### 3.css样式位置

行内式（内联式）：直接写在标签的 style 属性中，优先级最高，但不利于复用

```html
<p style="color: red; font-size: 16px;">文字</p>
```

内嵌式（内部样式表）：写在 `<head>` 内的 `<style>` 标签中，控制当前一个页面

```html
<head>
    <style>
        p { color: red; }
    </style>
</head>
```

外链式（外部样式表）：写在单独的 .css 文件中，用 `<link>` 标签引入，多个页面可以共用一套样式，最推荐

```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
```

优先级：**行内式 > 内嵌式 > 外链式**（同等情况下，就近原则：离标签越近的优先级越高）
