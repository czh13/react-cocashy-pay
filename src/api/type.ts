/*
 * @Author: caizhihao
 * @Date: 2023-05-23 16:06:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-25 14:40:16
 * @FilePath: \react\react-cocashy-pay\src\api\type.ts
 * @Description:
 *
 */
export interface GetOrderQuery {
	orderNo: string | undefined
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
