<template>
  <div class="container" ref="containerRef">
    <Button type="primary" @click="createPdf">生成</Button>
    <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3958851071,1653007516&fm=26&gp=0.jpg" alt="">
    <!-- <div class="item" v-for="item in 100" :key="item">
      这是生成pdffdfafs发生的喀什发顺丰三法师{{ item }}
    </div> -->
    <!-- <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld /> -->
    <th-table></th-table>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>fdsfasfdsafsafsafsadfasdf</div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <th-table></th-table>
    <div>到底了</div>
  </div>
</template>

<script>
import html2Canvas from 'html2canvas'
// import JsPDF from 'jspdf'
import ThTable from './Table'
export default {
  data () {
    return {
    }
  },
  components: {
    // HelloWorld
    ThTable
  },
  created () {},
  mounted () {
    // this.createPdf()
  },
  methods: {
    createPdf () {
      // const canvas = document.createElement('canvas')
      // const context = canvas.getContext('2d')
      // var scale = 1
      // canvas.width = dom.offsetWidth
      // canvas.height = dom.offsetHeight
      // context.scale(scale, scale)
      const dom = this.$refs.containerRef
      html2Canvas(dom, {
        dpi: 144,
        allowTaint: true,
        width: dom.offsetWidth, // 设置获取到的canvas宽度
        height: dom.offsetHeight, // 设置获取到的canvas高度
        useCORS: true,
        x: 0, // 页面在水平方向滚动的距离
        y: 0 // 页面在垂直方向滚动的距离
      }).then((canvas) => {
        const pageData = canvas.toDataURL('image/png', 1.0)
        const aDom = document.createElement('a')
        aDom.href = pageData
        aDom.download = '1.png'
        document.body.appendChild(aDom)
        aDom.click()
        document.body.removeChild(aDom)
        // document.body.appendChild(aDom)
        // const canvasWidth = canvas.width
        // const canvasHeight = canvas.height
        // const pageHeight = (canvasWidth / 592.28) * 841.89 // 一页A4 pdf能显示的canvas高度
        // const imgWidth = 595.28 // 设置图片宽度和A4纸宽度相等
        // const imgHeight = (592.28 / canvasWidth) * canvasHeight // 等比例换算成A4纸的高度
        // let totalHeight = imgHeight // 需要打印的图片总高度，初始状态和图片高度相等
        // const pageData = canvas.toDataURL('image/png', 1.0)
        // const PDF = new JsPDF('p', 'pt', 'a4', true)
        // if (totalHeight < pageHeight) { //
        //   PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight) // 从顶部开始打印
        // } else {
        //   let top = 0 // 打印初始区域
        //   while (totalHeight > 0) {
        //     PDF.addImage(pageData, 'JPEG', 0, top, imgWidth, imgHeight) // 从图片顶部往下top位置开始打印
        //     totalHeight -= pageHeight
        //     top -= 841.89
        //     if (totalHeight > 0) {
        //       PDF.addPage()
        //     }
        //   }
        // }
        // PDF.save('test.pdf')
      })
    }
  }
}
</script>

<style scoped lang="less">
.container {
  // width: 800px;
  // margin: 0 auto;
}
// .container {
//   position: fixed; // 脱离文档 不占空间;
//   z-index: -1; // 设置为不可见;
//   width: 100%;
//   padding: 0.5px;
//   overflow: auto;
//   height: 100vh;
// }
// .item {
//   height: 30px;
//   line-height: 30px;
//   background: #000;
//   color: #fff;
//   margin-bottom: 10px;
// }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
