/*
 * @Author: caizhihao
 * @Date: 2023-05-23 16:06:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-23 19:57:13
 * @FilePath: \react\react-cocashy-pay\src\api\type.ts
 * @Description:
 *
 */
export interface GetOrderQuery {
	order: string
}

export interface GetPayQuery {
	payProCode: string
	order: string
}
