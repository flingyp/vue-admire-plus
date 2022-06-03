import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

import ConstantRoutes from './modules/ConstantRoutes'
import transformVPlusToVRouterRecordRaw from './utils/TransformVPlusRoute'
import RouterBeforeEachHandle from './RouterBeforeEachHandle'

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
  await RouterBeforeEachHandle(to, from, next, routerInstance)
})

/**
 * 初始化路由
 * @param app
 */
const initRouter = (app: App) => {
  app.use(routerInstance)
}

export { routerInstance, initRouter }
