import Vue from 'vue'
import Toast from './Toast.vue'
console.log('Toast', Toast)
function toast (options) {
  const ToastCon = Vue.extend(Toast)
  const el = new ToastCon({
    propsData: {
      ...options
    }
  }).$mount()
  document.body.appendChild(el.$el)
}
const install = Vue => {
  Vue.prototype.$toast = toast
}

export default {
  install
}
