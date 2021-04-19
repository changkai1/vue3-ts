<template>
    <div>
        <h2>自定义hook函数：自定义hook的作用类似于vue2中的mixin技术</h2>
        <hr />
        <h4>x: {{ x }} | y：{{ y }}</h4>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useMousePosition from './hooks/useMousePosition';
export default defineComponent({
    name: 'App',
    setup() {
        const { x, y } = useMousePosition();
        return {
            x,
            y
        }
    }
})
</script>
<style scoped>
    
</style>