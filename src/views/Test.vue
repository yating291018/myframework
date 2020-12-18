<template>
  <div>
    <div>
      <input type="text" class="input">
      <input type="text" class="input">
      <input type="text" class="input">
      <input type="text" class="input">
      <input type="text" class="input">
      <input type="text" class="input">
      <input type="text" class="input" ref="inputRef" @focus="showBox" @click.stop>
    </div>
    <div class="box" ref="boxRef" @click.stop></div>
    {{ message }}
    <button @click="changeValue">改变</button>
    <button @click="enterPage">跳转</button>
    <child></child>
    {{ Testnumber() }}
    <div :style="styleobject()">测试11</div>
    <Button type="primary" @click="changeStyle">改变</Button>
  </div>
</template>

<script>
import { getState, dispatch } from '@/common/store'
import LoadingComponent from './Loading'
export default {
  data () {
    return {
      message: getState(),
      testobj: {
        width: 100 + 'px',
        height: 100,
        background: 'red'
      },
      number: 0
    }
  },
  components: {
    Child: () => ({
      component: import('./child'),
      loading: LoadingComponent,
      timeout: 1000,
      delay: 0
    })
  },
  created () {},
  mounted () {
    this.getInputRect()
    // const boxDom = this.$refs.boxRef.getBoundingClientRect()
    // console.log('boxDom', boxDom)
    window.addEventListener('resize', () => {
      this.getInputRect()
    })
    window.addEventListener('click', () => {
      this.$refs.boxRef.style.display = 'none'
    })
  },
  methods: {
    getInputRect () {
      const inputDom = this.$refs.inputRef.getBoundingClientRect()
      const left = inputDom.left
      this.$refs.boxRef.style.left = left + 'px'
      this.$refs.boxRef.style.top = inputDom.bottom + 'px'
    },
    showBox () {
      const display = getComputedStyle(this.$refs.boxRef, null).display
      console.log('display', display)
      this.$refs.boxRef.style.display = display === 'none' ? 'block' : 'none'
    },
    changeValue () {
      dispatch(10)
    },
    enterPage () {
      this.$router.push('/test1')
    },
    styleobject () {
      console.log('-----------')
      const style = {}
      style.width = '100px'
      style.height = this.testobj.height + 'px'
      style.background = 'red'
      return style
    },
    changeStyle () {
      this.testobj.height = 200
      this.number = 10
    },
    Testnumber () {
      console.log('触发了')
      return this.number
    }
  }
}
</script>

<style scoped lang="less">
.input {
  border: 1px solid #ccc;
  margin-left: 100px;
  margin-top: 50px;
}
.box {
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  top: 0px;
  left: 0px;
  display: none;
}
</style>
