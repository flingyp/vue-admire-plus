import { defineStore } from 'pinia'

import { SysBaseConfig } from '../../SysGlobalConfig'

import { getLocalKey, setLocalKey } from '@/utils/common/HandleLocalStorageUtil'

import { IUserInfo, userInfoApi } from '@/apis/SysUserApi'

interface ISysStoreState {
  SysBaseConfig: SysGlobalConfig.SysBaseConfig
  SysConfig: SysConfig.Config
  SysUserInfo: IUserInfo | {}
}

export const UseSysStore = defineStore('SysStore', {
  state(): ISysStoreState {
    const SysStoreState: ISysStoreState = {
      SysBaseConfig,
      SysConfig: {
        layoutMode: (getLocalKey('layoutMode') as SysGlobalConfig.SysLayoutMode) || SysBaseConfig.layoutMode,
        leftMenuIsCollapsed: false
      },
      SysUserInfo: {}
    }

    return SysStoreState
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
    setLayoutMode(value: SysGlobalConfig.SysLayoutMode) {
      setLocalKey('layoutMode', value)
      this.SysConfig.layoutMode = value
    },
    /**
     * 获取用户信息
     */
    async setSysUserInfo() {
      const UserInfo = await userInfoApi()
      this.SysUserInfo = UserInfo
    }
  }
})
