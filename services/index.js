
// 2. 封装成一个类 ==>使用实例 发请求
class GPRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
  request(options) {
    const { url } = options
    return new Promise((resolve, reject) => [
      wx.request({
        ...options,
        url: this.baseURL + url,
        success: (res) => { resolve(res.data) },
        fail: reject
      })
    ])
  }
  get(options) {
    return this.request({ ...options, method: 'get' })
  }
  post(options) {
    return this.request({ ...options, method: "post" })
  }
}
export const gpRequest = new GPRequest("http://codercba.com:9002")

