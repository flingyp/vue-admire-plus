/**
 * 转换 VPlusRouteRecordRaw: RouteRecordRaw 相关工具函数
 */

import type { SysRouterMenu } from 'types/SysRouterMenu'
import { RouteRecordRaw } from 'vue-router'
import lodash from 'lodash'

import { GlobFileModule } from './GlobModules'

/**
 * 将 VPlusRoutes 转换为 RouteRecordRaw[]
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
 * 转换函数
 * @param VPlusRoute：VPlusRoutes
 * @returns
 */
const transform = (VPlusRoute: SysRouterMenu.VPlusRoute) => {
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: VPlusRoute.path,
    name: VPlusRoute.name,
    meta: VPlusRoute.meta,
    component: GlobFileModule(VPlusRoute.component as string)
  }
  if (VPlusRoute.children) {
    CurrentRouteRecordRaw.children = transformVPlusRouteToRouteRecordRaw(VPlusRoute.children)
  }

  return CurrentRouteRecordRaw
}

export default transformVPlusRouteToRouteRecordRaw
