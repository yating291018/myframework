<template>
  <div class="toast" v-if="isShow">
    {{ message }}
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
      isShow: false
    }
  },
  components: {
  },
  created () {},
  mounted () {
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, 3000)
  },
  methods: {}
}
</script>

<style scoped lang="less">
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
}
</style>
