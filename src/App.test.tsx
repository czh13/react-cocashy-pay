/*
 * @Author: caizhihao
 * @Date: 2023-05-22 09:54:01
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-02 12:20:08
 * @FilePath: \react\react-cocashy-pay\src\App.test.tsx
 * @Description:
 *
 */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	const linkElement = screen.getByText(/learn react/i)
	expect(linkElement).toBeInTheDocument()
})
