/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:50:43
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-05 20:37:34
 * @FilePath: \react\react-cocashy-pay\src\store\actions\index.ts
 * @Description:
 *
 */

import { CardInfo } from '@/views/register/type'
import * as ActionTypes from './type'
import { GetOrderRes, GetOrderQuery } from '../../api/type'
import { Dispatch } from 'react'
import { GetOrder } from '@/api/register'
import { useCardInfo } from '@/views/register/utils'

interface SET_CARDINFO {
	type: ActionTypes.SET_CARDINFO
	payload: CardInfo
}
interface CLEAR_CARDINFO {
	type: ActionTypes.CLEAR_CARDINFO
	payload: unknown
}

interface SET_ASYNC_CARDINFO {
	type: ActionTypes.SET_CARDINFO
	payload: CardInfo
}
export type All = SET_CARDINFO | CLEAR_CARDINFO | SET_ASYNC_CARDINFO
// 以上是为reducer里的action确认类型

// 以下是当我们在组件dispatch时，需要使用对应type
export function SET_CARDINFO(payload: Partial<GetOrderRes>): SET_CARDINFO {
	return {
		type: ActionTypes.SET_CARDINFO,
		payload,
	}
}
export function CLEAR_CARDINFO(): CLEAR_CARDINFO {
	return {
		type: ActionTypes.CLEAR_CARDINFO,
		payload: {},
	}
}

// 异步thunk，返回一个函数，同步是返回一个对象
export function SET_ASYNC_CARDINFO(query: GetOrderQuery) {
	return async (dispatch: Dispatch<any>) => {
		const { data } = await GetOrder(query)
		const info = data && useCardInfo(data)
		dispatch(SET_CARDINFO(info))
	}
}
