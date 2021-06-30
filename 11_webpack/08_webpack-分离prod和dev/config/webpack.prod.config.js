const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.config.js")
module.exports = merge(commonConfig, {
    mode: "production", // 设置生产环境打包还是开发环境打包  开发development  生产production
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./public", // 复制哪个文件夹
                    to: "./", // 复制到build文件夹什么地方 "./"是复制到build文件下
                    globOptions: {
                        ignore: [ // 忽略文件
                            "**/index.html"
                        ]
                    }
                }
            ]
        }),
    ]
})
