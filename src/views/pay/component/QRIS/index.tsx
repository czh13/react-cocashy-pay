/*
 * @Author: caizhihao
 * @Date: 2023-05-31 15:18:58
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-31 17:27:38
 * @FilePath: \react\react-cocashy-pay\src\views\detail\component\QRIS\index.tsx
 * @Description:
 *
 */
import { BgcContainer } from '@/components/css'
import { QRISContainer } from './css'
import { GetPayRes } from '@/api/type'

export const QRIS = ({ data }: { data: GetPayRes }) => {
	return (
		<BgcContainer>
			<QRISContainer></QRISContainer>
		</BgcContainer>
	)
}
