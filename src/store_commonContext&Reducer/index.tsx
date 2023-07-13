/*
 * @Author: caizhihao
 * @Date: 2023-06-19 17:47:25
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-21 11:28:59
 * @FilePath: \react\react-cocashy-pay\src\store_commonContext&Reducer\index.tsx
 * @Description:
 *
 */
import React, { createContext, Dispatch, ReactPropTypes, useCallback, useContext, useReducer } from 'react'
interface Prop {
	children?: JSX.Element
}
type Props = Prop & ReactPropTypes

type Action = {
	type: string
	payload?: any
}

type SyncAction = Action | ((dispatch: Dispatch<Action>) => void)

interface IContext {
	state: typeof initState
	dispatch: Dispatch<SyncAction>
}

const initState = {
	count: 1,
}
const Context = createContext<IContext>({
	state: initState,
	dispatch: () => {},
})

// Provider
export const ContextProvider: React.FC<Props> = props => {
	const reducer = useCallback((preState: typeof initState, action: Action) => {
		switch (action.type) {
			case 'increment':
				return { count: preState.count + 1 }
			default:
				return preState
		}
	}, [])

	const [state, dispatch] = useReducer(reducer, initState)

	const funcDispatch: React.Dispatch<SyncAction> = (action: SyncAction) => {
		// 判断action是不是函数，如果是函数，就执行,并且把dispatch传进去
		if (typeof action === 'function') {
			action(dispatch)
		} else {
			dispatch(action)
		}
	}

	return <Context.Provider value={{ state, dispatch: funcDispatch }}>{props.children}</Context.Provider>
}

// context
export const useStoreContext = () => {
	return useContext(Context)
}
