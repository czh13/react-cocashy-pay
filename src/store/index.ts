/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:11:31
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-05 15:41:33
 * @FilePath: \react\react-cocashy-pay\src\store\index.ts
 * @Description:
 *
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducer/index'
import ThunkMiddleware from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const storeEnhancer = applyMiddleware(ThunkMiddleware)
const store = createStore(reducer, composeEnhancers(storeEnhancer))

export default store
