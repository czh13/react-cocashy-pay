/*
 * @Author: caizhihao
 * @Date: 2023-05-23 20:24:35
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-25 12:14:28
 * @FilePath: \react\react-cocashy-pay\src\views\register\index.tsx
 * @Description:
 *
 */
import { RegisterCard } from '../../components/registerCard/index'
import { RegisterLang } from '../../components/registerLang/index'
import { RegisterContainer } from './css'
import { useHttp } from './utils'

export const Register = () => {
	useHttp()

	return (
		<RegisterContainer>
			<RegisterLang></RegisterLang>
			<RegisterCard></RegisterCard>
		</RegisterContainer>
	)
}
