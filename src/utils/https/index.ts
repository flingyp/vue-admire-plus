/**
 * 需要完成的功能
 * 1. 可创建多个Axios实例
 * 2. 完成请求拦截器、响应拦截器 （给请求实例添加拦截器）
 * 3. 封装统一请求方法
 * 4. 配合ElementPlus Loading组件完成 数据加载的效果
 */

import { YPlusRequestParams } from 'types/ExtendAxiosInstance'
import { ElLoading, ElMessage } from 'element-plus'
import AxiosRequest from './CreateRequestInstance'

/**
 * 默认Axios实例
 * @returns
 */
const DefaultRequestInstance = () => {
  const Request = new AxiosRequest({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
  })

  /**
   * RequestInstance：Axios请求实例
   */
  const { RequestInstance } = Request

  /**
   * 添加自定义请求拦截器
   */
  Request.addRequestInterceptors(config => {
    return config
  })

  /**
   * 添加自定义响应拦截器
   */
  Request.addResponseInterceptors(response => {
    if (response.data.code !== 200) {
      ElMessage({
        message: response.data.msg,
        grouping: true,
        type: 'error'
      })
    }
    return response.data
  })

  /**
   * 添加自定义请求方法（可根据项目需要扩展）
   * @param params：YPlusRequestParams
   * @param R：返回的数据格式
   * @returns
   */
  RequestInstance.YPlusRequest = async <R>(params: YPlusRequestParams): Promise<Awaited<R>> => {
    let loadingInstance = null
    // 加载Loading
    if (params.isLoading) {
      loadingInstance = ElLoading.service({
        lock: true,
        text: params.loadingText || '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    const Response = await RequestInstance.request<any, R>({
      url: params.url,
      method: params.method,
      params: params.params,
      data: params.data,
      headers: params.headers
    })
    // 关闭Loading
    if (params.isLoading) {
      loadingInstance?.close()
    }
    return Response
  }

  return RequestInstance
}

export default DefaultRequestInstance()
