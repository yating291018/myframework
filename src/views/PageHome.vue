<template>
  <div class="container">
    <!-- <img src="../assets/logo.png" alt=""> -->
    <div v-for="item in 100" :key="item" class="box">{{ item }}</div>
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
  methods: {}
}
</script>

<style scoped lang="less">
.container {
  text-align: center;
  .box {
    height: 30px;
    line-height: 30px;
    border: 1px solid #eaeaea;
    margin-bottom: 10px;
    background: #000;
    color: #fff;
  }
}
</style>
