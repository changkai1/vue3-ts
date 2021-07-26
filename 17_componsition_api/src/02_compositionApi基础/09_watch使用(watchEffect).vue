<template>
    <div>
        <h2>{{name}}--{{ age }}</h2>
        <button @click="changeName">修改名称</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue"
export default {
    setup () {
        let name = ref("coderwhy")
        let age = ref(20)

        /**
         * 1、watchEffect使用,
         *      默认执行一次，自动收集响应式的数据
         * */ 
        // watchEffect(() => {
        //     console.log("watchEffect")
        //     console.log(name.value)
        //     console.log(age.value)
        // })

        /**
         * 2、停止监听
        */
        // let stop = watchEffect(() => {
        //     console.log("name", name.value, "age", age.value)
        // })

        /**
         * 3、清除副作用 watchEffect参数 onInvalidate也是函数
        */
       let stop = watchEffect((onInvalidate) => {
           const timer = setTimeout(() => {
               console.log("网络请求发送成功了")
           }, 2000)

            onInvalidate(() => {
                clearTimeout(timer)
                // 在这个函数中清除额外的副作用

                // 停止发送网络请求
                // request.cancel()
                
                console.log("onInvalidate")
            })
            console.log("name", name.value, "age", age.value)
       })

        // 修改名字
        let changeName = () => {
            return name.value = "james"
        }

        // 修改名字
        let changeAge = () => {
            if(age.value > 25) {
                // 停止监听
                stop()
            }
            return age.value++ 
        }

        return {
            name,
            age,
            changeName,
            changeAge
        }
    }
}
</script>

<style scoped>

</style>