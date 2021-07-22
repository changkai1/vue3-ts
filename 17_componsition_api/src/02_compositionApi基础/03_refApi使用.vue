<template>
    <div>
        <button @click="increase">+1</button>
        <!-- 在template模板中使用ref对象，会自动进行解包 -->
        <p>计数：{{ counter }}</p>
    </div>
</template>

<script>
import { ref } from "vue"
export default {
    setup (props, context) {
        const counter = ref(0)
        const increase = () => {
            counter.value++
        }
        return {
            counter,
            increase
        }
    }
}
</script>

<style scoped>

</style>