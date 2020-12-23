<template>
  <div class="red">
    {{ message }}
    <button @click="add">+1</button>
  </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {
      n: 0,
      array: [1, 3, 4, 5, 6, 8, 12],
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

