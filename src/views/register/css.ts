/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:52:12
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-27 10:19:42
 * @FilePath: \react\react-cocashy-pay\src\views\register\css.ts
 * @Description:
 *
 */
import styled from 'styled-components'

export const RegisterContainer = styled.div`
	background: #f7f7f9;
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
	padding: 0 0.15rem;
	box-sizing: border-box;
`
export const MethodContainer = styled.section`
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
			margin: 0.2rem 0.1rem 0.1rem 0.1rem;
			.mc_logo {
				display: flex;
				align-items: center;
				margin-bottom: 0.2rem;
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
