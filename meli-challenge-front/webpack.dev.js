const { ModuleFederationPlugin } = require('webpack').container;
const Dotenv = require('dotenv-webpack');

const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 2000,
    historyApiFallback: true,
    https: false,
    open: ['#/']
  },
    plugins:[
        new Dotenv({
            path: '.env.development'
        })
    ]
})