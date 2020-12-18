// 生成Input
function generateInputComponent (h, formData = {}, obj, vm) {
  const key = obj.key ? obj.key : ''
  return h('Input', {
    props: {
      value: key ? formData[key] : '',
      ...obj.props
    },
    style: {
      ...obj.style
    },
    on: {
      input (val) {
        if (key) {
          formData[key] = val
        }
      }
    }
  })
}

// 生成Select
function generateSelectComponent (h, formData = {}, obj, vm) {
  const key = obj.key ? obj.key : ''
  let components = []
  if (obj.children) {
    components = obj.children.map(item => {
      return h('Option', {
        props: item
      })
    })
  }

  return h('Select', {
    props: {
      value: formData[key],
      ...obj.props
    },
    style: {
      ...obj.style
    }
  }, components)
}

// 生成按钮
export function generateEventsComponents (h, formData = {}, obj, vm) {
  const components = []
  if (obj.submit) {
    const submit = h('Button', {
      props: obj.submit.props,
      on: {
        click () {
          vm.$emit('on-submit', formData)
        }
      }
    }, obj.submit.text)
    components.push(submit)
  }
  if (obj.reset) {
    const reset = h('Button', {
      props: obj.reset.props,
      style: obj.reset.style,
      on: {
        click () {
          vm.$refs[obj.ref].resetFields()
        }
      }
    }, obj.reset.text)
    components.push(reset)
  }

  return h('div', {
    style: {
      'text-align': 'center'
    }
  }, components)
}

// 判断使用哪一个
export const componentObj = (key) => {
  // console.log('key', key)
  const map = {
    input: generateInputComponent,
    select: generateSelectComponent
  }
  // console.log('map[key]', map[key])
  return map[key]
}
