/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:54:01
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-25 11:57:05
 * @FilePath: \react\react-cocashy-pay\src\components\registerLang\index.tsx
 * @Description:
 *
 */
import ico_language from '@/assets/img/ico_language@2x.png'
import bar_icon_cut from '@/assets/img/bar_icon_cut@2x.png'
import { Popover } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/popover'
import { RegisterLangContainer } from './css'

export const RegisterLang = () => {
	const actions: Action[] = [{ key: 'en-ID', text: 'Indonesian' }]

	const handleAction = (node: Partial<Action>) => {
		console.log(node)
	}
	return (
		<section>
			<RegisterLangContainer>
				<img src={ico_language} alt="" />
				<Popover.Menu actions={actions} placement="bottom-start" onAction={handleAction} trigger="click">
					<div className="rl_main">
						<span>Indonesian</span>
						<img src={bar_icon_cut} alt="" />
					</div>
				</Popover.Menu>
			</RegisterLangContainer>
			<div className="rl_time">2:59:50</div>
		</section>
	)
}