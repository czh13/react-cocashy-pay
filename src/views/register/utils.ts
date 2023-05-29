import { GetOrderRes } from '@/api/type'

import { CardInfo, ListType } from './type'
/*
 * @Author: caizhihao
 * @Date: 2023-05-25 11:59:24
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-29 21:23:50
 * @FilePath: \react\react-cocashy-pay\src\views\register\utils.ts
 * @Description:
 *
 */

export const useCardInfo = (data: GetOrderRes) => {
	const info: CardInfo = {
		amount: '',
		currency: '',
		mchOrderNo: '',
		orderStatus: '',
		payProCodeList: [] as string[],
		completeTime: '',
		payProCode: '',
		expireSeconds: 0,
	}
	for (const i in info) {
		info[i] = data[i as keyof GetOrderRes]
	}
	return info
}

export const useGetMethodList = (payProCodeList: string[]) => {
	const VAList: ListType[] = [
		{ code: 'BCAVA', name: 'BCA', imgUrl: require('@/assets/img/ico_bca1@2x.png') },
		{ code: 'MandiriVA', name: 'Mandiri', imgUrl: require('@/assets/img/ico_mandiri1@2x.png') },
		{ code: 'BRIVA', name: 'BRI', imgUrl: require('@/assets/img/ico_bri1@2x.png') },
		{ code: 'BNIVA', name: 'BNI', imgUrl: require('@/assets/img/ico_bni1@2x.png') },
		{ code: 'PermataVA', name: 'Permata', imgUrl: require('@/assets/img/ico_permata1@2x.png') },
		{ code: 'CIMBVA', name: 'CIMB', imgUrl: require('@/assets/img/ico_cimb1@2x.png') },
	]
	const walletList: ListType[] = [
		{ code: 'Gopay', name: 'GOPAY', imgUrl: require('@/assets/img/ico_gopay1@2x.png') },
		{ code: 'Dana', name: 'DANA', imgUrl: require('@/assets/img/ico_dana1@2x.png') },
		{ code: 'OVO_PUSH', name: 'OVO', imgUrl: require('@/assets/img/ico_ovo1@2x.png') },
		{ code: 'LinkAja', name: 'LinkAja', imgUrl: require('@/assets/img/ico_link1@2x.png') },
		{ code: 'ShopeeJumpApps', name: 'ShopeePay', imgUrl: require('@/assets/img/ico_shopee1@2x.png') },
		{ code: 'QRIS', name: 'QRIS', imgUrl: require('@/assets/img/ico_qris1@2x.png') },
	]
	const marketList: ListType[] = [
		{ code: 'AlfaGroupVA', name: 'AlfaGroup', imgUrl: require('@/assets/img/ico_alfa1@2x.png') },
		{ code: 'IndomaretVA', name: 'Indomaret', imgUrl: require('@/assets/img/ico_indomaret1@2x.png') },
		{ code: 'BersamaVA', name: 'ATM Bersama', imgUrl: require('@/assets/img/ico_atm1@2x.png') },
	]
	const methodInfoList = [
		{
			title: 'E-wallet/ QRIS',
			img: require('@/assets/img/ico_wallet@2x.png'),
			id: '1',
			list: [] as ListType[],
		},
		{
			title: 'Bank Virtual Account',
			img: require('../../assets/img/ico_account@2x.png'),
			id: '2',
			list: [] as ListType[],
		},
		{
			title: 'Minimarket',
			img: require('../../assets/img/ico_minimarket@2x.png'),
			id: '3',
			list: [] as ListType[],
		},
	]

	methodInfoList[0].list = payProCodeList.map(i => VAList.filter(item => item.code === i)[0]).filter(Boolean) || [...VAList]
	methodInfoList[1].list = payProCodeList.map(i => walletList.filter(item => item.code === i)[0]).filter(Boolean) || [...walletList]
	methodInfoList[2].list = payProCodeList.map(i => marketList.filter(item => item.code === i)[0]).filter(Boolean) || [...marketList]

	return methodInfoList
}
