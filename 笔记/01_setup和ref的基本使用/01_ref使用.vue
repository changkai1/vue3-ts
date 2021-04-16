<template>
    <h2>setup和ref的基本使用</h2>
    <h3>{{ number }}</h3>
    <button @click="increase">按钮</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, ref } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
    name: "App",
    setup() {
        // ref定义一个响应式的数据。返回一个ref对象，对象中有一个value属性，如果对数据进行操作，需要使用.value的方式进行修改
        // html模板不需要.value属性的写法
        // ref一般用来定义一个基本类型的响应式数据
        let number = ref(0)
        // console.log(number) // 是一个对象
        function increase() {
            number.value++
        }
        return {
            number,
            increase
        }
    }
});
</script>
