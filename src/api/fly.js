const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
export const baseUrl = 'http://192.168.199.131:3000'

// 配置请求基地址
fly.config.baseURL = baseUrl
const token = wx.getStorageSync('token')
// 添加请求拦截器
fly.interceptors.request.use((config, promise) => {
    // 给所有请求添加自定义header
  config.headers['token'] = token
  wx.showLoading({
    title: '加载中'
  })
  return config
})

// 添加响应拦截器
fly.interceptors.response.use(
    (response) => {
      // Do something with response data .
      // Just return the data field of response
      wx.hideLoading()
      return response.data
    },
    (err) => {
        // Do something with response error
        // return Promise.resolve("ssss")
      return err
    }
)
export default fly
