<template>
  <div id="app">
    <!-- <Test message="打包"></Test> -->
    <router-view/>
  </div>
</template>
<script>
import { fn } from '@/common/utils'
// import Mytest from 'atestlib/libraryTest.umd.min.js'
// import { test } from '@/common/test'
// import { Test } from '@/component/index.js'
// console.log('test11111', test)
// console.log('Test', Mytest.Test)
export default {
  components: {
    // Test
  },
  mounted () {
    // console.log('Test1', Test1)
    setTimeout(() => {
      fn()
    }, 2000)
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
