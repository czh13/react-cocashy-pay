import request from '@/utils/request.js'

export function getOrder(query) {
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
