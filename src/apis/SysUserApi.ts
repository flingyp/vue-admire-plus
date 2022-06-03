import $http from '@/utils/https'

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
