<template>
  <el-menu
    :mode="mode"
    :default-active="defaultKey"
    :collapse="SysStore.SysConfig.leftMenuIsCollapsed"
    collapse-transition
  >
    <template v-for="item in data" :key="item.key">
      <GlobalSubMenu :menu="item"></GlobalSubMenu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import GlobalSubMenu from './GlobalSubMenu.vue'
  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  interface GlobalMenuProps {
    mode: 'vertical' | 'horizontal'
    defaultKey: string
    data: SysConfig.MenuRecord[]
  }

  const props = defineProps<GlobalMenuProps>()
</script>

<style scoped>
  .el-menu {
    border-right: 0;
    border-bottom: 0;
  }
</style>
