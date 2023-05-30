/*
 * @Author: caizhihao
 * @Date: 2023-05-29 20:10:19
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-30 16:45:49
 * @FilePath: \react\react-cocashy-pay\src\components\registerSuccess\index.tsx
 * @Description:
 *
 */
import styled from 'styled-components'
import img_success from '@/assets/img/img_success@2x.png'
import { BgcContainer } from '../css'
import { GetOrderRes } from '@/api/type'
export const RegisteSuccess = ({ cardInfo }: { cardInfo: Partial<GetOrderRes> | null }) => {
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
	padding: 6px 6px 13px 6px;
	box-sizing: border-box;
	> img {
		width: 129px;
		height: 143px;
	}
	> p {
		font-size: 23px;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.9);
		margin-bottom: 34px;
	}
	> div {
		align-self: flex-start;
		width: 100%;
		.rsc_item {
			display: flex;
			justify-content: space-between;
			padding: 6px;
			font-size: 15px;
			color: rgba(0, 0, 0, 0.5);
			> div {
				display: flex;
				align-items: center;
				margin-bottom: 6px;
				> div {
					width: 8px;
					height: 8px;
					background: #3180ff;
					border-radius: 50%;
					margin-right: 10px;
				}
			}
		}
	}
`
