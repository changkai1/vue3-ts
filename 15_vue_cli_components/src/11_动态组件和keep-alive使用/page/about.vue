<template>
    <div>
        about组件
        <p>
            <button @click="handlerClick">按钮</button>
            <p>counter: {{ count }}</p>
        </p>
    </div>
</template>
<script>
export default {
    name: 'about',
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
        console.log("about created")
    },
    unmounted() {
        console.log("about unmounted")
    },
    // 使用keep-alive，还有activated 活跃的  deactivated 不活跃的
    activated () {
        console.log("about activated")
    },
    deactivated () {
        console.log("about deactivated")
    }
}
</script>
<style scoped>
    
</style>