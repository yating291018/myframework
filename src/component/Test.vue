<template>
  <div class="container">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  },
  name: 'Test',
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
</style>
