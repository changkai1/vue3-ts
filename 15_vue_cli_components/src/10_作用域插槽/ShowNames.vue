<template>
    <div>
        <template v-for="(name, index) in names" :key="name">
            <!-- 由使用者决定显示什么标签 -->
            <slot name="show" :n="name" :i="index"></slot>
        </template>
        <!-- <slot name="show"></slot> -->
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        names: Array,
        default: () => []
    },
    data() {
        return {

        }
    },
    methods: {
        
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>