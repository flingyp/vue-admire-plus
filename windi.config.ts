import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // 启用类模式来切换暗黑主题
  darkMode: 'class',
  // 写HTML属性编写windicss类
  attributify: {
    prefix: 'w:'
  }
})
