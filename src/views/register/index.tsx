/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:24:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-30 20:14:02
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
import { RegisterInvalid } from '@/components/registerInvalid'
import { useInterval } from '../../utils/index'
import { RegisteSuccess } from '../../components/registerSuccess/index'
import { BgcContainer } from '@/components/css'

export const Register = () => {
	const { orderNo } = useParams()
	const [registerData, setRegisterData] = useState<GetOrderRes | null>(null)
	const [cardInfo, setCardInfo] = useState<Partial<GetOrderRes> | null>(null)
	const [orederStatus, setOrederStatus] = useState('PAYING')
	const info = registerData && useCardInfo(registerData)
	const methodInfoList = registerData && useGetMethodList(registerData.payProCodeList)
	// 定时循环hook
	const [clearIntervalHandler] = useInterval(async () => {
		const { data, code } = await GetOrder({ orderNo: orderNo! })
		if (code !== 200) {
			return clearIntervalHandler()
		}
		if (data?.orderStatus === 'SUCCESS') {
			clearIntervalHandler()
			setOrederStatus(data.orderStatus)
			useCardInfo(data)
		}
	}, 10000)

	// 副作用
	useEffect(() => {
		setCardInfo(info)
	}, [registerData])

	// 副作用
	useEffect(() => {
		const getOrder = async () => {
			Toast.show({ icon: 'loading', maskClickable: false })
			const { data, code } = await GetOrder({ orderNo: orderNo! })
			Toast.clear()
			if (code !== 200) {
				return clearIntervalHandler()
			}

			setRegisterData(data)
			if (data?.orderStatus === 'SUCCESS') {
				setOrederStatus(data.orderStatus)
				useCardInfo(data)
			}
		}
		getOrder()
	}, [orderNo])

	return (
		<>
			{/* <div style={{ width: '200px', height: '200px' }}>
				距离任务结束 {d}天<i>{h < 10 ? '0' + h : h}</i>:<i>{m < 10 ? '0' + m : m}</i>:<i>{s < 10 ? '0' + s : s}</i>
			</div> */}
			{registerData && orderNo ? (
				<RegisterContainer>
					<RegisterLang cardInfo={cardInfo} setRegisterData={setRegisterData}></RegisterLang>
					<RegisterCard cardInfo={cardInfo}></RegisterCard>
					{orederStatus === 'PAYING' ? (
						<MethodContainer>
							<>
								<header>Select Payment Method</header>
								{methodInfoList?.map(method => {
									return (
										<BgcContainer margin_top="0.13rem" key={method.id}>
											<main>
												<div className="mc_logo">
													<img src={method.img} alt="" />
													<p>{method.title}</p>
												</div>
												<PayMethod list={method.list} clearIntervalHandler={clearIntervalHandler} setOrederStatus={setOrederStatus} />
											</main>
										</BgcContainer>
									)
								})}
							</>
						</MethodContainer>
					) : (
						<RegisteSuccess cardInfo={cardInfo} />
					)}
				</RegisterContainer>
			) : (
				<RegisterInvalid />
			)}
		</>
	)
}
