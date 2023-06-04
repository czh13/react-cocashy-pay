/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:16:44
 * @LastEditors: 177745994@qq.com 177745994@qq.com
 * @LastEditTime: 2023-06-03 18:43:51
 * @FilePath: /react-cocashy-pay/src/store/reducer/index.ts
 * @Description:
 *
 */

// 什么时候用这种写法，当我们要给对象里的属性默认值的时候
// const initState = {
// 	number: 0,
// }
// type IState = Readonly<typeof initState>

import { CardInfo } from '@/views/register/type'
import * as Actions from '../actions'
import * as ActionTypes from '../actions/type'

export type CState = Readonly<typeof initState>

const initState = {
	cardInfo: {} as CardInfo,
}

export const reducer = (state = initState, action: Actions.All) => {
	// 有数据进行更新时，返回一个新的state
	switch (action.type) {
		case ActionTypes.SET_CARDINFO:
			return { cardInfo: { ...state.cardInfo, ...action.payload } }
		case ActionTypes.CLEAR_CARDINFO:
			return { cardInfo: {} }
		default:
			return state
	}
}
