/*
 * @Author: caizhihao
 * @Date: 2023-05-31 15:18:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-01 11:44:59
 * @FilePath: \react\react-cocashy-pay\src\views\pay\component\OVO\index.tsx
 * @Description:
 *
 */
import { BgcContainer } from '@/components/css'
import { CButton, CInput, OVOBgcContainer, OVOContainer } from './css'
import { GetPayOrderRes } from '@/api/type'
import ovo_2 from '@/assets/img/ovo_2@2x.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { payDeskPushOrder } from '@/api/register'

export const OVO = ({ data }: { data: GetPayOrderRes }) => {
	const { amount, pushNumber, orderNo, payProCode } = data
	const [value, setValue] = useState<string>(pushNumber || '')
	const navigate = useNavigate()

	const handlePush = async () => {
		const params = {
			orderNo,
			pushNumber: value,
			payProCode,
		}
		const { code } = await payDeskPushOrder(params)
		if (code !== 200) return
		navigate('/middle')
	}
	return (
		<>
			<BgcContainer>
				<OVOContainer>
					<div className="ovo_logo">
						<p>Bayar Rp {amount} Dengan OVO</p>
						<img src={ovo_2} alt="" />
					</div>
					<p className="ovo_phoneTitle">Nomor Ponsel</p>
					<CInput type={'tel'} value={value} disabled={!!pushNumber} onChange={val => setValue(val)} />
					<div className="ovo_btn">
						<CButton onClick={() => handlePush()}>Pay Now</CButton>
						<p onClick={() => navigate(-1)}>{'Bayar Sekarang >'}</p>
					</div>
				</OVOContainer>
			</BgcContainer>
			<OVOBgcContainer>
				<section className="step-main OVO">
					<div className="step-text">
						<span>JIKA TRANSAKSI GAGAL, MOHON LAKUKAN LANGKAH BERIKUT :</span>
						<div>
							<div>
								<p>1.</p>
								<p>Masukkan Nomor Ponsel ( Rekening OVO ) dan coba lakukan pembayaran kembali.</p>
							</div>
							<div>
								<p>2.</p>
								<p>Bersihkan Cache App OVO pada Ponsel Anda.</p>
							</div>
							<div>
								<p>3.</p>
								<p>Jika masalah terus berlanjut, mohon pilih cara pembayaran lainnya.</p>
							</div>
						</div>
						<span>Anda TIDAK AKAN dikenakan charge lagi pada saat mencoba kembali.</span>
					</div>
				</section>
			</OVOBgcContainer>
		</>
	)
}
