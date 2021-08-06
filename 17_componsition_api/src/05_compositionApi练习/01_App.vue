<template>
    <div>
        <h3>11</h3>
        <button @click="increment">点击按钮+1</button>
        <button @click="decrement">点击按钮-1</button>
        <h3>counter: {{ counter }}</h3>
        <h3>counter的2倍: {{ doubleCounter }}</h3>

        <!-- localStroage显示 -->
        <h3>{{ data }}</h3>

        <p class="content"></p>
        <!-- 右下角显示滚动条位置 -->
        <div class="scroll-div">
            <h3>scrollX：{{ scrollX }}</h3>
            <h3>scrollY：{{ scrollY }}</h3>
        </div>

        <!-- 左下角显示鼠标位置 -->
        <div class="mouse-div">
            <h3>pageX: {{ pageX }}</h3>
            <h3>pageY: {{ pageY }}</h3>
        </div>

    </div>
</template>

<script>
// import { ref, computed } from "vue"
import {useCounter, useTitle, useScroll, useMouse, useLocalStorage} from "./hooks/index.js"
export default {
    setup() {
        // let counter = ref(10)
        // let doubleCounter = computed(() => {
        //     return counter.value * 2
        // })

        // let increment = () => {
        //     counter.value++
        // }
        // let decrement = () => {
        //     counter.value--
        // }

        
        // hooks使用
        // useLocalStorage使用
        let data = useLocalStorage("info","{name: 'james', age: 20}")
        data.name = "kobe"

        // useMouse使用
        let {pageX, pageY} = useMouse()

        // useScroll使用
        let {scrollX, scrollY} = useScroll()
        
        // useTitle使用
        let titleRef = useTitle("coderwhy")
        setTimeout(() => {
            titleRef.value = "kobe"
        }, 2000)

        // useCounter使用
        let { counter, doubleCounter, increment, decrement } = useCounter()
        console.log(useCounter())

        return {
            counter,
            doubleCounter,
            increment,
            decrement,
            titleRef,
            scrollX,
            scrollY,
            pageX,
            pageY,
            data
        }
    }
}
</script>

<style scoped>
.content {
    width: 2000px;
    height: 5000px;
}
.scroll-div {
    position: fixed;
    right: 50px;
    bottom: 50px;
}
.mouse-div {
    position: fixed;
    left: 50px;
    bottom: 50px;
}
</style>