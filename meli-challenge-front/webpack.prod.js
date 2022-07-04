const { ModuleFederationPlugin } = require('webpack').container;
const Dotenv = require('dotenv-webpack');

const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        https: false,
        open: true
    },
    plugins: [
        new Dotenv({
            path: '.env.production'
        })
    ]
})