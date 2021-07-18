<template>
    <div class="app">
        <div>
            <button @click="isShow = !isShow">显示/隐藏</button>
        </div>

        <!-- transition 钩子函数
            before-enter
            enter
            after-enter
            enter-cancelled

            before-leave
            leave
            after-leave
            leave-cancelled

            添加 :css="false" 属性会让vue跳过css的检测
         -->
        <transition
            @enter="enter"
            @leave="leave"
            :appear="true"
            :css="false">
            <h2 class="title" v-if="isShow">Hellow World</h2>
        </transition>
    </div>
</template>
<script>
// 引入gsap动画库
import gsap from "gsap"
export default {
    name: '',
    components: {
        
    },
    data() {
        return {
            isShow: true
        };
    },
    methods: {
        enter(el, done) {
            console.log("enter")
            // 从哪个位置达到最终的状态
            gsap.from(el, {
                scale: 0,
                x: 200,
                onComplete: done
            })
        },
        leave(el, done) {
            console.log("leave")
            // 从最终位置达到某个状态
            gsap.to(el, {
                scale: 0,
                x: 200,
                onComplete: done
            })
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
.app {
    width: 200px;
    margin: 0 auto;
}
.title {
    display: inline-block;
}
</style>
