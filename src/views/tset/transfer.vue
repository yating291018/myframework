<template>
  <div>
    <div class='transfer-content'>
      <div class='selection-container'>
        <div class='select-box left'>
          <div class='select-box-title' ref='originalCheckAll'>
            <input
              type='checkbox'
              class='checkbox-all'
              id='checkbox-all1'
              @click='originalChooseAll'
            />
            <label for='checkbox-all1' class='lable-all'></label>
            <span class='title'>源列表</span>
            <span class='totalCount'>{{ count.originalCount }}</span>
          </div>
          <div class='select-content'>
            <Input
              search
              clearable
              placeholder='请输入搜索内容'
              v-model='originalSearchVal'
            />
            <ul class='unselect-ul' ref='originalSelect'>
              <li v-for='item in originalSearch' :key='item.key'>
                <input
                  type='checkbox'
                  class='checkboxs'
                  :id='item.key'
                  @click='originalchooseItem(item, item.key)'
                />
                <label :for='item.key'></label>
                <span>{{ item.label }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class='arrows-box'>
          <div class='arrow-btns'>
            <button id='leftBtn' class='arrow-btn right' @click='leftBtn'>
              <span class='leftArrow'></span>
            </button>
            <button id='rightBtn' class='arrow-btn left' @click='rightBtn'>
              <span class='rightArrow'></span>
            </button>
          </div>
        </div>
        <div class='select-box right'>
          <div class='select-box-title' ref='targetCheckAll'>
            <input
              type='checkbox'
              class='checkbox-all'
              id='checkbox-all2'
              @click='targetChooseAll'
            />
            <label for='checkbox-all2' class='lable-all'></label>
            <span class='title'>目标列表</span>
            <span class='totalCount'>{{ count.targetCount }}</span>
          </div>
          <div class='select-content'>
            <Input
              search
              clearable
              placeholder='请输入搜索内容'
              v-model='targetSearchVal'
            />
            <ul class='selected-ul' ref='targetSelect'>
              <li
                v-for='item in targetSearch'
                track-by='$index'
                :key='item.key'
              >
                <input
                  type='checkbox'
                  class='checkboxs'
                  :id='item.key'
                  @click='targetchooseItem(item, item.key, item.key)'
                />
                <label :for='item.key'></label>
                <span>{{ item.label }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class='arrows-box'>
          <div class='arrow-btns'>
            <button disabled='disabled' id='leftBtn' class='arrow-btn top'>
              <span class='topArrow'></span>
            </button>
            <button
              disabled='disabled'
              id='rightBtn'
              class='arrow-btn bottom'
            >
              <span class='downArrow'></span>
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { randomID } from '../../va/va-biz/utils';
export default {
  name: 'v-transfer',
  props: {
    originalData: {
      type: Array,
      default () {
        return []
      }
    },
    targetDataPar: {
      type: Array,
      default () {
        return []
      }
    },
    modify: Boolean
  },
  data () {
    return {
      modal1: true,
      targetData: [],
      originalCheckedData: [],
      targetCheckedData: [],
      originalCheck: false,
      originalSearchVal: '',
      targetSearchVal: '',
      targetCheck: false,
      originalCount: '',
      targetCount: '',
      randomKey: [],
      activateUp: false,
      activateDown: false,
      clearable: true
    }
  },
  computed: {
    originalSearch () {
      this.copy()
      var originalData = this.originalData.filter(ele => {
        if (ele.label.match(this.originalSearchVal)) {
          return ele
        }
      })
      return originalData
    },
    targetSearch () {
      console.log('targetData111111', this.targetData)
      var targetData = this.targetData.filter(ele => {
        if (ele.label.match(this.targetSearchVal)) {
          return ele
        }
      })
      return targetData
    },
    count () {
      return {
        originalCount: this.originalData.length,
        targetCount: this.targetData.length
      }
    }
  },
  watch: {
    targetData: function (val, val1) {
      if (this.modify) {
        this.originalCheck = true
        this.targetCheck = true
        // this.originalChooseAll()
        this.targetChooseAll()
        this.btnColor()
        this.$refs.originalCheckAll.children[0].checked = false
        this.$refs.targetCheckAll.children[0].checked = false
        this.activateUp = this.activateDown = false
        this.originalSearchVal = ''
        this.targetSearchVal = ''
      }
    },
    originalSearchValFn: function () {
      this.originalCheck = true
      this.originalChooseAll()
      this.$refs.originalCheckAll.children[0].checked = false
      setTimeout(function () {
        const len = document.getElementsByClassName('unselect-ul')[0].children
          .length
        if (len === 0) {
          document.getElementsByClassName('unemptyTip')[0].style.display = 'block'
        } else {
          document.getElementsByClassName('unemptyTip')[0].style.display = 'none'
        }
      })
    },
    targetSearchVal: function () {
      this.targetCheck = true
      this.targetChooseAll()
      this.$refs.targetCheckAll.children[0].checked = false
      this.activateUp = this.activateDown = false
      setTimeout(function () {
        const len = document.getElementsByClassName('selected-ul')[0].children
          .length
        if (len === 0) {
          document.getElementsByClassName('emptyTip')[0].style.display =
            'block'
        } else {
          document.getElementsByClassName('emptyTip')[0].style.display = 'none'
        }
      })
    },
    deep: true,
    immediate: true
  },
  methods: {
    copy () {
      this.targetData = JSON.parse(JSON.stringify(this.targetDataPar))
    },
    // 左边数据选择
    originalchooseItem (item, key) {
      if (
        JSON.stringify(this.originalCheckedData).indexOf(
          JSON.stringify(item)
        ) === -1
      ) {
        this.originalCheckedData.push(item)
      } else {
        this.originalCheckedData = this.originalCheckedData.filter(item => {
          return item.key !== key
        })
      }
      if (this.originalCheckedData.length === this.originalData.length) {
        this.$refs.originalCheckAll.children[0].checked = true
        this.originalCheck = true
      } else {
        this.$refs.originalCheckAll.children[0].checked = false
        this.originalCheck = false
      }
      this.btnColor()
      this.modify = false
    },
    // 右边数据选择
    targetchooseItem (item, key, id) {
      if (
        JSON.stringify(this.targetCheckedData).indexOf(JSON.stringify(item)) ===
        -1
      ) {
        this.targetCheckedData.push(item)
      } else {
        this.targetCheckedData = this.targetCheckedData.filter(item => {
          return item.id !== id
        })
      }
      if (this.targetCheckedData.length === this.targetData.length) {
        this.$refs.targetCheckAll.children[0].checked = true
        this.targetCheck = true
      } else {
        this.$refs.targetCheckAll.children[0].checked = false
        this.targetCheck = false
      }
      this.btnColor()
      this.handleSelctedChange(this.targetCheckedData)
      this.modify = false
    },
    // 左边全选中
    originalChooseAll () {
      this.originalCheck = !this.originalCheck
      if (this.originalCheck) {
        // 全选中
        for (let i = 0; i < this.$refs.originalSelect.children.length; i++) {
          this.$refs.originalSelect.children[i].children[0].checked = true
        }
        // 源数据全部选择
        this.originalCheckedData = this.originalData.map(function (element) {
          return element
        })
      } else {
        // 清空选中
        for (let i = 0; i < this.$refs.originalSelect.children.length; i++) {
          this.$refs.originalSelect.children[i].children[0].checked = false
        }
        // 清空源数据选择
        this.originalCheckedData = []
      }
      this.btnColor()
      this.modify = false
    },
    // 右边全选中
    targetChooseAll () {
      this.targetCheck = !this.targetCheck
      if (this.targetCheck) {
        // 全选中
        for (let i = 0; i < this.$refs.targetSelect.children.length; i++) {
          this.$refs.targetSelect.children[i].children[0].checked = true
        }
        // 源数据全部选择
        this.targetCheckedData = this.targetData.map(function (element) {
          return element
        })
      } else {
        // 清空选中
        for (let i = 0; i < this.$refs.targetSelect.children.length; i++) {
          this.$refs.targetSelect.children[i].children[0].checked = false
        }
        // 清空源数据选择
        this.targetCheckedData = []
      }
      this.btnColor()
      this.modify = false
    },
    // 数据右移
    rightBtn () {
      // console.log('originalCheckedData', this.originalCheckedData)
      if (this.originalCheckedData.length > 0) {
        for (const index in this.originalCheckedData) {
          const obj = {
            type: 'v-tool-item',
            label: this.originalCheckedData[index].label,
            key: this.originalCheckedData[index].key
          }
          this.targetData.unshift(obj)
        }
        this.originalCheck = true
        // this.originalChooseAll()
        this.$refs.originalCheckAll.children[0].checked = false
        this.btnColor()
        this.$refs.targetCheckAll.children[0].checked = false
        this.$emit('changeData', this.targetData)
        this.activateUp = this.activateDown = false
        this.modify = false
        console.log('this.targetData', this.targetData)
        this.targetData.forEach((item) => {
          const originIndex = this.originalData.findIndex(subitem => subitem.key === item.key)
          console.log('originIndex', originIndex)
          this.originalData.splice(originIndex, 1)
        })
      }
    },
    // 数据左移
    leftBtn () {
      if (this.targetCheckedData.length > 0) {
        for (const index in this.targetCheckedData) {
          this.targetData = this.targetData.filter(item => {
            return item.id !== this.targetCheckedData[index].id
          })
        }
        this.targetCheck = true
        this.targetChooseAll()
        this.$refs.targetCheckAll.children[0].checked = false
        this.btnColor()
        this.$emit('changeData', this.targetData)
        this.modify = false
      }
      this.handleSelctedChange(this.targetCheckedData)
    },
    // 左右移按钮颜色修改
    btnColor () {
      // 右移按钮
      if (this.originalCheckedData.length > 0) {
        document.getElementById('rightBtn').style.backgroundColor = '#03a4ad'
      } else {
        document.getElementById('rightBtn').style.backgroundColor = '#f5f7fa'
      }
      // 左移按钮
      if (this.targetCheckedData.length > 0) {
        document.getElementById('leftBtn').style.backgroundColor = '#03a4ad'
      } else {
        document.getElementById('leftBtn').style.backgroundColor = '#f5f7fa'
      }
      this.modify = false
    },
    // len生成数组的长度，min生成数最小值，max生成数的最大值
    randomArr (len, min, max) {
      // 可生成数的范围小于数组长度
      if (max - min < len) {
        return null
      }
      while (this.randomKey.length < len) {
        var num = this.randomNum(min, max)
        if (this.randomKey.indexOf(num) === -1) {
          this.randomKey.push(num)
          return num
        }
      }
    },
    randomNum (min, max) {
      const S4 = () =>
        (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
      )
      // return Math.floor(Math.random() * (max - min) + min)
    },
    moveUpOrDown (actionType) {
      const tempKey = this.targetData[this.selectedKeyIndex]
      if (actionType === 'up') {
        this.targetData[this.selectedKeyIndex--] = this.targetData[
          this.selectedKeyIndex
        ]
      } else {
        this.targetData[this.selectedKeyIndex++] = this.targetData[
          this.selectedKeyIndex
        ]
      }
      this.targetData[this.selectedKeyIndex] = tempKey
      this.targetData = [...this.targetData]
      this.activateUpOrDown()
      this.modify = false
    },
    handleSelctedChange (targetSelectedKeys) {
      if (targetSelectedKeys.length !== 1) {
        this.activateUp = this.activateDown = false
        return
      }
      this.selectedKeyIndex = this.targetData.indexOf(targetSelectedKeys[0])
      this.activateUpOrDown()
      this.modify = false
    },
    activateUpOrDown () {
      this.activateUp = this.activateDown = true
      this.selectedKeyIndex === 0 && (this.activateUp = false)
      this.selectedKeyIndex === this.targetData.length - 1 &&
        (this.activateDown = false)
      this.$emit('changeData', this.targetData)
      this.modify = false
    }
  }
}
</script>

<style scope>
* {
  padding: 0;
  margin: 0;
}
.transfer-content {
  display: inline-block;
  position: relative;
  line-height: 1.5;
}
li {
  list-style: none;
  cursor: pointer;
  position: relative;
}
.selection-container {
  height: 282px;
}
.select-box {
  width: 180px;
  border: 1px solid #ebeef5;
  border-radius: 6px;
  display: inline-block;
  font-size: 12px;
  left: 15px;
  height: 283px;
  position: relative;
  float: left;
}
.arrows-box {
  float: left;
  display: inline-block;
  position: relative;
  line-height: 1.5;
  top: 35%;
}
.select-content {
  width: 100%;
  overflow: hidden;
  height: 86%;
}
.select-box-title {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: '微软雅黑';
  padding: 0 6%;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  background: #f9fafc;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  color: #000;
}
/*.checkbox-all{
float:left;
}*/
.select-box-title label:before {
  left: -14px !important;
  top: 4px !important;
}
.select-box-title label:after {
  left: -10px !important;
  top: 5px !important;
}
.checkboxs {
  vertical-align: middle;
}
.unselect-ul {
  padding: 8px 0 10px 0;
  overflow: auto;
  height: 87%;
}
.selected-ul {
  padding: 8px 0 10px 0;
  overflow: auto;
  height: 87%;
}
.select-content li {
  padding: 5px 15px;
  font-size: 12px;
  font-family: '微软雅黑';
  overflow: hidden;
  text-overflow: ellipsis;
}
/* .select-content .ivu-input{ */
/* border-radius: 0% !important; */
/* border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px; */
/* } */
.select-content .ivu-input-icon {
  line-height: 29px;
  right: 2px;
}
.select-content .ivu-input-wrapper {
  padding: 5px 8px 0px;
}
.select-content .ivu-input {
  height: 29px;
}
.select-box input[type='checkbox'] {
  position: absolute;
  left: 13px;
  top: 9px;
  width: 20px;
  height: 20px;
  opacity: 0;
}
.select-box label {
  position: absolute;
  left: 30px;
  top: 12px;
  height: 20px;
  line-height: 20px;
}
.select-box span {
  padding-left: 34px;
  white-space: nowrap;
}
.select-box label:before {
  content: '';
  position: absolute;
  left: -14px;
  top: -3px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  background-color: #fff;
}
.select-box label:after {
  content: '';
  position: absolute;
  left: -8px;
  top: 0px;
  width: 4px;
  height: 8px;
  border: 2px solid #fff;
  background: #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.select-box .select-box-title label:after {
  content: '';
  position: absolute;
  left: -8px !important;
  top: 7px !important;
  width: 4px;
  height: 8px;
  border: 0;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  background: #fff;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.select-box input[type='checkbox']:checked + label:before {
  background: #03a4ad;
  border-color: #03a4ad;
  cursor: pointer;
}
.select-box input[type='checkbox']:checked + label:after {
  background: #03a4ad;
  cursor: pointer;
}
.arrow-btns {
  display: inline-block;
  margin: 0px 3px 0px 40px;
  min-width: 24px;
}
.btn-cursor {
  background-color: #409eff !important;
  border: 1px solid #409eff !important;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.btn-cursor svg {
  fill: #fff !important;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
/*.btn-cursor{
cursor: not-allowed !important;
}*/
.arrow-btn {
  display: block;
  position: relative;
  width: 40px;
  height: 31px;
  background: #eee;
  margin: 0 auto 5px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 3px;
  color: #c5c8ce;
  background-color: #f7f7f7;
  border-color: #dcdee2;
}
.arrow-btn svg {
  padding: 11px;
  width: 17px;
  height: 17px;
  color: white;
  fill: #c0c4cc;
}
.leftArrow:before {
  content: '\F115';
  font-size: 14px;
  color: #d9dde7;
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
}
.rightArrow:before {
  content: '\F11F';
  font-size: 14px;
  color: #d9dde7;
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
}
.topArrow:before {
  content: '\F124';
  font-size: 14px;
  color: #ccd0d8;
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
  cursor: not-allowed;
}
.downArrow:before {
  content: '\F116';
  font-size: 14px;
  color: #ccd0d8;
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
}
.top {
  cursor: not-allowed !important;
}
.bottom {
  cursor: not-allowed !important;
}
#leftBtn {
  margin-bottom: 12px;
}
.lable-all {
  top: 7px !important;
}
.title {
  padding-left: 39px !important;
}
.totalCount {
  max-width: 16px;
  padding: 0 !important;
  margin-left: 36px;
}
.emptyTip {
  text-align: center;
  color: #c5c8ce;
  font-size: 14px !important;
  display: none;
}
.unemptyTip {
  text-align: center;
  color: #c5c8ce;
  font-size: 14px !important;
  display: none;
}
</style>
