<template>
  <div class="red">
    <div>
      {{ n }}
      <button @click="add">+1</button>
    </div>
    <div>
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>

    <div>
      <ol>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div id="app-5">
      <p>{{ message1 }}</p>
      <button v-on:click="reverseMessage">反转消息</button>
    </div>
    <div id="app-6">
      <p>{{ message3 }}</p>
      <input v-model="message3" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      message: "页面加载于 " + new Date().toLocaleString(),
      message1: "Hello Vue.js!",
      message3: "Hello Vue!",
      todos: [
        { id: 0, text: "学习 JavaScript" },
        { id: 1, text: "学习 Vue" },
        { id: 2, text: "整个牛项目" },
      ],
    };
  },
  methods: {
    add() {
      this.n += 1;
    },
    reverseMessage: function () {
      this.message1 = this.message1.split("").reverse().join("");
    },
  },
};
</script>
<style scoped>
.red {
  color: red;
}
</style>

