import { useParams } from 'react-router-dom'
import { GetOrder } from '../../api/register'
/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:59:24
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-25 15:39:53
 * @FilePath: \react\react-cocashy-pay\src\views\register\utils.ts
 * @Description:
 *
 */
export const useHttp = async () => {
	const { orderNo } = useParams()
	const { data, code } = await GetOrder({ orderNo })
	return 1
}
