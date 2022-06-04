<template>
  <iframe :src="route.meta.url" :name="String(route.name)" class="w-full max-w-full"></iframe>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>
