<script>
export default {
  data () {
    return {
      message: 1
    }
  },
  components: {
  },
  created () {},
  mounted () {
    // setInterval(() => {
    //   this.message++
    //   console.log('message', this.message)
    // }, 1000)
  },
  methods: {},
  render (h) {
    console.log('-------')
    return h('span', this.message)
  }
}
</script>

<style scoped lang="less">
</style>
