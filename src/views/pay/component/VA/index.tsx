/*
 * @Author: caizhihao
 * @Date: 2023-05-31 15:18:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-02 12:18:45
 * @FilePath: \react\react-cocashy-pay\src\views\pay\component\VA\index.tsx
 * @Description:
 *
 */
import { BgcContainer } from '@/components/css'
import { VAContainer } from './css'
import { copyText } from '@/utils'
import { PropsType } from '../type'

const logoUrlMap = {
	AlfaGroupVA: require('@/assets/img/ico_alfa_copy@2x.png'),
	BRIVA: require('@/assets/img/ico_bri_copy@2x.png'),
	BersamaVA: require('@/assets/img/ico_atm_copy@2x.png'),
	PermataVA: require('@/assets/img/ico_per_copy@2x.png'),
	MandiriVA: require('@/assets/img/ico_mandiri_copy@2x.png'),
	BCAVA: require('@/assets/img/ico_bca_copy@2x.png'),
	CIMBVA: require('@/assets/img/ico_cimb_copy@2x.png'),
	IndomaretVA: require('@/assets/img/ico_indomaret_copy@2x.png'),
	BNIVA: require('@/assets/img/ico_bni_copy@2x.png'),
}

export const VA: React.FC<PropsType> = ({ data }) => {
	const { payProCode, payCode } = data
	const handleCopy = () => {
		copyText(payCode)
	}

	return (
		<BgcContainer>
			<VAContainer>
				<div className="va_logo">
					<img src={logoUrlMap[payProCode as keyof typeof logoUrlMap]} alt="" />
					<p>Virtual Account</p>
				</div>
				<div className="va_paycode" onClick={() => handleCopy()}>
					<div>{payCode}</div>
					<div>Copy</div>
				</div>
			</VAContainer>
		</BgcContainer>
	)
}
