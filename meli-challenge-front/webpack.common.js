const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    target: 'web',
    entry: './src/index.tsx',
    output : {
        path: path.join(__dirname, 'build'),
        filename: 'index.[name].js'
    },
    plugins:[
        new CopyPlugin({
            patterns: [
                { from: "public/lib", to: "lib" }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                presets: [
                        "@babel/preset-react",
                        "@babel/preset-typescript"
                    ]
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg'],
        // resolve tsconfig module paths
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    }
}