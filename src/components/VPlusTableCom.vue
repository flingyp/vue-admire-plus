<template>
  <div>
    <!-- 搜索模块 -->
    <section class="mb-[10px]">
      <slot name="table-searchs">搜索模块</slot>
    </section>
    <!-- 相关按钮模块 -->
    <section>
      <slot name="table-buttons">相关按钮模块</slot>
    </section>
    <el-table
      :height="VPlusTableProps.tableHeight"
      :style="{ width: tableWidth, marginTop: '10px' }"
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
      :page-sizes="VPlusTableProps.defaultPageSizes"
      :total="VPlusTableProps.tableContent.length"
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
    defaultPageSizes?: number[]
    handlePagination?: 'web' | 'serve'
  }

  const VPlusTableProps = withDefaults(defineProps<IVPlusTableProps>(), {
    isStripe: true,
    isBorder: true,
    isNeedCheckbox: false,
    tableWidth: '100%',
    tableHeight: undefined,
    defaultPage: 1,
    defaultPageSize: 10,
    defaultPageSizes: () => [5, 10, 15, 20, 25],
    handlePagination: 'web'
  })

  interface IVPlusTableEmits {
    (e: 'update:sectionContent', value: unknown[]): void
    (e: 'update:defaultPage', value: number): void
    (e: 'update:defaultPageSize', value: number): void
  }

  const VPlusTableEmits = defineEmits<IVPlusTableEmits>()

  const TableHeaderData = ref(VPlusTableProps.tableHeader || [])
  const ShowTableContentData = ref<unknown[]>([])
  // 深拷贝
  const _CloneDeepTableContentData = lodash.cloneDeep(VPlusTableProps.tableContent || [])

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
    VPlusTableEmits('update:defaultPage', value)
  }
  // 改变页数大小
  const changeCurrentPageSize = (value: any) => {
    CurrentPageSize.value = value
    VPlusTableEmits('update:defaultPageSize', value)
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
    if (VPlusTableProps.handlePagination === 'web') {
      ShowTableContentData.value = showTableContent(CurrentPage.value, CurrentPageSize.value)
    } else {
      ShowTableContentData.value = VPlusTableProps.tableContent || []
    }
  })
</script>

<style scoped></style>
