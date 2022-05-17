
export interface HttpHeader {
  [key: string]: string
}

export interface HttpBase {
  url: string // 字符串
  method: 'POST' | 'GET' // 常规请求方式，根据项目要求添加
  data: any // 每次的参数都是不固定的，因此我们暂时不声明数据类型
  header: HttpHeader // 下面的requestheader类型,
  loading: boolean // 请求是否开启loading层
  mask: boolean // 开启loading层的情况下是否不能点击，全屏遮罩
  title: string // 开启loading层的提示内容
  failToast: boolean // 如果请求是否，我是否直接弹出我的提示
}

// 遍历HttpBase中所有key，都改为可选参，这样我们就只管维护HttpBase
export type Http = {
  [K in keyof HttpBase]?: HttpBase[K]
}
