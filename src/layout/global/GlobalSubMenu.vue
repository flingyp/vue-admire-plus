<template>
  <!-- 单一菜单 -->
  <template v-if="!menu.children || menu.children.length === 0">
    <el-menu-item :index="menu.key">
      <el-icon>
        <IconifyCom :name="menu.icon"></IconifyCom>
      </el-icon>
      <span>{{ menu.label }}</span>
    </el-menu-item>
  </template>
  <!-- 多菜单 -->
  <template v-else>
    <el-sub-menu>
      <template #title>
        <el-icon>
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
  import IconifyCom from '@/components/IconifyCom.vue'

  defineProps<{
    menu: SysConfig.MenuRecord
  }>()
</script>
