/*
 * @Author: caizhihao
 * @Date: 2023-05-23 14:20:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-31 16:42:50
 * @FilePath: \react\react-cocashy-pay\src\utils\request\index.ts
 * @Description:
 *
 */
import axios from 'axios'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { Toast } from 'antd-mobile'
import { CAxiosRequestConfig, Result } from './type'

const service: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_URL,
	withCredentials: false,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
})

// 请求拦截
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		config.hideLoading && Toast.show({ icon: 'loading', maskClickable: false })
		// 添加自定义请求头
		config.headers && typeof config.headers?.set === 'function' && config.headers.set('Accept-Language', sessionStorage.getItem('lang') || 'en-ID', false)
		return config
	},
	error => {
		Toast.show({ content: error.msg })
		return Promise.reject(error)
	}
)

// 相应拦截
service.interceptors.response.use(
	(response: AxiosResponse) => {
		const result = response.data
		if (result.code === 200) {
			Toast.clear()
			return result
		} else {
			!response.config.hideError && Toast.show({ content: result.msg })
			return result
		}
	},
	error => {
		Toast.show({ content: error.msg })
		return Promise.reject(error)
	}
)

export const request = <T>({ url, method, ...config }: CAxiosRequestConfig): Promise<Result<T>> => {
	return service({
		url,
		method,
		...config,
	})
}

// export const http = {
// 	get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
// 		return service.get(url, config)
// 	},

// 	post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
// 		return service.post(url, data, config)
// 	},
// }
