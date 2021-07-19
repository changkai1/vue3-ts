import { createApp } from 'vue'
import App from './01_mixin和extends/01_mixin基本使用.vue'

const app = createApp(App)
app.mixin({
    data() {
        return {

        }
    },
    created() {
        console.log("全局混入mixin")
    }
})
app.mount('#app')