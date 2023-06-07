/*
 * @Author: caizhihao
 * @Date: 2023-05-22 09:54:01
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-07 11:47:29
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
import { Provider } from 'react-redux'
// import store from './store'
import store from './store_combineReducers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<Router>
			{/* <React.StrictMode> */}
			<App />
			{/* </React.StrictMode> */}
		</Router>
	</Provider>
)

reportWebVitals()
