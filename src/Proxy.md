https://codesandbox.io/s/cool-shape-ni4s9?file=/src/main.js

let data1 = proxy({
  data: {
    n: 0
  }
}) // 括号里是匿名对象，无法访问

function proxy({
  data
}) {
  const obj = {}
  Object.defineProperty(obj, 'n', {
    get() {
      return data.n
    },
    set(value) {
      if (value < 0) return
      data.n = value
    }
  })
  return obj // obj 就是代理，data1就是obj
}