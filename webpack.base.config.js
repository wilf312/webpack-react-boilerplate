const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = function() {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['./main.js'],
      vendor: ['moment'],
    },
    output: {
      // the output bundle
      // filename: '[name].js?[chunkhash]', // 開発と本番で振り分け
      chunkFilename: '[name].chunk.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: 1,
                importLoaders: 1,
              },
            },
            'less-loader',
            'postcss-loader',
          ]
        },

        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
          ],
        },
      ]
    },
    plugins: [
      // moment.js ignore locale
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // HTML output settings
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      }),
      new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: false,
        allChunks: true,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: [
          'vendor',
          'manifest',
        ]
      }),
    ],
    resolve: {
      // js jsx は拡張子なしでimport OK
      extensions: ['.js', '.jsx'],
      // fallback: [path.join(__dirname, '../node_modules')],

      // ディレクトリへのalias設定
      // 例 import Hoge from 'cmpt/hoge'
      alias: {
        'src': path.resolve(__dirname, './src'),
        'cmpt': path.resolve(__dirname, './src/components'),
        'views': path.resolve(__dirname, './src/views'),
        'router': path.resolve(__dirname, './src/router'),
        'flux': path.resolve(__dirname, './src/flux'),
        // 'reduxDir': path.resolve(__dirname, './src/redux'),
      }
    },
    node: {
      __filename: true
    }
  }
}