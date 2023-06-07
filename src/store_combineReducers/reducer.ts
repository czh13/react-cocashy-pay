import { combineReducers } from 'redux'

/*
 * @Author: caizhihao
 * @Date: 2023-06-07 11:31:33
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-07 12:07:21
 * @FilePath: \react\react-cocashy-pay\src\store_combineReducers\reducer.ts
 * @Description:
 *
 */
import { reducer as homeReducer } from './home/reducer/index'
import { reducer as detailReducer } from './detail/reducer/index'

export const rootReducer = combineReducers({
	detailState: detailReducer,
	homeStatae: homeReducer,
})
