/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:36:09
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-10 14:23:12
 * @FilePath: \react\react-cocashy-pay\src\router\index.tsx
 * @Description:
 *
 */
import { useRoutes, Navigate } from 'react-router-dom'
import { RouteObject } from './type'
import { Register } from '@/views/register'
import { Pay } from '@/views/pay'
import { Middle } from '../views/middle/index'

export const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/register" />,
	},
	{
		path: '/register/:orderNo',
		element: <Register />,
	},
	{
		path: '/pay/:orderNo?',
		element: <Pay />,
	},
	{
		path: '/middle',
		element: <Middle />,
	},
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
