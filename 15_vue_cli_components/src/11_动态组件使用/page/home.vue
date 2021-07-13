<template>
    <div @click="divClick">
        home组件
        <p>name: {{ name }}</p>
        <p>age: {{ age }}</p>
    </div>
</template>
<script>
export default {
    name: 'home',
    emits: ["itemClick"],
    props: {
        name: {
            type: String
        },
        age: {
            type: Number
        }
    },
    data() {
        return {

        }
    },
    methods: {
        divClick() {
            this.$emit("itemClick")
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>