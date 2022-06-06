<template>
  <GlobalHeaderItemIcon v-if="!isFullscreen" @click="toggle" label="gridicons-fullscreen"></GlobalHeaderItemIcon>
  <GlobalHeaderItemIcon v-else @click="toggle" label="gridicons-fullscreen-exit"></GlobalHeaderItemIcon>
</template>

<script setup lang="ts">
  import { useFullscreen } from '@vueuse/core'

  import GlobalHeaderItemIcon from './GlobalHeaderItemIcon.vue'

  const { isFullscreen, toggle } = useFullscreen()
</script>
