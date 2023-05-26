/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:24:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-26 21:02:50
 * @FilePath: \react\react-cocashy-pay\src\views\register\index.tsx
 * @Description:
 *
 */
import { useParams } from 'react-router-dom'
import { RegisterCard } from '../../components/registerCard/index'
import { RegisterLang } from '../../components/registerLang/index'
import { RegisterContainer } from './css'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { GetOrder } from '@/api/register'
import { GetOrderRes } from '@/api/type'
import { Toast } from 'antd-mobile'
import { useCardInfo, useGetMethodList } from './utils'
import styled from 'styled-components'

export const Register = () => {
	const { orderNo } = useParams()
	const [registerData, setRegisterData] = useState<GetOrderRes | null>(null)
	const [cardInfo, setCardInfo] = useState<Partial<GetOrderRes> | null>(null)

	const methodInfoList = registerData && useGetMethodList(registerData.payProCodeList)

	const ddd = registerData && useCardInfo(registerData)
	//
	useEffect(() => {
		registerData && setCardInfo(ddd)
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
		<RegisterContainer>
			<RegisterLang registerData={registerData}></RegisterLang>
			<RegisterCard registerData={cardInfo}></RegisterCard>
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
									<div className="mc_type"></div>
								</main>
							</div>
						)
					})}
				</>
			</MethodContainer>
		</RegisterContainer>
	)
}

const MethodContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 0.05rem;
	> header {
		font-size: 0.17rem;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.9);
	}
	> div {
		background: #ffffff;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.06);
		border-radius: 6px;
		margin-top: 0.13rem;
		> main {
			margin: 0.2rem 0.1rem;
			.mc_logo {
				display: flex;
				align-items: center;
				> img {
					height: 0.25rem;
					width: 0.25rem;
				}
				> p {
					font-size: 0.17rem;
					margin-left: 0.08rem;
					font-weight: bold;
					color: rgba(0, 0, 0, 0.9);
				}
			}
		}
	}
`
