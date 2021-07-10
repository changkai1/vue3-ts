<template>
    <div>
        <button @click="btnClick">about按钮</button>
    </div>
</template>
<script>
import emitter from "./utils/eventBus"
export default {
    name: 'About',
    data() {
        return {
            info: {
                name: "james",
                age: 30
            },
            name: "小明"
        }
    },
    methods: {
        btnClick() {
            emitter.emit("getShowMessage", this.info)
            emitter.emit("why", this.name)
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>