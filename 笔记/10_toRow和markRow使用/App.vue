<template>
    <div>
        <h2>toRow和markRow</h2>
        <p>state：{{ state }}</p>
        <hr>
        <button @click="toRowUpdate">toRow</button>
        <button @click="markRowUpdate">markRow</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from 'vue'
// interface userInfo {
//     name: string;
//     age: number;
//     likes?: string[] 
// }
export default defineComponent({
    name: 'App',
    setup() {
        /** 
         *  toRaw
                返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
                这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
            markRaw
                标记一个对象，使其永远不会转换为代理。返回对象本身
        */
        // const state = reactive<userInfo>({
        const state = reactive<any>({
            name: "鸣人",
            age: 20,
            car: ["大奔"]
        })
        let toRowUpdate = () => {
            // 响应式
            // const user = state;
            // user.name += "="

            // toRow返回不被代理的对象，不是响应式
            const user = toRaw(state); // user 是普通对象
            user.name += "=";
            console.log(user)
        }
        let markRowUpdate = () => {
            // state.likes = ["吃", "喝"]
            // markRaw标记一个永远不会被代理的对象
            let likes = ["吃", "喝"];
            state.car.push("小奔")
            state.likes = markRaw(likes)
            setInterval(() => {
                if (state.likes) {
                    state.likes[0] += "="
                    console.log(1)
                }
            }, 1000)
            console.log(state)
        }
        return {
            state,
            toRowUpdate,
            markRowUpdate
        }
    }
})
</script>
<style scoped>
    
</style>