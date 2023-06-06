/*
 * @Author: caizhihao
 * @Date: 2023-05-24 16:45:51
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-05 20:54:54
 * @FilePath: \react\react-cocashy-pay\src\components\registerCard\index.tsx
 * @Description:
 *
 */
// import bg_payment from '../../assets/img/bg_payment@2x.png'
import { GetOrderRes } from '@/api/type'
import { toThousands } from '@/utils'
import styled from 'styled-components'
import { PropsType } from '../type'
import store from '@/store'
import { useSelector } from 'react-redux'
import { CState } from '@/store/reducer'

export const RegisterCard: React.FC<PropsType> = ({ cardInfo }) => {
	// 方法1，通过store获取state
	// console.log(store.getState().cardInfo)
	// 方法2，通过useSelector获取state
	const state: CState = useSelector(state => state)
	// console.log(state)
	return (
		<RCContainer>
			<main>
				<p>Total Payment</p>
				<p>
					{cardInfo?.currency || 'Rp'}
					{toThousands(Number(cardInfo?.amount), 0)}
				</p>
				<RCOrder>
					<div>
						<div></div>
						<p>Order ID</p>
					</div>
					<p>{cardInfo?.mchOrderNo}</p>
				</RCOrder>
			</main>
		</RCContainer>
	)
}

const RCContainer = styled.section`
	background: url(${require('../../assets/img/bg_payment@2x.png')}) no-repeat center/100%;
	padding: 0 0.23rem;
	width: 100%;
	> main {
		padding: 0.24rem 0 0.18rem 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		> p:nth-of-type(1) {
			font-size: 0.15rem;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.5);
			margin-bottom: 0.06rem;
		}
		> p:nth-of-type(2) {
			font-size: 0.23rem;
			font-weight: bold;
			color: rgba(0, 0, 0, 0.9);
			margin-bottom: 0.21rem;
		}
	}
`
const RCOrder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.15rem;
	color: rgba(0, 0, 0, 0.5);
	min-height: 0.36rem;
	> div {
		display: flex;
		align-items: center;
		> div {
			width: 0.08rem;
			height: 0.08rem;
			background: #3180ff;
			border-radius: 50%;
			margin-right: 0.07rem;
		}
	}
	> p {
		max-width: 50%;
		white-space: normal;
		word-break: break-all;
		font-size: 0.12rem;
	}
`
