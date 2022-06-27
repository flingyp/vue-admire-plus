<template>
  <!-- tag-button-active -->
  <div
    :class="route.name === routeName ? 'tag-button-active' : ''"
    class="tag-button-box flex items-center justify-between border border-solid border-[var(--el-border-color)] rounded-md px-[8px] py-[5px] text-[14px] ml-[4px] mr-[4px] cursor-pointer"
  >
    <section class="inline-block">
      <IconifyCom :name="icon" width="18" height="18" class="mr-[2px]"></IconifyCom>
      <span>{{ label }}</span>
    </section>
    <section class="inline-block" v-if="route.name !== routeName" @click.stop="deleteHistoryMenu(routeName)">
      <IconifyCom name="clarity:window-close-line" width="18" height="18"></IconifyCom>
    </section>
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
  div.tag-button-box {
    min-height: 30px;
    min-width: 80px;
  }
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
  }
</style>
