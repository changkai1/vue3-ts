export const demoMixin = {
    data() {
        return {
            message: "demo mixin"
        }
    },
    methods: {
        foo() {
            console.log("执行了demoMixin里的foo函数")
        }
    },
    created () {
        console.log("demoMixin的created执行了")
    }
}