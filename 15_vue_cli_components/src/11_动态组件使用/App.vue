<template>
    <div>
        <template v-for="item in navBar" :key="item">
            <button
                :class="{active: item === currentTab}"
                @click="tabClick(item)">{{ item }}</button>
        </template>

        <!-- 动态组件 is="组件名"-->
        <component
            :is="currentTab"
            :name="name"
            :age="age"
            @itemClick="itemClick">
        </component>
    </div>
</template>
<script>
import home from "./page/home.vue"
import about from "./page/about.vue"
import category from "./page/category.vue"
export default {
    name: '',
    components: {
        home,
        about,
        category
    },
    data() {
        return {
            navBar: ["home", "about", "category"],
            currentTab: "home",
            name: "james",
            age: 30
        }
    },
    methods: {
        tabClick(item) {
            this.currentTab = item
        },
        itemClick() {
            console.log("home组件点击了")
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
.active {
    color: red;
}
</style>