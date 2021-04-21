<template>
    <div>
        <h2>toRe使用</h2>
        <p>state：{{ state }}</p>
        <p>age：{{ age }}</p>
        <p>money：{{ money }}</p>
        <hr>
        <button @click="update">更新数据</button>
        <child :ages="age"></child>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import child from "./components/child.vue"
export default defineComponent({
    name: 'App',
    components: {
        child
    },
    setup() {
        /** 
         * toRef
         * 为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
         * ref
         * 拷贝了一份新的数据值单独操作, 更新时相互不影响
        */
        const state = reactive({
           age: 2,
           money: 100
        })
        const age = toRef(state, 'age')
        const money = ref(state.money)
        console.log(age)
        console.log(money)
        let update = () => {
            // toRef返回的是响应式的ref对象数据，age和state.age 都会改变
            age.value += 3
            // state.age += 5

            // ref返回的是新的数据，和state.money互不影响
            money.value += 4
        }
        return {
            state,
            age,
            money,
            update
        }
    }
})
</script>
<style scoped>
    
</style>