/*
 * @Author: caizhihao
 * @Date: 2023-05-29 20:10:19
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-30 17:16:58
 * @FilePath: \react\react-cocashy-pay\src\components\registerSuccess\index.tsx
 * @Description:
 *
 */
import styled from 'styled-components'
import img_success from '@/assets/img/img_success@2x.png'
import { BgcContainer } from '../css'
import { GetOrderRes } from '@/api/type'
import { PropsType } from '../type'

export const RegisteSuccess: React.FC<PropsType> = ({ cardInfo }: { cardInfo: Partial<GetOrderRes> | null }) => {
	return (
		<BgcContainer>
			<RegisteSuccessContainer>
				<img src={img_success} alt="" />
				<p>Pay Success</p>
				<div>
					<div className="rsc_item">
						<div>
							<div></div>
							<p>付款成功时间：</p>
						</div>
						<p>{cardInfo?.completeTime}</p>
					</div>
					<div className="rsc_item">
						<div>
							<div></div>
							<p>支付类型：</p>
						</div>
						<p>{cardInfo?.payProCode}</p>
					</div>
				</div>
			</RegisteSuccessContainer>
		</BgcContainer>
	)
}

export const RegisteSuccessContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.06rem 0.06rem 0.13rem 0.06rem;
	box-sizing: border-box;
	> img {
		width: 1.29rem;
		height: 1.43rem;
	}
	> p {
		font-size: 0.23rem;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.9);
		margin-bottom: 0.34rem;
	}
	> div {
		align-self: flex-start;
		width: 100%;
		.rsc_item {
			display: flex;
			justify-content: space-between;
			padding: 0.06rem;
			font-size: 0.15rem;
			color: rgba(0, 0, 0, 0.5);
			> div {
				display: flex;
				align-items: center;
				margin-bottom: 0.06rem;
				> div {
					width: 0.08rem;
					height: 0.08rem;
					background: #3180ff;
					border-radius: 50%;
					margin-right: 0.1rem;
				}
			}
		}
	}
`
