<template>
    <div>
        <show-names
            :names="names">
            <template v-slot:show="slotProps">
                <button>{{ slotProps.n }}--{{ slotProps.i }}</button>
            </template>
        </show-names>
    </div>
</template>
<script>
import ShowNames from "./ShowNames.vue"
export default {
    name: '',
    components: {
        ShowNames
    },
    data() {
        return {
            names: ["james", "kobe", "curry"]
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