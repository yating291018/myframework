<template>
  <div class="container">
    <Button @click="openMessage">点击</Button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {
  },
  created () {},
  mounted () {},
  methods: {
    openMessage () {
      console.log(() => import('./ShowMessage'))
      this.$HuModal({
        message: '这是传入的参数',
        component: () => import('./ShowMessage'),
        onOk () {},
        close () {}
      })
    }
  }
}
</script>

<style scoped lang="less">
</style>
