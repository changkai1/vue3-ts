<template>
    <div class="app">
        <input type="number" step="100" v-model="counter">
        <h2>当前显示数字：{{ showNumber.toFixed(0) }}</h2>
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
            counter: 0,
            showNumber: 0
        };
    },
    methods: {

    },
    watch: {
        counter(newVal) {
            console.log(newVal)
            gsap.to(this, {duration: 2, showNumber: newVal})
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
.app {
    width: 500px;
    margin: 0 auto;
}
.title {
    display: inline-block;
}
</style>
