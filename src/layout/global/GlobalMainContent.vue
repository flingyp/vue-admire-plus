<template>
  <div>
    <el-button @click="changeLayout('LEFT_MENU_MODE')">左侧菜单模式</el-button>
    <el-button @click="changeLayout('TOP_MENU_MODE')">顶部菜单模式</el-button>
    <el-button @click="changeLayout('TOP_MIX_MENU_MODE')">左侧顶部菜单混合模式</el-button>
  </div>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const changeLayout = (value: SysGlobalConfig.SysLayoutMode) => {
    SysStore.setLayoutMode(value)
  }
</script>

<style scoped></style>
