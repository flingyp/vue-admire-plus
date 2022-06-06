<template>
  <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title"></GlobalTitleLogo>
  <GlobalMenu mode="vertical" defaultKey="1"></GlobalMenu>
</template>

<script setup lang="ts">
  import GlobalMenu from '../../global/GlobalMenu.vue'
  import GlobalTitleLogo from '../../global/GlobalTitleLogo.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()
</script>
