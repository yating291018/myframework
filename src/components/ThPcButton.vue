<template>
  <div class="container">
    <Button>点击</Button>
    <div @click="clickFn">点击</div>
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
    clickFn () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
</style>
