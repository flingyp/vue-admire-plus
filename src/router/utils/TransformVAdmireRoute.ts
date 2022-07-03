/**
 * 转换 VAdmireRouteRecordRaw: RouteRecordRaw 相关工具函数
 */

import type { SysRouterMenu } from 'types/SysRouterMenu'
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router'
import lodash from 'lodash'

import NotFound from '@/views/common/NotFound.vue'

import { GlobFileModule } from './GlobModules'

/**
 * 工具函数：转换 VAdmireRoute[] -> RouteRecordRaw[]
 * @param VAdmireRoutes： VAdmireRoutes[]
 * @returns
 */
const transformVAdmireRouteToRouteRecordRaw = (VAdmireRoutes: SysRouterMenu.VAdmireRoute[]): RouteRecordRaw[] => {
  const NeedHandleVAdmireRoutes = lodash.cloneDeep(VAdmireRoutes)

  const SysRouterMenuRecordRawArr: RouteRecordRaw[] = []

  NeedHandleVAdmireRoutes.forEach(VAdmireRoute => {
    // eslint-disable-next-line no-use-before-define
    SysRouterMenuRecordRawArr.push(transform(VAdmireRoute))
  })
  return SysRouterMenuRecordRawArr
}

/**
 * 转换函数：转换 VAdmireRoute -> RouteRecordRaw
 * @param VAdmireRoute：VAdmireRoutes
 * @returns
 */
const transform = (VAdmireRoute: SysRouterMenu.VAdmireRoute) => {
  // @ts-ignore
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: VAdmireRoute.path,
    name: VAdmireRoute.name,
    meta: VAdmireRoute.meta,
    component: (VAdmireRoute.component && GlobFileModule(VAdmireRoute.component)) || NotFound, // 如果定义的路由路径在项目页面文件目录中不存在则返回404页面
    redirect: VAdmireRoute.redirect && (VAdmireRoute.redirect as RouteRecordRedirectOption)
  }
  if (VAdmireRoute.children) {
    CurrentRouteRecordRaw.children = transformVAdmireRouteToRouteRecordRaw(VAdmireRoute.children)
  }

  return CurrentRouteRecordRaw
}

export default transformVAdmireRouteToRouteRecordRaw
