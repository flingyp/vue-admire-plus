import { AxiosResponse, AxiosRequestConfig, Method } from 'axios'

export interface YPlusRequestParams {
  url: string
  method: Method
  data?: unknown
}

declare module 'axios' {
  interface AxiosInstance {
    YPlusRequest<R = any>(params: YPlusRequestParams): Promise<R>
  }
}
