<template>
    <div class="show-message">
        <h2>showMessage子组件</h2>

        <!-- 使用继承的父组件的非 props属性 -->
        <!-- 1.使用所有的非 props属性 -->
        <h3 v-bind="$attrs">{{ title }}</h3>
        <!-- 2.使用指定的非 props属性 -->
        <h3 :class="$attrs.class">{{ title }}</h3>
        <p>{{ content }}</p>
    </div>
</template>
<script>
export default {
    name: 'showMessage',
    inheritAttrs: false, // 禁用继承非props属性
    // props: [ "title", "content" ],
    props: {
        title: {
            type: String, // String Number Boolean Array Object Date Function Symbol
            required: true,
            defalut: "eee"
        },
        content: String,
        info: {
            type: Object,
            defalut() {
                return {
                    name: "why"
                }
            }
        }
    },
    data() {
        return {

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