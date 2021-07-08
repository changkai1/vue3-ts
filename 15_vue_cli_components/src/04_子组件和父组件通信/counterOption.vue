<template>
    <div class="counter-option">
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>

        <input type="text" v-model.number="num">
        <button @click="incrementN">+n</button>
    </div>
</template>
<script>
export default {
    name: 'counterOption',
    // vue3写法，子组件向父组件传递事件写法
    // 1.数组写法
    // emits: ["add", "sub", "addN", "addMun"],
    // 2.对象写法
    emits: {
        add: null,
        sub: null,
        // 可以对传递的参数做验证
        addN: payLoad => {
            if(payLoad > 10) {
                return true
            }
            return false
        },
        addMun: null
    },
    data() {
        return {
            num: 0,
            name: "james",
            age: 30
        }
    },
    methods: {
        increment() {
            this.$emit("add")
        },
        decrement() {
            this.$emit("sub")
        },
        incrementN() {
            // 传一个参数
            this.$emit("addN", this.num)
            // 传多个参数
            this.$emit("addMun", this.num, this.name, this.age)
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>