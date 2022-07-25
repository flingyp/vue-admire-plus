<template>
  <div>
    <videoPlay
      v-bind="options"
      poster="https://mixkit.imgix.net/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-0.jpg?q=80&auto=format%2Ccompress&w=460"
    />
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import videoPlay from 'vue3-video-play'
  import 'vue3-video-play/dist/style.css'

  const options = reactive({
    width: '800px', // 播放器高度
    height: '450px', // 播放器高度
    color: '#409eff', // 主题色
    title: '', // 视频名称
    src: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4', // 视频源
    muted: false, // 静音
    webFullScreen: false,
    speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], // 播放倍速
    autoPlay: false, // 自动播放
    loop: false, // 循环播放
    mirror: false, // 镜像画面
    ligthOff: false, // 关灯模式
    volume: 0.3, // 默认音量大小
    control: true, // 是否显示控制
    controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] // 显示所有按钮,
  })
</script>

<style scoped></style>
