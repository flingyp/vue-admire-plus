<template>
  <div
    :style="{ height: SysStore.SysConfig.customTagHeight + 'px' }"
    class="w-full bg-[var(--el-bg-color)] text-[var(--el-text-color-primary)] border-b border-solid border-[var(--el-border-color)] flex justify-between items-center"
  >
    <div
      class="tag-buttons-box h-full flex-[1] flex items-center justify-start overflow-x-auto whitespace-nowrap overflow-y-hidden py-[6px]"
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
    <div class="h-full flex items-center mx-[15px]">
      <el-dropdown @command="clickDropDownItem">
        <IconifyCom class="cursor-pointer" name="carbon:down-to-bottom" width="20" height="20"></IconifyCom>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="reload">重新加载</el-dropdown-item>
            <el-dropdown-item command="close-current" :disabled="SysRouteMenuStore.AllHistoryMenu.length === 1"
              >关闭当前页</el-dropdown-item
            >
            <el-dropdown-item command="close-others" :disabled="SysRouteMenuStore.AllHistoryMenu.length <= 1"
              >关闭其它页</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { UseSysStore } from '@/store/modules/SysStore'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import IconifyCom from '@/components/IconifyCom.vue'
  import GlobalTagButton from './GlobalTagButton.vue'

  const route = useRoute()
  const router = useRouter()
  const SysStore = UseSysStore()
  const SysRouteMenuStore = UseSysRouteMenuStore()

  const nativeToRoute = (value: string) => {
    router.push({ name: value })
  }

  const clickDropDownItem = (command: string) => {
    if (command === 'reload') {
      SysStore.setIsNeedReload(true)
      setTimeout(() => {
        SysStore.setIsNeedReload(false)
      }, 2500)
    }
    if (command === 'close-current') {
      SysRouteMenuStore.IsDeleteCurrentRouteMenu = true
    }
    if (command === 'close-others') {
      const CurrentHistoryMenu = SysRouteMenuStore.AllHistoryMenu.find(menu => {
        return menu.key === route.name
      })
      if (CurrentHistoryMenu) {
        SysRouteMenuStore.AllHistoryMenuRecord = [CurrentHistoryMenu.key]
      }
    }
  }
</script>

<style scoped>
  /* // 滚动条宽度 */
  div::-webkit-scrollbar {
    height: 5px;
  }
  /* // 滚动条轨道 */
  /* div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  } */
  /* // 小滑块 */
  div::-webkit-scrollbar-thumb {
    background: var(--el-color-primary-light-9);
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: var(--el-color-primary);
  }
</style>
