export const baseUri = ''

// 基础头部
export const getHttpHeader = () => {
  return {
    // MFDate: `${new Date().getTime()}`,
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

// 使用默认参数，当数据不传入指定字段时替代
export const DefaultRequestConfig = {
  data: {},
  method: 'GET',
  header: getHttpHeader(),
  dataType: 'json', /* 如设为json，会对返回的数据做一次 JSON.parse */
  responseType: 'text',
}

/**
 * 设置请求头
 * @param header
 */
export const setHttpHeader = (header: any) => {
  DefaultRequestConfig.header = {...DefaultRequestConfig.header, ...header}
}

const request = (options = {}) => {
  const token = uni.getStorageSync('token')
  if (token) {

  } else if (1) {

  }

  // 设置头部
  const config =  Object.assign({}, DefaultRequestConfig, options)

}

export const http1 = (reqData: any): Promise<any> => {
  // 将不存在的参数字段使用默认值进行替换
  const req = {
    ...DefaultRequestConfig,
    ...reqData,
    header: {
      ...DefaultRequestConfig.header,
      ...(reqData.header || {})
    }
  }

  return new Promise((resolve, reject) => {
    // 检测是否开启loading层 是否打开msak
    if (req.loading) uni.showLoading({title: req.title, mask: req.mask})

    uni.request({
      url: `${baseUri}${req.url}`, // 引入我的接口是特殊声明的，所以我就不检测http/https了
      method: req.method,
      data: req.data,
      header: req.header,

    })
      .then((res:any) => {
        uni.hideLoading()
        // 大多数请求中 success并不代表成功，需要我们自己检测statusCode来确保
        if (res.statusCode === 200) {
          resolve(res.data) // 成功
        } else {
          // 如果失败 检测是否直接提示信息
          if (req.failToast) uni.showToast({title: '网络不好，请求失败！'})
          reject(res) // 失败
        }
      })
      .catch(err => {
        // 如果失败 检测是否直接提示信息
        if (req.failToast) uni.showToast({title: '网络不好，请求失败！'})
        reject(err)
      })
  })
}




/**
 * 封装默认的get请求
 * @param url
 * @param data
 * @returns
 */
export const get = (url: string, data?: any): Promise<any> => http({ url, method: 'GET', data })

/**
 * 封装默认的get请求
 * @param url
 * @param data
 * @returns
 */
export const post = (url: string, data?:any): Promise<any> => http({ url, method: 'POST', data })
