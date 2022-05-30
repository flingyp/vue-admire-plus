<template>
  <div>{{ SysGlobalConfig.title }}</div>
  <IconifyCom name="openmoji:apple"></IconifyCom>
  <IconifyCom name="openmoji:aquarius"></IconifyCom>
  <IconifyCom name="ep-add-location"></IconifyCom>
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <el-icon><AddLocation /></el-icon>
  <Share style="width: 1em; height: 1em; margin-right: 8px" />
  <el-icon><ArrowLeft /></el-icon>
</template>

<script setup lang="ts">
  import { AddLocation, Share, ArrowLeft } from '@element-plus/icons-vue'
  import SysGlobalConfig from './SysGlobalConfig'
  import IconifyCom from '@/components/IconifyCom.vue'
</script>
