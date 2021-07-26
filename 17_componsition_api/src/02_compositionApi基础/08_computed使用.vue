<template>
    <div>
        <!-- <h3>{{ firstName }}--{{ lastName }}</h3> -->
        <h3>{{ fullName }}</h3>
        <button @click="changeName">修改名字</button>
    </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
    setup () {
        let firstName = ref("LeBron");
        let lastName = ref("James");
        /**
         * computed返回的是ref对象
        */

        // 1、计算属性的get
        // let fullName = computed(() => {
        //     return firstName.value + " " + lastName.value
        // })

        // 2、计算属性的set
        let fullName = computed({
            get() {
                console.log("get")
                return firstName.value + " " + lastName.value
            },
            set(newValue) {
                console.log("set")
                let names = newValue.split(" ");
                firstName.value = names[0];
                lastName.value = names[1];
            }
        })
        let changeName = () => {
            fullName.value = "coder why"
        }
        return {
            firstName,
            lastName,
            fullName,
            changeName
        }
    }
}
</script>

<style scoped>

</style>