<template>
  <!-- 单一菜单 -->
  <template v-if="!menu.children || menu.children.length === 0">
    <el-menu-item :index="menu.key" @click="clickLinkMenuItem">
      <el-icon :size="20">
        <IconifyCom :name="menu.icon"></IconifyCom>
      </el-icon>
      <span>{{ menu.label }}</span>
    </el-menu-item>
  </template>
  <!-- 多菜单 -->
  <template v-else>
    <el-sub-menu :index="menu.key">
      <template #title>
        <el-icon :size="20">
          <IconifyCom :name="menu.icon"></IconifyCom>
        </el-icon>
        <span>{{ menu.label }}</span>
      </template>
      <template v-for="item in menu.children" :key="item.key">
        <GlobalSubMenu :menu="item"></GlobalSubMenu>
      </template>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
  import { SysRouterMenu } from 'types/SysRouterMenu'
  import { useRouter } from 'vue-router'
  import IconifyCom from '@/components/IconifyCom.vue'

  const router = useRouter()

  defineProps<{
    menu: SysRouterMenu.MenuRecord
  }>()

  // 点击对应链接跳转
  const clickLinkMenuItem = (RouterName: any) => {
    router.push({ name: RouterName.index })
  }
</script>
