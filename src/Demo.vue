<template>
  <div class="red">
    <p>nnnnn</p>
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      array: [1, 3, 4, 5, 6, 8, 12],
    };
  },
  created() {
    console.log("出现在内存中，没用出现在页面中");
  },
  mounted() {
    console.log("出现在页面中");
  },
  updated() {
    console.log("更新了");
  },
  destroyed() {
    console.log("消亡了");
  },
  methods: {
    add() {
      this.n += 1;
    },
  },
};
</script>
<style scoped>
.red {
  color: red;
}
</style>

