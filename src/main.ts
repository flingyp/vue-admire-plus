import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import { initRouter } from '@/router'
import { initStore } from '@/store'
import initStyle from '@/style'

/**
 * 初始化应用
 */
const initApplication = async () => {
  // 创建实例
  const app = createApp(App)

  // ElementPlus
  app.use(ElementPlus, { size: 'small', zIndex: 3000 })

  // 初始化路由
  initRouter(app)

  // 初始化状态管理
  initStore(app)

  // 初始化相关样式
  initStyle()

  // 实例挂载
  app.mount('#app')
}

await initApplication()
