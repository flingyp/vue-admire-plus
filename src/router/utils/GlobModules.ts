import Layout from '@/layout/LayoutIndex.vue'
import BasicIframe from '@/layout/base/BasicIframe.vue'

const AllFileModules = import.meta.glob('../../views/**/*.vue')

/**
 * 导出views文件夹下的页面模块
 * @param path 页面的绝对路径
 */
const GlobFileModule = (path: string) => {
  let ModulePath = path

  // 检查 component 的字符串格式 具体问题查看 SysRouterMenu.d.ts 文件 component
  const TestPathFormat = /^@views\/.+$/
  if (TestPathFormat.test(ModulePath)) {
    ModulePath = ModulePath.replace(/@views/, '@/views')
  }

  // 特殊组件-Layout
  if (ModulePath === 'Layout') {
    return Layout
  }
  // 特殊组件-Iframe
  if (ModulePath === 'Iframe') {
    return BasicIframe
  }

  const ComponentAbsolutePath = ModulePath.replace('@/', '../../')
  return AllFileModules[ComponentAbsolutePath]
}

export { GlobFileModule }
