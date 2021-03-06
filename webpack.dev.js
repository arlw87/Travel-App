const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {cleanWebpackPlugin, CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devServer: {
        port: 8090
    },
    module: {
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            //images
            {
                test: /\.jpg$/,
                type: 'asset/resource',
            },
            {
                test: /\.png$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    }
                }]
            }
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader','css-loader','sass-loader']
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: "./src/client/views/index.html",
                filename: './index.html'
            }
        ),
        new CleanWebpackPlugin({
            dry: true,
            Verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
