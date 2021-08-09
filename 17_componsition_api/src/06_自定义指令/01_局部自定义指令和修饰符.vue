<template>
    <div>
        <!-- 自定义指令 -->
        <input type="text" v-focus>

        <!-- 自定义指令修饰符 -->
        <button
            v-why.a="counter"
            @click="handleClick">
            当前计数: {{ counter }}
        </button>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    // 局部自定义指令
    directives: {
        focus: {
            mounted(el, bindings, vnode, preVnode) {
                // console.log(el)
                // console.log(bindings)
                el.focus()
            }
        },
        why: {
            mounted(el, bindings, vnode, preVnode) {
                console.log("el", el)
                console.log("bindings", bindings)
                // 修饰符和传值 都在bingings中
                console.log(bindings.value) // 传值
                console.log(bindings.modifiers) // 得到的是对象
            }
        }
    },
    setup() {
        let counter = ref(0)
        let handleClick = () => {
            counter.value++
        }

        return {
            counter,
            handleClick
        }
    }
}
</script>

<style scoped>

</style>