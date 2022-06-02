<template>
  <el-container class="flex items-center justify-start h-full">
    <GlobalTitleLogo
      :LogoLocalSrc="SysStore.SysBaseConfig.logo"
      :SysTitle="SysStore.SysBaseConfig.title"
    ></GlobalTitleLogo>

    <el-container class="mx-[5rem]">
      <GlobalMenu mode="horizontal" defaultKey="1" :data="MenuData"></GlobalMenu>
    </el-container>

    <div>相关设置区域</div>
  </el-container>
</template>

<script setup lang="ts">
  import GlobalTitleLogo from '@/layout/global/GlobalTitleLogo.vue'
  import GlobalMenu from '@/layout/global/GlobalMenu.vue'

  import { UseSysStore } from '@/store/modules/SysStore'

  const SysStore = UseSysStore()

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
