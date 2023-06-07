/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:24:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-07 12:15:49
 * @FilePath: \react\react-cocashy-pay\src\views\register\index.tsx
 * @Description:
 *
 */
import { useParams } from 'react-router-dom'
import { RegisterCard } from '../../components/registerCard/index'
import { RegisterLang } from '../../components/registerLang/index'
import { MethodContainer, RegisterContainer } from './css'
import { Dispatch, createContext, useEffect, useState } from 'react'
import { GetOrder } from '@/api/register'
import { GetOrderRes } from '@/api/type'
import { Toast } from 'antd-mobile'
import { useCardInfo, useGetMethodList } from './utils'
import { PayMethod } from './component'
import { RegisterInvalid } from '@/components/registerInvalid'
import { useInterval } from '../../utils/index'
import { RegisteSuccess } from '../../components/registerSuccess/index'
import { BgcContainer } from '@/components/css'
import { CardInfo, ListType } from './type'

// redux相关
import { All, SET_CARDINFO, CLEAR_CARDINFO, SET_ASYNC_CARDINFO } from '@/store/actions'
import { SET_ASYNC_HOMEINFO } from '@/store_combineReducers/home/actions'
import { SET_ASYNC_DETAILINFO } from '@/store_combineReducers/detail/actions'
import { connect, useDispatch } from 'react-redux'
import { CState } from '@/store/reducer'
import { GetOrderQuery } from '../../api/type'
import store from '@/store'

// 本质是个组件，所以放外面，当props需要层层传递时，可以使用该hook直接获取
export const ListContext = createContext<ListType[]>([])

// 使用connect
// const Register: React.FC<any> = props => {
// 使用useDispatch
export const Register: React.FC<any> = () => {
	const dispatch: Dispatch<any> = useDispatch()

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
			Toast.show({ icon: 'loading', maskClickable: false, duration: 0 })
			// props.SET_ASYNC_CARDINFO({ orderNo: orderNo! }) //不用hook方法
			dispatch(SET_ASYNC_CARDINFO({ orderNo: orderNo! })) //使用useDispatch
			// dispatch(CLEAR_CARDINFO())

			// 分片
			dispatch(SET_ASYNC_HOMEINFO({ orderNo: orderNo! }))
			dispatch(SET_ASYNC_DETAILINFO({ orderNo: orderNo! }))

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
			{registerData && orderNo ? (
				<RegisterContainer>
					<RegisterLang cardInfo={cardInfo} setRegisterData={setRegisterData} />
					<RegisterCard cardInfo={cardInfo} />
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
												{/* <ListContext.Provider value={method.list}>
													<PayMethod clearIntervalHandler={clearIntervalHandler} setOrederStatus={setOrederStatus} />
												</ListContext.Provider> */}
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

// 使用useDispatch，就不用使用connect
// 返回对象
// const mapDispatchToProps = (dispatch: Dispatch<All>) => ({
// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
// 	SET_CARDINFO: (payload: CardInfo) => dispatch(SET_CARDINFO(payload)), //同步
// 	SET_ASYNC_CARDINFO: (query: GetOrderQuery) => dispatch(SET_ASYNC_CARDINFO(query)), //异步
// 	CLEAR_CARDINFO: () => dispatch(CLEAR_CARDINFO()),
// 	// SET_CARDINFO: () => dispatch({type: 'SET_CARDINFO}),
// 	// CLEAR_CARDINFO: () => ({ type: 'CLEAR_CARDINFO' }),
// })

// const mapStateToProps = (state: CState) => ({
// 	cardInfo: state.cardInfo,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Register)
