import { SysRouter } from 'types/SysRouter'

const ConstantRoutes: SysRouter.VPlusRoute[] = [
  {
    path: '/login',
    name: 'LoginIndex',
    component: '@/views/system/login/LoginIndex.vue',
    meta: {
      label: '登录页面'
    }
  },
  {
    path: '/test',
    name: 'TestIndex',
    component: '@/views/test/TestIndex.vue',
    meta: {
      label: '测试页面'
    }
  },
  {
    path: '/layout',
    name: 'Layout',
    component: 'Layout',
    meta: {
      label: '布局页面'
    }
  }
]

export default ConstantRoutes
