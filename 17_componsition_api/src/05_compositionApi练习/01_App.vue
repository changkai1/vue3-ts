<template>
    <div>
        <button @click="increment">点击按钮+1</button>
        <button @click="decrement">点击按钮-1</button>
        <h3>counter: {{ counter }}</h3>
        <h3>counter的2倍: {{ doubleCounter }}</h3>
    </div>
</template>

<script>
// import { ref, computed } from "vue"
import { useCounter } from "./hooks/index.js"
export default {
    setup() {
        // let counter = ref(10)
        // let doubleCounter = computed(() => {
        //     return counter.value * 2
        // })

        // let increment = () => {
        //     counter.value++
        // }
        // let decrement = () => {
        //     counter.value--
        // }

        /**
         * hooks使用
        */
        let { counter, doubleCounter, increment, decrement } = useCounter()
        console.log(useCounter())
        return {
            counter,
            doubleCounter,
            increment,
            decrement
        }
    }
}
</script>

<style scoped>

</style>