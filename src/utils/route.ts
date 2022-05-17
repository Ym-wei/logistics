/**
 * 普通路由跳转
 * @param url 路由地址, 注意不要带.vue
 * @param query 参数 object
 * @param type  跳转类型 默认navigateTo
 */
export const routePush = (
  {url, query = {}, type = 'navigateTo'}: { url: string, query?: any, type?: string }
) => {
  const paramsStr = Object.entries(query).map(item => item.join('=')).join('&')
  // @ts-ignore
  uni[type]({
    url: `${url}${paramsStr ? '?' + paramsStr : ''}`
  })
}

/**
 * 底部标签栏跳转
 * @param url tabbar地址
 * @param query 路由参数
 */
export const routeSwitchTab = (
  {url, query = {}}: { url: string, query?: any }
) => {
  routePush({
    url,
    query,
    type: 'switchTab'
  })
}
