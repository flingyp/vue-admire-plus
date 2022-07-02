import $http from '@/utils/https'

export interface IUser {
  date: string
  name: string
  address: string
  status: number
}

/**
 * 表格组件Demo 获取用户列表
 * @returns
 */
export const getUserTableApi = async () => {
  const response = await $http.YPlusRequest<SysConfig.HttpResponse<IUser[] | undefined>>({
    url: '/user/list',
    method: 'post'
  })
  if (response.code === 200) {
    return response.data
  }
  return undefined
}
