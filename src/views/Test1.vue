<template>
  <div class="container">
    {{ message }}
  </div>
</template>

<script>
import { getState } from '@/common/store'
export default {
  data () {
    return {
      message: getState()
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
</style>
