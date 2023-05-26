/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:52:12
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-26 20:41:55
 * @FilePath: \react\react-cocashy-pay\src\components\registerLang\css.ts
 * @Description:
 *
 */
import styled from 'styled-components'

export const RegisterLangContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	.rl_language {
		display: flex;
		align-items: center;
		> img {
			height: 0.25rem;
			width: 0.25rem;
			margin: 0.07rem 0;
		}
		.rl_main {
			font-size: 0.15rem;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.9);
			display: flex;
			align-items: center;
			> span {
				margin: 0 0.04rem;
			}
			> img {
				width: 0.19rem;
				height: 0.19rem;
			}
		}
	}
	.rl_time {
		font-size: 0.17rem;
		font-weight: bold;
		color: #ff0000;
	}
`
