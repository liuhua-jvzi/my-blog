<script setup>
import DefaultTheme from 'vitepress/theme'
import { getScrollOffset, useRoute } from 'vitepress'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()

// 目录末尾需要的额外滚动空间（px），由 style.css 读取：
// padding-bottom: calc(128px + var(--home-toc-room))
const ROOM_VAR = '--home-toc-room'

let frame = 0
let timer = 0

function setRoom(px) {
  document.documentElement.style.setProperty(ROOM_VAR, `${px}px`)
}

function measure() {
  if (!window.matchMedia('(min-width: 1280px)').matches) {
    setRoom(0)
    return
  }

  // 以右侧目录里真正显示的标题为准（没有目录的页面直接跳过）。
  // 最后一项不需要额外空间：滚到页面底部时高亮最后一项本来就是对的，
  // 真正会被“到底部”规则顶掉的是它前面那一项。
  const links = document.querySelectorAll('.VPDocAsideOutline .outline-link')
  if (links.length < 2) {
    setRoom(0)
    return
  }
  const targetLink = links[links.length - 2]

  const id = decodeURIComponent((targetLink.getAttribute('href') || '').slice(1))
  const targetHeading = id ? document.getElementById(id) : null
  if (!targetHeading) {
    setRoom(0)
    return
  }

  const root = document.documentElement
  // 先减掉已经生效的余量，否则会把自己的占位算进页面高度、来回震荡
  const current = parseFloat(getComputedStyle(root).getPropertyValue(ROOM_VAR)) || 0
  const maxScroll = root.scrollHeight - current - window.innerHeight
  if (maxScroll <= 0) {
    setRoom(0)
    return
  }

  // 和 VitePress 点击目录时的落点算法保持一致：
  // 标题的绝对位置 - 顶部偏移 + 标题自身的 padding-top
  const style = getComputedStyle(targetHeading)
  const paddingTop = parseInt(style.paddingTop, 10) || 0
  const targetTop =
    targetHeading.getBoundingClientRect().top + window.scrollY - getScrollOffset() + paddingTop
  const room = Math.ceil(targetTop - maxScroll) + 4
  setRoom(Math.max(0, room))
}

function schedule() {
  cancelAnimationFrame(frame)
  clearTimeout(timer)
  frame = requestAnimationFrame(measure)
  // 字体/图片加载会改变标题位置，稍后再量一次
  timer = setTimeout(measure, 400)
}

function onResize() {
  schedule()
}

onMounted(() => {
  schedule()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(frame)
  clearTimeout(timer)
})

watch(
  () => route.path,
  async () => {
    setRoom(0)
    await nextTick()
    schedule()
  }
)
</script>

<template>
  <Layout />
</template>
