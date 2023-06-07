/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:50:43
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-07 12:06:42
 * @FilePath: \react\react-cocashy-pay\src\store_combineReducers\home\actions\index.ts
 * @Description:
 *
 */

import { CardInfo } from '@/views/register/type'
import * as ActionTypes from './type'
import { GetOrderRes, GetOrderQuery } from '../../../api/type'
import { Dispatch } from 'react'
import { GetOrder } from '@/api/register'
import { useCardInfo } from '@/views/register/utils'

interface SET_HOMEINFO {
	type: ActionTypes.SET_HOMEINFO
	payload: CardInfo
}
interface CLEAR_HOMEINFO {
	type: ActionTypes.CLEAR_HOMEINFO
	payload: unknown
}

export type All = SET_HOMEINFO | CLEAR_HOMEINFO
// 以上是为reducer里的action确认类型

// 以下是当我们在组件dispatch时，需要使用对应type
export function SET_HOMEINFO(payload: Partial<GetOrderRes>): SET_HOMEINFO {
	return {
		type: ActionTypes.SET_HOMEINFO,
		payload,
	}
}
export function CLEAR_HOMEINFO(): CLEAR_HOMEINFO {
	return {
		type: ActionTypes.CLEAR_HOMEINFO,
		payload: {},
	}
}

// 异步thunk，返回一个函数，同步是返回一个对象
export function SET_ASYNC_HOMEINFO(query: GetOrderQuery) {
	return async (dispatch: Dispatch<All>) => {
		const { data } = await GetOrder(query)
		const info = data && useCardInfo(data)
		dispatch(SET_HOMEINFO(info))
	}
}
