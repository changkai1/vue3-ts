<template>
    <div>
        <my-slot-cpn>
            <!-- 1、可以插入任何标签 -->
            <button>匿名插槽</button>
        </my-slot-cpn>

        <my-slot-cpn>
            <!-- 2、可以插入文字 -->
            我是插槽
        </my-slot-cpn>

        <my-slot-cpn>
            <!-- 3、可以插入组件 -->
            <home/>
        </my-slot-cpn>

        <my-slot-cpn></my-slot-cpn>
    </div>
</template>
<script>
import MySlotCpn from "./MySlotCpn.vue"
import Home from "./home.vue"
export default {
    name: '',
    components: {
        MySlotCpn,
        Home
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