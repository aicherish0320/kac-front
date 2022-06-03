import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 响应拦截器：
 * 服务器返回数据之后，前端 .then 之前被调用
 */

service.interceptors.response.use((resp) => {
  const { success, message, data } = resp.data
  if (success) {
    return data
  }
  // TODO 业务请求错误
  return Promise.reject(new Error(message))
})

export default service
