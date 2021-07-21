<template>
    <div>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        }
    },
    /** 
     * setup函数的两个参数
     * 1、props
     *      父组件传递过来的属性
     * 2、context
     *   2.1、attrs
     *          所有非prop的属性
     *   2.2、slots
     *          父组件传递过来的插槽
     *   2.3、emit
     *          组件内部需要发出事件时会用emit
     */
    setup (props, context) {
        console.log(11)
        console.log(props.message);
        console.log(context)
        console.log(context.attrs.id)
        console.log(context.emit)
        console.log(context.slots)
    }
}
</script>

<style scoped>

</style>