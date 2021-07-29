<template>
    <div>
        <h3>Home组件</h3>
        <button @click="homeIncrease">Home组件按钮</button>
        <h4>{{ name }}</h4>
        <h4>{{ counter }}</h4>
    </div>
</template>

<script>
import { inject } from "vue"
export default {
    setup() {
        // name和counter接收到的值也是ref对象
        const name = inject("name")
        const counter = inject("counter")
        /**
         * 接收到的值也是ref对象，此时修改name和counter值，父组件也会发生改变，
         * 解决方法：在父组件provide时使用readonly包裹
        */
        let homeIncrease = () => {
            counter.value++
        }
        return {
            name,
            counter,
            homeIncrease
        }
    }
}
</script>

<style scoped>

</style>