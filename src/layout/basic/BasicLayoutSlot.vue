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
    <el-header v-if="IsTopAndTopMixHeader" class="border-b border-solid border-[var(--el-border-color)]">
      <slot name="header"> 头部栏 </slot>
    </el-header>

    <el-container>
      <!-- 左侧菜单模式-头部栏 -->
      <el-header v-if="IsLeftHeader" class="border-b border-solid border-[var(--el-border-color)]">
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

      <el-main>
        <slot name="main"> 内容部分 </slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const IsLeftMenuAside = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE')
      return true
    return false
  })

  const IsTopAndTopMixHeader = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'TOP_MENU_MODE' || SysStore.SysConfig.layoutMode === 'TOP_MIX_MENU_MODE')
      return true
    return false
  })

  const IsLeftHeader = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE' || SysStore.SysConfig.layoutMode === 'LEFT_MENU_MIX_MODE')
      return true
    return false
  })

  const IsTopMixAside = computed(() => {
    if (SysStore.SysConfig.layoutMode === 'TOP_MIX_MENU_MODE') return true
    return false
  })

  const LeftAsideWidth = computed(() => {
    if (SysStore.SysConfig.leftMenuIsCollapsed) {
      return '64px'
    }
    return '210px'
  })
</script>

<style scoped></style>
