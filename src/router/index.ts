import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

/**
 * 路由实例
 */
const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: []
})

/**
 * 初始化路由
 * @param app
 */
const initRouter = (app: App) => {
  app.use(routerInstance)
}

export { routerInstance, initRouter }
