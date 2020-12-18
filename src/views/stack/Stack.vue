<template>
  <div class="container">
    <ul class="stack">
      <li class="stack-item"
        v-for="(item, index) in pages"
        :style="[transformIndex(index), transform(index)]"
        @touchmove.stop.capture.prevent="touchmove"
        @touchstart.stop.capture.prevent="touchstart"
        @touchcancel.stop.capture.prevent="touchend"
        @mousedown.stop.capture.prevent="touchstart"
        @mouseup.stop.capture.prevent="touchend"
        @mousemove.stop.capture.prevent="touchmove"
        @mouseout.stop.capture.prevent="touchend"
        @touchend.stop.capture.prevent="touchend"
        @webkit-transition-end="onTransitionEnd(index)"
        @transitionend="onTransitionEnd(index)"
        :key="item.src">
        <img :src="item.src">
      </li>
    </ul>
  </div>
</template>

<script>
import detectPrefixes from './utils'
export default {
  props: {
  },
  data () {
    return {
      stackinit: {
        visible: 3
      },
      pages: [
        {
          src: require('../../assets/1.jpeg')
        },
        {
          src: require('../../assets/2.jpg')
        },
        {
          src: require('../../assets/3.jpg')
        },
        {
          src: require('../../assets/4.jpg')
        },
        {
          src: require('../../assets/5.jpg')
        }
      ],
      // basicdata数据包含组件基本数据
      basicdata: {
        start: {},
        end: {}
      },
      // temporaryData数据包含组件临时数据
      temporaryData: {
        prefixes: detectPrefixes(),
        offsetY: '',
        poswidth: 0,
        posheight: 0,
        lastPosWidth: '',
        lastPosHeight: '',
        lastZindex: '',
        rotate: 0,
        lastRotate: 0,
        visible: 3,
        tracking: false,
        animation: false,
        currentPage: 0,
        opacity: 1,
        lastOpacity: 0,
        swipe: false,
        zIndex: 10
      }
    }
  },
  computed: {
    // 划出面积比例
    offsetRatio () {
      // console.log('el', this.$el)
      // const width = this.$el.offsetWidth
      // const height = this.$el.offsetHeight
      // const offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      // const offsetHeight = height - Math.abs(this.temporaryData.posheight)
      // const ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0
      // return ratio > 1 ? 1 : ratio
      return 1
    },
    // 划出宽度比例
    offsetWidthRatio () {
      // const width = this.$el.offsetWidth
      // const offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      // const ratio = 1 - offsetWidth / width || 0
      // return ratio
      return 1
    }
  },
  components: {
  },
  created () {},
  mounted () {
    // 绑定事件
    // this.$on('next', () => {
    //   this.next()
    // })
    // this.$on('prev', () => {
    //   this.prev()
    // })
    console.log('el', this.$el)
    document.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
  },
  methods: {
    touchstart (e) {
      if (this.temporaryData.tracking) {
        return
      }
      // 是否为touch
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false
          return
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime()
          this.basicdata.start.x = e.targetTouches[0].clientX
          this.basicdata.start.y = e.targetTouches[0].clientY
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
          // offsetY在touch事件中没有，只能自己计算
          this.temporaryData.offsetY = e.targetTouches[0].pageY - this.$el.offsetParent.offsetTop
        }
      // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime()
        this.basicdata.start.x = e.clientX
        this.basicdata.start.y = e.clientY
        this.basicdata.end.x = e.clientX
        this.basicdata.end.y = e.clientY
        this.temporaryData.offsetY = e.offsetY
      }
      this.temporaryData.tracking = true
      this.temporaryData.animation = false
    },
    touchmove (e) {
      // 记录滑动位置
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === 'touchmove') {
          e.preventDefault()
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        } else {
          e.preventDefault()
          this.basicdata.end.x = e.clientX
          this.basicdata.end.y = e.clientY
        }
        // 计算滑动值
        this.temporaryData.poswidth = this.basicdata.end.x - this.basicdata.start.x
        this.temporaryData.posheight = this.basicdata.end.y - this.basicdata.start.y
        const rotateDirection = this.rotateDirection()
        const angleRatio = this.angleRatio()
        this.temporaryData.rotate = rotateDirection * this.offsetWidthRatio * 15 * angleRatio
      }
    },
    touchend (e) {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 滑动结束，触发判断
      // 判断划出面积是否大于0.4
      if (this.offsetRatio >= 0.4) {
        // 计算划出后最终位置
        const ratio = Math.abs(this.temporaryData.posheight / this.temporaryData.poswidth)
        this.temporaryData.poswidth = this.temporaryData.poswidth >= 0 ? this.temporaryData.poswidth + 200 : this.temporaryData.poswidth - 200
        this.temporaryData.posheight = this.temporaryData.posheight >= 0 ? Math.abs(this.temporaryData.poswidth * ratio) : -Math.abs(this.temporaryData.poswidth * ratio)
        this.temporaryData.opacity = 0
        this.temporaryData.swipe = true
        this.nextTick()
      // 不满足条件则滑入
      } else {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.swipe = false
        this.temporaryData.rotate = 0
      }
    },
    nextTick () {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      this.temporaryData.lastPosHeight = this.temporaryData.posheight
      this.temporaryData.lastRotate = this.temporaryData.rotate
      this.temporaryData.lastZindex = 20
      // 循环currentPage
      this.temporaryData.currentPage = this.temporaryData.currentPage === this.pages.length - 1 ? 0 : this.temporaryData.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.opacity = 1
        this.temporaryData.rotate = 0
      })
    },
    onTransitionEnd (index) {
      const lastPage = this.temporaryData.currentPage === 0 ? this.pages.length - 1 : this.temporaryData.currentPage - 1
      // dom发生变化正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === lastPage) {
        this.temporaryData.animation = true
        this.temporaryData.lastPosWidth = 0
        this.temporaryData.lastPosHeight = 0
        this.temporaryData.lastOpacity = 0
        this.temporaryData.lastRotate = 0
        this.temporaryData.swipe = false
        this.temporaryData.lastZindex = -1
      }
    },
    prev () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      const width = this.$el.offsetWidth
      this.temporaryData.poswidth = -width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '-3'
      this.temporaryData.swipe = true
      this.nextTick()
    },
    next () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      const width = this.$el.offsetWidth
      this.temporaryData.poswidth = width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '3'
      this.temporaryData.swipe = true
      this.nextTick()
    },
    rotateDirection () {
      if (this.temporaryData.poswidth <= 0) {
        return -1
      } else {
        return 1
      }
    },
    angleRatio () {
      const height = this.$el.offsetHeight
      const offsetY = this.temporaryData.offsetY
      const ratio = -1 * (2 * offsetY / height - 1)
      return ratio || 0
    },
    inStack (index, currentPage) {
      const stack = []
      const visible = this.temporaryData.visible
      const length = this.pages.length
      for (let i = 0; i < visible; i++) {
        if (currentPage + i < length) {
          stack.push(currentPage + i)
        } else {
          stack.push(currentPage + i - length)
        }
      }
      return stack.indexOf(index) >= 0
    },
    // 遍历样式
    transform (index) {
      // console.log('-------')
      const currentPage = this.temporaryData.currentPage
      const length = this.pages.length
      const lastPage = currentPage === 0 ? this.pages.length - 1 : currentPage - 1
      const style = {}
      const visible = this.temporaryData.visible
      if (index === this.temporaryData.currentPage) {
        return
      }
      if (this.inStack(index, currentPage)) {
        const perIndex = index - currentPage > 0 ? index - currentPage : index - currentPage + length
        style.opacity = '1'
        style.transform = 'translate3D(0,0,' + -1 * 60 * (perIndex - this.offsetRatio) + 'px' + ')'
        style.zIndex = visible - perIndex
        if (!this.temporaryData.tracking) {
          style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.temporaryData.prefixes.transition + 'Duration'] = 300 + 'ms'
        }
      } else if (index === lastPage) {
        style.transform = 'translate3D(' + this.temporaryData.lastPosWidth + 'px' + ',' + this.temporaryData.lastPosHeight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.lastRotate + 'deg)'
        style.opacity = this.temporaryData.lastOpacity
        style.zIndex = this.temporaryData.lastZindex
        style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
        style[this.temporaryData.prefixes.transition + 'Duration'] = 300 + 'ms'
      } else {
        style.zIndex = '-1'
        style.transform = 'translate3D(0,0,' + -1 * visible * 60 + 'px' + ')'
      }
      return style
    },
    // 首页样式切换
    transformIndex (index) {
      // console.log('-------1111')
      // 处理3D效果
      if (index === this.temporaryData.currentPage) {
        const style = {}
        style.transform = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style.opacity = this.temporaryData.opacity
        style.zIndex = 10
        if (this.temporaryData.animation) {
          style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.temporaryData.prefixes.transition + 'Duration'] = (this.temporaryData.animation ? 300 : 0) + 'ms'
        }
        return style
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stack {
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 1000px; //子元素视距
  perspective-origin: 50% 150%; //子元素透视位置
  -webkit-perspective: 1000px;
  -webkit-perspective-origin: 50% 150%;
  margin: 0;
  padding: 0;
}
.stack-item{
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  opacity: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: auto;
}
.stack-item img {
  width: 100%;
  display: block;
  pointer-events: none;
}
</style>
