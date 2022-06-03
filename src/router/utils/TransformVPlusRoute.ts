/**
 * 转换 VPlusRouteRecordRaw: RouteRecordRaw 相关工具函数
 */

import { SysRouterMenu } from 'types/SysRouterMenu'
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

  const SysRouterMenuecordRawArr: RouteRecordRaw[] = []

  NeedHandleVPlusRoutes.forEach(VPlusRoute => {
    // eslint-disable-next-line no-use-before-define
    SysRouterMenuecordRawArr.push(transform(VPlusRoute))
  })
  return SysRouterMenuecordRawArr
}

/**
 * 转换函数
 * @param VPlusRoute：VPlusRoutes
 * @returns
 */
const transform = (VPlusRoute: SysRouterMenu.VPlusRoute): RouteRecordRaw => {
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: VPlusRoute.path,
    name: VPlusRoute.name,
    meta: VPlusRoute.meta,
    component: GlobFileModule(VPlusRoute.component)
  }
  if (VPlusRoute.children) {
    CurrentRouteRecordRaw.children = transformVPlusRouteToRouteRecordRaw(VPlusRoute.children)
  }

  return CurrentRouteRecordRaw
}

export default transformVPlusRouteToRouteRecordRaw
