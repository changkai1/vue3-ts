<template>
    <div>
        <h3 ref="title">Hellow World</h3>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue"
export default {
    setup () {
        const title  = ref(null)
        // 监听title
        watchEffect(() => {
            // 可以获取到h3元素
            // 执行了两次，第一次null，第二次h3元素
            console.log("title", title.value)
        },{
            flush: "post" // 只打印第二次h3元素
        })
        return {
            title
        }
    }
}
</script>

<style scoped>

</style>