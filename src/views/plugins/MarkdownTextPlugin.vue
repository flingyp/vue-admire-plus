<template>
  <div>
    <MdEditorV3Com v-model:text="markdownText"></MdEditorV3Com>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import MdEditorV3Com from '@/components/MdEditorV3Com.vue'

  const markdownText = ref('# md-editor-v3编辑器')
</script>
