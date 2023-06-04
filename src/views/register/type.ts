/*
 * @Author: caizhihao
 * @Date: 2023-05-25 17:58:00
 * @LastEditors: 177745994@qq.com 177745994@qq.com
 * @LastEditTime: 2023-06-03 16:30:44
 * @FilePath: /react-cocashy-pay/src/views/register/type.ts
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
