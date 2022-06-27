import { defineStore } from 'pinia'

import { SysBaseConfig } from '../../SysBasicConfig'

import { getLocalKey, setLocalKey } from '@/utils/common/HandleLocalStorageUtil'
import { CreateMixColor, TransformToDarken } from '@/utils/common/ColorHandleUtil'

import { IUserInfo, userInfoApi } from '@/apis/SysUserApi'

import { useThemeMode } from '@/hooks/UseThemeMode'

const { judgeIsDarkMode } = useThemeMode()

/**
 * 系统内置的主题颜色数组
 * https://material.io/resources/color/#!/?view.left=0&view.right=0
 * 取值为600的色值
 */
const ThemeColorArray = [
  '#039be5',
  '#e53935',
  '#d81b60',
  '#8e24aa',
  '#5e35b1',
  '#3949ab',
  '#1e88e5',
  '#00acc1',
  '#00897b',
  '#43a047',
  '#7cb342',
  '#c0ca33',
  '#fdd835',
  '#ffb300',
  '#fb8c00',
  '#f4511e',
  '#6d4c41',
  '#757575',
  '#546e7a'
]

interface ISysStoreState {
  SysBaseConfig: SysBasicConfig.SysBaseConfig
  SysConfig: SysConfig.Config
  SysUserInfo: IUserInfo | {}
}

export const UseSysStore = defineStore('SysStore', {
  state(): ISysStoreState {
    const SysStoreState: ISysStoreState = {
      SysBaseConfig,
      SysConfig: {
        layoutMode: (getLocalKey('layoutMode') as SysBasicConfig.SysLayoutMode) || SysBaseConfig.layoutMode,
        leftMenuIsCollapsed: false,
        isShowSysDrawer: false,
        themeMode: judgeIsDarkMode() ? 'dark' : 'light',
        themeColor: getLocalKey('primaryColor') || ThemeColorArray[0],
        themeColorArray: ThemeColorArray,
        primaryColorGather: undefined,
        isNeedReload: false
      },
      SysUserInfo: {}
    }

    return SysStoreState
  },
  getters: {
    themeColor: (state: ISysStoreState) => state.SysConfig.themeColor,
    themeColorArray: (state: ISysStoreState) => state.SysConfig.themeColorArray
  },
  actions: {
    /**
     * 设置左侧菜单是否收缩
     * @param value
     */
    setLeftMenuIsCollapsed(value: boolean) {
      this.SysConfig.leftMenuIsCollapsed = value
    },
    /**
     * 设置系统布局组件
     * @param value
     */
    setLayoutMode(value: SysBasicConfig.SysLayoutMode) {
      setLocalKey('layoutMode', value)
      this.SysConfig.layoutMode = value
    },
    /**
     * 获取用户信息
     */
    async setSysUserInfo() {
      const UserInfo = await userInfoApi()
      this.SysUserInfo = UserInfo
    },
    /**
     * 设置主题模式
     * @param value
     */
    setThemeMode(value: SysConfig.ThemeMode) {
      this.SysConfig.themeMode = value
      this.setThemeColor(this.SysConfig.themeColor)
    },
    /**
     * 设置主题颜色
     */
    setThemeColor(value: string) {
      this.SysConfig.themeColor = value
      // 设置本地缓存
      setLocalKey('primaryColor', value)
      // 修改系统相关主题变量
      this.setThemeColorCssVarious()
    },
    /**
     * 设置系统色CSS变量
     */
    setThemeColorCssVarious() {
      const ColorPrefix: SysConfig.PrimaryColorPrefix = '--el-color-primary'
      const ColorGather: SysConfig.PrimaryColorGatherObject = {
        '--el-color-primary': this.SysConfig.themeColor,
        '--el-color-primary-dark-2': '',
        '--el-color-primary-light-3': '',
        '--el-color-primary-light-5': '',
        '--el-color-primary-light-7': '',
        '--el-color-primary-light-8': '',
        '--el-color-primary-light-9': ''
      }
      // 基础色值
      let BasicColor: '#000000' | '#FFFFFF' = '#FFFFFF'
      // 主色值
      document.documentElement.style.setProperty(ColorPrefix, this.SysConfig.themeColor)
      // eslint-disable-next-line no-restricted-syntax
      for (const key in ColorGather) {
        // eslint-disable-next-line no-continue
        if (key === ColorPrefix) continue
        // 从key获取比例值
        const PercentValue = key.match(/^--el-color-primary-(.*)-(\d*)$/) as RegExpMatchArray
        if (PercentValue[1] === 'light') {
          BasicColor = '#FFFFFF'
        } else {
          BasicColor = '#000000'
        }
        const Mix = CreateMixColor(BasicColor, ColorGather[ColorPrefix], Number(PercentValue[2]))
        // @ts-ignore
        ColorGather[key] = this.SysConfig.themeMode === 'light' ? Mix : TransformToDarken(Mix, 3)

        // 修改系统中CSS当中的变量
        // @ts-ignore
        document.documentElement.style.setProperty(key, ColorGather[key])
      }
      this.SysConfig.primaryColorGather = ColorGather
    },
    /**
     * 设置页面是否需要重新加载
     * @param value
     */
    setIsNeedReload(value: boolean) {
      this.SysConfig.isNeedReload = value
    }
  }
})
