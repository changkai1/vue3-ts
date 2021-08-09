// 时间格式化插件 dayjs
import dayJs from "dayjs"
export default function(app) {
    app.directive("format-time", {
        mounted(el, bingings) {
            console.log("el", el)
            console.log("bingings", bingings)
            let timestamp = el.textContent;
            if(timestamp.length == 10) {
                timestamp = timestamp * 1000
            } else {
                timestamp = parseInt(timestamp)
            }
            let format = "YYYY-MM-DD HH:mm:ss";
            if(bingings.value) {
                format = bingings.value
            }
            el.textContent = dayJs(timestamp).format(format)
        }
    })
}