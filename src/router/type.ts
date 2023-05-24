/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:52:20
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-24 14:14:58
 * @FilePath: \react\react-cocashy-pay\src\router\type.ts
 * @Description:
 *
 */
export interface MetaProps {
	keepAlive?: boolean
	requiresAuth?: boolean
	title: string
	key?: string
}

export interface RouteObject {
	caseSensitive?: boolean
	children?: RouteObject[]
	element?: React.ReactNode
	path?: string
	meta?: MetaProps
}
