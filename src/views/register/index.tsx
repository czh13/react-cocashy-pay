/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:24:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-26 14:11:42
 * @FilePath: \react\react-cocashy-pay\src\views\register\index.tsx
 * @Description:
 *
 */
import { useParams } from 'react-router-dom'
import { RegisterCard } from '../../components/registerCard/index'
import { RegisterLang } from '../../components/registerLang/index'
import { RegisterContainer } from './css'
import { useEffect, useState } from 'react'
import { GetOrder } from '@/api/register'
import { GetOrderRes } from '@/api/type'
import { Toast } from 'antd-mobile'

export const Register = () => {
	const { orderNo } = useParams()
	const [registerData, setRegisterData] = useState<GetOrderRes | null>(null)
	useEffect(() => {
		const getOrder = async () => {
			Toast.show({ icon: 'loading', maskClickable: false })
			const { data } = await GetOrder({ orderNo })
			setRegisterData(data)
		}
		getOrder()
	}, [orderNo])
	return (
		<RegisterContainer>
			<RegisterLang></RegisterLang>
			<RegisterCard registerData={registerData}></RegisterCard>
		</RegisterContainer>
	)
}
