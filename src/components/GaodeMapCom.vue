<template>
  <div id="GaoDe-Container" class="w-full h-full m-0 p-0"></div>
</template>

<script setup lang="ts">
  import AMapLoader from '@amap/amap-jsapi-loader'
  import { shallowRef, onMounted } from 'vue'
  import '@amap/amap-jsapi-types'

  type MapStyleCollection =
    | 'normal'
    | 'macaron'
    | 'graffiti'
    | 'whitesmoke'
    | 'dark'
    | 'fresh'
    | 'darkblue'
    | 'blue'
    | 'light'
    | 'grey'
  type MapStyleType = `amap://styles/${MapStyleCollection}`

  // eslint-disable-next-line no-undef
  interface MapOptions extends AMap.MapOptions {
    mapStyle: MapStyleType
  }

  const GaodeMap = shallowRef()

  const initMap = async () => {
    const AMap = await AMapLoader.load({
      // TODO: 需要隐藏KEY
      key: '601078ac96aca51f00997aee8d495a49', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })

    const _MapOptions: MapOptions = {
      viewMode: '3D', // 是否为3D地图模式
      zoom: 12,
      mapStyle: 'amap://styles/blue' // 自定义地图样式（高德地图提供给了多种不同样式的地图）
    }

    // 设置地图容器id
    GaodeMap.value = new AMap.Map('GaoDe-Container', _MapOptions)

    // 添加一些基础控件
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType'], () => {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      GaodeMap.value.addControl(new AMap.ToolBar())

      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      GaodeMap.value.addControl(new AMap.Scale())

      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      GaodeMap.value.addControl(new AMap.HawkEye({ isOpen: true }))

      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      GaodeMap.value.addControl(new AMap.MapType())
    })
  }

  onMounted(() => {
    initMap()
  })
</script>

<style>
  .amap-ctrl-list-layer {
    color: var(--el-text-color-primary);
    background: var(--el-bg-color);
  }
</style>
