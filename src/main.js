// import Vue from 'vue'
//import App from './App.vue'

// Vue.config.productionTip = false


//import Demo from './Demo.vue'
const Vue = window.Vue;
Vue.config.productionTip = false

// const vm = new Vue({
//   el: "#app",
//   render: h => h(Demo)
// })
// console.log(vm.$data);

new Vue({
  template: `<div class="red">
  {{n}}
  <button @click="add">+1</button>
  <hr>
  {{filterArray()}}
 </div>`,
  data: {
    n: 0,
    array: [1, 3, 4, 5, 6, 8, 12]
  },
  methods: {
    add() {
      this.n += 1;
    },
    filterArray() {
      console.log("zhix li");
      return this.array.filter(i => i % 2 === 0)
    }
  }
}).$mount("#app")
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// console.log(window.Vue);

// const vm = new Vue({
//   el: "#app",
//   render(h) {
//     return h('div', [this.n, h('button', {
//       on: {
//         click: this.add
//       }
//     }, '+1')])
//   },
//   data: {
//     n: 0
//   },
//   methods: {
//     add() {
//       this.n += 1;
//     }
//   }
// })