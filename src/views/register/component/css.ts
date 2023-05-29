import styled from 'styled-components'

export const MethodTypeContainer = styled.div`
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
