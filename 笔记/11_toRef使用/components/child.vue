<template>
    <div>
        <h2>child子组件</h2>
        <p>年龄：{{ ages }}</p>
        <p>len：{{ len }}</p>
        <p>length：{{ length }}</p>
        <p>w：{{ w }}</p>
    </div>
</template>
<script lang="ts">
function getAge(age:any) {
    return computed(() => {
        return age += 1
    })
}
function getAgeLength(age: Ref) {
    return computed(() => {
        return age.value += 1
    })
}
import { computed, defineComponent, toRef, Ref, watch, ref } from 'vue'
export default defineComponent({
    name: 'Child',
    props: {
        ages: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const len = getAge(props.ages) // 这样得到的数据不是响应式的
        const length = getAgeLength(toRef(props, "ages")) // 这样得到的是响应式的数据
        let w = ref(0)
        watch(props, (val) => {
            if(val) {
                w.value += val.ages
            }
        })
        return {
            len,
            length,
            w
        }
    }
})
</script>
<style scoped>
    
</style>