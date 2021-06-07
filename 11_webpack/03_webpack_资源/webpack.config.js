// webpack配置文件
const path = require("path");
module.exports = {
    // 入口
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./build"), // 获取当前文件的路径
        filename: "bundle.js" // 打包后的文件名
    },
    // 模块配置
    module: {
        rules: [
            {
                test: /\.css$/, // 正则
                // 简便写法
                // loader: "css-loader" // 使用哪个loader

                // 完整写法
                use: [
                    // 完整写法一
                    // { loader: "css-loader" },
                    
                    // 完整写法二
                    /** 
                     * 两个loader有加载顺序，先加载css-loader，在加载style-loader
                     * webpack加载loader顺序，从右到左，从下往上
                     * */ 
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                // 简便写法
                // loader: "css-loader" // 使用哪个loader

                // 完整写法
                use: [
                    "style-loader",
                    "css-loader",
                    // 不抽离 plugins 写法
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // },

                    // 抽离 plugins写法，新建postcss.config.js文件，在里面写配置信息
                    "postcss-loader",
                    "less-loader"
                ]
            },
            // 图片处理
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    }
}