import { SysRouterMenu } from 'types/SysRouterMenu'

const AsyncRouters: SysRouterMenu.VPlusRoute[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'Layout',
    meta: {
      label: '权限测试',
      permissions: ['sys:root:*']
    },
    children: [
      {
        path: 'user',
        name: 'Permission-User',
        component: '@/views/permission/UserIndex.vue',
        meta: {
          label: '用户测试页面'
        }
      },
      {
        path: 'role',
        name: 'Permission-Role',
        component: '@/views/permission/RoleIndex.vue',
        meta: {
          label: '角色测试页面',
          permissions: ['sys:root:*']
        }
      }
    ]
  }
]

export default AsyncRouters
