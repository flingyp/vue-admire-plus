import { RouteMeta } from 'vue-router'

namespace SysRouter {
  interface VPlusRoute {
    path: string
    name: string
    component: string // 页面路径（使用别名，其他方式均不可）
    children?: VPlusRoute[]
    meta?: RouteMeta
  }
}
