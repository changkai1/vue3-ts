<template>
    <div>
        <h3>counter: {{ counter }}</h3>
        <button @click="handleClick">按钮+1</button>
    </div>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue"
export default {
    setup () {
        let counter = ref(100)
        // 可以存在两个一样的生命周期
        onMounted(() => {
            console.log("onMounted1")
        })
        onMounted(() => {
            console.log("onMounted2")
        })
        onUpdated(() => {
            console.log("onUpdated")
        })
        let handleClick = () => {
            counter.value++
        }
        return {
            counter,
            handleClick
        }
    }
}
</script>

<style scoped>

</style>