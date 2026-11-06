import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 放在单独的 .js 里：读目录要用 Node API，放在 config.mts 里会让编辑器
// 一直报 "找不到 node:fs" / import.meta 的类型错误，这里不受 TS 检查影响。

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// 分类的展示顺序（没列到的分类会自动追加在后面）
const CATEGORY_ORDER = ['学习笔记', '技术沉淀', '生活随笔', '项目经历']

// 读一篇文章的标题和排序：frontmatter title / order，没有就用正文一级标题、文件名
function readMarkdownMeta(file) {
  const raw = fs.readFileSync(file, 'utf-8').replace(/\r\n?/g, '\n')
  const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/)
  let title = ''
  let order = 9999

  if (frontmatter) {
    const titleLine = frontmatter[1].match(/^title:\s*(.+)$/m)
    if (titleLine) title = titleLine[1].trim().replace(/^['"]|['"]$/g, '')

    const orderLine = frontmatter[1].match(/^order:\s*(\d+)/m)
    if (orderLine) order = Number(orderLine[1])
  }

  if (!title) {
    const h1 = raw.match(/^#\s+(.+)$/m)
    if (h1) {
      title = h1[1]
        .replace(/<[^>]+>/g, '')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .trim()
    }
  }

  return { title: title || path.basename(file, '.md'), order }
}

// 文件夹没有 index.md 时，用里面文章最小的 order 决定它自己的位置，
// 这样给「文件夹里的第一篇」设 order 就能把整个分组往前/往后挪
function minOrderIn(dir) {
  let min = 9999

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue

    const full = path.join(dir, entry.name)

    if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      min = Math.min(min, readMarkdownMeta(full).order)
    } else if (entry.isDirectory() && entry.name !== 'public' && entry.name !== 'assets') {
      min = Math.min(min, minOrderIn(full))
    }
  }

  return min
}

// 递归扫描目录：文件夹 = 可展开的分组，.md = 文章
// 排序：frontmatter order → 文件名（支持 01-、02- 这种数字前缀）
function buildSidebarEntries(dir, base) {
  const entries = []

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue
    if (entry.name === 'index.md' || entry.name === 'public' || entry.name === 'assets') continue

    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const indexPath = path.join(full, 'index.md')
      const hasIndex = fs.existsSync(indexPath)
      const meta = hasIndex
        ? readMarkdownMeta(indexPath)
        : { title: entry.name, order: minOrderIn(full) }
      const children = buildSidebarEntries(full, `${base}/${entry.name}`)
      // 分组默认收起（只显示「Java基础」这一行）；当前文章就在这个分组里时，
      // VitePress 会自动把它展开，保证选中项可见
      const item = { text: meta.title, collapsed: true }

      if (hasIndex) item.link = `${base}/${entry.name}/`
      if (children.length) item.items = children

      entries.push({ order: meta.order, name: entry.name, item })
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      const meta = readMarkdownMeta(full)
      entries.push({
        order: meta.order,
        name: entry.name,
        item: { text: meta.title, link: `${base}/${entry.name.replace(/\.md$/, '')}` }
      })
    }
  }

  entries.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, 'zh', { numeric: true }))
  return entries.map((entry) => entry.item)
}

function buildCategorySidebar(dir) {
  const category = path.basename(dir)
  const base = `/${category}`
  const items = []

  if (fs.existsSync(path.join(dir, 'index.md'))) {
    items.push({ text: `${category}首页`, link: `${base}/` })
  }

  items.push(...buildSidebarEntries(dir, base))
  return items
}

// 自动生成侧边栏：新增文件夹 / 文章后重启 dev 服务即可出现在左侧菜单
export function buildSidebar() {
  const extraCategories = fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith('.') &&
        entry.name !== 'public' &&
        entry.name !== 'assets' &&
        CATEGORY_ORDER.indexOf(entry.name) === -1
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'zh'))

  const sidebar = {}

  for (const category of [...CATEGORY_ORDER, ...extraCategories]) {
    const dir = path.join(docsRoot, category)
    if (!fs.existsSync(dir)) continue

    sidebar[`/${category}/`] = [
      {
        text: category,
        // 不设置 collapsed：模块标题（学习笔记 / 技术沉淀…）不折叠、不带箭头，
        // 下面的菜单始终展开，避免点了收起后找不到文章
        items: buildCategorySidebar(dir)
      }
    ]
  }

  return sidebar
}
