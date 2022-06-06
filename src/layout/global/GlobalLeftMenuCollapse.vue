<template>
  <GlobalHeaderItemIcon
    v-if="SysStore.SysConfig.leftMenuIsCollapsed"
    label="mdi-light:format-indent-increase"
    @click="setMenuIsCollapsed(false)"
  ></GlobalHeaderItemIcon>
  <GlobalHeaderItemIcon
    v-else
    label="mdi-light:format-indent-decrease"
    @click="setMenuIsCollapsed(true)"
  ></GlobalHeaderItemIcon>
</template>

<script setup lang="ts">
  /**
   * 控制左侧菜单收缩按钮组件
   */

  import GlobalHeaderItemIcon from './GlobalHeaderItemIcon.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const setMenuIsCollapsed = (value: boolean) => {
    SysStore.setLeftMenuIsCollapsed(value)
  }
</script>
