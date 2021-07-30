import { ref, computed } from "vue"
export default function() {
    let counter = ref(10)
    let doubleCounter = computed(() => {
        return counter.value * 2
    })

    let increment = () => {
        counter.value++
    }
    let decrement = () => {
        counter.value--
    }
    return {
        counter,
        doubleCounter,
        increment,
        decrement
    }
}