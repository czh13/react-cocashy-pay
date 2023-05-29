/*
 * @Author: caizhihao
 * @Date: 2023-05-26 18:12:17
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-29 21:22:38
 * @FilePath: \react\react-cocashy-pay\src\views\register\component\index.tsx
 * @Description:
 *
 */
import { ListType } from '../type'
import { MethodTypeContainer } from './css'
import { useParams, useNavigate } from 'react-router-dom'
import { GetOrder, getPay } from '@/api/register'

export const PayMethod = ({ list, clearIntervalHandler, setOrederStatus }: { list: ListType[]; clearIntervalHandler: () => void; setOrederStatus: (s: string) => void }) => {
	const { orderNo } = useParams()
	const navigate = useNavigate()
	const handleDetail = (payProCode: string) => {
		// 跳转前判断该订单是否已支付成功
		const checkStatus = async () => {
			const { data } = await GetOrder({ orderNo: orderNo! })
			if (data.orderStatus === 'SUCCESS') {
				clearIntervalHandler()
				setOrederStatus(data.orderStatus)
			}
		}

		// 跳转前判断该支付方式是否存在
		const checkOrder = async () => {
			const { data } = await getPay({ payProCode, orderNo: orderNo! })
			if (data.returnType === '1') {
				window.location.href = data.payCode
			} else {
				navigate('/detail')
			}
		}

		checkStatus()
		checkOrder()
	}

	return (
		<MethodTypeContainer>
			{list.map(item => {
				return (
					<div key={item.code} className="pm_type" onClick={() => handleDetail(item.code)}>
						<img src={item.imgUrl} alt="" />
						<p>{item.name}</p>
					</div>
				)
			})}
		</MethodTypeContainer>
	)
}
