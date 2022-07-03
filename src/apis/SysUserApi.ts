import { SysRouterMenu } from 'types/SysRouterMenu'

import { getLocalKey } from '@/utils/common/HandleLocalStorageUtil'

import $http from '@/utils/https'

/**
 * 获取用户登录
 * @param username
 * @param password
 * @returns
 */
export const userLoginApi = async (username: string, password: string) => {
  const response = await $http.YPlusRequest<SysConfig.HttpResponse<string | undefined>>({
    url: '/user/login',
    method: 'post',
    isLoading: true,
    loadingText: '登录中...',
    data: {
      username,
      password
    }
  })
  if (response.code === 200) {
    return response.data
  }
  return undefined
}

export interface IUserInfo {
  id?: number
  username?: string
  nickname?: string
  birthday?: string
  roles?: Array<string>
  permissions?: Array<string>
}

/**
 * 获取用户信息
 * @returns
 */
export const userInfoApi = async () => {
  const response = await $http.YPlusRequest<SysConfig.HttpResponse<IUserInfo | undefined>>({
    url: '/user/info',
    method: 'post',
    headers: {
      token: getLocalKey('token') as string
    }
  })
  if (response.code === 200) {
    return response.data
  }
  return undefined
}

/**
 * 获取用户异步路由表
 * @returns
 */
export const userAsyncRouters = async () => {
  const response = await $http.YPlusRequest<SysConfig.HttpResponse<SysRouterMenu.VAdmireRoute[] | undefined>>({
    url: '/user/asyncRouters',
    method: 'post',
    headers: {
      token: getLocalKey('token') as string
    }
  })
  if (response.code === 200) {
    return response.data
  }
  return undefined
}
