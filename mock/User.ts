import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const MockRandom = Mock.Random

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    timeout: 3000,
    response: ({ body }: any) => {
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
  },
  {
    url: '/mock/user/info',
    method: 'post',
    response: ({ headers }: any) => {
      if (headers.token === 'VPlus-Admin') {
        return {
          code: 200,
          msg: '操作成功',
          data: {
            id: MockRandom.id(),
            username: 'admin',
            nickname: '超级管理员',
            birthday: MockRandom.date(),
            roles: ['admin'],
            permissions: ['sys:root:*']
          }
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
