<template>
    <div class="app">
        <h2>App父组件</h2>
        <!-- 非props的属性会继承到子组件的根组件上 id/class 会被继承到子组件的div上 ,如果有多个跟组件，需要手动指定-->
        <show-message id="app" class="why" :title="title" :content="content"></show-message>

        <!-- 直接传递对象的简便写法 -->
        <!-- <show-message v-bind="message"></show-message> -->
    </div>
</template>
<script>
import showMessage from "./showMessage.vue"
export default {
    name: '',
    components: {
        showMessage
    },
    data() {
        return {
            title: "哈哈哈",
            content: "我是哈哈哈",
            message: {
                title: "嘻嘻嘻",
                content: "我是嘻嘻嘻"
            }
        }
    },
    methods: {
        
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>