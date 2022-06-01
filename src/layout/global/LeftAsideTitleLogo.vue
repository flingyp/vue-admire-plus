<template>
  <el-container class="flex items-center justify-center w-full h-[60px]">
    <img class="w-[2rem]" :src="`${SysStore.SysBaseConfig.logo}`" :alt="SysStore.SysBaseConfig.title" />
    <span class="text-[1rem] ml-2 font-medium" v-show="!SysStore.SysConfig.leftMenuIsCollapsed">{{
      SysStore.SysBaseConfig.title
    }}</span>
  </el-container>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()
</script>
