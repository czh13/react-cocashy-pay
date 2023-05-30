import styled from 'styled-components'
/*
 * @Author: caizhihao
 * @Date: 2023-05-30 10:56:05
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-30 17:33:44
 * @FilePath: \react\react-cocashy-pay\src\components\css.ts
 * @Description:
 *
 */
export const BgcContainer = styled.section<{
	margin_top?: string
}>`
	background: #ffffff;
	box-shadow: 0px 0px 0.04rem 0rem rgba(0, 0, 0, 0.06);
	border-radius: 0.06rem;
	width: 96%;
	box-sizing: border-box;
	margin-top: ${props => props.margin_top};
`
