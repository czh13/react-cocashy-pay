/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:54:01
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-05 15:53:27
 * @FilePath: \react\react-cocashy-pay\src\components\registerLang\index.tsx
 * @Description:
 *
 */
import ico_language from '@/assets/img/ico_language@2x.png'
import bar_icon_cut from '@/assets/img/bar_icon_cut@2x.png'
import { Popover } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/popover'
import { RegisterLangContainer } from './css'
import { useCountDown } from '@/utils'
import { PropsType } from '../type'

interface PropsTypeLang extends PropsType {
	setRegisterData: (obj: null) => void
}

export const RegisterLang: React.FC<PropsTypeLang> = ({ cardInfo, setRegisterData }) => {
	const actions: Action[] = [{ key: 'en-ID', text: 'Indonesian' }]

	const handleAction = (node: Partial<Action>) => {
		console.log(node)
	}

	const { h, m, s } = useCountDown(cardInfo?.expireSeconds, () => {
		setRegisterData(null)
	})
	return (
		<RegisterLangContainer>
			<div className="rl_language">
				<img src={ico_language} alt="" />
				<Popover.Menu actions={actions} placement="bottom-start" onAction={handleAction} trigger="click">
					<div className="rl_main">
						<span>Indonesian</span>
						<img src={bar_icon_cut} alt="" />
					</div>
				</Popover.Menu>
			</div>
			<div className="rl_time">
				{h < 10 ? '0' + h : h}:{+m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}
			</div>
		</RegisterLangContainer>
	)
}
