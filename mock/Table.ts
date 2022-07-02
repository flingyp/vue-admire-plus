import { MockMethod } from 'vite-plugin-mock'
import TableMockData from './TableMockData.json'

export default [
  {
    url: '/mock/user/list',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: '操作成功',
        data: TableMockData
      }
    }
  }
] as unknown as MockMethod[]
