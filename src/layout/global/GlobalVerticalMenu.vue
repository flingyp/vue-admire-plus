<template>
  <el-menu
    mode="vertical"
    default-active="1-3-2"
    class="w-full h-[calc(100vh-60px)] border-0 overflow-x-hidden"
    collapse-transition
    :collapse="SysStore.SysConfig.leftMenuIsCollapsed"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统管理</span></template
      >
      <el-menu-item index="1-1">
        <el-icon><location /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="1-2">
        <el-icon><location /></el-icon>
        <span>角色管理</span>
      </el-menu-item>

      <el-sub-menu index="1-3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>多级菜单</span></template
        >
        <el-menu-item index="1-3-1">
          <el-icon><setting /></el-icon>
          <span>一级菜单</span>
        </el-menu-item>
        <el-menu-item index="1-3-2">
          <el-icon><setting /></el-icon>
          <span>二级菜单</span>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>单独一个的菜单</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>禁用的菜单</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
  import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()
</script>

<style scoped></style>
