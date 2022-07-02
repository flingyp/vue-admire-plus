<template>
  <div>
    <el-table
      :height="VPlusTableProps.tableHeight"
      :style="{ width: tableWidth }"
      :data="ShowTableContentData"
      :stripe="VPlusTableProps.isStripe"
      :border="VPlusTableProps.isBorder"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="VPlusTableProps.isNeedCheckbox" type="selection" />
      <el-table-column
        v-for="(item, index) in TableHeaderData"
        :key="index"
        :fixed="item.columnFixed"
        :prop="item.columnProp"
        :label="item.columnTitle"
        :width="item.columnWidth"
      >
        <template #default="scope" v-if="item.columnCustom">
          <slot :name="item.columnProp" :content="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      background
      v-model:currentPage="CurrentPage"
      v-model:page-size="CurrentPageSize"
      layout="->, total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15, 20]"
      :total="TableContentData.length"
      @current-change="changeCurrentPage"
      @size-change="changeCurrentPageSize"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import lodash from 'lodash'

  interface VPlusTableHeaderData {
    columnTitle: string
    columnProp: string
    columnWidth?: number
    columnCustom?: boolean
    columnFixed?: string
  }

  interface IVPlusTableProps {
    isStripe?: boolean
    isBorder?: boolean
    isNeedCheckbox?: boolean
    tableHeader: VPlusTableHeaderData[]
    tableContent?: unknown[]
    tableWidth?: string
    tableHeight?: string | number | undefined
    sectionContent?: unknown[]
    defaultPage?: number
    defaultPageSize?: number
  }

  const VPlusTableProps = withDefaults(defineProps<IVPlusTableProps>(), {
    isStripe: true,
    isBorder: true,
    isNeedCheckbox: false,
    tableWidth: '100%',
    tableHeight: undefined,
    defaultPage: 1,
    defaultPageSize: 10
  })

  interface IVPlusTableEmits {
    (e: 'update:sectionContent', value: unknown[]): void
  }

  const VPlusTableEmits = defineEmits<IVPlusTableEmits>()

  const TableHeaderData = ref(VPlusTableProps.tableHeader || [])
  const TableContentData = ref(VPlusTableProps.tableContent || [])
  const ShowTableContentData = ref<unknown[]>([])
  // 深拷贝
  const _CloneDeepTableContentData = lodash.cloneDeep(TableContentData.value)

  // 控制表格多选
  const handleSelectionChange = (value: unknown[]) => {
    VPlusTableEmits('update:sectionContent', value)
  }

  // 当前页数
  const CurrentPage = ref(VPlusTableProps.defaultPage)
  // 显示条数大小
  const CurrentPageSize = ref(VPlusTableProps.defaultPageSize)
  // 改变页数
  const changeCurrentPage = (value: number) => {
    CurrentPage.value = value
  }
  // 改变页数大小
  const changeCurrentPageSize = (value: any) => {
    CurrentPageSize.value = value
  }
  // 分页操作
  const showTableContent = (page: number, size: number) => {
    let ShowArray: unknown[] = []
    if (page === 1) {
      ShowArray = _CloneDeepTableContentData?.slice(0, size)
    } else {
      ShowArray = _CloneDeepTableContentData?.slice((page - 1) * size, page * size)
    }

    return ShowArray
  }

  watchEffect(() => {
    ShowTableContentData.value = showTableContent(CurrentPage.value, CurrentPageSize.value)
  })
</script>

<style scoped></style>
