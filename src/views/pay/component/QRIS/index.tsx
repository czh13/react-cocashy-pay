/*
 * @Author: caizhihao
 * @Date: 2023-05-31 15:18:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-01 17:17:09
 * @FilePath: \react\react-cocashy-pay\src\views\pay\component\QRIS\index.tsx
 * @Description:
 *
 */
import { BgcContainer } from '@/components/css'
import { QRISContainer } from './css'
import { GetPayOrderRes } from '@/api/type'
import QRCode from 'qrcode.react'
import { CButton } from '../OVO/css'

export const QRIS = ({ data }: { data: GetPayOrderRes }) => {
	const { payCode } = data
	console.log(data)
	return (
		<>
			<BgcContainer>
				<QRISContainer>
					<p>Scan kode QR</p>
					<div>
						<QRCode value={payCode} style={{ width: '1.28rem', height: '1.28rem' }}></QRCode>
					</div>
					<CButton width="80%">Tekan untuk Menyimpan</CButton>
				</QRISContainer>
			</BgcContainer>
			<BgcContainer margin_top="0.13rem">111111</BgcContainer>
		</>
	)
}
