import * as XLSX from 'xlsx'

// Excel数据导入
export const excelFileInput = (file: File, callback: (ev: ProgressEvent<FileReader>) => void) => {
  const _FileReader = new FileReader()
  _FileReader.readAsBinaryString(file)
  _FileReader.onload = callback
}

/**
 * Excel文件导出
 * @param data 数据源
 * @param header 表头
 * @param fileName 文件名
 * @param sheetName 表名
 */
export const excelFileOut = <T extends object, K extends string>(
  data: T[],
  header: K[],
  fileName: string = 'excel.xlsx',
  sheetName: string = 'Sheet1'
) => {
  // 创建一个工作表
  const WorkSheet = XLSX.utils.json_to_sheet(data)

  // 自定义表头
  XLSX.utils.sheet_add_aoa(WorkSheet, [header])

  // 创建一个工作薄
  const WorkBook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(WorkBook, WorkSheet, sheetName)

  // 创建文件
  XLSX.writeFile(WorkBook, fileName)
}
