<template>
    <div>
        <h2>child子组件</h2>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Child',
    props: {
        foo: {
            type: String
        },
        bar: {
            type: String
        }
    },
    setup(props) {
        console.log(props)
        return {

        }
    }
})
</script>
<style scoped>
    
</style>