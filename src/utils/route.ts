
export const routePush = (
    {url, query = {}}: {url: string, query?: any}
) => {
    const paramsStr = Object.entries(query).map(item => item.join('=')).join('&')
    uni.navigateTo({
        url: `${url}${paramsStr ? '?' + paramsStr: ''}`
    })

}