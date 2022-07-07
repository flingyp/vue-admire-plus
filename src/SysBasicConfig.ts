const SysBaseConfig: SysBasicConfig.SysBaseConfig = {
  title: 'VAdmire Plus',
  logo: '@/assets/img/SysLogo.png', // 注意：不可使用别名 @
  layoutMode: 'LEFT_MENU_MODE',
  handleSysPermission: 'STATIC_PERMISSION',
  whiteRouteByName: ['LoginIndex', 'Sys_404'] // 白名单（不需要Token可以访问的路由名称）
}

export { SysBaseConfig }
