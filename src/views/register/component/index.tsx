import { ListType } from '../type'
import styled from 'styled-components'
/*
 * @Author: caizhihao
 * @Date: 2023-05-26 18:12:17
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-27 10:21:22
 * @FilePath: \react\react-cocashy-pay\src\views\register\component\index.tsx
 * @Description:
 *
 */
export const PayMethod = ({ list }: { list: ListType[] }) => {
	return (
		<MethodTypeContainer>
			{list.map(item => {
				return (
					<div key={item.code} className="pm_type">
						<img src={item.imgUrl} alt="" />
						<p>{item.name}</p>
					</div>
				)
			})}
		</MethodTypeContainer>
	)
}

const MethodTypeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	flex: 1;
	width: 100%;
	.pm_type {
		width: 47%;
		display: flex;
		align-items: center;
		background: #f7f7f9;
		border-radius: 6px;
		padding: 6px;
		box-sizing: border-box;
		margin-bottom: 10px;
		> img {
			width: 0.33rem;
			height: 0.33rem;
		}
		> p {
			white-space: nowrap;
			font-size: 0.15rem;
			color: rgba(0, 0, 0, 0.9);
			margin-left: 0.1rem;
		}
	}
`
