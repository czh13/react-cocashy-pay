/*
 * @Author: caizhihao
 * @Date: 2023-05-25 17:58:00
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-26 19:59:42
 * @FilePath: \react\react-cocashy-pay\src\views\register\type.ts
 * @Description:
 *
 */
export interface CardInfo {
	[key: string]: string | number | string[]
}

export interface ListType {
	code: string
	name: string
	imgUrl: any
}
