/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:52:12
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-25 11:56:14
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
	> section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.1rem;
		margin: 0 0.15rem;
		.rl_time {
			font-size: 0.17rem;
			font-weight: bold;
			color: #ff0000;
		}
	}
`
