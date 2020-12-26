<template>
  <div class="container">
    <div id="main"></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
var echarts = require('echarts/lib/echarts')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/graphic')
export default {
  data () {
    return {

    }
  },
  components: {
  },
  created () {},
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const option = {
        title: {
          text: 'Graph 简单示例'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            draggable: true,
            label: {
              show: true
            },
            // edgeSymbol: ['circle', 'arrow'],
            // edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            data: [{
              name: '节点1',
              x: 300,
              y: 300
            }, {
              name: '节点2',
              x: 800,
              y: 300
            }, {
              name: '节点3',
              x: 550,
              y: 100
            }, {
              name: '节点4',
              x: 550,
              y: 500
            }],
            // links: [],
            links: [{
              source: '节点1',
              target: '节点3',
              label: {
                normal: {
                  show: true,
                  formatter (x) {
                    return '签约人'
                  }
                }
              }
            }, {
              source: '节点2',
              target: '节点4'
            }, {
              source: '节点1',
              target: '节点4'
            }],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      }
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped lang="less">
#main {
  width: 100%;
  height: 400px;
  margin: 200px auto;
}
</style>
