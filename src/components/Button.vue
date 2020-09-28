<template>
  <button @click="handler">点击</button>
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
  methods: {
    handler () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
</style>
