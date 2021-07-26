<template>
    <div>
        <!-- <h3>{{info1.name}}--{{ info1.age }}</h3> -->
        <!-- <h3>{{name}}--{{ age }}</h3> -->
        <h3>{{ age }}</h3>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
    setup() {
        let info1 = reactive({
            name: "why",
            age: 10
        })
        /** 
         * 1、对 reactive响应式对象做解构，需要用toRefs包裹，把reactive对象中的所有属性都转成 ref
         *    toRefs() 需要包裹 reactive的响应式对象
         */
        // let { name, age } = toRefs(info1)

        /**
         * 2、解构info1中的一个 age，需要使用toRef() 使用 age.value
        */
        let age = toRef(info1, "age")
        let changeAge = () => {
            // info1.age++
            age.value++
        }
        return {
            info1,
            // name,
            age,
            changeAge
        }
    }
}
</script>

<style scoped>

</style>