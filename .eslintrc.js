/*
 * @Author: caizhihao
 * @Date: 2023-05-22 11:37:54
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-06-19 17:52:54
 * @FilePath: \react\react-cocashy-pay\.eslintrc.js
 * @Description:
 *
 */
module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/jsx-runtime'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
		'react/prop-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'no-mixed-spaces-and-tabs': 'off',
	},
}
