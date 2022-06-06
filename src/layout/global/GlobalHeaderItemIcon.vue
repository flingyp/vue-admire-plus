<template>
  <div class="w-[2.5rem] h-full cursor-pointer text-center inline-flex justify-center items-center">
    <IconifyCom :name="label" :width="16"></IconifyCom>
  </div>
</template>

<script setup lang="ts">
  /**
   * 头部图标基础组件
   */

  import IconifyCom from '@/components/IconifyCom.vue'

  interface GlobalHeaderItemIconProps {
    label: string
  }

  defineProps<GlobalHeaderItemIconProps>()
</script>
