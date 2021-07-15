<template>
    <div>
        <h2>App组件</h2>
        <h3>{{ message }}</h3>
        <h4>{{ title }}</h4>
        <!-- 
            组件使用一个v-model,默认执行
            <form-input :modelValue="message" @update:model-value="message = $event"></form-input>
         -->
        <!-- <from-input v-model="message"></from-input> -->

        <!-- 组件使用多个v-model -->
        <from-input v-model="message" v-model:title="title"></from-input>
    </div>
</template>
<script>
import FromInput from "./FromInput.vue"
export default {
    name: '',
    components: {
        FromInput
    },
    data() {
        return {
            message: "Hellow App",
            title: "Hellow Title"
        };
    },
    methods: {
        
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>