/**
 * 生成菜单：SysRouterMenu.MenuRecord
 */

import { SysRouterMenu } from 'types/SysRouterMenu'
import type { RouteRecordRaw } from 'vue-router'

const create = (Routers: RouteRecordRaw[]): SysRouterMenu.MenuRecord[] => {
  const Menus: SysRouterMenu.MenuRecord[] = []
  Routers.forEach(route => {
    const AddMenuRecord: SysRouterMenu.MenuRecord = {
      label: '',
      icon: '',
      key: ''
    }
    // 筛选掉不需要显示的路由
    if (route.meta?.isShow === undefined || route.meta.isShow === true) {
      if (route.children) {
        AddMenuRecord.children = create(route.children)
      }
      AddMenuRecord.label = route.meta?.label || '默认菜单'
      AddMenuRecord.icon = route.meta?.icon || 'line-md:emoji-smile'
      AddMenuRecord.key = route.name as string

      // 添加菜单
      Menus.push(AddMenuRecord)
    }
  })
  return Menus
}

const createSysMenuRecord = (Routers: RouteRecordRaw[]) => {
  const MenuRecords = create(Routers)
  return MenuRecords
}

export default createSysMenuRecord
