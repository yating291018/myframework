<template>
  <div class="container">
    <div class="box" v-if="isFlag">22222</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFlag: false
    }
  },
  components: {
  },
  created () {
    console.log('这是loading')
    this.isFlag = true
  },
  mounted () {},
  methods: {},
  beforeDestroy () {
    // this.isFlag = false
  }
}
</script>

<style scoped lang="less">
.box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
}
</style>
