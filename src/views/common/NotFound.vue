<template>
  <el-result title="404" sub-title="页面不存在">
    <template #icon>
      <SvgFileCom name="not-found" class="min-w-[400px] !h-[400px]" color="var(--el-color-primary)"></SvgFileCom>
    </template>
    <template #extra>
      <el-button type="primary" @click="router.push({ name: 'AboutIndex' })">回到首页</el-button>
    </template>
  </el-result>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  import SvgFileCom from '@/components/SvgFileCom.vue'

  const router = useRouter()
</script>
