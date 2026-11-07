import { createContentLoader } from 'vitepress'

function decodeSafe(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function normalizeDate(value) {
  if (!value) return ''
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value).slice(0, 10)
}

// 粗略统计正文字数（中文按字、英文按词）
function countWords(src = '') {
  const text = src
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[#>*_~|`[\]()-]/g, '')
  const cjk = (text.match(/[\u4e00-\u9fa5]/g) || []).length
  const en = (text.match(/[a-zA-Z0-9]+/g) || []).length
  return cjk + en
}

const HTML_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  ensp: '\u2002',
  emsp: '\u2003',
  thinsp: '\u2009',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  ZeroWidthSpace: '',
  zwnj: '',
  zwj: ''
}

// 解码 &amp; / &ZeroWidthSpace; / &#8203; 这类 HTML 实体，避免原样显示在卡片上
function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-zA-Z]+);/g, (match, name) => (name in HTML_ENTITIES ? HTML_ENTITIES[name] : match))
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
}

// 从 Markdown 正文里取「第一段」作为卡片摘要：
// 去掉 frontmatter、标题、代码块、图片、HTML、列表/表格符号，再截断
function extractDescription(src = '') {
  // 统一换行符，否则 Windows 的 \r\n 会让下面的分段失效
  const body = src
    .replace(/\r\n?/g, '\n')
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^#{1,6}\s+.*$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^[ \t]*>[ \t]?/gm, '')
    .replace(/^[ \t]*(?:[-*+]|\d+\.)[ \t]+/gm, '')
    .replace(/^[ \t]*\|.*\|[ \t]*$/gm, '')
    .replace(/[`*_~]/g, '')

  const paragraph = body
    .split(/\n{2,}/)
    .map((part) => decodeEntities(part).replace(/\s+/g, ' ').trim())
    .find((part) => part.length > 0)

  return (paragraph || '').slice(0, 90)
}

// 卡片链接：保留文件夹 index 的结尾斜杠（/学习笔记/Java基础/），
// 普通文章去掉 .html
function toPostUrl(value = '') {
  let url = decodeSafe(String(value).trim())
  url = url.replace(/[?#].*$/, '')
  if (url.endsWith('.html')) url = url.slice(0, -5)
  return url.startsWith('/') ? url : `/${url}`
}

// 标题兜底：frontmatter → 正文一级标题 → 文件名
function resolveTitle(page) {
  if (page.frontmatter?.title) return page.frontmatter.title

  const heading = (page.src || '').replace(/\r\n?/g, '\n').match(/^#\s+(.+)$/m)
  if (heading) {
    return heading[1]
      .replace(/<[^>]+>/g, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .trim()
  }

  const lastSegment = page.url.split('/').filter(Boolean).pop() || page.url
  return decodeSafe(lastSegment.replace(/\.html$/, ''))
}

export default createContentLoader('**/*.md', {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .filter((page) => {
        const parts = page.url.split('/').filter(Boolean)
        // 只排除首页和顶层页面（关于我、归档等），
        // 子文件夹的 index（如 /学习笔记/Java基础/）作为文章保留
        return parts.length > 1
      })
      .map((page) => {
        const url = toPostUrl(page.url)
        const parts = page.url.split('/').filter(Boolean)
        const decodedParts = parts.map((part) => decodeSafe(part))
        // 子文件夹名：/学习笔记/Java基础/文章 → Java基础
        const folder =
          parts.length > 2
            ? decodedParts[1]
            : page.url.endsWith('/') && parts.length === 2
              ? decodedParts[1]
              : ''
        const frontmatterTags = page.frontmatter.tags

        return {
          title: resolveTitle(page),
          url,
          // 时间与标签只认文章自己的 frontmatter，不再从分类首页的文章列表兜底
          date: normalizeDate(page.frontmatter.date),
          category: decodeSafe(parts[0] || ''),
          folder,
          tags: Array.isArray(frontmatterTags)
            ? frontmatterTags
            : frontmatterTags
              ? [frontmatterTags]
              : [],
          description: extractDescription(page.src || ''),
          words: countWords(page.src || '')
        }
      })
      .sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return b.date.localeCompare(a.date) || a.title.localeCompare(b.title)
      })
  }
})
