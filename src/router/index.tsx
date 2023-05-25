import { useRoutes, Navigate } from 'react-router-dom'
import { Register } from '@/views/register'
import { RouteObject } from './type'
/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:36:09
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-25 12:07:25
 * @FilePath: \react\react-cocashy-pay\src\router\index.tsx
 * @Description:
 *
 */

export const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/register" />,
	},
	{
		path: '/register/:orderNo',
		element: <Register />,
	},
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
