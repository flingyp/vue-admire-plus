<template>
  <div>
    <IconifyCom name="openmoji:apple"></IconifyCom>
    <IconifyCom name="openmoji:aquarius"></IconifyCom>
    <IconifyCom name="ep-add-location"></IconifyCom>
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <el-icon><AddLocation /></el-icon>
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <el-icon><ArrowLeft /></el-icon>
    <SvgFileCom name="learning-sketching" color="#6c63ff"></SvgFileCom>
    <SvgFileCom name="login-sys-symbol"></SvgFileCom>
    <div class="text-red-400 dark:text-green-400">测试Windi CSS 暗黑模式</div>
    <el-button type="primary" @click="openDrawer">系统配置抽屉</el-button>
  </div>
</template>

<script setup lang="ts">
  import { AddLocation, Edit, Share, ArrowLeft } from '@element-plus/icons-vue'
  import IconifyCom from '@/components/IconifyCom.vue'
  import SvgFileCom from '@/components/SvgFileCom.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

  const openDrawer = () => {
    SysStore.SysConfig.isShowSysDrawer = !SysStore.getIsShowSysDrawerValue
  }
</script>
