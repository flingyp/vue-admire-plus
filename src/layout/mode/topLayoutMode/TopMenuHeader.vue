<template>
  <el-row :gutter="20">
    <el-col :span="3" class="text-left">
      <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title" class="pl-[1rem]"></GlobalTitleLogo>
    </el-col>
    <el-col :span="16">
      <GlobalMenu mode="horizontal" defaultKey="1" class="flex justify-center items-center"></GlobalMenu>
    </el-col>
    <el-col :span="5" class="text-right">
      <GlobalFullScreenIcon></GlobalFullScreenIcon>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalSysUserInfo></GlobalSysUserInfo>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'

  import GlobalTitleLogo from '../../global/GlobalTitleLogo.vue'
  import GlobalMenu from '../../global/GlobalMenu.vue'
  import GlobalFullScreenIcon from '../../global/GlobalFullScreenIcon.vue'
  import GlobalSettingIcon from '../../global/GlobalSettingIcon.vue'
  import GlobalSysUserInfo from '../../global/GlobalSysUserInfo.vue'

  const SysStore = UseSysStore()
</script>
