<template>
  <!-- 菜单标签页记录 -->
  <GlobalTagPageRecord></GlobalTagPageRecord>
  <!-- TODO: 动态配置动画效果 -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" :key="route.path" class="h-full max-h-full overflow-x-hidden"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
  import GlobalTagPageRecord from './GlobalTagPageRecord.vue'
</script>
