<template>
    <h2>setup和reactive的基本使用</h2>
    <h3>姓名：{{user.name}}</h3>
    <h2>性别：{{user.sex}}</h2>
    <h3>年龄：{{user.age}}</h3>
    <h3>车：{{user.cars}}</h3>
    <hr/>
    <button @click="updataUser">更新数据</button>
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, reactive } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
    name: "App",
    setup() {
        // objUser为目标对象  user对象为代理对象
        const objUser: any = {
            name: "小明",
            age: "20",
            cars: ["奔驰", "宝马"]
        }
        const user = reactive(objUser);
        console.log(user)
        const updataUser = () => {
            // 修改对象
            // user.name += "==";
            // user.age += "--";
            // user.cars[0] = "奥迪"

            // 新增属性，通过代理对象新增
            // user.sex = "男"

            // 删除属性，删除代理属性
            delete user.age
        }
        return {
            user,
            updataUser
        }
    }
});
</script>
