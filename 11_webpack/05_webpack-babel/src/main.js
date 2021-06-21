import { sum } from "./js/math";
import "./js/element"
const { priceFormat } = require("./js/format")

console.log(sum(10, 20))
console.log((priceFormat()))


const names = ["abc", "cba", "nba"]
names.forEach(item => {
    console.log(item)
})


