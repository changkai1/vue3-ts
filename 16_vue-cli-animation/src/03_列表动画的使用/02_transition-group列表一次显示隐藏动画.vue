<template>
    <div>
        <input type="text" v-model="keyWord">
        <transition-group
            tag="ul"
            name="why"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave">
            <li v-for="(item, index) in list"
                :key="item"
                :data-index="index">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>
<script>
import gsap from "gsap"
export default {
    name: '',
    data() {
        return {
            keyWord: "",
            names: ["abc", "cba", "nba", "lilei", "hmm", "james"]
        };
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                height: "1.5em",
                delay: el.dataset.index * 0.5,
                onComplete: done
            })
        },
        leave(el, done) {
            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * 0.5,
                onComplete: done
            })
        }
    },
    computed: {
        list() {
            return this.names.filter(item => {
                return item.indexOf(this.keyWord) !== -1
            })
        }
    },
    created () {
        
    }
}
</script>
<style scoped>

</style>