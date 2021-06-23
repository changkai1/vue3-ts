import { sum } from "./js/math";
import "./js/element"
import { createApp } from "vue/dist/vue.esm-bundler"
const { priceFormat } = require("./js/format")

console.log(sum(10, 20))
console.log((priceFormat()))

const app = createApp({
    template: "<h2>vue使用</h2>"
})
app.mount("#app")

