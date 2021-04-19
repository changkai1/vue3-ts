import axios from "axios"
import { ref } from "vue"
export default function<T>(url: string) {
    // 请求成功的数据
    const data = ref<T | null>(null)
    // 错误信息
    const errorMsg = ref("")
    // loading
    const loading = ref(true);
    axios.get(url).then((res) => {
        loading.value = false;
        // console.log(res)
        data.value = res.data
    }).catch((err) => {
        loading.value = false;
        errorMsg.value = err.message || "未知错误"
    })
    return {
        data,
        errorMsg,
        loading
    }
}