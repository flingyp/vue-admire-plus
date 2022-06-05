<template>
  <el-drawer
    size="25%"
    direction="rtl"
    v-model="SysStore.getIsShowSysDrawerValue"
    :before-close="handleClose"
    :show-close="false"
  >
    <template #header>
      <div class="text-center">
        <span class="text-[var(--el-text-color-primary)]">系统设置</span>
      </div>
    </template>

    <GlobalSettingItem label="主题模式">
      <el-switch
        v-model="SwitchThemeModeValue"
        class="left-[50%] transform translate-x-[-50%]"
        size="large"
        inline-prompt
        :width="50"
        :active-icon="DarkModeIcon"
        :inactive-icon="LightModeIcon"
        @change="changeThemeMode"
      />
    </GlobalSettingItem>

    <GlobalSettingItem label="布局模式"> </GlobalSettingItem>
  </el-drawer>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { UseSysStore } from '@/store/modules/SysStore'
  import { render } from '@/utils/common/IconifyRenderComponent'

  import { useThemeMode } from '@/hooks/UseThemeMode'

  import GlobalSettingItem from './GlobalSettingItem.vue'

  const SysStore = UseSysStore()

  // 第一部分：主题模式相关
  const LightModeIcon = render({ name: 'emojione-v1:sun' })
  const DarkModeIcon = render({ name: 'fxemoji:lastquartermoonface' })
  const SwitchThemeModeValue = computed(() => {
    if (SysStore.SysConfig.themeMode === 'light' || SysStore.SysConfig.themeMode === 'auto') {
      return false
    }
    return true
  })
  const { toggleThemeMode } = useThemeMode()
  const changeThemeMode = () => {
    // 切换主题模式
    toggleThemeMode()
  }

  // 第二部分：布局模式相关

  // 最后部分：关闭系统抽屉
  const handleClose = () => {
    SysStore.SysConfig.isShowSysDrawer = false
  }
</script>
