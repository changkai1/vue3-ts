<template>
    <div>
        <h2>自定义hook函数：axios封装</h2>
        <hr />
        <h4>x: {{ x }} | y：{{ y }}</h4>
        <hr />
        <p v-if="loading">加载中。。。</p>
        <!-- <ul>
            <li>id：{{ data.id }}</li>
            <li>address：{{ data.address }}</li>
            <li>distance：{{ data.distance }}</li>
        </ul> -->
        <hr />
        <ul v-for="item in data" :key="item.id">
            <li>id：{{item.id}}</li>
            <li>title：{{ item.title }}</li>
            <li>price：{{ item.price }}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import useMousePosition from './hooks/useMousePosition';
import useRequest from "./hooks/useRequest";

// 定义接口，约束对象的类型
interface AddressData {
    id: number;
    address: string;
    distance: string;
}
interface ProductsData {
    id: string;
    title: string;
    price: string;
}
export default defineComponent({
    name: 'App',
    setup() {
        const { x, y } = useMousePosition();
        // const { data, loading, errorMsg } = useRequest<AddressData>("/data/address.json");
        const { data, loading, errorMsg } = useRequest<ProductsData[]>("/data/products.json");

        // 监听
        watch(data, () => {
            if (data.value) {
                console.log(data.value.length)
            }
        })
        return {
            x,
            y,
            data,
            loading,
            errorMsg
        }
    }
})
</script>
<style scoped>
    
</style>