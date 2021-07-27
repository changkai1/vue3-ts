<template>
    <div>
        <h3>{{ info.name }}--{{ info.age }}</h3>
        <h5>{{ name }}</h5>
        <button @click="changeDate">修改</button>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
    setup () {
        const info = reactive({
            name: "why",
            age: 20
        })
        const name = ref("小明")

        // watch监听多个数据变化
        watch([() => {
            return {...info}
        }, name], ([infoNewValue, nameNewValue], [infoOldValue, nameOldValue]) => {
            console.log("infoNewValue:", infoNewValue, "nameNewValue:", nameNewValue)
            console.log("infoOldValue:", infoOldValue, "nameOldValue:", nameOldValue)
        })

        // 修改
        let changeDate = () => {
            info.name = "james"
            name.value = "小甜甜"
        }
        return {
            info,
            name,
            changeDate
        }
    }
}
</script>

<style lang="scss" scoped>

</style>