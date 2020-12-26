<template>
  <div class='container'>
    <!-- <tuhu-transfer
      :originalData='transferData'
      :targetDataPar="targetDataPar"
    ></tuhu-transfer> -->
    <th-pc-button @click="onClick"></th-pc-button>
  </div>
</template>

<script>
// import tuhuTransfer from './transfer'
export default {
  data () {
    return {
      originalData: [
      ],
      targetDataPar: [],
      transferData: []
    }
  },
  components: {
    // tuhuTransfer
    ThPcButton: () => import('@/components/ThPcButton')
  },
  created () {},
  mounted () {
    // this.init()
  },
  methods: {
    init () {
      this.transferData = []
      this.originalData.forEach(item => {
        const obj = {
          key: item.accountNo,
          label: item.accountNo
        }
        this.transferData.push(obj)
      })
    },
    onClick () {
      console.log('click me')
    }
  }
}
</script>

<style scoped lang='less'></style>
