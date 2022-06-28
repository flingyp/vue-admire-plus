<template>
  <iframe :src="route.meta.url" :name="String(route.name)" class="w-full max-w-full !p-[0]"></iframe>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>
