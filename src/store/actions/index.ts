/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:50:43
 * @LastEditors: 177745994@qq.com 177745994@qq.com
 * @LastEditTime: 2023-06-03 18:44:04
 * @FilePath: /react-cocashy-pay/src/store/actions/index.ts
 * @Description:
 *
 */

import { CardInfo } from '@/views/register/type'
import * as ActionTypes from './type'

interface SET_CARDINFO {
	type: ActionTypes.SET_CARDINFO
	payload: CardInfo
}
interface CLEAR_CARDINFO {
	type: ActionTypes.CLEAR_CARDINFO
	payload: any
}
export type All = SET_CARDINFO | CLEAR_CARDINFO
// 以上是为reducer里的action确认类型

// 以下是当我们在组件dispatch时，需要使用对应type
export function SET_CARDINFO(payload: CardInfo): SET_CARDINFO {
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
