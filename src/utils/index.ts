/*
 * @Author: caizhihao
 * @Date: 2023-05-22 18:05:40
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-23 17:51:05
 * @FilePath: \react\react-cocashy-pay\src\utils\index.ts
 * @Description:
 *
 */
import 'vant/es/toast/style'

export const copyText = (data: string) => {
	const oInput = document.createElement('input')
	oInput.value = data
	document.body.appendChild(oInput)
	oInput.select()
	document.execCommand('Copy')
	oInput.remove()
}

export const toThousands = (num: number, pointLength: number) => {
	num = Number(num)
	if (!num) return '0'
	const _value = num.toString()
	const tempArr = _value.split('.')
	const startValue = tempArr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1.')
	const endValue = pointLength ? num.toFixed(pointLength).split('.')[1] : tempArr[1]
	const noDecimalPointValue = tempArr.length > 1 ? startValue + ',' + endValue : startValue

	return pointLength ? startValue + ',' + endValue : noDecimalPointValue
}

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
