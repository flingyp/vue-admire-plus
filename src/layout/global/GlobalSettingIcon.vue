<template>
  <GlobalHeaderItemIcon label="ep:setting" @click="openSysSettingDrawer"></GlobalHeaderItemIcon>
</template>

<script setup lang="ts">
  import GlobalHeaderItemIcon from './GlobalHeaderItemIcon.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const openSysSettingDrawer = () => {
    SysStore.SysConfig.isShowSysDrawer = true
  }
</script>
