<script>
export default {
  props: {
    tableList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    const columns = this.$parent.store.states.columns
    // const keys = columns.map(item => {
    //   return item.prop
    // })
    return {
      columnsKeys: columns
    }
  },
  components: {
  },
  computed: {
    width () {
      return (100 / (this.columnsKeys.length || 1)) + '%'
    }
  },
  created () {},
  mounted () {},
  methods: {},
  render () {
    return (
      <table class="ktable">
        <tbody>
          {
            this.tableList.map(item => {
              return (<tr class="ktable-row">
                {
                  this.columnsKeys.map(subItem => {
                    return (<td style={ { width: this.width } }>
                      {subItem.scopeSlot ? subItem.scopeSlot(item) : item[subItem.prop]}
                    </td>)
                  })
                }
              </tr>)
            })
          }
        </tbody>
      </table>
    )
  }
}
</script>
