<template>
  <Icon
    :icon="name"
    :inline="isInline"
    :width="width"
    :height="height"
    :color="color"
    class="!align-text-bottom"
  ></Icon>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'

  interface IconifyComProps {
    name: string
    isInline?: boolean
    width?: string | number
    height?: string | number
    color?: string
  }

  withDefaults(defineProps<IconifyComProps>(), {
    isInline: true,
    width: 50,
    height: 50
  })

  // TODO: 系统中使用Iconify图标过多时，首次进入系统可能会出现图标不能及时渲染，这里 @load="iconLoad" 回调应该可以解决这个问题，待研究...
  //   const iconLoad = () => {
  //     console.log('icon loading')
  //   }
</script>

<style scoped></style>
