import KTable from './KTable.vue'
import KTableItem from './KTableItem.vue'

const componenes = {
  KTable,
  KTableItem
}

const opts = {
  KTable,
  KTableItem,
  install (Vue) {
    for (const key in componenes) {
      Vue.component(componenes[key].name, componenes[key])
    }
  }
}

// 如果是cdn引入，立马执行
if (typeof window !== 'undefined' && window.Vue) {
  opts.install(window.Vue)
}

// 不然就走es导出
export default opts
