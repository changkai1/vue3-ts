export default {
    // 必须要有install函数，默认执行install，传过来app
    install(app) {
        console.log(app)
        // 定义全局变量
        app.config.globalProperties.$name = "codewhy"
    }
}