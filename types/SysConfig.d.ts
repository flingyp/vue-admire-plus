namespace SysConfig {
  // 系统配置
  interface Config {
    layoutMode: SysBasicConfig.SysLayoutMode // 布局模式
    leftMenuIsCollapsed: boolean // 左侧菜单布局模式是否收缩
  }

  // 统一响应数据结构
  interface HttpResponse<T> {
    code: number | string
    msg: string
    data: T
  }
}
