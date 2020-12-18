// const Test = () => import('./Test.vue')
import Test from './Test.vue'
const opt = {
  install (Vue) {
    Vue.component(Test.name, Test)
  },
  Test
}
export default opt
export {
  Test
}
