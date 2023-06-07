/*
 * @Author: 177745994@qq.com
 * @Date: 2023-06-03 16:11:31
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-07 11:46:41
 * @FilePath: \react\react-cocashy-pay\src\store_combineReducers\index.ts
 * @Description:
 *
 */
import { createStore, applyMiddleware, compose } from 'redux'

import ThunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const storeEnhancer = applyMiddleware(ThunkMiddleware)
const store = createStore(rootReducer, composeEnhancers(storeEnhancer))

console.log(store.getState())

export default store
