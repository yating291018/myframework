<template>
  <div class="container">
    <!-- 使用方式k-table中结束数据，默认排序方式 -->
    <k-table :data="List" :default-sort = "{prop: 'date', order: 'Up'}">
      <!-- 每个item可以有自已的排序sortable -->
      <k-table-item prop="date" label="日期" sortable>
        <template v-slot="scope">
          <span>{{ scope.date }}</span>
        </template>
      </k-table-item>
      <!-- 每个item可以使用插槽 -->
      <k-table-item prop="name" label="姓名" sortable>
        <template v-slot="scope">
          <span>{{ scope.name }}</span>
        </template>
      </k-table-item>
      <k-table-item prop="address" label="地址"></k-table-item>
      <k-table-item prop="sex" label="性别"></k-table-item>
      <k-table-item prop="action" label="操作">
        <template v-slot="scope">
          <button @click="look(scope)">查看</button>
        </template>
      </k-table-item>
    </k-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      List: [{
        date: '2016-05-07',
        name: '王小虎slot',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男'
      }, {
        date: '2016-05-10',
        name: '张小虎slot',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-04',
        name: '胡小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '白小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    KTable: () => import('./KTable'),
    KTableItem: () => import('./KTableItem')
  },
  created () {},
  mounted () {},
  methods: {
    look (scope) {
      console.log('scope', scope)
    }
  }
}
</script>

<style scoped lang="less">
</style>
