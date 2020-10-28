<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { fn } from '@/common/utils'
export default {
  mounted () {
    setTimeout(() => {
      fn()
    }, 2000)
  }
}
</script>
<style>
</style>
