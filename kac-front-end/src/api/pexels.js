import request from '@/utils/request'

export const getPexelsList = (data) => {
  return request({
    url: '/pexels/lists',
    params: data
  })
}
