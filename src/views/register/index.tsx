/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:24:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-27 14:33:53
 * @FilePath: \react\react-cocashy-pay\src\views\register\index.tsx
 * @Description:
 *
 */
import { useParams } from 'react-router-dom'
import { RegisterCard } from '../../components/registerCard/index'
import { RegisterLang } from '../../components/registerLang/index'
import { MethodContainer, RegisterContainer } from './css'
import { useEffect, useState } from 'react'
import { GetOrder } from '@/api/register'
import { GetOrderRes } from '@/api/type'
import { Toast } from 'antd-mobile'
import { useCardInfo, useGetMethodList } from './utils'
import { PayMethod } from './component'
import { Invalid } from '@/components/invalid'

export const Register = () => {
	const { orderNo } = useParams()
	const [registerData, setRegisterData] = useState<GetOrderRes | null>(null)
	const [cardInfo, setCardInfo] = useState<Partial<GetOrderRes> | null>(null)
	const info = registerData && useCardInfo(registerData)
	const methodInfoList = registerData && useGetMethodList(registerData.payProCodeList)

	// 副作用
	useEffect(() => {
		registerData && setCardInfo(info)
	}, [registerData])

	// 副作用
	useEffect(() => {
		const getOrder = async () => {
			Toast.show({ icon: 'loading', maskClickable: false })
			const { data } = await GetOrder({ orderNo })
			setRegisterData(data)
		}
		getOrder()
	}, [orderNo])

	return (
		<>
			{registerData ? (
				<RegisterContainer>
					<RegisterLang cardInfo={cardInfo}></RegisterLang>
					<RegisterCard cardInfo={cardInfo}></RegisterCard>
					<MethodContainer>
						<>
							<header>Select Payment Method</header>
							{methodInfoList?.map(method => {
								return (
									<div key={method.id}>
										<main>
											<div className="mc_logo">
												<img src={method.img} alt="" />
												<p>{method.title}</p>
											</div>
											<PayMethod list={method.list} />
										</main>
									</div>
								)
							})}
						</>
					</MethodContainer>
				</RegisterContainer>
			) : (
				<Invalid />
			)}
		</>
	)
}
