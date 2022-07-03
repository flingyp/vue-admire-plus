/**
 * 转换 VPlusRouteRecordRaw: RouteRecordRaw 相关工具函数
 */

import type { SysRouterMenu } from 'types/SysRouterMenu'
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router'
import lodash from 'lodash'

import NotFound from '@/views/common/NotFound.vue'

import { GlobFileModule } from './GlobModules'

/**
 * 工具函数：转换 VPlusRoute[] -> RouteRecordRaw[]
 * @param VPlusRoutes： VPlusRoutes[]
 * @returns
 */
const transformVPlusRouteToRouteRecordRaw = (VPlusRoutes: SysRouterMenu.VPlusRoute[]): RouteRecordRaw[] => {
  const NeedHandleVPlusRoutes = lodash.cloneDeep(VPlusRoutes)

  const SysRouterMenuRecordRawArr: RouteRecordRaw[] = []

  NeedHandleVPlusRoutes.forEach(VPlusRoute => {
    // eslint-disable-next-line no-use-before-define
    SysRouterMenuRecordRawArr.push(transform(VPlusRoute))
  })
  return SysRouterMenuRecordRawArr
}

/**
 * 转换函数：转换 VPlusRoute -> RouteRecordRaw
 * @param VPlusRoute：VPlusRoutes
 * @returns
 */
const transform = (VPlusRoute: SysRouterMenu.VPlusRoute) => {
  // @ts-ignore
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: VPlusRoute.path,
    name: VPlusRoute.name,
    meta: VPlusRoute.meta,
    component: (VPlusRoute.component && GlobFileModule(VPlusRoute.component)) || NotFound, // 如果定义的路由路径在项目页面文件目录中不存在则返回404页面
    redirect: VPlusRoute.redirect && (VPlusRoute.redirect as RouteRecordRedirectOption)
  }
  if (VPlusRoute.children) {
    CurrentRouteRecordRaw.children = transformVPlusRouteToRouteRecordRaw(VPlusRoute.children)
  }

  return CurrentRouteRecordRaw
}

export default transformVPlusRouteToRouteRecordRaw
