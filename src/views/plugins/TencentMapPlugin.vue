<template>
  <div class="!p-0" id="Tencent-Container"></div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  const initMap = () => {
    const { TMap } = window as any
    // 定义map变量，调用 TMap.Map() 构造函数创建地图
    const map = new TMap.Map(document.getElementById('Tencent-Container'), {
      zoom: 12, // 设置地图缩放级别
      pitch: 43.5, // 设置俯仰角
      rotation: 45, // 设置地图旋转角度
      mapStyleId: 'style1' // 可使用样式 style1、style2、style3
    })
  }

  onMounted(() => {
    initMap()
  })
</script>
