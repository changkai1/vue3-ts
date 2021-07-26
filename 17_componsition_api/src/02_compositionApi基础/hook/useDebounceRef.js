import { customRef } from "vue";
export default function(value) {
    let timer = null
    // 自定义ref
    return customRef((track, trigger) => {
        return {
            get() {
                // 收集依赖
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, 1000)
            }
        }
    })
}