/*
 * @Author: caizhihao
 * @Date: 2023-06-13 15:21:56
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-13 17:45:41
 * @FilePath: \react\react-cocashy-pay\src\store_toolkit\index.ts
 * @Description:
 *
 */
import { configureStore } from '@reduxjs/toolkit'
import cardInfoSlice from './slice/cardInfoSlice'

const store = configureStore({
	reducer: {
		cardInfo: cardInfoSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
