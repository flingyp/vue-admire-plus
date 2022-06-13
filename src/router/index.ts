import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

import { App } from 'vue'

// 路由守卫处理函数
import routeMenuHandleProcess from './RouterBeforeEachHandle'

// 转换 VPlusRoutes 转换为 RouteRecordRaw[] 工具函数
import transformVPlusToVRouterRecordRaw from './utils/TransformVPlusRoute'

// 常量路由
import ConstantRoutes from './modules/ConstantRoutes'

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
  // 进度条开始
  NProgress.start()
  // 全局路由守卫处理
  await routeMenuHandleProcess(to, from, next, routerInstance)
})

routerInstance.afterEach(async () => {
  // 进度条结束
  NProgress.done()
})

/**
 * 初始化路由
 * @param app
 */
const initRouter = (app: App<Element>) => {
  app.use(routerInstance)
}

export { routerInstance, initRouter }
