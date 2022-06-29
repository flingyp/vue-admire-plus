<template>
  <suspense>
    <router-view class="w-screen h-screen max-w-screen max-h-screen overflow-hidden"></router-view>
  </suspense>
</template>

<script setup lang="ts">
  import { watchEffect } from 'vue'
  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  // 系统相关内容初始化
  watchEffect(() => {
    // 主题色修改动态监听
    SysStore.setThemeColor(SysStore.SysConfig.themeColor)
  })
</script>
