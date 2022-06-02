import { SysRouter } from 'types/SysRouter'

const ConstantRoutes: SysRouter.VPlusRoute[] = [
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
          label: '测试页面'
        }
      }
    ]
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
