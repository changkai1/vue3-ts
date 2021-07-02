import { sum } from "./js/math"
import mul from "./ts/mul"
import _ from "lodash-es"
import { createApp } from "vue"
import App from "./vue/App.vue"
import "./css/style.css"
import "./css/title.less"
console.log("Hellow World")
console.log(sum(10, 20))
console.log(_.join(["abc", "cba"], "-"))
console.log(mul(30, 40))
createApp(App).mount("#app")

// let oDiv = document.createElement("a")
// oDiv.className = "title";
// oDiv.innerHTML = "hellow vite"
// document.body.appendChild(oDiv)