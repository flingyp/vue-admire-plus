namespace SysConfig {
  type ThemeMode = 'light' | 'dark' // 主题模式

  type PrimaryColorPrefix = '--el-color-primary' // 主题色前缀

  type PrimaryColorLightValue = '3' | '5' | '7' | '8' | '9'
  type PrimaryColorDarkValue = '2'
  // 系统主题色CSS变量的变量名集合
  type PrimaryColorValue =
    | '--el-color-primary'
    | `${PrimaryColorPrefix}-dark-${PrimaryColorDarkValue}`
    | `${PrimaryColorPrefix}-light-${PrimaryColorLightValue}`
  type PrimaryColorGatherObject = Record<SysConfig.PrimaryColorValue, string>

  // 系统配置
  interface Config {
    layoutMode: SysBasicConfig.SysLayoutMode // 布局模式
    leftMenuIsCollapsed: boolean // 左侧菜单布局模式是否收缩
    isShowSysDrawer: boolean // 系统设置抽屉是否显示
    themeMode: ThemeMode // 主题模式
    themeColor: string // 主题颜色
    themeColorArray: string[] // 系统内置的主题颜色数组
    primaryColorGather: SysConfig.PrimaryColorGatherObject | undefined // 系统主题色相关变量集合
    isNeedReload: boolean // 页面是否需要重新加载
    customHeaderHeight: number // 自定义头部高度
    customTagHeight: number // 自定义Tag高度
    pageTransition: string // 页面切换动画
  }

  // 统一响应数据结构
  interface HttpResponse<T> {
    code: number | string
    msg: string
    data: T
  }
}
