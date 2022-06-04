import { SysRouterMenu } from 'types/SysRouterMenu'

const ConstantRoutes: SysRouterMenu.VPlusRoute[] = [
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
