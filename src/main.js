import runApp from '@HU/app/index'
import '@/plugins'
runApp().then(res => {
}).catch(err => {
  console.log('err', err)
})
