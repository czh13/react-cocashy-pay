/*
 * @Author: caizhihao
 * @Date: 2023-05-31 12:09:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-31 17:21:16
 * @FilePath: \react\react-cocashy-pay\src\views\detail\component\css.ts
 * @Description:
 *
 */
import styled from 'styled-components'
export const VAContainer = styled.main`
	padding: 19px 15px;
	.va_logo {
		display: flex;
		> img {
			width: 55px;
			height: 16px;
		}
		> p {
			font-size: 17px;
			font-weight: bold;
			color: rgba(0, 0, 0, 0.9);
			margin-left: 4px;
		}
	}
	.va_paycode {
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 17px;
		> div:nth-of-type(1) {
			background: rgba(49, 128, 255, 0.08);
			padding: 7px 0 7px 6px;
			font-size: 19px;
			color: rgba(0, 0, 0, 0.9);
			flex-grow: 1;
		}
		> div:nth-of-type(2) {
			font-size: 15px;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.9);
			padding: 10px 0;
			background: #3180ff;
			border-radius: 6px;
			width: 23%;
			text-align: center;
		}
	}
`
