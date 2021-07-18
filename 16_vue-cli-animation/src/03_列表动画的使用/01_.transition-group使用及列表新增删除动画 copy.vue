<template>
    <div>
        <div>
            <button @click="add">增加数字</button>
            <button @click="remove">删除数字</button>
            <button @click="shuffle">数字洗牌</button>
        </div>
        <transition-group tag="p" name="why">
            <span v-for="item in numbers" :key="item" class="item">
                {{ item }}
            </span>
        </transition-group>
    </div>
</template>
<script>
import _ from "lodash"
export default {
    name: '',
    data() {
        return {
            numbers: [0,1,2,3,4,5,6,7,8,9]
        };
    },
    methods: {
        add() {
            this.numbers.splice(this.removeIndex(), 0, this.numbers.length)
        },
        remove() {
            this.numbers.splice(this.removeIndex(), 1)
        },
        removeIndex() {
            return Math.floor(Math.random() * this.numbers.length)
        },
        shuffle() {
            this.numbers = _.shuffle(this.numbers)
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
.item {
    margin-right: 10px;
    display: inline-block;
}
.why-enter-from,
.why-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}

/* 删除动画 */
.why-move {
    transition: transform 1s ease;
}
.why-leave-active {
    position: absolute;
}
</style>