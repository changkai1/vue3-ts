<template>
    <div>
        <h2>FromInput组件</h2>
        <input type="text" v-model="inputValue">

        <input type="text" v-model="titleValue">
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        // v-model默认传值
        modelValue: String,
        title: String
    },
    data() {
        return {

        };
    },
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(val) {
                this.$emit("update:modelValue", val)
            }
        },
        titleValue: {
            get() {
                return this.title
            },
            set(val) {
                this.$emit("update:title", val)
            }
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
