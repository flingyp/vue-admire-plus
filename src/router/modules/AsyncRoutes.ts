import type { SysRouterMenu } from 'types/SysRouterMenu'

const AsyncRouters: SysRouterMenu.VAdmireRoute[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'Layout',
    meta: {
      label: '前端权限测试',
      icon: 'arcticons:permissionchecker'
    },
    children: [
      {
        path: 'user',
        name: 'Permission-User',
        component: '@/views/permission/UserIndex.vue',
        meta: {
          label: '普通用户权限页面',
          permissions: ['sys:user:*']
        }
      },
      {
        path: 'role',
        name: 'Permission-Role',
        component: '@/views/permission/RoleIndex.vue',
        meta: {
          label: '超级管理员权限页面',
          permissions: ['sys:root:*']
        }
      },
      {
        path: 'common',
        name: 'Permission-Common',
        component: '@/views/permission/CommonIndex.vue',
        meta: {
          label: '均可访问权限页面'
        }
      },
      {
        path: 'button',
        name: 'Permission-Button',
        component: '@/views/permission/ButtonIndex.vue',
        meta: {
          label: '按钮级权限指令控制'
        }
      }
    ]
  }
]

export default AsyncRouters
