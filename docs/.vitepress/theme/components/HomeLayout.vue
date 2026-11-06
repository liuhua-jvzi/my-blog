<script setup>
import HomeFeed from './HomeFeed.vue'
import HomeSidebar from './HomeSidebar.vue'
</script>

<template>
  <div class="blog-home" id="top">
    <!-- ===== 首屏大图 ===== -->
    <section class="home-hero">
      <div class="hero-bg"></div>
      <div class="hero-shade"></div>
      <div class="hero-inner">
        <p class="hero-eyebrow">WELCOME TO MY BLOG</p>
        <h1 class="hero-title">六花吃橘子的小窝</h1>
        <p class="hero-sub">记录学习 · 沉淀技术 · 分享生活</p>
        <p class="hero-quote">“写点东西，留点痕迹”</p>
      </div>
      <a class="hero-scroll" href="#content" aria-label="向下浏览">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </section>

    <!-- ===== 主体三栏 ===== -->
    <div class="home-body" id="content">
      <!-- 左栏：个人信息 + 公告 -->
      <div class="home-col-left">
        <section class="profile-card">
          <div class="profile-cover"></div>
          <div class="profile-avatar">
            <img src="/images/avatar.jpg" alt="头像" />
          </div>
          <h2 class="profile-name">六花吃橘子</h2>
          <p class="profile-role">一个热爱Java的牛马</p>
          <p class="profile-bio">记录我的学习笔记，分享我的学习经历。</p>
          <div class="profile-chips">
            <span>后端</span>
            <span>在校生</span>
            <span>折腾系</span>
          </div>
          <a class="profile-btn" href="/关于我">关于我 →</a>
        </section>

        <section class="notice-card">
          <h3 class="notice-title">公告</h3>
          <p class="notice-text">欢迎来到我的小站，内容还在慢慢生长，感谢你的到访。</p>
          <a class="notice-link" href="/关于我">了解更多 →</a>
        </section>
      </div>

      <!-- 中栏：文章流 + 分类 -->
      <main class="home-col-main">
        <HomeFeed />
      </main>

      <!-- 右栏：站点数据 + 日历 -->
      <aside class="home-col-aside">
        <HomeSidebar />
      </aside>
    </div>

    <!-- 右下角浮动按钮 -->
    <div class="home-fabs">
      <a class="fab" href="#top" aria-label="回到顶部">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
      <a class="fab" href="https://github.com/你的用户名" target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor" />
        </svg>
      </a>
    </div>
  </div>
</template>
