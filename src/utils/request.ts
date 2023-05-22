/*
 * @Author: caizhihao
 * @Date: 2023-05-22 18:05:40
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-22 18:31:28
 * @FilePath: \react\react-cocashy-pay\src\utils\request.ts
 * @Description: 
 * 
 */
import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios'

const service:AxiosInstance = axios.create({
	baseURL: process.env.VUE_APP_URL, // url = base url + request url
	withCredentials: false, // send cookies when cross-domain requests  当true时，必须在后端增加 response 头信息Access-Control-Allow-Origin，且必须指定域名，而不能指定为*。
	timeout: 30000, // request timeout
	headers: {
		'Content-Type':'application/json;charset=utf-8'
	}
})

// request interceptor
service.interceptors.request.use( 
	config => {
		try {
			// 请求头
			config.headers['Accept-Language'] = sessionStorage.getItem('lang') || 'en-ID'
		} catch (e) {
			console.log('request e:' + e)
		}
		return config
	},
	error => {
		console.log(error) // for debug
		// return Promise.reject(error)
	}
)
service.interceptors.response.use(
	response => {
		const { hideError = false } = response.config || {}
		const res = response.data
		if (res.code === 200) {
			return res
		} else {
			!hideError &&
				// showToast({
				// 	message: res.msg,
				// })
			// return Promise.reject(res)
		}
	},
	error => {
		// showToast({
		// 	message: 'Network Error',
		// })
		// return Promise.reject(error)
	}
)

export default service
