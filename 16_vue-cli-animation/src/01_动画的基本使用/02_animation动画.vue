<template>
    <div class="app">
        <div>
            <button @click="isShow = !isShow">显示/隐藏</button>
        </div>
        <!-- 
            使用transition 实现单元素、组件的过渡
            xxx-enter-from 从....起
            xxx-enter-to   到哪里

            animation动画
            transition 属性
            type: 当transition和animation同时存在的时候，定义结束时间依据哪个动画
            duration: 定义结束时间
                写法: 1、:duration="1000"
                      2、{ enter: 800, leave: 1000 }
         -->
        <transition name="why" type="animation" :duration="1000">
            <h2 class="title" v-if="isShow">Hellow World</h2>
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
.app {
    margin: 0 auto;
    width: 200px;
}
.title {
    display: inline-block
}
.why-enter-active {
    animation: bounce 1s ease;
}
.why-leave-active {
    animation: bounce 1s ease reverse;
}
@keyframes bounce {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>
