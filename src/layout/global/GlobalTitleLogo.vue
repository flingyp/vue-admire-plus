<template>
  <div class="flex items-center">
    <img :src="LogoLocalSrc" :alt="SysTitle" class="w-[2rem]" />
    <span class="text-[1rem] font-medium ml-2">{{ SysTitle }}</span>
  </div>
</template>

<script setup lang="ts">
  interface GlobalTitleLogoProps {
    LogoLocalSrc: string
    SysTitle: string
  }

  defineProps<GlobalTitleLogoProps>()
</script>
