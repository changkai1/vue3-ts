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
// import App from './03_生命周期钩子/App.vue'
// import App from './04_provid和inject/App.vue'
// import App from './05_compositionApi练习/01_App.vue'
// import App from './06_自定义指令/01_局部自定义指令.vue'
// import App from './06_自定义指令/02_时间戳转对应的时间.vue'
// import App from './07_teleport内置组件/App.vue'
import App from './08_plugins插件使用/App.vue'
// 引入object插件
import pluginObject from './08_plugins插件使用/plugins/plugin-object'
// 引入function插件
import pluginFunction from './08_plugins插件使用/plugins/plugin-function'

// 引入自定义指令
import registerDirectives from './06_自定义指令/directives/index.js'
const app = createApp(App)

// 使用插件
app.use(pluginObject)
app.use(pluginFunction)
// 调用自定义指令
registerDirectives(app)

// 全局混入
// app.mixin({
//     data() {
//         return {

//         }
//     },
//     created() {
//         console.log("全局混入mixin")
//     }
// })

// 全局自定义指令
// app.directive("focus", {
//     mounted(el, bindings) {
//         console.log(el)
//         el.focus()
//     }
// })

app.mount('#app')