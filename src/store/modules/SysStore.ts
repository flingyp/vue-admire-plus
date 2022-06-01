import { defineStore } from 'pinia'

import { SysBaseConfig } from '../../SysGlobalConfig'

interface SysStoreState {
  SysBaseConfig: SysGlobalConfig.SysBaseConfig
}

export const UseSysStore = defineStore('SysStore', {
  state(): SysStoreState {
    return {
      SysBaseConfig
    }
  }
})
