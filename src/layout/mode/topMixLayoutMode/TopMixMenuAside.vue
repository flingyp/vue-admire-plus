<template>
  <GlobalMenu mode="vertical" defaultKey="1" :data="MenuData"></GlobalMenu>
</template>

<script setup lang="ts">
  import GlobalMenu from '@/layout/global/GlobalMenu.vue'

  const MenuData: SysConfig.MenuRecord[] = [
    {
      label: '系统管理',
      icon: 'ep:setting',
      key: 'sys',
      children: [
        {
          label: '用户管理',
          icon: 'ep:setting',
          key: 'sys-user'
        },
        {
          label: '角色管理',
          icon: 'ep:setting',
          key: 'sys-role'
        },
        {
          label: '权限管理',
          icon: 'ep:setting',
          key: 'sys-permission'
        }
      ]
    },
    {
      label: '关于',
      icon: 'ep:setting',
      key: 'about'
    }
  ]
</script>
