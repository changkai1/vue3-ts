<template>
    <div>
        <h2>child子组件</h2>
        <p>{{message}}</p>
        <button @click="emitMessage">分发数据</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'child',
    props: {
        message: {
            type: String
        }
    },
    beforeCreate() {
        console.log("beforeCreate执行了")
    },
    setup(props, context) {
        /*
         *  setup细节
         * 1、setup在beforeCreate之前执行了，而且执行一次
         * 2、在setup执行时组件还没有被创建，不能使用this
         * 3、一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
         * 4、返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
         * 5、setup 有两个参数 prop和context  
         *      5.1、props包含配置声明且传入了的所有属性的对象  
         *      5.2、context 包含 attrs对象 slots对象  emit对象
         *           attrs: 包含没有在props配置中声明的属性的对象
         *           slots: 包含所有传入的插槽内容的对象
         *           emit: 用来分发自定义事件的函数, 相当于 this.$emit
         */
        // console.log("setup执行了")
        console.log('props', props)
        console.log('props.message', props.message)
        console.log('message2', context.attrs.message2)
        console.log('context', context)
        let emitMessage = () => {
            context.emit("emitMsg", "xxx")
        }
        return {
            emitMessage
        }
    }
})
</script>
<style scoped>
    
</style>