import { componentObj, generateEventsComponents } from './utils'
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    events: {
      type: Object,
      required: true
    }
  },
  render (h) {
    const options = this.options
    // console.log('options', options)
    const formData = this.formData

    const components = options.formItems.map(item => {
      const func = componentObj(item.type)
      const subComponent = func ? func.call(this, h, formData, item, this) : null
      return h('FormItem', {
        props: {
          prop: item.key,
          label: item.label
        }
      }, [subComponent])
    })
    // console.log('components', components)
    const formComponent = h('Form', {
      ref: options.ref,
      props: {
        model: formData,
        ...options.formProps
      }
    }, components)

    const buttonComponent = generateEventsComponents(h, formData, this.events, this)
    return h('div', [formComponent, buttonComponent])
  }
}
