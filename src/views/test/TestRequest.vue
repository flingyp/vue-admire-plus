<template>
  <div>请求测试</div>
</template>

<script setup lang="ts">
  import $request from '@/utils/https'

  const data = await $request.YPlusRequest<{
    name: string
    version: string
  }>({
    method: 'get',
    url: '/api/get'
  })
  console.log(data.name)
  console.log(data.version)
</script>
