namespace SysConfig {
  interface Config {
    layoutMode: SysGlobalConfig.SysLayoutMode // 布局模式
    leftMenuIsCollapsed: boolean // 左侧菜单布局模式是否收缩
  }

  // 菜单数据结构
  interface MenuRecord {
    label: string
    icon: string
    key: string
    children?: MenuRecord[]
  }
}
