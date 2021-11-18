const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {
  PATH_ROOT,
  PATH_SRC_ROOT,
  isProduction,
  getEntryOption,
  getHtmlWebpackPluginList,
  getThreadLoader,
  getCacheLoader,
  getBabelLoader,
  getLessLoader,
  getPostCssLoader,
  getImgUrlLoader,
  getFontUrlLoader
} = require('./webpack.option.config')

const webpackConfigBase = {
  entry: getEntryOption(),

  output: {
    path: resolve(PATH_ROOT, 'dist'), // path为打包后的输出文件夹位置，此处为 ./dist文件夹
    filename: 'js/[name].[contenthash:8].js', // 打包后的入口文件的文件名
    chunkFilename: 'chunks/[name].[contenthash:8].js' // 非入口文件的文件名, 如通过懒加载的文件
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ], // 代码中使用越多的后缀越靠前，可以提升匹配效率
    modules: [ 'node_modules', PATH_SRC_ROOT ]
  },

  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    // 内置的拆包API
    splitChunks: {
      chunks: 'all', // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
      minSize: 30000, // 模块超过30k自动被抽离成公共模块
      minChunks: 1, // 模块被引用>=1次，便分割
      name: false, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
      automaticNameDelimiter: '~', // 命名分隔符
      cacheGroups: {
        // default会将自定义代码部分默认打成一个包，即src里的js代码
        default: { // 模块缓存规则，设置为false，默认缓存组将禁用
          minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
          priority: -20, // 优先级，优先级越高则越先拆包，即对于同一个依赖包，该依赖包会优先被打包进优先级高的包里
          reuseExistingChunk: true // 默认使用已有的模块
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/, // 匹配的规则，可以为文件夹，也可以为具体的文件，如 指定文件夹/[\\/]node_modules[\\/]/,待指定后缀文件 /\.(css|less)$/,具体文件/base.less|index.less/
          name: 'vendor', // 此处的name,即为打包后包的name
          priority: -10, // 确定模块打入的优先级
          reuseExistingChunk: true, // 使用复用已经存在的模块
          enforce: true
        }
      }
    }
  },

  // module此处为loader区域，一般文件内容解析，处理放在此处，如babel，less,postcss转换等
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          getThreadLoader({ isProduction }),
          getCacheLoader(),
          getBabelLoader()
        ]
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // MiniCssExtractPlugin.loader 需要在css-loader之后解析
          },
          getCacheLoader(),
          'css-loader',
          getPostCssLoader(), // postcss需要放在css之前，其他语言(less、sass等)之后，进行解析
          getLessLoader()
        ]
      },
      // loader-image
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [ resolve(PATH_ROOT, 'public/images') ],
        use: getImgUrlLoader()
      },
      // loader-font
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        exclude: /node_modules/,
        use: getFontUrlLoader()
      }
    ]
  },

  plugins: [
    // 为项目生成一个可以访问的html文件，否则全是.js文件，没有访问的页面入口。默认为index.html,路径是基于根目录的相对路径
    ...getHtmlWebpackPluginList(),
    new MiniCssExtractPlugin({
      filename: isProduction ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
      chunkFilename: isProduction ? 'css/[name].[contenthash:8].css' : 'css/[name].css'
    })
  ]
}
module.exports = webpackConfigBase
