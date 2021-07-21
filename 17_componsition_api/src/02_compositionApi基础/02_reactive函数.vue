<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="increase">+1</button>
        <p>计数：{{ state.counter }}</p>
    </div>
</template>

<script>
import { reactive } from "vue"
export default {
    setup (props, context) {
        const state = reactive({
            counter: 0
        })
        const increase = () => {
            state.counter++
        }
        return {
            title: "Hellow World",
            state,
            increase
        }
    }
}
</script>

<style scoped>

</style>