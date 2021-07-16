<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 
            使用transition 实现单元素、组件的过渡
            xxx-enter-from 从....起
            xxx-enter-to   到哪里
         -->
        <transition name="why">
            <h2 v-if="isShow">Hellow World</h2>
        </transition>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            isShow: true
        };
    },
    methods: {
        
    },
    created () {
        
    }
}
</script>
<style scoped>

    .why-enter-from,
    .why-leave-to
    {
        opacity: 0;
    }
    .why-enter-to,
    .why-leave-from
    {
        opacity: 1;
    }
    .why-enter-active,
    .why-leave-active
    {
        transition: opacity 2s ease;
    }
</style>
