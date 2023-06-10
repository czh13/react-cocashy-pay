/*
 * @Author: caizhihao
 * @Date: 2023-06-01 11:40:33
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-10 14:38:31
 * @FilePath: \react\react-cocashy-pay\src\views\middle\index.tsx
 * @Description:
 *
 */
import { useState, useEffect } from 'react'
import { useLatest } from './utils'

export const Middle = () => {
	const [count, setCount] = useState(0)

	// todo useLatest的使用
	const ref = useLatest(count) //ref缓存当前的值，一开始进来打印0，调用setCount之后，此时打印1
	console.log(ref.current, '当前')

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('count:', count)
			console.log('ref:', ref)
			// setCount(count + 1)
			setCount(ref.current + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<div>自定义Hooks：useLatestt</div>
			<div>count: {count}</div>
		</>
	)
}
