/*
 * @Author: caizhihao
 * @Date: 2023-05-22 11:30:54
 * @LastEditors: caizhihao 177745994@qq.com
 * @LastEditTime: 2023-05-22 17:57:26
 * @FilePath: \react\react-cocashy-pay\craco.config.js
 * @Description:
 *
 */
const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

const PostCssPxToViewportPlugin = require("postcss-px-to-viewport-8-plugin");

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://192.168.9.19:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            chrome: "49",
            ios: "10",
          },
        },
      ],
    ],
  },
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
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
};
