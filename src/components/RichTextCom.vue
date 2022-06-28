<template>
  <Toolbar style="border-bottom: 1px solid #eee" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
  <Editor
    class="w-full h-full"
    v-model="valueHtml"
    :defaultConfig="editorConfig"
    :mode="mode"
    @onCreated="handleCreated"
    @onChange="handleChange"
  />
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, ref, shallowRef } from 'vue'
  import { IToolbarConfig, IEditorConfig, IDomEditor } from '@wangeditor/editor'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

  interface RichTextProps {
    placeholder?: string
    mode?: 'default' | 'simple'
    content: string
  }

  interface RichTextEmits {
    (e: 'update:content', content: string): void
  }

  const props = withDefaults(defineProps<RichTextProps>(), {
    placeholder: '上传图片、上传视频没有做配置，请参考wangEditor进行配置',
    mode: 'default',
    content: ''
  })

  const emits = defineEmits<RichTextEmits>()

  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef()

  // 编辑器内容（HTML格式）
  const valueHtml = ref('')

  // 编辑器创建完毕时的回调函数
  const handleCreated = (editor: IDomEditor) => {
    // 记录 editor 实例，重要！
    editorRef.value = editor
  }

  // 编辑器内容、选区变化时的回调函数
  const handleChange = (editor: IDomEditor) => {
    emits('update:content', valueHtml.value)
  }

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = { placeholder: props.placeholder, autoFocus: false }

  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
  })
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
