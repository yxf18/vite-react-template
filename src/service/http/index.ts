/**
 * @author 杨雪枫 987061450@qq.com
 * @description
 */
import { AxiosInstance, AxiosResponse } from 'axios'
import HttpClient from './base'

const instanceInterceptorsFunction = (httpInstance: AxiosInstance) => {
  httpInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      return res
    },
    (err) => {
      return Promise.reject(err)
    }
  )
}

const httpInstance: AxiosInstance = new HttpClient().create({
  baseURL: '/api',
})
instanceInterceptorsFunction(httpInstance)

export default httpInstance
