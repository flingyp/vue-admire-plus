import type { SysRouterMenu } from 'types/SysRouterMenu'

const ConstantRoutes: SysRouterMenu.VAdmireRoute[] = [
  {
    path: '/',
    name: 'Index',
    redirect: '/about',
    meta: {
      label: '首页',
      isShow: false
    }
  },
  {
    path: '/404',
    name: 'Sys_404',
    component: '@/views/common/NotFound.vue',
    meta: {
      label: '页面不存在',
      isShow: false
    }
  },
  {
    path: '/login',
    name: 'LoginIndex',
    component: '@/views/system/login/LoginIndex.vue',
    meta: {
      label: '登录页面',
      isShow: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: 'Layout',
    meta: {
      label: '关于'
    },
    children: [
      {
        path: '',
        name: 'AboutIndex',
        component: '@/views/system/about/AboutIndex.vue',
        meta: {
          label: '关于',
          icon: 'flat-color-icons:about'
        }
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    component: 'Layout',
    meta: {
      label: '文档',
      icon: 'vscode-icons:folder-type-docs-opened'
    },
    children: [
      {
        path: 'vue',
        name: 'Docs-Vue',
        component: 'Iframe',
        meta: {
          label: 'Vue3新中文文档',
          icon: 'vscode-icons:file-type-vue',
          link: 'INTERNAL_LINK',
          url: 'https://staging-cn.vuejs.org'
        }
      },
      {
        path: 'elementPlus',
        name: 'Docs-ElementPlus',
        component: 'Iframe',
        meta: {
          label: 'ElementPlus',
          icon: 'ep:element-plus',
          link: 'INTERNAL_LINK',
          url: 'https://element-plus.gitee.io/zh-CN'
        }
      },
      {
        path: 'vite',
        name: 'Docs-Vite',
        component: 'Iframe',
        meta: {
          label: 'Vite2（外链）',
          icon: 'vscode-icons:file-type-vite',
          link: 'EXTERNAL_LINK',
          url: 'https://cn.vitejs.dev'
        }
      }
    ]
  },
  {
    path: '/common',
    name: 'Common',
    component: 'Layout',
    meta: {
      label: '常用组件',
      icon: 'material-symbols:energy-program-time-used'
    },
    children: [
      {
        path: 'component',
        name: 'CommonComponent',
        component: '@/views/common/Component.vue',
        meta: {
          label: 'ElementPlus常用组件',
          icon: 'ep:element-plus'
        }
      },

      {
        path: 'table',
        name: 'Table',
        component: '@/views/common/VAdmireTable.vue',
        meta: {
          label: '常用模块-表格',
          icon: 'bx:table'
        }
      },
      {
        path: '404',
        name: 'Common404',
        component: '@/views/common/NotFound.vue',
        meta: {
          label: '404页面',
          icon: 'tabler:error-404'
        }
      },
      {
        path: '500',
        name: 'Common500',
        component: '@/views/common/ServerError.vue',
        meta: {
          label: '500页面',
          icon: 'raphael:500px'
        }
      }
    ]
  },
  {
    path: '/plugins',
    name: 'Plugin',
    component: 'Layout',
    meta: {
      label: '相关插件',
      icon: 'material-symbols:energy-program-time-used'
    },
    children: [
      {
        path: 'echart',
        name: 'PluginEchart',
        component: '@/views/plugins/EchartPlugin.vue',
        meta: {
          label: 'Echarts图表',
          icon: 'et:piechart',
          cache: false
        }
      },
      {
        path: 'richText',
        name: 'PluginRichText',
        component: '@/views/plugins/RichTextPlugin.vue',
        meta: {
          label: '富文本编辑器',
          icon: 'bi:journal-richtext'
        }
      },
      {
        path: 'mdText',
        name: 'PluginMarkdownText',
        component: '@/views/plugins/MarkdownTextPlugin.vue',
        meta: {
          label: 'Markdown编辑器',
          icon: 'bi:markdown'
        }
      },
      {
        path: 'gaoDeMap',
        name: 'PluginGaodeMap',
        component: '@/views/plugins/GaodeMapPlugin.vue',
        meta: {
          label: '高德地图',
          icon: 'carbon:map-center'
        }
      },
      {
        path: 'tencentMap',
        name: 'PluginTencentMap',
        component: '@/views/plugins/TencentMapPlugin.vue',
        meta: {
          label: '腾讯地图',
          icon: 'carbon:map-center'
        }
      }
    ]
  }
]

export default ConstantRoutes

export const Redirect404Router: SysRouterMenu.VAdmireRoute = {
  path: '/:catchAll(.*)',
  name: '404',
  redirect: '/404',
  meta: {
    isShow: false
  }
}
