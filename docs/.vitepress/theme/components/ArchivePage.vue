<script setup>
import { computed } from 'vue'
import { data as posts } from '../../../posts.data.js'

// 按日期倒序整理；没有 frontmatter 日期的文章放在最后
const sortedPosts = computed(() =>
  [...posts].sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'zh')
  })
)

// 按年份分组：2026 / 2025 / …，未标注日期的单独一组
const groups = computed(() => {
  const map = new Map()

  for (const post of sortedPosts.value) {
    const year = post.date ? post.date.slice(0, 4) : '未标注日期'
    if (!map.has(year)) map.set(year, [])
    map.get(year).push(post)
  }

  return [...map.entries()].map(([year, items]) => ({ year, items }))
})

function formatDay(date) {
  return date ? date.slice(5).replace('-', '.') : '—'
}
</script>

<template>
  <div class="archive-page">
    <p class="archive-summary">
      共 <strong>{{ posts.length }}</strong> 篇文章，按发布时间倒序排列。
    </p>

    <div v-if="groups.length" class="archive-groups">
      <section v-for="group in groups" :key="group.year" class="archive-group">
        <h2 class="archive-year">
          <span>{{ group.year === '未标注日期' ? group.year : `${group.year} 年` }}</span>
          <span class="archive-count">{{ group.items.length }} 篇</span>
        </h2>

        <ul class="archive-list">
          <li v-for="post in group.items" :key="post.url" class="archive-item">
            <time v-if="post.date" class="archive-date" :datetime="post.date">{{ formatDay(post.date) }}</time>
            <span v-else class="archive-date">—</span>

            <a class="archive-link" :href="post.url">{{ post.title }}</a>

            <div class="archive-meta">
              <a v-if="post.category" class="archive-cat" :href="`/${post.category}/`">{{ post.category }}</a>
              <span v-if="post.folder" class="archive-folder">{{ post.folder }}</span>
              <span v-for="tag in post.tags" :key="tag" class="archive-tag">#{{ tag }}</span>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <div v-else class="archive-empty">
      <p>还没有文章，等第一篇写下来吧。</p>
    </div>
  </div>
</template>

<style scoped>
.archive-page {
  color: var(--home-text);
}

.archive-summary {
  margin: 0 0 24px;
  color: var(--home-text-2);
  font-size: 0.9rem;
  line-height: 1.7;
}

.archive-summary strong {
  color: var(--vp-c-brand-1);
  font-size: 1.08em;
}

.archive-groups {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 年份标题 + 右侧延伸的细线 */
.archive-year {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 8px;
  padding: 0;
  border: 0;
  color: var(--home-text);
  font-size: 1.12rem;
  font-weight: 600;
  line-height: 1.4;
}

.archive-year::after {
  order: 1;
  flex: 1;
  height: 1px;
  background: var(--home-line);
  content: '';
}

.archive-count {
  order: 2;
  flex: 0 0 auto;
  padding: 1px 9px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.7rem;
  font-weight: 500;
}

.archive-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.archive-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 9px 12px 9px 14px;
  border-radius: 10px;
  transition: background-color 0.2s ease;
}

.archive-item + .archive-item {
  margin-top: 2px;
}

.archive-item:hover {
  background: rgba(122, 100, 78, 0.06);
}

.archive-date {
  flex: 0 0 46px;
  color: var(--home-muted);
  font-size: 0.8rem;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

.archive-link {
  flex: 0 1 auto;
  min-width: 0;
  color: var(--home-text);
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  border-bottom: none;
  transition: color 0.2s ease;
}

.archive-link:hover {
  color: var(--vp-c-brand-1);
  border-bottom: none;
}

.archive-meta {
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  justify-content: flex-end;
}

.archive-cat,
.archive-folder {
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.7rem;
  line-height: 1.5;
  text-decoration: none;
  border-bottom: none;
  transition: background-color 0.2s ease;
}

.archive-folder {
  background: rgba(122, 100, 78, 0.08);
  color: var(--home-text-2);
}

.archive-cat:hover {
  background: rgba(192, 106, 82, 0.2);
  border-bottom: none;
}

.archive-tag {
  color: var(--home-muted);
  font-size: 0.7rem;
}

.dark .archive-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.dark .archive-folder {
  background: rgba(255, 255, 255, 0.07);
}

@media (max-width: 640px) {
  .archive-item {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: start;
    gap: 2px 10px;
    padding: 10px 12px;
  }

  .archive-date {
    padding-top: 1px;
    line-height: 1.6;
  }

  .archive-link {
    grid-column: 2;
  }

  .archive-meta {
    grid-column: 2;
    margin-left: 0;
    justify-content: flex-start;
  }

  .archive-year {
    margin-top: 16px;
  }
}
</style>
