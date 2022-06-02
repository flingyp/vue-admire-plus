import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 菜单名称
    label: string
    // 是否显示在菜单中
    isShow?: boolean
  }
}
