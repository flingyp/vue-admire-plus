import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

import ConstantRoutes from './modules/ConstantRoutes'
import transformVPlusToVRouterRecordRaw from './utils/TransformVPlusRoute'

// console.log(transformVPlusToVRouterRecordRaw(ConstantRoutes))

/**
 * 路由实例
 */
const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: transformVPlusToVRouterRecordRaw(ConstantRoutes)
})

/**
 * 初始化路由
 * @param app
 */
const initRouter = (app: App) => {
  app.use(routerInstance)
}

export { routerInstance, initRouter }
