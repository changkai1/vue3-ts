<template>
    <div>
        category组件
        <p>
            <button @click="handlerClick">按钮</button>
            <p>counter: {{ count }}</p>
        </p>
    </div>
</template>
<script>
export default {
    name: 'category',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        handlerClick() {
            this.count++;
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>