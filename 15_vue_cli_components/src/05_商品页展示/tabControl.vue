<template>
    <div class="tab-control">
        <div class="tab-control-item"
            v-for="(item, index) in titles"
            :key="item"
            :class="{active: currentIndex === index}"
            @click="itemClick(index)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>
<script>
export default {
    emits: ["itemIndex"],
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    name: '',
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit("itemIndex", index)
        }
    },
    created () {
        
    }
}
</script>
<style scoped>
.tab-control {
    display: flex;
    align-items: center;
    justify-content: center;
}
.tab-control-item {
    flex: 1;
    text-align: center;
}
.active {
    color: red;
    
}
.active span {
    border-bottom: 3px solid red;
}
.tab-control-item span {
    padding: 5px 10px;
}
</style>