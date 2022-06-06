<template>
  <el-row :gutter="20">
    <el-col :span="12" class="text-left">
      <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title" class="pl-[1rem]"></GlobalTitleLogo>
    </el-col>
    <el-col :span="12" class="text-right">
      <GlobalLeftMenuCollapse></GlobalLeftMenuCollapse>
      <GlobalFullScreenIcon></GlobalFullScreenIcon>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalSysUserInfo></GlobalSysUserInfo>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { UseSysStore } from '@/store/modules/SysStore'

  import GlobalTitleLogo from '../../global/GlobalTitleLogo.vue'
  import GlobalFullScreenIcon from '../../global/GlobalFullScreenIcon.vue'
  import GlobalSettingIcon from '../../global/GlobalSettingIcon.vue'
  import GlobalSysUserInfo from '../../global/GlobalSysUserInfo.vue'
  import GlobalLeftMenuCollapse from '../../global/GlobalLeftMenuCollapse.vue'

  const SysStore = UseSysStore()
</script>
