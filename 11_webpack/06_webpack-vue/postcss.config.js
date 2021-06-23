// postcss-loader 抽离 plugins，新建postcss.config.js文件，在里面写配置信息
module.exports = {
    plugins: [
        // require("autoprefixer")
        require("postcss-preset-env")
    ]
}