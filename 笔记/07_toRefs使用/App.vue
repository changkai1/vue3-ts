<template>
  <div>
    <h2>toRefs使用</h2>
    <hr />
    <p>姓名：{{ user.name }}</p>
    <p>年龄：{{ user.age }}</p>
    <hr />
    <p>foo：{{ foo }}</p>
    <p>bar：{{ bar }}</p>
    <hr />
    <p>foo解构后：{{ foo }}</p>
    <hr />
    <child :foo="foo" :bar="bar"></child>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import child from "./components/child.vue"
function userFeatureX() {
  const state = reactive({
    foo: "foo",
    bar: "bar",
  });

    // 操作state 的逻辑，返回时转换为ref
    // 1、不使用解构的时候可以这样返回
    // return state; 

    // 使用解构的时候需要使用toRefs返回，否则结构的时候不是响应式，使用toRefs返回时，改变数据的时候应该使用.value的方式
    return toRefs(state);
}
export default defineComponent({
  name: "App",
  components: {
      child
  },
  setup() {
    /**
     * 1、toRefs使用
     * 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref。
     */
    const user = reactive({
      name: "自来也",
      age: 40,
    });
    const state = userFeatureX();
    console.log(state)
    let { foo, bar } = userFeatureX();

    setInterval(() => {
        // 不使用toRefs返回时的写法
        // state.foo += "=="
       // 使用toRefs返回时的写法
        // state.foo.value += "=="
        // foo.value += "==";
    }, 1000);
    return {
        user,
        ...state,
        foo,
        bar,
    };
  },
});
</script>
<style scoped></style>
