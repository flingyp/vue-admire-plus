<template>
  <div
    :ref="
      el => {
        // @ts-ignore
        chartRef = el
      }
    "
    class="inline-block m-[1rem]"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  import { echartInstance, ECOption } from '@/utils/echarts'

  import { UseSysStore } from '@/store/modules/SysStore'

  // eslint-disable-next-line vue/no-setup-props-destructure
  const { width, height, echartOption } = defineProps<{
    echartOption: ECOption
    width: number
    height: number
  }>()

  const chartRef = ref<Element>()

  let chartInstance: echartInstance.ECharts | null = null

  const SysStore = UseSysStore()

  function initChart(theme = 'default') {
    return echartInstance.init(chartRef.value as HTMLElement, theme === 'light' ? 'default' : 'dark')
  }

  function mountedChart() {
    if (chartInstance) {
      chartInstance.dispose()
    }

    chartInstance = initChart(SysStore.SysConfig.themeMode)

    // 修改图表背景色统一为透明（深色模式的默认背景色与系统的背景色不搭）
    const chartOption = echartOption
    chartOption.backgroundColor = 'transparent'

    chartInstance.setOption(chartOption)
  }

  function chartResize() {
    if (chartInstance) {
      chartInstance.resize()
    }
  }

  watchEffect(() => {
    if (chartRef.value) {
      mountedChart()
    }
  })

  window.addEventListener('resize', () => {
    chartResize()
  })
</script>
