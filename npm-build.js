/**
 * 本番用途の設定
 * ベースのwebpackの設定をもってきて、
 * HTML, CSS, JSのビルドを行う
 */


const path = require('path')
const express = require('express')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base.config')

// gzip.js
const fs = require('fs')
const zlib = require('zlib')
const _ = require('lodash')

// ----------------- distの中身を削除
// const del = require('del')
// del(path.resolve(__dirname, 'dist') + '/*')



// ----------------- 設定マージ

var config = merge(webpackConfig(), {
  output: {
    // the output bundle
    filename: '[name].js?[chunkhash]', // 開発と本番で振り分け
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
})

const validate = require('webpack-validator').validateRoot


// ----------------- サーバ立ち上げ

const app = express()
const compiler = webpack(config)

// console.log(config.plugins)

// GZip生成関数
function createGZip(fileName) {
  var content = fs.readFileSync(`./dist/${fileName}`)
  // Gzipを行います
  zlib.gzip(content, function (err, binary) {

    // 結果をファイルシステムに書き込みます
    fs.writeFile(`./dist/${fileName}.gz`, binary, (err) => {
      if (err) throw err
    })

  })
}




compiler.watch({ // watch options:
  aggregateTimeout: 1000, // wait so long for more changes
  poll: true // use polling instead of native watchers
  // pass a number to set the polling interval
}, function(err, stats) {
  console.log('err', err)
  // console.log('stats', stats.toJson('minimal'))
  console.log('stats', stats.toString({
            chunks: false, // Makes the build much quieter
            colors: true
        }))



  const logBuildJSON = stats.toJson('normal')
  fs.writeFileSync(`./log-build.json`, JSON.stringify(logBuildJSON))






  // ----------------- GZipの生成
  const dist  = fs.readdirSync('./dist')
  const filtered = _.filter(dist, function(o) {
    var regexp = /\.(css$|js$|html$)/g;
    const result = !!o.match(regexp)
    return result
  })

  console.log('filtered -> ', filtered);

  _.forEach(filtered, function(value) {
    createGZip(value)
  })

})
