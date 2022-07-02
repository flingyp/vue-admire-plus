<template>
  <VPlusTableCom
    :table-header="TableHeaderData"
    :table-content="TableContentUser"
    :is-need-checkbox="true"
    v-model:sectionContent="TableSectionContent"
    v-model:defaultPage="CurrentPage"
    v-model:defaultPageSize="CurrentPageSize"
  >
    <template #status="{ content }">
      <el-tag v-if="content.status === 1">正常</el-tag>
      <el-tag v-if="content.status === 0" type="warning">禁用</el-tag>
    </template>

    <template #operation="{ content }">
      <el-button type="primary" size="small" @click="clickModifyColumn(content)">修改</el-button>
      <el-button type="danger" size="small" @click="clickModifyDelete(content)">删除</el-button>
    </template>

    <template #table-searchs>
      <section class="flex items-center">
        <section class="flex items-center mr-[20px]">
          <label class="w-[100px] text-right pr-[10px]">用户名</label>
          <el-input placeholder="请输入角色名称" />
        </section>
        <section class="flex items-center mr-[20px]">
          <label class="w-[100px] text-right pr-[10px]">日期</label>
          <el-input placeholder="请输入日期" />
        </section>
        <section class="flex items-center mr-[20px]">
          <label class="w-[100px] text-right pr-[10px]">家庭住址</label>
          <el-input placeholder="请输入家庭住址" />
        </section>
        <section class="flex items-center mr-[20px]">
          <el-button type="primary">搜索</el-button>
        </section>
      </section>
    </template>

    <template #table-buttons>
      <el-button type="primary" size="small">新增</el-button>
      <el-button type="success" size="small">批量删除</el-button>
      <el-button type="info" size="small">导入</el-button>
      <el-button type="warning" size="small">导出</el-button>
    </template>
  </VPlusTableCom>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Action, ElMessageBox } from 'element-plus'
  import VPlusTableCom from '@/components/VPlusTableCom.vue'
  import { getUserTableApi, IUser } from '@/apis/SysTableDemoApi'

  const TableHeaderData = [
    {
      columnTitle: '日期',
      columnWidth: 120,
      columnProp: 'date'
    },
    {
      columnTitle: '用户名',
      columnWidth: 100,
      columnProp: 'name'
    },
    {
      columnTitle: '家庭地址',
      columnProp: 'address'
    },
    {
      columnTitle: '状态',
      columnProp: 'status',
      columnCustom: true,
      columnWidth: 80
    },
    {
      columnTitle: '操作',
      columnProp: 'operation',
      columnCustom: true,
      columnFixed: 'right'
    }
  ]

  const TableContentUser = (await getUserTableApi()) || []

  // 表格多选（勾选了的数据）
  const TableSectionContent: IUser[] = []

  // 点击修改
  const clickModifyColumn = (value: IUser) => {
    ElMessageBox.alert('是否修改数据', '修改数据', {
      confirmButtonText: 'OK',
      callback: (action: Action) => {
        console.log(action, value)
      }
    })
  }
  // 点击删除
  const clickModifyDelete = (value: IUser) => {
    ElMessageBox.alert('是否删除数据', '删除数据', {
      confirmButtonText: 'OK',
      callback: (action: Action) => {
        console.log(action, value)
      }
    })
  }

  // 当前页数
  const CurrentPage = ref(1)
  // 显示条数大小
  const CurrentPageSize = ref(15)
</script>

<style scoped></style>
