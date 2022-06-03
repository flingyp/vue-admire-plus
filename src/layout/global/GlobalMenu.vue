<template>
  <el-menu
    :mode="mode"
    :default-active="RouteKey"
    :collapse="SysStore.SysConfig.leftMenuIsCollapsed"
    collapse-transition
  >
    <template v-for="item in SysRouteMenuStore.AllMenuRecord" :key="item.key">
      <GlobalSubMenu :menu="item"></GlobalSubMenu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import { UseSysStore } from '@/store/modules/SysStore'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import GlobalSubMenu from './GlobalSubMenu.vue'

  const route = useRoute()
  const SysStore = UseSysStore()
  const SysRouteMenuStore = UseSysRouteMenuStore()

  interface GlobalMenuProps {
    mode: 'vertical' | 'horizontal'
    defaultKey: string
  }

  const props = defineProps<GlobalMenuProps>()

  // 监听路由的变化，更改菜单当前选中值
  const RouteKey = ref(route.name as string)
  watchEffect(() => {
    //  当发现路由跳转了，及时修改页面标题的Title
    const pageTitle = `${route.meta.label} | VPlus Admin` || 'VPlus Admin'
    document.getElementsByTagName('title')[0].innerHTML = `${pageTitle}`
    RouteKey.value = route.name as string
  })
</script>

<style scoped>
  .el-menu {
    border-right: 0;
    border-bottom: 0;
  }
</style>
