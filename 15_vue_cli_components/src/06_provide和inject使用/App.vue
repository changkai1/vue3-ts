<template>
    <div>
        <home></home>
        <button @click="addName">+name</button>
    </div>
</template>
<script>
import Home from "./Home.vue"
import { computed } from "vue"
export default {
    name: '',
    provide() {
        return {
            name: "james",
            age: 30,
            // 监听names长度的变化
            length: computed(() => this.names.length)
        }
    },
    components: {
        Home
    },
    data() {
        return {
            names: ["abc", "cba", "nba"]
        }
    },
    methods: {
        addName() {
            this.names.push("why")
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>