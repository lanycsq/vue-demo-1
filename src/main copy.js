// import Vue from 'vue'
//import App from './App.vue'

// Vue.config.productionTip = false

const Vue = window.Vue;
// import Demo from './Demo.vue'

Vue.config.productionTip = false


const myData = {
  n: 0
};

new Vue({
  data: myData,
  template: `
  <div>
  {{n}}
  </div>
  `
}).$mount("#app");

setTimeout(() => {
  myData.n += 10;
  console.log(myData);
}, 3000);

// const vm = new Vue({
//   el: "#app",
//   render: h => h(Demo)
// })
// console.log(vm.$data);

// //组件（全局）
// Vue.component("Demo2", {
//   template: `<div>demo2</div>`
// })

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
//      Lan: {
//      template: `<div>Lan</div>`
//      }
// }}


// new Vue({

//   template: `<div class="red">
//   {{n}}
//   <button @click="add">+1</button>
//  </div>`,
//   data: {
//     n: 0,
//     array: [1, 3, 4, 5, 6, 8, 12]
//   },
//   created() {
//     console.log("出现在内存中，没用出现在页面中")
//   },
//   mounted() {
//     console.log("出现在页面中")
//   },
//   updated() {
//     console.log("更新了")
//   },
//   destroyed() {

//   },
//   methods: {
//     add() {
//       this.n += 1;
//     },

//   }
// }).$mount("#app")

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