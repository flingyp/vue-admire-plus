<template>
  <CommonLayout></CommonLayout>
</template>

<script setup lang="ts">
  import CommonLayout from './basic/CommonLayout.vue'

  import LeftMenuLayoutMode from './mode/LeftMenuLayoutMode.vue'
  import TopMenuLayoutMode from './mode/TopMenuLayoutMode.vue'
  import TopMixMenuLayoutMode from './mode/TopMixMenuLayoutMode.vue'

  import basicSlot from './basic/basicSlot.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  import LeftAsideTitleLogo from './global/LeftAsideTitleLogo.vue'
  import GlobalVerticalMenu from './global/GlobalVerticalMenu.vue'

  const SysStore = UseSysStore()
</script>

<style scoped></style>
