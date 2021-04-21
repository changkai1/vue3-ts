<template>
    <div>
        <h2>readonly和shallowReadonly</h2>
        <p>state2：{{ state2 }}</p>
        <p>state3：{{ state3 }}</p>
        <hr />
        <button @click="update">更新数据</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
    name: 'App',
    setup() {
        const state = reactive({
            name: "佐助",
            age: 20,
            car: {
                name: "大奔",
                color: "yellow"
            },
        })
        // const state2 = readonly(state)
        const state3 = shallowReadonly(state)
        const update = () => {
            /** 
             *  readonly:
                    深度只读数据
                    获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
                    只读代理是深层的：访问的任何嵌套 property 也是只读的。
                shallowReadonly
                    浅只读数据
                    创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换

            */
            // state2.name += "==" 
            // state2.car.name += "=="

            // state3.name += "=="
            // state3.car.name += "=="
        }
        return {
            // state2,
            state3,
            update
        }
    }
})
</script>
<style scoped>
    
</style>