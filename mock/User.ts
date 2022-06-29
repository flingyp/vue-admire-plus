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
      if (body.username === 'user' && body.password === 'user') {
        return {
          code: 200,
          msg: '操作成功',
          data: 'VPlus-User'
        }
      }
      return {
        code: 500,
        msg: '用户名或密码错误'
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
      if (headers.token === 'VPlus-User') {
        return {
          code: 200,
          msg: '操作成功',
          data: {
            id: MockRandom.id(),
            username: 'user',
            nickname: '普通用户',
            birthday: MockRandom.date(),
            roles: ['user'],
            permissions: ['sys:user:*']
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
