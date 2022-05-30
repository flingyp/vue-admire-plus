import type { UserConfigExport } from 'vite'

import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import WindiCSS from 'vite-plugin-windicss'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

const pathSrc = resolve(__dirname, 'src')

export default (config: UserConfigExport): UserConfigExport => {
  return {
    base: './',
    // 配置别名
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      WindiCSS(),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],

        dts: resolve(pathSrc, 'auto-imports.d.ts')
      }),

      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          // 在这里配置 Iconify 图标的前缀
          IconsResolver({
            enabledCollections: []
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
        ],

        dts: resolve(pathSrc, 'components.d.ts')
      }),

      Icons({
        autoInstall: true
      })
    ]
  }
}
