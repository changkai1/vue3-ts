<template>
    <div>
        <button @click="foo">按钮</button>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import { demoMixin } from "./mixins/demoMixin.js"
export default {
    name: '',
    mixins: [demoMixin],
    data() {
        return {
            title: "组件的title"
        };
    },
    methods: {
        
    },
    created () {
        console.log("组件的created执行了")
    }
}
</script>
<style scoped>
    
</style>