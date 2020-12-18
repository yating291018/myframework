<script>
export default {
  name: 'KTableItem',
  // 接收prop, label
  props: {
    prop: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  mounted () {
    // 每次加载k-table-item的时候，就会触发，统计一共多少列
    // 得到parent
    let parent = this.$parent
    let name = parent.$options.name
    while (parent && name !== 'KTable') {
      parent = parent.$parent
      if (parent) {
        name = parent.$options.name
      }
    }
    // console.log('this.$scopedSlots.default', this.$scopedSlots)
    const store = parent.store
    store.states.columns.push({
      prop: this.prop,
      label: this.label,
      scopeSlot: this.$scopedSlots.default,
      sortable: !(this.$attrs.sortable === undefined || this.$attrs.sortable === false),
      isUpSelect: false,
      isDownSelect: false
    })
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
