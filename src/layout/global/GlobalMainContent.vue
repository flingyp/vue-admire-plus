<template>
  <!-- <div>
    <el-button @click="changeLayout('LEFT_MENU_MODE')">左侧菜单模式</el-button>
    <el-button @click="changeLayout('TOP_MENU_MODE')">顶部菜单模式</el-button>
    <el-button @click="changeLayout('TOP_MIX_MENU_MODE')">左侧顶部菜单混合模式</el-button>
  </div> -->

  <!-- TODO: 动态配置动画效果 -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" :key="route.path" class="h-full max-h-full overflow-x-hidden"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const changeLayout = (value: SysBasicConfig.SysLayoutMode) => {
    SysStore.setLayoutMode(value)
  }
</script>

<style scoped></style>
