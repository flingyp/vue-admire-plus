<template>
  <div
    class="w-full h-[46px] bg-[var(--el-bg-color)] text-[var(--el-text-color-primary)] border-b border-solid border-[var(--el-border-color)] flex justify-between items-center"
  >
    <div
      class="tag-buttons-box h-full flex-1 flex items-center justify-start mr-[10px] overflow-x-scroll overflow-y-hidden"
    >
      <GlobalTagButton
        v-for="item in SysRouteMenuStore.AllHistoryMenu"
        :key="item.key"
        :icon="item.icon"
        :label="item.label"
        :routeName="item.key"
        @click="nativeToRoute(item.key)"
      ></GlobalTagButton>
    </div>
    <div class="w-[100px] h-full">右边</div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import GlobalTagButton from './GlobalTagButton.vue'

  const SysRouteMenuStore = UseSysRouteMenuStore()
  const router = useRouter()

  const nativeToRoute = (value: string) => {
    router.push({ name: value })
  }
</script>

<style scoped>
  /* // 滚动条宽度 */
  div::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }
  /* // 滚动条轨道 */
  /* div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  } */
  /* // 小滑块 */
  div::-webkit-scrollbar-thumb {
    background: var(--el-color-primary-light-7);
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: var(--el-color-primary-light-3);
  }
</style>
