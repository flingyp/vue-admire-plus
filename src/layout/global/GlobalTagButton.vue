<template>
  <div
    class="cursor-pointer border border-solid border-[var(--el-border-color)] rounded-md h-full px-[1rem] py-[0.8rem] rounded-md mx-[0.5rem] flex items-center"
    :class="route.name === routeName ? 'tag-button-active' : ''"
  >
    <span class="mr-[0.5rem] cursor-pointer">{{ label }}</span>
    <IconifyCom
      v-if="route.name !== routeName"
      name="clarity:window-close-line"
      width="18"
      height="18"
      @click.stop="deleteHistoryMenu(routeName)"
    ></IconifyCom>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import IconifyCom from '@/components/IconifyCom.vue'

  defineProps<{
    icon: string
    label: string
    routeName: string
  }>()

  const SysRouteMenuStore = UseSysRouteMenuStore()
  const route = useRoute()

  const deleteHistoryMenu = (key: string) => {
    SysRouteMenuStore.deleteHistoryMenu(key)
  }
</script>

<style scoped>
  div.tag-button-box:hover {
    color: var(--el-color-primary);
    border-color: var(--el-color-primary-light-3);
  }

  div.tag-button-box:last-of-type {
    margin-right: 0;
  }

  div.tag-button-active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-7);
    border-color: var(--el-color-primary-light-7);
  }
</style>
