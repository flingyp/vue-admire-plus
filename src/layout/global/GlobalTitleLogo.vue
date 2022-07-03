<template>
  <div
    v-if="SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE'"
    class="flex justify-center items-center w-full h-[60px]"
  >
    <img :src="getImageUrl('SysLogo.png')" :alt="SysTitle" class="w-[2rem]" />
    <span
      v-show="!SysStore.SysConfig.leftMenuIsCollapsed"
      class="text-[1.1rem] ml-2 font-bold text-[var(--el-color-primary)]"
      >{{ SysTitle }}</span
    >
  </div>

  <div v-else class="flex items-center h-full">
    <img :src="getImageUrl('SysLogo.png')" :alt="SysTitle" class="w-[2rem]" />
    <span class="text-[1.1rem] ml-2 font-bold text-[var(--el-color-primary)]">{{ SysTitle }}</span>
  </div>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'
  import { getImageUrl } from '@/utils/common/AsyncImportImg'

  const SysStore = UseSysStore()

  interface GlobalTitleLogoProps {
    SysTitle: string
  }

  defineProps<GlobalTitleLogoProps>()
</script>
