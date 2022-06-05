<template>
  <div class="flex items-center">
    <img :src="getImageUrl('SysLogo.png')" :alt="SysTitle" class="w-[2rem]" />
    <span class="text-[1rem] font-medium ml-2">{{ SysTitle }}</span>
  </div>
</template>

<script setup lang="ts">
  import { getImageUrl } from '@/utils/common/AsyncImportImg'

  interface GlobalTitleLogoProps {
    SysTitle: string
  }

  defineProps<GlobalTitleLogoProps>()
</script>
