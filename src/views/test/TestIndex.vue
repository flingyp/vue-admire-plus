<template>
  <IconifyCom name="openmoji:apple"></IconifyCom>
  <IconifyCom name="openmoji:aquarius"></IconifyCom>
  <IconifyCom name="ep-add-location"></IconifyCom>
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <el-icon><AddLocation /></el-icon>
  <Share style="width: 1em; height: 1em; margin-right: 8px" />
  <el-icon><ArrowLeft /></el-icon>
  <SvgFileCom name="learning-sketching" color="#6c63ff"></SvgFileCom>
  <SvgFileCom name="login-sys-symbol"></SvgFileCom>
</template>

<script setup lang="ts">
  import { AddLocation, Edit, Share, ArrowLeft } from '@element-plus/icons-vue'
  import IconifyCom from '@/components/IconifyCom.vue'
  import SvgFileCom from '@/components/SvgFileCom.vue'
</script>
