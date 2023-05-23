/*
 * @Author: caizhihao
 * @Date: 2023-05-22 18:05:21
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-23 16:08:50
 * @FilePath: \react\react-cocashy-pay\src\api\register.ts
 * @Description:
 *
 */
import { request } from '@/utils/request'
import { GetOrderQuery } from './type'

export function GetOrderQuery(query: GetOrderQuery) {
	return request({
		url: `/payDesk/getOrder`,
		method: 'get',
		params: query,
	})
}

export function getPay(query) {
	return request({
		url: `/payDesk/getPay`,
		method: 'get',
		params: query,
	})
}

export function getPayInOrder(query) {
	return request({
		url: `/payDesk/getPayInOrder`,
		method: 'get',
		params: query,
	})
}

export function getPushOrder(data) {
	return request({
		url: `/payDesk/pushOrder`,
		method: 'post',
		data,
	})
}

export function payDeskPushOrder(data) {
	return request({
		url: `/payDesk/payDeskPushOrder`,
		method: 'post',
		data,
	})
}

export function generateOrder(data) {
	return request({
		url: `/payDesk/generateOrder`,
		method: 'post',
		data,
	})
}

export function generatePayOrder(data) {
	return request({
		url: `/payDesk/generatePayOrder`,
		method: 'post',
		data,
	})
}
