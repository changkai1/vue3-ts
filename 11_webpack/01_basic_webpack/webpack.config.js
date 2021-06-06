// webpack配置文件
const path = require("path");
module.exports = {
    // 入口
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./build"), // 获取当前文件的路径
        filename: "bundle.js" // 打包后的文件名
    }
}