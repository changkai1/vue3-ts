<template>
    <div class="app">
        <tab-control
            :titles="titles"
            @itemIndex="itemIndex"></tab-control>
        <div>
            {{ content[currentIndex] }}
        </div>
    </div>
</template>
<script>
import tabControl from "./tabControl.vue"
export default {
    name: '',
    components: {
        tabControl
    },
    data() {
        return {
            titles: ["衬衣", "鞋子", "裤子"],
            content: ["衬衣页面", "鞋子页面", "裤子页面"],
            currentIndex: 0
        }
    },
    methods: {
        itemIndex(index) {
            this.currentIndex = index
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
    
</style>