<template>
  <div>
    <el-card>
      <template #header>
        <div class="flex items-center">
          <span class="text-[2rem]">Iconify</span>
        </div>
      </template>
      <div class="p-[1rem] grid grid-cols-10 gap-x-[9rem] gap-y-[1rem]">
        <IconifyCom v-for="item in IconList" :key="item" :width="40" :height="40" :name="item"></IconifyCom>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import IconifyCom from '@/components/IconifyCom.vue'

  const IconList: string[] = [
    'uil:0-plus',
    'uil:10-plus',
    'uil:12-plus',
    'uil:13-plus',
    'uil:16-plus',
    'uil:17-plus',
    'uil:18-plus',
    'uil:21-plus',
    'uil:3-plus',
    'uil:500px',
    'uil:6-plus',
    'uil:abacus',
    'uil:accessible-icon-alt',
    'uil:adjust',
    'uil:adjust-alt',
    'uil:adjust-circle',
    'uil:adjust-half',
    'uil:adobe',
    'uil:amazon',
    'uil:ambulance',
    'uil:analysis',
    'uil:analytics',
    'uil:android',
    'uil:android-alt',
    'uil:angle-double-down',
    'uil:angle-double-left',
    'uil:angle-double-right',
    'uil:angle-double-up',
    'uil:angle-down',
    'uil:angle-left',
    'uil:angle-left-b'
  ]
</script>
