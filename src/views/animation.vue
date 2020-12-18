<template>
  <div class="container">
    <div class="outer">
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
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
.outer {
  /**定义子元素水平居中**/
  display:flex;
  justify-content:center;
  width: 100px;
  height: 100px;
  // background-color: #6a5acd8c;
  position:relative;
}
.inner {
  position:absolute;
  width:20px;
  height:20px;
  border-radius:50%;
  background-color: #6a5acdeb;
  transform-origin: 50% 50px;
  animation:an-circle 3s ease-in-out infinite;
}
.inner:nth-child(2){
  height:18px;
  width:18px;
  animation-delay:.2s;
}
.inner:nth-child(3){
  height:16px;
  width:16px;
  animation-delay:.4s;
}
.inner:nth-child(4){
  height:14px;
  width:14px;
  animation-delay:.6s;
}
@keyframes an-circle{
  to{
    transform:rotate(1turn);
  }
}
</style>
