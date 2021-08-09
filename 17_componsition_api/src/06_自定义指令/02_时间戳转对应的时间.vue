<template>
    <div>
        <!-- 自定义指令传值 -->
       <h3 v-format-time="'YYYY/MM/DD HH:mm:ss'">{{ timestamp }}</h3>
       <h3 v-format-time>{{ timestamp }}</h3>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        let timestamp = 1628383781870

        return {
            timestamp
        }
    }
}
</script>

<style scoped>

</style>