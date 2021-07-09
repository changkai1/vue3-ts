<template>
    <div>
        HomeContent: {{ name }}--{{ age }}--{{ length.value }}
    </div>
</template>
<script>
export default {
    name: '',
    inject: ["name", "age", "length"],
    data() {
        return {

        }
    },
    methods: {
        
    },
    created () {
        console.log(this.length)
    }
}
</script>
<style scoped>
    
</style>