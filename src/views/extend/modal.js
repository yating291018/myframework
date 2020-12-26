import Modal from './Modal.vue'
// import { Modal } from 'view-design'
const opt = {
  install (Vue) {
    Vue.prototype.$HuModal = function (options) {
      const ModalInstall = Vue.extend({
        render (h) {
          return h(Modal,
            {
              on: {
                'on-ok': () => {
                  // alert(1)
                  options.onOk && options.onOk()
                },
                'on-close': () => {
                  options.close && options.close()
                }
              }
            },
            [h(options.component, { props: { message: options.message } })]
          )
        }
      })
      const installEl = new ModalInstall().$mount()
      document.body.appendChild(installEl.$el)
      // setTimeout(() => {
      //   document.body.removeChild(installEl.$el)
      // }, 1000)
      // return
    }
  }
}

export default opt
