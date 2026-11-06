<script setup>
import { computed, ref } from 'vue'
import { data as posts } from '../../../posts.data.js'

const IMG = '/images/'

const COVERS = {
  学习笔记: IMG + 'cover-study.jpg',
  技术沉淀: IMG + 'cover-tech.jpg',
  生活随笔: IMG + 'cover-life.jpg',
  项目经历: IMG + 'cover-project.jpg'
}

const CATEGORY_CARDS = [
  { name: '学习笔记', key: 'study', badge: '学', desc: '课程与自学编程的知识记录', link: '/学习笔记/' },
  { name: '技术沉淀', key: 'tech', badge: '技', desc: '踩过的坑、解决的 Bug 与开发经验', link: '/技术沉淀/' },
  { name: '生活随笔', key: 'life', badge: '生', desc: '生活感悟与成长路上的点滴', link: '/生活随笔/' },
  { name: '项目经历', key: 'project', badge: '项', desc: '正在开发或已经完成的系统项目', link: '/项目经历/' }
]

const active = ref('all')

const categories = computed(() => {
  const map = new Map()
  for (const post of posts) {
    const name = post.category || '其他'
    map.set(name, (map.get(name) || 0) + 1)
  }
  return [...map.entries()].map(([name, count]) => ({ name, count }))
})

const visiblePosts = computed(() => {
  const list = active.value === 'all'
    ? posts
    : posts.filter((post) => post.category === active.value)
  return list.slice(0, 6)
})

function coverFor(category) {
  return COVERS[category] || COVERS['学习笔记']
}

function formatDate(date) {
  return date ? date.replace(/-/g, '.') : '未标注日期'
}
</script>

<template>
  <section class="feed-panel">
    <div class="feed-tabs" role="tablist" aria-label="文章分类">
      <button
        class="feed-tab"
        :class="{ active: active === 'all' }"
        role="tab"
        :aria-selected="active === 'all'"
        @click="active = 'all'"
      >
        全部
        <span>{{ posts.length }}</span>
      </button>
      <button
        v-for="item in categories"
        :key="item.name"
        class="feed-tab"
        :class="{ active: active === item.name }"
        role="tab"
        :aria-selected="active === item.name"
        @click="active = item.name"
      >
        {{ item.name }}
        <span>{{ item.count }}</span>
      </button>
    </div>

    <div v-if="visiblePosts.length" class="feed-grid">
      <a
        v-for="post in visiblePosts"
        :key="post.url"
        class="post-card"
        :href="post.url"
      >
        <div class="post-cover">
          <img :src="coverFor(post.category)" :alt="post.title" loading="lazy" />
          <div class="post-badges">
            <span class="post-category">{{ post.category || '随笔' }}</span>
            <span v-if="post.folder" class="post-folder">{{ post.folder }}</span>
          </div>
        </div>
        <div class="post-body">
          <h3 class="post-title">{{ post.title }}</h3>
          <div class="post-meta">
            <span class="meta-item">
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                <rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.6" />
                <path d="M8 3v4M16 3v4M4 10h16" fill="none" stroke="currentColor" stroke-width="1.6" />
              </svg>
              {{ formatDate(post.date) }}
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="none" stroke="currentColor" stroke-width="1.6" />
              </svg>
              {{ post.category || '其他' }}
            </span>
            <span v-if="post.folder" class="meta-item">
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="none" stroke="currentColor" stroke-width="1.6" />
              </svg>
              {{ post.folder }}
            </span>
          </div>
          <p class="post-excerpt">
            {{ post.description || '这篇文章还没有写摘要，点进去看看吧。' }}
          </p>
          <div v-if="post.tags.length" class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="post-tag">#{{ tag }}</span>
          </div>
        </div>
      </a>
    </div>

    <div v-else class="feed-empty">
      <span>这个分类还没有文章</span>
      <p>去记录第一篇吧，让它慢慢长大。</p>
    </div>

    <h2 class="feed-section-title">内容分类</h2>
    <div class="cat-grid">
      <a
        v-for="cat in CATEGORY_CARDS"
        :key="cat.name"
        class="cat-card"
        :class="cat.key"
        :href="cat.link"
      >
        <span class="cat-badge">{{ cat.badge }}</span>
        <span class="cat-info">
          <span class="cat-name">{{ cat.name }}</span>
          <span class="cat-desc">{{ cat.desc }}</span>
        </span>
        <span class="cat-arrow">→</span>
      </a>
    </div>
  </section>
</template>
