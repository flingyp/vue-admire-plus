import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 菜单名称
    label: string
  }
}
