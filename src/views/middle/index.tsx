/*
 * @Author: caizhihao
 * @Date: 2023-06-01 11:40:33
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-10 15:45:19
 * @FilePath: \react\react-cocashy-pay\src\views\middle\index.tsx
 * @Description:
 *
 */
import { Button } from 'antd-mobile'
import { useState, useEffect } from 'react'
import { useLatest, useMount, useUnmount, useUnmountedRef } from './utils'

export const Middle = () => {
	const [flag, setFlag] = useState<boolean>(false)

	return (
		<div>
			<Button onClick={() => setFlag(v => !v)}>切换 {flag ? 'unmount' : 'mount'}</Button>
			{flag && <Child />}
		</div>
	)
}

const Child = () => {
	const unmountedRef = useUnmountedRef()
	useMount(() => {
		console.log('初始化：', unmountedRef)
	})
	useUnmount(() => {
		console.log('卸载：', unmountedRef)
	})

	return <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
}
