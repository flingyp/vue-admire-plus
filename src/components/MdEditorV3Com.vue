<template>
  <MdEditor v-model="showMdText" :theme="SysStore.SysConfig.themeMode" style="width: 100%; height: 100%"></MdEditor>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import MdEditor from 'md-editor-v3'
  import 'md-editor-v3/lib/style.css'
  import { UseSysStore } from '@/store/modules/SysStore'

  interface MdEditorV3Props {
    text: string
  }

  interface MdEditorV3Emits {
    (e: 'update:text', text: string): void
  }

  const props = withDefaults(defineProps<MdEditorV3Props>(), {
    text: '# Hello md-editor-v33'
  })

  const emits = defineEmits<MdEditorV3Emits>()

  const SysStore = UseSysStore()

  /**
   * 这里传递的是一个计算属性 <MdEditor v-model="showMdText"></MdEditor>
   * https://cxymm.net/article/sigmarising/120704908
   * 嵌套 v-model 解决 Unexpected mutation of “XXX” prop vue/no-mutating-props
   */
  const showMdText = computed({
    get: () => props.text,
    set: (value: string) => {
      emits('update:text', value)
    }
  })
</script>
