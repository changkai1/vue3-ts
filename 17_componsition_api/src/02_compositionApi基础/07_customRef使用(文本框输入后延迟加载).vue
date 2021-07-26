<template>
    <div>
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
    </div>
</template>

<script>
// import { ref } from 'vue'
import useDebounceRef from "./hook/useDebounceRef.js"
export default {
    setup() {
        let message = useDebounceRef("Hellow world")
        return {
            message
        }
    }
}
</script>

<style scoped>

</style>