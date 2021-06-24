import { createApp } from "vue/dist/vue.esm-bundler"
import { sum } from "./js/math";
import "./js/element"

import App from "./vue/app.vue"
const { priceFormat } = require("./js/format")

console.log(sum(10, 20))
console.log((priceFormat()))

const app = createApp(App)
app.mount("#app")

