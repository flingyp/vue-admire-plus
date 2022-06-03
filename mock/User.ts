import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    timeout: 3000,
    response: ({ body }) => {
      if (body.username === 'admin' && body.password === 'admin') {
        return {
          code: 200,
          msg: '操作成功',
          data: 'VPlus-Admin'
        }
      }
      return {
        code: 500,
        msg: '操作失败',
        data: ''
      }
    }
  }
] as unknown as MockMethod[]
