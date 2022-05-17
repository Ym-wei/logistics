/**
 * 校验是否为手机号
 * @param str
 */
export const isMobile = (str: string) => {
  return /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(str)
}

/**
 * 判断是不是空字符串
 * @param str
 */
export const isEmptyString = (str: string) => {
  return str.trim().length === 0
}
