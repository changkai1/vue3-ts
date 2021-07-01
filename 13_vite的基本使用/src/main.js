import { sum } from "./js/math"
import _ from "lodash-es"
import "./css/style.css"
import "./css/title.less"
console.log("Hellow World")
console.log(sum(10, 20))
console.log(_.join(["abc", "cba"], "-"))

let oDiv = document.createElement("div")
oDiv.className = "title";
oDiv.innerHTML = "hellow vite"
document.body.appendChild(oDiv)