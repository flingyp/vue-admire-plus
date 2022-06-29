<template>
  <section class="h-full flex items-center justify-between">
    <div class="h-full flex items-center justify-between">
      <GlobalLeftMenuCollapse class="mr-[8px]"></GlobalLeftMenuCollapse>
      <GlobalBreadCrumb></GlobalBreadCrumb>
    </div>
    <div class="h-full">
      <GlobalFullScreenIcon></GlobalFullScreenIcon>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalSysUserInfo></GlobalSysUserInfo>
    </div>
  </section>
</template>

<script setup lang="ts">
  import GlobalLeftMenuCollapse from '../../global/GlobalLeftMenuCollapse.vue'
  import GlobalFullScreenIcon from '../../global/GlobalFullScreenIcon.vue'
  import GlobalSettingIcon from '../../global/GlobalSettingIcon.vue'
  import GlobalSysUserInfo from '../../global/GlobalSysUserInfo.vue'
  import GlobalBreadCrumb from '../../global/GlobalBreadCrumb.vue'
</script>
