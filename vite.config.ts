import type { UserConfigExport } from 'vite'

import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import WindiCSS from 'vite-plugin-windicss'

import { resolve } from 'path'

/**
 * 如何在Vue3+Vite中使用SVG
 * https://juejin.cn/post/6932037172178616334#heading-3
 * https://github.com/JetBrains/svg-sprite-loader/issues/434
 */
import SvgBuilder from './src/plugins/SvgBuilder'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D

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
    server: {
      host: true,
      cors: true
    },
    plugins: [
      vue(),
      WindiCSS(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        // imports: ['vue'],
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],

        dts: resolve(pathSrc, 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          // 在这里配置 Iconify 图标的前缀
          IconsResolver({
            enabledCollections: []
          }),
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
        ],
        dts: resolve(pathSrc, 'components.d.ts')
      }),
      Icons({
        autoInstall: true
      }),
      SvgBuilder('./src/assets/svg/')
    ]
  }
}
