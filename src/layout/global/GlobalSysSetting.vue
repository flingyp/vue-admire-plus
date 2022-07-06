<template>
  <el-drawer
    size="400px"
    direction="rtl"
    v-model="SysStore.SysConfig.isShowSysDrawer"
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

    <GlobalSettingItem label="布局模式">
      <div class="flex items-center justify-around">
        <el-tooltip
          effect="dark"
          placement="bottom"
          v-for="item in LayoutModeData"
          :key="item.code"
          :content="item.label"
        >
          <div
            class="checkbox-shadow relative w-60px h-60px bg-white dark:bg-[var(--el-bg-color-page)] rounded-4px overflow-hidden cursor-pointer"
            :class="item.code == SysStore.SysConfig.layoutMode ? 'active-layout' : ''"
            @click="changeLayoutMode(item.code)"
          >
            <div class="absolute bg-[#273352]" :class="item.menuClass"></div>
            <div class="absolute bg-[#f0f2f5]" :class="item.mainClass"></div>
          </div>
        </el-tooltip>
      </div>
    </GlobalSettingItem>

    <GlobalSettingItem label="主题色模式">
      <div class="color-item-box">
        <span
          v-for="(item, index) in SysStore.themeColorArray"
          :key="index"
          :style="{ backgroundColor: item }"
          :class="[SysStore.themeColor === item as string ? 'active-item-box' : '' ]"
          @click="changePrimaryColor(item)"
        ></span>
      </div>
      <div class="mt-[1rem]">
        <el-color-picker v-model="SysStore.themeColor" @activeChange="changePrimaryColor" />
      </div>
    </GlobalSettingItem>

    <GlobalSettingItem label="界面功能">
      <div class="flex justify-between items-center view-function-item">
        <label class="text-[14px]">头部高度</label>
        <el-input-number
          class="w-[120px]"
          v-model="CustomHeaderHeight"
          :min="MixHeaderHeight"
          :max="MaxHeaderHeight"
          @change="handleHeaderHeightChange"
        />
      </div>
      <div class="flex justify-between items-center view-function-item">
        <label class="text-[14px]">标签页高度</label>
        <el-input-number
          class="w-[120px]"
          v-model="CustomTagHeight"
          :min="MixTagHeight"
          :max="MaxTagHeight"
          @change="handleTagHeightChange"
        />
      </div>
      <div class="flex justify-between items-center view-function-item">
        <label class="text-[14px]">页面切换动画</label>
        <el-select v-model="SysStore.SysConfig.pageTransition" class="w-[160px]" placeholder="Select">
          <el-option
            v-for="item in MainPageTransitionAnimation"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </GlobalSettingItem>
  </el-drawer>
</template>

<script setup lang="ts">
  import { ref, computed, reactive } from 'vue'
  import { UseSysStore } from '@/store/modules/SysStore'
  import { render } from '@/utils/common/IconifyRenderComponent'

  import { useThemeMode } from '@/hooks/UseThemeMode'

  import GlobalSettingItem from './GlobalSettingItem.vue'

  const SysStore = UseSysStore()

  // 第一部分：主题模式相关
  const LightModeIcon = render({ name: 'emojione-v1:sun' })
  const DarkModeIcon = render({ name: 'fxemoji:lastquartermoonface' })
  const SwitchThemeModeValue = computed(() => {
    if (SysStore.SysConfig.themeMode === 'light') {
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
  interface LayoutModeProps {
    label: string
    code: SysBasicConfig.SysLayoutMode
    menuClass: string
    mainClass: string
  }
  const LayoutModeData: LayoutModeProps[] = [
    { label: '左侧菜单', code: 'LEFT_MENU_MODE', menuClass: 'w-1/3 h-full', mainClass: 'w-2/3 h-3/4 right-0 bottom-0' },
    { label: '顶部菜单', code: 'TOP_MENU_MODE', menuClass: 'w-full h-1/3', mainClass: 'w-full h-2/3 bottom-0' },
    {
      label: '顶部混合菜单',
      code: 'TOP_MIX_MENU_MODE',
      menuClass: 'w-full h-1/3',
      mainClass: 'w-2/3 h-2/3 right-0 bottom-0'
    }
  ]
  const changeLayoutMode = (code: SysBasicConfig.SysLayoutMode) => {
    if (code === 'TOP_MENU_MODE') {
      SysStore.SysConfig.leftMenuIsCollapsed = false
    }
    SysStore.setLayoutMode(code)
  }

  // 第三部分：主题色模式相关
  const changePrimaryColor = (color: string) => {
    SysStore.SysConfig.themeColor = color
  }

  // 第四部分：界面功能
  const CustomHeaderHeight = ref(SysStore.SysConfig.customHeaderHeight)
  const MixHeaderHeight = ref(50)
  const MaxHeaderHeight = ref(70)
  const handleHeaderHeightChange = (value: number | undefined) => {
    if (value) {
      SysStore.SysConfig.customHeaderHeight = value
    }
  }
  const CustomTagHeight = ref(SysStore.SysConfig.customTagHeight)
  const MixTagHeight = ref(40)
  const MaxTagHeight = ref(60)
  const handleTagHeightChange = (value: number | undefined) => {
    if (value) {
      SysStore.SysConfig.customTagHeight = value
    }
  }
  // 系统内置页面切换动画
  const MainPageTransitionAnimation = reactive([
    {
      value: 'fade',
      label: '消退'
    },
    {
      value: 'fade-slide',
      label: '向右滑动消退'
    },
    {
      value: 'fade-bottom',
      label: '向下滑动消退'
    },
    {
      value: 'fade-top',
      label: '向上滑动消退'
    },
    {
      value: 'fade-scale',
      label: '缩放消退'
    },
    {
      value: 'zoom-fade',
      label: '放大消退'
    },
    {
      value: 'zoom-out',
      label: '缩小放大'
    }
  ])

  // 最后部分：关闭系统抽屉
  const handleClose = () => {
    SysStore.SysConfig.isShowSysDrawer = false
  }

  // 系统相关内容初始化
  // onMounted(() => {
  //   // 主题色初始化
  //   SysStore.setThemeColor(SysStore.SysConfig.themeColor)
  // })
</script>

<style>
  .el-color-picker,
  .el-color-picker__trigger {
    width: 100% !important;
    /* height: 36px !important; */
  }

  .checkbox-shadow {
    box-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.18);
  }
  .active-layout {
    border: 2px solid var(--el-color-primary-light-3);
  }

  .color-item-box {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-items: center;
    align-content: center;
    grid-row-gap: 10px;
    color: #fff;
  }

  .color-item-box > span {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background-color: red;
    text-align: center;
    cursor: pointer;
  }

  .color-item-box > span.active-item-box::after {
    content: '\2714';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }

  .view-function-item:not(:last-of-type) {
    margin-bottom: 20px;
  }
</style>
