import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 菜单名称
    label: string
    // 菜单图标
    icon?: string
    // 是否显示在菜单中
    isShow?: boolean
    // 路由权限
    permissions?: Array<string>
  }
}
