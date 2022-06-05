import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

import { App } from 'vue'

import ConstantRoutes from './modules/ConstantRoutes'
import transformVPlusToVRouterRecordRaw from './utils/TransformVPlusRoute'
import routeMenuHandleProcess from './RouterBeforeEachHandle'

NProgress.configure({ easing: 'ease', speed: 500 })

/**
 * 路由实例
 */
const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: transformVPlusToVRouterRecordRaw(ConstantRoutes)
})

/**
 * 全局路由守卫
 */
routerInstance.beforeEach(async (to, from, next) => {
  NProgress.start() // 进度条开始
  await routeMenuHandleProcess(to, from, next, routerInstance)
})

routerInstance.afterEach(async () => {
  NProgress.done() // 进度条结束
})

/**
 * 初始化路由
 * @param app
 */
const initRouter = (app: App<Element>) => {
  app.use(routerInstance)
}

export { routerInstance, initRouter }
