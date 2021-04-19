import { onBeforeUnmount, onMounted, ref } from 'vue';
export default function () {
    const x = ref(-1)
    const y = ref(-1)
    // 获取鼠标位置
    const clickHandler = (event: MouseEvent) => {
        console.log(event)
        x.value = event.pageX;
        y.value = event.pageY
    }
    // 页面加载完毕时点击操作
    onMounted(() => {
        addEventListener("click", clickHandler)
    })
    // 页面卸载的时候去除点击
    onBeforeUnmount(() => {
        removeEventListener("click", clickHandler)
    })
    return {
        x,
        y
    }
}