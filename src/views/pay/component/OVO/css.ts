/*
 * @Author: caizhihao
 * @Date: 2023-05-31 12:09:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-01 17:15:29
 * @FilePath: \react\react-cocashy-pay\src\views\pay\component\OVO\css.ts
 * @Description:
 *
 */
import { Input, Button } from 'antd-mobile'
import styled from 'styled-components'

export const OVOContainer = styled.main`
	padding: 0.19rem 0.15rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	.ovo_logo {
		align-self: flex-start;
		display: flex;
		> p {
			font-size: 0.17rem;
			font-weight: bold;
			color: rgba(0, 0, 0, 0.9);
			margin: 0 0.08rem 0.17rem 0;
		}
		> img {
			width: 0.38rem;
			height: 0.23rem;
		}
	}
	.ovo_phoneTitle {
		align-self: flex-start;
		font-size: 0.15rem;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.9);
		margin-bottom: 0.1rem;
	}
	.ovo_btn {
		width: 100%;
		text-align: center;
		> p {
			font-size: 0.15rem;
			color: #3180ff;
			margin-top: 0.1rem;
		}
	}
`

export const OVOBgcContainer = styled.section`
	width: 96%;
	margin: 0.15rem 0.24rem;
	padding: 0 0.19rem;
	border-radius: 0.06rem;
	box-shadow: 0rem 0rem 0.06rem 0rem rgba(0, 0, 0, 0.06);
	background: #f4f8ff;
	background-clip: padding-box, border-box;
	background-origin: padding-box, border-box;
	background-image: linear-gradient(to right, #f4f8ff, #f4f8ff), linear-gradient(228deg, rgba(49, 128, 255, 1), rgba(6, 210, 255, 0.99), rgba(49, 128, 255, 1));
	border: 0.01rem solid transparent;
	.step-text {
		font-size: 0.15rem;
		color: rgba(0, 0, 0, 0.5);
		padding: 0.13rem 0;

		> span {
			color: rgba(0, 0, 0, 0.9);
			line-height: 0.21rem;
		}

		> div {
			padding: 0.16rem 0;
			line-height: 0.19rem;
			display: flex;
			flex-direction: column;

			> div {
				display: flex;
			}

			> div:nth-of-type(2) {
				margin: 0.13rem 0;
			}
		}
	}
`

export const CInput = styled(Input)`
	border-radius: 0.06rem 0.06rem 0.06rem 0.06rem;
	border: 0.01rem solid #3180ff;
	font-size: 0.15rem;
	color: rgba(0, 0, 0, 0.5);
	padding: 0.08rem;
`
export const CButton = styled(Button)<{
	width?: string
}>`
	background: #3180ff;
	border-radius: 0.06rem 0.06rem 0.06rem 0.06rem;
	width: ${props => props.width || '55%'};
	font-size: 0.15rem;
	color: #ffffff;
	padding: 0.14rem 0;
	margin-top: 0.19rem;
`
