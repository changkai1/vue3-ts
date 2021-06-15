// import "../css/style.css";
import "../css/title.less";
import "../css/img.css";
import imgUrl from "../img/windows.png"

let oDiv = document.createElement("div");
oDiv.innerHTML = "你好，VueJs";
oDiv.className = "title"
document.body.append(oDiv)

// 背景图
let div = document.createElement("div")
div.className = "img-bg";
document.body.appendChild(div)

// src图片
let img = document.createElement("img");
// 图片src引入
img.src = imgUrl;
document.body.appendChild(img)

// console.log(content.length)
