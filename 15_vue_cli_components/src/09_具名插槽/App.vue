<template>
    <div>
        <nav-bar :name="name">
            <!-- <template v-slot:left>
                <p>左边内容1</p>
            </template> -->

            <!-- v-slot: 缩写 # -->
            <template #left>
                <p>左边内容1</p>
            </template>

            <template v-slot:center>
                <p>中间内容2</p>
            </template>

            <template v-slot:right>
                <p>右边内容3</p>
            </template>

            <!-- 动态插槽的name  v-slot:[插槽名称]-->
            <template v-slot:[name]>
                <p>动态插槽4</p>
            </template>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from "./NavBar.vue"
export default {
    components: { 
        NavBar 
    },
    name: '',
    data() {
        return {
            name: "why"
        }
    },
    methods: {
        
    },
    created () {
        
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
</style>