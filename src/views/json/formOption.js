export const formOption = {
  ref: 'formValidate',
  formProps: {
    inline: true,
    'label-width': 80
  },
  formItems: [
    {
      type: 'input',
      label: '名称',
      key: 'name',
      props: {
        placeholder: '请输入名称',
        clearable: true
      },
      style: {
        width: '176px'
      }
    },
    {
      type: 'select',
      label: '性别',
      key: 'sex',
      props: {
        placeholder: '请选择',
        clearable: true
      },
      style: {
        width: '176px'
      },
      children: [
        {
          label: '男',
          value: 1
        },
        {
          label: '女',
          value: 2
        }
      ]
    }
  ]
}

export const buttonEvents = {
  ref: 'formValidate',
  style: {},
  reset: {
    text: '重置',
    props: {
      type: 'error'
    },
    style: {
      'margin-left': '8px'
    },
    success (formData, vm) {
      vm.$emit('on-cancel')
    }
  },
  submit: {
    text: '查询',
    props: {
      type: 'primary'
    },
    success (formData, vm) {
      vm.$emit('on-submit', { formData, ref: 'formValidate' })
    }
  }
}
