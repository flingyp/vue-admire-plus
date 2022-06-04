<template>
  <el-container class="flex items-center justify-center w-full h-[60px]">
    <img class="w-[2rem]" :src="getImageUrl('SysLogo.png')" :alt="SysStore.SysBaseConfig.title" />
    <span class="text-[1rem] ml-2 font-medium" v-show="!SysStore.SysConfig.leftMenuIsCollapsed">{{
      SysStore.SysBaseConfig.title
    }}</span>
  </el-container>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'

  import { getImageUrl } from '@/utils/common/AsyncImportImg'

  const SysStore = UseSysStore()
</script>
