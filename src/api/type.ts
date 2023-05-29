/*
 * @Author: caizhihao
 * @Date: 2023-05-23 16:06:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-29 21:06:06
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
	payProCodeList: string[]
	payInCacheList?: any[]
	orderStatus: string
	returnUrl?: any
	expireSeconds: number
	errorCode?: any
}

export interface GetPayRes {
	mchOrderNo: string
	orderNo: string
	payCode: string
	payProCode: string
	qrCodeType: string
	pushNumber?: any
	amount: string
	expireSeconds: number
	redirectParams?: any
	returnType?: any
	errorCode?: any
}
