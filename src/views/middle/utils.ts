/*
 * @Author: caizhihao
 * @Date: 2023-06-10 14:23:33
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-12 14:57:46
 * @FilePath: \react\react-cocashy-pay\src\views\middle\utils.ts
 * @Description:
 *
 */
import { useRef, useEffect, Dispatch, SetStateAction, useCallback, useState } from 'react'

// 解构出来的current的类型是T
// 返回最新的值，可以避免闭包问题，例如在useEffect中使用函数
export const useLatest = <T>(value: T): { readonly current: T } => {
	const ref = useRef(value)
	ref.current = value

	return ref
}

// 只在组件初始化执行的hook
export const useMount = (fn: () => void) => {
	useEffect(() => {
		fn?.()
	}, [])
}

// 只在组件卸载时的 hook
export const useUnmount = (fn: () => void) => {
	const fnRef = useLatest(fn)
	useEffect(
		() => () => {
			fnRef.current()
		},
		[]
	)
}

// 判断当前组件是否卸载
export const useUnmountedRef = (): { readonly current: boolean } => {
	const unmountedRef = useRef<boolean>(false)

	useEffect(() => {
		unmountedRef.current = false
		return () => {
			unmountedRef.current = true
		}
	}, [])

	return unmountedRef
}

// * useSafeState：使用方法与 useState 的用法完全一致，但在组件卸载后异步回调内的 setState 不再执行，这样可以避免因组件卸载后更新状态而导致的内存泄漏。
// 函数重载的写法，可以在同一个函数下定义多种类型值，最后汇总到一块
// 第一行和第二行：是函数签名，声明了函数的输入和输出
// initialState不是必填、可以是函数
// todo Dispatch<SetStateAction<S>> 这种写法是对应useState第二个参数写法
function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]
function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>]
function useSafeState<S>(initialState?: S | (() => S)) {
	const unmountedRef: { current: boolean } = useUnmountedRef()
	const [state, setState] = useState(initialState)
	const setCurrentState = useCallback((currentState: any) => {
		if (unmountedRef.current) return
		setState(currentState)
	}, [])

	// as const 是标记为不可变，即这个数组的长度与成员类型均不可再进行修改
	return [state, setCurrentState] as const
	// readonly [S, Dispatch<SetStateAction<S>>]
}
