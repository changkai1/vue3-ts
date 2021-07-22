<template>
    <div>
        <button @click="increase">+1</button>
        <p>计数：{{ readonlyCounter }}</p>
        <p>名字：{{ readonlyInfo1.name }}</p>
    </div>
</template>

<script>
import { reactive, ref, readonly } from "vue"
export default {
    setup (props, context) {
        const counter = ref(10)
        const info1 = reactive({
            name: "why"
        })
        const readonlyCounter = readonly(counter)
        const readonlyInfo1 = readonly(info1)
        const increase = () => {
            // 不能修改readonlyCounter的值
            readonlyCounter.value++
            readonlyInfo1.name = "hahha"
        }
        return {
            counter,
            readonlyInfo1,
            readonlyCounter,
            increase
        }
    }
}
</script>

<style scoped>

</style>