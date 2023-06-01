/*
 * @Author: caizhihao
 * @Date: 2023-05-31 12:09:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-01 16:27:34
 * @FilePath: \react\react-cocashy-pay\src\views\pay\component\VA\css.ts
 * @Description:
 *
 */
import styled from 'styled-components'
export const VAContainer = styled.main`
	padding: 0.19rem 0.15rem;
	.va_logo {
		display: flex;
		align-items: center;
		> img {
			width: 0.55rem;
			height: 0.16rem;
		}
		> p {
			font-size: 0.17rem;
			font-weight: bold;
			color: rgba(0, 0, 0, 0.9);
			margin-left: 0.04rem;
		}
	}
	.va_paycode {
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 0.17rem;
		> div:nth-of-type(1) {
			background: rgba(49, 128, 255, 0.08);
			padding: 0.07rem 0 0.07rem 0.06rem;
			font-size: 0.19rem;
			color: rgba(0, 0, 0, 0.9);
			flex-grow: 1;
		}
		> div:nth-of-type(2) {
			font-size: 0.15rem;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.9);
			padding: 0.1rem 0;
			background: #3180ff;
			border-radius: 0.06rem;
			width: 23%;
			text-align: center;
		}
	}
`
