<template>
    <div>
        <home></home>
    </div>
</template>
<script>
// 使用vue3提供的defineAsyncComponent异步导入组件
import { defineAsyncComponent } from "vue"
// import Loading from "./loading.vue"
// home组件异步导入第一种
const home = defineAsyncComponent(() => import("./home.vue"))

// home组件异步导入第二种
// const home = defineAsyncComponent({
//     loader: () => import("./home.vue"),
//     loadingComponent: Loading, // 加载时的占位组件
//     // errorComponent: "", // 错误时的组件
//     // 在显示loadingComponent组件之前，等待多长时间
//     delay: 2000,
//     /** 
//      * err: 错误信息
//      * retry: 函数，调用retry尝试重新加载
//      * attempts: 记录尝试加载的次数
//      * */ 
//     onError: function(err, retry, attempts) {

//     }
// })
export default {
    name: '',
    components: {
        home
    },
    data() {
        return {

        };
    },
    methods: {
        
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>