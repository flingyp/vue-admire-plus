<template>
  <el-container>
    <!-- 左侧菜单模式-侧边栏 -->
    <el-aside
      v-if="IsLeftMenuAside"
      :width="LeftAsideWidth"
      class="h-full border-r border-solid border-[var(--el-border-color)]"
    >
      <slot name="aside"> 侧边栏 </slot>
    </el-aside>

    <!-- 顶部左侧菜单混合模式、顶部菜单模式-头部栏 -->
    <el-header
      v-if="IsTopAndTopMixHeader"
      class="border-b border-solid border-[var(--el-border-color)] overflow-hidden"
      :style="{ height: SysStore.SysConfig.customHeaderHeight + 'px' }"
    >
      <slot name="header"> 头部栏 </slot>
    </el-header>

    <el-container>
      <!-- 左侧菜单模式-头部栏 -->
      <el-header
        v-if="IsLeftHeader"
        class="border-b border-solid border-[var(--el-border-color)] overflow-hidden"
        :style="{ height: SysStore.SysConfig.customHeaderHeight + 'px' }"
      >
        <slot name="header"> 头部栏 </slot>
      </el-header>

      <!-- 顶部左侧菜单混合模式-侧边栏 -->
      <el-aside
        v-if="IsTopMixAside"
        :width="LeftAsideWidth"
        class="h-full border-r border-solid border-[var(--el-border-color)]"
      >
        <slot name="aside"> 侧边栏 </slot>
      </el-aside>

      <!-- 所有布局模式-公共部分 -->
      <el-main :style="{ height: SysStore.mainHeight }" class="overflow-y-hidden">
        <slot name="main"> 内容部分 </slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  // 判断是否是左侧菜单布局 - （左侧菜单）
  const IsLeftMenuAside = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE')
      return true
    return false
  })

  // 判断是否是顶部菜单布局  - （顶部头部）
  const IsTopAndTopMixHeader = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'TOP_MENU_MODE' || SysStore.SysConfig.layoutMode === 'TOP_MIX_MENU_MODE')
      return true
    return false
  })

  // 判断是否是左侧菜单布局 -（左侧头部）
  const IsLeftHeader = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE')
      return true
    return false
  })

  // 判断是不是顶部混合布局模式 - （顶部混合布局-左侧菜单）
  const IsTopMixAside = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'TOP_MIX_MENU_MODE') return true
    return false
  })

  // 控制左侧菜单收缩宽度
  const LeftAsideWidth = computed(() => {
    if (SysStore.SysConfig.leftMenuIsCollapsed) {
      return '64px'
    }
    return '210px'
  })
</script>

<style scoped>
  .el-container {
    height: 100%;
  }
  .el-main {
    padding: 0;
    max-width: 100vw;
    overflow-x: hidden;
    /* background-color: var(--el-bg-color-page); */
  }
  .el-header {
    padding-left: 0;
    padding-right: 0;
  }
  .el-aside {
    transition: all 0.3s;
  }
</style>
