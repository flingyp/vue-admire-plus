namespace SysBasicConfig {
  // 系统布局模式
  type SysLayoutMode = 'LEFT_MENU_MODE' | 'LEFT_MENU_MIX_MODE' | 'TOP_MENU_MODE' | 'TOP_MIX_MENU_MODE'

  type SysHandlePermission = 'STATIC_PERMISSION' | 'DYNAMIC_PERMISSION' // STATIC_PERMISSION 前端（静态权限）、DYNAMIC_PERMISSION 后台（动态权限）

  // 系统基础配置（对应SysBasicConfig.ts文件）
  type SysBaseConfig = {
    title: string // 系统名称
    logo: string // 系统Logo路径
    layoutMode: SysLayoutMode // 布局模式
    handleSysPermission: SysHandlePermission // 权限控制方式
    whiteRouteByName: string[] // 白名单
  }
}
