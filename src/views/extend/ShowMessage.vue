<template>
  <div>
    <div slot="header">
      查看详情
    </div>
    <div class="container" slot="content">
      {{ message }}
    </div>
    <div slot="footer" style="text-align:center;">
      <Button type="primary" @click="close">关闭</Button>
      <Button type="primary" @click="close">确定</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  created () {},
  mounted () {},
  methods: {
    close () {
    }
  }
}
</script>

<style scoped lang="less">
</style>
