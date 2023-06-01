/*
 * @Author: caizhihao
 * @Date: 2023-05-22 18:05:21
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-01 12:08:46
 * @FilePath: \react\react-cocashy-pay\src\api\register.ts
 * @Description:
 *
 */
import { request } from '@/utils/request'
import { GetOrderQuery, GetPayQuery, GetOrderRes, GetPayRes, PushOrderRes, PushOrder, GetPayOrderRes } from './type'

export function GetOrder(query: GetOrderQuery) {
	return request<GetOrderRes>({
		url: `/payDesk/getOrder`,
		method: 'get',
		params: query,
	})
}

export function getPay(query: GetPayQuery) {
	return request<GetPayRes>({
		url: `/payDesk/getPay`,
		method: 'get',
		params: query,
		hideLoading: true,
	})
}

export function getPayInOrder(query: GetOrderQuery) {
	return request<GetPayOrderRes>({
		url: `/payDesk/getPayInOrder`,
		method: 'get',
		params: query,
	})
}

export function getPushOrder(data: PushOrder) {
	return request({
		url: `/payDesk/pushOrder`,
		method: 'post',
		data,
	})
}

export function payDeskPushOrder(data: PushOrder) {
	return request<PushOrderRes>({
		url: `/payDesk/payDeskPushOrder`,
		method: 'post',
		data,
	})
}

// export function generateOrder(data) {
// 	return request({
// 		url: `/payDesk/generateOrder`,
// 		method: 'post',
// 		data,
// 	})
// }

// export function generatePayOrder(data) {
// 	return request({
// 		url: `/payDesk/generatePayOrder`,
// 		method: 'post',
// 		data,
// 	})
// }
