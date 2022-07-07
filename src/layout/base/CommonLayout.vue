<template>
  <el-container>
    <!-- 系统布局容器 -->
    <BasicLayoutSlot>
      <template #header>
        <keep-alive>
          <Component :is="CurrentLayoutModeHeader" class="h-full"></Component>
        </keep-alive>
      </template>
      <template #aside>
        <!-- 菜单模式-侧边（左侧菜单模式、顶部混合菜单模式） -->
        <KeepAlive>
          <Component :is="CurrentLayoutModeAside"></Component>
        </KeepAlive>
      </template>
      <template #main>
        <KeepAlive>
          <Component :is="GlobalMainContent"></Component>
        </KeepAlive>
      </template>
    </BasicLayoutSlot>
    <!-- 系统相关配置组件 -->
    <GlobalSysSetting></GlobalSysSetting>
  </el-container>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  // 系统基础布局组件
  import BasicLayoutSlot from './BasicLayoutSlot.vue'

  // 各布局的头部组件
  import LeftMenuHeader from '../mode/leftLayoutMode/LeftMenuHeader.vue'
  import TopMenuHeader from '../mode/topLayoutMode/TopMenuHeader.vue'
  import TopMixMenuHeader from '../mode/topMixLayoutMode/TopMixMenuHeader.vue'

  // 各布局的侧边栏组件
  import LeftMenuAside from '../mode/leftLayoutMode/LeftMenuAside.vue'
  import TopMixMenuAside from '../mode/topMixLayoutMode/TopMixMenuAside.vue'

  // 系统的主内容区域
  import GlobalMainContent from '../global/GlobalMainContent.vue'

  // 系统设置抽屉
  import GlobalSysSetting from '../global/GlobalSysSetting.vue'

  const SysStore = UseSysStore()

  // 渲染当前布局模式的头部栏组件
  const CurrentLayoutModeHeader = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE') {
      return LeftMenuHeader
    }
    if (SysStore.SysConfig.layoutMode === 'TOP_MENU_MODE') {
      return TopMenuHeader
    }
    if (SysStore.SysConfig.layoutMode === 'TOP_MIX_MENU_MODE') {
      return TopMixMenuHeader
    }
    return LeftMenuHeader
  })

  // 渲染当前布局模式的侧边栏组件
  const CurrentLayoutModeAside = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE') {
      return LeftMenuAside
    }
    if (SysStore.SysConfig.layoutMode === 'TOP_MIX_MENU_MODE') {
      return TopMixMenuAside
    }
    return null
  })
</script>

<style scoped></style>
