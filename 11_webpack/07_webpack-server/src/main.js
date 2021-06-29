import { createApp } from "vue/dist/vue.esm-bundler"
import { sum } from "@/js/math";
import App from "./vue/app.vue"
import "js/element"
import axios from "axios"

// 模块热替换
if(module.hot) {
    module.hot.accept("./js/element.js", () => {
        console.log("element模块热替换了")
    })
}

const { priceFormat } = require("./js/format")

console.log(sum(10, 20))
console.log((priceFormat()))

const app = createApp(App)
app.mount("#app")

console.log(123)
console.log(456)








