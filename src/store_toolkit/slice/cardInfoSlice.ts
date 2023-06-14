import { GetOrder } from '@/api/register'
import { GetOrderQuery } from '@/api/type'
import { CardInfo } from '@/views/register/type'
import { useCardInfo } from '@/views/register/utils'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

/*
 * @Author: caizhihao
 * @Date: 2023-06-13 16:43:38
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-14 14:26:01
 * @FilePath: \react\react-cocashy-pay\src\store_toolkit\slice\cardInfoSlice.ts
 * @Description:
 *
 */

interface InitialState {
	homeInfo: CardInfo
}

const initialState: InitialState = {
	homeInfo: {},
}

export const getInfo = createAsyncThunk('cardInfo', async (query: GetOrderQuery) => {
	const { data } = await GetOrder(query)
	const info = data && useCardInfo(data)
	return info
})

export const cardInfoSlice = createSlice({
	name: 'cardInfoSlice',
	initialState,
	reducers: {
		setCardInfo: (state, action: PayloadAction<any>) => {
			state.homeInfo = { ...action.payload }
		},
		clearCardInfo: state => {
			state.homeInfo = {}
		},
	},
	// 异步
	// extraReducers 字段让 slice 处理在别处定义的 actions，
	// 包括由 createAsyncThunk 或其他slice生成的actions。
	extraReducers(builder) {
		builder.addCase(getInfo.fulfilled, (state, { payload }) => {
			state.homeInfo = payload
		})
	},
})

export default cardInfoSlice.reducer

export const { setCardInfo, clearCardInfo } = cardInfoSlice.actions
