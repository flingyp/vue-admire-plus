import { AxiosResponse, AxiosRequestConfig, Method, AxiosRequestHeaders } from 'axios'

// 自定义请求方法
export interface YPlusRequestParams {
  url: string
  method: Method
  params?: unknown
  data?: unknown
  isLoading?: boolean
  loadingText?: string
  headers?: AxiosRequestHeaders
}

// 扩展Axios实例属性或方法
declare module 'axios' {
  interface AxiosInstance {
    YPlusRequest<R = any>(params: YPlusRequestParams): Promise<Awaited<R>>
  }
}
