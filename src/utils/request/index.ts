/*
 * @Author: caizhihao
 * @Date: 2023-05-23 14:20:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-23 17:46:59
 * @FilePath: \react\react-cocashy-pay\src\utils\request\index.ts
 * @Description:
 *
 */
import axios, { AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import type { AxiosInstance, AxiosError } from 'axios'
import { Toast } from 'antd-mobile'

const service: AxiosInstance = axios.create({
	baseURL: process.env.VUE_APP_URL,
	withCredentials: false,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
})

// 请求拦截
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		config.hideLoading = false && Toast.show({ icon: 'loading', maskClickable: false })
		// 添加自定义请求头
		config.headers && typeof config.headers?.set === 'function' && config.headers.set('Accept-Language', sessionStorage.getItem('lang') || 'en-ID', false)
		return config
	},
	(error: AxiosError) => {
		Toast.show({ content: error.message })
		return Promise.reject(error)
	}
)

// 相应拦截
service.interceptors.response.use(
	(response: AxiosResponse) => {
		Toast.clear()
		const result = response.data
		if (result.code === 200) {
			return result
		} else {
			!response.config.hideError && Toast.show({ content: result.message })
			return Promise.reject(result)
		}
	},
	error => {
		Toast.show({ content: error.message })
		return Promise.reject(error)
	}
)

export const request = <T>({ url, method, ...config }: AxiosRequestConfig): Promise<T> => {
	return service({
		url,
		method,
		...config,
	})
}
