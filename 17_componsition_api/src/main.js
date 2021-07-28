import { createApp } from 'vue'
// import App from './01_mixin和extends/01_mixin基本使用.vue'
// import App from './02_compositionApi基础/01_setup参数.vue'
// import App from './02_compositionApi基础/02_reactiveApi使用.vue'
// import App from './02_compositionApi基础/03_refApi使用.vue'
// import App from './02_compositionApi基础/04_readonlyApi使用.vue'
// import App from './02_compositionApi基础/05_toRefs和toRef使用.vue'
// import App from './02_compositionApi基础/06_shallowRef和tiggerRef使用.vue'
// import App from './02_compositionApi基础/07_customRef使用(文本框输入后延迟加载).vue'
// import App from './02_compositionApi基础/09_watch使用(watchEffect).vue'
// import App from './02_compositionApi基础/10_watch使用(watch).vue'
// import App from './02_compositionApi基础/11_ref使用.vue'
// import App from './02_compositionApi基础/12_watch监听多个数据.vue'
// import App from './02_compositionApi基础/13_watch深度侦听.vue'
import App from './03_生命周期钩子/App.vue'

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