 import Vue from 'vue'
 // import App from './App.vue'

 // Vue.config.productionTip = false

 // new Vue({
 //   render: h => h(App),
 // }).$mount('#app')
 // console.log(window.Vue);

 import Demo from './Demo.vue'
 new Vue({
   el: "#app",
   render(h) {
     return h(Demo)
   },
 })