<template>
    <div>
        <h3>plugins使用</h3>
    </div>
</template>

<script>
import { getCurrentInstance } from "vue"
export default {
    setup() {
        let instance = getCurrentInstance()
        console.log(123, instance)
        // 拿到全局定义的变量 $name
        let name = instance.appContext.config.globalProperties.$name
        console.log(name)
    }
}
</script>

<style scoped>

</style>