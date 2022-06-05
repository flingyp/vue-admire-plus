<template>
  <div class="setting-item">
    <el-divider>{{ label }}</el-divider>
    <slot> 默认内容 </slot>
  </div>
</template>

<script setup lang="ts">
  interface GlobalSettingItemProps {
    label: string
  }

  withDefaults(defineProps<GlobalSettingItemProps>(), {
    label: '默认标签'
  })
</script>

<style scoped>
  .setting-item:not(:last-child) {
    margin-bottom: 3rem;
  }
</style>
