/*
 * @Author: caizhihao
 * @Date: 2023-05-22 11:30:54
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-24 19:43:51
 * @FilePath: \react\react-cocashy-pay\craco.config.js
 * @Description:
 *
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
	webpack: {
		alias: {
			'@': resolve('src'),
			components: resolve('src/components'),
			assets: resolve('src/assets'),
		},
	},
	devServer: {
		port: 8088,
		hot: true,
		host: '0.0.0.0',
		proxy: {
			'/stage-api': {
				target: 'http://testclient.idcashypay.com/stage-api',
				changeOrigin: true,
				pathRewrite: {
					'^/stage-api': '',
				},
			},
		},
	},
	style: {
		postcss: {
			mode: 'extends',
			loaderOptions: {
				postcssOptions: {
					ident: 'postcss',
					plugins: [
						[
							'postcss-px-to-viewport-8-plugin',
							{
								viewportWidth: 375, // 设计稿的视口宽度
							},
						],
					],
				},
			},
		},
	},
}
