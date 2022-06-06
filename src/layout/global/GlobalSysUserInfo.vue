<template>
  <el-dropdown class="h-full inline-flex justify-center items-center px-3" @command="clickDropdownMenuItem">
    <div class="cursor-pointer inline-flex justify-center items-center">
      <el-avatar :size="25" :src="getImageUrl('UserLogo.png')" class="mr-2" />
      <span>超级管理员</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="SIGN_OUT">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { getImageUrl } from '@/utils/common/AsyncImportImg'
  import { removeLocalKey } from '@/utils/common/HandleLocalStorageUtil'

  const router = useRouter()

  const clickDropdownMenuItem = (command: string) => {
    if (command === 'SIGN_OUT') {
      removeLocalKey('token')
      removeLocalKey('layoutMode')
      router.push({ name: 'LoginIndex' })
    }
  }
</script>
