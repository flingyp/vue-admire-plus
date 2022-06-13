import type { SysRouterMenu } from 'types/SysRouterMenu'

const ConstantRoutes: SysRouterMenu.VPlusRoute[] = [
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
          icon: 'logos:element',
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
    path: '/test',
    name: 'Test',
    component: 'Layout',
    meta: {
      label: '测试'
    },
    children: [
      {
        path: '',
        name: 'TestIndex',
        component: '@/views/test/TestIndex.vue',
        meta: {
          label: '测试页面',
          icon: 'file-icons:test-typescript'
        }
      }
    ]
  },
  {
    path: '/request',
    name: 'Request',
    component: '@/views/test/TestRequest.vue',
    meta: {
      label: '测试请求',
      isShow: false
    }
  },
  {
    path: '/layout',
    name: 'Layout',
    component: 'Layout',
    meta: {
      label: '布局页面',
      isShow: false
    }
  }
]

export default ConstantRoutes
