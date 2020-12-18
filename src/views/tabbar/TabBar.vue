<template>
<div id="wrapper" ref="wrapperRef">
  <ul ref="urRef">
    <li class=""><a href="javascript:;">热门推荐</a></li>
    <li class="active"><a href="javascript:;">潮流女装</a></li>
    <li class=""><a href="javascript:;">品牌男装</a></li>
    <li class=""><a href="javascript:;">内衣配饰</a></li>
    <li class=""><a href="javascript:;">家用电器</a></li>
    <li class=""><a href="javascript:;">电脑办公</a></li>
    <li class=""><a href="javascript:;">手机数码</a></li>
    <li class=""><a href="javascript:;">母婴频道</a></li>
    <li class=""><a href="javascript:;">图书</a></li>
    <li class=""><a href="javascript:;">家居家纺</a></li>
    <li class=""><a href="javascript:;">居家生活</a></li>
    <li class=""><a href="javascript:;">家具建材</a></li>
    <li class=""><a href="javascript:;">热门推荐</a></li>
    <li class=""><a href="javascript:;">潮流女装</a></li>
    <li class=""><a href="javascript:;">品牌男装</a></li>
    <li class=""><a href="javascript:;">内衣配饰</a></li>
    <li class=""><a href="javascript:;">家用电器</a></li>
    <li class=""><a href="javascript:;">电脑办公</a></li>
    <li class=""><a href="javascript:;">手机数码</a></li>
    <li class=""><a href="javascjavascript:;ript:;">母婴频道</a></li>
    <li class=""><a href="javascript:;">图书</a></li>
    <li class=""><a href="javascript:;">家居家纺</a></li>
    <li class=""><a href="javascript:;">居家生活</a></li>
    <li class=""><a href="javascript:;">家具建材</a></li>
  </ul>
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
  mounted () {
    this.touchScroll(this.$refs.urRef, this.$refs.wrapperRef)
  },
  methods: {
    touchScroll (ele, fartherEle) {
      let startDistance = 0
      let endDistance = 0
      let moveDistance = 0
      const ulHeight = ele.offsetHeight
      const barH = fartherEle.offsetHeight
      // 只能移动的距离
      const barHide = ulHeight - barH
      console.log('barHide', barHide)
      ele.addEventListener('touchstart', function (e) {
        startDistance = e.touches[0].clientY
      })

      ele.addEventListener('touchmove', function (e) {
        const maxTop = 40
        moveDistance = e.touches[0].clientY - startDistance + endDistance
        // 下拉的距离只能是maxTop,如果超过了
        if (moveDistance >= maxTop) {
          moveDistance = maxTop
        }
        // 限制ul定位的位置，距离父盒子底部部不能超过100
        if (moveDistance <= -(barHide + maxTop)) {
          moveDistance = -(barHide + maxTop)
        }
        this.style.transition = 'none'
        this.style.top = moveDistance + 'px'
      })

      ele.addEventListener('touchend', function (e) {
        // 边界，
        if (moveDistance >= 0) {
          moveDistance = 0
          this.style.transition = 'top .3s'
        }
        if (moveDistance <= -barHide) {
          moveDistance = -barHide
          this.style.transition = 'top .3s'
        }
        endDistance = moveDistance
        this.style.top = endDistance + 'px'
      })
    }
  }
}
</script>

<style scoped lang="less">
#wrapper{
  height: 100vh;
  background: red;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 10px 0px 10px #eaeaea inset;
  }
}
*{
  margin: 0;
  padding: 0;
  font-size: 13px;
  list-style: none;
}
ul{
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
li{
  width: 100px;
  height: 50px;
  background: #ccc;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
li.active{
  background: hotpink;
  color: red;

}
</style>
