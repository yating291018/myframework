<template>
  <div class="container">
    <div class="item" v-for="(item, index) in goodsTypeList" :key="item.id">
      <div class="title">{{ item.name }}</div>
      <div class="content">
        <button
          :class="{selectClass: subItem.selected}"
          v-for="(subItem, i) in item.propertyList"
          :key="subItem.id"
          :disabled="subItem.disabled"
          @click="handleClickSpecs1(item.id, subItem.id, subItem, index, i)"
        >{{ subItem.name }}</button>
      </div>
    </div>

    <!-- <div class="box">
      <div v-for="(item, index) in test" :key="item.id">
        <button :disabled="item.disabled">11111</button>
        <button @click="changeList(index)">改变</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import { goodType, orgdata } from './sku'
export default {
  data () {
    return {
      goodsTypeList: [],
      currentSkuList: [],
      valueIdSortAndIndex: [],
      selectItemList: [],
      test: []
    }
  },
  components: {
  },
  created () {
    this.init()
    this.getShopGoodsType()
    this.initGoodType()
  },
  mounted () {
    this.test = [{ disabled: false }, { disabled: false }]
  },
  methods: {
    changeList (index) {
      this.test.forEach(item => {
        item.disabled = true
      })
    },
    init () {
      const valueIdSortAndIndex = []
      const currentSkuList = orgdata.skus.map((item, index) => {
        const valueIdSort = []
        item.skusTypes.map(skusTypesItem => {
          valueIdSort.push(skusTypesItem.propertyId)
        })
        valueIdSortAndIndex.push({ valueIdSort: valueIdSort.sort() })
        return item.skusTypes
      })
      // 现货的二维码数据
      this.currentSkuList = currentSkuList
      // 把有货的商品放在一起
      this.valueIdSortAndIndex = valueIdSortAndIndex
    },
    // 获取所有的规格
    getShopGoodsType () {
      // goodType 为接口返回数据
      goodType.forEach(items => {
        items.propertyList.forEach(item => {
          item.selected = false
          item.disabled = true
        })
      })
      this.goodsTypeList = goodType
    },
    // 初始化 判断 是否有库存
    initGoodType () {
      // 库存的类别
      const currentSkuList = this.currentSkuList.flat(Infinity)
      // console.log('currentSkuList', currentSkuList)
      this.goodsTypeList.forEach(items => {
        items.propertyList.forEach(item => {
          for (var i = 0; i < currentSkuList.length; i++) {
            if (item.id === currentSkuList[i].propertyId) {
              item.disabled = false
              break
            }
          }
        })
      })
    },
    handleClickSpecs1 (grounpId, id, el, index, i) {
      const selectItemList = this.selectItemList
      if (el.disabled) {
        return false
      }
      if (!el.selected) {
        this.goodsTypeList[index].propertyList.forEach(item => {
          item.selected = false
        })
        this.goodsTypeList[index].propertyList[i].selected = true
        // 选中项中有同组元素，替换
        selectItemList.forEach((item, itemindex) => {
          if (item.index === index) {
            selectItemList.splice(itemindex, 1)
          }
        })
        selectItemList.push({ grounpId, id, index, i })
      } else {
        // 取消选中并删除选中项中数据
        this.goodsTypeList[index].propertyList[i].selected = false
        selectItemList.forEach((item, itemindex) => {
          if (item.id === id && item.grounpId === grounpId) {
            selectItemList.splice(itemindex, 1)
          }
        })
      }
      this.selectItemList = selectItemList

      // 取出组ID
      const xselectedgrounpIds = []
      selectItemList.forEach(item => {
        xselectedgrounpIds.push(item.grounpId)
      })

      // 处理disabled的逻辑
      if (selectItemList.length === 0) {
        // 选中属性为空，重新初始化数据
        this.initGoodType()
      } else {
        // 拿所有规格属性（即goodsTypeList）的每一项分别与已选中的数据（即selectItemList）的每一项，组成一个比较项，与现有库存比较，找到存在的可点项
        this.goodsTypeList.forEach((goodsType, goodsTypeIndex) => {
          goodsType.propertyList.forEach((prop, propIndex) => {
            if (!prop.selected) {
              prop.disabled = true
            }
            // 本次循环数据
            const pushdata = { grounpId: goodsType.id, id: prop.id, index: goodsTypeIndex, i: propIndex }
            if (xselectedgrounpIds.indexOf(goodsType.id) > -1) {
              // 当前循环的规格的组ID在已选规格中，删除同组规格，用当前规格替换后去与库存比较
              const sel = selectItemList.slice() // 用一个新变量接受数据，防止修改源数据
              const indexsplice = xselectedgrounpIds.indexOf(goodsType.id)
              sel.splice(indexsplice, 1, pushdata)
              this.optionsHandle(sel, pushdata)
            } else {
            //  当前循环规格组ID不在已选规格中，添加当前规格到复制出来的已选数组中，循环比较
              const sel = selectItemList.slice()
              sel.push(pushdata)
              this.optionsHandle(sel, pushdata)
            }
          })
        })
      }
    },
    isContained (aa, bb) {
      // 判断aa数组是否 全 包含bb数组
      if (!(aa instanceof Array) || !(bb instanceof Array) || (aa.length < bb.length)) {
        return false
      }
      const aaStr = aa.toString()
      for (let i = 0; i < bb.length; i++) {
        if (aaStr.indexOf(bb[i]) < 0) {
          return false
        }
      }
      return true
    },
    optionsHandle (selArr, pushdata) {
      const propertyIds = []
      // 将当前比较项的属性ID提取
      selArr.map(item => {
        propertyIds.push(item.id)
      })
      // 在现有库存中查找是否有可选项，可选的置为可点击
      this.valueIdSortAndIndex.map(item => {
        if (this.isContained(item.valueIdSort, propertyIds)) {
          this.goodsTypeList[pushdata.index].propertyList[pushdata.i].disabled = false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.item {
  padding: 0 10px;
  margin-bottom: 10px;
  .title {
    font-size: 16px;
    line-height: 30px;
    color: #000;
  }
  .content {
    margin-top: 5px;
    .selectClass {
      border: 1px solid red;
    }
    button {
      width: 50px;
      outline: none;
      padding: 3px 10px;
      border: none;
      margin-right: 10px;
    }
  }
}
</style>
