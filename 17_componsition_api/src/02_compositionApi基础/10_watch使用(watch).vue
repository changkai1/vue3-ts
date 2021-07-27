<template>
    <div>
        <h3>{{ info.name }}--{{ info.age }}</h3>
        <h5>{{ name }}</h5>
        <button @click="changeDate">修改</button>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
    setup () {
        const info = reactive({
            name: "why",
            age: 20
        })

        // 1、监听watch时，传入一个getter函数
        // watch(() => {
        //     return info.name
        // },(newValue, oldValue) => {
        //     console.log("newValue:", newValue, "oldValue:", oldValue)
        // })

        // 2、传入一个可响应式的对象： reactive对象 / ref对象
        // 情况一：reactive对象获取到的newValue和oldValue本身都是reactive对象
        // watch(info, (newValue, oldValue) => {
        //     console.log("newValue:", newValue, "oldValue:", oldValue)
        // })

        // 如果希望newValue和oldValue是一个普通的对象
        // watch(() => {
        //     // 解构
        //     return {...info}
        // }, (newValue, oldValue) => {
        //     console.log("newValue:", newValue, "oldValue:", oldValue)
        // })

        // 情况二：ref对象获取newValue和oldValue是value值本身
        const name = ref("小明");
        watch(name, (newValue, oldValue) => {
            console.log("newValue:", newValue, "oldValue:", oldValue)
        })


        // 修改
        let changeDate = () => {
            info.name = "james"
            name.value = "小甜甜"
        }
        return {
            info,
            name,
            changeDate
        }
    }
}
</script>

<style lang="scss" scoped>

</style>