<template>
  <div class="bg-gradient-to-tr from-[#b3e5fc] to-[#e1f5fe] dark:from-[#afc2cb] dark:to-[#82b3c9]">
    <!-- Logo 和 Title -->
    <el-container
      class="transition-all duration-200 ease-linear flex items-center absolute mt-[1rem] ml-[1.5rem] <2xl:(left-[50%] mt-[1.5rem] transform translate-x-[-50%])"
    >
      <img :src="getImageUrl('SysLogo.png')" :alt="SysStore.SysBaseConfig.title" srcset="" class="w-[2rem] mr-2" />
      <span class="text-[1rem] font-medium text-[var(--el-text-color-primary)] <2xl:(text-[1.5rem])">{{
        SysStore.SysBaseConfig.title
      }}</span>
    </el-container>

    <!-- SVG -->
    <el-container
      w:w="[40rem]"
      w:h="[40rem]"
      class="!transition-all duration-500 ease-linear absolute top-[50%] transform translate-y-[-50%] left-[10%] !<2xl:(w-0 h-0)"
    >
      <SvgFileCom name="login-sys-symbol" class="w-full h-full"></SvgFileCom>
    </el-container>

    <!-- 登录表单 -->
    <el-container
      direction="vertical"
      w:w="[35rem]"
      w:h="auto"
      w:border="border"
      w:bg="[#FFF]"
      w:p="[3rem]"
      w:rounded="[1rem]"
      class="dark:bg-[var(--el-bg-color-page)] !transition-all duration-500 ease-linear shadow-xl absolute right-[10%] top-[50%] transform translate-y-[-50%] overflow-hidden <md:(w-[400px]) <xl:(w-[450px]) <2xl:(w-[600px] left-[50%] translate-x-[-50%] translate-y-[-50%])"
    >
      <h1 class="text-[2rem] font-bold font-serif mb-[1.5rem]">登录</h1>
      <el-form ref="LoginFormRef" size="large" :model="LoginModel" :rules="LoginRules">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="LoginModel.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" type="password" show-password v-model="LoginModel.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" w:w="full" @click="onHandleLogin(LoginFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
      <el-divider />
      <div class="flex justify-around items-center">
        <IconifyCom
          :name="SysStore.SysConfig.themeMode !== 'dark' ? 'emojione-v1:sun' : 'fxemoji:lastquartermoonface'"
          :width="30"
          class="cursor-pointer"
          @click="changeThemeMode"
        ></IconifyCom>
      </div>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'

  import { useRouter } from 'vue-router'
  import type { FormInstance, FormRules } from 'element-plus'
  import { UseSysStore } from '@/store/modules/SysStore'

  import SvgFileCom from '@/components/SvgFileCom.vue'
  import IconifyCom from '@/components/IconifyCom.vue'

  import { userLoginApi } from '@/apis/SysUserApi'
  import { setLocalKey } from '@/utils/common/HandleLocalStorageUtil'
  import { getImageUrl } from '@/utils/common/AsyncImportImg'
  import { useThemeMode } from '@/hooks/UseThemeMode'

  const router = useRouter()
  const SysStore = UseSysStore()
  const { toggleThemeMode } = useThemeMode()

  const changeThemeMode = () => {
    toggleThemeMode()
  }

  // 表单实例
  const LoginFormRef = ref<FormInstance>()
  // 登录校验表单
  const LoginModel = reactive({
    username: 'admin',
    password: 'admin'
  })
  // 登录校验规则
  const LoginRules = reactive<FormRules>({
    username: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      }
    ]
  })
  // 处理登录逻辑
  const onHandleLogin = async (FormRef: FormInstance | undefined) => {
    if (!FormRef) return
    await FormRef.validate(async (valid, fields) => {
      if (!valid) return
      // 校验成功 进行登录
      const UserToken = await userLoginApi(LoginModel.username, LoginModel.password)
      setLocalKey('token', UserToken)
      // 登录后台系统
      router.push({ name: 'TestIndex' })
    })
  }
</script>

<style scoped>
  * {
    transition: all 0s;
  }
</style>
