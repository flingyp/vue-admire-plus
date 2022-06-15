<template>
  <div class="mb-[1.2rem]">
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
