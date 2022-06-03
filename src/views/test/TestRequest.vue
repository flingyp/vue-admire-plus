<template>
  <div>请求测试</div>
</template>

<script setup lang="ts">
  import $request from '@/utils/https'

  const data1 = await $request.YPlusRequest<{
    name: string
    version: string
  }>({
    method: 'get',
    url: '/api/get'
  })
  console.log(data1.name)
  console.log(data1.version)

  const data2 = await $request.YPlusRequest<{
    name: string
    version: string
  }>({
    method: 'post',
    url: '/api/post',
    isLoading: true
  })
  console.log(data2.name)
  console.log(data2.version)
</script>
