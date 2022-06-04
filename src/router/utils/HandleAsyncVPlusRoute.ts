import type { SysRouterMenu } from 'types/SysRouterMenu'
import { Router, RouteRecordRaw } from 'vue-router'

/**
 * 通过权限过滤路由的方法
 * @param VPlusRouters
 * @param UserPermissions
 * @returns
 */
const filter = (VPlusRouters: SysRouterMenu.VPlusRoute[], UserPermissions: string[]): SysRouterMenu.VPlusRoute[] => {
  const FilterVPlusRouters: SysRouterMenu.VPlusRoute[] = []
  VPlusRouters.forEach(VPlusRouter => {
    if (VPlusRouter.children && VPlusRouter.children.length > 0) {
      VPlusRouter.children = filter(VPlusRouter.children, UserPermissions)
    }
    /**
     * 用户是否有权限根据 *:*:* 结构去判断
     * (* 代表任何权限， 一般第一个代表系统，第二个代表系统模块，第三个代表具体的模块业务)
     * 例如：sys:user:update： 解读为用户模块更新权限）
     */
    // 判断此路由是否有权限
    let IsHavePermission = false
    const RouterPermissions = VPlusRouter.meta?.permissions || []
    if (RouterPermissions.length === 0) {
      // 如果没有定义路由的权限， 默认可见
      IsHavePermission = true
    } else {
      IsHavePermission = RouterPermissions.some(_RouterPer => {
        const PermissionArr = _RouterPer.split(':')
        return UserPermissions.some(_UserPer => {
          const UserPermissionArr = _UserPer.split(':')
          if (
            (PermissionArr[0] === UserPermissionArr[0] || UserPermissionArr[0] === '*') &&
            (PermissionArr[1] === UserPermissionArr[1] || UserPermissionArr[1] === '*') &&
            (PermissionArr[2] === UserPermissionArr[2] || UserPermissionArr[2] === '*')
          ) {
            return true
          }
          return false
        })
      })
    }
    if (IsHavePermission) {
      FilterVPlusRouters.push(VPlusRouter)
    }
  })
  return FilterVPlusRouters
}

/**
 * 根据权限过滤VPlus异步路由
 * @param VPlusAsyncRouters
 * @param Permissions
 */
export const filterAsyncVPlusRoute = (
  VPlusAsyncRouters: SysRouterMenu.VPlusRoute[],
  Permissions: string[]
): SysRouterMenu.VPlusRoute[] => {
  const HandleVPlusAsyncRouters = filter(VPlusAsyncRouters, Permissions)

  return HandleVPlusAsyncRouters
}

/**
 * 挂载路由
 * @param route
 * @param routerInstance
 */
export const mountRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.addRoute(route)
}

/**
 * 移除路由
 * @param route
 * @param routerInstance
 */
export const removeRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.removeRoute(route.name!)
}
