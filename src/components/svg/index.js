import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'

// 作为全局组件使用
Vue.component('svg-icon', SvgIcon)

// 批量导出svg，使用svg需要import去加载才能使用
const req = require.context('../../svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// console.log('req', req)
