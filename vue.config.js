const path = require('path')
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()
// const AutoDllPlugin = require('autodll-webpack-plugin')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')

function resolve (pathurl) {
  return path.resolve(__dirname, pathurl)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@HU', resolve('./.hu'))
    config.module.rule('svg').exclude.add(resolve('src/svg')).end()
    config.module.rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      }).end()
    if (process.env.NODE_ENV !== 'development') {
      config.plugin('html').tap(args => {
        args[0].minify.removeComments = false
        return args
      })
    }
    // config.plugin('SkeletonPlugin').use(SkeletonPlugin, [
    //   {
    //     pathname: path.resolve(__dirname, './shell'), // the path to store shell file
    //     staticDir: path.resolve(__dirname, './dist'), // the same as the `output.path`
    //     routes: ['/']
    //   }
    // ])
  },
  css: {
    sourceMap: true
  }
  // configureWebpack: config => {
  //   config.plugins.push(
  //     new AutoDllPlugin({
  //       inject: true,
  //       filename: '[name].js',
  //       entry: {
  //         vendor: ['vue', 'vue-router']
  //       }
  //     }),
  //     new HardSourceWebpackPlugin()
  //   )
  // }
}
