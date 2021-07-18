<template>
    <div class="app">
        <div>
            <button @click="isShow = !isShow">显示/隐藏</button>
        </div>

        <!-- 
            自定义class
            enter-from-class
            enter-active-class
            enter-to-class

            leave-from-class
            leave-active-class
            leave-to-class
         -->
        <transition
            enter-active-class="animate__animated animate__backInUp"
            leave-active-class="animate__animated animate__backInDown">
            <h2 class="title" v-if="isShow">Hellow World</h2>
        </transition>
    </div>
</template>
<script>
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
.animate__backInDown {
    animation-direction: reverse;
}
</style>
