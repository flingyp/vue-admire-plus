<template>
  <div>
    <!-- 搜索模块 -->
    <slot name="table-searchs"></slot>
    <!-- 相关按钮模块 -->
    <slot name="table-buttons"></slot>
    <!-- 表格模板 -->
    <el-table
      v-loading="VAdmireTableProps.isLoading"
      element-loading-text="加载中..."
      :height="VAdmireTableProps.tableHeight"
      :style="{ width: tableWidth, marginTop: '15px' }"
      :data="ShowTableContentData"
      :stripe="VAdmireTableProps.isStripe"
      :border="VAdmireTableProps.isBorder"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="VAdmireTableProps.isNeedCheckbox" type="selection" />
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
    <!-- 分页模块 -->
    <el-pagination
      style="margin-top: 20px"
      background
      v-model:currentPage="CurrentPage"
      v-model:page-size="CurrentPageSize"
      layout="->, total, sizes, prev, pager, next, jumper"
      :page-sizes="VAdmireTableProps.defaultPageSizes"
      :total="VAdmireTableProps.tableContent.length"
      @current-change="changeCurrentPage"
      @size-change="changeCurrentPageSize"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import lodash from 'lodash'

  interface VAdmireTableHeaderData {
    columnTitle: string
    columnProp: string
    columnWidth?: number
    columnCustom?: boolean
    columnFixed?: string
  }

  interface IVAdmireTableProps {
    isStripe?: boolean
    isBorder?: boolean
    isLoading?: boolean
    isNeedCheckbox?: boolean
    tableHeader: VAdmireTableHeaderData[]
    tableContent?: unknown[]
    tableWidth?: string
    tableHeight?: string | number | undefined
    sectionContent?: unknown[]
    defaultPage?: number
    defaultPageSize?: number
    defaultPageSizes?: number[]
    handlePagination?: 'web' | 'serve'
  }

  const VAdmireTableProps = withDefaults(defineProps<IVAdmireTableProps>(), {
    isStripe: true,
    isBorder: true,
    isLoading: false,
    isNeedCheckbox: false,
    tableWidth: '100%',
    tableHeight: undefined,
    defaultPage: 1,
    defaultPageSize: 10,
    defaultPageSizes: () => [5, 10, 15, 20, 25],
    handlePagination: 'web'
  })

  interface IVAdmireTableEmits {
    (e: 'update:sectionContent', value: unknown[]): void
    (e: 'update:defaultPage', value: number): void
    (e: 'update:defaultPageSize', value: number): void
  }

  const VAdmireTableEmits = defineEmits<IVAdmireTableEmits>()

  const TableHeaderData = ref(VAdmireTableProps.tableHeader || [])
  const ShowTableContentData = ref<unknown[]>([])

  // 控制表格多选
  const handleSelectionChange = (value: unknown[]) => {
    VAdmireTableEmits('update:sectionContent', value)
  }

  // 当前页数
  const CurrentPage = ref(VAdmireTableProps.defaultPage)
  // 显示条数大小
  const CurrentPageSize = ref(VAdmireTableProps.defaultPageSize)
  // 改变页数
  const changeCurrentPage = (value: number) => {
    CurrentPage.value = value
    VAdmireTableEmits('update:defaultPage', value)
  }
  // 改变页数大小
  const changeCurrentPageSize = (value: any) => {
    CurrentPageSize.value = value
    VAdmireTableEmits('update:defaultPageSize', value)
  }
  // 分页操作
  const showTableContent = (page: number, size: number) => {
    const _CloneDeepTableContentData = lodash.cloneDeep(VAdmireTableProps.tableContent || [])
    let ShowArray: unknown[] = []
    if (page === 1) {
      ShowArray = _CloneDeepTableContentData?.slice(0, size)
    } else {
      ShowArray = _CloneDeepTableContentData?.slice((page - 1) * size, page * size)
    }

    return ShowArray
  }

  watchEffect(() => {
    if (VAdmireTableProps.handlePagination === 'web') {
      ShowTableContentData.value = showTableContent(CurrentPage.value, CurrentPageSize.value)
    } else {
      ShowTableContentData.value = VAdmireTableProps.tableContent || []
    }
  })
</script>

<style scoped></style>
