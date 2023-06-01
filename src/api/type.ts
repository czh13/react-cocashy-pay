/*
 * @Author: caizhihao
 * @Date: 2023-05-23 16:06:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-01 15:15:30
 * @FilePath: \react\react-cocashy-pay\src\api\type.ts
 * @Description:
 *
 */
export interface GetOrderQuery {
	orderNo: string
}

export interface GetPayQuery {
	payProCode: string
	orderNo: string
}

export interface GetOrderRes {
	merchantId: string
	mchOrderNo: string
	orderNo: string
	currency: string
	amount: string
	expireTime: string
	completeTime?: any
	payProCode?: any
	orderStatus: string
	expireSeconds: number
	errorCode?: any

	returnUrl?: any
	payProCodeList: string[]
	payInCacheList?: any[]
}

export interface GetPayRes {
	mchOrderNo: string
	orderNo: string
	payCode: string
	payProCode: string
	qrCodeType: string
	pushNumber?: string
	amount: string
	expireSeconds: number
	redirectParams?: any
	errorCode?: any
	returnType?: string
}

export interface GetPayOrderRes extends GetPayRes {
	merchantId: string
	orderStatus: string
	expireTime: string
	completeTime?: any
	currency: string
}

export interface PushOrder {
	orderNo: string
	payProCode: string
	pushNumber: string
}

export interface PushOrderRes {
	code: number
	msg: string
}
