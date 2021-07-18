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

            1、type: 当transition和animation同时存在的时候，定义结束时间依据哪个动画
            2、duration: 定义结束时间
                写法: 1、:duration="1000"
                      2、{ enter: 800, leave: 1000 }

            transition 包含两个元素的时候,可以使用mode属性来设置
            3、mode: 可选值 in-out  out-in

            4、appear: 页面一加载就使用动画效果
         -->
        <transition name="why" type="animation" :duration="1000" mode="out-in" :appear="true">
            <component
                :is="isShow ? 'home' : 'about'"></component>
        </transition>
    </div>
</template>
<script>
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
export default {
    name: '',
    components: {
        Home,
        About
    },
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
.why-enter-from,
.why-leave-to {
    opacity: 0;
}
.why-enter-to,
.why-leave-from {
    opacity: 1;
}
.why-enter-active,
.why-leave-active {
    transition: opacity 1s ease;
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
