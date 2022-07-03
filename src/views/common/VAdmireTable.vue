<template>
  <VAdmireTableCom
    :table-header="TableHeaderData"
    :table-content="TableContentUser"
    :is-need-checkbox="true"
    v-model:sectionContent="TableSectionContent"
    v-model:defaultPage="CurrentPage"
    v-model:defaultPageSize="CurrentPageSize"
    :is-loading="TableIsLoading"
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
      <el-form :inline="true" :model="SearchForm" class="demo-form-inline">
        <el-form-item label="日期">
          <el-input v-model="SearchForm.date" placeholder="Please input date" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="SearchForm.name" placeholder="Please input name" />
        </el-form-item>
        <el-form-item label="家庭地址">
          <el-input v-model="SearchForm.address" placeholder="Please input address" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </template>

    <template #table-buttons>
      <el-button type="primary">新增</el-button>
      <el-button type="success">批量删除</el-button>
      <el-button type="info">导入</el-button>
      <el-button type="warning">导出</el-button>
    </template>
  </VAdmireTableCom>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { Action, ElMessageBox } from 'element-plus'
  import VAdmireTableCom from '@/components/VAdmireTableCom.vue'
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

  const TableContentUser = ref((await getUserTableApi()) || [])

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
  const CurrentPageSize = ref(10)

  const SearchForm = reactive({
    date: '',
    name: '',
    address: '',
    status: 0
  })

  const TableIsLoading = ref(false)

  const onSubmit = async () => {
    TableIsLoading.value = true
    // eslint-disable-next-line no-return-assign
    setTimeout(async () => (TableIsLoading.value = false), 2000)
  }
</script>

<style scoped></style>
