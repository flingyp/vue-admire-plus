<template>
  <div class="login-page-box">
    <!-- Logo 和 Title -->
    <el-container
      class="transition-all duration-200 ease-linear flex items-center absolute mt-[1rem] ml-[1.5rem] <2xl:(left-[50%] mt-[1.5rem] transform translate-x-[-50%])"
    >
      <img :src="getImageUrl('SysLogo.png')" :alt="SysStore.SysBaseConfig.title" srcset="" w:w="w-[2rem]" w:m="r-2" />
      <span w:text="[1rem]" w:font="medium" class="<2xl:(text-[1.5rem])">{{ SysStore.SysBaseConfig.title }}</span>
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
      class="!transition-all duration-500 ease-linear shadow-xl absolute right-[10%] top-[50%] transform translate-y-[-50%] overflow-hidden <md:(w-[400px]) <xl:(w-[450px]) <2xl:(w-[600px] left-[50%] translate-x-[-50%] translate-y-[-50%])"
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
      <div class="text-center">功能区</div>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { UseSysStore } from '@/store/modules/SysStore'

  import SvgFileCom from '@/components/SvgFileCom.vue'

  import { userLoginApi } from '@/apis/SysUserApi'
  import { setLocalKey } from '@/utils/common/HandleLocalStorageUtil'

  import { getImageUrl } from '@/utils/common/AsyncImportImg'

  const router = useRouter()
  const SysStore = UseSysStore()
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
  .login-page-box {
    background-image: linear-gradient(300deg, #e4f6ff, #f9feff);
  }
</style>
