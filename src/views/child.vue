<template>
  <div class="container">
    {{ message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  components: {
  },
  created () {},
  mounted () {
    // setTimeout(() => {
    // console.log('-----1111111')
    this.message = '1111'
    // }, 3000)
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
