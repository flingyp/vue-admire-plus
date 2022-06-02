/**
 * 需要完成的功能
 * 1. 可创建多个Axios实例
 * 2. 完成请求拦截器、响应拦截器 （给请求实例添加拦截器）
 * 3. 封装统一请求方法
 * 4. 错误处理
 * 5. 取消请求
 * 6. 配合ElementPlus Loading组件完成 数据加载的效果
 */

import { YPlusRequestParams } from 'types/ExtendAxiosInstance'

import AxiosRequest from './CreateRequestInstance'

/**
 * 默认Axios实例
 * @returns
 */
const DefaultRequestInstance = () => {
  const Request = new AxiosRequest({
    baseURL: 'http://192.168.1.104:3000/',
    timeout: 1000
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
    return response.data
  })

  /**
   * 添加自定义请求方法（可根据项目需要扩展）
   * @param params：YPlusRequestParams
   * @param R：返回的数据格式
   * @returns
   */
  RequestInstance.YPlusRequest = <R>(params: YPlusRequestParams) => {
    let IsGetParams = false
    if (params.method === 'GET' || params.method === 'get') {
      IsGetParams = true
    }
    return RequestInstance.request<any, R>({
      url: params.url,
      method: params.method,
      params: IsGetParams ? params.data : null,
      data: !IsGetParams ? params.data : null
    })
  }

  return RequestInstance
}

export default DefaultRequestInstance()
