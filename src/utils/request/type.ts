export interface Result<T = unknown> {
	code: number
	message: string
	data: T
}

declare module 'axios' {
	export interface AxiosRequestConfig {
		hideError?: boolean
		hideLoading?: boolean
	}
}
