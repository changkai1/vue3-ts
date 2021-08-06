import { ref, watch } from "vue"
export default function(key, value) {
    let data = ref(value)

    // 有value值，存数据
    if(value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    } else { // 无value值，取数据
        data.value = JSON.parse(window.localStorage.getItem(key))
    }
    
    watch(data, (newValue) => {
        window.localStorage.setItem(key, JSON.stringify(newValue))
    })

    console.log(12313, data);
    return data
}