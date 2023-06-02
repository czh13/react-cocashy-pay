/*
 * @Author: caizhihao
 * @Date: 2023-05-22 09:54:01
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-29 18:09:56
 * @FilePath: \react\react-cocashy-pay\src\index.tsx
 * @Description:
 *
 */
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@/assets/css/reset.css'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Router>
		{/* <React.StrictMode> */}
		<App />
		{/* </React.StrictMode> */}
	</Router>
)

reportWebVitals()
