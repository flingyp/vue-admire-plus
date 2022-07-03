import { RouteMeta } from 'vue-router'

namespace SysRouterMenu {
  // VAdmire系统路由类型
  interface VAdmireRoute {
    path: string
    name: string
    /**
     * 页面路径（使用别名，其他方式均不可）
     * 注意：在使用VitePluginMock Mock异步路由数据的时候 @/ 会被处理为 /
     * 例如：component: '@/views/permission/RoleIndex.vue' 会被处理为 component: '@views/permission/RoleIndex.vue' 导致自动引入页面模块失效
     * 还未在真实环境接口做测试，目前解决方案在 GlobModules 做适配处理
     */
    component?: string
    children?: VAdmireRoute[]
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
