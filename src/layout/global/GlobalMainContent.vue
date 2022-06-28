<template>
  <!-- 菜单标签页记录 -->
  <GlobalTagPageRecord></GlobalTagPageRecord>
  <!-- TODO: 动态配置动画效果 -->
  <router-view v-slot="{ Component, route }" v-if="!SysStore.SysConfig.isNeedReload">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" :key="route.path" class="overflow-x-hidden h-[calc(100%-46px)] p-[1rem]"></component>
    </transition>
  </router-view>
  <!-- 重新加载中...... -->
  <el-container
    v-else
    v-loading="PageLoading"
    element-loading-text="重新加载中......"
    class="w-full h-[calc(100%-46px)]"
  ></el-container>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { UseSysStore } from '@/store/modules/SysStore'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import GlobalTagPageRecord from './GlobalTagPageRecord.vue'

  const route = useRoute()
  const router = useRouter()
  const SysStore = UseSysStore()
  const SysRouteMenuStore = UseSysRouteMenuStore()

  const PageLoading = ref(true)

  // 监听路由的变化
  watchEffect(() => {
    // 如果不是关闭当前页面，则需要添加历史菜单（不做该判断，会出现无论如何都删除不了当前页面问题）
    if (!SysRouteMenuStore.IsDeleteCurrentRouteMenu) {
      SysRouteMenuStore.addHistoryMenu(route.name as string)
    } else {
      // 如果是关闭当前页面，则不需要添加历史菜单 （监听路由的变化会影响到历史菜单的增加删除，需要注意此问题）
      const DeleteHistoryMenuIndex = SysRouteMenuStore.AllHistoryMenu.findIndex(menu => {
        return menu.key === route.name
      })
      let NativeName: string
      // 代表删除的是最后一个
      if (DeleteHistoryMenuIndex + 1 === SysRouteMenuStore.AllHistoryMenu.length) {
        NativeName = SysRouteMenuStore.AllHistoryMenu[DeleteHistoryMenuIndex - 1].key
      } else {
        NativeName = SysRouteMenuStore.AllHistoryMenu[DeleteHistoryMenuIndex + 1].key
      }
      SysRouteMenuStore.deleteHistoryMenu(route.name as string)
      SysRouteMenuStore.IsDeleteCurrentRouteMenu = false
      router.push({ name: NativeName })
    }
  })
</script>
