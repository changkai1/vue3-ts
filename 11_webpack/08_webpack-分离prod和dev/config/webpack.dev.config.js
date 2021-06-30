const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.config.js")
module.exports = merge(commonConfig, {
    mode: "development", // 设置生产环境打包还是开发环境打包  开发development  生产production
    devtool: "source-map", // 建立js映射文件，方便调试代码和错误
    devServer: {
        contentBase: "./public", // 加载静态资源
        hot: true, // 模块热替换
        // host: "0.0.0.0", // 设置成0.0.0.0 可以在别的电脑访问到，设置成localhost不能再别的电脑访问到
        port: 8080, // 设置端口号
        open: true, // 打开浏览器
        compress: true, // 开启gzip压缩
        // 代理配置
        proxy: {

        },
    },
})