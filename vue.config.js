const path = require('path')
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()
const AutoDllPlugin = require('autodll-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
function resolve (pathurl) {
  return path.resolve(__dirname, pathurl)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@HU', resolve('./.hu'))
  },
  css: {
    sourceMap: true
  },
  configureWebpack: config => {
    config.plugins.push(
      new AutoDllPlugin({
        inject: true,
        filename: '[name].js',
        entry: {
          vendor: ['vue', 'vue-router']
        }
      }),
      new HardSourceWebpackPlugin()
    )
  }
}
