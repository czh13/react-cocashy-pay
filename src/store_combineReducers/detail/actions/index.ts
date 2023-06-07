/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:50:43
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-07 12:03:57
 * @FilePath: \react\react-cocashy-pay\src\store_combineReducers\detail\actions\index.ts
 * @Description:
 *
 */

import { CardInfo } from '@/views/register/type'
import * as ActionTypes from './type'
import { GetOrderRes, GetOrderQuery } from '../../../api/type'
import { Dispatch } from 'react'
import { GetOrder } from '@/api/register'
import { useCardInfo } from '@/views/register/utils'

interface SET_DETAILINFO {
	type: ActionTypes.SET_DETAILINFO
	payload: CardInfo
}
interface CLEAR_DETAILINFO {
	type: ActionTypes.CLEAR_DETAILINFO
	payload: unknown
}

export type All = SET_DETAILINFO | CLEAR_DETAILINFO
// 以上是为reducer里的action确认类型

// 以下是当我们在组件dispatch时，需要使用对应type
export function SET_DETAILINFO(payload: Partial<GetOrderRes>): SET_DETAILINFO {
	return {
		type: ActionTypes.SET_DETAILINFO,
		payload,
	}
}
export function CLEAR_DETAILINFO(): CLEAR_DETAILINFO {
	return {
		type: ActionTypes.CLEAR_DETAILINFO,
		payload: {},
	}
}

// 异步thunk，返回一个函数，同步是返回一个对象
export function SET_ASYNC_DETAILINFO(query: GetOrderQuery) {
	return async (dispatch: Dispatch<All>) => {
		const { data } = await GetOrder(query)
		const info = data && useCardInfo(data)
		dispatch(SET_DETAILINFO(info))
	}
}
