import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import HomeLayout from './components/HomeLayout.vue'
import ArchivePage from './components/ArchivePage.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    ctx.app.component('HomeLayout', HomeLayout)
    ctx.app.component('ArchivePage', ArchivePage)
  }
}
