const path = require('path')
function resolve (pathurl) {
  return path.resolve(__dirname, pathurl)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@HU', resolve('./.hu'))
  }
}
