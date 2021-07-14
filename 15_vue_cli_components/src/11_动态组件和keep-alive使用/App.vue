<template>
    <div>
        <template v-for="item in navBar" :key="item">
            <button
                :class="{active: item === currentTab}"
                @click="tabClick(item)">{{ item }}</button>
        </template>

        <!-- 动态组件 is="组件名"-->
        <!-- 
            1、keep-alive 属性
                include: string|RegExp|Array  只有匹配到的组件会被缓存  逗号后面不要加空格
                exclude: string|RegExp|Array  任何名称匹配到的组件不会被缓存
                max: number|string  最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁
         -->
        <keep-alive include="home,about">
            <component
                :is="currentTab"
                :name="name"
                :age="age"
                @itemClick="itemClick">
            </component>
        </keep-alive>
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