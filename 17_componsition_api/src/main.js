import { createApp } from 'vue'
// import App from './01_mixin和extends/01_mixin基本使用.vue'
// import App from './02_compositionApi基础/01_setup参数.vue'
// import App from './02_compositionApi基础/02_reactiveApi使用.vue'
// import App from './02_compositionApi基础/03_refApi使用.vue'
import App from './02_compositionApi基础/04_readonlyApi使用.vue'
const app = createApp(App)
// app.mixin({
//     data() {
//         return {

//         }
//     },
//     created() {
//         console.log("全局混入mixin")
//     }
// })
app.mount('#app')