import { useEffect, useRef } from 'react'

/*
 * @Author: caizhihao
 * @Date: 2023-05-22 18:05:40
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-29 20:15:30
 * @FilePath: \react\react-cocashy-pay\src\utils\index.ts
 * @Description:
 *
 */

// 复制文斌
export const copyText = (data: string) => {
	const oInput = document.createElement('input')
	oInput.value = data
	document.body.appendChild(oInput)
	oInput.select()
	document.execCommand('Copy')
	oInput.remove()
}

//千分位
export const toThousands = (num: number, pointLength: number) => {
	if (!num) return '0'
	const _value = num.toString()
	const tempArr = _value.split('.')
	const startValue = tempArr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1.')
	const endValue = pointLength ? num.toFixed(pointLength).split('.')[1] : tempArr[1]
	const noDecimalPointValue = tempArr.length > 1 ? startValue + ',' + endValue : startValue

	return pointLength ? startValue + ',' + endValue : noDecimalPointValue
}

// 只执行一次生命周期
export const useMount = (callback: () => void) => {
	useEffect(() => {
		callback()
	}, []) //依赖项加上callback,会无限循环,这个和usecallback和usememo有关系
}

// 定时器
export const useInterval = (fn: () => void, delay = 10000, immediate = false): [clearIntervalHandler: () => void] => {
	const timerRef = useRef<number>()

	const clearIntervalHandler = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current)
		}
	}
	useEffect(() => {
		if (typeof delay !== 'number' || delay < 0) return
		if (immediate) {
			fn()
		}
		//setInterval使用window对象，返回的是number类型
		timerRef.current = window.setInterval(() => {
			fn()
		}, delay)
		return () => {
			clearInterval(timerRef.current)
		}
	}, [delay, fn])

	return [clearIntervalHandler]
}

// 游览器版本
export const versionsFn = () => {
	const u = navigator.userAgent
	return {
		trident: u.indexOf('Trident') > -1, //IE内核
		presto: u.indexOf('Presto') > -1, //opera内核
		webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		iPhone: u.indexOf('iPhone') > -1, //是否为iPhone终端
		iPad: u.indexOf('iPad') > -1, //是否iPad终端
		Windows: u.indexOf('Windows') > -1, //是否Windows终端
		Android: u.indexOf('Android') > -1, //Android终端
		webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	}
}
