<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="(item, index) in BreadMenuData" :key="index">
      <div class="flex items-center">
        <IconifyCom :name="item.icon" width="20" height="20"></IconifyCom>
        <span class="ml-[5px]"> {{ item.label }} </span>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import type { SysRouterMenu } from 'types/SysRouterMenu'
  import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

  import IconifyCom from '@/components/IconifyCom.vue'

  const route = useRoute()
  const SysRouteMenuStore = UseSysRouteMenuStore()

  /**
   *  判断菜单以及children是否包含 RouteName当前路由
   *  @param RouteName：当前路由名称
   *  @param Menu： 一个菜单
   */
  const isExistMenuByRouteName = (RouteName: string, Menu: SysRouterMenu.MenuRecord): boolean => {
    if (Menu.children && Menu.children.length !== 0) {
      return Menu.children.some(item => {
        return isExistMenuByRouteName(RouteName, item)
      })
    }
    if (Menu.key === RouteName) {
      return true
    }
    return false
  }

  /**
   * 生成面包屑导航数据
   */
  const generate = (RouteName: string, MaxMenu: SysRouterMenu.MenuRecord) => {
    const BreadRecord: SysRouterMenu.MenuRecord[] = []
    BreadRecord.push(MaxMenu)

    const getTheseMenusByKey = (Menu: SysRouterMenu.MenuRecord) => {
      if (Menu.children && Menu.children.length !== 0) {
        Menu.children.forEach(item => {
          if (isExistMenuByRouteName(route.name as string, item)) {
            BreadRecord.push(item)
            getTheseMenusByKey(item)
          }
        })
      }
    }

    getTheseMenusByKey(MaxMenu)
    return BreadRecord
  }

  /**
   * 创建面包屑导航数据
   * 思路：根据所有菜单先找到最父级的菜单，在查找最父级菜单里的菜单同样思路筛选出包含当前路由的父级菜单 push 到数组里，逐级进去知道查找当前路由菜单本身
   */
  const createBreadMenuData = () => {
    let MaxMenu: SysRouterMenu.MenuRecord = {
      label: '',
      icon: '',
      key: ''
    }
    // 找到当前菜单的最父级的菜单（缩小范围）
    SysRouteMenuStore.AllMenuRecord.forEach((TheMaxMenu, index) => {
      const IsInclude = isExistMenuByRouteName(route.name as string, TheMaxMenu)
      if (IsInclude) {
        MaxMenu = TheMaxMenu
      }
    })

    return generate(route.name as string, MaxMenu)
  }

  // 监听路由的变化，更改面包屑
  const RouteKey = ref(route.name as string)
  const BreadMenuData = ref<SysRouterMenu.MenuRecord[]>([])
  watchEffect(() => {
    RouteKey.value = route.name as string
    BreadMenuData.value = createBreadMenuData()
  })
</script>
