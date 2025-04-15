/**
 * @author 杨雪枫 987061450@qq.com
 * @description
 */
import httpInstance from './http'

export const add = (data: any) => {
  return httpInstance.post('/api/add', data)
}
