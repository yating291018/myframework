<template>
  <div class="home">
    <!-- <Button @click="test(1)"></Button> -->
    <div class="container">
      fdsfsafsafasfdasfdsaf
    </div>
  </div>
</template>

<script>
import { isNull } from '@/common/utils'
export default {
  name: 'Home',
  components: {
    // Button: () => import('@/components/Button.vue')
  },
  mounted () {
    this.$toast({
      message: '222222'
    })
  },
  methods: {
    test (autoparam) {
      isNull('11111')
      console.log('autoparam', autoparam)
    }
  }
}
</script>
<style lang="less">
@import './1.less';
</style>
