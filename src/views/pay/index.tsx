/*
 * @Author: caizhihao
 * @Date: 2023-05-29 21:16:53
 * @LastEditors: 177745994@qq.com 177745994@qq.com
 * @LastEditTime: 2023-06-03 15:47:21
 * @FilePath: /react-cocashy-pay/src/views/pay/index.tsx
 * @Description:
 *
 */

import { useLocation, useParams } from 'react-router-dom'
import { RegisterContainer } from '../register/css'
import { RegisterInvalid } from '@/components/registerInvalid'
import { RegisterCard } from '@/components/registerCard'
import { RegisterLang } from '@/components/registerLang'
import { GetOrderRes, GetPayOrderRes } from '@/api/type'
import { useState, useEffect, useContext } from 'react'
import { OVO } from './component/OVO'
import { VA } from './component/VA'
import { QRIS } from './component/QRIS'
import { GetOrder, getPayInOrder } from '@/api/register'
import { Toast } from 'antd-mobile'
import { useInterval } from '@/utils'
import { RegisteSuccess } from '@/components/registerSuccess'

export const Pay: React.FC = () => {
	// 数据声明
	const { orderNo } = useParams()
	const { state } = useLocation()

	const [payData, setPayData] = useState<GetPayOrderRes | null>(null)
	const [orederStatus, setOrederStatus] = useState('PAYING')

	const payInEvent = orderNo ? getPayInOrder : GetOrder

	// 数据初始化
	const qrCodeType = payData?.qrCodeType || (state && state.detail.qrCodeType)
	// const payDetail = (state?.detail as GetPayRes) || payData //不用GetPayRes，GetPayOrderRes更全面，且是继承自GetPayRes
	const payDetail = orderNo ? payData! : (state?.detail as GetPayOrderRes)
	// 根据不同type渲染组件
	const typeMap = {
		'0': <VA data={payDetail}></VA>,
		'1': <QRIS data={payDetail}></QRIS>,
		'3': <OVO data={payDetail}></OVO>,
	}

	// 定时循环hook
	const [clearIntervalHandler] = useInterval(async () => {
		const { data, code } = await payInEvent({ orderNo: orderNo! })
		if (code !== 200) {
			return clearIntervalHandler()
		}
		if (data?.orderStatus === 'SUCCESS') {
			clearIntervalHandler()
			setOrederStatus(data.orderStatus)
		}
	}, 10000)

	// 副作用
	useEffect(() => {
		state && setPayData(payDetail)
		const getPayData = async (orderNo: string) => {
			Toast.show({ icon: 'loading', maskClickable: false, duration: 0 })
			const { data, code } = await getPayInOrder({ orderNo })
			Toast.clear()
			if (code !== 200) {
				return clearIntervalHandler()
			}
			setPayData(data)
			if (data?.orderStatus === 'SUCCESS') {
				setOrederStatus(data.orderStatus)
			}
		}
		orderNo && getPayData(orderNo)
	}, [])
	return (
		<>
			{payDetail ? (
				<RegisterContainer>
					<RegisterLang cardInfo={payDetail} setRegisterData={setPayData} />
					<RegisterCard cardInfo={payDetail} />
					{orederStatus === 'PAYING' ? typeMap[qrCodeType as keyof typeof typeMap] : <RegisteSuccess cardInfo={payDetail} />}
				</RegisterContainer>
			) : (
				<RegisterInvalid />
			)}
		</>
	)
}
