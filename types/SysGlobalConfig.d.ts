type LayoutMode = 'LEFT_MENU_MODE' | 'LEFT_MENU_MIX_MODE' | 'TOP_MENU_MODE' | 'TOP_MIX_MENU_MODE'
interface BaseConfig {
  title: string // 系统名称
  logo: string // 系统Logo路径
  layoutMode: LayoutMode // 布局模式
}

namespace SysGlobalConfig {
  type SysLayoutMode = LayoutMode
  type SysBaseConfig = BaseConfig
}
