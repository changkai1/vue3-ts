import { createApp } from 'vue'
// import App from './01_组件的拆分和嵌套/app.vue'
// import App from './02_组件的css作用域/App.vue'
// import App from './03_父组件和子组件通信/App.vue'
// import App from './04_子组件和父组件通信/App.vue'
// import App from './05_商品页展示/App.vue'
// import App from './06_provide和inject使用/App.vue'
// import App from './07_vue3事件总线/App.vue'
// import App from './08_插槽的基本使用/App.vue'
// import App from './09_具名插槽/App.vue'
// import App from './10_作用域插槽/App.vue'
// import App from './11_动态组件使用/App.vue'
import App from './12_异步组件使用/App.vue'
// import { add } from "@/12_异步组件使用/utils/math.js"
// console.log(add(10, 20))

// add 分包导入 使用import() 函数
import("@/12_异步组件使用/utils/math.js").then(res => {
    console.log(res.add(10, 20))
})
createApp(App).mount('#app')
