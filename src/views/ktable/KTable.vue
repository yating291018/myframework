<template>
  <div class="k-table">
    <div style="width: 90%;margin:0 auto;">
      <k-table-header @sortchange="sortchange"></k-table-header>
      <slot></slot>
      <k-table-body :tableList="data"></k-table-body>
    </div>
  </div>
</template>

<script>
import KStore from './Kstore'
export default {
  name: 'KTable',
  provide () {
    return {
      tableList: this
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    defaultSort: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    const store = new KStore(this)
    return {
      store
    }
  },
  components: {
    KTableHeader: () => import('./KTableHeader'),
    KTableBody: () => import('./KTableBody')
  },
  created () {
    this.initSort()
  },
  mounted () {
    // console.log('slots', this.$slots.default)
  },
  methods: {
    // 初始化排序
    initSort () {
      const { prop, order } = this.defaultSort
      this.sortchange(order, prop)
    },
    sortchange (direction, prop) {
      // console.log('prop', prop)
      // 如果是升序
      if (direction === 'Up') {
        this.data.sort((prev, next) => {
          if (!isNaN(prev[prop])) {
            return this.sortType('number', prev[prop], next[prop])
          } else {
            return this.sortType('string', prev[prop], next[prop])
          }
        })
        // console.log('data', this.data)
      } else {
        this.data.sort((prev, next) => {
          if (!isNaN(prev[prop])) {
            return this.sortType('number', next[prop], prev[prop])
          } else {
            return this.sortType('string', next[prop], prev[prop])
          }
        })
      }
    },
    // 不同类型的排序
    sortType (type, prevValue, nextValue) {
      if (type === 'number') {
        return prevValue - nextValue
      } else {
        return prevValue.localeCompare(nextValue, 'zh-CN')
      }
    }
  }
}
</script>

<style scoped lang="less">
.k-table {
  width: 90%;
  .ktable {
    width: 100%;
    border-collapse: collapse;
    /deep/ .ktable-row td, /deep/ .ktable-row th{
      padding: 15px 0;
      font-size: 14px;
      font-weight: 600;
      height: 100%;
      border-bottom: 1px solid #ebeef5;
      text-align: left;
    }
    /deep/ .ktable-row:hover td{
      background: #eaeaea;
      cursor: pointer;
    }
  }
}
</style>
