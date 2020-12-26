<template>
  <Modal
    v-model="visible"
    title="Dialog"
    @on-ok="ok"
  >
    <slot></slot>
  </Modal>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  components: {
  },
  created () {},
  mounted () {},
  methods: {
    ok () {
      this.$emit('on-ok')
    }
  }
}
</script>

<style scoped lang="less">
.messageWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background: #000;
  color: #fff;
}
</style>
