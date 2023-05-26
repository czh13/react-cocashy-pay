import { AxiosRequestConfig } from 'axios'

export interface Result<T = any> {
	code: number
	msg: string
	data: T
}

declare module 'axios' {
	export interface AxiosRequestConfig {
		hideError?: boolean
		hideLoading?: boolean
	}
}

// 继承接口以后可以对被继承接口中的属性进行重写
export interface CAxiosRequestConfig extends AxiosRequestConfig {
	url: string
	method: string
}
