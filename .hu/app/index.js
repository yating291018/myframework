// 启动类放在这里
import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

const runApp = async () => {
  const app = {
    router,
    store,
    render: h => h(App)
  }
  return {
    app
  }
}
export default () => {
  return runApp().then(res => {
    const { app } = res
    const _app_ = new Vue(app)
    _app_.$mount('#app')
    return Object.assign({}, res, { _app_ })
  })
}
