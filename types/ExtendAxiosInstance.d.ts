import { AxiosResponse, AxiosRequestConfig, Method, AxiosRequestHeaders } from 'axios'

export interface YPlusRequestParams {
  url: string
  method: Method
  params?: unknown
  data?: unknown
  isLoading?: boolean
  loadingText?: string
  headers?: AxiosRequestHeaders
}

declare module 'axios' {
  interface AxiosInstance {
    YPlusRequest<R = any>(params: YPlusRequestParams): Promise<Awaited<R>>
  }
}
