/*
 * @Author: caizhihao
 * @Date: 2023-05-22 11:30:54
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-23 20:23:34
 * @FilePath: \react\react-cocashy-pay\craco.config.js
 * @Description:
 *
 */
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

const PostCssPxToViewportPlugin = require('postcss-px-to-viewport-8-plugin')

module.exports = {
	webpack: {
		alias: {
			'@': resolve('src'),
			components: resolve('src/components'),
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
							PostCssPxToViewportPlugin({
								viewportWidth: 360, // 视口宽度
							}),
						],
					],
				},
			},
		},
	},
}
