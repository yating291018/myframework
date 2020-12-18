<template>
  <div class="container">
    <Button @click="showBtn">淡入淡出效果</Button>
    <transition name="fade" mode="out-in">
      <Button type="primary" v-if="show">上架</Button>
      <Button type="error" v-else>下架</Button>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  components: {
  },
  created () {},
  mounted () {},
  methods: {
    showBtn () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="less">
.btn {
  background: red;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 3s ease;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 3s ease;
}

</style>
