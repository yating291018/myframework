<template>
  <div class="container">
    <form-build
      :options="formOption"
      :formData="formData"
      :events="events"
      @on-submit="query"
    ></form-build>
    <div v-for="item in List" :key="item"> {{ item }} </div>
    <Button type="primary" @click="changeItem">点击</Button>
  </div>
</template>

<script>
import FormBuild from './formbuild'
import { formOption, buttonEvents } from './json/formOption'
export default {
  data () {
    return {
      formData: {
        name: '',
        sex: ''
      },
      formOption: formOption,
      events: buttonEvents,
      List: [1, 2]
    }
  },
  components: {
    FormBuild
  },
  created () {},
  mounted () {},
  methods: {
    query (formData) {
      console.log('formData', formData)
    },
    changeItem () {
      this.List[0] = 2222
    }
  }
}
</script>

<style scoped lang="less">
</style>
