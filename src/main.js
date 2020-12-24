// import Vue from 'vue'
//import App from './App.vue'

// Vue.config.productionTip = false

const Vue = window.Vue;
// import Demo from './Demo.vue'

Vue.config.productionTip = false

const obj1 = {
  firstName: 'chen',
  lastName: 'shanqiong',
  name() {
    return this.firstName + this.lastName
  }
}
console.log("姓名:" + obj1.name())
//这里name 需要加括号才可以调用
//那么我就是想要不加括号，是否能打印出姓名

const obj2 = {
  firstName: 'chen',
  lastName: 'shanqiong',
  get name() {
    return this.firstName + this.lastName
  }
}
console.log("姓名:" + obj2.name)
//在方法名之前加一个get 这样不加括号也可以调用  
// getter就是这样用  在函数名前面加get 

//getter和setter是ES6的新特性
const obj3 = {
  firstName: 'chen',
  lastName: 'shanqiong',
  get name() {
    return this.firstName + this.lastName
  },
  set name(name) {
    this.firstName = name[0],
      this.lastName = name.substring(1)
  },
  age: 18
}
console.log(obj3);
let _xxx = 0;

obj3.name = '陈善琼'; //相当于触发了setter函数
console.log("obj3的姓名：" + obj3.name)
Object.defineProperty(obj3, 'xxx', {
  get() {
    return _xxx;
  },
  set(value) {
    _xxx = value;
  }
})


const myData = {
  n: 0
};

new Vue({
  data: myData,
  template: `
  <div>
  {{n}}
  </div>
  `,


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