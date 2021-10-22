const BASE_URL = "http://localhost:8080"
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res) => {
				if(!res.data.success){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}