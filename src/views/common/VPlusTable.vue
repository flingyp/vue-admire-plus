<template>
  <VPlusTableCom
    :table-header="TableHeaderData"
    :table-content="TableContentUser"
    :is-need-checkbox="true"
    v-model:sectionContent="TableSectionContent"
    :default-page="1"
    :default-page-size="5"
  >
    <template #status="{ content }">
      <el-tag v-if="content.status === 1">正常</el-tag>
      <el-tag v-if="content.status === 0" type="warning">禁用</el-tag>
    </template>

    <template #operation="{ content }">
      <el-button type="primary" size="small" @click="clickModifyColumn(content)">修改</el-button>
      <el-button type="danger" size="small" @click="clickModifyDelete(content)">删除</el-button>
    </template>
  </VPlusTableCom>
</template>

<script setup lang="ts">
  import VPlusTableCom from '@/components/VPlusTableCom.vue'
  import { getUserTableApi, IUser } from '@/apis/SysTableDemoApi'

  const TableHeaderData = [
    {
      columnTitle: '日期',
      columnWidth: 180,
      columnProp: 'date'
    },
    {
      columnTitle: '用户名',
      columnWidth: 180,
      columnProp: 'name'
    },
    {
      columnTitle: '家庭地址',
      columnProp: 'address'
    },
    {
      columnTitle: '状态',
      columnProp: 'status',
      columnCustom: true
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
    console.log(value)
  }
  // 点击删除
  const clickModifyDelete = (value: IUser) => {
    console.log(value)
  }
</script>

<style scoped></style>
