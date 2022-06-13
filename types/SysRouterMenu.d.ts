import { RouteMeta } from 'vue-router'

namespace SysRouterMenu {
  // VPlus系统路由类型
  interface VPlusRoute {
    path: string
    name: string
    component?: string // 页面路径（使用别名，其他方式均不可）
    children?: VPlusRoute[]
    meta?: RouteMeta
    redirect?: string // 重定向路径（设置该属性，不需要设置component）
  }

  // 菜单数据结构
  interface MenuRecord {
    label: string
    icon: string
    key: string
    children?: MenuRecord[]
  }
}
