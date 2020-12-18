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
        {
          id: 1,
          createTime: 1524733697000,
          updateTime: 1590743746599,
          category: 'BANK',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '招商银行',
          organization: '招商银行淮中支行',
          bankCode: '308290003378',
          accountNo: '121916080710101',
          accountName: '上海骥达贸易有限公司',
          currency: 'CNY',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: '11',
          operator: null,
          enableResolve: false,
          byname: '??????0101',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 52,
          createTime: 1524819661917,
          updateTime: 1585744167469,
          category: 'BANK',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '民生银行',
          organization: '民生银行春申支行',
          bankCode: '305290002633',
          accountNo: '603514195',
          accountName: '上海骥达贸易有限公司',
          currency: 'CNY',
          amount: null,
          amountTime: 1585497600000,
          owner: '上海骥达贸易有限公司',
          purpose: null,
          operator: null,
          enableResolve: true,
          byname: '骥达民生春申4195',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 103,
          createTime: 1545983727352,
          updateTime: 1581578475536,
          category: 'BANK',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '招商银行',
          organization: '招商银行上海浦江镇支行',
          bankCode: '308290003749',
          accountNo: '121916080710803',
          accountName: '上海骥达贸易有限公司',
          currency: 'CNY',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: null,
          operator: null,
          enableResolve: true,
          byname: '骥达招行浦江支行0803',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 137,
          createTime: 1548127272000,
          updateTime: 1581578475757,
          category: 'THIRD',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '支付宝',
          organization: null,
          bankCode: '2088421412498481',
          accountNo: 'jidazhifubao@tuhu.cn',
          accountName: '骥达支付宝',
          currency: 'CNY',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: null,
          operator: null,
          enableResolve: true,
          byname: '骥达支付宝',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 287,
          createTime: 1564470815023,
          updateTime: 1588733593438,
          category: 'BANK',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '花旗银行',
          organization: '花旗银行（中国）有限公司上海分行',
          bankCode: '531290000011',
          accountNo: '1778764209',
          accountName: '上海骥达贸易有限公司',
          currency: 'CNY',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: null,
          operator: null,
          enableResolve: false,
          byname: '花旗人民币4209',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 311,
          createTime: 1568096596064,
          updateTime: 1569295711265,
          category: 'BANK',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '硅谷浦发银行',
          organization: '硅谷浦发银行',
          bankCode: '600290001000',
          accountNo: '10030010000002067',
          accountName: '上海骥达贸易有限公司',
          currency: 'CNY',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: null,
          operator: null,
          enableResolve: false,
          byname: null,
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 528,
          createTime: 1593508207949,
          updateTime: 1593508207949,
          category: 'BANK',
          realType: '基本账户',
          type: 'BASE',
          institution: '中国农业银行',
          organization: '招商银行股份有限公司北京分行Test',
          bankCode: '1',
          accountNo: '1',
          accountName: '上海骥达贸易有限公司',
          currency: 'USD',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: '312',
          operator: null,
          enableResolve: false,
          byname: '1',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        },
        {
          id: 547,
          createTime: 1600931736637,
          updateTime: 1600931736637,
          category: 'BANK',
          realType: '一般账户',
          type: 'GENERAL',
          institution: '广东发展银行',
          organization: '中国光大银行',
          bankCode: 'zm测试0924银行',
          accountNo: 'zm测试0924银行',
          accountName: '上海骥达贸易有限公司',
          currency: 'CNY',
          amount: null,
          amountTime: null,
          owner: '上海骥达贸易有限公司',
          purpose: '123',
          operator: null,
          enableResolve: false,
          byname: 'zm测试0924银行',
          isDeleted: false,
          isCancelled: false,
          businessCategorys: null
        }
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
