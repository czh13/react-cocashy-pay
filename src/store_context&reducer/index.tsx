/*
 * @Author: caizhihao
 * @Date: 2023-06-16 17:26:36
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-19 17:41:02
 * @FilePath: \react\react-cocashy-pay\src\store_context&reducer\index.tsx
 * @Description:
 *
 */
// Count.context.tsx
import React, { createContext, Dispatch, useReducer, useContext } from 'react'

interface IDispatch {
	type: string
	payload?: Partial<typeof initValue>
}

interface IContext {
	state: typeof initValue
	dispatch: Dispatch<IDispatch>
}

const initValue = {
	count: 0,
}

const Context = createContext<IContext>({
	state: initValue,
	dispatch: () => {},
})

export const ReducerContextProvider: React.FC<any> = props => {
	const reducer = (preState: typeof initValue, action: IDispatch) => {
		switch (action.type) {
			case 'increment':
				return {
					...preState,
					count: preState.count + 1,
				}
			case 'decrement':
				return {
					...preState,
					count: preState.count - 1,
				}
			case 'reset':
				return {
					...preState,
					...action.payload,
				}
			default:
				return preState
		}
	}

	const [state, dispatch] = useReducer(reducer, initValue)

	return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>
}

export const useReducerContext = () => {
	return useContext(Context)
}

// const App = () => {
// 	const { state, dispatch } = useReducerContext()

// 	return (
// 		<div>
// 			<p>
// 				<button type="button" onClick={() => dispatch({ type: 'increment' })}>
// 					count is: {state.count}
// 				</button>
// 			</p>
// 		</div>
// 	)
// }

// const AppWithStore = () => {
// 	return (
// 		<ReducerContextProvider>
// 			<App />
// 		</ReducerContextProvider>
// 	)
// }

// export default AppWithStore
