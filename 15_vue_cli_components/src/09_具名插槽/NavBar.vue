<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

        <!-- 动态插槽 -->
        <div class="right">
            <slot :name="name"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        name: {
            type: String
        }
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
* {
    margin: 0;
    padding: 0;
}
.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left, .right, .center {
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.left, .right {
    width: 100px;
    background: chartreuse;
}
.center {
    background: blue;
    flex: 1;
}
</style>