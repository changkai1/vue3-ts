<template>
    <div>
    
    </div>
</template>
<script>
import emitter from "./utils/eventBus.js"
export default {
    name: 'HomeContent',
    data() {
        return {

        }
    },
    methods: {
        getShowMessage(info) {
            console.log("info", info)
        }
    },
    created () {
        // 监听一个函数
        emitter.on("getShowMessage", (info) => {
            this.getShowMessage(info)
        })

        // 监听多个函数
        emitter.on("*", (type, info) => {
            console.log("type", type) // getShowMessage
            console.log("info", info)
        })
    },
    destroyed () {
        // 取消监听
        emitter.all.clear()
        console.log(111)
    }
}
</script>
<style scoped>
    
</style>