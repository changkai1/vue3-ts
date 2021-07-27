<template>
    <div>
        <h3>{{ info.name }}--{{ info.age }}</h3>
        <h5>{{ info.friend.name }}</h5>
        <button @click="changeDate">修改</button>
    </div>
</template>

<script>
import { reactive, watch } from 'vue'
export default {
    setup () {
        const info = reactive({
            name: "why",
            age: 20,
            friend: {
                name: "james"
            }
        })

        // 深度侦听及立即执行
        watch(() => {
            return {...info}
        }, (newValue, oldValue) => {
            console.log("newValue:", newValue, "oldValue:", oldValue)
        },{
            deep: true,
            immediate: true
        })

        // 修改
        let changeDate = () => {
            info.friend.name = "kobe"
        }

        return {
            info,
            changeDate
        }
    }
}
</script>

<style lang="scss" scoped>

</style>