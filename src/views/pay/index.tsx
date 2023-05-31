/*
 * @Author: caizhihao
 * @Date: 2023-05-29 21:16:53
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-31 17:28:00
 * @FilePath: \react\react-cocashy-pay\src\views\detail\index.tsx
 * @Description:
 *
 */

import { useLocation } from 'react-router-dom'
import { RegisterContainer } from '../register/css'
import { RegisterInvalid } from '@/components/registerInvalid'
import { RegisterCard } from '@/components/registerCard'
import { RegisterLang } from '@/components/registerLang'
import { GetOrderRes } from '@/api/type'
import { useState } from 'react'
import { GetPayRes } from '../../api/type'
import { OVO } from './component/OVO'
import { VA } from './component/VA'
import { QRIS } from './component/QRIS'

export const Detail = () => {
	// const params = useParams()
	const { state } = useLocation()
	const { qrCodeType } = state.detail as GetPayRes
	const [registerData, setRegisterData] = useState<GetOrderRes | null>(null)

	const typeMap = {
		'0': <VA data={state.detail}></VA>,
		'1': <QRIS data={state.detail}></QRIS>,
		'3': <OVO data={state.detail}></OVO>,
	}

	console.log(state.detail)
	return (
		<>
			{state.detail ? (
				<RegisterContainer>
					<RegisterLang cardInfo={state.detail} setRegisterData={setRegisterData} />
					<RegisterCard cardInfo={state.detail} />
					{typeMap[qrCodeType as keyof typeof typeMap]}
				</RegisterContainer>
			) : (
				<RegisterInvalid />
			)}
		</>
	)
}
