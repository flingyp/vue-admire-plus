<template>
  <!-- 单一菜单 -->
  <template v-if="!menu.children || menu.children.length === 0">
    <el-menu-item :index="menu.key" @click="clickLinkMenuItem">
      <el-icon :size="20">
        <IconifyCom :name="menu.icon"></IconifyCom>
      </el-icon>
      <span>{{ menu.label }}</span>
    </el-menu-item>
  </template>
  <!-- 多菜单 -->
  <template v-else>
    <el-sub-menu :index="menu.key">
      <template #title>
        <el-icon :size="20">
          <IconifyCom :name="menu.icon"></IconifyCom>
        </el-icon>
        <span>{{ menu.label }}</span>
      </template>
      <template v-for="item in menu.children" :key="item.key">
        <GlobalSubMenu :menu="item"></GlobalSubMenu>
      </template>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  import type { SysRouterMenu } from 'types/SysRouterMenu'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import IconifyCom from '@/components/IconifyCom.vue'

  const SysRouteMenuStore = UseSysRouteMenuStore()
  const router = useRouter()

  defineProps<{
    menu: SysRouterMenu.MenuRecord
  }>()

  // 点击对应链接跳转
  const clickLinkMenuItem = (RouterName: any) => {
    const CurrentRoute = SysRouteMenuStore.AllRouteCollect.find(route => {
      return route.name === RouterName.index
    })
    if (CurrentRoute?.meta?.link === 'EXTERNAL_LINK') {
      // 外链跳转
      window.open(CurrentRoute.meta.url)
    } else {
      // 路由发生变换，添加Tab历史路由
      // SysRouteMenuStore.addHistoryMenu(RouterName.index)
      router.push({ name: RouterName.index })
    }
  }
</script>

<style scoped>
  /* .el-menu-item.is-active {
    background: var(--el-color-primary); 
    color: #ffffff;
  } */
</style>
