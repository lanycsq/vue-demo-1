// import Vue from 'vue'
//import App from './App.vue'

// Vue.config.productionTip = false

import Demo from './Demo.vue'
const Vue = window.Vue;
Vue.config.productionTip = false

// const vm = new Vue({
//   el: "#app",
//   render: h => h(Demo)
// })
// console.log(vm.$data);

//组件（全局）
Vue.component("Demo2", {
  template: `<div>demo2</div>`
})

//引入组件的三种方式
//1、（优先使用）
// import Demo from './Demo.vue'
//2、
// Vue.component("Demo2", {
//   template: `<div>demo2</div>`
// })
// 3、
// new Vue({
//   components: {
//      Demo: Demo,
//      Lan: {
//      template: `<div>Lan</div>`
//      }
// }}


new Vue({
  components: {
    Demo, //等价于 Demo：Demo
    Lan: {
      template: `<div>Lan</div>`
    }
  },
  template: `<div class="red">
  {{n}}
  <button @click="add">+1</button>
  <hr>
  <Demo/>
  <hr>
  <Demo2/>
  <hr>
  <Lan/>
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