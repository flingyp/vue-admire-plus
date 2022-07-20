<template>
  <div>
    <section class="flex items-center">
      <el-upload
        :auto-upload="false"
        v-model:file-list="UploadFileList"
        :multiple="false"
        accept=".xls,.xlsx"
        class="mr-[10px] h-[32px] w-[120px]"
        @change="uploadFileSubmit"
      >
        <el-button type="primary">导入表格数据</el-button>
      </el-upload>

      <el-button type="info" @click="outToExcelFile">导出Excel文件</el-button>
    </section>

    <section>
      <VAdmireTableCom
        :table-header="TableHeaderData"
        :table-content="TableContentUser"
        :is-need-checkbox="true"
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
      </VAdmireTableCom>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Action, ElMessageBox, UploadFile, UploadUserFile } from 'element-plus'
  import * as XLSX from 'xlsx'
  import VAdmireTableCom from '@/components/VAdmireTableCom.vue'
  import { getUserTableApi, IUser } from '@/apis/SysTableDemoApi'
  import { excelFileOut, excelFileInput } from '@/utils/common/ExcelFileHandleUtil'

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
      columnTitle: '家庭住址',
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

  const UploadFileList = ref<UploadUserFile[]>([])

  // 导入表格数据
  const uploadFileSubmit = (uploadFile: UploadFile) => {
    excelFileInput(uploadFile.raw!, (ev: ProgressEvent<FileReader>) => {
      const WorkBook = XLSX.read(ev.target?.result, {
        type: 'binary'
      })
      const SheetName = WorkBook.SheetNames[0]
      let SheetContent = XLSX.utils.sheet_to_json(WorkBook.Sheets[SheetName]) as any[]
      SheetContent = SheetContent.map((item: any) => {
        const obj: any = {}
        for (const key in item) {
          TableHeaderData.some(header => {
            if (header.columnTitle === key) {
              obj[header.columnProp] = item[key]
              return true
            }
            return false
          })
        }
        return obj
      })
      TableContentUser.value = SheetContent
    })
  }

  // 导出Excel文件
  const outToExcelFile = () => {
    excelFileOut(TableContentUser.value, ['日期', '用户名', '家庭住址', '状态'], '员工信息表.xlsx', '员工')
  }
</script>
