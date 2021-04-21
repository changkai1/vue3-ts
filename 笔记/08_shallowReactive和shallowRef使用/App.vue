<template>
    <div>
        <h2>shallowReactive和shallowRef</h2>
        <hr />
        <p>m1： {{ m1 }}</p>
        <p>m2： {{ m2 }}</p>
        <p>m3： {{ m3 }}</p>
        <p>m4： {{ m4 }}</p>
        <button @click="update">跟新数据</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowReactive, ref, shallowRef } from 'vue'
export default defineComponent({
    name: 'App',
    setup() {
        let m1 = reactive({
            name: "鸣人",
            age: 20,
            car: {
                name: "奔驰",
                color: "red"
            }
        })
        let m2 = shallowReactive({
            name: "鸣人",
            age: 20,
            car: {
                name: "奔驰",
                color: "red"
            }
        })
        let m3 = ref({
            name: "鸣人",
            age: 20,
            car: {
                name: "奔驰",
                color: "red"
            }
        })
        let m4 = shallowRef({
            name: "鸣人",
            age: 20,
            car: {
                name: "奔驰",
                color: "red"
            }
        })
        let update = () => {
            /** 
             * shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)
             * shallowRef: 只处理了value的响应式, 不进行对象的 reactive 处理
             * */
            // 更m1数据 reactive方式
            // m1.name += "==";
            // m1.car.name += "=="

            // 更m2数据 shallowReactive 方式
            // m2.name += "==";
            // m2.car.name += "=="

            // 更m3数据 ref 方式
            // console.log(m3)
            // m3.value.name += "=="
            // m3.value.car.name += "=="

            // 更m4数据 shallowRef 方式
            // m4.value.name += "=="
            // m4.value.car.name += "=="
            console.log(m3, m4)

        }
        return {
            m1,
            m2,
            m3,
            m4,
            update
        }
    }
})
</script>
<style scoped>
    
</style>