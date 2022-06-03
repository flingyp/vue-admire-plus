import $http from '@/utils/https'

import { getLocalKey } from '@/utils/common/HandleLocalStorageUtil'

/**
 * 用户登录
 * @param username
 * @param password
 * @returns
 */
export const userLoginApi = async (username: string, password: string) => {
  const response = await $http.YPlusRequest<SysConfig.HttpResponse<string>>({
    url: '/mock/user/login',
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
  return response.msg
}

export interface IUserInfo {
  id: number
  username: string
  nickname: string
  birthday: string
  roles: Array<string>
  permissions: Array<string>
}

/**
 * 用户信息
 */
export const userInfoApi = async () => {
  const response = await $http.YPlusRequest<SysConfig.HttpResponse<IUserInfo>>({
    url: '/mock/user/info',
    method: 'post',
    headers: {
      token: getLocalKey('token') as string
    }
  })
  if (response.code === 200) {
    return response.data
  }
  return response.msg
}
