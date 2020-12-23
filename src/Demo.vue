<template>
  <div class="red">
    <div>{{ n }}</div>
    <button @click="add">+1</button>
    <Demo2 />
    <Demo2 />
    <Demo2 />
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
    };
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

