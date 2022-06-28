import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 菜单名称
    label?: string
    // 菜单图标
    icon?: string
    // 是否显示在菜单中
    isShow?: boolean
    // 路由权限
    permissions?: Array<string>
    // 链接（系统链接、内链、外链）
    link?: 'SYS_LINK' | 'INTERNAL_LINK' | 'EXTERNAL_LINK'
    // 内链、外链的链接地址
    url?: string
    // 路由是否缓存（默认缓存）
    cache?: boolean
  }
}
