<template>
  <div
    v-if="SysStore.SysConfig.leftMenuIsCollapsed"
    class="w-[3rem] h-full flex items-center justify-center cursor-pointer"
    @click="setMenuIsCollapsed(false)"
  >
    <IconifyCom name="mdi-light:format-indent-increase" width="20" height="20"></IconifyCom>
  </div>
  <div v-else class="w-[3rem] h-full flex items-center justify-center cursor-pointer" @click="setMenuIsCollapsed(true)">
    <IconifyCom name="mdi-light:format-indent-decrease" width="20" height="20"></IconifyCom>
  </div>
</template>

<script setup lang="ts">
  import IconifyCom from '@/components/IconifyCom.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const setMenuIsCollapsed = (value: boolean) => {
    SysStore.setLeftMenuIsCollapsed(value)
  }
</script>
