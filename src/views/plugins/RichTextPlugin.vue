<template>
  <div class="w-full">
    <RichTextCom v-model:content="RichTextContent"></RichTextCom>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  import RichTextCom from '@/components/RichTextCom.vue'

  const RichTextContent = ref('')
</script>

<style scoped></style>
