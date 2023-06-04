/*
 * @Author: caizhihao
 * @Date: 2023-05-26 18:12:17
 * @LastEditors: 177745994@qq.com 177745994@qq.com
 * @LastEditTime: 2023-06-03 16:08:13
 * @FilePath: /react-cocashy-pay/src/views/register/component/index.tsx
 * @Description:
 *
 */
import { ListType } from '../type'
import { MethodTypeContainer } from './css'
import { useParams, useNavigate } from 'react-router-dom'
import { GetOrder, getPay } from '@/api/register'
import { useContext } from 'react'
import { ListContext } from '..'

interface PropsType {
	list?: ListType[]
	clearIntervalHandler: () => void
	setOrederStatus: (s: string) => void
}

export const PayMethod: React.FC<PropsType> = ({ list, clearIntervalHandler, setOrederStatus }) => {
	const { orderNo } = useParams()
	const navigate = useNavigate()

	// 使用context数据，参数传入通过createContext创建的
	// const List = useContext(ListContext)
	// console.log(List)

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
			const { data, code } = await getPay({ payProCode, orderNo: orderNo! })
			if (code !== 200) {
				return clearIntervalHandler()
			}
			if (data.returnType === '1') {
				window.location.href = data.payCode
			} else {
				// 参数不会展示在url
				navigate('/pay', {
					state: {
						detail: data,
					},
				})
				// 参数会展示在url上
				// navigate(`/detail?data=${JSON.stringify(data)}`)
				// navigate(`/detail/${JSON.stringify(data)}`)
			}
		}

		checkStatus()
		checkOrder()
	}

	return (
		<MethodTypeContainer>
			{list?.map(item => {
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
