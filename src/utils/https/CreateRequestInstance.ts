import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 创建Axios实例：AxiosRequest类
 */
export default class AxiosRequest {
  // 请求实例
  public RequestInstance: AxiosInstance

  // 请求配置
  public RequestConfig: AxiosRequestConfig

  constructor(config: AxiosRequestConfig) {
    this.RequestConfig = config
    this.RequestInstance = axios.create(config)
  }

  /**
   * 添加请求拦截器
   * @param callback
   */
  public addRequestInterceptors(callback: (config: AxiosRequestConfig<any>) => AxiosRequestConfig<any>) {
    this.RequestInstance.interceptors.request.use(async config => {
      const RequestConfig = await callback(config)
      return RequestConfig
    })
  }

  /**
   * 添加响应拦截器
   * @param callback
   */
  public addResponseInterceptors(callback: (response: AxiosResponse<any>) => AxiosResponse<any>) {
    this.RequestInstance.interceptors.response.use(async response => {
      const ResponseData = await callback(response)
      return ResponseData
    })
  }
}
