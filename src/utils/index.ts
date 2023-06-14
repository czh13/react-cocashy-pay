import { useEffect, useMemo, useRef, useState } from 'react'
import { ITime, ICbTime } from './type'
import { Toast } from 'antd-mobile'

/*
 * @Author: caizhihao
 * @Date: 2023-05-22 18:05:40
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-12 15:30:26
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
	Toast.show('copy')
	oInput.remove()
}

//千分位
export const toThousands = (num: number, pointLength: number) => {
	if (!num) return 0
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

// 倒计数
export const useCountDown = (differTime = 0, callback: () => void, isImmediate = false): ICbTime => {
	const [diffTime, setDiffTime] = useState<number>(0) //需要倒计时的时间

	const entryTime = useRef<number>(0) //组件接收到参数时的时间
	const finalTime = useRef<number>(0) //当前倒计时要求的时间差
	const isImplementCb = useRef<boolean>(false) //是否可以执行回调

	// 定时器倒计时
	const [clearIntervalHandler] = useInterval(
		() => {
			const curtTimes = new Date().getTime() //
			const TimeDifference = curtTimes - entryTime.current
			setDiffTime(finalTime.current - TimeDifference)
		},
		diffTime <= 0 ? undefined : 1000 //1秒
	)

	useEffect(() => {
		if (!isImplementCb.current) {
			isImplementCb.current = true //默认允许执行回调
		}
		if (differTime > 0) {
			entryTime.current = new Date().getTime()
			finalTime.current = differTime * 1000 //获取需要倒计时的时间
			if (finalTime.current <= 0 && isImmediate) {
				isImplementCb.current = false //如果倒计时是负数，就不执行了
			}
			setDiffTime(finalTime.current) //将倒计时的时间复制到state
		}
	}, [differTime])

	const timeObj = useMemo(() => {
		const time = diffTime > 0 ? diffTime / 1000 : 0
		const h = Math.floor((time / (60 * 60)) % 24)
		const m = Math.floor((time / 60) % 60)
		const s = Math.ceil(time % 60)

		// 时间走完，计时结束需要做的事情
		if (diffTime <= 0 && isImplementCb.current) {
			clearIntervalHandler()
			setTimeout(() => {
				callback?.()
			}, 0)
		}
		return { h, m, s }
	}, [diffTime])

	return timeObj || ({} as ICbTime)
}
