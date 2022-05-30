import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// 浏览器默认样式重置文件
import '@/style/ResetStyle.css'

/**
 * 初始化应用
 */
const initApplication = async () => {
  const app = createApp(App)

  // ElementPlus
  app.use(ElementPlus, { size: 'small', zIndex: 3000 })

  app.mount('#app')
}

await initApplication()
