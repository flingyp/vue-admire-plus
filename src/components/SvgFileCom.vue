<template>
  <svg :class="SvgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="IconName" />
  </svg>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface SvgFileComProps {
    name: string
    color?: string
  }

  const props = withDefaults(defineProps<SvgFileComProps>(), {
    color: ''
  })

  const IconName = computed(() => `#icon-${props.name}`)
  const SvgClass = computed(() => {
    if (props.name) {
      return `svg-icon icon-${props.name}`
    }
    return 'svg-icon'
  })
</script>

<style scoped>
  .svg-icon {
    fill: currentColor;
    vertical-align: middle;
  }
</style>
