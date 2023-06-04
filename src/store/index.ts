/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:11:31
 * @LastEditors: 177745994@qq.com 177745994@qq.com
 * @LastEditTime: 2023-06-03 18:15:11
 * @FilePath: /react-cocashy-pay/src/store/index.ts
 * @Description:
 *
 */
import { applyMiddleware, createStore } from 'redux'
import { reducer } from './reducer/index'
import ThunkMiddleware from 'redux-thunk'

const storeEnhancer = applyMiddleware(ThunkMiddleware)
const store = createStore(reducer, storeEnhancer)

export default store
