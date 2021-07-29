<template>
    <div>
        <h3>APP组件</h3>
        <button @click="appIncrease">App组件按钮</button>
        <h4>{{ name }}</h4>
        <h4>{{ counter }}</h4>
        <p>==================================</p>
        <home></home>
    </div>
</template>

<script>
import { ref, provide, readonly } from "vue"
import Home from "./Home.vue"
export default {
    components: {
        Home
    },
    setup() {
        const name = ref("coderWhy")
        const counter = ref(100)
        // 通过provide向子组件发送，使用readonly包裹，子组件不能修改接收到的值
        provide("name", readonly(name))
        provide("counter", readonly(counter))

        let appIncrease = () => {
            counter.value++
        }
        return {
            name,
            counter,
            appIncrease
        }
    }
}
</script>

<style scoped>

</style>