<template>
  <el-container class="flex items-center justify-start h-full">
    <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title"></GlobalTitleLogo>

    <LeftMenuCollapse></LeftMenuCollapse>
  </el-container>
</template>

<script setup lang="ts">
  import GlobalTitleLogo from '@/layout/global/GlobalTitleLogo.vue'
  import LeftMenuCollapse from '@/layout/global/LeftMenuCollapse.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()
</script>
