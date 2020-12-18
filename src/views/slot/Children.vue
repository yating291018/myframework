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
  },
  render () {
    console.log(this.$scopedSlots.default)
    return (
      <div>
        children
        { this.$slots.default }
      </div>
    )
  }
}
</script>

<style scoped lang="less">
</style>
