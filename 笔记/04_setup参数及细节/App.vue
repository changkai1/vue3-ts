<template>
    <div>
        <h2>App父组件</h2>
        <p>msg：{{ msg }}</p>
        <button @click="updateMsg">更新数据</button>
        <hr />
        <child
            :message="msg"
            message2="真香"
            @emitMsg="emitMsg">
        </child>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import child from "./components/child.vue"
export default defineComponent({
    name: 'App',
    setup() {
        let msg = ref("测试setup的细节")
        console.log(msg)
        let updateMsg = () => {
            msg.value += "=="
        }
        let emitMsg = (txt: string) => {
            msg.value += txt
        }
        return {
            msg,
            updateMsg,
            emitMsg
        }
    },
    components: {
        child
    }
})
</script>
<style scoped>
    
</style>