// webpack配置文件
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
// vue文件配置
const { VueLoaderPlugin } = require("vue-loader/dist/index")
module.exports = {
    target: "web", // 为哪个运行环境打包
    // watch: true, // 修改文件后自动编译
    // 入口
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../build"), // 获取当前文件的路径
        filename: "js/bundle.js" // 打包后的文件名
    },
    resolve: {
        // 配置文件扩展名
        extensions: [".js", ".json", ".vue", ".mjs"],
        // 文件路径别名配置
        alias: {
            "js": path.resolve(__dirname, "../src/js"),
            "@": path.resolve(__dirname, "../src")
        }
    },
    // 模块配置
    module: {
        rules: [
            // css配置
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
            // less配置
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
            // vue文件配置
            {
                test: /\.vue$/,
                loader: "vue-loader"
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

            // 字体图标处理 file-loader 
            // {
            //     test: /\.(eot|ttf|woff|woff2)$/,
            //     user: {
            //         loader: "file-loader",
            //         options: {
            //             name: "font/[name]_[hash:6].[ext]"
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
            },

            // 字体图标处理 webpack5
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6][ext]" // 打包的图片输出到 font 文件夹，及修改图片名称
                }
            },

            // es6转es5处理 babel-loader 第一种写法
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             // 第一种写法
            //             // plugins: [
            //             //     "@babel/plugin-transform-arrow-functions",
            //             //     "@babel/plugin-transform-block-scoping"
            //             // ]

            //             // 第二种 预设，代替plugin  npm install @babel/preset-env
            //             presets: [
            //                 "@babel/preset-env",
            //                 // 有参数时的写法
            //                 // ["@babel/preset-env", {参数}]
            //             ]
            //         }
            //     }
            // }

            // es6转es5处理 babel-loader 第二种写法，抽离配置项，新建babel.config.js
            {
                test: /\.js$/,
                loader: "babel-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // index.html 模板配置
            title: "哈哈哈"
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true, // 是否兼容vue2，默认兼容
            __VUE_PROD_DEVTOOLS__: false // 生产环境是否打开devtool
        }),
        new VueLoaderPlugin()
    ]
}