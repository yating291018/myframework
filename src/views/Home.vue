<template>
  <div class="home">
    <Button @click="test(1)"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { isNull } from '@/common/utils'
export default {
  name: 'Home',
  components: {
    Button: () => import('@/components/Button.vue')
  },
  methods: {
    test (autoparam) {
      isNull('11111')
      console.log('autoparam', autoparam)
    }
  }
}
</script>
