/**
 * 转换 VPlusRouteRecordRaw: RouteRecordRaw 相关工具函数
 */

import { SysRouter } from 'types/SysRouter'
import { RouteRecordRaw } from 'vue-router'
import lodash from 'lodash'

import { GlobFileModule } from './GlobModules'

/**
 * 将 VPlusRoutes 转换为 RouteRecordRaw[]
 * @param VPlusRoutes： VPlusRoutes[]
 * @returns
 */
const transformVPlusRouteToRouteRecordRaw = (VPlusRoutes: SysRouter.VPlusRoute[]): RouteRecordRaw[] => {
  const NeedHandleVPlusRoutes = lodash.cloneDeep(VPlusRoutes)

  const SysRouteRecordRawArr: RouteRecordRaw[] = []

  NeedHandleVPlusRoutes.forEach(VPlusRoute => {
    // eslint-disable-next-line no-use-before-define
    SysRouteRecordRawArr.push(transform(VPlusRoute))
  })
  return SysRouteRecordRawArr
}

/**
 * 转换函数
 * @param VPlusRoute：VPlusRoutes
 * @returns
 */
const transform = (VPlusRoute: SysRouter.VPlusRoute): RouteRecordRaw => {
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
