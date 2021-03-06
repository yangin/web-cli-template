const { resolve } = require('path')
const { merge } = require('webpack-merge')

const webpackConfigBase = require('./webpack.base.config')
const { PATH_ROOT, getDevEntryOption } = require('./webpack.option.config')

const webpackConfigDev = {
  mode: 'development', // 设置为development模式
  target: [ 'web', 'es5' ], // 必须添加此配置，才能实现浏览器的实时刷新
  // devServer 为热更新服务，通过hot:true来启动
  devServer: {
    contentBase: resolve(PATH_ROOT, 'public'), // 当存在静态资源时，此项必须有。指向开发的静态资源目录，配合url-loader的outPath，匹配文件中的静态资源引用地址。
    hot: true,
    open: true, // 启动后是否在浏览器自动打开
    host: 'localhost',
    port: 8090,
    historyApiFallback: {
      rewrites: [
        ...getDevEntryOption(),
        { from: /./, to: '/app.html' } // 默认重定向
      ]
    }
    // compress: true, // enable gzip compression
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
