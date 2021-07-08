<template>
    <div>
        <h2>当前计数：{{ num }}</h2>
        <counter-option
            @add="addOne"
            @sub="subOne"
            @addN="addNNum"
            @addMun="addMunOption">
        </counter-option>
    </div>
</template>
<script>
import counterOption from "./counterOption.vue"
export default {
    name: 'App',
    components: {
        counterOption
    },
    data() {
        return {
            num: 0
        }
    },
    methods: {
        addOne() {
            this.num++
        },
        subOne() {
            this.num--
        },
        // 接收一个参数
        addNNum(num) {
            this.num += num
        },
        // 接收多个参数
        addMunOption(num, name, age) {
            console.log("num", num)
            console.log("name", name)
            console.log("age", age)
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>