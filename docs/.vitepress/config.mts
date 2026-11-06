import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { buildSidebar } from './sidebar.js'

// WebStorm 对 .js 模块的返回值有时会推断成 {}，这里显式标成 VitePress 的 Sidebar 类型
const sidebar = buildSidebar() as DefaultTheme.Sidebar

/**
 * 中文友好的搜索分词器。
 * MiniSearch 默认只按空格/标点切词，一整句中文会被当成一个词，
 * 所以只能从开头匹配到。这里把中文切成「单字 + 相邻双字」，
 * 英文和数字仍按词切分；查询时用同一套规则并取交集（AND），
 * 「第一篇」「笔记」「报错方案」这种出现在中间或结尾的词都能搜到。
 */
function cjkTokenize(text: string): string[] {
  const tokens: string[] = []
  const source = String(text).toLowerCase()
  const matcher = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+|[a-z0-9]+/g
  let match: RegExpExecArray | null

  while ((match = matcher.exec(source)) !== null) {
    const segment = match[0]

    if (/^[a-z0-9]+$/.test(segment)) {
      tokens.push(segment)
      continue
    }

    for (let i = 0; i < segment.length; i++) {
      tokens.push(segment[i])
      if (i + 1 < segment.length) tokens.push(segment.slice(i, i + 2))
    }
  }

  return tokens
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的个人博客",
  description: "记录学习、沉淀技术、分享生活",
  lang: 'zh-CN',

  markdown: {
    config(md) {
      // 标题里放了图标 <img> 时，VitePress 会把标签原文写进标题锚点的
      // aria-label（读屏会念出一串标签）。这里在生成锚点前把标题的纯文本
      // 内容改成去掉标签后的文字，锚点提示保持干净，图标仍正常显示。
      md.core.ruler.before('anchor', 'clean-heading-anchor-label', (state) => {
        for (let i = 0; i < state.tokens.length; i++) {
          const token = state.tokens[i]
          if (token.type !== 'heading_open') continue

          const inline = state.tokens[i + 1]
          if (!inline || inline.type !== 'inline' || !/<[^>]+>/.test(inline.content)) continue

          inline.content = inline.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
        }
      })
    }
  },

  // 如果部署到 GitHub Pages 子路径（如 https://用户名.github.io/my-blog/），取消下面注释并改成你的仓库名
  // base: '/my-blog/',

  themeConfig: {
    // 顶部 Logo（换成自己的头像：直接替换 docs/public/images/avatar.jpg 即可）
    logo: '/images/avatar.jpg',

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: cjkTokenize
          },
          searchOptions: {
            combineWith: 'AND'
          }
        },
        // 搜索界面中文化
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: '退出'
            }
          }
        }
      }
    },

    // 右侧目录标题
    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    // 文末「上一篇 / 下一篇」文案
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 导航栏（顶部）
    // activeMatch 用正则匹配：分类导航在子文章页（如 /学习笔记/数据结构与算法/…）
    // 也要保持高亮，否则默认只有分类首页才会选中
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/归档' },
      { text: '学习笔记', link: '/学习笔记/', activeMatch: '^/学习笔记/' },
      { text: '技术沉淀', link: '/技术沉淀/', activeMatch: '^/技术沉淀/' },
      { text: '项目经历', link: '/项目经历/', activeMatch: '^/项目经历/' },
      { text: '生活随笔', link: '/生活随笔/', activeMatch: '^/生活随笔/' },
      { text: '关于我', link: '/关于我' }
    ],

    // 侧边栏：按文件夹自动生成（见 .vitepress/sidebar.js）
    sidebar,

    // 页脚
    footer: {
      message: '用 VitePress 搭建 | 记录学习、沉淀技术、分享生活',
      copyright: `Copyright © ${new Date().getFullYear()} 我的个人博客`
    },

    // 社交链接（导航栏右上角）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ]
  }
})
