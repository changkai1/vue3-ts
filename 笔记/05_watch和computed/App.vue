<template>
    <div>
        <h2>计算属性和监视</h2>
        <p>计算属性get方法</p>
        姓：<input type="text" v-model="user.firstName">
        名：<input type="text" v-model="user.lastName"><br />
        姓名：<input type="text" v-model="fullName1"><br />
        姓名：<input type="text" v-model="fullName2"><br />
        姓名：<input type="text" v-model="fullName3"><br />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, watch, ref, watchEffect } from 'vue'
export default defineComponent({
    name: 'App',
    setup() {
        const user = reactive({
            firstName: '东方',
            lastName: '不败'
        })

        // 计算属性 传入一个参数，使用的是get方法
        let fullName1 = computed(() => {
            return user.firstName + "_" + user.lastName;
        })

        // 计算属性 get/set方法
        let fullName2 = computed({
            // get方法
            get() {
                return user.firstName + "_" + user.lastName;
            },
            set(val: string) {
                let names = val.split("_");
                user.firstName = names[0];
                user.lastName = names[1];
            }
        })

        // 1、watch 监听
        let fullName3: any = ref("")
        watch(user, (val) => {
            fullName3.value = val.firstName + "_" + val.lastName;
        },{
            immediate: true, // 立即执行
            deep: true
        })

        // 2、watchEffect 监听，可以立即执行，不用在设置immediate，本身默认就会进行监视
        // watchEffect(() => {
        //     fullName3.value = user.firstName + "_" + user.lastName;
        // })

        // watch(fullName3, (val) => {
        //     let names = val.split("_");
        //     user.firstName = names[0];
        //     user.lastName = names[1];
        // })

        // ** watch可以一次监听多个数据，数据不是响应式的数据的时候，代码写法
        watch([() => user.firstName, () => user.lastName], (val) => {
            console.log(val)
        })

        return {
            user,
            fullName1,
            fullName2,
            fullName3
        }
    }
})
</script>
<style scoped>
    
</style>