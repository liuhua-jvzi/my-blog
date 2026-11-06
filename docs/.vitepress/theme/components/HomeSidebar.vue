<script setup>
import { computed, ref } from 'vue'
import { data as posts } from '../../../posts.data.js'

const pad = (n) => String(n).padStart(2, '0')
const toKey = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`

const today = new Date()
const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate())

const withDate = computed(() => [...posts].filter((post) => post.date).sort((a, b) => b.date.localeCompare(a.date)))

const categoryCount = computed(() => new Set(posts.map((post) => post.category).filter(Boolean)).size)
const tagCount = computed(() => new Set(posts.flatMap((post) => post.tags)).size)
const wordCount = computed(() => posts.reduce((sum, post) => sum + post.words, 0))
const postDates = computed(() => new Set(withDate.value.map((post) => post.date)))

const runningDays = computed(() => {
  const first = withDate.value[withDate.value.length - 1]
  if (!first) return 1
  const diff = Math.floor((new Date(todayKey) - new Date(first.date)) / 86400000)
  return Math.max(1, diff + 1)
})

const recentText = computed(() => {
  const last = withDate.value[0]
  if (!last) return '等待更新'
  const diff = Math.floor((new Date(todayKey) - new Date(last.date)) / 86400000)
  if (diff <= 0) return '今天'
  if (diff === 1) return '昨天'
  if (diff < 30) return `${diff} 天前`
  return last.date
})

const stats = computed(() => [
  { icon: '文', label: '文章', value: posts.length },
  { icon: '类', label: '分类', value: categoryCount.value },
  { icon: '签', label: '标签', value: tagCount.value },
  { icon: '字', label: '总字数', value: wordCount.value.toLocaleString('zh-CN') },
  { icon: '时', label: '运行时长', value: `${runningDays.value} 天` },
  { icon: '近', label: '最近更新', value: recentText.value }
])

const viewYear = ref(today.getFullYear())
const viewMonth = ref(today.getMonth())

const monthLabel = computed(() => `${viewYear.value}年${viewMonth.value + 1}月`)

const calendarCells = computed(() => {
  const year = viewYear.value
  const month = viewMonth.value
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = []

  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ day: 0, date: '' })
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({ day, date: toKey(year, month, day) })
  }
  return cells
})

function changeMonth(offset) {
  const next = new Date(viewYear.value, viewMonth.value + offset, 1)
  viewYear.value = next.getFullYear()
  viewMonth.value = next.getMonth()
}
</script>

<template>
  <div class="side-card">
    <h2 class="side-title">站点数据</h2>
    <ul class="stats-list">
      <li v-for="item in stats" :key="item.label">
        <span class="stat-icon">{{ item.icon }}</span>
        <span class="stat-label">{{ item.label }}</span>
        <span class="stat-value">{{ item.value }}</span>
      </li>
    </ul>
  </div>

  <div class="side-card calendar-card">
    <div class="cal-head">
      <button class="cal-nav" type="button" aria-label="上个月" @click="changeMonth(-1)">‹</button>
      <h2 class="cal-title">{{ monthLabel }}</h2>
      <button class="cal-nav" type="button" aria-label="下个月" @click="changeMonth(1)">›</button>
    </div>

    <div class="cal-week">
      <span v-for="week in ['一', '二', '三', '四', '五', '六', '日']" :key="week">{{ week }}</span>
    </div>

    <div class="cal-grid">
      <span
        v-for="(cell, index) in calendarCells"
        :key="index"
        class="cal-cell"
        :class="{
          empty: !cell.day,
          today: cell.day && cell.date === todayKey,
          active: cell.day && postDates.has(cell.date)
        }"
      >
        <span class="cal-num">{{ cell.day || '' }}</span>
        <i v-if="cell.day && postDates.has(cell.date)" class="cal-dot"></i>
      </span>
    </div>
  </div>
</template>
