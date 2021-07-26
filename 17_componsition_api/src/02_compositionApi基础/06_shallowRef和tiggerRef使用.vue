<template>
    <div>
        <h3>{{ info.name }}--{{ info.age }}</h3>
        <button @click="changeEdit">修改</button>
    </div>
</template>

<script>
import { shallowRef, ref, triggerRef } from "vue";
export default {
    setup() {
        let info = shallowRef({
            name: "why",
            age: 10
        })
        let changeEdit = () => {
            info.value.age++
            // 手动触发
            triggerRef(info)
        }
        return {
            info,
            changeEdit
        }
    }
}
</script>

<style scoped>

</style>