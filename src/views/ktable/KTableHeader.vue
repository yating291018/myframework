<template>
  <table class="ktable">
    <thead>
      <tr class="ktable-row">
        <th v-for="item in columns" :key="item.prop" :style="{width: width}">
          {{ item.label }}
          <span class="iconwrapper">
            <svg-icon class="sortupclass" :className="item.isUpSelect ? 'selectColor' : ''" v-if="item.sortable" iconClass="sortup" @click="sortchange('Up', item)"></svg-icon>
            <svg-icon class="sortdownclass" :className="item.isDownSelect ? 'selectColor' : ''" v-if="item.sortable" iconClass="sortdown" @click="sortchange('Down', item)"></svg-icon>
          </span>
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  data () {
    const columns = this.$parent.store.states.columns
    return {
      columns
    }
  },
  components: {
  },
  computed: {
    width () {
      return (100 / (this.columns.length || 1)) + '%'
    }
  },
  created () {},
  mounted () {},
  methods: {
    clearOtherSelect () {
      this.columns = this.columns.map(item => {
        item.isUpSelect = false
        item.isDownSelect = false
        return item
      })
    },
    // 排序
    sortchange (direction, item) {
      // 防抖
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.sortChangeFn(direction, item)
      }, 200)
    },
    sortChangeFn (direction, item) {
      // 清除其他选择
      this.clearOtherSelect()
      // 先换颜色
      if (direction === 'Up') {
        item.isUpSelect = true
        item.isDownSelect = false
      } else {
        item.isUpSelect = false
        item.isDownSelect = true
      }
      this.$emit('sortchange', direction, item.prop)
    }
  }
}
</script>

<style scoped lang="less">
.selectColor {
  color: red;
}
.iconwrapper {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 34px;
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  overflow: initial;
  .sortupclass {
    cursor: pointer;
    border-top-color: #409eff;
    position: absolute;
    top: 5px;
    left: 7px;
  }
  .sortdownclass {
    position: absolute;
    bottom: 7px;
    left: 7px;
    cursor: pointer;
  }
}
</style>
