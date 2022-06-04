import Layout from '@/layout/LayoutIndex.vue'
import BasicIframe from '@/layout/base/BasicIframe.vue'

const AllFileModules = import.meta.glob('../../views/**/*.vue')

/**
 * 导出views文件夹下的页面模块
 * @param path 页面的绝对路径
 */
const GlobFileModule = (path: string) => {
  // 特殊组件-Layout
  if (path === 'Layout') {
    return Layout
  }

  if (path === 'Iframe') {
    return BasicIframe
  }

  const ComponentAbsolutePath = path.replace('@/', '../../')
  return AllFileModules[ComponentAbsolutePath]
}

export { GlobFileModule }
