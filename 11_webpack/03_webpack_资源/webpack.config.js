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
            // 图片处理 file-loader 不能转base62
            // {
            //     test: /\.(jpg|jpeg|png|gif|svg)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             // outputPath: "img", // 输出后图片放在 img文件夹
            //             // name: "[name]_[hash:8].[ext]", // 打包后图片名字

            //             // 简写放在 img文件夹
            //             name: "img/[name]_[hash:8].[ext]"

            //         }
            //     }
            // },

            // 图片处理 url-loader 可以根据图片大小转base64
            // {
            //     test: /\.(jpg|jpeg|png|gif|svg)$/,
            //     use: {
            //         loader: "url-loader",
            //         options: {
            //             // outputPath: "img", // 输出后图片放在 img文件夹
            //             // name: "[name]_[hash:8].[ext]", // 打包后图片名字

            //             // 简写放在 img文件夹
            //             name: "img/[name]_[hash:8].[ext]",
            //             limit: 100 * 1024, // 小于limit的图片进行base64编码，大于limit的图片不进行转码
            //         }
            //     }
            // },

            // 图片处理 webpack5 
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]" // 打包的图片输出到 img 文件夹，及修改图片名称
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024 // 设置图片转base64的条件
                    }
                }
            }
        ]
    }
}